import { Cpu, Globe, GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";
import translations from "@/i18n";
import type { Lang, Translations } from "@/types";

interface Props {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

interface NavItem {
  href: string;
  labelKey: keyof Translations["nav"];
}

const NAV_ITEMS: NavItem[] = [
  { href: "#structure", labelKey: "structure" },
  { href: "#sorting-hat", labelKey: "houses" },
  { href: "#courses", labelKey: "courses" },
  { href: "#journey", labelKey: "journey" },
  { href: "#assessment", labelKey: "assessment" },
];

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
        {NAV_ITEMS.map((item) => (
          <a key={item.href} href={item.href}>
            {t.nav[item.labelKey]}
          </a>
        ))}
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
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMobileNavOpen(false)}>
              {t.nav[item.labelKey]}
            </a>
          ))}
          <a href="#terminal" onClick={() => setMobileNavOpen(false)}>
            {t.nav.connect}
          </a>
        </nav>
      )}
    </header>
  );
}
