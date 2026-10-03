import { renderNavbar, renderFooter } from "../layout";

const privacyEng = `
    ${renderNavbar("/privacy", "ENG")}

    <main class="flex-grow bg-slate-50 py-12">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav class="flex text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-2">
                    <li class="inline-flex items-center">
                        <a href="/" class="hover:text-primary-600 transition-colors">Home</a>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <span class="mx-2 text-slate-400">/</span>
                            <span class="text-primary-600 font-medium">Privacy Policy</span>
                        </div>
                    </li>
                </ol>
            </nav>

            <article class="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12">
                <header class="border-b border-slate-200 pb-8 mb-8">
                    <span class="text-xs font-bold text-primary-600 uppercase tracking-wider mb-2 block">Official Governance</span>
                    <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Privacy & Data Governance Policy</h1>
                    <div class="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                        <span><i class="fa-regular fa-calendar mr-1"></i> Effective Date: January 1, 2026</span>
                        <span>•</span>
                        <span><i class="fa-solid fa-shield-halved mr-1 text-primary-600"></i> Secretariat Reference: ETEF-POL-2026/01</span>
                    </div>
                </header>

                <div class="prose max-w-none text-slate-700 space-y-8 leading-relaxed text-sm sm:text-base">
                    <section>
                        <h2 class="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <span class="w-2 h-6 bg-primary-600 rounded-full inline-block"></span>
                            1. Federation Mandate & Commitment
                        </h2>
                        <p>
                            The Ethiopian Transport Employers Federation (ETEF) represents commercial road freight, intercity transit, dry port operators, and regional transport associations across Ethiopia. We hold member and public data with strict confidentiality, maintaining governance protocols in alignment with Ethiopian data privacy guidelines, trade association regulations, and international commercial transport standards.
                        </p>
                    </section>

                    <section>
                        <h2 class="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <span class="w-2 h-6 bg-primary-600 rounded-full inline-block"></span>
                            2. Information We Collect
                        </h2>
                        <p class="mb-3">We collect organizational and contact details solely to manage federation activities and represent transport operators effectively:</p>
                        <ul class="list-disc pl-6 space-y-2 text-slate-600">
                            <li><strong>Member Organization Data:</strong> Registered company name, commercial registration number, operational sector (freight, passenger, transit), fleet size, and office address.</li>
                            <li><strong>Authorized Representative Details:</strong> Names, executive designations, official telephone numbers, and email addresses of appointed liaisons and board members.</li>
                            <li><strong>Public Inquiries & CV Submissions:</strong> Information provided voluntarily through our official contact forms, talent network applications, or email correspondence with the Secretariat.</li>
                            <li><strong>Technical Log Data:</strong> Minimal website telemetry used strictly for performance optimization and cybersecurity.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 class="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <span class="w-2 h-6 bg-primary-600 rounded-full inline-block"></span>
                            3. Lawful Purpose & Usage
                        </h2>
                        <p class="mb-3">All collected data is utilized exclusively for genuine Federation mandates:</p>
                        <ul class="list-disc pl-6 space-y-2 text-slate-600">
                            <li>Representing transport employers in tripartite policy consultations with federal regulatory bodies.</li>
                            <li>Distributing regulatory alerts, customs updates, road safety guidelines, and emergency corridor notifications.</li>
                            <li>Processing membership renewals, issuing official accreditation letters, and organizing annual general assemblies.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 class="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <span class="w-2 h-6 bg-primary-600 rounded-full inline-block"></span>
                            4. Protection Against Commercial Disclosure
                        </h2>
                        <p>
                            ETEF does not sell, rent, monetize, or disclose member information to third-party commercial advertisers or brokers under any circumstance. Information is only shared when explicitly authorized by the member or mandated by statutory legal process under Ethiopian law.
                        </p>
                    </section>

                    <section class="border-t border-slate-200 pt-6 mt-8">
                        <div class="bg-primary-50 rounded-xl p-5 border border-primary-100 flex items-start gap-4">
                            <div class="text-primary-600 text-2xl mt-1">
                                <i class="fa-solid fa-building-columns"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-primary-900 text-base mb-1">Secretariat Data Office</h3>
                                <p class="text-primary-800 text-xs sm:text-sm">
                                    Ethiopian Transport Employers Federation Secretariat<br />
                                    Kirkos Sub-City, Addis Ababa, Ethiopia<br />
                                    Email: <a href="mailto:ethtransfed@gmail.com" class="font-semibold underline">ethtransfed@gmail.com</a> | Tel: +251 11 4717787
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </article>
        </div>
    </main>

    ${renderFooter("ENG")}
`;

const privacyAm = `
    ${renderNavbar("/privacy", "አማ")}

    <main class="flex-grow bg-slate-50 py-12">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav class="flex text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-2">
                    <li class="inline-flex items-center">
                        <a href="/" class="hover:text-primary-600 transition-colors">መነሻ</a>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <span class="mx-2 text-slate-400">/</span>
                            <span class="text-primary-600 font-medium">የግላዊነት ፖሊሲ</span>
                        </div>
                    </li>
                </ol>
            </nav>

            <article class="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12">
                <header class="border-b border-slate-200 pb-8 mb-8">
                    <span class="text-xs font-bold text-primary-600 uppercase tracking-wider mb-2 block">ይፋዊ ደንብ</span>
                    <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">የግላዊነትና የመረጃ ጥበቃ ፖሊሲ</h1>
                    <div class="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                        <span><i class="fa-regular fa-calendar mr-1"></i> የተሻሻለበት ቀን፡ ጥር 1 ቀን 2018 ዓ/ም</span>
                        <span>•</span>
                        <span><i class="fa-solid fa-shield-halved mr-1 text-primary-600"></i> የሴክሬታሪያት ማጣቀሻ፡ ኢትራአፌ-ፖሊሲ-2026/01</span>
                    </div>
                </header>

                <div class="prose max-w-none text-slate-700 space-y-8 leading-relaxed text-sm sm:text-base">
                    <section>
                        <h2 class="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <span class="w-2 h-6 bg-primary-600 rounded-full inline-block"></span>
                            1. የፌዴሬሽኑ ኃላፊነትና ቁርጠኝነት
                        </h2>
                        <p>
                            የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን የከባድ ጭነት፣ የሕዝብ ትራንስፖርት፣ የደረቅ ወደብ ኦፕሬተሮችንና የክልል አሠሪ ማኅበራትን በበላይነት ይወክላል። የአባላትና የሕዝብ መረጃዎችን በሚስጥር የመጠበቅና በሕጉ መሠረት የማስተዳደር ሙሉ ኃላፊነት አለበት።
                        </p>
                    </section>

                    <section>
                        <h2 class="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <span class="w-2 h-6 bg-primary-600 rounded-full inline-block"></span>
                            2. የምንሰበስባቸው መረጃዎች
                        </h2>
                        <p class="mb-3">የፌዴሬሽኑን ተልዕኮ በአግባቡ ለመወጣት የሚከተሉትን ህጋዊ መረጃዎች እንሰበስባለን፡</p>
                        <ul class="list-disc pl-6 space-y-2 text-slate-600">
                            <li><strong>የአባል ድርጅት መረጃዎች፡</strong> የተመዘገበ የድርጅት ስም፣ የንግድ ምዝገባ ቁጥር፣ የስምሪት ዘርፍ፣ የተሽከርካሪዎች ብዛትና አድራሻ።</li>
                            <li><strong>የተወካዮች ዝርዝር፡</strong> የኃላፊዎች ስም፣ የሥራ መደብ፣ ስልክ ቁጥርና ኢሜይል አድራሻ።</li>
                            <li><strong>ማመልከቻዎችና ጥያቄዎች፡</strong> በይፋዊ ቅጾች አማካኝነት በፈቃደኝነት የሚቀርቡ መረጃዎች።</li>
                        </ul>
                    </section>

                    <section>
                        <h2 class="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <span class="w-2 h-6 bg-primary-600 rounded-full inline-block"></span>
                            3. የመረጃው ጥቅም
                        </h2>
                        <p class="mb-3">የተሰበሰቡ መረጃዎች ለፌዴሬሽኑ ይፋዊ ተግባራት ብቻ ይውላሉ፡</p>
                        <ul class="list-disc pl-6 space-y-2 text-slate-600">
                            <li>የትራንስፖርት አሠሪዎችን በመንግሥትና በተቆጣጣሪ አካላት ፊት በብቃት ለመወከል።</li>
                            <li>ወቅታዊ የኮሪደር፣ የጉምሩክና የደህንነት መረጃዎችን ለአባላት ለማሰራጨት።</li>
                            <li>የአባልነት እድሳትን ለማከናወንና ሕጋዊ የማረጋገጫ ደብዳቤዎችን ለመስጠት።</li>
                        </ul>
                    </section>

                    <section>
                        <h2 class="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <span class="w-2 h-6 bg-primary-600 rounded-full inline-block"></span>
                            4. መረጃዎችን ለሶስተኛ ወገን አለማስተላለፍ
                        </h2>
                        <p>
                            ኢትራአፌ የአባላቱን መረጃ ለንግድ ማስታወቂያ ወይም ለደላሎች በምንም ዓይነት ሁኔታ አሳልፎ አይሰጥም:: መረጃ የሚጋራው በሕግ በተደነገገው አግባብ ወይም በአባሉ ፈቃድ ብቻ ነው።
                        </p>
                    </section>

                    <section class="border-t border-slate-200 pt-6 mt-8">
                        <div class="bg-primary-50 rounded-xl p-5 border border-primary-100 flex items-start gap-4">
                            <div class="text-primary-600 text-2xl mt-1">
                                <i class="fa-solid fa-building-columns"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-primary-900 text-base mb-1">የሴክሬታሪያት የመረጃ ጥበቃ ቢሮ</h3>
                                <p class="text-primary-800 text-xs sm:text-sm">
                                    የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን ሴክሬታሪያት<br />
                                    ቂርቆስ ክፍለ ከተማ፣ አዲስ አበባ፣ ኢትዮጵያ<br />
                                    ኢሜይል፡ <a href="mailto:ethtransfed@gmail.com" class="font-semibold underline">ethtransfed@gmail.com</a> | ስልክ፡ +251 11 4717787
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </article>
        </div>
    </main>

    ${renderFooter("አማ")}
`;

export default {
  title: {
    ENG: "Privacy Policy - Ethiopian Transport Employers Federation",
    "አማ": "የግላዊነት ፖሊሲ - የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን",
  },
  markup: {
    ENG: privacyEng,
    "አማ": privacyAm,
  },
};
