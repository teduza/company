import React from 'react';
import { CompanyData } from '../data/companyData';

interface SovereignPrinciplesProps {
  data: CompanyData;
}

export const SovereignPrinciples: React.FC<SovereignPrinciplesProps> = ({ data }) => {
  return (
    <section id="principles" className="py-5 sm:py-7 monograph-section">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 md:px-8 space-y-4 sm:space-y-6">
        <div>
          <div className="font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.26em] text-[#dfcba5] font-medium">
            {data.principlesTitle}
          </div>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl text-[#f8f7f4] font-normal tracking-tight mt-1 break-words">
            {data.principlesSubtitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          {data.principlesList.map((item, index) => (
            <div
              key={index}
              className="liquid-glass p-4 sm:p-6 rounded-2xl flex flex-col justify-between space-y-3 sm:space-y-4 hover:border-white/30 transition-all relative overflow-hidden group"
            >
              <div className="liquid-specular-edge" />
              <div>
                <div className="text-gold-gradient font-cinzel text-xs tracking-widest mb-1.5 sm:mb-2 font-bold">
                  {item.num}
                </div>
                <h3 className="font-serif-luxury text-lg sm:text-xl md:text-2xl text-[#f8f7f4] font-normal mb-1.5 sm:mb-2 break-words">
                  {item.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#b8b5ae] leading-relaxed font-light break-words">
                  {item.copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

