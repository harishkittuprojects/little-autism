import React, { useEffect } from 'react';
import GallerySection from '../components/GallerySection';
import CTASection from '../components/CTASection';
import { Camera, MapPin, Sparkles, Building2 } from 'lucide-react';

export default function GalleryPage({ onOpenInquiry }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8faf8]">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-brand-100/70 via-brand-50/50 to-transparent py-14 lg:py-20 border-b border-brand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border-2 border-brand-300 text-xs font-bold text-brand-900 shadow-2xs mb-4">
            <Camera className="w-4 h-4 text-brand-700" />
            <span>Campus Visual Tour</span>
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-950 tracking-tight">
            Our Campus & Life Gallery
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-700 font-medium max-w-2xl mx-auto leading-relaxed">
            Take a visual tour through our permanent Jinnaram campus development, sensory gardens, therapy rooms, and happy residential living.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-800 font-semibold">
            <span className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-brand-800" />
              Jinnaram Permanent Campus
            </span>
            <span className="text-brand-300 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-brand-800" />
              Sensory Therapy Suites
            </span>
            <span className="text-brand-300 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-brand-800" />
              Interactive Full Lightbox
            </span>
          </div>
        </div>
      </section>

      {/* Main Interactive Gallery */}
      <GallerySection onOpenInquiry={onOpenInquiry} />

      {/* Call to action */}
      <CTASection onOpenInquiry={onOpenInquiry} />
    </div>
  );
}
