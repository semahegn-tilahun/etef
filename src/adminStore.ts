// ETEF Centralized Admin State & CMS Store
// Manages persistence, audit logs, and live hydration for:
// - Hero Sections & Slow-Motion Backgrounds
// - Board Members & Photos
// - Job Vacancies
// - News & Bulletins
// - Partners & Sponsors
// - Page Contents & Proclamations
// - System & Activity Logs

export interface HeroItem {
  id: string; // 'home' | 'about' | 'news' | 'vacancies' | 'partners' | 'faq' | 'contact'
  pageName: string;
  route: string;
  image: string;
  title: string;
  subtitle: string;
  badge: string;
  brightness: string; // e.g. 'brightness-105'
  overlay: string; // e.g. 'from-primary-950/85 via-blue-900/60 to-primary-950/90'
}

export interface BoardMemberItem {
  bioKey: string;
  nameEng: string;
  nameAm: string;
  roleEng: string;
  roleAm: string;
  roleBadgeEng: string;
  roleBadgeAm: string;
  descEng: string;
  descAm: string;
  image: string;
  isPlaceholder: boolean;
}

export interface VacancyItem {
  id: string;
  title: string;
  station: string;
  type: string;
  candidates: number;
  deadline: string;
  status: "Active" | "Closed";
  category: string;
  salary: string;
  overview: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  publishDate: string;
  views: number;
  status: "Published" | "Draft";
  readTime: string;
  image: string;
  author: string;
  content: string;
}

export interface PartnerItem {
  id: string;
  name: string;
  sector: string;
  tier: string;
  logo: string;
  description: string;
  since: string;
  accordType: string;
  status?: "Published" | "Draft";
}

export interface ContentSettings {
  federationNameEng: string;
  federationNameAm: string;
  proclamationTextEng: string;
  proclamationTextAm: string;
  statMembers: string;
  statAssociations: string;
  statUnions: string;
  statDate: string;
  contactEmail: string;
  contactPhone: string;
  contactAddress: string;
  supportHours: string;
  logoUrl?: string;
  faviconUrl?: string;
  facebookUrl?: string;
  telegramUrl?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  status: "Published" | "Draft";
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  status: "Published" | "Draft";
}

export interface MemberItem {
  id: string;
  name: string;
  sector: string;
  region: string;
  fleetCount: string;
  tier: string;
  status: "Active" | "Pending" | "Suspended";
  joinedDate: string;
}

export interface AuditLogItem {
  id: string;
  timestamp: string;
  category: "Heroes" | "Board" | "Vacancies" | "News" | "Partners" | "Content" | "Memberships" | "System" | "Services" | "FAQs";
  action: "CREATE" | "UPDATE" | "DELETE" | "STATUS_CHANGE" | "SYSTEM_AUDIT";
  target: string;
  operator: string;
  status: "SUCCESS" | "WARNING" | "INFO";
}

// ------------------------------------------
// Default Data Sets
// ------------------------------------------

export const defaultHeroes: HeroItem[] = [
  {
    id: "home",
    pageName: "Home Page",
    route: "/",
    image: "/images/hero_transport_hub.jpg",
    title: "Ethiopian Transport Employers' Federation",
    subtitle: "The apex legal representative of commercial freight, passenger, and logistics employers across Ethiopia.",
    badge: "FDRE Constitution Art. 31 • Ginbot 4, 2010 E.C.",
    brightness: "brightness-100",
    overlay: "from-primary-950/85 via-blue-900/60 to-primary-950/90"
  },
  {
    id: "about",
    pageName: "About Us",
    route: "/about",
    image: "/images/about_hero_fleet.jpg",
    title: "Ethiopian Transport Employers' Federation",
    subtitle: "Established on May 12, 2018 (Ginbot 4, 2010 E.C.) by 17 employers' associations comprising over 6,652 members.",
    badge: "Executive Leadership & Board of Directors",
    brightness: "brightness-95",
    overlay: "from-primary-950/95 via-primary-900/80 to-primary-950/90"
  },
  {
    id: "news",
    pageName: "News & Bulletins",
    route: "/news",
    image: "/images/news_hero_media.jpg",
    title: "News and Operational Bulletins",
    subtitle: "Real-time updates, policy alerts, and operational bulletins across Ethiopian freight and transit corridors.",
    badge: "Media & Press Office",
    brightness: "brightness-105",
    overlay: "from-primary-900/75 via-blue-700/35 to-blue-400/15"
  },
  {
    id: "vacancies",
    pageName: "Job Vacancies",
    route: "/vacancies",
    image: "/images/vacancy_hero_career.jpg",
    title: "Career Opportunities",
    subtitle: "Join ETEF Secretariat or our affiliated national network of member transport associations and fleet operators.",
    badge: "Talent Acquisition & Careers",
    brightness: "brightness-105",
    overlay: "from-primary-900/75 via-blue-700/35 to-blue-400/15"
  },
  {
    id: "partners",
    pageName: "Partners & Sponsors",
    route: "/partners",
    image: "/images/partners_hero_network.jpg",
    title: "Strategic Partners & Alliances",
    subtitle: "Collaborating with federal ministries, regulatory agencies, financial institutions, and international tripartite partners.",
    badge: "Institutional Accords",
    brightness: "brightness-105",
    overlay: "from-primary-900/75 via-blue-700/35 to-blue-400/15"
  },
  {
    id: "faq",
    pageName: "FAQ",
    route: "/faq",
    image: "/images/faq_hero_support.jpg",
    title: "Frequently Asked Questions",
    subtitle: "Find authoritative answers about ETEF membership, legal protections, collective bargaining, and corridor services.",
    badge: "Information & Knowledge Base",
    brightness: "brightness-105",
    overlay: "from-primary-900/75 via-blue-700/35 to-blue-400/15"
  },
  {
    id: "contact",
    pageName: "Contact Us",
    route: "/contact",
    image: "/images/contact_hero_secretariat.jpg",
    title: "Connect with the Secretariat",
    subtitle: "Our headquarters in Addis Ababa and regional desks along key multimodal transit corridors are ready to assist you.",
    badge: "Headquarters & Corridors",
    brightness: "brightness-105",
    overlay: "from-primary-900/75 via-blue-700/35 to-blue-400/15"
  }
];

export const defaultBoard: BoardMemberItem[] = [
  {
    bioKey: "berehane",
    nameEng: "Ato Berehane Zeru",
    nameAm: "አቶ ብርሃኔ ዘርዑ",
    roleEng: "President",
    roleAm: "የዳይሬክተሮች ቦርድ ፕሬዝዳንት",
    roleBadgeEng: "President",
    roleBadgeAm: "ፕሬዝዳንት",
    descEng: "President of the Board of Directors. Leading executive governance and national policy advocacy.",
    descAm: "የዳይሬክተሮች ቦርድ ፕሬዝዳንት። የፌዴሬሽኑን ከፍተኛ አመራርና ሀገራዊ የጥብቅና ስራዎችን በበላይነት ይመራሉ፤ የአባላትን መብት ያስከብራሉ።",
    image: "/images/Ato Berehane Zeru.jpg",
    isPlaceholder: false
  },
  {
    bioKey: "mesele",
    nameEng: "Ato Mesele Hagos",
    nameAm: "አቶ መሠለ ሐጎስ",
    roleEng: "Vice President",
    roleAm: "የዳይሬክተሮች ቦርድ ም/ፕሬዝዳንት",
    roleBadgeEng: "Vice President",
    roleBadgeAm: "ም/ፕሬዝዳንት",
    descEng: "Vice President of the Board of Directors. Directing collective bargaining and operational efficiency.",
    descAm: "የዳይሬክተሮች ቦርድ ም/ፕሬዝዳንት። የጋራ ድርድር ስምምነቶችንና የትራንስፖርት ስምሪት ቅልጥፍናን በበላይነት ይመራሉ።",
    image: "/images/Ato Mesele Hagos.jpg",
    isPlaceholder: false
  },
  {
    bioKey: "derje",
    nameEng: "Ato Derje Legesse",
    nameAm: "አቶ ደረጀ ለገሠ",
    roleEng: "Secretary",
    roleAm: "የዳይሬክተሮች ቦርድ ዋና ፀሐፊ",
    roleBadgeEng: "Secretary",
    roleBadgeAm: "ዋና ፀሐፊ",
    descEng: "Secretary of the Board of Directors. Managing institutional governance, statutory filings, and legal records.",
    descAm: "የዳይሬክተሮች ቦርድ ዋና ፀሐፊ። የተቋማዊ አስተዳደር መዛግብትን፣ ሕጋዊ ሰነዶችን እና የአባላት ግንኙነትን ይመራሉ።",
    image: "/images/Ato Derje Legesse.jpg",
    isPlaceholder: false
  },
  {
    bioKey: "tadsse",
    nameEng: "Ato Tadsse Ejegu",
    nameAm: "አቶ ታደሰ እጅጉ",
    roleEng: "Board Member",
    roleAm: "የዳይሬክተሮች ቦርድ አባል",
    roleBadgeEng: "Board Member",
    roleBadgeAm: "የቦርድ አባል",
    descEng: "Commercial Haulier Operations & Fleet Coordination. Advising on route operations and regional transport logistics.",
    descAm: "የንግድ ጭነት ትራንስፖርት ኦፕሬሽን እና የስምሪት ቅንጅት። በመስመር ስምሪት እና በክልላዊ ትራንስፖርት ሎጂስቲክስ ላይ የማማከር ድጋፍ መስጠት።",
    image: "/images/placeholder_avatar.svg",
    isPlaceholder: true
  },
  {
    bioKey: "dejene",
    nameEng: "Ato Dejene Luchie",
    nameAm: "አቶ ደጀኔ ሉጬ",
    roleEng: "Board Member",
    roleAm: "የዳይሬክተሮች ቦርድ አባል",
    roleBadgeEng: "Board Member",
    roleBadgeAm: "የቦርድ አባል",
    descEng: "Dry Cargo Logistics & Fleet Governance. Championing transport operators and cross-regional haulier interests.",
    descAm: "የደረቅ ጭነት ሎጂስቲክስ እና የክልል ማኅበራት ጉዳዮች። የጭነት አጓጓዦች እና የአባል ማኅበራት ድምፅ ሆነው ያገለግላሉ።",
    image: "/images/Ato Dejene Luchie.jpg",
    isPlaceholder: false
  },
  {
    bioKey: "nurdin",
    nameEng: "Ato Nurdin Ditamo",
    nameAm: "አቶ ኑረዲን ዲታሞ",
    roleEng: "Board Member",
    roleAm: "የዳይሬክተሮች ቦርድ አባል",
    roleBadgeEng: "Board Member",
    roleBadgeAm: "የቦርድ አባል",
    descEng: "Fleet Modernization & Kaizen Management. Driving vehicle safety standards and fleet maintenance best practices.",
    descAm: "የተሽከርካሪዎች አስተዳደር እና የንግድ አጓጓዦች ውክልና። ዘመናዊ የፍሊት ቴክኖሎጂዎችን እና የካይዘን የአሰራር ጥበቦችን ማስተዋወቅ።",
    image: "/images/Ato Nurdin Ditamo.jpg",
    isPlaceholder: false
  },
  {
    bioKey: "mekonnen",
    nameEng: "Ato Mekonnen Workie",
    nameAm: "አቶ መኮንን ወርቄ",
    roleEng: "Board Member",
    roleAm: "የዳይሬክተሮች ቦርድ አባል",
    roleBadgeEng: "Board Member",
    roleBadgeAm: "የቦርድ አባል",
    descEng: "Transport Economics & Business Planning. Spearheading market linkages, tariff models, and operator competitiveness.",
    descAm: "የትራንስፖርት ኦፕሬሽን እና ስትራቴጂካዊ የድርጅት እቅድ። የገበያ ትስስር እና የቢዝነስ ፕላን ተነሳሽነቶችን በበላይነት ይመራሉ።",
    image: "/images/Ato Mekonnen Workie.jpg",
    isPlaceholder: false
  },
  {
    bioKey: "seid",
    nameEng: "Ato Seid Ibrahim",
    nameAm: "አቶ ሰዒድ ኢብራሂም",
    roleEng: "Board Member",
    roleAm: "የዳይሬክተሮች ቦርድ አባል",
    roleBadgeEng: "Board Member",
    roleBadgeAm: "የቦርድ አባል",
    descEng: "Corridor Operations & Regional Transport. Ensuring checkpoint efficiency, transit safety, and driver welfare.",
    descAm: "የኮሪደር ተሻጋሪ ጭነት እና የማኅበራት አመራር። የተቀላጠፈ የኬላ አሰራርና ፍትሃዊ የትራንዚት ታሪፍ እንዲረጋገጥ ይሰራሉ።",
    image: "/images/Ato Seid Ibrahim.jpg",
    isPlaceholder: false
  },
  {
    bioKey: "msfin",
    nameEng: "Ato Msfin Eshetu",
    nameAm: "አቶ መስፍን እሸቱ",
    roleEng: "Board Member",
    roleAm: "የዳይሬክተሮች ቦርድ አባል",
    roleBadgeEng: "Board Member",
    roleBadgeAm: "የቦርድ አባል",
    descEng: "Passenger & Freight Operations. Coordinating vocational certifications, labor law standards, and fleet inspections.",
    descAm: "የተሳፋሪ እና የጭነት ተሽከርካሪዎች ስምሪት ቅንጅት። የደህንነት ደረጃዎችን መቆጣጠር እና የተሽከርካሪዎች የብቃት ማረጋገጫ ድጋፍ።",
    image: "/images/Ato Msfin Eshetu.jpg",
    isPlaceholder: false
  },
  {
    bioKey: "mohammed",
    nameEng: "Ato Mohammed Hassan",
    nameAm: "አቶ መሐመድ ሀሰን",
    roleEng: "Board Member",
    roleAm: "የዳይሬክተሮች ቦርድ አባል",
    roleBadgeEng: "Board Member",
    roleBadgeAm: "የቦርድ አባል",
    descEng: "Regional Operator Relations. Bridging inter-regional associations with national transport policy agendas.",
    descAm: "የክልል ትራንስፖርት ማኅበራት እና የንግድ ጭነት አገልግሎት። የክልል ትራንስፖርት ኦፕሬተሮችን ድምፅ ያሰማሉ።",
    image: "/images/Ato Mohammed Hassan.jpg",
    isPlaceholder: false
  },
  {
    bioKey: "abeba",
    nameEng: "Ato Abeba Kassa",
    nameAm: "አቶ አበባው ካሣ",
    roleEng: "Board Member",
    roleAm: "የዳይሬክተሮች ቦርድ አባል",
    roleBadgeEng: "Board Member",
    roleBadgeAm: "የቦርድ አባል",
    descEng: "Commercial Logistics & Transport Enterprise Growth. Promoting public-private dialogue and trade exhibitions.",
    descAm: "የንግድ ሎጂስቲክስ እና የትራንስፖርት ድርጅት ዕድገት። የመንግሥትና የግል ዘርፍ ውይይቶችንና የንግድ ኤግዚቢሽኖችን ማስተዋወቅ።",
    image: "/images/placeholder_avatar.svg",
    isPlaceholder: true
  },
  {
    bioKey: "yergalem",
    nameEng: "Ato Yergalem Sefani",
    nameAm: "አቶ ይርጋዓለም ሰፋኒ",
    roleEng: "Board Member",
    roleAm: "የዳይሬክተሮች ቦርድ አባል",
    roleBadgeEng: "Board Member",
    roleBadgeAm: "የቦርድ አባል",
    descEng: "Legal Defense & Regulatory Compliance. Advocating before arbitration benches, judicial forums, and statutory bodies.",
    descAm: "የትራንስፖርት ኦፕሬሽን እና የሕግ ድጋፍ አስተባባሪነት። የሕግ ምክር አገልግሎት፣ የክርክር አፈታት እና የፍርድ ቤት ውክልና ድጋፍ።",
    image: "/images/Ato Yergalem Sefani.jpg",
    isPlaceholder: false
  },
  {
    bioKey: "engeda",
    nameEng: "Ato Engeda H/Maryam",
    nameAm: "አቶ እንግዳ ኃ/ማርያም",
    roleEng: "Board Member",
    roleAm: "የዳይሬክተሮች ቦርድ አባል",
    roleBadgeEng: "Board Member",
    roleBadgeAm: "የቦርድ አባል",
    descEng: "Transport Innovation & Fleet Technology. Advancing digital logbooks, fuel conservation, and technical benchmarking.",
    descAm: "የንግድ ትራንስፖርት አስተዳደር እና የተሽከርካሪዎች ፈጠራ። ዘመናዊ የቴክኖሎጂ መሳሪያዎችን ተግባራዊ ለማድረግ ይሰራሉ።",
    image: "/images/Ato Engeda H.Maryam.jpg",
    isPlaceholder: false
  }
];

export const defaultVacancies: VacancyItem[] = [
  {
    id: "senior-transport-coordinator",
    title: "Senior Transport Logistics Coordinator",
    station: "ETEF Secretariat HQ, Addis Ababa",
    type: "Full-Time",
    candidates: 14,
    deadline: "Oct 30, 2026",
    status: "Active",
    category: "Logistics",
    salary: "ETB 25,000 - 32,000",
    overview: "Direct corridor coordination and member association operational monitoring."
  },
  {
    id: "heavy-fleet-inspector",
    title: "Heavy Commercial Fleet Safety Inspector",
    station: "Dire Dawa Logistics Hub",
    type: "Full-Time",
    candidates: 9,
    deadline: "Nov 15, 2026",
    status: "Active",
    category: "Safety & Inspection",
    salary: "ETB 22,000 - 28,000",
    overview: "Conduct technical safety audits and compliance certification on commercial haulage fleets."
  },
  {
    id: "tripartite-liaison",
    title: "Association Operations & Tripartite Liaison",
    station: "Kirkos Sub-City Office, Addis Ababa",
    type: "Full-Time",
    candidates: 22,
    deadline: "Nov 10, 2026",
    status: "Active",
    category: "Policy & Relations",
    salary: "ETB 20,000 - 26,000",
    overview: "Coordinate social dialogue and collective bargaining disputes with regional bureaus."
  },
  {
    id: "multimodal-forwarding",
    title: "Multimodal Freight Forwarding Specialist",
    station: "Modjo Dry Port & Terminal",
    type: "Contract",
    candidates: 18,
    deadline: "Dec 01, 2026",
    status: "Active",
    category: "Logistics",
    salary: "ETB 24,000 - 30,000",
    overview: "Optimize container dwell turnaround and customs clearance bottlenecks."
  }
];

export const defaultNews: NewsItem[] = [
  {
    id: "tripartite-safety-accord",
    title: "ETEF and Ministry of Transport Sign Historic Tripartite Road Safety Accord",
    category: "Industry News",
    publishDate: "Oct 01, 2026",
    views: 1420,
    status: "Published",
    readTime: "5 min read",
    image: "/images/news_hero_media.jpg",
    author: "Communications Directorate",
    content: "The Ethiopian Transport Employers' Federation has finalized a nationwide safety and corridor efficiency protocol."
  },
  {
    id: "djibouti-freight-tariffs",
    title: "Djibouti Corridor Freight Tariffs Harmonization Strategy Finalized",
    category: "Corridor Update",
    publishDate: "Sep 24, 2026",
    views: 2890,
    status: "Published",
    readTime: "4 min read",
    image: "/images/hero_transport_hub.jpg",
    author: "Economics & Tariff Unit",
    content: "Transporters along the Addis-Djibouti route welcome transparent tariff adjustments amidst fuel price shifts."
  },
  {
    id: "safer-journeys",
    title: "Safer Journeys Begin Before the Engine Starts",
    category: "Safety & Skills",
    publishDate: "Sep 22, 2026",
    views: 940,
    status: "Published",
    readTime: "4 min read",
    image: "/images/news_hero_media.jpg",
    author: "Eng. Dawit Kebede, Safety Director",
    content: "Over 70% of highway breakdowns can be averted with a standard 15-minute daily pre-trip checklist."
  },
  {
    id: "employer-voice",
    title: "Making Space for the Employer Voice in National Transport Policy",
    category: "Association Updates",
    publishDate: "Sep 18, 2026",
    views: 1820,
    status: "Published",
    readTime: "3 min read",
    image: "/images/partners_hero_network.jpg",
    author: "Secretariat Administration",
    content: "Federation leaders engage parliamentary committees on fiscal incentives and vehicle financing."
  }
];

export const defaultPartners: PartnerItem[] = [
  {
    id: "motl",
    name: "Ministry of Transport and Logistics (MoTL)",
    sector: "Federal Regulatory Authority",
    tier: "Institutional Accord",
    logo: "/images/etef_logo.png",
    description: "National transport regulation, licensing oversight, and statutory compliance framework.",
    since: "2018",
    accordType: "Statutory Accord",
    status: "Published"
  },
  {
    id: "eic",
    name: "Ethiopian Insurance Corporation",
    sector: "Commercial Underwriting",
    tier: "Tier 1 Partner",
    logo: "/images/etef_logo.png",
    description: "Comprehensive commercial fleet, marine cargo, and third-party liability coverage agreements.",
    since: "2019",
    accordType: "Commercial Accord",
    status: "Published"
  },
  {
    id: "cbe",
    name: "Commercial Bank of Ethiopia",
    sector: "Financial & Fleet Credit",
    tier: "Strategic Financial Partner",
    logo: "/images/etef_logo.png",
    description: "Priority letters of credit, fuel voucher systems, and commercial vehicle leasing facilities.",
    since: "2018",
    accordType: "Financial Accord",
    status: "Published"
  },
  {
    id: "cetu",
    name: "Confederation of Ethiopian Trade Unions (CETU)",
    sector: "Labor Relations & Social Dialogue",
    tier: "Tripartite Social Partner",
    logo: "/images/etef_logo.png",
    description: "Joint collective bargaining conciliation, occupational health, and driver labor peace.",
    since: "2018",
    accordType: "Tripartite Accord",
    status: "Published"
  }
];

export const defaultContent: ContentSettings = {
  federationNameEng: "Ethiopian Transport Employers' Federation",
  federationNameAm: "የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን",
  proclamationTextEng: "FDRE Constitution Art. 31 • Proclamation No. 1156/2012 • Ginbot 4, 2010 E.C. Certified",
  proclamationTextAm: "በኢ.ፌ.ዲ.ሪ. ሕገ-መንግሥት አንቀጽ 31 እና በአሠሪና ሠራተኛ ጉዳይ አዋጅ 1156/2012 መሠረት ግንቦት 4 ቀን 2010 ዓ.ም. የተመዘገበ",
  statMembers: "6,652+",
  statAssociations: "17",
  statUnions: "39",
  statDate: "May 12, 2018",
  contactEmail: "info@etef.org.et",
  contactPhone: "+251 11 550 4040",
  contactAddress: "Kirkos Sub-City, Commercial Building 4th Floor, Addis Ababa, Ethiopia",
  supportHours: "Monday - Friday: 8:30 AM - 5:30 PM (EAT)",
  logoUrl: "/favicon.png",
  faviconUrl: "/favicon.png",
  facebookUrl: "https://facebook.com/etef.ethiopia",
  telegramUrl: "https://t.me/etef_official",
  linkedinUrl: "https://linkedin.com/company/etef-ethiopia",
  twitterUrl: "https://twitter.com/etef_ethiopia"
};

export const defaultServices: ServiceItem[] = [
  {
    id: "srv-1",
    title: "Legal Representation & Court Defense",
    description: "Defending member transport employers before judicial courts, tribunals, and ministerial arbitration boards.",
    icon: "fa-scale-balanced",
    category: "Legal & Advocacy",
    status: "Published"
  },
  {
    id: "srv-2",
    title: "Collective Bargaining & Labor Conciliation",
    description: "Structured negotiations under Proclamation 1156/2012 fostering workplace stability and commercial viability.",
    icon: "fa-gavel",
    category: "Labor Relations",
    status: "Published"
  },
  {
    id: "srv-3",
    title: "Strategic Trade Corridor Watch",
    description: "24/7 telematics, dwell-time tracking, and emergency breakdown coordination across Djibouti, Modjo, and Moyale corridors.",
    icon: "fa-satellite-dish",
    category: "Operations",
    status: "Published"
  },
  {
    id: "srv-4",
    title: "Executive Training & Capacity Building",
    description: "Accredited curriculum in fleet telematics, commercial defensive driving, cold-chain operations, and HAZMAT safety.",
    icon: "fa-graduation-cap",
    category: "Training",
    status: "Published"
  },
  {
    id: "srv-5",
    title: "Policy Reform & Tariff Modernization",
    description: "Empirical rate advocacy, tariff reviews with federal commissions, and import duty relief on spare parts.",
    icon: "fa-coins",
    category: "Policy",
    status: "Published"
  },
  {
    id: "srv-6",
    title: "Cross-Border Transit Protocols",
    description: "Reciprocal bilateral transit permits, COMESA Yellow Card insurance, and harmonized axle-load standards.",
    icon: "fa-earth-africa",
    category: "Regional Integration",
    status: "Published"
  }
];

export const defaultFaqs: FaqItem[] = [
  {
    id: "faq-1",
    question: "What is ETEF and what is its statutory mandate?",
    answer: "The Ethiopian Transport Employers Federation (ETEF) is the apex federation representing commercial transport employers, freight carriers, passenger transit operators, and regional associations across Ethiopia under FDRE Constitution Article 31 and Labor Proclamation No. 1156/2012.",
    category: "Institutional",
    status: "Published"
  },
  {
    id: "faq-2",
    question: "Who is eligible to join ETEF and what are the member tiers?",
    answer: "Membership is open to commercial dry and liquid cargo associations, cross-country passenger bus fleets, city transit operators, multimodal logistics providers, and private fleet enterprises. ETEF offers Institutional and Corporate membership tiers.",
    category: "Membership",
    status: "Published"
  },
  {
    id: "faq-3",
    question: "What legal protection and court advocacy does ETEF provide to members?",
    answer: "ETEF maintains an experienced Legal Directorate providing direct representation before federal and regional judicial courts, administrative tribunals, and arbitration boards. We defend employers in collective labor disputes and roadside regulatory conflicts.",
    category: "Legal & Protection",
    status: "Published"
  },
  {
    id: "faq-4",
    question: "How does ETEF monitor strategic trade corridors like Djibouti–Addis Ababa?",
    answer: "Our Corridor Watch Directorate operates 24/7 monitoring across four vital trade corridors: Djibouti–Addis Ababa, Modjo Dry Port, Moyale–Lamu, and Berbera–Dire Dawa. We track border crossings, customs dwell times, and provide an emergency breakdown helpline.",
    category: "Operations & Corridors",
    status: "Published"
  },
  {
    id: "faq-5",
    question: "How are collective bargaining agreements (CBAs) negotiated?",
    answer: "Under Labor Proclamation No. 1156/2012, ETEF serves as the authorized employer representative in negotiations with transport labor syndicates, establishing balanced working conditions and safety standards.",
    category: "Labor Relations",
    status: "Published"
  },
  {
    id: "faq-6",
    question: "How does ETEF advocate regarding fuel subsidies, tariffs, and taxation?",
    answer: "ETEF participates actively in national tariff review commissions advocating for rationalized freight tariffs, targeted fuel subsidy transitions, import duty relief on commercial spare parts, and fleet modernization financing.",
    category: "Policy & Tariffs",
    status: "Published"
  },
  {
    id: "faq-7",
    question: "What professional training and capacity-building programs are available?",
    answer: "Through our Training and Research Institute, ETEF delivers accredited modules in defensive commercial driving, fleet telematics management, hazardous materials (HAZMAT) handling, and transport enterprise governance.",
    category: "Training & Capacity",
    status: "Published"
  }
];

export const defaultMembers: MemberItem[] = [
  {
    id: "mem-1",
    name: "Abay Express Freight PLC",
    sector: "Freight Transport",
    region: "Addis Ababa Hub",
    fleetCount: "140 Trucks",
    tier: "Executive Member",
    status: "Active",
    joinedDate: "2018-05-12"
  },
  {
    id: "mem-2",
    name: "Selam Bus Lines S.C.",
    sector: "Passenger Transport",
    region: "National Inter-City",
    fleetCount: "85 Coaches",
    tier: "Executive Member",
    status: "Active",
    joinedDate: "2018-06-20"
  },
  {
    id: "mem-3",
    name: "Dire Trans Logistics S.C.",
    sector: "Logistics & Customs",
    region: "Dire Dawa Corridor",
    fleetCount: "62 Vehicles",
    tier: "Corporate Member",
    status: "Active",
    joinedDate: "2019-01-15"
  },
  {
    id: "mem-4",
    name: "Awash Bulk Petroleum Haulage",
    sector: "Fuel & Bulk Cargo",
    region: "Djibouti Arteries",
    fleetCount: "95 Tankers",
    tier: "Executive Member",
    status: "Active",
    joinedDate: "2019-03-10"
  },
  {
    id: "mem-5",
    name: "Oromia Freight Transporters Union",
    sector: "Freight Transport",
    region: "Oromia Regional State",
    fleetCount: "320 Trucks",
    tier: "Institutional Accord",
    status: "Active",
    joinedDate: "2018-05-12"
  },
  {
    id: "mem-6",
    name: "Modjo Dry Port Transit Association",
    sector: "Logistics & Customs",
    region: "Modjo Multimodal",
    fleetCount: "78 Vehicles",
    tier: "Corporate Member",
    status: "Active",
    joinedDate: "2020-08-04"
  }
];

export const defaultLogs: AuditLogItem[] = [
  {
    id: "log-1",
    timestamp: "2026-10-05 01:15:20",
    category: "Board",
    action: "UPDATE",
    target: "11 Board Photos Standardized (4:5 Uniform Executive Cover)",
    operator: "Secretariat Admin (HQ)",
    status: "SUCCESS"
  },
  {
    id: "log-2",
    timestamp: "2026-10-05 01:12:44",
    category: "Board",
    action: "CREATE",
    target: "Ato Tadsse Ejegu & Ato Abeba Kassa State Placeholders Added",
    operator: "Secretariat Admin (HQ)",
    status: "SUCCESS"
  },
  {
    id: "log-3",
    timestamp: "2026-10-05 00:58:10",
    category: "Heroes",
    action: "UPDATE",
    target: "Slow-Motion Background Covers Brightened with Cyan/Blue Light across 7 Pages",
    operator: "Secretariat Admin (HQ)",
    status: "SUCCESS"
  },
  {
    id: "log-4",
    timestamp: "2026-10-04 22:30:15",
    category: "Vacancies",
    action: "UPDATE",
    target: "Bilingual Vacancy Content Harmonized",
    operator: "Secretariat Admin (HQ)",
    status: "SUCCESS"
  },
  {
    id: "log-5",
    timestamp: "2026-10-04 21:10:00",
    category: "System",
    action: "SYSTEM_AUDIT",
    target: "Federation Secretariat Portal Initialization & Integrity Check",
    operator: "System Daemon",
    status: "SUCCESS"
  }
];

// ------------------------------------------
// Storage Helpers (Local Storage with Fallbacks)
// ------------------------------------------

function load<T>(key: string, defaultVal: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return defaultVal;
    return JSON.parse(raw);
  } catch {
    return defaultVal;
  }
}

function save<T>(key: string, val: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch (e) {
    console.warn("Storage save failed for key " + key, e);
  }
}

export const adminStore = {
  getHeroes(): HeroItem[] {
    return load<HeroItem[]>("etef_heroes", defaultHeroes);
  },
  saveHeroes(items: HeroItem[]): void {
    save("etef_heroes", items);
  },
  updateHero(id: string, updates: Partial<HeroItem>): HeroItem | null {
    const heroes = this.getHeroes();
    const idx = heroes.findIndex(h => h.id === id);
    if (idx === -1) return null;
    heroes[idx] = { ...heroes[idx], ...updates };
    this.saveHeroes(heroes);
    this.addLog("Heroes", "UPDATE", `Hero Section '${heroes[idx].pageName}' updated (Image: ${updates.image || heroes[idx].image})`);
    return heroes[idx];
  },

  getBoard(): BoardMemberItem[] {
    return load<BoardMemberItem[]>("etef_board", defaultBoard);
  },
  saveBoard(items: BoardMemberItem[]): void {
    save("etef_board", items);
  },
  updateBoardMember(bioKey: string, updates: Partial<BoardMemberItem>): BoardMemberItem | null {
    const board = this.getBoard();
    const idx = board.findIndex(b => b.bioKey === bioKey);
    if (idx === -1) return null;
    board[idx] = { ...board[idx], ...updates };
    this.saveBoard(board);
    this.addLog("Board", "UPDATE", `Board Member '${board[idx].nameEng}' updated`);
    return board[idx];
  },
  addBoardMember(item: BoardMemberItem): void {
    const board = this.getBoard();
    board.push(item);
    this.saveBoard(board);
    this.addLog("Board", "CREATE", `Board Member '${item.nameEng}' added`);
  },
  deleteBoardMember(bioKey: string): boolean {
    const board = this.getBoard();
    const member = board.find(b => b.bioKey === bioKey);
    if (!member) return false;
    const filtered = board.filter(b => b.bioKey !== bioKey);
    this.saveBoard(filtered);
    this.addLog("Board", "DELETE", `Board Member '${member.nameEng}' deleted`);
    return true;
  },

  getVacancies(): VacancyItem[] {
    return load<VacancyItem[]>("etef_vacancies", defaultVacancies);
  },
  saveVacancies(items: VacancyItem[]): void {
    save("etef_vacancies", items);
  },
  updateVacancy(id: string, updates: Partial<VacancyItem>): VacancyItem | null {
    const list = this.getVacancies();
    const idx = list.findIndex(v => v.id === id);
    if (idx === -1) return null;
    list[idx] = { ...list[idx], ...updates };
    this.saveVacancies(list);
    this.addLog("Vacancies", "UPDATE", `Vacancy '${list[idx].title}' updated`);
    return list[idx];
  },
  addVacancy(item: VacancyItem): void {
    const list = this.getVacancies();
    list.unshift(item);
    this.saveVacancies(list);
    this.addLog("Vacancies", "CREATE", `Vacancy '${item.title}' published`);
  },
  deleteVacancy(id: string): boolean {
    const list = this.getVacancies();
    const item = list.find(v => v.id === id);
    if (!item) return false;
    const filtered = list.filter(v => v.id !== id);
    this.saveVacancies(filtered);
    this.addLog("Vacancies", "DELETE", `Vacancy '${item.title}' deleted`);
    return true;
  },
  toggleVacancyStatus(id: string): string | null {
    const list = this.getVacancies();
    const item = list.find(v => v.id === id);
    if (!item) return null;
    item.status = item.status === "Active" ? "Closed" : "Active";
    this.saveVacancies(list);
    this.addLog("Vacancies", "STATUS_CHANGE", `Vacancy '${item.title}' status set to ${item.status}`);
    return item.status;
  },

  getNews(): NewsItem[] {
    return load<NewsItem[]>("etef_news", defaultNews);
  },
  saveNews(items: NewsItem[]): void {
    save("etef_news", items);
  },
  updateNews(id: string, updates: Partial<NewsItem>): NewsItem | null {
    const list = this.getNews();
    const idx = list.findIndex(n => n.id === id);
    if (idx === -1) return null;
    list[idx] = { ...list[idx], ...updates };
    this.saveNews(list);
    this.addLog("News", "UPDATE", `News Article '${list[idx].title}' updated`);
    return list[idx];
  },
  addNews(item: NewsItem): void {
    const list = this.getNews();
    list.unshift(item);
    this.saveNews(list);
    this.addLog("News", "CREATE", `News Article '${item.title}' created`);
  },
  deleteNews(id: string): boolean {
    const list = this.getNews();
    const item = list.find(n => n.id === id);
    if (!item) return false;
    const filtered = list.filter(n => n.id !== id);
    this.saveNews(filtered);
    this.addLog("News", "DELETE", `News Article '${item.title}' deleted`);
    return true;
  },
  toggleNewsStatus(id: string): string | null {
    const list = this.getNews();
    const item = list.find(n => n.id === id);
    if (!item) return null;
    item.status = item.status === "Published" ? "Draft" : "Published";
    this.saveNews(list);
    this.addLog("News", "STATUS_CHANGE", `News Article '${item.title}' set to ${item.status}`);
    return item.status;
  },

  getPartners(): PartnerItem[] {
    return load<PartnerItem[]>("etef_partners", defaultPartners);
  },
  savePartners(items: PartnerItem[]): void {
    save("etef_partners", items);
  },
  updatePartner(id: string, updates: Partial<PartnerItem>): PartnerItem | null {
    const list = this.getPartners();
    const idx = list.findIndex(p => p.id === id);
    if (idx === -1) return null;
    list[idx] = { ...list[idx], ...updates };
    this.savePartners(list);
    this.addLog("Partners", "UPDATE", `Partner '${list[idx].name}' updated`);
    return list[idx];
  },
  addPartner(item: PartnerItem): void {
    const list = this.getPartners();
    list.unshift(item);
    this.savePartners(list);
    this.addLog("Partners", "CREATE", `Partner '${item.name}' added`);
  },
  deletePartner(id: string): boolean {
    const list = this.getPartners();
    const item = list.find(p => p.id === id);
    if (!item) return false;
    const filtered = list.filter(p => p.id !== id);
    this.savePartners(filtered);
    this.addLog("Partners", "DELETE", `Partner '${item.name}' deleted`);
    return true;
  },
  togglePartnerStatus(id: string): string | null {
    const list = this.getPartners();
    const item = list.find(p => p.id === id);
    if (!item) return null;
    item.status = item.status === "Draft" ? "Published" : "Draft";
    this.savePartners(list);
    this.addLog("Partners", "STATUS_CHANGE", `Partner '${item.name}' status set to ${item.status}`);
    return item.status;
  },

  getServices(): ServiceItem[] {
    return load<ServiceItem[]>("etef_services", defaultServices);
  },
  saveServices(items: ServiceItem[]): void {
    save("etef_services", items);
  },
  updateService(id: string, updates: Partial<ServiceItem>): ServiceItem | null {
    const list = this.getServices();
    const idx = list.findIndex(s => s.id === id);
    if (idx === -1) return null;
    list[idx] = { ...list[idx], ...updates };
    this.saveServices(list);
    this.addLog("Services", "UPDATE", `Service '${list[idx].title}' updated`);
    return list[idx];
  },
  addService(item: ServiceItem): void {
    const list = this.getServices();
    list.unshift(item);
    this.saveServices(list);
    this.addLog("Services", "CREATE", `Service '${item.title}' created`);
  },
  deleteService(id: string): boolean {
    const list = this.getServices();
    const item = list.find(s => s.id === id);
    if (!item) return false;
    const filtered = list.filter(s => s.id !== id);
    this.saveServices(filtered);
    this.addLog("Services", "DELETE", `Service '${item.title}' deleted`);
    return true;
  },
  toggleServiceStatus(id: string): string | null {
    const list = this.getServices();
    const item = list.find(s => s.id === id);
    if (!item) return null;
    item.status = item.status === "Published" ? "Draft" : "Published";
    this.saveServices(list);
    this.addLog("Services", "STATUS_CHANGE", `Service '${item.title}' set to ${item.status}`);
    return item.status;
  },

  getFaqs(): FaqItem[] {
    return load<FaqItem[]>("etef_faqs", defaultFaqs);
  },
  saveFaqs(items: FaqItem[]): void {
    save("etef_faqs", items);
  },
  updateFaq(id: string, updates: Partial<FaqItem>): FaqItem | null {
    const list = this.getFaqs();
    const idx = list.findIndex(f => f.id === id);
    if (idx === -1) return null;
    list[idx] = { ...list[idx], ...updates };
    this.saveFaqs(list);
    this.addLog("FAQs", "UPDATE", `FAQ '${list[idx].question}' updated`);
    return list[idx];
  },
  addFaq(item: FaqItem): void {
    const list = this.getFaqs();
    list.unshift(item);
    this.saveFaqs(list);
    this.addLog("FAQs", "CREATE", `FAQ '${item.question}' created`);
  },
  deleteFaq(id: string): boolean {
    const list = this.getFaqs();
    const item = list.find(f => f.id === id);
    if (!item) return false;
    const filtered = list.filter(f => f.id !== id);
    this.saveFaqs(filtered);
    this.addLog("FAQs", "DELETE", `FAQ '${item.question}' deleted`);
    return true;
  },
  toggleFaqStatus(id: string): string | null {
    const list = this.getFaqs();
    const item = list.find(f => f.id === id);
    if (!item) return null;
    item.status = item.status === "Published" ? "Draft" : "Published";
    this.saveFaqs(list);
    this.addLog("FAQs", "STATUS_CHANGE", `FAQ '${item.question}' set to ${item.status}`);
    return item.status;
  },

  getMembers(): MemberItem[] {
    return load<MemberItem[]>("etef_members", defaultMembers);
  },
  saveMembers(items: MemberItem[]): void {
    save("etef_members", items);
  },
  updateMember(id: string, updates: Partial<MemberItem>): MemberItem | null {
    const list = this.getMembers();
    const idx = list.findIndex(m => m.id === id);
    if (idx === -1) return null;
    list[idx] = { ...list[idx], ...updates };
    this.saveMembers(list);
    this.addLog("Memberships", "UPDATE", `Member '${list[idx].name}' updated`);
    return list[idx];
  },
  addMember(item: MemberItem): void {
    const list = this.getMembers();
    list.unshift(item);
    this.saveMembers(list);
    this.addLog("Memberships", "CREATE", `Member '${item.name}' added`);
  },
  deleteMember(id: string): boolean {
    const list = this.getMembers();
    const item = list.find(m => m.id === id);
    if (!item) return false;
    const filtered = list.filter(m => m.id !== id);
    this.saveMembers(filtered);
    this.addLog("Memberships", "DELETE", `Member '${item.name}' deleted`);
    return true;
  },
  toggleMemberStatus(id: string): string | null {
    const list = this.getMembers();
    const item = list.find(m => m.id === id);
    if (!item) return null;
    item.status = item.status === "Active" ? "Suspended" : "Active";
    this.saveMembers(list);
    this.addLog("Memberships", "STATUS_CHANGE", `Member '${item.name}' status set to ${item.status}`);
    return item.status;
  },

  addHero(item: HeroItem): void {
    const heroes = this.getHeroes();
    heroes.push(item);
    this.saveHeroes(heroes);
    this.addLog("Heroes", "CREATE", `Hero Cover '${item.pageName}' added`);
  },
  deleteHero(id: string): boolean {
    const heroes = this.getHeroes();
    const item = heroes.find(h => h.id === id);
    if (!item) return false;
    const filtered = heroes.filter(h => h.id !== id);
    this.saveHeroes(filtered);
    this.addLog("Heroes", "DELETE", `Hero Cover '${item.pageName}' deleted`);
    return true;
  },


  getContent(): ContentSettings {
    return load<ContentSettings>("etef_content", defaultContent);
  },
  saveContent(settings: ContentSettings): void {
    save("etef_content", settings);
    this.addLog("Content", "UPDATE", "Federation Public Content & Proclamation Settings updated");
  },

  getLogs(): AuditLogItem[] {
    return load<AuditLogItem[]>("etef_logs", defaultLogs);
  },
  saveLogs(logs: AuditLogItem[]): void {
    save("etef_logs", logs);
  },
  addLog(category: AuditLogItem["category"], action: AuditLogItem["action"], target: string, status: AuditLogItem["status"] = "SUCCESS"): void {
    const logs = this.getLogs();
    const now = new Date();
    const ts = now.toISOString().replace("T", " ").substring(0, 19);
    logs.unshift({
      id: "log-" + Date.now(),
      timestamp: ts,
      category,
      action,
      target,
      operator: "Secretariat Admin (HQ)",
      status
    });
    // Keep last 100 logs
    if (logs.length > 100) logs.length = 100;
    this.saveLogs(logs);
  },
  clearLogs(): void {
    this.saveLogs([]);
  },

  // Hydrate Public Page Elements dynamically if customized in Admin
  hydratePublicPage(pathname: string, lang: string): void {
    const isAm = lang === "አማ";

    // 1. Hero slow-motion image & copy
    const pageIdMap: Record<string, string> = {
      "/": "home",
      "/home": "home",
      "/about": "about",
      "/news": "news",
      "/vacancies": "vacancies",
      "/vacancy": "vacancies",
      "/partners": "partners",
      "/partner": "partners",
      "/faq": "faq",
      "/faqs": "faq",
      "/contact": "contact",
      "/contact-us": "contact"
    };

    const heroId = pageIdMap[pathname];
    if (heroId) {
      const heroes = this.getHeroes();
      const hero = heroes.find(h => h.id === heroId);
      if (hero) {
        const heroImg = document.querySelector<HTMLImageElement>("main div img.animate-slow-motion");
        if (heroImg && hero.image && heroImg.getAttribute("src") !== hero.image) {
          heroImg.src = hero.image;
        }
        if (heroImg && hero.brightness) {
          heroImg.className = heroImg.className.replace(/brightness-[0-9]+/g, hero.brightness);
        }
        const heroH1 = document.querySelector<HTMLElement>("main h1");
        if (heroH1 && hero.title && pathname !== "/home" && pathname !== "/") {
          heroH1.textContent = hero.title;
        }
      }
    }

    // 2. Board of Directors hydration on /about
    if (pathname === "/about") {
      const boardContainer = document.querySelector<HTMLElement>("#leadership-section .grid");
      if (boardContainer) {
        const board = this.getBoard();
        if (board && board.length > 0) {
          boardContainer.innerHTML = board.map(m => {
            const name = isAm ? m.nameAm : m.nameEng;
            const role = isAm ? (m.roleBadgeAm || m.roleAm) : (m.roleBadgeEng || m.roleEng);
            const desc = isAm ? m.descAm : m.descEng;
            const btnText = isAm ? "ሙሉ የሕይወት ታሪክ አንብብ" : "Read Full Biography";
            const boardTitle = isAm ? "የዳይሬክተሮች ቦርድ" : "Board of Directors";

            return `
              <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                  <div class="relative h-72 overflow-hidden bg-gradient-to-b from-slate-900 via-primary-950 to-slate-950 flex ${m.isPlaceholder ? "flex-col items-center justify-center p-6 border-b border-white/5" : "items-center justify-center"}">
                      ${m.isPlaceholder ? `
                          <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-600/20 via-transparent to-transparent pointer-events-none"></div>
                          <div class="relative z-10 w-24 h-24 rounded-full bg-slate-800/90 border-2 border-primary-400/40 flex items-center justify-center shadow-xl mb-3 group-hover:scale-105 group-hover:border-primary-400/70 transition-all duration-300">
                              <i class="fa-solid fa-user-tie text-4xl text-primary-300"></i>
                          </div>
                          <span class="relative z-10 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 text-[11px] font-semibold rounded-full uppercase tracking-wider shadow-sm">
                              ${boardTitle}
                          </span>
                      ` : `
                          <img src="${m.image}" alt="${name}" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[1.02] contrast-[1.02]">
                      `}
                      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none"></div>
                      <div class="absolute bottom-3 left-4 right-4 text-white z-10">
                          <span class="px-2.5 py-0.5 bg-primary-600 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">${role}</span>
                          <h3 class="text-lg sm:text-xl font-bold text-white mt-1 drop-shadow-md">${name}</h3>
                      </div>
                  </div>
                  <div class="p-5 flex-grow flex flex-col justify-between">
                      <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                          ${desc}
                      </p>
                      <button type="button" data-bio="${m.bioKey}" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                          <span>${btnText}</span>
                          <i class="fa-solid fa-arrow-right text-[10px]"></i>
                      </button>
                  </div>
              </div>
            `;
          }).join("");
        }
      }
    }

    // 3. Proclamation and Contact info hydration
    const content = this.getContent();
    if (content) {
      document.querySelectorAll<HTMLElement>(".footer-contact-phone").forEach(el => el.textContent = content.contactPhone);
      document.querySelectorAll<HTMLElement>(".footer-contact-email").forEach(el => el.textContent = content.contactEmail);
      document.querySelectorAll<HTMLElement>(".footer-contact-address").forEach(el => el.textContent = content.contactAddress);
      
      // Update federation logos if customized
      if (content.logoUrl) {
        document.querySelectorAll<HTMLImageElement>("header img[alt*='ETEF'], footer img[alt*='ETEF']").forEach(img => {
          if (img.getAttribute("src") !== content.logoUrl) {
            img.src = content.logoUrl!;
          }
        });
      }
    }
  }
};

