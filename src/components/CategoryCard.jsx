import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import IconHelper from './IconHelper';

export default function CategoryCard({ category, onOpenInquiry, dataAos = "fade-up", dataAosDelay = "0" }) {
  return (
    <div
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
      className="group relative bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-200 hover:border-brand-700 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
    >
      {/* Decorative top pill badge */}
      <div className="flex items-center justify-between mb-6">
        <div className="w-14 h-14 rounded-2xl bg-brand-100 border-2 border-brand-300 text-brand-800 flex items-center justify-center group-hover:bg-brand-700 group-hover:text-white group-hover:border-brand-700 transition-all duration-300 shadow-2xs group-hover:scale-105">
          <IconHelper name={category.iconName} className="w-7 h-7 group-hover:scale-110 transition-transform" />
        </div>
        <span className="text-xs font-bold text-brand-900 bg-brand-100 px-3 py-1 rounded-full border border-brand-300">
          Program {category.number}
        </span>
      </div>

      <div>
        {/* Category Badge & Title */}
        <p className="text-xs font-extrabold text-brand-800 uppercase tracking-wider mb-1.5">
          {category.badge}
        </p>
        <h3 className="font-display font-bold text-xl sm:text-2xl text-gray-950 group-hover:text-brand-900 transition-colors mb-3">
          {category.name}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-gray-700 font-medium leading-relaxed mb-6">
          {category.shortDescription}
        </p>

        {/* Features bullet points */}
        <div className="bg-[#ecf4ec] rounded-2xl p-4 border border-brand-200 mb-6 space-y-2">
          {category.benefits.slice(0, 3).map((benefit, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-gray-800 font-medium">
              <CheckCircle2 className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-brand-100 flex items-center justify-between gap-3">
        <Link
          to={`/services#${category.id}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-brand-800 hover:text-brand-950 transition group/link"
        >
          <span>View Service Details</span>
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>

        {onOpenInquiry && (
          <button
            type="button"
            onClick={() => onOpenInquiry(category.name)}
            className="text-xs font-bold px-3.5 py-1.5 rounded-xl bg-brand-100 text-brand-900 hover:bg-brand-700 hover:text-white border border-brand-300 transition shadow-2xs"
          >
            Inquire
          </button>
        )}
      </div>
    </div>
  );
}
