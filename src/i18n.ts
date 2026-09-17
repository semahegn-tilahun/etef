import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: { translation: {
    home:"Home", about:"About ETEF", membership:"Membership", faq:"FAQ", gallery:"Gallery", vacancies:"Vacancies", contact:"Contact",
    register:"Register as a Member", language:"Language", explore:"Explore", connect:"Connect", officialEmail:"Official organizational email", languageFooter:"Amharic · English",
    heroEyebrow:"ETHIOPIAN TRANSPORT EMPLOYERS' FEDERATION",
    hero:"A stronger voice for Ethiopia's transport employers.",
    heroText:"Connecting transport employers, protecting member interests and supporting a stronger, sustainable and peaceful transport industry.",
    heroNote:"Professional. Inclusive. Member-focused.",
    discover:"Discover ETEF",
    stats1:"Unified representation", stats2:"Member-focused support", stats3:"Industry collaboration", stats4:"Digital access", aboutEyebrow:"About Us", aboutIntro:"The ETEF website brings institutional information, membership access, events, opportunities and official contact channels together in one trusted public platform.", missionTag:"MISSION", missionTitle:"Mission", missionText:"Safeguarding members' economic, legal, social and other rights and benefits while supporting their performance through training, education, legal support, technology and cooperation toward industrial peace.", visionTag:"VISION", visionTitle:"Vision", visionText:"Seeing strong and representing voice in Ethiopian transport industry.", valuesTag:"VALUES", valuesTitle:"Member satisfaction is our leading value.", valuesText:"Integrity, respect, diligence, teamwork and industrial peace guide how ETEF serves and represents transport employers.", value1:"Member satisfaction", value2:"Integrity", value3:"Respect", value4:"Diligence", value5:"Teamwork", value6:"Industrial peace", servicesTag:"SERVICES", servicesTitle:"Supporting a stronger transport industry.", servicesText:"ETEF advocates for transport employers, builds constructive dialogue and protects members’ rights and benefits.", advocacy:"Advocacy", advocacyText:"Representing the shared interests and priorities of transport employers.", dialogue:"Lobby & dialogue", dialogueText:"Engaging stakeholders to encourage practical, fair and sustainable transport policies.", rights:"Rights & benefits", rightsText:"Protecting members’ legal, economic and social rights and benefits.", training:"Training & support", trainingText:"Connecting members with education, legal support and industry collaboration.",
  }},
  am: { translation: {
    home:"መነሻ", about:"ስለ ETEF", membership:"አባልነት", faq:"ተደጋጋሚ ጥያቄዎች", gallery:"የፎቶ ማዕከል", vacancies:"የሥራ ዕድሎች", contact:"ያግኙን",
    register:"አባል ለመሆን ይመዝገቡ", language:"ቋንቋ", explore:"ይመልከቱ", connect:"ያግኙን", officialEmail:"የድርጅቱ ኢሜይል", languageFooter:"አማርኛ · እንግሊዝኛ",
    heroEyebrow:"የኢትዮጵያ ትራንስፖርት አሰሪዎች ፌዴሬሽን",
    hero:"ለኢትዮጵያ ትራንስፖርት አሰሪዎች ጠንካራ ድምፅ።",
    heroText:"የትራንስፖርት አሰሪዎችን በማገናኘት፣ የአባላትን ጥቅም በመጠበቅ እና ጠንካራ፣ ዘላቂ እና ሰላማዊ የትራንስፖርት ኢንዱስትሪን በመደገፍ።",
    heroNote:"ሙያዊ። አካታች። ለአባላት ተኮር።",
    discover:"ስለ ETEF ይወቁ",
    stats1:"የተቀናጀ ውክልና", stats2:"ለአባላት ተኮር ድጋፍ", stats3:"የዘርፉ ትብብር", stats4:"ዲጂታል ተደራሽነት", aboutEyebrow:"ስለ እኛ", aboutIntro:"የETEF ድረ-ገጽ የተቋሙን መረጃ፣ የአባልነት አገልግሎት፣ ዝግጅቶችን፣ የሥራ ዕድሎችን እና የግንኙነት መስመሮችን በአንድ የታመነ የሕዝብ መድረክ ያቀርባል።", missionTag:"ተልዕኮ", missionTitle:"ተልዕኮ", missionText:"የአባላትን ኢኮኖሚያዊ፣ ሕጋዊ፣ ማኅበራዊ እና ሌሎች መብቶችንና ጥቅሞችን በመጠበቅ፣ በሥልጠና፣ በትምህርት፣ በሕግ ድጋፍ፣ በቴክኖሎጂ እና በትብብር የኢንዱስትሪ ሰላምን ማምጣት።", visionTag:"ራዕይ", visionTitle:"ራዕይ", visionText:"በኢትዮጵያ የትራንስፖርት ኢንዱስትሪ ጠንካራና ተወካይ ድምፅ ማየት።", valuesTag:"እሴቶች", valuesTitle:"የአባላት እርካታ ዋና እሴታችን ነው።", valuesText:"ታማኝነት፣ አክብሮት፣ ትጋት፣ የቡድን ሥራ እና የኢንዱስትሪ ሰላም ETEF አሰራርን ይመራሉ።", value1:"የአባላት እርካታ", value2:"ታማኝነት", value3:"አክብሮት", value4:"ትጋት", value5:"የቡድን ሥራ", value6:"የኢንዱስትሪ ሰላም", servicesTag:"አገልግሎቶች", servicesTitle:"ጠንካራ የትራንስፖርት ዘርፍን መደገፍ።", servicesText:"ETEF የትራንስፖርት አሰሪዎችን ይወክላል፣ ገንቢ ውይይትን ያበረታታል እና የአባላትን መብትና ጥቅም ይጠብቃል።", advocacy:"ውክልና", advocacyText:"የትራንስፖርት አሰሪዎችን የጋራ ጥቅምና ቅድሚያዎች መወከል።", dialogue:"ውይይትና ማበረታቻ", dialogueText:"ተግባራዊ፣ ፍትሃዊ እና ዘላቂ የትራንስፖርት ፖሊሲዎችን ለማበረታታት ከባለድርሻዎች ጋር መስራት።", rights:"መብትና ጥቅም", rightsText:"የአባላትን ሕጋዊ፣ ኢኮኖሚያዊ እና ማኅበራዊ መብቶችንና ጥቅሞችን መጠበቅ።", training:"ሥልጠናና ድጋፍ", trainingText:"አባላትን ከትምህርት፣ ከሕግ ድጋፍ እና ከዘርፉ ትብብር ጋር ማገናኘት።",
  }}
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
