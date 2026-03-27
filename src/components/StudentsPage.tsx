import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Award, BookOpen, GraduationCap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { houseMap } from "@/data/houses";
import translations from "@/i18n";
import type { HouseId, Lang, StudentWallEntry } from "@/types";

interface Props {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export default function StudentsPage({ lang, setLang }: Props) {
  const [students, setStudents] = useState<StudentWallEntry[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  const t = translations[lang];
  const sw = t.studentWall;

  useEffect(() => {
    fetch("/api/students")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data?.students) setStudents(data.students);
      })
      .catch(() => setFetchError(true))
      .finally(() => setLoaded(true));
  }, []);

  const sorted = useMemo(
    () =>
      [...students].sort((a, b) => {
        const creditDiff = b.totalCredits - a.totalCredits;
        if (creditDiff !== 0) return creditDiff;
        const aBest = a.bestExamScore ?? -1;
        const bBest = b.bestExamScore ?? -1;
        return bBest - aBest;
      }),
    [students],
  );

  return (
    <div className="app-shell">
      <div className="backdrop-orb backdrop-orb-a" aria-hidden="true" />
      <div className="backdrop-orb backdrop-orb-b" aria-hidden="true" />

      <Header lang={lang} setLang={setLang} t={t} />

      <main id="main-content" className="students-page">
        <div className="students-page-header">
          <Link to="/" className="back-link">
            <ArrowLeft size={18} />
            {sw.backHome}
          </Link>
          <h1>{sw.pageTitle}</h1>
          <p>{sw.pageSubtitle}</p>
        </div>

        {fetchError && (
          <div className="student-wall-empty">
            <p>{lang === "zh" ? "加载学生数据失败。" : "Failed to load student data."}</p>
          </div>
        )}

        {loaded && !fetchError && sorted.length === 0 && (
          <div className="student-wall-empty">
            <GraduationCap size={48} />
            <p>{sw.noStudents}</p>
          </div>
        )}

        {sorted.length > 0 && (
          <div className="students-page-table" role="table" aria-label={sw.pageTitle}>
            <div className="students-table-header" role="row">
              <span className="col-rank" role="columnheader">#</span>
              <span className="col-name" role="columnheader">
                {sw.name}
              </span>
              <span className="col-uid" role="columnheader">{sw.uid}</span>
              <span className="col-house" role="columnheader">
                {sw.house}
              </span>
              <span className="col-credits" role="columnheader">{sw.totalCredits}</span>
              <span className="col-modules" role="columnheader">{sw.completedModules}</span>
              <span className="col-exam" role="columnheader">{sw.examStatus}</span>
              <span className="col-score" role="columnheader">{sw.bestScore}</span>
            </div>

            {sorted.map((s, i) => {
              const house = s.house
                ? houseMap[s.house as HouseId]
                : null;
              const hasBestScore =
                typeof s.bestExamScore === "number" &&
                Number.isFinite(s.bestExamScore) &&
                typeof s.examMaxScore === "number" &&
                Number.isFinite(s.examMaxScore);
              const bestScore =
                hasBestScore
                  ? `${s.bestExamScore}/${s.examMaxScore}`
                  : sw.noScore;
              const attemptCount =
                s.examAttempts > 0 ? ` · ${s.examAttempts} ${sw.attemptsSuffix}` : "";

              return (
                <div
                  key={s.uid}
                  className="students-table-row"
                  role="row"
                  style={
                    house
                      ? ({
                          "--house-color": house.color,
                          "--house-accent": house.accentColor,
                        } as React.CSSProperties)
                      : undefined
                  }
                >
                  <span className="col-rank" role="cell">{i + 1}</span>
                  <span className="col-name" role="cell">
                    <strong>{s.displayName || s.uid}</strong>
                  </span>
                  <span className="col-uid" role="cell">
                    <code>{s.uid}</code>
                  </span>
                  <span className="col-house" role="cell">
                    {house ? (
                      <span
                        className="house-badge"
                        style={{ color: house.color }}
                      >
                        {house.name[lang]}
                      </span>
                    ) : (
                      "—"
                    )}
                  </span>
                  <span className="col-credits" role="cell">
                    <Award size={14} /> {s.totalCredits}
                  </span>
                  <span className="col-modules" role="cell">
                    <BookOpen size={14} /> {s.completedModules}
                  </span>
                  <span className="col-exam" role="cell">
                    <span
                      className={`exam-badge ${s.examPassed ? "exam-pass" : ""}`}
                    >
                      {s.examPassed ? sw.passed : sw.inProgress}
                    </span>
                    {attemptCount}
                  </span>
                  <span className="col-score" role="cell">
                    {bestScore}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </main>

      <Footer t={t} />
    </div>
  );
}
