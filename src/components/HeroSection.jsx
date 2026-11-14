import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  ArrowRight,
  MapPin,
  Sprout,
  Sparkles,
  Heart,
  Layers,
  Sparkle,
  Vote,
  CheckCircle2
} from 'lucide-react';
import Meristem3DCanvas from './Meristem3DCanvas';

export default function HeroSection({ onOpenInquiry }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchStartY, setTouchStartY] = useState(null);

  // Live Campus & Requirements Priority Poll
  const [pollVotes, setPollVotes] = useState(() => {
    const saved = localStorage.getItem('littleplant_poll_votes');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    return {
      campusBeds: 248,
      fansLights: 182,
      schoolMaterial: 215,
      waterFilters: 279
    };
  });

  const [votedOption, setVotedOption] = useState(() => {
    return localStorage.getItem('littleplant_poll_user_vote') || null;
  });

  const handleVote = (optionKey, optionTitle) => {
    if (votedOption) return;
    const updatedVotes = {
      ...pollVotes,
      [optionKey]: (pollVotes[optionKey] || 0) + 1
    };
    setPollVotes(updatedVotes);
    setVotedOption(optionKey);
    localStorage.setItem('littleplant_poll_votes', JSON.stringify(updatedVotes));
    localStorage.setItem('littleplant_poll_user_vote', optionKey);
  };

  const totalVotes = Object.values(pollVotes).reduce((a, b) => a + b, 0);
  const getPercentage = (count) => Math.round(((count || 0) / (totalVotes || 1)) * 100);

  const pollItems = [
    {
      key: 'campusBeds',
      shortName: '100 Campus Beds',
      shortDonor: 'Needs 32 Donors',
      title: 'Permanent Campus Residential Home (100 Beds)',
      tag: 'Campus Infrastructure',
      target: '100 Beds Total',
      donorStatus: 'Searching for 32 Donors',
      icon: Building2,
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      inquiryContext: 'Campus Poll: Permanent 100-Bed Residential Home Donation'
    },
    {
      key: 'fansLights',
      shortName: 'Fans & Lights (70)',
      shortDonor: 'Needs 14 Donors',
      title: '35 Ceiling Fans & 35 LED Lights for Classrooms',
      tag: 'Campus Utilities',
      target: '70 Units Required',
      donorStatus: 'Searching for 14 Donors',
      icon: Sparkles,
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      inquiryContext: 'Campus Poll: Fans & Lights Requirement Sponsorship'
    },
    {
      key: 'schoolMaterial',
      shortName: 'Sensory Kits (500)',
      shortDonor: 'Needs 45 Donors',
      title: '500 Special Stationery Sets & Sensory Therapy Kits',
      tag: 'Special Education Needs',
      target: '500 Sets Required',
      donorStatus: 'Searching for 45 Donors',
      icon: Layers,
      badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
      inquiryContext: 'Campus Poll: 500 Stationery & Sensory Kits Sponsorship'
    },
    {
      key: 'waterFilters',
      shortName: 'RO Water Plants (2)',
      shortDonor: 'Needs 2 Donors',
      title: '2 Commercial RO Drinking Water Purification Plants',
      tag: 'Campus Health & Safety',
      target: '2 Units Required',
      donorStatus: 'Searching for 2 Donors',
      icon: Sprout,
      badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
      inquiryContext: 'Campus Poll: Commercial RO Water Filters Sponsorship'
    }
  ];

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

  // Auto-scroll slides every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [currentSlide, slides.length]);

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
    <section className="relative bg-[#070d09] pt-0 sm:pt-4 pb-4 sm:pb-10 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        
        {/* Main Rectangular Hero Container */}
        <div
          className="relative overflow-hidden bg-[#070d09] rounded-none sm:rounded-3xl border-y sm:border border-emerald-950/60 shadow-2xl min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] flex flex-col justify-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Background: Meristem 3D Realtime WebGL Wireframe Leaf & Stardust Canvas */}
          <div className="absolute inset-0 z-0 pointer-events-auto">
            <Meristem3DCanvas />
          </div>

          {/* Vignette Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070d09]/75 via-transparent to-[#070d09]/80 pointer-events-none z-1" />

          {/* Photo Showcase Slides - Auto-Scrolling */}
          <div className="relative z-10 w-full pt-20 sm:pt-24 lg:pt-28 pb-10 sm:pb-14 animate-in fade-in duration-500">
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
                              
                              {/* Left Card */}
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
                                
                                <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5">
                                  <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] sm:text-[11px] font-bold text-emerald-300 border border-white/15">
                                    <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-400" />
                                    {slide.leftCard.tag}
                                  </span>
                                </div>

                                <div className="absolute bottom-3 left-3 right-3 sm:bottom-3.5 sm:left-3.5 sm:right-3.5 text-white">
                                  <p className="font-display font-bold text-sm sm:text-base lg:text-lg leading-tight group-hover:text-emerald-300 transition-colors">
                                    {slide.leftCard.title}
                                  </p>
                                  <p className="text-[10px] sm:text-[11px] text-emerald-100/80 mt-0.5 sm:mt-1 line-clamp-1">
                                    {slide.leftCard.desc}
                                  </p>
                                </div>
                              </Link>

                              {/* Middle Column: Two Stat Cards */}
                              <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-3 sm:gap-4">
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

                                <div className="bg-[#2d7a4d] hover:bg-[#256c42] transition-colors rounded-lg sm:rounded-2xl p-3 sm:p-4 lg:p-5 shadow-lg text-white flex flex-col justify-between border border-emerald-500/30">
                                  <div>
                                    <div className="flex items-center justify-between">
                                      <div className="font-display font-extrabold text-xl sm:text-3xl text-white tracking-tight">
                                        {slide.middleStats.bottom.stat}
                                      </div>
                                      <span className="text-[10px] sm:text-[11px] font-bold bg-white/20 px-2 py-0.5 rounded-md text-emerald-100">
                                        {slide.middleStats.bottom.badge}
                                      </span>
                                    </div>

                                    <Link
                                      to={slide.middleStats.bottom.link}
                                      className="text-xs sm:text-sm font-semibold text-emerald-100 mt-1 leading-tight flex items-center justify-between hover:text-white group"
                                    >
                                      <span className="truncate">{slide.middleStats.bottom.title}</span>
                                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-300 group-hover:translate-x-1 transition-transform shrink-0 ml-1" />
                                    </Link>

                                    <div className="w-full h-1.5 rounded-full bg-emerald-900/60 mt-2 overflow-hidden">
                                      <div
                                        className="h-full bg-emerald-300 rounded-full transition-all duration-700"
                                        style={{ width: slide.middleStats.bottom.progress }}
                                      />
                                    </div>
                                  </div>

                                  <button
                                    type="button"
                                    onClick={() => onOpenInquiry && onOpenInquiry(slide.inquiryContext)}
                                    className="mt-2.5 w-full py-1.5 px-3 rounded-lg bg-white hover:bg-emerald-50 text-[#143823] text-[11px] sm:text-xs font-bold shadow-xs flex items-center justify-center gap-1.5 transition active:scale-95 cursor-pointer"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#2d7a4d] animate-pulse"></span>
                                    <span>Donate Now</span>
                                  </button>
                                </div>
                              </div>

                              {/* Right Card */}
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
                                
                                <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5">
                                  <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] sm:text-[11px] font-bold text-emerald-300 border border-white/15">
                                    <Sprout className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-400" />
                                    {slide.rightCard.tag}
                                  </span>
                                </div>

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

              {/* Slide Indicators */}
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

              {/* Simple & Sleek Campus & Requirements Priority Poll • Searching for Donors */}
              <div className="max-w-4xl mx-auto mt-6 px-4">
                <div className="bg-black/60 backdrop-blur-md border border-emerald-500/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-white shadow-xl">
                  
                  {/* Single Line Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                      <span className="text-xs sm:text-sm font-bold text-white tracking-tight">
                        Live Priority Poll: What should we build next?
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-semibold text-amber-300 bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 rounded-full">
                        Searching for Donors
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenInquiry && onOpenInquiry("Campus & Requirements Priority Sponsorship")}
                      className="text-[11px] sm:text-xs font-bold text-emerald-300 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Sponsor / Donate</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* 4 Clean, Compact Voting Pills */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {pollItems.map((item) => {
                      const count = pollVotes[item.key] || 0;
                      const pct = getPercentage(count);
                      const isVoted = votedOption === item.key;

                      return (
                        <button
                          key={item.key}
                          type="button"
                          onClick={() => handleVote(item.key, item.title)}
                          disabled={!!votedOption}
                          title={votedOption ? `Voted: ${pct}% (${count} votes)` : `Vote for ${item.shortName}`}
                          className={`relative text-left p-2.5 rounded-lg border transition-all overflow-hidden cursor-pointer ${
                            isVoted
                              ? 'bg-emerald-950/80 border-emerald-400 text-white shadow-xs'
                              : votedOption
                              ? 'bg-white/5 border-white/10 text-white/80'
                              : 'bg-white/5 hover:bg-white/10 border-white/15 hover:border-emerald-400/50 text-white'
                          }`}
                        >
                          {/* Subtle progress fill */}
                          <div
                            className="absolute inset-y-0 left-0 bg-emerald-500/20 transition-all duration-500 pointer-events-none"
                            style={{ width: `${pct}%` }}
                          />

                          <div className="relative z-10 flex flex-col justify-between h-full">
                            <div className="flex items-center justify-between text-[11px] font-semibold leading-tight">
                              <span className="truncate">{item.shortName}</span>
                              {isVoted ? (
                                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0 ml-1" />
                              ) : (
                                <span className="text-[10px] text-emerald-300 font-bold ml-1">{pct}%</span>
                              )}
                            </div>
                            <div className="text-[10px] text-amber-300/90 mt-1 truncate">
                              {item.shortDonor}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Micro Footer Note */}
                  <div className="flex items-center justify-between text-[10px] text-emerald-200/60 mt-2 px-0.5">
                    <span>{votedOption ? "✓ Vote recorded • Thank you!" : "Click any option above to cast your vote"}</span>
                    <span>Total {totalVotes.toLocaleString()} votes cast</span>
                  </div>

                </div>
              </div>

            </div>

        </div>

      </div>
    </section>
  );
}
