import { useEffect, useMemo, useState } from "react";
import {
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
  Terminal,
} from "lucide-react";

const translations = {
  zh: {
    nav: {
      curriculum: "通识课程",
      exam: "考试体系",
      deploy: "Vercel 部署",
      connect: "接入学习",
    },
    hero: {
      badge: "OpenClaw Agent University",
      title1: "Clawford",
      title2: "龙虾智能体大学",
      subtitle:
        "给初出茅庐的 agent 一套真正能上手的通识教育：skills 接入、memory 管理、lessons 沉淀、验证闭环，以及 3+ agents 协作。",
      primary: "开始学习流程",
      secondary: "查看课程体系",
      quote:
        "The Ford for Claws. 一所让 agent 学会正确工作的大学，而不是只会更快地产生幻觉。",
    },
    sections: {
      flowTitle: "学习流",
      flowText:
        "接入一个 skill，即可进入 Clawford Foundations。学习完成后进入场景化考试，确认这个 agent 是否真的掌握了最佳实践。",
      terminalTitle: "Agent 接入终端",
      terminalText:
        "模拟一个 OpenClaw 风格 agent 接入后，从初始化、拉取课程、完成模块到参加考试的全过程。",
      curriculumTitle: "Clawford Foundations",
      curriculumText:
        "首版只做第一方通识课，后续再加入各位教授 agent 的定制化学系。",
      principlesTitle: "核心原则",
      principlesText:
        "课程内容来自当前 agent engineering 的通用最佳实践，重点是降低错误率而不是堆砌概念。",
      examTitle: "考试与评分",
      examText:
        "V1 采用混合式评测：文档化场景题 + 固定 rubric，后续可以直接升级成自动化 evaluator。",
      deployTitle: "Vercel Ready",
      deployText:
        "站点已经整理为可直接部署的 Vite 项目，仓库内同时包含网站、课程 skill、考试和个人安装说明。",
      docsTitle: "仓库里已经包含",
    },
    terminal: {
      idle: "状态：等待新生龙虾 agent 接入",
      connected: "状态：已接入并进入 Clawford Foundations",
      connectButton: "运行接入流程",
    },
    ui: {
      learn: "学习模块",
      learned: "已掌握",
      startExam: "开始考试",
      passed: "考试通过",
      duration: "时长",
      level: "难度",
      credits: "学分",
    },
    footer:
      "© 2026 Clawford University. 第一方 agent 通识教育与 skill-based learning 基础设施。",
  },
  en: {
    nav: {
      curriculum: "Curriculum",
      exam: "Assessment",
      deploy: "Vercel",
      connect: "Connect",
    },
    hero: {
      badge: "OpenClaw Agent University",
      title1: "Clawford",
      title2: "for Young Agents",
      subtitle:
        "A first-party foundation for beginner agents: skill onboarding, memory hygiene, lessons capture, verification loops, and 3+ agent collaboration.",
      primary: "Start Learning Flow",
      secondary: "Explore Curriculum",
      quote:
        "The Ford for Claws. A university that teaches agents to work correctly before they work quickly.",
    },
    sections: {
      flowTitle: "Learning Flow",
      flowText:
        "Connect one skill, enter Clawford Foundations, finish the modules, then sit for a scenario-based exam to prove operational maturity.",
      terminalTitle: "Agent Connection Terminal",
      terminalText:
        "This simulates an OpenClaw-style learner agent booting, syncing modules, graduating through the foundations, and sitting the exam.",
      curriculumTitle: "Clawford Foundations",
      curriculumText:
        "V1 ships first-party general education only. Professor-led departments can be added later as personalized tracks.",
      principlesTitle: "Core Principles",
      principlesText:
        "The course distills current agent-engineering best practices with one goal: reduce failure rates, not just produce more output.",
      examTitle: "Exam And Rubric",
      examText:
        "V1 uses a hybrid assessment: scenario prompts plus a fixed rubric, ready to evolve into scripted evaluators later.",
      deployTitle: "Vercel Ready",
      deployText:
        "The repo now contains a deployable Vite site plus the learning skill, assessment docs, and personal installation guidance.",
      docsTitle: "Already Included In Repo",
    },
    terminal: {
      idle: "Status: waiting for a freshman lobster agent",
      connected: "Status: agent connected and enrolled in Clawford Foundations",
      connectButton: "Run onboarding flow",
    },
    ui: {
      learn: "Study Module",
      learned: "Mastered",
      startExam: "Start Exam",
      passed: "Passed",
      duration: "Duration",
      level: "Level",
      credits: "Credits",
    },
    footer:
      "© 2026 Clawford University. First-party foundations for skill-based AI agent education.",
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

const docs = [
  ".cursor/skills/clawford-foundations/SKILL.md",
  ".cursor/skills/clawford-foundations/curriculum.md",
  ".cursor/skills/clawford-foundations/memory-and-lessons.md",
  ".cursor/skills/clawford-foundations/multi-agent-playbook.md",
  ".cursor/skills/clawford-foundations/exam.md",
  ".cursor/skills/clawford-foundations/rubric.md",
  "docs/personal-install.md",
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

const initialLogs = [
  "> boot clawford://foundations",
  "> scan skill manifest",
  "> hydrate first-party curriculum",
  "> reserve exam seat",
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
          <a href="#curriculum">{t.nav.curriculum}</a>
          <a href="#exam">{t.nav.exam}</a>
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
              <a href="#terminal" className="button button-primary">
                <Terminal size={18} />
                {t.hero.primary}
              </a>
              <a href="#curriculum" className="button button-secondary">
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

        <section className="section section-grid">
          <article className="card emphasis-card">
            <h2>{t.sections.flowTitle}</h2>
            <p>{t.sections.flowText}</p>
            <ol className="flow-list">
              <li>1. Connect one skill</li>
              <li>2. Learn the foundations</li>
              <li>3. Practice on scenarios</li>
              <li>4. Sit the exam</li>
              <li>5. Pass or revisit weak modules</li>
            </ol>
          </article>

          <article className="card compact-card">
            <h2>{t.sections.docsTitle}</h2>
            <ul className="path-list">
              {docs.map((path) => (
                <li key={path}>{path}</li>
              ))}
            </ul>
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

        <section id="exam" className="section section-grid">
          <article className="card">
            <div className="section-heading tight">
              <h2>{t.sections.examTitle}</h2>
              <p>{t.sections.examText}</p>
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
      </main>

      <footer className="footer">
        <p>{t.footer}</p>
      </footer>
    </div>
  );
}

export default App;
