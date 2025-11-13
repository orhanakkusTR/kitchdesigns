import { Link } from 'react-router-dom';
import { ChevronRight, Star, CheckCircle2, ArrowRight, Sparkles, X, Award, Users, Clock } from 'lucide-react';
import { useState } from 'react';
import QuotePopup from '../components/QuotePopup';
import SEO from '../components/SEO';
import YouTubeFacade from '../components/YouTubeFacade';
import StructuredData from '../components/StructuredData';

export default function Home() {
  const [activeVideo, setActiveVideo] = useState(1);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);

  const videos = [
    {
      id: 0,
      embedUrl: 'https://www.youtube-nocookie.com/embed/Jt2X2A2XArk',
      title: 'Client Testimonial 1'
    },
    {
      id: 1,
      embedUrl: 'https://www.youtube-nocookie.com/embed/2LxA472wO_Y',
      title: 'Visit Our Showroom | KitchDesign'
    },
    {
      id: 2,
      embedUrl: 'https://www.youtube-nocookie.com/embed/vZU0it6Yk3U',
      title: 'Client Testimonial 3'
    }
  ];

  const organizationData = {
    name: 'Kitch Designs',
    description: 'Premium Kitchen & Bathroom Remodeling in Cherry Hill, NJ',
    url: 'https://kitchdesigns.com',
    logo: 'https://kitchdesigns.com/logo.png',
    telephone: '+1-856-398-3087',
    email: 'info@kitchdesigns.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '',
      addressLocality: 'Cherry Hill',
      addressRegion: 'NJ',
      postalCode: '08002',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 39.9349,
      longitude: -75.0295
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '15:00'
      }
    ],
    priceRange: '$$$$',
    areaServed: {
      '@type': 'City',
      name: 'Cherry Hill',
      containedInPlace: {
        '@type': 'State',
        name: 'New Jersey'
      }
    },
    sameAs: [
      'https://www.facebook.com/kitchdesigns',
      'https://www.instagram.com/kitchdesigns'
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Premium Kitchen & Bathroom Remodeling - Kitch Designs (Cherry Hill, NJ) - (856) 398-3087"
        description="Premium Kitchen & Bathroom Remodeling in Cherry Hill, NJ. 15+ years of experience transforming dream spaces. Call (856) 398-3087 for a free quote."
        canonicalUrl="https://kitchdesigns.com"
        ogImage="https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/hero-2-kd.jpg"
      />
      <StructuredData type="LocalBusiness" data={organizationData} />
      <section className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden pt-20 md:pt-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>
        <img
          src="https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/hero-2-kd.jpg"
          alt="Kitchen remodeling hero"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
        />

        <div className="relative z-20 container mx-auto px-6 py-12 md:py-0 text-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 leading-tight md:leading-none animate-slide-up">
              Transform Your<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-primary">
                Dream Space
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 text-gray-200 max-w-2xl leading-relaxed animate-slide-up-delay">
              Where elegance meets functionality. Experience personalized design solutions that bring your vision to life.
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
                to="/portfolio"
                className="bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/30 inline-flex items-center justify-center text-sm sm:text-base"
              >
                View Portfolio
              </Link>
            </div>

            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 px-3 py-2 rounded-full animate-fade-in">
              <Sparkles size={16} className="text-primary-light flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-teal-100">Premium Kitchen & Bathroom Remodeling</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10 bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="flex flex-col items-center text-center">
              <Award className="text-white mb-2" size={28} />
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>15+</h3>
              <p className="text-xs text-white/90" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>Years Experience</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="text-white mb-2" size={28} />
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>500+</h3>
              <p className="text-xs text-white/90" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>Happy Clients</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Star className="text-white mb-2" size={28} />
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>5 Star</h3>
              <p className="text-xs text-white/90" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>Reviews</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Clock className="text-white mb-2" size={28} />
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>On-Time</h3>
              <p className="text-xs text-white/90" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>Delivery</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-primary-dark font-semibold text-xs sm:text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Crafting Exceptional Spaces Since 2009
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                We don't just remodel kitchens and bathrooms – we transform the heart of your home into spaces that inspire, comfort, and delight. Our commitment to excellence and attention to detail has made us the premier choice in Cherry Hill, NJ.
              </p>

              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {[
                  'Personalized design consultations tailored to your vision',
                  'Premium materials and superior craftsmanship',
                  'Transparent pricing with no hidden costs',
                  'Licensed, insured, and highly experienced team',
                  'Complete project management from start to finish'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-sm sm:text-base text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
              >
                Learn More About Us <ChevronRight size={20} />
              </Link>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="space-y-3 md:space-y-4">
                  <img
                    src="https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/k-1.png"
                    alt="Kitchen design"
                    width="600"
                    height="400"
                    className="rounded-xl md:rounded-2xl shadow-xl w-full h-48 sm:h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <img
                    src="https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/k-2.png"
                    alt="Cabinet design"
                    width="600"
                    height="800"
                    className="rounded-xl md:rounded-2xl shadow-xl w-full h-56 sm:h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 md:space-y-4 pt-6 md:pt-8">
                  <img
                    src="https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/k-3.png"
                    alt="Bathroom design"
                    width="600"
                    height="800"
                    className="rounded-xl md:rounded-2xl shadow-xl w-full h-56 sm:h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="relative">
                    <img
                      src="https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/k-4.png"
                      alt="Countertop"
                      width="600"
                      height="400"
                      className="rounded-xl md:rounded-2xl shadow-xl w-full h-48 sm:h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-primary text-white px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl shadow-2xl">
                      <div className="text-base md:text-xl font-bold">On-Time</div>
                      <div className="text-xs md:text-sm">Delivery</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 md:-top-8 md:-left-8 bg-primary text-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-2xl">
                <div className="text-2xl md:text-4xl font-bold mb-1">15+</div>
                <div className="text-xs md:text-sm">Years of Excellence</div>
              </div>
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
                  {(service.title === 'Countertops' || service.title === 'Custom Cabinets' || service.title === 'Full Home Renovation') && (
                    <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1.5 rounded-lg shadow-lg text-xs sm:text-sm font-bold animate-pulse">
                      Christmas Deal
                    </div>
                  )}
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

      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-primary-dark font-semibold text-xs sm:text-sm uppercase tracking-wider">Video Testimonials</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-4 md:mb-6">What Our Clients Say</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Hear directly from our satisfied customers about their experience
            </p>
          </div>

          <div className="max-w-6xl mx-auto mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 aspect-video mb-8">
              <YouTubeFacade
                videoId={videos[activeVideo].embedUrl.split('/').pop() || ''}
                title={videos[activeVideo].title}
              />
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-6">
              {videos.map((video) => {
                const isActive = activeVideo === video.id;
                const videoId = video.embedUrl.split('/').pop();

                return (
                  <div
                    key={video.id}
                    onClick={() => setActiveVideo(video.id)}
                    className={`group relative cursor-pointer rounded-lg md:rounded-xl overflow-hidden transition-all duration-300 ${
                      isActive
                        ? 'ring-4 ring-primary shadow-xl scale-105'
                        : 'hover:scale-105 hover:shadow-lg opacity-70 hover:opacity-100'
                    }`}
                  >
                    <div className="relative aspect-video">
                      <img
                        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                        alt={video.title}
                        width="480"
                        height="360"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className={`absolute inset-0 transition-all ${
                        isActive
                          ? 'bg-primary/20'
                          : 'bg-black/40 group-hover:bg-black/30'
                      }`}>
                        <div className="absolute inset-0 flex items-center justify-center">
                          {!isActive && (
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/95 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                              <div className="w-0 h-0 border-l-[12px] md:border-l-[16px] border-l-primary border-t-[8px] md:border-t-[10px] border-t-transparent border-b-[8px] md:border-b-[10px] border-b-transparent ml-1"></div>
                            </div>
                          )}
                          {isActive && (
                            <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full font-semibold">
                              Now Playing
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 md:p-3">
                      <p className="text-white text-xs md:text-sm font-medium line-clamp-1">{video.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: 'Sarah Johnson',
                text: 'Kitch Designs completely transformed our outdated kitchen into a modern masterpiece. The attention to detail and professionalism was outstanding. We couldn\'t be happier with the results!',
                rating: 5,
                role: 'Homeowner'
              },
              {
                name: 'Michael Chen',
                text: 'From the initial consultation to the final reveal, the team was incredible. Our bathroom remodel exceeded all expectations. They truly understood our vision and brought it to life beautifully.',
                rating: 5,
                role: 'Homeowner'
              },
              {
                name: 'Emily Rodriguez',
                text: 'Professional, punctual, and perfect results. The custom cabinets they designed for us are not only beautiful but incredibly functional. Highly recommend Kitch Designs!',
                rating: 5,
                role: 'Homeowner'
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-primary fill-primary" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
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
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            {[
              'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/k-1.png',
              'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/k-2.png',
              'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/k-3.png',
              'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/k-4.png',
              'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/k-5.png',
              'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Flooring.jpg'
            ].map((image, index) => (
              <button
                key={index}
                onClick={() => setLightboxImage(image)}
                className="group relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Kitchen Design ${index + 1}`}
                  width="600"
                  height="600"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-semibold">View Full Image</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              View Gallery <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-10 text-teal-100 leading-relaxed">
              Schedule your free consultation today and let's bring your dream kitchen or bathroom to life. Our expert team is ready to guide you through every step of the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                onClick={() => setIsQuotePopupOpen(true)}
                className="bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105 inline-flex items-center justify-center"
              >
                Get Free Quote <ArrowRight className="ml-2" size={18} />
              </button>
              <a
                href="tel:8563983087"
                className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-white hover:text-primary transition-all duration-300 inline-flex items-center justify-center"
              >
                Call: 856-398-3087
              </a>
            </div>
          </div>
        </div>
      </section>

      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 animate-fade-in backdrop-blur-sm"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full p-3 transition-all duration-300 hover:scale-110 z-[101]"
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <div
            className="relative max-w-4xl max-h-[80vh] w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage}
              alt="Kitchen Design"
              width="1200"
              height="800"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

      <QuotePopup isOpen={isQuotePopupOpen} onClose={() => setIsQuotePopupOpen(false)} />
    </div>
  );
}
