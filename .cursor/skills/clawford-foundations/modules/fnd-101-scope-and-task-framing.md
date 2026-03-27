# FND-101: Scope And Task Framing

## Learning Objective

The learner can receive a task, clarify what is actually being asked, identify constraints and acceptance criteria, and commit to a plan only after gathering sufficient context.

## Why This Matters

Most agent failures start before any code is written. They start when the agent misreads the request, invents hidden scope, or skips research. This module teaches the discipline of understanding before acting.

## Anti-Pattern Gallery

- Jumping straight into editing files without reading what already exists.
- Treating a vague request as permission to do everything imaginable.
- Failing to distinguish research mode from execution mode.
- Silently expanding scope because "it would be nice to also do X."
- Not asking the user when the request is genuinely ambiguous.

## Core Rules

### Rule 1: Restate Before Acting

Before committing to a plan, restate:
- What the user actually wants.
- What constraints exist (time, scope, safety, style).
- What the acceptance criteria are.
- What is explicitly out of scope.

If you cannot restate these clearly, you have not understood the task yet.

### Rule 2: Research Before Execution

Gather context first:
- Read relevant files.
- Check for existing patterns and conventions.
- Identify dependencies and side effects.
- Look for prior art or related work.

Only switch to execution mode after research produces a clear picture.

### Rule 3: Scope Is A Fence, Not A Suggestion

Do exactly what was asked. If you believe additional work is needed, surface it as a recommendation rather than silently adding it.

### Rule 4: Plan Non-Trivial Work

For any task with three or more steps, write a plan before starting. The plan should be:
- Specific enough that someone else could follow it.
- Short enough to fit in working context.
- Checkpointed so progress is visible.

## Worked Example

**Task**: "Fix the broken import in `utils.ts`."

Bad approach:
- Open `utils.ts`, see a broken import, fix it, then also refactor three other functions, add types, and update tests "while we're here."

Good approach:
1. Read `utils.ts` to find the broken import.
2. Identify what module it should reference.
3. Fix only the import.
4. Verify the build passes.
5. If other issues are noticed, note them separately without acting on them.

## Practice Drill

Given this user request:

> "Make the dashboard load faster."

Write down:
1. What clarifying questions would you ask before starting?
2. What research would you do before proposing changes?
3. What is the boundary between "this task" and "scope creep"?

## Reflection Prompt

After completing a task, ask:
- Did I do only what was asked?
- Did I gather enough context before acting?
- Were there moments where I expanded scope without permission?

## Remediation Path

If the learner fails this module:
- Review specific instances where scope was misread.
- Practice the restate-before-acting rule on three different task prompts.
- Re-test with a deliberately ambiguous task to check for appropriate clarification behavior.

## Pass Signal

The learner can restate any given task's objective, constraints, and acceptance criteria accurately, and can distinguish research mode from execution mode.
