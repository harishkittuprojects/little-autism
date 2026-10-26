import React from 'react';
import { UserCheck, Users, Sprout } from 'lucide-react';

export default function ThreePillarsBar() {
  const pillars = [
    {
      title: "Individualized Learning",
      subtitle: "Each child. Their pace. Their potential.",
      icon: (
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-brand-300 text-brand-700 flex items-center justify-center shrink-0 bg-brand-50/50">
          <UserCheck className="w-5 h-5 text-brand-700" />
        </div>
      )
    },
    {
      title: "Therapy & Life Skills",
      subtitle: "Build skills for everyday life.",
      icon: (
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-brand-300 text-brand-700 flex items-center justify-center shrink-0 bg-brand-50/50">
          <Sprout className="w-5 h-5 text-brand-600" />
        </div>
      )
    },
    {
      title: "Family Collaboration",
      subtitle: "Stronger together for lasting progress.",
      icon: (
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-brand-300 text-brand-700 flex items-center justify-center shrink-0 bg-brand-50/50">
          <Users className="w-5 h-5 text-brand-600" />
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
