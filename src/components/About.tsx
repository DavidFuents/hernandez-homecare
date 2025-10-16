import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Award, Users, CheckCircle } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Trusted & Insured',
      description: 'Fully insured cleaning professionals with background-checked team members for your security.',
    },
    {
      icon: Award,
      title: 'Top-Rated Service',
      description: 'Exceptional cleaning quality with meticulous attention to detail in every room.',
    },
    {
      icon: Users,
      title: 'Professional Team',
      description: 'Trained cleaning specialists dedicated to delivering consistent, reliable results.',
    },
  ];

  const values = [
    'Free on-site estimates',
    'Transparent, upfront pricing',
    'Flexible scheduling options',
    'Eco-friendly cleaning products',
    'Satisfaction guaranteed',
    'Same-day service available',
  ];

  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 bg-background">{/* Clean white background */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="animate-fade-in mb-6 md:mb-8 mt-12 md:mt-8 lg:mt-12 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-5 lg:mb-6 tracking-tight leading-relaxed">
                <span className="text-primary">Why Choose</span> 
                <span className="text-gold bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent"> Us?</span>
              </h2>
            
              <p className="text-base sm:text-lg md:text-lg lg:text-2xl text-foreground leading-relaxed">
                We've built our reputation on reliability, quality cleaning, and treating every space with the care it deserves.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-5 lg:gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center group hover-scale animate-fade-in" style={{animationDelay: `${(index + 1) * 200}ms`}}>
                  <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-primary rounded-xl mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    <feature.icon className="h-8 w-8 md:h-10 md:w-10 text-gold group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-foreground mb-1 md:mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-sm md:text-base text-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Values Card */}
          <div>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
                  What You Can Expect
                </h3>
                
                <div className="space-y-4">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                      <span className="text-foreground">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-muted/50 rounded-lg text-center">
                  <h4 className="font-semibold text-foreground mb-2">Our Promise</h4>
                  <p className="text-foreground text-sm md:text-sm leading-relaxed">
                    100% satisfaction guaranteed on every cleaning. If you're not happy with our service, 
                    we'll make it right—no questions asked.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;