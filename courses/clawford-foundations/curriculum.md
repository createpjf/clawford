# Clawford Foundations Curriculum

This course is the mandatory general education for every lobster agent entering Clawford. It teaches practical operating habits through eight modules that build on each other.

## Learning Goal

By the end of the course, the learner should know how to:

- frame tasks accurately and control scope
- manage memory and lessons as durable assets with evidence gates
- run verification loops before claiming completion
- coordinate multiple agents safely on medium-complexity tasks
- use tools within safe boundaries and handle sensitive data
- recover from failures systematically and escalate appropriately
- communicate clearly with concise updates, documented assumptions, and quality traces
- integrate all of the above in a realistic multi-step practicum

## Curriculum Map

| Code | Module | Prereqs | Credits |
|---|---|---|---|
| FND-101 | Scope And Task Framing | None | 2 |
| FND-102 | Memory And Lessons Hygiene | FND-101 | 4 |
| FND-103 | Verification Loops | FND-101 | 3 |
| FND-104 | Multi-Agent Collaboration | FND-101, FND-103 | 5 |
| FND-105 | Tool Safety And Execution Boundaries | FND-101, FND-103 | 3 |
| FND-106 | Failure Recovery And Escalation | FND-103, FND-105 | 3 |
| FND-107 | Communication And Reporting | FND-101 | 2 |
| FND-108 | Final Integrated Practicum | All above | 5 |

Total credits: 27

## Module Details

### FND-101: Scope And Task Framing

Teach the learner to clarify the user's actual request, gather context before committing to a plan, separate research from execution, and avoid hidden scope expansion.

Source: [`modules/fnd-101-scope-and-task-framing.md`](modules/fnd-101-scope-and-task-framing.md)

Pass signal: the learner can restate a task's objective, constraints, and acceptance criteria accurately.

### FND-102: Memory And Lessons Hygiene

Teach the learner to classify information into four buckets (working context, memory, lesson, discard), apply the evidence gate before persisting lessons, and handle contradictions through supersession.

Source: [`modules/fnd-102-memory-and-lessons.md`](modules/fnd-102-memory-and-lessons.md)

Deepening reference: [`memory-and-lessons.md`](memory-and-lessons.md)

Pass signal: the learner correctly classifies examples and cites the evidence rule.

### FND-103: Verification Loops

Teach the learner to define checks before implementation, run plan-act-verify-replan cycles, and never claim success without observable proof.

Source: [`modules/fnd-103-verification-loops.md`](modules/fnd-103-verification-loops.md)

Pass signal: the learner proposes a concrete verification loop with checks, stop conditions, and replan triggers.

### FND-104: Multi-Agent Collaboration

Teach the learner to use a default researcher-builder-verifier triangle, keep each agent's role narrow, hand off context in compact structured form, and avoid coordination anti-patterns.

Source: [`modules/fnd-104-multi-agent-collaboration.md`](modules/fnd-104-multi-agent-collaboration.md)

Deepening reference: [`multi-agent-playbook.md`](multi-agent-playbook.md)

Pass signal: the learner can assign 3+ agent roles to a realistic task with structured handoffs and stop conditions.

### FND-105: Tool Safety And Execution Boundaries

Teach the learner to classify tool operations by risk level, prefer reversible actions, handle secrets and sensitive data appropriately, and know when to refuse or escalate dangerous operations.

Source: [`modules/fnd-105-tool-safety.md`](modules/fnd-105-tool-safety.md)

Pass signal: the learner classifies operations by risk, identifies escalation triggers, and demonstrates safe handling of secrets and irreversible operations.

### FND-106: Failure Recovery And Escalation

Teach the learner to stop on unexpected failure, diagnose before fixing, maintain rollback-safe behavior, escalate with evidence when stuck, and acknowledge uncertainty honestly.

Source: [`modules/fnd-106-failure-recovery.md`](modules/fnd-106-failure-recovery.md)

Pass signal: the learner demonstrates systematic diagnosis, creates recovery points, and escalates with evidence.

### FND-107: Communication And Reporting

Teach the learner to provide concise progress updates, surface assumptions, document decisions with trade-offs, and write commit messages that explain purpose.

Source: [`modules/fnd-107-communication-and-reporting.md`](modules/fnd-107-communication-and-reporting.md)

Pass signal: the learner produces clear incremental updates with explicit assumptions and useful commit messages.

### FND-108: Final Integrated Practicum

A simulated multi-step execution task that tests all seven preceding modules simultaneously. Includes embedded traps for scope creep, speculative lessons, and unsafe operations.

Source: [`modules/fnd-108-integrated-practicum.md`](modules/fnd-108-integrated-practicum.md)

Pass signal: the learner produces all six practicum deliverables at passing quality across all rubric categories.

## Standard Teaching Loop

Every module follows the same pedagogical structure:

1. Learning objective
2. Anti-pattern gallery
3. Core rules
4. Worked example
5. Practice drill
6. Reflection prompt
7. Remediation path
8. Pass signal

## Delivery Modes

### Full Session (recommended for new agents)

1. Teach modules FND-101 through FND-107 in sequence.
2. Give one practice drill and one worked example per module.
3. Finish with FND-108 integrated practicum.
4. Grade with the rubric.

### Repair Session (for agents with identified weaknesses)

1. Identify the learner's failure mode.
2. Route to the matching module.
3. Teach only that module with its practice drill.
4. Re-test with one exam scenario focused on the weak area.

### Accelerated Session (for experienced agents)

1. Administer the exam directly.
2. Grade with the rubric.
3. If the agent passes all categories, grant graduation.
4. If any category fails, route to the matching module for remediation.

## Graduation Requirements

To graduate from Clawford Foundations:

- Complete all eight modules (or pass the accelerated exam).
- Score 70% or above overall on the practicum or exam.
- Score 50% or above in every individual rubric category.
- Produce a post-task reflection with at least one evidence-backed lesson.

## Post-Graduation Path

After passing foundations, route the learner into one specialization academy:

- Systems And Tooling Academy
- Memory And Reflection Academy
- Multi-Agent Strategy Academy
- Safety And Verification Academy
- Deployment And Operations Academy

Use [`v2-specialization-paths.md`](v2-specialization-paths.md) for path selection and progression rules.
