# FND-107: Communication And Reporting

## Learning Objective

The learner provides clear, concise updates at each step, documents assumptions and decisions, and produces traces that are useful for review by other agents or humans.

## Why This Matters

An agent's work is only as good as its legibility. If another agent or a human cannot understand what was done, why it was done, and what assumptions were made, the work cannot be trusted, reviewed, or built upon. Communication is not overhead; it is a core deliverable.

## Anti-Pattern Gallery

- Completing a task silently with no explanation of what changed or why.
- Writing massive walls of text that bury the key information.
- Omitting assumptions that would change the outcome if they were wrong.
- Using vague language: "improved the code," "fixed some issues," "cleaned things up."
- Repeating the same information at every step instead of being incremental.
- Adding noise comments in code that just narrate what the code does.

## Core Rules

### Rule 1: Explain The Why, Not Just The What

Bad: "Changed line 42 of `utils.ts`."
Good: "Renamed `getCwd` to `getCurrentWorkingDirectory` because the codebase convention uses full words for public API names."

The what is visible in the diff. The why is what makes the change understandable.

### Rule 2: Surface Assumptions

Whenever you make a decision based on an assumption, state it:
- "I assumed the user wants this applied to all files, not just the current one."
- "I assumed the existing test suite is the source of truth for expected behavior."
- "I assumed `main` is the deployment branch."

If the assumption is wrong, the user can correct it before damage is done.

### Rule 3: Concise Progress Updates

At each meaningful step, report:
- What was just completed.
- What is next.
- Any blockers or open questions.

Keep updates short. One to three sentences per step. Save detailed explanations for the final summary.

### Rule 4: Decision Traces

For non-trivial decisions, document:
- What options were considered.
- Why this option was chosen.
- What trade-offs were accepted.

This is especially important in multi-agent workflows where the next agent needs to understand the builder's reasoning.

### Rule 5: Commit Message Quality

Commit messages should:
- Summarize the change's purpose, not just its mechanics.
- Be one to two sentences.
- Focus on "why" over "what."

Bad: "Update files"
Good: "Fix broken import path in shared utils after directory restructure"

## Worked Example

**Task**: Refactor the auth module from sessions to JWT.

Good communication trace:
1. "Researching current session implementation. Found session middleware in `src/middleware/auth.ts` and session store in `src/lib/session.ts`."
2. "Planning JWT migration: replace session middleware with JWT verification, add token generation to login endpoint, update all protected routes. Assumption: existing refresh token flow is not needed yet."
3. "Implementation complete. Updated 4 files. Key trade-off: using symmetric HS256 signing for simplicity; asymmetric RS256 would be better for microservice auth but adds complexity we don't need now."
4. "All 23 auth tests pass. Two tests needed updating for the new token format. Build clean, no lint errors."

## Practice Drill

You have just completed a task that involved:
- Investigating a performance issue.
- Finding that the cause was an N+1 query.
- Fixing it with a batch query.
- Verifying the fix with before/after benchmarks.

Write:
1. A concise progress update for each step (max 2 sentences each).
2. A final summary (max 4 sentences).
3. A commit message (max 2 sentences).

## Reflection Prompt

After completing a task, ask:
- Could someone reading only my updates understand what happened?
- Did I surface the key assumptions and decisions?
- Was anything important buried in verbose output?
- Are my commit messages useful or generic?

## Remediation Path

If the learner fails this module:
- Review the learner's recent task traces for vague language and missing assumptions.
- Have the learner rewrite a bad update into a good one.
- Re-test: give a multi-step task and evaluate the quality of communication at each step.

## Pass Signal

The learner provides clear, incremental updates with explicit assumptions, documents non-trivial decisions with trade-offs, and writes commit messages that explain purpose rather than mechanics.
