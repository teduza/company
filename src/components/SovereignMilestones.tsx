import React from 'react';
import { CompanyData } from '../data/companyData';

interface SovereignMilestonesProps {
  data: CompanyData;
}

export const SovereignMilestones: React.FC<SovereignMilestonesProps> = ({ data }) => {
  return (
    <section id="milestones" className="py-5 sm:py-7 monograph-section">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 md:px-8 space-y-4 sm:space-y-6">
        <div>
          <div className="font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.26em] text-[#dfcba5] font-medium">
            {data.milestonesTitle}
          </div>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl text-[#f8f7f4] font-normal tracking-tight mt-1 break-words">
            {data.milestonesSubtitle}
          </h2>
        </div>

        <div className="space-y-2.5 sm:space-y-3">
          {data.milestonesList.map((item, index) => (
            <div
              key={index}
              className="liquid-glass p-3.5 sm:p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4 hover:border-white/25 transition-all relative overflow-hidden group"
            >
              <div className="liquid-specular-edge" />
              <div className="font-mono text-xs font-semibold text-[#dfcba5] tracking-wider uppercase shrink-0 sm:w-48 break-words">
                {item.badge}
              </div>
              <div className="font-sans text-xs sm:text-sm md:text-base text-[#eae8e3] font-light flex-1 break-words">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

