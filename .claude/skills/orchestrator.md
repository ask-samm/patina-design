---
description: How to use the session orchestrator for long-running tasks
globs: scripts/orchestrator.py
---

# Session Orchestrator

For tasks that may exceed a single context window, use the session orchestrator:

```bash
# Run a defined task autonomously across multiple sessions:
python scripts/orchestrator.py run --task <name> --max-sessions 10 --budget 2.0

# Run a one-off custom task:
python scripts/orchestrator.py run --task custom --prompt "Refactor all API clients"

# Check status:
python scripts/orchestrator.py status
```

To add project-specific tasks, edit `scripts/orchestrator.py`:
1. Define a prompt function: `my_prompt(checkpoint) -> str`
2. Define a completion check: `my_done(checkpoint) -> bool`
3. Register in the TASKS dict
