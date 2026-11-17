import React from 'react';
import { Globe, Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle({ variant = 'navbar', className = '' }) {
  const { lang, setLang, toggleLang, isTelugu } = useLanguage();

  if (variant === 'drawer') {
    return (
      <div className={`flex items-center justify-between p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-200 ${className}`}>
        <div className="flex items-center gap-2">
          <Languages className="w-4 h-4 text-[#2d7a4d]" />
          <span className="text-xs font-bold text-gray-800">
            {isTelugu ? 'భాష మార్చండి' : 'Language'}
          </span>
        </div>
        <div className="inline-flex rounded-lg bg-white p-0.5 border border-emerald-300 shadow-2xs">
          <button
            type="button"
            onClick={() => setLang('en')}
            className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
              lang === 'en'
                ? 'bg-[#2d7a4d] text-white shadow-xs'
                : 'text-gray-700 hover:text-gray-950'
            }`}
          >
            English
          </button>
          <button
            type="button"
            onClick={() => setLang('te')}
            className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
              lang === 'te'
                ? 'bg-[#2d7a4d] text-white shadow-xs'
                : 'text-gray-700 hover:text-gray-950'
            }`}
          >
            తెలుగు
          </button>
        </div>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`inline-flex items-center gap-1.5 p-1 rounded-full bg-black/40 border border-white/20 backdrop-blur-md ${className}`}>
        <Globe className="w-3.5 h-3.5 text-emerald-400 ml-1.5" />
        <button
          type="button"
          onClick={() => setLang('en')}
          className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
            lang === 'en'
              ? 'bg-emerald-500 text-gray-950 shadow-xs'
              : 'text-white/70 hover:text-white'
          }`}
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => setLang('te')}
          className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
            lang === 'te'
              ? 'bg-emerald-500 text-gray-950 shadow-xs'
              : 'text-white/70 hover:text-white'
          }`}
        >
          తెలుగు
        </button>
      </div>
    );
  }

  // Default: Navbar pill
  return (
    <div
      className={`inline-flex items-center bg-gray-100 hover:bg-gray-200/80 p-0.5 rounded-full border border-gray-300/80 shadow-2xs transition-all ${className}`}
      title={isTelugu ? 'భాషను ఆంగ్లం / తెలుగు మధ్య మార్చండి' : 'Switch Language between English and Telugu'}
    >
      <div className="pl-1.5 pr-0.5 text-gray-500">
        <Languages className="w-3.5 h-3.5" />
      </div>
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-label="Switch to English"
        className={`px-2 py-1 rounded-full text-[11px] font-bold tracking-tight transition-all cursor-pointer ${
          lang === 'en'
            ? 'bg-[#2d7a4d] text-white shadow-xs'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang('te')}
        aria-label="Switch to Telugu"
        className={`px-2 py-1 rounded-full text-[11px] font-bold tracking-tight transition-all cursor-pointer ${
          lang === 'te'
            ? 'bg-[#2d7a4d] text-white shadow-xs'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        తెలుగు
      </button>
    </div>
  );
}
