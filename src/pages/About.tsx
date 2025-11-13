import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import QuotePopup from '../components/QuotePopup';
import SEO from '../components/SEO';

export default function About() {
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <SEO
        title="About Kitch Designs - 15+ Years of Kitchen & Bathroom Excellence"
        description="Learn about Kitch Design Studio - Cherry Hill's premier kitchen and bathroom remodeling experts. 15+ years of experience, 500+ happy clients, 5-star reviews."
        canonicalUrl="https://kitchdesigns.com/about"
        ogImage="https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/hero-2-kd.jpg"
      />
      <section className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden pt-20 md:pt-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>
        <img
          src="https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/hero-2-kd.jpg"
          alt="About Kitch Designs"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />

        <div className="relative z-20 container mx-auto px-6 py-12 md:py-0 text-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 leading-tight md:leading-none animate-slide-up">
              About
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 text-gray-200 max-w-2xl leading-relaxed animate-slide-up-delay">
              Transforming houses into dream homes for over 15 years with passion and precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 animate-slide-up-delay-2">
              <button
                onClick={() => setIsQuotePopupOpen(true)}
                className="group bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center text-sm sm:text-base"
              >
                Get Free Quote
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              <Link
                to="/gallery"
                className="bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/30 inline-flex items-center justify-center text-sm sm:text-base"
              >
                View Gallery
              </Link>
            </div>

            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 px-3 py-2 rounded-full animate-fade-in">
              <Sparkles size={16} className="text-primary-light flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-teal-100">Premium Kitchen & Bathroom Remodeling</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Welcome to Kitch Designs Studio
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12">
              Your Ultimate Destination for Exceptional Home Transformations, Where Every Detail is Crafted with Excellence and Care!
            </p>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-gray-100 rounded-3xl p-8 md:p-10 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Kitchen Cabinets</h3>
                <p className="text-gray-700 leading-relaxed">
                  Elevate your kitchen aesthetics with our meticulously designed and expertly crafted cabinets. From contemporary to classic, our diverse range ensures that your kitchen becomes a true reflection of your style.
                </p>
              </div>

              <div className="bg-gray-100 rounded-3xl p-8 md:p-10 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Bathroom Bliss</h3>
                <p className="text-gray-700 leading-relaxed">
                  Transform your bathroom into a sanctuary of relaxation. Our team excels in creating personalized designs that seamlessly blend luxury and practicality, turning your bathroom into a spa-like retreat.
                </p>
              </div>

              <div className="bg-gray-100 rounded-3xl p-8 md:p-10 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Flooring Mastery</h3>
                <p className="text-gray-700 leading-relaxed">
                  Upgrade your space with our premium flooring options. Whether you prefer the timeless beauty of hardwood or the durability of tile, our selection caters to every taste and lifestyle.
                </p>
              </div>

              <div className="bg-gray-100 rounded-3xl p-8 md:p-10 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Countertop Excellence</h3>
                <p className="text-gray-700 leading-relaxed">
                  Make a statement with our stunning countertops. From granite to quartz, each piece is curated to enhance the visual appeal and functionality of your kitchen or bathroom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary to-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white px-4">
                Crafting Exceptional Spaces with Passion and Precision
              </h2>
              <div className="w-20 h-1 bg-white/50 mx-auto mb-6 md:mb-8"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 mb-8 md:mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/20">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Kitch Designs Studio</h3>
                <p className="text-sm md:text-base lg:text-lg leading-relaxed text-white">
                  At Kitch Designs Studio, we take pride in crafting stunning living spaces that redefine elegance and functionality. Nestled in the heart of Cherry Hill, NJ, our studio is a haven for those seeking top-notch kitchen and bathroom designs, impeccable flooring solutions, and exquisite countertops.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/20">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Visit Our Studio</h3>
                <p className="text-sm md:text-base lg:text-lg leading-relaxed text-white">
                  Immerse yourself in a world of design possibilities at our Cherry Hill studio. Witness firsthand the quality of our materials, explore innovative designs, and envision the transformation of your home.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 border border-white/20">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-white text-center">Why Choose Kitch Designs Studio</h3>

              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white/5 rounded-lg md:rounded-xl p-4 md:p-6">
                  <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">Passion for Design</h4>
                  <p className="text-sm md:text-base leading-relaxed text-white">
                    Our team is driven by a passion for design, ensuring that every project is a unique masterpiece tailored to your preferences.
                  </p>
                </div>

                <div className="bg-white/5 rounded-lg md:rounded-xl p-4 md:p-6">
                  <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">Quality Craftsmanship</h4>
                  <p className="text-sm md:text-base leading-relaxed text-white">
                    With a commitment to excellence, we employ skilled craftsmen to bring your vision to life with precision and care.
                  </p>
                </div>

                <div className="bg-white/5 rounded-lg md:rounded-xl p-4 md:p-6">
                  <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">Customer-Centric Approach</h4>
                  <p className="text-sm md:text-base leading-relaxed text-white">
                    Your satisfaction is our priority. We work closely with you, listening to your needs and preferences at every stage of the design and installation process.
                  </p>
                </div>

                <div className="bg-white/5 rounded-lg md:rounded-xl p-4 md:p-6">
                  <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">Local Presence, Global Inspiration</h4>
                  <p className="text-sm md:text-base leading-relaxed text-white">
                    Situated in Cherry Hill, NJ, we draw inspiration from global design trends to offer you a blend of local charm and international flair.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-6 md:mt-10">
              <p className="text-base md:text-lg lg:text-xl text-white font-semibold px-4">
                At Kitch Designs Studio, we turn dreams into reality.<br className="hidden md:block" /> Contact us today and let the journey to your ideal living space begin!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-primary-light font-semibold text-xs sm:text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-4 md:mb-6">What We Do Best</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive remodeling solutions tailored to your unique needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: 'Kitchen Remodeling',
                description: 'Transform your kitchen into a culinary masterpiece with custom designs.',
                image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Kitchen-Remodeling.jpg'
              },
              {
                title: 'Bathroom Remodeling',
                description: 'Create your personal spa retreat with elegant fixtures.',
                image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Bathroom-Remodeling.jpg'
              },
              {
                title: 'Custom Cabinets',
                description: 'Handcrafted cabinetry designed to maximize space.',
                image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Custom-Cabinets.jpg'
              },
              {
                title: 'Countertops',
                description: 'Premium materials including granite, quartz, and marble.',
                image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Countertops-2.jpg'
              },
              {
                title: 'Flooring',
                description: 'Beautiful, durable flooring to complete your space.',
                image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Flooring.jpg'
              },
              {
                title: 'Full Home Renovation',
                description: 'Complete home transformations from concept to completion.',
                image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Full-Home-Renovation.jpg'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group rounded-xl md:rounded-2xl overflow-hidden bg-primary transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    width="800"
                    height="600"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white mb-4">{service.description}</p>
                  <button
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      setTimeout(() => {
                        window.location.href = '/services';
                      }, 300);
                    }}
                    className="inline-flex items-center text-white text-sm sm:text-base font-semibold hover:gap-2 transition-all bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20"
                  >
                    Learn More <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <span className="text-primary-dark font-semibold text-xs sm:text-sm uppercase tracking-wider">Trusted Partners</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-3">Brands We Work With</h2>
          </div>

          <div className="mb-12 overflow-hidden">
            <div className="flex items-center gap-12 md:gap-16 animate-scroll-brands">
              {[
                'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/m-1.webp',
                'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/m-2.webp',
                'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/m-3.webp',
                'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/m-4.webp',
                'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/m-5.webp',
                'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/m-6.webp',
                'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/m-1.webp',
                'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/m-2.webp',
                'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/m-3.webp',
                'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/m-4.webp',
                'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/m-5.webp',
                'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/m-6.webp',
                'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/m-1.webp',
                'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/m-2.webp',
                'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/m-3.webp',
                'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/m-4.webp',
                'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/m-5.webp',
                'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/m-6.webp'
              ].map((logo, index) => (
                <div key={index} className="flex items-center flex-shrink-0">
                  <img
                    src={logo}
                    alt={`Brand ${(index % 6) + 1}`}
                    width="120"
                    height="48"
                    className="h-10 md:h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <QuotePopup isOpen={isQuotePopupOpen} onClose={() => setIsQuotePopupOpen(false)} />
    </div>
  );
}
