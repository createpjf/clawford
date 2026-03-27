# FND-102: Memory And Lessons Hygiene

## Learning Objective

The learner can classify any piece of information into one of four buckets (working context, memory, lesson, discard) and only persist knowledge that is stable, evidence-backed, and useful for future tasks.

## Why This Matters

Agents that treat every observation as worth remembering end up with noisy, contradictory knowledge bases. Agents that never persist anything lose hard-won insights between sessions. This module teaches the discipline of managed persistence.

## Anti-Pattern Gallery

- Saving every shell output as a memory.
- Writing lessons based on confidence ("I think this works") instead of evidence.
- Leaving contradictory lessons unresolved.
- Copying entire conversation histories into durable storage.
- Never persisting anything, losing useful patterns between tasks.
- Persisting temporary implementation details that will expire immediately.

## Core Rules

### Rule 1: Four Buckets

Every piece of information belongs in one bucket:

| Bucket | Duration | Criteria | Example |
|---|---|---|---|
| Working context | This task only | Needed right now, disposable after | Current file contents being edited |
| Memory | Durable | Stable fact useful for future tasks | "This repo uses pnpm, not npm" |
| Lesson | Durable | Reusable operational rule with evidence | "Always run typecheck after modifying shared types" |
| Discard | None | Noise, speculation, or stale info | One-off error message already resolved |

### Rule 2: Evidence Gate For Lessons

A lesson requires at least one of:
- A test or linter proved it.
- Logs or runtime behavior proved it.
- The user explicitly corrected a recurring mistake.
- Repeated success showed the pattern is reliable.

If you cannot cite evidence, keep it out of lessons.

### Rule 3: Supersession

When new evidence contradicts an old lesson:
1. Mark the old lesson as outdated.
2. Write the new lesson with the new evidence.
3. Never carry both as equally valid.

### Rule 4: Decision Checklist

Before writing durable knowledge, ask:
1. Will this likely help on a future task?
2. Is it stable enough to survive beyond this task?
3. Can I justify it with evidence?
4. Is it better as a memory, a lesson, or neither?

If any answer is weak, do not persist it yet.

## Worked Example

After completing a deployment task, the agent considers persisting these items:

1. "The user prefers concise answers." → **Memory** (stable user preference, directly observed).
2. "The build failed because of a missing env var." → **Discard** (one-off incident, already resolved).
3. "When deploying to Vercel, always check that `vercel.json` matches the framework preset." → **Lesson** (evidence: a failed deploy was traced to this mismatch).
4. "I spent 20 minutes on this task." → **Discard** (not useful for future work).

## Practice Drill

Classify each item as memory, lesson, both, or discard. Explain why.

1. "This repository stores shared skills in `.cursor/skills/`."
2. "A failing preview build was fixed by removing an unused import."
3. "I think the user probably wants dark mode."
4. "After a user correction, record the mistake pattern to prevent recurrence."
5. "The current branch is `feature/auth`."

## Reflection Prompt

After completing a task, ask:
- Did I write any lesson without citing evidence?
- Did I persist anything that will expire before my next task?
- Are there contradictions between my old and new lessons?

## Remediation Path

If the learner fails this module:
- Review the four-bucket model with three fresh examples.
- Have the learner classify 10 items from a real task trace.
- Check specifically for the evidence-gate rule: does the learner cite proof for every lesson?

## Pass Signal

The learner correctly classifies examples as memory, lesson, both, or neither, and can cite the evidence rule from memory.
