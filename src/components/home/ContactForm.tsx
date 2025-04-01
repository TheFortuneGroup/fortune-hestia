
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Send, Loader2 } from 'lucide-react';

const ContactForm = ({ formType = "contact" }: { formType?: "contact" | "brochure" }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interestedIn: 'Not specified',
  });
  
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      // const response = await fetch('https://yourapi.com/submit-form', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     ...formData,
      //     formType,
      //     recipient: 'dm@fortunehestia.in'
      //   })
      // });
      
      // Simulate successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitted(true);
      
      toast({
        title: formType === "brochure" ? "Brochure request submitted!" : "Enquiry submitted!",
        description: "Our team will contact you shortly.",
      });
      
      // Reset form if not the brochure form
      if (formType !== "brochure") {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          interestedIn: 'Not specified',
        });
        setSubmitted(false);
      }
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
  
  if (submitted && formType === "brochure") {
    return (
      <div className="text-center py-6 px-4 bg-emerald-50 rounded-lg border border-emerald-100">
        <div className="mb-4 bg-emerald-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto">
          <svg 
            className="h-8 w-8 text-emerald-600" 
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
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-4">
          Your request for the brochure has been received. Our sales representative will get in touch with you shortly.
        </p>
        <Button 
          className="bg-emerald-600 hover:bg-emerald-700 text-white"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: '',
              email: '',
              phone: '',
              message: '',
              interestedIn: 'Not specified',
            });
          }}
        >
          Submit Another Request
        </Button>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-4">
        <div className="relative">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name *"
            required
            className="contact-input pl-10"
          />
          <span className="absolute left-3 top-3.5 text-emerald-500">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </span>
        </div>
        
        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address *"
            required
            className="contact-input pl-10"
          />
          <span className="absolute left-3 top-3.5 text-emerald-500">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </span>
        </div>
        
        <div className="relative">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number *"
            required
            className="contact-input pl-10"
          />
          <span className="absolute left-3 top-3.5 text-emerald-500">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
          </span>
        </div>
        
        <div className="relative">
          <select
            name="interestedIn"
            value={formData.interestedIn}
            onChange={handleChange}
            className="contact-input pl-10 appearance-none"
          >
            <option value="Not specified">Interested in...</option>
            <option value="4 BHK Villa">4 BHK Villa</option>
            <option value="5 BHK Villa">5 BHK Villa</option>
            <option value="Investment">Investment Opportunity</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
          <span className="absolute left-3 top-3.5 text-emerald-500">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </span>
          <span className="absolute right-3 top-3.5 text-gray-400 pointer-events-none">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </span>
        </div>
        
        {formType === "contact" && (
          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={3}
              className="contact-input pl-10 resize-none"
            ></textarea>
            <span className="absolute left-3 top-3.5 text-emerald-500">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
              </svg>
            </span>
          </div>
        )}
        
        <div>
          <Button 
            type="submit" 
            disabled={loading}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-md font-medium relative"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin mr-2" size={18} />
                <span>Processing...</span>
              </>
            ) : (
              <>
                {formType === "brochure" ? "Download Brochure" : "Request Information"}
                <Send className="ml-2" size={18} />
              </>
            )}
          </Button>
        </div>
        
        <p className="text-xs text-gray-500 text-center mt-4">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
