
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ContactForm from './ContactForm';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('/lovable-uploads/ebf40fbe-d160-45c8-b2b7-1bfaba9366bc.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-navy/50"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Hero content */}
          <div className="lg:col-span-3 text-white animate-fade-in">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Luxury Living Redefined at <span className="text-gold">Fortune Hestia Villa</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
              Experience architectural brilliance in Sarjapur Road's most prestigious address. 
              Premium villas starting from ₹5.3 Cr with world-class amenities.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Button className="bg-gold hover:bg-gold-dark text-white rounded-md px-6 py-6 text-lg flex items-center gap-2">
                Schedule a Visit
                <ArrowRight size={18} />
              </Button>
              <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-md px-6 py-6 text-lg">
                Download Brochure
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-x-12 gap-y-6 text-gray-300">
              <div>
                <p className="text-3xl md:text-4xl font-serif font-semibold text-gold">10+</p>
                <p className="text-sm uppercase tracking-wider mt-1">Luxury Amenities</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-serif font-semibold text-gold">4 & 5 BHK</p>
                <p className="text-sm uppercase tracking-wider mt-1">Premium Villas</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-serif font-semibold text-gold">15 Min</p>
                <p className="text-sm uppercase tracking-wider mt-1">To Tech Parks</p>
              </div>
            </div>
          </div>
          
          {/* Contact form card */}
          <div className="lg:col-span-2 animate-fade-in-right">
            <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
              <h3 className="font-serif text-2xl font-semibold text-navy-dark mb-6">Schedule Your Private Tour</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
