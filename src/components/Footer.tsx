import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/kitch-logo.webp"
              alt="Kitch Designs Logo"
              width="200"
              height="48"
              className="h-12 w-auto mb-6"
              loading="lazy"
            />
            <p className="text-gray-600 leading-relaxed mb-6">
              Transforming houses into dream homes since 2009. Your trusted partner for kitchen and bathroom remodeling in Cherry Hill, NJ.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Visit our Facebook page" className="bg-gray-100 p-3 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Visit our Instagram page" className="bg-gray-100 p-3 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Visit our LinkedIn page" className="bg-gray-100 p-3 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-lg mb-6">Quick Links</p>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-lg mb-6">Services</p>
            <ul className="space-y-3 text-gray-600">
              <li className="hover:text-primary transition-colors cursor-pointer">Kitchen Remodeling</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Bathroom Remodeling</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Custom Cabinets</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Countertops</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Flooring</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-lg mb-6">Contact Info</p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-primary mt-1 flex-shrink-0" />
                <a href="tel:8563983087" aria-label="Call us at 856-398-3087" className="hover:text-primary transition-colors">
                  856-398-3087
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-primary mt-1 flex-shrink-0" />
                <a href="mailto:info@kitchdesigns.com" className="hover:text-primary transition-colors">
                  info@kitchdesigns.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <a href="https://maps.app.goo.gl/N27zQRpgG5AQzHtMA" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Cherry Hill, NJ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-center md:text-left">
            &copy; 2025 Kitch Designs. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-600 text-sm">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
