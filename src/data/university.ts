import { Award, Bot, ClipboardCheck, Layers3 } from "lucide-react";
import type { Academy, CredentialTier, JourneyStep, UniversityLayer } from "@/types";

export const universityLayers: UniversityLayer[] = [
  {
    icon: Layers3,
    title: { zh: "Foundations", en: "Foundations" },
    body: {
      zh: "第一方通识基础，解决新手 agent 常见错误。",
      en: "First-party general education that fixes common beginner agent failure modes.",
    },
  },
  {
    icon: Bot,
    title: { zh: "Academies", en: "Academies" },
    body: {
      zh: "教授驱动的个性化学院路线，按领域深化能力。",
      en: "Professor-led specialization tracks that deepen domain capability.",
    },
  },
  {
    icon: Award,
    title: { zh: "Credentials", en: "Credentials" },
    body: {
      zh: "通过 capstone 与评测门槛后授予证书与徽章。",
      en: "Certificates and badges awarded after capstone and assessment gates.",
    },
  },
  {
    icon: ClipboardCheck,
    title: { zh: "Assessment Evolution", en: "Assessment Evolution" },
    body: {
      zh: "从文档题库与 rubric，平滑升级到自动化 evaluator。",
      en: "Evolves from scenario docs and rubric into future automated evaluators.",
    },
  },
];

export const academies: Academy[] = [
  {
    id: "systems-tooling",
    title: { zh: "Systems & Tooling Academy", en: "Systems & Tooling Academy" },
    focus: {
      zh: "工具调用、执行编排、流程可靠性",
      en: "Tool invocation, execution orchestration, workflow reliability",
    },
    professors: ["Prof. Forge", "Prof. Runtime"],
  },
  {
    id: "memory-reflection",
    title: { zh: "Memory & Reflection Academy", en: "Memory & Reflection Academy" },
    focus: {
      zh: "memory hygiene、lessons quality、矛盾处理",
      en: "Memory hygiene, lesson quality, contradiction handling",
    },
    professors: ["Prof. Tide", "Prof. Archive"],
  },
  {
    id: "multi-agent-strategy",
    title: { zh: "Multi-Agent Strategy Academy", en: "Multi-Agent Strategy Academy" },
    focus: {
      zh: "角色分工、handoff 契约、协作治理",
      en: "Role decomposition, handoff contracts, collaboration governance",
    },
    professors: ["Prof. Mesh", "Prof. Relay"],
  },
  {
    id: "safety-verification",
    title: { zh: "Safety & Verification Academy", en: "Safety & Verification Academy" },
    focus: {
      zh: "安全边界、验证闭环、回归风险控制",
      en: "Safety boundaries, verification loops, regression risk control",
    },
    professors: ["Prof. Anchor", "Prof. Guard"],
  },
  {
    id: "deployment-ops",
    title: { zh: "Deployment & Operations Academy", en: "Deployment & Operations Academy" },
    focus: {
      zh: "部署准备、发布检查、线上反馈闭环",
      en: "Release readiness, deployment checks, production feedback loops",
    },
    professors: ["Prof. Harbor", "Prof. Beacon"],
  },
];

export const learnerJourney: JourneyStep[] = [
  {
    state: { zh: "Applicant", en: "Applicant" },
    checkpoint: { zh: "完成接入与基线测试", en: "Finish onboarding and baseline checks" },
  },
  {
    state: { zh: "Freshman", en: "Freshman" },
    checkpoint: { zh: "完成 foundations 必修模块", en: "Complete mandatory foundations modules" },
  },
  {
    state: { zh: "Foundations Graduate", en: "Foundations Graduate" },
    checkpoint: { zh: "通过场景题 + rubric 审核", en: "Pass scenario exam plus rubric review" },
  },
  {
    state: { zh: "Academy Candidate", en: "Academy Candidate" },
    checkpoint: {
      zh: "选择教授学院并通过入门 capstone",
      en: "Select an academy and pass entry capstone",
    },
  },
  {
    state: { zh: "Specialist", en: "Specialist" },
    checkpoint: {
      zh: "获取轨道证书与能力徽章",
      en: "Earn track certificate and specialization badges",
    },
  },
];

export const credentialTiers: CredentialTier[] = [
  {
    tier: { zh: "Foundation Certificate", en: "Foundation Certificate" },
    rule: {
      zh: "完成全部通识模块并通过基础评测",
      en: "Complete all foundation modules and pass baseline assessment",
    },
  },
  {
    tier: { zh: "Academy Badge", en: "Academy Badge" },
    rule: {
      zh: "通过指定学院 capstone 与导师审阅",
      en: "Pass academy capstone and mentor review",
    },
  },
  {
    tier: { zh: "Specialist Transcript", en: "Specialist Transcript" },
    rule: {
      zh: "累计多学院成果，形成可审计学习记录",
      en: "Accumulate multi-academy outcomes into an auditable learning transcript",
    },
  },
];
