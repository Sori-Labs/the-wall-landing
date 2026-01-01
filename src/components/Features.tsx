import { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function Features() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: '🎭',
      titleKey: 'features.anonymous.title',
      descKey: 'features.anonymous.desc',
    },
    {
      icon: '🏫',
      titleKey: 'features.verified.title',
      descKey: 'features.verified.desc',
    },
    {
      icon: '🌍',
      titleKey: 'features.campus.title',
      descKey: 'features.campus.desc',
    },
    {
      icon: '🗣️',
      titleKey: 'features.language.title',
      descKey: 'features.language.desc',
    },
    {
      icon: '🎓',
      titleKey: 'features.advice.title',
      descKey: 'features.advice.desc',
    },
    {
      icon: '🔥',
      titleKey: 'features.hottakes.title',
      descKey: 'features.hottakes.desc',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.fade-in');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="features" id="features" ref={sectionRef}>
      <div className="section-header">
        <h2>{t('features.title')}</h2>
        <p>{t('features.subtitle')}</p>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-card fade-in"
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3>{t(feature.titleKey)}</h3>
            <p>{t(feature.descKey)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
