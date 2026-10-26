import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, ArrowRight, Heart } from 'lucide-react';

export default function HeroSection({ onOpenInquiry }) {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-12 lg:pt-12 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left" data-aos="fade-right">
            
            {/* Top Subtitle with Green Dash */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-brand-700">
              <span>Little Plant Autism Educational Academy</span>
              <span className="w-8 h-0.5 bg-brand-600 rounded-full inline-block"></span>
            </div>

            {/* Headline matching Reference UI */}
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-gray-900 leading-[1.14] tracking-tight">
              Every Child Has a <br className="hidden sm:inline" />
              <span className="text-gray-950">Superpower.</span> <br />
              <span className="text-brand-600 font-extrabold">Let's Discover It!</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              We provide personalized education, communication, therapy, life skills and independence support for children with autism and other developmental needs.
            </p>

            {/* Dual Pill Action Buttons matching Reference UI */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-full shadow-xs hover:shadow-soft transition-all duration-200 text-sm group"
              >
                <Sprout className="w-4 h-4 text-brand-200" />
                <span>Explore Our Programs</span>
              </Link>

              <button
                type="button"
                onClick={() => onOpenInquiry()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-brand-50 text-brand-800 font-semibold rounded-full border border-brand-300 shadow-2xs hover:border-brand-500 transition-all duration-200 text-sm"
              >
                <span>Support the Campus</span>
              </button>
            </div>

          </div>

          {/* Right Column: Reference Arch Visual */}
          <div className="lg:col-span-5 relative" data-aos="fade-left" data-aos-delay="100">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Floating Decorative Green Leaves matching reference */}
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 pointer-events-none hidden sm:block">
                <svg width="48" height="64" viewBox="0 0 48 64" fill="none" className="text-brand-400 opacity-80 animate-pulse">
                  <path d="M12 40 C 4 28, 14 10, 32 8 C 30 24, 22 36, 12 40 Z" fill="#7fa86b" />
                  <path d="M22 56 C 14 46, 24 32, 42 30 C 38 44, 32 54, 22 56 Z" fill="#557b42" />
                </svg>
              </div>

              {/* The Curved Arch Frame from Reference UI */}
              <div className="relative overflow-hidden rounded-t-[120px] sm:rounded-t-[180px] rounded-br-2xl rounded-bl-[120px] sm:rounded-bl-[180px] shadow-soft border-4 border-white bg-brand-50">
                <img
                  src="/images/reference-hero.jpg"
                  alt="Caring teacher smiling warmly while helping a young student plant a green sapling in a pot"
                  className="w-full h-[280px] sm:h-[360px] lg:h-[430px] object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
