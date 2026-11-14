import React from 'react';
import { CompanyData } from '../data/companyData';
import { ArrowUpRight, Award, ExternalLink } from 'lucide-react';

interface SovereignFooterProps {
  data: CompanyData;
  onOpenSchema: () => void;
}

export const SovereignFooter: React.FC<SovereignFooterProps> = ({ data, onOpenSchema }) => {
  return (
    <footer className="mt-8 py-7 sm:py-9 border-t border-white/[0.1] text-xs text-[#aba7a0] relative overflow-hidden bg-black/40">
      <div className="liquid-specular-edge" />
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 md:px-8 space-y-6">

        {/* Ultra-Compact Collapsible Global Registries Bar */}
        <details className="group rounded-xl liquid-glass border border-white/[0.08] overflow-hidden text-xs">
          <summary className="list-none p-2.5 sm:p-3 flex items-center justify-between gap-2 cursor-pointer hover:bg-white/[0.04] transition-colors select-none">
            <div className="flex items-center gap-1.5 min-w-0">
              <Award className="w-3.5 h-3.5 text-[#dfcba5] shrink-0" />
              <span className="font-cinzel text-[10px] sm:text-[11px] uppercase tracking-wider text-[#dfcba5] truncate">
                {data.footerRegistriesTitle}
              </span>
              <span className="text-[9px] font-mono text-[#716e68] hidden xs:inline">
                ({data.founderRegistries.length} entries)
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#aba7a0]">
              <span className="group-open:hidden text-[#8e8a82]">Show</span>
              <span className="hidden group-open:inline text-[#8e8a82]">Hide</span>
              <span className="transition-transform duration-200 group-open:rotate-180 text-[#dfcba5]">▾</span>
            </div>
          </summary>

          <div className="p-2.5 sm:p-3 pt-0 border-t border-white/[0.06] flex flex-wrap items-center gap-1.5 sm:gap-2 bg-black/20">
            {data.founderRegistries.map((reg, idx) => (
              <a
                key={idx}
                href={reg.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 rounded-lg liquid-glass border border-white/[0.08] hover:border-[#dfcba5]/50 text-[10px] font-mono text-[#aba7a0] hover:text-white transition-all inline-flex items-center gap-1"
                title={`${reg.name}: ${reg.id}`}
              >
                <span>{reg.name}</span>
                <span className="text-[#dfcba5] text-[9px]">({reg.id})</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60" />
              </a>
            ))}

            {/* Technical Schema.org viewer */}
            <button
              onClick={onOpenSchema}
              className="px-2 py-1 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-[10px] font-mono text-[#dfcba5] border border-white/[0.08] transition-colors inline-flex items-center gap-1"
              title="Inspect Schema.org (JSON-LD)"
            >
              <span>Schema.org (JSON-LD)</span>
            </button>
          </div>
        </details>

        {/* Corporate Copyright & Links Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.06]">
          <div className="space-y-1">
            <div className="font-cinzel text-xs font-semibold text-[#f8f7f4] tracking-wider">
              {data.footerCopyright}
            </div>
            <div className="text-[#8e8a82] font-sans">
              {data.footerLocation}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            <a
              href="https://why.teduza.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#dfcba5] transition-colors inline-flex items-center gap-1 font-cinzel text-[11px] tracking-wider"
            >
              <span>{data.footerWhyArmenia}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://sarkisian.teduza.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#dfcba5] transition-colors inline-flex items-center gap-1 font-cinzel text-[11px] tracking-wider"
            >
              <span>sarkisian.teduza.com</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Footnote */}
        <div className="text-[11px] text-[#716e68] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            Official corporate portal of M.A.R.S. COMPANION LLC
          </div>
          <div className="font-cinzel text-[10px] tracking-widest text-[#716e68]">
            Sovereign Technology · Kapan
          </div>
        </div>
      </div>
    </footer>
  );
};
