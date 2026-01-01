import { useLanguage } from '../context/LanguageContext';
import { PhoneMockup } from './PhoneMockup';

export function Hero() {
  const { t } = useLanguage();

  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span>🎓</span> {t('hero.badge')}
        </div>
        <h1>
          {t('hero.title1')}<br />
          <span className="gradient-text">{t('hero.title2')}</span><br />
          {t('hero.title3')}
        </h1>
        <p>{t('hero.description')}</p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={scrollToWaitlist}>
            {t('hero.cta')}
          </button>
          <a href="#features" className="btn btn-secondary">
            {t('hero.learnMore')}
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">28M+</div>
            <div className="stat-label">{t('hero.studentsWorldwide')}</div>
          </div>
          <div className="stat">
            <div className="stat-number">500+</div>
            <div className="stat-label">{t('hero.universities')}</div>
          </div>
          <div className="stat">
            <div className="stat-number">100%</div>
            <div className="stat-label">{t('hero.anonymous')}</div>
          </div>
        </div>

        <PhoneMockup />
      </div>
    </section>
  );
}
