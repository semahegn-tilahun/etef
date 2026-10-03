import { renderNavbar, renderFooter } from "../layout";

const termsEng = `
    ${renderNavbar("/terms", "ENG")}

    <main class="flex-grow bg-slate-50 py-12">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav class="flex text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-primary-600 transition-colors flex items-center gap-1.5"><i class="fa-solid fa-house text-xs"></i> Home</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <i class="fa-solid fa-chevron-right text-xs mx-2 text-slate-300"></i>
                                <span class="text-slate-800 font-semibold">Terms & Conditions</span>
                            </div>
                        </li>
                    </ol>
                </nav>

            <article class="bg-white rounded-lg shadow-sm border border-slate-200 p-8 sm:p-12">
                <header class="border-b border-slate-200 pb-8 mb-8">
                    <span class="text-xs font-bold text-primary-600 uppercase tracking-wider mb-2 block">Statutory Terms</span>
                    <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Terms of Service & Portal Governance</h1>
                    <div class="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                        <span><i class="fa-regular fa-calendar mr-1"></i> Effective Date: January 1, 2026</span>
                        <span>•</span>
                        <span><i class="fa-solid fa-scale-balanced mr-1 text-primary-600"></i> Regulatory Ref: Proclamation No. 1156/2012</span>
                    </div>
                </header>

                <div class="prose max-w-none text-slate-700 space-y-8 leading-relaxed text-sm sm:text-base">
                    <section>
                        <h2 class="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <span class="w-2 h-6 bg-primary-600 rounded-full inline-block"></span>
                            1. Acceptance of Terms & Legal Framework
                        </h2>
                        <p>
                            By accessing or using the official digital platform of the Ethiopian Transport Employers Federation (ETEF), member associations, operators, and public users agree to comply with these Terms of Service. These terms are established pursuant to FDRE Constitution Article 31 and Labor Proclamation No. 1156/2012 governing certified employers' federations.
                        </p>
                    </section>

                    <section>
                        <h2 class="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <span class="w-2 h-6 bg-primary-600 rounded-full inline-block"></span>
                            2. Membership Standards & Codes of Conduct
                        </h2>
                        <p class="mb-3">All member organizations, affiliates, and representatives participating in the Federation must uphold highest industry standards:</p>
                        <ul class="list-disc pl-6 space-y-2 text-slate-600">
                            <li>Maintain valid commercial operating licenses, vehicle roadworthiness certifications, and mandatory third-party insurance.</li>
                            <li>Comply with federal axle-load limits, transit safety directives, and statutory labor agreements.</li>
                            <li>Support industrial peace through tripartite dialogue and honor ratified collective bargaining pacts.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 class="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <span class="w-2 h-6 bg-primary-600 rounded-full inline-block"></span>
                            3. Intellectual Property & Official Publications
                        </h2>
                        <p>
                            All publications, policy advisories, tariff schedules, corridor benchmark reports, and official branding hosted on this platform are the statutory intellectual property of the Ethiopian Transport Employers Federation. Unauthorized reproduction or commercial distribution without written consent is strictly prohibited.
                        </p>
                    </section>

                    <section class="border-t border-slate-200 pt-6 mt-8">
                        <div class="bg-primary-50 rounded-lg p-5 border border-primary-100 flex items-start gap-4">
                            <div class="text-primary-600 text-2xl mt-1">
                                <i class="fa-solid fa-gavel"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-primary-900 text-base mb-1">Legal Affairs Directorate</h3>
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

const termsAm = `
    ${renderNavbar("/terms", "አማ")}

    <main class="flex-grow bg-slate-50 py-12">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav class="flex text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-primary-600 transition-colors flex items-center gap-1.5"><i class="fa-solid fa-house text-xs"></i> መነሻ</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <i class="fa-solid fa-chevron-right text-xs mx-2 text-slate-300"></i>
                                <span class="text-slate-800 font-semibold">ውል እና ሁኔታዎች</span>
                            </div>
                        </li>
                    </ol>
                </nav>

            <article class="bg-white rounded-lg shadow-sm border border-slate-200 p-8 sm:p-12">
                <header class="border-b border-slate-200 pb-8 mb-8">
                    <span class="text-xs font-bold text-primary-600 uppercase tracking-wider mb-2 block">ሕጋዊ ደንብ</span>
                    <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">የአጠቃቀምና የአባልነት ደንቦች</h1>
                    <div class="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                        <span><i class="fa-regular fa-calendar mr-1"></i> የተሻሻለበት ቀን፡ ጥር 1 ቀን 2018 ዓ/ም</span>
                        <span>•</span>
                        <span><i class="fa-solid fa-scale-balanced mr-1 text-primary-600"></i> የሕግ ማጣቀሻ፡ አዋጅ ቁጥር 1156/2012</span>
                    </div>
                </header>

                <div class="prose max-w-none text-slate-700 space-y-8 leading-relaxed text-sm sm:text-base">
                    <section>
                        <h2 class="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <span class="w-2 h-6 bg-primary-600 rounded-full inline-block"></span>
                            1. የደንቡ ተፈጻሚነትና ሕጋዊ ማዕቀፍ
                        </h2>
                        <p>
                            የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን ይፋዊ ፖርታልን የሚጎበኙ፣ የሚጠቀሙና በአባልነት የተመዘገቡ አካላት በሙሉ ይህንን የአጠቃቀም ደንብ ለማክበር ይስማማሉ። ይህ ደንብ በኢፌዲሪ ሕገ-መንግሥት አንቀጽ 31 እና በአሠሪና ሠራተኛ አዋጅ ቁጥር 1156/2012 መሠረት የተዘጋጀ ነው።
                        </p>
                    </section>

                    <section>
                        <h2 class="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <span class="w-2 h-6 bg-primary-600 rounded-full inline-block"></span>
                            2. የአባላት ሥነ-ምግባርና ግዴታዎች
                        </h2>
                        <p class="mb-3">ሁሉም አባል ድርጅቶችና ማኅበራት የሚከተሉትን ሙያዊና ሕጋዊ ግዴታዎች ማክበር አለባቸው፡</p>
                        <ul class="list-disc pl-6 space-y-2 text-slate-600">
                            <li>ሕጋዊ የንግድ ፈቃድ፣ የተሽከርካሪ ብቃት ማረጋገጫና የሶስተኛ ወገን መድን ሽፋን ማሟላት።</li>
                            <li>የክብደት ልኬት ገደቦችን፣ የመንገድ ደህንነት መመሪያዎችንና የትራንስፖርት ሕጎችን ማክበር።</li>
                            <li>የኢንዱስትሪ ሰላምን መጠበቅና የተደረሱ የኅብረት ስምምነቶችን ተግባራዊ ማድረግ።</li>
                        </ul>
                    </section>

                    <section>
                        <h2 class="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <span class="w-2 h-6 bg-primary-600 rounded-full inline-block"></span>
                            3. የንብረትነትና የጽሑፍ መብት ጥበቃ
                        </h2>
                        <p>
                            በዚህ ፖርታል ላይ የሚወጡ የፌዴሬሽኑ ጥናቶች፣ የታሪፍ ሰነዶች፣ መመሪያዎችና ይፋዊ መግለጫዎች የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን የሕግ ንብረቶች ናቸው:: ያለጽሑፍ ፈቃድ ለንግድ ጥቅም ማዋል የተከለከለ ነው።
                        </p>
                    </section>

                    <section class="border-t border-slate-200 pt-6 mt-8">
                        <div class="bg-primary-50 rounded-lg p-5 border border-primary-100 flex items-start gap-4">
                            <div class="text-primary-600 text-2xl mt-1">
                                <i class="fa-solid fa-gavel"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-primary-900 text-base mb-1">የሕግ ጉዳዮች ዳይሬክቶሬት</h3>
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
    ENG: "Terms of Service - Ethiopian Transport Employers Federation",
    "አማ": "የአጠቃቀም ደንቦች - የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን",
  },
  markup: {
    ENG: termsEng,
    "አማ": termsAm,
  },
};
