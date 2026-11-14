import React from 'react';
import { CompanyData, Language } from '../data/companyData';
import { ArrowLeft, ArrowUpRight, Globe, Layers } from 'lucide-react';

interface SovereignEcosystemProps {
  data: CompanyData;
  currentLang: Language;
  isStandalonePage?: boolean;
  onOpenStandalone?: () => void;
  onCloseStandalone?: () => void;
  homeHref?: string;
  ecosystemHref?: string;
}

export const SovereignEcosystem: React.FC<SovereignEcosystemProps> = ({
  data,
  currentLang,
  isStandalonePage = false,
  onOpenStandalone,
  onCloseStandalone,
  homeHref = currentLang === 'en' ? '/' : `/${currentLang}/`,
  ecosystemHref = currentLang === 'en' ? '/ecosystem/' : `/${currentLang}/ecosystem/`,
}) => {
  // STANDALONE FULL DEDICATED PAGE
  if (isStandalonePage) {
    return (
      <main className="w-full max-w-full overflow-x-hidden pt-20 sm:pt-24 pb-16 px-3.5 sm:px-6 md:px-8">
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
          {/* Top Breadcrumb Navigation Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.1]">
            <a
              href={homeHref}
              onClick={(e) => {
                if (onCloseStandalone) {
                  e.preventDefault();
                  onCloseStandalone();
                  window.history.pushState(null, '', homeHref);
                }
              }}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl liquid-glass border border-white/10 hover:border-[#dfcba5] text-xs font-cinzel text-[#dfcba5] hover:text-white transition-all shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{data.ecosystemBackToMainText}</span>
            </a>

            <div className="font-mono text-[10px] text-[#8e8a82] px-2.5 py-1 rounded-lg liquid-glass border border-white/10">
              {data.ecosystemLinks.length} Portals · Connected Network
            </div>
          </div>

          {/* Dedicated Page Hero Header */}
          <div className="liquid-glass-elevated p-6 sm:p-8 md:p-10 rounded-3xl space-y-4 relative overflow-hidden">
            <div className="liquid-specular-edge" />
            <div className="font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.24em] text-[#dfcba5] font-medium flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#dfcba5]" />
              <span>Digital Infrastructure & Network</span>
            </div>
            <h1 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#f8f7f4] font-normal tracking-tight">
              {data.ecosystemSubtitle}
            </h1>
            <p className="text-sm sm:text-base text-[#b8b5ae] font-sans font-light max-w-3xl leading-relaxed">
              Official web properties, archives, bulletins, and platforms connected to M.A.R.S. COMPANION LLC and founder Aleksandr Sarkisian across artificial intelligence, philosophy, and corporate governance.
            </p>
          </div>

          {/* The 5 Portal Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 pt-2">
            {data.ecosystemLinks.map((item, idx) => {
              const isFeaturedFounder = item.domain === 'sarkisian.teduza.com';
              return (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-5 sm:p-6 rounded-2xl liquid-glass border transition-all flex flex-col justify-between gap-4 group relative overflow-hidden ${
                    isFeaturedFounder
                      ? 'border-[#dfcba5]/60 hover:border-[#dfcba5] bg-gradient-to-b from-[#dfcba5]/[0.1] to-transparent shadow-[0_4px_24px_rgba(0,0,0,0.5)]'
                      : 'border-white/10 hover:border-[#dfcba5]/60'
                  }`}
                >
                  <div className="liquid-specular-edge" />

                  <div className="space-y-2.5 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#f8f7f4] group-hover:text-[#dfcba5] transition-colors truncate">
                        {item.domain}
                      </span>
                      <span
                        className={`text-[9px] font-cinzel uppercase px-2.5 py-0.5 rounded-full shrink-0 ${
                          isFeaturedFounder
                            ? 'bg-[#dfcba5]/20 text-[#dfcba5] border border-[#dfcba5]/40 font-bold'
                            : 'bg-white/[0.06] text-[#dfcba5] border border-white/10'
                        }`}
                      >
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#aba7a0] font-sans font-light leading-relaxed break-words">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/[0.08] text-[10px] sm:text-xs font-cinzel transition-colors">
                    <span className="text-[#8e8a82]">Official Portal</span>
                    <span className="inline-flex items-center gap-1 text-[#dfcba5] group-hover:translate-x-1 transition-transform font-semibold">
                      <span>Open Resource</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Bottom Back Button */}
          <div className="pt-4 flex justify-center">
            <a
              href={homeHref}
              onClick={(e) => {
                if (onCloseStandalone) {
                  e.preventDefault();
                  onCloseStandalone();
                  window.history.pushState(null, '', homeHref);
                }
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl liquid-glass border border-white/20 hover:border-[#dfcba5] text-xs font-cinzel text-[#dfcba5] hover:text-white transition-all shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{data.ecosystemBackToMainText}</span>
            </a>
          </div>
        </div>
      </main>
    );
  }

  // COMPACT MAIN PAGE TEASER SECTION (SPACE-SAVING)
  return (
    <section id="ecosystem" className="py-4 sm:py-6 monograph-section">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 md:px-8">
        <div className="liquid-glass-elevated p-5 sm:p-7 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 relative overflow-hidden group">
          <div className="liquid-specular-edge" />

          <div className="space-y-1.5 min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#dfcba5] font-medium">
                {data.ecosystemTitle}
              </span>
              <span className="font-mono text-[9px] text-[#8e8a82] px-2 py-0.5 rounded bg-white/[0.05] border border-white/10">
                {data.ecosystemLinks.length} Portals
              </span>
            </div>
            <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#f8f7f4] font-normal tracking-tight">
              {data.ecosystemSubtitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#aba7a0] font-sans font-light max-w-xl leading-relaxed">
              A sovereign digital network encompassing the M.A.R.S. Companion AI product, founder dossier, corporate newsroom, and philosophical manifesto.
            </p>
          </div>

          <a
            href={ecosystemHref}
            onClick={(e) => {
              if (onOpenStandalone) {
                e.preventDefault();
                onOpenStandalone();
                window.history.pushState(null, '', ecosystemHref);
              }
            }}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#dfcba5] hover:bg-white text-black font-cinzel text-xs font-semibold tracking-wider transition-all shadow-[0_2px_14px_rgba(0,0,0,0.5)] shrink-0 self-start md:self-auto group-hover:scale-[1.02]"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{data.ecosystemExploreText}</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>
      </div>
    </section>
  );
};
