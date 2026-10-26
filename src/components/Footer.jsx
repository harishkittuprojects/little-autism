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
          
          {/* Col 1: Logo & Address matching reference UI */}
          <div className="md:col-span-5 space-y-3">
            <Link to="/" onClick={scrollToTop}>
              <BrandLogo showLocation={false} />
            </Link>
            <div className="text-xs text-gray-700 space-y-1 pt-1">
              <p className="font-semibold text-gray-900">Little Plant Autism Residential Home</p>
              <p className="flex items-center gap-1.5 text-gray-500">
                <MapPin className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                <span>Jinnaram, Telangana, India</span>
              </p>
            </div>
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
                <Link to="/categories" onClick={scrollToTop} className="hover:text-brand-700 transition">
                  Categories
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
                <button
                  onClick={() => onOpenInquiry && onOpenInquiry("Campus Donation / CSR Support")}
                  className="hover:text-brand-700 transition text-left"
                >
                  Donate
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenInquiry && onOpenInquiry("General Enquiry & Contact")}
                  className="hover:text-brand-700 transition text-left"
                >
                  Contact
                </button>
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
            </div>
          </div>

        </div>

        {/* Bottom Tagline with Leaf Icons matching reference UI */}
        <div className="pt-6 flex items-center justify-center text-xs text-brand-800 font-medium text-center">
          <div className="flex items-center justify-center gap-2">
            <Sprout className="w-3.5 h-3.5 text-brand-600" />
            <span>Together for Inclusion • Education • Care • Independence</span>
            <Sprout className="w-3.5 h-3.5 text-brand-600" />
          </div>
        </div>

      </div>
    </footer>
  );
}
