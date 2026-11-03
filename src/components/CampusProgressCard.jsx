import React from 'react';
import { Home, MapPin, Calendar, Sprout, CheckCircle2, ShieldCheck, Sparkles, Building2, HeartHandshake } from 'lucide-react';

export default function CampusProgressCard() {
  return (
    <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 my-6 sm:my-10" data-aos="fade-up">
      <div className="bg-[#e7f2e6] rounded-3xl p-6 sm:p-8 border-2 border-brand-300 shadow-md space-y-6">
        
        {/* Top Grid: Campus Overview & Funds Raised Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center border-b border-brand-300/80 pb-6">
          
          {/* Left Side: Campus Identity & Mentally Challenged Support */}
          <div className="lg:col-span-6 flex items-start gap-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border-2 border-brand-400 text-brand-800 flex items-center justify-center shrink-0 p-2.5 shadow-xs">
              <svg viewBox="0 0 24 24" className="w-full h-full text-brand-800" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18M5 21V9l7-5 7 5v12M9 13h2v4H9zM13 13h2v4h-2z" />
                <path d="M12 4v-2M10 2c0 1 1 2 2 2s2-1 2-2" strokeWidth="1.8" />
              </svg>
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-900 bg-white/80 px-2.5 py-0.5 rounded-full border border-brand-300">
                Permanent Campus Project
              </span>
              <h3 className="font-display font-bold text-lg sm:text-2xl text-gray-950 leading-snug mt-1">
                Sanctuary for Mentally Challenged & Special Children
              </h3>
              <p className="text-xs sm:text-sm text-gray-800 flex items-center gap-1.5 mt-1 font-semibold">
                <MapPin className="w-4 h-4 text-brand-800 shrink-0" />
                <span>Jinnaram, Sangareddy Dist, Telangana</span>
              </p>
            </div>
          </div>

          {/* Right Side: Funds Raised & Construction Meter */}
          <div className="lg:col-span-6 space-y-3 bg-white/85 rounded-2xl p-4 sm:p-5 border border-brand-300 shadow-2xs">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-bold text-gray-950">
              <span className="flex items-center gap-1.5 text-brand-900">
                <Sprout className="w-4 h-4 text-brand-800" />
                <span>Campus Construction & Funds Raised</span>
              </span>
              <span className="text-brand-900 font-extrabold text-xs bg-brand-200/90 px-2.5 py-1 rounded-lg">
                ₹85 Lakhs Raised (68%)
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3.5 rounded-full bg-[#c0dec0] overflow-hidden p-0.5 shadow-inner">
              <div
                className="h-full rounded-full bg-gradient-to-r from-brand-600 to-brand-800 transition-all duration-1000 ease-out"
                style={{ width: '68%' }}
              />
            </div>

            <div className="flex flex-wrap items-center justify-between text-xs text-gray-800 font-semibold pt-1">
              <span className="text-gray-700">Campaign Goal: <strong>₹1.25 Crore</strong></span>
              <span className="flex items-center gap-1 text-brand-900">
                <Calendar className="w-3.5 h-3.5 text-brand-800" />
                <span>Completion Target: 31 May 2027</span>
              </span>
            </div>
          </div>

        </div>

        {/* Bottom 4 Key Impact Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          
          {/* 1. Mentally Challenged Care */}
          <div className="bg-white rounded-2xl p-4 border border-brand-200 shadow-2xs space-y-1.5 hover:border-brand-400 transition">
            <div className="flex items-center gap-2 text-brand-800 font-bold text-xs uppercase tracking-wider">
              <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              </div>
              <span>Mentally Challenged</span>
            </div>
            <h4 className="font-bold text-xs sm:text-sm text-gray-950">Specialized Child Care</h4>
            <p className="text-[11px] text-gray-700 leading-relaxed">
              Loving care, special education & individualized therapies for mentally challenged, autistic & neurodivergent children (Ages 3–18).
            </p>
          </div>

          {/* 2. ADL Activities */}
          <div className="bg-white rounded-2xl p-4 border border-brand-200 shadow-2xs space-y-1.5 hover:border-brand-400 transition">
            <div className="flex items-center gap-2 text-brand-800 font-bold text-xs uppercase tracking-wider">
              <div className="w-6 h-6 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" />
              </div>
              <span>ADL Activities</span>
            </div>
            <h4 className="font-bold text-xs sm:text-sm text-gray-950">Daily Living Independence</h4>
            <p className="text-[11px] text-gray-700 leading-relaxed">
              Structured daily routines in personal hygiene, brushing, bathing, dining habits, dressing, and lifelong practical independence.
            </p>
          </div>

          {/* 3. CSR Certified */}
          <div className="bg-white rounded-2xl p-4 border border-brand-200 shadow-2xs space-y-1.5 hover:border-brand-400 transition">
            <div className="flex items-center gap-2 text-brand-800 font-bold text-xs uppercase tracking-wider">
              <div className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                <Building2 className="w-3.5 h-3.5 text-blue-700" />
              </div>
              <span>CSR Certified</span>
            </div>
            <h4 className="font-bold text-xs sm:text-sm text-gray-950">CSR Donations Cheyavachu</h4>
            <p className="text-[11px] text-gray-700 leading-relaxed">
              Companies & corporate institutions can contribute their mandatory CSR funds directly for school and campus development.
            </p>
          </div>

          {/* 4. Claim from Government (80G Tax Exemption) */}
          <div className="bg-white rounded-2xl p-4 border border-brand-200 shadow-2xs space-y-1.5 hover:border-brand-400 transition">
            <div className="flex items-center gap-2 text-brand-800 font-bold text-xs uppercase tracking-wider">
              <div className="w-6 h-6 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-700" />
              </div>
              <span>Government Tax Claim</span>
            </div>
            <h4 className="font-bold text-xs sm:text-sm text-gray-950">Claim Money in Tax Rebate</h4>
            <p className="text-[11px] text-gray-700 leading-relaxed">
              All donation money can be claimed for 50% tax exemption from the government under Section 80G when filing income tax returns.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}