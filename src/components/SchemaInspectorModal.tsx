import React, { useState } from 'react';
import { X, Copy, Check, ExternalLink, ShieldCheck } from 'lucide-react';
import { Language } from '../data/companyData';

interface SchemaInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const SchemaInspectorModal: React.FC<SchemaInspectorModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const founderName =
    currentLang === 'ru'
      ? 'Саркисян Александр Давидович'
      : currentLang === 'hy'
      ? 'Ալեքսանդր Սարգսյան'
      : 'Aleksandr Sarkisian';

  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://company.teduza.com/#website",
        "url": "https://company.teduza.com",
        "name": "M.A.R.S. Companion LLC Corporate Registry & Sovereign Platform",
        "publisher": {
          "@id": "https://company.teduza.com/#organization"
        },
        "inLanguage": ["en", "ru", "hy"]
      },
      {
        "@type": "Organization",
        "@id": "https://company.teduza.com/#organization",
        "name": "M.A.R.S. Companion LLC",
        "legalName": "M.A.R.S. COMPANION LLC",
        "alternateName": [
          "MARS Companion LLC",
          "M.A.R.S. Companion",
          "MARS Companion",
          "ԷՄ.ԷՅ.ԱՐ.ԷՍ ՔԱՄՓԱՆԻՈՆ ՍՊԸ",
          "Teduza",
          "Тедуза"
        ],
        "url": "https://company.teduza.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://company.teduza.com/logo.png",
          "caption": "M.A.R.S. Companion LLC Seal"
        },
        "image": "https://company.teduza.com/logo.png",
        "foundingDate": "2026-08-17",
        "identifier": "999.110.1603426",
        "taxID": "09433977",
        "description": "Technology company registered in Kapan, Republic of Armenia, developing privacy-focused offline artificial intelligence and operating under commercial license to UK patent applications held personally by inventor Aleksandr Sarkisian.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kapan",
          "addressRegion": "Syunik",
          "addressCountry": "AM"
        },
        "founder": {
          "@id": "https://company.teduza.com/#founder"
        },
        "employee": [
          {
            "@id": "https://company.teduza.com/#founder"
          },
          {
            "@id": "https://company.teduza.com/#kira-dudnik"
          }
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "email": "contact@teduza.com",
            "contactType": "general inquiries"
          },
          {
            "@type": "ContactPoint",
            "email": "dudunik@teduza.com",
            "contactType": "press"
          }
        ],
        "sameAs": [
          "https://www.wikidata.org/wiki/Q141447626",
          "https://teduza.com",
          "https://company.teduza.com",
          "https://news.teduza.com",
          "https://sarkisian.teduza.com",
          "https://why.teduza.com",
          "https://t.me/teduza"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://company.teduza.com/#founder",
        "name": founderName,
        "givenName": "Aleksandr",
        "additionalName": "Davidovich",
        "familyName": "Sarkisian",
        "alternateName": [
          "Саркисян Александр Давидович",
          "Саркисян Александр",
          "Александр Саркисян",
          "Саркисян",
          "Александр Давидович Саркисян",
          "Саргсян Александр Давидович",
          "Саргсян Александр",
          "Александр Саргсян",
          "Ալեքսանդր Սարգսյան",
          "Ալեքսանդր Դավիթի Սարգսյան",
          "Սարգսյան Ալեքսանդր",
          "Aleksandr Sargsyan",
          "Alexander Sarkisian",
          "Alexander Sargsyan",
          "Sarkisian Aleksandr",
          "Sargsyan Aleksandr",
          "teduza"
        ],
        "gender": "Male",
        "birthDate": "2008-05-14",
        "nationality": ["Armenia", "Russia"],
        "jobTitle": "Founder & Sole Developer",
        "description": "Founder and sole developer of M.A.R.S. Companion LLC. Sole applicant and named inventor on 6 UK patent applications in offline AI voice reasoning, semantic memory, and operational manifesto architectures. Licensor of proprietary technologies to M.A.R.S. Companion LLC.",
        "image": "https://company.teduza.com/aleksandr-sarkisian.jpg",
        "worksFor": {
          "@id": "https://company.teduza.com/#organization"
        },
        "alumniOf": [
          {
            "@type": "EducationalOrganization",
            "name": "Кронштадтский Морской Кадетский Военный Корпус МО РФ",
            "alternateName": ["КМКВК", "Kronstadt Sea Cadet Military Corps of the Ministry of Defence of the Russian Federation"],
            "sameAs": "https://www.wikidata.org/wiki/Q54552"
          },
          {
            "@type": "EducationalOrganization",
            "name": "Лицей №410",
            "alternateName": ["Лицей №410 Пушкинского района Санкт-Петербурга", "Lyceum No. 410"],
            "sameAs": "https://www.wikidata.org/wiki/Q16463"
          }
        ],
        "knowsAbout": [
          "Artificial Intelligence",
          "Offline AI",
          "Autonomous Voice Systems",
          "Semantic Long-Term Memory",
          "Sequential Resource Orchestration",
          "Software Engineering"
        ],
        "sameAs": [
          "https://www.wikidata.org/wiki/Q141447666",
          "https://sarkisian.teduza.com",
          "https://sarkisian.site",
          "https://news.teduza.com",
          "https://teduza.com",
          "https://why.teduza.com",
          "https://scholar.google.com/citations?user=KVpNW_QAAAAJ",
          "https://orcid.org/0009-0007-6747-2634",
          "https://isni.org/isni/0000000530338018",
          "https://www.webofscience.com/wos/author/record/QIT-7789-2026",
          "https://t.me/teduza",
          "https://www.wikidata.org/wiki/Q141447944"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://company.teduza.com/#kira-dudnik",
        "name": "Kira Dudnik",
        "alternateName": ["Кира Дудник"],
        "jobTitle": "Press Secretary",
        "worksFor": {
          "@id": "https://company.teduza.com/#organization"
        },
        "sameAs": [
          "https://www.wikidata.org/wiki/Q141448092"
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://company.teduza.com/#mars-companion",
        "name": "M.A.R.S. Companion",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "Linux, Embedded ARM, Raspberry Pi",
        "description": "Fully offline AI voice companion with long-term semantic memory. Runs 100% locally. Remembers everything. Belongs only to you.",
        "creator": {
          "@id": "https://company.teduza.com/#founder"
        },
        "publisher": {
          "@id": "https://company.teduza.com/#organization"
        },
        "url": "https://teduza.com",
        "sameAs": [
          "https://www.wikidata.org/wiki/Q141448028"
        ]
      },
      {
        "@type": "Patent",
        "@id": "https://company.teduza.com/#patent-gb2611463-7",
        "name": "M.A.R.S. Companion (Mobile Autonomous Reasoning System): Portable Offline Voice Assistant with Sequential Resource Orchestration and Semantic Memory Retrieval",
        "patentNumber": "GB2611463.7",
        "filingDate": "2026-05-15",
        "applicationOffice": "United Kingdom Intellectual Property Office (UK IPO)",
        "inventor": {
          "@id": "https://company.teduza.com/#founder"
        },
        "licensee": {
          "@id": "https://company.teduza.com/#organization"
        },
        "url": "https://www.search-for-intellectual-property.service.gov.uk/GB2611463.7",
        "sameAs": "https://www.wikidata.org/wiki/Q141447790"
      },
      {
        "@type": "Patent",
        "@id": "https://company.teduza.com/#patent-gb2613965-9",
        "name": "M.A.R.S. Companion: System and Method for Governing Artificial Intelligence Behaviour via an Operational Manifesto Framework",
        "patentNumber": "GB2613965.9",
        "filingDate": "2026-06-16",
        "applicationOffice": "United Kingdom Intellectual Property Office (UK IPO)",
        "inventor": {
          "@id": "https://company.teduza.com/#founder"
        },
        "licensee": {
          "@id": "https://company.teduza.com/#organization"
        },
        "url": "https://www.search-for-intellectual-property.service.gov.uk/GB2613965.9",
        "sameAs": "https://www.wikidata.org/wiki/Q141447746"
      },
      {
        "@type": "Patent",
        "@id": "https://company.teduza.com/#patent-gb2613968-3",
        "name": "M.A.R.S. Companion: System and Method for Emotional Architecture and Empathetic Interaction in AI Companions",
        "patentNumber": "GB2613968.3",
        "filingDate": "2026-06-17",
        "applicationOffice": "United Kingdom Intellectual Property Office (UK IPO)",
        "inventor": {
          "@id": "https://company.teduza.com/#founder"
        },
        "licensee": {
          "@id": "https://company.teduza.com/#organization"
        },
        "url": "https://www.search-for-intellectual-property.service.gov.uk/GB2613968.3",
        "sameAs": "https://www.wikidata.org/wiki/Q141447767"
      },
      {
        "@type": "Patent",
        "@id": "https://company.teduza.com/#patent-gb2613969-1",
        "name": "M.A.R.S. Companion: System and Method for Semantic Long-Term Memory Management in AI Companions",
        "patentNumber": "GB2613969.1",
        "filingDate": "2026-06-17",
        "applicationOffice": "United Kingdom Intellectual Property Office (UK IPO)",
        "inventor": {
          "@id": "https://company.teduza.com/#founder"
        },
        "licensee": {
          "@id": "https://company.teduza.com/#organization"
        },
        "url": "https://www.search-for-intellectual-property.service.gov.uk/GB2613969.1",
        "sameAs": "https://www.wikidata.org/wiki/Q141447759"
      },
      {
        "@type": "Patent",
        "@id": "https://company.teduza.com/#patent-gb2613970-9",
        "name": "M.A.R.S. Companion: System and Method for Maintaining and Managing AI Companion Identity and Personality Persistence",
        "patentNumber": "GB2613970.9",
        "filingDate": "2026-06-17",
        "applicationOffice": "United Kingdom Intellectual Property Office (UK IPO)",
        "inventor": {
          "@id": "https://company.teduza.com/#founder"
        },
        "licensee": {
          "@id": "https://company.teduza.com/#organization"
        },
        "url": "https://www.search-for-intellectual-property.service.gov.uk/GB2613970.9",
        "sameAs": "https://www.wikidata.org/wiki/Q141447779"
      },
      {
        "@type": "Patent",
        "@id": "https://company.teduza.com/#patent-gb2614145-7",
        "name": "M.A.R.S. Companion: System and Method for Autonomous Physical Embodiment, Hardware-Anchored Identity, and Trust-Gated Introspective Agency in Artificial Intelligence",
        "patentNumber": "GB2614145.7",
        "filingDate": "2026-06-18",
        "applicationOffice": "United Kingdom Intellectual Property Office (UK IPO)",
        "inventor": {
          "@id": "https://company.teduza.com/#founder"
        },
        "licensee": {
          "@id": "https://company.teduza.com/#organization"
        },
        "url": "https://www.search-for-intellectual-property.service.gov.uk/GB2614145.7",
        "sameAs": "https://www.wikidata.org/wiki/Q141447786"
      }
    ]
  };

  const jsonString = JSON.stringify(schemaJson, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-3xl max-h-[88vh] liquid-glass-elevated rounded-2xl border border-white/20 shadow-2xl flex flex-col overflow-hidden">
        <div className="liquid-specular-edge" />
        {/* Header */}
        <div className="flex items-center justify-between p-3.5 sm:p-5 border-b border-white/[0.08] bg-black/40">
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
            <ShieldCheck className="w-5 h-5 text-[#dfcba5] shrink-0" />
            <div className="min-w-0">
              <h2 className="text-xs sm:text-base font-cinzel font-semibold text-[#f8f7f4] tracking-wider truncate">
                Schema.org (JSON-LD) Interconnected Graph
              </h2>
              <p className="text-[10px] sm:text-xs text-[#aba7a0] font-sans truncate">
                Founder (Licensor & Inventor) ↔ Organization (Licensee) ↔ Product
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#aba7a0] hover:text-white hover:bg-white/[0.08] transition-colors shrink-0 ml-2"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action bar */}
        <div className="p-3 sm:p-4 bg-black/20 border-b border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span className="text-[11px] sm:text-xs text-[#aba7a0] font-sans">
            Live structured data embedded in <code>&lt;head&gt;</code> of <code>company.teduza.com</code>:
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#dfcba5] text-black font-cinzel text-xs font-semibold hover:bg-white transition-all shadow-[0_2px_10px_rgba(0,0,0,0.3)] shrink-0 self-start sm:self-auto"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy JSON-LD'}</span>
          </button>
        </div>

        {/* Code viewer */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-5 bg-black/60">
          <pre className="p-3 sm:p-4 rounded-xl liquid-glass border border-white/[0.08] text-[#eae8e3] text-[10px] sm:text-xs font-mono overflow-x-auto leading-relaxed">
            {jsonString}
          </pre>
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 border-t border-white/[0.08] bg-black/40 flex items-center justify-between">
          <a
            href="https://search.google.com/test/rich-results"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-[#dfcba5] hover:underline font-mono truncate"
          >
            <span>Google Rich Results Test</span>
            <ExternalLink className="w-3.5 h-3.5 shrink-0" />
          </a>

          <button
            onClick={onClose}
            className="px-3.5 sm:px-4 py-1.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.14] text-white text-xs font-cinzel transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
