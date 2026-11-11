import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Sprout,
  Home,
  Info,
  Sparkles,
  ClipboardList,
  Building2,
  Camera,
  PhoneCall,
  Heart,
  ChevronRight
} from 'lucide-react';

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
    { name: 'Home', path: '/', icon: Home, desc: 'Overview & Campus' },
    { name: 'About Us', path: '/about', icon: Info, desc: 'Mission, Care & Team' },
    { name: 'Services', path: '/services', icon: Sparkles, desc: 'ADL & Autism Therapies' },
    { name: 'Requirements', path: '/#requirements', icon: ClipboardList, desc: 'Campus Material Needs', highlight: true },
    { name: 'Our Campus', path: '/campus', icon: Building2, desc: '4-Acre Residential Home' },
    { name: 'Gallery', path: '/gallery', icon: Camera, desc: 'Bhoomi Puja & Photos' },
    { name: 'Contact Us', path: '/contact', icon: PhoneCall, desc: 'Reach Out & Visit Us' },
  ];

  // Exactly 5 key navigation buttons for the mobile bottom dock bar
  const bottomFiveLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Requirements', path: '/#requirements', icon: ClipboardList, highlight: true },
    { name: 'Campus', path: '/campus', icon: Building2 },
    { name: 'Gallery', path: '/gallery', icon: Camera },
    { name: 'Contact', path: '/contact', icon: PhoneCall },
  ];

  const checkIsActive = (linkPath) => {
    if (linkPath === '/') {
      return location.pathname === '/' && !location.hash;
    }
    if (linkPath.startsWith('/#')) {
      return location.pathname === '/' && location.hash === linkPath.replace('/', '');
    }
    return location.pathname === linkPath;
  };

  const handleNavClick = (e, path) => {
    setMobileMenuOpen(false);
    if (path.startsWith('/#')) {
      const id = path.replace('/#', '');
      if (location.pathname === '/') {
        e.preventDefault();
        const elem = document.getElementById(id);
        if (elem) {
          const navOffset = 90;
          const y = elem.getBoundingClientRect().top + window.pageYOffset - navOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      <div className="sticky top-3 sm:top-5 z-50 w-full px-3 sm:px-6 pointer-events-none transition-all duration-300">
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
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {navLinks.map((link) => {
              const isCurrentActive = checkIsActive(link.path);

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  className={`px-3 py-1.5 text-xs lg:text-[13px] font-semibold transition-colors duration-150 rounded-full whitespace-nowrap cursor-pointer ${
                    isCurrentActive
                      ? 'text-[#2d7a4d] font-bold bg-emerald-50/80 shadow-xs'
                      : 'text-gray-700 hover:text-[#2d7a4d] hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="flex items-center space-x-2 shrink-0">
            {/* Donate Now Button */}
            <button
              onClick={() => onOpenInquiry && onOpenInquiry("General Support & Inquiries")}
              className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-2 bg-[#2d7a4d] hover:bg-[#24663e] text-white text-xs sm:text-[13px] font-semibold rounded-full shadow-xs hover:shadow-md transition-all duration-200 transform active:scale-95 whitespace-nowrap cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-300"></span>
              <span>Donate Now</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full text-gray-800 hover:text-[#2d7a4d] hover:bg-gray-100 focus:outline-none cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#2d7a4d]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </header>

        {/* Mobile Drawer Menu - Styled as Distinct Interactive Buttons */}
        {mobileMenuOpen && (
          <div className="md:hidden max-w-5xl mx-auto mt-2 rounded-2xl border border-white/60 bg-white/95 backdrop-blur-md px-4 pt-3.5 pb-5 shadow-2xl animate-in slide-in-from-top-2 duration-150 pointer-events-auto">
            {/* Drawer Top Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-150">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-600">Quick Navigation Buttons</span>
              </div>
              <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-lg border border-emerald-200">
                Direct Tap
              </span>
            </div>

            {/* Navigation Buttons Stack */}
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = checkIsActive(link.path);

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className={`w-full text-left p-2.5 sm:p-3 rounded-xl text-sm font-semibold flex items-center justify-between transition-all active:scale-[0.98] border shadow-xs cursor-pointer ${
                      isActive
                        ? 'bg-[#143823] text-white border-emerald-950 shadow-sm'
                        : 'bg-white text-gray-800 border-gray-200 hover:bg-emerald-50/80 hover:border-emerald-300'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border ${
                          isActive
                            ? 'bg-emerald-800/80 border-emerald-700 text-emerald-200'
                            : 'bg-emerald-50/90 border-emerald-100 text-[#2d7a4d]'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[13px] font-bold leading-tight truncate">{link.name}</span>
                          {link.highlight && (
                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md uppercase tracking-wider shrink-0 ${
                              isActive ? 'bg-amber-400 text-gray-950' : 'bg-amber-100 text-amber-900 border border-amber-300'
                            }`}>
                              Needed
                            </span>
                          )}
                          {isActive && (
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-emerald-600 text-white shrink-0">
                              Active
                            </span>
                          )}
                        </div>
                        <p className={`text-[11px] leading-tight mt-0.5 truncate ${isActive ? 'text-emerald-200/80' : 'text-gray-500'}`}>
                          {link.desc}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ml-2 ${
                        isActive
                          ? 'bg-emerald-800/80 text-white'
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </Link>
                );
              })}
            </nav>

            {/* Quick Drawer Footer CTAs */}
            <div className="mt-3.5 pt-3 border-t border-gray-150 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry && onOpenInquiry("General Support & Inquiries");
                }}
                className="w-full py-2.5 px-4 bg-[#2d7a4d] hover:bg-[#23643e] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md flex items-center justify-center gap-2 transition active:scale-95 cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-emerald-300 text-emerald-300" />
                <span>Donate Now • 80G Tax Exemption Claimable</span>
              </button>
              <p className="text-center text-[10px] text-gray-400">
                Tax deduction receipt & Form 10BE issued for all eligible donations
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Bottom Quick-Access Bar (Exactly 5 Navigation Buttons) */}
      {!mobileMenuOpen && (
        <div className="md:hidden fixed bottom-3 inset-x-2.5 z-40 max-w-lg mx-auto pointer-events-auto transition-all duration-300">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.18)] p-1.5">
            <div className="flex items-center justify-between sm:justify-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar py-0.5 px-0.5">
              {bottomFiveLinks.map((link) => {
                const Icon = link.icon;
                const isActive = checkIsActive(link.path);

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className={`inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap border shadow-xs transition-all active:scale-95 cursor-pointer shrink-0 ${
                      isActive
                        ? 'bg-[#143823] text-white border-emerald-950 shadow-sm font-bold'
                        : 'bg-white text-gray-800 border-gray-200/90 hover:bg-emerald-50 hover:text-[#2d7a4d]'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-emerald-300' : 'text-[#2d7a4d]'}`} />
                    <span>{link.name}</span>
                    {link.highlight && (
                      <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-amber-300' : 'bg-amber-500'}`} />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
