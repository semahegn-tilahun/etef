import { renderNavbar, renderFooter } from "../layout";

const faqEng = `
    ${renderNavbar("/faq", "ENG")}

    <main class="flex-grow pb-24">
        <div class="relative text-white pt-12 pb-16 overflow-hidden bg-primary-900 mb-10">
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <img src="/images/faq_hero_support.jpg" alt="Transport Advisory & FAQ Services" class="w-full h-full object-cover object-center animate-slow-motion filter brightness-105" />
                <div class="absolute inset-0 bg-gradient-to-r from-primary-900/75 via-blue-700/35 to-blue-400/15"></div>
                <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/25 via-transparent to-transparent"></div>
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <nav class="flex text-sm text-blue-100 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-house text-xs"></i> Home</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <i class="fa-solid fa-chevron-right text-xs mx-2 text-blue-200"></i>
                                <span class="text-white font-semibold">FAQ</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <h1 class="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 drop-shadow-md">Frequently Asked Questions</h1>
                <p class="text-lg text-blue-100 max-w-3xl leading-relaxed">
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
                        class="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-300 rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
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
                <div class="faq-item bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm transition-all" data-category="advocacy">
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
                <div class="faq-item bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm transition-all" data-category="membership">
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
                <div class="faq-item bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm transition-all" data-category="membership">
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
                <div class="faq-item bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm transition-all" data-category="operations">
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
                <div class="faq-item bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm transition-all" data-category="advocacy">
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

        <!-- Question / Inquiry Submission Form Section -->
        <section id="inquiry-form" class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 scroll-mt-28">
            <div class="rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden">
                <!-- Header Band -->
                <div class="bg-gradient-to-r from-primary-800 via-primary-700 to-blue-700 text-white p-8 sm:p-10 relative overflow-hidden">
                    <div class="absolute -right-16 -bottom-16 w-56 h-56 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
                    <div class="relative z-10">
                        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-sm text-white mb-3">
                            <i class="fa-solid fa-paper-plane text-xs"></i>
                            <span>Federation Inquiry Desk</span>
                        </div>
                        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight">Didn't Find Your Question? Submit Here</h2>
                        <p class="text-blue-100 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
                            If you have specific inquiries regarding membership criteria, regulatory policy dialogue, corridor disputes, or federation services, submit your question directly to the ETEF secretariat.
                        </p>
                    </div>
                </div>

                <!-- Form Content -->
                <div class="p-8 sm:p-10">
                    <div id="faq-page-submit-success" class="hidden mb-8 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 animate-in fade-in">
                        <div class="flex items-start gap-3">
                            <i class="fa-solid fa-circle-check text-emerald-600 text-xl mt-0.5"></i>
                            <div>
                                <h4 class="font-bold text-base text-emerald-950">Inquiry Submitted Successfully</h4>
                                <p class="text-xs sm:text-sm text-emerald-800 mt-1">
                                    Thank you. Your inquiry has been routed to the relevant ETEF Directorate. A representative will contact you via email or phone within 2 business days.
                                </p>
                            </div>
                        </div>
                    </div>

                    <form id="faq-page-inquiry-form" class="space-y-6">
                        <div class="grid sm:grid-cols-2 gap-6">
                            <div>
                                <label for="faq-name" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Full Name *</label>
                                <input type="text" id="faq-name" required placeholder="e.g. Abebe Balcha" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all" />
                            </div>
                            <div>
                                <label for="faq-org" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Transport Enterprise / Association *</label>
                                <input type="text" id="faq-org" required placeholder="e.g. Ethio Freight Logistics PLC" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all" />
                            </div>
                        </div>

                        <div class="grid sm:grid-cols-2 gap-6">
                            <div>
                                <label for="faq-email" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Email Address *</label>
                                <input type="email" id="faq-email" required placeholder="name@company.com" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all" />
                            </div>
                            <div>
                                <label for="faq-phone" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Phone Number *</label>
                                <input type="tel" id="faq-phone" required placeholder="+251 9... / +251 11..." class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all" />
                            </div>
                        </div>

                        <div>
                            <label for="faq-topic" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Inquiry Category *</label>
                            <select id="faq-topic" required class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all">
                                <option value="" disabled selected>Select an inquiry area...</option>
                                <option value="membership">Membership Tiers & Annual Dues</option>
                                <option value="advocacy">Policy, Labor & Regulatory Advocacy</option>
                                <option value="corridor">Trade Corridor & Port Demurrage Issues</option>
                                <option value="training">Training, Certification & Workshops</option>
                                <option value="promotion">Summit, Expo & Promotional Event Inquiries</option>
                                <option value="general">Other Federation Inquiries</option>
                            </select>
                        </div>

                        <div>
                            <label for="faq-message" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Your Question / Inquiry *</label>
                            <textarea id="faq-message" rows="4" required placeholder="Please describe your question or issue in detail..." class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all leading-relaxed"></textarea>
                        </div>

                        <div class="flex flex-wrap items-center justify-between gap-4 pt-2">
                            <p class="text-xs text-slate-500">
                                <i class="fa-solid fa-lock text-slate-400 mr-1"></i> Your inquiry will be treated confidentially by ETEF Secretariat.
                            </p>
                            <button type="submit" id="faq-submit-btn" class="px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-500 hover:to-blue-500 shadow-lg shadow-primary-600/30 hover:shadow-primary-600/50 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer">
                                <i class="fa-solid fa-paper-plane mr-2 text-xs"></i>
                                <span>Submit Question</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </main>

    ${renderFooter("ENG")}
`;

const faqAm = `
    ${renderNavbar("/faq", "አማ")}

    <main class="flex-grow pb-24">
        <div class="relative text-white pt-12 pb-16 overflow-hidden bg-primary-900 mb-10">
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <img src="/images/faq_hero_support.jpg" alt="የትራንስፖርት መረጃና ተደጋጋሚ ጥያቄዎች" class="w-full h-full object-cover object-center animate-slow-motion filter brightness-105" />
                <div class="absolute inset-0 bg-gradient-to-r from-primary-900/75 via-blue-700/35 to-blue-400/15"></div>
                <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/25 via-transparent to-transparent"></div>
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <nav class="flex text-sm text-blue-100 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-house text-xs"></i> መነሻ</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <i class="fa-solid fa-chevron-right text-xs mx-2 text-blue-200"></i>
                                <span class="text-white font-semibold">በየጥ</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <h1 class="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 drop-shadow-md">ተደጋጋሚ ጥያቄዎችና መልሶች</h1>
                <p class="text-lg text-blue-100 max-w-3xl leading-relaxed">
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
                        class="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-300 rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
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
                <div class="faq-item bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm transition-all" data-category="advocacy">
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
                <div class="faq-item bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm transition-all" data-category="membership">
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
                <div class="faq-item bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm transition-all" data-category="membership">
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
                <div class="faq-item bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm transition-all" data-category="operations">
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
                <div class="faq-item bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm transition-all" data-category="advocacy">
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

        <!-- Question / Inquiry Submission Form Section (Amharic) -->
        <section id="inquiry-form" class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 scroll-mt-28">
            <div class="rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden">
                <!-- Header Band -->
                <div class="bg-gradient-to-r from-primary-800 via-primary-700 to-blue-700 text-white p-8 sm:p-10 relative overflow-hidden">
                    <div class="absolute -right-16 -bottom-16 w-56 h-56 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
                    <div class="relative z-10">
                        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-sm text-white mb-3">
                            <i class="fa-solid fa-paper-plane text-xs"></i>
                            <span>የፌዴሬሽኑ የጥያቄዎችና አስተያየት መቀበያ ዴስክ</span>
                        </div>
                        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight">ጥያቄዎን አላገኙም? ጥያቄዎን ወይም አስተያየትዎን እዚህ ያስገቡ</h2>
                        <p class="text-blue-100 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
                            ስለ አባልነት፣ የሕግና የፖሊሲ ጥብቅና፣ የኮሪደር እንቅፋቶች ወይም የፌዴሬሽኑ አገልግሎቶች ማንኛውም ጥያቄ ካለዎት በቀጥታ ለኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን ዋና ጽሕፈት ቤት ያስገቡ።
                        </p>
                    </div>
                </div>

                <!-- Form Content -->
                <div class="p-8 sm:p-10">
                    <div id="faq-page-submit-success" class="hidden mb-8 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 animate-in fade-in">
                        <div class="flex items-start gap-3">
                            <i class="fa-solid fa-circle-check text-emerald-600 text-xl mt-0.5"></i>
                            <div>
                                <h4 class="font-bold text-base text-emerald-950">ጥያቄዎ በተሳካ ሁኔታ ተልኳል</h4>
                                <p class="text-xs sm:text-sm text-emerald-800 mt-1">
                                    እናመሰግናለን፤ የሚመለከተው የፌዴሬሽኑ የስራ ክፍል በጥያቄዎ ላይ ተገቢውን ምላሽ በኢሜይል ወይም በስልክ በ2 የስራ ቀናት ውስጥ ያደርሳል።
                                </p>
                            </div>
                        </div>
                    </div>

                    <form id="faq-page-inquiry-form" class="space-y-6">
                        <div class="grid sm:grid-cols-2 gap-6">
                            <div>
                                <label for="faq-name" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">ሙሉ ስም *</label>
                                <input type="text" id="faq-name" required placeholder="ለምሳሌ፡ አበበ ባልቻ" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all" />
                            </div>
                            <div>
                                <label for="faq-org" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">የትራንስፖርት ድርጅት ወይም ማኅበር ስም *</label>
                                <input type="text" id="faq-org" required placeholder="ለምሳሌ፡ ኢትዮ የጭነት ትራንስፖርት ኃ/የተ/የግ/ማ" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all" />
                            </div>
                        </div>

                        <div class="grid sm:grid-cols-2 gap-6">
                            <div>
                                <label for="faq-email" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">የኢሜይል አድራሻ *</label>
                                <input type="email" id="faq-email" required placeholder="name@company.com" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all" />
                            </div>
                            <div>
                                <label for="faq-phone" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">ስልክ ቁጥር *</label>
                                <input type="tel" id="faq-phone" required placeholder="+251 9... / +251 11..." class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all" />
                            </div>
                        </div>

                        <div>
                            <label for="faq-topic" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">የጥያቄው ዘርፍ *</label>
                            <select id="faq-topic" required class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all">
                                <option value="" disabled selected>የጥያቄዎን ዘርፍ ይምረጡ...</option>
                                <option value="membership">የአባልነትና የመዋጮ ሁኔታዎች</option>
                                <option value="advocacy">የፖሊሲ፣ የሰራተኛና የሕግ ከለላ</option>
                                <option value="corridor">የንግድ ኮሪደሮች፣ ወደብና የዲመሬጅ ጉዳዮች</option>
                                <option value="training">ስልጠናዎችና የተሽከርካሪ አሽከርካሪዎች ማረጋገጫ</option>
                                <option value="promotion">የጉባኤ፣ ኤክስፖና የማስተዋወቂያ መርሐ-ግብር</option>
                                <option value="general">ሌሎች አጠቃላይ የፌዴሬሽኑ ጥያቄዎች</option>
                            </select>
                        </div>

                        <div>
                            <label for="faq-message" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">ጥያቄዎን ወይም አስተያየትዎን በዝርዝር ይግለጹ *</label>
                            <textarea id="faq-message" rows="4" required placeholder="እባክዎን ጥያቄዎን ወይም ጉዳይዎን በዝርዝር እዚህ ያብራሩ..." class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all leading-relaxed"></textarea>
                        </div>

                        <div class="flex flex-wrap items-center justify-between gap-4 pt-2">
                            <p class="text-xs text-slate-500">
                                <i class="fa-solid fa-lock text-slate-400 mr-1"></i> የሚያስገቡት መረጃ በፌዴሬሽኑ ዋና ጽሕፈት ቤት በሚስጥር ይጠበቃል።
                            </p>
                            <button type="submit" id="faq-submit-btn" class="px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-500 hover:to-blue-500 shadow-lg shadow-primary-600/30 hover:shadow-primary-600/50 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer">
                                <i class="fa-solid fa-paper-plane mr-2 text-xs"></i>
                                <span>ጥያቄዎን ያስገቡ</span>
                            </button>
                        </div>
                    </form>
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
