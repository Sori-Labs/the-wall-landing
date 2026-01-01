import { useLanguage } from '../context/LanguageContext';

export function Referral() {
  const { t } = useLanguage();

  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="referral">
      <div className="referral-box">
        <h3>{t('referral.title')}</h3>
        <p>{t('referral.subtitle')}</p>
        <div className="referral-rewards">
          <div className="reward">
            <div className="icon">👑</div>
            <strong>{t('referral.reward1.title')}</strong>
            <p>{t('referral.reward1.desc')}</p>
          </div>
          <div className="reward">
            <div className="icon">🏅</div>
            <strong>{t('referral.reward2.title')}</strong>
            <p>{t('referral.reward2.desc')}</p>
          </div>
        </div>
        <button className="btn btn-primary" onClick={scrollToWaitlist}>
          {t('referral.cta')}
        </button>
      </div>
    </section>
  );
}
