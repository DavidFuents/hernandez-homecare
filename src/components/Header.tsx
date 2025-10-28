
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    { label: 'Home', href: '/#home' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
  ];

  const serviceItems = [
    { label: 'Residential Cleaning', href: '/#services' },
    { label: 'Commercial Cleaning', href: '/#services' },
    { label: 'Specialty Services', href: '/#services' },
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between md:h-auto lg:h-20 md:py-1 lg:py-0 relative">
          {/* Logo */}
          <Link to="/" className="flex items-center z-10">
            <img 
              src={hLogo} 
              alt="Hernandez Design & Build Logo" 
              className="h-20 hidden lg:block w-auto"
            />
            <img 
              src={hLogoTablet} 
              alt="Hernandez Design & Build Logo" 
              className="h-16 md:block lg:hidden w-auto"
            />
          </Link>

          {/* Desktop Navigation - Absolutely Centered */}
          <nav className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
            <a
              href="/#home"
              className="text-lg text-primary hover:text-gold transition-colors duration-300 font-medium mr-4"
            >
              Home
            </a>
            
            {/* Services Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-lg text-primary hover:text-gold transition-colors duration-300 font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white border border-border shadow-lg rounded-lg p-4 min-w-[250px]">
                    <ul className="space-y-2">
                      {serviceItems.map((service) => (
                        <li key={service.label}>
                          <NavigationMenuLink asChild>
                            <a
                              href={service.href}
                              className="block px-4 py-2 text-base text-primary hover:text-gold hover:bg-muted rounded-md transition-colors"
                            >
                              {service.label}
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <a
              href="/#about"
              className="text-lg text-primary hover:text-gold transition-colors duration-300 font-medium ml-3 mr-5"
            >
              About
            </a>
            <a
              href="/#contact"
              className="text-lg text-primary hover:text-gold transition-colors duration-300 font-medium ml-2"
            >
              Contact
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="flex md:flex-col lg:flex-row items-center justify-end md:space-y-1 lg:space-y-0 md:space-x-0 lg:space-x-3 z-10">
            <Button variant="hero" size="lg" className="group text-sm md:text-base px-5 md:px-6 py-2.5 md:py-3 w-full sm:w-auto" asChild>
              <a href="/booking">
                Book Your Cleaning
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="flex md:hidden items-center h-20 w-full">
          <Link to="/" className="flex items-center">
            <img 
              src={hLogo} 
              alt="Hernandez Design & Build Logo" 
              className="h-20 w-auto"
            />
          </Link>
          <button
            className="ml-auto p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary/20 bg-background/95">
            <nav className="flex flex-col space-y-4">
              <a
                href="/#home"
                className="text-lg text-primary hover:text-gold transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              
              {/* Mobile Services Dropdown */}
              <details className="group">
                <summary className="text-lg text-primary hover:text-gold transition-colors duration-300 font-medium cursor-pointer list-none flex items-center">
                  Services
                  <ChevronDown className="ml-2 h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="mt-2 ml-4 space-y-2">
                  {serviceItems.map((service) => (
                    <a
                      key={service.label}
                      href={service.href}
                      className="block text-base text-primary hover:text-gold transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.label}
                    </a>
                  ))}
                </div>
              </details>
              
              <a
                href="/#about"
                className="text-lg text-primary hover:text-gold transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/#contact"
                className="text-lg text-primary hover:text-gold transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              
              <div className="flex flex-col space-y-2 pt-4 border-t border-primary/20">
                <div className="flex items-center space-x-2 text-base text-primary">
                  <Phone className="h-5 w-5" />
                  <a href="tel:(929) 732-4979" className="hover:underline">(929) 732-4979</a>
                </div>
                <Button variant="hero" size="lg" className="group text-sm md:text-base px-5 md:px-6 py-2.5 md:py-3 w-full sm:w-auto" asChild>
                  <a href="/booking">
                    Book Your Cleaning
                    <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
