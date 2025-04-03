
import { 
  ArrowUp, 
  ArrowDown, 
  ArrowRight, 
  ArrowLeft,
  SquareIcon,
  BedDoubleIcon,
  BathIcon,
  Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export type VillaDirection = "North" | "South" | "East" | "West";

export interface VillaTypeProps { 
  direction: VillaDirection;
  area: string; 
  bedrooms: number; 
  bathrooms: number; 
  price: string; 
  features: string[];
  isActive?: boolean;
}

export const VillaType = ({ 
  direction,
  area, 
  bedrooms, 
  bathrooms, 
  price, 
  features,
  isActive = false
}: VillaTypeProps) => {
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
