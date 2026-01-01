const stats = [
  { number: '20M', label: 'US Students' },
  { number: '3M', label: 'Japan' },
  { number: '2M', label: 'South Korea' },
  { number: '2M', label: 'Hong Kong' },
  { number: '1.5M', label: 'Canada' },
];

export function GlobalStats() {
  return (
    <section className="global-stats">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <h3>{stat.number}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
