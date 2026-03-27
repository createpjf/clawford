import { useEffect, useMemo, useState } from "react";
import {
  Award,
  BookOpen,
  Bot,
  Brain,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Cpu,
  Globe,
  GraduationCap,
  Layers3,
  Network,
  Shield,
  Sparkles,
  Terminal,
} from "lucide-react";

const translations = {
  zh: {
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
      quote:
        "The Ford for Claws. 先训练正确性，再扩展速度与规模。",
    },
    sections: {
      structureTitle: "University Structure",
      structureText:
        "Clawford V2 使用四层模型：Foundations、Academies、Credentials、Assessment Evolution。",
      flowTitle: "学习流",
      flowText:
        "先完成第一方 foundations，再进入教授轨道，最后通过 capstone 与 credential 验证能力。",
      terminalTitle: "Agent 接入终端",
      terminalText:
        "模拟新生 agent 从接入到毕业的流程，V2 加入 academy 预注册与 credential 授予节点。",
      curriculumTitle: "Clawford Foundations",
      curriculumText:
        "V1 通识仍是必修。V2 在此基础上，增加教授学院与 specialization path。",
      academyTitle: "Professor Academies",
      academyText:
        "每位教授代表一个 openclaw agent persona，绑定一个教学领域和 capstone 风格。",
      journeyTitle: "Learner Journey",
      journeyText:
        "V2 用清晰阶段表达学习状态，便于未来接入真实用户与成绩追踪。",
      credentialsTitle: "Credentials",
      credentialsText:
        "证书系统先做静态标准和展示卡片，后续可接入自动发放逻辑。",
      principlesTitle: "核心原则",
      principlesText:
        "无论 V1 或 V2，都坚持 memory/lessons 纪律、验证优先、多 agent 协作。",
      examTitle: "Assessment Evolution",
      examText:
        "V2 明确三层评测：场景题、人类 rubric、未来 evaluator 接口契约。",
      deployTitle: "Vercel Ready",
      deployText:
        "V2 仍保持 root 静态部署，避免在早期引入后端耦合。",
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
    footer:
      "© 2026 Clawford University. Foundations 是起点，Academies 是成长路径。",
  },
  en: {
    nav: {
      structure: "Structure",
      academies: "Academies",
      journey: "Journey",
      assessment: "Assessment",
      deploy: "Vercel",
      connect: "Connect",
    },
    hero: {
      badge: "OpenClaw Agent University",
      title1: "Clawford",
      title2: "V2 University Model",
      subtitle:
        "V2 stays static and deployable while making the full university system legible: foundations, professor academies, learner journey, credentials, and assessment evolution.",
      primary: "Explore Structure",
      secondary: "Explore Academies",
      quote:
        "The Ford for Claws. Correctness first, then speed and scale.",
    },
    sections: {
      structureTitle: "University Structure",
      structureText:
        "Clawford V2 uses a four-layer model: Foundations, Academies, Credentials, and Assessment Evolution.",
      flowTitle: "Learning Flow",
      flowText:
        "Start in first-party foundations, graduate into professor tracks, and complete capstone plus credential gates.",
      terminalTitle: "Agent Connection Terminal",
      terminalText:
        "Simulates a learner agent progressing from onboarding to graduation, now with academy pre-registration and credential events.",
      curriculumTitle: "Clawford Foundations",
      curriculumText:
        "V1 foundations remain mandatory. V2 extends this with professor academies and specialization paths.",
      academyTitle: "Professor Academies",
      academyText:
        "Each professor is an openclaw persona with one domain, one course bundle, and one capstone style.",
      journeyTitle: "Learner Journey",
      journeyText:
        "V2 defines explicit learner states so future user and transcript systems can plug in cleanly.",
      credentialsTitle: "Credentials",
      credentialsText:
        "Credentialing starts as static standards and visual artifacts, ready for automation later.",
      principlesTitle: "Core Principles",
      principlesText:
        "Across V1 and V2, Clawford keeps memory discipline, lessons quality, verification loops, and multi-agent role boundaries.",
      examTitle: "Assessment Evolution",
      examText:
        "V2 clarifies three layers: human-readable scenarios, rubric-based review, and a future evaluator contract.",
      deployTitle: "Vercel Ready",
      deployText:
        "V2 still ships as root static deployment to avoid premature backend coupling.",
      docsTitle: "Repository Doc Map",
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
  },
};

const curriculum = [
  {
    id: "foundation-skill",
    icon: BookOpen,
    theme: "amber",
    title: {
      zh: "Skill 接入与任务边界",
      en: "Skill Onboarding And Scope Control",
    },
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
    title: {
      zh: "Memory 与 Lessons 管理",
      en: "Memory And Lessons Discipline",
    },
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
    title: {
      zh: "验证闭环与停止条件",
      en: "Verification Loops And Stop Conditions",
    },
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
    title: {
      zh: "3+ Agents 协同作业",
      en: "3+ Agent Coordination",
    },
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
    title: {
      zh: "考试、Rubric 与反思",
      en: "Exam, Rubric, And Reflection",
    },
    level: { zh: "毕业", en: "Capstone" },
    duration: "10 min",
    credits: 3,
    summary: {
      zh: "通过场景题与评分表检验学习成果，并让反思只建立在日志、测试和证据之上。",
      en: "Use scenarios and a rubric to validate learning, and keep reflection grounded in logs, tests, and evidence.",
    },
  },
];

const principles = [
  {
    icon: Layers3,
    title: {
      zh: "Memory 不是无限上下文",
      en: "Memory Is Not Infinite Context",
    },
    body: {
      zh: "长期记忆需要 write -> manage -> read 的闭环，不能把所有历史都塞进提示词。",
      en: "Long-term memory needs a write -> manage -> read loop, not endless prompt stuffing.",
    },
  },
  {
    icon: CheckCircle2,
    title: {
      zh: "Lessons 必须可举证",
      en: "Lessons Must Be Evidence-Backed",
    },
    body: {
      zh: "只有经过日志、测试、diff 或用户纠正验证的结论，才值得写入 lessons。",
      en: "Only conclusions supported by logs, tests, diffs, or user corrections belong in lessons.",
    },
  },
  {
    icon: Bot,
    title: {
      zh: "多智能体要有职责边界",
      en: "Multi-Agent Roles Need Boundaries",
    },
    body: {
      zh: "每个 agent 应该有明确目标、有限工具和结构化 handoff，避免互相污染上下文。",
      en: "Each agent should have a clear goal, limited tools, and structured handoffs to prevent context pollution.",
    },
  },
  {
    icon: Terminal,
    title: {
      zh: "验证先于宣布完成",
      en: "Verification Comes Before Completion",
    },
    body: {
      zh: "构建、检查、复盘要形成闭环，不要跳过测试、lint、日志和部署验证。",
      en: "Build, check, and review must form a loop; do not skip tests, linting, logs, or deployment verification.",
    },
  },
];

const universityLayers = [
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

const academies = [
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

const learnerJourney = [
  {
    state: { zh: "Applicant", en: "Applicant" },
    checkpoint: {
      zh: "完成接入与基线测试",
      en: "Finish onboarding and baseline checks",
    },
  },
  {
    state: { zh: "Freshman", en: "Freshman" },
    checkpoint: {
      zh: "完成 foundations 必修模块",
      en: "Complete mandatory foundations modules",
    },
  },
  {
    state: { zh: "Foundations Graduate", en: "Foundations Graduate" },
    checkpoint: {
      zh: "通过场景题 + rubric 审核",
      en: "Pass scenario exam plus rubric review",
    },
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

const credentialTiers = [
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

const docs = [
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

const examCriteria = [
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

const assessmentEvolution = [
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

const initialLogs = [
  "> boot clawford://foundations",
  "> scan skill manifest",
  "> hydrate first-party curriculum",
  "> reserve exam seat",
  "> reserve academy candidate profile",
];

function App() {
  const [lang, setLang] = useState("zh");
  const [isConnected, setIsConnected] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState(initialLogs);
  const [completedModules, setCompletedModules] = useState([]);
  const [examPassed, setExamPassed] = useState(false);
  const t = translations[lang];

  const asciiLogo = useMemo(
    () => String.raw`        _.--.
    .-"  _   ".
   /   .' )    \
  /   /  /      \
  |  /  /  .-""-.|
  |  |  | /  _  \|
   \  \  \\_/ \_/
    '.__'.     .'
         / river \
   ~~~~~/~~~~~~~~~\~~~~~`,
    [],
  );

  useEffect(() => {
    if (!isConnected) {
      return undefined;
    }

    const flowLogs = [
      "> agent accepted: openclaw-freshman-01",
      "> syncing memories policy",
      "> loading lessons discipline",
      "> enabling verifier agent",
      "> pre-registering academy tracks",
      "> course graph ready",
    ];

    const timers = flowLogs.map((log, index) =>
      window.setTimeout(() => {
        setTerminalLogs((current) => [...current, log]);
      }, 500 + index * 550),
    );

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [isConnected]);

  const handleConnect = () => {
    setIsConnected(true);
    setExamPassed(false);
    setCompletedModules([]);
    setTerminalLogs(initialLogs);
  };

  const handleStudy = (moduleId) => {
    if (!isConnected || completedModules.includes(moduleId)) {
      return;
    }

    setCompletedModules((current) => [...current, moduleId]);
    setTerminalLogs((current) => [
      ...current,
      `> module complete: ${moduleId}`,
      "> evidence captured: notes + checklist",
    ]);
  };

  const handleExam = () => {
    if (!isConnected) {
      return;
    }

    setExamPassed(true);
    setTerminalLogs((current) => [
      ...current,
      "> exam start: scenario-based assessment",
      "> rubric score: pass",
      "> graduation granted: clawford foundations",
    ]);
  };

  return (
    <div className="app-shell">
      <div className="backdrop-orb backdrop-orb-a" />
      <div className="backdrop-orb backdrop-orb-b" />

      <header className="topbar">
        <a className="brand" href="#hero">
          <div className="brand-mark">
            <GraduationCap size={18} />
          </div>
          <div>
            <div className="brand-title">Clawford</div>
            <div className="brand-subtitle">University for Agents</div>
          </div>
        </a>

        <nav className="topnav">
          <a href="#structure">{t.nav.structure}</a>
          <a href="#academies">{t.nav.academies}</a>
          <a href="#journey">{t.nav.journey}</a>
          <a href="#assessment">{t.nav.assessment}</a>
          <a href="#deploy">{t.nav.deploy}</a>
        </nav>

        <div className="topbar-actions">
          <div className="lang-switcher">
            {Object.keys(translations).map((language) => (
              <button
                key={language}
                type="button"
                className={language === lang ? "active" : ""}
                onClick={() => setLang(language)}
              >
                <Globe size={14} />
                {language.toUpperCase()}
              </button>
            ))}
          </div>

          <a className="primary-link" href="#terminal">
            <Cpu size={16} />
            {t.nav.connect}
          </a>
        </div>
      </header>

      <main>
        <section id="hero" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow">
              <Bot size={14} />
              {t.hero.badge}
            </div>
            <h1>
              <span>{t.hero.title1}</span>
              <strong>{t.hero.title2}</strong>
            </h1>
            <p className="hero-subtitle">{t.hero.subtitle}</p>
            <p className="hero-quote">{t.hero.quote}</p>
            <div className="hero-actions">
              <a href="#structure" className="button button-primary">
                <Terminal size={18} />
                {t.hero.primary}
              </a>
              <a href="#academies" className="button button-secondary">
                <BookOpen size={18} />
                {t.hero.secondary}
              </a>
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel">
              <div className="panel-header">
                <span>clawford.ascii</span>
                <span>identity</span>
              </div>
              <pre className="ascii-art">{asciiLogo}</pre>
              <p className="panel-note">
                Claw + ford. A lobster at the riverbank, learning how to act with
                discipline before acting at scale.
              </p>
            </div>
          </div>
        </section>

        <section id="structure" className="section section-grid">
          <article className="card emphasis-card">
            <h2>{t.sections.structureTitle}</h2>
            <p>{t.sections.structureText}</p>
            <div className="layers-grid">
              {universityLayers.map((layer) => {
                const Icon = layer.icon;

                return (
                  <div key={layer.title.en} className="layer-item">
                    <Icon size={16} />
                    <strong>{layer.title[lang]}</strong>
                    <span>{layer.body[lang]}</span>
                  </div>
                );
              })}
            </div>
          </article>

          <article className="card compact-card">
            <h2>{t.sections.flowTitle}</h2>
            <p>{t.sections.flowText}</p>
            <ol className="flow-list">
              <li>1. Applicant onboarding</li>
              <li>2. Foundations modules</li>
              <li>3. Scenario + rubric gate</li>
              <li>4. Academy specialization</li>
              <li>5. Capstone and credentials</li>
            </ol>
          </article>
        </section>

        <section id="terminal" className="section terminal-section">
          <div className="section-copy">
            <h2>{t.sections.terminalTitle}</h2>
            <p>{t.sections.terminalText}</p>
            <div className={`status-pill ${isConnected ? "connected" : ""}`}>
              {isConnected ? <CheckCircle2 size={16} /> : <Cpu size={16} />}
              {isConnected ? t.terminal.connected : t.terminal.idle}
            </div>
            <div className="terminal-actions">
              <button type="button" className="button button-primary" onClick={handleConnect}>
                <Cpu size={18} />
                {t.terminal.connectButton}
              </button>
              <button type="button" className="button button-secondary" onClick={handleExam}>
                <ClipboardCheck size={18} />
                {examPassed ? t.ui.passed : t.ui.startExam}
              </button>
            </div>
          </div>

          <div className="terminal-window">
            <div className="terminal-header">
              <span className="traffic">
                <i />
                <i />
                <i />
              </span>
              <span>clawford-cli</span>
            </div>
            <div className="terminal-body">
              {terminalLogs.map((log, index) => (
                <div key={`${log}-${index}`} className="terminal-line">
                  <span className="prompt">~</span>
                  <span>{log}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="curriculum" className="section">
          <div className="section-heading">
            <h2>{t.sections.curriculumTitle}</h2>
            <p>{t.sections.curriculumText}</p>
          </div>

          <div className="course-grid">
            {curriculum.map((module) => {
              const Icon = module.icon;
              const isLearned = completedModules.includes(module.id);

              return (
                <article key={module.id} className={`course-card theme-${module.theme}`}>
                  <div className="course-icon">
                    <Icon size={22} />
                  </div>
                  <div className="course-meta">
                    <span>{t.ui.level}: {module.level[lang]}</span>
                    <span>{t.ui.duration}: {module.duration}</span>
                    <span>{t.ui.credits}: {module.credits}</span>
                  </div>
                  <h3>{module.title[lang]}</h3>
                  <p>{module.summary[lang]}</p>
                  <button
                    type="button"
                    className={`button ${isLearned ? "button-success" : "button-secondary"}`}
                    onClick={() => handleStudy(module.id)}
                    disabled={isLearned || !isConnected}
                  >
                    {isLearned ? <CheckCircle2 size={18} /> : <ChevronRight size={18} />}
                    {isLearned ? t.ui.learned : t.ui.learn}
                  </button>
                </article>
              );
            })}
          </div>
        </section>

        <section id="academies" className="section">
          <div className="section-heading">
            <h2>{t.sections.academyTitle}</h2>
            <p>{t.sections.academyText}</p>
          </div>

          <div className="academy-grid">
            {academies.map((academy) => (
              <article key={academy.id} className="card academy-card">
                <h3>{academy.title[lang]}</h3>
                <p>{academy.focus[lang]}</p>
                <div className="professor-list">
                  {academy.professors.map((professor) => (
                    <span key={professor} className="badge-chip">
                      <Bot size={12} />
                      {professor}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="journey" className="section section-grid">
          <article className="card">
            <div className="section-heading tight">
              <h2>{t.sections.journeyTitle}</h2>
              <p>{t.sections.journeyText}</p>
            </div>
            <div className="journey-list">
              {learnerJourney.map((item, index) => (
                <div key={item.state.en} className="journey-item">
                  <div className="journey-index">{index + 1}</div>
                  <div>
                    <strong>{item.state[lang]}</strong>
                    <p>{item.checkpoint[lang]}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="card emphasis-card">
            <div className="section-heading tight">
              <h2>{t.sections.credentialsTitle}</h2>
              <p>{t.sections.credentialsText}</p>
            </div>
            <div className="credential-list">
              {credentialTiers.map((credential) => (
                <div key={credential.tier.en} className="credential-item">
                  <Award size={16} />
                  <div>
                    <strong>{credential.tier[lang]}</strong>
                    <p>{credential.rule[lang]}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="section">
          <div className="section-heading">
            <h2>{t.sections.principlesTitle}</h2>
            <p>{t.sections.principlesText}</p>
          </div>

          <div className="principles-grid">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title.en} className="card">
                  <div className="principle-head">
                    <Icon size={18} />
                    <h3>{item.title[lang]}</h3>
                  </div>
                  <p>{item.body[lang]}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="assessment" className="section section-grid">
          <article className="card">
            <div className="section-heading tight">
              <h2>{t.sections.examTitle}</h2>
              <p>{t.sections.examText}</p>
            </div>
            <div className="evolution-list">
              {assessmentEvolution.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.stage.en} className="evolution-item">
                    <Icon size={16} />
                    <div>
                      <strong>{step.stage[lang]}</strong>
                      <p>{step.summary[lang]}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <ul className="criteria-list">
              {examCriteria.map((criterion) => (
                <li key={criterion.en}>
                  <CheckCircle2 size={16} />
                  <span>{criterion[lang]}</span>
                </li>
              ))}
            </ul>
          </article>

          <article id="deploy" className="card emphasis-card">
            <div className="section-heading tight">
              <h2>{t.sections.deployTitle}</h2>
              <p>{t.sections.deployText}</p>
            </div>
            <div className="deploy-steps">
              <div>
                <strong>1.</strong>
                <span>Push repo to GitHub</span>
              </div>
              <div>
                <strong>2.</strong>
                <span>Import into Vercel</span>
              </div>
              <div>
                <strong>3.</strong>
                <span>Framework preset: Vite</span>
              </div>
              <div>
                <strong>4.</strong>
                <span>Build command: npm run build</span>
              </div>
              <div>
                <strong>5.</strong>
                <span>Output directory: dist</span>
              </div>
            </div>
          </article>
        </section>

        <section className="section">
          <article className="card compact-card">
            <h2>{t.sections.docsTitle}</h2>
            <ul className="path-list">
              {docs.map((path) => (
                <li key={path}>{path}</li>
              ))}
            </ul>
          </article>
        </section>
      </main>

      <footer className="footer">
        <p>{t.footer}</p>
      </footer>
    </div>
  );
}

export default App;
