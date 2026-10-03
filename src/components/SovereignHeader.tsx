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
    <header className="fixed top-0 left-0 right-0 z-50 w-full max-w-full bg-[#050608]/92 backdrop-blur-xl border-b border-white/[0.12] transition-all">
      <div className="liquid-specular-edge" />
      <div className="max-w-6xl mx-auto px-3 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-2 sm:gap-4">
          {/* Brand Wordmark & Liquid Glass Emblem */}
          <a
            href="#top"
            className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 group shrink min-w-0"
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
            <span className="font-cinzel text-[10px] xs:text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.04em] sm:tracking-[0.14em] text-[#f8f7f4] group-hover:text-[#dfcba5] transition-colors whitespace-nowrap uppercase truncate">
              <span className="hidden sm:inline">M.A.R.S. COMPANION LLC</span>
              <span className="sm:hidden">M.A.R.S.</span>
            </span>
          </a>

          {/* Desktop Navigation Links - Shown only on XL (>=1280px) to prevent layout shifts with multilingual labels */}
          <nav className="hidden xl:flex items-center gap-2.5 2xl:gap-4 text-[10px] 2xl:text-[11px] font-sans font-medium uppercase tracking-[0.06em] 2xl:tracking-[0.1em] text-[#aba7a0] shrink-1 min-w-0">
            <a href="#about" className="hover:text-white transition-colors whitespace-nowrap">{data.nav.about}</a>
            <a href="#projects" className="hover:text-white transition-colors whitespace-nowrap">{data.nav.projects}</a>
            <a href="#ecosystem" className="hover:text-white transition-colors whitespace-nowrap">{data.nav.ecosystem}</a>
            <a href="#principles" className="hover:text-white transition-colors whitespace-nowrap">{data.nav.principles}</a>
            <a href="#milestones" className="hover:text-white transition-colors whitespace-nowrap">{data.nav.milestones}</a>
            <a href="#registration" className="hover:text-white transition-colors whitespace-nowrap">{data.nav.registration}</a>
            <a href="#founder" className="hover:text-white transition-colors whitespace-nowrap">{data.nav.founder}</a>
            <a href="#press" className="hover:text-white transition-colors whitespace-nowrap">{data.nav.press}</a>
            <a href="#contact" className="hover:text-white transition-colors whitespace-nowrap">{data.nav.contact}</a>
          </nav>

          {/* Liquid Glass Sub-Site Language Switcher & Mobile Menu Trigger - Always Pinned & Shift-Free */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0 ml-auto xl:ml-0">
            {/* Language Switcher Pill with Constant Button Widths */}
            <div className="liquid-glass-pill p-0.5 sm:p-1 rounded-lg xs:rounded-xl flex items-center gap-0.5 text-xs font-mono font-medium shrink-0">
              {(['en', 'hy', 'ru'] as Language[]).map((lang) => {
                const targetHref = lang === 'en' ? '/' : `/${lang}/`;
                return (
                  <a
                    key={lang}
                    href={targetHref}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectLang(lang);
                    }}
                    className={`w-7 xs:w-8 sm:w-9 py-0.5 sm:py-1 text-center rounded-md xs:rounded-lg text-[9px] xs:text-[10px] sm:text-[11px] transition-all font-mono font-semibold flex items-center justify-center ${
                      currentLang === lang
                        ? 'bg-white/25 text-white font-bold shadow-[0_2px_8px_rgba(0,0,0,0.5)] border border-white/20'
                        : 'text-[#8e8a82] hover:text-white border border-transparent'
                    }`}
                    aria-label={`Switch to ${lang.toUpperCase()}`}
                  >
                    {lang.toUpperCase()}
                  </a>
                );
              })}
            </div>

            {/* Mobile / Tablet menu toggle (visible below XL) */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden w-7 h-7 xs:w-8 xs:h-8 flex items-center justify-center text-[#aba7a0] hover:text-white liquid-glass-pill rounded-lg shrink-0"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet dropdown */}
        {mobileOpen && (
          <div className="xl:hidden py-3 border-t border-white/[0.08] flex flex-col gap-1.5 text-xs font-sans tracking-wider uppercase text-[#aba7a0] bg-black/80 backdrop-blur-2xl rounded-b-2xl px-2">
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
                {(['en', 'hy', 'ru'] as Language[]).map((lang) => {
                  const targetHref = lang === 'en' ? '/' : `/${lang}/`;
                  return (
                    <a
                      key={lang}
                      href={targetHref}
                      onClick={(e) => {
                        e.preventDefault();
                        onSelectLang(lang);
                        setMobileOpen(false);
                      }}
                      className={`w-9 py-1 text-center rounded-md text-[10px] font-mono font-semibold flex items-center justify-center ${
                        currentLang === lang
                          ? 'bg-[#dfcba5] text-black font-bold'
                          : 'bg-white/[0.06] text-[#eae8e3] hover:text-white'
                      }`}
                    >
                      {lang.toUpperCase()}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
