import React from 'react';
import { ShieldCheck, HeartHandshake, Building2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function RegistrationsAndCSR({ onOpenInquiry }) {
  const { isTelugu } = useLanguage();

  const facilitiesList = [
    { en: "Special Education Classrooms", te: "ప్రత్యేక విద్యా తరగతి గదులు" },
    { en: "Therapy Suites (Speech, OT, BT)", te: "థెరపీ సూట్లు (స్పీచ్, OT, బిహేవియర్)" },
    { en: "ADL & Self-Care Training Suites", te: "ADL & స్వీయ సంరక్షణ శిక్షణా గదులు" },
    { en: "Swimming Pool & Sports Grounds", te: "స్విమ్మింగ్ పూల్ & క్రీడా ప్రాంగణం" },
    { en: "Creative Music & Art Studios", te: "సంగీతం & కళా స్టూడియోలు" },
    { en: "24/7 Residential Hostel & Daycare", te: "24/7 నివాస హాస్టల్ & డేకేర్" }
  ];

  return (
    <section id="donate-csr" className="py-10 sm:py-16 lg:py-24 bg-[#f8faf7] border-t border-brand-100 relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-xs font-semibold text-brand-800 shadow-2xs mb-3">
            <Building2 className="w-3.5 h-3.5 text-brand-600" />
            <span>{isTelugu ? 'దాతృత్వం & CSR భాగస్వామ్యాలు' : 'Philanthropy & CSR Partnerships'}</span>
          </div>

          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 tracking-tight leading-tight">
            {isTelugu ? 'ప్రత్యేక పిల్లలకు ఉజ్వల భవిష్యత్తును నిర్మించడంలో తోడ్పడండి' : 'Help Us Build a Brighter Future for Special Children'}
          </h2>

          <div className="w-12 h-1 bg-brand-600 rounded-full mx-auto mt-3 mb-4" />

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {isTelugu
              ? 'తెలంగాణలోని జిన్నారంలో మా అత్యాధునిక క్యాంపస్‌ను నిర్మించడానికి వ్యక్తులు, దాతలు, స్వచ్ఛంద సంస్థలు మరియు CSR భాగస్వాములను ఆహ్వానిస్తున్నాము.'
              : 'We invite individuals, philanthropists, institutions, and Corporate Social Responsibility (CSR) partners to join hands in building our state-of-the-art campus in Jinnaram, Telangana.'}
          </p>
        </div>

        {/* 2-Column Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" data-aos="fade-up">
          
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 border border-brand-200/90 shadow-soft space-y-4">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-gray-900 leading-snug">
              {isTelugu ? 'మీ సహకారం శాశ్వత మార్పును తెస్తుంది' : 'Your Contribution Creates Lasting Impact'}
            </h3>
            
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {isTelugu
                ? 'ప్రతి బిడ్డ ప్రేమ, విద్య, సంరక్షణ మరియు తమ ప్రతిభను చాటుకునే అవకాశానికి అర్హులు. 22 ఆగస్టు 2026న భూమి పూజ పూర్తి చేసుకుని, 31 మే 2027 నాటికి క్యాంపస్ నిర్మాణాన్ని పూర్తి చేసే దిశగా పనులు చురుగ్గా సాగుతున్నాయి.'
                : 'Every child deserves love, education, care, and an opportunity to discover their hidden talents. Following the auspicious Bhoomi Puja performed on 22 August 2026, construction on our permanent Jinnaram campus is actively underway toward our 31 May 2027 completion target.'}
            </p>

            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-800">
                {isTelugu ? 'ఒకే పైకప్పు క్రింద మీ విరాళాలు సమకూర్చే సౌకర్యాలు:' : 'What Your Contributions Support Under One Roof:'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                {facilitiesList.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                    <span>{isTelugu ? item.te : item.en}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenInquiry && onOpenInquiry("CSR Partnership / Campus Donation")}
                className="px-6 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-full text-xs sm:text-sm shadow-xs transition inline-flex items-center gap-2 cursor-pointer"
              >
                <span>{isTelugu ? 'క్యాంపస్ అభివృద్ధి భాగస్వామిగా చేరండి' : 'Partner for Campus Development'}</span>
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
              {isTelugu
                ? 'నేడే విరాళం ఇవ్వండి. ఆశను నింపండి. జీవితాల్లో వెలుగులు నింపండి.'
                : 'Donate Today. Build Hope. Empower Abilities. Transform Lives.'}
            </h4>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {isTelugu
                ? 'బిడ్డ ఎదుగుదలకు వైకల్యం అడ్డంకి కారాదు. ప్రతి బిడ్డకు సంరక్షణ, విద్య మరియు ప్రకాశించే అవకాశం లభించే ఒక దివ్య అభయారణ్యాన్ని కలిసి నిర్మిద్దాం.'
                : 'A child’s disability should never limit their opportunity to learn, grow, and discover their abilities. Together, we can build a sanctuary where every child receives care, education, and an opportunity to shine.'}
            </p>

            <div className="p-4 rounded-2xl bg-white border border-brand-200/80 text-xs text-gray-700 space-y-2 shadow-2xs">
              <div className="flex items-center gap-2 font-bold text-brand-900">
                <Building2 className="w-4 h-4 text-brand-700 shrink-0" />
                <span>{isTelugu ? 'CSR సర్టిఫైడ్ & ప్రభుత్వ పన్ను మినహాయింపు' : 'CSR Certified & Government Tax Exemption'}</span>
              </div>
              <p className="text-[11px] text-gray-600 leading-relaxed">
                • <strong>{isTelugu ? 'CSR సర్టిఫికేషన్:' : 'CSR Certification:'}</strong> {isTelugu ? 'కంపెనీలు తమ CSR నిధుల ద్వారా విరాళాలు అందించవచ్చు.' : 'Companies can donate and partner with us through CSR funds.'}<br />
                • <strong>{isTelugu ? 'పన్ను మినహాయింపు:' : 'Tax Rebate:'}</strong> {isTelugu ? 'సెక్షన్ 80G కింద విరాళాలపై 50% పన్ను మినహాయింపును క్లెయిమ్ చేసుకోవచ్చు.' : 'Donation money can be claimed for tax deduction from the government under Section 80G.'}
              </p>
              <div className="pt-1 text-[11px] text-gray-600 border-t border-gray-100">
                <p>{isTelugu ? 'ప్రాంతం: జిన్నారం, సంగారెడ్డి జిల్లా, తెలంగాణ, భారతదేశం' : 'Location: Jinnaram, Sangareddy Dist, Telangana, India'}</p>
                <p className="font-semibold text-brand-800 mt-0.5">{isTelugu ? 'అడ్మిషన్లు & CSR హెల్ప్‌లైన్:' : 'Admissions & CSR Helpline:'} +91 98765 43210</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
