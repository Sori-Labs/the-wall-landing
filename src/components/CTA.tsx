import { useLanguage } from '../context/LanguageContext';

export function CTA() {
  const { t } = useLanguage();

  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="cta">
      <h2>{t('cta.title')}</h2>
      <p>{t('cta.subtitle')}</p>
      <button className="btn" onClick={scrollToWaitlist}>
        {t('cta.button')}
      </button>
    </section>
  );
}
