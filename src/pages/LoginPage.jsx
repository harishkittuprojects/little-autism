import React, { useEffect } from 'react';
import LoginForm from '../components/LoginForm';
import { Sprout, ShieldCheck, Heart, Clock, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-100/60 via-[#f8faf8] to-brand-50/50 py-12 lg:py-20 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Top Breadcrumb / Title Info */}
        <div className="text-center mb-8" data-aos="fade-up">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-900 bg-white px-4 py-1.5 rounded-full border-2 border-brand-300 shadow-2xs">
            Parent & Staff Portal
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-gray-950 mt-3">
            User Login
          </h1>
          <p className="text-sm text-gray-700 font-medium mt-2 max-w-md mx-auto">
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
            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-brand-200 shadow-md space-y-4">
              <h3 className="font-display font-bold text-base text-gray-950 flex items-center gap-2">
                <Heart className="w-4 h-4 text-brand-700" />
                <span>What's inside the Family Portal?</span>
              </h3>

              <ul className="space-y-3 text-xs text-gray-700">
                <li className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-950 block">Daily Activity Timelines</strong>
                    <span className="text-gray-700 font-medium">Real-time routine schedules, meals, and rest periods</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <FileText className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-950 block">Therapist Milestone Reports</strong>
                    <span className="text-gray-700 font-medium">Speech, occupational & behaviour therapist observations</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-950 block">24/7 Hostel Care Logs</strong>
                    <span className="text-gray-700 font-medium">Peace of mind with prompt caregiver check-ins</span>
                  </div>
                </li>
              </ul>

              <div className="pt-2 border-t border-brand-100 text-center">
                <p className="text-[11px] text-gray-700 font-medium">
                  New to Little Plant?{' '}
                  <Link to="/" className="text-brand-800 font-bold hover:underline">
                    Explore our home & programs
                  </Link>
                </p>
              </div>
            </div>

            <div className="bg-[#ecf4ec] rounded-2xl p-4 border-2 border-brand-300 text-xs text-brand-950 font-semibold flex items-center gap-3 shadow-2xs">
              <Sprout className="w-5 h-5 text-brand-800 shrink-0" />
              <span>Questions about portal credentials? Contact our support desk at +91 98765 43210.</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
