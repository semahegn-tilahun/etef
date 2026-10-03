// ETEF Modal System: Board Bios, Article Reader, Job Specifications, Talent Network & Corridor Watch
import { getCurrentLang, Lang } from "./i18n";

export interface BioDetail {
  name: string;
  role: string;
  org: string;
  image: string;
  experience: string;
  education: string;
  bio: string[];
  responsibilities: string[];
}

export interface ArticleDetail {
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  content: string[];
  keyTakeaways: string[];
}

export interface JobDetail {
  title: string;
  employer: string;
  type: string;
  location: string;
  category: string;
  deadline: string;
  salary: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  applyEmail: string;
}

export interface CorridorDetail {
  name: string;
  image: string;
  status: string;
  badgeClass: string;
  summary: string;
  transitHours: string;
  clearanceHours: string;
  keyCheckpoints: string[];
  advisories: string[];
  helpline: string;
}

// ==========================================
// 1. BOARD BIOS (ENGLISH & AMHARIC)
// ==========================================
export const boardBiosEng: Record<string, BioDetail> = {
  berehane: {
    name: "Ato Berehane Zeru",
    role: "President, Board of Directors",
    org: "Ethiopian Transport Employers' Federation (ETEF)",
    image: "/images/board_president_dr_dawit.jpg",
    experience: "Founding Leader & Senior Transport Industry Principal",
    education: "Transport Enterprise Leadership & Commercial Fleet Governance",
    bio: [
      "Ato Berehane Zeru serves as the President of the Board of Directors of the Ethiopian Transport Employers' Federation (ETEF). Under his visionary leadership, transporters across Ethiopia united to establish an apex national federation representing commercial freight and passenger carriers.",
      "He was central to mobilizing 17 employers' associations—comprising over 6,652 members—to attain official legal certification of recognition from the Ministry of Labor and Social Affairs on Ginbot 4, 2010 E.C. (May 12, 2018).",
      "As President, he leads the Federation's high-level dialogue with federal ministries, parliamentary committees, and international tripartite social partners, defending members' legal and economic rights."
    ],
    responsibilities: [
      "Presiding over the Federation General Assembly and Executive Board meetings",
      "Representing Ethiopian transport employers before federal authorities and international forums",
      "Directing national advocacy for industrial peace and regulatory protection"
    ]
  },
  mesele: {
    name: "Ato Mesele Hagos",
    role: "Vice President, Board of Directors",
    org: "Ethiopian Transport Employers' Federation (ETEF)",
    image: "/images/board_vp_tigist.jpg",
    experience: "Senior Transport Executive & Collective Bargaining Leader",
    education: "Business Management & Industrial Relations",
    bio: [
      "Ato Mesele Hagos serves as the Vice President of the Board of Directors of ETEF. He works tirelessly to advance the operational efficiency, safety, and economic viability of transport operations nationwide.",
      "He has been an ardent champion of industrial peace, collective bargaining agreements, and constructive social dialogue between transport employers, government regulatory agencies, and labor syndicates.",
      "He plays an instrumental role in resolving commercial disputes, ensuring fair labor regulations under Proclamation No. 1156/2012, and coordinating capacity-building programs."
    ],
    responsibilities: [
      "Supporting the President in executive leadership and strategic sector oversight",
      "Leading collective bargaining negotiations and industrial dispute resolution",
      "Coordinating member satisfaction, welfare, and market networking initiatives"
    ]
  },
  derje: {
    name: "Ato Derje Legesse",
    role: "Secretary, Board of Directors",
    org: "Ethiopian Transport Employers' Federation (ETEF)",
    image: "/images/board_sec_yared.jpg",
    experience: "Secretariat Administration, Regulatory Law & Documentation",
    education: "Law & Public Administration",
    bio: [
      "Ato Derje Legesse serves as the Secretary of the Board of Directors of ETEF. He manages institutional governance records, statutory documentation, and official communications with affiliated associations.",
      "His legal and administrative acumen ensures the Federation adheres to constitutional standards, labor proclamations, and ratified international conventions.",
      "He regularly oversees the compilation of collective bargaining agreements, member memoranda of association, and legislative amendment submissions to the government."
    ],
    responsibilities: [
      "Managing Executive Board records, documentation, and statutory filings",
      "Overseeing legal compliance with FDRE Constitution Article 31 and Labor Proclamation 1156/2012",
      "Directing member communications and secretarial governance"
    ]
  },
  tadsse: {
    name: "Ato Tadsse Ejegu",
    role: "Member, Board of Directors",
    org: "Ethiopian Transport Employers' Federation (ETEF)",
    image: "/images/board_regional_bereket.jpg",
    experience: "Commercial Haulier Operations & Fleet Coordination",
    education: "Transport Logistics Management",
    bio: [
      "Ato Tadsse Ejegu is an esteemed Member of the ETEF Board of Directors. He brings decades of operational experience in commercial transport, route staging, and inter-association cooperation.",
      "He actively advises on the enactment and amendment of transport proclamations and regulations to safeguard employers' rights and business sustainability."
    ],
    responsibilities: [
      "Advising on route operations and regional transport logistics",
      "Contributing to national legislative and tariff review panels"
    ]
  },
  dejene: {
    name: "Ato Dejene Luchie",
    role: "Member, Board of Directors",
    org: "Ethiopian Transport Employers' Federation (ETEF)",
    image: "/images/board_logistics_selamawit.jpg",
    experience: "Dry Cargo Logistics & Regional Association Affairs",
    education: "Business Administration & Logistics",
    bio: [
      "Ato Dejene Luchie is a founding pioneer who played an active role dating back to the Dry Cargo Associations Union established in Hidar 2009 E.C. He serves as an executive voice for freight hauliers and member associations."
    ],
    responsibilities: [
      "Liaison with dry cargo association members and regional operators",
      "Supporting member rights advocacy and conflict prevention"
    ]
  },
  nurdin: {
    name: "Ato Nurdin Ditamo",
    role: "Member, Board of Directors",
    org: "Ethiopian Transport Employers' Federation (ETEF)",
    image: "/images/board_policy_helen.jpg",
    experience: "Fleet Management & Commercial Operator Representation",
    education: "Transport Administration",
    bio: [
      "Ato Nurdin Ditamo is a dedicated Board Member focused on modernizing member operations through contemporary technological advancements, training, and occupational health and safety standards."
    ],
    responsibilities: [
      "Promoting modern fleet technologies and Kaizen productivity methods",
      "Monitoring operator welfare and fair tax advisory services"
    ]
  },
  mekonnen: {
    name: "Ato Mekonnen Workie",
    role: "Member, Board of Directors",
    org: "Ethiopian Transport Employers' Federation (ETEF)",
    image: "/images/board_president_dr_dawit.jpg",
    experience: "Transport Operations & Strategic Enterprise Planning",
    education: "Economics & Transport Management",
    bio: [
      "Ato Mekonnen Workie contributes deep industry insight to ETEF's executive decisions, championing business planning, competitive advantage training, and market networking for member carriers."
    ],
    responsibilities: [
      "Leading market networking and business planning initiatives",
      "Overseeing capacity building in leadership and governance"
    ]
  },
  seid: {
    name: "Ato Seid Ibrahim",
    role: "Member, Board of Directors",
    org: "Ethiopian Transport Employers' Federation (ETEF)",
    image: "/images/board_vp_tigist.jpg",
    experience: "Cross-Corridor Freight & Association Leadership",
    education: "Transport Operations",
    bio: [
      "Ato Seid Ibrahim represents commercial carriers operating along critical national corridors, advocating for streamlined checkpoint procedures, fair transit tariffs, and driver safety."
    ],
    responsibilities: [
      "Corridor operations monitoring and trade barrier alleviation",
      "Supporting member defense in transport commercial tribunals"
    ]
  },
  msfin: {
    name: "Ato Msfin Eshetu",
    role: "Member, Board of Directors",
    org: "Ethiopian Transport Employers' Federation (ETEF)",
    image: "/images/board_sec_yared.jpg",
    experience: "Passenger & Freight Fleet Coordination",
    education: "Automotive Technology & Fleet Management",
    bio: [
      "Ato Msfin Eshetu works to ensure high operational efficiency and safety across affiliated fleets, coordinating training on management, labor law, and occupational health."
    ],
    responsibilities: [
      "Safety standards oversight and vehicle roadworthiness advocacy",
      "Liaison with labor and vocational training institutes"
    ]
  },
  mohammed: {
    name: "Ato Mohammed Hassan",
    role: "Member, Board of Directors",
    org: "Ethiopian Transport Employers' Federation (ETEF)",
    image: "/images/board_regional_bereket.jpg",
    experience: "Regional Transport Associations & Commercial Haulage",
    education: "Public Relations & Transport Management",
    bio: [
      "Ato Mohammed Hassan champions the voices of regional transport operators, ensuring that national policies reflect ground realities across all regions and corridor checkpoints."
    ],
    responsibilities: [
      "Regional member relations and inter-regional route mediation",
      "Bilateral forum organization and stakeholder consultation"
    ]
  },
  abeba: {
    name: "Ato Abeba Kassa",
    role: "Member, Board of Directors",
    org: "Ethiopian Transport Employers' Federation (ETEF)",
    image: "/images/board_logistics_selamawit.jpg",
    experience: "Commercial Logistics & Transport Enterprise Growth",
    education: "Logistics & Supply Chain Management",
    bio: [
      "Ato Abeba Kassa brings extensive expertise in transport business sustainability, collective agreement negotiations, and promoting public-private partnerships."
    ],
    responsibilities: [
      "Promoting public-private dialogue and trade exhibitions",
      "Advising on employer-employee collective agreements"
    ]
  },
  yergalem: {
    name: "Ato Yergalem Sefani",
    role: "Member, Board of Directors",
    org: "Ethiopian Transport Employers' Federation (ETEF)",
    image: "/images/board_policy_helen.jpg",
    experience: "Transport Operations & Legal Defense Coordination",
    education: "Commercial Law & Transport Operations",
    bio: [
      "Ato Yergalem Sefani coordinates legal advisory support, dispute resolution, and court representation for members confronting regulatory or commercial challenges."
    ],
    responsibilities: [
      "Coordinating legal representation before courts and administrative tribunals",
      "Reviewing drafts of national transport proclamations and directives"
    ]
  },
  engeda: {
    name: "Ato Engeda H/Maryam",
    role: "Member, Board of Directors",
    org: "Ethiopian Transport Employers' Federation (ETEF)",
    image: "/images/board_president_dr_dawit.jpg",
    experience: "Commercial Transport Management & Fleet Innovation",
    education: "Business Administration & Fleet Systems",
    bio: [
      "Ato Engeda H/Maryam is a visionary Board Member advocating for the adoption of contemporary technological tools, fuel efficiency, and professional development programs."
    ],
    responsibilities: [
      "Advancing technological adoption and digital management systems",
      "Organizing domestic and international experience-sharing programs"
    ]
  }
};

// Amharic Board Bios (Pure Amharic, Zero English)
export const boardBiosAm: Record<string, BioDetail> = {
  berehane: {
    name: "አቶ ብርሃኔ ዘርዑ",
    role: "የዳይሬክተሮች ቦርድ ፕሬዝዳንት",
    org: "የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",
    image: "/images/board_president_dr_dawit.jpg",
    experience: "መሥራች መሪ እና የትራንስፖርት ዘርፍ ከፍተኛ ባለሙያ",
    education: "የትራንስፖርት ድርጅት አመራር እና የንግድ ተሽከርካሪዎች አስተዳደር",
    bio: [
      "አቶ ብርሃኔ ዘርዑ የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን የሥራ አስፈጻሚ ቦርድ ፕሬዝዳንት በመሆን በማገልገል ላይ ይገኛሉ። በእሳቸው መሪነት በመላ ሀገሪቱ የሚገኙ የትራንስፖርት አሠሪዎች በአንድነት ተደራጅተው የንግድ ጭነት እና የተሳፋሪ አጓጓዦችን የሚወክል ጠንካራ ብሔራዊ ፌዴሬሽን መሥርተዋል።",
      "በግንቦት 04 ቀን 2010 ዓ/ም 17 የአሠሪ ማኅበራትንና ከ6,652 በላይ አባላትን በማስተባበር ከሠራተኛና ማኅበራዊ ጉዳይ ሚኒስቴር ይፋዊ የሕጋዊ ሰውነት ማረጋገጫ የምስክር ወረቀት እንዲገኝ ከፍተኛ ሚና ተጫውተዋል።",
      "በፕሬዝዳንትነት ኃላፊነታቸው የፌዴሬሽኑን ከፍተኛ ውይይቶች ከፌዴራል ሚኒስቴር መሥሪያ ቤቶች፣ ከሕዝብ ተወካዮች ምክር ቤት እና ከዓለም አቀፍ የሦስትዮሽ አጋሮች ጋር በመምራት የአባላትን ሕጋዊና ኢኮኖሚያዊ መብቶች ያስከብራሉ።"
    ],
    responsibilities: [
      "የፌዴሬሽኑን ጠቅላላ ጉባኤ እና የሥራ አስፈጻሚ ቦርድ ስብሰባዎችን በሊቀመንበርነት መምራት",
      "የኢትዮጵያን የትራንስፖርት አሠሪዎች በመንግሥት እና በዓለም አቀፍ መድረኮች መወከል",
      "የኢንዱስትሪ ሰላምን እና የቁጥጥር ጥበቃን በተመለከተ ብሔራዊ ጥብቅናን መምራት"
    ]
  },
  mesele: {
    name: "አቶ መሠለ ሐጎስ",
    role: "የዳይሬክተሮች ቦርድ ም/ፕሬዝዳንት",
    org: "የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",
    image: "/images/board_vp_tigist.jpg",
    experience: "ከፍተኛ የትራንስፖርት ሥራ አስፈፃሚ እና የጋራ ድርድር መሪ",
    education: "የቢዝነስ ማኔጅመንት እና የኢንዱስትሪ ግንኙነት",
    bio: [
      "አቶ መሠለ ሐጎስ የኢትራአፌ የዳይሬክተሮች ቦርድ ም/ፕሬዝዳንት በመሆን ያገለግላሉ። በመላ ሀገሪቱ የትራንስፖርት ስምሪት ቅልጥፍናን፣ ደህንነትንና ዘላቂነትን ለማሳደግ በትጋት ይሰራሉ።",
      "የኢንዱስትሪ ሰላም፣ የጋራ ድርድር ስምምነቶች እና በትራንስፖርት አሠሪዎች፣ በመንግሥት ተቆጣጣሪ አካላት እና በሠራተኛ ማኅበራት መካከል ገንቢ ውይይት እንዲኖር የበኩላቸውን አስተዋጽኦ ያበረክታሉ።",
      "የንግድ አለመግባባቶችን በመፍታት፣ በአዋጅ ቁጥር 1156/2012 መሠረት ፍትሃዊ የሥራ ሁኔታዎች እንዲሰፍኑ በማድረግ እና የአቅም ግንባታ ስልጠናዎችን በማስተባበር ረገድ ቁልፍ ሚና አላቸው።"
    ],
    responsibilities: [
      "ፕሬዝዳንቱን በከፍተኛ አመራርና በስትራቴጂካዊ የዘርፍ ክትትል ስራዎች መደገፍ",
      "የጋራ ድርድር ውይይቶችንና የኢንዱስትሪ አለመግባባቶች አፈታትን በበላይነት መምራት",
      "የአባላት እርካታ፣ ደህንነት እና የገበያ ትስስር ተነሳሽነቶችን ማስተባበር"
    ]
  },
  derje: {
    name: "አቶ ደረጀ ለገሠ",
    role: "የዳይሬክተሮች ቦርድ ዋና ፀሐፊ",
    org: "የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",
    image: "/images/board_sec_yared.jpg",
    experience: "የጽሕፈት ቤት አስተዳደር፣ የሕግ ጉዳዮች እና የሰነድ ዝግጅት",
    education: "ሕግ እና የሕዝብ አስተዳደር",
    bio: [
      "አቶ ደረጀ ለገሠ የኢትራአፌ የዳይሬክተሮች ቦርድ ዋና ፀሐፊ በመሆን ያገለግላሉ። የተቋማዊ አስተዳደር መዛግብትን፣ ሕጋዊ ሰነዶችን እና ከአባል ማኅበራት ጋር የሚደረጉ ይፋዊ ግንኙነቶችን ይመራሉ።",
      "የሕግና የአስተዳደር ዕውቀታቸው ፌዴሬሽኑ የሕገ-መንግሥት ድንጋጌዎችን፣ የሠራተኛ አዋጆችን እና የተፈረሙ ዓለም አቀፍ ስምምነቶችን አክብሮ እንዲሰራ ያረጋግጣል።",
      "የጋራ ድርድር ሰነዶች፣ የአባላት መመስረቻ ጽሑፎች እና ለመንግሥት የሚቀርቡ የሕግ ማሻሻያ ጥናቶች በበላይነት እንዲዘጋጁ ያደርጋሉ።"
    ],
    responsibilities: [
      "የሥራ አስፈጻሚ ቦርድ መዛግብትን፣ ሰነዶችን እና ሕጋዊ ሪፖርቶችን ማስተዳደር",
      "በሕገ-መንግሥቱ አንቀጽ 31 እና በአዋጅ 1156/2012 መሠረት ሕጋዊ ተገዢነትን መከታተል",
      "የአባላት ግንኙነትን እና የጽሕፈት ቤቱን አስተዳደራዊ ተግባራት ማስተባበር"
    ]
  },
  tadsse: {
    name: "አቶ ታደሰ እጅጉ",
    role: "የዳይሬክተሮች ቦርድ አባል",
    org: "የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",
    image: "/images/board_regional_bereket.jpg",
    experience: "የንግድ ጭነት ትራንስፖርት ኦፕሬሽን እና የስምሪት ቅንጅት",
    education: "የትራንስፖርት ሎጂስቲክስ ማኔጅመንት",
    bio: [
      "አቶ ታደሰ እጅጉ የኢትራአፌ የዳይሬክተሮች ቦርድ አባል ሲሆኑ በንግድ ትራንስፖርት፣ በመስመር ስምሪት እና በማኅበራት ቅንጅት የካበተ የበርካታ ዓመታት ልምድ አላቸው።",
      "የትራንስፖርት አዋጆችና ደንቦች ሲወጡና ሲሻሻሉ የአሠሪዎችን መብትና የንግድ ዘላቂነት እንዲያረጋግጡ የሙያ ምክር ይሰጣሉ።"
    ],
    responsibilities: [
      "በመስመር ስምሪት እና በክልላዊ ትራንስፖርት ሎጂስቲክስ ላይ የማማከር ድጋፍ መስጠት",
      "በብሔራዊ የሕግ እና የታሪፍ ክለሳ መድረኮች ላይ ንቁ ተሳትፎ ማድረግ"
    ]
  },
  dejene: {
    name: "አቶ ደጀኔ ሉጬ",
    role: "የዳይሬክተሮች ቦርድ አባል",
    org: "የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",
    image: "/images/board_logistics_selamawit.jpg",
    experience: "የደረቅ ጭነት ሎጂስቲክስ እና የክልል ማኅበራት ጉዳዮች",
    education: "የንግድ አስተዳደር እና ሎጂስቲክስ",
    bio: [
      "አቶ ደጀኔ ሉጬ በህዳር 2009 ዓ/ም ከተመሰረተው የደረቅ ጭነት አሠሪዎች ማኅበራት ኅብረት ጀምሮ ንቁ ተሳትፎ ያደረጉ መሥራች አባል ናቸው። የጭነት አጓጓዦች እና የአባል ማኅበራት ድምፅ ሆነው ያገለግላሉ።"
    ],
    responsibilities: [
      "ከደረቅ ጭነት አባል ማኅበራት እና ከክልል ኦፕሬተሮች ጋር ግንኙነት መፍጠር",
      "የአባላትን መብት የማስከበር እና አለመግባባቶችን የመከላከል ስራዎችን መደገፍ"
    ]
  },
  nurdin: {
    name: "አቶ ኑረዲን ዲታሞ",
    role: "የዳይሬክተሮች ቦርድ አባል",
    org: "የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",
    image: "/images/board_policy_helen.jpg",
    experience: "የተሽከርካሪዎች አስተዳደር እና የንግድ አጓጓዦች ውክልና",
    education: "የትራንስፖርት አስተዳደር",
    bio: [
      "አቶ ኑረዲን ዲታሞ የአባላትን የሥራ አፈፃፀም በዘመናዊ ቴክኖሎጂዎች፣ በስልጠና እና በሥራ አካባቢ ጤናና ደህንነት ደረጃዎች ለማዘመን በትጋት የሚሰሩ የቦርድ አባል ናቸው።"
    ],
    responsibilities: [
      "ዘመናዊ የፍሊት ቴክኖሎጂዎችን እና የካይዘን የአሰራር ጥበቦችን ማስተዋወቅ",
      "የኦፕሬተሮችን ደህንነት እና ፍትሃዊ የግብር ምክር አገልግሎቶችን መከታተል"
    ]
  },
  mekonnen: {
    name: "አቶ መኮንን ወርቄ",
    role: "የዳይሬክተሮች ቦርድ አባል",
    org: "የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",
    image: "/images/board_president_dr_dawit.jpg",
    experience: "የትራንስፖርት ኦፕሬሽን እና ስትራቴጂካዊ የድርጅት እቅድ",
    education: "ኢኮኖሚክስ እና የትራንስፖርት ማኔጅመንት",
    bio: [
      "አቶ መኮንን ወርቄ ለኢትራአፌ ውሳኔዎች ጥልቅ የዘርፍ ዕውቀታቸውን ያበረክታሉ፤ ለአባል አጓጓዦች የቢዝነስ እቅድ ዝግጅት፣ የተወዳዳሪነት ስልጠና እና የገበያ ትስስር ስራዎችን ይመራሉ።"
    ],
    responsibilities: [
      "የገበያ ትስስር እና የቢዝነስ ፕላን ተነሳሽነቶችን በበላይነት መምራት",
      "በአመራር እና በአስተዳደር ዙሪያ የአቅም ግንባታ ስልጠናዎችን ማስተባበር"
    ]
  },
  seid: {
    name: "አቶ ሰዒድ ኢብራሂም",
    role: "የዳይሬክተሮች ቦርድ አባል",
    org: "የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",
    image: "/images/board_vp_tigist.jpg",
    experience: "የኮሪደር ተሻጋሪ ጭነት እና የማኅበራት አመራር",
    education: "የትራንስፖርት ኦፕሬሽን",
    bio: [
      "አቶ ሰዒድ ኢብራሂም በዋና ዋና ብሔራዊ ኮሪደሮች ላይ የሚሰሩ የንግድ አጓጓዦችን ይወክላሉ፤ የተቀላጠፈ የኬላ አሰራር፣ ፍትሃዊ የትራንዚት ታሪፍ እና የአሽከርካሪዎች ደህንነት እንዲረጋገጥ ይሰራሉ።"
    ],
    responsibilities: [
      "የኮሪደር እንቅስቃሴዎችን መከታተል እና የንግድ እንቅፋቶችን ማስወገድ",
      "በትራንስፖርት ንግድ ፍርድ ቤቶች የአባላትን ሕጋዊ መብት መደገፍ"
    ]
  },
  msfin: {
    name: "አቶ መስፍን እሸቱ",
    role: "የዳይሬክተሮች ቦርድ አባል",
    org: "የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",
    image: "/images/board_sec_yared.jpg",
    experience: "የተሳፋሪ እና የጭነት ተሽከርካሪዎች ስምሪት ቅንጅት",
    education: "አውቶሞቲቭ ቴክኖሎጂ እና የፍሊት ማኔጅመንት",
    bio: [
      "አቶ መስፍን እሸቱ በአባል ድርጅቶች ዘንድ ከፍተኛ የስራ ቅልጥፍና እና ደህንነት እንዲረጋገጥ ይሰራሉ፤ በማኔጅመንት፣ በሠራተኛ ሕግ እና በሙያ ጤና ዙሪያ ስልጠናዎችን ያስተባብራሉ።"
    ],
    responsibilities: [
      "የደህንነት ደረጃዎችን መቆጣጠር እና የተሽከርካሪዎች የብቃት ማረጋገጫ ድጋፍ",
      "ከሠራተኛና ከቴክኒክና ሙያ ማሰልጠኛ ተቋማት ጋር ግንኙነት መፍጠር"
    ]
  },
  mohammed: {
    name: "አቶ መሐመድ ሀሰን",
    role: "የዳይሬክተሮች ቦርድ አባል",
    org: "የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",
    image: "/images/board_regional_bereket.jpg",
    experience: "የክልል ትራንስፖርት ማኅበራት እና የንግድ ጭነት አገልግሎት",
    education: "የሕዝብ ግንኙነት እና የትራንስፖርት ማኔጅመንት",
    bio: [
      "አቶ መሐመድ ሀሰን የክልል ትራንስፖርት ኦፕሬተሮችን ድምፅ ያሰማሉ፤ ሀገራዊ ፖሊሲዎች በሁሉም ክልሎችና የኮሪደር ኬላዎች ያሉትን ተጨባጭ ሁኔታዎች እንዲያገናዝቡ ይሰራሉ።"
    ],
    responsibilities: [
      "የክልል አባላት ግንኙነት እና የክልል አቋራጭ መስመሮች የማስታረቅ ስራ",
      "የሁለትዮሽ መድረኮችን ማዘጋጀት እና ከባለድርሻ አካላት ጋር መመካከር"
    ]
  },
  abeba: {
    name: "አቶ አበባው ካሣ",
    role: "የዳይሬክተሮች ቦርድ አባል",
    org: "የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",
    image: "/images/board_logistics_selamawit.jpg",
    experience: "የንግድ ሎጂስቲክስ እና የትራንስፖርት ድርጅት ዕድገት",
    education: "ሎጂስቲክስ እና የአቅርቦት ሰንሰለት አስተዳደር",
    bio: [
      "አቶ አበባው ካሣ በትራንስፖርት ንግድ ዘላቂነት፣ በጋራ ስምምነት ድርድሮች እና የመንግሥትና የግል ዘርፍ አጋርነትን በማጠናከር ረገድ ሰፊ ልምድ አላቸው።"
    ],
    responsibilities: [
      "የመንግሥትና የግል ዘርፍ ውይይቶችንና የንግድ ኤግዚቢሽኖችን ማስተዋወቅ",
      "በአሠሪና ሠራተኛ የጋራ ስምምነቶች ላይ የሙያ ምክር መስጠት"
    ]
  },
  yergalem: {
    name: "አቶ ይርጋዓለም ሰፋኒ",
    role: "የዳይሬክተሮች ቦርድ አባል",
    org: "የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",
    image: "/images/board_policy_helen.jpg",
    experience: "የትራንስፖርት ኦፕሬሽን እና የሕግ ድጋፍ አስተባባሪነት",
    education: "የንግድ ሕግ እና የትራንስፖርት ኦፕሬሽን",
    bio: [
      "አቶ ይርጋዓለም ሰፋኒ ከአስተዳደራዊ ወይም ከንግድ ማነቆዎች ጋር ለተጋፈጡ አባላት የሕግ ምክር አገልግሎት፣ የክርክር አፈታት እና የፍርድ ቤት ውክልና ድጋፍን ያስተባብራሉ።"
    ],
    responsibilities: [
      "በፍርድ ቤቶች እና በአስተዳደራዊ ጉባኤዎች ፊት የሕግ ውክልናን ማስተባበር",
      "የብሔራዊ ትራንስፖርት አዋጆችና መመሪያዎች ረቂቅ ሰነዶችን መገምገም"
    ]
  },
  engeda: {
    name: "አቶ እንግዳ ኃ/ማርያም",
    role: "የዳይሬክተሮች ቦርድ አባል",
    org: "የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",
    image: "/images/board_president_dr_dawit.jpg",
    experience: "የንግድ ትራንስፖርት አስተዳደር እና የተሽከርካሪዎች ፈጠራ",
    education: "የቢዝነስ አስተዳደር እና የተሽከርካሪዎች ቴክኖሎጂ",
    bio: [
      "አቶ እንግዳ ኃ/ማርያም ዘመናዊ የቴክኖሎጂ መሳሪያዎችን ተግባራዊ ለማድረግ፣ የነዳጅ አጠቃቀም ቅልጥፍናን ለማሻሻል እና የሙያ ማሻሻያ ፕሮግራሞችን ለማስፋፋት የሚሰሩ የቦርድ አባል ናቸው።"
    ],
    responsibilities: [
      "የቴክኖሎጂ አጠቃቀምን እና የዲጂታል አስተዳደር ስርዓቶችን ማሳደግ",
      "የሀገር ውስጥ እና የውጭ ሀገራት የልምድ ልውውጥ ፕሮግራሞችን ማዘጋጀት"
    ]
  }
};

// Aliases for backward compatibility
boardBiosEng.dawit = boardBiosEng.berehane;
boardBiosEng.tigist = boardBiosEng.mesele;
boardBiosEng.yared = boardBiosEng.derje;

boardBiosAm.dawit = boardBiosAm.berehane;
boardBiosAm.tigist = boardBiosAm.mesele;
boardBiosAm.yared = boardBiosAm.derje;

export const boardBios = boardBiosEng;

// ==========================================
// 2. ARTICLES (ENGLISH & AMHARIC)
// ==========================================
export const articlesEng: Record<string, ArticleDetail> = {
  "shared-road": {
    title: "A Shared Road to a Stronger Transport Industry",
    category: "Industry Perspectives",
    date: "24 September 2026",
    readTime: "5 min read",
    image: "/images/news_mountain_truck.jpg",
    author: "ETEF Secretariat Editorial Team",
    content: [
      "Ethiopia's commercial transport landscape is undergoing a decisive transformation. As our road network expands to connect regional agricultural hubs with industrial corridors, commercial transport employers bear the essential responsibility of keeping supply chains moving with efficiency, safety, and dignity.",
      "In recent stakeholder forums conducted with the Ministry of Transport and Logistics and regional carrier associations, one consensus emerged clearly: fragmented operations undermine everyone. Small-scale truckers face crippling fuel price swings and parts shortages alone, while passenger bus operators struggle with inconsistent terminal tariffs.",
      "The Ethiopian Transport Employers Federation serves as the unifying bridge. By pooling our voice, we ensure that tax policies on commercial spare parts, road user tariffs, and regional border logistics are debated with empirical data from actual fleet operators on the ground.",
      "Moving forward, our priority focuses on three core pillars: structured social dialogue between employers and labor unions, institutionalized driver safety certification, and digital freight-matching platforms that reduce empty return trips across our international corridors."
    ],
    keyTakeaways: [
      "Fragmented operator voices reduce bargaining power on national fuel and tax regulations.",
      "ETEF provides structured negotiation desks directly with federal ministries.",
      "Empty return haulage can be curtailed through shared digital freight-matching networks."
    ]
  },
  "safer-journeys": {
    title: "Safer Journeys Begin Before the Engine Starts",
    category: "Safety & Skills",
    date: "22 September 2026",
    readTime: "4 min read",
    image: "/images/news_mechanic_tire.jpg",
    author: "Eng. Dawit Kebede, Safety Director",
    content: [
      "Road safety in commercial transport is not an accidental outcome—it is an operational discipline. Over 70% of preventable mechanical failures on Ethiopian highways, from brake overheating to tire blowouts, can be identified during a 15-minute daily pre-trip inspection.",
      "ETEF has compiled an easy-to-use 10-point vehicle inspection checklist for heavy freight and inter-city passenger operators. The protocol covers tire tread depth and inflation, brake line pneumatic pressure, coupling pins, steering linkage, emergency lighting, and fire suppression readiness.",
      "Furthermore, the federation is partnering with regional driver training institutes to implement mandatory rest breaks along the Addis Ababa–Awash–Dire Dawa route. Driver fatigue remains a top contributing factor in nocturnal rollover incidents.",
      "Fleet operators who adopt standardized daily inspection logs have reported a 34% drop in highway breakdowns and up to 18% savings in long-term maintenance costs over a single operational fiscal year."
    ],
    keyTakeaways: [
      "A 15-minute pre-trip inspection prevents the vast majority of highway breakdowns.",
      "Standardized vehicle checklists save up to 18% in preventative fleet maintenance.",
      "Driver fatigue mitigation along long corridors is vital for preserving human life and freight."
    ]
  },
  "employer-voice": {
    title: "Making Space for the Employer Voice",
    category: "Association Updates",
    date: "18 September 2026",
    readTime: "3 min read",
    image: "/images/news_association_meeting.jpg",
    author: "Yared Haile, Secretary General",
    content: [
      "For decades, discussions regarding transport policy, labor guidelines, and city transit access were conducted without systematic representation from the employers who invest capital, purchase fleets, and assume commercial risks.",
      "ETEF was founded specifically to institutionalize this voice. In our regular roundtables with the Ministry of Labor and Skills and the Ministry of Transport, we represent over 1,200 commercial employers across freight, passenger, and logistics operations.",
      "Our agenda is constructive and solution-oriented. We advocate for balanced collective bargaining agreements that ensure fair wages and dignity for drivers while protecting operators from wildcat stoppages, arbitrary municipal transit levies, and unilateral freight confiscations during local unrest.",
      "We encourage all regional transport associations and independent logistics enterprises to actively participate in our regional consultative committees so our national representations remain deeply rooted in current operational realities."
    ],
    keyTakeaways: [
      "Employers carry the capital risk and need structured representation in policy making.",
      "Balanced collective bargaining agreements protect both workforce and enterprise sustainability.",
      "Regional consultative committees ensure federal advocacy reflects local challenges."
    ]
  },
  "everyday-costs": {
    title: "Understanding the Everyday Costs of Transport",
    category: "Industry Perspectives",
    date: "15 September 2026",
    readTime: "6 min read",
    image: "/images/news_logistics_hub.jpg",
    author: "ETEF Research & Economics Unit",
    content: [
      "While fuel often captures headline attention as the largest cash outflow in fleet operations, comprehensive analysis by ETEF's economics unit reveals that tire degradation, customs demurrage, and unscheduled maintenance account for over 52% of total operational expenditure over a vehicle's life cycle.",
      "On corridor routes with fluctuating pavement conditions, tire lifespan drops by up to 40% if inflation pressures are not adjusted for ambient temperature shifts between the Ethiopian highlands and the Rift Valley/Afar depression.",
      "Moreover, administrative delays at dry port container check gates compound costs exponentially through demurrage penalties and driver idle pay.",
      "By forming collective purchasing groups through ETEF, member fleets can negotiate bulk procurement of certified heavy-duty tires and lubricants, capturing volume discounts of up to 15% and safeguarding against counterfeit automotive parts."
    ],
    keyTakeaways: [
      "Tire wear and customs demurrage often exceed direct fuel expenses over time.",
      "Temperature shifts between highlands and lowlands require specialized tire pressure protocols.",
      "Federation collective bargaining and bulk purchasing shields members from fake spare parts."
    ]
  },
  "transport-roundtable": {
    title: "What Makes a Useful Transport Roundtable?",
    category: "Events & Dialogue",
    date: "11 September 2026",
    readTime: "3 min read",
    image: "/images/news_roundtable.jpg",
    author: "Communications Directorate",
    content: [
      "Too often, industry conferences produce lofty declarations without tangible implementation pathways. At ETEF, our symposiums and roundtables are structured around actionable policy problem-solving.",
      "In our most recent September roundtable held in Addis Ababa, commercial freight owners, customs commissioners, and insurance underwriters sat together with one objective: creating a streamlined cargo insurance claims protocol for cross-border transit.",
      "Rather than lecturing, the session examined three actual claims disputes, pinpointed procedural bottlenecks, and agreed on a 14-day binding claims resolution window for member operators.",
      "This practical approach is what sets ETEF events apart. When you attend an ETEF symposium, you leave with verified resolutions, regulatory clarity, and direct contact with decision-makers."
    ],
    keyTakeaways: [
      "ETEF events focus on measurable problem-solving rather than theoretical talk.",
      "Direct engagement with customs and insurers creates binding agreements.",
      "A 14-day claims turnaround protocol was established for member transport fleets."
    ]
  },
  "better-maintenance": {
    title: "Better Maintenance Starts with Better Records",
    category: "Safety & Skills",
    date: "08 September 2026",
    readTime: "4 min read",
    image: "/images/news_workshop_records.jpg",
    author: "Technical & Vocational Training Unit",
    content: [
      "Fleet maintenance in many mid-sized Ethiopian transport enterprises has historically relied on memory or scattered paper receipts. When an engine fails or a gearbox shears on a steep incline, finding out who serviced the component and when becomes nearly impossible.",
      "ETEF is rolling out a free, simplified fleet maintenance ledger template for all affiliated operators. Designed for both desktop and mobile use, the ledger tracks oil changes, brake lining replacements, tire rotation intervals, and mechanic sign-offs per vehicle chassis number.",
      "Workshops that piloted the ledger reported a 28% decrease in repetitive breakdown repairs within three months, as recurring mechanical issues were diagnosed systematically before catastrophic failures occurred.",
      "Additionally, having documented maintenance records increases vehicle resale value by up to 20% when upgrading commercial fleet units."
    ],
    keyTakeaways: [
      "Digital or structured logs eliminate guesswork in garage and workshop repairs.",
      "Recurring mechanical vulnerabilities are caught before causing roadside disasters.",
      "Documented service histories substantially boost vehicle trade-in and resale value."
    ]
  },
  "meaningful-membership": {
    title: "A First Step Towards Meaningful Membership",
    category: "Association Updates",
    date: "04 September 2026",
    readTime: "2 min read",
    image: "/images/news_office_admin.jpg",
    author: "Member Relations Department",
    content: [
      "Joining an employers federation should never be a symbolic formality. For transport operators navigating high fuel costs, competitive bidding for cargo tenders, and changing tax laws, active membership is an operational asset.",
      "As an ETEF member, your company gains access to our legal defense desk, subsidized driver safety workshops, corridor checkpoint dispute mediation, and verified industry research reports.",
      "Registration is transparent and straightforward: simply submit your valid business license, TIN certificate, and fleet registration details via our digital portal or at our Secretariat headquarters in Kirkos Sub-City, Addis Ababa.",
      "Join the federation today and let us build a stronger, more resilient transport future together."
    ],
    keyTakeaways: [
      "ETEF membership delivers real operational support, legal advisory, and safety training.",
      "Dispute mediation desks assist members during regional checkpoint delays.",
      "Application is seamless through our official digital platform."
    ]
  }
};

export const articlesAm: Record<string, ArticleDetail> = {
  "shared-road": {
    title: "ወደ ጠንካራ የትራንስፖርት ኢንዱስትሪ የሚወስደው የጋራ መንገድ",
    category: "የኢንዱስትሪ ዕይታዎች",
    date: "መስከረም 14 ቀን 2017 ዓ.ም",
    readTime: "የ5 ደቂቃ ንባብ",
    image: "/images/news_mountain_truck.jpg",
    author: "የኢትራአፌ ዋና ጽሕፈት ቤት ኤዲቶሪያል ቡድን",
    content: [
      "የኢትዮጵያ የንግድ ትራንስፖርት ዘርፍ ወሳኝ የለውጥ ሂደት ውስጥ ይገኛል። የመንገድ መረባችን የክልል የግብርና ማዕከላትን ከኢንዱስትሪ ኮሪደሮች ጋር ለማገናኘት እየሰፋ ባለበት ወቅት፣ የንግድ ትራንስፖርት አሠሪዎች የአቅርቦት ሰንሰለቱን በቅልጥፍና፣ በደህንነት እና በክብር የመጠበቅ ከፍተኛ ኃላፊነት አለባቸው።",
      "ከትራንስፖርትና ሎጂስቲክስ ሚኒስቴር እና ከክልል አጓጓዦች ማኅበራት ጋር በተካሄዱ የውይይት መድረኮች ላይ አንድ የጋራ መግባባት በግልጽ ታይቷል፦ የተበታተነ አሰራር ሁሉንም ይጎዳል። አነስተኛ የጭነት አሽከርካሪዎች የነዳጅ ዋጋ መዋዠቅንና የመለዋወጫ እጥረትን ብቻቸውን ሲጋፈጡ፣ የተሳፋሪ አውቶቡስ ኦፕሬተሮች ደግሞ ወጥነት በሌለው የተርሚናል ታሪፍ ይቸገራሉ።",
      "የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን እንደ አገናኝ ድልድይ ሆኖ ያገለግላል። ድምፃችንን በአንድ ላይ በማሰባሰብ በንግድ መለዋወጫዎች ቀረጥ፣ በመንገድ ተጠቃሚዎች ታሪፍ እና በክልል ድንበር ሎጂስቲክስ ላይ የሚወጡ ፖሊሲዎች ከመሬት በተገኙ ተጨባጭ መረጃዎች ላይ ተመስርተው እንዲከለሱ እናደርጋለን።",
      "ወደፊት ስንጓዝ ቅድሚያ የምንሰጠው በሦስት ዋና ዋና ጉዳዮች ላይ ነው፦ በአሠሪዎች እና በሠራተኛ ማኅበራት መካከል የተዋቀረ ማኅበራዊ ውይይት፣ የአሽከርካሪዎች ደህንነት ማረጋገጫ ሥልጠና፣ እና በዓለም አቀፍ ኮሪደሮቻችን ላይ ባዶ የመመለስ ጉዞዎችን የሚቀንሱ የዲጂታል የጭነት ትስስር መድረኮች ናቸው።"
    ],
    keyTakeaways: [
      "የተበታተነ ድምፅ በብሔራዊ የነዳጅና የግብር ደንቦች ላይ የመደራደር አቅምን ይቀንሳል።",
      "ኢትራአፌ በቀጥታ ከፌዴራል ሚኒስቴር መስሪያ ቤቶች ጋር የተዋቀሩ የድርድር መድረኮችን ያመቻቻል።",
      "የጋራ ዲጂታል የጭነት ትስስር መድረኮችን በመጠቀም ባዶ መመለስን መቀነስ ይቻላል።"
    ]
  },
  "safer-journeys": {
    title: "አስተማማኝ ጉዞ የሚጀምረው ሞተሩ ከመነሳቱ በፊት ነው",
    category: "ደህንነትና ሙያዊ ክህሎት",
    date: "መስከረም 12 ቀን 2017 ዓ.ም",
    readTime: "የ4 ደቂቃ ንባብ",
    image: "/images/news_mechanic_tire.jpg",
    author: "ኢንጂነር ዳዊት ከበደ፣ የደህንነት ዳይሬክተር",
    content: [
      "በትራንስፖርት ንግድ ውስጥ የመንገድ ደህንነት በአጋጣሚ የሚገኝ ሳይሆን የአሰራር ስነ-ስርዓት ውጤት ነው። በኢትዮጵያ አውራ ጎዳናዎች ላይ ከሚከሰቱት ሊከላከሉ ከሚችሉ የሜካኒካል ብልሽቶች መካከል ከ70% በላይ የሚሆኑት—ከፍሬን መሞቅ እስከ ጎማ መፈንዳት—ከጉዞ በፊት በሚደረግ የ15 ደቂቃ ዕለታዊ ፍተሻ ሊታወቁ ይችላሉ።",
      "ኢትራአፌ ለከባድ ጭነት እና ለአገር አቋራጭ ተሳፋሪ አጓጓዦች የሚሆን ለአጠቃቀም ቀላል የ10 ነጥብ የተሽከርካሪ ፍተሻ ዝርዝር አዘጋጅቷል። ፍተሻው የጎማውን ጥልቀትና አየር፣ የፍሬን መስመር ንፋስ ግፊት፣ ማያያዣዎችን፣ የመሪ መገጣጠሚያዎችን፣ የአደጋ ጊዜ መብራቶችን እና የእሳት ማጥፊያ ዝግጁነትን ያጠቃልላል።",
      "በተጨማሪም ፌዴሬሽኑ ከአዲስ አበባ–አዋሽ–ድሬዳዋ መስመር ላይ የግዴታ የእረፍት ጊዜያትን ተግባራዊ ለማድረግ ከክልል የአሽከርካሪዎች ማሰልጠኛ ተቋማት ጋር በመተባበር እየሰራ ነው። የአሽከርካሪዎች ድካም በሌሊት ለሚከሰቱ የመገልበጥ አደጋዎች ዋነኛ መንስኤ ነው።",
      "ደረጃውን የጠበቀ ዕለታዊ የፍተሻ ሰነድ የሚጠቀሙ የፍሊት ኦፕሬተሮች በአንድ በጀት ዓመት ውስጥ የመንገድ ላይ ብልሽቶችን በ34 በመቶ መቀነሳቸውን እና የረጅም ጊዜ የጥገና ወጪን እስከ 18 በመቶ መቆጠባቸውን ገልጸዋል።"
    ],
    keyTakeaways: [
      "የ15 ደቂቃ ቅድመ-ጉዞ ፍተሻ አብዛኛዎቹን የአውራ ጎዳና ብልሽቶች ይከላከላል።",
      "ደረጃውን የጠበቀ የፍተሻ ሰነድ የጥገና ወጪን እስከ 18% ይቆጥባል።",
      "በረጅም የኮሪደር መስመሮች ላይ የአሽከርካሪዎችን ድካም መቀነስ የሰውን ሕይወት እና ንብረት ለመታደግ ወሳኝ ነው።"
    ]
  },
  "employer-voice": {
    title: "ለአሠሪዎች ድምፅ ዕውቅና መስጠት",
    category: "የማኅበራት ዜናዎች",
    date: "መስከረም 08 ቀን 2017 ዓ.ም",
    readTime: "የ3 ደቂቃ ንባብ",
    image: "/images/news_association_meeting.jpg",
    author: "ያሬድ ኃይሌ፣ ዋና ጸሐፊ",
    content: [
      "ለአስርት ዓመታት በትራንስፖርት ፖሊሲ፣ በሠራተኛ መመሪያዎች እና በከተማ ትራንዚት ዙሪያ የሚደረጉ ውይይቶች ካፒታል ኢንቨስት የሚያደርጉትን፣ ተሽከርካሪዎችን የሚገዙትን እና የንግድ ስጋቶችን የሚወስዱትን አሠሪዎች ስልታዊ ውክልና ሳያካትቱ ቆይተዋል።",
      "ኢትራአፌ ይህንን ክፍተት ለመሙላት እና ይፋዊ ተቋማዊ ድምፅ ለመሆን ተቋቋመ። ከሥራና ክህሎት ሚኒስቴር እና ከትራንስፖርት ሚኒስቴር ጋር በምናደርጋቸው መደበኛ የውይይት መድረኮች ከ1,200 በላይ የሚሆኑ የንግድ ጭነት፣ የተሳፋሪ እና የሎጂስቲክስ አሠሪዎችን እንወክላለን።",
      "የውይይት አጀንዳችን ገንቢ እና መፍትሔ አፈላላጊ ነው። ለአሽከርካሪዎች ፍትሃዊ ደመወዝና ክብር የሚያረጋግጡ፣ በተመሳሳይ ጊዜም ኦፕሬተሮችን ካልተገቡ የስራ ማቆም አድማዎች፣ ከዘፈቀደ የከተማ ትራንዚት ክፍያዎች እና በአካባቢያዊ አለመረጋጋት ወቅት ከሚደርስ የጭነት መወረስ የሚከላከሉ ሚዛናዊ የጋራ ስምምነቶችን እንደግፋለን።",
      "ብሔራዊ ውክልናችን አሁን ካለው የመሬት ላይ ተጨባጭ ሁኔታ ጋር የተቆራኘ እንዲሆን ሁሉም የክልል የትራንስፖርት ማኅበራት እና ገለልተኛ የሎጂስቲክስ ድርጅቶች በክልል የምክክር ኮሚቴዎቻችን ውስጥ በንቃት እንዲሳተፉ ጥሪ እናቀርባለን።"
    ],
    keyTakeaways: [
      "አሠሪዎች የካፒታል ስጋት ስለሚሸከሙ በፖሊሲ ዝግጅት ላይ የተዋቀረ ውክልና ያስፈልጋቸዋል።",
      "ሚዛናዊ የጋራ ስምምነቶች የሠራተኛውን ደህንነትም ሆነ የድርጅቱን ዘላቂነት ይጠብቃሉ።",
      "የክልል የምክክር ኮሚቴዎች ሀገራዊ ውክልናው የአካባቢ ተግዳሮቶችን እንዲያንፀባርቅ ያደርጋሉ።"
    ]
  },
  "everyday-costs": {
    title: "የትራንስፖርት ዘርፍ የዕለት ተዕለት ወጪዎችን መረዳት",
    category: "የኢንዱስትሪ ዕይታዎች",
    date: "መስከረም 05 ቀን 2017 ዓ.ም",
    readTime: "የ6 ደቂቃ ንባብ",
    image: "/images/news_logistics_hub.jpg",
    author: "የኢትራአፌ የምርምርና ኢኮኖሚክስ ጥናት ክፍል",
    content: [
      "በተሽከርካሪዎች ስምሪት ውስጥ ነዳጅ እንደ ትልቁ የወጪ ምንጭ ተደርጎ ቢታሰብም፣ በኢትራአፌ የኢኮኖሚክስ ክፍል የተደረገው አጠቃላይ ትንተና እንደሚያሳየው የጎማ መበላት፣ የጉምሩክ መዘግየት ኪሳራ እና ያልታቀደ ጥገና ከተሽከርካሪው የህይወት ዘመን አጠቃላይ የኦፕሬሽን ወጪ ከ52 በመቶ በላይ ይሸፍናሉ።",
      "የመንገድ ሁኔታ በሚቀያየርባቸው የኮሪደር መስመሮች ላይ፣ በደጋማው የኢትዮጵያ ክፍል እና በስምጥ ሸለቆ/አፋር ዝቅተኛ ስፍራዎች መካከል ባለው የሙቀት ልዩነት ምክንያት የጎማ ንፋስ ግፊት ካልተስተካከለ የጎማ ዕድሜ እስከ 40% ይቀንሳል።",
      "በተጨማሪም በደረቅ ወደብ የኮንቴይነር መፈተሻ ኬላዎች ላይ የሚፈጠሩ አስተዳደራዊ መዘግየቶች በዲመሬጅ ቅጣት እና በአሽከርካሪዎች የስራ ፈት ክፍያ ወጪዎችን በከፍተኛ ደረጃ ያባብሳሉ።",
      "በኢትራአፌ በኩል የጋራ ግዢ ቡድኖችን በማቋቋም አባል ድርጅቶች ደረጃቸውን የጠበቁ ከባድ ጎማዎችን እና ዘይቶችን በጅምላ በመደራደር እስከ 15% ቅናሽ ማግኘት እና ሐሰተኛ የመኪና መለዋወጫዎችን መከላከል ይችላሉ።"
    ],
    keyTakeaways: [
      "የጎማ መበላት እና የጉምሩክ መዘግየት ወጪዎች ከጊዜ ወደ ጊዜ ከነዳጅ ወጪዎች ይልቃሉ።",
      "በደጋማ እና በቆላማ አካባቢዎች መካከል ያለው የሙቀት ልዩነት ልዩ የጎማ ግፊት ማስተካከያ ይፈልጋል።",
      "የፌዴሬሽኑ የጋራ ድርድር እና የጅምላ ግዢ አባላትን ከሐሰተኛ መለዋወጫዎች ይጠብቃል።"
    ]
  },
  "transport-roundtable": {
    title: "ውጤታማ የትራንስፖርት የውይይት መድረክ ምን ይመስላል?",
    category: "ክስተቶችና ውይይቶች",
    date: "ጳጉሜ 06 ቀን 2016 ዓ.ም",
    readTime: "የ3 ደቂቃ ንባብ",
    image: "/images/news_roundtable.jpg",
    author: "የኮሙኒኬሽን ዳይሬክቶሬት",
    content: [
      "ብዙውን ጊዜ የኢንዱስትሪ ኮንፈረንሶች ተግባራዊ የማስፈጸሚያ መንገድ የሌላቸውን ረቂቅ መግለጫዎች ብቻ ያወጣሉ። በኢትራአፌ ግን ሲምፖዚየሞቻችን እና የውይይት መድረኮቻችን በተግባራዊ የፖሊሲ ችግር ፈቺነት ላይ የተዋቀሩ ናቸው።",
      "በቅርቡ በአዲስ አበባ በተካሄደው የውይይት መድረካችን ላይ የንግድ ጭነት ባለቤቶች፣ የጉምሩክ ኮሚሽነሮች እና የኢንሹራንስ ተቆጣጣሪዎች በአንድ ዓላማ ተቀምጠዋል፦ ለድንበር ተሻጋሪ ትራንዚት የተሳለጠ የካርጎ ኢንሹራንስ ካሳ አከፋፈል መመሪያ ማዘጋጀት።",
      "ከረዥም ንግግሮች ይልቅ መድረኩ ሦስት ተጨባጭ የካሳ ውዝግቦችን መርምሯል፣ የአሰራር ማነቆዎችን ለይቷል፣ እና ለአባል ኦፕሬተሮች የ14 ቀናት አስገዳጅ የካሳ አፈታት ጊዜ ላይ ስምምነት ላይ ደርሷል።",
      "የኢትራአፌ ዝግጅቶችን ልዩ የሚያደርገው ይህ ተግባራዊ አካሄድ ነው። በኢትራአፌ መድረክ ላይ ሲሳተፉ ከተረጋገጡ ውሳኔዎች፣ ከሕጋዊ ግልጽነት እና ከውሳኔ ሰጪዎች ጋር ቀጥተኛ ግንኙነት በመፍጠር ይመለሳሉ።"
    ],
    keyTakeaways: [
      "የኢትራአፌ ዝግጅቶች በንድፈ-ሀሳብ ላይ ሳይሆን በተግባራዊ ችግር ፈቺነት ላይ ያተኩራሉ።",
      "ከጉምሩክ እና ከኢንሹራንስ ተቋማት ጋር የሚደረግ ቀጥተኛ ውይይት አስገዳጅ ስምምነቶችን ይፈጥራል።",
      "ለአባል ድርጅቶች የ14 ቀናት የኢንሹራንስ ካሳ አፈታት ስርዓት ተዘርግቷል።"
    ]
  },
  "better-maintenance": {
    title: "የተሻለ የጥገና ሥራ የሚጀምረው ከተሟላ መረጃ ሰነድ ነው",
    category: "ደህንነትና ሙያዊ ክህሎት",
    date: "ጳጉሜ 03 ቀን 2016 ዓ.ም",
    readTime: "የ4 ደቂቃ ንባብ",
    image: "/images/news_workshop_records.jpg",
    author: "የቴክኒክና ሙያ ስልጠና ክፍል",
    content: [
      "በብዙ መካከለኛ የኢትዮጵያ የትራንስፖርት ድርጅቶች ውስጥ የተሽከርካሪ ጥገና በቃል ትውስታ ወይም በተበታተኑ ደረሰኞች ላይ የተመሰረተ ነበር። ዳገት ላይ ሞተር ሲበላሽ ወይም ጊርቦክስ ሲሰበር ክፍሉን ማን እና መቼ እንደጠገነው ማወቅ ፈጽሞ የማይቻል ይሆናል።",
      "ኢትራአፌ ለሁሉም አባል ኦፕሬተሮች ነፃ እና ቀላል የተሽከርካሪዎች የጥገና መዝገብ ሰነድ እያዘጋጀ ነው። ለኮምፒውተር እና ለሞባይል ምቹ ሆኖ የተዘጋጀው መዝገብ የዘይት ለውጥን፣ የፍሬን ባሌት ቅያሬን፣ የጎማ ማዞሪያ ጊዜዎችን እና የመካኒኩን ፊርማ በተሽከርካሪ ሻሲ ቁጥር ይከታተላል።",
      "መዝገቡን በሙከራ ደረጃ የተጠቀሙ ጋራዦች በሦስት ወራት ውስጥ ተደጋጋሚ ብልሽቶችን በ28 በመቶ መቀነሳቸውን ገልጸዋል፤ ምክንያቱም ተደጋጋሚ የሜካኒካል ችግሮች ወደ ከፋ አደጋ ከማምራታቸው በፊት በስርዓት ስለተለዩ ነው።",
      "በተጨማሪም የተሟላ የጥገና መረጃ ሰነድ መኖሩ የንግድ ተሽከርካሪዎችን በሚቀይሩበት ወቅት የመሸጫ ዋጋቸውን እስከ 20 በመቶ ይጨምራል።"
    ],
    keyTakeaways: [
      "ዲጂታል ወይም የተዋቀሩ መዛግብት በጋራዥ ጥገና ላይ የሚፈጠረውን ግምት ያስቀራሉ።",
      "ተደጋጋሚ የሜካኒካል ክፍተቶች የመንገድ ላይ አደጋ ሳያስከትሉ ቀድመው ይታወቃሉ።",
      "የተሟላ የሰነድ ታሪክ የተሽከርካሪውን ዳግም መሸጫ ዋጋ በከፍተኛ ሁኔታ ይጨምራል።"
    ]
  },
  "meaningful-membership": {
    title: "ትርጉም ወዳለው አባልነት የሚደረግ የመጀመሪያ እርምጃ",
    category: "የማኅበራት ዜናዎች",
    date: "ነሐሴ 29 ቀን 2016 ዓ.ም",
    readTime: "የ2 ደቂቃ ንባብ",
    image: "/images/news_office_admin.jpg",
    author: "የአባላት ግንኙነት መምሪያ",
    content: [
      "የአሠሪዎች ፌዴሬሽን አባል መሆን መቼም ቢሆን የስም ማሳመሪያ መሆን የለበትም። ከፍተኛ የነዳጅ ወጪን፣ ለካርጎ ጨረታዎች የሚደረገውን ፉክክር እና ተለዋዋጭ የግብር ሕጎችን ለሚጋፈጡ የትራንስፖርት አሠሪዎች ንቁ አባልነት የንግድ ሀብት ነው።",
      "እንደ ኢትራአፌ አባል ድርጅትዎ የሕግ ጥበቃ ዴስካችንን፣ ድጎማ የተደረገባቸውን የአሽከርካሪዎች ደህንነት ስልጠናዎችን፣ የኮሪደር ኬላ አለመግባባቶች ማስታረቂያን እና የተረጋገጡ የኢንዱስትሪ ጥናት ሪፖርቶችን ያገኛል።",
      "ምዝገባው ግልጽ እና ቀጥተኛ ነው፦ ሕጋዊ የንግድ ፈቃድዎን፣ የግብር ከፋይ መለያ ቁጥርዎን እና የተሽከርካሪዎች ምዝገባ ዝርዝርን በዲጂታል ፖርታላችን ወይም በአዲስ አበባ ቂርቆስ ክፍለ ከተማ በሚገኘው ዋና ጽሕፈት ቤታችን ያስገቡ።",
      "ዛሬ ፌዴሬሽኑን ይቀላቀሉ፤ ጠንካራና አስተማማኝ የትራንስፖርት ዘርፍ በጋራ እንገንባ።"
    ],
    keyTakeaways: [
      "የኢትራአፌ አባልነት እውነተኛ የስራ ድጋፍ፣ የሕግ ምክር እና የደህንነት ስልጠና ይሰጣል።",
      "የክርክር አፈታት ዴስኮች በክልል ኬላዎች መዘግየት ወቅት አባላትን ያግዛሉ።",
      "ማመልከቻ በይፋዊ የዲጂታል መድረካችን በኩል ያለምንም እንከን ይከናወናል።"
    ]
  }
};

export const articles = articlesEng;

// ==========================================
// 3. JOBS (ENGLISH & AMHARIC)
// ==========================================
export const jobsEng: Record<string, JobDetail> = {
  "advocacy-officer": {
    title: "Senior Policy & Advocacy Officer",
    employer: "ETEF Secretariat Headquarters",
    type: "Full-Time (Permanent)",
    location: "Addis Ababa, Ethiopia (Kirkos Sub-City)",
    category: "Policy, Legal & Government Relations",
    deadline: "15 October 2026",
    salary: "Competitive NGO/Federation Grade + Benefits",
    overview: "The Senior Policy & Advocacy Officer will lead ETEF's research and legislative representation, working directly with federal ministries, parliamentary committees, and regional transport bureaus to protect employer rights and foster modern logistics standards.",
    responsibilities: [
      "Analyze proposed federal and regional transport legislation, tax policies, and labor codes affecting commercial transport employers.",
      "Draft policy briefs, whitepapers, and position statements on tariffs, road safety, and multimodal corridor operations.",
      "Represent ETEF in tripartite consultative committees with government agencies and trade unions.",
      "Coordinate stakeholder workshops, consultative roundtables, and the annual National Transport Leadership Symposium.",
      "Provide regulatory guidance to member regional associations and logistics enterprises."
    ],
    requirements: [
      "Master's or Bachelor's degree in Law (LL.B/LL.M), Public Policy, Transport Economics, or related fields.",
      "Minimum 5 years of progressive experience in policy advocacy, legal analysis, or association management in Ethiopia.",
      "Fluency in Amharic and English with outstanding legal drafting and presentation skills.",
      "In-depth knowledge of Ethiopian transport laws, labor proclamations, and regional trade corridor protocols.",
      "Proven ability to engage high-level government officials and industry executives diplomatically."
    ],
    applyEmail: "hr@etef.org.et"
  },
  "fleet-manager": {
    title: "Fleet Operations Manager",
    employer: "National Freight PLC (Member Organization)",
    type: "Full-Time",
    location: "Adama Operations Base, Ethiopia (with corridor travel)",
    category: "Logistics & Supply Chain Management",
    deadline: "20 October 2026",
    salary: "Attractive Corporate Package + Performance Incentives",
    overview: "National Freight PLC, a premier freight carrier and founding member of ETEF, is seeking an experienced Fleet Operations Manager to oversee daily deployment, telematics tracking, and preventative maintenance for a commercial fleet of 80+ heavy freight trucks.",
    responsibilities: [
      "Manage dispatching, route optimization, and turn-around times for freight movements between Modjo Dry Port, Addis Ababa, and Djibouti.",
      "Enforce fleet safety standards, pre-trip vehicle inspections, and speed governor monitoring via GPS telematics.",
      "Supervise garage maintenance teams, spare parts inventories, and tire replacement schedules.",
      "Oversee driver performance management, fatigue prevention protocols, and fuel consumption benchmarks.",
      "Ensure full compliance with commercial transit licenses, insurance policies, and cross-border transport permits."
    ],
    requirements: [
      "B.Sc. in Mechanical/Automotive Engineering, Logistics Management, or equivalent.",
      "At least 6 years of experience managing heavy commercial freight truck fleets in Ethiopia.",
      "Proficiency with modern GPS fleet tracking and telematics software.",
      "Demonstrated leadership capabilities and operational crisis management skills.",
      "Valid driving license and readiness to conduct regular corridor site inspections."
    ],
    applyEmail: "hr@etef.org.et"
  },
  "customs-liaison": {
    title: "Cross-Border Customs Liaison Officer",
    employer: "Ethio-Djibouti Logistics Corridor Desk (Partner Organization)",
    type: "Contract (1 Year Renewable)",
    location: "Dire Dawa / Dewele / Djibouti Corridor",
    category: "Legal, Logistics & Customs Compliance",
    deadline: "18 October 2026",
    salary: "Competitive Corridor Grade + Field Allowance",
    overview: "The Customs Liaison Officer serves as the vital on-the-ground bridge between commercial transport operators, Ethiopian Customs Commission, Djibouti Port Authority, and transit checkpoint authorities to expedite cargo movement and resolve compliance disputes.",
    responsibilities: [
      "Facilitate rapid resolution of customs documentation holds, transit seals verification, and cargo inspection delays for member convoys.",
      "Liaise with customs officers at border entry points (Galafi, Dewele) and dry port gates.",
      "Report corridor bottlenecks, arbitrary inspection fees, or driver security concerns to ETEF's Central Corridor Taskforce.",
      "Assist carrier dispatchers in ensuring manifest accuracy and transit bond compliance.",
      "Conduct quarterly compliance orientation sessions for commercial cross-border truck drivers."
    ],
    requirements: [
      "Degree or Diploma in Customs Clearance, International Trade, Logistics, or Business Administration.",
      "Minimum 4 years of operational experience working along the Ethio-Djibouti trade corridor.",
      "Deep understanding of ASYCUDA++, single-window customs systems, and transit bond procedures.",
      "Strong communication skills in Amharic, Afar/Somali, and working French is advantageous.",
      "High integrity and proactive dispute resolution skills."
    ],
    applyEmail: "hr@etef.org.et"
  },
  "dispatch-coordinator": {
    title: "Regional Dispatch Coordinator",
    employer: "Safeway Bus Services (Member Organization)",
    type: "Full-Time",
    location: "Hawassa Regional Terminal, Sidama, Ethiopia",
    category: "Passenger Transit & Customer Operations",
    deadline: "25 October 2026",
    salary: "Competitive Base + Housing Allowance",
    overview: "Safeway Bus Services, an established inter-city passenger carrier, requires a Regional Dispatch Coordinator at its Hawassa hub to manage schedule integrity, passenger safety, ticketing coordination, and driver rotations across southern transit corridors.",
    responsibilities: [
      "Coordinate departures, arrivals, and passenger boarding at Hawassa Central Bus Terminal.",
      "Monitor driver duty rosters, breathalyzer sobriety verifications, and speed compliance.",
      "Manage roadside assistance dispatch and backup vehicle mobilization in case of mechanical emergencies.",
      "Maintain liaison with Hawassa City Transport Bureau and regional police commands.",
      "Oversee ticketing records reconciliation and passenger customer service desks."
    ],
    requirements: [
      "Diploma or Bachelor's Degree in Transport Management, Business Administration, or related discipline.",
      "3+ years experience in public passenger bus terminal operations or fleet dispatching.",
      "Strong verbal communication skills in Amharic and Sidaamu Afoo.",
      "Ability to remain calm under pressure and handle customer inquiries professionally.",
      "Basic computer literacy for schedule and passenger reporting."
    ],
    applyEmail: "hr@etef.org.et"
  }
};

export const jobsAm: Record<string, JobDetail> = {
  "advocacy-officer": {
    title: "ከፍተኛ የፖሊሲ እና የጥብቅና ኦፊሰር",
    employer: "የኢትራአፌ ዋና ጽሕፈት ቤት",
    type: "ሙሉ ጊዜ (ቋሚ)",
    location: "አዲስ አበባ፣ ኢትዮጵያ (ቂርቆስ ክፍለ ከተማ)",
    category: "ፖሊሲ፣ ሕግ እና የመንግሥት ግንኙነት",
    deadline: "ጥቅምት 05 ቀን 2017 ዓ.ም",
    salary: "ተወዳዳሪ የፌዴሬሽን ደመወዝ + ጥቅማጥቅሞች",
    overview: "ከፍተኛ የፖሊሲ እና የጥብቅና ኦፊሰሩ የፌዴሬሽኑን የምርምር እና የሕግ አውጪ ውክልና በመምራት የአሠሪዎችን መብት ለማስከበርና ዘመናዊ የሎጂስቲክስ ደረጃዎችን ለማስፋፋት ከፌዴራል ሚኒስቴር መስሪያ ቤቶች፣ ከሕዝብ ተወካዮች ምክር ቤት እና ከክልል ትራንስፖርት ቢሮዎች ጋር ተቀራርቦ ይሰራል/ትሰራለች።",
    responsibilities: [
      "የትራንስፖርት አሠሪዎችን የሚመለከቱ የፌዴራል እና የክልል ረቂቅ ሕጎችን፣ የታክስ ፖሊሲዎችን እና የሠራተኛ ደንቦችን መተንተን",
      "በታሪፍ፣ በመንገድ ደህንነት እና በሁለገብ የኮሪደር ስራዎች ዙሪያ የፖሊሲ ሰነዶችን እና የውሳኔ ሃሳቦችን ማዘጋጀት",
      "ከመንግሥት አካላት እና ከሠራተኛ ማኅበራት ጋር በሚደረጉ የሦስትዮሽ የምክክር መድረኮች ላይ ፌዴሬሽኑን መወከል",
      "የባለድርሻ አካላት ወርክሾፖችን፣ የምክክር መድረኮችን እና ዓመታዊውን የትራንስፖርት ሲምፖዚየም ማስተባበር",
      "ለአባል የክልል ማኅበራት እና ለሎጂስቲክስ ድርጅቶች የሕግና የደንብ መመሪያ ድጋፍ መስጠት"
    ],
    requirements: [
      "በሕግ (ኤልኤልቢ/ኤልኤልኤም)፣ በሕዝብ ፖሊሲ፣ በትራንስፖርት ኢኮኖሚክስ ወይም በተዛማጅ መስክ ማስተርስ ወይም የመጀመሪያ ዲግሪ",
      "በኢትዮጵያ ውስጥ በፖሊሲ ጥብቅና፣ በሕግ ትንተና ወይም በማኅበራት አስተዳደር ቢያንስ የ5 ዓመታት የስራ ልምድ",
      "በአማርኛ እና በእንግሊዝኛ ቋንቋዎች የተካነ እንዲሁም የላቀ የሕግ ሰነድ ዝግጅት እና የንግግር ችሎታ ያለው/ያላት",
      "ስለ ኢትዮጵያ የትራንስፖርት ሕጎች፣ የሠራተኛ አዋጆች እና የንግድ ኮሪደር ስምምነቶች ጥልቅ ዕውቀት",
      "ከከፍተኛ የመንግሥት ኃላፊዎች እና ከኢንዱስትሪ መሪዎች ጋር በዲፕሎማሲያዊ መንገድ የመስራት የተረጋገጠ ብቃት"
    ],
    applyEmail: "hr@etef.org.et"
  },
  "fleet-manager": {
    title: "የተሽከርካሪዎች ኦፕሬሽን ሥራ አስኪያጅ",
    employer: "ብሔራዊ የደረቅ ጭነት ኃ/የተ/የግ/ማኅበር (አባል ድርጅት)",
    type: "ሙሉ ጊዜ",
    location: "አዳማ ኦፕሬሽን ማዕከል (የኮሪደር ጉዞ ያለው)",
    category: "ሎጂስቲክስና የአቅርቦት ሰንሰለት አስተዳደር",
    deadline: "ጥቅምት 10 ቀን 2017 ዓ.ም",
    salary: "ማራኪ የኮርፖሬት ጥቅል + የአፈፃፀም ማበረታቻ",
    overview: "ቀዳሚ የጭነት አጓጓዥ እና የኢትራአፌ መሥራች አባል የሆነው ብሔራዊ የደረቅ ጭነት ኃ/የተ/የግ/ማኅበር፣ ከ80 በላይ ከባድ የጭነት ተሽከርካሪዎችን ዕለታዊ ስምሪት፣ የቴሌማቲክስ ክትትል እና የቅድመ መከላከል ጥገናን በበላይነት የሚመራ ልምድ ያለው የኦፕሬሽን ሥራ አስኪያጅ ይፈልጋል።",
    responsibilities: [
      "በሞጆ ደረቅ ወደብ፣ በአዲስ አበባ እና በጅቡቲ መካከል የጭነት እንቅስቃሴን ስምሪት፣ የመስመር ቅልጥፍናን እና የመመለሻ ጊዜን ማስተዳደር",
      "የፍሊት ደህንነት ደረጃዎችን፣ የቅድመ ጉዞ ፍተሻን እና የፍጥነት ገደብ መቆጣጠሪያዎችን በጂፒኤስ ቴክኖሎጂ መከታተል",
      "የጋራዥ ጥገና ቡድኖችን፣ የመለዋወጫ ዕቃዎች ክምችትን እና የጎማ ቅያሬ መርሃ ግብሮችን በበላይነት መቆጣጠር",
      "የአሽከርካሪዎች አፈፃፀም፣ የድካም መከላከያ ስርዓት እና የነዳጅ ፍጆታ ቁጥጥርን ማስተዳደር",
      "የንግድ ትራንዚት ፈቃዶችን፣ የኢንሹራንስ ፖሊሲዎችን እና ድንበር ተሻጋሪ ፈቃዶችን ሕጋዊ ተገዢነት ማረጋገጥ"
    ],
    requirements: [
      "በሜካኒካል/አውቶሞቲቭ ምህንድስና፣ በሎጂስቲክስ ማኔጅመንት ወይም በተመሳሳይ መስክ የመጀመሪያ ዲግሪ",
      "በኢትዮጵያ ውስጥ ከባድ የንግድ ጭነት ተሽከርካሪዎችን በማስተዳደር ቢያንስ የ6 ዓመታት የስራ ልምድ",
      "ዘመናዊ የጂፒኤስ የፍሊት ክትትል እና የቴሌማቲክስ ሶፍትዌሮችን የመጠቀም ከፍተኛ ብቃት",
      "የተረጋገጠ የአመራር ብቃት እና በድንገተኛ የስራ ቀውሶች ወቅት ፈጣን ውሳኔ የመስጠት ችሎታ",
      "ሕጋዊ የመንጃ ፈቃድ እና መደበኛ የኮሪደር የመስክ ፍተሻዎችን ለማድረግ ዝግጁ የሆነ/የሆነች"
    ],
    applyEmail: "hr@etef.org.et"
  },
  "customs-liaison": {
    title: "የድንበር ተሻጋሪ ጉምሩክ ግንኙነት ኦፊሰር",
    employer: "የኢትዮ-ጅቡቲ የሎጂስቲክስ ኮሪደር ዴስክ (አጋር ተቋም)",
    type: "ውል (በየዓመቱ የሚታደስ)",
    location: "ድሬዳዋ / ደወሌ / ጅቡቲ ኮሪደር",
    category: "ሕግ፣ ሎጂስቲክስ እና የጉምሩክ አሰራር",
    deadline: "ጥቅምት 08 ቀን 2017 ዓ.ም",
    salary: "ተወዳዳሪ የኮሪደር አበል + የመስክ ክፍያ",
    overview: "የጉምሩክ ግንኙነት ኦፊሰሩ በትራንስፖርት ኦፕሬተሮች፣ በኢትዮጵያ ጉምሩክ ኮሚሽን፣ በጅቡቲ ወደብ ባለስልጣን እና በኬላ ተቆጣጣሪዎች መካከል የዕቃ እንቅስቃሴን ለማፋጠን እና የአሰራር ውዝግቦችን ለመፍታት በመሬት ላይ እንደ ቁልፍ አገናኝ ድልድይ ሆኖ ያገለግላል።",
    responsibilities: [
      "ለአባል ድርጅቶች የጉምሩክ ሰነድ ማጣራት፣ የትራንዚት ማህተም ፍተሻ እና የካርጎ መዘግየቶች ፈጣን እልባት እንዲያገኙ ማመቻቸት",
      "በድንበር መግቢያ ኬላዎች (ገላፊ፣ ደወሌ) እና በደረቅ ወደብ በሮች ከሚገኙ የጉምሩክ ኃላፊዎች ጋር ተቀራርቦ መስራት",
      "የኮሪደር ማነቆዎችን፣ ያልተገቡ የፍተሻ ክፍያዎችን ወይም የአሽከርካሪዎች የደህንነት ስጋቶችን ለኢትራአፌ ኮሪደር ግብረ-ኃይል ማሳወቅ",
      "የማኒፌስት ትክክለኛነትን እና የትራንዚት ቦንድ ተገዢነትን ለማረጋገጥ የአጓጓዦችን ስምሪት ክፍሎች ማገዝ",
      "ለድንበር ተሻጋሪ ከባድ የጭነት አሽከርካሪዎች የየሩብ ዓመቱን የሕግ ተገዢነት ገለጻ ማዘጋጀት"
    ],
    requirements: [
      "በጉምሩክ ክሊራንስ፣ በዓለም አቀፍ ንግድ፣ በሎጂስቲክስ ወይም በንግድ አስተዳደር ዲግሪ ወይም ዲፕሎማ",
      "በኢትዮ-ጅቡቲ የንግድ ኮሪደር መስመር ላይ በመስራት ቢያንስ የ4 ዓመታት የተግባር ልምድ",
      "ስለ አሲኩዳ (ASYCUDA++)፣ ስለ ነጠላ መስኮት የጉምሩክ አሰራር እና የትራንዚት ቦንድ ስርዓት ጥልቅ ዕውቀት",
      "በአማርኛ፣ በአፋርኛ/ሶማሊኛ እና በመሰረታዊ ፈረንሳይኛ ቋንቋ መግባባት መቻል ተጨማሪ ጠቀሜታ አለው",
      "ከፍተኛ የታማኝነት ስነ-ምግባር እና ንቁ የችግር አፈታት ክህሎት"
    ],
    applyEmail: "hr@etef.org.et"
  },
  "dispatch-coordinator": {
    title: "የክልል የሥምሪት አስተባባሪ",
    employer: "ሴፍዌይ የአገር አቋራጭ አውቶቡስ አገልግሎት (አባል ድርጅት)",
    type: "ሙሉ ጊዜ",
    location: "ሀዋሳ ማዕከላዊ ተርሚናል፣ ሲዳማ፣ ኢትዮጵያ",
    category: "የተሳፋሪ ትራንስፖርት እና የደንበኞች አገልግሎት",
    deadline: "ጥቅምት 15 ቀን 2017 ዓ.ም",
    salary: "ተወዳዳሪ ደመወዝ + የቤት አበል",
    overview: "የተመሰረተ አገር አቋራጭ የተሳፋሪ አጓጓዥ የሆነው ሴፍዌይ የአውቶቡስ አገልግሎት በደቡብ የትራንዚት መስመሮች ላይ የሰዓት አክባሪነትን፣ የተሳፋሪዎችን ደህንነት፣ የቲኬት አሰራርን እና የአሽከርካሪዎች ፈረቃን ለማስተዳደር በሀዋሳ ማዕከሉ የክልል ስምሪት አስተባባሪ ይፈልጋል።",
    responsibilities: [
      "በሀዋሳ ማዕከላዊ አውቶቡስ ተርሚናል የተሽከርካሪዎች መነሻ፣ መድረሻ እና የተሳፋሪዎች አሳፋሪነት ስራዎችን ማስተባበር",
      "የአሽከርካሪዎችን የሥራ ፈረቃ፣ የአልኮል ምርመራ እና የፍጥነት ደንብ አከባበርን መከታተል",
      "የሜካኒካል ብልሽት በሚያጋጥምበት ወቅት የመንገድ ላይ ፈጣን እርዳታን እና የመጠባበቂያ ተሽከርካሪ ስምሪትን ማስተባበር",
      "ከሀዋሳ ከተማ ትራንስፖርት ቢሮ እና ከክልል ፖሊስ መምሪያ ጋር ግንኙነት መጠበቅ",
      "የቲኬት ሽያጭ መረጃዎችን እና የተሳፋሪዎች ቅሬታ ማስተናገጃ ጠረጴዛን በበላይነት መቆጣጠር"
    ],
    requirements: [
      "በትራንስፖርት ማኔጅመንት፣ በቢዝነስ አስተዳደር ወይም በተመሳሳይ መስክ ዲፕሎማ ወይም የመጀመሪያ ዲግሪ",
      "በሕዝብ ተሳፋሪ አውቶቡስ ተርሚናል ኦፕሬሽን ወይም በፍሊት ስምሪት ቢያንስ የ3 ዓመታት ልምድ",
      "በአማርኛ እና በሲዳሙ አፎ ቋንቋዎች ጠንካራ የመግባባት ችሎታ",
      "በተጨናነቀ የስራ ሁኔታ ውስጥ ተረጋግቶ የመስራት እና የደንበኞችን ጥያቄ በሙያዊ መንገድ የማስተናገድ ችሎታ",
      "ለመርሃ ግብር እና ለተሳፋሪዎች ሪፖርት መሰረታዊ የኮምፒውተር ዕውቀት ያለው/ያላት"
    ],
    applyEmail: "hr@etef.org.et"
  }
};

export const jobs = jobsEng;

// ==========================================
// 4. CORRIDOR DETAILS (ENGLISH & AMHARIC)
// ==========================================
export const corridorAdvisoriesEng: Record<string, CorridorDetail> = {
  djibouti: {
    name: "Ethio-Djibouti Trade Corridor (Galafi & Dewele)",
    image: "/images/corridor_djibouti.jpg",
    status: "Normal Flow • Operational",
    badgeClass: "bg-primary-50 text-primary-700 border border-primary-200",
    summary: "The nation's paramount commercial corridor handling over 90% of Ethiopia's sea-borne international trade. Dual highway connections operate 24/7 with automated customs manifest reconciliation.",
    transitHours: "42–48 Hours (Addis Ababa to Doraleh Container Terminal)",
    clearanceHours: "4.2 Hours average OSBP clearance at Galafi",
    keyCheckpoints: [
      "Addis Ababa – Adama Expressway Toll Gates (Smooth Flow)",
      "Mojo Junction & Dry Port Terminal Connection",
      "Awash 7 Kilo Weighbridge & Inspection Post",
      "Semera Commercial Vehicle Monitoring Center",
      "Mille – Galafi One-Stop Border Post (OSBP)"
    ],
    advisories: [
      "Night convoy transits permitted for heavy multi-axle freight with verified telematics",
      "Strict axle-load limits enforced under MoTL Directive No. 44; calibration checks at Semera",
      "Galafi E-Single Window pre-registration mandatory prior to border gate arrival"
    ],
    helpline: "+251 11 4717787 (Galafi Desk Ext 104)"
  },
  modjo: {
    name: "Modjo Multimodal Dry Port & Container Logistics Hub",
    image: "/images/corridor_modjo.jpg",
    status: "Active Dispatch • 74% Capacity",
    badgeClass: "bg-primary-50 text-primary-700 border border-primary-200",
    summary: "Ethiopia's primary multimodal inland port connected via electrified standard gauge railway (EDR) directly to the Port of Djibouti. Reefer and dry container handling running on regular shifts.",
    transitHours: "Daily Rail Shuttle: 12 Hours Transit to Coast",
    clearanceHours: "Green Channel Customs: 8–12 Hours Average",
    keyCheckpoints: [
      "Gate 1: Inbound Container Truck Staging Yard",
      "Gate 2: Empty Container Depot & Return Bay",
      "Customs Green & Blue Channel Scanner Facilities",
      "Rail Cargo Loading Platform & Gantry Tracks"
    ],
    advisories: [
      "Heavy container haulers must present Electronic Customs Transit Documents (ECTD)",
      "Refrigerated container plug-ins operating with backup generator redundancy",
      "Expedited turnaround available for registered ETEF member freight forwarders"
    ],
    helpline: "+251 11 4717787 (Modjo Dry Port Bureau Ext 106)"
  },
  moyale: {
    name: "Moyale One-Stop Border Post & Lamu Port Corridor (Kenya)",
    image: "/images/corridor_moyale.jpg",
    status: "Normal Flow • Commercial Transit Open",
    badgeClass: "bg-primary-50 text-primary-700 border border-primary-200",
    summary: "Strategic bilateral trade gateway between Ethiopia and Kenya. Supports agricultural exports, commercial transit goods, cross-border bus transport, and petroleum logistics.",
    transitHours: "55–60 Hours (Addis Ababa – Moyale – Nairobi)",
    clearanceHours: "3.0 Hours Average at Joint Customs Facility",
    keyCheckpoints: [
      "Hawassa Southbound Commercial Weighbridge",
      "Dilla – Yabello Trans-African Highway Section",
      "Moyale Integrated One-Stop Border Inspection Facility",
      "Marsabit – Isiolo Transit Corridor"
    ],
    advisories: [
      "COMESA Yellow Card Insurance and bilateral carrier permits required",
      "Livestock and phytosanitary transit checkpoints operating normal daylight shifts",
      "Cross-border intercity buses subject to joint immigration checks"
    ],
    helpline: "+251 11 4717787 (Southern Gateway Desk Ext 108)"
  },
  berbera: {
    name: "Berbera Port Logistics Corridor (Tog Wajaale – Dire Dawa)",
    image: "/images/corridor_berbera.jpg",
    status: "Freight Scaling • Upgrades Active",
    badgeClass: "bg-slate-100 text-slate-800 border border-slate-300",
    summary: "Rapidly expanding alternative trade corridor connecting eastern Ethiopia with the deepwater Port of Berbera. New highway segments facilitate heavy container transport.",
    transitHours: "30–36 Hours (Dire Dawa – Berbera)",
    clearanceHours: "5.5 Hours Average at Tog Wajaale Customs",
    keyCheckpoints: [
      "Dire Dawa Free Trade Zone Junction",
      "Harar – Babile Highway Segment",
      "Jijiga Transit Weighbridge",
      "Tog Wajaale Customs Inspection Yard"
    ],
    advisories: [
      "Section 2 road paving active; commercial drivers advised to adhere to 60 km/h work-zone limits",
      "Direct container clearance now operational through Dire Dawa Dry Port",
      "ETEF liaison officers stationed at Tog Wajaale for member assistance"
    ],
    helpline: "+251 11 4717787 (Eastern Corridor Desk Ext 109)"
  }
};

export const corridorAdvisoriesAm: Record<string, CorridorDetail> = {
  djibouti: {
    name: "የኢትዮ-ጅቡቲ የንግድ ኮሪደር (ገላፊ እና ደወሌ)",
    image: "/images/corridor_djibouti.jpg",
    status: "መደበኛ እንቅስቃሴ • አገልግሎት ላይ",
    badgeClass: "bg-primary-50 text-primary-700 border border-primary-200",
    summary: "ከ90% በላይ የሚሆነውን የኢትዮጵያን የወደብ የውጭ ንግድ የሚያስተናግደው የሀገሪቱ ዋና የንግድ ኮሪደር። አውራ ጎዳናዎቹ በራስ-ሰር የጉምሩክ ስርዓት 24/7 አገልግሎት ይሰጣሉ።",
    transitHours: "ከ42–48 ሰዓታት (አዲስ አበባ እስከ ዶራሌ ኮንቴይነር ተርሚናል)",
    clearanceHours: "4.2 ሰዓታት አማካይ የጋራ ድንበር ፍተሻ በገላፊ",
    keyCheckpoints: [
      "አዲስ አበባ – አዳማ የፍጥነት መንገድ የክፍያ ኬላዎች (ክፍት እንቅስቃሴ)",
      "ሞጆ መገናኛ እና የደረቅ ወደብ ተርሚናል መስመር",
      "አዋሽ 7 ኪሎ ሚዛን ጣቢያ እና የፍተሻ ኬላ",
      "ሰመራ የንግድ ተሽከርካሪዎች ክትትል ማዕከል",
      "ሚሌ – ገላፊ የአንድ ማዕከል የድንበር ኬላ"
    ],
    advisories: [
      "የጂፒኤስ ቴክኖሎጂ ላላቸው ከባድ ባለብዙ አክስል የጭነት ተሽከርካሪዎች የሌሊት ጉዞ ተፈቅዷል",
      "በትራንስፖርት ሚኒስቴር መመሪያ ቁጥር 44 መሠረት ጥብቅ የአክስል ክብደት ቁጥጥር በሰመራ ይካሄዳል",
      "ድንበር ከመድረስ በፊት በገላፊ የኤሌክትሮኒክስ መረጃ ቅድመ-ምዝገባ ማድረግ ግዴታ ነው"
    ],
    helpline: "+251 11 4717787 (የገላፊ ዴስክ የውስጥ መስመር 104)"
  },
  modjo: {
    name: "የሞጆ ሁለገብ የደረቅ ወደብ እና የኮንቴይነር ሎጂስቲክስ ማዕከል",
    image: "/images/corridor_modjo.jpg",
    status: "ንቁ ስምሪት • 74% አቅም",
    badgeClass: "bg-primary-50 text-primary-700 border border-primary-200",
    summary: "በኤሌክትሪክ ባቡር መስመር በቀጥታ ከጅቡቲ ወደብ ጋር የተገናኘ የኢትዮጵያ ቀዳሚ ሁለገብ የደረቅ ወደብ። የቀዘቀዙ እና ደረቅ ኮንቴይነሮች በፈረቃ ይስተናገዳሉ።",
    transitHours: "የዕለት የባቡር ጉዞ፦ 12 ሰዓታት እስከ ወደብ",
    clearanceHours: "የአረንጓዴ መስመር ጉምሩክ፦ በአማካይ ከ8–12 ሰዓታት",
    keyCheckpoints: [
      "በር 1፦ ገቢ የኮንቴይነር የጭነት መኪኖች ማቆሚያ ግቢ",
      "በር 2፦ ባዶ ኮንቴይነሮች ማስረከቢያ እና መቀበያ ግቢ",
      "የጉምሩክ አረንጓዴ እና ሰማያዊ መስመር የፍተሻ ስካነር",
      "የባቡር ጭነት መጫኛ መድረክ እና የክሬን መስመሮች"
    ],
    advisories: [
      "ከባድ የኮንቴይነር ጫኚዎች የኤሌክትሮኒክስ የጉምሩክ ትራንዚት ሰነድ ማቅረብ አለባቸው",
      "የቀዘቀዙ ኮንቴይነሮች የኤሌክትሪክ ተሰኪዎች በአስተማማኝ ጀነሬተር ይሰራሉ",
      "ለተመዘገቡ የኢትራአፌ አባል የጭነት አስተላላፊዎች ፈጣን የማስተናገጃ ቅድሚያ ይሰጣል"
    ],
    helpline: "+251 11 4717787 (የሞጆ ደረቅ ወደብ ቢሮ የውስጥ መስመር 106)"
  },
  moyale: {
    name: "የሞያሌ የጋራ ድንበር ጣቢያ እና የላሙ ወደብ ኮሪደር (ኬንያ)",
    image: "/images/corridor_moyale.jpg",
    status: "መደበኛ እንቅስቃሴ • የንግድ ትራንዚት ክፍት",
    badgeClass: "bg-primary-50 text-primary-700 border border-primary-200",
    summary: "በኢትዮጵያ እና በኬንያ መካከል ስትራቴጂካዊ የሁለትዮሽ የንግድ በር። የግብርና ምርቶችን፣ የንግድ ትራንዚት እቃዎችን እና ድንበር ተሻጋሪ አውቶቡሶችን ያስተናግዳል።",
    transitHours: "ከ55–60 ሰዓታት (አዲስ አበባ – ሞያሌ – ናይሮቢ)",
    clearanceHours: "3.0 ሰዓታት አማካይ የጋራ ጉምሩክ ፍተሻ",
    keyCheckpoints: [
      "ሀዋሳ የደቡብ አቅጣጫ የንግድ ሚዛን ጣቢያ",
      "ዲላ – ያቤሎ የትራንስ-አፍሪካ አውራ ጎዳና",
      "የሞያሌ የተቀናጀ የአንድ ማዕከል የድንበር ፍተሻ ጣቢያ",
      "ማርሳቢት – ኢሲዮሎ የትራንዚት መስመር"
    ],
    advisories: [
      "የኮሜሳ ቢጫ ካርድ ኢንሹራንስ እና የሁለትዮሽ የትራንስፖርት ፈቃድ ያስፈልጋል",
      "የእንስሳት እና የዕፅዋት ፍተሻ ጣቢያዎች በመደበኛ የቀን ክፍለ ጊዜ ይሰራሉ",
      "ድንበር ተሻጋሪ አገር አቋራጭ አውቶቡሶች በጋራ የኢሚግሬሽን ፍተሻ ያልፋሉ"
    ],
    helpline: "+251 11 4717787 (የደቡብ በር ዴስክ የውስጥ መስመር 108)"
  },
  berbera: {
    name: "የበርበራ ወደብ የሎጂስቲክስ ኮሪደር (ቶግ ዋጫሌ – ድሬዳዋ)",
    image: "/images/corridor_berbera.jpg",
    status: "የጭነት ዕድገት • የማሻሻያ ሥራ ላይ",
    badgeClass: "bg-slate-100 text-slate-800 border border-slate-300",
    summary: "ምስራቅ ኢትዮጵያን ከበርበራ ጥልቅ ወደብ ጋር የሚያገናኝ አማራጭ የንግድ ኮሪደር። አዳዲስ የአስፋልት መስመሮች ከባድ የኮንቴይነር ትራንስፖርትን ያቀላጥፋሉ።",
    transitHours: "ከ30–36 ሰዓታት (ድሬዳዋ – በርበራ)",
    clearanceHours: "5.5 ሰዓታት አማካይ በቶግ ዋጫሌ ጉምሩክ",
    keyCheckpoints: [
      "የድሬዳዋ ነፃ የንግድ ቀጠና መገናኛ",
      "ሐረር – ባቢሌ የአውራ ጎዳና መስመር",
      "ጅጅጋ የትራንዚት ሚዛን ጣቢያ",
      "ቶግ ዋጫሌ የጉምሩክ ፍተሻ ግቢ"
    ],
    advisories: [
      "የክፍል 2 የመንገድ ንጣፍ ሥራ በመከናወን ላይ ስለሆነ አሽከርካሪዎች በሰዓት 60 ኪ.ሜ የፍጥነት ገደብ እንዲያከብሩ ይመከራል",
      "በድሬዳዋ ደረቅ ወደብ በኩል የቀጥታ የኮንቴይነር ፍተሻ አገልግሎት መስጠት ጀምሯል",
      "ለአባላት ድጋፍ ለመስጠት የኢትራአፌ ተወካዮች በቶግ ዋጫሌ ተመድበዋል"
    ],
    helpline: "+251 11 4717787 (የምስራቅ ኮሪደር ዴስክ የውስጥ መስመር 109)"
  }
};

export const corridorAdvisories = corridorAdvisoriesEng;

// ==========================================
// 5. MODAL SYSTEM SETUP & RENDERING
// ==========================================
export function setupModals(): void {
  let container = document.getElementById("etef-modal-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "etef-modal-container";
    container.className = "fixed inset-0 z-[100] hidden items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto";
    document.body.appendChild(container);
  }

  container.addEventListener("click", (e) => {
    if (e.target === container) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });
}

export function closeModal(): void {
  const container = document.getElementById("etef-modal-container");
  if (container) {
    container.classList.add("hidden");
    container.classList.remove("flex");
    container.innerHTML = "";
    document.body.style.overflow = "";
  }
}

// ------------------------------------------
// 5.1 Bio Modal (100% English or 100% Amharic)
// ------------------------------------------
export function openBioModal(bioId: string): void {
  const lang = getCurrentLang();
  const isAm = lang === "አማ";
  const source = isAm ? boardBiosAm : boardBiosEng;
  const detail = source[bioId] || source.berehane;
  if (!detail) return;

  const container = document.getElementById("etef-modal-container");
  if (!container) return;

  const closeAria = isAm ? "የሕይወት ታሪክ መስኮት ዝጋ" : "Close dialog";
  const headingBio = isAm ? "የሥራ አስፈጻሚው የሕይወት ታሪክ" : "Executive Biography";
  const headingPortfolios = isAm ? "ዋና ዋና የፌዴሬሽኑ የሥራ ኃላፊነቶች፦" : "Key Federation Portfolios:";
  const closeBtnText = isAm ? "የሕይወት ታሪክ ዝጋ" : "Close Biography";

  container.innerHTML = `
    <div class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative animate-in fade-in zoom-in-95 duration-200">
      <button type="button" class="modal-close-btn absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer border-none" aria-label="${closeAria}">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>

      <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-slate-100">
        <img src="${detail.image}" alt="${detail.name}" class="w-28 h-28 sm:w-32 sm:h-32 rounded-lg object-cover object-top shadow-md border-2 border-white ring-2 ring-primary-100 shrink-0">
        <div class="text-center sm:text-left">
          <span class="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full mb-2 uppercase tracking-wider">${detail.role}</span>
          <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">${detail.name}</h2>
          <p class="text-sm font-semibold text-slate-600 mt-1">${detail.org}</p>
          <div class="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-3 text-xs text-slate-500">
            <span class="flex items-center gap-1.5"><i class="fa-solid fa-briefcase text-primary-600"></i> ${detail.experience}</span>
            <span class="flex items-center gap-1.5"><i class="fa-solid fa-graduation-cap text-primary-600"></i> ${detail.education}</span>
          </div>
        </div>
      </div>

      <div class="mt-6 space-y-4 text-slate-700 text-sm leading-relaxed">
        <h3 class="font-bold text-slate-900 text-base">${headingBio}</h3>
        ${detail.bio.map(p => `<p>${p}</p>`).join("")}
      </div>

      <div class="mt-6 pt-6 border-t border-slate-100">
        <h3 class="font-bold text-slate-900 text-sm mb-3">${headingPortfolios}</h3>
        <ul class="space-y-2">
          ${detail.responsibilities.map(r => `
            <li class="flex items-start gap-2.5 text-xs text-slate-600">
              <i class="fa-solid fa-circle-check text-primary-600 text-sm mt-0.5 shrink-0"></i>
              <span>${r}</span>
            </li>
          `).join("")}
        </ul>
      </div>

      <div class="mt-8 pt-4 flex justify-end">
        <button type="button" class="modal-close-btn px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-lg transition-colors cursor-pointer border-none">
          ${closeBtnText}
        </button>
      </div>
    </div>
  `;

  attachModalCloseHandlers(container);
  container.classList.remove("hidden");
  container.classList.add("flex");
  document.body.style.overflow = "hidden";
}

// ------------------------------------------
// 5.2 Article Modal (100% English or 100% Amharic)
// ------------------------------------------
export function openArticleModal(articleId: string): void {
  const lang = getCurrentLang();
  const isAm = lang === "አማ";
  const source = isAm ? articlesAm : articlesEng;
  const detail = source[articleId] || source["shared-road"];
  if (!detail) return;

  const container = document.getElementById("etef-modal-container");
  if (!container) return;

  const closeAria = isAm ? "ጽሑፉን ዝጋ" : "Close article";
  const authorPrefix = isAm ? "የተዘጋጀው በ፦" : "Authored by";
  const takeawayHeading = isAm ? "ዋና ዋና የፌዴሬሽኑ ግንዛቤዎች፦" : "Key Federation Takeaways:";
  const shareLabel = isAm ? "አጋራ፦" : "Share:";
  const closeBtnText = isAm ? "ንባቡን ጨርሻለሁ" : "Finished Reading";

  container.innerHTML = `
    <div class="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-10 relative animate-in fade-in zoom-in-95 duration-200">
      <button type="button" class="modal-close-btn absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer border-none" aria-label="${closeAria}">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>

      <div class="mb-6">
        <div class="flex items-center gap-2 text-xs font-semibold text-primary-600 uppercase tracking-wider mb-2">
          <span>${detail.category}</span>
          <span class="w-1 h-1 rounded-full bg-slate-300"></span>
          <span class="text-slate-500">${detail.date}</span>
          <span class="w-1 h-1 rounded-full bg-slate-300"></span>
          <span class="text-slate-500">${detail.readTime}</span>
        </div>
        <h1 class="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">${detail.title}</h1>
        <p class="text-xs text-slate-500 mt-2 flex items-center gap-2">
          <i class="fa-solid fa-feather-pointed text-primary-600"></i> ${authorPrefix} ${detail.author}
        </p>
      </div>

      <div class="rounded-lg overflow-hidden mb-6 h-64 sm:h-80 bg-slate-100">
        <img src="${detail.image}" alt="${detail.title}" class="w-full h-full object-cover">
      </div>

      <div class="space-y-4 text-slate-700 text-base leading-relaxed">
        ${detail.content.map(p => `<p>${p}</p>`).join("")}
      </div>

      <div class="mt-8 p-6 bg-slate-50 rounded-lg border border-slate-200">
        <h3 class="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
          <i class="fa-solid fa-lightbulb text-primary-600"></i> ${takeawayHeading}
        </h3>
        <ul class="space-y-2">
          ${detail.keyTakeaways.map(t => `
            <li class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
              <i class="fa-solid fa-check text-primary-600 text-sm mt-0.5 shrink-0"></i>
              <span>${t}</span>
            </li>
          `).join("")}
        </ul>
      </div>

      <div class="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-2 text-xs text-slate-500">
          <span>${shareLabel}</span>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-primary-50 text-slate-600 hover:text-primary-600 flex items-center justify-center transition-colors"><i class="fa-brands fa-x-twitter text-xs"></i></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-primary-50 text-slate-600 hover:text-primary-600 flex items-center justify-center transition-colors"><i class="fa-brands fa-linkedin-in text-xs"></i></a>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-primary-50 text-slate-600 hover:text-primary-600 flex items-center justify-center transition-colors"><i class="fa-brands fa-telegram text-xs"></i></a>
        </div>
        <button type="button" class="modal-close-btn px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold text-sm rounded-lg transition-colors cursor-pointer border-none shadow-sm">
          ${closeBtnText}
        </button>
      </div>
    </div>
  `;

  attachModalCloseHandlers(container);
  container.classList.remove("hidden");
  container.classList.add("flex");
  document.body.style.overflow = "hidden";
}

// ------------------------------------------
// 5.3 Job Modal (100% English or 100% Amharic)
// ------------------------------------------
export function openJobModal(jobId: string): void {
  const lang = getCurrentLang();
  const isAm = lang === "አማ";
  const source = isAm ? jobsAm : jobsEng;
  const detail = source[jobId] || source["advocacy-officer"];
  if (!detail) return;

  const container = document.getElementById("etef-modal-container");
  if (!container) return;

  const closeAria = isAm ? "የሥራ ዝርዝር መረጃ ዝጋ" : "Close job details";
  const labelLocation = isAm ? "የሥራ ቦታ" : "Location";
  const labelCategory = isAm ? "የሥራ ዘርፍ" : "Category";
  const labelDeadline = isAm ? "የማመልከቻ ማብቂያ ቀን" : "Application Deadline";
  const labelSalary = isAm ? "የክፍያ መጠን / ደመወዝ" : "Remuneration";
  const labelOverview = isAm ? "የሥራው አጠቃላይ መግለጫ" : "Role Overview";
  const labelResp = isAm ? "ዋና ዋና የሥራ ኃላፊነቶች" : "Key Responsibilities";
  const labelReq = isAm ? "ለተወዳዳሪዎች የሚያስፈልጉ መስፈርቶች" : "Candidate Requirements";
  const labelApplyTitle = isAm ? "ለሥራው ማመልከት ይፈልጋሉ?" : "Interested in applying?";
  const labelApplyDesc = isAm
    ? `እባክዎን የትምህርትና የስራ ልምድ ማስረጃዎን ወደ <a href="mailto:${detail.applyEmail}" class="underline font-bold">${detail.applyEmail}</a> በኢሜይል ይላኩ። በኢሜይሉ ርዕስ ላይ "${detail.title}" በማለት መጥቀስዎን አይርሱ።`
    : `Please send your CV, cover letter, and credentials to <a href="mailto:${detail.applyEmail}" class="underline font-bold">${detail.applyEmail}</a> citing "${detail.title}" in the subject line.`;
  const applyBtnText = isAm ? "በኢሜይል ያመልክቱ" : "Apply via Email";

  container.innerHTML = `
    <div class="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-10 relative animate-in fade-in zoom-in-95 duration-200">
      <button type="button" class="modal-close-btn absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer border-none" aria-label="${closeAria}">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>

      <div class="mb-6 pb-6 border-b border-slate-100">
        <div class="flex items-center gap-2 mb-2">
          <span class="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-md">${detail.employer}</span>
          <span class="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-md">${detail.type}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold text-slate-900">${detail.title}</h1>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 text-xs text-slate-600">
          <div>
            <span class="block text-slate-400 font-medium">${labelLocation}</span>
            <span class="font-bold text-slate-800">${detail.location}</span>
          </div>
          <div>
            <span class="block text-slate-400 font-medium">${labelCategory}</span>
            <span class="font-bold text-slate-800">${detail.category}</span>
          </div>
          <div>
            <span class="block text-slate-400 font-medium">${labelDeadline}</span>
            <span class="font-bold text-primary-700">${detail.deadline}</span>
          </div>
          <div>
            <span class="block text-slate-400 font-medium">${labelSalary}</span>
            <span class="font-bold text-slate-800">${detail.salary}</span>
          </div>
        </div>
      </div>

      <div class="mb-6">
        <h3 class="font-bold text-slate-900 text-base mb-2">${labelOverview}</h3>
        <p class="text-slate-600 text-sm leading-relaxed">${detail.overview}</p>
      </div>

      <div class="mb-6">
        <h3 class="font-bold text-slate-900 text-base mb-3">${labelResp}</h3>
        <ul class="space-y-2">
          ${detail.responsibilities.map(r => `
            <li class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
              <i class="fa-solid fa-circle-check text-primary-600 text-sm mt-0.5 shrink-0"></i>
              <span>${r}</span>
            </li>
          `).join("")}
        </ul>
      </div>

      <div class="mb-8">
        <h3 class="font-bold text-slate-900 text-base mb-3">${labelReq}</h3>
        <ul class="space-y-2">
          ${detail.requirements.map(r => `
            <li class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
              <i class="fa-solid fa-arrow-right text-slate-400 text-xs mt-1 shrink-0"></i>
              <span>${r}</span>
            </li>
          `).join("")}
        </ul>
      </div>

      <div class="p-6 bg-primary-50 rounded-lg border border-primary-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span class="font-bold text-primary-900 text-sm block">${labelApplyTitle}</span>
          <p class="text-xs text-primary-700 mt-0.5">${labelApplyDesc}</p>
        </div>
        <a href="mailto:${detail.applyEmail}?subject=Application for ${encodeURIComponent(detail.title)}" class="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold text-sm rounded-lg transition-colors shadow-sm whitespace-nowrap">
          ${applyBtnText}
        </a>
      </div>
    </div>
  `;

  attachModalCloseHandlers(container);
  container.classList.remove("hidden");
  container.classList.add("flex");
  document.body.style.overflow = "hidden";
}

// ------------------------------------------
// 5.4 Talent Registry Modal (100% English or 100% Amharic)
// ------------------------------------------
export function openTalentModal(): void {
  const lang = getCurrentLang();
  const isAm = lang === "አማ";

  const container = document.getElementById("etef-modal-container");
  if (!container) return;

  const closeAria = isAm ? "የምዝገባ መስኮት ዝጋ" : "Close dialog";
  const badgeTitle = isAm ? "የኢትራአፌ የባለሙያዎች ምዝገባ መዝገብ" : "ETEF Talent Registry";
  const modalTitle = isAm ? "የግል መረጃዎን / ሲቪዎን ያስገቡ" : "Submit Your Profile / CV";
  const modalDesc = isAm
    ? "የፌዴሬሽኑ ማዕከላዊ የባለሙያዎች ማውጫን ይቀላቀሉ። አባል ድርጅቶች ብቁ ሠራተኞችን ሲፈልጉ ፌዴሬሽኑ የተረጋገጡ ባለሙያዎችን በቀጥታ ያገናኛል።"
    : "Join our central candidate directory. When member freight, bus, or logistics operators seek qualified staff, ETEF connects verified talent directly.";

  const labelName = isAm ? "ሙሉ ስም" : "Full Name";
  const labelEmail = isAm ? "የኢሜይል አድራሻ" : "Email Address";
  const labelPhone = isAm ? "የስልክ ቁጥር" : "Phone Number";
  const labelField = isAm ? "የሙያ መስክ" : "Field of Expertise";
  const labelExp = isAm ? "የሥራ ልምድ ዓመታት" : "Years of Experience";
  const labelNotes = isAm ? "አጭር የሙያ ማጠቃለያ እና ልዩ የምስክር ወረቀቶች" : "Professional Summary & Key Certifications";
  const placeholderNotes = isAm
    ? "የቅርብ ጊዜ የሥራ ኃላፊነቶችዎን፣ የመንጃ ፈቃድ ደረጃዎን (ለምሳሌ፡ ሕዝብ 2፣ ደረቅ 3) ወይም የኮሪደር ልምድዎን በአጭሩ ይግለጹ..."
    : "Briefly describe your recent roles, licenses (e.g. Public 2, Heavy Freight), or special corridor experience...";
  const submitText = isAm ? "ወደ ባለሙያዎች ማውጫ አስገባ" : "Submit to Talent Registry";

  const fieldOptions = isAm
    ? `
      <option value="ሎጂስቲክስ እና የሥምሪት አስተዳደር">ሎጂስቲክስ እና የሥምሪት አስተዳደር</option>
      <option value="የተሽከርካሪዎች ጥገና / መካኒክ">የተሽከርካሪዎች ጥገና / መካኒክ</option>
      <option value="ባለሙያ የንግድ ተሽከርካሪ አሽከርካሪ">ባለሙያ የንግድ ተሽከርካሪ አሽከርካሪ</option>
      <option value="ፖሊሲ እና የሕግ ጉዳዮች">ፖሊሲ እና የሕግ ጉዳዮች</option>
      <option value="ፋይናንስ እና አስተዳደር">ፋይናንስ እና አስተዳደር</option>
    `
    : `
      <option value="Logistics & Dispatch">Logistics & Dispatch</option>
      <option value="Fleet Maintenance / Mechanic">Fleet Maintenance / Mechanic</option>
      <option value="Professional Commercial Driver">Professional Commercial Driver</option>
      <option value="Policy & Legal Affairs">Policy & Legal Affairs</option>
      <option value="Finance & Administration">Finance & Administration</option>
    `;

  const expOptions = isAm
    ? `
      <option value="ከ1–3 ዓመታት">ከ1–3 ዓመታት</option>
      <option value="ከ3–5 ዓመታት">ከ3–5 ዓመታት</option>
      <option value="ከ5–10 ዓመታት">ከ5–10 ዓመታት</option>
      <option value="ከ10 ዓመታት በላይ">ከ10 ዓመታት በላይ</option>
    `
    : `
      <option value="1-3 Years">1–3 Years</option>
      <option value="3-5 Years">3–5 Years</option>
      <option value="5-10 Years">5–10 Years</option>
      <option value="10+ Years">10+ Years</option>
    `;

  container.innerHTML = `
    <div class="bg-white rounded-lg max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative animate-in fade-in zoom-in-95 duration-200">
      <button type="button" class="modal-close-btn absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer border-none" aria-label="${closeAria}">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>

      <div class="mb-6">
        <span class="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full mb-2 uppercase tracking-wider">${badgeTitle}</span>
        <h2 class="text-2xl font-bold text-slate-900">${modalTitle}</h2>
        <p class="text-xs sm:text-sm text-slate-600 mt-1">${modalDesc}</p>
      </div>

      <form id="talent-registry-form" class="space-y-4">
        <div id="talent-form-feedback" class="hidden p-3 rounded-lg text-xs font-semibold"></div>

        <div>
          <label for="talent-name" class="block text-xs font-bold text-slate-700 mb-1">${labelName} <span class="text-red-500">*</span></label>
          <input type="text" id="talent-name" required placeholder="${isAm ? "ለምሳሌ፦ አልማዝ ታደሰ" : "e.g. Almaz Tadesse"}" class="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-primary-500 outline-none">
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label for="talent-email" class="block text-xs font-bold text-slate-700 mb-1">${labelEmail} <span class="text-red-500">*</span></label>
            <input type="email" id="talent-email" required placeholder="name@domain.com" class="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-primary-500 outline-none">
          </div>
          <div>
            <label for="talent-phone" class="block text-xs font-bold text-slate-700 mb-1">${labelPhone} <span class="text-red-500">*</span></label>
            <input type="tel" id="talent-phone" required placeholder="+251 911 00 0000" class="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-primary-500 outline-none">
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label for="talent-field" class="block text-xs font-bold text-slate-700 mb-1">${labelField} <span class="text-red-500">*</span></label>
            <select id="talent-field" required class="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-primary-500 outline-none bg-white">
              ${fieldOptions}
            </select>
          </div>
          <div>
            <label for="talent-exp" class="block text-xs font-bold text-slate-700 mb-1">${labelExp} <span class="text-red-500">*</span></label>
            <select id="talent-exp" required class="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-primary-500 outline-none bg-white">
              ${expOptions}
            </select>
          </div>
        </div>

        <div>
          <label for="talent-notes" class="block text-xs font-bold text-slate-700 mb-1">${labelNotes}</label>
          <textarea id="talent-notes" rows="3" placeholder="${placeholderNotes}" class="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-primary-500 outline-none resize-none"></textarea>
        </div>

        <div class="pt-2">
          <button type="submit" id="talent-submit-btn" class="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold text-sm rounded-lg transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer border-none">
            <span>${submitText}</span>
            <i class="fa-solid fa-arrow-right text-xs"></i>
          </button>
        </div>
      </form>
    </div>
  `;

  attachModalCloseHandlers(container);

  const form = container.querySelector<HTMLFormElement>("#talent-registry-form");
  const feedback = container.querySelector<HTMLElement>("#talent-form-feedback");
  const submitBtn = container.querySelector<HTMLButtonElement>("#talent-submit-btn");

  if (form && feedback && submitBtn) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitBtn.disabled = true;
      submitBtn.innerHTML = isAm
        ? '<span>በመመዝገብ ላይ...</span> <i class="fa-solid fa-spinner fa-spin text-xs"></i>'
        : '<span>Registering...</span> <i class="fa-solid fa-spinner fa-spin text-xs"></i>';

      setTimeout(() => {
        feedback.className = "p-3 rounded-lg text-xs font-semibold bg-primary-50 border border-primary-200 text-primary-800 flex items-center gap-2 mb-2";
        feedback.innerHTML = isAm
          ? '<i class="fa-solid fa-circle-check text-primary-600"></i> መረጃዎ በተሳካ ሁኔታ ተመዝግቧል! ክፍት የሥራ ቦታዎች ሲኖሩ የሰው ኃይል ቡድናችን ያነጋግርዎታል።'
          : '<i class="fa-solid fa-circle-check text-primary-600"></i> Profile Successfully Registered! Our HR team will reach out as matched vacancies open.';
        feedback.classList.remove("hidden");
        form.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = isAm
          ? '<span>በተሳካ ሁኔታ ገብቷል</span> <i class="fa-solid fa-check text-xs"></i>'
          : '<span>Submitted Successfully</span> <i class="fa-solid fa-check text-xs"></i>';
      }, 500);
    });
  }

  container.classList.remove("hidden");
  container.classList.add("flex");
  document.body.style.overflow = "hidden";
}

// ------------------------------------------
// 5.5 Corridor Modal (100% English or 100% Amharic)
// ------------------------------------------
export function openCorridorModal(corridorId: string): void {
  const lang = getCurrentLang();
  const isAm = lang === "አማ";
  const source = isAm ? corridorAdvisoriesAm : corridorAdvisoriesEng;
  const detail = source[corridorId] || source.djibouti;

  const container = document.getElementById("etef-modal-container");
  if (!container) return;

  const closeAria = isAm ? "የኮሪደር መረጃ መስኮት ዝጋ" : "Close Modal";
  const directorateTag = isAm ? "የኢትራአፌ ዋና ጽሕፈት ቤት የጭነት ሎጂስቲክስና የኮሪደር ክትትል ዳይሬክቶሬት" : "ETEF Secretariat Directorate of Freight Logistics & Corridor Watch";
  const labelTransit = isAm ? "አማካይ የትራንዚት ጊዜ" : "Transit Benchmark";
  const labelClearance = isAm ? "የጉምሩክ ፍተሻ ጊዜ" : "Customs Clearance";
  const headingCheckpoints = isAm ? "የመስመሩ የፍተሻ ጣቢያዎች" : "Operational Route Checkpoints";
  const headingAdvisories = isAm ? "ንቁ የትራንዚት መመሪያዎች እና ማሳሰቢያዎች" : "Active Transit Directives & Advisories";
  const labelHelpline = isAm ? "የኮሪደር ድንገተኛ አደጋ እና ብልሽት የእርዳታ መስመር" : "Corridor Incident & Breakdown Helpline";
  const callBtnText = isAm ? "ወደ ስምሪት ይደውሉ" : "Call Dispatch";

  container.innerHTML = `
    <div class="modal-backdrop fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50"></div>
    <div class="relative bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto z-50 shadow-2xl m-4 border border-slate-100 flex flex-col">
      <div class="relative h-52 sm:h-60 overflow-hidden rounded-t-3xl shrink-0 bg-slate-900">
        <img src="${detail.image}" alt="${detail.name}" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent"></div>
        <button class="modal-close-btn absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20 backdrop-blur-sm z-10" aria-label="${closeAria}">
          <i class="fa-solid fa-xmark text-sm"></i>
        </button>
        <div class="absolute bottom-4 left-6 right-6 text-white">
          <span class="px-2.5 py-1 rounded-full text-xs font-bold ${detail.badgeClass} shadow-md inline-block mb-2">${detail.status}</span>
          <h2 class="text-xl sm:text-2xl font-black text-white leading-tight drop-shadow-md">${detail.name}</h2>
          <span class="text-xs text-slate-300 block mt-1">${directorateTag}</span>
        </div>
      </div>

      <div class="p-6 sm:p-8 space-y-6">
        <div>
          <p class="text-sm text-slate-700 leading-relaxed">${detail.summary}</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
            <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">${labelTransit}</span>
            <span class="text-sm font-bold text-slate-800 mt-0.5 block">${detail.transitHours}</span>
          </div>
          <div class="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
            <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">${labelClearance}</span>
            <span class="text-sm font-bold text-primary-700 mt-0.5 block">${detail.clearanceHours}</span>
          </div>
        </div>

        <div>
          <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center gap-2">
            <i class="fa-solid fa-location-crosshairs text-primary-600"></i> ${headingCheckpoints}
          </h3>
          <div class="space-y-2">
            ${detail.keyCheckpoints.map(cp => `
              <div class="flex items-center gap-2.5 text-xs text-slate-700 bg-slate-50 px-3.5 py-2.5 rounded-lg border border-slate-200/80">
                <i class="fa-solid fa-location-dot text-primary-600 shrink-0"></i>
                <span class="font-medium">${cp}</span>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="p-4 rounded-lg bg-primary-50 border border-primary-200">
          <h3 class="text-xs font-bold text-primary-900 uppercase tracking-wider mb-2 flex items-center gap-2">
            <i class="fa-solid fa-triangle-exclamation text-primary-600"></i> ${headingAdvisories}
          </h3>
          <ul class="space-y-1.5 text-xs text-primary-800">
            ${detail.advisories.map(adv => `
              <li class="flex items-start gap-2">
                <i class="fa-solid fa-circle-check text-primary-600 text-xs mt-0.5 shrink-0"></i>
                <span>${adv}</span>
              </li>
            `).join("")}
          </ul>
        </div>

        <div class="p-4 rounded-lg bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <span class="text-[11px] text-slate-400 uppercase tracking-wider block">${labelHelpline}</span>
            <span class="text-sm font-bold text-white">${detail.helpline}</span>
          </div>
          <a href="tel:+251114717787" class="w-full sm:w-auto text-center px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white font-bold text-xs rounded-lg transition-colors shadow flex items-center justify-center gap-2">
            <i class="fa-solid fa-phone"></i>
            <span>${callBtnText}</span>
          </a>
        </div>
      </div>
    </div>
  `;

  attachModalCloseHandlers(container);
  container.classList.remove("hidden");
  container.classList.add("flex");
  document.body.style.overflow = "hidden";
}

// ------------------------------------------
// 5.6 Emergency Incident Report Modal (100% English or 100% Amharic)
// ------------------------------------------
export function openIncidentModal(): void {
  const lang = getCurrentLang();
  const isAm = lang === "አማ";

  const container = document.getElementById("etef-modal-container");
  if (!container) return;

  const closeAria = isAm ? "መስኮት ዝጋ" : "Close Modal";
  const modalTitle = isAm ? "የኢትራአፌ የኮሪደር አደጋ ሪፖርት ማቅረቢያ" : "ETEF Corridor Incident Report";
  const modalSubtitle = isAm ? "የ24/7 ብሔራዊ ድንገተኛ አደጋ እና ብልሽት ክትትል" : "24/7 National Emergency & Breakdown Watch";

  const labelCorridor = isAm ? "የኮሪደር መስመር *" : "Corridor Artery *";
  const labelCat = isAm ? "የአደጋው ዓይነት *" : "Incident Category *";
  const labelUrgency = isAm ? "የአስቸኳይነት ደረጃ *" : "Urgency Level *";
  const labelPlate = isAm ? "የተሽከርካሪ ታርጋ / የፍሊት ቁጥር *" : "Vehicle Plate / Fleet Number *";
  const labelPhone = isAm ? "የተገናኝ ስልክ ቁጥር *" : "Contact Phone Number *";
  const labelLocation = isAm ? "ትክክለኛ ቦታ / የቅርብ መለያ ምልክት *" : "Exact Location / Nearest Landmark *";
  const labelDetails = isAm ? "የሁኔታው አጭር መግለጫ *" : "Brief Description of Situation *";
  const placeholderDetails = isAm
    ? "የተፈጠረውን ችግር እና የሚያስፈልገውን ድጋፍ በግልጽ ይግለጹ..."
    : "Provide clear details on what happened and assistance needed...";
  const btnCancel = isAm ? "ሰርዝ" : "Cancel";
  const btnSubmit = isAm ? "የአደጋ ሪፖርቱን አስተላልፍ" : "Transmit Incident Report";

  const corridorOptions = isAm
    ? `
      <option value="የጅቡቲ – አዲስ አበባ የፍጥነት መንገድ">የጅቡቲ – አዲስ አበባ የፍጥነት መንገድ</option>
      <option value="የሞጆ ሁለገብ ደረቅ ወደብ ተርሚናል">የሞጆ ሁለገብ ደረቅ ወደብ ተርሚናል</option>
      <option value="የሞያሌ – ላሙ ኮሪደር (ኬንያ ድንበር)">የሞያሌ – ላሙ ኮሪደር (ኬንያ ድንበር)</option>
      <option value="የበርበራ – ድሬዳዋ ኮሪደር">የበርበራ – ድሬዳዋ ኮሪደር</option>
      <option value="ሌላ የሀገር ውስጥ የጭነት መስመር">ሌላ የሀገር ውስጥ የጭነት መስመር</option>
    `
    : `
      <option value="Djibouti – Addis Ababa">Djibouti – Addis Ababa Expressway</option>
      <option value="Modjo Dry Port">Modjo Multimodal Dry Port Terminal</option>
      <option value="Moyale – Lamu Corridor">Moyale – Lamu Corridor (Kenya OSBP)</option>
      <option value="Berbera – Dire Dawa">Berbera – Dire Dawa Corridor</option>
      <option value="Other Regional Highway">Other National Freight Artery</option>
    `;

  const categoryOptions = isAm
    ? `
      <option value="የመኪና ብልሽት / የቶዊንግ እርዳታ ጥያቄ">የመኪና ብልሽት / የቶዊንግ እርዳታ ጥያቄ</option>
      <option value="ያልተገባ ክፍያ / ሕገ-ወጥ የኬላ መዘግየት">ያልተገባ ክፍያ / ሕገ-ወጥ የኬላ መዘግየት</option>
      <option value="የጉምሩክ ሰነድ ማጣራት መዘግየት">የጉምሩክ ሰነድ ማጣራት መዘግየት</option>
      <option value="የመንገድ መበላሸት / የድልድይ መዘጋት">የመንገድ መበላሸት / የድልድይ መዘጋት</option>
      <option value="የአሽከርካሪ ደህንነት እና የፀጥታ ስጋት">የአሽከርካሪ ደህንነት እና የፀጥታ ስጋት</option>
    `
    : `
      <option value="Mechanical Breakdown">Mechanical Breakdown / Tow Request</option>
      <option value="Arbitrary Roadside Stoppage">Arbitrary Fee / Illegal Checkpoint Delay</option>
      <option value="Customs Documentation Bottleneck">Customs Single Window Hold</option>
      <option value="Road Damage / Obstruction">Road Washout / Bridge Obstruction</option>
      <option value="Security Alert">Driver Safety & Security Alert</option>
    `;

  const urgencyOptions = isAm
    ? `
      <option value="ከፍተኛ (አስቸኳይ ፈጣን ድጋፍ የሚያስፈልገው)">ከፍተኛ (አስቸኳይ ፈጣን ድጋፍ የሚያስፈልገው)</option>
      <option value="መካከለኛ (በ2 ሰዓታት ውስጥ)">መካከለኛ (በ2 ሰዓታት ውስጥ)</option>
      <option value="መደበኛ ምዝገባ ብቻ / የታሪፍ ቅሬታ">መደበኛ ምዝገባ ብቻ / የታሪፍ ቅሬታ</option>
    `
    : `
      <option value="High (Immediate Assistance)">High (Immediate Assistance Required)</option>
      <option value="Medium (Within 2 Hours)">Medium (Within 2 Hours)</option>
      <option value="Log Report Only">Log Report Only / Tariff Dispute</option>
    `;

  container.innerHTML = `
    <div class="modal-backdrop fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50"></div>
    <div class="relative bg-white rounded-lg max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 z-50 shadow-2xl m-4 border border-slate-100">
      <div class="flex items-center justify-between pb-4 border-b border-slate-100">
        <div class="flex items-center gap-2.5">
          <div class="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center text-lg">
            <i class="fa-solid fa-truck-medical"></i>
          </div>
          <div>
            <h2 class="text-lg font-bold text-slate-900">${modalTitle}</h2>
            <span class="text-xs text-slate-400 block mt-0.5">${modalSubtitle}</span>
          </div>
        </div>
        <button class="modal-close-btn w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer border-none" aria-label="${closeAria}">
          <i class="fa-solid fa-xmark text-sm"></i>
        </button>
      </div>

      <div id="incident-report-feedback" class="hidden mb-4 p-4 rounded-lg border"></div>

      <form id="incident-report-form" class="space-y-4 text-xs mt-4">
        <div>
          <label class="block font-bold text-slate-700 mb-1">${labelCorridor}</label>
          <select id="inc-corridor" required class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-primary-500">
            ${corridorOptions}
          </select>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block font-bold text-slate-700 mb-1">${labelCat}</label>
            <select id="inc-category" required class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-primary-500">
              ${categoryOptions}
            </select>
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">${labelUrgency}</label>
            <select id="inc-urgency" required class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-primary-500">
              ${urgencyOptions}
            </select>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block font-bold text-slate-700 mb-1">${labelPlate}</label>
            <input type="text" id="inc-plate" required placeholder="${isAm ? "ለምሳሌ፦ 3-84920 ኢት" : "e.g. 3-84920 ET"}" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500">
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">${labelPhone}</label>
            <input type="tel" id="inc-phone" required placeholder="${isAm ? "ለምሳሌ፦ 0911 234567" : "e.g. 0911 234567"}" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500">
          </div>
        </div>

        <div>
          <label class="block font-bold text-slate-700 mb-1">${labelLocation}</label>
          <input type="text" id="inc-location" required placeholder="${isAm ? "ለምሳሌ፦ አዋሽ 7 ኪሎ ሚዛን ጣቢያ፣ ኪሜ 142 ወደ ሰሜን" : "e.g. Awash 7 Kilo Weighbridge, KM 142 heading North"}" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500">
        </div>

        <div>
          <label class="block font-bold text-slate-700 mb-1">${labelDetails}</label>
          <textarea id="inc-details" rows="3" required placeholder="${placeholderDetails}" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500 resize-none"></textarea>
        </div>

        <div class="pt-2 flex items-center justify-end gap-3">
          <button type="button" class="modal-close-btn px-4 py-2.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold cursor-pointer">
            ${btnCancel}
          </button>
          <button type="submit" id="inc-submit-btn" class="px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer">
            <i class="fa-solid fa-paper-plane"></i>
            <span>${btnSubmit}</span>
          </button>
        </div>
      </form>
    </div>
  `;

  attachModalCloseHandlers(container);
  container.classList.remove("hidden");
  container.classList.add("flex");
  document.body.style.overflow = "hidden";

  const form = container.querySelector<HTMLFormElement>("#incident-report-form");
  const feedback = container.querySelector<HTMLElement>("#incident-report-feedback");
  if (form && feedback) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = form.querySelector<HTMLButtonElement>("#inc-submit-btn");
      if (btn) {
        btn.disabled = true;
        btn.innerHTML = isAm
          ? '<span>በማስተላለፍ ላይ...</span> <i class="fa-solid fa-spinner fa-spin"></i>'
          : '<span>Transmitting...</span> <i class="fa-solid fa-spinner fa-spin"></i>';
      }

      setTimeout(() => {
        feedback.className = "mb-4 p-4 rounded-lg border bg-primary-50 border-primary-200 text-primary-800 text-xs flex items-start gap-3 shadow-sm";
        feedback.innerHTML = isAm
          ? `
            <i class="fa-solid fa-circle-check text-primary-600 text-lg mt-0.5 shrink-0"></i>
            <div>
              <span class="font-bold block text-primary-950 text-sm">የድንገተኛ ስምሪት ጥሪ በተሳካ ሁኔታ ተላልፏል</span>
              <p class="text-xs text-primary-800 mt-1">የኮሪደር አደጋ ሪፖርትዎ ተመዝግቦ ለኢትራአፌ ብሔራዊ የሎጂስቲክስ ፈጣን ምላሽ ዴስክ ተልኳል። ተረኛ አስተባባሪው ሪፖርትዎን እየተመለከተ ሲሆን በአጭር ጊዜ ውስጥ በስልክ ቁጥርዎ ያነጋግርዎታል።</p>
            </div>
          `
          : `
            <i class="fa-solid fa-circle-check text-primary-600 text-lg mt-0.5 shrink-0"></i>
            <div>
              <span class="font-bold block text-primary-950 text-sm">Emergency Dispatch Alert Transmitted</span>
              <p class="text-xs text-primary-800 mt-1">Your corridor incident report has been logged and dispatched to the ETEF National Logistics Rapid Response Desk. A duty coordinator is reviewing your report and will reach your contact number shortly.</p>
            </div>
          `;
        feedback.classList.remove("hidden");
        form.reset();
        if (btn) {
          btn.disabled = false;
          btn.innerHTML = isAm
            ? '<i class="fa-solid fa-check"></i> <span>ሪፖርቱ ተመዝግቧል</span>'
            : '<i class="fa-solid fa-check"></i> <span>Report Logged</span>';
          setTimeout(() => {
            closeModal();
          }, 3000);
        }
      }, 700);
    });
  }
}

function attachModalCloseHandlers(container: HTMLElement): void {
  const closeBtns = container.querySelectorAll(".modal-close-btn");
  closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => closeModal());
  });
}
