import { useState, useEffect } from 'react';
import heroCleanLivingRoom from '@/assets/hero-clean-living-room.jpg';
import heroCleanKitchen from '@/assets/hero-clean-kitchen.jpg';
import heroCleanBathroom from '@/assets/hero-clean-bathroom.jpg';
import heroCleanOffice from '@/assets/hero-clean-office.jpg';

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const slides = [
    { image: heroCleanLivingRoom, alt: "Professional home cleaning service" },
    { image: heroCleanKitchen, alt: "Spotless kitchen cleaning" },
    { image: heroCleanBathroom, alt: "Pristine bathroom cleaning" },
    { image: heroCleanOffice, alt: "Professional office cleaning service" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const next = (currentSlide + 1) % slides.length;
      setNextSlide(next);
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentSlide(next);
        setIsTransitioning(false);
      }, 4000); // 4 second crossfade
    }, 12000); // Change slide every 12 seconds

    return () => clearInterval(timer);
  }, [currentSlide, slides.length]);

  return (
    <div className="absolute inset-0">
      {/* Current slide */}
      <div className="absolute inset-0">
        <img 
          src={slides[currentSlide].image} 
          alt={slides[currentSlide].alt}
          className="w-full h-full object-cover object-center scale-x-[-1]"
        />
      </div>
      
      {/* Next slide with crossfade effect */}
      <div 
        className={`absolute inset-0 transition-opacity duration-[4000ms] ease-in-out ${
          isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img 
          src={slides[nextSlide].image} 
          alt={slides[nextSlide].alt}
          className="w-full h-full object-cover object-center scale-x-[-1]"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 to-navy-deep/70"></div>
    </div>
  );
};

export default HeroSlideshow;