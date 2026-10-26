import React from 'react';
import HeroSection from '../components/HeroSection';
import ThreePillarsBar from '../components/ThreePillarsBar';
import CampusProgressCard from '../components/CampusProgressCard';
import ChildrenWeSupport from '../components/ChildrenWeSupport';
import VisionAndMotto from '../components/VisionAndMotto';
import DiscoverAbilitiesSection from '../components/DiscoverAbilitiesSection';
import DreamCampusSection from '../components/DreamCampusSection';
import RegistrationsAndCSR from '../components/RegistrationsAndCSR';
import WhyChooseUs from '../components/WhyChooseUs';
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

      {/* 4. Children We Support (12 Conditions, Age 3-18, Eligibility) */}
      <ChildrenWeSupport onOpenInquiry={onOpenInquiry} />

      {/* 5. Vision, Official Academy Motto & Talent Discovery */}
      <VisionAndMotto onOpenInquiry={onOpenInquiry} />

      {/* 6. Discover Abilities & 8 Official Development Programs */}
      <DiscoverAbilitiesSection onOpenInquiry={onOpenInquiry} />

      {/* 7. Our Dream Campus at Jinnaram, Telangana */}
      <DreamCampusSection onOpenInquiry={onOpenInquiry} />

      {/* 8. Statutory Registrations & CSR Partnerships (80G, 12A, Form 10BD, RPwD) */}
      <RegistrationsAndCSR onOpenInquiry={onOpenInquiry} />

      {/* 9. Why Choose Us (6 Pillars of Care) */}
      <WhyChooseUs />

      {/* 10. Help Build a Brighter Future Call To Action Banner */}
      <CTASection onOpenInquiry={onOpenInquiry} />
    </div>
  );
}
