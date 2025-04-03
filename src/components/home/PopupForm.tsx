
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const PopupForm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    preferredUnit: '',
    preferredDirection: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      // Check if user has already closed the popup in this session
      const hasClosedPopup = sessionStorage.getItem('popupClosed');
      if (!hasClosedPopup) {
        setShowPopup(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    // Remember that the user closed the popup in this session
    sessionStorage.setItem('popupClosed', 'true');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call
      console.log(`Sending form data to dm@fortunehestia.in: ${JSON.stringify(formData)}`);
      
      // In a real implementation, this would be an actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Interest registered!",
        description: "Our team will contact you shortly with exclusive offers.",
      });
      
      // Close popup after successful submission
      handleClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden animate-scale-in">
        <button
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
          onClick={handleClose}
        >
          <X size={24} />
        </button>
        
        <div className="bg-emerald-600 py-6 px-6">
          <h3 className="text-white font-serif text-2xl font-bold text-center">Exclusive Villa Offer!</h3>
          <p className="text-white/80 text-center mt-2">Limited Time - Premium Location</p>
        </div>
        
        <div className="p-6">
          <p className="text-emerald-800 mb-4 text-center font-medium">
            Register now to get priority access and receive our exclusive offers with special discounts!
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name *"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address *"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              />
            </div>
            
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number *"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              />
            </div>

            <div>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              >
                <option value="">Select Budget Range</option>
                <option value="5-6cr">₹5 Cr - ₹6 Cr</option>
                <option value="6-7cr">₹6 Cr - ₹7 Cr</option>
                <option value="7-8cr">₹7 Cr - ₹8 Cr</option>
                <option value="8cr+">Above ₹8 Cr</option>
              </select>
            </div>

            <div>
              <select
                name="preferredUnit"
                value={formData.preferredUnit}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              >
                <option value="">Preferred Unit Type</option>
                <option value="4bhk">4 BHK Villa</option>
                <option value="5bhk">5 BHK Villa</option>
              </select>
            </div>

            <div>
              <select
                name="preferredDirection"
                value={formData.preferredDirection}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              >
                <option value="">Preferred Direction</option>
                <option value="north">North Facing</option>
                <option value="south">South Facing</option>
                <option value="east">East Facing</option>
                <option value="west">West Facing</option>
              </select>
            </div>
            
            <div>
              <Button 
                type="submit" 
                disabled={loading}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-md font-medium relative"
              >
                {loading ? 'Processing...' : 'Get Exclusive Offers'}
              </Button>
            </div>
          </form>
          
          <p className="text-xs text-gray-500 text-center mt-4">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
