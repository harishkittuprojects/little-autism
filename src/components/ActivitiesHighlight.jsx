import React from 'react';
import { Link } from 'react-router-dom';
import { ACTIVITIES_GALLERY } from '../data/servicesData';
import { Sparkles, Music, Activity, BookOpen, Heart, ArrowRight } from 'lucide-react';

export default function ActivitiesHighlight({ onOpenInquiry }) {
  const activityBadges = [
    { label: "Speech & Play Therapy", icon: Heart },
    { label: "Special Education Classes", icon: BookOpen },
    { label: "Music & Rhythm Sessions", icon: Music },
    { label: "Adapted Sports & Movement", icon: Activity },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12" data-aos="fade-up">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
              Enriching Daily Life
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 mt-3 leading-tight">
              Joyful Activities & Holistic Growth
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
              Every day at Little Little Plant is thoughtfully balanced between clinical therapies, educational breakthroughs, active movement, and relaxing creative activities.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              to="/categories"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-800 transition group"
            >
              <span>Explore all categories</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Activity Pills */}
        <div className="flex flex-wrap gap-2.5 mb-10" data-aos="fade-up" data-aos-delay="100">
          {activityBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50/80 border border-brand-200/80 text-xs font-semibold text-brand-800 shadow-2xs"
              >
                <Icon className="w-3.5 h-3.5 text-brand-600" />
                <span>{badge.label}</span>
              </div>
            );
          })}
        </div>

        {/* 3 Visual Cards Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACTIVITIES_GALLERY.map((act, index) => (
            <div
              key={act.id}
              data-aos="zoom-in"
              data-aos-delay={`${index * 120}`}
              className="group bg-white rounded-3xl overflow-hidden border border-brand-100 shadow-soft hover:shadow-soft-hover transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with smooth hover zoom */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-brand-50">
                  <img
                    src={act.image}
                    alt={act.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-brand-700 shadow-2xs border border-brand-100">
                    {act.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-1.5 mb-2.5">
                    {act.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[11px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-brand-700 transition-colors mb-2">
                    {act.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {act.description}
                  </p>
                </div>
              </div>

              {/* Bottom Inquire link */}
              <div className="px-6 pb-6 pt-2 border-t border-gray-100 flex items-center justify-between">
                <Link
                  to="/services"
                  className="text-xs font-semibold text-brand-600 hover:text-brand-800 transition"
                >
                  View Details
                </Link>
                <button
                  type="button"
                  onClick={() => onOpenInquiry && onOpenInquiry(act.title)}
                  className="text-xs font-medium text-gray-500 hover:text-brand-600"
                >
                  Ask Questions
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
