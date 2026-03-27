import { CheckCircle2 } from "lucide-react";
import { assessmentEvolution, examCriteria } from "@/data/assessment";
import type { Lang, Translations } from "@/types";

interface Props {
  lang: Lang;
  t: Translations;
}

export default function AssessmentSection({ lang, t }: Props) {
  return (
    <section id="assessment" className="section">
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
    </section>
  );
}
