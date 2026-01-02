import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  PageModal,
  PrivacyContent,
  TermsContent,
  GuidelinesContent,
  AboutContent,
} from './PageModal';

type PageType = 'about' | 'privacy' | 'terms' | 'guidelines' | null;

export function Footer() {
  const { t } = useLanguage();
  const [activePage, setActivePage] = useState<PageType>(null);

  const pageTitles: Record<Exclude<PageType, null>, string> = {
    about: t('footer.aboutUs'),
    privacy: t('footer.privacy'),
    terms: t('footer.terms'),
    guidelines: t('footer.guidelines'),
  };

  const openPage = (page: PageType) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActivePage(page);
  };

  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="footer-brand">
            <span className="logo">The Wall <span>다왈</span></span>
            <p>{t('footer.tagline')}</p>
          </div>
          <div className="footer-links">
            <h4>{t('footer.product')}</h4>
            <ul>
              <li><a href="#features">{t('nav.features')}</a></li>
              <li><a href="#community">{t('nav.community')}</a></li>
              <li><a href="#universities">{t('nav.universities')}</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>{t('footer.team')}</h4>
            <ul>
              <li><a href="#about" onClick={openPage('about')}>{t('footer.aboutUs')}</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>{t('footer.legal')}</h4>
            <ul>
              <li><a href="#privacy" onClick={openPage('privacy')}>{t('footer.privacy')}</a></li>
              <li><a href="#terms" onClick={openPage('terms')}>{t('footer.terms')}</a></li>
              <li><a href="#guidelines" onClick={openPage('guidelines')}>{t('footer.guidelines')}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
        </div>
      </footer>

      {activePage && (
        <PageModal
          isOpen={true}
          onClose={() => setActivePage(null)}
          title={pageTitles[activePage]}
        >
          {activePage === 'about' && <AboutContent />}
          {activePage === 'privacy' && <PrivacyContent />}
          {activePage === 'terms' && <TermsContent />}
          {activePage === 'guidelines' && <GuidelinesContent />}
        </PageModal>
      )}
    </>
  );
}
