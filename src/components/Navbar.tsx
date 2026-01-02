import { useState } from 'react';
import { useLanguage, languageNames, type Language } from '../context/LanguageContext';

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [showLangMenu, setShowLangMenu] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const languages: Language[] = ['en', 'ko', 'zh'];

  return (
    <nav>
      <div className="logo">The Wall <span>다왈</span></div>
      <ul className="nav-links">
        <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>{t('nav.features')}</a></li>
        <li><a href="#community" onClick={(e) => { e.preventDefault(); scrollToSection('community'); }}>{t('nav.community')}</a></li>
        <li><a href="#universities" onClick={(e) => { e.preventDefault(); scrollToSection('universities'); }}>{t('nav.universities')}</a></li>
      </ul>
      <div className="nav-right">
        <div className="language-switcher">
          <button
            className="lang-btn"
            onClick={() => setShowLangMenu(!showLangMenu)}
            aria-label="Select language"
          >
            <span className="lang-icon">🌐</span>
            <span className="lang-current">{languageNames[language]}</span>
            <span className="lang-arrow">▼</span>
          </button>
          {showLangMenu && (
            <div className="lang-menu">
              {languages.map((lang) => (
                <button
                  key={lang}
                  className={`lang-option ${language === lang ? 'active' : ''}`}
                  onClick={() => {
                    setLanguage(lang);
                    setShowLangMenu(false);
                  }}
                >
                  {languageNames[lang]}
                </button>
              ))}
            </div>
          )}
        </div>
        <button className="btn btn-primary" onClick={() => scrollToSection('waitlist')}>
          {t('nav.joinWaitlist')}
        </button>
      </div>
    </nav>
  );
}
