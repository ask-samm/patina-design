---
description: Run the 8-point project review framework
globs: REVIEW.md
---

# Project Review

Run the 8-point review framework against this project when marking it as done.

## Quick Run

```bash
claude -p "Review this project using ~/shared-ai-context/review-framework.md. Project: ~/Developer/Projects/patina-design. Brief: ~/Developer/Projects/patina-design/briefs/phase-1.md" --dangerously-skip-permissions
```

## What It Does

1. Reads all source files and runs the project
2. Scores 8 dimensions: Correctness, Reliability, Security, Maintainability, Operability, Testing, Documentation, LLM Quality
3. Fixes RED (blocking) and AMBER (minor) issues
4. Writes scorecard to REVIEW.md
5. Commits changes

## Dimensions

1. **Correctness** — Does it match the brief?
2. **Reliability** — Handles failures gracefully?
3. **Security** — No leaked secrets, injection risks?
4. **Maintainability** — Readable and modifiable in 6 months?
5. **Operability** — Logging, health checks, deployment docs?
6. **Testing** — Critical path verified?
7. **Documentation** — Someone can run it without asking?
8. **LLM Quality** — No hallucinated APIs, silent catches, over-abstraction?

See `~/shared-ai-context/review-framework.md` for full checklist.
