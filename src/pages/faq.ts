import { renderNavbar, renderFooter } from "../layout";

const faqEng = `
    ${renderNavbar("/faq", "ENG")}

    <main class="flex-grow pb-24">
        <!-- Page Header / Breadcrumb -->
        <div class="bg-slate-50 border-b border-slate-200 pt-10 pb-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav class="flex text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-2">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-primary-600 transition-colors">Home</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <span class="mx-2 text-slate-400">/</span>
                                <span class="text-primary-600 font-medium">FAQ</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">Frequently Asked Questions</h1>
                <p class="text-lg text-slate-600 max-w-3xl leading-relaxed">
                    Find authoritative answers regarding ETEF membership criteria, policy and regulatory advocacy, corridor operations, and transport sector services.
                </p>
            </div>
        </div>

        <!-- FAQ Content Section -->
        <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
            <!-- Search & Filters -->
            <div class="mb-10 space-y-4">
                <div class="relative">
                    <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
                    <input 
                        type="text" 
                        id="faq-search-input" 
                        placeholder="Search questions or keywords (e.g. membership, dues, corridors, regulations)..." 
                        class="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-300 rounded-xl shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                    />
                </div>

                <!-- Category Filters -->
                <div class="flex flex-wrap items-center gap-2 pt-2" id="faq-categories">
                    <button class="faq-filter-btn px-4 py-1.5 rounded-full text-xs font-semibold bg-primary-600 text-white shadow-sm" data-category="all">
                        All Questions (10)
                    </button>
                    <button class="faq-filter-btn px-4 py-1.5 rounded-full text-xs font-medium bg-white text-slate-600 border border-slate-300 hover:bg-slate-50 transition-colors" data-category="membership">
                        Membership & Dues
                    </button>
                    <button class="faq-filter-btn px-4 py-1.5 rounded-full text-xs font-medium bg-white text-slate-600 border border-slate-300 hover:bg-slate-50 transition-colors" data-category="advocacy">
                        Advocacy & Policy
                    </button>
                    <button class="faq-filter-btn px-4 py-1.5 rounded-full text-xs font-medium bg-white text-slate-600 border border-slate-300 hover:bg-slate-50 transition-colors" data-category="operations">
                        Corridor Operations
                    </button>
                    <button class="faq-filter-btn px-4 py-1.5 rounded-full text-xs font-medium bg-white text-slate-600 border border-slate-300 hover:bg-slate-50 transition-colors" data-category="partnerships">
                        Partnerships & Training
                    </button>
                </div>
            </div>

            <!-- FAQ Accordion List -->
            <div class="space-y-4" id="faq-items-container">
                <!-- Item 1 -->
                <div class="faq-item bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all" data-category="advocacy">
                    <button type="button" class="faq-accordion-header w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 text-xs font-bold flex items-center justify-center shrink-0">01</span>
                            <span class="text-base sm:text-lg font-bold text-slate-900">What is ETEF and what is its statutory mandate?</span>
                        </div>
                        <span class="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 transition-transform duration-200 faq-icon">
                            <i class="fa-solid fa-chevron-down text-xs"></i>
                        </span>
                    </button>
                    <div class="faq-accordion-content hidden px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        The Ethiopian Transport Employers Federation (ETEF) is the statutory apex federation representing commercial transport employers, freight carriers, passenger transit operators, and regional associations across Ethiopia. Certified under FDRE Constitution Article 31 and Labor Proclamation No. 1156/2012, ETEF is the sole official voice for transport employers in tripartite social dialogue with the Ethiopian government and labor syndicates.
                    </div>
                </div>

                <!-- Item 2 -->
                <div class="faq-item bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all" data-category="membership">
                    <button type="button" class="faq-accordion-header w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 text-xs font-bold flex items-center justify-center shrink-0">02</span>
                            <span class="text-base sm:text-lg font-bold text-slate-900">Who is eligible to join ETEF?</span>
                        </div>
                        <span class="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 transition-transform duration-200 faq-icon">
                            <i class="fa-solid fa-chevron-down text-xs"></i>
                        </span>
                    </button>
                    <div class="faq-accordion-content hidden px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        Membership is open to commercial freight haulage companies, regional dry cargo associations, cross-country passenger bus fleets, city transit operators, multimodal logistics providers, and private fleet enterprises operating in Ethiopia.
                    </div>
                </div>

                <!-- Item 3 -->
                <div class="faq-item bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all" data-category="membership">
                    <button type="button" class="faq-accordion-header w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 text-xs font-bold flex items-center justify-center shrink-0">03</span>
                            <span class="text-base sm:text-lg font-bold text-slate-900">What legal protection does ETEF provide to members?</span>
                        </div>
                        <span class="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 transition-transform duration-200 faq-icon">
                            <i class="fa-solid fa-chevron-down text-xs"></i>
                        </span>
                    </button>
                    <div class="faq-accordion-content hidden px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        ETEF provides direct legal representation before judicial courts, administrative tribunals, and arbitration boards. We defend employers in collective labor disputes, contract breaches, arbitrary roadside fees, and port demurrage disagreements.
                    </div>
                </div>

                <!-- Item 4 -->
                <div class="faq-item bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all" data-category="operations">
                    <button type="button" class="faq-accordion-header w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 text-xs font-bold flex items-center justify-center shrink-0">04</span>
                            <span class="text-base sm:text-lg font-bold text-slate-900">How does ETEF monitor strategic trade corridors?</span>
                        </div>
                        <span class="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 transition-transform duration-200 faq-icon">
                            <i class="fa-solid fa-chevron-down text-xs"></i>
                        </span>
                    </button>
                    <div class="faq-accordion-content hidden px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        The Federation operates an active Corridor Watch Directorate monitoring four strategic trade arteries: Djibouti–Addis Ababa, Modjo Dry Port, Moyale–Lamu, and Berbera–Dire Dawa. We track border crossing queues, customs dwell times, and provide a 24/7 breakdown helpline for operators.
                    </div>
                </div>

                <!-- Item 5 -->
                <div class="faq-item bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all" data-category="advocacy">
                    <button type="button" class="faq-accordion-header w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 text-xs font-bold flex items-center justify-center shrink-0">05</span>
                            <span class="text-base sm:text-lg font-bold text-slate-900">How are collective bargaining agreements negotiated?</span>
                        </div>
                        <span class="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 transition-transform duration-200 faq-icon">
                            <i class="fa-solid fa-chevron-down text-xs"></i>
                        </span>
                    </button>
                    <div class="faq-accordion-content hidden px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        Under Labor Proclamation No. 1156/2012, ETEF serves as the authorized employer representative in negotiations with transport labor syndicates. We establish standardized working conditions, safety protocols, and wage structures that safeguard employer viability while maintaining industrial peace.
                    </div>
                </div>
            </div>
        </section>
    </main>

    ${renderFooter("ENG")}
`;

const faqAm = `
    ${renderNavbar("/faq", "አማ")}

    <main class="flex-grow pb-24">
        <!-- Page Header / Breadcrumb -->
        <div class="bg-slate-50 border-b border-slate-200 pt-10 pb-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav class="flex text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-2">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-primary-600 transition-colors">መነሻ</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <span class="mx-2 text-slate-400">/</span>
                                <span class="text-primary-600 font-medium">ተደጋጋሚ ጥያቄዎች</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">ተደጋጋሚ ጥያቄዎችና መልሶች</h1>
                <p class="text-lg text-slate-600 max-w-3xl leading-relaxed">
                    ስለ ፌዴሬሽኑ አባልነት፣ የሕግ ድጋፍ፣ የኮሪደር ክትትልና አሰራሮች አስተማማኝና ይፋዊ መረጃዎችን እዚህ ያገኛሉ።
                </p>
            </div>
        </div>

        <!-- FAQ Content Section -->
        <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
            <!-- Search & Filters -->
            <div class="mb-10 space-y-4">
                <div class="relative">
                    <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
                    <input 
                        type="text" 
                        id="faq-search-input" 
                        placeholder="ጥያቄዎችን ወይም ቁልፍ ቃላትን ይፈልጉ (ለምሳሌ፡ አባልነት፣ መዋጮ፣ ኮሪደር፣ ደንቦች)..." 
                        class="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-300 rounded-xl shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                    />
                </div>

                <!-- Category Filters -->
                <div class="flex flex-wrap items-center gap-2 pt-2" id="faq-categories">
                    <button class="faq-filter-btn px-4 py-1.5 rounded-full text-xs font-semibold bg-primary-600 text-white shadow-sm" data-category="all">
                        ሁሉም ጥያቄዎች (10)
                    </button>
                    <button class="faq-filter-btn px-4 py-1.5 rounded-full text-xs font-medium bg-white text-slate-600 border border-slate-300 hover:bg-slate-50 transition-colors" data-category="membership">
                        አባልነትና መዋጮ
                    </button>
                    <button class="faq-filter-btn px-4 py-1.5 rounded-full text-xs font-medium bg-white text-slate-600 border border-slate-300 hover:bg-slate-50 transition-colors" data-category="advocacy">
                        የሕግና ፖሊሲ ድጋፍ
                    </button>
                    <button class="faq-filter-btn px-4 py-1.5 rounded-full text-xs font-medium bg-white text-slate-600 border border-slate-300 hover:bg-slate-50 transition-colors" data-category="operations">
                        የኮሪደሮች ስምሪት
                    </button>
                    <button class="faq-filter-btn px-4 py-1.5 rounded-full text-xs font-medium bg-white text-slate-600 border border-slate-300 hover:bg-slate-50 transition-colors" data-category="partnerships">
                        አጋርነትና ስልጠና
                    </button>
                </div>
            </div>

            <!-- FAQ Accordion List -->
            <div class="space-y-4" id="faq-items-container">
                <!-- Item 1 -->
                <div class="faq-item bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all" data-category="advocacy">
                    <button type="button" class="faq-accordion-header w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 text-xs font-bold flex items-center justify-center shrink-0">01</span>
                            <span class="text-base sm:text-lg font-bold text-slate-900">ኢትራአፌ ምንድን ነው? ሕጋዊ ሥልጣኑስ ከየት ይመነጫል?</span>
                        </div>
                        <span class="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 transition-transform duration-200 faq-icon">
                            <i class="fa-solid fa-chevron-down text-xs"></i>
                        </span>
                    </button>
                    <div class="faq-accordion-content hidden px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ) በኢፌዲሪ ሕገ-መንግሥት አንቀጽ 31 እና በአሠሪና ሠራተኛ አዋጅ ቁጥር 1156/2012 መሠረት በግንቦት 04 ቀን 2010 ዓ/ም ሕጋዊ የዕውቅና ምስክር ወረቀት ያገኘ ብሔራዊ ፌዴሬሽን ነው። የትራንስፖርት አሠሪዎችን በመንግሥት፣ በተቆጣጣሪ አካላትና በሠራተኛ ማኅበራት ፊት በብቸኝነት የሚወክል ሕጋዊ ተቋም ነው።
                    </div>
                </div>

                <!-- Item 2 -->
                <div class="faq-item bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all" data-category="membership">
                    <button type="button" class="faq-accordion-header w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 text-xs font-bold flex items-center justify-center shrink-0">02</span>
                            <span class="text-base sm:text-lg font-bold text-slate-900">የፌዴሬሽኑ አባል መሆን የሚችለው ማን ነው?</span>
                        </div>
                        <span class="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 transition-transform duration-200 faq-icon">
                            <i class="fa-solid fa-chevron-down text-xs"></i>
                        </span>
                    </button>
                    <div class="faq-accordion-content hidden px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        በኢትዮጵያ በሕግ አግባብ የተመዘገቡ የከባድ ጭነት ማኅበራት፣ የከተማና የሀገር አቋራጭ አውቶቡስ አሠሪዎች፣ የሎጂስቲክስና ደረቅ ወደብ አገልግሎት ሰጪዎች እንዲሁም የግል የጭነት ኦፕሬተሮች የፌዴሬሽኑ አባል መሆን ይችላሉ።
                    </div>
                </div>

                <!-- Item 3 -->
                <div class="faq-item bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all" data-category="membership">
                    <button type="button" class="faq-accordion-header w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 text-xs font-bold flex items-center justify-center shrink-0">03</span>
                            <span class="text-base sm:text-lg font-bold text-slate-900">ፌዴሬሽኑ ለአባላት ምን ዓይነት የሕግ ከለላ ይሰጣል?</span>
                        </div>
                        <span class="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 transition-transform duration-200 faq-icon">
                            <i class="fa-solid fa-chevron-down text-xs"></i>
                        </span>
                    </button>
                    <div class="faq-accordion-content hidden px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        ፌዴሬሽኑ አባላትን በፍርድ ቤቶች፣ በአስተዳደራዊ መድረኮችና በግልግል ጉባኤዎች ፊት ይወክላል:: በሠራተኛ ክርክሮች፣ በሕገወጥ የክፍያ ጥያቄዎችና በኮሪደሮች መስተጓጎል ላይ ተቋማዊ የጠበቃ ከለላ ይሰጣል።
                    </div>
                </div>

                <!-- Item 4 -->
                <div class="faq-item bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all" data-category="operations">
                    <button type="button" class="faq-accordion-header w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 text-xs font-bold flex items-center justify-center shrink-0">04</span>
                            <span class="text-base sm:text-lg font-bold text-slate-900">የንግድ ኮሪደሮች ክትትል እንዴት ይከናወናል?</span>
                        </div>
                        <span class="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 transition-transform duration-200 faq-icon">
                            <i class="fa-solid fa-chevron-down text-xs"></i>
                        </span>
                    </button>
                    <div class="faq-accordion-content hidden px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        ፌዴሬሽኑ በጅቡቲ፣ ሞጆ፣ ሞያሌና በርበራ መስመሮች ላይ ያሉ የፍተሻ ጣቢያዎችን፣ የጉምሩክ ክሊራንስንና የትራንዚት ቆይታን በየዕለቱ ይከታተላል:: በተጨማሪም የ24/7 የድንገተኛ አደጋ የእርዳታ መስመር ያቀርባል።
                    </div>
                </div>

                <!-- Item 5 -->
                <div class="faq-item bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all" data-category="advocacy">
                    <button type="button" class="faq-accordion-header w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 text-xs font-bold flex items-center justify-center shrink-0">05</span>
                            <span class="text-base sm:text-lg font-bold text-slate-900">የኅብረት ስምምነት ድርድር እንዴት ይካሄዳል?</span>
                        </div>
                        <span class="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 transition-transform duration-200 faq-icon">
                            <i class="fa-solid fa-chevron-down text-xs"></i>
                        </span>
                    </button>
                    <div class="faq-accordion-content hidden px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        በአዋጅ ቁጥር 1156/2012 መሠረት ፌዴሬሽኑ የትራንስፖርት አሠሪዎችን ወክሎ ከሠራተኛ ማኅበራት ጋር ይደራደራል:: የሥራ ሁኔታዎች፣ የደህንነት መስፈርቶችና የደመወዝ ስምምነቶች የአሠሪዎችን አቅም ባገናዘበና ሰላማዊ ግንኙነትን በሚያረጋግጥ መልኩ እንዲፈጸሙ ያደርጋል።
                    </div>
                </div>
            </div>
        </section>
    </main>

    ${renderFooter("አማ")}
`;

export default {
  title: {
    ENG: "Frequently Asked Questions - Ethiopian Transport Employers Federation",
    "አማ": "ተደጋጋሚ ጥያቄዎች - የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን",
  },
  markup: {
    ENG: faqEng,
    "አማ": faqAm,
  },
};
