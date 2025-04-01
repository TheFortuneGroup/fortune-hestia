
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
    <section id="features" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="headline mb-6">Exceptional Features & Amenities</h2>
          <p className="body-text">
            Fortune Hestia Villa offers an unparalleled living experience with premium features and world-class amenities that cater to your luxury lifestyle.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="glass-card hover:shadow-xl transition-shadow h-full flex flex-col">
              <div className="amenity-icon w-12 h-12 flex items-center justify-center">
                <span className="text-xl font-bold">{index + 1}</span>
              </div>
              <h3 className="feature-heading mb-3">{feature.title}</h3>
              <p className="text-navy/70 text-sm flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Specifications section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="subheadline mb-6">Premium Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {specifications.map((spec, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-3 mt-1 text-gold">
                    <Check size={18} />
                  </div>
                  <p className="text-navy/80">{spec}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/lovable-uploads/7218ca4e-0a9f-4bfd-be9c-b21cce641145.png" 
              alt="Villa Interior" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent rounded-lg"></div>
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
