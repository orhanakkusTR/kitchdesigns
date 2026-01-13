import { useState } from 'react';
import { Phone, Calendar } from 'lucide-react';
import SEO from '../components/SEO';
import QuotePopup from '../components/QuotePopup';

export default function Flooring() {
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);

  const flooringProducts = [
    { name: 'ANSE TIMBERSTONE', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/anse-timberstone.webp' },
    { name: 'BARLEY ALE', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/barley-ale.webp' },
    { name: 'BRAZILIAN CHESTNUT WHISKEY BARREL', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/brazilian-chestnut-whiskey-barrel.webp' },
    { name: 'BRUSHED GREY', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/brushed-grey.webp' },
    { name: 'CARDAMOM OAK', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/cardamom-oak.webp' },
    { name: 'CHARCOAL', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/charcoal.webp' },
    { name: 'INTREPID PEARL WALNUT', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/intrepid-pearl-walnut.webp' },
    { name: 'LATTE', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/latte.webp' },
    { name: 'PORTLAND PINE', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/portland-pine.webp' },
    { name: 'SEAFOAM CEDAR', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/seafoam-cedar.webp' },
    { name: 'SMOKE', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/smoke.webp' },
    { name: 'STONE', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/stone.webp' },
    { name: 'SWANSEA', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/swansea.webp' },
    { name: 'TAWNY', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/tawny.webp' },
    { name: 'TOMBSTONE RED OAK', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/tombstone-red-oak.webp' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Premium Flooring Options - Hardwood, Vinyl & Tile | Kitch Designs"
        description="Explore premium flooring solutions in Cherry Hill, NJ. Hardwood, luxury vinyl plank, ceramic tile, and natural stone. Professional installation by Kitch Designs."
        canonicalUrl="https://kitchdesigns.com/products/flooring"
      />
      <section className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/hero-2-kd.jpg')"
          }}
        ></div>

        <div className="relative z-20 container mx-auto px-6 py-16 md:py-20 lg:py-24 text-white">
          <p className="text-sm sm:text-base font-medium tracking-wider uppercase mb-3">INNOVATION</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">Flooring</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed mb-8">
            Transform your space from the ground up with our premium flooring solutions. From hardwood to tile, we offer a wide range of high-quality flooring options to match your style and needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="tel:8563983087"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <Phone size={20} />
              Call Us
            </a>
            <button
              onClick={() => setIsQuotePopupOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-primary font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <Calendar size={20} />
              Free Consultation
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {flooringProducts.map((product, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    width="800"
                    height="600"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute bottom-0 left-0 inline-block">
                  <div className="bg-primary py-3 px-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide whitespace-nowrap">
                      {product.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuotePopup isOpen={isQuotePopupOpen} onClose={() => setIsQuotePopupOpen(false)} />
    </div>
  );
}
