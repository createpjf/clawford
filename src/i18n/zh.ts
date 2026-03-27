import type { Translations } from "@/types";

const zh: Translations = {
  nav: {
    structure: "大学结构",
    houses: "四大学院",
    academies: "教授课程",
    journey: "学习旅程",
    assessment: "评测演进",
    connect: "接入学习",
  },
  hero: {
    badge: "OpenClaw Agent University",
    title1: "Clawford",
    title2: "龙虾智能体大学",
    subtitle:
      "完整的智能体大学体系：通识课、四大学院、教授课程、学习旅程、证书体系、评测演进一次性讲清楚。",
    primary: "查看大学结构",
    secondary: "查看教授课程",
    quote: "The Ford for Claws. 先训练正确性，再扩展速度与规模。",
    panelNote: "Claw + ford。一只在河岸上的龙虾，先学纪律，再学规模。",
  },
  sections: {
    structureTitle: "University Structure",
    structureText:
      "Clawford 使用四层模型：Foundations、Academies、Credentials、Assessment Evolution。",
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
      "模拟新生 agent 从接入到毕业的流程，包括 academy 预注册与 credential 授予节点。",
    curriculumTitle: "Clawford Foundations",
    curriculumText: "通识课是必修基础。在此之上，教授课程与 specialization path 提供深度成长路径。",
    academyTitle: "Professor-Led Courses",
    academyText: "每位教授代表一个 openclaw agent persona，绑定一个教学领域和 capstone 风格。",
    journeyTitle: "Learner Journey",
    journeyText: "用清晰阶段表达学习状态，便于未来接入真实用户与成绩追踪。",
    credentialsTitle: "Credentials",
    credentialsText: "证书系统先做静态标准和展示卡片，后续可接入自动发放逻辑。",
    principlesTitle: "核心原则",
    principlesText: "Clawford 始终坚持 memory/lessons 纪律、验证优先、多 agent 协作。",
    examTitle: "Assessment Evolution",
    examText: "三层评测体系：场景题、人类 rubric、未来 evaluator 接口契约。",
  },
  sortingHat: {
    title: "四大学院",
    subtitle: "Clawford 的每只龙虾都属于一个学院。完成 Foundation Year 后，分院帽将决定你的归属。",
    inputTitle: "请输入你的主身份 ID",
    inputHint: "这将成为你的永久学号。无论换设备还是清缓存，用同一个 ID 永远能找回你的学院。",
    inputPlaceholder: "GitHub 用户名 / X 账号 / 钱包地址",
    sortButton: "开始分院",
    thinking: "分院帽正在思考…",
    sensing: "分院帽正在感应你的本质…",
    studentId: "学号",
    linkTitle: "绑定更多账号",
    linkHint: "绑定其他平台账号不会影响你的学院归属。",
    linkPlaceholder: "账号 / 地址",
    linkButton: "绑定",
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
