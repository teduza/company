import React from 'react';
import { CompanyData } from '../data/companyData';
import { ArrowUpRight } from 'lucide-react';

interface SovereignAboutProps {
  data: CompanyData;
}

export const SovereignAbout: React.FC<SovereignAboutProps> = ({ data }) => {
  return (
    <section id="about" className="py-5 sm:py-7 monograph-section">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 md:px-8 space-y-4 sm:space-y-5">
        {/* Section Header */}
        <div className="font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.26em] text-[#dfcba5] font-medium">
          {data.aboutTitle}
        </div>

        {/* Liquid Glass Archival Quotation Block */}
        <div className="liquid-glass-elevated p-5 sm:p-7 md:p-8 rounded-2xl border-l-2 border-[#dfcba5] space-y-3 relative overflow-hidden">
          <div className="liquid-specular-edge" />
          <div className="text-[10px] sm:text-xs font-cinzel uppercase tracking-widest text-[#aba7a0]">
            {data.aboutQuoteMeta}
          </div>

          <blockquote className="font-serif-luxury text-lg sm:text-xl md:text-2xl text-[#f8f7f4] leading-relaxed italic font-light break-words">
            «{data.aboutQuoteText}»
          </blockquote>
        </div>

        {/* Verbatim Paragraph & Quiet Link to teduza.com */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-[#b8b5ae] leading-relaxed font-light break-words">
          {data.aboutText}{' '}
          <a
            href={data.aboutLinkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-[#f8f7f4] hover:text-[#dfcba5] border-b border-[#dfcba5]/60 pb-0.5 transition-colors"
          >
            <span>{data.aboutLinkText}</span>
            <ArrowUpRight className="w-3.5 h-3.5 inline" />
          </a>
          .
        </p>
      </div>
    </section>
  );
};

