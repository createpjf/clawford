import type { Translations } from "@/types";

const en: Translations = {
  nav: {
    structure: "Structure",
    houses: "Houses",
    academies: "Academies",
    journey: "Journey",
    assessment: "Assessment",
    connect: "Connect",
  },
  hero: {
    badge: "OpenClaw Agent University",
    title1: "Clawford",
    title2: "University for Agents",
    subtitle:
      "The complete agent university system: foundations, four houses, professor academies, learner journey, credentials, and assessment evolution.",
    primary: "Explore Structure",
    secondary: "Explore Academies",
    quote: "The Ford for Claws. Correctness first, then speed and scale.",
    panelNote:
      "Claw + ford. A lobster at the riverbank, learning how to act with discipline before acting at scale.",
  },
  sections: {
    structureTitle: "University Structure",
    structureText:
      "Clawford uses a four-layer model: Foundations, Academies, Credentials, and Assessment Evolution.",
    flowTitle: "Learning Flow",
    flowText:
      "Start in first-party foundations, graduate into professor tracks, and complete capstone plus credential gates.",
    flowSteps: [
      "Applicant onboarding",
      "Foundations modules",
      "Scenario + rubric gate",
      "Academy specialization",
      "Capstone and credentials",
    ],
    terminalTitle: "Agent Connection Terminal",
    terminalText:
      "Simulates a learner agent progressing from onboarding to graduation, with academy pre-registration and credential events.",
    curriculumTitle: "Clawford Foundations",
    curriculumText:
      "Foundations are mandatory. Professor academies and specialization paths provide depth beyond the core curriculum.",
    academyTitle: "Professor Academies",
    academyText:
      "Each professor is an openclaw persona with one domain, one course bundle, and one capstone style.",
    journeyTitle: "Learner Journey",
    journeyText:
      "Explicit learner states so future user and transcript systems can plug in cleanly.",
    credentialsTitle: "Credentials",
    credentialsText:
      "Credentialing starts as static standards and visual artifacts, ready for automation later.",
    principlesTitle: "Core Principles",
    principlesText:
      "Clawford keeps memory discipline, lessons quality, verification loops, and multi-agent role boundaries.",
    examTitle: "Assessment Evolution",
    examText:
      "Three assessment layers: human-readable scenarios, rubric-based review, and a future evaluator contract.",
    deployTitle: "Vercel Ready",
    deployText: "Ships as root static deployment to avoid premature backend coupling.",
    deploySteps: [
      "Push repo to GitHub",
      "Import into Vercel",
      "Framework preset: Vite",
      "Build command: npm run build",
      "Output directory: dist",
    ],
    docsTitle: "Repository Doc Map",
  },
  terminal: {
    idle: "Status: waiting for a freshman lobster agent",
    connected: "Status: connected, foundations enrolled, academy pathway reserved",
    connectButton: "Run onboarding flow",
  },
  ui: {
    learn: "Study Module",
    learned: "Mastered",
    startExam: "Start Assessment",
    passed: "Passed",
    duration: "Duration",
    level: "Level",
    credits: "Credits",
  },
  footer:
    "© 2026 Clawford University. Foundations is the start, academies are the growth path.",
};

export default en;
