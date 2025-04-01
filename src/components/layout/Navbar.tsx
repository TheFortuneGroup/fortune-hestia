
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/3391ccd4-e730-43d2-a22a-926209371749.png" 
              alt="Fortune Hestia Logo" 
              className="h-14 md:h-16" 
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <Link to="/" className="text-gray-800 hover:text-emerald-600 transition-colors font-medium">Home</Link>
              <a href="#about" className="text-gray-800 hover:text-emerald-600 transition-colors font-medium">About</a>
              <a href="#features" className="text-gray-800 hover:text-emerald-600 transition-colors font-medium">Features</a>
              <a href="#gallery" className="text-gray-800 hover:text-emerald-600 transition-colors font-medium">Gallery</a>
              <a href="#location" className="text-gray-800 hover:text-emerald-600 transition-colors font-medium">Location</a>
              <a href="#contact" className="text-gray-800 hover:text-emerald-600 transition-colors font-medium">Contact</a>
            </nav>
            
            <div className="flex items-center">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-md flex items-center gap-2">
                <Calendar size={16} />
                <span>Schedule Visit</span>
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              className="text-gray-800 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col py-4 px-4">
            <Link to="/" className="py-2 text-gray-800 hover:text-emerald-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <a href="#about" className="py-2 text-gray-800 hover:text-emerald-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#features" className="py-2 text-gray-800 hover:text-emerald-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#gallery" className="py-2 text-gray-800 hover:text-emerald-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
            <a href="#location" className="py-2 text-gray-800 hover:text-emerald-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>Location</a>
            <a href="#contact" className="py-2 text-gray-800 hover:text-emerald-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </nav>
          <div className="px-4 pb-4">
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-md flex items-center justify-center gap-2 py-2">
              <Calendar size={16} />
              <span>Schedule Visit</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
