import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <div className="legal-container">
        <Link to="/" className="back-link">&larr; Back to Home</Link>

        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: January 2025</p>

        <h2>1. Overview</h2>
        <p>
          The Wall ("we," "us," or "our") is an anonymous, university-based discussion platform.
          We aim to collect as little personal information as possible while operating the service responsibly.
        </p>
        <p>
          By using the app, you agree to the collection and use of information as described in this Privacy Policy.
        </p>

        <h2>2. Information We Collect</h2>
        <p><strong>a. Information You Provide</strong></p>
        <ul>
          <li>User-generated content (posts, comments, messages)</li>
          <li>Reports or feedback you submit</li>
          <li>University email addresses are used only for verification and are not stored</li>
        </ul>

        <p><strong>b. Information Collected Automatically</strong></p>
        <ul>
          <li>Device type and operating system</li>
          <li>App usage data (e.g., feature interactions, timestamps)</li>
          <li>Approximate location (e.g., campus or region — not precise GPS)</li>
          <li>Crash logs and performance data</li>
        </ul>

        <h2>3. How We Use Information</h2>
        <p>We use collected information to:</p>
        <ul>
          <li>Verify eligibility and prevent abuse</li>
          <li>Operate, maintain, and improve the app</li>
          <li>Enforce our Community Guidelines</li>
        </ul>

        <h2>4. Data Retention</h2>
        <p>
          We retain information only as long as reasonably necessary to operate the app,
          enforce policies, or comply with legal obligations. Content may be removed or
          deleted at our discretion.
        </p>

        <h2>5. Third-Party Services</h2>
        <p>
          We may use third-party services (e.g., analytics, hosting, moderation tools).
          These services are governed by their own privacy practices.
        </p>

        <h2>6. Your Choices</h2>
        <p>You may:</p>
        <ul>
          <li>Delete the app at any time</li>
          <li>Request account deletion (where applicable)</li>
        </ul>
        <p>Certain data may persist for legal or operational reasons.</p>

        <h2>7. Changes</h2>
        <p>
          We may update this policy periodically. Continued use of the app indicates
          acceptance of the updated policy.
        </p>

        <h2>8. Contact</h2>
        <p>Questions?</p>
        <a href="mailto:hello.sorilabs@gmail.com" className="contact-email">
          hello.sorilabs@gmail.com
        </a>

        <div className="legal-footer">
          <Link to="/" className="back-link">&larr; Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
