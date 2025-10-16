import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, ChevronLeft, CheckCircle2 } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';

interface BookingData {
  serviceType: string;
  propertyType: string;
  size: string;
  frequency: string;
  date?: Date;
  zipCode: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
  pricing?: {
    basePrice: number;
    total: number;
  };
}

const BookingWizard = () => {
  const [step, setStep] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [bookingData, setBookingData] = useState<BookingData>({
    serviceType: '',
    propertyType: '',
    size: '',
    frequency: '',
    zipCode: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  const totalSteps = 9;

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setStep((prev) => Math.min(prev + 1, totalSteps));
      setIsAnimating(false);
    }, 300);
  };

  const handleBack = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setStep((prev) => Math.max(prev - 1, 1));
      setIsAnimating(false);
    }, 300);
  };

  const handleSubmit = () => {
    console.log('Booking Data:', bookingData);
    toast({
      title: "Booking Request Received!",
      description: "We'll contact you shortly to confirm your appointment.",
    });
    handleNext();
  };

  const updateData = (field: keyof BookingData, value: string | Date | any) => {
    setBookingData((prev) => ({ ...prev, [field]: value }));
  };

  const calculatePricing = () => {
    let basePrice = 0;
    
    // Base price by service type
    switch (bookingData.serviceType) {
      case 'residential':
        basePrice = 120;
        break;
      case 'commercial':
        basePrice = 200;
        break;
      case 'deep':
        basePrice = 180;
        break;
      case 'move':
        basePrice = 250;
        break;
    }

    // Size multiplier
    const sizeMultipliers: { [key: string]: number } = {
      studio: 1,
      '1br': 1.2,
      '2br': 1.5,
      '3br': 1.8,
      '4br+': 2.2,
      small: 1,
      medium: 1.5,
      large: 2,
      xlarge: 2.5,
      'whole-house': 2.5,
      custom: 1.5,
    };

    const sizeMultiplier = sizeMultipliers[bookingData.size] || 1;
    const total = Math.round(basePrice * sizeMultiplier);

    return { basePrice, total };
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className={cn("space-y-8", isAnimating && "animate-fade-out")}>
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">What type of cleaning do you need?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
                { value: 'residential', label: 'Residential Cleaning', desc: 'Homes, apartments, condos' },
                { value: 'commercial', label: 'Commercial Cleaning', desc: 'Offices, retail spaces' },
                { value: 'deep', label: 'Deep Cleaning', desc: 'Thorough, detailed cleaning' },
                { value: 'move', label: 'Move In/Out', desc: 'Pre or post-move cleaning' },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    updateData('serviceType', option.value);
                    handleNext();
                  }}
                  className="p-6 border-2 border-white/30 bg-white/95 hover:bg-white hover:border-gold rounded-lg transition-all hover:shadow-xl text-left group backdrop-blur-sm"
                >
                  <div className="font-semibold text-lg text-navy-deep group-hover:text-gold transition-colors">
                    {option.label}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{option.desc}</div>
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        const propertyOptions = bookingData.serviceType === 'commercial' 
          ? [
              { value: 'office', label: 'Office Space' },
              { value: 'retail', label: 'Retail Store' },
              { value: 'restaurant', label: 'Restaurant' },
              { value: 'warehouse', label: 'Warehouse' },
            ]
          : [
              { value: 'apartment', label: 'Apartment/Condo' },
              { value: 'house', label: 'House' },
              { value: 'townhouse', label: 'Townhouse' },
              { value: 'other', label: 'Other' },
            ];
        
        return (
          <div className={cn("space-y-8", isAnimating && "animate-fade-out")}>
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">What type of property is it?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {propertyOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    updateData('propertyType', option.value);
                    handleNext();
                  }}
                  className="p-6 border-2 border-white/30 bg-white/95 hover:bg-white hover:border-gold rounded-lg transition-all hover:shadow-xl text-left group backdrop-blur-sm"
                >
                  <div className="font-semibold text-lg text-navy-deep group-hover:text-gold transition-colors">
                    {option.label}
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        const sizeOptions = bookingData.serviceType === 'commercial'
          ? [
              { value: 'small', label: 'Under 1,000 sq ft' },
              { value: 'medium', label: '1,000-5,000 sq ft' },
              { value: 'large', label: '5,000-10,000 sq ft' },
              { value: 'xlarge', label: 'Over 10,000 sq ft' },
            ]
          : bookingData.serviceType === 'move'
          ? [
              { value: 'studio', label: 'Studio' },
              { value: '1br', label: '1 Bedroom' },
              { value: '2br', label: '2 Bedrooms' },
              { value: '3br', label: '3 Bedrooms' },
              { value: '4br+', label: '4+ Bedrooms' },
              { value: 'whole-house', label: 'Whole House' },
            ]
          : [
              { value: 'studio', label: 'Studio' },
              { value: '1br', label: '1 Bedroom' },
              { value: '2br', label: '2 Bedrooms' },
              { value: '3br', label: '3 Bedrooms' },
              { value: '4br+', label: '4+ Bedrooms' },
              { value: 'custom', label: 'Other Size' },
            ];
        
        return (
          <div className={cn("space-y-8", isAnimating && "animate-fade-out")}>
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">How large is the space?</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {sizeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    updateData('size', option.value);
                    handleNext();
                  }}
                  className="p-6 border-2 border-white/30 bg-white/95 hover:bg-white hover:border-gold rounded-lg transition-all hover:shadow-xl group backdrop-blur-sm"
                >
                  <div className="font-semibold text-lg text-navy-deep group-hover:text-gold transition-colors text-center">
                    {option.label}
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 4:
        const frequencyOptions = bookingData.serviceType === 'move'
          ? [
              { value: 'move-in', label: 'Move In Cleaning', desc: 'Before moving in' },
              { value: 'move-out', label: 'Move Out Cleaning', desc: 'After moving out' },
              { value: 'both', label: 'Both Move In & Out', desc: 'Complete move service' },
            ]
          : bookingData.serviceType === 'deep'
          ? [
              { value: 'one-time', label: 'One Time Deep Clean', desc: 'Thorough single service' },
              { value: 'seasonal', label: 'Seasonal', desc: 'Quarterly deep cleaning' },
            ]
          : [
              { value: 'one-time', label: 'One Time', desc: 'Single cleaning service' },
              { value: 'weekly', label: 'Weekly', desc: 'Every week' },
              { value: 'bi-weekly', label: 'Bi-Weekly', desc: 'Every 2 weeks' },
              { value: 'monthly', label: 'Monthly', desc: 'Once a month' },
            ];
        
        return (
          <div className={cn("space-y-8", isAnimating && "animate-fade-out")}>
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                {bookingData.serviceType === 'move' ? 'Which service do you need?' : 'How often do you need cleaning?'}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {frequencyOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    updateData('frequency', option.value);
                    handleNext();
                  }}
                  className="p-6 border-2 border-white/30 bg-white/95 hover:bg-white hover:border-gold rounded-lg transition-all hover:shadow-xl text-left group backdrop-blur-sm"
                >
                  <div className="font-semibold text-lg text-navy-deep group-hover:text-gold transition-colors">
                    {option.label}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{option.desc}</div>
                </button>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className={cn("space-y-8", isAnimating && "animate-fade-out")}>
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">When would you like the service?</h2>
              <p className="text-white/90 drop-shadow">Select your preferred date</p>
            </div>
            <div className="flex justify-center">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-[320px] justify-start text-left font-normal text-lg h-14",
                      !bookingData.date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-5 w-5" />
                    {bookingData.date ? format(bookingData.date, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="center">
                  <Calendar
                    mode="single"
                    selected={bookingData.date}
                    onSelect={(date) => {
                      if (date) {
                        updateData('date', date);
                      }
                    }}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            {bookingData.date && (
              <div className="flex justify-center">
                <Button onClick={handleNext} size="lg" className="px-12">
                  Next
                </Button>
              </div>
            )}
          </div>
        );

      case 6:
        return (
          <div className={cn("space-y-8", isAnimating && "animate-fade-out")}>
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">Where is the location?</h2>
              <p className="text-white/90 drop-shadow">Enter your ZIP code</p>
            </div>
            <div className="max-w-md mx-auto space-y-6 bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-xl">
              <div>
                <Label htmlFor="zipcode" className="text-lg text-navy-deep">ZIP Code</Label>
                <Input
                  id="zipcode"
                  type="text"
                  placeholder="20120"
                  value={bookingData.zipCode}
                  onChange={(e) => updateData('zipCode', e.target.value)}
                  className="mt-2 h-14 text-lg"
                  maxLength={5}
                />
              </div>
              {bookingData.zipCode.length === 5 && (
                <Button onClick={handleNext} size="lg" className="w-full">
                  Next
                </Button>
              )}
            </div>
          </div>
        );

      case 7:
        return (
          <div className={cn("space-y-8", isAnimating && "animate-fade-out")}>
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">Contact Information</h2>
              <p className="text-white/90 drop-shadow">How can we reach you?</p>
            </div>
            <div className="max-w-md mx-auto space-y-6 bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-xl">
              <div>
                <Label htmlFor="name" className="text-lg text-navy-deep">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={bookingData.name}
                  onChange={(e) => updateData('name', e.target.value)}
                  className="mt-2 h-14 text-lg"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-lg text-navy-deep">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={bookingData.email}
                  onChange={(e) => updateData('email', e.target.value)}
                  className="mt-2 h-14 text-lg"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-lg text-navy-deep">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  value={bookingData.phone}
                  onChange={(e) => updateData('phone', e.target.value)}
                  className="mt-2 h-14 text-lg"
                />
              </div>
              {bookingData.name && bookingData.email && bookingData.phone && (
                <Button onClick={handleNext} size="lg" className="w-full">
                  Next
                </Button>
              )}
            </div>
          </div>
        );

      case 8:
        const pricing = calculatePricing();
        const serviceTypeLabels: { [key: string]: string } = {
          residential: 'Residential Cleaning',
          commercial: 'Commercial Cleaning',
          deep: 'Deep Cleaning',
          move: 'Move In/Out Cleaning',
        };
        
        return (
          <div className={cn("space-y-8", isAnimating && "animate-fade-out")}>
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">Review & Checkout</h2>
              <p className="text-white/90 drop-shadow">Confirm your booking details</p>
            </div>
            <div className="max-w-3xl mx-auto bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-xl">
              {/* Booking Summary */}
              <div className="space-y-6 mb-8">
                <h3 className="text-2xl font-bold text-navy-deep border-b pb-3">Booking Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Service Type</p>
                    <p className="text-lg font-semibold text-navy-deep">{serviceTypeLabels[bookingData.serviceType]}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Property Type</p>
                    <p className="text-lg font-semibold text-navy-deep capitalize">{bookingData.propertyType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Size</p>
                    <p className="text-lg font-semibold text-navy-deep uppercase">{bookingData.size}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Frequency</p>
                    <p className="text-lg font-semibold text-navy-deep capitalize">{bookingData.frequency}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Date</p>
                    <p className="text-lg font-semibold text-navy-deep">
                      {bookingData.date ? format(bookingData.date, "MMMM d, yyyy") : 'Not selected'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="text-lg font-semibold text-navy-deep">{bookingData.zipCode}</p>
                  </div>
                </div>
                
                {/* Contact Info */}
                <div className="pt-4 border-t">
                  <h4 className="text-lg font-bold text-navy-deep mb-3">Contact Information</h4>
                  <div className="space-y-2">
                    <p className="text-gray-700"><span className="font-semibold">Name:</span> {bookingData.name}</p>
                    <p className="text-gray-700"><span className="font-semibold">Email:</span> {bookingData.email}</p>
                    <p className="text-gray-700"><span className="font-semibold">Phone:</span> {bookingData.phone}</p>
                  </div>
                </div>

                {/* Notes */}
                {bookingData.notes && (
                  <div className="pt-4 border-t">
                    <h4 className="text-lg font-bold text-navy-deep mb-2">Special Instructions</h4>
                    <p className="text-gray-700">{bookingData.notes}</p>
                  </div>
                )}

                {/* Itemized Bill */}
                <div className="pt-6 border-t">
                  <h3 className="text-2xl font-bold text-navy-deep mb-4">Itemized Bill</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2">
                      <div>
                        <p className="font-semibold text-navy-deep">{serviceTypeLabels[bookingData.serviceType]}</p>
                        <p className="text-sm text-gray-600">Base service rate</p>
                      </div>
                      <span className="text-lg font-semibold text-navy-deep">${pricing.basePrice}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-t">
                      <div>
                        <p className="font-semibold text-navy-deep">Property Size Adjustment</p>
                        <p className="text-sm text-gray-600">{bookingData.size.toUpperCase()} - Size multiplier applied</p>
                      </div>
                      <span className="text-lg font-semibold text-navy-deep">+${pricing.total - pricing.basePrice}</span>
                    </div>
                    <div className="flex justify-between items-center py-4 border-t-2 border-gold/30 bg-gold/10 -mx-4 px-4 rounded-lg">
                      <span className="text-2xl font-bold text-navy-deep">Total Amount</span>
                      <span className="text-3xl font-bold text-gold">${pricing.total}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-4 text-center">*Payment will be collected at the time of service</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8">
                <Button onClick={handleBack} variant="outline" size="lg" className="flex-1">
                  Go Back
                </Button>
                <Button 
                  onClick={() => {
                    updateData('pricing', pricing);
                    handleNext();
                  }} 
                  size="lg" 
                  className="flex-1"
                >
                  Continue to Payment
                </Button>
              </div>
            </div>
          </div>
        );

      case 9:
        const paymentPricing = bookingData.pricing || calculatePricing();
        return (
          <div className={cn("space-y-8", isAnimating && "animate-fade-out")}>
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">Payment Information</h2>
              <p className="text-white/90 drop-shadow">Complete your booking</p>
            </div>
            <div className="max-w-2xl mx-auto bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-xl">
              {/* Order Summary */}
              <div className="mb-6 pb-6 border-b">
                <h3 className="text-xl font-bold text-navy-deep mb-4">Order Summary</h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">Service Total</span>
                  <span className="text-lg font-semibold text-navy-deep">${paymentPricing.total}</span>
                </div>
                <div className="flex justify-between items-center text-xl font-bold mt-4 pt-4 border-t">
                  <span className="text-navy-deep">Amount Due Today</span>
                  <span className="text-gold">${paymentPricing.total}</span>
                </div>
              </div>

              {/* Payment Method Selection */}
              <div className="space-y-6">
                <div>
                  <Label className="text-lg text-navy-deep mb-4 block">Payment Method</Label>
                  <div className="grid grid-cols-1 gap-3">
                    <button className="p-4 border-2 border-gold bg-gold/10 rounded-lg text-left hover:bg-gold/20 transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-navy-deep">Credit/Debit Card</p>
                          <p className="text-sm text-gray-600">Pay securely with your card</p>
                        </div>
                        <div className="w-4 h-4 rounded-full border-2 border-gold bg-gold"></div>
                      </div>
                    </button>
                    <button className="p-4 border-2 border-gray-300 rounded-lg text-left hover:bg-gray-50 transition-colors opacity-60">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-navy-deep">Pay at Service</p>
                          <p className="text-sm text-gray-600">Pay when we arrive (Coming Soon)</p>
                        </div>
                        <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Card Details Form */}
                <div className="space-y-4 pt-4">
                  <div>
                    <Label htmlFor="cardNumber" className="text-navy-deep">Card Number</Label>
                    <Input
                      id="cardNumber"
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="mt-2 h-12"
                      maxLength={19}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry" className="text-navy-deep">Expiry Date</Label>
                      <Input
                        id="expiry"
                        type="text"
                        placeholder="MM/YY"
                        className="mt-2 h-12"
                        maxLength={5}
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv" className="text-navy-deep">CVV</Label>
                      <Input
                        id="cvv"
                        type="text"
                        placeholder="123"
                        className="mt-2 h-12"
                        maxLength={4}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="cardName" className="text-navy-deep">Name on Card</Label>
                    <Input
                      id="cardName"
                      type="text"
                      placeholder="John Doe"
                      className="mt-2 h-12"
                    />
                  </div>
                </div>

                <p className="text-xs text-gray-600 text-center mt-4">
                  Your payment information is encrypted and secure. We never store your card details.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8">
                <Button onClick={handleBack} variant="outline" size="lg" className="flex-1">
                  Go Back
                </Button>
                <Button onClick={handleSubmit} size="lg" className="flex-1">
                  Complete Payment
                </Button>
              </div>
            </div>
          </div>
        );

      case 10:
        return (
          <div className="space-y-8 text-center animate-fade-in">
            <div className="flex justify-center">
              <CheckCircle2 className="h-24 w-24 text-gold drop-shadow-lg" />
            </div>
            <div className="space-y-4 bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-xl max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-navy-deep">Booking Confirmed!</h2>
              <p className="text-xl text-gray-700">
                We've received your booking request. Our team will contact you within 24 hours to confirm your appointment and finalize payment details.
              </p>
              <div className="pt-6 space-y-3 text-left">
                <p className="text-gray-700"><span className="font-semibold">Confirmation sent to:</span> {bookingData.email}</p>
                <p className="text-gray-700"><span className="font-semibold">Booking ID:</span> #{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
              </div>
              <Button onClick={() => window.location.href = '/'} size="lg" className="mt-8">
                Return to Home
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 pt-32">
      {/* Progress Bar */}
      {step <= totalSteps && (
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-white drop-shadow">Step {step} of {totalSteps}</span>
            <span className="text-sm text-white drop-shadow">{Math.round((step / totalSteps) * 100)}%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gold transition-all duration-500 ease-out"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Back Button */}
      {step > 1 && step <= totalSteps && (
        <div className="max-w-4xl mx-auto mb-8">
          <Button
            variant="ghost"
            onClick={handleBack}
            className="text-white hover:text-gold bg-white/20 hover:bg-white/30 backdrop-blur-sm"
          >
            <ChevronLeft className="mr-2 h-5 w-5" />
            Back
          </Button>
        </div>
      )}

      {/* Step Content */}
      <div className="max-w-4xl mx-auto">
        {renderStep()}
      </div>
    </div>
  );
};

export default BookingWizard;
