import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '(929) 732-4979',
      description: 'Ready to help with your project',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'mauricio.hdbnyc@gmail.com',
      description: 'We respond within 24 hours',
    },
    {
      icon: Clock,
      title: 'Same-Day Service',
      details: 'Available Daily',
      description: 'For urgent cleaning needs',
    },
  ];

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 bg-blue-light">{/* Very light blue background */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        <div className="text-center mb-10 md:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-5 lg:mb-6 tracking-tight leading-relaxed">
            <span className="text-primary">Get In</span> 
            <span className="text-gold bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent"> Touch</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed animate-fade-in [animation-delay:200ms]">
              Ready to experience a spotless space? Contact us today for a free estimate 
              and let us handle the cleaning while you enjoy your time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mt-4 md:mt-6 animate-fade-in [animation-delay:400ms]">
              <a href="tel:(929) 732-4979" className="text-sm sm:text-base md:text-lg font-medium text-primary hover:text-gold transition-colors flex items-center gap-2">
                <Phone className="h-4 w-4 md:h-5 md:w-5" />
                (929) 732-4979
              </a>
              <span className="hidden sm:inline text-muted-foreground">|</span>
              <a href="mailto:mauricio.hdbnyc@gmail.com" className="text-sm sm:text-base md:text-lg font-medium text-primary hover:text-gold transition-colors flex items-center gap-2">
                <Mail className="h-4 w-4 md:h-5 md:w-5" />
                mauricio.hdbnyc@gmail.com
              </a>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gold font-medium mt-3 md:mt-4 animate-fade-in [animation-delay:600ms]">¡Hablamos Español!</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6 max-w-5xl mx-auto">
          {/* Contact Info */}
          {contactInfo.map((info, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 bg-white group animate-fade-in hover-scale" style={{animationDelay: `${index * 150}ms`}}>
              <CardContent className="p-6 md:p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg relative z-10">
                  <info.icon className="h-8 w-8 md:h-10 md:w-10 text-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-base md:text-lg">
                  {info.title === 'Email Us' ? (
                    <a href={`mailto:${info.details}`} className="hover:underline">
                      {info.title}
                    </a>
                  ) : info.title === 'Call Us' ? (
                    <a href={`tel:${info.details.replace(/[^\d+]/g, '')}`} className="hover:underline">
                      {info.title}
                    </a>
                  ) : (
                    info.title
                  )}
                </h3>
                <p className="text-sm md:text-base font-medium text-gold mb-1 md:mb-2 break-all text-center leading-tight">
                  {info.title === 'Email Us' ? (
                    <a href={`mailto:${info.details}`} className="hover:underline">
                      {info.details}
                    </a>
                  ) : info.title === 'Call Us' ? (
                    <a href={`tel:${info.details.replace(/[^\d+]/g, '')}`} className="hover:underline">
                      {info.details}
                    </a>
                  ) : (
                    info.details
                  )}
                </p>
                <p className="text-xs md:text-sm text-foreground">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;