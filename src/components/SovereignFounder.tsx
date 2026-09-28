import React, { useState } from 'react';
import { CompanyData } from '../data/companyData';
import { Award, ExternalLink, Send, UserCheck } from 'lucide-react';

interface SovereignFounderProps {
  data: CompanyData;
}

export const SovereignFounder: React.FC<SovereignFounderProps> = ({ data }) => {
  const [imgError, setImgError] = useState(false);

  // Fallback to Wikimedia Commons original if local fails
  const portraitUrl = imgError
    ? 'https://upload.wikimedia.org/wikipedia/commons/4/42/%D0%A1%D0%B0%D1%80%D0%BA%D0%B8%D1%81%D1%8F%D0%BD_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80_%D0%94%D0%B0%D0%B2%D0%B8%D0%B4%D0%BE%D0%B2%D0%B8%D1%87.jpg'
    : '/aleksandr-sarkisian.jpg';

  return (
    <section id="founder" className="py-5 sm:py-7 monograph-section">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 md:px-8 space-y-4 sm:space-y-6">
        <div className="flex items-center justify-between">
          <div className="font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.26em] text-[#dfcba5] font-medium">
            {data.founderTitle}
          </div>
          <span className="font-mono text-[10px] text-[#8e8a82]">
            Wikidata: Q141447666
          </span>
        </div>

        <div className="liquid-glass-elevated p-5 sm:p-7 md:p-8 rounded-2xl space-y-5 sm:space-y-6 relative overflow-hidden">
          <div className="liquid-specular-edge" />

          {/* Hero Row: Portrait + Identity */}
          <div className="flex flex-col md:flex-row gap-5 sm:gap-7 items-start">
            {/* Portrait Frame */}
            <div className="relative shrink-0 mx-auto md:mx-0 w-36 xs:w-40 sm:w-44 md:w-48">
              <div className="relative rounded-2xl overflow-hidden liquid-glass border border-white/20 shadow-2xl group">
                <div className="liquid-specular-edge" />
                <img
                  src={portraitUrl}
                  alt={data.founderName}
                  onError={() => setImgError(true)}
                  className="w-full h-auto aspect-[3/4] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-2 right-2 text-center pointer-events-none">
                  <span className="inline-block px-2 py-0.5 rounded text-[9px] font-cinzel tracking-wider text-[#dfcba5] bg-black/60 backdrop-blur-md border border-white/10">
                    Licensor & Inventor
                  </span>
                </div>
              </div>

              {/* Verified Ledger Badge below image */}
              <div className="mt-2.5 text-center">
                <a
                  href="https://www.wikidata.org/wiki/Q141447666"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[10px] font-mono text-[#dfcba5] hover:text-white transition-colors"
                >
                  <Award className="w-3 h-3 text-[#dfcba5]" />
                  <span>Wikidata Q141447666</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>

            {/* Name, Roles, Bio */}
            <div className="flex-1 min-w-0 space-y-3.5">
              <div className="pb-3 border-b border-white/[0.08] space-y-1">
                <div className="font-cinzel text-[10px] sm:text-xs uppercase tracking-widest text-[#aba7a0]">
                  {data.founderKicker}
                </div>
                <h2 className="font-serif-luxury text-2xl xs:text-3xl sm:text-4xl text-[#f8f7f4] font-normal tracking-tight break-words">
                  {data.founderName}
                </h2>
                <div className="font-cinzel text-[11px] sm:text-xs text-[#dfcba5] tracking-wider pt-0.5 break-words">
                  {data.founderRole}
                </div>
              </div>

              <p className="font-sans text-sm sm:text-base text-[#eae8e3] leading-relaxed font-light break-words">
                {data.founderBio}
              </p>

              {/* Concise Personal Contact & Biography Action Row */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-2.5 sm:gap-3">
                {/* Primary Button: Explore Founder Dossier (sarkisian.teduza.com) */}
                <a
                  href={data.founderExploreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#dfcba5] hover:bg-white text-black font-cinzel text-xs font-semibold tracking-wider transition-all shadow-[0_2px_12px_rgba(0,0,0,0.4)] group"
                >
                  <UserCheck className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
                  <span>{data.founderExploreBtn}</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>

                {/* Direct Telegram Contact */}
                <a
                  href={data.founderTelegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl liquid-glass border border-white/10 hover:border-[#dfcba5]/60 text-xs font-mono text-[#f8f7f4] hover:text-[#dfcba5] transition-all"
                >
                  <Send className="w-3.5 h-3.5 text-[#dfcba5]" />
                  <span>{data.founderTelegramLabel}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
