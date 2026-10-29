import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, BookOpen, HeartHandshake, Home, ArrowRight, Activity, Music, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

export default function DiscoverAbilitiesSection({ onOpenInquiry }) {
  const [showAllServices, setShowAllServices] = useState(false);

  // The 4 prominent cards from reference UI
  const referenceCards = [
    {
      id: "speech-therapy",
      title: "Speech & Communication",
      desc: "Build confidence, express needs and connect with the world.",
      icon: (
        <div className="w-14 h-14 rounded-full border-2 border-brand-500 text-brand-800 bg-white flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-700 group-hover:text-white group-hover:border-brand-700 group-hover:scale-105 transition-all shadow-2xs">
          <MessageSquare className="w-6 h-6" strokeWidth={2} />
        </div>
      )
    },
    {
      id: "special-education",
      title: "Special Education",
      desc: "Individualized learning plans for meaningful academic and life progress.",
      icon: (
        <div className="w-14 h-14 rounded-full border-2 border-brand-500 text-brand-800 bg-white flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-700 group-hover:text-white group-hover:border-brand-700 group-hover:scale-105 transition-all shadow-2xs">
          <BookOpen className="w-6 h-6" strokeWidth={2} />
        </div>
      )
    },
    {
      id: "occupational-therapy",
      title: "Occupational & Behaviour Support",
      desc: "Develop focus, reduce challenges, build positive behaviours.",
      icon: (
        <div className="w-14 h-14 rounded-full border-2 border-brand-500 text-brand-800 bg-white flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-700 group-hover:text-white group-hover:border-brand-700 group-hover:scale-105 transition-all shadow-2xs">
          <HeartHandshake className="w-6 h-6" strokeWidth={2} />
        </div>
      )
    },
    {
      id: "daily-living",
      title: "Daily Living Skills",
      desc: "Build independence for a more confident future.",
      icon: (
        <div className="w-14 h-14 rounded-full border-2 border-brand-500 text-brand-800 bg-white flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-700 group-hover:text-white group-hover:border-brand-700 group-hover:scale-105 transition-all shadow-2xs">
          <Home className="w-6 h-6" strokeWidth={2} />
        </div>
      )
    }
  ];

  // Additional services from the 8 full categories
  const additionalCards = SERVICES_DATA.filter(
    s => !['speech-therapy', 'special-education', 'occupational-therapy', 'daily-living'].includes(s.id)
  );

  return (
    <section id="categories" className="py-14 lg:py-20 bg-white relative overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      
      {/* Decorative leaf watermarks on left and right matching reference UI */}
      <div className="absolute left-4 top-12 pointer-events-none opacity-60 hidden md:block">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M10 30 C 5 20, 15 5, 30 5 C 30 20, 20 30, 10 30 Z" fill="#388b43" />
          <path d="M15 35 C 10 28, 20 18, 35 15 C 32 28, 25 35, 15 35 Z" fill="#1a5323" />
        </svg>
      </div>
      <div className="absolute right-4 top-12 pointer-events-none opacity-60 hidden md:block">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="transform scale-x-[-1]">
          <path d="M10 30 C 5 20, 15 5, 30 5 C 30 20, 20 30, 10 30 Z" fill="#388b43" />
          <path d="M15 35 C 10 28, 20 18, 35 15 C 32 28, 25 35, 15 35 Z" fill="#1a5323" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching reference UI */}
        <div className="text-center max-w-2xl mx-auto mb-12" data-aos="fade-up">
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-950 tracking-tight">
            Discover Abilities. Nurture Talents.
          </h2>
          <div className="w-12 h-1 bg-brand-700 rounded-full mx-auto mt-3" />
        </div>

        {/* 4 Cards Grid from Reference UI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {referenceCards.map((card, idx) => (
            <div
              key={card.id}
              data-aos="fade-up"
              data-aos-delay={`${idx * 80}`}
              className="group bg-[#ecf4ec] hover:bg-white rounded-2xl p-6 sm:p-7 border-2 border-brand-300/80 hover:border-brand-700 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5 flex flex-col justify-start"
            >
              <div>
                {card.icon}
                <h3 className="font-display font-bold text-base sm:text-lg text-gray-950 group-hover:text-brand-900 mb-2 leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
