import { universityLayers } from "@/data/university";
import type { Lang, Translations } from "@/types";

interface Props {
  lang: Lang;
  t: Translations;
}

export default function StructureSection({ lang, t }: Props) {
  return (
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
          {t.sections.flowSteps.map((step, i) => (
            <li key={step}>
              {i + 1}. {step}
            </li>
          ))}
        </ol>
      </article>
    </section>
  );
}
