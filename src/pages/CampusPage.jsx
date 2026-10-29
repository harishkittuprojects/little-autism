import React, { useEffect } from 'react';
import CampusProgressCard from '../components/CampusProgressCard';
import DreamCampusSection from '../components/DreamCampusSection';
import RegistrationsAndCSR from '../components/RegistrationsAndCSR';
import CTASection from '../components/CTASection';
import { Building2, MapPin, Calendar, ShieldCheck, HeartHandshake, Trees, Sparkles, Home } from 'lucide-react';

export default function CampusPage({ onOpenInquiry }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const campusHighlights = [
    {
      title: "Sensory-Calming Architecture",
      desc: "Designed with gentle natural lighting, acoustic dampening, and safe soft-cornered rooms.",
      icon: Sparkles
    },
    {
      title: "Outdoor Sensory Courtyard",
      desc: "Expansive green walkways, touch gardens, and outdoor activity spaces for peaceful recreation.",
      icon: Trees
    },
    {
      title: "24/7 Residential Care Home",
      desc: "Warm, supportive boarding suites supervised round-the-clock by trained caregivers.",
      icon: Home
    },
    {
      title: "Integrated Clinical Therapy Suites",
      desc: "Equipped with AAC tools, swing frames, sensory mats, and speech articulation stations.",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8faf8]">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-brand-100/70 via-brand-50/50 to-transparent py-14 lg:py-20 border-b border-brand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border-2 border-brand-300 text-xs font-bold text-brand-900 shadow-2xs mb-4">
            <Building2 className="w-4 h-4 text-brand-700" />
            <span>Permanent Campus Project</span>
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-950 tracking-tight">
            Our Dream Campus — Jinnaram
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-700 font-medium max-w-2xl mx-auto leading-relaxed">
            Building a safe, world-class residential sanctuary with personalized learning spaces, therapy suites, and life-skills environments.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-800 font-semibold">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-brand-800" />
              Jinnaram, Sangareddy Dist, Telangana
            </span>
            <span className="text-brand-300 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-brand-800" />
              Completion Target: 31 May 2027
            </span>
            <span className="text-brand-300 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <HeartHandshake className="w-4 h-4 text-brand-800" />
              80G & CSR-1 Certified
            </span>
          </div>
        </div>
      </section>

      {/* Campus Construction Progress Card */}
      <div className="py-4">
        <CampusProgressCard />
      </div>

      {/* Dream Campus Architecture & Courtyard */}
      <DreamCampusSection onOpenInquiry={onOpenInquiry} />

      {/* 4 Feature Highlights Grid */}
      <section className="py-12 bg-white border-y border-brand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-950">
              Campus Facilities Designed for Neurodivergent Needs
            </h2>
            <div className="w-12 h-1 bg-brand-700 rounded-full mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {campusHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#ecf4ec] rounded-2xl p-6 border-2 border-brand-200 hover:border-brand-700 transition-all shadow-sm hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white border-2 border-brand-300 text-brand-800 flex items-center justify-center mb-4 shadow-2xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-base text-gray-950 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-700 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Registrations, CSR & Donations Info */}
      <RegistrationsAndCSR onOpenInquiry={onOpenInquiry} />

      {/* Call To Action Banner */}
      <CTASection onOpenInquiry={onOpenInquiry} />
    </div>
  );
}
