import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Gallery() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxImage) return;

      if (e.key === 'ArrowLeft') {
        const prevIndex = currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1;
        setCurrentImageIndex(prevIndex);
        setLightboxImage(galleryImages[prevIndex].url);
      } else if (e.key === 'ArrowRight') {
        const nextIndex = currentImageIndex === galleryImages.length - 1 ? 0 : currentImageIndex + 1;
        setCurrentImageIndex(nextIndex);
        setLightboxImage(galleryImages[nextIndex].url);
      } else if (e.key === 'Escape') {
        setLightboxImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage, currentImageIndex]);

  const galleryImages = [
    {
      url: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Kitchen-Remodeling.jpg',
      height: 'tall'
    },
    {
      url: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Bathroom-Remodeling.jpg',
      height: 'medium'
    },
    {
      url: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Custom-Cabinets.jpg',
      height: 'short'
    },
    {
      url: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Countertops.jpg',
      height: 'tall'
    },
    {
      url: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Flooring.jpg',
      height: 'medium'
    },
    {
      url: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Full-Home-Renovation.jpg',
      height: 'short'
    },
    {
      url: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Countertops-2.jpg',
      height: 'tall'
    },
    {
      url: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/home-1.jpg',
      height: 'medium'
    },
    {
      url: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/home-2.jpg',
      height: 'short'
    },
    {
      url: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/k-1.png',
      height: 'tall'
    },
    {
      url: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/k-2.png',
      height: 'medium'
    },
    {
      url: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/k-3.png',
      height: 'short'
    },
    {
      url: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/k-4.png',
      height: 'tall'
    },
    {
      url: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/k-5.png',
      height: 'medium'
    },
    {
      url: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/hero-2-kd.jpg',
      height: 'short'
    },
    {
      url: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/servis-hero-kc.jpg',
      height: 'tall'
    }
  ];

  const getHeightClass = (height: string) => {
    switch (height) {
      case 'short':
        return 'h-[200px]';
      case 'medium':
        return 'h-[280px]';
      case 'tall':
        return 'h-[360px]';
      default:
        return 'h-[280px]';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Kitchen & Bathroom Remodeling Portfolio - Kitch Designs Gallery"
        description="Browse our stunning kitchen and bathroom remodeling projects in Cherry Hill, NJ. View before & after photos, custom cabinets, and premium flooring installations."
        canonicalUrl="https://kitchdesigns.com/portfolio"
        ogImage="https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/k-1.png"
      />
      <section className="relative min-h-[65vh] md:min-h-[75vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/hero-2-kd.jpg')"
          }}
        ></div>

        <div className="relative z-20 container mx-auto px-6 py-20 md:py-24 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight">Gallery</h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 md:mb-10 leading-relaxed">
              Discover our stunning collection of kitchen and bathroom transformations
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Free Quote <ArrowRight size={18} />
              </Link>
              <a
                href="tel:8563983087"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/30"
              >
                <Phone size={18} /> Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`relative ${getHeightClass(image.height)} break-inside-avoid rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group`}
                onClick={() => {
                  setLightboxImage(image.url);
                  setCurrentImageIndex(index);
                }}
              >
                <img
                  src={image.url}
                  alt={`Gallery image ${index + 1}`}
                  width="800"
                  height="600"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full p-3 transition-all duration-300 hover:scale-110 z-10"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              const prevIndex = currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1;
              setCurrentImageIndex(prevIndex);
              setLightboxImage(galleryImages[prevIndex].url);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full p-3 md:p-4 transition-all duration-300 hover:scale-110 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              const nextIndex = currentImageIndex === galleryImages.length - 1 ? 0 : currentImageIndex + 1;
              setCurrentImageIndex(nextIndex);
              setLightboxImage(galleryImages[nextIndex].url);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full p-3 md:p-4 transition-all duration-300 hover:scale-110 z-10"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium z-10">
            {currentImageIndex + 1} / {galleryImages.length}
          </div>

          <img
            src={lightboxImage}
            alt="Full size"
            width="1200"
            height="900"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
