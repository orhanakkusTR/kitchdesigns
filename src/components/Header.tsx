import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, Calendar } from 'lucide-react';
import QuotePopup from './QuotePopup';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false);
    if (location.pathname === path) {
      scrollToTop();
    } else {
      navigate(path);
      setTimeout(scrollToTop, 100);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled || !isHome ? 'bg-white shadow-lg py-3 md:py-4' : 'bg-gradient-to-b from-black/50 to-transparent py-4 md:py-6'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src={scrolled || !isHome
              ? "https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/kitch-logo.webp"
              : "https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/kitch-logo-beyaz.png"
            }
            alt="Kitch Designs Logo"
            width="200"
            height="56"
            className="h-10 sm:h-12 md:h-14 w-auto transition-all duration-500"
          />
        </Link>

        <div className="hidden lg:flex items-center space-x-8">
          <button
            onClick={() => handleNavigation('/')}
            className={`font-medium transition-all duration-300 hover:text-primary relative group ${
              scrolled || !isHome ? 'text-gray-700' : 'text-white'
            } ${location.pathname === '/' ? 'text-primary' : ''}`}
          >
            Home
            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
              location.pathname === '/' ? 'w-full' : ''
            }`}></span>
          </button>

          <button
            onClick={() => handleNavigation('/services')}
            className={`font-medium transition-all duration-300 hover:text-primary relative group ${
              scrolled || !isHome ? 'text-gray-700' : 'text-white'
            } ${location.pathname === '/services' ? 'text-primary' : ''}`}
          >
            Services
            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
              location.pathname === '/services' ? 'w-full' : ''
            }`}></span>
          </button>

          <div className="relative group">
            <button
              className={`font-medium transition-all duration-300 hover:text-primary relative inline-flex items-center gap-1 ${
                scrolled || !isHome ? 'text-gray-700' : 'text-white'
              } ${location.pathname.startsWith('/products') ? 'text-primary' : ''}`}
            >
              Products
              <ChevronDown size={16} className={`transition-transform duration-300 group-hover:rotate-180`} />
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                location.pathname.startsWith('/products') ? 'w-full' : ''
              }`}></span>
            </button>

            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <button
                onClick={() => {
                  handleNavigation('/products/cabinets');
                }}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
              >
                Cabinets
              </button>
              <button
                onClick={() => {
                  handleNavigation('/products/flooring');
                }}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
              >
                Flooring
              </button>
            </div>
          </div>

          <button
            onClick={() => handleNavigation('/portfolio')}
            className={`font-medium transition-all duration-300 hover:text-primary relative group ${
              scrolled || !isHome ? 'text-gray-700' : 'text-white'
            } ${location.pathname === '/portfolio' ? 'text-primary' : ''}`}
          >
            Gallery
            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
              location.pathname === '/portfolio' ? 'w-full' : ''
            }`}></span>
          </button>

          <button
            onClick={() => handleNavigation('/about')}
            className={`font-medium transition-all duration-300 hover:text-primary relative group ${
              scrolled || !isHome ? 'text-gray-700' : 'text-white'
            } ${location.pathname === '/about' ? 'text-primary' : ''}`}
          >
            About
            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
              location.pathname === '/about' ? 'w-full' : ''
            }`}></span>
          </button>

          <button
            onClick={() => handleNavigation('/contact')}
            className={`font-medium transition-all duration-300 hover:text-primary relative group ${
              scrolled || !isHome ? 'text-gray-700' : 'text-white'
            } ${location.pathname === '/contact' ? 'text-primary' : ''}`}
          >
            Contact
            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
              location.pathname === '/contact' ? 'w-full' : ''
            }`}></span>
          </button>

          <div className="flex items-center gap-3">
            <a
              href="tel:8563983087"
              className="bg-primary text-white px-6 py-2.5 rounded-lg font-medium hover:bg-primary-dark transition-all duration-300 hover:shadow-xl hover:scale-105 inline-flex items-center gap-2"
            >
              <Phone size={18} />
              Call Us
            </a>
            <button
              onClick={() => setIsQuotePopupOpen(true)}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 hover:shadow-xl hover:scale-105 inline-flex items-center gap-2 ${
                scrolled || !isHome
                  ? 'bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white'
                  : 'bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-primary'
              }`}
            >
              <Calendar size={18} />
              Free Consultation
            </button>
          </div>
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <a
            href="tel:8563983087"
            aria-label="Call us at 856-398-3087"
            className={`transition-colors duration-300 ${scrolled || !isHome ? 'text-primary' : 'text-white'}`}
          >
            <Phone size={24} />
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className={`transition-colors duration-300 ${scrolled || !isHome ? 'text-gray-900' : 'text-white'}`}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-xl animate-fade-in">
          <div className="container mx-auto px-6 py-6 space-y-4">
            <button
              onClick={() => handleNavigation('/')}
              className={`block w-full text-left text-gray-700 font-medium hover:text-primary transition-colors ${
                location.pathname === '/' ? 'text-primary' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation('/services')}
              className={`block w-full text-left text-gray-700 font-medium hover:text-primary transition-colors ${
                location.pathname === '/services' ? 'text-primary' : ''
              }`}
            >
              Services
            </button>
            <div>
              <button
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                className={`flex items-center justify-between w-full text-left text-gray-700 font-medium hover:text-primary transition-colors ${
                  location.pathname.startsWith('/products') ? 'text-primary' : ''
                }`}
              >
                Products
                <ChevronDown size={16} className={`transition-transform duration-300 ${productsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {productsDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <button
                    onClick={() => handleNavigation('/products/cabinets')}
                    className="block w-full text-left text-gray-600 hover:text-primary transition-colors"
                  >
                    Cabinets
                  </button>
                  <button
                    onClick={() => handleNavigation('/products/flooring')}
                    className="block w-full text-left text-gray-600 hover:text-primary transition-colors"
                  >
                    Flooring
                  </button>
                </div>
              )}
            </div>
            <button
              onClick={() => handleNavigation('/portfolio')}
              className={`block w-full text-left text-gray-700 font-medium hover:text-primary transition-colors ${
                location.pathname === '/portfolio' ? 'text-primary' : ''
              }`}
            >
              Gallery
            </button>
            <button
              onClick={() => handleNavigation('/about')}
              className={`block w-full text-left text-gray-700 font-medium hover:text-primary transition-colors ${
                location.pathname === '/about' ? 'text-primary' : ''
              }`}
            >
              About
            </button>
            <button
              onClick={() => handleNavigation('/contact')}
              className={`block w-full text-left text-gray-700 font-medium hover:text-primary transition-colors ${
                location.pathname === '/contact' ? 'text-primary' : ''
              }`}
            >
              Contact
            </button>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setIsQuotePopupOpen(true);
              }}
              className="w-full bg-primary text-white px-4 py-3 rounded-lg font-medium hover:bg-primary-dark transition-all duration-300 inline-flex items-center justify-center gap-2 mt-4"
            >
              <Calendar size={18} />
              Free Consultation
            </button>
          </div>
        </div>
      )}

      <QuotePopup isOpen={isQuotePopupOpen} onClose={() => setIsQuotePopupOpen(false)} />
    </header>
  );
}
