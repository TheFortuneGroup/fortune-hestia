
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-serif text-2xl text-white font-bold mb-6">Fortune<span className="text-gold">Hestia</span></h3>
            <p className="mb-6 text-gray-300">
              Experience unparalleled luxury living at Fortune Hestia Villa, where architectural brilliance meets modern comfort.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-navy-light hover:bg-gold transition-colors p-2 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="bg-navy-light hover:bg-gold transition-colors p-2 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="#" className="bg-navy-light hover:bg-gold transition-colors p-2 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-xl text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-gold transition-colors">About the Villa</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-gold transition-colors">Features & Amenities</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-gold transition-colors">Gallery</a></li>
              <li><a href="#location" className="text-gray-300 hover:text-gold transition-colors">Location</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-xl text-white font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-gold mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">Sarjapur Road, near Wipro Corporate Office, Bengaluru, Karnataka 560035</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-gold mr-3 flex-shrink-0" size={18} />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-gold transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center">
                <Mail className="text-gold mr-3 flex-shrink-0" size={18} />
                <a href="mailto:info@fortunehestia.com" className="text-gray-300 hover:text-gold transition-colors">info@fortunehestia.com</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-xl text-white font-semibold mb-6">Visit Our Office</h4>
            <p className="text-gray-300 mb-4">Experience our model villa in person with our expert sales team.</p>
            <p className="text-gray-300 mb-4">
              <span className="font-semibold text-white">Hours:</span><br />
              Mon - Sat: 10:00 AM - 7:00 PM<br />
              Sunday: 11:00 AM - 5:00 PM
            </p>
            <a href="#contact" className="text-gold font-medium hover:underline">Book an appointment →</a>
          </div>
        </div>
        
        <div className="border-t border-navy-light mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2023 Fortune Hestia Villa. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gold text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-gold text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-gold text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
