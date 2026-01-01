import { useLanguage } from '../context/LanguageContext';

export function Competition() {
  const { t } = useLanguage();

  const comparisonData = [
    { featureKey: 'competition.anonymous', theWall: true, yikYak: true, fizz: true },
    { featureKey: 'competition.nationwide', theWall: true, yikYak: false, fizz: false },
    { featureKey: 'competition.verification', theWall: true, yikYak: false, fizz: true },
    { featureKey: 'competition.multilang', theWall: true, yikYak: false, fizz: false },
    { featureKey: 'competition.clean', theWall: true, yikYak: true, fizz: false },
    { featureKey: 'competition.global', theWall: true, yikYak: false, fizz: false },
  ];

  return (
    <section className="competition">
      <div className="section-header">
        <h2>{t('competition.title')}</h2>
        <p>{t('competition.subtitle')}</p>
      </div>
      <div className="comparison-table">
        <div className="comparison-header">
          <span>{t('competition.feature')}</span>
          <span>The Wall</span>
          <span>YikYak</span>
          <span>Fizz</span>
        </div>
        {comparisonData.map((row, index) => (
          <div key={index} className="comparison-row">
            <span>{t(row.featureKey)}</span>
            <span className={row.theWall ? 'check' : 'cross'}>
              {row.theWall ? '✓' : '✗'}
            </span>
            <span className={row.yikYak ? 'check' : 'cross'}>
              {row.yikYak ? '✓' : '✗'}
            </span>
            <span className={row.fizz ? 'check' : 'cross'}>
              {row.fizz ? '✓' : '✗'}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
