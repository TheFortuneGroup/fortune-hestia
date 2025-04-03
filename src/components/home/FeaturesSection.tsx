
import { Check } from 'lucide-react';
import { 
  Dumbbell, 
  TennisBall, 
  Users, 
  Building2, 
  PlayCircle, 
  Swim, 
  Timer, 
  Flower2, 
  Baby 
} from 'lucide-react';

const FeaturesSection = () => {
  const amenities = [
    { 
      title: "Gym", 
      description: "State-of-the-art fitness center with modern equipment",
      icon: Dumbbell
    },
    { 
      title: "Tennis Court", 
      description: "Professional tennis court with night lighting",
      icon: TennisBall
    },
    { 
      title: "Amphitheater", 
      description: "Open-air amphitheater for community events",
      icon: Users
    },
    { 
      title: "Club House", 
      description: "Luxurious club house with indoor games and lounge",
      icon: Building2
    },
    { 
      title: "Play Park", 
      description: "Children's play area with safe modern equipment",
      icon: PlayCircle
    },
    { 
      title: "Swimming Pool", 
      description: "Temperature-controlled swimming pool with deck area",
      icon: Swim
    },
    { 
      title: "Jogging Track", 
      description: "Dedicated jogging track for fitness enthusiasts",
      icon: Timer
    },
    { 
      title: "Garden Area", 
      description: "Beautifully landscaped gardens for relaxation",
      icon: Flower2
    },
    { 
      title: "Kids Play Area", 
      description: "Dedicated play zone for children with safe equipment",
      icon: Baby
    }
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
    <section id="features" className="section-padding py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-800 mb-6">Exceptional Features & Amenities</h2>
          <p className="text-gray-700 text-lg">
            Fortune Hestia Villa offers an unparalleled living experience with premium features and world-class amenities that cater to your luxury lifestyle.
          </p>
        </div>

        {/* Amenities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {amenities.map((amenity, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
              <div className="p-6 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
                  <amenity.icon size={32} className="text-emerald-600" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-emerald-700 text-center mb-2">{amenity.title}</h3>
                <p className="text-gray-600 text-sm text-center">{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Specifications section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-serif font-semibold text-emerald-800 mb-6">Premium Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {specifications.map((spec, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-3 mt-1 text-emerald-600">
                    <Check size={18} />
                  </div>
                  <p className="text-gray-700">{spec}</p>
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
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent rounded-lg"></div>
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
