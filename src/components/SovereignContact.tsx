import React from 'react';
import { CompanyData } from '../data/companyData';
import { ArrowUpRight } from 'lucide-react';

interface SovereignContactProps {
  data: CompanyData;
}

export const SovereignContact: React.FC<SovereignContactProps> = ({ data }) => {
  return (
    <section id="contact" className="py-5 sm:py-7 monograph-section">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 md:px-8 space-y-4 sm:space-y-6">
        <div>
          <div className="font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.26em] text-[#dfcba5] font-medium">
            {data.contactTitle}
          </div>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl text-[#f8f7f4] font-normal tracking-tight mt-1 break-words">
            {data.contactSubtitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5">
          {data.contactLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="liquid-glass p-3.5 sm:p-5 rounded-2xl hover:border-[#dfcba5]/60 transition-all flex items-center justify-between gap-2 group min-w-0 overflow-hidden relative"
            >
              <div className="liquid-specular-edge" />
              <div className="min-w-0 flex-1">
                <div className="text-xs sm:text-sm font-medium text-[#eae8e3] group-hover:text-[#dfcba5] transition-colors font-sans truncate">
                  {item.label}
                </div>
                {item.note && (
                  <div className="text-[10px] sm:text-xs text-[#8e8a82] mt-0.5 font-cinzel truncate">
                    {item.note}
                  </div>
                )}
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#716e68] group-hover:text-[#dfcba5] transition-colors shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

