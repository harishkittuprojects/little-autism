import React, { useEffect } from 'react';
import LoginForm from '../components/LoginForm';
import { Sprout, ShieldCheck, Heart, Clock, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-50/70 via-white to-brand-50/40 py-12 lg:py-20 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Top Breadcrumb / Title Info */}
        <div className="text-center mb-8" data-aos="fade-up">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-100/70 px-3.5 py-1.5 rounded-full border border-brand-200">
            Parent & Staff Portal
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mt-3">
            User Login
          </h1>
          <p className="text-sm text-gray-600 mt-2 max-w-md mx-auto">
            Secure family access to daily schedules, therapist notes, sensory milestones, and hostel updates.
          </p>
        </div>

        {/* Center Grid: Form & Informative Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-4xl mx-auto">
          
          {/* Form Column */}
          <div className="lg:col-span-7" data-aos="fade-up">
            <LoginForm />
          </div>

          {/* Right Column: Portal Highlights for Parents */}
          <div className="lg:col-span-5 space-y-4" data-aos="fade-left" data-aos-delay="100">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-brand-100 shadow-soft space-y-4">
              <h3 className="font-display font-bold text-base text-gray-900 flex items-center gap-2">
                <Heart className="w-4 h-4 text-brand-500" />
                <span>What's inside the Family Portal?</span>
              </h3>

              <ul className="space-y-3 text-xs text-gray-600">
                <li className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900 block">Daily Activity Timelines</strong>
                    <span>Real-time routine schedules, meals, and rest periods</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <FileText className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900 block">Therapist Milestone Reports</strong>
                    <span>Speech, occupational & behaviour therapist observations</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900 block">24/7 Hostel Care Logs</strong>
                    <span>Peace of mind with prompt caregiver check-ins</span>
                  </div>
                </li>
              </ul>

              <div className="pt-2 border-t border-gray-100 text-center">
                <p className="text-[11px] text-gray-500">
                  New to Little Little Plant?{' '}
                  <Link to="/" className="text-brand-600 font-semibold hover:underline">
                    Explore our home & programs
                  </Link>
                </p>
              </div>
            </div>

            <div className="bg-brand-50/80 rounded-2xl p-4 border border-brand-200 text-xs text-brand-800 flex items-center gap-3">
              <Sprout className="w-5 h-5 text-brand-600 shrink-0" />
              <span>Questions about portal credentials? Contact our support desk at +1 (800) 555-PLANT.</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
