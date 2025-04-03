
import { VillaDirection } from './VillaType';

export interface VillaTypeData {
  area: string;
  bedrooms: number;
  bathrooms: number;
  price: string;
  features: string[];
  direction: VillaDirection;
}

export interface FloorPlanData {
  image: string;
  title: string;
}

export const villaTypes: Record<VillaDirection, VillaTypeData> = {
  "North": {
    area: "3650 sq ft",
    bedrooms: 4,
    bathrooms: 4.5,
    price: "₹5.3 Cr",
    features: ["Private Garden", "Double Height Living", "Italian Marble Flooring", "Smart Home Features"],
    direction: "North"
  },
  "South": {
    area: "3650 sq ft",
    bedrooms: 4,
    bathrooms: 4.5,
    price: "₹5.5 Cr",
    features: ["Terrace Garden", "Home Theater", "Modular Kitchen", "Walk-in Wardrobe"],
    direction: "South"
  },
  "East": {
    area: "3650 sq ft",
    bedrooms: 4,
    bathrooms: 5,
    price: "₹5.8 Cr",
    features: ["Corner Plot", "Swimming Pool", "Home Office", "Premium Fittings"],
    direction: "East"
  },
  "West": {
    area: "3650 sq ft",
    bedrooms: 4,
    bathrooms: 5,
    price: "₹6.2 Cr",
    features: ["Private Pool", "Garden Patio", "Guest Suite", "German Kitchen"],
    direction: "West"
  }
};

export const floorPlans: Record<VillaDirection, FloorPlanData[]> = {
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
