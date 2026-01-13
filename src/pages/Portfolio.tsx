import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter } from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Kitchens', 'Bathrooms', 'Cabinets', 'Full Renovations'];

  const projects = [
    {
      title: 'Modern Farmhouse Kitchen',
      category: 'Kitchens',
      image: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete kitchen transformation with white shaker cabinets and marble countertops',
      location: 'Cherry Hill, NJ'
    },
    {
      title: 'Luxury Master Bathroom',
      category: 'Bathrooms',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Spa-inspired bathroom with walk-in shower and soaking tub',
      location: 'Moorestown, NJ'
    },
    {
      title: 'Contemporary Kitchen Design',
      category: 'Kitchens',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Sleek modern kitchen with custom dark wood cabinets',
      location: 'Haddonfield, NJ'
    },
    {
      title: 'Classic White Kitchen',
      category: 'Kitchens',
      image: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Timeless white kitchen with subway tile and pendant lighting',
      location: 'Marlton, NJ'
    },
    {
      title: 'Custom Walnut Cabinets',
      category: 'Cabinets',
      image: 'https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Handcrafted walnut cabinetry with soft-close hardware',
      location: 'Voorhees, NJ'
    },
    {
      title: 'Guest Bathroom Refresh',
      category: 'Bathrooms',
      image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern powder room with floating vanity and geometric tile',
      location: 'Cherry Hill, NJ'
    },
    {
      title: 'Gourmet Chef Kitchen',
      category: 'Kitchens',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Professional-grade kitchen with quartz waterfall island',
      location: 'Haddonfield, NJ'
    },
    {
      title: 'Spa Master Bath',
      category: 'Bathrooms',
      image: 'https://images.pexels.com/photos/1358900/pexels-photo-1358900.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Luxurious retreat with heated floors and custom lighting',
      location: 'Moorestown, NJ'
    },
    {
      title: 'Open Concept Renovation',
      category: 'Full Renovations',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete home transformation with kitchen and living space redesign',
      location: 'Cherry Hill, NJ'
    },
    {
      title: 'Transitional Kitchen',
      category: 'Kitchens',
      image: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Perfect blend of traditional and contemporary design elements',
      location: 'Marlton, NJ'
    },
    {
      title: 'Custom Built-In Shelving',
      category: 'Cabinets',
      image: 'https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Floor-to-ceiling custom cabinetry for home office',
      location: 'Voorhees, NJ'
    },
    {
      title: 'Kids Bathroom Makeover',
      category: 'Bathrooms',
      image: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Fun and functional bathroom designed for family living',
      location: 'Cherry Hill, NJ'
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[65vh] md:min-h-[75vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1920')"
          }}
        ></div>

        <div className="relative z-20 container mx-auto px-6 py-20 md:py-24 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight">Our Portfolio</h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed">
              Explore our collection of stunning kitchen and bathroom transformations
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white sticky top-20 z-40 shadow-md">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Filter className="text-gray-600" size={20} />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-primary rounded-full text-xs font-semibold mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-200 mb-2">{project.description}</p>
                    <p className="text-xs text-primary-light">{project.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Promise</h2>
              <p className="text-xl text-gray-600">
                Every project we undertake is a testament to our commitment to excellence
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  number: '500+',
                  label: 'Completed Projects',
                  description: 'Successfully delivered transformations'
                },
                {
                  number: '100%',
                  label: 'Satisfaction',
                  description: 'Dedicated to exceeding expectations'
                },
                {
                  number: '15+',
                  label: 'Years Experience',
                  description: 'Proven expertise and reliability'
                }
              ].map((stat, index) => (
                <div key={index} className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300">
                  <div className="text-5xl font-bold text-primary mb-3">{stat.number}</div>
                  <div className="text-xl font-bold text-gray-900 mb-2">{stat.label}</div>
                  <div className="text-gray-600">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Create Your Dream Space?</h2>
          <p className="text-xl mb-10 text-teal-100 max-w-2xl mx-auto">
            Let's discuss your project and bring your vision to life. Schedule your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Get Started <ArrowRight size={20} />
            </Link>
            <Link
              to="/services"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
