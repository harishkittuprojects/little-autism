import React from 'react';
import { CHILDREN_WE_SUPPORT } from '../data/servicesData';
import { Users, Heart, ArrowRight, Calendar, Info } from 'lucide-react';

export default function ChildrenWeSupport({ onOpenInquiry }) {
  return (
    <section
      id="children-we-support"
      className="py-10 sm:py-16 lg:py-24 bg-[#fbfdfa] border-y border-brand-100/80 relative scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-xs font-semibold text-brand-800 shadow-2xs mb-3">
            <Users className="w-3.5 h-3.5 text-brand-600" />
            <span>Little Plant Autism Educational Academy</span>
          </div>

          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 tracking-tight leading-tight">
            Children We Support
          </h2>

          <div className="w-12 h-1 bg-brand-600 rounded-full mx-auto mt-2.5 mb-3.5" />

          <p className="text-xs sm:text-base text-gray-600 leading-relaxed px-2">
            We welcome children with diverse developmental and special educational needs, providing individualized care based on each child's strengths, challenges, interests, and learning requirements.
          </p>
        </div>

        {/* Essential Eligibility & Goal Highlight Strip (Clean Mobile Stacked Layout) */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-brand-200/90 shadow-2xs mb-8 sm:mb-10" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 divide-y md:divide-y-0 md:divide-x divide-brand-100">
            
            {/* Age Group */}
            <div className="flex items-start gap-3.5 pt-1 pb-4 md:py-0">
              <div className="w-11 h-11 rounded-2xl bg-brand-50 border border-brand-200 text-brand-700 flex items-center justify-center shrink-0 shadow-2xs">
                <Calendar className="w-5 h-5 text-brand-600" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Age Group</h3>
                <p className="text-sm sm:text-base font-bold text-gray-900 mt-0.5">
                  Children aged 3–18 years
                </p>
                <p className="text-xs text-gray-500 mt-0.5 leading-snug">
                  Subject to individual assessment & service suitability
                </p>
              </div>
            </div>

            {/* Our Goal */}
            <div className="flex items-start gap-3.5 pt-4 pb-4 md:py-0 md:px-6">
              <div className="w-11 h-11 rounded-2xl bg-brand-50 border border-brand-200 text-brand-700 flex items-center justify-center shrink-0 shadow-2xs">
                <Heart className="w-5 h-5 text-brand-600" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Our Goal</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                  To support every child through individualized therapy, special education, communication, daily living skills, physical activities, and independent living.
                </p>
              </div>
            </div>

            {/* Admissions & Hostel */}
            <div className="flex items-start gap-3.5 pt-4 md:py-0 md:pl-6">
              <div className="w-11 h-11 rounded-2xl bg-brand-50 border border-brand-200 text-brand-700 flex items-center justify-center shrink-0 shadow-2xs">
                <Info className="w-5 h-5 text-brand-600" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Admissions & Hostel</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                  Eligibility is determined based on the child's individual needs and available services at our academy.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* 12 Conditions Grid (Single Column on Mobile, 2 on Tablet, 3-4 on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {CHILDREN_WE_SUPPORT.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={`${(index % 4) * 50}`}
              className="group bg-white rounded-2xl p-5 border border-brand-200/80 hover:border-brand-400 shadow-2xs hover:shadow-soft transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Badge Row */}
                <div className="flex items-center justify-between mb-3.5">
                  <span className="w-7 h-7 rounded-lg bg-brand-50 text-brand-800 font-bold text-xs flex items-center justify-center border border-brand-200">
                    {index + 1}
                  </span>
                  <span className="text-[10px] font-semibold text-brand-800 bg-[#edf5ec] px-2.5 py-0.5 rounded-full border border-brand-200/60">
                    {item.category}
                  </span>
                </div>

                {/* Condition Name */}
                <h3 className="font-display font-bold text-base text-gray-900 group-hover:text-brand-800 transition-colors mb-2 leading-snug">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Inquire Touch Target */}
              <div className="mt-4 pt-3.5 border-t border-gray-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onOpenInquiry && onOpenInquiry(`Inquiry for ${item.name}`)}
                  className="text-xs font-semibold text-brand-700 hover:text-brand-900 flex items-center gap-1.5 py-1"
                >
                  <span>Inquire for support</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-8 sm:mt-12 bg-white rounded-2xl p-5 sm:p-6 border border-brand-200/90 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-display font-bold text-sm sm:text-base text-gray-900">
              Is your child's condition not listed or diagnosed yet?
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              We provide friendly developmental screening and guidance for all developmental and special educational needs.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenInquiry && onOpenInquiry("Developmental Assessment")}
            className="w-full sm:w-auto px-6 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-full text-xs sm:text-sm shadow-xs shrink-0 transition"
          >
            Request Child Assessment
          </button>
        </div>

      </div>
    </section>
  );
}
