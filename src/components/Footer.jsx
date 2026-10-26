import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Heart, Sprout } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Footer({ onOpenInquiry }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-brand-100/90 text-gray-800 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3-Column Footer Grid matching reference UI */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-brand-100">
          
          {/* Col 1: Logo & Address */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" onClick={scrollToTop}>
              <BrandLogo showLocation={true} />
            </Link>
            <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
              Providing personalized education, communication, therapy, life skills and independence support for children with autism and developmental needs.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-gray-900 text-sm">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-600">
              <li>
                <Link to="/" onClick={scrollToTop} className="hover:text-brand-700 transition">
                  Home
                </Link>
              </li>
              <li>
                <a href="/#about" className="hover:text-brand-700 transition">
                  About Us
                </a>
              </li>
              <li>
                <Link to="/services" onClick={scrollToTop} className="hover:text-brand-700 transition">
                  Our Services
                </Link>
              </li>
              <li>
                <a href="/#campus" className="hover:text-brand-700 transition">
                  Our Campus
                </a>
              </li>
              <li>
                <Link to="/categories" onClick={scrollToTop} className="hover:text-brand-700 transition">
                  Our Categories
                </Link>
              </li>
              <li>
                <Link to="/login" onClick={scrollToTop} className="hover:text-brand-700 transition">
                  Portal Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Get In Touch matching reference */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display font-bold text-gray-900 text-sm">
              Get In Touch
            </h4>
            <div className="space-y-2.5 text-xs text-gray-600">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                <span>Jinnaram, Telangana, India</span>
              </p>
              <p className="flex items-start gap-2">
                <Sprout className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                <span>
                  For enquiries and support, please visit our{' '}
                  <button
                    onClick={() => onOpenInquiry && onOpenInquiry("General Enquiry")}
                    className="text-brand-700 font-semibold underline"
                  >
                    Contact page
                  </button>.
                </span>
              </p>
              <p className="flex items-center gap-2 pt-1 text-gray-500">
                <Phone className="w-3.5 h-3.5 text-brand-600" />
                <span>Admissions Helpline: +1 (800) 555-PLANT</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Tagline with Leaf Icons matching reference UI */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-gray-500 text-center sm:text-left">
          <div className="flex items-center justify-center gap-2 text-brand-800 font-medium mx-auto sm:mx-0">
            <Sprout className="w-3.5 h-3.5 text-brand-600" />
            <span>Together for Inclusion • Education • Care • Independence</span>
            <Sprout className="w-3.5 h-3.5 text-brand-600" />
          </div>

          <div>
            <span>© {new Date().getFullYear()} Little Plant Special Children Care Trust. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
