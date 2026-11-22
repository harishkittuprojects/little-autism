import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sprout,
  Heart,
  CheckCircle2,
  BookOpen,
  MessageSquare,
  Sparkles,
  Home,
  Music,
  Activity,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function AboutSection({ onOpenInquiry }) {
  const { t, isTelugu } = useLanguage();

  const focusAreas = [
    {
      title: isTelugu ? "ప్రత్యేక విద్య & IEP" : "Mentally Challenged & Special Education",
      desc: isTelugu ? "మేధో మరియు అభివృద్ధి అవసరాలకు అనుకూలమైన విద్యా ప్రణాళికలు" : "Adaptive curricula & IEPs tailored for intellectual and developmental needs",
      icon: BookOpen
    },
    {
      title: isTelugu ? "లక్ష్య ఆధారిత థెరపీలు" : "Targeted Therapies",
      desc: isTelugu ? "స్పీచ్, ఆక్యుపేషనల్ మరియు బిహేవియర్ శాస్త్రీయ చికిత్సలు" : "Speech, Occupational, and Behavioural evidence-backed therapy",
      icon: Heart
    },
    {
      title: isTelugu ? "సంభాషణ & కమ్యూనికేషన్ వికాసం" : "Communication Development",
      desc: isTelugu ? "స్పష్టమైన మాటలు, AAC పరికరాలు మరియు దృశ్య సంభాషణ మార్గాలు" : "Verbal articulation, AAC devices, and visual exchange support",
      icon: MessageSquare
    },
    {
      title: isTelugu ? "సానుకూల ప్రవర్తనా మద్దతు" : "Behavioural Support",
      desc: isTelugu ? "ప్రేమపూర్వక మార్గదర్శకత్వం మరియు భావోద్వేగ నియంత్రణ" : "Gentle positive reinforcement and emotional regulation",
      icon: Sparkles
    },
    {
      title: isTelugu ? "దైనందిన జీవన నైపుణ్యాలు (ADL)" : "ADL Activities (Daily Living)",
      desc: isTelugu ? "బ్రషింగ్, స్నానం, భోజనం, దుస్తులు మరియు స్వావలంబన" : "Brushing, bathing, eating, dressing, personal grooming, and practical life independence",
      icon: CheckCircle2
    },
    {
      title: isTelugu ? "24/7 నివాస / హాస్టల్ సంరక్షణ" : "Residential / Hostel Care",
      desc: isTelugu ? "24/7 ప్రశాంతమైన, సురక్షితమైన మరియు సెన్సరీ-అనుకూల వసతి" : "24/7 peaceful, safe, and sensory-friendly accommodations",
      icon: Home
    },
    {
      title: isTelugu ? "శారీరక వ్యాయామాలు & క్రీడలు" : "Physical Movement",
      desc: isTelugu ? "అనుకూల వ్యాయామాలు, సెన్సరీ తోటలో నడకలు మరియు ఫిట్‌నెస్" : "Adapted gymnastics, outdoor sensory garden walks, and fitness",
      icon: Activity
    },
    {
      title: isTelugu ? "సంగీతం & సృజనాత్మక కళలు" : "Music & Creative Activities",
      desc: isTelugu ? "లయ థెరపీ, సంగీత వాయిద్యాలు మరియు మానసిక ఉల్లాసం" : "Rhythm therapy, xylophones, and sensory-soothing melodies",
      icon: Music
    },
  ];

  return (
    <section id="about" className="py-10 sm:py-16 lg:py-24 bg-white relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Layout on Desktop, Stacking on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual & Philosophy Card */}
          <div className="lg:col-span-5 order-2 lg:order-1" data-aos="fade-right">
            <div className="relative rounded-3xl bg-brand-50/70 border border-brand-100 p-6 sm:p-8 space-y-6">
              
              {/* Plant Metaphor Card */}
              <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-brand-200 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-100 text-brand-800 flex items-center justify-center border border-brand-300">
                  <Sprout className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-xl text-gray-950 leading-snug">
                  {t('aboutSection.whyTitle', 'Why "Little Plant"?')}
                </h3>
                <p className="text-sm text-gray-700 font-medium leading-relaxed">
                  {t('aboutSection.whyDesc', 'We believe every child is like a tender little plant. Each sprout requires its own sunlight, nourishing soil, and patient tending to flourish. With individualized care and gentle guidance, every child blossoms at their own natural pace.')}
                </p>
                <div className="pt-2 flex items-center gap-3 border-t border-brand-200 text-xs font-bold text-brand-900">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-600" />
                  <span>{t('aboutSection.whyFoot', "Respecting every child's neurodiversity and pace")}</span>
                </div>
              </div>

              {/* Quick Facility Stat box */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-4 border-2 border-brand-200 text-center shadow-2xs">
                  <p className="text-2xl font-bold font-display text-brand-700">8</p>
                  <p className="text-xs font-bold text-gray-800 mt-0.5">{t('aboutSection.statPrograms', 'Integrated Programs')}</p>
                </div>
                <div className="bg-white rounded-2xl p-4 border-2 border-brand-200 text-center shadow-2xs">
                  <p className="text-2xl font-bold font-display text-brand-700">24/7</p>
                  <p className="text-xs font-bold text-gray-800 mt-0.5">{t('aboutSection.statCare', 'Compassionate Care')}</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Introduction & Focus Areas */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6" data-aos="fade-left">
            
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-900 bg-brand-100 px-3.5 py-1.5 rounded-full border border-brand-300">
                {t('aboutSection.badge', 'About Our Home & School')}
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-950 leading-tight">
                {t('aboutSection.title', 'A Welcoming Sanctuary for Learning, Therapy & Life Skills')}
              </h2>
            </div>

            <p className="text-base text-gray-800 leading-relaxed font-normal">
              {t('aboutSection.p1', 'Little Plant Autism Residential Home was created to offer families a dependable, transparent, and loving environment for children and youth on the autism spectrum. We combine round-the-clock residential warmth with certified clinical therapies and specialized education under one harmonious roof.')}
            </p>

            <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
              {t('aboutSection.p2', 'Rather than a rigid institutional setting, our campus feels like a joyful, peaceful home. Here, children develop the vital tools to communicate, practice everyday self-care, engage in musical and physical play, and build cherished social bonds.')}
            </p>

            {/* 8 Focus Pillars Grid */}
            <div className="pt-2">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">
                {t('aboutSection.pillarsTitle', 'Key Pillars of Our Comprehensive Support:')}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {focusAreas.map((area, idx) => {
                  const Icon = area.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-[#ecf4ec] hover:bg-white border-2 border-brand-200/80 hover:border-brand-500 transition shadow-2xs"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white text-brand-800 border border-brand-300 flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-gray-950">{area.title}</h5>
                        <p className="text-[11px] text-gray-700 font-medium leading-tight mt-0.5">{area.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/categories"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-700 hover:bg-brand-800 text-white font-bold rounded-xl text-sm shadow-sm transition"
              >
                <span>{isTelugu ? 'మా విభాగాలు చూడండి' : 'View Our Categories'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                type="button"
                onClick={() => onOpenInquiry && onOpenInquiry()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-brand-50 text-brand-950 font-bold rounded-xl text-sm border-2 border-brand-700 shadow-2xs transition cursor-pointer"
              >
                <span>{isTelugu ? 'అడ్మిషన్ల సంప్రదింపు' : 'Speak with an Admissions Guide'}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
