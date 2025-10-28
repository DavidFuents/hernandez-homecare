import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingWizard from '@/components/BookingWizard';
import HeroSlideshow from '@/components/HeroSlideshow';

const Booking = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-1 relative">
        {/* Background Slideshow */}
        <HeroSlideshow />
        
        {/* Booking Content */}
        <div className="relative z-10">
          <BookingWizard />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;