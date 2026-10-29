import React from 'react';
import { Sprout, ArrowRight, HeartHandshake } from 'lucide-react';

export default function CTASection({ onOpenInquiry }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12" data-aos="fade-up">
      <div className="relative bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950 rounded-3xl p-7 sm:p-9 border border-brand-700 shadow-xl overflow-hidden text-white">
        
        {/* Subtle decorative leaf on left */}
        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-20 hidden lg:block">
          <svg width="70" height="70" viewBox="0 0 40 40" fill="none">
            <path d="M10 30 C 5 20, 15 5, 30 5 C 30 20, 20 30, 10 30 Z" fill="#bee0c3" />
          </svg>
        </div>

        {/* Subtle decorative leaf on right */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-20 hidden lg:block">
          <svg width="70" height="70" viewBox="0 0 40 40" fill="none" className="transform scale-x-[-1]">
            <path d="M10 30 C 5 20, 15 5, 30 5 C 30 20, 20 30, 10 30 Z" fill="#bee0c3" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Side: Icon & Copy */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl border-2 border-white/20 text-white bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0 shadow-inner p-2">
              <HeartHandshake className="w-7 h-7 text-emerald-300" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white leading-snug">
                Help Build a Brighter Future
              </h3>
              <p className="text-xs sm:text-sm text-brand-100/90 mt-1.5 max-w-xl leading-relaxed font-normal">
                Your support helps us create a nurturing campus, provide quality education and life skills, and bring lasting change to children and families.
              </p>
            </div>
          </div>

          {/* Right Side: High-contrast button */}
          <div className="w-full sm:w-auto shrink-0">
            <button
              type="button"
              onClick={() => onOpenInquiry && onOpenInquiry("Campus Support & Admissions")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white hover:bg-brand-50 text-brand-950 font-extrabold rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-xs sm:text-sm transform active:scale-95"
            >
              <Sprout className="w-4 h-4 text-brand-700" />
              <span>Donate to the Campus</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
