import React from 'react';
import { CompanyData } from '../data/companyData';

interface SovereignPressProps {
  data: CompanyData;
}

export const SovereignPress: React.FC<SovereignPressProps> = ({ data }) => {
  return (
    <section id="press" className="py-5 sm:py-7 monograph-section">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 md:px-8 space-y-4 sm:space-y-5">
        <div className="font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.26em] text-[#dfcba5] font-medium">
          {data.pressTitle}
        </div>

        <div className="liquid-glass-elevated p-5 sm:p-7 md:p-8 rounded-2xl space-y-4 sm:space-y-5 relative overflow-hidden">
          <div className="liquid-specular-edge" />
          <div>
            <div className="font-cinzel text-[10px] sm:text-xs uppercase tracking-widest text-[#aba7a0]">
              {data.pressKicker}
            </div>
            <h2 className="font-serif-luxury text-xl sm:text-2xl md:text-3xl text-[#f8f7f4] font-normal tracking-tight mt-1 break-words">
              {data.pressName}
            </h2>
            <div className="font-cinzel text-[11px] sm:text-xs text-[#aba7a0] tracking-wider mt-0.5">
              {data.pressRole}
            </div>
          </div>

          <div className="p-4 sm:p-5 liquid-glass rounded-xl border-l-2 border-[#dfcba5]/80 space-y-2 relative overflow-hidden">
            <div className="liquid-specular-edge" />
            <div className="font-cinzel text-[10px] tracking-widest text-[#8e8a82]">
              {data.pressQuoteMeta}
            </div>
            <blockquote className="font-serif-luxury text-base sm:text-lg md:text-xl text-[#f8f7f4] italic font-light break-words">
              «{data.pressQuoteText}»
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

