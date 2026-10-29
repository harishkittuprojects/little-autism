import React from 'react';
import HeroSection from '../components/HeroSection';
import ThreePillarsBar from '../components/ThreePillarsBar';
import CampusProgressCard from '../components/CampusProgressCard';
import DiscoverAbilitiesSection from '../components/DiscoverAbilitiesSection';
import AboutSection from '../components/AboutSection';
import DreamCampusSection from '../components/DreamCampusSection';
import GallerySection from '../components/GallerySection';
import CTASection from '../components/CTASection';

export default function HomePage({ onOpenInquiry }) {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <HeroSection onOpenInquiry={onOpenInquiry} />

      {/* 2. Three Pillars Highlight Bar */}
      <ThreePillarsBar />

      {/* 3. Jinnaram Campus Construction Progress Card */}
      <CampusProgressCard />

      {/* 4. Discover Abilities & Nurture Talents Section */}
      <DiscoverAbilitiesSection onOpenInquiry={onOpenInquiry} />

      {/* 5. About Us & Facility Pillars Section */}
      <AboutSection onOpenInquiry={onOpenInquiry} />

      {/* 6. Our Dream Campus Section */}
      <DreamCampusSection onOpenInquiry={onOpenInquiry} />

      {/* 7. Interactive Campus & Academy Gallery */}
      <GallerySection onOpenInquiry={onOpenInquiry} />

      {/* 8. Help Build a Brighter Future Call To Action Banner */}
      <CTASection onOpenInquiry={onOpenInquiry} />
    </div>
  );
}
