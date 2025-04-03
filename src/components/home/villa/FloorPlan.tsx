
import { SofaIcon } from 'lucide-react';

export interface FloorPlanProps {
  image: string;
  title: string;
}

export const FloorPlan = ({ image, title }: FloorPlanProps) => {
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
