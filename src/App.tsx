import React, { useState, useEffect } from 'react';
import { companyDataByLang, Language } from './data/companyData';
import { SovereignHeader, PageRoute } from './components/SovereignHeader';
import { SovereignHero } from './components/SovereignHero';
import { SovereignAbout } from './components/SovereignAbout';
import { SovereignProjects } from './components/SovereignProjects';
import { SovereignPatents } from './components/SovereignPatents';
import { SovereignPrinciples } from './components/SovereignPrinciples';
import { SovereignMilestones } from './components/SovereignMilestones';
import { SovereignRegistration } from './components/SovereignRegistration';
import { SovereignFounder } from './components/SovereignFounder';
import { SovereignPress } from './components/SovereignPress';
import { SovereignEcosystem } from './components/SovereignEcosystem';
import { SovereignContact } from './components/SovereignContact';
import { SovereignFooter } from './components/SovereignFooter';
import { SchemaInspectorModal } from './components/SchemaInspectorModal';

export default function App() {
  // Parse initial route & language from window.location.pathname
  const getRouteInfo = () => {
    if (typeof window === 'undefined') {
      return { lang: 'en' as Language, route: 'home' as PageRoute };
    }
    const path = window.location.pathname.toLowerCase();

    let lang: Language = 'en';
    if (path.startsWith('/ru')) lang = 'ru';
    else if (path.startsWith('/hy')) lang = 'hy';

    let route: PageRoute = 'home';
    if (path.includes('/ecosystem')) {
      route = 'ecosystem';
    } else if (path.includes('/patents')) {
      route = 'patents';
    }

    return { lang, route };
  };

  const initial = getRouteInfo();
  const [currentLang, setCurrentLang] = useState<Language>(initial.lang);
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(initial.route);
  const [isSchemaOpen, setIsSchemaOpen] = useState(false);

  const data = companyDataByLang[currentLang];

  const homeHref = currentLang === 'en' ? '/' : `/${currentLang}/`;
  const ecosystemHref = currentLang === 'en' ? '/ecosystem/' : `/${currentLang}/ecosystem/`;
  const patentsHref = currentLang === 'en' ? '/patents/' : `/${currentLang}/patents/`;

  // Navigate route in-app while keeping URL history clean
  const handleNavigateRoute = (route: PageRoute) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sync back/forward browser navigation
  useEffect(() => {
    const handlePopState = () => {
      const info = getRouteInfo();
      setCurrentLang(info.lang);
      setCurrentRoute(info.route);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync document head metadata and dynamic title
  useEffect(() => {
    document.documentElement.lang = currentLang;

    if (currentRoute === 'patents') {
      document.title = `${data.patentsTitle} — ${data.h1}`;
    } else if (currentRoute === 'ecosystem') {
      document.title = `${data.ecosystemTitle} — ${data.h1}`;
    } else {
      document.title = data.metaTitle;
    }

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      if (currentRoute === 'patents') {
        metaDesc.setAttribute('content', data.patentsTeaserDesc);
      } else {
        metaDesc.setAttribute('content', data.metaDesc);
      }
    }
  }, [currentLang, currentRoute, data]);

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#050608] text-[#f8f7f4] antialiased selection:bg-[#dfcba5] selection:text-black relative">
      {/* Sovereign Classical Masthead & Top Bar with Route Awareness */}
      <SovereignHeader
        data={data}
        currentLang={currentLang}
        currentRoute={currentRoute}
        onNavigateRoute={handleNavigateRoute}
      />

      {/* Main Content: Render dedicated view if on separate page route, or full home monograph */}
      {currentRoute === 'ecosystem' ? (
        <SovereignEcosystem
          data={data}
          currentLang={currentLang}
          isStandalonePage={true}
          homeHref={homeHref}
          ecosystemHref={ecosystemHref}
          onCloseStandalone={() => handleNavigateRoute('home')}
        />
      ) : currentRoute === 'patents' ? (
        <SovereignPatents
          data={data}
          currentLang={currentLang}
          isStandalonePage={true}
          homeHref={homeHref}
          patentsHref={patentsHref}
          onCloseStandalone={() => handleNavigateRoute('home')}
        />
      ) : (
        /* Standard Home Monograph with Space-Saving Teaser Cards */
        <main className="w-full max-w-full overflow-x-hidden pt-14 sm:pt-16">
          <SovereignHero data={data} />
          <SovereignAbout data={data} />
          <SovereignProjects data={data} />

          {/* Compact Space-Saving Patent Portfolio Preview Card (Identical pattern to Ecosystem) */}
          <SovereignPatents
            data={data}
            currentLang={currentLang}
            isStandalonePage={false}
            homeHref={homeHref}
            patentsHref={patentsHref}
            onOpenStandalone={() => handleNavigateRoute('patents')}
          />

          <SovereignPrinciples data={data} />
          <SovereignMilestones data={data} />
          <SovereignRegistration data={data} />
          <SovereignFounder data={data} />
          <SovereignPress data={data} />

          {/* Compact Space-Saving Ecosystem Preview Card */}
          <SovereignEcosystem
            data={data}
            currentLang={currentLang}
            isStandalonePage={false}
            homeHref={homeHref}
            ecosystemHref={ecosystemHref}
            onOpenStandalone={() => handleNavigateRoute('ecosystem')}
          />

          <SovereignContact data={data} />
        </main>
      )}

      {/* Sovereign Understated Footer */}
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
