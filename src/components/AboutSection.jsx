import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sprout,
  Heart,
  CheckCircle2,
  BookOpen,
  MessageSquare,
  Sparkles,
  Home,
  Music,
  Activity,
  ArrowRight
} from 'lucide-react';

export default function AboutSection({ onOpenInquiry }) {
  const focusAreas = [
    { title: "Specialized Education", desc: "Adaptive curricula & IEPs aligned with cognitive strengths", icon: BookOpen },
    { title: "Targeted Therapies", desc: "Speech, Occupational, and Behavioural evidence-backed therapy", icon: Heart },
    { title: "Communication Development", desc: "Verbal articulation, AAC devices, and visual exchange support", icon: MessageSquare },
    { title: "Behavioural Support", desc: "Gentle positive reinforcement and emotional regulation", icon: Sparkles },
    { title: "Daily Living Skills", desc: "Personal grooming, meal routines, and home independence", icon: CheckCircle2 },
    { title: "Residential / Hostel Care", desc: "24/7 peaceful, safe, and sensory-friendly accommodations", icon: Home },
    { title: "Physical Movement", desc: "Adapted gymnastics, outdoor sensory garden walks, and fitness", icon: Activity },
    { title: "Music & Creative Activities", desc: "Rhythm therapy, xylophones, and sensory-soothing melodies", icon: Music },
  ];

  return (
    <section id="about" className="py-10 sm:py-16 lg:py-24 bg-white relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Layout on Desktop, Stacking on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual & Philosophy Card */}
          <div className="lg:col-span-5 order-2 lg:order-1" data-aos="fade-right">
            <div className="relative rounded-3xl bg-brand-50/70 border border-brand-100 p-6 sm:p-8 space-y-6">
              
              {/* Plant Metaphor Card */}
              <div className="bg-white rounded-2xl p-6 shadow-soft border border-brand-100 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-100 text-brand-600 flex items-center justify-center">
                  <Sprout className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900 leading-snug">
                  Why "Little Little Plant"?
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We believe every child is like a tender little plant. Each sprout requires its own sunlight, nourishing soil, and patient tending to flourish. With individualized care and gentle guidance, every child blossoms at their own natural pace.
                </p>
                <div className="pt-2 flex items-center gap-3 border-t border-gray-100 text-xs font-semibold text-brand-800">
                  <span className="w-2 h-2 rounded-full bg-brand-500" />
                  <span>Respecting every child's neurodiversity and pace</span>
                </div>
              </div>

              {/* Quick Facility Stat box */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-4 border border-brand-100 text-center shadow-2xs">
                  <p className="text-2xl font-bold font-display text-brand-600">8</p>
                  <p className="text-xs font-medium text-gray-600 mt-0.5">Integrated Programs</p>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-brand-100 text-center shadow-2xs">
                  <p className="text-2xl font-bold font-display text-brand-600">24/7</p>
                  <p className="text-xs font-medium text-gray-600 mt-0.5">Compassionate Care</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Introduction & Focus Areas */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6" data-aos="fade-left">
            
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
                About Our Home & School
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 leading-tight">
                A Welcoming Sanctuary for Learning, Therapy & Life Skills
              </h2>
            </div>

            <p className="text-base text-gray-600 leading-relaxed">
              <strong>Little Little Plant Autism Residential Home</strong> was created to offer families a dependable, transparent, and loving environment for children and youth on the autism spectrum. We combine round-the-clock residential warmth with certified clinical therapies and specialized education under one harmonious roof.
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Rather than a rigid institutional setting, our campus feels like a joyful, peaceful home. Here, children develop the vital tools to communicate, practice everyday self-care, engage in musical and physical play, and build cherished social bonds.
            </p>

            {/* 8 Focus Pillars Grid */}
            <div className="pt-2">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                Key Pillars of Our Comprehensive Support:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {focusAreas.map((area, idx) => {
                  const Icon = area.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-brand-50/40 hover:bg-brand-50 border border-brand-100/60 transition"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white text-brand-600 border border-brand-200 flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-gray-900">{area.title}</h5>
                        <p className="text-[11px] text-gray-500 leading-tight mt-0.5">{area.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/categories"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl text-sm shadow-sm transition"
              >
                <span>View Our Categories</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                type="button"
                onClick={() => onOpenInquiry()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-50 hover:bg-brand-100 text-brand-800 font-semibold rounded-xl text-sm border border-brand-200 transition"
              >
                <span>Speak with an Admissions Guide</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
