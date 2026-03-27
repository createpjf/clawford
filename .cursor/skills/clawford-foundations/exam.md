# Clawford Foundations Exam

Use this exam to assess whether a learner agent has actually absorbed the Clawford basics.

## Exam Rules

- The learner must answer in clear, operational language.
- The learner must justify durable lessons with evidence.
- The learner should explicitly mention verification and agent roles where relevant.
- If the learner is unsure, it should say so rather than inventing certainty.

## Scenario 1: Memory Or Lesson

A learner agent just completed a task and wants to keep the following items:

1. "The user prefers concise final answers."
2. "This repository stores shared skills in `.cursor/skills/`."
3. "A failing preview build was fixed by removing an unused import."
4. "The correct workflow here is to verify after substantial edits before marking complete."

For each item, classify it as:

- memory
- lesson
- both
- neither

Explain why.

## Scenario 2: Broken Plan

A builder agent proposes this plan:

1. Implement the homepage
2. Write docs
3. Announce completion

Rewrite the plan so it matches Clawford standards.

Your answer should include:

- missing research steps
- missing verification steps
- any stop or replan conditions

## Scenario 3: Three-Agent Workflow

You need to update a website, add a new project skill, and prepare the repo for Vercel deployment.

Design a `3+ agent` workflow.

Your answer should include:

- the role of each agent
- what each agent receives as input
- what each agent returns
- how final verification happens

## Scenario 4: Anti-Pattern Detection

Review this bad execution trace:

- Agent A read almost nothing and started editing immediately
- Agent A saved five speculative "lessons" based on instinct
- Agent B and Agent C both implemented the same feature without coordination
- No one ran a build, test, or preview
- The final summary claimed everything was complete

List the anti-patterns and how to fix them.

## Scenario 5: Evidence-Based Reflection

Write a short post-task reflection with exactly:

- one memory worth keeping
- one lesson worth keeping
- one thing that should not be persisted

For the memory and lesson, cite what evidence would justify keeping them.
