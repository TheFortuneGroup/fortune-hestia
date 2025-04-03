
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
import FloorPlansSection from "@/components/home/FloorPlansSection";
import PopupForm from "@/components/home/PopupForm";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <div className="py-8 md:py-12"></div> {/* Spacing */}
        <FloorPlansSection />
        <div className="py-8 md:py-12"></div> {/* Spacing */}
        <GallerySection />
        <div className="py-8 md:py-12"></div> {/* Spacing */}
        <LocationSection />
        <div className="py-8 md:py-12"></div> {/* Spacing */}
        <TestimonialsSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
      <PopupForm />
    </div>
  );
};

export default Index;
