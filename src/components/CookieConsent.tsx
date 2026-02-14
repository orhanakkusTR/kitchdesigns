import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    } else if (consent === 'accepted') {
      enableAnalytics();
    }
  }, []);

  const enableAnalytics = () => {
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
  };

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    enableAnalytics();
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied'
      });
    }
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-teal-700 to-teal-600 shadow-2xl z-50 animate-slide-up border-t-4 border-teal-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1 pr-4">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <span className="text-2xl">🍪</span>
              Cookie Consent
            </h3>
            <p className="text-sm text-teal-50 leading-relaxed">
              We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
              By clicking "Accept All", you consent to our use of cookies.{' '}
              <a href="/privacy-policy" className="text-white font-semibold hover:underline">
                Learn more
              </a>
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleReject}
              className="flex-1 sm:flex-none px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all font-semibold text-sm backdrop-blur-sm border border-white/20"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 sm:flex-none px-6 py-3 bg-white text-teal-700 rounded-lg hover:bg-teal-50 transition-all font-semibold text-sm shadow-lg"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
