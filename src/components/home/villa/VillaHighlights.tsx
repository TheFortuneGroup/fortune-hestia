
import { Check } from 'lucide-react';
import { VillaDirection } from './VillaType';

export interface VillaHighlightsProps {
  direction: VillaDirection;
}

export const VillaHighlights = ({ direction }: VillaHighlightsProps) => {
  return (
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
  );
};
