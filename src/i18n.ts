// ETEF Bilingual Engine (English & Amharic)
export type Lang = "ENG" | "አማ";

const LANG_KEY = "etef_lang";

let listeners: ((lang: Lang) => void)[] = [];

export function getCurrentLang(): Lang {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "አማ" || saved === "ENG") {
      return saved;
    }
  } catch {
    // fallback
  }
  return "ENG";
}

export function setCurrentLang(lang: Lang): void {
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch {
    // ignore
  }
  listeners.forEach((fn) => fn(lang));
}

export function onLangChange(callback: (lang: Lang) => void): () => void {
  listeners.push(callback);
  return () => {
    listeners = listeners.filter((fn) => fn !== callback);
  };
}

// Common Shared UI Translations
export const commonText = {
  ENG: {
    nav: {
      home: "Home",
      about: "About Us",
      news: "News",
      vacancies: "Vacancy",
      partners: "Partners",
      faq: "FAQ",
      contact: "Contact Us",
      join: "Join as Member",
    },
    footer: {
      orgName: "ETHIOPIAN TRANSPORT",
      orgSub: "EMPLOYERS FEDERATION",
      desc: "The premier statutory national federation representing commercial transport employers, regional associations, and logistics operators across Ethiopia. Certified May 12, 2018 (Ginbot 4, 2010 E.C.).",
      preTitle: "Official ETEF Platform",
      preHeading: "One federation. One trusted digital home.",
      connectBtn: "Connect with ETEF",
      exploreTitle: "EXPLORE",
      discoverTitle: "DISCOVER",
      connectTitle: "CONNECT",
      address: "Addis Ababa, Ethiopia",
      phone: "+251 11 4717787",
      email: "ethtransfed@gmail.com",
      support: "Contact Support",
      rights: "© 2026 Ethiopian Transport Employers Federation. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    langSelectTitle: "Select Language",
  },
  "አማ": {
    nav: {
      home: "መነሻ",
      about: "ስለ እኛ",
      news: "ዜና",
      vacancies: "ክፍት የሥራ ቦታ",
      partners: "አጋሮች",
      faq: "ተደጋጋሚ ጥያቄዎች",
      contact: "ያግኙን",
      join: "አባል ይሁኑ",
    },
    footer: {
      orgName: "የኢትዮጵያ ትራንስፖርት",
      orgSub: "አሠሪዎች ፌዴሬሽን",
      desc: "በኢትዮጵያ የንግድ ትራንስፖርት አሠሪዎችን፣ የክልል ማኅበራትንና የሎጂስቲክስ ኦፕሬተሮችን የሚወክል ብሔራዊ ፌዴሬሽን። በሕግ የተመዘገበው ግንቦት 04 ቀን 2010 ዓ/ም ነው።",
      preTitle: "ይፋዊ የፌዴሬሽኑ መድረክ",
      preHeading: "አንድ ፌዴሬሽን። አንድ የታመነ የጋራ ድምፅ።",
      connectBtn: "ከፌዴሬሽኑ ጋር ይገናኙ",
      exploreTitle: "አስስ",
      discoverTitle: "አግኝ",
      connectTitle: "ያግኙን",
      address: "አዲስ አበባ፣ ኢትዮጵያ",
      phone: "+251 11 4717787",
      email: "ethtransfed@gmail.com",
      support: "የድጋፍ አገልግሎት ያግኙ",
      rights: "© 2026 የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን። መብቱ በሕግ የተጠበቀ ነው።",
      privacy: "የግላዊነት ፖሊሲ",
      terms: "የአጠቃቀም ደንቦች",
    },
    langSelectTitle: "ቋንቋ ይምረጡ",
  },
};
