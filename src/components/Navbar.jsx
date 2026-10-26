import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Sprout, Heart, User, Phone, Building2 } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Navbar({ onOpenInquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Categories', path: '/categories' },
    { name: 'Our Services', path: '/services' },
    { name: 'Children We Support', path: '/#children-we-support', isHash: true },
    { name: 'Our Campus', path: '/#campus', isHash: true },
    { name: 'Donate & CSR', path: '/#donate-csr', isHash: true },
    { name: 'Portal Login', path: '/login' },
  ];

  const handleLinkClick = (isHash, path) => {
    setMobileMenuOpen(false);
    if (isHash) {
      if (location.pathname !== '/') {
        window.location.href = path;
      } else {
        const hash = path.replace('/#', '');
        const elem = document.getElementById(hash);
        if (elem) {
          const navOffset = 76;
          const elemPos = elem.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elemPos - navOffset,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 bg-white ${
        isScrolled
          ? 'shadow-xs border-b border-brand-200/90 py-2 sm:py-2.5'
          : 'border-b border-brand-100 py-2.5 sm:py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo on Left */}
          <Link
            to="/"
            className="focus:outline-none focus:ring-2 focus:ring-brand-400 rounded-lg p-0.5"
            aria-label="Little Plant Autism Educational Academy"
          >
            <BrandLogo />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1">
            {navLinks.map((link) => {
              if (link.isHash) {
                return (
                  <button
                    key={link.name}
                    onClick={() => handleLinkClick(true, link.path)}
                    className="px-2 xl:px-3 py-1.5 text-xs xl:text-[13px] font-medium text-gray-700 hover:text-brand-700 transition whitespace-nowrap"
                  >
                    {link.name}
                  </button>
                );
              }

              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-2 xl:px-3 py-1.5 text-xs xl:text-[13px] font-medium transition relative whitespace-nowrap ${
                      isActive && !location.hash
                        ? 'text-gray-950 font-bold after:content-[""] after:block after:w-4 after:h-0.5 after:bg-brand-600 after:rounded-full after:mx-auto after:mt-0.5'
                        : 'text-gray-700 hover:text-brand-700'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-2.5">
            
            {/* Donate pill button (Visible on mobile & desktop matching reference) */}
            <button
              onClick={() => onOpenInquiry("CSR Partnership / Campus Donation")}
              className="px-3 sm:px-4 py-1.5 text-xs font-semibold text-brand-800 bg-[#edf5ec] hover:bg-[#e2efe1] border border-brand-200 rounded-full transition shadow-2xs flex items-center gap-1.5 whitespace-nowrap"
              aria-label="Donate to Little Plant Academy"
            >
              <Building2 className="w-3.5 h-3.5 text-brand-600 shrink-0" />
              <span>Donate</span>
            </button>

            {/* Support Our Mission button (Desktop xl+ only to prevent crowding) */}
            <button
              onClick={() => onOpenInquiry("General Support & Inquiries")}
              className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-1.5 xl:px-4 xl:py-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold rounded-full shadow-xs hover:shadow-soft transition-all duration-200 transform active:scale-95 whitespace-nowrap"
            >
              <Sprout className="w-3.5 h-3.5 text-brand-200" />
              <span>Support Our Mission</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-xl text-gray-800 hover:text-brand-700 hover:bg-brand-50 focus:outline-none focus:ring-2 focus:ring-brand-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-brand-700" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-brand-200/90 bg-white px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-150 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (link.isHash) {
                    handleLinkClick(true, link.path);
                  } else {
                    window.location.href = link.path;
                  }
                }}
                className="w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium text-gray-800 hover:bg-brand-50 hover:text-brand-700 flex items-center justify-between transition"
              >
                <span>{link.name}</span>
                {link.name === 'Portal Login' ? (
                  <User className="w-4 h-4 text-brand-600" />
                ) : (
                  <span className="text-gray-300 text-xs font-mono">›</span>
                )}
              </button>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-brand-100 space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry("CSR Partnership / Campus Donation");
              }}
              className="w-full py-3 text-center text-xs sm:text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-full flex items-center justify-center gap-2 shadow-xs"
            >
              <Sprout className="w-4 h-4 text-brand-200" />
              <span>Donate to Campus / CSR Partnerships</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry("Child Assessment & Admissions");
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-brand-800 bg-brand-50 hover:bg-brand-100 border border-brand-200 rounded-full flex items-center justify-center gap-2"
            >
              <Heart className="w-3.5 h-3.5 text-brand-600" />
              <span>Request Child Assessment (Ages 3–18)</span>
            </button>

            <a
              href="tel:+18005557526"
              className="w-full py-2 text-center text-xs font-medium text-gray-600 flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-brand-600" />
              <span>Campus Helpline: +1 (800) 555-PLANT</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
