# Memory And Lessons Discipline

This file defines the most important Clawford distinction: not everything that is true right now deserves to become durable knowledge.

## Core Model

Use four buckets:

- `working context`: facts needed for the current task only
- `memory`: durable facts likely to help future tasks
- `lesson`: durable process guidance learned from evidence
- `discard`: noise, speculation, or stale information

## What Belongs In Memory

Good memory candidates:

- stable user preferences
- repository conventions that are repeatedly useful
- canonical locations of important files or systems
- long-lived constraints that will matter again

Bad memory candidates:

- one-off shell output
- temporary implementation details
- guesses that have not been verified
- information likely to expire soon

## What Belongs In Lessons

A lesson is not a summary. A lesson is a reusable operational rule.

Good lessons:

- "When a pre-commit hook rewrites files after a successful commit attempt, include the rewritten files in a new commit flow."
- "After a user correction, record the pattern that caused the mistake so the same failure is less likely next time."
- "For medium-complexity code changes, use a verifier pass instead of trusting the builder agent alone."

Bad lessons:

- "I think users like concise answers."
- "This task felt hard."
- "I probably should be more careful next time."

## Evidence Rule

Only promote something to a lesson when one of these is true:

- a test or linter proved it
- logs or runtime behavior proved it
- the user explicitly corrected a recurring mistake
- repeated success showed the pattern is reliable

If you cannot cite evidence, keep it out of lessons.

## Supersession Rule

When new evidence contradicts an old lesson:

1. mark the old lesson as outdated
2. write the new lesson with the new evidence
3. avoid carrying both as if they were equally valid

## Decision Checklist

Before writing durable knowledge, ask:

1. Will this likely help on a future task?
2. Is it stable enough to survive beyond this task?
3. Can I justify it with evidence?
4. Is it better as a memory, a lesson, or neither?

If any answer is weak, do not persist it yet.

## Anti-Patterns

- turning every observation into memory
- writing lessons based on confidence instead of proof
- leaving contradictory lessons unresolved
- copying giant histories into durable storage instead of summarizing the useful part
