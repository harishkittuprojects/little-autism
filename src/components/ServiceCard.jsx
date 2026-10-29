import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import IconHelper from './IconHelper';

export default function ServiceCard({ service, onSelectService, dataAos = "fade-up", dataAosDelay = "0" }) {
  return (
    <div
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
      className="group relative bg-white rounded-2xl p-6 sm:p-7 border-2 border-brand-200 hover:border-brand-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
    >
      {/* Top Accent line */}
      <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-brand-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />

      <div>
        {/* Header: Icon & Category Tag */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-2xl bg-brand-100 border-2 border-brand-300 text-brand-800 flex items-center justify-center group-hover:bg-brand-700 group-hover:text-white group-hover:border-brand-700 transition-all duration-300 shadow-2xs group-hover:scale-105">
            <IconHelper name={service.iconName} className="w-6 h-6 transition-transform group-hover:rotate-3" />
          </div>
          <span className="text-[11px] font-bold text-brand-900 bg-brand-100 px-3 py-1 rounded-full border border-brand-300">
            {service.categoryGroup}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-lg text-gray-950 group-hover:text-brand-900 transition-colors mb-2">
          {service.name}
        </h3>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed mb-4">
          {service.shortDescription}
        </p>

        {/* Benefits preview snippet */}
        {service.benefits && (
          <ul className="space-y-1.5 mb-6 pt-3 border-t border-brand-100">
            {service.benefits.slice(0, 2).map((benefit, i) => (
              <li key={i} className="text-xs text-gray-800 font-medium flex items-start gap-2">
                <Check className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{benefit}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Action Footer */}
      <div className="pt-3 flex items-center justify-between border-t border-brand-100">
        <Link
          to={`/services#${service.id}`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-800 hover:text-brand-950 transition group/btn"
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>

        {onSelectService && (
          <button
            type="button"
            onClick={() => onSelectService(service.name)}
            className="text-xs font-bold text-brand-800 hover:text-brand-950 hover:underline bg-brand-50 px-2.5 py-1 rounded-lg border border-brand-200 transition"
          >
            Inquire
          </button>
        )}
      </div>
    </div>
  );
}
