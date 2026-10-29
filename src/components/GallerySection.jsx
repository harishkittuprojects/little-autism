import React, { useState, useEffect } from 'react';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight, MapPin, Sparkles, Home, HeartHandshake, Eye } from 'lucide-react';

export default function GallerySection({ onOpenInquiry }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Our Dream Campus Architecture",
      category: "Campus",
      location: "Jinnaram, Telangana",
      image: "/images/dream-campus.jpg",
      desc: "Architectural blueprint and landscaped green courtyards built specially for neurodivergent living."
    },
    {
      id: 2,
      title: "Outdoor Sensory Healing Garden",
      category: "Campus",
      location: "Sensory Courtyard",
      image: "/images/sensory-garden.jpg",
      desc: "Tactile flora, aromatic plants, water features, and gentle curved walkways designed to soothe sensory overload."
    },
    {
      id: 3,
      title: "Pediatric Sensory Therapy Gym",
      category: "Therapy",
      location: "Clinical Therapy Wing",
      image: "/images/indoor-gym.jpg",
      desc: "Suspended vestibular swings, climbing blocks, tactile ball pits, and soft-padded safety mats."
    },
    {
      id: 4,
      title: "Music & Expressive Arts Studio",
      category: "Activities",
      location: "Creative Arts Center",
      image: "/images/activities-music.jpg",
      desc: "Rhythm therapy and sound stimulation sessions helping non-verbal children unlock self-expression."
    },
    {
      id: 5,
      title: "Residential Boarding Suites",
      category: "Residential",
      location: "Hostel Quarters",
      image: "/images/hostel-room.jpg",
      desc: "Quiet, acoustic-dampened bedroom suites supervised 24/7 by trained caregivers."
    },
    {
      id: 6,
      title: "One-on-One Cognitive Therapy",
      category: "Therapy",
      location: "Special Education Wing",
      image: "/images/hero-care.jpg",
      desc: "Individualized learning plans (IEP) guided by certified transdisciplinary special educators."
    },
    {
      id: 7,
      title: "Dedicated Caregivers & Staff",
      category: "Community",
      location: "Academy Grounds",
      image: "/images/team_volunteers.jpg",
      desc: "Compassionate therapists, medical nurses, speech pathologists, and community volunteers."
    },
    {
      id: 8,
      title: "Nutritious Living & Dining Care",
      category: "Residential",
      location: "Nutritional Center",
      image: "/images/volunteer_care.jpg",
      desc: "Wholesome, dietitian-planned meals tailored to the digestive and sensory requirements of every resident."
    }
  ];

  const categories = ['All', 'Campus', 'Therapy', 'Residential', 'Activities', 'Community'];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, filteredItems.length]);

  const handleNext = () => {
    setSelectedImageIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    setSelectedImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-14 sm:py-20 lg:py-24 bg-[#f8faf8] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border-2 border-emerald-200 text-xs font-bold text-[#1e5e38] shadow-2xs">
            <Camera className="w-4 h-4 text-[#2d7a4d]" />
            <span>Campus & Academy Life</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-950 tracking-tight">
            Our Campus & Activities Gallery
          </h2>

          <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed max-w-2xl mx-auto">
            Explore moments of sensory exploration, therapy progress, modern infrastructure, and loving residential care at Little Plant Autism Home.
          </p>
        </div>

        {/* Filter Pills Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8 sm:mt-10" data-aos="fade-up" data-aos-delay="50">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveFilter(cat);
                setSelectedImageIndex(null);
              }}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-[#2d7a4d] text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-[#2d7a4d] hover:text-[#2d7a4d]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-10" data-aos="fade-up" data-aos-delay="100">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImageIndex(index)}
              className="group relative rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Floating Tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-[11px] font-bold text-emerald-300 border border-white/20">
                    {item.category}
                  </span>
                </div>

                {/* Hover Eye Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-11 h-11 rounded-full bg-white/90 text-[#2d7a4d] flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-200">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom Overlay Title on Hover/Static */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="font-display font-bold text-sm leading-snug line-clamp-1 group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-gray-200 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>{item.location}</span>
                  </p>
                </div>
              </div>

              {/* Card Footer Caption */}
              <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
                <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px] font-bold text-[#2d7a4d]">
                  <span>View Details</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Call to Action */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#143823] to-[#205234] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl" data-aos="fade-up">
          <div className="space-y-1.5 text-center sm:text-left">
            <h3 className="font-display font-bold text-xl sm:text-2xl">
              Experience Little Plant Campus in Person
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 max-w-xl">
              Book a guided walk-through for admissions, CSR partnerships, or to meet our care team at Jinnaram, Telangana.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenInquiry && onOpenInquiry("Campus Tour & Visit")}
            className="px-6 py-3 rounded-full bg-white text-[#143823] hover:bg-emerald-50 text-xs sm:text-sm font-bold shadow-md transition-all duration-200 shrink-0 transform hover:scale-102 active:scale-95 cursor-pointer"
          >
            Schedule a Campus Tour
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Navigation Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-sm transition-all cursor-pointer shadow-xl"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-sm transition-all cursor-pointer shadow-xl"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Preview */}
            <div className="relative bg-black flex items-center justify-center max-h-[60vh] overflow-hidden">
              <img
                src={filteredItems[selectedImageIndex].image}
                alt={filteredItems[selectedImageIndex].title}
                className="w-full h-auto max-h-[60vh] object-contain"
              />
            </div>

            {/* Image Details */}
            <div className="p-6 bg-white space-y-3">
              <div className="flex items-center justify-between gap-4">
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-[#1e5e38] text-xs font-bold">
                  {filteredItems[selectedImageIndex].category}
                </span>
                <span className="text-xs text-gray-500 font-semibold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#2d7a4d]" />
                  {filteredItems[selectedImageIndex].location}
                </span>
              </div>

              <h3 className="font-display font-bold text-xl sm:text-2xl text-gray-950">
                {filteredItems[selectedImageIndex].title}
              </h3>

              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                {filteredItems[selectedImageIndex].desc}
              </p>

              <div className="pt-2 flex items-center justify-between text-xs text-gray-500 border-t border-gray-100">
                <span>
                  Photo {selectedImageIndex + 1} of {filteredItems.length}
                </span>
                <button
                  onClick={() => onOpenInquiry && onOpenInquiry(`Inquiry about ${filteredItems[selectedImageIndex].title}`)}
                  className="text-[#2d7a4d] font-bold hover:underline"
                >
                  Inquire about this facility →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
