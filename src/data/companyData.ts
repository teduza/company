export type Language = 'en' | 'ru' | 'hy';

export interface PatentItem {
  number: string;
  title: string;
  date: string;
  qid: string;
  ipoUrl: string;
  wikidataUrl: string;
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

export interface CompanyData {
  langPath: string;
  metaTitle: string;
  metaDesc: string;

  eyebrow: string;
  h1: string;
  lead: string;

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
  ecosystemLinks: EcosystemLink[];

  pressTitle: string;
  pressKicker: string;
  pressName: string;
  pressRole: string;
  pressQuoteMeta: string;
  pressQuoteText: string;

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
    principles: string;
    milestones: string;
    registration: string;
    founder: string;
    press: string;
    ecosystem: string;
    contact: string;
  };
}

export const companyDataByLang: Record<Language, CompanyData> = {
  en: {
    langPath: '/',
    metaTitle: 'M.A.R.S. COMPANION LLC',
    metaDesc: 'M.A.R.S. COMPANION LLC is an Armenian technology company in Kapan founded by Aleksandr Sarkisian (Саркисян Александр Давидович). Operates under license to 6 UK patent filings for offline AI.',

    eyebrow: 'Company Information',
    h1: 'M.A.R.S. COMPANION LLC',
    lead: 'A technology company registered in the Republic of Armenia. Building privacy-focused offline artificial intelligence.',

    aboutTitle: 'About the Company',
    aboutQuoteMeta: 'Aleksandr Sarkisian — Founder',
    aboutQuoteText: "Kapan means a great deal to me. It's where everything began, long before things continued in Saint Petersburg — and registering the company right here in Kapan became a long-awaited return to my historical homeland, not a formal choice of jurisdiction.",
    aboutText: "The company is at an early stage: a single product, one founder, six patent applications filed in the United Kingdom. The company's current project is M.A.R.S. Companion, an offline AI companion with long-term memory —",
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

    principlesTitle: 'Principles',
    principlesSubtitle: 'How we operate',
    principlesList: [
      {
        num: 'I',
        title: 'Solo developer',
        copy: 'All product code is written personally by the founder — a deliberate choice of discipline, not a forced constraint.'
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
        badge: 'Now',
        text: 'Actively seeking partners and funding for the pilot stage'
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
    founderKicker: 'Founder & Sole Developer',
    founderName: 'Aleksandr Sarkisian',
    founderRole: 'Named inventor on 6 UK patent filings; Licensor to M.A.R.S. COMPANION LLC',
    founderBio: "I am the founder and sole developer of M.A.R.S. Companion. I personally write all of the product's code and am the named inventor on all six patent applications filed with the UK Intellectual Property Office (UK IPO). The company develops the product under license to these proprietary technologies. The decision to register the company in Armenia and tie its future to Kapan, Syunik, is a personal and deliberate choice — not a formality.",
    founderExploreBtn: 'Explore Founder Dossier',
    founderExploreUrl: 'https://sarkisian.teduza.com',
    founderTelegramLabel: 'Telegram: @teduza',
    founderTelegramUrl: 'https://t.me/teduza',

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
      }
    ],

    pressTitle: 'Press',
    pressKicker: 'Press Secretary',
    pressName: 'Kira Dudnik',
    pressRole: 'M.A.R.S. Companion · Wikidata Q141448092',
    pressQuoteMeta: 'Kira Dudnik — Press Secretary',
    pressQuoteText: 'Honesty always sounds more convincing than loud claims.',

    contactTitle: 'Contact',
    contactSubtitle: 'Get in touch',
    contactLinks: [
      { label: 'contact@teduza.com', href: 'mailto:contact@teduza.com', note: '(general inquiries)' },
      { label: 'dudunik@teduza.com', href: 'mailto:dudunik@teduza.com', note: '(press / Kira Dudnik)' },
      { label: '@teduza', href: 'https://t.me/teduza', note: '(telegram direct)' }
    ],

    footerCopyright: '© 2026 M.A.R.S. COMPANION LLC',
    footerLocation: 'Kapan, Syunik, Republic of Armenia',
    footerWhyArmenia: 'Why Armenia',

    nav: {
      about: 'About',
      projects: 'Projects',
      principles: 'Principles',
      milestones: 'Milestones',
      registration: 'Registration',
      founder: 'Founder',
      press: 'Press',
      ecosystem: 'Ecosystem',
      contact: 'Contact'
    }
  },

  ru: {
    langPath: '/ru/',
    metaTitle: 'M.A.R.S. COMPANION LLC',
    metaDesc: 'M.A.R.S. COMPANION LLC — технологическая компания в г. Капан (Армения). Основатель и разработчик — Саркисян Александр Давидович. 6 патентных заявок UK IPO на офлайн-ИИ.',

    eyebrow: 'Информация о компании',
    h1: 'M.A.R.S. COMPANION LLC',
    lead: 'Технологическая компания, зарегистрированная в Республике Армения. Разрабатывает офлайн-технологии искусственного интеллекта, ориентированные на приватность.',

    aboutTitle: 'О компании',
    aboutQuoteMeta: 'Саркисян Александр Давидович — Основатель',
    aboutQuoteText: 'Капан значит для меня многое. Начало было заложено здесь задолго до того, как всё продолжилось в Санкт-Петербурге, — и регистрация компании именно в Капане стала долгожданным возвращением на историческую родину, а не формальным выбором юрисдикции.',
    aboutText: 'Компания находится на ранней стадии: единственный продукт, один основатель, шесть поданных патентных заявок в Великобритании. Текущий проект компании — M.A.R.S. Companion, офлайн AI-компаньон с долговременной памятью —',
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

    principlesTitle: 'Принципы',
    principlesSubtitle: 'Как мы работаем',
    principlesList: [
      {
        num: 'I',
        title: 'Один разработчик',
        copy: 'Весь код продукта пишет лично основатель — осознанный выбор дисциплины, а не вынужденное ограничение.'
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
        badge: 'Сейчас',
        text: 'Активный поиск партнёров и финансирования для пилотного этапа'
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
    founderKicker: 'Основатель и единственный разработчик',
    founderName: 'Саркисян Александр Давидович',
    founderRole: 'Автор 6 патентных заявок в Великобритании (UK IPO); Лицензиар технологий',
    founderBio: 'Я — основатель и единственный разработчик M.A.R.S. Companion. Пишу весь код продукта лично и являюсь автором всех шести патентных заявок, поданных в Патентное ведомство Великобритании (UK IPO). Компания развивает продукт по лицензии на данные технологии. Решение зарегистрировать компанию именно в Армении и связать её будущее с Капаном, Сюник, — личный и осознанный выбор, а не формальность.',
    founderExploreBtn: 'Изучить подробнее обо мне',
    founderExploreUrl: 'https://sarkisian.teduza.com',
    founderTelegramLabel: 'Telegram: @teduza',
    founderTelegramUrl: 'https://t.me/teduza',

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
      }
    ],

    pressTitle: 'Пресс-служба',
    pressKicker: 'Пресс-секретарь',
    pressName: 'Кира Дудник',
    pressRole: 'M.A.R.S. Companion · Wikidata Q141448092',
    pressQuoteMeta: 'Кира Дудник — Пресс-секретарь',
    pressQuoteText: 'Искренность всегда звучит убедительнее громких заявлений.',

    contactTitle: 'Контакты',
    contactSubtitle: 'Связаться с нами',
    contactLinks: [
      { label: 'contact@teduza.com', href: 'mailto:contact@teduza.com', note: '(общие вопросы)' },
      { label: 'dudunik@teduza.com', href: 'mailto:dudunik@teduza.com', note: '(пресс-служба / Кира Дудник)' },
      { label: '@teduza', href: 'https://t.me/teduza', note: '(telegram основателя)' }
    ],

    footerCopyright: '© 2026 M.A.R.S. COMPANION LLC',
    footerLocation: 'г. Капан, Сюник, Республика Армения',
    footerWhyArmenia: 'Почему Армения',

    nav: {
      about: 'О компании',
      projects: 'Проекты',
      principles: 'Принципы',
      milestones: 'Вехи',
      registration: 'Реквизиты',
      founder: 'Основатель',
      press: 'Пресса',
      ecosystem: 'Экосистема',
      contact: 'Контакты'
    }
  },

  hy: {
    langPath: '/hy/',
    metaTitle: 'M.A.R.S. COMPANION LLC',
    metaDesc: 'M.A.R.S. COMPANION LLC՝ տեխնոլոգիական ընկերություն գրանցված Հայաստանում (ք. Կապան): Հիմնադիր՝ Ալեքսանդր Սարգսյան: 6 արտոնագրային հայտ Մեծ Բրիտանիայում:',

    eyebrow: 'Ընկերության մասին',
    h1: 'M.A.R.S. COMPANION LLC',
    lead: 'Տեխնոլոգիական ընկերություն, գրանցված Հայաստանի Հանրապետությունում։ Մշակում է գաղտնիության վրա կենտրոնացած օֆլայն արհեստական բանականության տեխնոլոգիաներ։',

    aboutTitle: 'Մեր մասին',
    aboutQuoteMeta: 'Ալեքսանդր Սարգսյան — Հիմնադիր',
    aboutQuoteText: 'Կապանը շատ բան է նշանակում ինձ համար։ Հենց այստեղ է դրվել սկիզբը՝ շատ ավելի վաղ, քան ամեն ինչ շարունակվեց Սանկտ Պետերբուրգում, և ընկերության գրանցումը հենց Կապանում դարձավ երկար սպասված վերադարձ դեպի պատմական հայրենիք, այլ ոչ թե իրավազորության ձևական ընտրություն։',
    aboutText: 'Ընկերությունը գտնվում է վաղ փուլում. մեկ արտադրանք, մեկ հիմնադիր, վեց ներկայացված արտոնագրային հայտ Մեծ Բրիտանիայում։ Ընկերության ընթացիկ նախագիծը M.A.R.S. Companion-ն է՝ երկարաժամկետ հիշողությամբ օֆլայն AI-ուղեկից —',
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

    principlesTitle: 'Սկզբունքներ',
    principlesSubtitle: 'Ինչպես ենք աշխատում',
    principlesList: [
      {
        num: 'I',
        title: 'Մեկ ծրագրավորող',
        copy: 'Արտադրանքի ողջ կոդը գրում է անձամբ հիմնադիրը՝ կարգապահության գիտակցված ընտրություն, ոչ թե պարտադրված սահմանափակում։'
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
        badge: 'Ներկայումս',
        text: 'Ակտիվորեն փնտրում ենք գործընկերներ և ֆինանսավորում փորձնական փուլի համար'
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
    founderKicker: 'Հիմնադիր և միակ ծրագրավորող',
    founderName: 'Ալեքսանդր Սարգսյան',
    founderRole: 'Մեծ Բրիտանիայում 6 արտոնագրերի հեղինակ; Տեխնոլոգիաների լիցենզիար',
    founderBio: 'Ես M.A.R.S. Companion-ի հիմնադիրն ու միակ ծրագրավորողն եմ։ Անձամբ գրում եմ արտադրանքի ողջ կոդը և հանդիսանում եմ Մեծ Բրիտանիայի արտոնագրային գրասենյակում (UK IPO) ներկայացված բոլոր վեց արտոնագրային հայտերի հեղինակը։ Ընկերությունը զարգացնում է արտադրանքը այս տեխնոլոգիաների լիցենզիայի հիման վրա։ Ընկերությունը հատուկ Հայաստանում գրանցելու և նրա ապագան Կապանի, Սյունիքի հետ կապելու որոշումը անձնական և գիտակցված ընտրություն է, ոչ թե ձևականություն։',
    founderExploreBtn: 'Իմ մասին ավելին',
    founderExploreUrl: 'https://sarkisian.teduza.com',
    founderTelegramLabel: 'Telegram: @teduza',
    founderTelegramUrl: 'https://t.me/teduza',

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
      }
    ],

    pressTitle: 'Մամուլ',
    pressKicker: 'Մամուլի քարտուղար',
    pressName: 'Կիրա Դուդնիկ',
    pressRole: 'M.A.R.S. Companion · Wikidata Q141448092',
    pressQuoteMeta: 'Կիրա Դուդնիկ — Մամուլի քարտուղար',
    pressQuoteText: 'Անկեղծությունը միշտ ավելի համոզիչ է հնչում, քան բարձրաձայն հայտարարությունները։',

    contactTitle: 'Կապ',
    contactSubtitle: 'Կապվեք մեզ հետ',
    contactLinks: [
      { label: 'contact@teduza.com', href: 'mailto:contact@teduza.com', note: '(ընդհանուր)' },
      { label: 'dudunik@teduza.com', href: 'mailto:dudunik@teduza.com', note: '(մամուլ / Կիրա Դուդնիկ)' },
      { label: '@teduza', href: 'https://t.me/teduza', note: '(telegram)' }
    ],

    footerCopyright: '© 2026 M.A.R.S. COMPANION LLC',
    footerLocation: 'ք. Կապան, Սյունիք, Հայաստանի Հանրապետություն',
    footerWhyArmenia: 'Ինչու Հայաստան',

    nav: {
      about: 'Մեր մասին',
      projects: 'Նախագծեր',
      principles: 'Սկզբունքներ',
      milestones: 'Հանգրվաններ',
      registration: 'Տվյալներ',
      founder: 'Հիմնադիր',
      press: 'Մամուլ',
      ecosystem: 'Էկոհամակարգ',
      contact: 'Կապ'
    }
  }
};
