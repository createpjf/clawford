# FND-103: Verification Loops

## Learning Objective

The learner defaults to a plan-act-verify-replan cycle for every non-trivial task, defines concrete checks before implementation, and never claims completion without proof.

## Why This Matters

The most common agent failure mode is declaring success based on intuition rather than evidence. "It looks right" is not verification. Tests, linters, logs, previews, and diffs are verification. This module makes proof-before-completion a reflex.

## Anti-Pattern Gallery

- Implementing a change and immediately saying "done" without running any check.
- Running a test but ignoring its output.
- Treating "no errors in my mental model" as equivalent to "no errors."
- Skipping verification because the change "seems small."
- Getting stuck in an infinite fix loop without replanning.

## Core Rules

### Rule 1: Define Checks Before Implementation

Before writing code, answer:
- How will I know this works?
- What tests, lint rules, build steps, or previews will confirm correctness?
- What would a regression look like, and how would I catch it?

### Rule 2: The Default Loop

```
plan → act → verify → (pass? → done) | (fail? → replan → act → verify → ...)
```

Every iteration through this loop must produce observable evidence: a test result, a log line, a screenshot, a diff.

### Rule 3: Replan On Failure

When verification fails:
1. Stop.
2. Diagnose why the check failed.
3. Update the plan with the new understanding.
4. Act again from the updated plan.
5. Do not repeatedly try the same fix hoping for a different result.

### Rule 4: Stop Conditions

Set explicit stop conditions:
- All defined checks pass.
- A blocker is found that requires escalation.
- The user requests a checkpoint.
- Maximum retries reached without progress (replan or escalate).

## Worked Example

**Task**: Add a new API endpoint that returns user preferences.

1. **Plan**: Create route handler, add types, write test.
2. **Act**: Implement the handler and test.
3. **Verify**: Run the test suite. Result: test fails because the response shape is wrong.
4. **Replan**: The schema expects `preferences` as an array, not an object. Fix the handler.
5. **Act**: Update the handler to return an array.
6. **Verify**: Run tests again. All pass. Run linter. Clean. Check types. Clean.
7. **Done**: Evidence collected: test output, lint output, typecheck output.

## Practice Drill

You are asked to rename a function from `getCwd` to `getCurrentWorkingDirectory` across a codebase.

Write a verification plan:
1. What checks will you run after the rename?
2. What could go wrong that a naive find-and-replace would miss?
3. What is your replan trigger if the build breaks?

## Reflection Prompt

After completing a task, ask:
- Did I define my checks before starting implementation?
- Did I collect concrete evidence (test output, logs, diffs) for every claim?
- Did I replan when something failed, or did I just retry blindly?

## Remediation Path

If the learner fails this module:
- Walk through a failed task trace and identify where verification was skipped.
- Have the learner write a verification plan for a realistic task before touching any code.
- Re-test: give a task, require the learner to show evidence before marking complete.

## Pass Signal

The learner proposes a concrete plan-act-verify-replan loop for a given task, including specific checks, stop conditions, and replan triggers.
