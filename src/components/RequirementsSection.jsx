import React, { useState } from 'react';
import {
  FileText,
  CheckCircle2,
  Calendar,
  Users,
  ShieldCheck,
  ClipboardList,
  Phone,
  ArrowRight,
  Heart,
  HelpCircle,
  Building2,
  Sparkles,
  Award,
  Stethoscope,
  Smile
} from 'lucide-react';

export default function RequirementsSection({ onOpenInquiry }) {
  const [activeTab, setActiveTab] = useState('admissions'); // 'admissions' | 'campus-needs'

  // Admission Criteria & Required Documents
  const eligibilityItems = [
    {
      title: "Age Eligibility",
      desc: "Children and young adults aged 3 to 18 years across varying developmental milestones.",
      icon: Calendar
    },
    {
      title: "Neurodevelopmental Conditions",
      desc: "Autism Spectrum Disorder (ASD), ADHD, Speech & Language Delay, Down Syndrome, ID, and GDD.",
      icon: Smile
    },
    {
      title: "Assessment & Readiness",
      desc: "Baseline observational assessment to match the child with suitable therapy and educator ratios.",
      icon: Stethoscope
    },
    {
      title: "Parental Partnership",
      desc: "Active commitment from parents/guardians for continuous routine reinforcement at home.",
      icon: Users
    }
  ];

  const requiredDocuments = [
    {
      title: "Clinical / Psychological Assessment",
      desc: "Recent diagnostic evaluation report from a certified psychologist, neurologist, or pediatrician.",
      required: true
    },
    {
      title: "Birth Certificate & National ID",
      desc: "Child's birth certificate and government photo ID (Aadhaar or equivalent for child & parents).",
      required: true
    },
    {
      title: "Past IEP & Therapy Reports",
      desc: "Speech, occupational, or special education records from previous centers, if previously enrolled.",
      required: false
    },
    {
      title: "Medical & Immunization Records",
      desc: "Complete allergy details, ongoing medication prescriptions, dietary needs, and vaccine history.",
      required: true
    },
    {
      title: "Disability / RPwD Certificate",
      desc: "Telangana state or central RPwD certificate (required for government subsidies and tax concessions).",
      required: false
    }
  ];

  const admissionSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      desc: "Reach out via our helpline or online form to discuss your child's profile with our admissions lead."
    },
    {
      step: "02",
      title: "Child Observation Session",
      desc: "A gentle, zero-stress interactive session with our speech and behavioral specialists."
    },
    {
      step: "03",
      title: "Personalized IEP Roadmap",
      desc: "Our clinical team formulates an Individualized Education Program tailored to the child's strengths."
    },
    {
      step: "04",
      title: "Welcome & Onboarding",
      desc: "Gradual transition into day school or residential hostel suites with assigned caregiver support."
    }
  ];

  // Campus Facility & Sponsorship Requirements (CSR & Philanthropy Wishlist)
  const campusNeeds = [
    {
      title: "Sensory Therapy Suites",
      desc: "Suspended vestibular swings, sensory lighting tubes, tactile fiber optics, and crash mats.",
      badge: "High Priority",
      icon: Sparkles
    },
    {
      title: "Special Education Classroom Kits",
      desc: "Montessori tactile tools, AAC digital communication tablets, and multi-sensory reading aids.",
      badge: "Educational",
      icon: FileText
    },
    {
      title: "ADL Training Infrastructure",
      desc: "Adapted kitchenettes, child-friendly self-care grooming units, and functional living suites.",
      badge: "Life Skills",
      icon: CheckCircle2
    },
    {
      title: "Hydrotherapy & Sports Equipment",
      desc: "Heated hydrotherapy pool floatation gear, balance obstacle tracks, and soft gym mats.",
      badge: "Physical Care",
      icon: Award
    },
    {
      title: "24/7 Hostel Furnishings",
      desc: "Acoustic-dampened bedroom suites, ergonomic hypoallergenic bedding, and medical nursing supplies.",
      badge: "Residential",
      icon: Building2
    },
    {
      title: "Nutritional Center Supplies",
      desc: "Industrial blender stations, sensory-adapted feeding cutlery, and dietitian food preparation gear.",
      badge: "Wellness",
      icon: Heart
    }
  ];

  return (
    <section id="requirements" className="py-14 sm:py-20 lg:py-24 bg-[#f8faf8] relative scroll-mt-20 border-t border-brand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border-2 border-emerald-200 text-xs font-bold text-[#1e5e38] shadow-2xs">
            <ClipboardList className="w-4 h-4 text-[#2d7a4d]" />
            <span>Guidelines & Criteria</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-950 tracking-tight">
            Academy & Admission Requirements
          </h2>

          <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about eligibility, documentation, and the gentle admission pathway into Little Plant Autism Residential Home.
          </p>
        </div>

        {/* Tab Toggle: Admissions vs Campus Needs */}
        <div className="flex justify-center mt-8 sm:mt-10" data-aos="fade-up" data-aos-delay="50">
          <div className="inline-flex bg-white p-1.5 rounded-full border-2 border-brand-200 shadow-xs">
            <button
              onClick={() => setActiveTab('admissions')}
              className={`px-5 sm:px-7 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                activeTab === 'admissions'
                  ? 'bg-[#2d7a4d] text-white shadow-md'
                  : 'text-gray-700 hover:text-[#2d7a4d]'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Admission & Enrollment</span>
            </button>
            <button
              onClick={() => setActiveTab('campus-needs')}
              className={`px-5 sm:px-7 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                activeTab === 'campus-needs'
                  ? 'bg-[#2d7a4d] text-white shadow-md'
                  : 'text-gray-700 hover:text-[#2d7a4d]'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Campus Facility Needs (CSR)</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Admissions & Enrollment */}
        {activeTab === 'admissions' && (
          <div className="mt-10 sm:mt-12 space-y-12">
            
            {/* Top Grid: Eligibility Criteria & Required Documents */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Eligibility Criteria */}
              <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-200 shadow-md space-y-6" data-aos="fade-right">
                <div className="border-b border-brand-100 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2d7a4d]">Who Can Apply</span>
                  <h3 className="font-display font-bold text-2xl text-gray-950 mt-1">
                    Student Eligibility Criteria
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    We maintain an inclusive, loving learning environment tailored to each child's individual abilities.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {eligibilityItems.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="bg-[#ecf4ec] rounded-2xl p-4 border border-brand-200 space-y-2">
                        <div className="w-10 h-10 rounded-xl bg-white border border-brand-300 text-[#2d7a4d] flex items-center justify-center shadow-2xs">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="font-display font-bold text-sm text-gray-950">
                          {item.title}
                        </h4>
                        <p className="text-xs text-gray-700 leading-relaxed font-medium">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="p-4 rounded-2xl bg-brand-50/80 border border-brand-200 text-xs text-brand-950 font-semibold flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#2d7a4d] shrink-0" />
                  <span>Low student-to-caregiver ratios guaranteed for individualized safety and attention.</span>
                </div>
              </div>

              {/* Right Column: Required Documents Checklist */}
              <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-200 shadow-md space-y-6" data-aos="fade-left">
                <div className="border-b border-brand-100 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2d7a4d]">Document Checklist</span>
                  <h3 className="font-display font-bold text-2xl text-gray-950 mt-1">
                    Documents for Enrollment
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    Please prepare these documents for the assessment and admissions confirmation.
                  </p>
                </div>

                <ul className="space-y-3.5">
                  {requiredDocuments.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-[#f8faf8] border border-gray-200 hover:border-brand-300 transition-colors">
                      <div className="mt-0.5">
                        <CheckCircle2 className="w-5 h-5 text-[#2d7a4d] shrink-0" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <strong className="text-sm font-bold text-gray-950">{doc.title}</strong>
                          {doc.required ? (
                            <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-red-100 text-red-700 border border-red-200">
                              Mandatory
                            </span>
                          ) : (
                            <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                              Optional / If Available
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-600 mt-1 leading-relaxed font-medium">
                          {doc.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Bottom 4-Step Admission Journey */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-brand-200 shadow-md" data-aos="fade-up">
              <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2d7a4d]">How It Works</span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-gray-950 mt-1">
                  Our 4-Step Admission Journey
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  We ensure the transition is gradual, compassionate, and comfortable for both child and family.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                {admissionSteps.map((step, idx) => (
                  <div key={idx} className="relative bg-[#f8faf8] rounded-2xl p-5 border-2 border-brand-200 hover:border-[#2d7a4d] transition-colors">
                    <span className="font-display font-extrabold text-3xl text-[#2d7a4d]/20 block mb-2">
                      {step.step}
                    </span>
                    <h4 className="font-display font-bold text-base text-gray-950 mb-1.5">
                      {step.title}
                    </h4>
                    <p className="text-xs text-gray-700 leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Call to action inside admission box */}
              <div className="mt-8 pt-6 border-t border-brand-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-xs text-gray-700 font-semibold text-center sm:text-left">
                  <Phone className="w-5 h-5 text-[#2d7a4d] shrink-0" />
                  <span>Have questions regarding admission eligibility? Call our admissions lead at +91 98765 43210</span>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenInquiry && onOpenInquiry("Child Assessment & Admissions")}
                  className="px-6 py-3 bg-[#2d7a4d] hover:bg-[#23633d] text-white font-bold rounded-full text-xs sm:text-sm shadow-md transition transform active:scale-95 inline-flex items-center gap-2 shrink-0 cursor-pointer"
                >
                  <span>Request Child Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Campus Development & Facility Requirements (For Donors & CSR) */}
        {activeTab === 'campus-needs' && (
          <div className="mt-10 sm:mt-12 space-y-8" data-aos="fade-up">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-brand-200 shadow-md">
              <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2d7a4d]">Infrastructure & Sponsorship</span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-gray-950 mt-1">
                  Campus Equipment & Material Requirements
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Philanthropists and Corporate CSR partners can sponsor specific facility wings and therapeutic equipment for our permanent Jinnaram sanctuary.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {campusNeeds.map((need, idx) => {
                  const Icon = need.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-[#f8faf8] rounded-2xl p-6 border-2 border-brand-200 hover:border-[#2d7a4d] hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="w-11 h-11 rounded-xl bg-white border border-brand-300 text-[#2d7a4d] flex items-center justify-center shadow-2xs">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-emerald-100 text-[#143823] border border-emerald-200">
                            {need.badge}
                          </span>
                        </div>
                        <h4 className="font-display font-bold text-base text-gray-950">
                          {need.title}
                        </h4>
                        <p className="text-xs text-gray-700 leading-relaxed font-medium">
                          {need.desc}
                        </p>
                      </div>

                      <div className="mt-5 pt-3 border-t border-gray-200">
                        <button
                          type="button"
                          onClick={() => onOpenInquiry && onOpenInquiry(`CSR Sponsorship: ${need.title}`)}
                          className="text-xs font-bold text-[#2d7a4d] hover:underline inline-flex items-center gap-1.5 cursor-pointer"
                        >
                          <span>Sponsor this equipment</span>
                          <span>→</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Statutory Note */}
              <div className="mt-10 p-5 rounded-2xl bg-[#ecf4ec] border-2 border-brand-300 text-xs text-brand-950 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#2d7a4d] shrink-0" />
                  <div>
                    <strong className="block text-sm text-gray-950">80G Tax Exemption & 12A Certified</strong>
                    <span className="text-gray-700 font-medium">All equipment sponsorships and monetary contributions receive immediate 80G tax benefit receipts & Form 10BD acknowledgment.</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenInquiry && onOpenInquiry("CSR Partnership / Campus Equipment Sponsorship")}
                  className="px-6 py-2.5 bg-[#2d7a4d] hover:bg-[#23633d] text-white font-bold rounded-full text-xs shadow-sm transition shrink-0 cursor-pointer"
                >
                  Partner With Us
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

