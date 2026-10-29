import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SERVICES_DATA } from '../data/servicesData';
import IconHelper from '../components/IconHelper';
import CTASection from '../components/CTASection';
import {
  CheckCircle2,
  Calendar,
  Users,
  HeartHandshake,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  PhoneCall,
  Search
} from 'lucide-react';

export default function ServicesPage({ onOpenInquiry }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  // Scroll to hash on load or filter
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const filterTabs = [
    'All',
    'Therapy',
    'Education & Life Skills',
    'Residential & Activities'
  ];

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesTab = activeFilter === 'All' || service.categoryGroup === activeFilter;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f8faf8]">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-brand-100/70 via-brand-50/50 to-transparent py-14 lg:py-20 border-b border-brand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <span className="text-xs font-extrabold uppercase tracking-wider text-brand-900 bg-white px-4 py-1.5 rounded-full border-2 border-brand-300 shadow-2xs">
            Individualized Care & Therapy
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-950 mt-4 tracking-tight">
            Our Services
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-700 font-medium max-w-2xl mx-auto leading-relaxed">
            Detailed information on each of our eight specialized educational, therapeutic, daily living, and residential programs designed to support your child's confidence and progress.
          </p>

          {/* Interactive Filter and Search Bar */}
          <div className="mt-8 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 bg-white p-1.5 rounded-2xl border-2 border-brand-200 shadow-2xs">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveFilter(tab)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeFilter === tab
                      ? 'bg-brand-700 text-white shadow-sm'
                      : 'text-gray-800 hover:text-brand-800 hover:bg-brand-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Quick Search */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-brand-700 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2 rounded-2xl border-2 border-brand-200 text-xs sm:text-sm bg-white text-gray-900 outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-600 font-medium placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Detailed List Section */}
      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          
          {filteredServices.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border-2 border-brand-200 p-8 shadow-sm">
              <p className="text-gray-800 font-semibold text-sm">No services matched your search term.</p>
              <button
                onClick={() => { setActiveFilter('All'); setSearchQuery(''); }}
                className="mt-3 text-xs font-bold text-brand-800 hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredServices.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                data-aos="fade-up"
                className="scroll-mt-24 sm:scroll-mt-28 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 border-2 border-brand-200 hover:border-brand-700 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Number Watermark background */}
                <span className="absolute top-4 right-8 font-display font-extrabold text-7xl text-brand-100/60 select-none pointer-events-none -z-0">
                  {service.number}
                </span>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Title, Intro & Meta */}
                  <div className="lg:col-span-7 space-y-5">
                    
                    {/* Header tags */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <div className="w-12 h-12 rounded-2xl bg-brand-100 border-2 border-brand-300 text-brand-800 flex items-center justify-center shadow-2xs">
                        <IconHelper name={service.iconName} className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-extrabold text-brand-800 uppercase tracking-wider block">
                          {service.badge}
                        </span>
                        <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-950 leading-tight">
                          {service.name}
                        </h2>
                      </div>
                    </div>

                    {/* Short Intro */}
                    <p className="text-sm sm:text-base font-semibold text-brand-950 bg-brand-100/70 p-3.5 rounded-xl border border-brand-200">
                      {service.shortDescription}
                    </p>

                    {/* Full Description */}
                    <p className="text-sm text-gray-700 font-medium leading-relaxed">
                      {service.description}
                    </p>

                    {/* Details badges */}
                    <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                      <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#ecf4ec] border border-brand-200">
                        <Users className="w-4 h-4 text-brand-800 shrink-0" />
                        <div>
                          <span className="text-gray-600 block text-[10px] font-bold uppercase">Age Range</span>
                          <span className="font-bold text-gray-950">{service.ageGroup}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#ecf4ec] border border-brand-200">
                        <Clock className="w-4 h-4 text-brand-800 shrink-0" />
                        <div>
                          <span className="text-gray-600 block text-[10px] font-bold uppercase">Session Format</span>
                          <span className="font-bold text-gray-950">{service.sessionFormat}</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Key Features / Benefits Box */}
                  <div className="lg:col-span-5 bg-[#ecf4ec] rounded-2xl p-6 border-2 border-brand-200/90 space-y-4">
                    <h3 className="font-display font-bold text-sm text-gray-950 uppercase tracking-wider flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-brand-800" />
                      <span>Key Features & Benefits</span>
                    </h3>

                    <ul className="space-y-3">
                      {service.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-800 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                          <span className="leading-snug">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Action button inside card */}
                    <div className="pt-3 border-t border-brand-200 flex flex-col sm:flex-row items-center gap-3">
                      <button
                        type="button"
                        onClick={() => onOpenInquiry(service.name)}
                        className="w-full sm:flex-1 py-3 px-4 bg-brand-700 hover:bg-brand-800 text-white font-bold rounded-xl text-xs sm:text-sm shadow-sm transition flex items-center justify-center gap-2 transform active:scale-95"
                      >
                        <HeartHandshake className="w-4 h-4" />
                        <span>Inquire About This Service</span>
                      </button>

                      <a
                        href="tel:+919876543210"
                        className="w-full sm:w-auto p-2.5 text-brand-900 bg-white hover:bg-brand-100 border-2 border-brand-700 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition"
                        title="Call admissions regarding this service"
                      >
                        <PhoneCall className="w-3.5 h-3.5 text-brand-700" />
                        <span>Call</span>
                      </a>
                    </div>

                  </div>

                </div>
              </div>
            ))
          )}

        </div>
      </section>

      {/* CTA Section */}
      <CTASection onOpenInquiry={onOpenInquiry} />
    </div>
  );
}
