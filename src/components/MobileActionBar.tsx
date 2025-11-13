import { useState, useEffect } from 'react';
import { Phone, MapPin, X } from 'lucide-react';

export default function MobileActionBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetDirections = () => {
    window.open('https://maps.app.goo.gl/N27zQRpgG5AQzHtMA', '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      <div className={`lg:hidden fixed left-4 bottom-4 z-40 transition-all duration-300 ${
        isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        <button
          onClick={() => setIsExpanded(true)}
          aria-label="Open contact options"
          className="bg-primary text-white p-4 rounded-full shadow-2xl hover:bg-primary-dark transition-all duration-300 hover:scale-110 animate-bounce-gentle"
        >
          <Phone size={24} />
        </button>
      </div>

      <div className={`lg:hidden fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${
        isExpanded ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <div className="bg-gradient-to-r from-primary to-primary-dark text-white shadow-2xl">
          <div className="relative">
            {isExpanded && (
              <button
                onClick={() => setIsExpanded(false)}
                aria-label="Close contact options"
                className="absolute -top-10 right-4 bg-white text-primary p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
              >
                <X size={20} />
              </button>
            )}

            <div className="p-4">
              <p className="text-center text-sm font-semibold mb-3 text-teal-100">
                Get in Touch
              </p>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:8563983087"
                  className="flex flex-col items-center justify-center bg-white text-primary p-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Phone size={24} className="mb-2" />
                  <span className="text-sm">Call Us</span>
                </a>
                <button
                  onClick={handleGetDirections}
                  aria-label="Get directions to our location"
                  className="flex flex-col items-center justify-center bg-white text-primary p-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <MapPin size={24} className="mb-2" />
                  <span className="text-sm">Directions</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
