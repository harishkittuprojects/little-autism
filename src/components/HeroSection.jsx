import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Building2, ArrowRight, MapPin, ChevronLeft, ChevronRight, Sprout, Sparkles, Heart } from 'lucide-react';

export default function HeroSection({ onOpenInquiry }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchStartY, setTouchStartY] = useState(null);

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
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null || touchStartY === null) return;
    const diffX = touchStartX - e.changedTouches[0].clientX;
    const diffY = touchStartY - e.changedTouches[0].clientY;

    // Only switch slide if horizontal swipe is intentional and dominant over vertical scrolling
    if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY) * 1.5) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setTouchStartX(null);
    setTouchStartY(null);
  };

  return (
    <section className="relative bg-[#f8faf8] pt-0 sm:pt-4 pb-4 sm:pb-10 select-none">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        
        {/* Main Rectangular Hero Container (Edge-to-edge pure rectangle on mobile, framed on desktop) */}
        <div
          className="relative overflow-hidden bg-[#143823] rounded-none sm:rounded-3xl border-y sm:border border-emerald-950/60 shadow-none sm:shadow-2xl pt-6 sm:pt-14 pb-8 sm:pb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Subtle vertical pinstripe background texture */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 18px, rgba(255, 255, 255, 0.05) 18px, rgba(255, 255, 255, 0.05) 19px)`
            }}
          />

          {/* Manual Slide Navigation Arrows (Desktop) - Sleek Rectangular */}
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="hidden lg:flex absolute left-4 xl:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-xl bg-black/40 hover:bg-black/70 border border-white/20 text-white backdrop-blur-md items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="hidden lg:flex absolute right-4 xl:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-xl bg-black/40 hover:bg-black/70 border border-white/20 text-white backdrop-blur-md items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Slides Track */}
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out will-change-transform"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => {
                const TagIcon = slide.tagIcon;
                return (
                  <div key={slide.id} className="w-full shrink-0">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                      
                      {/* Headline & Subtitle */}
                      <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
                        
                        {/* Rectangular Tag Badge */}
                        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1 rounded-md sm:rounded-lg bg-emerald-950/70 border border-emerald-500/30 text-[11px] sm:text-xs font-semibold text-emerald-200 backdrop-blur-sm max-w-full">
                          <TagIcon className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="truncate">{slide.tagText}</span>
                        </div>

                        <h1 className="font-display font-bold text-2xl xs:text-3xl sm:text-5xl lg:text-[54px] text-white tracking-tight leading-tight sm:leading-[1.14]">
                          {slide.titleLine1} <br className="hidden xs:inline" />
                          {slide.titleLine2}
                        </h1>

                        <p className="text-xs sm:text-sm lg:text-base text-emerald-100/85 leading-relaxed max-w-2xl mx-auto font-normal px-2 sm:px-0">
                          {slide.subtitle}
                        </p>

                        {/* Rectangular Action Buttons */}
                        <div className="pt-2 flex items-center justify-center gap-2.5 sm:gap-3.5 w-full max-w-xs sm:max-w-none mx-auto">
                          <button
                            type="button"
                            onClick={() => onOpenInquiry && onOpenInquiry(slide.inquiryContext)}
                            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-7 sm:py-3 bg-[#2d7a4d] hover:bg-[#348e58] text-white text-xs sm:text-sm font-semibold rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-102 active:scale-95 cursor-pointer whitespace-nowrap"
                          >
                            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse shrink-0"></span>
                            <span>{slide.primaryBtnText}</span>
                          </button>

                          <Link
                            to={slide.secondaryBtnLink}
                            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:px-6 sm:py-3 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold rounded-lg sm:rounded-xl border border-white/20 transition-all duration-200 whitespace-nowrap"
                          >
                            <span>{slide.secondaryBtnText}</span>
                            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-300 shrink-0" />
                          </Link>
                        </div>

                      </div>

                      {/* 3-Column Rectangular Showcase Grid */}
                      <div className="max-w-5xl mx-auto mt-6 sm:mt-10">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-4 lg:gap-5 items-stretch">
                          
                          {/* Left Card - Rectangular */}
                          <Link
                            to={slide.leftCard.link}
                            className="md:col-span-4 relative rounded-lg sm:rounded-2xl overflow-hidden shadow-lg h-[180px] xs:h-[200px] sm:h-[270px] md:h-[320px] border border-white/15 group bg-[#0e2718] block"
                          >
                            <img
                              src={slide.leftCard.image}
                              alt={slide.leftCard.alt}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                            
                            {/* Floating Top Tag - Rectangular */}
                            <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5">
                              <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] sm:text-[11px] font-bold text-emerald-300 border border-white/15">
                                <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-400" />
                                {slide.leftCard.tag}
                              </span>
                            </div>

                            {/* Bottom Info Overlay */}
                            <div className="absolute bottom-3 left-3 right-3 sm:bottom-3.5 sm:left-3.5 sm:right-3.5 text-white">
                              <p className="font-display font-bold text-sm sm:text-base lg:text-lg leading-tight group-hover:text-emerald-300 transition-colors">
                                {slide.leftCard.title}
                              </p>
                              <p className="text-[10px] sm:text-[11px] text-emerald-100/80 mt-0.5 sm:mt-1 line-clamp-1">
                                {slide.leftCard.desc}
                              </p>
                            </div>
                          </Link>

                          {/* Middle Column: Two Rectangular Stat Cards */}
                          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-3 sm:gap-4">
                            
                            {/* Top White Stat Card - Rectangular */}
                            <div className="bg-white rounded-lg sm:rounded-2xl p-3.5 sm:p-5 lg:p-6 shadow-lg flex flex-col justify-center border border-white/50">
                              <div className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#2d7a4d] tracking-tight">
                                {slide.middleStats.top.stat}
                              </div>
                              <p className="text-xs sm:text-sm font-bold text-gray-800 mt-1 leading-tight">
                                {slide.middleStats.top.title}
                              </p>
                              <p className="text-[10px] sm:text-[11px] text-gray-500 mt-0.5 line-clamp-1 sm:line-clamp-none">
                                {slide.middleStats.top.desc}
                              </p>
                            </div>

                            {/* Bottom Emerald Green Stat Card - Rectangular */}
                            <Link
                              to={slide.middleStats.bottom.link}
                              className="bg-[#2d7a4d] hover:bg-[#256c42] transition-colors rounded-lg sm:rounded-2xl p-3.5 sm:p-5 lg:p-6 shadow-lg text-white flex flex-col justify-center border border-emerald-500/30 group"
                            >
                              <div className="flex items-center justify-between">
                                <div className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
                                  {slide.middleStats.bottom.stat}
                                </div>
                                <span className="text-[10px] sm:text-[11px] font-bold bg-white/20 px-2 py-0.5 rounded-md text-emerald-100">
                                  {slide.middleStats.bottom.badge}
                                </span>
                              </div>
                              
                              <p className="text-xs sm:text-sm font-semibold text-emerald-100 mt-1 leading-tight flex items-center justify-between">
                                <span className="truncate">{slide.middleStats.bottom.title}</span>
                                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-300 group-hover:translate-x-1 transition-transform shrink-0 ml-1" />
                              </p>
                              
                              {/* Progress bar */}
                              <div className="w-full h-1.5 rounded-full bg-emerald-900/60 mt-2 overflow-hidden">
                                <div
                                  className="h-full bg-emerald-300 rounded-full transition-all duration-700"
                                  style={{ width: slide.middleStats.bottom.progress }}
                                />
                              </div>
                            </Link>

                          </div>

                          {/* Right Card - Rectangular */}
                          <Link
                            to={slide.rightCard.link}
                            className="md:col-span-4 relative rounded-lg sm:rounded-2xl overflow-hidden shadow-lg h-[180px] xs:h-[200px] sm:h-[270px] md:h-[320px] border border-white/15 group bg-[#0e2718] block"
                          >
                            <img
                              src={slide.rightCard.image}
                              alt={slide.rightCard.alt}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                            
                            {/* Floating Top Tag - Rectangular */}
                            <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5">
                              <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] sm:text-[11px] font-bold text-emerald-300 border border-white/15">
                                <Sprout className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-400" />
                                {slide.rightCard.tag}
                              </span>
                            </div>

                            {/* Bottom Info Overlay */}
                            <div className="absolute bottom-3 left-3 right-3 sm:bottom-3.5 sm:left-3.5 sm:right-3.5 text-white">
                              <p className="font-display font-bold text-sm sm:text-base lg:text-lg leading-tight group-hover:text-emerald-300 transition-colors">
                                {slide.rightCard.title}
                              </p>
                              <p className="text-[10px] sm:text-[11px] text-emerald-100/80 mt-0.5 sm:mt-1 line-clamp-1">
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
          </div>

          {/* Slide Indicator Rectangular Bars */}
          <div className="flex items-center justify-center gap-2 pt-5 sm:pt-7">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1.5 rounded-sm transition-all duration-300 cursor-pointer ${
                  currentSlide === index
                    ? 'w-7 sm:w-8 bg-emerald-400 shadow-md'
                    : 'w-2.5 sm:w-3 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
