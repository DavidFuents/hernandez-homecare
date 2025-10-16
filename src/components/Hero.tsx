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
      <div className="relative z-10 pt-22 md:pt-22 lg:pt-24 animate-slide-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center md:justify-end">
          <div className="w-full max-w-4xl ml-0 md:ml-20 lg:ml-64">
          {/* Main Heading */}
          <div className="mb-6 md:mb-8 lg:mb-10">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4 md:mb-5 lg:mb-6 leading-[1.1] tracking-tight">
              <span className="text-white block mb-1 md:mb-2">Hernandez</span>
              <span className="text-gold bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent block pb-1 md:pb-2 leading-[1.1]">HomeCare</span>
            </h1>
          </div>
          
          {/* Description */}
          <div className="mb-6 md:mb-7 lg:mb-8 max-w-3xl">
            <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-white leading-relaxed">
              Professional cleaning services for your home and office.
              <span className="text-gold font-semibold"> Family-owned</span> and serving NYC with 
              <span className="text-white"> care and reliability</span>.
            </p>
          </div>

          {/* Call to Action */}
          <div className="mb-4 md:mb-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-6">
            <Button variant="hero" size="lg" className="group text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto" asChild>
              <a href="https://forms.gle/SqdUo792PQ7G2Qpu7" target="_blank" rel="noopener noreferrer">
                Book Your Cleaning
                <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <p className="text-base md:text-lg text-gold font-medium text-center sm:text-left">¡Hablamos Español!</p>
          </div>

          {/* Stats */}
          <div className="border-t border-white/20 pt-6 md:pt-7 lg:pt-8 mt-6 md:mt-8 lg:mt-10">
            <div className="grid grid-cols-3 gap-2 md:gap-6 lg:gap-8 max-w-4xl">
              <div className="flex flex-col items-center gap-2 md:gap-3 group hover-scale">
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-lg md:rounded-xl group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Shield className="h-6 w-6 md:h-8 md:w-8 text-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-center">
                  <div className="text-base md:text-xl font-bold text-white">Licensed</div>
                  <div className="text-sm md:text-base text-gray-300">& Insured</div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 md:gap-3 group hover-scale">
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-lg md:rounded-xl group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Clock className="h-6 w-6 md:h-8 md:w-8 text-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-center">
                  <div className="text-base md:text-xl font-bold text-white">24/7</div>
                  <div className="text-sm md:text-base text-gray-300">Support</div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 md:gap-3 group hover-scale">
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-lg md:rounded-xl group-hover:scale-110 transition-all duration-300 shadow-lg">
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
      <div className="hidden md:block absolute bottom-8 md:right-20 lg:right-72 z-20">
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