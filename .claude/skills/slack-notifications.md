---
description: Slack notification patterns for this project
globs: slack-notify.mjs,.slack-channel
---

# Slack Notifications

Channel ID auto-resolved from `.slack-channel` file in project root.

```bash
# Phase complete (with approval buttons):
source ~/.zshrc && node slack-notify.mjs --message "patina-design Phase N complete." --buttons "Approve,Redo"

# Blocked (with options):
source ~/.zshrc && node slack-notify.mjs --message "patina-design blocked: [reason]" --buttons "Option A,Option B"

# Plain notification:
source ~/.zshrc && node slack-notify.mjs --message "patina-design: [info]"
```

Options: `--timeout 300` (seconds), `--output path` (response JSON), `--channel ID` (override).
