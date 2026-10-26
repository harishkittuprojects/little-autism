import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Eye, EyeOff, Lock, Mail, User, CheckCircle2, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

export default function LoginForm() {
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Form State
  const [identifier, setIdentifier] = useState(''); // Email or username
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState('Parent / Guardian');

  // UI state
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    const errs = {};
    if (!identifier.trim()) {
      errs.identifier = 'Please enter your email or username';
    } else if (identifier.includes('@') && !/\S+@\S+\.\S+/.test(identifier)) {
      errs.identifier = 'Please enter a valid email address';
    }

    if (!password) {
      errs.password = 'Please enter your password';
    } else if (password.length < 6) {
      errs.password = 'Password must be at least 6 characters';
    }

    if (isRegisterMode && !fullName.trim()) {
      errs.fullName = 'Please enter your full name';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSuccessMessage('');

    setTimeout(() => {
      setIsSubmitting(false);
      if (isRegisterMode) {
        setSuccessMessage('Account created successfully! Welcome to the Little Little Plant community portal.');
      } else {
        setSuccessMessage('Login successful! Redirecting to your family dashboard...');
      }
    }, 800);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Centered Login Card */}
      <div className="bg-white rounded-3xl p-7 sm:p-9 border border-brand-100 shadow-soft relative overflow-hidden">
        
        {/* Subtle decorative top accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-300 via-brand-500 to-brand-300" />

        {/* Card Header */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-white border border-brand-200 flex items-center justify-center mx-auto mb-3 p-1.5 shadow-2xs">
            <img
              src="/images/logo.png"
              alt="Little Plant Autism Educational Academy Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="font-display font-bold text-2xl text-gray-900">
            {isRegisterMode ? 'Create Parent Account' : 'Welcome to Care Portal'}
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            {isRegisterMode
              ? 'Register to access child progress, schedules & communications'
              : 'Sign in to access your child’s therapy updates & hostel reports'}
          </p>
        </div>

        {/* Toggle Mode Tabs */}
        <div className="flex bg-brand-50/70 p-1 rounded-xl mb-6 border border-brand-100">
          <button
            type="button"
            onClick={() => {
              setIsRegisterMode(false);
              setErrors({});
              setSuccessMessage('');
            }}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
              !isRegisterMode
                ? 'bg-white text-brand-800 shadow-xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => {
              setIsRegisterMode(true);
              setErrors({});
              setSuccessMessage('');
            }}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
              isRegisterMode
                ? 'bg-white text-brand-800 shadow-xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Create Account
          </button>
        </div>

        {/* Success Message Banner */}
        {successMessage && (
          <div className="mb-6 p-4 rounded-xl bg-brand-50 border border-brand-200 text-xs text-brand-900 flex items-start gap-2.5 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">{successMessage}</p>
              <p className="text-brand-700 mt-0.5 text-[11px]">Parent and caregiver updates are synced securely.</p>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {isRegisterMode && (
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Rachel Adams"
                  className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm outline-none transition ${
                    errors.fullName ? 'border-red-300 ring-1 ring-red-100' : 'border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100'
                  }`}
                />
              </div>
              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
            </div>
          )}

          {isRegisterMode && (
            <div>
              <label htmlFor="portalRole" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                Your Role
              </label>
              <select
                id="portalRole"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 bg-white transition"
              >
                <option value="Parent / Guardian">Parent / Guardian</option>
                <option value="Family Caregiver">Family Caregiver</option>
                <option value="Staff / Educator">Staff / Special Educator</option>
                <option value="Therapist">Therapist</option>
              </select>
            </div>
          )}

          {/* Email or Username */}
          <div>
            <label htmlFor="identifier" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
              Email Address or Username *
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
              <input
                id="identifier"
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="parent@example.com or username"
                className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm outline-none transition ${
                  errors.identifier ? 'border-red-300 ring-1 ring-red-100' : 'border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100'
                }`}
              />
            </div>
            {errors.identifier && <p className="text-red-500 text-xs mt-1">{errors.identifier}</p>}
          </div>

          {/* Password with Show/Hide */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="password" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Password *
              </label>
              {!isRegisterMode && (
                <button
                  type="button"
                  onClick={() => alert("Password reset instructions have been simulated. In production, a secure reset link is emailed.")}
                  className="text-xs text-brand-600 hover:text-brand-800 font-medium"
                >
                  Forgot password?
                </button>
              )}
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className={`w-full pl-10 pr-10 py-2.5 rounded-xl border text-sm outline-none transition ${
                  errors.password ? 'border-red-300 ring-1 ring-red-100' : 'border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 p-1 text-gray-400 hover:text-gray-700 focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          {/* Remember Me Option */}
          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-brand-600 rounded border-gray-300 focus:ring-brand-400 accent-brand-500 cursor-pointer"
              />
              <span className="text-xs text-gray-600 font-medium">Remember me on this device</span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-xl shadow-md shadow-brand-500/20 hover:shadow-lg hover:shadow-brand-500/30 transition-all text-sm flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Authenticating...</span>
              ) : (
                <>
                  <span>{isRegisterMode ? 'Create Parent Account' : 'Log In to Portal'}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

        </form>

        {/* Security & Privacy assurance */}
        <div className="mt-6 pt-5 border-t border-gray-100 text-center">
          <p className="text-[11px] text-gray-500 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
            <span>Encrypted HIPAA/FERPA-compliant student records</span>
          </p>
        </div>

      </div>
    </div>
  );
}
