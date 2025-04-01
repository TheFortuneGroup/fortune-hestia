
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-offwhite">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image column */}
          <div className="relative mx-auto text-center md:text-left max-w-md md:max-w-full">
            <div className="relative overflow-hidden rounded-lg shadow-xl border border-gold/10">
              <img 
                src="/lovable-uploads/47ff2bfb-aac2-4c57-8739-3348f2edcc90.png" 
                alt="Fortune Hestia Villa" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg";
                }}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 md:-bottom-6 md:-right-6 z-10 bg-gold text-navy-dark p-4 md:p-6 rounded shadow-lg">
              <div className="text-center">
                <span className="block text-2xl md:text-4xl font-serif font-bold">₹5.3 Cr</span>
                <span className="text-sm md:text-base">Starting Price</span>
              </div>
            </div>
          </div>
          
          {/* Content column */}
          <div className="text-center md:text-left">
            <h2 className="section-title mx-auto md:mx-0">About Fortune Hestia Villa</h2>
            
            <p className="body-text mb-6 mx-auto md:mx-0 max-w-xl">
              Fortune Hestia Villa presents a collection of architectural masterpieces that redefine luxury living in Sarjapur Road. 
              These exquisite 4 & 5 BHK villas are meticulously designed to offer unparalleled comfort and elegance.
            </p>
            
            <p className="body-text mb-8 mx-auto md:mx-0 max-w-xl">
              Developed by Fortune Builders, a name synonymous with quality and innovation, each villa stands as a testament to 
              superior craftsmanship and attention to detail. The project offers a perfect blend of privacy and community living, 
              with spacious interiors complemented by lush green surroundings.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="border-l-4 border-gold pl-4 text-left">
                <span className="block text-xl md:text-2xl font-serif text-navy-dark font-medium">4 & 5 BHK</span>
                <span className="text-navy/70">Luxury Villas</span>
              </div>
              <div className="border-l-4 border-gold pl-4 text-left">
                <span className="block text-xl md:text-2xl font-serif text-navy-dark font-medium">3500-4200</span>
                <span className="text-navy/70">Sq. Ft. Area</span>
              </div>
              <div className="border-l-4 border-gold pl-4 text-left">
                <span className="block text-xl md:text-2xl font-serif text-navy-dark font-medium">RERA</span>
                <span className="text-navy/70">Approved</span>
              </div>
              <div className="border-l-4 border-gold pl-4 text-left">
                <span className="block text-xl md:text-2xl font-serif text-navy-dark font-medium">Premium</span>
                <span className="text-navy/70">Specifications</span>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <Button className="bg-gold hover:bg-gold-light text-navy-dark rounded shadow-md">
                Discover More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
