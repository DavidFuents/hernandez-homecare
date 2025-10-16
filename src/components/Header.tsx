import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, ArrowRight, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import hLogo from '@/assets/hdb-logo-new.png';
import hLogoTablet from '@/assets/hdb-logo-tablet.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const serviceItems = [
    { label: 'Residential Cleaning', href: '#services' },
    { label: 'Commercial Cleaning', href: '#services' },
    { label: 'Specialty Services', href: '#services' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past hero section (approximately)
      setIsScrolled(window.scrollY > window.innerHeight * 0.7);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={hLogo} 
              alt="Hernandez Design & Build Logo" 
              className="h-16 w-auto"
            />
          </div>

          {/* Contact Info */}
          <div className="flex items-center space-x-6">
            <a 
              href="tel:(929) 732-4979" 
              className="hidden sm:flex items-center space-x-2 text-navy-deep hover:text-gold transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="font-medium">(929) 732-4979</span>
            </a>
            <a 
              href="mailto:mauricio.hdbnyc@gmail.com" 
              className="hidden md:flex items-center space-x-2 text-navy-deep hover:text-gold transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="font-medium">mauricio.hdbnyc@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;