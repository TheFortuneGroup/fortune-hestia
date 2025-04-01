
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown, Download, X } from 'lucide-react';
import ContactForm from './ContactForm';
import { useState } from 'react';

const HeroSection = () => {
  const [showBrochureForm, setShowBrochureForm] = useState(false);

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
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-800/70"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Hero content */}
          <div className="lg:col-span-3 text-white animate-fade-in text-center lg:text-left">
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Luxury Living Redefined at <span className="text-purple-300">Fortune Hestia Villa</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 mx-auto lg:mx-0 max-w-2xl">
              Experience architectural brilliance in Sarjapur Road's most prestigious address. 
              Premium villas starting from ₹5.3 Cr with world-class amenities.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-4 mb-8 md:mb-12">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-md px-6 py-6 text-lg flex items-center justify-center gap-2 shadow-lg shadow-purple-700/20 w-full md:w-auto">
                Schedule a Visit
                <ArrowRight size={18} />
              </Button>
              <Button 
                variant="outline" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-md px-6 py-6 text-lg w-full md:w-auto"
                onClick={() => setShowBrochureForm(true)}
              >
                Download Brochure
                <Download size={18} className="ml-2" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-300 justify-center lg:justify-start">
              <div className="bg-purple-600/20 backdrop-blur-sm p-4 rounded-lg border border-purple-500/20 animate-pulse-subtle">
                <p className="text-2xl md:text-3xl font-serif font-semibold text-purple-300">10+</p>
                <p className="text-sm uppercase tracking-wider mt-1">Luxury Amenities</p>
              </div>
              <div className="bg-purple-600/20 backdrop-blur-sm p-4 rounded-lg border border-purple-500/20 animate-pulse-subtle">
                <p className="text-2xl md:text-3xl font-serif font-semibold text-purple-300">4 & 5 BHK</p>
                <p className="text-sm uppercase tracking-wider mt-1">Premium Villas</p>
              </div>
              <div className="bg-purple-600/20 backdrop-blur-sm p-4 rounded-lg border border-purple-500/20 animate-pulse-subtle">
                <p className="text-2xl md:text-3xl font-serif font-semibold text-purple-300">15 Min</p>
                <p className="text-sm uppercase tracking-wider mt-1">To Tech Parks</p>
              </div>
            </div>
          </div>
          
          {/* Contact form card */}
          <div className="lg:col-span-2 animate-fade-in-right mx-auto w-full max-w-md">
            <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 border-t-4 border-purple-600">
              <h3 className="font-serif text-2xl font-semibold text-purple-900 mb-6 text-center">Schedule Your Private Tour</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white cursor-pointer" onClick={scrollToNextSection}>
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-10 h-10 bg-purple-600/50 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce">
            <ChevronDown size={24} />
          </div>
        </div>
      </div>

      {/* Brochure Form Modal */}
      {showBrochureForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md relative overflow-hidden animate-scale-in">
            <div className="bg-purple-600 py-4 px-6">
              <h3 className="text-white font-serif text-2xl font-bold text-center">Download Exclusive Brochure</h3>
            </div>
            
            <button
              className="absolute right-4 top-4 text-white hover:text-gray-200 transition-colors"
              onClick={() => setShowBrochureForm(false)}
            >
              <X size={24} />
            </button>
            
            <div className="p-6">
              <p className="text-gray-700 mb-6 text-center">
                Please fill in your details to receive our exclusive brochure with floor plans and pricing details.
              </p>
              
              <ContactForm formType="brochure" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
