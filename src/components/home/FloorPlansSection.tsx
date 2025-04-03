
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowUp, 
  ArrowDown, 
  ArrowRight, 
  ArrowLeft,
  SquareIcon,
  BedDoubleIcon,
  BathIcon,
  SofaIcon
} from 'lucide-react';

const VillaType = ({ 
  type, 
  area, 
  bedrooms, 
  bathrooms, 
  price, 
  features, 
  direction,
  isActive = false
}: { 
  type: string; 
  area: string; 
  bedrooms: number; 
  bathrooms: number; 
  price: string; 
  features: string[];
  direction: "North" | "South" | "East" | "West";
  isActive?: boolean;
}) => {
  const getDirectionIcon = () => {
    switch (direction) {
      case "North": return <ArrowUp className="w-5 h-5 text-emerald-500" />;
      case "South": return <ArrowDown className="w-5 h-5 text-emerald-500" />;
      case "East": return <ArrowRight className="w-5 h-5 text-emerald-500" />;
      case "West": return <ArrowLeft className="w-5 h-5 text-emerald-500" />;
    }
  };

  return (
    <div className={`border rounded-lg p-6 transition-all ${isActive ? 'border-emerald-500 shadow-lg' : 'border-gray-200'}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-serif font-semibold text-emerald-800">{type}</h3>
        <div className="flex items-center gap-1">
          {getDirectionIcon()}
          <span className="text-emerald-700 text-sm">{direction} Facing</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="flex flex-col items-center p-3 bg-emerald-50 rounded">
          <SquareIcon className="w-5 h-5 text-emerald-500 mb-1" />
          <span className="text-sm text-gray-600">Area</span>
          <span className="font-medium">{area}</span>
        </div>
        <div className="flex flex-col items-center p-3 bg-emerald-50 rounded">
          <BedDoubleIcon className="w-5 h-5 text-emerald-500 mb-1" />
          <span className="text-sm text-gray-600">Beds</span>
          <span className="font-medium">{bedrooms}</span>
        </div>
        <div className="flex flex-col items-center p-3 bg-emerald-50 rounded">
          <BathIcon className="w-5 h-5 text-emerald-500 mb-1" />
          <span className="text-sm text-gray-600">Baths</span>
          <span className="font-medium">{bathrooms}</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="text-emerald-800 font-serif font-medium">Key Features:</div>
        <ul className="mt-2 text-gray-600 text-sm">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center mb-1">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div>
          <span className="text-sm text-gray-600">Starting at</span>
          <div className="text-lg font-serif font-semibold text-emerald-700">{price}</div>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">View Details</Button>
      </div>
    </div>
  );
};

const FloorPlan = ({ image, title }: { image: string; title: string }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
      <div className="aspect-[4/3] bg-gray-100 relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-4 bg-white">
        <h3 className="font-serif text-lg font-medium text-emerald-800">{title}</h3>
        <div className="flex items-center mt-2">
          <SofaIcon className="w-4 h-4 text-emerald-500 mr-1" />
          <span className="text-sm text-gray-600">Click to enlarge</span>
        </div>
      </div>
    </div>
  );
};

const FloorPlansSection = () => {
  const [selectedTab, setSelectedTab] = useState("4bhk");
  
  const villaTypes = {
    "4bhk": [
      {
        type: "Emerald Villa - 4BHK",
        area: "3500 sq ft",
        bedrooms: 4,
        bathrooms: 4.5,
        price: "₹5.3 Cr",
        features: ["Private Garden", "Double Height Living", "Italian Marble Flooring", "Smart Home Features"],
        direction: "North" as const
      },
      {
        type: "Sapphire Villa - 4BHK",
        area: "3600 sq ft",
        bedrooms: 4,
        bathrooms: 4.5,
        price: "₹5.5 Cr",
        features: ["Terrace Garden", "Home Theater", "Modular Kitchen", "Walk-in Wardrobe"],
        direction: "South" as const
      },
      {
        type: "Ruby Villa - 4BHK",
        area: "3700 sq ft",
        bedrooms: 4,
        bathrooms: 5,
        price: "₹5.8 Cr",
        features: ["Corner Plot", "Swimming Pool", "Home Office", "Premium Fittings"],
        direction: "East" as const
      },
      {
        type: "Opal Villa - 4BHK",
        area: "3800 sq ft",
        bedrooms: 4,
        bathrooms: 5,
        price: "₹6.2 Cr",
        features: ["Private Pool", "Garden Patio", "Guest Suite", "German Kitchen"],
        direction: "West" as const
      }
    ],
    "5bhk": [
      {
        type: "Diamond Villa - 5BHK",
        area: "4000 sq ft",
        bedrooms: 5,
        bathrooms: 5.5,
        price: "₹6.5 Cr",
        features: ["Rooftop Terrace", "Home Gym", "Wine Cellar", "Imported Fittings"],
        direction: "North" as const
      },
      {
        type: "Platinum Villa - 5BHK",
        area: "4100 sq ft",
        bedrooms: 5,
        bathrooms: 5.5,
        price: "₹6.8 Cr",
        features: ["Corner Plot", "Jacuzzi", "Entertainment Zone", "Designer Landscaping"],
        direction: "South" as const
      },
      {
        type: "Gold Villa - 5BHK",
        area: "4150 sq ft",
        bedrooms: 5,
        bathrooms: 6,
        price: "₹7.2 Cr",
        features: ["Panoramic View", "Spa Room", "Walk-in Closets", "Imported Marble"],
        direction: "East" as const
      },
      {
        type: "Titanium Villa - 5BHK",
        area: "4200 sq ft",
        bedrooms: 5,
        bathrooms: 6,
        price: "₹7.8 Cr",
        features: ["Premium Corner", "Infinity Pool", "Bar Area", "Smart Home Automation"],
        direction: "West" as const
      }
    ]
  };

  const floorPlans = {
    "4bhk": [
      { 
        image: "/lovable-uploads/47ff2bfb-aac2-4c57-8739-3348f2edcc90.png", 
        title: "4BHK Ground Floor" 
      },
      { 
        image: "/lovable-uploads/ebf40fbe-d160-45c8-b2b7-1bfaba9366bc.png", 
        title: "4BHK First Floor" 
      },
      { 
        image: "/lovable-uploads/76c37ef2-49ee-49f7-a6b5-07a19f9ba26b.png", 
        title: "4BHK Master Plan" 
      }
    ],
    "5bhk": [
      { 
        image: "/lovable-uploads/76c37ef2-49ee-49f7-a6b5-07a19f9ba26b.png", 
        title: "5BHK Ground Floor" 
      },
      { 
        image: "/lovable-uploads/47ff2bfb-aac2-4c57-8739-3348f2edcc90.png", 
        title: "5BHK First Floor" 
      },
      { 
        image: "/lovable-uploads/ebf40fbe-d160-45c8-b2b7-1bfaba9366bc.png", 
        title: "5BHK Master Plan" 
      }
    ]
  };

  return (
    <section id="floor-plans" className="section-padding bg-offwhite py-16 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="gradient-heading text-4xl md:text-5xl font-serif font-bold mb-4">
            Floor Plans & Villa Types
          </h2>
          <p className="body-text max-w-3xl mx-auto">
            Explore our thoughtfully designed floor plans offering spacious living areas, premium finishes, 
            and attention to every detail for an unparalleled luxury experience.
          </p>
        </div>
        
        <Tabs defaultValue="4bhk" value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 w-full max-w-md">
              <TabsTrigger value="4bhk" className="font-serif text-lg">4 BHK Villas</TabsTrigger>
              <TabsTrigger value="5bhk" className="font-serif text-lg">5 BHK Villas</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="4bhk" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {villaTypes["4bhk"].map((villa, index) => (
                <VillaType key={index} {...villa} />
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-serif font-semibold text-emerald-800 text-center mb-6">4 BHK Floor Plans</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {floorPlans["4bhk"].map((plan, index) => (
                  <FloorPlan key={index} {...plan} />
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="5bhk" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {villaTypes["5bhk"].map((villa, index) => (
                <VillaType key={index} {...villa} />
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-serif font-semibold text-emerald-800 text-center mb-6">5 BHK Floor Plans</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {floorPlans["5bhk"].map((plan, index) => (
                  <FloorPlan key={index} {...plan} />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-12 text-center">
          <p className="mb-6 text-gray-600">
            Contact our sales team for detailed floor plans and customization options
          </p>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded">
            Request Detailed Plans
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FloorPlansSection;
