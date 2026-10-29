import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Sprout } from 'lucide-react';

export default function Navbar({ onOpenInquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Campus', path: '/campus' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <div className="sticky top-3 sm:top-5 z-50 w-full px-3.5 sm:px-6 pointer-events-none transition-all duration-300">
      <header
        className={`max-w-5xl mx-auto bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-white/60 px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between pointer-events-auto transition-all duration-200 ${
          isScrolled ? 'shadow-xl ring-1 ring-black/5' : 'shadow-md'
        }`}
      >
        {/* Logo on Left matching reference Hopper style */}
        <Link
          to="/"
          className="focus:outline-none rounded-full flex items-center gap-2 group shrink-0"
          aria-label="Little Plant Autism Residential Home"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform">
            <img
              src="/images/logo.png"
              alt="Little Plant Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-display font-bold text-base sm:text-lg text-gray-950 tracking-tight flex items-center gap-1">
            <span>Little</span>
            <span className="text-[#2d7a4d]">Plant</span>
          </span>
        </Link>

        {/* Desktop Navigation Links - Open Directly */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `px-3.5 py-1.5 text-xs lg:text-[13px] font-semibold transition-colors duration-150 rounded-full whitespace-nowrap ${
                  isActive
                    ? 'text-[#2d7a4d] font-bold bg-emerald-50/70'
                    : 'text-gray-700 hover:text-[#2d7a4d] hover:bg-gray-50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Action Button matching Reference UI */}
        <div className="flex items-center space-x-2 shrink-0">
          {/* Donate Now Button with leading dot matching Reference */}
          <button
            onClick={() => onOpenInquiry && onOpenInquiry("General Support & Inquiries")}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 bg-[#2d7a4d] hover:bg-[#24663e] text-white text-xs sm:text-[13px] font-semibold rounded-full shadow-xs hover:shadow-md transition-all duration-200 transform active:scale-95 whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-300"></span>
            <span>Donate Now</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full text-gray-800 hover:text-[#2d7a4d] hover:bg-gray-100 focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#2d7a4d]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-5xl mx-auto mt-2 rounded-3xl border border-white/60 bg-white/95 backdrop-blur-md px-5 pt-4 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-150 pointer-events-auto">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold text-gray-800 hover:bg-brand-50 hover:text-[#2d7a4d] flex items-center justify-between transition"
              >
                <span>{link.name}</span>
                <span className="text-gray-400">→</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
