import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import {
  Background,
  Navbar,
  Hero,
  WaitlistSignup,
  Features,
  Competition,
  OGPromo,
  Universities,
  GlobalStats,
  Referral,
  CTA,
  Footer,
} from './components';
import { PrivacyPage, TermsPage } from './pages';

function LandingPage() {
  return (
    <>
      <Background />
      <Navbar />
      <Hero />
      <WaitlistSignup />
      <Features />
      <Competition />
      <OGPromo />
      <Universities />
      <GlobalStats />
      <Referral />
      <CTA />
      <Footer />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </LanguageProvider>
  );
}

export default App;
