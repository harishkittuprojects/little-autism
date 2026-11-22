import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Mail, Calendar, Sprout, Heart, Building2, ShieldCheck } from 'lucide-react';
import { SERVICES_DATA, CHILDREN_WE_SUPPORT } from '../data/servicesData';
import { useLanguage } from '../context/LanguageContext';

export default function InquiryModal({ isOpen, onClose, preselectedService = "" }) {
  const { isTelugu } = useLanguage();

  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    childCondition: 'Autism Spectrum Disorder (ASD)',
    email: '',
    phone: '',
    serviceInterest: preselectedService || 'Speech and Communication Development',
    inquiryType: 'Program Inquiry',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  React.useEffect(() => {
    if (preselectedService) {
      if (preselectedService.includes("CSR") || preselectedService.includes("Donation")) {
        setFormData(prev => ({
          ...prev,
          serviceInterest: 'Campus Donation & CSR Partnership',
          inquiryType: 'CSR Partnership / Philanthropy'
        }));
      } else {
        setFormData(prev => ({ ...prev, serviceInterest: preselectedService }));
      }
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-brand-200 overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#e7f2e6] p-6 border-b-2 border-brand-300 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-2xl bg-white border-2 border-brand-300 flex items-center justify-center p-1 shadow-2xs">
              <img
                src="/images/logo.png"
                alt="Little Plant Autism Educational Academy Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 id="modal-title" className="text-lg sm:text-xl font-bold text-gray-950 font-display">
                {isTelugu ? 'లిటిల్ ప్లాంట్ ఆటిజం ఎడ్యుకేషనల్ అకాడమీ' : 'Little Plant Autism Educational Academy'}
              </h3>
              <p className="text-xs text-brand-900 font-bold">
                {isTelugu
                  ? 'అడ్మిషన్లు, థెరపీ మార్గదర్శకత్వం & CSR భాగస్వామ్య డెస్క్'
                  : 'Admissions, Therapy Guidance & CSR Partnership Desk'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-600 hover:text-gray-950 hover:bg-white rounded-full transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-[#ebf4ea] text-brand-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 font-display">
                {isTelugu ? 'మమ్మల్ని సంప్రదించినందుకు ధన్యవాదాలు' : 'Thank You for Connecting'}
              </h4>
              <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed">
                {isTelugu
                  ? 'మీ వివరాలు అందాయి. జిన్నారం క్యాంపస్ అడ్మిషన్ల కౌన్సిలర్ / CSR కోఆర్డినేటర్ 24 గంటల్లో మిమ్మల్ని సంప్రదిస్తారు.'
                  : `We have received your details regarding ${formData.serviceInterest}. Our admissions counselor / CSR coordinator from Jinnaram Campus will reach out within 24 hours.`}
              </p>
              
              <div className="bg-[#edf5ec] rounded-xl p-4 text-xs text-brand-900 border border-brand-200 text-left space-y-1.5 mt-4">
                <p className="font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-brand-600" /> {isTelugu ? '80G పన్ను మినహాయింపు రసీదులు & ఫారం 10BD:' : '80G Tax Deductible Receipts & Form 10BD:'}
                </p>
                <p className="text-gray-600">
                  {isTelugu
                    ? '80G / 12A కింద అధికారిక దాత రసీదు మరియు పన్ను ధృవీకరణ పత్రాలు మీ రిజిస్టర్డ్ ఇమెయిల్‌కు పంపబడతాయి.'
                    : 'Donor receipts and tax certificates will be issued under 80G / 12A directly to your registered email.'}
                </p>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-full shadow-xs transition cursor-pointer"
                >
                  {isTelugu ? 'మూసివేసి వెబ్‌సైట్ చూడండి' : 'Close & Continue Browsing'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs sm:text-sm text-gray-800 font-medium">
                {isTelugu
                  ? 'దయచేసి మీ వివరాలను క్రింద తెలపండి. తల్లిదండ్రులు, సంరక్షకులు, వైద్యులు మరియు CSR ప్రతినిధులకు స్వాగతం.'
                  : 'Please share your details below. We welcome parents, guardians, doctors, donors, and CSR representatives.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="inquiryType" className="block text-xs font-bold text-gray-950 uppercase tracking-wider mb-1">
                    {isTelugu ? 'విచారణ రకం *' : 'Inquiry Type *'}
                  </label>
                  <select
                    id="inquiryType"
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border-2 border-gray-300 text-xs sm:text-sm bg-white text-gray-900 font-medium outline-none focus:ring-2 focus:ring-brand-200 focus:border-brand-600"
                  >
                    <option value="Child Assessment & Admissions">
                      {isTelugu ? 'పిల్లల అంచనా & అడ్మిషన్లు (3-18 సం॥)' : 'Child Assessment & Admissions (Age 3-18)'}
                    </option>
                    <option value="CSR Partnership / Philanthropy">
                      {isTelugu ? 'CSR భాగస్వామ్యం / దాతృత్వం' : 'CSR Partnership / Philanthropic Donation'}
                    </option>
                    <option value="Hostel & Daycare Eligibility">
                      {isTelugu ? 'హాస్టల్ & డేకేర్ అర్హత (మే 2027)' : 'Hostel & Daycare Eligibility (June 2027)'}
                    </option>
                    <option value="Program & Therapy Inquiry">
                      {isTelugu ? 'థెరపీ & ప్రత్యేక విద్య విచారణ' : 'Therapy & Special Education Inquiry'}
                    </option>
                    <option value="Campus Tour Booking">
                      {isTelugu ? 'జిన్నారంలో క్యాంపస్ టూర్ బుకింగ్' : 'Campus Tour at Jinnaram'}
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="parentName" className="block text-xs font-bold text-gray-950 uppercase tracking-wider mb-1">
                    {isTelugu ? 'సంప్రదించే వ్యక్తి పేరు *' : 'Contact Person / Name *'}
                  </label>
                  <input
                    id="parentName"
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder={isTelugu ? 'ఉదా. రమేష్ కుమార్ / CSR హెడ్' : 'e.g. Ramesh Kumar / CSR Head'}
                    className="w-full px-3.5 py-2.5 rounded-xl border-2 border-gray-300 text-xs sm:text-sm text-gray-900 font-medium outline-none focus:ring-2 focus:ring-brand-200 focus:border-brand-600"
                  />
                </div>
              </div>

              {formData.inquiryType.includes("Child") || formData.inquiryType.includes("Hostel") || formData.inquiryType.includes("Therapy") ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#ecf4ec] p-3 rounded-2xl border-2 border-brand-200">
                  <div>
                    <label htmlFor="childCondition" className="block text-xs font-bold text-gray-950 uppercase tracking-wider mb-1">
                      {isTelugu ? 'పిల్లల పరిస్థితి / అవసరం' : "Child's Condition / Need"}
                    </label>
                    <select
                      id="childCondition"
                      value={formData.childCondition}
                      onChange={(e) => setFormData({ ...formData, childCondition: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 text-xs bg-white text-gray-900 font-medium outline-none"
                    >
                      {CHILDREN_WE_SUPPORT.map(c => (
                        <option key={c.id} value={c.name}>
                          {isTelugu && c.name_te ? c.name_te : c.name}
                        </option>
                      ))}
                      <option value="Seeking Formal Assessment">
                        {isTelugu ? 'ఇంకా నిర్ధారించబడలేదు / అంచనా కావాలి' : 'Not yet diagnosed / Seeking Assessment'}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="childAge" className="block text-xs font-bold text-gray-950 uppercase tracking-wider mb-1">
                      {isTelugu ? 'పిల్లల వయస్సు (3–18 సం॥)' : "Child's Age (3–18 yrs)"}
                    </label>
                    <input
                      id="childAge"
                      type="text"
                      value={formData.childAge}
                      onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                      placeholder={isTelugu ? 'ఉదా. 7 సంవత్సరాలు' : 'e.g. 7 years'}
                      className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 text-xs text-gray-900 font-medium outline-none"
                    />
                  </div>
                </div>
              ) : null}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-gray-950 uppercase tracking-wider mb-1">
                    {isTelugu ? 'ఇమెయిల్ చిరునామా *' : 'Email Address *'}
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contact@company.com or personal"
                    className="w-full px-3.5 py-2.5 rounded-xl border-2 border-gray-300 text-xs sm:text-sm text-gray-900 font-medium outline-none focus:ring-2 focus:ring-brand-200 focus:border-brand-600"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-gray-950 uppercase tracking-wider mb-1">
                    {isTelugu ? 'ఫోన్ / మొబైల్ నంబర్ *' : 'Phone / Mobile *'}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl border-2 border-gray-300 text-xs sm:text-sm text-gray-900 font-medium outline-none focus:ring-2 focus:ring-brand-200 focus:border-brand-600"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="serviceInterest" className="block text-xs font-bold text-gray-950 uppercase tracking-wider mb-1">
                  {isTelugu ? 'ఆసక్తి గల కార్యక్రమం / ఉద్దేశం' : 'Program or Purpose'}
                </label>
                <select
                  id="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border-2 border-gray-300 text-xs sm:text-sm bg-white text-gray-900 font-medium outline-none"
                >
                  {SERVICES_DATA.map(s => (
                    <option key={s.id} value={s.name}>
                      {isTelugu && s.name_te ? s.name_te : s.name}
                    </option>
                  ))}
                  <option value="Campus Donation & CSR Partnership">
                    {isTelugu ? 'క్యాంపస్ విరాళం & CSR భాగస్వామ్యం (80G అర్హత)' : 'Campus Donation & CSR Partnership (80G Eligible)'}
                  </option>
                  <option value="Schedule Campus Walkthrough">
                    {isTelugu ? 'జిన్నారం క్యాంపస్ సందర్శన' : 'Schedule Jinnaram Campus Walkthrough'}
                  </option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-gray-950 uppercase tracking-wider mb-1">
                  {isTelugu ? 'సందేశం లేదా ప్రశ్నలు (ఐచ్ఛికం)' : 'Notes or Inquiries (Optional)'}
                </label>
                <textarea
                  id="message"
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={isTelugu ? 'మీ పిల్లల అవసరాలు లేదా ఇతర సమాచారాన్ని ఇక్కడ వివరించండి...' : 'Share details regarding child needs, CSR requirements, or questions...'}
                  className="w-full px-3.5 py-2 rounded-xl border-2 border-gray-300 text-xs sm:text-sm text-gray-900 font-medium outline-none resize-none"
                ></textarea>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-gray-800 hover:text-black text-xs sm:text-sm font-bold cursor-pointer"
                >
                  {isTelugu ? 'రద్దు చేయి' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-7 py-3 bg-brand-700 hover:bg-brand-800 text-white font-bold rounded-full text-xs sm:text-sm shadow-sm hover:shadow-md transition transform active:scale-95 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>{isTelugu ? 'సమర్పిస్తున్నాము...' : 'Submitting...'}</span>
                  ) : (
                    <>
                      <span>{isTelugu ? 'వివరాలు సమర్పించండి' : 'Submit Inquiry'}</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
