import React from 'react';
import { CompanyData } from '../data/companyData';

interface SovereignRegistrationProps {
  data: CompanyData;
}

export const SovereignRegistration: React.FC<SovereignRegistrationProps> = ({ data }) => {
  return (
    <section id="registration" className="py-5 sm:py-7 monograph-section">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 md:px-8 space-y-4 sm:space-y-6">
        <div>
          <div className="font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.26em] text-[#dfcba5] font-medium">
            {data.registrationTitle}
          </div>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl text-[#f8f7f4] font-normal tracking-tight mt-1 break-words">
            {data.registrationSubtitle}
          </h2>
        </div>

        <div className="liquid-glass rounded-2xl divide-y divide-white/[0.08] overflow-hidden relative">
          <div className="liquid-specular-edge" />
          {data.registrationList.map((item, index) => (
            <div
              key={index}
              className="p-3.5 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 hover:bg-white/[0.03] transition-colors"
            >
              <span className="font-cinzel text-[10px] sm:text-xs uppercase tracking-wider text-[#aba7a0] shrink-0">
                {item.label}
              </span>
              <span className="font-mono text-xs sm:text-sm md:text-base font-medium text-[#f8f7f4] break-words text-left sm:text-right">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

