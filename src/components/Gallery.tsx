import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, ArrowRight } from 'lucide-react';
import bathroomImage from '@/assets/bathroom-family.jpg';
import kitchenImage from '@/assets/kitchen-family.jpg';
import livingRoomImage from '@/assets/living-family.jpg';
import exteriorImage from '@/assets/exterior-family.jpg';

const Gallery = () => {
  const projects = [
    {
      title: 'Family Bathroom Renovation',
      image: bathroomImage,
      category: 'Bathroom Remodel',
      description: 'Warm, family-friendly bathroom renovation with quality materials and careful attention to detail.',
    },
    {
      title: 'Cozy Kitchen Design',
      image: kitchenImage,
      category: 'Kitchen Renovation',
      description: 'Beautiful kitchen transformation creating a warm gathering space for family meals and memories.',
    },
    {
      title: 'Welcoming Living Space',
      image: livingRoomImage,
      category: 'Interior Design',
      description: 'Comfortable living room designed for family time, combining functionality with personal touches.',
    },
    {
      title: 'Family Home & Garden',
      image: exteriorImage,
      category: 'Landscaping',
      description: 'Personal landscaping and exterior care creating a beautiful, welcoming home for the family.',
    },
  ];

  return (
    <section id="gallery" className="py-12 md:py-16 lg:py-20 bg-blue-accent">{/* Subtle blue accent */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-4">
            <span className="text-navy-deep">Our</span> <span className="text-primary">Recent Work</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a look at some of our recent family projects and see the personal care and craftsmanship 
             that makes our small business special in the community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6 lg:gap-8 mb-10 md:mb-12 lg:mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gold text-navy-deep px-3 py-1 rounded-full text-sm font-medium">{/* Gold badge for visibility */}
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="secondary" size="sm" className="bg-white/90 hover:bg-white">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" className="group" asChild>
            <a href="https://forms.gle/SqdUo792PQ7G2Qpu7" target="_blank" rel="noopener noreferrer">
              View Full Portfolio
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;