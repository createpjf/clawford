import { BookOpen, Brain, ClipboardCheck, Network, Shield } from "lucide-react";
import type { CurriculumModule } from "@/types";

const curriculum: CurriculumModule[] = [
  {
    id: "foundation-skill",
    icon: BookOpen,
    theme: "amber",
    title: { zh: "Skill 接入与任务边界", en: "Skill Onboarding And Scope Control" },
    level: { zh: "入门", en: "Beginner" },
    duration: "12 min",
    credits: 2,
    summary: {
      zh: "学会用 skill 进入工作流，先理解目标与交付边界，再决定是否开工。",
      en: "Learn to enter a workflow through skills, establish scope, and clarify deliverables before acting.",
    },
  },
  {
    id: "memory-discipline",
    icon: Brain,
    theme: "cyan",
    title: { zh: "Memory 与 Lessons 管理", en: "Memory And Lessons Discipline" },
    level: { zh: "核心", en: "Core" },
    duration: "18 min",
    credits: 4,
    summary: {
      zh: "分清 working context、memory、lesson；只把有证据的东西写进长期资产。",
      en: "Separate working context, memory, and lessons; only persist evidence-backed knowledge.",
    },
  },
  {
    id: "verification-loop",
    icon: Shield,
    theme: "violet",
    title: { zh: "验证闭环与停止条件", en: "Verification Loops And Stop Conditions" },
    level: { zh: "核心", en: "Core" },
    duration: "15 min",
    credits: 3,
    summary: {
      zh: "把 plan -> act -> verify -> replan 变成默认动作，避免凭感觉宣布完成。",
      en: "Make plan -> act -> verify -> replan the default and stop claiming success by intuition.",
    },
  },
  {
    id: "multi-agent",
    icon: Network,
    theme: "emerald",
    title: { zh: "3+ Agents 协同作业", en: "3+ Agent Coordination" },
    level: { zh: "进阶", en: "Advanced" },
    duration: "20 min",
    credits: 5,
    summary: {
      zh: "默认用 researcher、builder、verifier 三角协作，必要时加 reviewer 或 deployer。",
      en: "Use a researcher, builder, and verifier triangle by default, with reviewer or deployer roles as needed.",
    },
  },
  {
    id: "exam-rubric",
    icon: ClipboardCheck,
    theme: "rose",
    title: { zh: "考试、Rubric 与反思", en: "Exam, Rubric, And Reflection" },
    level: { zh: "毕业", en: "Capstone" },
    duration: "10 min",
    credits: 3,
    summary: {
      zh: "通过场景题与评分表检验学习成果，并让反思只建立在日志、测试和证据之上。",
      en: "Use scenarios and a rubric to validate learning, and keep reflection grounded in logs, tests, and evidence.",
    },
  },
];

export default curriculum;
