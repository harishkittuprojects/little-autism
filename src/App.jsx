import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InquiryModal from './components/InquiryModal';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CampusPage from './pages/CampusPage';
import ContactPage from './pages/ContactPage';
import CategoriesPage from './pages/CategoriesPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import LoginPage from './pages/LoginPage';

// Helper to scroll to top whenever the route changes
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 750,
      once: true,
      easing: 'ease-out-cubic',
      offset: 40,
    });
  }, []);

  // Refresh AOS when navigating or dynamically expanding content
  useEffect(() => {
    AOS.refresh();
  });

  const handleOpenInquiry = (serviceName = '') => {
    setPreselectedService(serviceName || '');
    setIsInquiryOpen(true);
  };

  const handleCloseInquiry = () => {
    setIsInquiryOpen(false);
    setPreselectedService('');
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#f8faf8] text-gray-950 selection:bg-brand-200 selection:text-brand-950">
        {/* Sticky Navbar */}
        <Navbar onOpenInquiry={handleOpenInquiry} />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/about" element={<AboutPage onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/services" element={<ServicesPage onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/campus" element={<CampusPage onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/gallery" element={<GalleryPage onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/contact" element={<ContactPage onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/categories" element={<CategoriesPage onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/login" element={<LoginPage />} />
            {/* Catch-all fallback */}
            <Route path="*" element={<HomePage onOpenInquiry={handleOpenInquiry} />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer onOpenInquiry={handleOpenInquiry} />

        {/* Global Interactive Inquiry / Campus Tour Modal */}
        <InquiryModal
          isOpen={isInquiryOpen}
          onClose={handleCloseInquiry}
          preselectedService={preselectedService}
        />
      </div>
    </Router>
  );
}
