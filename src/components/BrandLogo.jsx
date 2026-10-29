import React from 'react';

export default function BrandLogo({ className = "", showLocation = false, iconOnly = false, isDark = false }) {
  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      {/* Official Academy Logo Image */}
      <div className="relative shrink-0 flex items-center justify-center">
        <img
          src="/images/logo.png"
          alt="Little Plant Autism Educational Academy Emblem"
          className="h-9 sm:h-11 w-auto max-w-[42px] sm:max-w-[50px] object-contain transform hover:scale-105 transition-transform"
        />
      </div>

      {!iconOnly && (
        <div className="flex flex-col text-left min-w-0">
          <div className="flex items-center gap-1">
            <span className={`font-display font-bold text-base sm:text-xl tracking-tight leading-none ${isDark ? 'text-white' : 'text-gray-950'}`}>
              little <span className={`font-serif italic font-normal ${isDark ? 'text-brand-300' : 'text-brand-700'}`}>Plant</span>
            </span>
            <span className="inline-block w-2 h-2 rounded-full bg-brand-500 mb-1.5 shrink-0"></span>
          </div>
          <span className={`text-[9.5px] sm:text-[11px] font-bold tracking-tight leading-tight mt-0.5 truncate max-w-[210px] xs:max-w-[260px] sm:max-w-none ${isDark ? 'text-brand-200' : 'text-brand-900'}`}>
            Autism Residential Home
          </span>
          {showLocation && (
            <span className={`text-[9px] flex items-center gap-1 mt-0.5 ${isDark ? 'text-brand-300' : 'text-gray-700 font-medium'}`}>
              <span>📍 Jinnaram, Telangana, India</span>
            </span>
          )}
        </div>
      )}
    </div>
  );
}
