import { useLanguage } from '../context/LanguageContext';

export function OGPromo() {
  const { t } = useLanguage();

  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="og-promo" id="pricing">
      <div className="section-header">
        <h2>{t('og.title')}</h2>
        <p>{t('og.subtitle')}</p>
      </div>

      <div className="og-card">
        <div className="og-badge">{t('og.badge')}</div>
        <h3>{t('og.cardTitle')}</h3>
        <p className="subtitle">{t('og.cardSubtitle')}</p>

        <div className="og-price">
          <span className="free">{t('og.free')}</span>
          <span className="duration">{t('og.forYear')}</span>
        </div>

        <ul className="og-perks">
          <li>{t('og.perk1')}</li>
          <li>{t('og.perk2')}</li>
          <li>{t('og.perk3')}</li>
          <li>{t('og.perk4')}</li>
          <li>{t('og.perk5')}</li>
          <li>{t('og.perk6')}</li>
        </ul>

        <button className="btn" onClick={scrollToWaitlist}>
          {t('og.cta')}
        </button>

        <p className="og-note">{t('og.note')}</p>
      </div>
    </section>
  );
}
