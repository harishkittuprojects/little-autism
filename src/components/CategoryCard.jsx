import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import IconHelper from './IconHelper';

export default function CategoryCard({ category, onOpenInquiry, dataAos = "fade-up", dataAosDelay = "0" }) {
  return (
    <div
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
      className="group relative bg-white rounded-3xl p-6 sm:p-8 border border-brand-100 shadow-soft hover:shadow-soft-hover transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
    >
      {/* Decorative top pill badge */}
      <div className="flex items-center justify-between mb-6">
        <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 shadow-2xs group-hover:scale-105">
          <IconHelper name={category.iconName} className="w-7 h-7 group-hover:scale-110 transition-transform" />
        </div>
        <span className="text-xs font-bold text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200/70">
          Program {category.number}
        </span>
      </div>

      <div>
        {/* Category Badge & Title */}
        <p className="text-xs font-semibold text-brand-600 uppercase tracking-wider mb-1.5">
          {category.badge}
        </p>
        <h3 className="font-display font-bold text-xl sm:text-2xl text-gray-900 group-hover:text-brand-700 transition-colors mb-3">
          {category.name}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          {category.shortDescription}
        </p>

        {/* Features bullet points */}
        <div className="bg-brand-50/40 rounded-2xl p-4 border border-brand-100/60 mb-6 space-y-2">
          {category.benefits.slice(0, 3).map((benefit, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
        <Link
          to={`/services#${category.id}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-800 transition group/link"
        >
          <span>View Service Details</span>
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>

        {onOpenInquiry && (
          <button
            type="button"
            onClick={() => onOpenInquiry(category.name)}
            className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-brand-50 text-brand-700 hover:bg-brand-100 border border-brand-200 transition"
          >
            Inquire
          </button>
        )}
      </div>
    </div>
  );
}
