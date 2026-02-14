import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Clock, DollarSign, Shield, Lightbulb } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Kitchen Remodeling',
      tagline: 'The Heart of Your Home',
      description: 'Transform your kitchen into a space that combines beauty, functionality, and innovation. Our expert designers work closely with you to create a culinary haven tailored to your lifestyle.',
      image: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=800',
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
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
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
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
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
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
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
      image: 'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=800',
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
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
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
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1920')"
          }}
        ></div>

        <div className="relative z-20 container mx-auto px-6 text-center text-white">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive remodeling solutions designed to transform your space into something extraordinary
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: 'Fast Turnaround',
                description: 'Efficient project completion without compromising quality'
              },
              {
                icon: DollarSign,
                title: 'Transparent Pricing',
                description: 'Clear estimates with no hidden fees or surprises'
              },
              {
                icon: Shield,
                title: 'Licensed & Insured',
                description: 'Fully certified professionals you can trust'
              },
              {
                icon: Lightbulb,
                title: 'Design Expertise',
                description: 'Innovative solutions tailored to your vision'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-4">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={index}
          className={`py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container mx-auto px-6">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <span className="text-primary-dark font-semibold text-sm uppercase tracking-wider">
                  {service.tagline}
                </span>
                <h2 className="text-5xl font-bold text-gray-900 mt-4 mb-6">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  Get a Free Quote <ArrowRight size={20} />
                </Link>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
                  />
                  <div className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-2xl shadow-2xl hidden md:block">
                    <div className="text-4xl font-bold mb-2">Free</div>
                    <div className="text-lg">Consultation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-24 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">Our Process</h2>
            <p className="text-xl mb-16 text-teal-100">
              From initial consultation to final reveal, we make your remodeling journey seamless
            </p>

            <div className="grid md:grid-cols-4 gap-8">
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
                <div key={index} className="relative">
                  <div className="text-6xl font-bold text-white/20 mb-4">{item.step}</div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-teal-100">{item.description}</p>
                  {index < 3 && (
                    <ArrowRight className="hidden md:block absolute top-12 -right-4 text-white/30" size={32} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Contact us today for a free consultation and let's discuss how we can bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/portfolio"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/30"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
