
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import GallerySection from "@/components/home/GallerySection";
import LocationSection from "@/components/home/LocationSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";
import ContactSection from "@/components/home/ContactSection";
import PopupForm from "@/components/home/PopupForm";
import { Toaster } from "@/components/ui/toaster";
import { X } from "lucide-react";

const Index = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <GallerySection />
        <LocationSection />
        <TestimonialsSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
      
      {/* Delayed popup form */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md relative overflow-hidden animate-scale-in">
            <div className="bg-purple-600 p-4">
              <h3 className="text-white font-serif text-2xl font-bold text-center">
                Limited Time Offer!
              </h3>
            </div>
            
            <button
              className="absolute right-4 top-4 text-navy-dark hover:text-navy transition-colors"
              onClick={() => setShowPopup(false)}
            >
              <X size={24} />
            </button>
            
            <div className="p-6">
              <p className="text-navy-light mb-4 text-center font-medium">
                Book a site visit today and get exclusive early-bird pricing!
              </p>
              <p className="text-navy/70 text-sm mb-6 text-center">
                Our sales representative will contact you within 24 hours to schedule your personalized tour.
              </p>
              
              <PopupForm />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
