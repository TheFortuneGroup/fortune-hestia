
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import ContactForm from './ContactForm';

const HeroSection = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('/lovable-uploads/ebf40fbe-d160-45c8-b2b7-1bfaba9366bc.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 to-emerald-900/50"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Hero content */}
          <div className="lg:col-span-3 text-white animate-fade-in text-center lg:text-left">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Luxury Living Redefined at <span className="text-emerald-400">Fortune Hestia Villa</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 mx-auto lg:mx-0 max-w-2xl">
              Experience architectural brilliance in Sarjapur Road's most prestigious address. 
              Premium villas starting from ₹5.3 Cr with world-class amenities.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-md px-6 py-6 text-lg flex items-center gap-2 shadow-lg shadow-emerald-900/20">
                Schedule a Visit
                <ArrowRight size={18} />
              </Button>
              <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-md px-6 py-6 text-lg">
                Download Brochure
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300 justify-center">
              <div className="bg-emerald-900/30 backdrop-blur-sm p-4 rounded-lg border border-emerald-600/20 animate-pulse-subtle">
                <p className="text-3xl md:text-4xl font-serif font-semibold text-emerald-400">10+</p>
                <p className="text-sm uppercase tracking-wider mt-1">Luxury Amenities</p>
              </div>
              <div className="bg-emerald-900/30 backdrop-blur-sm p-4 rounded-lg border border-emerald-600/20 animate-pulse-subtle">
                <p className="text-3xl md:text-4xl font-serif font-semibold text-emerald-400">4 & 5 BHK</p>
                <p className="text-sm uppercase tracking-wider mt-1">Premium Villas</p>
              </div>
              <div className="bg-emerald-900/30 backdrop-blur-sm p-4 rounded-lg border border-emerald-600/20 animate-pulse-subtle">
                <p className="text-3xl md:text-4xl font-serif font-semibold text-emerald-400">15 Min</p>
                <p className="text-sm uppercase tracking-wider mt-1">To Tech Parks</p>
              </div>
            </div>
          </div>
          
          {/* Contact form card */}
          <div className="lg:col-span-2 animate-fade-in-right">
            <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 border-t-4 border-emerald-500 mb-12">
              <h3 className="font-serif text-2xl font-semibold text-emerald-700 mb-6 text-center">Schedule Your Private Tour</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white cursor-pointer" onClick={scrollToNextSection}>
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-10 h-10 bg-emerald-600/50 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce">
            <ChevronDown size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
