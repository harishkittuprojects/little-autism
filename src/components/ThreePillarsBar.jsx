import React from 'react';
import { UserCheck, Users, Sprout } from 'lucide-react';

export default function ThreePillarsBar() {
  const pillars = [
    {
      title: "Individualized Learning",
      subtitle: "Each child. Their pace. Their potential.",
      icon: (
        <div className="w-12 h-12 rounded-full border-2 border-brand-400 text-brand-700 flex items-center justify-center shrink-0 bg-white">
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-brand-700" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
      )
    },
    {
      title: "Therapy & Life Skills",
      subtitle: "Build skills for everyday life.",
      icon: (
        <div className="w-12 h-12 flex items-center justify-center shrink-0 text-brand-700">
          <svg viewBox="0 0 24 24" className="w-9 h-9 text-brand-700" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            {/* Two hands holding sprout */}
            <path d="M12 2a4 4 0 0 1 4 4c0 3-4 6-4 6s-4-3-4-6a4 4 0 0 1 4-4z" />
            <path d="M12 12v6" />
            <path d="M6 18c0-3 3-5 6-5s6 2 6 5" />
            <path d="M4 22h16" />
          </svg>
        </div>
      )
    },
    {
      title: "Family Collaboration",
      subtitle: "Stronger together for lasting progress.",
      icon: (
        <div className="w-12 h-12 flex items-center justify-center shrink-0 text-brand-700">
          <svg viewBox="0 0 24 24" className="w-9 h-9 text-brand-700" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>
      )
    }
  ];

  return (
    <section className="bg-white py-4 sm:py-6 border-y border-brand-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-brand-100">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-3.5 sm:gap-4 py-3 md:py-0 ${
                idx === 0 ? 'md:pr-8' : idx === 1 ? 'md:px-8' : 'md:pl-8'
              }`}
              data-aos="fade-up"
              data-aos-delay={`${idx * 80}`}
            >
              {pillar.icon}
              <div className="min-w-0">
                <h3 className="font-display font-bold text-sm sm:text-base text-gray-900 leading-tight">
                  {pillar.title}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5 leading-normal">
                  {pillar.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
