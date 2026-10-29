import React, { useEffect } from 'react';
import CategoryCard from '../components/CategoryCard';
import CTASection from '../components/CTASection';
import { SERVICES_DATA } from '../data/servicesData';
import { Sprout, Layers, ArrowRight, HeartHandshake, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CategoriesPage({ onOpenInquiry }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8faf8]">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-brand-100/70 via-brand-50/50 to-transparent py-14 lg:py-20 border-b border-brand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border-2 border-brand-300 text-xs font-bold text-brand-900 shadow-2xs mb-4">
            <Layers className="w-4 h-4 text-brand-700" />
            <span>Comprehensive Care Spectrum</span>
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-950 tracking-tight">
            Our Categories
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-700 font-medium max-w-2xl mx-auto leading-relaxed">
            Discover our eight specialized developmental, therapeutic, educational, and residential categories designed to support every dimension of your child's well-being.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-800 font-semibold">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-800" />
              Qualified Specialists & Educators
            </span>
            <span className="text-brand-300 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <HeartHandshake className="w-4 h-4 text-brand-800" />
              Safe Residential Home
            </span>
            <span className="text-brand-300 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <Sprout className="w-4 h-4 text-brand-800" />
              Child-Centered Growth
            </span>
          </div>
        </div>
      </section>

      {/* Categories Grid Section */}
      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((cat, idx) => (
              <CategoryCard
                key={cat.id}
                category={cat}
                onOpenInquiry={onOpenInquiry}
                dataAos="fade-up"
                dataAosDelay={`${(idx % 3) * 100}`}
              />
            ))}
          </div>

          {/* Detailed Navigation Banner */}
          <div className="mt-16 bg-white rounded-3xl p-8 border border-brand-100 shadow-soft flex flex-col md:flex-row items-center justify-between gap-6" data-aos="fade-up">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="font-display font-bold text-xl text-gray-900">
                Need more in-depth curriculum and therapy details?
              </h3>
              <p className="text-sm text-gray-600">
                Explore our full Services page featuring session formats, key benefits, and daily structure for every program.
              </p>
            </div>
            <Link
              to="/services"
              className="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-2xl shadow-sm transition inline-flex items-center gap-2 shrink-0 text-sm"
            >
              <span>Visit Detailed Services Page</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <CTASection onOpenInquiry={onOpenInquiry} />
    </div>
  );
}
