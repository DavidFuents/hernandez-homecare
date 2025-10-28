import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Users, Clock, MapPin } from 'lucide-react';
import hLogo from '@/assets/h-logo-white.png';
import HeroSlideshow from './HeroSlideshow';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Slideshow with Overlay */}
      <HeroSlideshow />

      {/* Content */}
      <div className="relative z-10 pt-16 md:pt-24 lg:pt-32 animate-slide-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-2xl ml-80">
          {/* Main Heading */}
          <div className="mb-4 md:mb-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-4 leading-[0.95] tracking-tight">
              <span className="text-white block mb-2">Hernandez</span>
              <span className="text-gold bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent block pb-1 leading-[0.95]">HomeCare</span>
            </h1>
          </div>
          
          {/* Description */}
          <div className="mb-8 md:mb-10 max-w-2xl">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-white leading-relaxed">
              Professional cleaning services for your home and office.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-white leading-relaxed mt-2">
              <span className="text-gold font-semibold">Family-owned</span> and serving NYC with care and reliability.
            </p>
          </div>

          {/* Call to Action */}
          <div className="mb-6 md:mb-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button variant="hero" size="lg" className="group text-sm md:text-base px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto" asChild>
              <a href="/booking">
                Book Your Cleaning
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <p className="text-base md:text-lg text-gold font-medium text-center sm:text-left">¡Hablamos Español!</p>
          </div>

          {/* Stats */}
          <div className="border-t border-white/20 pt-6 md:pt-8 mt-8 md:mt-10">
            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl">
              <div className="flex flex-col items-center gap-2 md:gap-3 group hover-scale">
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-lg group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Shield className="h-6 w-6 md:h-8 md:w-8 text-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-center">
                  <div className="text-base md:text-xl font-bold text-white">Licensed</div>
                  <div className="text-sm md:text-base text-gray-300">& Insured</div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 md:gap-3 group hover-scale">
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-lg group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Clock className="h-6 w-6 md:h-8 md:w-8 text-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-center">
                  <div className="text-base md:text-xl font-bold text-white">24/7</div>
                  <div className="text-sm md:text-base text-gray-300">Support</div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 md:gap-3 group hover-scale">
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-lg group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <MapPin className="h-6 w-6 md:h-8 md:w-8 text-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-center">
                  <div className="text-base md:text-xl font-bold text-white">NYC</div>
                  <div className="text-sm md:text-base text-gray-300">Based</div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Logo in bottom right - hidden on mobile, visible on desktop */}
      <div className="hidden md:block absolute bottom-8 md:right-12 lg:right-20 z-20">
        <img 
          src={hLogo} 
          alt="H Design & Build Logo" 
          className="h-20 w-auto"
        />
      </div>
    </section>
  );
};

export default Hero;