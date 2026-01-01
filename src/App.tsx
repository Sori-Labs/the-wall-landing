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

function App() {
  return (
    <LanguageProvider>
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
    </LanguageProvider>
  );
}

export default App;
