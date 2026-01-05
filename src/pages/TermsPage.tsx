import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <div className="legal-container">
        <Link to="/" className="back-link">&larr; Back to Home</Link>

        <h1>Terms of Service</h1>
        <p className="last-updated">Last Updated: January 2025</p>

        <p>
          By accessing or using The Wall, you agree to these Terms.
          If you do not agree, do not use the app.
        </p>

        <h2>1. Eligibility</h2>
        <p>You must:</p>
        <ul>
          <li>Be at least 18 years old</li>
          <li>Be affiliated with a university (where required)</li>
        </ul>

        <h2>2. User Content</h2>
        <ul>
          <li>You are solely responsible for the content you post.</li>
          <li>By posting, you grant us a non-exclusive, royalty-free license to use, display, and moderate content for app operation.</li>
          <li>We do not endorse user content.</li>
        </ul>

        <h2>3. Prohibited Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Violate laws or regulations</li>
          <li>Infringe on others' rights</li>
          <li>Attempt to reverse-engineer or abuse the app</li>
        </ul>

        <h2>4. Disclaimers</h2>
        <p>The app is provided "as is."</p>
        <p>We make no guarantees regarding:</p>
        <ul>
          <li>Accuracy of content</li>
          <li>Availability or uptime</li>
          <li>Safety or conduct of other users</li>
        </ul>
        <p><strong>Use at your own risk.</strong></p>

        <h2>5. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, we are not liable for:</p>
        <ul>
          <li>User-generated content</li>
          <li>Emotional distress</li>
          <li>Indirect or consequential damages</li>
        </ul>

        <h2>6. Contact</h2>
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
