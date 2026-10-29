import React from 'react';
import { Home, MapPin, Calendar, Sprout, CheckCircle2 } from 'lucide-react';

export default function CampusProgressCard() {
  return (
    <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 my-6 sm:my-10" data-aos="fade-up">
      <div className="bg-[#e7f2e6] rounded-2xl p-5 sm:p-7 border-2 border-brand-300 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center">
          
          {/* Left Side: Building & Location */}
          <div className="md:col-span-6 flex items-start gap-3.5 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border-2 border-brand-400 text-brand-800 flex items-center justify-center shrink-0 p-2 shadow-2xs">
              <svg viewBox="0 0 24 24" className="w-full h-full text-brand-800" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18M5 21V9l7-5 7 5v12M9 13h2v4H9zM13 13h2v4h-2z" />
                <path d="M12 4v-2M10 2c0 1 1 2 2 2s2-1 2-2" strokeWidth="1.8" />
              </svg>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-gray-950 leading-snug">
                A Home for Hope, Learning,<br className="hidden sm:inline" /> Care & Independence
              </h3>
              <p className="text-xs sm:text-sm text-gray-800 flex items-center gap-1.5 mt-1 font-semibold">
                <MapPin className="w-4 h-4 text-brand-800" />
                <span>Jinnaram, Telangana</span>
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block md:col-span-1 h-12 w-px bg-brand-300 mx-auto" />

          {/* Right Side: Construction Progress */}
          <div className="md:col-span-5 space-y-2.5">
            <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-gray-950">
              <span className="flex items-center gap-1.5">
                <Sprout className="w-4 h-4 text-brand-800" />
                <span>Campus construction in progress</span>
              </span>
              <span className="text-brand-900 font-extrabold text-xs bg-brand-200/80 px-2 py-0.5 rounded-md">68%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 rounded-full bg-[#c0dec0] overflow-hidden p-0.5">
              <div
                className="h-full rounded-full bg-brand-700 transition-all duration-1000 ease-out"
                style={{ width: '68%' }}
              />
            </div>

            <div className="flex items-center text-xs text-gray-800 font-semibold">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-brand-800" />
                <span>Target completion: 31 May 2027</span>
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
