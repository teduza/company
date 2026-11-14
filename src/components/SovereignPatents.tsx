import React, { useState } from 'react';
import { CompanyData, Language, PatentItem } from '../data/companyData';
import { ArrowLeft, ArrowUpRight, Award, FileCode2, Filter, ShieldCheck } from 'lucide-react';

interface SovereignPatentsProps {
  data: CompanyData;
  currentLang: Language;
  isStandalonePage?: boolean;
  onOpenStandalone?: () => void;
  onCloseStandalone?: () => void;
  homeHref?: string;
  patentsHref?: string;
}

export const SovereignPatents: React.FC<SovereignPatentsProps> = ({
  data,
  currentLang,
  isStandalonePage = false,
  onOpenStandalone,
  onCloseStandalone,
  homeHref = currentLang === 'en' ? '/' : `/${currentLang}/`,
  patentsHref = currentLang === 'en' ? '/patents/' : `/${currentLang}/patents/`,
}) => {
  const [filter, setFilter] = useState<'all' | 'company_owned' | 'licensed'>('all');

  const totalCount = data.patentsList.length;
  const companyCount = data.patentsList.filter((item) => item.ownershipType === 'company_owned').length;
  const licensedCount = data.patentsList.filter((item) => item.ownershipType === 'licensed').length;

  const filteredPatents = data.patentsList.filter((item) => {
    if (filter === 'all') return true;
    return item.ownershipType === filter;
  });

  // STANDALONE FULL PAGE VIEW
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
              <span>{data.patentsBackToMain}</span>
            </a>

            <div className="font-mono text-[10px] text-[#8e8a82] px-2.5 py-1 rounded-lg liquid-glass border border-white/10">
              {totalCount} Applications · UK IPO
            </div>
          </div>

          {/* Dedicated Page Hero Header */}
          <div className="liquid-glass-elevated p-6 sm:p-8 md:p-10 rounded-3xl space-y-4 relative overflow-hidden">
            <div className="liquid-specular-edge" />
            <div className="font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.24em] text-[#dfcba5] font-medium flex items-center gap-2">
              <FileCode2 className="w-4 h-4 text-[#dfcba5]" />
              <span>UK Intellectual Property Office (UK IPO)</span>
            </div>
            <h1 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#f8f7f4] font-normal tracking-tight">
              {data.patentsTitle}
            </h1>
            <p className="text-sm sm:text-base text-[#b8b5ae] font-sans font-light max-w-3xl leading-relaxed">
              Official patent filings portfolio covering autonomous edge artificial intelligence, M.A.R.S. OS capability-based microkernel architecture, localized semantic memory, flash-memory vector database indexing, dynamic microcontroller memory defragmentation, and hardware-anchored neural weight cryptography.
            </p>

            {/* Quick Summary Pill Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs font-mono">
              <span className="px-3 py-1 rounded-xl liquid-glass border border-[#dfcba5]/50 text-[#dfcba5] font-semibold">
                {companyCount} Applications Owned by M.A.R.S. COMPANION LLC
              </span>
              <span className="px-3 py-1 rounded-xl liquid-glass border border-white/20 text-[#aba7a0]">
                {licensedCount} Applications Licensed from Inventor Aleksandr Sarkisian
              </span>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 ${
                filter === 'all'
                  ? 'bg-[#dfcba5] text-black font-semibold shadow-[0_2px_10px_rgba(0,0,0,0.5)]'
                  : 'liquid-glass border border-white/10 text-[#aba7a0] hover:text-white'
              }`}
            >
              <Filter className="w-3 h-3" />
              <span>{data.patentsTabAll}</span>
            </button>
            <button
              onClick={() => setFilter('company_owned')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 ${
                filter === 'company_owned'
                  ? 'bg-[#dfcba5] text-black font-semibold shadow-[0_2px_10px_rgba(0,0,0,0.5)]'
                  : 'liquid-glass border border-white/10 text-[#aba7a0] hover:text-white'
              }`}
            >
              <ShieldCheck className="w-3 h-3" />
              <span>{data.patentsTabCompany}</span>
            </button>
            <button
              onClick={() => setFilter('licensed')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 ${
                filter === 'licensed'
                  ? 'bg-[#dfcba5] text-black font-semibold shadow-[0_2px_10px_rgba(0,0,0,0.5)]'
                  : 'liquid-glass border border-white/10 text-[#aba7a0] hover:text-white'
              }`}
            >
              <Award className="w-3 h-3" />
              <span>{data.patentsTabLicensed}</span>
            </button>
          </div>

          {/* Patent Ledger Cards */}
          <div className="space-y-4">
            {filteredPatents.map((item: PatentItem) => {
              const isCompanyOwned = item.ownershipType === 'company_owned';

              return (
                <div
                  key={item.number}
                  className={`p-5 sm:p-6 md:p-7 rounded-2xl liquid-glass border transition-all space-y-3.5 relative overflow-hidden group ${
                    isCompanyOwned
                      ? 'border-[#dfcba5]/40 hover:border-[#dfcba5]/90 bg-gradient-to-br from-[#dfcba5]/[0.07] to-transparent'
                      : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="liquid-specular-edge" />

                  {/* Top Metainfo Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#f8f7f4] tracking-tight">
                        {item.number}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[9px] font-mono uppercase bg-white/[0.08] text-[#aba7a0] border border-white/10">
                        {item.status}
                      </span>
                    </div>

                    {/* Ownership Badge */}
                    <div className="flex items-center gap-2">
                      {isCompanyOwned ? (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-cinzel uppercase tracking-wider text-[#dfcba5] bg-[#dfcba5]/15 border border-[#dfcba5]/40 font-semibold">
                          {data.patentsCompanyOwnedBadge}
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-cinzel uppercase tracking-wider text-[#aba7a0] bg-white/[0.05] border border-white/10">
                          {data.patentsLicensedBadge}
                        </span>
                      )}
                      <span className="text-[10px] font-mono text-[#8e8a82]">
                        {item.date}
                      </span>
                    </div>
                  </div>

                  {/* Patent Title */}
                  <h3 className="font-serif-luxury text-base sm:text-lg md:text-xl text-[#f8f7f4] font-normal leading-snug break-words">
                    {item.title}
                  </h3>

                  {/* Entity Ledger Info (Owner / Inventor / Link) */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-sans text-[#aba7a0]">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] sm:text-xs">
                      <div>
                        <span className="font-cinzel text-[10px] uppercase text-[#8e8a82] mr-1.5">
                          {data.patentsOwnerLabel}:
                        </span>
                        <span className={`font-mono ${isCompanyOwned ? 'text-[#dfcba5] font-semibold' : 'text-[#f8f7f4]'}`}>
                          {item.applicant}
                        </span>
                      </div>
                      <div>
                        <span className="font-cinzel text-[10px] uppercase text-[#8e8a82] mr-1.5">
                          {data.patentsInventorLabel}:
                        </span>
                        <span className="text-[#f8f7f4]">
                          {item.inventor}
                        </span>
                      </div>
                    </div>

                    <a
                      href={item.ipoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-[11px] text-[#dfcba5] hover:text-white transition-colors shrink-0 self-start sm:self-auto"
                    >
                      <span>UK IPO Ledger</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
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
              <span>{data.patentsBackToMain}</span>
            </a>
          </div>
        </div>
      </main>
    );
  }

  // COMPACT MAIN PAGE TEASER CARD (SPACE-SAVING, IDENTICAL COMPACT FLOW TO ECOSYSTEM)
  return (
    <section id="patents" className="py-4 sm:py-6 monograph-section">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 md:px-8">
        <div className="liquid-glass-elevated p-5 sm:p-7 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 relative overflow-hidden group">
          <div className="liquid-specular-edge" />

          <div className="space-y-1.5 min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#dfcba5] font-medium">
                {data.patentsTitle}
              </span>
              <span className="font-mono text-[9px] text-[#8e8a82] px-2 py-0.5 rounded bg-white/[0.05] border border-white/10">
                {totalCount} Applications
              </span>
            </div>
            <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#f8f7f4] font-normal tracking-tight">
              UK Intellectual Property Office (UK IPO)
            </h2>
            <p className="text-xs sm:text-sm text-[#aba7a0] font-sans font-light max-w-xl leading-relaxed">
              {data.patentsTeaserDesc}
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-2 text-[10px] font-mono text-[#8e8a82]">
              <span className="text-[#dfcba5]">{companyCount} Company-Owned</span>
              <span>•</span>
              <span>{licensedCount} Licensed from Inventor</span>
            </div>
          </div>

          <a
            href={patentsHref}
            onClick={(e) => {
              if (onOpenStandalone) {
                e.preventDefault();
                onOpenStandalone();
                window.history.pushState(null, '', patentsHref);
              }
            }}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#dfcba5] hover:bg-white text-black font-cinzel text-xs font-semibold tracking-wider transition-all shadow-[0_2px_14px_rgba(0,0,0,0.5)] shrink-0 self-start md:self-auto group-hover:scale-[1.02]"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{data.patentsExploreBtn}</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>
      </div>
    </section>
  );
};
