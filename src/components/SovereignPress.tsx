import React, { useState } from 'react';
import { CompanyData } from '../data/companyData';
import { Award, ExternalLink, Mail, ShieldCheck } from 'lucide-react';

interface SovereignPressProps {
  data: CompanyData;
}

export const SovereignPress: React.FC<SovereignPressProps> = ({ data }) => {
  const [imgError, setImgError] = useState(false);

  const initials = data.pressName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2);

  return (
    <section id="press" className="py-5 sm:py-7 monograph-section">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 md:px-8 space-y-4 sm:space-y-5">
        <div className="font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.26em] text-[#dfcba5] font-medium">
          {data.pressTitle}
        </div>

        <div className="liquid-glass-elevated p-5 sm:p-7 md:p-8 rounded-2xl space-y-5 sm:space-y-6 relative overflow-hidden">
          <div className="liquid-specular-edge" />

          {/* Row with Optional Portrait Frame + Press Secretary Details */}
          <div className="flex flex-col md:flex-row gap-5 sm:gap-7 items-start">
            {/* Portrait Frame - Rendered only when pressImage is provided */}
            {data.pressImage && (
              <div className="relative shrink-0 mx-auto md:mx-0 w-36 xs:w-40 sm:w-44 md:w-48">
                <div className="relative rounded-2xl overflow-hidden liquid-glass border border-white/20 shadow-2xl group bg-[#0e1118]">
                  <div className="liquid-specular-edge" />

                  {!imgError ? (
                    <img
                      src={data.pressImage}
                      alt={data.pressName}
                      onError={() => setImgError(true)}
                      className="w-full h-auto aspect-[3/4] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    /* High-End Architectural Placeholder Frame with Gold Monogram */
                    <div className="w-full aspect-[3/4] flex flex-col items-center justify-center p-4 bg-gradient-to-b from-[#181d29] via-[#0d1017] to-[#07090d] text-center relative">
                      <div className="absolute inset-0 bg-radial from-[#dfcba5]/10 to-transparent pointer-events-none" />
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-[#dfcba5]/40 bg-[#dfcba5]/10 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(223,203,165,0.15)]">
                        <span className="font-serif-luxury text-xl sm:text-2xl text-[#dfcba5] tracking-widest font-normal">
                          {initials}
                        </span>
                      </div>
                      <span className="font-cinzel text-[9px] sm:text-[10px] text-[#aba7a0] tracking-widest uppercase">
                        Photo Slot Ready
                      </span>
                      <span className="font-mono text-[8px] text-[#716e68] mt-0.5">
                        {data.pressImage}
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2 left-2 right-2 text-center pointer-events-none">
                    <span className="inline-block px-2 py-0.5 rounded text-[9px] font-cinzel tracking-wider text-[#dfcba5] bg-black/60 backdrop-blur-md border border-white/10">
                      {data.pressKicker}
                    </span>
                  </div>
                </div>

                {/* Institutional Badge or Wikidata Link */}
                <div className="mt-2.5 text-center">
                  {data.pressWikidataUrl ? (
                    <a
                      href={data.pressWikidataUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] font-mono text-[#aba7a0] hover:text-[#dfcba5] transition-colors"
                    >
                      <Award className="w-3 h-3 text-[#dfcba5]" />
                      <span>Wikidata Q141448092</span>
                      <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#aba7a0]">
                      <ShieldCheck className="w-3 h-3 text-[#dfcba5]" />
                      <span>M.A.R.S. COMPANION LLC</span>
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Identity, Role, Quote & Direct Email */}
            <div className="flex-1 min-w-0 space-y-3.5">
              <div className="pb-3 border-b border-white/[0.08] space-y-1">
                <div className="font-cinzel text-[10px] sm:text-xs uppercase tracking-widest text-[#aba7a0]">
                  {data.pressKicker}
                </div>
                <h2 className="font-serif-luxury text-2xl xs:text-3xl sm:text-4xl text-[#f8f7f4] font-normal tracking-tight break-words">
                  {data.pressName}
                </h2>
                <div className="font-cinzel text-[11px] sm:text-xs text-[#dfcba5] tracking-wider pt-0.5 break-words">
                  {data.pressRole}
                </div>
              </div>

              {/* Quote Card */}
              <div className="p-4 sm:p-5 liquid-glass rounded-xl border-l-2 border-[#dfcba5]/80 space-y-2 relative overflow-hidden">
                <div className="liquid-specular-edge" />
                <div className="font-cinzel text-[10px] tracking-widest text-[#8e8a82]">
                  {data.pressQuoteMeta}
                </div>
                <blockquote className="font-serif-luxury text-base sm:text-lg md:text-xl text-[#f8f7f4] italic font-light break-words">
                  «{data.pressQuoteText}»
                </blockquote>
              </div>

              {/* Kira Dudnik Direct Press Email & Wikidata Link */}
              {(data.pressEmail || data.pressWikidataUrl) && (
                <div className="pt-3 border-t border-white/[0.08] flex flex-wrap items-center gap-2.5 sm:gap-3">
                  {data.pressEmail && (
                    <a
                      href={`mailto:${data.pressEmail}`}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl liquid-glass border border-white/15 hover:border-[#dfcba5] text-xs font-mono text-[#f8f7f4] hover:text-[#dfcba5] transition-all group"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#dfcba5] group-hover:scale-110 transition-transform" />
                      <span>{data.pressEmail}</span>
                    </a>
                  )}
                  {data.pressWikidataUrl && (
                    <a
                      href={data.pressWikidataUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl liquid-glass border border-white/15 hover:border-[#dfcba5] text-[11px] font-mono text-[#aba7a0] hover:text-[#dfcba5] transition-all"
                    >
                      <Award className="w-3.5 h-3.5 text-[#dfcba5]" />
                      <span>Wikidata Q141448092</span>
                      <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                    </a>
                  )}
                  {data.pressEmail && (
                    <span className="text-[10px] font-cinzel text-[#8e8a82]">
                      {data.pressContactLabel}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

