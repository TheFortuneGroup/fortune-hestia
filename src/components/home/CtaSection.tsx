
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, X } from 'lucide-react';
import ContactForm from './ContactForm';
import { toast } from '@/components/ui/use-toast';

const CtaSection = () => {
  const [showBrochureForm, setShowBrochureForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBrochureDownload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call
      console.log(`Sending brochure download request: ${JSON.stringify(formData)}`);
      
      // In a real implementation, this would be an actual API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate a file download
      const link = document.createElement('a');
      link.href = '#'; // This would be the actual brochure URL
      link.setAttribute('download', 'Fortune-Hestia-Villa-Brochure.pdf');
      document.body.appendChild(link);
      // link.click(); // Commented for simulation only
      document.body.removeChild(link);
      
      toast({
        title: "Brochure download initiated!",
        description: "Thank you for your interest. Your download should start automatically.",
      });
      
      // Close form after successful submission
      setShowBrochureForm(false);
    } catch (error) {
      console.error("Error downloading brochure:", error);
      toast({
        title: "Error",
        description: "There was a problem downloading the brochure. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-24 my-8">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('/lovable-uploads/76c37ef2-49ee-49f7-a6b5-07a19f9ba26b.png')`,
        }}
      >
        <div className="absolute inset-0 bg-emerald-950/80"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 animate-slide-up">
            Elevate Your Lifestyle Today
          </h2>
          
          <p className="text-xl text-gray-200 mb-10 leading-relaxed animate-slide-up">
            Limited villas available. Schedule a private tour and experience luxury living at Fortune Hestia Villa.
            Prices starting from 5.3 Cr onwards.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 animate-slide-up">
            <Button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-6 text-lg rounded-md flex items-center gap-2 shadow-lg transition-all duration-300 transform hover:scale-105">
              Book a Site Visit
              <ArrowRight size={18} />
            </Button>
            
            <Button 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-md flex items-center gap-2 shadow-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => setShowBrochureForm(true)}
            >
              Download Brochure
              <Download size={18} />
            </Button>
          </div>
          
          <p className="mt-10 text-gray-200 animate-slide-up">
            Contact us at <a href="tel:+919876543210" className="text-emerald-300 hover:underline font-medium">+91 98765 43210</a> or 
            <a href="mailto:dm@fortunehestia.in" className="text-emerald-300 hover:underline font-medium"> dm@fortunehestia.in</a>
          </p>
        </div>
      </div>

      {/* Brochure Download Modal */}
      {showBrochureForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md relative overflow-hidden animate-scale-in">
            <div className="bg-emerald-600 py-4 px-6">
              <h3 className="text-white font-serif text-2xl font-bold">Download Exclusive Brochure</h3>
            </div>
            
            <button
              className="absolute right-4 top-4 text-white hover:text-gray-200 transition-colors"
              onClick={() => setShowBrochureForm(false)}
            >
              <X size={24} />
            </button>
            
            <div className="p-6">
              <p className="text-gray-600 mb-6">
                Please fill in your details to receive our exclusive brochure with floor plans and pricing details.
              </p>
              
              <form onSubmit={handleBrochureDownload} className="space-y-4">
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
                  <Button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-md font-medium"
                  >
                    {loading ? 'Processing...' : 'Download Brochure'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CtaSection;
