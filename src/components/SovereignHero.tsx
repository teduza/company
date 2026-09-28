import React from 'react';
import { CompanyData } from '../data/companyData';

interface SovereignHeroProps {
  data: CompanyData;
}

export const SovereignHero: React.FC<SovereignHeroProps> = ({ data }) => {
  return (
    <section id="top" className="pt-8 pb-7 sm:pt-14 sm:pb-10 monograph-section overflow-hidden">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 md:px-8 text-center">
        {/* Liquid Glass Sovereign Emblem Presentation */}
        <div className="flex justify-center mb-5 sm:mb-6">
          <div className="relative p-3 sm:p-4 rounded-2xl liquid-glass-elevated border border-white/30 group hover:border-[#dfcba5]/70 transition-all shadow-[0_16px_36px_rgba(0,0,0,0.7)]">
            <div className="liquid-specular-edge" />
            <div className="absolute inset-0 bg-radial from-[#dfcba5]/15 to-transparent rounded-2xl pointer-events-none" />
            <img
              src="/logo.png"
              alt="M.A.R.S. COMPANION LLC"
              className="w-11 h-11 sm:w-14 sm:h-14 object-contain relative z-10 drop-shadow-[0_4px_16px_rgba(223,203,165,0.3)] transition-transform group-hover:scale-105 duration-300"
              onError={(e) => {
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
          </div>
        </div>

        {/* Small-Caps Kicker */}
        <div className="font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.26em] text-[#dfcba5] mb-2 sm:mb-3 font-medium">
          {data.eyebrow}
        </div>

        {/* Aristocratic Classical Headline */}
        <h1 className="font-serif-luxury text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-normal text-[#f8f7f4] tracking-tight leading-[1.08] mb-4 sm:mb-5 break-words text-balance">
          {data.h1}
        </h1>

        {/* Verbatim Lead Statement */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-[#b8b5ae] max-w-2xl mx-auto leading-relaxed font-light break-words">
          {data.lead}
        </p>

        {/* Liquid Glass Executive Registry Ledger */}
        <div className="mt-7 sm:mt-8 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 text-left">
          <div className="liquid-glass p-3.5 sm:p-4 rounded-xl flex flex-col justify-between overflow-hidden">
            <div className="liquid-specular-edge" />
            <div className="text-[10px] font-cinzel uppercase tracking-wider text-[#8e8a82] truncate">
              Registration No.
            </div>
            <div className="text-xs sm:text-sm font-mono font-medium text-[#f8f7f4] mt-1 tracking-tight truncate">
              999.110.1603426
            </div>
          </div>

          <div className="liquid-glass p-3.5 sm:p-4 rounded-xl flex flex-col justify-between overflow-hidden">
            <div className="liquid-specular-edge" />
            <div className="text-[10px] font-cinzel uppercase tracking-wider text-[#8e8a82] truncate">
              Tax ID (ИНН)
            </div>
            <div className="text-xs sm:text-sm font-mono font-medium text-[#f8f7f4] mt-1 tracking-tight truncate">
              09433977
            </div>
          </div>

          <div className="liquid-glass p-3.5 sm:p-4 rounded-xl flex flex-col justify-between overflow-hidden">
            <div className="liquid-specular-edge" />
            <div className="text-[10px] font-cinzel uppercase tracking-wider text-[#8e8a82] truncate">
              Jurisdiction
            </div>
            <div className="text-xs sm:text-sm text-[#f8f7f4] mt-1 font-sans truncate">
              Kapan, Armenia
            </div>
          </div>

          <div className="liquid-glass p-3.5 sm:p-4 rounded-xl flex flex-col justify-between overflow-hidden border-t border-t-[#dfcba5]/40">
            <div className="liquid-specular-edge" />
            <div className="text-[10px] font-cinzel uppercase tracking-wider text-[#8e8a82] truncate">
              Patents
            </div>
            <div className="text-xs sm:text-sm text-[#dfcba5] mt-1 font-sans font-medium truncate">
              UK Patent Licensee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

