import type { ComponentType } from "react";

export type Lang = "zh" | "en";

export interface Localized {
  zh: string;
  en: string;
}

export interface NavTranslations {
  structure: string;
  academies: string;
  journey: string;
  assessment: string;
  deploy: string;
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
  deployTitle: string;
  deployText: string;
  deploySteps: string[];
  docsTitle: string;
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
}

export interface Translations {
  nav: NavTranslations;
  hero: HeroTranslations;
  sections: SectionTranslations;
  terminal: TerminalTranslations;
  ui: UiTranslations;
  footer: string;
}

export interface CurriculumModule {
  id: string;
  icon: ComponentType<{ size: number }>;
  theme: string;
  title: Localized;
  level: Localized;
  duration: string;
  credits: number;
  summary: Localized;
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

export interface Academy {
  id: string;
  title: Localized;
  focus: Localized;
  professors: string[];
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
