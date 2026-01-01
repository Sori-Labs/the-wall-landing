import { useState, type FormEvent } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAnimatedCounter, formatNumber } from '../hooks/useAnimatedCounter';

// Dynamic waitlist count based on date
// Reference: 2857 signups on Dec 31, 2025, growing 20-40/day with jitter
function getWaitlistCount(): number {
  const REFERENCE_DATE = new Date('2025-12-31T00:00:00');
  const REFERENCE_COUNT = 2857;
  const MIN_DAILY_RATE = 20;
  const MAX_DAILY_RATE = 40;

  const now = new Date();
  const daysDiff = Math.floor((now.getTime() - REFERENCE_DATE.getTime()) / (1000 * 60 * 60 * 24));

  // Calculate cumulative count with deterministic jitter per day
  let count = REFERENCE_COUNT;
  const direction = daysDiff >= 0 ? 1 : -1;
  const absDays = Math.abs(daysDiff);

  for (let i = 0; i < absDays; i++) {
    // Seeded pseudo-random based on day offset for consistency
    const seed = direction > 0 ? i : -i - 1;
    const hash = Math.abs(Math.sin(seed * 12.9898 + 78.233) * 43758.5453) % 1;
    const dailyGrowth = MIN_DAILY_RATE + Math.floor(hash * (MAX_DAILY_RATE - MIN_DAILY_RATE + 1));
    count += dailyGrowth * direction;
  }

  // Ensure count never goes below a minimum
  return Math.max(count, 100);
}

const WAITLIST_COUNT = getWaitlistCount();

export function WaitlistSignup() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const { count, isAnimating } = useAnimatedCounter({
    end: WAITLIST_COUNT,
    duration: 2500,
    delay: 500,
    easing: 'easeOut',
  });

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError(t('waitlist.errorEmpty'));
      return;
    }

    if (!validateEmail(email)) {
      setError(t('waitlist.errorInvalid'));
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      // Check if we got a valid JSON response (Vercel API)
      const contentType = response.headers.get('content-type');
      if (contentType?.includes('application/json')) {
        const result = await response.json();
        if (!result.ok) {
          throw new Error(result.error || 'Submission failed');
        }
        console.log('Waitlist submission:', result);
      } else {
        // Fallback for local dev without Vercel - use localStorage
        console.warn('API not available, using localStorage fallback');
        const existingEmails = JSON.parse(localStorage.getItem('waitlist') || '[]');
        if (!existingEmails.includes(email)) {
          existingEmails.push(email);
          localStorage.setItem('waitlist', JSON.stringify(existingEmails));
        }
      }

      setIsSubmitted(true);
      setEmail('');
    } catch (err) {
      console.error('Waitlist submission error:', err);
      // Fallback to localStorage on any error (for local dev)
      if (import.meta.env.DEV) {
        console.warn('Using localStorage fallback');
        const existingEmails = JSON.parse(localStorage.getItem('waitlist') || '[]');
        if (!existingEmails.includes(email)) {
          existingEmails.push(email);
          localStorage.setItem('waitlist', JSON.stringify(existingEmails));
        }
        setIsSubmitted(true);
        setEmail('');
      } else {
        const errorMsg = err instanceof Error ? err.message : 'Unknown error';
        setError(`Failed to join waitlist: ${errorMsg}`);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="waitlist-section" id="waitlist">
      <div className="waitlist-content">
        <h2>{t('waitlist.title')}</h2>
        <p>{t('waitlist.subtitle')}</p>

        <div className="waitlist-counter">
          <div className="counter-label">{t('waitlist.counter')}</div>
          <div className={`counter-number ${isAnimating ? 'animating' : ''}`}>
            {formatNumber(count)}+
          </div>
          <div className="counter-subtext">{t('waitlist.counting')}</div>
        </div>

        {isSubmitted ? (
          <div className="success-message">
            {t('waitlist.success')}
          </div>
        ) : (
          <form className="waitlist-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder={t('waitlist.placeholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
            />
            <button type="submit" className="btn" disabled={isSubmitting}>
              {isSubmitting ? t('waitlist.joining') : t('waitlist.button')}
            </button>
          </form>
        )}

        {error && <div className="error-message">{error}</div>}
      </div>
    </section>
  );
}
