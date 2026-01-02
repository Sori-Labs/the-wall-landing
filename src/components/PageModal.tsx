import { useEffect, type ReactNode } from 'react';

interface PageModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export function PageModal({ isOpen, onClose, title, children }: PageModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="page-modal" onClick={onClose}>
      <div className="page-content" onClick={(e) => e.stopPropagation()}>
        <div className="page-header">
          <h2>{title}</h2>
          <button className="close-btn" onClick={onClose} aria-label="Close">
            &times;
          </button>
        </div>
        <div className="page-body">
          {children}
        </div>
      </div>
    </div>
  );
}

export function PrivacyContent() {
  return (
    <>
      <p className="last-updated">Last Updated: January 2025</p>

      <h3>1. Overview</h3>
      <p>
        The Wall ("we," "us," or "our") is an anonymous, university-based discussion platform.
        We aim to collect as little personal information as possible while operating the service responsibly.
      </p>
      <p>
        By using the app, you agree to the collection and use of information as described in this Privacy Policy.
      </p>

      <h3>2. Information We Collect</h3>
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

      <h3>3. How We Use Information</h3>
      <p>We use collected information to:</p>
      <ul>
        <li>Verify eligibility and prevent abuse</li>
        <li>Operate, maintain, and improve the app</li>
        <li>Enforce our Community Guidelines</li>
      </ul>

      <h3>4. Data Retention</h3>
      <p>
        We retain information only as long as reasonably necessary to operate the app,
        enforce policies, or comply with legal obligations. Content may be removed or
        deleted at our discretion.
      </p>

      <h3>5. Third-Party Services</h3>
      <p>
        We may use third-party services (e.g., analytics, hosting, moderation tools).
        These services are governed by their own privacy practices.
      </p>

      <h3>6. Your Choices</h3>
      <p>You may:</p>
      <ul>
        <li>Delete the app at any time</li>
        <li>Request account deletion (where applicable)</li>
      </ul>
      <p>Certain data may persist for legal or operational reasons.</p>

      <h3>7. Changes</h3>
      <p>
        We may update this policy periodically. Continued use of the app indicates
        acceptance of the updated policy.
      </p>

      <h3>8. Contact</h3>
      <p>Questions?</p>
      <a href="mailto:hello.sorilabs@gmail.com" className="contact-email">
        hello.sorilabs@gmail.com
      </a>
    </>
  );
}

export function TermsContent() {
  return (
    <>
      <p className="last-updated">Last Updated: January 2025</p>

      <p>
        By accessing or using The Wall, you agree to these Terms.
        If you do not agree, do not use the app.
      </p>

      <h3>1. Eligibility</h3>
      <p>You must:</p>
      <ul>
        <li>Be at least 18 years old</li>
        <li>Be affiliated with a university (where required)</li>
      </ul>

      <h3>2. User Content</h3>
      <ul>
        <li>You are solely responsible for the content you post.</li>
        <li>By posting, you grant us a non-exclusive, royalty-free license to use, display, and moderate content for app operation.</li>
        <li>We do not endorse user content.</li>
      </ul>

      <h3>3. Prohibited Use</h3>
      <p>You agree not to:</p>
      <ul>
        <li>Violate laws or regulations</li>
        <li>Infringe on others' rights</li>
        <li>Attempt to reverse-engineer or abuse the app</li>
      </ul>

      <h3>4. Disclaimers</h3>
      <p>The app is provided "as is."</p>
      <p>We make no guarantees regarding:</p>
      <ul>
        <li>Accuracy of content</li>
        <li>Availability or uptime</li>
        <li>Safety or conduct of other users</li>
      </ul>
      <p><strong>Use at your own risk.</strong></p>

      <h3>5. Limitation of Liability</h3>
      <p>To the fullest extent permitted by law, we are not liable for:</p>
      <ul>
        <li>User-generated content</li>
        <li>Emotional distress</li>
        <li>Indirect or consequential damages</li>
      </ul>

      <h3>6. Contact</h3>
      <p>Questions?</p>
      <a href="mailto:hello.sorilabs@gmail.com" className="contact-email">
        hello.sorilabs@gmail.com
      </a>
    </>
  );
}

export function GuidelinesContent() {
  return (
    <>
      <p>The goal is to enable open expression while minimizing real-world harm.</p>

      <h3>Reporting</h3>
      <p>
        Users may report content they believe violates community expectations.
        Reporting does not guarantee removal.
      </p>

      <h3>Final Note</h3>
      <p>
        We are not a court, newsroom, or university authority.
        We aim for balance — not perfection.
      </p>

      <h3>Contact</h3>
      <p>Questions or concerns?</p>
      <a href="mailto:hello.sorilabs@gmail.com" className="contact-email">
        hello.sorilabs@gmail.com
      </a>
    </>
  );
}

export function AboutContent() {
  return (
    <>
      <h3>Our Mission</h3>
      <p>
        The Wall (다왈) was born from a simple idea: university students deserve a space
        to speak freely, connect authentically, and share experiences without the pressure
        of maintaining a public persona.
      </p>
      <p>
        We believe that the best conversations happen when people feel safe to be honest.
        That's why we built an anonymous platform exclusively for verified university students.
      </p>

      <h3>Why We're Different</h3>
      <p>
        Unlike other anonymous apps, The Wall is built around university communities.
        Every user is verified through their .edu email, creating authentic campus-specific
        discussions while maintaining complete anonymity.
      </p>
      <p>
        We're inspired by the success stories of founders who dared to think differently —
        like Whitney Wolfe Herd, who turned a vision of empowering users into Bumble.
        We're on a similar mission: empowering students to connect on their own terms.
      </p>

      <h3>Our Team</h3>
      <p>
        We're a global team of students and builders spanning the United States, South Korea, and Hong Kong — united by a shared belief that campus communities deserve better ways to connect.
      </p>
      <div className="team-grid">
        <div className="team-member">
          <div className="team-avatar">🇺🇸</div>
          <h4>United States</h4>
          <p className="team-initials">K.S. · J.C. · M.R.</p>
        </div>
        <div className="team-member">
          <div className="team-avatar">🇰🇷</div>
          <h4>South Korea</h4>
          <p className="team-initials">J.H.P. · S.Y.L. · H.J.K.</p>
        </div>
        <div className="team-member">
          <div className="team-avatar">🇭🇰</div>
          <h4>Hong Kong</h4>
          <p className="team-initials">D.W. · E.C.</p>
        </div>
      </div>

      <h3>Contact Us</h3>
      <p>We'd love to hear from you!</p>
      <a href="mailto:hello.sorilabs@gmail.com" className="contact-email">
        hello.sorilabs@gmail.com
      </a>
    </>
  );
}
