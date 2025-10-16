import Header from '@/components/Header';
import HeroSlideshow from '@/components/HeroSlideshow';
import BookingWizard from '@/components/BookingWizard';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      <main className="relative min-h-screen">
        {/* Background Slideshow */}
        <HeroSlideshow />
        
        {/* Booking Wizard Content */}
        <div className="relative z-10">
          <BookingWizard />
        </div>
      </main>
    </div>
  );
};

export default Index;
