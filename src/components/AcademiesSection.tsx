import { Bot } from "lucide-react";
import { academies } from "@/data/university";
import type { Lang, Translations } from "@/types";

interface Props {
  lang: Lang;
  t: Translations;
}

export default function AcademiesSection({ lang, t }: Props) {
  return (
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
  );
}
