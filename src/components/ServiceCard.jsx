import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import IconHelper from './IconHelper';

export default function ServiceCard({ service, onSelectService, dataAos = "fade-up", dataAosDelay = "0" }) {
  return (
    <div
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
      className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-brand-100/90 shadow-soft hover:shadow-soft-hover transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
    >
      {/* Top Accent line */}
      <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-brand-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />

      <div>
        {/* Header: Icon & Category Tag */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 shadow-2xs group-hover:scale-105">
            <IconHelper name={service.iconName} className="w-6 h-6 transition-transform group-hover:rotate-3" />
          </div>
          <span className="text-[11px] font-semibold text-brand-700 bg-brand-50/80 px-2.5 py-1 rounded-full border border-brand-200/60">
            {service.categoryGroup}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-brand-700 transition-colors mb-2">
          {service.name}
        </h3>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
          {service.shortDescription}
        </p>

        {/* Benefits preview snippet */}
        {service.benefits && (
          <ul className="space-y-1.5 mb-6 pt-3 border-t border-gray-100">
            {service.benefits.slice(0, 2).map((benefit, i) => (
              <li key={i} className="text-xs text-gray-500 flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-brand-500 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{benefit}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Action Footer */}
      <div className="pt-2 flex items-center justify-between border-t border-gray-100">
        <Link
          to={`/services#${service.id}`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-600 hover:text-brand-800 transition group/btn"
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>

        {onSelectService && (
          <button
            type="button"
            onClick={() => onSelectService(service.name)}
            className="text-[11px] font-medium text-gray-500 hover:text-brand-700 hover:underline"
          >
            Inquire
          </button>
        )}
      </div>
    </div>
  );
}
