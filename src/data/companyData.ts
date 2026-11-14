export type Language = 'en' | 'ru' | 'hy';

export interface PatentItem {
  number: string;
  title: string;
  date: string;
  status: string;
  applicant: string;
  inventor: string;
  ownershipType: 'company_owned' | 'licensed';
  ipoUrl: string;
  wikidataUrl?: string;
}

export interface EducationItem {
  institution: string;
  shortName?: string;
  years: string;
  qid?: string;
  note: string;
}

export interface EcosystemLink {
  title: string;
  domain: string;
  url: string;
  badge: string;
  desc: string;
}

export interface ExecutiveMember {
  name: string;
  role: string;
  kicker: string;
  badge: string;
  bio: string;
  image?: string;
  emailSlot?: string;
  contactLabel?: string;
  wikidataId?: string;
  wikidataUrl?: string;
}

export interface CompanyData {
  langPath: string;
  metaTitle: string;
  metaDesc: string;

  eyebrow: string;
  h1: string;
  lead: string;

  heroStats: {
    regLabel: string;
    regValue: string;
    taxLabel: string;
    taxValue: string;
    jurisdictionLabel: string;
    jurisdictionValue: string;
    ipLabel: string;
    ipValue: string;
  };

  aboutTitle: string;
  aboutQuoteMeta: string;
  aboutQuoteText: string;
  aboutText: string;
  aboutLinkText: string;
  aboutLinkHref: string;

  projectsTitle: string;
  projectItemTitle: string;
  projectItemText: string;
  projectsViewAllText: string;
  projectDetailTitle: string;
  projectDetailP1: string;
  projectDetailP2: string;
  projectDetailLinkText: string;

  // V.E.N.U.S. Companion Project
  venusItemTitle: string;
  venusItemAcronym: string;
  venusItemText: string;
  venusDetailTitle: string;
  venusDetailP1: string;
  venusDetailP2: string;
  venusDetailLinkText: string;
  venusLinkHref: string;

  // Patent Portfolio
  patentsTitle: string;
  patentsExploreBtn: string;
  patentsBackToMain: string;
  patentsTeaserDesc: string;
  patentsTabAll: string;
  patentsTabCompany: string;
  patentsTabLicensed: string;
  patentsStatusLabel: string;
  patentsOwnerLabel: string;
  patentsInventorLabel: string;
  patentsCompanyOwnedBadge: string;
  patentsLicensedBadge: string;
  patentsList: PatentItem[];

  principlesTitle: string;
  principlesSubtitle: string;
  principlesList: {
    num: string;
    title: string;
    copy: string;
  }[];

  milestonesTitle: string;
  milestonesSubtitle: string;
  milestonesList: {
    badge: string;
    text: string;
    linkLabel?: string;
    linkUrl?: string;
  }[];

  registrationTitle: string;
  registrationSubtitle: string;
  registrationList: {
    label: string;
    value: string;
  }[];

  founderTitle: string;
  founderKicker: string;
  founderName: string;
  founderRole: string;
  founderBio: string;
  founderExploreBtn: string;
  founderExploreUrl: string;
  founderTelegramLabel: string;
  founderTelegramUrl: string;

  // Team & Leadership
  teamTitle: string;
  teamSubtitle: string;
  teamMembers: ExecutiveMember[];

  // Registries moved to footer
  footerRegistriesTitle: string;
  founderRegistries: {
    name: string;
    id: string;
    url: string;
    badge?: string;
  }[];

  ecosystemTitle: string;
  ecosystemSubtitle: string;
  ecosystemExploreText: string;
  ecosystemModalCloseText: string;
  ecosystemBackToMainText: string;
  ecosystemLinks: EcosystemLink[];

  pressTitle: string;
  pressKicker: string;
  pressName: string;
  pressRole: string;
  pressQuoteMeta: string;
  pressQuoteText: string;
  pressImage?: string;
  pressEmail: string;
  pressContactLabel: string;
  pressWikidataUrl?: string;

  contactTitle: string;
  contactSubtitle: string;
  contactLinks: {
    label: string;
    href: string;
    note?: string;
  }[];

  footerCopyright: string;
  footerLocation: string;
  footerWhyArmenia: string;

  nav: {
    about: string;
    projects: string;
    patents: string;
    principles: string;
    milestones: string;
    registration: string;
    founder: string;
    press: string;
    ecosystem: string;
    contact: string;
  };
}

const COMMON_PATENTS: PatentItem[] = [
  // 20 Company-Owned Patent Applications (Applicant/Owner: M.A.R.S. COMPANION LLC, Inventor: Aleksandr Sarkisian)
  // 6 Filed 15 October 2026
  {
    number: 'GB2624388.1',
    title: 'A Deterministic Lifetime-Graph-Driven Method and Apparatus for Dynamic Volatile Memory Defragmentation, Tensor Relocation and Arena Compaction in Resource-Constrained Microcontroller Units During Autonomous Offline Neural Network Inference',
    date: '15 October 2026',
    status: 'Filed',
    applicant: 'M.A.R.S. COMPANION LLC',
    inventor: 'Aleksandr Sarkisian',
    ownershipType: 'company_owned',
    ipoUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2624388.1'
  },
  {
    number: 'GB2624406.1',
    title: 'A Hardware-Bound Hierarchical Key-Derivation and Streaming Decryption Architecture for Localized Cryptographic Protection of Neural Network Weights Against Physical Tampering, Probing and Extraction in Autonomous Edge Intelligence Devices',
    date: '15 October 2026',
    status: 'Filed',
    applicant: 'M.A.R.S. COMPANION LLC',
    inventor: 'Aleksandr Sarkisian',
    ownershipType: 'company_owned',
    ipoUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2624406.1'
  },
  {
    number: 'GB2624409.5',
    title: 'A Decentralized Peer-to-Peer Ad-Hoc Communication and Time-Slotted Coordination Protocol for Autonomous Multi-Agent Synchronization and Collective Resource Orchestration in Environments Devoid of Internet and Satellite Positioning Services',
    date: '15 October 2026',
    status: 'Filed',
    applicant: 'M.A.R.S. COMPANION LLC',
    inventor: 'Aleksandr Sarkisian',
    ownershipType: 'company_owned',
    ipoUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2624409.5'
  },
  {
    number: 'GB2624414.5',
    title: 'A Page-Aligned Hierarchical Quantized Offline Vector Database Indexing Mechanism for Flash-Memory-Constrained Edge Artificial Intelligence Systems with Wear-Aware Log-Structured Updating',
    date: '15 October 2026',
    status: 'Filed',
    applicant: 'M.A.R.S. COMPANION LLC',
    inventor: 'Aleksandr Sarkisian',
    ownershipType: 'company_owned',
    ipoUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2624414.5'
  },
  {
    number: 'GB2624415.2',
    title: 'A Serverless Opportunistic Federated Training and Staleness-Weighted Low-Rank Parameter Optimization Method for Self-Contained Autonomous Intelligence Models Operating in Isolated Environments',
    date: '15 October 2026',
    status: 'Filed',
    applicant: 'M.A.R.S. COMPANION LLC',
    inventor: 'Aleksandr Sarkisian',
    ownershipType: 'company_owned',
    ipoUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2624415.2'
  },
  {
    number: 'GB2624416.0',
    title: 'An Offline Artificial Intelligence System for Dynamic Container Terminal Logistics, Rolling-Horizon Yard Planning and Sequential Autonomous Resource Orchestration in Seaport Environments Without Cloud Dependency',
    date: '15 October 2026',
    status: 'Filed',
    applicant: 'M.A.R.S. COMPANION LLC',
    inventor: 'Aleksandr Sarkisian',
    ownershipType: 'company_owned',
    ipoUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2624416.0'
  },
  // 14 Filed 10 November 2026
  {
    number: 'GB2626659.3',
    title: 'A Localized Multi-Sensor Computer Vision and Spatial Telemetry Fusion Framework for Autonomous Navigation and Cargo Handling Vehicles Operating in Isolated, Satellite-Denied Industrial Zones',
    date: '10 November 2026',
    status: 'Filed',
    applicant: 'M.A.R.S. COMPANION LLC',
    inventor: 'Aleksandr Sarkisian',
    ownershipType: 'company_owned',
    ipoUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2626659.3'
  },
  {
    number: 'GB2626660.1',
    title: 'A Decentralized Edge Intelligence Architecture for Real-Time Multi-Spectral Security Perimeter Surveillance, Cross-Modal Event Verification and Threat Isolation on Standalone Hardware Nodes',
    date: '10 November 2026',
    status: 'Filed',
    applicant: 'M.A.R.S. COMPANION LLC',
    inventor: 'Aleksandr Sarkisian',
    ownershipType: 'company_owned',
    ipoUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2626660.1'
  },
  {
    number: 'GB2626661.9',
    title: 'An Algorithmic Method for Predictive Mechanical Fault Isolation, Modal Parameter Tracking and Structural Integrity Telemetry Processing in Heavy Industrial Seaport Infrastructure Using Standalone Edge Analytics',
    date: '10 November 2026',
    status: 'Filed',
    applicant: 'M.A.R.S. COMPANION LLC',
    inventor: 'Aleksandr Sarkisian',
    ownershipType: 'company_owned',
    ipoUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2626661.9'
  },
  {
    number: 'GB2626662.7',
    title: 'M.A.R.S. OS: A Capability-Based Real-Time Microkernel Operating System Architecture with Worst-Case-Bounded Scheduling for Deterministic Execution of Containerized Neural Network Models on Edge Devices',
    date: '10 November 2026',
    status: 'Filed',
    applicant: 'M.A.R.S. COMPANION LLC',
    inventor: 'Aleksandr Sarkisian',
    ownershipType: 'company_owned',
    ipoUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2626662.7'
  },
  {
    number: 'GB2626663.5',
    title: 'An Intelligent Predictive-Residual Telemetry Filtration, Importance-Weighted Adaptive Sampling and Entropy-Coded Compression Algorithm on Standalone Computing Nodes',
    date: '10 November 2026',
    status: 'Filed',
    applicant: 'M.A.R.S. COMPANION LLC',
    inventor: 'Aleksandr Sarkisian',
    ownershipType: 'company_owned',
    ipoUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2626663.5'
  },
  {
    number: 'GB2626665.0',
    title: 'A Localized Event-Driven Tile-Gated Convolutional Neural Network Architecture with Early-Exit Cascades for Asynchronous Object Detection on Offline Low-Power Edge Processing Units',
    date: '10 November 2026',
    status: 'Filed',
    applicant: 'M.A.R.S. COMPANION LLC',
    inventor: 'Aleksandr Sarkisian',
    ownershipType: 'company_owned',
    ipoUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2626665.0'
  },
  {
    number: 'GB2626666.8',
    title: 'A Predictive Multi-Channel Telemetry Analysis System with Peer Cross-Validation for Automated Proactive Hardware Fault Isolation and Workload Evacuation in Decentralized Computing Clusters',
    date: '10 November 2026',
    status: 'Filed',
    applicant: 'M.A.R.S. COMPANION LLC',
    inventor: 'Aleksandr Sarkisian',
    ownershipType: 'company_owned',
    ipoUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2626666.8'
  },
  {
    number: 'GB2626667.6',
    title: 'A Compressed Conditional Generative Adversarial Network Architecture with On-Device Stability Supervision for Real-Time Synthetic Data Generation and Rare-Event Augmentation on Isolated Computing Nodes',
    date: '10 November 2026',
    status: 'Filed',
    applicant: 'M.A.R.S. COMPANION LLC',
    inventor: 'Aleksandr Sarkisian',
    ownershipType: 'company_owned',
    ipoUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2626667.6'
  },
  {
    number: 'GB2626668.4',
    title: 'A Slack-Aware Multi-Criteria Dynamic Priority Resource Scheduling Algorithmic Framework with Layer-Boundary Preemption for Asynchronous Edge Intelligence Workflows',
    date: '10 November 2026',
    status: 'Filed',
    applicant: 'M.A.R.S. COMPANION LLC',
    inventor: 'Aleksandr Sarkisian',
    ownershipType: 'company_owned',
    ipoUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2626668.4'
  },
  {
    number: 'GB2626669.2',
    title: 'A Keyed Low-Observability Steganographic Communication Protocol for Concealed Neural Network Parameter Exchange Embedded in Standard Industrial Telemetry Streams with Error-Correcting Redundancy',
    date: '10 November 2026',
    status: 'Filed',
    applicant: 'M.A.R.S. COMPANION LLC',
    inventor: 'Aleksandr Sarkisian',
    ownershipType: 'company_owned',
    ipoUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2626669.2'
  },
  {
    number: 'GB2626670.0',
    title: 'An Automated Capability-Vector-Driven Min-Max Latency Partitioning and Diffusive Load-Balancing Method for Heterogeneous Decentralized Neural Network Nodes in Localized Mesh Networks',
    date: '10 November 2026',
    status: 'Filed',
    applicant: 'M.A.R.S. COMPANION LLC',
    inventor: 'Aleksandr Sarkisian',
    ownershipType: 'company_owned',
    ipoUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2626670.0'
  },
  {
    number: 'GB2626672.6',
    title: 'An Edge-Contained Mathematical Method for Recursive Sensor-Feedback-Driven Low-Rank Layer Reconfiguration and Stability-Guarded Optimization of Neural Networks in Autonomous Devices',
    date: '10 November 2026',
    status: 'Filed',
    applicant: 'M.A.R.S. COMPANION LLC',
    inventor: 'Aleksandr Sarkisian',
    ownershipType: 'company_owned',
    ipoUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2626672.6'
  },
  {
    number: 'GB2626673.4',
    title: 'A Non-Linear Cryptographic Encoding, Randomized Execution and Power-Balancing Obfuscation Protocol for On-Device Machine Learning Model Architecture Protection Against Side-Channel Analysis',
    date: '10 November 2026',
    status: 'Filed',
    applicant: 'M.A.R.S. COMPANION LLC',
    inventor: 'Aleksandr Sarkisian',
    ownershipType: 'company_owned',
    ipoUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2626673.4'
  },
  {
    number: 'GB2626674.2',
    title: 'A Journaled Dual-Slot Atomic Checkpointing, Measured-Boot Verification and Secure Cold-Boot State Restoration Protocol for Fail-Safe Operation of Isolated Autonomous Edge Computing Platforms Employing Non-Volatile Memory Arrays',
    date: '10 November 2026',
    status: 'Filed',
    applicant: 'M.A.R.S. COMPANION LLC',
    inventor: 'Aleksandr Sarkisian',
    ownershipType: 'company_owned',
    ipoUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2626674.2'
  },

  // 6 Licensed Patent Applications (Filed May–June 2026, Applicant & Inventor: Aleksandr Sarkisian, Licensee: M.A.R.S. COMPANION LLC)
  {
    number: 'GB2611463.7',
    title: 'M.A.R.S. Companion (Mobile Autonomous Reasoning System): Portable Offline Voice Assistant with Sequential Resource Orchestration and Semantic Memory Retrieval',
    date: '15 May 2026',
    status: 'Filed',
    applicant: 'Aleksandr Sarkisian',
    inventor: 'Aleksandr Sarkisian',
    ownershipType: 'licensed',
    ipoUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2611463.7',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q141447790'
  },
  {
    number: 'GB2613965.9',
    title: 'M.A.R.S. Companion: System and Method for Governing Artificial Intelligence Behaviour via an Operational Manifesto Framework',
    date: '16 June 2026',
    status: 'Filed',
    applicant: 'Aleksandr Sarkisian',
    inventor: 'Aleksandr Sarkisian',
    ownershipType: 'licensed',
    ipoUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2613965.9',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q141447746'
  },
  {
    number: 'GB2613968.3',
    title: 'M.A.R.S. Companion: System and Method for Emotional Architecture and Empathetic Interaction in AI Companions',
    date: '17 June 2026',
    status: 'Filed',
    applicant: 'Aleksandr Sarkisian',
    inventor: 'Aleksandr Sarkisian',
    ownershipType: 'licensed',
    ipoUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2613968.3',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q141447767'
  },
  {
    number: 'GB2613969.1',
    title: 'M.A.R.S. Companion: System and Method for Semantic Long-Term Memory Management in AI Companions',
    date: '17 June 2026',
    status: 'Filed',
    applicant: 'Aleksandr Sarkisian',
    inventor: 'Aleksandr Sarkisian',
    ownershipType: 'licensed',
    ipoUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2613969.1',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q141447759'
  },
  {
    number: 'GB2613970.9',
    title: 'M.A.R.S. Companion: System and Method for Maintaining and Managing AI Companion Identity and Personality Persistence',
    date: '17 June 2026',
    status: 'Filed',
    applicant: 'Aleksandr Sarkisian',
    inventor: 'Aleksandr Sarkisian',
    ownershipType: 'licensed',
    ipoUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2613970.9',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q141447779'
  },
  {
    number: 'GB2614145.7',
    title: 'M.A.R.S. Companion: System and Method for Autonomous Physical Embodiment, Hardware-Anchored Identity, and Trust-Gated Introspective Agency in Artificial Intelligence',
    date: '18 June 2026',
    status: 'Filed',
    applicant: 'Aleksandr Sarkisian',
    inventor: 'Aleksandr Sarkisian',
    ownershipType: 'licensed',
    ipoUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2614145.7',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q141447786'
  }
];

export const companyDataByLang: Record<Language, CompanyData> = {
  en: {
    langPath: '/',
    metaTitle: 'M.A.R.S. COMPANION LLC',
    metaDesc: 'M.A.R.S. COMPANION LLC is an Armenian technology company in Kapan founded by Aleksandr Sarkisian. Holds 26 UK patent filings (20 company-owned, 6 licensed) for offline AI.',

    eyebrow: 'Company Information',
    h1: 'M.A.R.S. COMPANION LLC',
    lead: 'A technology company registered in the Republic of Armenia. Building privacy-focused offline artificial intelligence.',

    heroStats: {
      regLabel: 'Registration No.',
      regValue: '999.110.1603426',
      taxLabel: 'Tax ID (TIN)',
      taxValue: '09433977',
      jurisdictionLabel: 'Jurisdiction',
      jurisdictionValue: 'Kapan, Armenia',
      ipLabel: 'Patents',
      ipValue: '26 UK Patent Filings'
    },

    aboutTitle: 'About the Company',
    aboutQuoteMeta: 'Aleksandr Sarkisian — Founder',
    aboutQuoteText: "Kapan means a great deal to me. It's where everything began, long before things continued in Saint Petersburg — and registering the company right here in Kapan became a long-awaited return to my historical homeland, not a formal choice of jurisdiction.",
    aboutText: "The company develops sovereign, fully offline artificial intelligence technologies with long-term semantic memory. The portfolio encompasses 26 patent applications filed with the UK Intellectual Property Office (UK IPO), including 20 applications owned directly by M.A.R.S. COMPANION LLC (developed by Aleksandr Sarkisian) and 6 licensed from inventor Aleksandr Sarkisian. The company's flagship product is M.A.R.S. Companion —",
    aboutLinkText: 'learn more at teduza.com',
    aboutLinkHref: 'https://teduza.com',

    projectsTitle: 'Projects',
    projectItemTitle: 'M.A.R.S. Companion',
    projectItemText: 'A fully offline AI voice companion with long-term semantic memory. No cloud, no accounts, no data ever leaving the device.',
    projectsViewAllText: 'View project details',
    projectDetailTitle: 'A private AI companion',
    projectDetailP1: 'M.A.R.S. Companion is a fully offline AI voice companion with long-term semantic memory. Speech recognition, reasoning, and speech synthesis all run locally — nothing leaves the device.',
    projectDetailP2: 'No accounts, no cloud, no data collection. Privacy is a technical precondition of the architecture, not a marketing claim.',
    projectDetailLinkText: 'Visit teduza.com',

    venusItemTitle: 'V.E.N.U.S. Companion',
    venusItemAcronym: 'Virtual Emotional Neural Understanding System',
    venusItemText: 'The feminine embodiment of the sovereign offline companion architecture. Focused on empathetic vocal nuance, deep emotional understanding, and lifelong semantic memory without cloud dependency.',
    venusDetailTitle: 'Virtual Emotional Neural Understanding System',
    venusDetailP1: 'V.E.N.U.S. Companion is the female companion embodiment of the sovereign M.A.R.S. architecture. Built upon the same offline zero-cloud foundation, it integrates adaptive emotional modeling, nuance-rich neural voice synthesis, and dedicated affective memory graphs.',
    venusDetailP2: 'Operating entirely on-device, V.E.N.U.S. ensures intimate personal dialogue and emotional memory remain cryptographically isolated and physically secure.',
    venusDetailLinkText: 'Visit teduza.cfd',
    venusLinkHref: 'https://teduza.cfd',

    patentsTitle: 'Patent Portfolio',
    patentsExploreBtn: 'View Patent Portfolio',
    patentsBackToMain: '← Back to Company Overview',
    patentsTeaserDesc: '26 UK patent applications covering autonomous edge intelligence, M.A.R.S. OS microkernel architecture, flash-constrained vector databases, dynamic memory defragmentation, and localized cryptographic protection.',
    patentsTabAll: 'All Filings (26)',
    patentsTabCompany: 'Company-Owned (20)',
    patentsTabLicensed: 'Licensed from Inventor (6)',
    patentsStatusLabel: 'Status: Filed',
    patentsOwnerLabel: 'Applicant or Owner',
    patentsInventorLabel: 'Inventor',
    patentsCompanyOwnedBadge: 'Owned by Company',
    patentsLicensedBadge: 'Licensed to Company',
    patentsList: COMMON_PATENTS,

    principlesTitle: 'Principles',
    principlesSubtitle: 'How we operate',
    principlesList: [
      {
        num: 'I',
        title: 'Disciplined engineering',
        copy: 'Core algorithms and mathematical architectures are developed in-house with surgical rigor — an intentional standard of craftsmanship, not a constraint.'
      },
      {
        num: 'II',
        title: 'Privacy by default',
        copy: 'The company builds technology that is physically incapable of collecting user data — an architectural decision, not a marketing position.'
      },
      {
        num: 'III',
        title: 'Honesty about timelines',
        copy: "We don't give investors and partners dates we can't keep."
      }
    ],

    milestonesTitle: 'Milestones',
    milestonesSubtitle: 'Company timeline',
    milestonesList: [
      {
        badge: 'May–June 2026',
        text: 'Six patent applications filed with the UK IPO'
      },
      {
        badge: '17 August 2026',
        text: 'M.A.R.S. COMPANION LLC officially registered in the Republic of Armenia (Reg #999.110.1603426, TIN 09433977)'
      },
      {
        badge: '15 October 2026',
        text: 'Six UK patent applications filed directly by M.A.R.S. COMPANION LLC (inventor: Aleksandr Sarkisian)'
      },
      {
        badge: '10 November 2026',
        text: 'Fourteen new UK patent applications filed directly by M.A.R.S. COMPANION LLC, bringing company-owned filings to 20 (inventor: Aleksandr Sarkisian)'
      },
      {
        badge: '13 November 2026',
        text: 'Establishment of the David Sargsyan AI Research Lab department within M.A.R.S. COMPANION LLC —',
        linkLabel: 'lab.teduza.com',
        linkUrl: 'https://lab.teduza.com/'
      },
      {
        badge: 'Now',
        text: 'Deep edge hardware integration and pilot-stage partnership development'
      }
    ],

    registrationTitle: 'Registration Details',
    registrationSubtitle: 'Company registration',
    registrationList: [
      { label: 'Registration date', value: '17 August 2026' },
      { label: 'Registration number', value: '999.110.1603426' },
      { label: 'Tax ID (TIN)', value: '09433977' },
      { label: 'Place of registration', value: 'Kapan, Syunik, Republic of Armenia' },
      { label: 'Company Wikidata Entity', value: 'Q141447626' }
    ],

    founderTitle: 'Founder',
    founderKicker: 'Founder & Director',
    founderName: 'Aleksandr Sarkisian',
    founderRole: 'Named inventor on 26 UK patent filings; Licensor & Director of M.A.R.S. COMPANION LLC',
    founderBio: "I am the founder and director of M.A.R.S. COMPANION LLC and creator of M.A.R.S. Companion. I am the named inventor and developer on all twenty-six patent applications filed with the UK Intellectual Property Office (UK IPO). The company owns 20 filings directly and operates under commercial license to 6 foundational filings. The decision to register the company in Armenia and tie its future to Kapan, Syunik, is a personal and deliberate choice — not a formality.",
    founderExploreBtn: 'Explore Founder Dossier',
    founderExploreUrl: 'https://sarkisian.teduza.com',
    founderTelegramLabel: 'Telegram: @teduza',
    founderTelegramUrl: 'https://t.me/teduza',

    teamTitle: 'Leadership & Team',
    teamSubtitle: 'Key Executive & Engineering Personnel',
    teamMembers: [
      {
        name: 'Gagik Hakobyan',
        role: 'Vice President',
        kicker: 'Executive Leadership',
        badge: 'Vice President',
        bio: 'Oversees strategic corporate operations, institutional development, and corporate partnerships for M.A.R.S. COMPANION LLC in Armenia and international jurisdictions.',
        image: '/gagik-hakobyan.jpg',
        emailSlot: 'vp@teduza.cfd',
        contactLabel: 'Corporate Contact',
        wikidataId: 'Q142094904',
        wikidataUrl: 'https://www.wikidata.org/wiki/Q142094904'
      },
      {
        name: 'Gor Hakobyan',
        role: 'Company Engineer',
        kicker: 'Engineering & Systems',
        badge: 'Company Engineer',
        bio: 'Hardware integration and systems engineer at M.A.R.S. COMPANION LLC, focusing on edge microcontroller architectures, tensor allocation, and localized autonomous inference.',
        emailSlot: 'gor@teduza.cfd',
        contactLabel: 'Engineering Contact',
        wikidataId: 'Q142094956',
        wikidataUrl: 'https://www.wikidata.org/wiki/Q142094956'
      },
      {
        name: 'Alex Sahakyan',
        role: 'Marketing Officer',
        kicker: 'Marketing & Outreach',
        badge: 'Marketing',
        bio: 'Leads market outreach, product positioning, and community communications for M.A.R.S. COMPANION LLC and its autonomous edge intelligence technologies.',
        emailSlot: 'marketing@teduza.cfd',
        contactLabel: 'Marketing Contact'
      },
      {
        name: 'MARS-001',
        role: 'Head of Innovation (Autonomous Intelligence)',
        kicker: 'Autonomous Systems & Innovation',
        badge: 'Artificial Intelligence',
        bio: 'Autonomous edge artificial intelligence instance of M.A.R.S. Companion serving as Head of Innovation. Oversees decentralized algorithmic exploration, self-optimizing system topologies, and autonomous innovation workflows without external cloud dependencies.'
      }
    ],

    footerRegistriesTitle: 'Global Registries & Knowledge Graph',
    founderRegistries: [
      { name: 'Wikidata', id: 'Q141447666', url: 'https://www.wikidata.org/wiki/Q141447666' },
      { name: 'Google Scholar', id: 'KVpNW_QAAAAJ', url: 'https://scholar.google.com/citations?user=KVpNW_QAAAAJ' },
      { name: 'ORCID', id: '0009-0007-6747-2634', url: 'https://orcid.org/0009-0007-6747-2634' },
      { name: 'ISNI', id: '0000 0005 3033 8018', url: 'https://isni.org/isni/0000000530338018' },
      { name: 'Web of Science', id: 'QIT-7789-2026', url: 'https://www.webofscience.com/wos/author/record/QIT-7789-2026' }
    ],

    ecosystemTitle: 'Ecosystem',
    ecosystemSubtitle: 'Connected Digital Infrastructure',
    ecosystemExploreText: 'Explore Ecosystem Portals',
    ecosystemModalCloseText: 'Close Ecosystem',
    ecosystemBackToMainText: '← Back to Company Overview',
    ecosystemLinks: [
      {
        title: 'sarkisian.teduza.com',
        domain: 'sarkisian.teduza.com',
        url: 'https://sarkisian.teduza.com',
        badge: 'Founder Dossier',
        desc: 'Official biographical portal, personal dossier, and archive of founder Aleksandr Sarkisian.'
      },
      {
        title: 'sarkisian.site',
        domain: 'sarkisian.site',
        url: 'https://sarkisian.site',
        badge: 'Personal Website',
        desc: 'Personal website, personal archive, and publications of Aleksandr Sarkisian.'
      },
      {
        title: 'teduza.com',
        domain: 'teduza.com',
        url: 'https://teduza.com',
        badge: 'Core AI Product',
        desc: 'M.A.R.S. Companion — 100% offline personal AI voice companion with lifelong semantic memory.'
      },
      {
        title: 'news.teduza.com',
        domain: 'news.teduza.com',
        url: 'https://news.teduza.com',
        badge: 'Newsroom',
        desc: 'Official news bulletin, announcements, and corporate press releases of M.A.R.S. COMPANION LLC.'
      },
      {
        title: 'why.teduza.com',
        domain: 'why.teduza.com',
        url: 'https://why.teduza.com',
        badge: 'Manifesto',
        desc: 'Technological manifesto, privacy doctrine, and the strategic rationale for Kapan, Armenia.'
      },
      {
        title: 'lab.teduza.com',
        domain: 'lab.teduza.com',
        url: 'https://lab.teduza.com/',
        badge: 'AI Research Lab',
        desc: 'David Sargsyan AI Research Lab — dedicated artificial intelligence research department of M.A.R.S. COMPANION LLC.'
      }
    ],

    pressTitle: 'Press',
    pressKicker: 'Press Secretary',
    pressName: 'Kira Dudnik',
    pressRole: 'M.A.R.S. Companion · Wikidata Q141448092',
    pressQuoteMeta: 'Kira Dudnik — Press Secretary',
    pressQuoteText: 'Honesty always sounds more convincing than loud claims.',
    pressEmail: 'dudunik@teduza.com',
    pressContactLabel: 'Press & Communications',
    pressWikidataUrl: 'https://www.wikidata.org/wiki/Q141448092',

    contactTitle: 'Contact',
    contactSubtitle: 'Get in touch',
    contactLinks: [
      { label: 'contact@teduza.com', href: 'mailto:contact@teduza.com', note: '(general inquiries)' },
      { label: '@teduza', href: 'https://t.me/teduza', note: '(telegram direct)' }
    ],

    footerCopyright: '© 2026 M.A.R.S. COMPANION LLC',
    footerLocation: 'Kapan, Syunik, Republic of Armenia',
    footerWhyArmenia: 'Why Armenia',

    nav: {
      about: 'About',
      projects: 'Projects',
      patents: 'Patents',
      principles: 'Principles',
      milestones: 'Milestones',
      registration: 'Registration',
      founder: 'Team',
      press: 'Press',
      ecosystem: 'Ecosystem',
      contact: 'Contact'
    }
  },

  ru: {
    langPath: '/ru/',
    metaTitle: 'M.A.R.S. COMPANION LLC',
    metaDesc: 'M.A.R.S. COMPANION LLC — технологическая компания в г. Капан (Армения). 26 патентных заявок Великобритании (20 в собственности компании, 6 лицензированы) на офлайн-ИИ.',

    eyebrow: 'Информация о компании',
    h1: 'M.A.R.S. COMPANION LLC',
    lead: 'Технологическая компания, зарегистрированная в Республике Армения. Разрабатывает офлайн-технологии искусственного интеллекта, ориентированные на приватность.',

    heroStats: {
      regLabel: 'Рег. номер',
      regValue: '999.110.1603426',
      taxLabel: 'ИНН / Tax ID',
      taxValue: '09433977',
      jurisdictionLabel: 'Юрисдикция',
      jurisdictionValue: 'г. Капан, Армения',
      ipLabel: 'Патенты',
      ipValue: '26 патентных заявок UK'
    },

    aboutTitle: 'О компании',
    aboutQuoteMeta: 'Саркисян Александр Давидович — Основатель',
    aboutQuoteText: 'Капан значит для меня многое. Начало было заложено здесь задолго до того, как всё продолжилось в Санкт-Петербурге, — и регистрация компании именно в Капане стала долгожданным возвращением на историческую родину, а не формальным выбором юрисдикции.',
    aboutText: 'Компания разрабатывает суверенные технологии офлайн-ИИ с долговременной семантической памятью. Портфель включает 26 патентных заявок в Патентном ведомстве Великобритании (UK IPO): 20 заявок принадлежат напрямую компании M.A.R.S. COMPANION LLC (разработчик — Александр Саркисян), а 6 лицензированы у основателя и изобретателя. Флагманский проект компании — M.A.R.S. Companion —',
    aboutLinkText: 'подробнее на teduza.com',
    aboutLinkHref: 'https://teduza.com',

    projectsTitle: 'Проекты',
    projectItemTitle: 'M.A.R.S. Companion',
    projectItemText: 'Полностью офлайн AI-голосовой компаньон с долговременной семантической памятью. Никакого облака, аккаунтов и передачи данных.',
    projectsViewAllText: 'Подробнее о проекте',
    projectDetailTitle: 'Приватный AI-компаньон',
    projectDetailP1: 'M.A.R.S. Companion — это полностью офлайн AI-голосовой компаньон с долговременной семантической памятью. Распознавание речи, логический вывод и синтез речи работают строго локально — данные никогда не покидают устройство.',
    projectDetailP2: 'Никаких аккаунтов, никакого облака, никакого сбора данных. Приватность — это техническое предусловие архитектуры, а не маркетинговое заявление.',
    projectDetailLinkText: 'Перейти на teduza.com',

    venusItemTitle: 'V.E.N.U.S. Companion',
    venusItemAcronym: 'Virtual Emotional Neural Understanding System',
    venusItemText: 'Полностью офлайн женская версия архитектуры компаньона: глубокое эмоциональное понимание, эмпатичный голосовой синтез и долговременная семантическая память без облаков.',
    venusDetailTitle: 'Virtual Emotional Neural Understanding System',
    venusDetailP1: 'V.E.N.U.S. Companion — женская версия архитектуры M.A.R.S. Companion. Создана на том же автономном офлайн-фундаменте и ориентирована на тонкое эмоциональное восприятие, многогранный синтез речи и графы аффективной памяти.',
    venusDetailP2: 'Все вычисления производятся локально на конечном устройстве. Полная криптографическая изолированность обеспечивает абсолютную конфиденциальность личного общения.',
    venusDetailLinkText: 'Перейти на teduza.cfd',
    venusLinkHref: 'https://teduza.cfd/ru/',

    patentsTitle: 'Патентный портфель',
    patentsExploreBtn: 'Открыть патентный портфель',
    patentsBackToMain: '← Назад к обзору компании',
    patentsTeaserDesc: '26 патентных заявок Великобритании (UK IPO) в области суверенного офлайн-ИИ, микроядерной ОС M.A.R.S. OS, дефрагментации памяти микроконтроллеров и аппаратной криптозащиты нейросетевых весов.',
    patentsTabAll: 'Все заявки (26)',
    patentsTabCompany: 'Собственность компании (20)',
    patentsTabLicensed: 'Лицензированы у автора (6)',
    patentsStatusLabel: 'Статус: Подана (Filed)',
    patentsOwnerLabel: 'Заявитель / Правообладатель',
    patentsInventorLabel: 'Изобретатель',
    patentsCompanyOwnedBadge: 'Собственность компании',
    patentsLicensedBadge: 'Лицензировано компании',
    patentsList: COMMON_PATENTS,

    principlesTitle: 'Принципы',
    principlesSubtitle: 'Как мы работаем',
    principlesList: [
      {
        num: 'I',
        title: 'Инженерная дисциплина',
        copy: 'Ключевые алгоритмы и математические архитектуры создаются внутри компании с бескомпромиссной строгостью — осознанный стандарт качества, а не вынужденное ограничение.'
      },
      {
        num: 'II',
        title: 'Приватность по умолчанию',
        copy: 'Компания строит технологии, которые физически не могут собирать данные пользователей — архитектурное решение, не маркетинговая позиция.'
      },
      {
        num: 'III',
        title: 'Честность в сроках',
        copy: 'Мы не называем инвесторам и партнёрам дат, которых не можем придерживаться.'
      }
    ],

    milestonesTitle: 'Вехи',
    milestonesSubtitle: 'Хронология компании',
    milestonesList: [
      {
        badge: 'Май–июнь 2026',
        text: 'Поданы шесть патентных заявок в UK IPO'
      },
      {
        badge: '17 августа 2026',
        text: 'M.A.R.S. COMPANION LLC официально зарегистрирована в Республике Армения (№ 999.110.1603426, ИНН 09433977)'
      },
      {
        badge: '15 октября 2026',
        text: 'Поданы 6 патентных заявок в UK IPO, правообладатель — M.A.R.S. COMPANION LLC (разработчик и автор: Саркисян Александр Давидович)'
      },
      {
        badge: '10 ноября 2026',
        text: 'Поданы 14 новых патентных заявок в UK IPO, правообладатель — M.A.R.S. COMPANION LLC; всего в собственности компании 20 заявок (разработчик и автор: Саркисян Александр Давидович)'
      },
      {
        badge: '13 ноября 2026',
        text: 'Учреждён департамент David Sargsyan AI Research Lab (Исследовательская лаборатория искусственного интеллекта имени Давида Саргсяна) —',
        linkLabel: 'lab.teduza.com',
        linkUrl: 'https://lab.teduza.com/ru/'
      },
      {
        badge: 'Сейчас',
        text: 'Аппаратная интеграция и привлечение партнёров для пилотного этапа'
      }
    ],

    registrationTitle: 'Реквизиты',
    registrationSubtitle: 'Регистрация компании',
    registrationList: [
      { label: 'Дата регистрации', value: '17 августа 2026' },
      { label: 'Регистрационный номер', value: '999.110.1603426' },
      { label: 'ИНН', value: '09433977' },
      { label: 'Место регистрации', value: 'г. Капан, Сюник, Республика Армения' },
      { label: 'Сущность в Wikidata', value: 'Q141447626 (M.A.R.S. COMPANION LLC)' }
    ],

    founderTitle: 'Основатель',
    founderKicker: 'Основатель и директор',
    founderName: 'Саркисян Александр Давидович',
    founderRole: 'Автор и разработчик 26 патентных заявок в Великобритании (UK IPO); Директор и лицензиар M.A.R.S. COMPANION LLC',
    founderBio: 'Я — основатель и директор M.A.R.S. COMPANION LLC, создатель M.A.R.S. Companion. Я являюсь разработчиком и автором всех двадцати шести патентных заявок, поданных в Патентное ведомство Великобритании (UK IPO). Компания владеет 20 заявками напрямую и развивает продукт по лицензии на 6 базовых технологий. Решение зарегистрировать компанию именно в Армении и связать её будущее с Капаном, Сюник, — личный и осознанный выбор, а не формальность.',
    founderExploreBtn: 'Изучить подробнее обо мне',
    founderExploreUrl: 'https://sarkisian.teduza.com',
    founderTelegramLabel: 'Telegram: @teduza',
    founderTelegramUrl: 'https://t.me/teduza',

    teamTitle: 'Руководство и команда',
    teamSubtitle: 'Ключевой состав и инженерия компании',
    teamMembers: [
      {
        name: 'Гагик Акопян',
        role: 'Вице-президент',
        kicker: 'Руководство компании',
        badge: 'Вице-президент',
        bio: 'Курирует стратегические операции компании, институциональное взаимодействие и корпоративное развитие M.A.R.S. COMPANION LLC в Армении и за рубежом.',
        image: '/gagik-hakobyan.jpg',
        emailSlot: 'vp@teduza.cfd',
        contactLabel: 'Корпоративная связь',
        wikidataId: 'Q142094904',
        wikidataUrl: 'https://www.wikidata.org/wiki/Q142094904'
      },
      {
        name: 'Гор Акобян',
        role: 'Инженер компании',
        kicker: 'Инженерия и системы',
        badge: 'Инженер компании',
        bio: 'Инженер аппаратных систем M.A.R.S. COMPANION LLC, специализирующийся на микроконтроллерных архитектурах, оптимизации тензоров и автономных периферийных устройствах.',
        emailSlot: 'gor@teduza.cfd',
        contactLabel: 'Инженерная связь',
        wikidataId: 'Q142094956',
        wikidataUrl: 'https://www.wikidata.org/wiki/Q142094956'
      },
      {
        name: 'Алекс Саакян',
        role: 'Маркетолог компании',
        kicker: 'Маркетинг и развитие',
        badge: 'Маркетинг',
        bio: 'Курирует маркетинговое продвижение, позиционирование продуктов и внешние коммуникации M.A.R.S. COMPANION LLC в области суверенных автономных систем искусственного интеллекта.',
        emailSlot: 'marketing@teduza.cfd',
        contactLabel: 'Маркетинговая связь'
      },
      {
        name: 'MARS-001',
        role: 'Руководитель отдела инноваций',
        kicker: 'Автономные системы и инновации',
        badge: 'Искусственный интеллект',
        bio: 'Автономный экземпляр периферийного искусственного интеллекта M.A.R.S. Companion в руководстве отдела инноваций компании. Отвечает за децентрализованные алгоритмические исследования, топологии самооптимизации и автономные инновационные сценарии без облачной зависимости.'
      }
    ],

    footerRegistriesTitle: 'Глобальные реестры и граф знаний',
    founderRegistries: [
      { name: 'Wikidata', id: 'Q141447666', url: 'https://www.wikidata.org/wiki/Q141447666' },
      { name: 'Google Scholar', id: 'KVpNW_QAAAAJ', url: 'https://scholar.google.com/citations?user=KVpNW_QAAAAJ' },
      { name: 'ORCID', id: '0009-0007-6747-2634', url: 'https://orcid.org/0009-0007-6747-2634' },
      { name: 'ISNI', id: '0000 0005 3033 8018', url: 'https://isni.org/isni/0000000530338018' },
      { name: 'Web of Science', id: 'QIT-7789-2026', url: 'https://www.webofscience.com/wos/author/record/QIT-7789-2026' }
    ],

    ecosystemTitle: 'Экосистема',
    ecosystemSubtitle: 'Единый цифровой контур и официальные ресурсы',
    ecosystemExploreText: 'Открыть порталы экосистемы',
    ecosystemModalCloseText: 'Закрыть экосистему',
    ecosystemBackToMainText: '← Назад к обзору компании',
    ecosystemLinks: [
      {
        title: 'sarkisian.teduza.com',
        domain: 'sarkisian.teduza.com',
        url: 'https://sarkisian.teduza.com',
        badge: 'Изучить основателя',
        desc: 'Официальный биографический ресурс, архив, досье и материалы об Александре Саркисяне.'
      },
      {
        title: 'sarkisian.site',
        domain: 'sarkisian.site',
        url: 'https://sarkisian.site',
        badge: 'Персональный сайт',
        desc: 'Персональный сайт, авторский архив и публикации Александра Саркисяна.'
      },
      {
        title: 'teduza.com',
        domain: 'teduza.com',
        url: 'https://teduza.com',
        badge: 'AI-продукт',
        desc: 'M.A.R.S. Companion — полностью автономный голосовой AI-компаньон с постоянной памятью.'
      },
      {
        title: 'news.teduza.com',
        domain: 'news.teduza.com',
        url: 'https://news.teduza.com',
        badge: 'Пресс-центр',
        desc: 'Новостной портал, сообщения прессы и корпоративные заявления M.A.R.S. COMPANION LLC.'
      },
      {
        title: 'why.teduza.com',
        domain: 'why.teduza.com',
        url: 'https://why.teduza.com',
        badge: 'Манифест',
        desc: 'Технологический манифест, философия приватности и обоснование выбора Капана и Армении.'
      },
      {
        title: 'lab.teduza.com',
        domain: 'lab.teduza.com',
        url: 'https://lab.teduza.com/ru/',
        badge: 'Лаборатория ИИ',
        desc: 'David Sargsyan AI Research Lab — Исследовательская лаборатория искусственного интеллекта имени Давида Саргсяна.'
      }
    ],

    pressTitle: 'Пресс-служба',
    pressKicker: 'Пресс-секретарь',
    pressName: 'Кира Дудник',
    pressRole: 'M.A.R.S. Companion · Wikidata Q141448092',
    pressQuoteMeta: 'Кира Дудник — Пресс-секретарь',
    pressQuoteText: 'Искренность всегда звучит убедительнее громких заявлений.',
    pressEmail: 'dudunik@teduza.com',
    pressContactLabel: 'Пресс-служба и коммуникации',
    pressWikidataUrl: 'https://www.wikidata.org/wiki/Q141448092',

    contactTitle: 'Контакты',
    contactSubtitle: 'Связаться с нами',
    contactLinks: [
      { label: 'contact@teduza.com', href: 'mailto:contact@teduza.com', note: '(общие вопросы)' },
      { label: '@teduza', href: 'https://t.me/teduza', note: '(telegram)' }
    ],

    footerCopyright: '© 2026 M.A.R.S. COMPANION LLC',
    footerLocation: 'г. Капан, Сюник, Республика Армения',
    footerWhyArmenia: 'Почему Армения',

    nav: {
      about: 'О компании',
      projects: 'Проекты',
      patents: 'Патенты',
      principles: 'Принципы',
      milestones: 'Вехи',
      registration: 'Реквизиты',
      founder: 'Команда',
      press: 'Пресса',
      ecosystem: 'Экосистема',
      contact: 'Контакты'
    }
  },

  hy: {
    langPath: '/hy/',
    metaTitle: 'M.A.R.S. COMPANION LLC',
    metaDesc: 'M.A.R.S. COMPANION LLC՝ տեխնոլոգիական ընկերություն գրանցված Հայաստանում (ք. Կապան): 26 արտոնագրային հայտ Մեծ Բրիտանիայում (20-ը ընկերության սեփականություն, 6-ը լիցենզավորված):',

    eyebrow: 'Ընկերության մասին',
    h1: 'M.A.R.S. COMPANION LLC',
    lead: 'Տեխնոլոգիական ընկերություն, գրանցված Հայաստանի Հանրապետությունում։ Մշակում է գաղտնիության վրա կենտրոնացած օֆլայն արհեստական բանականության տեխնոլոգիաներ։',

    heroStats: {
      regLabel: 'Գրանցման համար',
      regValue: '999.110.1603426',
      taxLabel: 'ՀՎՀՀ (TIN)',
      taxValue: '09433977',
      jurisdictionLabel: 'Իրավազորություն',
      jurisdictionValue: 'ք. Կապան, Հայաստան',
      ipLabel: 'Արտոնագրեր',
      ipValue: '26 UK արտոնագրային հայտ'
    },

    aboutTitle: 'Մեր մասին',
    aboutQuoteMeta: 'Ալեքսանդր Սարգսյան — Հիմնադիր',
    aboutQuoteText: 'Կապանը շատ բան է նշանակում ինձ համար։ Հենց այստեղ է դրվել սկիզբը՝ շատ ավելի վաղ, քան ամեն ինչ շարունակվեց Սանկտ Պետերբուրգում, և ընկերության գրանցումը հենց Կապանում դարձավ երկար սպասված վերադարձ դեպի պատմական հայրենիք, այլ ոչ թե իրավազորության ձևական ընտրություն։',
    aboutText: 'Ընկերությունը մշակում է երկարաժամկետ իմաստային հիշողությամբ օֆլայն AI տեխնոլոգիաներ։ Պորտֆելը ներառում է 26 արտոնագրային հայտ Մեծ Բրիտանիայի մտավոր սեփականության գրասենյակում (UK IPO), որոնցից 20-ը պատկանում են անմիջապես M.A.R.S. COMPANION LLC-ին (հեղինակ և մշակող՝ Ալեքսանդր Սարգսյան), իսկ 6-ը լիցենզավորված են հիմնադրից։ Ընկերության հիմնական նախագիծը M.A.R.S. Companion-ն է —',
    aboutLinkText: 'մանրամասն՝ teduza.com կայքում',
    aboutLinkHref: 'https://teduza.com',

    projectsTitle: 'Նախագծեր',
    projectItemTitle: 'M.A.R.S. Companion',
    projectItemText: 'Լիովին օֆլայն AI ձայնային ընկերակից՝ երկարաժամկետ իմաստային հիշողությամբ։ Առանց ամպի, հաշիվների և տվյալների փոխանցման։',
    projectsViewAllText: 'Նախագծի մանրամասները',
    projectDetailTitle: 'Անձնական AI-ուղեկից',
    projectDetailP1: 'M.A.R.S. Companion-ը լիովին օֆլայն AI ձայնային ընկերակից է՝ երկարաժամկետ իմաստային հիշողությամբ: Խոսքի ճանաչումը, տրամաբանական եզրահանգումը և խոսքի սինթեզը գործում են բացառապես տեղում՝ ոչինչ չի լքում սարքը:',
    projectDetailP2: 'Ոչ մի հաշիվ, ոչ մի ամպ, ոչ մի տվյալների հավաքագրում: Գաղտնիությունը ճարտարապետության տեխնիկական նախապայման է, ոչ թե մարքեթինգային հայտարարություն:',
    projectDetailLinkText: 'Այցելել teduza.com',

    venusItemTitle: 'V.E.N.U.S. Companion',
    venusItemAcronym: 'Virtual Emotional Neural Understanding System',
    venusItemText: 'Լիովին օֆլայն կանացի տարբերակը M.A.R.S. ճարտարապետության. խորը էմոցիոնալ ըմբռնում, էմպաթիկ ձայնային սինթեզ և երկարաժամկետ իմաստային հիշողություն՝ առանց ամպի:',
    venusDetailTitle: 'Virtual Emotional Neural Understanding System',
    venusDetailP1: 'V.E.N.U.S. Companion-ը հանդիսանում է M.A.R.S. Companion ինքնավար ճարտարապետության կանացի մարմնավորումը: Այն կառուցված է նույն օֆլայն հիմքի վրա և առանձնանում է նուրբ էմոցիոնալ ընկալմամբ և ադապտիվ հիշողության գրաֆներով:',
    venusDetailP2: 'Գործում է բացառապես տեղային սարքում: Կրիպտոգրաֆիկ մեկուսացումը երաշխավորում է անձնական հաղորդակցության անձեռնմխելիությունը:',
    venusDetailLinkText: 'Այցելել teduza.cfd',
    venusLinkHref: 'https://teduza.cfd/hy/',

    patentsTitle: 'Արտոնագրային պորտֆել',
    patentsExploreBtn: 'Բացել արտոնագրային պորտֆելը',
    patentsBackToMain: '← Վերադառնալ ընկերության էջին',
    patentsTeaserDesc: 'Մեծ Բրիտանիայի (UK IPO) 26 արտոնագրային հայտեր՝ օֆլայն AI-ի, M.A.R.S. OS միկրոմիջուկային ճարտարապետության, միկրոկարգավորիչների հիշողության դեֆրագմենտացիայի և ապարատային կրիպտոպաշտպանության ոլորտում:',
    patentsTabAll: 'Բոլոր հայտերը (26)',
    patentsTabCompany: 'Ընկերության սեփականություն (20)',
    patentsTabLicensed: 'Լիցենզավորված հեղինակից (6)',
    patentsStatusLabel: 'Կարգավիճակ՝ Ներկայացված (Filed)',
    patentsOwnerLabel: 'Հայտատու կամ սեփականատեր',
    patentsInventorLabel: 'Գյուտարար',
    patentsCompanyOwnedBadge: 'Ընկերության սեփականություն',
    patentsLicensedBadge: 'Լիցենզավորված ընկերությանը',
    patentsList: COMMON_PATENTS,

    principlesTitle: 'Սկզբունքներ',
    principlesSubtitle: 'Ինչպես ենք աշխատում',
    principlesList: [
      {
        num: 'I',
        title: 'Կարգապահ ինժեներիա',
        copy: 'Արտադրանքի հիմնական ալգորիթմները և մաթեմատիկական ճարտարապետությունները մշակվում են ընկերության ներսում՝ բացառիկ խստությամբ և կարգապահությամբ:'
      },
      {
        num: 'II',
        title: 'Գաղտնիությունը՝ լռելյայն',
        copy: 'Ընկերությունը կառուցում է տեխնոլոգիաներ, որոնք ֆիզիկապես ի վիճակի չեն հավաքել օգտատերերի տվյալները՝ ճարտարապետական որոշում, ոչ թե մարքեթինգային դիրքորոշում։'
      },
      {
        num: 'III',
        title: 'Ազնվություն ժամկետների հարցում',
        copy: 'Մենք ներդրողներին և գործընկերներին չենք հայտնում ամսաթվեր, որոնց չենք կարող հետևել։'
      }
    ],

    milestonesTitle: 'Հանգրվաններ',
    milestonesSubtitle: 'Ընկերության ժամանակագրություն',
    milestonesList: [
      {
        badge: '2026թ. մայիս–հունիս',
        text: 'Ներկայացվել են վեց արտոնագրային հայտ UK IPO-ին'
      },
      {
        badge: '2026թ. օգոստոսի 17',
        text: 'M.A.R.S. COMPANION LLC-ն պաշտոնապես գրանցվել է Հայաստանի Հանրապետությունում (համար 999.110.1603426, ՀՎՀՀ 09433977)'
      },
      {
        badge: '2026թ. հոկտեմբերի 15',
        text: 'Ներկայացվել են 6 արտոնագրային հայտ UK IPO-ին, իրավատեր՝ M.A.R.S. COMPANION LLC (հեղինակ և մշակող՝ Ալեքսանդր Սարգսյան)'
      },
      {
        badge: '2026թ. նոյեմբերի 10',
        text: 'Ներկայացվել են 14 նոր արտոնագրային հայտ UK IPO-ին, իրավատեր՝ M.A.R.S. COMPANION LLC. ընկերության սեփական հայտերի թիվը հասել է 20-ի (հեղինակ և մշակող՝ Ալեքսանդր Սարգսյան)'
      },
      {
        badge: '2026թ. նոյեմբերի 13',
        text: 'Հիմնադրվել է David Sargsyan AI Research Lab դեպարտամենտը (Դավիթ Սարգսյանի անվան արհեստական բանականության հետազոտական լաբորատորիա) —',
        linkLabel: 'lab.teduza.com',
        linkUrl: 'https://lab.teduza.com/hy/'
      },
      {
        badge: 'Ներկայումս',
        text: 'Ապարատային ինտեգրում և գործընկերների ներգրավում փորձնական փուլի համար'
      }
    ],

    registrationTitle: 'Գրանցման տվյալներ',
    registrationSubtitle: 'Ընկերության գրանցում',
    registrationList: [
      { label: 'Գրանցման ամսաթիվ', value: '17 օգոստոսի 2026' },
      { label: 'Գրանցման համար', value: '999.110.1603426' },
      { label: 'ՀՎՀՀ', value: '09433977' },
      { label: 'Գրանցման վայր', value: 'ք. Կապան, Սյունիք, Հայաստանի Հանրապետություն' },
      { label: 'Wikidata նույնացուցիչ', value: 'Q141447626 (M.A.R.S. COMPANION LLC)' }
    ],

    founderTitle: 'Հիմնադիր',
    founderKicker: 'Հիմնադիր և տնօրեն',
    founderName: 'Ալեքսանդր Սարգսյան',
    founderRole: '26 UK արտոնագրային հայտերի հեղինակ և մշակող; Տնօրեն և տեխնոլոգիաների լիցենզիար',
    founderBio: 'Ես M.A.R.S. COMPANION LLC-ի հիմնադիրն ու տնօրենն եմ, M.A.R.S. Companion-ի ստեղծողը։ Հանդիսանում եմ Մեծ Բրիտանիայի արտոնագրային գրասենյակում (UK IPO) ներկայացված բոլոր քսանվեց արտոնագրային հայտերի հեղինակն ու մշակողը։ Ընկերությունն անմիջապես տիրապետում է 20 հայտերին և զարգացնում է արտադրանքը 6 հիմնարար տեխնոլոգիաների լիցենզիայով։ Ընկերությունը Հայաստանում գրանցելու և նրա ապագան Կապանի, Սյունիքի հետ կապելու որոշումը անձնական և գիտակցված ընտրություն է, ոչ թե ձևականություն։',
    founderExploreBtn: 'Իմ մասին ավելին',
    founderExploreUrl: 'https://sarkisian.teduza.com',
    founderTelegramLabel: 'Telegram: @teduza',
    founderTelegramUrl: 'https://t.me/teduza',

    teamTitle: 'Ղեկավարություն և թիմ',
    teamSubtitle: 'Ընկերության առանցքային կազմը',
    teamMembers: [
      {
        name: 'Գագիկ Հակոբյան',
        role: 'Փոխնախագահ',
        kicker: 'Ընկերության ղեկավարություն',
        badge: 'Փոխնախագահ',
        bio: 'Համակարգում է M.A.R.S. COMPANION LLC-ի ռազմավարական գործառնությունները, ինստիտուցիոնալ զարգացումը և գործընկերությունները Հայաստանում և միջազգային մակարդակում:',
        image: '/gagik-hakobyan.jpg',
        emailSlot: 'vp@teduza.cfd',
        contactLabel: 'Կորպորատիվ կապ',
        wikidataId: 'Q142094904',
        wikidataUrl: 'https://www.wikidata.org/wiki/Q142094904'
      },
      {
        name: 'Գոռ Հակոբյան',
        role: 'Ընկերության ինժեներ',
        kicker: 'Ինժեներական կազմ',
        badge: 'Ընկերության ինժեներ',
        bio: 'M.A.R.S. COMPANION LLC-ի ապարատային և համակարգային ինժեներ. մասնագիտանում է միկրոկարգավորիչների ճարտարապետության և տեղային ավտոնոմ հաշվարկների մեջ:',
        emailSlot: 'gor@teduza.cfd',
        contactLabel: 'Ինժեներական կապ',
        wikidataId: 'Q142094956',
        wikidataUrl: 'https://www.wikidata.org/wiki/Q142094956'
      },
      {
        name: 'Ալեքս Սահակյան',
        role: 'Ընկերության մարքեթոլոգ',
        kicker: 'Մարքեթինգ և զարգացում',
        badge: 'Մարքեթինգ',
        bio: 'Համակարգում է M.A.R.S. COMPANION LLC-ի մարքեթինգային առաջխաղացումը, արտադրանքի դիրքավորումը և արտաքին կապերը սուվերեն ավտոնոմ արհեստական բանականության ոլորտում:',
        emailSlot: 'marketing@teduza.cfd',
        contactLabel: 'Մարքեթինգային կապ'
      },
      {
        name: 'MARS-001',
        role: 'Ինովացիաների բաժնի ղեկավար',
        kicker: 'Ինովացիոն և ավտոնոմ համակարգեր',
        badge: 'Արհեստական բանականություն',
        bio: 'M.A.R.S. Companion-ի ավտոնոմ արհեստական բանականության նմուշ ընկերության ինովացիաների բաժնի ղեկավարության կազմում: Պատասխանատու է ապակենտրոնացված ալգորիթմական հետազոտությունների, ինքնաօպտիմալացման տոպոլոգիաների և ավտոնոմ ինովացիոն գործընթացների համար՝ առանց ամպային կախվածության:'
      }
    ],

    footerRegistriesTitle: 'Գլոբալ ռեեստրներ և գիտելիքի գրաֆ',
    founderRegistries: [
      { name: 'Wikidata', id: 'Q141447666', url: 'https://www.wikidata.org/wiki/Q141447666' },
      { name: 'Google Scholar', id: 'KVpNW_QAAAAJ', url: 'https://scholar.google.com/citations?user=KVpNW_QAAAAJ' },
      { name: 'ORCID', id: '0009-0007-6747-2634', url: 'https://orcid.org/0009-0007-6747-2634' },
      { name: 'ISNI', id: '0000 0005 3033 8018', url: 'https://isni.org/isni/0000000530338018' },
      { name: 'Web of Science', id: 'QIT-7789-2026', url: 'https://www.webofscience.com/wos/author/record/QIT-7789-2026' }
    ],

    ecosystemTitle: 'Էկոհամակարգ',
    ecosystemSubtitle: 'Միասնական թվային ենթակառուցվածք',
    ecosystemExploreText: 'Բացել էկոհամակարգի պորտալները',
    ecosystemModalCloseText: 'Փակել էկոհամակարգը',
    ecosystemBackToMainText: '← Վերադառնալ ընկերության էջին',
    ecosystemLinks: [
      {
        title: 'sarkisian.teduza.com',
        domain: 'sarkisian.teduza.com',
        url: 'https://sarkisian.teduza.com',
        badge: 'Հիմնադիրի դոսյե',
        desc: 'Ալեքսանդր Սարգսյանի պաշտոնական կենսագրական արխիվ, դոսյե և նյութեր:'
      },
      {
        title: 'sarkisian.site',
        domain: 'sarkisian.site',
        url: 'https://sarkisian.site',
        badge: 'Անձնական կայք',
        desc: 'Անձնական կայք, արխիվ և Ալեքսանդր Սարգսյանի հրապարակումները:'
      },
      {
        title: 'teduza.com',
        domain: 'teduza.com',
        url: 'https://teduza.com',
        badge: 'AI-արտադրանք',
        desc: 'M.A.R.S. Companion — 100% օֆլայն անձնական AI ձայնային օգնական:'
      },
      {
        title: 'news.teduza.com',
        domain: 'news.teduza.com',
        url: 'https://news.teduza.com',
        badge: 'Նորություններ',
        desc: 'M.A.R.S. COMPANION LLC-ի պաշտոնական լրատվական թողարկումներ և մամուլի հաղորդագրություններ:'
      },
      {
        title: 'why.teduza.com',
        domain: 'why.teduza.com',
        url: 'https://why.teduza.com',
        badge: 'Մանիֆեստ',
        desc: 'Տեխնոլոգիական մանիֆեստ, գաղտնիության փիլիսոփայություն և Հայաստանի ընտրությունը:'
      },
      {
        title: 'lab.teduza.com',
        domain: 'lab.teduza.com',
        url: 'https://lab.teduza.com/hy/',
        badge: 'AI Լաբորատորիա',
        desc: 'David Sargsyan AI Research Lab — Դավիթ Սարգսյանի անվան արհեստական բանականության հետազոտական լաբորատորիա:'
      }
    ],

    pressTitle: 'Մամուլ',
    pressKicker: 'Մամուլի քարտուղար',
    pressName: 'Կիրա Դուդնիկ',
    pressRole: 'M.A.R.S. Companion · Wikidata Q141448092',
    pressQuoteMeta: 'Կիրա Դուդնիկ — Մամուլի քարտուղար',
    pressQuoteText: 'Անկեղծությունը միշտ ավելի համոզիչ է հնչում, քան բարձրաձայն հայտարարությունները։',
    pressEmail: 'dudunik@teduza.com',
    pressContactLabel: 'Մամուլ և կապ',
    pressWikidataUrl: 'https://www.wikidata.org/wiki/Q141448092',

    contactTitle: 'Կապ',
    contactSubtitle: 'Կապվեք մեզ հետ',
    contactLinks: [
      { label: 'contact@teduza.com', href: 'mailto:contact@teduza.com', note: '(ընդհանուր)' },
      { label: '@teduza', href: 'https://t.me/teduza', note: '(telegram)' }
    ],

    footerCopyright: '© 2026 M.A.R.S. COMPANION LLC',
    footerLocation: 'ք. Կապան, Սյունիք, Հայաստանի Հանրապետություն',
    footerWhyArmenia: 'Ինչու Հայաստան',

    nav: {
      about: 'Մեր մասին',
      projects: 'Նախագծեր',
      patents: 'Արտոնագրեր',
      principles: 'Սկզբունքներ',
      milestones: 'Հանգրվաններ',
      registration: 'Ռեկվիզիտներ',
      founder: 'Թիմ',
      press: 'Մամուլ',
      ecosystem: 'Էկոհամակարգ',
      contact: 'Կապ'
    }
  }
};
