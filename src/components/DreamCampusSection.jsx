import React from 'react';
import { BookOpen, Heart, Users, Home, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DreamCampusSection({ onOpenInquiry }) {
  const campusFeatures = [
    { title: "Learning Spaces", icon: BookOpen },
    { title: "Therapy Rooms", icon: Heart },
    { title: "Activity Areas", icon: Users },
    { title: "Residential Facilities", icon: Home },
  ];

  return (
    <section id="campus" className="py-10 sm:py-16 lg:py-20 bg-white relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Landscape Campus Courtyard Photo */}
          <div className="lg:col-span-6" data-aos="fade-right">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-soft border-4 border-white bg-brand-50">
              <img
                src="/images/dream-campus.jpg"
                alt="Our Dream Campus - landscaped green courtyard with single-story modern residential home and walkways"
                className="w-full h-[280px] sm:h-[360px] lg:h-[390px] object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold text-brand-700 shadow-2xs border border-brand-200">
                🌱 Jinnaram Campus, Telangana
              </div>
            </div>
          </div>

          {/* Right Column: Text & 4 Micro-Icons */}
          <div className="lg:col-span-6 space-y-6" data-aos="fade-left">
            
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-brand-800 tracking-tight">
              Our Dream Campus
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              We are building a safe, inclusive and nurturing campus with modern learning spaces, therapy rooms, activity areas and residential facilities — designed to support every child's unique journey towards independence.
            </p>

            {/* 4 Feature Micro-Indicators matching reference UI */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {campusFeatures.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div key={idx} className="text-center space-y-2 p-2 rounded-xl hover:bg-brand-50/50 transition">
                    <div className="w-12 h-12 rounded-xl border border-brand-300 text-brand-700 flex items-center justify-center mx-auto shadow-2xs bg-white">
                      <Icon className="w-5 h-5" strokeWidth={1.7} />
                    </div>
                    <span className="text-xs font-bold text-gray-800 block leading-tight">
                      {feat.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenInquiry && onOpenInquiry("Campus Tour / Residential Inquiry")}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-full text-sm shadow-xs transition"
              >
                <span>Schedule a Campus Walkthrough</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
