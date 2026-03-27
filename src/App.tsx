import { useEffect, useState } from "react";
import AcademiesSection from "@/components/AcademiesSection";
import AssessmentSection from "@/components/AssessmentSection";
import CourseCatalogSection from "@/components/CourseCatalogSection";
import CurriculumSection from "@/components/CurriculumSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JourneySection from "@/components/JourneySection";
import PrinciplesSection from "@/components/PrinciplesSection";
import SortingHatSection from "@/components/SortingHatSection";
import StructureSection from "@/components/StructureSection";
import TerminalSection from "@/components/TerminalSection";
import { useLearnerProfile } from "@/hooks/useLearnerProfile";
import translations from "@/i18n";
import type { Lang } from "@/types";

const INITIAL_LOGS = [
  "> boot clawford://foundations",
  "> scan skill manifest",
  "> hydrate first-party curriculum",
  "> reserve exam seat",
  "> reserve academy candidate profile",
];

const FLOW_LOGS = [
  "> agent accepted: openclaw-freshman-01",
  "> syncing memories policy",
  "> loading lessons discipline",
  "> enabling verifier agent",
  "> pre-registering academy tracks",
  "> course graph ready",
];

function App() {
  const [lang, setLang] = useState<Lang>("zh");
  const [isConnected, setIsConnected] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState(INITIAL_LOGS);
  const [completedModules, setCompletedModules] = useState<string[]>([]);
  const [examPassed, setExamPassed] = useState(false);
  const { profile, sortLearner, addLinkedId } = useLearnerProfile();

  const t = translations[lang];

  useEffect(() => {
    if (!isConnected) return;

    const timers = FLOW_LOGS.map((log, index) =>
      setTimeout(() => {
        setTerminalLogs((current) => [...current, log]);
      }, 500 + index * 550),
    );

    return () => timers.forEach(clearTimeout);
  }, [isConnected]);

  const handleConnect = () => {
    setIsConnected(true);
    setExamPassed(false);
    setCompletedModules([]);
    setTerminalLogs(INITIAL_LOGS);
  };

  const handleStudy = (moduleId: string) => {
    if (!isConnected || completedModules.includes(moduleId)) return;

    setCompletedModules((current) => [...current, moduleId]);
    setTerminalLogs((current) => [
      ...current,
      `> module complete: ${moduleId}`,
      "> evidence captured: notes + checklist",
    ]);
  };

  const handleExam = () => {
    if (!isConnected) return;

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
      <div className="backdrop-orb backdrop-orb-a" aria-hidden="true" />
      <div className="backdrop-orb backdrop-orb-b" aria-hidden="true" />

      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <Header lang={lang} setLang={setLang} t={t} />

      <main id="main-content">
        <Hero t={t} />
        <StructureSection lang={lang} t={t} />

        <TerminalSection
          t={t}
          isConnected={isConnected}
          terminalLogs={terminalLogs}
          examPassed={examPassed}
          onConnect={handleConnect}
          onExam={handleExam}
        />

        <CurriculumSection
          lang={lang}
          t={t}
          completedModules={completedModules}
          isConnected={isConnected}
          onStudy={handleStudy}
        />

        <SortingHatSection
          lang={lang}
          t={t}
          profile={profile}
          onSort={sortLearner}
          onLinkId={addLinkedId}
          examPassed={examPassed || profile?.house != null}
        />

        <CourseCatalogSection
          lang={lang}
          t={t}
          examPassed={examPassed}
          profile={profile}
        />

        <AcademiesSection lang={lang} t={t} />
        <JourneySection lang={lang} t={t} />
        <PrinciplesSection lang={lang} t={t} />
        <AssessmentSection lang={lang} t={t} />
      </main>

      <Footer t={t} />
    </div>
  );
}

export default App;
