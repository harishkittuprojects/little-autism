import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Heart, Sprout } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Footer({ onOpenInquiry }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-950 border-t-4 border-brand-600 text-white pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3-Column Footer Grid matching reference UI */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-brand-900">
          
          {/* Col 1: Logo & Address matching reference UI */}
          <div className="md:col-span-5 space-y-3">
            <Link to="/" onClick={scrollToTop}>
              <BrandLogo showLocation={false} isDark={true} />
            </Link>
            <div className="text-xs text-brand-200 space-y-1.5 pt-1">
              <p className="font-bold text-white text-sm">Little Plant Autism Residential Home</p>
              <p className="flex items-center gap-1.5 text-brand-200 font-medium">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Jinnaram, Telangana, India</span>
              </p>
              <p className="text-[11px] text-brand-300">
                A registered residential academy & rehabilitation initiative.
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-brand-200 font-medium">
              <li>
                <Link to="/" onClick={scrollToTop} className="hover:text-white hover:underline transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/categories" onClick={scrollToTop} className="hover:text-white hover:underline transition">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} className="hover:text-white hover:underline transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={scrollToTop} className="hover:text-white hover:underline transition">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/campus" onClick={scrollToTop} className="hover:text-white hover:underline transition">
                  Our Campus
                </Link>
              </li>
              <li>
                <Link to="/gallery" onClick={scrollToTop} className="hover:text-white hover:underline transition">
                  Campus Gallery
                </Link>
              </li>
              <li>
                <button
                  onClick={() => onOpenInquiry && onOpenInquiry("Campus Donation / CSR Support")}
                  className="hover:text-white hover:underline transition text-left"
                >
                  Donate
                </button>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="hover:text-white hover:underline transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Get In Touch matching reference */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">
              Get In Touch
            </h4>
            <div className="space-y-3 text-xs text-brand-200 font-medium">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Jinnaram, Telangana, India</span>
              </p>
              <p className="flex items-start gap-2">
                <Sprout className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  For admissions, tour bookings, and CSR support, please visit our{' '}
                  <Link
                    to="/contact"
                    onClick={scrollToTop}
                    className="text-emerald-300 font-bold underline hover:text-white"
                  >
                    Contact page
                  </Link>.
                </span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Tagline with Leaf Icons matching reference UI */}
        <div className="pt-6 flex items-center justify-center text-xs text-brand-200 font-semibold text-center">
          <div className="flex items-center justify-center gap-2">
            <Sprout className="w-4 h-4 text-emerald-400" />
            <span>Together for Inclusion • Education • Care • Independence</span>
            <Sprout className="w-4 h-4 text-emerald-400" />
          </div>
        </div>

      </div>
    </footer>
  );
}
