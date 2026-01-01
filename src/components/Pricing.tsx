export function Pricing() {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pricing" id="pricing">
      <div className="section-header">
        <h2>Choose Your Plan</h2>
        <p>Start free, upgrade when you're ready</p>
      </div>
      <div className="pricing-cards">
        <div className="pricing-card">
          <h3>Free</h3>
          <div className="price">$0<span>/forever</span></div>
          <ul className="pricing-features">
            <li>View your campus feed</li>
            <li>Anonymous posting</li>
            <li>Basic stickers</li>
            <li>Limited DMs</li>
          </ul>
          <button className="btn btn-secondary" onClick={scrollToWaitlist}>
            Get Started
          </button>
        </div>
        <div className="pricing-card featured">
          <span className="popular-badge">Most Popular</span>
          <h3>Premium</h3>
          <div className="price">$5<span>/month</span></div>
          <div className="save-badge">Or $24/year (save 60%!)</div>
          <ul className="pricing-features">
            <li>Unlimited DMs</li>
            <li>Special profile badge</li>
            <li>All sticker packs</li>
            <li>View ANY university</li>
            <li>Exclusive Ivy League forums</li>
          </ul>
          <button className="btn" onClick={scrollToWaitlist}>
            Go Premium
          </button>
        </div>
      </div>
    </section>
  );
}
