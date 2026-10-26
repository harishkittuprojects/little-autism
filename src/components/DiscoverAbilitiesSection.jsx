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
        <div className="w-14 h-14 rounded-full border border-brand-300 text-brand-700 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-50 group-hover:scale-105 transition-all">
          <MessageSquare className="w-6 h-6" strokeWidth={1.7} />
        </div>
      )
    },
    {
      id: "special-education",
      title: "Special Education",
      desc: "Individualized learning plans for meaningful academic and life progress.",
      icon: (
        <div className="w-14 h-14 rounded-full border border-brand-300 text-brand-700 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-50 group-hover:scale-105 transition-all">
          <BookOpen className="w-6 h-6" strokeWidth={1.7} />
        </div>
      )
    },
    {
      id: "occupational-therapy",
      title: "Occupational & Behaviour Support",
      desc: "Develop focus, reduce challenges, build positive behaviours.",
      icon: (
        <div className="w-14 h-14 rounded-full border border-brand-300 text-brand-700 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-50 group-hover:scale-105 transition-all">
          <HeartHandshake className="w-6 h-6" strokeWidth={1.7} />
        </div>
      )
    },
    {
      id: "daily-living",
      title: "Daily Living Skills",
      desc: "Build independence for a more confident future.",
      icon: (
        <div className="w-14 h-14 rounded-full border border-brand-300 text-brand-700 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-50 group-hover:scale-105 transition-all">
          <Home className="w-6 h-6" strokeWidth={1.7} />
        </div>
      )
    }
  ];

  // Additional services from the 8 full categories
  const additionalCards = SERVICES_DATA.filter(
    s => !['speech-therapy', 'special-education', 'occupational-therapy', 'daily-living'].includes(s.id)
  );

  return (
    <section className="py-14 lg:py-20 bg-white relative overflow-hidden">
      
      {/* Decorative leaf watermarks on left and right matching reference UI */}
      <div className="absolute left-4 top-12 pointer-events-none opacity-40 hidden md:block">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M10 30 C 5 20, 15 5, 30 5 C 30 20, 20 30, 10 30 Z" fill="#7fa86b" />
          <path d="M15 35 C 10 28, 20 18, 35 15 C 32 28, 25 35, 15 35 Z" fill="#557b42" />
        </svg>
      </div>
      <div className="absolute right-4 top-12 pointer-events-none opacity-40 hidden md:block">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="transform scale-x-[-1]">
          <path d="M10 30 C 5 20, 15 5, 30 5 C 30 20, 20 30, 10 30 Z" fill="#7fa86b" />
          <path d="M15 35 C 10 28, 20 18, 35 15 C 32 28, 25 35, 15 35 Z" fill="#557b42" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching reference UI */}
        <div className="text-center max-w-2xl mx-auto mb-12" data-aos="fade-up">
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 tracking-tight">
            Discover Abilities. Nurture Talents.
          </h2>
          <div className="w-12 h-1 bg-brand-600 rounded-full mx-auto mt-3" />
        </div>

        {/* 4 Cards Grid from Reference UI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {referenceCards.map((card, idx) => (
            <div
              key={card.id}
              data-aos="fade-up"
              data-aos-delay={`${idx * 80}`}
              className="group bg-[#f7faf6] hover:bg-white rounded-2xl p-6 sm:p-7 border border-brand-200/70 hover:border-brand-400 text-center transition-all duration-300 hover:shadow-soft hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {card.icon}
                <h3 className="font-display font-bold text-base sm:text-lg text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="mt-5 pt-3">
                <Link
                  to={`/services#${card.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700 hover:text-brand-900 group-hover:underline"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Expandable Section for Remaining 4 Services */}
        {showAllServices && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 animate-in fade-in duration-300">
            {additionalCards.map((service, idx) => (
              <div
                key={service.id}
                className="group bg-[#f7faf6] hover:bg-white rounded-2xl p-6 sm:p-7 border border-brand-200/70 hover:border-brand-400 text-center transition-all duration-300 hover:shadow-soft hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-full border border-brand-300 text-brand-700 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-50 group-hover:scale-105 transition-all">
                    {service.id === 'hostel-facilities' && <Home className="w-6 h-6" />}
                    {service.id === 'physical-activities' && <Activity className="w-6 h-6" />}
                    {service.id === 'music-therapy' && <Music className="w-6 h-6" />}
                    {service.id === 'behaviour-therapy' && <Sparkles className="w-6 h-6" />}
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-gray-900 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="mt-5 pt-3">
                  <Link
                    to={`/services#${service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700 hover:text-brand-900 group-hover:underline"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Toggle / View All Button */}
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setShowAllServices(!showAllServices)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-brand-50 text-brand-800 text-xs sm:text-sm font-semibold border border-brand-300 shadow-2xs hover:border-brand-500 transition"
          >
            <span>{showAllServices ? 'Show Less Programs' : 'View All 8 Core Programs (Hostel, Music & Sports)'}</span>
            <ArrowRight className={`w-3.5 h-3.5 transform transition-transform ${showAllServices ? '-rotate-90' : 'rotate-90'}`} />
          </button>
        </div>

      </div>
    </section>
  );
}
