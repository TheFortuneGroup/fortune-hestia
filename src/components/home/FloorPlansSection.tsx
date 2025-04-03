import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VillaType, VillaDirection } from './villa/VillaType';
import { FloorPlan } from './villa/FloorPlan';
import { VillaHighlights } from './villa/VillaHighlights';
import { villaTypes } from './villa/villaData';
import { supabase } from '@/integrations/supabase/client';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import ContactForm from './ContactForm';

const FloorPlansSection = () => {
  const [selectedDirection, setSelectedDirection] = useState<VillaDirection>("North");
  const [floorPlans, setFloorPlans] = useState({
    North: [],
    South: [],
    East: [],
    West: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [showRequestDialog, setShowRequestDialog] = useState(false);

  // Fetch floor plan images from Supabase
  useEffect(() => {
    const fetchFloorPlans = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from('images')
          .select('*')
          .eq('category', 'floorplan');
        
        if (error) throw error;
        
        if (data) {
          // Organize floor plans by direction
          const northPlans = data.filter(plan => plan.category?.includes('north_')).map(plan => ({
            image: plan.url,
            title: `${plan.name || 'Floor Plan'}`
          }));
          
          const southPlans = data.filter(plan => plan.category?.includes('south_')).map(plan => ({
            image: plan.url,
            title: `${plan.name || 'Floor Plan'}`
          }));
          
          const eastPlans = data.filter(plan => plan.category?.includes('east_')).map(plan => ({
            image: plan.url,
            title: `${plan.name || 'Floor Plan'}`
          }));
          
          const westPlans = data.filter(plan => plan.category?.includes('west_')).map(plan => ({
            image: plan.url,
            title: `${plan.name || 'Floor Plan'}`
          }));
          
          setFloorPlans({
            North: northPlans.length > 0 ? northPlans : [{ image: '/lovable-uploads/47ff2bfb-aac2-4c57-8739-3348f2edcc90.png', title: 'North Facing - Ground Floor' }],
            South: southPlans.length > 0 ? southPlans : [{ image: '/lovable-uploads/47ff2bfb-aac2-4c57-8739-3348f2edcc90.png', title: 'South Facing - Ground Floor' }],
            East: eastPlans.length > 0 ? eastPlans : [{ image: '/lovable-uploads/47ff2bfb-aac2-4c57-8739-3348f2edcc90.png', title: 'East Facing - Ground Floor' }],
            West: westPlans.length > 0 ? westPlans : [{ image: '/lovable-uploads/47ff2bfb-aac2-4c57-8739-3348f2edcc90.png', title: 'West Facing - Ground Floor' }]
          });
        }
      } catch (error) {
        console.error("Error fetching floor plans:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchFloorPlans();
  }, []);

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
          onValueChange={(value) => setSelectedDirection(value as VillaDirection)} 
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
                
                <VillaHighlights direction={villa.direction} />
              </div>
              
              <div className="mt-12">
                <h3 className="text-2xl font-serif font-semibold text-emerald-800 text-center mb-6">
                  {direction} Facing - Floor Plans
                </h3>
                
                {isLoading ? (
                  <div className="text-center py-8">Loading floor plans...</div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {floorPlans[direction as VillaDirection].map((plan, index) => (
                      <FloorPlan key={index} {...plan} />
                    ))}
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-12 text-center">
          <p className="mb-6 text-gray-600">
            Contact our sales team for detailed floor plans and customization options
          </p>
          <Button 
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded"
            onClick={() => setShowRequestDialog(true)}
          >
            Request Detailed Plans
          </Button>
        </div>
      </div>
      
      {/* Request Detailed Plans Dialog */}
      <Dialog open={showRequestDialog} onOpenChange={setShowRequestDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <div className="py-4">
            <h3 className="text-center text-2xl font-serif text-emerald-700 mb-4">
              Request Detailed Plans
            </h3>
            <p className="text-center text-gray-600 mb-6">
              Our sales team will contact you with comprehensive floor plans and customization options.
            </p>
            <ContactForm variant="dialog" onSuccess={() => setShowRequestDialog(false)} />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FloorPlansSection;
