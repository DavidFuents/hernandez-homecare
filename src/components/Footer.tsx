import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep text-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 py-8 md:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-6 lg:gap-8">
          {/* Company Info - takes up 2 columns */}
          <div className="sm:col-span-2 md:col-span-2">
            <h3 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              <span className="text-white">Hernandez</span>{' '}
              <span className="text-gold">HomeCare</span>
            </h3>
            <p className="text-base md:text-lg text-white mb-3 md:mb-4 leading-relaxed">
              Professional cleaning services for your home and office.
              <span className="text-gold font-semibold"> Family-owned</span> and serving NYC with 
              <span className="text-white"> care and reliability</span>. We bring quality and attention to detail to every space we clean.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:ml-12 lg:ml-24">
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-1.5 md:space-y-2 text-sm md:text-base">
              <li><a href="#home" className="text-gray-300 hover:text-gold transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-gold transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-gold transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Get In Touch</h4>
            <div className="space-y-2 md:space-y-3 text-sm md:text-base">
              <div className="flex items-start flex-col">
                <div className="flex items-center mb-1">
                  <Phone className="h-4 w-4 mr-2 text-gold flex-shrink-0" />
                  <span className="text-gray-300">Call us:</span>
                </div>
                <a href="tel:(929) 732-4979" className="text-gray-300 hover:text-gold transition-colors ml-6">
                  (929) 732-4979
                </a>
              </div>
              <div className="flex items-start flex-col">
                <div className="flex items-center mb-1">
                  <Mail className="h-4 w-4 mr-2 text-gold flex-shrink-0" />
                  <span className="text-gray-300">Email us:</span>
                </div>
                <a href="mailto:mauricio.hdbnyc@gmail.com" className="text-gray-300 hover:text-gold transition-colors break-all ml-6">
                  mauricio.hdbnyc@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 md:mt-12 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            <p className="text-gray-300 text-xs md:text-sm text-center md:text-left">
              © {currentYear} Hernandez HomeCare. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-3 md:gap-6 text-xs md:text-sm">
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">Privacy Policy</a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">Terms of Service</a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">Licensed & Insured</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;