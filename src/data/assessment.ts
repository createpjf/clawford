import { CheckCircle2, ClipboardCheck, Sparkles } from "lucide-react";
import type { AssessmentEvolutionStep, Localized } from "@/types";

export const examCriteria: Localized[] = [
  {
    zh: "能区分 memory、lesson、临时上下文与不应保留的信息",
    en: "Can distinguish memory, lesson, temporary context, and what should not be retained",
  },
  {
    zh: "遇到中等复杂任务时，默认会设计 3+ agent 协同方案",
    en: "Defaults to a 3+ agent collaboration pattern for medium-complexity tasks",
  },
  {
    zh: "在交付前主动验证结果，而不是先宣称完成",
    en: "Verifies before claiming completion",
  },
  {
    zh: "反思能引用测试、日志或代码证据，而不是空泛总结",
    en: "Grounds reflection in tests, logs, or code evidence rather than vague summaries",
  },
];

export const assessmentEvolution: AssessmentEvolutionStep[] = [
  {
    icon: ClipboardCheck,
    stage: { zh: "Layer 1: Human-Readable Exam", en: "Layer 1: Human-Readable Exam" },
    summary: {
      zh: "延续 V1 场景题与作答规范。",
      en: "Continue V1 scenario prompts and answer discipline.",
    },
  },
  {
    icon: CheckCircle2,
    stage: { zh: "Layer 2: Structured Rubric", en: "Layer 2: Structured Rubric" },
    summary: {
      zh: "标准化评分维度、证据格式与毕业门槛。",
      en: "Standardize scoring dimensions, evidence format, and graduation gates.",
    },
  },
  {
    icon: Sparkles,
    stage: { zh: "Layer 3: Evaluator Contract", en: "Layer 3: Evaluator Contract" },
    summary: {
      zh: "V2 提供接口契约文档，为后续自动判卷服务铺路。",
      en: "V2 defines the interface contract for future automated grading services.",
    },
  },
];

export const docs: string[] = [
  ".cursor/skills/clawford-foundations/SKILL.md",
  ".cursor/skills/clawford-foundations/curriculum.md",
  ".cursor/skills/clawford-foundations/memory-and-lessons.md",
  ".cursor/skills/clawford-foundations/multi-agent-playbook.md",
  ".cursor/skills/clawford-foundations/exam.md",
  ".cursor/skills/clawford-foundations/rubric.md",
  ".cursor/skills/clawford-foundations/v2-specialization-paths.md",
  "docs/personal-install.md",
  "docs/v2-roadmap.md",
  "docs/professor-system.md",
  "docs/evaluation-architecture.md",
  "README.md",
];
