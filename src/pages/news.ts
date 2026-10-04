import { renderNavbar, renderFooter } from "../layout";

const newsEng = `
    ${renderNavbar("/news", "ENG")}

    <main class="flex-grow pb-24">
        <div class="relative text-white pt-12 pb-16 overflow-hidden bg-primary-900 mb-10">
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <img src="/images/news_hero_media.jpg" alt="Transport News & Media Briefing" class="w-full h-full object-cover object-center animate-slow-motion filter brightness-105" />
                <div class="absolute inset-0 bg-gradient-to-r from-primary-900/75 via-blue-700/35 to-blue-400/15"></div>
                <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/25 via-transparent to-transparent"></div>
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 relative z-10">
            <!-- Breadcrumbs -->
            <nav class="flex text-sm text-blue-100 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-house text-xs"></i> Home</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <i class="fa-solid fa-chevron-right text-xs mx-2 text-blue-200"></i>
                                <span class="text-white font-semibold">News & Updates</span>
                            </div>
                        </li>
                    </ol>
                </nav>

            <!-- Page Title -->
            <h1 class="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 drop-shadow-md">News and Operational Bulletins</h1>
            <p class="text-lg text-blue-100 max-w-3xl">Strategic insights, trade corridor advisories, and policy perspectives for Ethiopia's commercial transport employers.</p>
        </div>
        </div>
        <!-- Featured Story -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl shadow-slate-200/60 border border-slate-200 flex flex-col lg:flex-row group cursor-pointer transition-all duration-300">
                <div class="lg:w-3/5 h-64 lg:h-[400px] overflow-hidden relative">
                    <img src="/images/news_mountain_truck.jpg" alt="Transport Truck on Mountain Road" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out">
                </div>
                
                <div class="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                    <div class="mb-4">
                        <span class="text-xs font-bold tracking-wider text-primary-600 uppercase mb-2 block">Featured Story</span>
                        <div class="flex items-center gap-2 text-sm text-slate-500">
                            <span class="font-medium text-primary-600">Industry Perspectives</span>
                            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span>24 September 2026</span>
                            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span>5 min read</span>
                        </div>
                    </div>
                    
                    <h2 class="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-primary-600 transition-colors">A Shared Road to a Stronger Transport Industry</h2>
                    
                    <p class="text-slate-600 text-lg mb-8 line-clamp-3">
                        Why constructive dialogue, safer transit operations, and institutional legal defense matter for transport employers and the national economy.
                    </p>
                    
                    <div>
                        <button type="button" data-article-id="shared-road" class="article-modal-trigger inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-sm cursor-pointer border-none">
                            <span>Read Full Story</span> <i class="fa-solid fa-arrow-right text-sm"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- News Feed & Search -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                <div>
                    <h2 class="text-2xl font-bold text-slate-900 mb-2">Latest News</h2>
                    <p class="text-slate-600">Browse verified sector bulletins, regulatory alerts, and association announcements.</p>
                </div>
                
                <!-- Search Bar -->
                <div class="relative w-full md:w-72">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <i class="fa-solid fa-magnifying-glass text-slate-400"></i>
                    </div>
                    <input type="text" id="news-search-input" placeholder="Search news by keyword..." class="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow bg-white text-sm">
                </div>
            </div>

            <!-- Category Filters -->
            <div class="flex flex-wrap gap-2 mb-10 border-b border-slate-200 pb-6">
                <button type="button" data-category="all" class="news-filter-btn px-4 py-2 bg-primary-600 text-white font-medium text-sm rounded-full shadow-sm transition-colors cursor-pointer border-none">All News</button>
                <button type="button" data-category="association" class="news-filter-btn px-4 py-2 bg-white text-slate-600 hover:bg-slate-50 font-medium text-sm rounded-full border border-slate-200 transition-colors cursor-pointer">Association Updates</button>
                <button type="button" data-category="industry" class="news-filter-btn px-4 py-2 bg-white text-slate-600 hover:bg-slate-50 font-medium text-sm rounded-full border border-slate-200 transition-colors cursor-pointer">Industry Perspectives</button>
                <button type="button" data-category="safety" class="news-filter-btn px-4 py-2 bg-white text-slate-600 hover:bg-slate-50 font-medium text-sm rounded-full border border-slate-200 transition-colors cursor-pointer">Safety & Skills</button>
                <button type="button" data-category="events" class="news-filter-btn px-4 py-2 bg-white text-slate-600 hover:bg-slate-50 font-medium text-sm rounded-full border border-slate-200 transition-colors cursor-pointer">Events & Dialogue</button>
            </div>

            <!-- Articles Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
                <!-- Article Card 1 -->
                <article data-article-id="safer-journeys" data-category="safety" class="news-card article-modal-trigger bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer">
                    <div class="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                        <img src="/images/news_mechanic_tire.jpg" alt="Mechanic working on commercial truck tire" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <div class="flex items-center gap-2 text-xs font-medium mb-3">
                            <span class="text-primary-600 font-semibold">Safety & Skills</span>
                            <span class="text-slate-400 ml-1">22 September 2026</span>
                            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span class="text-slate-400">4 min read</span>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors leading-tight">Safer Journeys Begin Before the Engine Starts</h3>
                        <p class="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">A practical look at preventative maintenance checklists and developing an enterprise-wide culture of safety.</p>
                        <button type="button" data-article-id="safer-journeys" class="article-modal-trigger text-primary-600 text-sm font-semibold inline-flex items-center gap-2 hover:text-primary-800 transition-colors mt-auto w-max bg-transparent border-none p-0 cursor-pointer">
                            <span>Read Article</span> <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                </article>

                <!-- Article Card 2 -->
                <article data-article-id="employer-voice" data-category="association" class="news-card article-modal-trigger bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer">
                    <div class="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                        <img src="/images/news_association_meeting.jpg" alt="Association Executive Meeting" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <div class="flex items-center gap-2 text-xs font-medium mb-3">
                            <span class="text-primary-600 font-semibold">Association Updates</span>
                            <span class="text-slate-400 ml-1">18 September 2026</span>
                            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span class="text-slate-400">3 min read</span>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors leading-tight">Making Space for the Transport Employer Voice</h3>
                        <p class="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">How active member feedback channels help craft effective submissions during tripartite labor negotiations.</p>
                        <button type="button" data-article-id="employer-voice" class="article-modal-trigger text-primary-600 text-sm font-semibold inline-flex items-center gap-2 hover:text-primary-800 transition-colors mt-auto w-max bg-transparent border-none p-0 cursor-pointer">
                            <span>Read Article</span> <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                </article>

                <!-- Article Card 3 -->
                <article data-article-id="everyday-costs" data-category="industry" class="news-card article-modal-trigger bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer">
                    <div class="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                        <img src="/images/news_logistics_hub.jpg" alt="Multimodal Logistics Freight Terminal" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <div class="flex items-center gap-2 text-xs font-medium mb-3">
                            <span class="text-primary-600 font-semibold">Industry Perspectives</span>
                            <span class="text-slate-400 ml-1">15 September 2026</span>
                            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span class="text-slate-400">6 min read</span>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors leading-tight">Managing Everyday Operating Costs in Commercial Haulage</h3>
                        <p class="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">Examining key cost drivers including spare parts tariffs, border dwell times, and corridor toll schedules.</p>
                        <button type="button" data-article-id="everyday-costs" class="article-modal-trigger text-primary-600 text-sm font-semibold inline-flex items-center gap-2 hover:text-primary-800 transition-colors mt-auto w-max bg-transparent border-none p-0 cursor-pointer">
                            <span>Read Article</span> <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                </article>

                <!-- Article Card 4 -->
                <article data-article-id="transport-roundtable" data-category="events" class="news-card article-modal-trigger bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer">
                    <div class="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                        <img src="/images/news_roundtable.jpg" alt="Industry Stakeholders in Dialogue" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <div class="flex items-center gap-2 text-xs font-medium mb-3">
                            <span class="text-primary-600 font-semibold">Events & Dialogue</span>
                            <span class="text-slate-400 ml-1">11 September 2026</span>
                            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span class="text-slate-400">3 min read</span>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors leading-tight">Key Outcomes from the National Transport Tripartite Forum</h3>
                        <p class="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">ETEF delegates secure vital consensus on port demurrage reductions and single-window customs processing.</p>
                        <button type="button" data-article-id="transport-roundtable" class="article-modal-trigger text-primary-600 text-sm font-semibold inline-flex items-center gap-2 hover:text-primary-800 transition-colors mt-auto w-max bg-transparent border-none p-0 cursor-pointer">
                            <span>Read Article</span> <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                </article>

                <!-- Article Card 5 -->
                <article data-article-id="better-maintenance" data-category="safety" class="news-card article-modal-trigger bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer">
                    <div class="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                        <img src="/images/news_workshop_records.jpg" alt="Workshop Quality Inspection" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <div class="flex items-center gap-2 text-xs font-medium mb-3">
                            <span class="text-primary-600 font-semibold">Safety & Skills</span>
                            <span class="text-slate-400 ml-1">08 September 2026</span>
                            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span class="text-slate-400">4 min read</span>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors leading-tight">Fleet Maintenance Begins with Standardized Records</h3>
                        <p class="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">Adopting structured maintenance logs to avoid roadside breakdowns and extend heavy vehicle service life.</p>
                        <button type="button" data-article-id="better-maintenance" class="article-modal-trigger text-primary-600 text-sm font-semibold inline-flex items-center gap-2 hover:text-primary-800 transition-colors mt-auto w-max bg-transparent border-none p-0 cursor-pointer">
                            <span>Read Article</span> <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                </article>

                <!-- Article Card 6 -->
                <article data-article-id="meaningful-membership" data-category="association" class="news-card article-modal-trigger bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer">
                    <div class="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                        <img src="/images/news_office_admin.jpg" alt="Federation Member Coordination Desk" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <div class="flex items-center gap-2 text-xs font-medium mb-3">
                            <span class="text-primary-600 font-semibold">Association Updates</span>
                            <span class="text-slate-400 ml-1">04 September 2026</span>
                            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span class="text-slate-400">2 min read</span>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors leading-tight">A First Step Towards Federation Membership Benefits</h3>
                        <p class="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">A roadmap for regional transport associations and commercial hauliers seeking certified statutory membership.</p>
                        <button type="button" data-article-id="meaningful-membership" class="article-modal-trigger text-primary-600 text-sm font-semibold inline-flex items-center gap-2 hover:text-primary-800 transition-colors mt-auto w-max bg-transparent border-none p-0 cursor-pointer">
                            <span>Read Article</span> <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                </article>

                <!-- No Results State -->
                <div id="news-no-results" class="hidden col-span-1 md:col-span-2 lg:col-span-3 text-center py-16 bg-white rounded-lg border border-dashed border-slate-200 p-8">
                    <div class="w-12 h-12 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-3 text-lg">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <h4 class="font-bold text-slate-800 text-lg mb-1">No articles found</h4>
                    <p class="text-slate-500 text-sm">Try adjusting your search terms or category filter to discover articles.</p>
                </div>
            </div>
        </section>
    </main>

    ${renderFooter("ENG")}
`;

const newsAm = `
    ${renderNavbar("/news", "አማ")}

    <main class="flex-grow pb-24">
        <div class="relative text-white pt-12 pb-16 overflow-hidden bg-primary-900 mb-10">
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <img src="/images/news_hero_media.jpg" alt="የትራንስፖርት ዜናዎችና ጋዜጣዊ መግለጫ" class="w-full h-full object-cover object-center animate-slow-motion filter brightness-105" />
                <div class="absolute inset-0 bg-gradient-to-r from-primary-900/75 via-blue-700/35 to-blue-400/15"></div>
                <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/25 via-transparent to-transparent"></div>
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 relative z-10">
            <!-- Breadcrumbs -->
            <nav class="flex text-sm text-blue-100 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-house text-xs"></i> መነሻ</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <i class="fa-solid fa-chevron-right text-xs mx-2 text-blue-200"></i>
                                <span class="text-white font-semibold">ዜና እና መረጃ</span>
                            </div>
                        </li>
                    </ol>
                </nav>

            <!-- Page Title -->
            <h1 class="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 drop-shadow-md">ዜናዎችና ወቅታዊ መረጃዎች</h1>
            <p class="text-lg text-blue-100 max-w-3xl">ለኢትዮጵያ የንግድ ትራንስፖርት አሠሪዎች ጠቃሚ የሆኑ ስትራቴጂካዊ ግንዛቤዎች፣ የኮሪደር ማሳሰቢያዎችና የፖሊሲ መረጃዎች።</p>
        </div>
        </div>
        <!-- Featured Story -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl shadow-slate-200/60 border border-slate-200 flex flex-col lg:flex-row group cursor-pointer transition-all duration-300">
                <div class="lg:w-3/5 h-64 lg:h-[400px] overflow-hidden relative">
                    <img src="/images/news_mountain_truck.jpg" alt="የጭነት መኪና በተራራማ መንገድ ላይ" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out">
                </div>
                
                <div class="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                    <div class="mb-4">
                        <span class="text-xs font-bold tracking-wider text-primary-600 uppercase mb-2 block">ዋና ዜና</span>
                        <div class="flex items-center gap-2 text-sm text-slate-500">
                            <span class="font-medium text-primary-600">የኢንዱስትሪ ዕይታዎች</span>
                            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span>መስከረም 14 ቀን 2019</span>
                            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span>የ5 ደቂቃ ንባብ</span>
                        </div>
                    </div>
                    
                    <h2 class="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-primary-600 transition-colors">ጠንካራ የትራንስፖርት ኢንዱስትሪን ለመገንባት የጋራ ጉዞ</h2>
                    
                    <p class="text-slate-600 text-lg mb-8 line-clamp-3">
                        ገንቢ ውይይት፣ አስተማማኝ የስምሪት ደህንነትና ተቋማዊ የሕግ ድጋፍ ለትራንስፖርት አሠሪዎችና ለሀገራዊ ኢኮኖሚው ያለው ከፍተኛ ፋይዳ።
                    </p>
                    
                    <div>
                        <button type="button" data-article-id="shared-road" class="article-modal-trigger inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-sm cursor-pointer border-none">
                            <span>ሙሉውን ያንብቡ</span> <i class="fa-solid fa-arrow-right text-sm"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- News Feed & Search -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                <div>
                    <h2 class="text-2xl font-bold text-slate-900 mb-2">ወቅታዊ ዜናዎች</h2>
                    <p class="text-slate-600">የዘርፉን ይፋዊ መግለጫዎች፣ የሕግ ማሻሻያዎችንና የማኅበራት መረጃዎችን ይመልከቱ።</p>
                </div>
                
                <!-- Search Bar -->
                <div class="relative w-full md:w-72">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <i class="fa-solid fa-magnifying-glass text-slate-400"></i>
                    </div>
                    <input type="text" id="news-search-input" placeholder="ዜናዎችን በቁልፍ ቃል ይፈልጉ..." class="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow bg-white text-sm">
                </div>
            </div>

            <!-- Category Filters -->
            <div class="flex flex-wrap gap-2 mb-10 border-b border-slate-200 pb-6">
                <button type="button" data-category="all" class="news-filter-btn px-4 py-2 bg-primary-600 text-white font-medium text-sm rounded-full shadow-sm transition-colors cursor-pointer border-none">ሁሉም ዜናዎች</button>
                <button type="button" data-category="association" class="news-filter-btn px-4 py-2 bg-white text-slate-600 hover:bg-slate-50 font-medium text-sm rounded-full border border-slate-200 transition-colors cursor-pointer">የማኅበራት ዜና</button>
                <button type="button" data-category="industry" class="news-filter-btn px-4 py-2 bg-white text-slate-600 hover:bg-slate-50 font-medium text-sm rounded-full border border-slate-200 transition-colors cursor-pointer">የኢንዱስትሪ ዕይታዎች</button>
                <button type="button" data-category="safety" class="news-filter-btn px-4 py-2 bg-white text-slate-600 hover:bg-slate-50 font-medium text-sm rounded-full border border-slate-200 transition-colors cursor-pointer">ደህንነትና ሙያ</button>
                <button type="button" data-category="events" class="news-filter-btn px-4 py-2 bg-white text-slate-600 hover:bg-slate-50 font-medium text-sm rounded-full border border-slate-200 transition-colors cursor-pointer">ክስተቶችና ውይይቶች</button>
            </div>

            <!-- Articles Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
                <!-- Article Card 1 -->
                <article data-article-id="safer-journeys" data-category="safety" class="news-card article-modal-trigger bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer">
                    <div class="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                        <img src="/images/news_mechanic_tire.jpg" alt="የተሽከርካሪ ጎማ ምርመራ" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <div class="flex items-center gap-2 text-xs font-medium mb-3">
                            <span class="text-primary-600 font-semibold">ደህንነትና ሙያ</span>
                            <span class="text-slate-400 ml-1">መስከረም 12 ቀን 2019</span>
                            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span class="text-slate-400">የ4 ደቂቃ ንባብ</span>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors leading-tight">አስተማማኝ ጉዞ የሚጀምረው ሞተሩ ከመነሳቱ በፊት ነው</h3>
                        <p class="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">የቅድመ-ስምሪት ቴክኒክ ምርመራዎችን በተቋማዊ ደረጃ ተግባራዊ ማድረግ የሚያስገኘው የደህንነት ጥቅም።</p>
                        <button type="button" data-article-id="safer-journeys" class="article-modal-trigger text-primary-600 text-sm font-semibold inline-flex items-center gap-2 hover:text-primary-800 transition-colors mt-auto w-max bg-transparent border-none p-0 cursor-pointer">
                            <span>ሙሉውን ያንብቡ</span> <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                </article>

                <!-- Article Card 2 -->
                <article data-article-id="employer-voice" data-category="association" class="news-card article-modal-trigger bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer">
                    <div class="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                        <img src="/images/news_association_meeting.jpg" alt="የማኅበራት አመራሮች ስብሰባ" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <div class="flex items-center gap-2 text-xs font-medium mb-3">
                            <span class="text-primary-600 font-semibold">የማኅበራት ዜና</span>
                            <span class="text-slate-400 ml-1">መስከረም 08 ቀን 2019</span>
                            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span class="text-slate-400">የ3 ደቂቃ ንባብ</span>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors leading-tight">የትራንስፖርት አሠሪዎችን ድምፅ በፖሊሲ መድረኮች ማሰማት</h3>
                        <p class="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">የአባላት የጋራ ሃሳብና ቅሬታ በሦስትዮሽ የዘርፍ ድርድሮች ውስጥ እንዴት ውጤታማ ውሳኔዎችን እንደሚያመጣ።</p>
                        <button type="button" data-article-id="employer-voice" class="article-modal-trigger text-primary-600 text-sm font-semibold inline-flex items-center gap-2 hover:text-primary-800 transition-colors mt-auto w-max bg-transparent border-none p-0 cursor-pointer">
                            <span>ሙሉውን ያንብቡ</span> <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                </article>

                <!-- Article Card 3 -->
                <article data-article-id="everyday-costs" data-category="industry" class="news-card article-modal-trigger bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer">
                    <div class="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                        <img src="/images/news_logistics_hub.jpg" alt="የመልቲሞዳል ሎጂስቲክስ ማዕከል" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <div class="flex items-center gap-2 text-xs font-medium mb-3">
                            <span class="text-primary-600 font-semibold">የኢንዱስትሪ ዕይታዎች</span>
                            <span class="text-slate-400 ml-1">መስከረም 05 ቀን 2019</span>
                            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span class="text-slate-400">የ6 ደቂቃ ንባብ</span>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors leading-tight">የትራንስፖርት የዕለት ተዕለት የስራ ወጪዎችን መቆጣጠር</h3>
                        <p class="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">ከነዳጅ ወጪ ባሻገር የመለዋወጫ ታሪፎችን፣ የድንበር ቆይታዎችንና የተሽከርካሪ ጥገናን በአግባቡ ማስተዳደር።</p>
                        <button type="button" data-article-id="everyday-costs" class="article-modal-trigger text-primary-600 text-sm font-semibold inline-flex items-center gap-2 hover:text-primary-800 transition-colors mt-auto w-max bg-transparent border-none p-0 cursor-pointer">
                            <span>ሙሉውን ያንብቡ</span> <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                </article>

                <!-- Article Card 4 -->
                <article data-article-id="transport-roundtable" data-category="events" class="news-card article-modal-trigger bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer">
                    <div class="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                        <img src="/images/news_roundtable.jpg" alt="የዘርፉ ባለድርሻ አካላት የውይይት መድረክ" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <div class="flex items-center gap-2 text-xs font-medium mb-3">
                            <span class="text-primary-600 font-semibold">ክስተቶችና ውይይቶች</span>
                            <span class="text-slate-400 ml-1">ጳጉሜ 06 ቀን 2018</span>
                            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span class="text-slate-400">የ3 ደቂቃ ንባብ</span>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors leading-tight">ከብሔራዊ የትራንስፖርት ሦስትዮሽ ፎረም የተገኙ ውጤቶች</h3>
                        <p class="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">የኢትራአፌ ልዑካን በወደብ ዲመሬጅ ቅነሳና በተቀናጀ የጉምሩክ አገልግሎት ዙሪያ ስምምነት ላይ ደረሱ።</p>
                        <button type="button" data-article-id="transport-roundtable" class="article-modal-trigger text-primary-600 text-sm font-semibold inline-flex items-center gap-2 hover:text-primary-800 transition-colors mt-auto w-max bg-transparent border-none p-0 cursor-pointer">
                            <span>ሙሉውን ያንብቡ</span> <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                </article>

                <!-- Article Card 5 -->
                <article data-article-id="better-maintenance" data-category="safety" class="news-card article-modal-trigger bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer">
                    <div class="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                        <img src="/images/news_workshop_records.jpg" alt="የጥገና መዝገብ አያያዝ" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <div class="flex items-center gap-2 text-xs font-medium mb-3">
                            <span class="text-primary-600 font-semibold">ደህንነትና ሙያ</span>
                            <span class="text-slate-400 ml-1">ጳጉሜ 03 ቀን 2018</span>
                            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span class="text-slate-400">የ4 ደቂቃ ንባብ</span>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors leading-tight">ውጤታማ ጥገና የሚጀምረው ትክክለኛ መረጃ ከመያዝ ነው</h3>
                        <p class="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">የተሽከርካሪ የጥገና ታሪክን በመመዝገብ ድንገተኛ የመንገድ ላይ ብልሽቶችን ማስቀረትና የተሽከርካሪ ዕድሜን ማራዘም።</p>
                        <button type="button" data-article-id="better-maintenance" class="article-modal-trigger text-primary-600 text-sm font-semibold inline-flex items-center gap-2 hover:text-primary-800 transition-colors mt-auto w-max bg-transparent border-none p-0 cursor-pointer">
                            <span>ሙሉውን ያንብቡ</span> <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                </article>

                <!-- Article Card 6 -->
                <article data-article-id="meaningful-membership" data-category="association" class="news-card article-modal-trigger bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer">
                    <div class="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                        <img src="/images/news_office_admin.jpg" alt="የአባላት አስተዳደር ጽህፈት ቤት" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <div class="flex items-center gap-2 text-xs font-medium mb-3">
                            <span class="text-primary-600 font-semibold">የማኅበራት ዜና</span>
                            <span class="text-slate-400 ml-1">ነሐሴ 29 ቀን 2018</span>
                            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span class="text-slate-400">የ2 ደቂቃ ንባብ</span>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors leading-tight">ወደ ፌዴሬሽኑ አባልነት ለመቀላቀል የሚወሰዱ እርምጃዎች</h3>
                        <p class="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">የክልል የትራንስፖርት አሠሪ ማኅበራትና የግል ኦፕሬተሮች የፌዴሬሽኑ አባል በመሆን የሚያገኟቸው ሕጋዊ ጥቅሞች።</p>
                        <button type="button" data-article-id="meaningful-membership" class="article-modal-trigger text-primary-600 text-sm font-semibold inline-flex items-center gap-2 hover:text-primary-800 transition-colors mt-auto w-max bg-transparent border-none p-0 cursor-pointer">
                            <span>ሙሉውን ያንብቡ</span> <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                </article>

                <!-- No Results State -->
                <div id="news-no-results" class="hidden col-span-1 md:col-span-2 lg:col-span-3 text-center py-16 bg-white rounded-lg border border-dashed border-slate-200 p-8">
                    <div class="w-12 h-12 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-3 text-lg">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <h4 class="font-bold text-slate-800 text-lg mb-1">ምንም ዜና አልተገኘም</h4>
                    <p class="text-slate-500 text-sm">የፍለጋ ቃሉን ወይም የምድብ ምርጫውን በማስተካከል እንደገና ይሞክሩ።</p>
                </div>
            </div>
        </section>
    </main>

    ${renderFooter("አማ")}
`;

export default {
  title: {
    ENG: "News & Bulletins - Ethiopian Transport Employers Federation",
    "አማ": "ዜናዎችና ወቅታዊ መረጃዎች - የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን",
  },
  markup: {
    ENG: newsEng,
    "አማ": newsAm,
  },
};
