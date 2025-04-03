
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
  SofaIcon,
  Check
} from 'lucide-react';

const VillaType = ({ 
  direction,
  area, 
  bedrooms, 
  bathrooms, 
  price, 
  features,
  isActive = false
}: { 
  direction: "North" | "South" | "East" | "West";
  area: string; 
  bedrooms: number; 
  bathrooms: number; 
  price: string; 
  features: string[];
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
        <h3 className="text-xl font-serif font-semibold text-emerald-800">Fortune Hestia Villa</h3>
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
  const villaTypes = {
    "North": {
      area: "3650 sq ft",
      bedrooms: 4,
      bathrooms: 4.5,
      price: "₹5.3 Cr",
      features: ["Private Garden", "Double Height Living", "Italian Marble Flooring", "Smart Home Features"],
      direction: "North" as const
    },
    "South": {
      area: "3650 sq ft",
      bedrooms: 4,
      bathrooms: 4.5,
      price: "₹5.5 Cr",
      features: ["Terrace Garden", "Home Theater", "Modular Kitchen", "Walk-in Wardrobe"],
      direction: "South" as const
    },
    "East": {
      area: "3650 sq ft",
      bedrooms: 4,
      bathrooms: 5,
      price: "₹5.8 Cr",
      features: ["Corner Plot", "Swimming Pool", "Home Office", "Premium Fittings"],
      direction: "East" as const
    },
    "West": {
      area: "3650 sq ft",
      bedrooms: 4,
      bathrooms: 5,
      price: "₹6.2 Cr",
      features: ["Private Pool", "Garden Patio", "Guest Suite", "German Kitchen"],
      direction: "West" as const
    }
  };

  const floorPlans = {
    "North": [
      { image: "/lovable-uploads/47ff2bfb-aac2-4c57-8739-3348f2edcc90.png", title: "Ground Floor - North Facing" },
      { image: "/lovable-uploads/ebf40fbe-d160-45c8-b2b7-1bfaba9366bc.png", title: "First Floor - North Facing" },
      { image: "/lovable-uploads/76c37ef2-49ee-49f7-a6b5-07a19f9ba26b.png", title: "Master Plan - North Facing" }
    ],
    "South": [
      { image: "/lovable-uploads/76c37ef2-49ee-49f7-a6b5-07a19f9ba26b.png", title: "Ground Floor - South Facing" },
      { image: "/lovable-uploads/47ff2bfb-aac2-4c57-8739-3348f2edcc90.png", title: "First Floor - South Facing" },
      { image: "/lovable-uploads/ebf40fbe-d160-45c8-b2b7-1bfaba9366bc.png", title: "Master Plan - South Facing" }
    ],
    "East": [
      { image: "/lovable-uploads/ebf40fbe-d160-45c8-b2b7-1bfaba9366bc.png", title: "Ground Floor - East Facing" },
      { image: "/lovable-uploads/76c37ef2-49ee-49f7-a6b5-07a19f9ba26b.png", title: "First Floor - East Facing" },
      { image: "/lovable-uploads/47ff2bfb-aac2-4c57-8739-3348f2edcc90.png", title: "Master Plan - East Facing" }
    ],
    "West": [
      { image: "/lovable-uploads/47ff2bfb-aac2-4c57-8739-3348f2edcc90.png", title: "Ground Floor - West Facing" },
      { image: "/lovable-uploads/76c37ef2-49ee-49f7-a6b5-07a19f9ba26b.png", title: "First Floor - West Facing" },
      { image: "/lovable-uploads/ebf40fbe-d160-45c8-b2b7-1bfaba9366bc.png", title: "Master Plan - West Facing" }
    ]
  };

  const [selectedDirection, setSelectedDirection] = useState<"North" | "South" | "East" | "West">("North");

  return (
    <section id="floor-plans" className="section-padding bg-offwhite py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-emerald-800 mb-4">
            Fortune Hestia Villa - Floor Plans
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Explore our thoughtfully designed floor plans offering spacious living areas, premium finishes, 
            and attention to every detail for an unparalleled luxury experience.
          </p>
        </div>
        
        <Tabs 
          defaultValue="North" 
          value={selectedDirection} 
          onValueChange={(value) => setSelectedDirection(value as "North" | "South" | "East" | "West")} 
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-4 w-full max-w-xl">
              <TabsTrigger value="North" className="font-serif">North Facing</TabsTrigger>
              <TabsTrigger value="South" className="font-serif">South Facing</TabsTrigger>
              <TabsTrigger value="East" className="font-serif">East Facing</TabsTrigger>
              <TabsTrigger value="West" className="font-serif">West Facing</TabsTrigger>
            </TabsList>
          </div>
          
          {Object.entries(villaTypes).map(([direction, villa]) => (
            <TabsContent key={direction} value={direction} className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <VillaType 
                  direction={villa.direction}
                  area={villa.area}
                  bedrooms={villa.bedrooms}
                  bathrooms={villa.bathrooms}
                  price={villa.price}
                  features={villa.features}
                  isActive={selectedDirection === direction}
                />
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-serif font-semibold text-emerald-800 mb-4">
                    Villa Highlights - {direction} Facing
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="text-emerald-500 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Premium {direction.toLowerCase()}-facing orientation for optimal natural light</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-emerald-500 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Spacious 3650 sq ft layout with 4 bedrooms</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-emerald-500 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Double-height living room with panoramic windows</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-emerald-500 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Gourmet kitchen with premium European appliances</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-emerald-500 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Private garden and outdoor entertainment area</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-2xl font-serif font-semibold text-emerald-800 text-center mb-6">
                  {direction} Facing - Floor Plans
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {floorPlans[direction].map((plan, index) => (
                    <FloorPlan key={index} {...plan} />
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
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
