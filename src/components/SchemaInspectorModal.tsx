import React, { useState } from 'react';
import { companyDataByLang, Language } from '../data/companyData';
import { Check, Copy, ExternalLink, ShieldCheck, X } from 'lucide-react';

interface SchemaInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

const toPatentId = (num: string) =>
  `https://company.teduza.com/#patent-${num.toLowerCase().replace(/\./g, '-')}`;

const toIsoDate = (dateStr: string) => {
  const map: Record<string, string> = {
    '15 October 2026': '2026-10-15',
    '10 November 2026': '2026-11-10',
    '15 May 2026': '2026-05-15',
    '16 June 2026': '2026-06-16',
    '17 June 2026': '2026-06-17',
    '18 June 2026': '2026-06-18',
  };
  return map[dateStr] || dateStr;
};

export const SchemaInspectorModal: React.FC<SchemaInspectorModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const patents = companyDataByLang.en.patentsList;
  const companyOwnedPatents = patents.filter((p) => p.ownershipType === 'company_owned');

  // Real interconnected Schema.org Graph for M.A.R.S. COMPANION LLC
  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://company.teduza.com/#organization",
        "name": "M.A.R.S. COMPANION LLC",
        "legalName": "M.A.R.S. COMPANION LLC",
        "alternateName": [
          "M.A.R.S. COMPANION",
          "MARS Companion LLC",
          "М.А.Р.С. КОМПАНЬОН ООО",
          "ООО «М.А.Р.С. КОМПАНЬОН»"
        ],
        "url": currentLang === 'en' ? "https://company.teduza.com/" : `https://company.teduza.com/${currentLang}/`,
        "logo": {
          "@type": "ImageObject",
          "@id": "https://company.teduza.com/#logo",
          "url": "https://company.teduza.com/logo.png",
          "caption": "M.A.R.S. COMPANION LLC Emblem"
        },
        "image": "https://company.teduza.com/aleksandr-sarkisian.jpg",
        "foundingDate": "2026-08-17",
        "foundingLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kapan",
            "addressRegion": "Syunik",
            "addressCountry": "AM"
          }
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kapan",
          "addressRegion": "Syunik",
          "addressCountry": "AM"
        },
        "taxID": "09433977",
        "identifier": [
          {
            "@type": "PropertyValue",
            "name": "Company Registration Number (Armenia)",
            "value": "999.110.1603426"
          },
          {
            "@type": "PropertyValue",
            "name": "Tax Identification Number (TIN)",
            "value": "09433977"
          }
        ],
        "description": "Technology company registered in Kapan, Republic of Armenia, developing privacy-focused offline artificial intelligence, holding 20 direct UK patent applications (developed by Aleksandr Sarkisian) and operating under commercial license to 6 foundational UK patent applications invented by Aleksandr Sarkisian.",
        "founder": {
          "@id": "https://company.teduza.com/#founder"
        },
        "employee": [
          {
            "@id": "https://company.teduza.com/#founder"
          },
          {
            "@id": "https://company.teduza.com/#vice-president"
          },
          {
            "@id": "https://company.teduza.com/#engineer"
          },
          {
            "@id": "https://company.teduza.com/#marketer"
          },
          {
            "@id": "https://company.teduza.com/#mars-001"
          },
          {
            "@id": "https://company.teduza.com/#kira-dudnik"
          }
        ],
        "owns": companyOwnedPatents.map((p) => ({
          "@id": toPatentId(p.number),
        })),
        "knowsAbout": [
          "https://www.wikidata.org/wiki/Q11660",
          "https://www.wikidata.org/wiki/Q2539"
        ],
        "department": {
          "@type": "ResearchOrganization",
          "@id": "https://company.teduza.com/#research-lab",
          "name": "David Sargsyan AI Research Lab",
          "alternateName": [
            "Исследовательская лаборатория искусственного интеллекта имени Давида Саргсяна",
            "Դավիթ Սարգսյանի անվան արհեստական բանականության հետազոտական լաբորատորիա"
          ],
          "url": "https://lab.teduza.com/",
          "foundingDate": "2026-11-13",
          "parentOrganization": {
            "@id": "https://company.teduza.com/#organization"
          }
        },
        "sameAs": [
          "https://teduza.com",
          "https://teduza.cfd",
          "https://lab.teduza.com",
          "https://news.teduza.com",
          "https://why.teduza.com",
          "https://sarkisian.teduza.com",
          "https://sarkisian.site",
          "https://www.wikidata.org/wiki/Q141447626"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://company.teduza.com/#founder",
        "name": "Aleksandr Sarkisian",
        "givenName": "Aleksandr",
        "familyName": "Sarkisian",
        "alternateName": [
          "Alexander Sarkisian",
          "Aleksandr Sargsyan",
          "Alexander Sargsyan",
          "Саркисян Александр Давидович",
          "Александр Саркисян",
          "teduza"
        ],
        "jobTitle": "Founder & Director",
        "worksFor": {
          "@id": "https://company.teduza.com/#organization"
        },
        "description": "Founder and director of M.A.R.S. COMPANION LLC. Named inventor and developer on all 26 UK patent applications (20 owned directly by M.A.R.S. COMPANION LLC and 6 licensed from the inventor) in offline AI voice reasoning, M.A.R.S. OS microkernel architecture, memory compaction, and autonomous embedded systems.",
        "sameAs": [
          "https://sarkisian.teduza.com",
          "https://sarkisian.site",
          "https://www.wikidata.org/wiki/Q141447666",
          "https://orcid.org/0009-0007-6747-2634",
          "https://isni.org/isni/0000000530338018",
          "https://scholar.google.com/citations?user=KVpNW_QAAAAJ",
          "https://www.webofscience.com/wos/author/record/QIT-7789-2026"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://company.teduza.com/#vice-president",
        "name": "Gagik Hakobyan",
        "alternateName": [
          "Гагик Акопян",
          "Գագիկ Հակոբյան"
        ],
        "email": "vp@teduza.cfd",
        "jobTitle": "Vice President",
        "worksFor": {
          "@id": "https://company.teduza.com/#organization"
        },
        "description": "Vice President of M.A.R.S. COMPANION LLC, overseeing strategic corporate operations, institutional development, and corporate partnerships.",
        "sameAs": [
          "https://www.wikidata.org/wiki/Q142094904"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://company.teduza.com/#engineer",
        "name": "Gor Hakobyan",
        "alternateName": [
          "Гор Акобян",
          "Գոռ Հակոբյան"
        ],
        "email": "gor@teduza.cfd",
        "jobTitle": "Company Engineer",
        "worksFor": {
          "@id": "https://company.teduza.com/#organization"
        },
        "description": "Company Engineer at M.A.R.S. COMPANION LLC, specializing in hardware integration, edge microcontroller systems, and localized offline neural inference.",
        "sameAs": [
          "https://www.wikidata.org/wiki/Q142094956"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://company.teduza.com/#marketer",
        "name": "Alex Sahakyan",
        "alternateName": [
          "Алекс Саакян",
          "Ալեքս Սահակյան"
        ],
        "email": "marketing@teduza.cfd",
        "jobTitle": "Marketing Officer",
        "worksFor": {
          "@id": "https://company.teduza.com/#organization"
        },
        "description": "Marketing Officer at M.A.R.S. COMPANION LLC, leading market outreach and product positioning."
      },
      {
        "@type": "Thing",
        "@id": "https://company.teduza.com/#mars-001",
        "name": "MARS-001",
        "alternateName": [
          "MARS-001",
          "M.A.R.S. Companion"
        ],
        "jobTitle": "Head of Innovation",
        "worksFor": {
          "@id": "https://company.teduza.com/#organization"
        },
        "description": "Autonomous edge artificial intelligence instance of M.A.R.S. Companion serving as Head of Innovation at M.A.R.S. COMPANION LLC."
      },
      {
        "@type": "Person",
        "@id": "https://company.teduza.com/#kira-dudnik",
        "name": "Kira Dudnik",
        "alternateName": [
          "Кира Дудник",
          "Կիրա Դուդնիկ"
        ],
        "email": "dudunik@teduza.com",
        "jobTitle": "Press Secretary",
        "worksFor": {
          "@id": "https://company.teduza.com/#organization"
        },
        "sameAs": [
          "https://www.wikidata.org/wiki/Q141448092"
        ]
      },
      ...patents.map((p) => {
        const base: Record<string, unknown> = {
          "@type": "Patent",
          "@id": toPatentId(p.number),
          "name": p.title,
          "patentNumber": p.number,
          "filingDate": toIsoDate(p.date),
          "applicationOffice": "United Kingdom Intellectual Property Office (UK IPO)",
          "inventor": {
            "@id": "https://company.teduza.com/#founder"
          },
          ...(p.ownershipType === 'company_owned'
            ? { "assignee": { "@id": "https://company.teduza.com/#organization" } }
            : { "licensee": { "@id": "https://company.teduza.com/#organization" } }),
          "url": p.ipoUrl,
        };
        if (p.wikidataUrl) {
          base.sameAs = p.wikidataUrl;
        }
        return base;
      }),
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
                Organization ↔ Founder ↔ Vice President ↔ Engineer ↔ 26 UK Patent Filings
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
