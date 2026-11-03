import React, { useState } from 'react';
import {
  Heart,
  Package,
  Sparkles,
  CheckCircle2,
  Gift,
  ArrowRight,
  Maximize2,
  X,
  Building2,
  Layers,
  Image as ImageIcon
} from 'lucide-react';

export const CAMPUS_REQUIREMENTS = [
  // Row 1
  {
    id: 1,
    name: "Lights",
    qty: "35 Qty",
    category: "Infrastructure & Utilities",
    image: "/images/req-lights.jpg",
    desc: "Energy-efficient LED ceiling & tube lights for classrooms, sensory rooms, and hostel dorms."
  },
  {
    id: 2,
    name: "Fans",
    qty: "35 Qty",
    category: "Infrastructure & Utilities",
    image: "/images/req-fans.jpg",
    desc: "Ceiling fans ensuring cool, well-ventilated airflow across bedrooms and therapy suites."
  },
  {
    id: 3,
    name: "Kitchen Items",
    qty: "Big",
    category: "Infrastructure & Utilities",
    image: "/images/req-kitchen.jpg",
    desc: "Heavy-duty commercial cookware, pressure cookers, stainless steel dining sets, and food containers."
  },
  {
    id: 4,
    name: "School Material (All) (Stationary)",
    qty: "500 Qty",
    category: "Therapy & Special Education",
    image: "/images/req-stationary.jpg",
    desc: "Notebooks, color pencils, tactile craft sets, safety scissors, drawing pads, and student stationery."
  },
  {
    id: 5,
    name: "Water Filters (Big)",
    qty: "2 Qty",
    category: "Infrastructure & Utilities",
    image: "/images/req-water-filters.jpg",
    desc: "High-capacity multi-stage RO water purification units for pure, mineral-balanced campus drinking water."
  },

  // Row 2
  {
    id: 6,
    name: "Chairs & Tables",
    qty: "500 Qty",
    category: "Furniture & Living",
    image: "/images/req-chairs-tables.jpg",
    desc: "Ergonomic, rounded child-safe study desks and colorful chairs for adaptive classrooms."
  },
  {
    id: 7,
    name: "CC Cameras",
    qty: "50 Qty",
    category: "Infrastructure & Utilities",
    image: "/images/req-cameras.jpg",
    desc: "HD night-vision security cameras and central monitoring system for 24/7 child safety."
  },
  {
    id: 8,
    name: "Computers",
    qty: "10 Qty",
    category: "Infrastructure & Utilities",
    image: "/images/req-computers.jpg",
    desc: "Desktop PCs and digital monitors for cognitive learning software, therapist reports, and IEP tracking."
  },
  {
    id: 9,
    name: "Bedsheets",
    qty: "100 Qty",
    category: "Furniture & Living",
    image: "/images/req-bedsheets.jpg",
    desc: "Hypoallergenic, soft cotton bedsheets and cozy bedding sets for residential hostel suites."
  },
  {
    id: 10,
    name: "Beds",
    qty: "60 Qty",
    category: "Furniture & Living",
    image: "/images/req-beds.jpg",
    desc: "Sturdy single wooden beds with supportive orthopedic mattresses for 24/7 residential care."
  },

  // Row 3
  {
    id: 11,
    name: "Cots",
    qty: "60 Qty",
    category: "Furniture & Living",
    image: "/images/req-cots.jpg",
    desc: "Foldable rest cots for afternoon sensory relaxation, daycare rest periods, and sick-bay care."
  },
  {
    id: 12,
    name: "Speech Therapy Material",
    qty: "60 Qty",
    category: "Therapy & Special Education",
    image: "/images/req-speech-therapy.jpg",
    desc: "Articulation cards, oral motor tools, mirrors, vocabulary flashcards, and AAC communication aids."
  },
  {
    id: 13,
    name: "Occupational Therapy Material",
    qty: "60 Qty",
    category: "Therapy & Special Education",
    image: "/images/req-occupational-therapy.jpg",
    desc: "Therapy gym balls, tactile stepping stones, balance rings, tactile cones, and vestibular tools."
  },
  {
    id: 14,
    name: "Special Education Material",
    qty: "60 Qty",
    category: "Therapy & Special Education",
    image: "/images/req-special-education.jpg",
    desc: "Wooden alphabet ABC 123 tracing boards, shape-sorters, tactile puzzles, and cognitive toys."
  },
  {
    id: 15,
    name: "Behavioural Therapy Material",
    qty: "60 Qty",
    category: "Therapy & Special Education",
    image: "/images/req-behavioural-therapy.jpg",
    desc: "Emotion facial expression cards, reward star boards, visual schedule charts, and calming sensory tools."
  },
  {
    id: 16,
    name: "Floor Mats",
    qty: "500 Qty",
    category: "Therapy & Special Education",
    image: "/images/req-floor-mats.jpg",
    desc: "High-density interlocking EVA foam puzzle mats providing safe, cushioned sensory play flooring."
  }
];

export default function CampusRequirementsSection({ onOpenInquiry }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);

  const categories = [
    'All',
    'Therapy & Special Education',
    'Furniture & Living',
    'Infrastructure & Utilities'
  ];

  const filteredRequirements = activeCategory === 'All'
    ? CAMPUS_REQUIREMENTS
    : CAMPUS_REQUIREMENTS.filter(item => item.category === activeCategory);

  const handleSponsorClick = (item) => {
    if (onOpenInquiry) {
      onOpenInquiry(`Sponsorship / Donation: ${item.name} (${item.qty})`);
    }
  };

  return (
    <section id="requirements" className="py-14 sm:py-20 lg:py-24 bg-[#fbfdfa] relative scroll-mt-20 border-b border-brand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border-2 border-amber-300 text-xs font-bold text-amber-900 shadow-2xs">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Better Learning • Brighter Future</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-950 tracking-tight">
            Our Campus Requirements
          </h2>

          <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed max-w-2xl mx-auto">
            Help us furnish and equip our permanent residential home & school in Jinnaram, Telangana. Individuals, donors, and CSR partners can sponsor specific items or contribute in-kind.
          </p>

          {/* Quick Info Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-semibold text-gray-800">
            <span className="flex items-center gap-1.5 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 text-emerald-900">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              16 Essential Categories
            </span>
            <span className="flex items-center gap-1.5 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 text-blue-900">
              <Building2 className="w-3.5 h-3.5 text-blue-600" />
              Jinnaram Campus Ready
            </span>
            <button
              onClick={() => setIsPosterModalOpen(true)}
              className="flex items-center gap-1.5 bg-amber-50 hover:bg-amber-100 px-3.5 py-1 rounded-full border border-amber-300 text-amber-900 transition cursor-pointer"
            >
              <ImageIcon className="w-3.5 h-3.5 text-amber-700" />
              <span>View Full Illustrated Poster</span>
              <Maximize2 className="w-3 h-3 text-amber-700" />
            </button>
          </div>
        </div>

        {/* Filter Pills Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3" data-aos="fade-up" data-aos-delay="50">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#2d7a4d] text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-[#2d7a4d] hover:text-[#2d7a4d]'
              }`}
            >
              {cat === 'All' ? 'All Requirements (16)' : cat}
            </button>
          ))}
        </div>

        {/* Requirements Grid matching the 16 items */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {filteredRequirements.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border-2 border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group hover:-translate-y-1"
            >
              {/* Image Container with Exact Poster Visual */}
              <div className="relative h-48 sm:h-52 bg-gradient-to-b from-[#fffef5] to-[#f8faf7] p-3 flex items-center justify-center overflow-hidden border-b border-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain group-hover:scale-106 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Quantity Pill Badge on Top Right */}
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 rounded-full bg-amber-500 text-white font-extrabold text-xs shadow-md tracking-wide">
                    {item.qty}
                  </span>
                </div>

                {/* Category Pill Tag on Top Left */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-[10px] font-bold text-gray-700 border border-gray-200 shadow-2xs">
                    {item.category.split('&')[0].trim()}
                  </span>
                </div>
              </div>

              {/* Card Content Area */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display font-bold text-base sm:text-lg text-gray-950 leading-snug group-hover:text-[#2d7a4d] transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Sponsor Button */}
                <button
                  type="button"
                  onClick={() => handleSponsorClick(item)}
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-[#2d7a4d] text-[#1e5e38] hover:text-white font-bold text-xs transition-all duration-200 flex items-center justify-center gap-1.5 border border-emerald-200 hover:border-transparent shadow-2xs group/btn cursor-pointer"
                >
                  <Gift className="w-3.5 h-3.5 text-emerald-600 group-hover/btn:text-white transition-colors" />
                  <span>Sponsor This Item</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Poster Preview & CSR Desk */}
        <div
          className="rounded-3xl bg-gradient-to-r from-[#173e27] via-[#205234] to-[#173e27] text-white p-6 sm:p-10 shadow-xl overflow-hidden relative"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: Mission text */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs font-semibold text-emerald-200 border border-white/15">
                <Heart className="w-3.5 h-3.5 text-rose-300" />
                <span>Together for a Brighter Tomorrow</span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight">
                Partner with Us to Fulfill Campus Requirements
              </h3>

              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed max-w-xl">
                Whether you wish to sponsor 1 fan, 10 cots, a set of speech therapy flashcards, or complete classroom furniture, every contribution directly nurtures a special child’s independence. 
                All financial and in-kind sponsorships qualify for <strong>80G Tax Exemption</strong>.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <button
                  type="button"
                  onClick={() => onOpenInquiry && onOpenInquiry("General Campus Material Sponsorship")}
                  className="px-6 py-3 rounded-full bg-white text-[#173e27] hover:bg-emerald-50 text-xs sm:text-sm font-bold shadow-md transition-all duration-200 transform hover:scale-102 active:scale-95 cursor-pointer inline-flex items-center gap-2"
                >
                  <Gift className="w-4 h-4 text-emerald-700" />
                  <span>Sponsor Campus Materials</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsPosterModalOpen(true)}
                  className="px-5 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-bold border border-white/20 transition cursor-pointer inline-flex items-center gap-2"
                >
                  <ImageIcon className="w-4 h-4" />
                  <span>View Material Poster</span>
                </button>
              </div>
            </div>

            {/* Right Column: Thumbnail of the Poster */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div
                onClick={() => setIsPosterModalOpen(true)}
                className="relative rounded-2xl overflow-hidden border-2 border-white/30 shadow-2xl cursor-pointer group max-w-xs sm:max-w-sm hover:scale-102 transition-transform duration-300"
              >
                <img
                  src="/images/campus-requirements-poster.jpg"
                  alt="Our Requirements Poster Preview"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="px-4 py-2 rounded-full bg-white/90 text-gray-900 text-xs font-bold shadow-lg flex items-center gap-1.5 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all">
                    <Maximize2 className="w-3.5 h-3.5 text-brand-700" />
                    <span>Click to Enlarge Poster</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Poster Lightbox Modal */}
      {isPosterModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setIsPosterModalOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center bg-white rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="w-full px-5 py-3.5 bg-gray-900 text-white flex items-center justify-between border-b border-gray-800">
              <div className="flex items-center gap-2 text-xs font-bold">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Our Requirements (With Material & Images)</span>
              </div>
              <button
                type="button"
                onClick={() => setIsPosterModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/20 text-white transition cursor-pointer"
                aria-label="Close Poster Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Poster Image */}
            <div className="p-3 sm:p-4 overflow-auto max-h-[80vh] flex items-center justify-center bg-white">
              <img
                src="/images/campus-requirements-poster.jpg"
                alt="Our Campus Requirements - Complete Poster"
                className="w-full h-auto max-h-[75vh] object-contain rounded-xl shadow-inner"
              />
            </div>

            {/* Modal Footer */}
            <div className="w-full px-5 py-3 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <p className="text-gray-600 font-medium text-center sm:text-left">
                To sponsor any of the materials listed, reach us at <strong className="text-gray-900">csr@littleplant.org</strong> or <strong className="text-gray-900">+91 98765 43210</strong>.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsPosterModalOpen(false);
                  onOpenInquiry && onOpenInquiry("General Campus Material Sponsorship");
                }}
                className="px-5 py-2 rounded-full bg-[#2d7a4d] hover:bg-[#23633d] text-white font-bold transition shadow-xs cursor-pointer shrink-0"
              >
                Sponsor Materials
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
