
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown, X, Download } from 'lucide-react';
import ContactForm from './ContactForm';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const HeroSection = () => {
  const [showContactDialog, setShowContactDialog] = useState(false);
  const [showBrochureDialog, setShowBrochureDialog] = useState(false);
  const [brochureFormData, setBrochureFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScheduleVisit = () => {
    setShowContactDialog(true);
  };

  const handleDownloadBrochure = () => {
    setShowBrochureDialog(true);
  };

  const handleBrochureFormChange = (e) => {
    const { name, value } = e.target;
    setBrochureFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBrochureSubmit = async (e) => {
    e.preventDefault();
    
    if (!brochureFormData.name || !brochureFormData.email || !brochureFormData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all the required fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Save lead to Supabase
      const { error } = await supabase
        .from('leads')
        .insert({
          name: brochureFormData.name,
          email: brochureFormData.email,
          phone: brochureFormData.phone,
          property_interest: 'Both',
          timeframe: 'Immediate',
          status: 'Brochure Request'
        });
        
      if (error) throw error;
      
      // Display toast
      toast({
        title: "Brochure Request Submitted",
        description: "Our representative will contact you shortly with the brochure!",
      });
      
      // Reset form
      setBrochureFormData({
        name: '',
        email: '',
        phone: '',
      });
      
      // Close dialog
      setShowBrochureDialog(false);
      
    } catch (error) {
      console.error("Error submitting brochure request:", error);
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your request. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('/lovable-uploads/ebf40fbe-d160-45c8-b2b7-1bfaba9366bc.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 to-emerald-900/50"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Hero content */}
          <div className="lg:col-span-3 text-white animate-fade-in text-center lg:text-left">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Luxury Living Redefined at <span className="text-emerald-400">Fortune Hestia Villa</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 mx-auto lg:mx-0 max-w-2xl">
              Experience architectural brilliance in Sarjapur Road's most prestigious address. 
              Premium villas starting from ₹5.3 Cr with world-class amenities.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
              <Button 
                className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-md px-6 py-6 text-lg flex items-center gap-2 shadow-lg shadow-emerald-900/20"
                onClick={handleScheduleVisit}
              >
                Schedule a Visit
                <ArrowRight size={18} />
              </Button>
              <Button 
                variant="outline" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-md px-6 py-6 text-lg"
                onClick={handleDownloadBrochure}
              >
                Download Brochure
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 text-gray-300">
              <div className="bg-emerald-900/30 backdrop-blur-sm p-4 rounded-lg border border-emerald-600/20 animate-pulse-subtle">
                <p className="text-3xl md:text-4xl font-serif font-semibold text-emerald-400">10+</p>
                <p className="text-sm uppercase tracking-wider mt-1">Luxury Amenities</p>
              </div>
              <div className="bg-emerald-900/30 backdrop-blur-sm p-4 rounded-lg border border-emerald-600/20 animate-pulse-subtle">
                <p className="text-3xl md:text-4xl font-serif font-semibold text-emerald-400">4 & 5 BHK</p>
                <p className="text-sm uppercase tracking-wider mt-1">Premium Villas</p>
              </div>
            </div>
          </div>
          
          {/* Contact form card */}
          <div className="lg:col-span-2 animate-fade-in-right">
            <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 border-t-4 border-emerald-500 mb-12">
              <h3 className="font-serif text-2xl font-semibold text-emerald-700 mb-6 text-center">Schedule Your Private Tour</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white cursor-pointer" onClick={scrollToNextSection}>
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-10 h-10 bg-emerald-600/50 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce">
            <ChevronDown size={24} />
          </div>
        </div>
      </div>

      {/* Tour scheduling dialog */}
      <Dialog open={showContactDialog} onOpenChange={setShowContactDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-serif text-emerald-700">
              Schedule Your Private Tour
            </DialogTitle>
          </DialogHeader>
          <ContactForm variant="dialog" onSuccess={() => setShowContactDialog(false)} />
        </DialogContent>
      </Dialog>

      {/* Brochure Request Dialog */}
      <Dialog open={showBrochureDialog} onOpenChange={setShowBrochureDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-serif text-emerald-700">
              Request Brochure
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-center text-gray-600 mb-6">
              Fill in your details to receive our exclusive brochure. Our representative will contact you shortly.
            </p>
            <form onSubmit={handleBrochureSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  value={brochureFormData.name}
                  onChange={handleBrochureFormChange}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  value={brochureFormData.email}
                  onChange={handleBrochureFormChange}
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  value={brochureFormData.phone}
                  onChange={handleBrochureFormChange}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Request Brochure"}
                <Download size={16} />
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HeroSection;
