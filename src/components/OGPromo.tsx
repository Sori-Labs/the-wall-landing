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
    <section className="community-section" id="community">
      <div className="section-header">
        <h2>{t('og.title')}</h2>
        <p>{t('og.subtitle')}</p>
      </div>

      <div className="community-cards">
        {/* OG Card */}
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

        {/* Ambassador Card */}
        <div className="ambassador-card">
          <div className="ambassador-badge">{t('ambassador.badge')}</div>
          <h3>{t('ambassador.title')}</h3>
          <p className="subtitle">{t('ambassador.subtitle')}</p>

          <div className="ambassador-columns">
            <div className="ambassador-column">
              <h4>{t('ambassador.getTitle')}</h4>
              <ul>
                <li>{t('ambassador.get1')}</li>
                <li>{t('ambassador.get2')}</li>
                <li>{t('ambassador.get3')}</li>
                <li>{t('ambassador.get4')}</li>
                <li>{t('ambassador.get5')}</li>
                <li>{t('ambassador.get6')}</li>
              </ul>
            </div>

            <div className="ambassador-column">
              <h4>{t('ambassador.doTitle')}</h4>
              <ul>
                <li>{t('ambassador.do1')}</li>
                <li>{t('ambassador.do2')}</li>
                <li>{t('ambassador.do3')}</li>
              </ul>

              <h4>{t('ambassador.howTitle')}</h4>
              <ul>
                <li>{t('ambassador.how1')}</li>
                <li>{t('ambassador.how2')}</li>
                <li>{t('ambassador.how3')}</li>
              </ul>
            </div>
          </div>

          <p className="ambassador-note">{t('ambassador.note')}</p>
          <p className="ambassador-tagline">{t('ambassador.tagline')}</p>
        </div>
      </div>
    </section>
  );
}
