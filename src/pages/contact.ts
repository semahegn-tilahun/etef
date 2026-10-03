import { renderNavbar, renderFooter } from "../layout";

const contactEng = `
    ${renderNavbar("/contact", "ENG")}

    <main class="flex-grow pb-24">
        <div class="relative text-white pt-12 pb-16 overflow-hidden bg-slate-950 mb-10">
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <img src="/images/hero_expressway.jpg" class="w-full h-full object-cover object-center animate-slow-motion filter brightness-95" />
                <div class="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-900/80 to-primary-950/90"></div>
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
                                <span class="text-white font-semibold">Contact Us</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <h1 class="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">Contact ETEF Secretariat</h1>
                <p class="text-lg text-blue-100 max-w-3xl leading-relaxed">
                    Have questions about membership, transport policy advocacy, or corridor assistance? Our Addis Ababa Secretariat team is here to support you.
                </p>
            </div>
        </div>

        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
            <!-- 3 Top Info Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
                <!-- Location Card -->
                <div class="bg-white rounded-lg border border-slate-200 p-8 shadow-sm flex flex-col items-center text-center">
                    <div class="w-14 h-14 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-2xl mb-5 border border-primary-100">
                        <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <span class="text-[11px] font-bold text-primary-600 uppercase tracking-wider mb-2">Secretariat Headquarters</span>
                    <h3 class="text-lg font-bold text-slate-900 mb-2">Addis Ababa, Ethiopia</h3>
                    <p class="text-xs text-slate-600 leading-relaxed mb-4">
                        Kirkos Sub-City, Commercial Transportation District, Secretariat Office
                    </p>
                    <span class="text-xs text-slate-500 font-medium mt-auto bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 w-full">
                        Mon – Fri: 8:30 AM – 5:30 PM (EAT)
                    </span>
                </div>

                <!-- Phone Card -->
                <div class="bg-white rounded-lg border border-slate-200 p-8 shadow-sm flex flex-col items-center text-center">
                    <div class="w-14 h-14 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-2xl mb-5 border border-primary-100">
                        <i class="fa-solid fa-phone"></i>
                    </div>
                    <span class="text-[11px] font-bold text-primary-600 uppercase tracking-wider mb-2">Telephone Inquiries</span>
                    <a href="tel:+251114717787" class="text-lg font-bold text-slate-900 hover:text-primary-600 transition-colors mb-1">
                        +251 11 4717787
                    </a>
                    <a href="tel:+251911223344" class="text-sm font-semibold text-slate-700 hover:text-primary-600 transition-colors mb-2">
                        +251 91 122 3344
                    </a>
                    <p class="text-xs text-slate-600 leading-relaxed mb-4">
                        Direct Secretariat & Member Relations Switchboard
                    </p>
                    <span class="text-xs text-slate-500 font-medium mt-auto bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 w-full">
                        Available during official working hours
                    </span>
                </div>

                <!-- Email Card -->
                <div class="bg-white rounded-lg border border-slate-200 p-8 shadow-sm flex flex-col items-center text-center">
                    <div class="w-14 h-14 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-2xl mb-5 border border-primary-100">
                        <i class="fa-solid fa-envelope"></i>
                    </div>
                    <span class="text-[11px] font-bold text-primary-600 uppercase tracking-wider mb-2">Official Inboxes</span>
                    <a href="mailto:info@etef.org.et" class="text-lg font-bold text-slate-900 hover:text-primary-600 transition-colors mb-1">
                        info@etef.org.et
                    </a>
                    <a href="mailto:ethtransfed@gmail.com" class="text-sm font-semibold text-slate-700 hover:text-primary-600 transition-colors mb-2">
                        ethtransfed@gmail.com
                    </a>
                    <p class="text-xs text-slate-600 leading-relaxed mb-4">
                        General inquiries, submissions, and official communications
                    </p>
                    <span class="text-xs text-slate-500 font-medium mt-auto bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 w-full">
                        Typically answered within 24 hours
                    </span>
                </div>
            </div>

            <!-- Two-Column Contact Form and Directorate Directory -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <!-- Left: Interactive Form -->
                <div class="lg:col-span-7 bg-white rounded-lg border border-slate-200 p-8 sm:p-10 shadow-sm">
                    <div class="mb-6">
                        <span class="text-xs font-bold text-primary-600 uppercase tracking-wider bg-primary-50 px-3 py-1 rounded-full border border-primary-100">Direct Communication</span>
                        <h2 class="text-2xl font-bold text-slate-900 mt-2">Send a Message to the Secretariat</h2>
                        <p class="text-slate-600 text-xs sm:text-sm mt-1">Fill out the form below and an ETEF officer will review your request and get back to you promptly.</p>
                    </div>

                    <div id="contact-form-feedback" class="hidden mb-6 p-4 rounded-lg border"></div>

                    <form id="contact-form" class="space-y-5">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label for="contact-name" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Full Name *</label>
                                <input 
                                    type="text" 
                                    id="contact-name" 
                                    name="name" 
                                    required 
                                    placeholder="e.g. Abebe Kebede" 
                                    class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                />
                            </div>
                            <div>
                                <label for="contact-org" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Organization / Company</label>
                                <input 
                                    type="text" 
                                    id="contact-org" 
                                    name="organization" 
                                    placeholder="e.g. Horn Freight Logistics" 
                                    class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                />
                            </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label for="contact-email" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Email Address *</label>
                                <input 
                                    type="email" 
                                    id="contact-email" 
                                    name="email" 
                                    required 
                                    placeholder="name@company.com" 
                                    class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                />
                            </div>
                            <div>
                                <label for="contact-phone" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Phone Number *</label>
                                <input 
                                    type="tel" 
                                    id="contact-phone" 
                                    name="phone" 
                                    required 
                                    placeholder="+251 91 123 4567" 
                                    class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <label for="contact-subject" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Subject / Department *</label>
                            <select 
                                id="contact-subject" 
                                name="subject" 
                                required 
                                class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                            >
                                <option value="">Select an inquiry category</option>
                                <option value="membership">Membership Application & Verification</option>
                                <option value="legal">Legal Representation & Labor Arbitration</option>
                                <option value="corridor">Corridor Advisory & Emergency Logistics</option>
                                <option value="advocacy">Policy, Proclamations & Tariff Harmonization</option>
                                <option value="general">General Federation Secretariat Inquiry</option>
                            </select>
                        </div>

                        <div>
                            <label for="contact-message" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Message / Case Details *</label>
                            <textarea 
                                id="contact-message" 
                                name="message" 
                                rows="5" 
                                required 
                                placeholder="Describe your question, request, or proposal in detail..." 
                                class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none"
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            id="contact-submit-btn" 
                            class="w-full sm:w-auto px-8 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                        >
                            <span>Send Message</span>
                            <i class="fa-solid fa-paper-plane text-xs"></i>
                        </button>
                    </form>
                </div>

                <!-- Right: Directorate Directory -->
                <div class="lg:col-span-5 space-y-6">
                    <div class="bg-white rounded-lg border border-slate-200 p-8 shadow-sm">
                        <h3 class="text-lg font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100">
                            Secretariat Directorates
                        </h3>
                        <div class="space-y-4 text-xs">
                            <div class="p-3.5 bg-slate-50 rounded-lg border border-slate-100">
                                <span class="font-bold text-slate-800 block text-sm">Membership & Credentials</span>
                                <p class="text-slate-500 mt-0.5">Association registration, dues calculations, and general assembly credentials.</p>
                                <span class="text-primary-600 font-semibold block mt-1.5">membership@etef.org.et</span>
                            </div>

                            <div class="p-3.5 bg-slate-50 rounded-lg border border-slate-100">
                                <span class="font-bold text-slate-800 block text-sm">Legal & Labor Relations</span>
                                <p class="text-slate-500 mt-0.5">Collective bargaining agreements, labor arbitration, and court advocacy.</p>
                                <span class="text-primary-600 font-semibold block mt-1.5">legal@etef.org.et</span>
                            </div>

                            <div class="p-3.5 bg-slate-50 rounded-lg border border-slate-100">
                                <span class="font-bold text-slate-800 block text-sm">Corridors & Logistics Watch</span>
                                <p class="text-slate-500 mt-0.5">Customs single-window clearance, border advisories, and breakdown support.</p>
                                <span class="text-primary-600 font-semibold block mt-1.5">logistics@etef.org.et</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    ${renderFooter("ENG")}
`;

const contactAm = `
    ${renderNavbar("/contact", "አማ")}

    <main class="flex-grow pb-24">
        <div class="relative text-white pt-12 pb-16 overflow-hidden bg-slate-950 mb-10">
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <img src="/images/hero_expressway.jpg" class="w-full h-full object-cover object-center animate-slow-motion filter brightness-95" />
                <div class="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-900/80 to-primary-950/90"></div>
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
                                <span class="text-white font-semibold">ያግኙን</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <h1 class="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">የፌዴሬሽኑን ሴክሬታሪያት ያነጋግሩ</h1>
                <p class="text-lg text-blue-100 max-w-3xl leading-relaxed">
                    ስለ አባልነት፣ የሕግ ድጋፍ ወይም የኮሪደሮች ሁኔታ ጥያቄ ወይም አስተያየት ካለዎት የአዲስ አበባ ዋና መሥሪያ ቤታችን ዝግጁ ነው።
                </p>
            </div>
        </div>

        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
            <!-- 3 Top Info Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
                <!-- Location Card -->
                <div class="bg-white rounded-lg border border-slate-200 p-8 shadow-sm flex flex-col items-center text-center">
                    <div class="w-14 h-14 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-2xl mb-5 border border-primary-100">
                        <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <span class="text-[11px] font-bold text-primary-600 uppercase tracking-wider mb-2">ዋና መሥሪያ ቤት</span>
                    <h3 class="text-lg font-bold text-slate-900 mb-2">አዲስ አበባ፣ ኢትዮጵያ</h3>
                    <p class="text-xs text-slate-600 leading-relaxed mb-4">
                        ቂርቆስ ክፍለ ከተማ፣ የንግድ ትራንስፖርት ማዕከል፣ የሴክሬታሪያት ቢሮ
                    </p>
                    <span class="text-xs text-slate-500 font-medium mt-auto bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 w-full">
                        ሰኞ – አርብ፡ ከጠዋቱ 2:30 – ከሰዓት 11:30
                    </span>
                </div>

                <!-- Phone Card -->
                <div class="bg-white rounded-lg border border-slate-200 p-8 shadow-sm flex flex-col items-center text-center">
                    <div class="w-14 h-14 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-2xl mb-5 border border-primary-100">
                        <i class="fa-solid fa-phone"></i>
                    </div>
                    <span class="text-[11px] font-bold text-primary-600 uppercase tracking-wider mb-2">የስልክ አድራሻ</span>
                    <a href="tel:+251114717787" class="text-lg font-bold text-slate-900 hover:text-primary-600 transition-colors mb-1">
                        +251 11 4717787
                    </a>
                    <a href="tel:+251911223344" class="text-sm font-semibold text-slate-700 hover:text-primary-600 transition-colors mb-2">
                        +251 91 122 3344
                    </a>
                    <p class="text-xs text-slate-600 leading-relaxed mb-4">
                        የሴክሬታሪያትና የአባላት ግንኙነት ቀጥታ መስመር
                    </p>
                    <span class="text-xs text-slate-500 font-medium mt-auto bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 w-full">
                        በሥራ ሰዓት ጥሪዎችን ይቀበላል
                    </span>
                </div>

                <!-- Email Card -->
                <div class="bg-white rounded-lg border border-slate-200 p-8 shadow-sm flex flex-col items-center text-center">
                    <div class="w-14 h-14 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-2xl mb-5 border border-primary-100">
                        <i class="fa-solid fa-envelope"></i>
                    </div>
                    <span class="text-[11px] font-bold text-primary-600 uppercase tracking-wider mb-2">ይፋዊ የኢሜይል አድራሻ</span>
                    <a href="mailto:info@etef.org.et" class="text-lg font-bold text-slate-900 hover:text-primary-600 transition-colors mb-1">
                        info@etef.org.et
                    </a>
                    <a href="mailto:ethtransfed@gmail.com" class="text-sm font-semibold text-slate-700 hover:text-primary-600 transition-colors mb-2">
                        ethtransfed@gmail.com
                    </a>
                    <p class="text-xs text-slate-600 leading-relaxed mb-4">
                        አጠቃላይ ጥያቄዎችና ይፋዊ የደብዳቤ መላኪያ
                    </p>
                    <span class="text-xs text-slate-500 font-medium mt-auto bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 w-full">
                        በ24 ሰዓት ውስጥ ምላሽ ይሰጣል
                    </span>
                </div>
            </div>

            <!-- Two-Column Contact Form and Directorate Directory -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <!-- Left: Interactive Form -->
                <div class="lg:col-span-7 bg-white rounded-lg border border-slate-200 p-8 sm:p-10 shadow-sm">
                    <div class="mb-6">
                        <span class="text-xs font-bold text-primary-600 uppercase tracking-wider bg-primary-50 px-3 py-1 rounded-full border border-primary-100">ቀጥታ መልዕክት</span>
                        <h2 class="text-2xl font-bold text-slate-900 mt-2">መልዕክትዎን ለሴክሬታሪያቱ ይላኩ</h2>
                        <p class="text-slate-600 text-xs sm:text-sm mt-1">ከታች ያለውን ቅጽ ይሙሉ፤ የፌዴሬሽኑ የሥራ ኃላፊ ተመልክቶ ፈጣን ምላሽ ይሰጥዎታል።</p>
                    </div>

                    <div id="contact-form-feedback" class="hidden mb-6 p-4 rounded-lg border"></div>

                    <form id="contact-form" class="space-y-5">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label for="contact-name" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">ሙሉ ስም *</label>
                                <input 
                                    type="text" 
                                    id="contact-name" 
                                    name="name" 
                                    required 
                                    placeholder="ለምሳሌ፡ አበበ ከበደ" 
                                    class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                />
                            </div>
                            <div>
                                <label for="contact-org" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">የድርጅቱ / ማኅበሩ ስም</label>
                                <input 
                                    type="text" 
                                    id="contact-org" 
                                    name="organization" 
                                    placeholder="ለምሳሌ፡ ሆርን የጭነት ትራንስፖርት" 
                                    class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                />
                            </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label for="contact-email" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">ኢሜይል አድራሻ *</label>
                                <input 
                                    type="email" 
                                    id="contact-email" 
                                    name="email" 
                                    required 
                                    placeholder="name@company.com" 
                                    class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                />
                            </div>
                            <div>
                                <label for="contact-phone" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">ስልክ ቁጥር *</label>
                                <input 
                                    type="tel" 
                                    id="contact-phone" 
                                    name="phone" 
                                    required 
                                    placeholder="+251 91 123 4567" 
                                    class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <label for="contact-subject" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">የጉዳዩ አይነት / ዳይሬክቶሬት *</label>
                            <select 
                                id="contact-subject" 
                                name="subject" 
                                required 
                                class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                            >
                                <option value="">የጉዳዩን ዘርፍ ይምረጡ</option>
                                <option value="membership">የአባልነት ማመልከቻና ማረጋገጫ</option>
                                <option value="legal">የሕግ ውክልናና የሠራተኛ ክርክር</option>
                                <option value="corridor">የኮሪደር ክትትልና ድንገተኛ ድጋፍ</option>
                                <option value="advocacy">የፖሊሲና የታሪፍ ጥናቶች</option>
                                <option value="general">አጠቃላይ የሴክሬታሪያት ጉዳዮች</option>
                            </select>
                        </div>

                        <div>
                            <label for="contact-message" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">ዝርዝር መልዕክት *</label>
                            <textarea 
                                id="contact-message" 
                                name="message" 
                                rows="5" 
                                required 
                                placeholder="ጥያቄዎን ወይም ጉዳይዎን በዝርዝር እዚህ ይጻፉ..." 
                                class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none"
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            id="contact-submit-btn" 
                            class="w-full sm:w-auto px-8 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                        >
                            <span>መልዕክት ላክ</span>
                            <i class="fa-solid fa-paper-plane text-xs"></i>
                        </button>
                    </form>
                </div>

                <!-- Right: Directorate Directory -->
                <div class="lg:col-span-5 space-y-6">
                    <div class="bg-white rounded-lg border border-slate-200 p-8 shadow-sm">
                        <h3 class="text-lg font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100">
                            የሴክሬታሪያቱ ዳይሬክቶሬቶች
                        </h3>
                        <div class="space-y-4 text-xs">
                            <div class="p-3.5 bg-slate-50 rounded-lg border border-slate-100">
                                <span class="font-bold text-slate-800 block text-sm">የአባላትና ድርጅት ጉዳዮች</span>
                                <p class="text-slate-500 mt-0.5">የማኅበራት ምዝገባ፣ ዓመታዊ መዋጮዎችና የጠቅላላ ጉባኤ ተወካዮች ማረጋገጫ።</p>
                                <span class="text-primary-600 font-semibold block mt-1.5">membership@etef.org.et</span>
                            </div>

                            <div class="p-3.5 bg-slate-50 rounded-lg border border-slate-100">
                                <span class="font-bold text-slate-800 block text-sm">የሕግና የኢንዱስትሪ ሰላም</span>
                                <p class="text-slate-500 mt-0.5">የኅብረት ስምምነት ድርድር፣ የግልግል ዳኝነትና የፍርድ ቤት ውክልና።</p>
                                <span class="text-primary-600 font-semibold block mt-1.5">legal@etef.org.et</span>
                            </div>

                            <div class="p-3.5 bg-slate-50 rounded-lg border border-slate-100">
                                <span class="font-bold text-slate-800 block text-sm">የኮሪደሮችና ሎጂስቲክስ ክትትል</span>
                                <p class="text-slate-500 mt-0.5">የጉምሩክ ክሊራንስ፣ የድንበር መረጃዎችና የ24/7 የድንገተኛ አደጋ እርዳታ መስመር።</p>
                                <span class="text-primary-600 font-semibold block mt-1.5">logistics@etef.org.et</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    ${renderFooter("አማ")}
`;

export default {
  title: {
    ENG: "Contact Us - Ethiopian Transport Employers Federation",
    "አማ": "ያግኙን - የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን",
  },
  markup: {
    ENG: contactEng,
    "አማ": contactAm,
  },
};
