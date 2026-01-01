import { useEffect, useRef } from 'react';
import { useLanguage, type Language } from '../context/LanguageContext';

interface University {
  emoji: string;
  name: string;
  students: string;
}

const universitiesByLang: Record<Language, University[]> = {
  en: [
    { emoji: '💜', name: 'UW Seattle', students: '60,000' },
    { emoji: '🤘', name: 'UT Austin', students: '55,000' },
    { emoji: '🏛️', name: 'SNU', students: '30,000' },
    { emoji: '🎨', name: 'Hongik University', students: '20,000' },
    { emoji: '🏯', name: 'HKU', students: '40,000' },
    { emoji: '🐉', name: 'CUHK', students: '30,000' },
    { emoji: '🎓', name: 'Ivy League', students: '200,000' },
    { emoji: '🇰🇷', name: "'SKY' Universities", students: '120,000' },
  ],
  ko: [
    { emoji: '🏛️', name: '서울대학교', students: '30,000' },
    { emoji: '🦅', name: '고려대학교', students: '40,000' },
    { emoji: '🦁', name: '연세대학교', students: '50,000' },
    { emoji: '🎨', name: '홍익대학교', students: '20,000' },
    { emoji: '💜', name: 'UW Seattle', students: '60,000' },
    { emoji: '🤘', name: 'UT Austin', students: '55,000' },
    { emoji: '🏯', name: 'HKU', students: '40,000' },
    { emoji: '🎓', name: 'Ivy League', students: '200,000' },
  ],
  zh: [
    { emoji: '🏯', name: '香港大學 HKU', students: '40,000' },
    { emoji: '🐉', name: '香港中文大學 CUHK', students: '30,000' },
    { emoji: '🏛️', name: '首爾大學 SNU', students: '30,000' },
    { emoji: '💜', name: 'UW Seattle', students: '60,000' },
    { emoji: '🤘', name: 'UT Austin', students: '55,000' },
    { emoji: '🎓', name: 'Ivy League', students: '200,000' },
    { emoji: '🇰🇷', name: "'SKY' 大學", students: '120,000' },
    { emoji: '🎨', name: '弘益大學', students: '20,000' },
  ],
};

export function Universities() {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const universities = universitiesByLang[language];

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
    <section className="universities" id="universities" ref={sectionRef}>
      <div className="section-header">
        <h2>{t('universities.title')}</h2>
        <p>{t('universities.subtitle')}</p>
      </div>
      <div className="uni-grid">
        {universities.map((uni, index) => (
          <div
            key={index}
            className="uni-card fade-in"
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="emoji">{uni.emoji}</div>
            <h4>{uni.name}</h4>
            <p>{uni.students} {t('universities.students')}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
