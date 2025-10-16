import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Building2, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Cleaning',
      description: 'Professional home cleaning services tailored to your needs.',
      features: ['Regular House Cleaning', 'Deep Cleaning', 'Move-In/Move-Out Cleaning', 'Post-Construction Cleaning'],
    },
    {
      icon: Building2,
      title: 'Commercial Cleaning',
      description: 'Reliable office and commercial cleaning for businesses.',
      features: ['Office Cleaning', 'Retail Space Cleaning', 'Building Maintenance'],
    },
    {
      icon: Sparkles,
      title: 'Specialty Services',
      description: 'Specialized cleaning for unique requirements.',
      features: ['Carpet & Upholstery Cleaning', 'Window Cleaning', 'Pressure Washing', 'Post-Event Cleaning', 'Green Eco-Friendly Options'],
    },
  ];

  return (
    <section id="services" className="py-12 md:py-16 lg:py-20 bg-blue-soft">{/* Soft blue background */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        <div className="text-center mb-10 md:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-5 lg:mb-6 tracking-tight leading-relaxed">
            <span className="text-primary">Cleaning</span> 
            <span className="text-gold bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent"> Services</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg md:text-lg lg:text-xl text-foreground leading-relaxed animate-fade-in [animation-delay:200ms]">
              Professional cleaning solutions for homes and businesses across NYC. We bring sparkle and shine to every space with meticulous attention to detail.
            </p>
            <p className="text-base md:text-lg lg:text-xl text-gold font-medium mt-3 md:mt-4 animate-fade-in [animation-delay:400ms]">¡Hablamos Español!</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border-0 shadow-lg h-full flex flex-col animate-fade-in hover-scale" style={{animationDelay: `${index * 150}ms`}}>
              <CardContent className="p-6 md:p-8 flex flex-col h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-primary rounded-xl mb-4 md:mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg relative z-10">
                  <service.icon className="h-8 w-8 md:h-10 md:w-10 text-gold group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 md:mb-4">
                  {service.title}
                </h3>
                
                <p className="text-base md:text-lg text-foreground mb-4 md:mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-4 md:mb-6 flex-grow">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs md:text-sm text-foreground">
                      <div className="w-2 h-2 bg-gold rounded-full mr-2 md:mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-16">
          <Button variant="hero" size="lg" className="w-full sm:w-auto text-xl px-10 py-6" asChild>
            <a href="https://forms.gle/SqdUo792PQ7G2Qpu7" target="_blank" rel="noopener noreferrer">
              Book Your Cleaning Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;