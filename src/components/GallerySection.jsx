import React, { useState, useEffect } from 'react';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight, MapPin, Sparkles, Home, HeartHandshake, Eye } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function GallerySection({ onOpenInquiry }) {
  const { t, isTelugu } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Campus Bhoomi Puja & Foundation Ceremony",
      title_te: "క్యాంపస్ భూమి పూజ & శంకుస్థాపన మహోత్సవం",
      category: "Campus",
      category_te: "క్యాంపస్",
      location: "Jinnaram Campus Grounds",
      location_te: "జిన్నారం క్యాంపస్ ప్రాంగణం",
      image: "/images/image.png",
      desc: "Auspicious Bhoomi Puja ceremony performed on 22 August 2026 marking the ground-breaking of our permanent campus in Jinnaram, Telangana.",
      desc_te: "తెలంగాణలోని జిన్నారంలో శాశ్వత క్యాంపస్ నిర్మాణానికి 22 ఆగస్టు 2026న శాస్త్రోక్తంగా నిర్వహించిన పవిత్ర భూమి పూజ మహోత్సవం."
    },
    {
      id: 2,
      title: "Foundation Stone & Brick Laying",
      title_te: "శంకుస్థాపన శిలాన్యాసం & ఇటుక ప్రతిష్టాపన",
      category: "Campus",
      category_te: "క్యాంపస్",
      location: "Jinnaram Campus Grounds",
      location_te: "జిన్నారం క్యాంపస్ ప్రాంగణం",
      image: "/images/bhoomi-puja-brick-laying.jpg",
      desc: "Laying the first sacred foundation brick (Shila Sthapana) for Little Plant Academy, blessed by trustees, elders, and well-wishers.",
      desc_te: "ట్రస్టీలు, పెద్దలు మరియు శ్రేయోభిలాషుల సమక్షంలో లిటిల్ ప్లాంట్ అకాడమీ మొదటి పునాది రాయి (శిలా స్థాపన) వేడుక."
    },
    {
      id: 3,
      title: "Community Bhoomi Puja Yagna",
      title_te: "సామూహిక భూమి పూజా యజ్ఞం",
      category: "Community",
      category_te: "కమ్యూనిటీ",
      location: "Jinnaram Campus Grounds",
      location_te: "జిన్నారం క్యాంపస్ ప్రాంగణం",
      image: "/images/bhoomi-puja-wide-ceremony.jpg",
      desc: "Wide gathering of families, teachers, and well-wishers participating under the canopy in the auspicious Bhoomi Puja yagna.",
      desc_te: "కుటుంబాలు, ఉపాధ్యాయులు మరియు శ్రేయోభిలాషుల సమక్షంలో జరిగిన పవిత్ర భూమి పూజా యజ్ఞం."
    },
    {
      id: 4,
      title: "Sacred Foundation Havan & Blessings",
      title_te: "పవిత్ర పునాది హోమం & ఆశీర్వచనం",
      category: "Campus",
      category_te: "క్యాంపస్",
      location: "Jinnaram Campus Grounds",
      location_te: "జిన్నారం క్యాంపస్ ప్రాంగణం",
      image: "/images/bhoomi-puja-rituals.jpg",
      desc: "Community members, trustees, and educators uniting in sacred traditional rituals to bless the development of Little Plant Academy.",
      desc_te: "లిటిల్ ప్లాంట్ అకాడమీ నిర్మాణం విజయవంతం కావాలని పెద్దల సమక్షంలో నిర్వహించిన పవిత్ర హోమం."
    },
    {
      id: 5,
      title: "Sacred Fire Yagna & Devotion",
      title_te: "పవిత్ర అగ్నిహోత్ర యజ్ఞం",
      category: "Campus",
      category_te: "క్యాంపస్",
      location: "Jinnaram Campus Grounds",
      location_te: "జిన్నారం క్యాంపస్ ప్రాంగణం",
      image: "/images/bhoomi-puja-havan-closeup.jpg",
      desc: "Heartfelt prayers and sacred oblations offered into the holy fire for the protection and flourishing of every special child.",
      desc_te: "ప్రతి ప్రత్యేక బిడ్డ శ్రేయస్సు, రక్షణ మరియు అభివృద్ధి కోసం పవిత్ర అగ్నిహోత్రంలో సమర్పించిన హవిస్సులు."
    },
    {
      id: 6,
      title: "Poornahuti & Collective Blessings",
      title_te: "పూర్ణాహుతి & సమష్టి ఆశీర్వాదాలు",
      category: "Community",
      category_te: "కమ్యూనిటీ",
      location: "Jinnaram Campus Grounds",
      location_te: "జిన్నారం క్యాంపస్ ప్రాంగణం",
      image: "/images/bhoomi-puja-poornahuti.jpg",
      desc: "Trustees, educators, and the head priest performing the ceremonial Poornahuti to conclude the foundation rituals.",
      desc_te: "ప్రధాన అర్చకుల వేద మంత్రోచ్ఛారణల మధ్య సంపూర్ణమైన పూర్ణాహుతి సమర్పణ."
    },
    {
      id: 7,
      title: "Earth Blessing & Sacred Offerings",
      title_te: "భూమాత పూజ & పవిత్ర సమర్పణలు",
      category: "Campus",
      category_te: "క్యాంపస్",
      location: "Jinnaram Campus Grounds",
      location_te: "జిన్నారం క్యాంపస్ ప్రాంగణం",
      image: "/images/bhoomi-puja-prayers.jpg",
      desc: "Offering sacred prayers, flowers, and holy blessings into the foundation trench of the upcoming Little Plant residential sanctuary.",
      desc_te: "లిటిల్ ప్లాంట్ శాశ్వత ఆశ్రయ క్యాంపస్ పునాదిలో పూలు మరియు పవిత్ర జలాలతో పూజలు."
    },
    {
      id: 8,
      title: "Our Dream Campus Architecture",
      title_te: "మా కలల క్యాంపస్ ఆర్కిటెక్చర్",
      category: "Campus",
      category_te: "క్యాంపస్",
      location: "Jinnaram, Telangana",
      location_te: "జిన్నారం, తెలంగాణ",
      image: "/images/dream-campus.jpg",
      desc: "Architectural blueprint and landscaped green courtyards built specially for neurodivergent living.",
      desc_te: "ప్రత్యేక పిల్లల జీవనానికి అనుకూలంగా రూపొందించిన పచ్చని ప్రాంగణం మరియు నిర్మాణ నమూనా."
    },
    {
      id: 9,
      title: "Outdoor Sensory Healing Garden",
      title_te: "బహిరంగ సెన్సరీ గార్డెన్",
      category: "Campus",
      category_te: "క్యాంపస్",
      location: "Sensory Courtyard",
      location_te: "సెన్సరీ ప్రాంగణం",
      image: "/images/sensory-garden.jpg",
      desc: "Tactile flora, aromatic plants, water features, and gentle curved walkways designed to soothe sensory overload.",
      desc_te: "సువాసన వెదజల్లే మొక్కలు, ఫౌంటెన్లు మరియు సెన్సరీ ఒత్తిడిని తగ్గించే ప్రశాంతమైన నడక మార్గాలు."
    },
    {
      id: 10,
      title: "Pediatric Sensory Therapy Gym",
      title_te: "పీడియాట్రిక్ సెన్సరీ థెరపీ జిమ్",
      category: "Therapy",
      category_te: "థెరపీ",
      location: "Clinical Therapy Wing",
      location_te: "క్లినికల్ థెరపీ విభాగం",
      image: "/images/indoor-gym.jpg",
      desc: "Suspended vestibular swings, climbing blocks, tactile ball pits, and soft-padded safety mats.",
      desc_te: "స్వింగ్స్, క్లైంబింగ్ బ్లాక్స్, బాల్ పిట్స్ మరియు సురక్షితమైన కుషన్ మ్యాట్లతో కూడిన ఆధునిక థెరపీ జిమ్."
    },
    {
      id: 11,
      title: "Music & Expressive Arts Studio",
      title_te: "సంగీతం & సృజనాత్మక ఆర్ట్స్ స్టూడియో",
      category: "Activities",
      category_te: "కార్యకలాపాలు",
      location: "Creative Arts Center",
      location_te: "కళా కేంద్రం",
      image: "/images/activities-music.jpg",
      desc: "Rhythm therapy and sound stimulation sessions helping non-verbal children unlock self-expression.",
      desc_te: "లయ థెరపీ మరియు సంగీత వాయిద్యాల ద్వారా పిల్లల్లో భావవ్యక్తీకరణను పెంపొందించే స్టూడియో."
    },
    {
      id: 12,
      title: "Residential Boarding Suites",
      title_te: "రెసిడెన్షియల్ బోర్డింగ్ సూట్లు",
      category: "Residential",
      category_te: "నివాసం",
      location: "Hostel Quarters",
      location_te: "హాస్టల్ విభాగాలు",
      image: "/images/hostel-room.jpg",
      desc: "Quiet, acoustic-dampened bedroom suites supervised 24/7 by trained caregivers.",
      desc_te: "24/7 శిక్షణ పొందిన సంరక్షకుల పర్యవేక్షణలో ప్రశాంతమైన, శబ్ద నియంత్రిత నివాస గదులు."
    },
    {
      id: 13,
      title: "One-on-One Cognitive Therapy",
      title_te: "వ్యక్తిగత కాగ్నిటివ్ థెరపీ",
      category: "Therapy",
      category_te: "థెరపీ",
      location: "Special Education Wing",
      location_te: "ప్రత్యేక విద్యా విభాగం",
      image: "/images/hero-care.jpg",
      desc: "Individualized learning plans (IEP) guided by certified transdisciplinary special educators.",
      desc_te: "సర్టిఫైడ్ ప్రత్యేక ఉపాధ్యాయుల మార్గదర్శకత్వంలో వ్యక్తిగత విద్యా ప్రణాళిక (IEP) సెషన్లు."
    },
    {
      id: 14,
      title: "Dedicated Caregivers & Staff",
      title_te: "అంకితభావం గల సంరక్షకులు & సిబ్బంది",
      category: "Community",
      category_te: "కమ్యూనిటీ",
      location: "Academy Grounds",
      location_te: "అకాడమీ ప్రాంగణం",
      image: "/images/team_volunteers.jpg",
      desc: "Compassionate therapists, medical nurses, speech pathologists, and community volunteers.",
      desc_te: "కారుణ్యంతో కూడిన థెరపిస్టులు, వైద్య నర్సులు, స్పీచ్ నిపుణులు మరియు వాలంటీర్లు."
    },
    {
      id: 15,
      title: "Nutritious Living & Dining Care",
      title_te: "పౌష్టికాహారం & డైనింగ్ సంరక్షణ",
      category: "Residential",
      category_te: "నివాసం",
      location: "Nutritional Center",
      location_te: "న్యూట్రిషన్ కేంద్రం",
      image: "/images/volunteer_care.jpg",
      desc: "Wholesome, dietitian-planned meals tailored to the digestive and sensory requirements of every resident.",
      desc_te: "ప్రతి బిడ్డ ఆరోగ్యం మరియు ఆహార నియమాలకు అనుగుణంగా డైటీషియన్ రూపొందించిన పరిశుభ్రమైన భోజనం."
    }
  ];

  const categories = [
    { key: 'All', label: isTelugu ? 'అన్నీ' : 'All' },
    { key: 'Campus', label: isTelugu ? 'క్యాంపస్' : 'Campus' },
    { key: 'Therapy', label: isTelugu ? 'థెరపీ' : 'Therapy' },
    { key: 'Residential', label: isTelugu ? 'నివాసం' : 'Residential' },
    { key: 'Activities', label: isTelugu ? 'కార్యకలాపాలు' : 'Activities' },
    { key: 'Community', label: isTelugu ? 'కమ్యూనిటీ' : 'Community' }
  ];

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
            <span>{isTelugu ? 'క్యాంపస్ & అకాడమీ జీవనం' : 'Campus & Academy Life'}</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-950 tracking-tight">
            {t('gallery.title', 'Our Campus & Activities Gallery')}
          </h2>

          <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed max-w-2xl mx-auto">
            {t('gallery.desc', 'Explore moments of sensory exploration, therapy progress, modern infrastructure, and loving residential care at Little Plant Autism Home.')}
          </p>
        </div>

        {/* Filter Pills Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8 sm:mt-10" data-aos="fade-up" data-aos-delay="50">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setActiveFilter(cat.key);
                setSelectedImageIndex(null);
              }}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === cat.key
                  ? 'bg-[#2d7a4d] text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-[#2d7a4d] hover:text-[#2d7a4d]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-10" data-aos="fade-up" data-aos-delay="100">
          {filteredItems.map((item, index) => {
            const title = isTelugu && item.title_te ? item.title_te : item.title;
            const desc = isTelugu && item.desc_te ? item.desc_te : item.desc;
            const categoryLabel = isTelugu && item.category_te ? item.category_te : item.category;
            const location = isTelugu && item.location_te ? item.location_te : item.location;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedImageIndex(index)}
                className="group relative rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Floating Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-[11px] font-bold text-emerald-300 border border-white/20">
                      {categoryLabel}
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
                      {title}
                    </p>
                    <p className="text-[11px] text-gray-200 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{location}</span>
                    </p>
                  </div>
                </div>

                {/* Card Footer Caption */}
                <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    {desc}
                  </p>
                  <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px] font-bold text-[#2d7a4d]">
                    <span>{isTelugu ? 'వివరాలు చూడండి' : 'View Details'}</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Call to Action */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#143823] to-[#205234] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl" data-aos="fade-up">
          <div className="space-y-1.5 text-center sm:text-left">
            <h3 className="font-display font-bold text-xl sm:text-2xl">
              {isTelugu ? 'లిటిల్ ప్లాంట్ క్యాంపస్‌ను ప్రత్యక్షంగా సందర్శించండి' : 'Experience Little Plant Campus in Person'}
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 max-w-xl">
              {isTelugu
                ? 'తెలంగాణలోని జిన్నారంలో అడ్మిషన్లు, CSR భాగస్వామ్యాలు లేదా మా సంరక్షక బృందాన్ని కలవడానికి క్యాంపస్ టూర్ బుక్ చేసుకోండి.'
                : 'Book a guided walk-through for admissions, CSR partnerships, or to meet our care team at Jinnaram, Telangana.'}
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenInquiry && onOpenInquiry("Campus Tour & Visit")}
            className="px-6 py-3 rounded-full bg-white text-[#143823] hover:bg-emerald-50 text-xs sm:text-sm font-bold shadow-md transition-all duration-200 shrink-0 transform hover:scale-102 active:scale-95 cursor-pointer"
          >
            {isTelugu ? 'క్యాంపస్ సందర్శనను షెడ్యూల్ చేయండి' : 'Schedule a Campus Tour'}
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedImageIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#111c14] rounded-3xl overflow-hidden border border-emerald-900/60 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="p-4 sm:p-5 flex items-center justify-between border-b border-white/10 text-white">
              <div>
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-700/50">
                  {isTelugu && filteredItems[selectedImageIndex].category_te
                    ? filteredItems[selectedImageIndex].category_te
                    : filteredItems[selectedImageIndex].category}
                </span>
                <h3 className="font-display font-bold text-base sm:text-lg text-white mt-1">
                  {isTelugu && filteredItems[selectedImageIndex].title_te
                    ? filteredItems[selectedImageIndex].title_te
                    : filteredItems[selectedImageIndex].title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Lightbox Image */}
            <div className="relative bg-black flex items-center justify-center max-h-[60vh] sm:max-h-[65vh] overflow-hidden">
              <img
                src={filteredItems[selectedImageIndex].image}
                alt={filteredItems[selectedImageIndex].title}
                className="max-h-[60vh] sm:max-h-[65vh] w-auto max-w-full object-contain"
              />

              {/* Prev & Next Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Footer Description */}
            <div className="p-4 sm:p-5 bg-[#0e1811] text-xs sm:text-sm text-gray-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-white/10">
              <p className="max-w-2xl text-gray-300 leading-relaxed">
                {isTelugu && filteredItems[selectedImageIndex].desc_te
                  ? filteredItems[selectedImageIndex].desc_te
                  : filteredItems[selectedImageIndex].desc}
              </p>
              <span className="text-emerald-400 font-bold shrink-0 text-xs">
                {selectedImageIndex + 1} / {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
