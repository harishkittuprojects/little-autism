import React from 'react';
import { WHY_CHOOSE_US } from '../data/servicesData';
import IconHelper from './IconHelper';
import { ShieldCheck, Sparkles, Heart } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-brand-50/40 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
            Trusted by Parents & Guardians
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 mt-3 leading-tight">
            Why Choose Little Little Plant?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            We provide a peaceful, structured, and compassionate environment where every child feels respected, understood, and motivated to achieve their personal best.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={`${idx * 80}`}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-brand-100/90 shadow-soft hover:shadow-soft-hover transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center mb-5 shadow-2xs">
                  <IconHelper name={item.icon} className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-gray-900 mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-semibold text-brand-700">
                <Sparkles className="w-3.5 h-3.5 text-brand-500" />
                <span>Child-Centered Approach</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
