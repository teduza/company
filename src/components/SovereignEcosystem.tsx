import React from 'react';
import { CompanyData } from '../data/companyData';
import { ArrowUpRight } from 'lucide-react';

interface SovereignEcosystemProps {
  data: CompanyData;
}

export const SovereignEcosystem: React.FC<SovereignEcosystemProps> = ({ data }) => {
  return (
    <section id="ecosystem" className="py-5 sm:py-7 monograph-section">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 md:px-8 space-y-4 sm:space-y-6">
        <div className="flex items-center justify-between">
          <div className="font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.26em] text-[#dfcba5] font-medium">
            {data.ecosystemTitle}
          </div>
          <span className="font-mono text-[10px] text-[#8e8a82]">
            Digital Network · 5 Portals
          </span>
        </div>

        <div className="space-y-2">
          <h2 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl text-[#f8f7f4] font-normal tracking-tight break-words">
            {data.ecosystemSubtitle}
          </h2>
        </div>

        {/* 5 Portals Grid completing the circle */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {data.ecosystemLinks.map((item, idx) => {
            const isFeaturedFounder = item.domain === 'sarkisian.teduza.com';

            return (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 sm:p-5 rounded-2xl liquid-glass border transition-all flex flex-col justify-between gap-3 group relative overflow-hidden ${
                  isFeaturedFounder
                    ? 'border-[#dfcba5]/50 hover:border-[#dfcba5] bg-gradient-to-b from-[#dfcba5]/[0.08] to-transparent shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
                    : 'border-white/10 hover:border-[#dfcba5]/60'
                }`}
              >
                <div className="liquid-specular-edge" />
                
                <div className="space-y-2 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs sm:text-sm font-semibold text-[#f8f7f4] group-hover:text-[#dfcba5] transition-colors truncate">
                      {item.domain}
                    </span>
                    <span
                      className={`text-[9px] font-cinzel uppercase px-2 py-0.5 rounded shrink-0 ${
                        isFeaturedFounder
                          ? 'bg-[#dfcba5]/20 text-[#dfcba5] border border-[#dfcba5]/40 font-bold'
                          : 'bg-white/[0.06] text-[#dfcba5]'
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <p className="text-xs text-[#aba7a0] font-sans font-light leading-relaxed break-words">
                    {item.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2.5 border-t border-white/[0.06] text-[10px] font-cinzel transition-colors">
                  <span className="text-[#8e8a82]">Portal</span>
                  <span className="inline-flex items-center gap-1 text-[#dfcba5] group-hover:translate-x-0.5 transition-transform">
                    <span>Open</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
