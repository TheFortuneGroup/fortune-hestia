
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-offwhite">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image column */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src="/lovable-uploads/47ff2bfb-aac2-4c57-8739-3348f2edcc90.png" 
                alt="Fortune Hestia Villa" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 z-10 bg-gold text-white p-4 md:p-6 rounded shadow-lg">
              <div className="text-center">
                <span className="block text-3xl md:text-4xl font-serif font-bold">₹5.3 Cr</span>
                <span className="text-sm md:text-base">Starting Price</span>
              </div>
            </div>
          </div>
          
          {/* Content column */}
          <div>
            <h2 className="section-title">About Fortune Hestia Villa</h2>
            
            <p className="body-text mb-6">
              Fortune Hestia Villa presents a collection of architectural masterpieces that redefine luxury living in Sarjapur Road. 
              These exquisite 4 & 5 BHK villas are meticulously designed to offer unparalleled comfort and elegance.
            </p>
            
            <p className="body-text mb-8">
              Developed by Fortune Builders, a name synonymous with quality and innovation, each villa stands as a testament to 
              superior craftsmanship and attention to detail. The project offers a perfect blend of privacy and community living, 
              with spacious interiors complemented by lush green surroundings.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="border-l-4 border-gold pl-4">
                <span className="block text-xl md:text-2xl font-serif text-navy-dark font-medium">4 & 5 BHK</span>
                <span className="text-navy/70">Luxury Villas</span>
              </div>
              <div className="border-l-4 border-gold pl-4">
                <span className="block text-xl md:text-2xl font-serif text-navy-dark font-medium">3500-4200</span>
                <span className="text-navy/70">Sq. Ft. Area</span>
              </div>
              <div className="border-l-4 border-gold pl-4">
                <span className="block text-xl md:text-2xl font-serif text-navy-dark font-medium">RERA</span>
                <span className="text-navy/70">Approved</span>
              </div>
              <div className="border-l-4 border-gold pl-4">
                <span className="block text-xl md:text-2xl font-serif text-navy-dark font-medium">Premium</span>
                <span className="text-navy/70">Specifications</span>
              </div>
            </div>
            
            <Button className="bg-gold hover:bg-gold-dark text-white rounded">
              Discover More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
