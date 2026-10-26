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
            <div className="relative rounded-2xl overflow-hidden shadow-soft border border-brand-100 bg-brand-50">
              <img
                src="/images/dream-campus.jpg"
                alt="Our Dream Campus - landscaped green courtyard with modern residential home and walkways"
                className="w-full h-[280px] sm:h-[350px] lg:h-[380px] object-cover hover:scale-103 transition-transform duration-700"
                loading="lazy"
              />
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
            <div className="grid grid-cols-4 gap-2 sm:gap-4 pt-3">
              {campusFeatures.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div key={idx} className="text-center space-y-2">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mx-auto text-brand-700">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.7} />
                    </div>
                    <span className="text-xs font-semibold text-gray-800 block leading-tight">
                      {feat.title}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
