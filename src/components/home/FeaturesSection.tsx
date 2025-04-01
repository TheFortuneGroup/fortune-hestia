
import { Check } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    { title: "Smart Home Integration", description: "Complete home automation with smart controls for lighting, security, and climate." },
    { title: "Private Pool", description: "Personal temperature-controlled pool with elegant deck area for entertaining." },
    { title: "Italian Marble Flooring", description: "Imported Italian marble throughout the main living areas for timeless elegance." },
    { title: "Designer Kitchen", description: "Gourmet kitchen with premium appliances and custom cabinets." },
    { title: "Home Theater", description: "Dedicated home theater room with acoustic paneling and projection system." },
    { title: "Floor-to-Ceiling Windows", description: "Abundant natural light with premium insulated glass for energy efficiency." },
    { title: "Landscaped Gardens", description: "Professionally designed landscaping with mature plants and irrigation system." },
    { title: "Multi-Car Garage", description: "Spacious garage with premium finishes and EV charging capabilities." },
  ];

  const specifications = [
    "Earthquake-resistant RCC framed structure",
    "Double-glazed windows for sound insulation",
    "Premium modular kitchen with built-in appliances",
    "High-end bathroom fixtures from Kohler/Grohe",
    "CCTV surveillance & 24×7 security",
    "100% power backup",
    "Rainwater harvesting system",
    "Water softening plant",
    "Solar water heating",
    "German technology elevators",
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-offwhite">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="headline mb-4 md:mb-6 text-gold-dark">Exceptional Features & Amenities</h2>
          <p className="body-text text-center mx-auto max-w-2xl">
            Fortune Hestia Villa offers an unparalleled living experience with premium features and world-class amenities that cater to your luxury lifestyle.
          </p>
        </div>

        {/* Features grid - 2 cards per row on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 mb-16 md:mb-20">
          {features.map((feature, index) => (
            <div key={index} className="glass-card hover:shadow-xl transition-shadow h-full flex flex-col rounded-lg overflow-hidden border border-gold/20">
              <div className="bg-gold/10 p-4">
                <div className="amenity-icon w-12 h-12 flex items-center justify-center bg-gold/20 mx-auto">
                  <span className="text-xl font-bold text-gold-dark">{index + 1}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="feature-heading mb-2 text-center text-gold-dark">{feature.title}</h3>
                <p className="text-navy/70 text-sm flex-grow text-center">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Specifications section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="subheadline mb-6 text-gold-dark text-center lg:text-left">Premium Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {specifications.map((spec, index) => (
                <div key={index} className="flex items-start bg-gold/5 p-3 rounded-md">
                  <div className="mr-3 mt-1 text-gold">
                    <Check size={18} />
                  </div>
                  <p className="text-navy/80">{spec}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/lovable-uploads/7218ca4e-0a9f-4bfd-be9c-b21cce641145.png" 
              alt="Villa Interior" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="font-serif text-xl md:text-2xl font-semibold mb-2">
                Architectural Excellence
              </p>
              <p className="text-sm text-white/90">
                Every detail thoughtfully crafted for luxury living
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
