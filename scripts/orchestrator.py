#!/usr/bin/env python3
"""
Claude Code Session Orchestrator

Spawns and manages autonomous Claude Code CLI sessions with:
- Budget-capped sessions (proxy for context limits)
- Automatic continuation from checkpoint files
- Slack notifications for decisions/completion
- Full session history logging

Usage:
    python scripts/orchestrator.py run --task <name> [--max-sessions 10] [--budget 2.0]
    python scripts/orchestrator.py run --task custom --prompt "Do the thing"
    python scripts/orchestrator.py status

How it works:
    This script runs OUTSIDE Claude Code (not inside a session).
    It spawns `claude -p` subprocesses, each with a budget cap.
    When one session exhausts its budget or completes a batch,
    the orchestrator reads the checkpoint and spawns the next session.

    [orchestrator.py] --> [claude -p session 1] --> checkpoint.json
                      --> [claude -p session 2] --> checkpoint.json
                      ...until task complete or max_sessions reached

Add your own tasks:
    1. Define a prompt function: my_prompt(checkpoint) -> str
    2. Define a completion check: my_done(checkpoint) -> bool
    3. Register in TASKS dict at the bottom of this file
"""

from __future__ import annotations

import argparse
import json
import os
import subprocess
import sys
import time
import uuid
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

PROJECT_DIR = Path(__file__).resolve().parent.parent
ORCHESTRATOR_STATE = PROJECT_DIR / "orchestrator_state.json"
ORCHESTRATOR_LOG = PROJECT_DIR / "orchestrator.log"
SESSION_OUTPUT_DIR = PROJECT_DIR / "session_outputs"

DEFAULT_BUDGET_PER_SESSION = 2.00  # USD — proxy for context window limits
DEFAULT_MAX_SESSIONS = 10
POLL_INTERVAL = 10  # seconds between status checks
SESSION_TIMEOUT = 3600  # 60 minutes max per session

SLACK_NOTIFY = "source ~/.zshrc && node slack-notify.mjs"


def find_claude_binary():
    """Auto-detect Claude Code CLI binary."""
    base = Path.home() / "Library/Application Support/Claude/claude-code"
    if base.exists():
        for v in sorted(base.iterdir(), reverse=True):
            binary = v / "claude"
            if binary.exists():
                return binary
    result = subprocess.run(["which", "claude"], capture_output=True, text=True)
    if result.returncode == 0:
        return Path(result.stdout.strip())
    print("Error: Could not find Claude Code binary.")
    sys.exit(1)


CLAUDE_BINARY = find_claude_binary()


# ---------------------------------------------------------------------------
# === YOUR TASK DEFINITIONS GO HERE ===
# ---------------------------------------------------------------------------

# Example task: uncomment and modify for your use case
#
# def example_prompt(checkpoint):
#     if checkpoint:
#         return f"Continue from {checkpoint.get('last_step')}. Read checkpoint.json."
#     return "Start the task. Read CLAUDE.md first."
#
# def example_done(checkpoint):
#     if not checkpoint:
#         return False
#     return checkpoint.get("status") == "complete"


# ---------------------------------------------------------------------------
# Task Registry — add your tasks here
# ---------------------------------------------------------------------------

TASKS = {
    # "example": {
    #     "description": "Example task",
    #     "checkpoint_file": PROJECT_DIR / "checkpoint.json",
    #     "prompt_template": example_prompt,
    #     "completion_check": example_done,
    # },
}


# ---------------------------------------------------------------------------
# Core (no need to modify below this line)
# ---------------------------------------------------------------------------

def log(message):
    timestamp = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")
    line = f"[{timestamp}] {message}"
    print(line)
    with open(ORCHESTRATOR_LOG, "a") as f:
        f.write(line + "\n")


def load_state():
    if ORCHESTRATOR_STATE.exists():
        return json.loads(ORCHESTRATOR_STATE.read_text())
    return {"sessions": [], "current_task": None, "started_at": None}


def save_state(state):
    ORCHESTRATOR_STATE.write_text(json.dumps(state, indent=2, default=str))


def notify_slack(message, buttons=None):
    escaped = message.replace('"', '\\"')
    cmd = f'{SLACK_NOTIFY} --message "{escaped}"'
    if buttons:
        cmd += f' --buttons "{",".join(buttons)}"'
    try:
        subprocess.run(cmd, shell=True, cwd=PROJECT_DIR, timeout=30, capture_output=True)
        log(f"Slack: {message}")
    except Exception as e:
        log(f"Slack failed: {e}")


def spawn_session(prompt, budget_usd=DEFAULT_BUDGET_PER_SESSION, resume_id=None):
    SESSION_OUTPUT_DIR.mkdir(exist_ok=True)
    session_id = resume_id or str(uuid.uuid4())
    output_file = SESSION_OUTPUT_DIR / f"{session_id}.json"

    cmd = [
        str(CLAUDE_BINARY), "-p", prompt,
        "--output-format", "json",
        "--max-budget-usd", str(budget_usd),
        "--dangerously-skip-permissions",
    ]
    if resume_id:
        cmd.extend(["--resume", resume_id])

    env = os.environ.copy()
    env.pop("CLAUDECODE", None)

    log(f"Spawning session {session_id[:8]}... (budget: ${budget_usd})")
    out_handle = open(output_file, "w")
    proc = subprocess.Popen(
        cmd, stdout=out_handle, stderr=subprocess.PIPE, cwd=PROJECT_DIR, env=env,
    )
    return {
        "id": session_id, "pid": proc.pid, "_process": proc, "_out_handle": out_handle,
        "output_file": str(output_file), "started_at": datetime.now(timezone.utc).isoformat(),
        "budget_usd": budget_usd, "status": "running",
    }


def wait_for_session(session):
    proc = session["_process"]
    output_file = Path(session["output_file"])
    start = time.time()

    while proc.poll() is None:
        elapsed = time.time() - start
        if elapsed > SESSION_TIMEOUT:
            log(f"Session {session['id'][:8]} timed out ({SESSION_TIMEOUT}s)")
            proc.terminate()
            proc.wait(timeout=10)
            session["status"] = "timeout"
            session["_out_handle"].close()
            return session
        if int(elapsed) > 0 and int(elapsed) % 60 < POLL_INTERVAL:
            size_kb = output_file.stat().st_size / 1024 if output_file.exists() else 0
            log(f"  ...running ({int(elapsed)}s, {size_kb:.0f}KB output)")
        time.sleep(POLL_INTERVAL)

    session["_out_handle"].close()
    session["exit_code"] = proc.returncode
    session["finished_at"] = datetime.now(timezone.utc).isoformat()

    stderr = proc.stderr.read().decode("utf-8", errors="replace").strip()
    if stderr:
        session["stderr"] = stderr[:2000]

    if output_file.exists() and output_file.stat().st_size > 0:
        raw = output_file.read_text().strip()
        try:
            result = json.loads(raw)
            session["result"] = result
            session["session_id_from_cli"] = result.get("session_id")
            session["status"] = "complete" if proc.returncode == 0 else "error"
        except json.JSONDecodeError:
            session["status"] = "complete" if proc.returncode == 0 else "error"
            session["result_text"] = raw[:2000]
    else:
        session["status"] = "error"
        session["error"] = stderr or "No output"

    duration = ""
    if session.get("started_at") and session.get("finished_at"):
        s = datetime.fromisoformat(session["started_at"])
        e = datetime.fromisoformat(session["finished_at"])
        duration = f" in {(e - s).seconds}s"
    log(f"Session {session['id'][:8]} -> {session['status']}{duration} (exit={proc.returncode})")
    return session


def run_task(task_name, max_sessions, budget, custom_prompt):
    if task_name == "custom":
        if not custom_prompt:
            print("Error: --prompt required for --task custom")
            sys.exit(1)
        task_config = {
            "description": "Custom task",
            "checkpoint_file": None,
            "prompt_template": lambda _: custom_prompt,
            "completion_check": lambda _: False,
        }
    elif task_name in TASKS:
        task_config = TASKS[task_name]
    else:
        available = ", ".join(TASKS.keys()) if TASKS else "(none defined)"
        print(f"Unknown task: {task_name}. Available: {available}, custom")
        sys.exit(1)

    state = load_state()
    state["current_task"] = task_name
    state["started_at"] = state["started_at"] or datetime.now(timezone.utc).isoformat()

    project_name = PROJECT_DIR.name
    log(f"\n{'#'*60}")
    log(f"ORCHESTRATOR: {task_config['description']}")
    log(f"Max sessions: {max_sessions}, Budget/session: ${budget}")
    log(f"{'#'*60}")

    notify_slack(f"{project_name}: Starting '{task_config['description']}' — up to {max_sessions} sessions")

    for session_num in range(1, max_sessions + 1):
        log(f"\n{'='*40} SESSION {session_num}/{max_sessions} {'='*40}")

        checkpoint = None
        cp_file = task_config.get("checkpoint_file")
        if cp_file and Path(cp_file).exists():
            checkpoint = json.loads(Path(cp_file).read_text())
            log(f"Checkpoint: {json.dumps(checkpoint, indent=2)}")

        if task_config["completion_check"](checkpoint):
            log("TASK COMPLETE!")
            notify_slack(
                f"{project_name}: '{task_config['description']}' finished after {session_num - 1} sessions!",
                buttons=["Acknowledge"],
            )
            break

        prompt = task_config["prompt_template"](checkpoint)
        session = spawn_session(prompt, budget_usd=budget)

        record = {k: v for k, v in session.items() if not k.startswith("_")}
        state["sessions"].append(record)
        save_state(state)

        session = wait_for_session(session)
        state["sessions"][-1].update(
            {k: v for k, v in session.items() if not k.startswith("_")}
        )
        save_state(state)

        status = session["status"]

        if status == "complete":
            if cp_file and Path(cp_file).exists():
                checkpoint = json.loads(Path(cp_file).read_text())
                if task_config["completion_check"](checkpoint):
                    log("TASK COMPLETE after this session!")
                    notify_slack(
                        f"{project_name}: '{task_config['description']}' complete! {session_num} sessions used.",
                        buttons=["Acknowledge"],
                    )
                    break
            log("Session completed a batch. Spawning next...")
            time.sleep(5)
            continue

        elif status == "timeout":
            log("Timed out — auto-continuing")
            notify_slack(f"{project_name}: Session {session_num} timed out. Auto-continuing.")
            time.sleep(5)
            continue

        elif status == "error":
            error_msg = session.get("error", session.get("stderr", "Unknown"))[:200]
            log(f"ERROR: {error_msg}")
            notify_slack(
                f"{project_name}: Session {session_num} error: {error_msg}",
                buttons=["Retry", "Abort"],
            )
            print(f"\nSession errored. Output: {session['output_file']}")
            break
    else:
        log(f"Reached max sessions ({max_sessions})")
        notify_slack(
            f"{project_name}: Hit {max_sessions} session limit.",
            buttons=["Continue", "Done"],
        )

    log(f"\nTotal sessions: {len(state['sessions'])}")
    save_state(state)


def show_status():
    state = load_state()
    if not state["sessions"]:
        print("No sessions recorded yet.")
        return
    print(f"Task: {state.get('current_task', 'none')}")
    print(f"Started: {state.get('started_at', 'never')}")
    print(f"Sessions: {len(state['sessions'])}\n")
    for i, s in enumerate(state["sessions"], 1):
        sid = s.get("id", "?")[:8]
        print(f"  [{i}] {sid}  {s.get('status', '?')}  exit={s.get('exit_code', '?')}  ${s.get('budget_usd', '?')}")


def main():
    parser = argparse.ArgumentParser(description="Claude Code Session Orchestrator")
    sub = parser.add_subparsers(dest="command")

    run_p = sub.add_parser("run", help="Run a task with auto-continuation")
    run_p.add_argument("--task", required=True, help="Task name or 'custom'")
    run_p.add_argument("--prompt", help="Prompt for --task custom")
    run_p.add_argument("--max-sessions", type=int, default=DEFAULT_MAX_SESSIONS)
    run_p.add_argument("--budget", type=float, default=DEFAULT_BUDGET_PER_SESSION)

    sub.add_parser("status", help="Show orchestration status")

    args = parser.parse_args()
    if args.command == "run":
        run_task(args.task, args.max_sessions, args.budget, getattr(args, "prompt", None))
    elif args.command == "status":
        show_status()
    else:
        parser.print_help()


if __name__ == "__main__":
    main()
