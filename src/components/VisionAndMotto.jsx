import React from 'react';
import { HIDDEN_TALENTS } from '../data/servicesData';
import { Sparkles, Heart, Sprout, ArrowRight, Music, Activity, Palette, Sun, Award, Quote } from 'lucide-react';
import IconHelper from './IconHelper';

export default function VisionAndMotto({ onOpenInquiry }) {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. Vision & Powerful Motto Banner */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#edf5ec] via-[#f7faf6] to-white border border-brand-200/90 p-8 sm:p-12 shadow-soft overflow-hidden" data-aos="fade-up">
          
          {/* Subtle background sprout watermark */}
          <div className="absolute right-0 bottom-0 pointer-events-none opacity-10">
            <svg width="220" height="220" viewBox="0 0 100 100" fill="currentColor" className="text-brand-900">
              <path d="M50 80 C 40 50, 20 50, 10 30 C 35 25, 45 45, 50 80 Z" />
              <path d="M50 80 C 60 45, 80 40, 90 20 C 65 25, 55 45, 50 80 Z" />
            </svg>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-brand-200 text-xs font-bold text-brand-800 shadow-2xs">
              <Sparkles className="w-4 h-4 text-brand-600" />
              <span>Our Vision — Beyond Disabilities, Discovering Abilities</span>
            </div>

            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 leading-tight">
              A Disability Does Not Define a Child’s Future
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
              At <strong>Little Plant Autism Educational Academy</strong>, we believe that every child is unique and has their own strengths, hidden talents, abilities, and potential. Our mission is to discover each child’s individual talents, nurture their abilities, improve essential life skills, and help them reach their fullest potential.
            </p>

            {/* The Official Academy Motto Card */}
            <div className="my-6 bg-white rounded-2xl p-6 sm:p-8 border border-brand-300 shadow-2xs relative">
              <Quote className="w-8 h-8 text-brand-300 absolute top-4 left-4 -scale-x-100 opacity-60" />
              <div className="space-y-3 relative z-10">
                <p className="font-display font-extrabold text-base sm:text-xl md:text-2xl text-brand-800 tracking-tight leading-snug">
                  “Don't Focus Only on the Disability. Discover the Ability. Nurture the Talent. Empower the Child.”
                </p>
                <p className="text-xs sm:text-sm font-bold text-brand-600 uppercase tracking-widest">
                  — Every Child Deserves a Chance to Shine!
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto">
              We strive to create an inclusive, caring, and supportive environment where every child is valued, every ability is encouraged, and every achievement matters.
            </p>

          </div>
        </div>

        {/* 2. Discovering Hidden Talents & Approach */}
        <div className="space-y-8" data-aos="fade-up">
          
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
              Unlocking Potential
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 mt-3">
              Discovering Hidden Talents
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
              Every child has something special to offer. Our approach is to observe each child, understand their interests, identify their strengths, and create opportunities for them to learn, explore, participate, and grow.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {HIDDEN_TALENTS.map((talent, idx) => (
              <div
                key={idx}
                className="bg-[#f7faf6] hover:bg-white rounded-2xl p-4 text-center border border-brand-200/70 hover:border-brand-400 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-white border border-brand-200 text-brand-700 flex items-center justify-center mx-auto shadow-2xs mb-2">
                    <IconHelper name={talent.icon} className="w-5 h-5 text-brand-600" />
                  </div>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-gray-900 leading-tight">
                    {talent.name}
                  </h4>
                </div>
                <p className="text-[11px] text-gray-500 leading-tight">
                  {talent.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* 3. Our Commitment to Parents */}
        <div className="bg-[#edf5ec] rounded-3xl p-7 sm:p-10 border border-brand-200 shadow-2xs" data-aos="fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-800 bg-white px-3 py-1 rounded-full border border-brand-200 inline-block">
                Partners in Every Milestone
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-gray-900 leading-snug">
                Our Commitment to Parents & Families
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                We work towards improving each child’s functional skills, communication, learning abilities, social participation, positive behaviour, physical development, and independence through individualized developmental goals and family collaboration.
              </p>
              <p className="text-xs sm:text-sm text-brand-900 font-medium">
                We aim to help parents recognize not only the challenges their children face but also the abilities, achievements, and possibilities that make each child special.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                type="button"
                onClick={() => onOpenInquiry && onOpenInquiry("Parent Consultation")}
                className="w-full py-3 px-5 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-full text-xs sm:text-sm shadow-xs transition text-center"
              >
                Schedule Family Consultation
              </button>
              <button
                type="button"
                onClick={() => onOpenInquiry && onOpenInquiry("Campus Visit")}
                className="w-full py-3 px-5 bg-white hover:bg-brand-50 text-brand-800 font-semibold rounded-full border border-brand-300 text-xs sm:text-sm transition text-center"
              >
                Book Campus Visit
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
