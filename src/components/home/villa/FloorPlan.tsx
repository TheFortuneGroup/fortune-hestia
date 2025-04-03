
import { useState } from 'react';
import { SofaIcon, X } from 'lucide-react';

export interface FloorPlanProps {
  image: string;
  title: string;
}

export const FloorPlan = ({ image, title }: FloorPlanProps) => {
  const [isEnlarged, setIsEnlarged] = useState(false);

  const toggleEnlarged = () => {
    setIsEnlarged(!isEnlarged);
  };

  return (
    <>
      <div 
        className="border border-gray-200 rounded-lg overflow-hidden shadow-md cursor-pointer" 
        onClick={toggleEnlarged}
      >
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

      {isEnlarged && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={toggleEnlarged}
        >
          <div className="relative max-w-4xl w-full">
            <button 
              className="absolute top-4 right-4 bg-white rounded-full p-1"
              onClick={(e) => {
                e.stopPropagation();
                setIsEnlarged(false);
              }}
            >
              <X className="w-6 h-6 text-gray-800" />
            </button>
            <img 
              src={image} 
              alt={title} 
              className="w-full h-auto object-contain bg-white p-2 rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};
