import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { useState } from 'react';
import QuotePopup from '../components/QuotePopup';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

export default function Services() {
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);

  const servicesSchema = {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Service',
        name: 'Kitchen Remodeling',
        description: 'Transform your kitchen into a space that combines beauty, functionality, and innovation',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Kitch Designs',
          telephone: '+1-856-398-3087'
        },
        areaServed: 'Cherry Hill, NJ'
      },
      {
        '@type': 'Service',
        name: 'Bathroom Remodeling',
        description: 'Create a luxurious bathroom sanctuary that offers both comfort and style',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Kitch Designs',
          telephone: '+1-856-398-3087'
        },
        areaServed: 'Cherry Hill, NJ'
      },
      {
        '@type': 'Service',
        name: 'Custom Cabinets',
        description: 'Premium custom cabinetry solutions',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Kitch Designs',
          telephone: '+1-856-398-3087'
        },
        areaServed: 'Cherry Hill, NJ'
      },
      {
        '@type': 'Service',
        name: 'Flooring Installation',
        description: 'Professional flooring installation services',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Kitch Designs',
          telephone: '+1-856-398-3087'
        },
        areaServed: 'Cherry Hill, NJ'
      }
    ]
  };

  const services = [
    {
      title: 'Kitchen Remodeling',
      tagline: 'The Heart of Your Home',
      description: 'Transform your kitchen into a space that combines beauty, functionality, and innovation. Our expert designers work closely with you to create a culinary haven tailored to your lifestyle.',
      image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Kitchen-Remodeling.jpg',
      features: [
        'Custom cabinet design and installation',
        'Premium countertop selection (granite, quartz, marble)',
        'Modern appliance integration',
        'Lighting design and installation',
        'Backsplash and tile work',
        'Kitchen island creation',
        'Space optimization and layout planning',
        'Flooring installation'
      ]
    },
    {
      title: 'Bathroom Remodeling',
      tagline: 'Your Personal Spa Retreat',
      description: 'Create a luxurious bathroom sanctuary that offers both comfort and style. From modern minimalism to classic elegance, we bring your vision to life with meticulous attention to detail.',
      image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Bathroom-Remodeling.jpg',
      features: [
        'Vanity and cabinet installation',
        'Walk-in shower and tub design',
        'Tile and stone selection',
        'Modern fixture installation',
        'Heated flooring options',
        'Custom storage solutions',
        'Lighting and mirror placement',
        'Accessibility modifications'
      ]
    },
    {
      title: 'Custom Cabinets',
      tagline: 'Crafted to Perfection',
      description: 'Maximize your space with custom cabinetry designed specifically for your home. Our handcrafted cabinets combine superior quality with timeless design to enhance any room.',
      image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Custom-Cabinets.jpg',
      features: [
        'Custom design consultation',
        'Premium wood and material selection',
        'Soft-close hinges and drawer glides',
        'Multiple finish options',
        'Organizational inserts and accessories',
        'Crown molding and trim work',
        'Professional installation',
        'Lifetime warranty options'
      ]
    },
    {
      title: 'Countertops',
      tagline: 'Elegance Meets Durability',
      description: 'Choose from our extensive selection of premium countertop materials. We offer expert installation of granite, quartz, marble, and more to perfectly complement your space.',
      image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Countertops-2.jpg',
      features: [
        'Wide material selection',
        'Custom edge profiles',
        'Professional templating',
        'Precision fabrication',
        'Expert installation',
        'Sink and faucet integration',
        'Backsplash coordination',
        'Sealing and maintenance guidance'
      ]
    },
    {
      title: 'Flooring',
      tagline: 'Foundation of Style',
      description: 'Complete your space with beautiful, durable flooring that stands the test of time. From hardwood to tile, we offer a variety of options to suit your style and budget.',
      image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Flooring.jpg',
      features: [
        'Hardwood installation and refinishing',
        'Luxury vinyl plank (LVP)',
        'Ceramic and porcelain tile',
        'Natural stone flooring',
        'Heated floor systems',
        'Waterproof options',
        'Professional subfloor preparation',
        'Trim and transition work'
      ]
    },
    {
      title: 'Full Home Renovation',
      tagline: 'Complete Transformation',
      description: 'Take your entire home to the next level with our comprehensive renovation services. We manage every aspect of your project from design to completion.',
      image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Full-Home-Renovation.jpg',
      features: [
        'Whole-home design consultation',
        'Structural modifications',
        'Electrical and plumbing updates',
        'HVAC system improvements',
        'Interior and exterior renovations',
        'Project management',
        'Licensed contractors',
        'Quality assurance'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Kitchen & Bathroom Remodeling Services - Kitch Designs Cherry Hill, NJ"
        description="Expert kitchen remodeling, bathroom renovation, custom cabinets, and flooring services in Cherry Hill, NJ. Transform your space with Kitch Designs. Call (856) 398-3087."
        canonicalUrl="https://kitchdesigns.com/services"
        ogImage="https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Kitchen-Remodeling.jpg"
      />
      <StructuredData type="ItemList" data={servicesSchema} />
      <section className="relative min-h-[65vh] md:min-h-[75vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/servis-hero-kc.jpg')"
          }}
        ></div>

        <div className="relative z-20 container mx-auto px-6 py-20 md:py-24 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight">Our Services</h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 md:mb-10 leading-relaxed">
              Comprehensive remodeling solutions designed to transform your space into something extraordinary
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsQuotePopupOpen(true)}
                className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-xl hover:scale-105 inline-flex items-center text-sm sm:text-base"
              >
                Free Quote <ArrowRight className="ml-2" size={18} />
              </button>
              <a
                href="tel:8563983087"
                className="bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/30 inline-flex items-center text-sm sm:text-base"
              >
                <Phone className="mr-2" size={18} />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="aspect-video w-full overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    width="800"
                    height="450"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-br from-red-600 via-red-500 to-red-700 text-white px-4 py-2 rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300 border-2 border-red-400/50">
                    <div className="flex flex-col items-center">
                      <span className="text-xs font-bold uppercase tracking-wider mb-0.5">Christmas Deal</span>
                      <span className="text-[10px] opacity-90">Valid until 12/31/2025</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow">
                  <span className="inline-block bg-teal-100 text-primary-dark px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 self-start">
                    {service.tagline}
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                    {service.title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-5 md:mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid gap-2 sm:gap-3 mb-6 md:mb-8 flex-grow">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5 w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-xs sm:text-sm md:text-base text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setIsQuotePopupOpen(true)}
                    className="inline-flex items-center gap-2 bg-primary text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg text-sm md:text-base font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-xl hover:scale-105 self-start"
                  >
                    Get a Free Quote <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6">Our Process</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 md:mb-12 lg:mb-16 text-teal-100">
              From initial consultation to final reveal, we make your remodeling journey seamless
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {[
                {
                  step: '01',
                  title: 'Consultation',
                  description: 'Free in-home consultation to understand your vision and needs'
                },
                {
                  step: '02',
                  title: 'Design',
                  description: 'Custom design proposal with 3D renderings and material selection'
                },
                {
                  step: '03',
                  title: 'Construction',
                  description: 'Professional installation with minimal disruption to your life'
                },
                {
                  step: '04',
                  title: 'Completion',
                  description: 'Final walkthrough and quality assurance check'
                }
              ].map((item, index) => (
                <div key={index} className="relative bg-white/10 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-xl">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white/30 mb-2 md:mb-4">{item.step}</div>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3">{item.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-teal-100">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6">Ready to Get Started?</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-10 max-w-2xl mx-auto">
            Contact us today for a free consultation and let's discuss how we can bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={() => setIsQuotePopupOpen(true)}
              className="bg-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-sm md:text-base font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Schedule Consultation
            </button>
            <Link
              to="/portfolio"
              className="bg-white/10 backdrop-blur-sm text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-sm md:text-base font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/30"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <QuotePopup isOpen={isQuotePopupOpen} onClose={() => setIsQuotePopupOpen(false)} />
    </div>
  );
}
