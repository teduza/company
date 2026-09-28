import React, { useState } from 'react';
import { Language, CompanyData } from '../data/companyData';
import { Menu, X } from 'lucide-react';

interface SovereignHeaderProps {
  data: CompanyData;
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
}

export const SovereignHeader: React.FC<SovereignHeaderProps> = ({
  data,
  currentLang,
  onSelectLang,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#050608]/92 backdrop-blur-xl border-b border-white/[0.12] transition-all">
      <div className="liquid-specular-edge" />
      <div className="max-w-5xl mx-auto px-2.5 xs:px-3.5 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-1.5 xs:gap-2">
          {/* Brand Wordmark & Liquid Glass Emblem - GUARANTEED NEVER TO TRUNCATE ON ANY PHONE */}
          <a
            href="#top"
            className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 group shrink-0 min-w-0"
          >
            <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 rounded-lg xs:rounded-xl liquid-glass-pill p-1 flex items-center justify-center border border-white/25 group-hover:border-[#dfcba5]/70 transition-all shadow-[0_4px_12px_rgba(0,0,0,0.5)] shrink-0">
              <img
                src="/logo.png"
                alt="M.A.R.S. COMPANION LLC"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <span className="font-cinzel text-[10px] xs:text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.04em] xs:tracking-[0.06em] sm:tracking-[0.14em] text-[#f8f7f4] group-hover:text-[#dfcba5] transition-colors whitespace-nowrap uppercase shrink-0">
              M.A.R.S. COMPANION LLC
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5 text-[11px] font-sans font-medium uppercase tracking-[0.12em] text-[#aba7a0]">
            <a href="#about" className="hover:text-white transition-colors">{data.nav.about}</a>
            <a href="#projects" className="hover:text-white transition-colors">{data.nav.projects}</a>
            <a href="#ecosystem" className="hover:text-white transition-colors">{data.nav.ecosystem}</a>
            <a href="#principles" className="hover:text-white transition-colors">{data.nav.principles}</a>
            <a href="#milestones" className="hover:text-white transition-colors">{data.nav.milestones}</a>
            <a href="#registration" className="hover:text-white transition-colors">{data.nav.registration}</a>
            <a href="#founder" className="hover:text-white transition-colors">{data.nav.founder}</a>
            <a href="#press" className="hover:text-white transition-colors">{data.nav.press}</a>
            <a href="#contact" className="hover:text-white transition-colors">{data.nav.contact}</a>
          </nav>

          {/* Liquid Glass Sub-Site Language Switcher & Mobile Menu Trigger */}
          <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-3 shrink-0">
            {/* Language Switcher Pill */}
            <div className="liquid-glass-pill p-0.5 sm:p-1 rounded-lg xs:rounded-xl flex items-center gap-0.5 text-xs font-mono font-medium">
              {(['en', 'hy', 'ru'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => onSelectLang(lang)}
                  className={`px-1.5 py-0.5 xs:px-2 sm:px-2.5 sm:py-1 rounded-md xs:rounded-lg text-[9px] xs:text-[10px] sm:text-[11px] transition-all font-mono ${
                    currentLang === lang
                      ? 'bg-white/25 text-white font-bold shadow-[0_2px_8px_rgba(0,0,0,0.5)] border border-white/20'
                      : 'text-[#8e8a82] hover:text-white'
                  }`}
                  aria-label={`Switch to ${lang.toUpperCase()}`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-7 h-7 xs:w-8 xs:h-8 flex items-center justify-center text-[#aba7a0] hover:text-white liquid-glass-pill rounded-lg shrink-0"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="lg:hidden py-3 border-t border-white/[0.08] flex flex-col gap-1.5 text-xs font-sans tracking-wider uppercase text-[#aba7a0] bg-black/60 backdrop-blur-2xl rounded-b-2xl px-2">
            <a href="#about" onClick={() => setMobileOpen(false)} className="hover:text-white py-1.5 px-2 rounded-lg hover:bg-white/[0.04]">{data.nav.about}</a>
            <a href="#projects" onClick={() => setMobileOpen(false)} className="hover:text-white py-1.5 px-2 rounded-lg hover:bg-white/[0.04]">{data.nav.projects}</a>
            <a href="#ecosystem" onClick={() => setMobileOpen(false)} className="hover:text-white py-1.5 px-2 rounded-lg hover:bg-white/[0.04]">{data.nav.ecosystem}</a>
            <a href="#principles" onClick={() => setMobileOpen(false)} className="hover:text-white py-1.5 px-2 rounded-lg hover:bg-white/[0.04]">{data.nav.principles}</a>
            <a href="#milestones" onClick={() => setMobileOpen(false)} className="hover:text-white py-1.5 px-2 rounded-lg hover:bg-white/[0.04]">{data.nav.milestones}</a>
            <a href="#registration" onClick={() => setMobileOpen(false)} className="hover:text-white py-1.5 px-2 rounded-lg hover:bg-white/[0.04]">{data.nav.registration}</a>
            <a href="#founder" onClick={() => setMobileOpen(false)} className="hover:text-white py-1.5 px-2 rounded-lg hover:bg-white/[0.04]">{data.nav.founder}</a>
            <a href="#press" onClick={() => setMobileOpen(false)} className="hover:text-white py-1.5 px-2 rounded-lg hover:bg-white/[0.04]">{data.nav.press}</a>
            <a href="#contact" onClick={() => setMobileOpen(false)} className="hover:text-white py-1.5 px-2 rounded-lg hover:bg-white/[0.04]">{data.nav.contact}</a>

            {/* Mobile Language Bar inside drawer */}
            <div className="pt-2 mt-1 border-t border-white/[0.08] flex items-center justify-between px-2">
              <span className="text-[10px] text-[#716e68] font-cinzel">Language:</span>
              <div className="flex gap-1.5">
                {(['en', 'hy', 'ru'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      onSelectLang(lang);
                      setMobileOpen(false);
                    }}
                    className={`px-2.5 py-1 rounded-md text-[10px] font-mono ${
                      currentLang === lang
                        ? 'bg-[#dfcba5] text-black font-bold'
                        : 'bg-white/[0.06] text-[#eae8e3] hover:text-white'
                    }`}
                  >
                    {lang === 'en' ? 'EN' : lang === 'hy' ? 'HY' : 'RU'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
