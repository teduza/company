import React from 'react';
import { CompanyData } from '../data/companyData';
import { ArrowUpRight, Cpu } from 'lucide-react';

interface SovereignProjectsProps {
  data: CompanyData;
}

export const SovereignProjects: React.FC<SovereignProjectsProps> = ({ data }) => {
  return (
    <section id="projects" className="py-5 sm:py-7 monograph-section">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 md:px-8 space-y-4 sm:space-y-5">
        <div className="font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.26em] text-[#dfcba5] font-medium">
          {data.projectsTitle}
        </div>

        <div className="liquid-glass-elevated p-5 sm:p-7 md:p-8 rounded-2xl space-y-4 sm:space-y-5 relative overflow-hidden">
          <div className="liquid-specular-edge" />
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 sm:gap-2 pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl liquid-glass-pill flex items-center justify-center border border-white/20 text-[#dfcba5] shrink-0">
                <Cpu className="w-4 h-4" />
              </div>
              <h2 className="font-serif-luxury text-xl sm:text-2xl md:text-3xl text-[#f8f7f4] font-normal tracking-tight break-words">
                {data.projectItemTitle}
              </h2>
            </div>
            <span className="font-cinzel text-[10px] tracking-widest text-[#aba7a0] shrink-0">
              AUTONOMOUS VOICE AI
            </span>
          </div>

          <p className="font-sans text-sm sm:text-base md:text-lg text-[#eae8e3] leading-relaxed font-light break-words">
            {data.projectItemText}
          </p>

          <div className="pt-3 border-t border-white/[0.08] space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-[#b8b5ae] leading-relaxed font-light">
            <h3 className="font-serif-luxury text-lg sm:text-xl text-[#f8f7f4] font-normal break-words">
              {data.projectDetailTitle}
            </h3>
            <p className="break-words">{data.projectDetailP1}</p>
            <p className="break-words">{data.projectDetailP2}</p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="https://teduza.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-cinzel uppercase tracking-widest text-[#dfcba5] hover:text-[#f8f7f4] transition-colors"
            >
              <span>{data.projectDetailLinkText}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
