
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="relative py-20">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('/lovable-uploads/76c37ef2-49ee-49f7-a6b5-07a19f9ba26b.png')`,
        }}
      >
        <div className="absolute inset-0 bg-navy/80"></div>
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
            <Button className="bg-gold hover:bg-gold-dark text-white px-8 py-6 text-lg rounded flex items-center gap-2">
              Book a Site Visit
              <ArrowRight size={18} />
            </Button>
            
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded">
              Download Brochure
            </Button>
          </div>
          
          <p className="mt-8 text-gray-300">
            Contact us at <a href="tel:+919876543210" className="text-gold hover:underline">+91 98765 43210</a> or 
            <a href="mailto:info@fortunehestia.com" className="text-gold hover:underline"> info@fortunehestia.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
