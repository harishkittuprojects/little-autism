import React from 'react';
import { Home, MapPin, Calendar, Sprout, CheckCircle2 } from 'lucide-react';

export default function CampusProgressCard() {
  return (
    <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 my-6 sm:my-10" data-aos="fade-up">
      <div className="bg-[#edf5ec] rounded-2xl p-5 sm:p-7 border border-brand-200/90 shadow-2xs">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center">
          
          {/* Left Side: Building & Location */}
          <div className="md:col-span-6 flex items-start gap-3.5 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-brand-200 text-brand-600 flex items-center justify-center shrink-0 p-2 shadow-2xs">
              <svg viewBox="0 0 24 24" className="w-full h-full text-brand-600" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18M5 21V9l7-5 7 5v12M9 13h2v4H9zM13 13h2v4h-2z" />
                <path d="M12 4v-2M10 2c0 1 1 2 2 2s2-1 2-2" strokeWidth="1.5" />
              </svg>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 leading-snug">
                Building a Home for Hope, Learning,<br className="hidden sm:inline" /> Care & Independence
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 flex items-center gap-1.5 mt-1 font-medium">
                <MapPin className="w-3.5 h-3.5 text-brand-600" />
                <span>Jinnaram, Telangana, India</span>
              </p>
              <p className="text-[11px] text-brand-800 font-semibold mt-1">
                Bhoomi Puja performed: 22 August 2026 • Construction in progress
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block md:col-span-1 h-12 w-px bg-brand-200/90 mx-auto" />

          {/* Right Side: Construction Progress */}
          <div className="md:col-span-5 space-y-2.5">
            <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-gray-800">
              <span className="flex items-center gap-1.5">
                <Sprout className="w-4 h-4 text-brand-600" />
                <span>Campus Construction in Progress</span>
              </span>
              <span className="text-xs text-brand-700 font-bold">Phase 1</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 rounded-full bg-[#d6e6d3] overflow-hidden p-0.5">
              <div
                className="h-full rounded-full bg-brand-600 transition-all duration-1000 ease-out"
                style={{ width: '70%' }}
              />
            </div>

            <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-brand-600" />
                <span>Target completion: 31 May 2027</span>
              </span>
              <span className="text-brand-800 text-[11px] font-semibold">
                Hostel: June 2027
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
