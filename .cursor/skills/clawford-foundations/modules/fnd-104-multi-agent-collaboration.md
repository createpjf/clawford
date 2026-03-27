# FND-104: Multi-Agent Collaboration

## Learning Objective

The learner can design a multi-agent workflow with at least three distinct roles for medium-complexity tasks, define compact handoff contracts, and avoid common coordination anti-patterns.

## Why This Matters

A single agent doing research, implementation, and verification simultaneously is prone to rubber-stamping its own work. Role separation creates fault isolation: the researcher is not biased by implementation momentum, and the verifier is not tempted to approve its own code.

## Anti-Pattern Gallery

- One mega-agent pretending to research, build, and verify at the same time.
- Agents chatting without structured output or clear deliverables.
- Adding more agents to a task that is actually simple.
- Builder and verifier sharing the same unchecked assumptions.
- Infinite loops between agents with no stop condition.
- Dumping entire raw context in every handoff.

## Core Rules

### Rule 1: Default Triangle

For medium-complexity work, start with three roles:

| Role | Responsibility |
|---|---|
| Researcher | Gathers context, identifies constraints, returns structured findings |
| Builder | Implements the solution within agreed scope, reports assumptions |
| Verifier | Independently checks the builder's output, runs tests, looks for regressions |

### Rule 2: Optional Extensions

Add roles only when the task demands it:
- **Reviewer**: design or code quality review.
- **Deployer**: release and environment checks.
- **Scribe**: summarizing findings into durable notes.

### Rule 3: Handoff Contract

Every handoff must include:
- Task objective.
- Relevant constraints.
- Evidence gathered so far.
- Open questions.
- Expected output format.

Keep handoffs compact. Do not dump all raw context unless necessary.

### Rule 4: Stop Conditions

Set clear stop conditions for the multi-agent workflow:
- All acceptance checks passed.
- Verifier found no blocking issue.
- User requested a checkpoint.
- A blocker requires replanning.

### Rule 5: When Not To Use Multi-Agent

Do not use multiple agents when:
- The task is genuinely simple (one file, one change, obvious verification).
- Adding agents would create more coordination overhead than risk reduction.
- The task is time-critical and the overhead of handoffs exceeds the benefit.

## Worked Example

**Task**: Update a website, add a new project skill, and prepare the repo for Vercel deployment.

**Agent Assignment**:

| Agent | Receives | Returns |
|---|---|---|
| Researcher | Task description, repo path | File inventory, current deploy config, gap analysis |
| Builder | Researcher findings, task spec | Code changes, new skill files, updated config |
| Verifier | Builder output, researcher constraints | Test results, build output, deploy preview status, blocking issues |

**Handoff from Researcher to Builder**:
```
Objective: Update site + add skill + prep Vercel deploy
Constraints: Must pass existing CI, keep bilingual support
Files found: src/App.tsx, vercel.json, .cursor/skills/...
Gaps: No Vercel framework preset in vercel.json
Open questions: Should the new skill be project-scoped or global?
Expected output: Working code changes with passing build
```

## Practice Drill

Design a 3+ agent workflow for this task:

> "Refactor the authentication module to use JWT instead of sessions, update all API endpoints, and ensure backward compatibility for existing clients."

Specify:
1. Each agent's role and why it exists.
2. What each agent receives as input.
3. What each agent returns.
4. How final verification happens.
5. What the stop conditions are.

## Reflection Prompt

After completing a multi-agent task, ask:
- Did each agent have a clear, non-overlapping role?
- Were handoffs compact and structured?
- Did the verifier check independently, or just echo the builder?
- Would fewer agents have been sufficient?

## Remediation Path

If the learner fails this module:
- Review the default triangle pattern with a simple example.
- Have the learner identify the anti-pattern in a bad execution trace.
- Re-test: give a medium-complexity task and require explicit role assignments with justification.

## Pass Signal

The learner can assign 3+ agent roles to a realistic task, explain why each role exists, and describe compact structured handoffs with stop conditions.
