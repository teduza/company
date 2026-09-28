import React, { useState, useEffect } from 'react';
import { companyDataByLang, Language } from './data/companyData';
import { SovereignHeader } from './components/SovereignHeader';
import { SovereignHero } from './components/SovereignHero';
import { SovereignAbout } from './components/SovereignAbout';
import { SovereignProjects } from './components/SovereignProjects';
import { SovereignEcosystem } from './components/SovereignEcosystem';
import { SovereignPrinciples } from './components/SovereignPrinciples';
import { SovereignMilestones } from './components/SovereignMilestones';
import { SovereignRegistration } from './components/SovereignRegistration';
import { SovereignFounder } from './components/SovereignFounder';
import { SovereignPress } from './components/SovereignPress';
import { SovereignContact } from './components/SovereignContact';
import { SovereignFooter } from './components/SovereignFooter';
import { SchemaInspectorModal } from './components/SchemaInspectorModal';

export default function App() {
  // Detect language from current URL path (/ru, /hy, or /)
  const getInitialLang = (): Language => {
    if (typeof window === 'undefined') return 'en';
    const path = window.location.pathname.toLowerCase();
    if (path.startsWith('/ru')) return 'ru';
    if (path.startsWith('/hy')) return 'hy';
    return 'en';
  };

  const [currentLang, setCurrentLang] = useState<Language>(getInitialLang);
  const [isSchemaOpen, setIsSchemaOpen] = useState(false);

  const data = companyDataByLang[currentLang];

  // Language switch handler: behaves as a separate sub-site URL route
  const handleSelectLang = (lang: Language) => {
    setCurrentLang(lang);
    const targetData = companyDataByLang[lang];
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', targetData.langPath);
    }
  };

  // Sync back/forward browser navigation
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      if (path.startsWith('/ru')) setCurrentLang('ru');
      else if (path.startsWith('/hy')) setCurrentLang('hy');
      else setCurrentLang('en');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync document head metadata and language attributes
  useEffect(() => {
    document.documentElement.lang = currentLang;
    document.title = data.metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', data.metaDesc);
    }
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', `https://company.teduza.com${data.langPath}`);
    }
  }, [currentLang, data]);

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#050608] text-[#f8f7f4] antialiased selection:bg-[#dfcba5] selection:text-black relative">
      {/* Sovereign Classical Masthead & Top Bar */}
      <SovereignHeader
        data={data}
        currentLang={currentLang}
        onSelectLang={handleSelectLang}
      />

      {/* Main Archival Monograph Body */}
      <main className="w-full max-w-full overflow-x-hidden pt-14 sm:pt-16">
        <SovereignHero data={data} />
        <SovereignAbout data={data} />
        <SovereignProjects data={data} />
        <SovereignEcosystem data={data} />
        <SovereignPrinciples data={data} />
        <SovereignMilestones data={data} />
        <SovereignRegistration data={data} />
        <SovereignFounder data={data} />
        <SovereignPress data={data} />
        <SovereignContact data={data} />
      </main>

      {/* Sovereign Understated Footer with quiet Schema.org link and registries */}
      <SovereignFooter
        data={data}
        onOpenSchema={() => setIsSchemaOpen(true)}
      />

      {/* Schema.org Structured Data Technical Viewer */}
      <SchemaInspectorModal
        isOpen={isSchemaOpen}
        onClose={() => setIsSchemaOpen(false)}
        currentLang={currentLang}
      />
    </div>
  );
}
