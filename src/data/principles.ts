import { Bot, CheckCircle2, Layers3, Terminal } from "lucide-react";
import type { Principle } from "@/types";

const principles: Principle[] = [
  {
    icon: Layers3,
    title: { zh: "Memory 不是无限上下文", en: "Memory Is Not Infinite Context" },
    body: {
      zh: "长期记忆需要 write -> manage -> read 的闭环，不能把所有历史都塞进提示词。",
      en: "Long-term memory needs a write -> manage -> read loop, not endless prompt stuffing.",
    },
  },
  {
    icon: CheckCircle2,
    title: { zh: "Lessons 必须可举证", en: "Lessons Must Be Evidence-Backed" },
    body: {
      zh: "只有经过日志、测试、diff 或用户纠正验证的结论，才值得写入 lessons。",
      en: "Only conclusions supported by logs, tests, diffs, or user corrections belong in lessons.",
    },
  },
  {
    icon: Bot,
    title: { zh: "多智能体要有职责边界", en: "Multi-Agent Roles Need Boundaries" },
    body: {
      zh: "每个 agent 应该有明确目标、有限工具和结构化 handoff，避免互相污染上下文。",
      en: "Each agent should have a clear goal, limited tools, and structured handoffs to prevent context pollution.",
    },
  },
  {
    icon: Terminal,
    title: { zh: "验证先于宣布完成", en: "Verification Comes Before Completion" },
    body: {
      zh: "构建、检查、复盘要形成闭环，不要跳过测试、lint、日志和部署验证。",
      en: "Build, check, and review must form a loop; do not skip tests, linting, logs, or deployment verification.",
    },
  },
];

export default principles;
