import React from 'react';
import { Sprout, ArrowRight, HeartHandshake } from 'lucide-react';

export default function CTASection({ onOpenInquiry }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12" data-aos="fade-up">
      <div className="relative bg-[#ebf4eb] rounded-2xl p-6 sm:p-8 border border-brand-200/90 shadow-2xs overflow-hidden">
        
        {/* Subtle decorative leaf on left */}
        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-20 hidden lg:block">
          <svg width="60" height="60" viewBox="0 0 40 40" fill="none">
            <path d="M10 30 C 5 20, 15 5, 30 5 C 30 20, 20 30, 10 30 Z" fill="#557b42" />
          </svg>
        </div>

        {/* Subtle decorative leaf on right */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-20 hidden lg:block">
          <svg width="60" height="60" viewBox="0 0 40 40" fill="none" className="transform scale-x-[-1]">
            <path d="M10 30 C 5 20, 15 5, 30 5 C 30 20, 20 30, 10 30 Z" fill="#557b42" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Side: Icon & Copy */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full border border-brand-300 text-brand-700 bg-white flex items-center justify-center shrink-0 shadow-2xs p-2">
              <HeartHandshake className="w-7 h-7 text-brand-600" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 leading-snug">
                Help Build a Brighter Future
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-xl leading-relaxed">
                Your support helps us create a nurturing campus, provide quality education and life skills, and bring lasting change to children and families.
              </p>
            </div>
          </div>

          {/* Right Side: Olive Green Pill Button matching reference */}
          <div className="w-full sm:w-auto shrink-0">
            <button
              type="button"
              onClick={() => onOpenInquiry && onOpenInquiry("Campus Support & Admissions")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-full shadow-xs hover:shadow-soft transition-all duration-200 text-xs sm:text-sm"
            >
              <Sprout className="w-4 h-4 text-brand-200" />
              <span>Donate to the Campus / Inquire</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
