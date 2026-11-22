import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShieldCheck, Heart, Sprout, Building2 } from 'lucide-react';
import CTASection from '../components/CTASection';
import { useLanguage } from '../context/LanguageContext';

export default function ContactPage({ onOpenInquiry }) {
  const { t, isTelugu } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    purpose: 'Child Assessment & Admissions',
    childAge: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <div className="min-h-screen bg-[#f8faf8]">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-brand-100/70 via-brand-50/50 to-transparent py-14 lg:py-20 border-b border-brand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border-2 border-brand-300 text-xs font-bold text-brand-900 shadow-2xs mb-4">
            <Mail className="w-4 h-4 text-brand-700" />
            <span>{t('contactPage.badge', 'Admissions & Contact Desk')}</span>
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-950 tracking-tight">
            {t('contactPage.title', 'Contact Us & Campus Enquiry')}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-700 font-medium max-w-2xl mx-auto leading-relaxed">
            {t('contactPage.desc', 'We are here to support parents, guardians, doctors, donors, and CSR representatives. Reach out to schedule a visit or discuss admissions.')}
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Direct Embedded Inquiry Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-9 border-2 border-brand-200 shadow-md">
              <div className="border-b border-brand-100 pb-5 mb-6">
                <h2 className="font-display font-bold text-xl sm:text-2xl text-gray-950">
                  {t('contactPage.formTitle', 'Send Us a Direct Message')}
                </h2>
                <p className="text-xs sm:text-sm text-gray-700 font-medium mt-1">
                  {t('contactPage.formSubtitle', 'Our admissions coordinators and clinical leads respond within 24 hours.')}
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#2d7a4d] flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-gray-950">
                    {t('contactPage.thankYou', 'Thank You for Reaching Out!')}
                  </h3>
                  <p className="text-sm text-gray-700 max-w-md mx-auto">
                    {t('contactPage.thankYouDesc', 'Your inquiry has been received. Our admissions and campus team will contact you shortly via phone and email.')}
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        purpose: 'Child Assessment & Admissions',
                        childAge: '',
                        message: ''
                      });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#2d7a4d] text-white font-bold rounded-full text-xs sm:text-sm shadow-sm hover:bg-[#23633d] transition cursor-pointer"
                  >
                    {t('contactPage.submitAnother', 'Submit Another Inquiry')}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-950 uppercase tracking-wider mb-1">
                        {t('contactPage.fullName', 'Full Name *')}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={isTelugu ? 'ఉదా. రమేష్ కుమార్' : 'e.g. Ramesh Kumar'}
                        className="w-full px-3.5 py-2.5 rounded-xl border-2 border-gray-300 text-sm bg-white text-gray-900 font-medium outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-200"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-950 uppercase tracking-wider mb-1">
                        {t('contactPage.phone', 'Phone Number *')}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl border-2 border-gray-300 text-sm bg-white text-gray-900 font-medium outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-950 uppercase tracking-wider mb-1">
                        {t('contactPage.email', 'Email Address *')}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="parent@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border-2 border-gray-300 text-sm bg-white text-gray-900 font-medium outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-200"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-950 uppercase tracking-wider mb-1">
                        {t('contactPage.purpose', 'Inquiry Purpose')}
                      </label>
                      <select
                        value={formData.purpose}
                        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border-2 border-gray-300 text-sm bg-white text-gray-900 font-medium outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-200"
                      >
                        <option value="Child Assessment & Admissions">
                          {isTelugu ? 'పిల్లల అంచనా & అడ్మిషన్లు' : 'Child Assessment & Admissions'}
                        </option>
                        <option value="Hostel & Residential Inquiry">
                          {isTelugu ? 'హాస్టల్ & నివాస విచారణ' : 'Hostel & Residential Inquiry'}
                        </option>
                        <option value="Clinical Therapy Sessions">
                          {isTelugu ? 'క్లినికల్ థెరపీ సెషన్లు' : 'Clinical Therapy Sessions'}
                        </option>
                        <option value="CSR Partnership / Philanthropy">
                          {isTelugu ? 'CSR భాగస్వామ్యం / దాతృత్వం' : 'CSR Partnership / Philanthropy'}
                        </option>
                        <option value="Schedule Campus Walkthrough">
                          {isTelugu ? 'జిన్నారం క్యాంపస్ సందర్శన' : 'Schedule Jinnaram Campus Walkthrough'}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-950 uppercase tracking-wider mb-1">
                      {t('contactPage.childAge', "Child's Age & Background (Optional)")}
                    </label>
                    <input
                      type="text"
                      value={formData.childAge}
                      onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                      placeholder={isTelugu ? 'ఉదా. 7 సంవత్సరాలు, మైల్డ్ సెన్సరీ అవసరాలు' : 'e.g. 7 years old, mild sensory sensitivities'}
                      className="w-full px-3.5 py-2.5 rounded-xl border-2 border-gray-300 text-sm bg-white text-gray-900 font-medium outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-200"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-950 uppercase tracking-wider mb-1">
                      {t('contactPage.message', 'Your Message or Questions')}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={isTelugu ? 'మీ బిడ్డ అవసరాలు, థెరపీ లక్ష్యాలు లేదా క్యాంపస్ గురించి మీ సందేశాన్ని ఇక్కడ రాయండి...' : "Tell us about your child's needs, therapy goals, or questions regarding campus facilities..."}
                      className="w-full px-3.5 py-2.5 rounded-xl border-2 border-gray-300 text-sm bg-white text-gray-900 font-medium outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-200 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#2d7a4d] hover:bg-[#23633d] text-white font-bold rounded-full text-sm shadow-md transition transform active:scale-95 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>{t('common.submitting', 'Submitting...')}</span>
                    ) : (
                      <>
                        <span>{t('contactPage.submitBtn', 'Submit Inquiry')}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Direct Contact Details & Visiting Hours */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Academy Address Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-brand-200 shadow-md space-y-5">
                <h3 className="font-display font-bold text-lg text-gray-950">
                  {isTelugu ? 'క్యాంపస్ చిరునామా & సంప్రదింపులు' : 'Campus Address & Contacts'}
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-gray-800 font-medium">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-100 border border-brand-300 text-brand-800 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-brand-700" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-950">
                        {isTelugu ? 'లిటిల్ ప్లాంట్ ఆటిజం రెసిడెన్షియల్ హోమ్' : 'Little Plant Autism Residential Home'}
                      </p>
                      <p className="text-gray-700 mt-0.5">
                        {isTelugu ? 'జిన్నారం, సంగారెడ్డి జిల్లా, తెలంగాణ, భారతదేశం' : 'Jinnaram, Sangareddy District, Telangana, India'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-100 border border-brand-300 text-brand-800 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-brand-700" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-950">
                        {isTelugu ? 'హెల్ప్‌లైన్ & అడ్మిషన్లు' : 'Helpline & Admissions'}
                      </p>
                      <p className="text-gray-700 mt-0.5">+91 98765 43210 / +91 91234 56789</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-100 border border-brand-300 text-brand-800 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-brand-700" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-950">
                        {isTelugu ? 'ఇమెయిల్ మద్దతు' : 'Email Support'}
                      </p>
                      <p className="text-gray-700 mt-0.5">admissions@littleplant.org / csr@littleplant.org</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-100 border border-brand-300 text-brand-800 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-brand-700" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-950">
                        {isTelugu ? 'సందర్శన & అంచనా వేళలు' : 'Visiting & Assessment Hours'}
                      </p>
                      <p className="text-gray-700 mt-0.5">
                        {isTelugu ? 'సోమవారం – శనివారం: ఉదయం 9:00 – సాయంత్రం 5:00' : 'Monday – Saturday: 9:00 AM – 5:00 PM'}
                      </p>
                      <p className="text-[11px] text-gray-500">
                        {isTelugu ? 'ముందస్తు అపాయింట్‌మెంట్ సిఫార్సు చేయబడింది' : 'Prior appointment recommended'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick CSR / Registration Highlight */}
              <div className="bg-[#ecf4ec] rounded-2xl p-5 border-2 border-brand-300 text-xs text-brand-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-[#2d7a4d]">
                  <Building2 className="w-4 h-4" />
                  <span>{isTelugu ? 'CSR & దాతృత్వ డెస్క్' : 'CSR & Philanthropy Desk'}</span>
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">
                  {isTelugu
                    ? 'అన్ని విరాళాలు 80G పన్ను మినహాయింపులకు అర్హత కలిగి ఉన్నాయి. సంస్థాగత CSR భాగస్వామ్యాల కోసం csr@littleplant.org లో సంప్రదించండి.'
                    : 'All donations are eligible for 80G tax deductions. For institutional CSR MoUs and campus walkthroughs, contact our CSR director directly at csr@littleplant.org.'}
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection onOpenInquiry={onOpenInquiry} />
    </div>
  );
}
