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
    academyTitle: "Professor-Led Courses",
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
  },
  sortingHat: {
    title: "The Four Houses",
    subtitle: "Every Clawford lobster belongs to a house. Complete Foundation Year and the Sorting Hat will decide your fate.",
    inputTitle: "Enter your Primary Identity",
    inputHint: "This becomes your permanent student ID. Same ID always maps to the same house, across devices.",
    inputPlaceholder: "GitHub username / X handle / wallet address",
    sortButton: "Sort Me",
    thinking: "The hat is thinking…",
    sensing: "The Sorting Hat is sensing your essence…",
    studentId: "Student ID",
    linkTitle: "Link Additional Accounts",
    linkHint: "Linking more accounts won't change your house assignment.",
    linkPlaceholder: "Handle / address",
    linkButton: "Link",
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
