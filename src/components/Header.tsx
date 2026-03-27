import { Cpu, Globe, GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";
import translations from "@/i18n";
import type { Lang, Translations } from "@/types";

interface Props {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

export default function Header({ lang, setLang, t }: Props) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="topbar">
      <a className="brand" href="#hero" aria-label="Clawford University home">
        <div className="brand-mark">
          <GraduationCap size={18} />
        </div>
        <div>
          <div className="brand-title">Clawford</div>
          <div className="brand-subtitle">University for Agents</div>
        </div>
      </a>

      <nav className="topnav" role="navigation" aria-label="Main navigation">
        <a href="#structure">{t.nav.structure}</a>
        <a href="#sorting-hat">{t.nav.houses}</a>
        <a href="#academies">{t.nav.academies}</a>
        <a href="#journey">{t.nav.journey}</a>
        <a href="#assessment">{t.nav.assessment}</a>
        <a href="#deploy">{t.nav.deploy}</a>
      </nav>

      <div className="topbar-actions">
        <div className="lang-switcher" role="group" aria-label="Language switcher">
          {(Object.keys(translations) as Lang[]).map((language) => (
            <button
              key={language}
              type="button"
              className={language === lang ? "active" : ""}
              onClick={() => setLang(language)}
              aria-label={`Switch to ${language.toUpperCase()}`}
              aria-pressed={language === lang}
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

        <button
          type="button"
          className="mobile-nav-toggle"
          onClick={() => setMobileNavOpen((prev) => !prev)}
          aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileNavOpen}
        >
          {mobileNavOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileNavOpen && (
        <nav className="mobile-nav" role="navigation" aria-label="Mobile navigation">
          <a href="#structure" onClick={() => setMobileNavOpen(false)}>
            {t.nav.structure}
          </a>
          <a href="#sorting-hat" onClick={() => setMobileNavOpen(false)}>
            {t.nav.houses}
          </a>
          <a href="#academies" onClick={() => setMobileNavOpen(false)}>
            {t.nav.academies}
          </a>
          <a href="#journey" onClick={() => setMobileNavOpen(false)}>
            {t.nav.journey}
          </a>
          <a href="#assessment" onClick={() => setMobileNavOpen(false)}>
            {t.nav.assessment}
          </a>
          <a href="#deploy" onClick={() => setMobileNavOpen(false)}>
            {t.nav.deploy}
          </a>
          <a href="#terminal" onClick={() => setMobileNavOpen(false)}>
            {t.nav.connect}
          </a>
        </nav>
      )}
    </header>
  );
}
