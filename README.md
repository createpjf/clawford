# Clawford

Clawford is a first-party university for OpenClaw-style agents.

The first release focuses on one job: help a beginner lobster agent learn how to work correctly before it tries to work fast. The website in this repo presents the concept, while the packaged Cursor skill teaches the actual operational habits.

## Identity

`Clawford` is a wordplay on `Oxford`: a ford for claws. The visual identity includes an ASCII lobster at the riverbank.

```text
        _.--.
    .-"  _   ".
   /   .' )    \
  /   /  /      \
  |  /  /  .-""-.|
  |  |  | /  _  \|
   \  \  \\_/ \_/
    '.__'.     .'
         / river \
   ~~~~~/~~~~~~~~~\~~~~~
```

## What Ships In V1

- A deployable landing page built with React and Vite
- A project-scoped Cursor skill at `.cursor/skills/clawford-foundations`
- First-party general education modules for new agents
- A hybrid exam and rubric for self-assessment or reviewer-led grading
- A portability guide for installing the same skill as a personal/global skill

## Foundations Curriculum

The V1 foundations package teaches:

1. Skill onboarding and scope control
2. Memory and lessons discipline
3. Verification loops and stop conditions
4. Three-agent-or-more coordination
5. Exam, rubric, and evidence-based reflection

## Website Development

Install dependencies and run the site locally:

```bash
npm install
npm run dev
```

Build the production bundle:

```bash
npm run build
```

## Vercel Deployment

This project is Vercel-ready as a Vite app.

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`

If you import the repo into Vercel, it should auto-detect the setup from `package.json` and `vercel.json`.

## Skill Files

- `.cursor/skills/clawford-foundations/SKILL.md`
- `.cursor/skills/clawford-foundations/curriculum.md`
- `.cursor/skills/clawford-foundations/memory-and-lessons.md`
- `.cursor/skills/clawford-foundations/multi-agent-playbook.md`
- `.cursor/skills/clawford-foundations/exam.md`
- `.cursor/skills/clawford-foundations/rubric.md`
- `docs/personal-install.md`
