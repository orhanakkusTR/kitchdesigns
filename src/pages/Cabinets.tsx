import { useState } from 'react';
import { Phone, Calendar } from 'lucide-react';
import SEO from '../components/SEO';
import QuotePopup from '../components/QuotePopup';

export default function Cabinets() {
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);

  const cabinetProducts = [
    { name: 'FUSION BLANC', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Fusion_Blanc.webp' },
    { name: 'DISCOVERY FROST', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Discovery_Frost.webp' },
    { name: 'FUSION DOVE', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Fusion_Dove.webp' },
    { name: 'FUSION KONA', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Fusion_Kona.webp' },
    { name: 'FUSION NICKEL', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Fusion_Nickel.webp' },
    { name: 'FUSION OYSTER', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Fusion_Oyster.webp' },
    { name: 'FUSION STONE', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Fusion_Stone.webp' },
    { name: 'GALAXY ESPRESSO', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Galaxy-Espresso.webp' },
    { name: 'GALAXY COBBLESTONE', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Galaxy_Cobblestone.webp' },
    { name: 'GALAXY FROST', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Galaxy_Frost.webp' },
    { name: 'GALAXY INDIGO', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Galaxy_Indigo.webp' },
    { name: 'GALAXY NICKEL', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/galaxy_nickel.webp' },
    { name: 'GALAXY LINEN', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/GalaxyLinen.webp' },
    { name: 'GLOSS BIANCO', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Gloss_Bianco.webp' },
    { name: 'GLOSS GRIGIO', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Gloss_Grigio.webp' },
    { name: 'HALLMARK FROST', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Hallmark_frost.webp' },
    { name: 'IMPERIO DOVE', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Imperio_Dove.webp' },
    { name: 'IMPERIO NICKEL', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Imperio_Nickel.webp' },
    { name: 'KITCHEN HORIZON', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Kitchen_Horizon.webp' },
    { name: 'LUNA KONA', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Luna_-_Kona.webp' },
    { name: 'LUNA DOVE', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Luna_Dove.webp' },
    { name: 'LUNA INDIGO', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Luna_Indigo.webp' },
    { name: 'LUNA TIMBER', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Luna_Timber.webp' },
    { name: 'MATTE BIANCO', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Matte_Bianco.webp' },
    { name: 'MATTE CARBONE', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Matte_Carbone.webp' },
    { name: 'METRO FROST', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Metro-Frost.webp' },
    { name: 'METRO JAVA', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Metro_Java.webp' },
    { name: 'METRO MIST', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Metro_Mist.webp' },
    { name: 'NEXUS FROST', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Nexus_Frost.webp' },
    { name: 'ONYX FROST', image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/onyx_frost.webp' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Custom Kitchen Cabinets - Premium Cabinet Selection | Kitch Designs"
        description="Browse our extensive collection of custom kitchen cabinets in Cherry Hill, NJ. Fusion, Galaxy, Luna, Metro & more premium cabinet lines. Expert installation included."
        canonicalUrl="https://kitchdesigns.com/products/cabinets"
      />
      <section className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/k-3.png')"
          }}
        ></div>

        <div className="relative z-20 container mx-auto px-6 py-16 md:py-20 lg:py-24 text-white">
          <p className="text-sm sm:text-base font-medium tracking-wider uppercase mb-3">INNOVATION</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">Cabinets</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed mb-8">
            Unlock the Door to Your Dream Kitchen and Bathroom. Have questions or ready to start your design or remodel? Give us a call! Our team is here to guide you through every step of the way. Let's create a kitchen that reflects your style and functionality. Contact us now.
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
            {cabinetProducts.map((product, index) => (
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
