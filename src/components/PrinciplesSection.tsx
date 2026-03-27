import principles from "@/data/principles";
import type { Lang, Translations } from "@/types";

interface Props {
  lang: Lang;
  t: Translations;
}

export default function PrinciplesSection({ lang, t }: Props) {
  return (
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
  );
}
