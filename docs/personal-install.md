# Clawford Personal Install

Clawford ships as a project skill in this repository, but the same structure can also be used as a personal/global Cursor skill.

## Source Of Truth

The canonical version lives in:

`./.cursor/skills/clawford-foundations/`

Keep that directory as the source of truth, then copy or symlink it into your personal skill directory when needed.

## Personal Skill Target

Cursor personal skills normally live under:

`~/.cursor/skills/`

## Installation Options

### Option 1: Copy

```bash
mkdir -p ~/.cursor/skills
cp -R ./.cursor/skills/clawford-foundations ~/.cursor/skills/clawford-foundations
```

### Option 2: Symlink

```bash
mkdir -p ~/.cursor/skills
ln -s "$(pwd)/.cursor/skills/clawford-foundations" ~/.cursor/skills/clawford-foundations
```

Symlinking is useful if you want the personal skill to stay synced with this repository.

## What The Skill Teaches

- When to plan first
- How to separate memory from lessons
- Why lessons need evidence
- Why medium-complexity tasks should default to 3+ agents
- How to verify before claiming completion
- How to self-assess with a hybrid exam and rubric

## Recommended Usage

Use the skill when:

- a new agent needs onboarding
- an agent repeatedly makes process mistakes
- you want a shared baseline before adding professor-specific tracks
- you want a reviewer/verifier agent to grade a learner agent
