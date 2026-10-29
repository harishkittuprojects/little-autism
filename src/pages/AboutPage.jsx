import React, { useEffect } from 'react';
import AboutSection from '../components/AboutSection';
import VisionAndMotto from '../components/VisionAndMotto';
import ChildrenWeSupport from '../components/ChildrenWeSupport';
import WhyChooseUs from '../components/WhyChooseUs';
import CTASection from '../components/CTASection';
import { Sprout, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';

export default function AboutPage({ onOpenInquiry }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8faf8]">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-brand-100/70 via-brand-50/50 to-transparent py-14 lg:py-20 border-b border-brand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border-2 border-brand-300 text-xs font-bold text-brand-900 shadow-2xs mb-4">
            <Sprout className="w-4 h-4 text-brand-700" />
            <span>Little Plant Autism Educational Academy</span>
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-950 tracking-tight">
            About Our Academy & Residential Home
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-700 font-medium max-w-2xl mx-auto leading-relaxed">
            We are dedicated to discovering abilities, nurturing hidden talents, and providing 24/7 compassionate residential care for special children and youth.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-800 font-semibold">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-800" />
              Specialized Transdisciplinary Team
            </span>
            <span className="text-brand-300 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <HeartHandshake className="w-4 h-4 text-brand-800" />
              Inclusive 24/7 Home Setting
            </span>
            <span className="text-brand-300 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-brand-800" />
              Child-Centered Potential
            </span>
          </div>
        </div>
      </section>

      {/* Main Philosophy & Focus Areas */}
      <AboutSection onOpenInquiry={onOpenInquiry} />

      {/* Academy Motto & Hidden Talents Discovery */}
      <VisionAndMotto onOpenInquiry={onOpenInquiry} />

      {/* Children We Support Spectrum */}
      <ChildrenWeSupport onOpenInquiry={onOpenInquiry} />

      {/* Why Families Choose Us */}
      <WhyChooseUs onOpenInquiry={onOpenInquiry} />

      {/* Call to Action Banner */}
      <CTASection onOpenInquiry={onOpenInquiry} />
    </div>
  );
}
