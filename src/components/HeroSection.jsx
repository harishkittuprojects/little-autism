import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Building2, ArrowRight, MapPin, ChevronLeft, ChevronRight, Sprout, Sparkles, Heart } from 'lucide-react';

export default function HeroSection({ onOpenInquiry }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);

  const slides = [
    {
      id: 1,
      tagIcon: Building2,
      tagText: "Permanent Campus Project — Jinnaram, Telangana",
      titleLine1: "Driven by Purpose,",
      titleLine2: "Powered by People",
      subtitle: "We are a non-profit organization dedicated to empowering special children with autism through education, therapy, healthcare, and our upcoming 24/7 permanent residential campus in Jinnaram.",
      primaryBtnText: "Donate Now",
      inquiryContext: "Permanent Campus Support & Donations",
      secondaryBtnText: "Explore Our Campus",
      secondaryBtnLink: "/campus",
      
      leftCard: {
        image: "/images/dream-campus.jpg",
        alt: "Our Dream Campus - Landscaped green courtyard with modern residential home",
        tag: "Jinnaram Campus",
        title: "Our Dream Campus",
        desc: "Sensory courtyards & therapeutic classrooms",
        link: "/campus"
      },
      middleStats: {
        top: {
          stat: "12,500+",
          title: "Lives Transformed",
          desc: "Education, therapy & autism care"
        },
        bottom: {
          stat: "68% Built",
          badge: "2027",
          title: "Our Campus Progress",
          progress: "68%",
          link: "/campus"
        }
      },
      rightCard: {
        image: "/images/hostel-room.jpg",
        alt: "24/7 Residential Care Home - Peaceful, safe bedroom suites",
        tag: "24/7 Living",
        title: "Residential Care Home",
        desc: "Safe suites with round-the-clock support",
        link: "/campus"
      }
    },
    {
      id: 2,
      tagIcon: Sparkles,
      tagText: "Sensory & Developmental Therapy Suites",
      titleLine1: "Discovering Potential,",
      titleLine2: "Nurturing Abilities",
      subtitle: "Every child on the spectrum carries unique brilliance. Through personalized speech therapy, sensory integration, and creative arts, we help them unlock true independence.",
      primaryBtnText: "Donate Now",
      inquiryContext: "Sensory Therapy & Special Education",
      secondaryBtnText: "Our Services & Care",
      secondaryBtnLink: "/services",
      
      leftCard: {
        image: "/images/activities-music.jpg",
        alt: "Sensory music and learning session with special children",
        tag: "Sensory Room",
        title: "Music & Art Therapy",
        desc: "Stimulating expression and emotional growth",
        link: "/services"
      },
      middleStats: {
        top: {
          stat: "98%",
          title: "Milestone Success",
          desc: "Child-specific developmental goals"
        },
        bottom: {
          stat: "24/7",
          badge: "Care",
          title: "Clinical Care Team",
          progress: "100%",
          link: "/services"
        }
      },
      rightCard: {
        image: "/images/hero-care.jpg",
        alt: "Therapist guiding a child through cognitive exercises",
        tag: "Special Education",
        title: "Cognitive Training",
        desc: "Transdisciplinary child-centered care",
        link: "/services"
      }
    },
    {
      id: 3,
      tagIcon: Heart,
      tagText: "Loving Caregiver Community & Home Setting",
      titleLine1: "A Sanctuary for Hope,",
      titleLine2: "Care & Independence",
      subtitle: "Creating an inclusive home where every child is respected, nurtured, and provided lifelong residential care, medical supervision, and compassionate companionship.",
      primaryBtnText: "Donate Now",
      inquiryContext: "Residential Admissions & Support",
      secondaryBtnText: "Explore Our Campus",
      secondaryBtnLink: "/campus",
      
      leftCard: {
        image: "/images/team_volunteers.jpg",
        alt: "Community volunteers and caregivers team",
        tag: "Care Community",
        title: "Dedicated Caregivers",
        desc: "Compassionate transdisciplinary staff",
        link: "/about"
      },
      middleStats: {
        top: {
          stat: "100+ Beds",
          title: "Campus Sanctuary",
          desc: "World-class residential boarding"
        },
        bottom: {
          stat: "100%",
          badge: "Inclusive",
          title: "Autism-Specific Design",
          progress: "100%",
          link: "/campus"
        }
      },
      rightCard: {
        image: "/images/volunteer_care.jpg",
        alt: "Compassionate volunteer holding fresh food care package",
        tag: "Community Care",
        title: "Lifelong Companionship",
        desc: "Dignified residential living for special youth",
        link: "/about"
      }
    }
  ];

  // Auto-slide effect every 5 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    setTouchStartX(null);
  };

  return (
    <section
      className="relative overflow-hidden bg-[#143823] pt-10 sm:pt-14 pb-14 sm:pb-20 lg:pb-24 -mt-16 sm:-mt-20 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Subtle vertical pinstripe background texture matching reference UI */}
      <div
        className="absolute inset-0 pointer-events-none opacity-35"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 18px, rgba(255, 255, 255, 0.05) 18px, rgba(255, 255, 255, 0.05) 19px)`,
          maskImage: `radial-gradient(ellipse at center, transparent 35%, black 80%)`,
          WebkitMaskImage: `radial-gradient(ellipse at center, transparent 35%, black 80%)`
        }}
      />

      {/* Subtle soft radial glow in upper-center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Manual Slide Navigation Arrows (Desktop) */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="hidden lg:flex absolute left-4 xl:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/30 hover:bg-black/60 border border-white/20 text-white backdrop-blur-md items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="hidden lg:flex absolute right-4 xl:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/30 hover:bg-black/60 border border-white/20 text-white backdrop-blur-md items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slides Viewport - True Full-Width Slider */}
      <div className="relative w-full overflow-hidden pt-16 sm:pt-20">
        
        {/* Sliding Track */}
        <div
          className="flex transition-transform duration-700 ease-out will-change-transform"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => {
            const TagIcon = slide.tagIcon;
            return (
              <div key={slide.id} className="w-full shrink-0">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  
                  {/* Headline & Subtitle matching Reference UI */}
                  <div className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-5">
                    
                    {/* Pill Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-semibold text-emerald-200 backdrop-blur-sm">
                      <TagIcon className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{slide.tagText}</span>
                    </div>

                    <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-[58px] text-white tracking-tight leading-[1.14]">
                      {slide.titleLine1} <br />
                      {slide.titleLine2}
                    </h1>

                    <p className="text-xs sm:text-sm lg:text-base text-emerald-100/90 leading-relaxed max-w-2xl mx-auto font-normal">
                      {slide.subtitle}
                    </p>

                    {/* Action Buttons */}
                    <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={() => onOpenInquiry && onOpenInquiry(slide.inquiryContext)}
                        className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 bg-[#2d7a4d] hover:bg-[#348e58] text-white text-xs sm:text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-102 active:scale-95"
                      >
                        <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
                        <span>{slide.primaryBtnText}</span>
                      </button>

                      <Link
                        to={slide.secondaryBtnLink}
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 sm:px-6 sm:py-3 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold rounded-full border border-white/20 transition-all duration-200"
                      >
                        <span>{slide.secondaryBtnText}</span>
                        <ArrowRight className="w-4 h-4 text-emerald-300" />
                      </Link>
                    </div>

                  </div>

                  {/* 3-Column Bottom Showcase Grid */}
                  <div className="max-w-5xl mx-auto mt-10 sm:mt-14">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
                      
                      {/* Left Card */}
                      <Link
                        to={slide.leftCard.link}
                        className="md:col-span-4 relative rounded-[28px] overflow-hidden shadow-2xl h-[280px] sm:h-[340px] border border-white/15 group bg-[#0e2718] block"
                      >
                        <img
                          src={slide.leftCard.image}
                          alt={slide.leftCard.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                        
                        {/* Floating Top Tag */}
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-[11px] font-bold text-emerald-300 border border-white/15">
                            <MapPin className="w-3 h-3 text-emerald-400" />
                            {slide.leftCard.tag}
                          </span>
                        </div>

                        {/* Bottom Info Overlay */}
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <p className="font-display font-bold text-base sm:text-lg leading-tight group-hover:text-emerald-300 transition-colors">
                            {slide.leftCard.title}
                          </p>
                          <p className="text-[11px] text-emerald-100/80 mt-1 line-clamp-1">
                            {slide.leftCard.desc}
                          </p>
                        </div>
                      </Link>

                      {/* Middle Column: Two Stacked Stat Cards matching Reference UI */}
                      <div className="md:col-span-4 flex flex-col gap-4 sm:gap-5 justify-between">
                        
                        {/* Top White Stat Card */}
                        <div className="bg-white rounded-[28px] p-6 sm:p-7 shadow-2xl flex flex-col justify-center flex-1 border border-white/40">
                          <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#2d7a4d] tracking-tight">
                            {slide.middleStats.top.stat}
                          </div>
                          <p className="text-xs sm:text-sm font-bold text-gray-800 mt-1.5 leading-tight">
                            {slide.middleStats.top.title}
                          </p>
                          <p className="text-[11px] text-gray-500 mt-1">
                            {slide.middleStats.top.desc}
                          </p>
                        </div>

                        {/* Bottom Emerald Green Stat Card */}
                        <Link
                          to={slide.middleStats.bottom.link}
                          className="bg-[#2d7a4d] hover:bg-[#256c42] transition-colors rounded-[28px] p-6 sm:p-7 shadow-2xl text-white flex flex-col justify-center flex-1 border border-emerald-500/30 group"
                        >
                          <div className="flex items-center justify-between">
                            <div className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                              {slide.middleStats.bottom.stat}
                            </div>
                            <span className="text-[11px] font-bold bg-white/20 px-2 py-0.5 rounded-full text-emerald-100">
                              {slide.middleStats.bottom.badge}
                            </span>
                          </div>
                          
                          <p className="text-xs sm:text-sm font-semibold text-emerald-100 mt-1.5 leading-tight flex items-center justify-between">
                            <span>{slide.middleStats.bottom.title}</span>
                            <ArrowRight className="w-4 h-4 text-emerald-300 group-hover:translate-x-1 transition-transform" />
                          </p>
                          
                          {/* Progress bar */}
                          <div className="w-full h-1.5 rounded-full bg-emerald-900/60 mt-2.5 overflow-hidden">
                            <div
                              className="h-full bg-emerald-300 rounded-full transition-all duration-700"
                              style={{ width: slide.middleStats.bottom.progress }}
                            />
                          </div>
                        </Link>

                      </div>

                      {/* Right Card */}
                      <Link
                        to={slide.rightCard.link}
                        className="md:col-span-4 relative rounded-[28px] overflow-hidden shadow-2xl h-[280px] sm:h-[340px] border border-white/15 group bg-[#0e2718] block"
                      >
                        <img
                          src={slide.rightCard.image}
                          alt={slide.rightCard.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                        
                        {/* Floating Top Tag */}
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-[11px] font-bold text-emerald-300 border border-white/15">
                            <Sprout className="w-3 h-3 text-emerald-400" />
                            {slide.rightCard.tag}
                          </span>
                        </div>

                        {/* Bottom Info Overlay */}
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <p className="font-display font-bold text-base sm:text-lg leading-tight group-hover:text-emerald-300 transition-colors">
                            {slide.rightCard.title}
                          </p>
                          <p className="text-[11px] text-emerald-100/80 mt-1 line-clamp-1">
                            {slide.rightCard.desc}
                          </p>
                        </div>
                      </Link>

                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Slide Indicator Dots / Progress Pills */}
        <div className="flex items-center justify-center gap-2.5 pt-8 sm:pt-10">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === index
                  ? 'w-8 bg-emerald-400 shadow-md'
                  : 'w-2.5 bg-white/35 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
