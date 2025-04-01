
import { useState } from 'react';
import { X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const PopupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interestedIn: 'Not specified',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleClose = () => {
    // Implement close functionality - this will be handled by the parent component
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
      
      setSubmitted(true);
      
      toast({
        title: "Interest registered!",
        description: "Our team will contact you shortly with exclusive offers.",
      });
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

  if (submitted) {
    return (
      <div className="text-center py-6 px-4 bg-purple-50 rounded-lg border border-purple-100 animate-fade-in">
        <div className="mb-4 bg-purple-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto">
          <svg 
            className="h-8 w-8 text-purple-600" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        <h3 className="text-xl font-serif font-semibold text-purple-800 mb-3">Thank You!</h3>
        <p className="text-gray-600 mb-4">
          Our sales representative will get in touch with you shortly with exclusive offers.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name *"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
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
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
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
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
        />
      </div>
      
      <div>
        <select
          name="interestedIn"
          value={formData.interestedIn}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none appearance-none"
        >
          <option value="Not specified">Interested in...</option>
          <option value="4 BHK Villa">4 BHK Villa</option>
          <option value="5 BHK Villa">5 BHK Villa</option>
          <option value="Investment">Investment Opportunity</option>
          <option value="General Inquiry">General Inquiry</option>
        </select>
      </div>
      
      <div>
        <Button 
          type="submit" 
          disabled={loading}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md font-medium relative"
        >
          {loading ? 'Processing...' : (
            <>
              Get Exclusive Offers
              <Send className="ml-2" size={16} />
            </>
          )}
        </Button>
      </div>
      
      <p className="text-xs text-gray-500 text-center mt-2">
        By submitting this form, you agree to our privacy policy and terms of service.
      </p>
    </form>
  );
};

export default PopupForm;
