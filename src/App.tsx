import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ChristmasDealPopup from './components/ChristmasDealPopup';
import QuotePopup from './components/QuotePopup';
import MobileActionBar from './components/MobileActionBar';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Cabinets from './pages/Cabinets';
import Flooring from './pages/Flooring';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function AppContent() {
  const [showChristmasPopup, setShowChristmasPopup] = useState(false);
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      const timer = setTimeout(() => {
        setShowChristmasPopup(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products/cabinets" element={<Cabinets />} />
        <Route path="/products/flooring" element={<Flooring />} />
        <Route path="/portfolio" element={<Gallery />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
      <Footer />

      <ChristmasDealPopup
        isOpen={showChristmasPopup}
        onClose={() => setShowChristmasPopup(false)}
        onGetQuote={() => setIsQuotePopupOpen(true)}
      />

      <QuotePopup
        isOpen={isQuotePopupOpen}
        onClose={() => setIsQuotePopupOpen(false)}
      />

      <MobileActionBar />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
