
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, X } from 'lucide-react';
import ContactForm from './ContactForm';

const CtaSection = () => {
  const [showBrochureForm, setShowBrochureForm] = useState(false);

  return (
    <section className="relative py-20">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('/lovable-uploads/76c37ef2-49ee-49f7-a6b5-07a19f9ba26b.png')`,
        }}
      >
        <div className="absolute inset-0 bg-emerald-950/80"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Elevate Your Lifestyle Today
          </h2>
          
          <p className="text-xl text-gray-300 mb-8">
            Limited villas available. Schedule a private tour and experience luxury living at Fortune Hestia Villa.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded flex items-center gap-2">
              Book a Site Visit
              <ArrowRight size={18} />
            </Button>
            
            <Button 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded flex items-center gap-2"
              onClick={() => setShowBrochureForm(true)}
            >
              Download Brochure
              <Download size={18} />
            </Button>
          </div>
          
          <p className="mt-8 text-gray-300">
            Contact us at <a href="tel:+919876543210" className="text-emerald-300 hover:underline">+91 98765 43210</a> or 
            <a href="mailto:dm@fortunehestia.in" className="text-emerald-300 hover:underline"> dm@fortunehestia.in</a>
          </p>
        </div>
      </div>

      {/* Brochure Download Modal */}
      {showBrochureForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-md relative overflow-hidden">
            <button
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
              onClick={() => setShowBrochureForm(false)}
            >
              <X size={24} />
            </button>
            
            <div className="p-6">
              <div className="border-b border-gray-200 pb-4 mb-6">
                <h3 className="font-serif text-2xl font-semibold text-emerald-700">Download Brochure</h3>
                <p className="text-gray-600 mt-2">
                  Please fill in your details to receive our exclusive brochure
                </p>
              </div>
              
              <ContactForm formType="brochure" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CtaSection;
