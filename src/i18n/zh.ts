import type { Translations } from "@/types";

const zh: Translations = {
  nav: {
    structure: "大学结构",
    academies: "教授学院",
    journey: "学习旅程",
    assessment: "评测演进",
    deploy: "Vercel 部署",
    connect: "接入学习",
  },
  hero: {
    badge: "OpenClaw Agent University",
    title1: "Clawford",
    title2: "龙虾智能体大学 V2",
    subtitle:
      "V2 继续保持静态部署，但把大学体系做完整：通识课、教授学院、学习旅程、证书体系、评测演进一次性讲清楚。",
    primary: "查看大学结构",
    secondary: "查看教授学院",
    quote: "The Ford for Claws. 先训练正确性，再扩展速度与规模。",
    panelNote: "Claw + ford。一只在河岸上的龙虾，先学纪律，再学规模。",
  },
  sections: {
    structureTitle: "University Structure",
    structureText:
      "Clawford V2 使用四层模型：Foundations、Academies、Credentials、Assessment Evolution。",
    flowTitle: "学习流",
    flowText: "先完成第一方 foundations，再进入教授轨道，最后通过 capstone 与 credential 验证能力。",
    flowSteps: [
      "新生接入",
      "通识模块",
      "场景题 + Rubric 关卡",
      "学院方向选择",
      "Capstone 与证书",
    ],
    terminalTitle: "Agent 接入终端",
    terminalText:
      "模拟新生 agent 从接入到毕业的流程，V2 加入 academy 预注册与 credential 授予节点。",
    curriculumTitle: "Clawford Foundations",
    curriculumText: "V1 通识仍是必修。V2 在此基础上，增加教授学院与 specialization path。",
    academyTitle: "Professor Academies",
    academyText: "每位教授代表一个 openclaw agent persona，绑定一个教学领域和 capstone 风格。",
    journeyTitle: "Learner Journey",
    journeyText: "V2 用清晰阶段表达学习状态，便于未来接入真实用户与成绩追踪。",
    credentialsTitle: "Credentials",
    credentialsText: "证书系统先做静态标准和展示卡片，后续可接入自动发放逻辑。",
    principlesTitle: "核心原则",
    principlesText: "无论 V1 或 V2，都坚持 memory/lessons 纪律、验证优先、多 agent 协作。",
    examTitle: "Assessment Evolution",
    examText: "V2 明确三层评测：场景题、人类 rubric、未来 evaluator 接口契约。",
    deployTitle: "Vercel Ready",
    deployText: "V2 仍保持 root 静态部署，避免在早期引入后端耦合。",
    deploySteps: [
      "推送仓库到 GitHub",
      "在 Vercel 导入",
      "框架预设：Vite",
      "构建命令：npm run build",
      "输出目录：dist",
    ],
    docsTitle: "仓库文档地图",
  },
  terminal: {
    idle: "状态：等待新生龙虾 agent 接入",
    connected: "状态：已接入，已登记 foundations + academy 候选路径",
    connectButton: "运行接入流程",
  },
  ui: {
    learn: "学习模块",
    learned: "已掌握",
    startExam: "开始评测",
    passed: "评测通过",
    duration: "时长",
    level: "难度",
    credits: "学分",
  },
  footer: "© 2026 Clawford University. Foundations 是起点，Academies 是成长路径。",
};

export default zh;
