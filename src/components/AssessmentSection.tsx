import { CheckCircle2 } from "lucide-react";
import { assessmentEvolution, docs, examCriteria } from "@/data/assessment";
import type { Lang, Translations } from "@/types";

interface Props {
  lang: Lang;
  t: Translations;
}

export default function AssessmentSection({ lang, t }: Props) {
  return (
    <>
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
            {t.sections.deploySteps.map((step, i) => (
              <div key={step}>
                <strong>{i + 1}.</strong>
                <span>{step}</span>
              </div>
            ))}
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
    </>
  );
}
