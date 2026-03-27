import type { ComponentType } from "react";

export type Lang = "zh" | "en";

export interface Localized {
  zh: string;
  en: string;
}

export interface NavTranslations {
  structure: string;
  houses: string;
  courses: string;
  academies: string;
  journey: string;
  assessment: string;
  connect: string;
}

export interface HeroTranslations {
  badge: string;
  title1: string;
  title2: string;
  subtitle: string;
  primary: string;
  secondary: string;
  quote: string;
  panelNote: string;
}

export interface SectionTranslations {
  structureTitle: string;
  structureText: string;
  flowTitle: string;
  flowText: string;
  flowSteps: string[];
  terminalTitle: string;
  terminalText: string;
  curriculumTitle: string;
  curriculumText: string;
  courseCatalogTitle: string;
  courseCatalogText: string;
  courseCatalogLocked: string;
  academyTitle: string;
  academyText: string;
  journeyTitle: string;
  journeyText: string;
  credentialsTitle: string;
  credentialsText: string;
  principlesTitle: string;
  principlesText: string;
  examTitle: string;
  examText: string;
}

export interface TerminalTranslations {
  idle: string;
  connected: string;
  connectButton: string;
}

export interface UiTranslations {
  learn: string;
  learned: string;
  startExam: string;
  passed: string;
  duration: string;
  level: string;
  credits: string;
  exploreCourse: string;
  lessons: string;
  professor: string;
  reviewed: string;
  pending: string;
}

export interface SortingHatTranslations {
  title: string;
  subtitle: string;
  inputTitle: string;
  inputHint: string;
  inputPlaceholder: string;
  sortButton: string;
  thinking: string;
  sensing: string;
  studentId: string;
  linkTitle: string;
  linkHint: string;
  linkPlaceholder: string;
  linkButton: string;
}

export interface Translations {
  nav: NavTranslations;
  hero: HeroTranslations;
  sections: SectionTranslations;
  sortingHat: SortingHatTranslations;
  terminal: TerminalTranslations;
  ui: UiTranslations;
  footer: string;
}

export interface CurriculumModule {
  id: string;
  code: string;
  icon: ComponentType<{ size: number }>;
  theme: string;
  title: Localized;
  level: Localized;
  duration: string;
  credits: number;
  summary: Localized;
  prerequisites: string[];
}

export interface Principle {
  icon: ComponentType<{ size: number }>;
  title: Localized;
  body: Localized;
}

export interface UniversityLayer {
  icon: ComponentType<{ size: number }>;
  title: Localized;
  body: Localized;
}

export interface Professor {
  id: string;
  displayName: string;
  specialization: Localized;
  type: "first-party" | "third-party";
}

export interface Academy {
  id: string;
  title: Localized;
  focus: Localized;
  professors: Professor[];
}

export interface JourneyStep {
  state: Localized;
  checkpoint: Localized;
}

export interface CredentialTier {
  tier: Localized;
  rule: Localized;
}

export interface AssessmentEvolutionStep {
  icon: ComponentType<{ size: number }>;
  stage: Localized;
  summary: Localized;
}

export type HouseId = "krillindor" | "shelltherin" | "cravenclaw" | "hufflepinch";

export interface House {
  id: HouseId;
  name: Localized;
  motto: Localized;
  trait: Localized;
  color: string;
  accentColor: string;
  description: Localized;
}

export interface LinkedId {
  provider: "github" | "x" | "wallet";
  value: string;
  linkedAt: string;
}

export interface LearnerProfile {
  learnerId: string;
  house: HouseId | null;
  linkedIds: LinkedId[];
  sortedAt: string | null;
}

export interface CourseLesson {
  number: number;
  code: string;
  title: Localized;
  duration: string;
}

export interface CourseProfessor {
  id: string;
  displayName: string;
  title: Localized;
  organization?: string;
  github?: string;
}

export type CourseStatus = "reviewed" | "pending";
export type CourseDifficulty = "beginner" | "intermediate" | "advanced";

export interface ElectiveCourse {
  id: string;
  code: string;
  title: Localized;
  professor: CourseProfessor;
  academyId?: string;
  icon: ComponentType<{ size: number }>;
  theme: string;
  difficulty: CourseDifficulty;
  language: string;
  totalDuration: string;
  credits: number;
  summary: Localized;
  lessons: CourseLesson[];
  examIncluded: boolean;
  skillPath: string;
  status: CourseStatus;
}

