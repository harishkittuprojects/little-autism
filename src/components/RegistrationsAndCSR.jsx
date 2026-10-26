import React from 'react';
import { REGISTRATIONS_APPROVALS } from '../data/servicesData';
import { ShieldCheck, FileCheck, HeartHandshake, Building2, Download, ArrowRight, Phone, CheckCircle2 } from 'lucide-react';

export default function RegistrationsAndCSR({ onOpenInquiry }) {
  return (
    <section id="donate-csr" className="py-10 sm:py-16 lg:py-24 bg-[#f8faf7] border-t border-brand-100 relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-xs font-semibold text-brand-800 shadow-2xs mb-3">
            <Building2 className="w-3.5 h-3.5 text-brand-600" />
            <span>Philanthropy & CSR Partnerships</span>
          </div>

          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 tracking-tight leading-tight">
            Help Us Build a Brighter Future for Special Children
          </h2>

          <div className="w-12 h-1 bg-brand-600 rounded-full mx-auto mt-3 mb-4" />

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            We invite individuals, philanthropists, institutions, and Corporate Social Responsibility (CSR) partners to join hands in building our state-of-the-art campus in Jinnaram, Telangana.
          </p>
        </div>

        {/* 2-Column Overview: Campus Vision & Donation Impact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" data-aos="fade-up">
          
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 border border-brand-200/90 shadow-soft space-y-4">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-gray-900 leading-snug">
              Your Contribution Creates Lasting Impact
            </h3>
            
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Every child deserves love, education, care, and an opportunity to discover their hidden talents. Following the auspicious <strong>Bhoomi Puja performed on 22 August 2026</strong>, construction on our permanent Jinnaram campus is actively underway toward our <strong>31 May 2027 completion target</strong>.
            </p>

            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-800">
                What Your Contributions Support Under One Roof:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>Special Education Classrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>Therapy Suites (Speech, OT, BT)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>ADL & Self-Care Training Suites</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>Swimming Pool & Sports Grounds</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>Creative Music & Art Studios</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>24/7 Residential Hostel & Daycare</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenInquiry && onOpenInquiry("CSR Partnership / Campus Donation")}
                className="px-6 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-full text-xs sm:text-sm shadow-xs transition inline-flex items-center gap-2"
              >
                <span>Partner for Campus Development</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Quote & Direct Impact Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#edf5ec] to-white rounded-3xl p-7 sm:p-9 border border-brand-200/90 shadow-soft space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-white border border-brand-200 text-brand-700 flex items-center justify-center shadow-2xs">
              <HeartHandshake className="w-6 h-6 text-brand-600" />
            </div>

            <h4 className="font-display font-bold text-xl text-gray-900 leading-snug">
              Donate Today. Build Hope. Empower Abilities. Transform Lives.
            </h4>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              A child’s disability should never limit their opportunity to learn, grow, and discover their abilities. Together, we can build a sanctuary where every child receives care, education, and an opportunity to shine.
            </p>

            <div className="p-4 rounded-2xl bg-white border border-brand-200/80 text-xs text-gray-700 space-y-1.5 shadow-2xs">
              <p className="font-semibold text-brand-900">Direct CSR & Philanthropy Desk:</p>
              <p className="text-gray-600">Location: Jinnaram, Telangana, India</p>
              <p className="text-gray-600 font-medium">Helpline: +1 (800) 555-PLANT / +91 (Admissions & CSR)</p>
            </div>
          </div>

        </div>

        {/* Legal Registrations & Tax Approvals Section (High Trust) */}
        <div className="bg-white rounded-3xl p-7 sm:p-10 border border-brand-200/90 shadow-soft space-y-6" data-aos="fade-up">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-100 pb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
                Statutory Compliance & Legal Approvals
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-gray-900 mt-2">
                Our Registrations and Approvals
              </h3>
            </div>

            <div className="text-xs text-gray-500 max-w-sm">
              Relevant certificates and documentation can be shared with prospective donors and CSR partners for due diligence and verification.
            </div>
          </div>

          {/* Cards for 80G, 12A/12AB, Form 10BD, CSR, Telangana RPwD */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {REGISTRATIONS_APPROVALS.map((reg, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#f8faf7] border border-brand-200/80 hover:border-brand-400 hover:bg-white transition-all duration-200 space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-xs font-bold text-brand-800 bg-brand-100/70 px-2 py-0.5 rounded-md border border-brand-200">
                      {reg.code}
                    </span>
                    <span className="text-[10px] font-semibold text-gray-500">
                      {reg.badge}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-sm text-gray-900">
                    {reg.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed mt-1">
                    {reg.desc}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-[11px] font-semibold text-brand-700">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
                  <span>Verified & Documented</span>
                </div>
              </div>
            ))}

            {/* Inquire for verification documents card */}
            <div className="p-4 rounded-2xl bg-[#edf5ec] border border-brand-300 flex flex-col justify-between text-center sm:text-left">
              <div>
                <span className="font-mono text-xs font-bold text-brand-800 bg-white px-2 py-0.5 rounded-md border border-brand-200 inline-block mb-1.5">
                  Due Diligence
                </span>
                <h4 className="font-display font-bold text-sm text-gray-900">
                  Request Compliance Dossier
                </h4>
                <p className="text-xs text-gray-600 mt-1">
                  Obtain audited statements, 80G copies, 12A certificates, and building permission files for your CSR committee.
                </p>
              </div>

              <button
                type="button"
                onClick={() => onOpenInquiry && onOpenInquiry("CSR Due Diligence Documentation")}
                className="mt-3 w-full py-2 px-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl text-xs transition text-center"
              >
                Request Documents
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
