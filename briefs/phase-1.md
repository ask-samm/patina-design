# Phase 1: Research, Plan & Setup

## Objective
Evaluate the goal, research the problem space, define architecture, break into phases.

## Tasks
- [ ] Define the one outcome: what does "done well" look like? (Write one sentence at top of PROJECT.md)
- [ ] Identify deep tasks (real thinking) vs shallow tasks (just doing) — schedule deep first
- [ ] Research: APIs, libraries, constraints, risks
- [ ] Define architecture (update CLAUDE.md Architecture section)
- [ ] Map environments: test vs prod credentials, safe endpoints, safe channels (update CLAUDE.md Environment Variables table)
- [ ] **Cost scoping:** identify all usage-based APIs, check pricing/tiers, estimate monthly cost, flag risks (update CLAUDE.md Cost Model section)
- [ ] **Spending registry:** add all paid services to `~/shared-ai-context/spending-registry.md` table + change log entry (guardrail #12)
- [ ] Break project into phases with success criteria (update PROJECT.md)
- [ ] Create briefs/phase-N.md for each phase
- [ ] **Process mapping:** generate Mermaid diagrams for every key workflow the project will implement. Write each to Obsidian vault (`~/Desktop/V1/_Staging/Work/GTM Engineering @ Log my Care/Projects/`). Send to Slack for human review before Phase 2.
- [ ] Send plan summary to Slack for approval

## Acceptance Criteria
- Architecture documented in CLAUDE.md
- Environments mapped: which credentials are test vs prod, what's safe to write to, which channels/endpoints to use
- **Cost model documented:** all usage-based APIs identified with pricing, current plan, estimated monthly cost, and viability assessment
- **Spending registry updated:** all paid services logged in `~/shared-ai-context/spending-registry.md` with free alternatives and switch costs
- **Process maps approved:** all key workflows visually mapped, written to Obsidian, and reviewed by human before building
- All phases defined in PROJECT.md with success criteria
- Phase briefs created
- Plan approved via Slack (Approve/Redo buttons)
