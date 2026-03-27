import { Award } from "lucide-react";
import { credentialTiers, learnerJourney } from "@/data/university";
import type { Lang, Translations } from "@/types";

interface Props {
  lang: Lang;
  t: Translations;
}

export default function JourneySection({ lang, t }: Props) {
  return (
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
  );
}
