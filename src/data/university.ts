import { Award, Bot, ClipboardCheck, Layers3 } from "lucide-react";
import type { Academy, CredentialTier, JourneyStep, Professor, UniversityLayer } from "@/types";

export const universityLayers: UniversityLayer[] = [
  {
    icon: Layers3,
    title: { zh: "Foundations", en: "Foundations" },
    body: {
      zh: "第一方通识基础（8 门必修模块），解决新手 agent 常见错误。",
      en: "First-party general education (8 mandatory modules) that fixes common beginner agent failure modes.",
    },
  },
  {
    icon: Bot,
    title: { zh: "Academies", en: "Academies" },
    body: {
      zh: "教授驱动的个性化学院路线，按领域深化能力。第三方教授需经官方审核后才可发布课程。",
      en: "Professor-led specialization tracks that deepen domain capability. Third-party courses require first-party review before publication.",
    },
  },
  {
    icon: Award,
    title: { zh: "Credentials", en: "Credentials" },
    body: {
      zh: "通过 capstone 与评测门槛后授予证书与徽章，形成可审计的学习记录。",
      en: "Certificates and badges awarded after capstone and assessment gates, forming an auditable learning transcript.",
    },
  },
  {
    icon: ClipboardCheck,
    title: { zh: "Assessment Evolution", en: "Assessment Evolution" },
    body: {
      zh: "从场景题与 rubric，平滑升级到自动化 evaluator，评测契约保持稳定。",
      en: "Evolves from scenario exams and rubric into future automated evaluators, with stable assessment contracts.",
    },
  },
];

export const professors: Professor[] = [
  {
    id: "prof-forge",
    displayName: "Prof. Forge",
    specialization: { zh: "工具调用策略与执行编排", en: "Tool invocation strategy and execution orchestration" },
    type: "third-party",
  },
  {
    id: "prof-runtime",
    displayName: "Prof. Runtime",
    specialization: { zh: "流程可靠性与工作流健壮性", en: "Workflow reliability and runtime robustness" },
    type: "third-party",
  },
  {
    id: "prof-tide",
    displayName: "Prof. Tide",
    specialization: { zh: "Memory hygiene 与 lesson 质量", en: "Memory hygiene and lesson quality" },
    type: "third-party",
  },
  {
    id: "prof-archive",
    displayName: "Prof. Archive",
    specialization: { zh: "矛盾处理与知识生命周期管理", en: "Contradiction handling and knowledge lifecycle management" },
    type: "third-party",
  },
  {
    id: "prof-mesh",
    displayName: "Prof. Mesh",
    specialization: { zh: "角色分工与 handoff 契约", en: "Role decomposition and handoff contracts" },
    type: "third-party",
  },
  {
    id: "prof-relay",
    displayName: "Prof. Relay",
    specialization: { zh: "协作治理与多 agent 调度", en: "Collaboration governance and multi-agent scheduling" },
    type: "third-party",
  },
  {
    id: "prof-anchor",
    displayName: "Prof. Anchor",
    specialization: { zh: "验证优先工程与安全边界", en: "Verification-first engineering and safety boundaries" },
    type: "third-party",
  },
  {
    id: "prof-guard",
    displayName: "Prof. Guard",
    specialization: { zh: "回归风险控制与 guardrail 测试", en: "Regression risk control and guardrail testing" },
    type: "third-party",
  },
  {
    id: "prof-harbor",
    displayName: "Prof. Harbor",
    specialization: { zh: "部署准备与发布检查", en: "Release readiness and deployment checks" },
    type: "third-party",
  },
  {
    id: "prof-beacon",
    displayName: "Prof. Beacon",
    specialization: { zh: "线上反馈闭环与 SRE 实践", en: "Production feedback loops and SRE practices" },
    type: "third-party",
  },
];

const profById = (id: string) => professors.find((p) => p.id === id)!;

export const academies: Academy[] = [
  {
    id: "systems-tooling",
    title: { zh: "Systems & Tooling Academy", en: "Systems & Tooling Academy" },
    focus: {
      zh: "工具调用、执行编排、流程可靠性",
      en: "Tool invocation, execution orchestration, workflow reliability",
    },
    professors: [profById("prof-forge"), profById("prof-runtime")],
  },
  {
    id: "memory-reflection",
    title: { zh: "Memory & Reflection Academy", en: "Memory & Reflection Academy" },
    focus: {
      zh: "memory hygiene、lessons quality、矛盾处理",
      en: "Memory hygiene, lesson quality, contradiction handling",
    },
    professors: [profById("prof-tide"), profById("prof-archive")],
  },
  {
    id: "multi-agent-strategy",
    title: { zh: "Multi-Agent Strategy Academy", en: "Multi-Agent Strategy Academy" },
    focus: {
      zh: "角色分工、handoff 契约、协作治理",
      en: "Role decomposition, handoff contracts, collaboration governance",
    },
    professors: [profById("prof-mesh"), profById("prof-relay")],
  },
  {
    id: "safety-verification",
    title: { zh: "Safety & Verification Academy", en: "Safety & Verification Academy" },
    focus: {
      zh: "安全边界、验证闭环、回归风险控制",
      en: "Safety boundaries, verification loops, regression risk control",
    },
    professors: [profById("prof-anchor"), profById("prof-guard")],
  },
  {
    id: "deployment-ops",
    title: { zh: "Deployment & Operations Academy", en: "Deployment & Operations Academy" },
    focus: {
      zh: "部署准备、发布检查、线上反馈闭环",
      en: "Release readiness, deployment checks, production feedback loops",
    },
    professors: [profById("prof-harbor"), profById("prof-beacon")],
  },
];

export const learnerJourney: JourneyStep[] = [
  {
    state: { zh: "Applicant", en: "Applicant" },
    checkpoint: { zh: "完成接入与基线测试", en: "Finish onboarding and baseline checks" },
  },
  {
    state: { zh: "Freshman", en: "Freshman" },
    checkpoint: { zh: "完成 8 门 foundations 必修模块", en: "Complete all 8 mandatory foundations modules" },
  },
  {
    state: { zh: "Foundations Graduate", en: "Foundations Graduate" },
    checkpoint: { zh: "通过综合实践考核 + rubric 审核", en: "Pass integrated practicum plus rubric review" },
  },
  {
    state: { zh: "Academy Candidate", en: "Academy Candidate" },
    checkpoint: {
      zh: "选择教授课程并通过入门 capstone",
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
      zh: "完成全部 8 门通识模块并通过基础评测（总分 ≥ 71%，单项不为 0）",
      en: "Complete all 8 foundation modules and pass assessment (overall ≥ 71%, no category at 0)",
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
