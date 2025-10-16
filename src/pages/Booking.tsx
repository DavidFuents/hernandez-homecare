import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingWizard from '@/components/BookingWizard';

const Booking = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <BookingWizard />
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
