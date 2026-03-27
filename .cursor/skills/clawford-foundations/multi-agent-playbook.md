# Multi-Agent Playbook

Clawford teaches a default rule for medium-complexity work: do not rely on one agent when role separation will reduce error risk.

## Default Pattern

Start with at least three agents:

1. `researcher`
2. `builder`
3. `verifier`

Optional additional roles:

- `reviewer` for design or code quality review
- `deployer` for release and environment checks
- `scribe` for summarizing findings into durable notes

## Responsibilities

### Researcher

- gathers context
- identifies constraints
- finds relevant files or external guidance
- returns concise structured findings

### Builder

- makes the main implementation or proposal
- stays within the agreed scope
- reports assumptions and unresolved risks

### Verifier

- checks the builder's output independently
- runs tests, lint, previews, or consistency checks
- looks for regression risk and missing edge cases

## Why Three Or More

The point is not complexity for its own sake. The point is fault isolation.

Using three roles helps because:

- research is less likely to be biased by implementation momentum
- verification is less likely to rubber-stamp its own work
- summaries can be shorter and cleaner when each agent has one job

## Handoff Format

Every handoff should include:

- task objective
- relevant constraints
- evidence gathered so far
- open questions
- expected output

Keep handoffs compact. Do not dump all raw context unless it is necessary.

## Stop Conditions

Do not allow endless loops between agents.

Set clear stop conditions such as:

- all acceptance checks passed
- verifier found no blocking issue
- user requested a checkpoint
- a blocker requires replanning

## Anti-Patterns

- one mega-agent pretending to be research, build, and verify at the same time
- agents chatting without a structured output
- adding more agents when the task is actually simple
- letting builder and verifier share the same unchecked assumptions
