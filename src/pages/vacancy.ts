import { renderNavbar, renderFooter } from "../layout";

const vacancyEng = `
    ${renderNavbar("/vacancies", "ENG")}

    <main class="flex-grow pb-24">
        <div class="relative text-white pt-12 pb-16 overflow-hidden bg-slate-950 mb-10">
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <img src="/images/vacancy_hero_career.jpg" alt="Transport & Logistics Careers" class="w-full h-full object-cover object-center animate-slow-motion filter brightness-95" />
                <div class="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-primary-950/75 to-slate-950/90"></div>
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <!-- Breadcrumbs -->
                <nav class="flex text-sm text-blue-100 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-house text-xs"></i> Home</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <i class="fa-solid fa-chevron-right text-xs mx-2 text-blue-200"></i>
                                <span class="text-white font-semibold">Vacancies</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <!-- Page Title -->
                <h1 class="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Career Opportunities</h1>
                <p class="text-lg text-blue-100 max-w-3xl leading-relaxed">
                    Join ETEF Secretariat or our affiliated national network of member transport associations and commercial fleet operators.
                </p>
            </div>
        </div>

        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
            <div class="flex flex-col lg:flex-row gap-10 lg:gap-12">
                <!-- Left Column: Job Listings & Search -->
                <div class="lg:w-2/3 xl:w-3/4">
                    <!-- Search and Filter Bar -->
                    <div class="bg-white p-4 rounded-lg shadow-sm border border-slate-200 mb-8 flex flex-col sm:flex-row gap-4">
                        <div class="relative flex-grow">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i class="fa-solid fa-magnifying-glass text-slate-400"></i>
                            </div>
                            <input type="text" id="job-search-input" placeholder="Job title, keywords, or company..." class="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow text-sm text-slate-800">
                        </div>
                        <div class="flex gap-4">
                            <select id="job-category-select" class="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none bg-white text-slate-700 text-sm min-w-[150px] cursor-pointer">
                                <option value="">All Categories</option>
                                <option value="logistics">Logistics & Supply Chain</option>
                                <option value="admin">Administration</option>
                                <option value="policy">Policy & Advocacy</option>
                                <option value="training">Training & Safety</option>
                            </select>
                            <select id="job-employer-select" class="hidden sm:block px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none bg-white text-slate-700 text-sm min-w-[160px] cursor-pointer">
                                <option value="">All Employers</option>
                                <option value="etef">ETEF Secretariat</option>
                                <option value="member">Member Organizations</option>
                                <option value="partner">Partner Organizations</option>
                            </select>
                            <button type="button" id="job-search-btn" class="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-sm whitespace-nowrap cursor-pointer">
                                Search
                            </button>
                        </div>
                    </div>

                    <!-- Meta info -->
                    <div class="flex justify-between items-center mb-6">
                        <span class="text-sm font-medium text-slate-500">Showing 4 open positions</span>
                        <div class="flex items-center gap-2 text-sm">
                            <span class="text-slate-500">Sort by:</span>
                            <span class="text-slate-900 font-semibold">Newest First</span>
                        </div>
                    </div>

                    <!-- Job Listings -->
                    <div class="space-y-4">
                        <!-- Job Card 1 -->
                        <div data-category="policy" data-employer="etef" class="job-listing-card bg-white rounded-lg border border-slate-200 p-6 hover:border-primary-300 hover:shadow-md transition-all group flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer relative overflow-hidden">
                            <div class="absolute left-0 top-0 bottom-0 w-1 bg-primary-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div class="flex-grow">
                                <div class="flex items-center gap-3 mb-2">
                                    <span class="bg-primary-50 text-primary-700 border border-primary-100 text-xs font-bold px-2.5 py-1 rounded-md">ETEF Secretariat</span>
                                    <span class="text-slate-400 text-sm flex items-center gap-1"><i class="fa-regular fa-clock"></i> Full-time</span>
                                </div>
                                <h3 class="text-xl font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">Senior Policy & Advocacy Officer</h3>
                                <p class="text-sm font-medium text-slate-700 mb-2">Ethiopian Transport Employers Federation</p>
                                <div class="flex flex-wrap gap-4 text-sm text-slate-500">
                                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-location-dot"></i> Addis Ababa, Ethiopia</span>
                                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-briefcase"></i> Policy & Government Relations</span>
                                    <span class="flex items-center gap-1.5"><i class="fa-regular fa-calendar"></i> Posted 2 days ago</span>
                                </div>
                            </div>
                            <div class="flex-shrink-0">
                                <button type="button" data-job-id="advocacy-officer" class="job-modal-trigger inline-flex justify-center items-center px-5 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-primary-50 hover:border-primary-200 hover:text-primary-700 transition-colors cursor-pointer">
                                    View Details
                                </button>
                            </div>
                        </div>

                        <!-- Job Card 2 -->
                        <div data-category="logistics" data-employer="member" class="job-listing-card bg-white rounded-lg border border-slate-200 p-6 hover:border-blue-400 hover:shadow-md transition-all group flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer relative overflow-hidden">
                            <div class="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div class="flex-grow">
                                <div class="flex items-center gap-3 mb-2">
                                    <span class="bg-blue-50 text-blue-700 border border-blue-100 text-xs font-bold px-2.5 py-1 rounded-md">Member Organization</span>
                                    <span class="text-slate-400 text-sm flex items-center gap-1"><i class="fa-regular fa-clock"></i> Full-time</span>
                                </div>
                                <h3 class="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">Heavy Fleet Safety & Operations Supervisor</h3>
                                <p class="text-sm font-medium text-slate-700 mb-2">Ethio-Djibouti Freight Haulage Association</p>
                                <div class="flex flex-wrap gap-4 text-sm text-slate-500">
                                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-location-dot"></i> Modjo Dry Port Terminal</span>
                                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-briefcase"></i> Heavy Haulage Fleet</span>
                                    <span class="flex items-center gap-1.5"><i class="fa-regular fa-calendar"></i> Posted 4 days ago</span>
                                </div>
                            </div>
                            <div class="flex-shrink-0">
                                <button type="button" data-job-id="fleet-supervisor" class="job-modal-trigger inline-flex justify-center items-center px-5 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors cursor-pointer">
                                    View Details
                                </button>
                            </div>
                        </div>

                        <!-- Job Card 3 -->
                        <div data-category="logistics" data-employer="member" class="job-listing-card bg-white rounded-lg border border-slate-200 p-6 hover:border-primary-400 hover:shadow-md transition-all group flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer relative overflow-hidden">
                            <div class="absolute left-0 top-0 bottom-0 w-1 bg-primary-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div class="flex-grow">
                                <div class="flex items-center gap-3 mb-2">
                                    <span class="bg-primary-50 text-primary-700 border border-primary-100 text-xs font-bold px-2.5 py-1 rounded-md">Member Organization</span>
                                    <span class="text-slate-400 text-sm flex items-center gap-1"><i class="fa-regular fa-clock"></i> Full-time</span>
                                </div>
                                <h3 class="text-xl font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">Cross-Border Customs Clearance Specialist</h3>
                                <p class="text-sm font-medium text-slate-700 mb-2">National Multi-Modal Freight Operators</p>
                                <div class="flex flex-wrap gap-4 text-sm text-slate-500">
                                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-location-dot"></i> Galafi / Dewele Border Crossing</span>
                                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-briefcase"></i> Customs & Single Window Clearance</span>
                                    <span class="flex items-center gap-1.5"><i class="fa-regular fa-calendar"></i> Posted 1 week ago</span>
                                </div>
                            </div>
                            <div class="flex-shrink-0">
                                <button type="button" data-job-id="customs-liaison" class="job-modal-trigger inline-flex justify-center items-center px-5 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-primary-50 hover:border-primary-200 hover:text-primary-800 transition-colors cursor-pointer">
                                    View Details
                                </button>
                            </div>
                        </div>

                        <!-- Job Card 4 -->
                        <div data-category="logistics" data-employer="member" class="job-listing-card bg-white rounded-lg border border-slate-200 p-6 hover:border-slate-400 hover:shadow-md transition-all group flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer relative overflow-hidden">
                            <div class="absolute left-0 top-0 bottom-0 w-1 bg-slate-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div class="flex-grow">
                                <div class="flex items-center gap-3 mb-2">
                                    <span class="bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold px-2.5 py-1 rounded-md">Member Organization</span>
                                    <span class="text-slate-400 text-sm flex items-center gap-1"><i class="fa-regular fa-clock"></i> Full-time</span>
                                </div>
                                <h3 class="text-xl font-bold text-slate-900 mb-1 group-hover:text-slate-700 transition-colors">Regional Dispatch Coordinator</h3>
                                <p class="text-sm font-medium text-slate-700 mb-2">Safeway Bus Services</p>
                                <div class="flex flex-wrap gap-4 text-sm text-slate-500">
                                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-location-dot"></i> Hawassa Central Bus Terminal</span>
                                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-briefcase"></i> Passenger Fleet Dispatch</span>
                                    <span class="flex items-center gap-1.5"><i class="fa-regular fa-calendar"></i> Posted 2 weeks ago</span>
                                </div>
                            </div>
                            <div class="flex-shrink-0">
                                <button type="button" data-job-id="dispatch-coordinator" class="job-modal-trigger inline-flex justify-center items-center px-5 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 hover:border-slate-400 hover:text-slate-900 transition-colors cursor-pointer">
                                    View Details
                                </button>
                            </div>
                        </div>

                        <!-- No Jobs Found State -->
                        <div id="job-no-results" class="hidden text-center py-16 bg-white rounded-lg border border-dashed border-slate-200 p-8">
                            <div class="w-12 h-12 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-3 text-lg">
                                <i class="fa-solid fa-briefcase"></i>
                            </div>
                            <h4 class="font-bold text-slate-800 text-lg mb-1">No vacancies match your criteria</h4>
                            <p class="text-slate-500 text-sm">Try broadening your search term or selecting "All Categories" to see available openings.</p>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Info Sidebar -->
                <div class="lg:w-1/3 xl:w-1/4">
                    <!-- General Application Card -->
                    <div class="rounded-lg p-6 text-white mb-8 shadow-md relative overflow-hidden">
                          <div class="absolute inset-0 z-0 bg-[url('/images/news_office_admin.jpg')] bg-cover bg-center animate-slow-motion"></div>
                          <div class="absolute inset-0 z-0 bg-black/50"></div>
                          <div class="relative z-10">
                              <div class="text-white bg-primary-500/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-xl border border-white/20">
                            <i class="fa-solid fa-file-arrow-up"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-2">Don't see a fit?</h3>
                        <p class="text-primary-100 text-sm mb-6 leading-relaxed">
                            We are always looking for transport professionals. Submit your CV to our talent database, and we'll contact you when a matching role opens.
                        </p>
                        <button type="button" data-talent-modal class="talent-modal-trigger block w-full text-center px-4 py-3 bg-white text-primary-700 font-bold rounded-lg hover:bg-slate-50 transition-colors cursor-pointer border-none shadow-sm">
                            Submit General CV
                          </button>
                          </div>
                      </div>

                    <div class="mb-6">
                        <h3 class="text-lg font-bold text-slate-900 mb-2">Working with Transport Employers</h3>
                        <p class="text-slate-500 text-sm">Discover what makes Federation service rewarding.</p>
                    </div>

                    <div class="space-y-4">
                        <div class="bg-white border border-slate-200 p-4 rounded-lg shadow-sm flex items-start gap-4">
                            <div class="bg-blue-50 text-primary-600 h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <i class="fa-solid fa-chart-line"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-sm mb-1">National Impact</h4>
                                <p class="text-slate-500 text-xs leading-relaxed">Your work directly influences policies that shape Ethiopia's logistics backbone.</p>
                            </div>
                        </div>

                        <div class="bg-white border border-slate-200 p-4 rounded-lg shadow-sm flex items-start gap-4">
                            <div class="bg-blue-50 text-primary-600 h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <i class="fa-solid fa-graduation-cap"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-sm mb-1">Professional Growth</h4>
                                <p class="text-slate-500 text-xs leading-relaxed">Access to tripartite seminars, workshops, and international transport networks.</p>
                            </div>
                        </div>

                        <div class="bg-white border border-slate-200 p-4 rounded-lg shadow-sm flex items-start gap-4">
                            <div class="bg-blue-50 text-primary-600 h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <i class="fa-solid fa-heart-pulse"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-sm mb-1">Comprehensive Benefits</h4>
                                <p class="text-slate-500 text-xs leading-relaxed">Competitive remuneration, health coverage, and professional development support.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    ${renderFooter("ENG")}
`;

const vacancyAm = `
    ${renderNavbar("/vacancies", "አማ")}

    <main class="flex-grow pb-24">
        <div class="relative text-white pt-12 pb-16 overflow-hidden bg-slate-950 mb-10">
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <img src="/images/vacancy_hero_career.jpg" alt="ክፍት የስራ ቦታዎችና የሙያ ዕድሎች" class="w-full h-full object-cover object-center animate-slow-motion filter brightness-95" />
                <div class="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-primary-950/75 to-slate-950/90"></div>
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <!-- Breadcrumbs -->
                <nav class="flex text-sm text-blue-100 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-house text-xs"></i> መነሻ</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <i class="fa-solid fa-chevron-right text-xs mx-2 text-blue-200"></i>
                                <span class="text-white font-semibold">ክፍት የስራ ቦታዎች</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <!-- Page Title -->
                <h1 class="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">የሥራ ዕድሎች</h1>
                <p class="text-lg text-blue-100 max-w-3xl leading-relaxed">
                    የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን ሴክሬታሪያትን ወይም በአባልነት የታቀፉ ብሔራዊ የትራንስፖርት ድርጅቶችን ይቀላቀሉ።
                </p>
            </div>
        </div>

        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
            <div class="flex flex-col lg:flex-row gap-10 lg:gap-12">
                <!-- Left Column: Job Listings & Search -->
                <div class="lg:w-2/3 xl:w-3/4">
                    <!-- Search and Filter Bar -->
                    <div class="bg-white p-4 rounded-lg shadow-sm border border-slate-200 mb-8 flex flex-col sm:flex-row gap-4">
                        <div class="relative flex-grow">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i class="fa-solid fa-magnifying-glass text-slate-400"></i>
                            </div>
                            <input type="text" id="job-search-input" placeholder="የሥራ መደብ ወይም የድርጅት ስም ይፈልጉ..." class="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow text-sm text-slate-800">
                        </div>
                        <div class="flex gap-4">
                            <select id="job-category-select" class="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none bg-white text-slate-700 text-sm min-w-[150px] cursor-pointer">
                                <option value="">ሁሉም ዘርፎች</option>
                                <option value="logistics">ሎጂስቲክስና አቅርቦት</option>
                                <option value="admin">አስተዳደርና ፋይናንስ</option>
                                <option value="policy">ፖሊሲና ሕግ</option>
                                <option value="training">ደህንነትና ስልጠና</option>
                            </select>
                            <select id="job-employer-select" class="hidden sm:block px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none bg-white text-slate-700 text-sm min-w-[160px] cursor-pointer">
                                <option value="">ሁሉም አሠሪዎች</option>
                                <option value="etef">የፌዴሬሽኑ ሴክሬታሪያት</option>
                                <option value="member">አባል ድርጅቶች</option>
                                <option value="partner">አጋር ተቋማት</option>
                            </select>
                            <button type="button" id="job-search-btn" class="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-sm whitespace-nowrap cursor-pointer">
                                ፈልግ
                            </button>
                        </div>
                    </div>

                    <!-- Meta info -->
                    <div class="flex justify-between items-center mb-6">
                        <span class="text-sm font-medium text-slate-500">4 ክፍት የሥራ መደቦች ይገኛሉ</span>
                        <div class="flex items-center gap-2 text-sm">
                            <span class="text-slate-500">አደራደር፡</span>
                            <span class="text-slate-900 font-semibold">አዳዲስ ቀዳሚ</span>
                        </div>
                    </div>

                    <!-- Job Listings -->
                    <div class="space-y-4">
                        <!-- Job Card 1 -->
                        <div data-category="policy" data-employer="etef" class="job-listing-card bg-white rounded-lg border border-slate-200 p-6 hover:border-primary-300 hover:shadow-md transition-all group flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer relative overflow-hidden">
                            <div class="absolute left-0 top-0 bottom-0 w-1 bg-primary-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div class="flex-grow">
                                <div class="flex items-center gap-3 mb-2">
                                    <span class="bg-primary-50 text-primary-700 border border-primary-100 text-xs font-bold px-2.5 py-1 rounded-md">የፌዴሬሽኑ ሴክሬታሪያት</span>
                                    <span class="text-slate-400 text-sm flex items-center gap-1"><i class="fa-regular fa-clock"></i> ቋሚ የሙሉ ጊዜ</span>
                                </div>
                                <h3 class="text-xl font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">ከፍተኛ የፖሊሲና የሕግ ድጋፍ ኦፊሰር</h3>
                                <p class="text-sm font-medium text-slate-700 mb-2">የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን</p>
                                <div class="flex flex-wrap gap-4 text-sm text-slate-500">
                                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-location-dot"></i> አዲስ አበባ፣ ኢትዮጵያ</span>
                                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-briefcase"></i> ፖሊሲና መንግሥታዊ ግንኙነት</span>
                                    <span class="flex items-center gap-1.5"><i class="fa-regular fa-calendar"></i> ከ2 ቀናት በፊት የወጣ</span>
                                </div>
                            </div>
                            <div class="flex-shrink-0">
                                <button type="button" data-job-id="advocacy-officer" class="job-modal-trigger inline-flex justify-center items-center px-5 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-primary-50 hover:border-primary-200 hover:text-primary-700 transition-colors cursor-pointer">
                                    ዝርዝሩን ይመልከቱ
                                </button>
                            </div>
                        </div>

                        <!-- Job Card 2 -->
                        <div data-category="logistics" data-employer="member" class="job-listing-card bg-white rounded-lg border border-slate-200 p-6 hover:border-blue-400 hover:shadow-md transition-all group flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer relative overflow-hidden">
                            <div class="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div class="flex-grow">
                                <div class="flex items-center gap-3 mb-2">
                                    <span class="bg-blue-50 text-blue-700 border border-blue-100 text-xs font-bold px-2.5 py-1 rounded-md">አባል ድርጅት</span>
                                    <span class="text-slate-400 text-sm flex items-center gap-1"><i class="fa-regular fa-clock"></i> ቋሚ የሙሉ ጊዜ</span>
                                </div>
                                <h3 class="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">የከባድ ተሽከርካሪ ደህንነትና ስምሪት ሱፐርቫይዘር</h3>
                                <p class="text-sm font-medium text-slate-700 mb-2">የኢትዮ-ጅቡቲ የደረቅ ጭነት አሠሪዎች ማኅበር</p>
                                <div class="flex flex-wrap gap-4 text-sm text-slate-500">
                                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-location-dot"></i> የሞጆ ደረቅ ወደብ ተርሚናል</span>
                                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-briefcase"></i> የከባድ ጭነት ስምሪት ቁጥጥር</span>
                                    <span class="flex items-center gap-1.5"><i class="fa-regular fa-calendar"></i> ከ4 ቀናት በፊት የወጣ</span>
                                </div>
                            </div>
                            <div class="flex-shrink-0">
                                <button type="button" data-job-id="fleet-supervisor" class="job-modal-trigger inline-flex justify-center items-center px-5 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors cursor-pointer">
                                    ዝርዝሩን ይመልከቱ
                                </button>
                            </div>
                        </div>

                        <!-- Job Card 3 -->
                        <div data-category="logistics" data-employer="member" class="job-listing-card bg-white rounded-lg border border-slate-200 p-6 hover:border-primary-400 hover:shadow-md transition-all group flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer relative overflow-hidden">
                            <div class="absolute left-0 top-0 bottom-0 w-1 bg-primary-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div class="flex-grow">
                                <div class="flex items-center gap-3 mb-2">
                                    <span class="bg-primary-50 text-primary-700 border border-primary-100 text-xs font-bold px-2.5 py-1 rounded-md">አባል ድርጅት</span>
                                    <span class="text-slate-400 text-sm flex items-center gap-1"><i class="fa-regular fa-clock"></i> ቋሚ የሙሉ ጊዜ</span>
                                </div>
                                <h3 class="text-xl font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">የድንበር ተሻጋሪ ጉምሩክ ክሊራንስ ስፔሻሊስት</h3>
                                <p class="text-sm font-medium text-slate-700 mb-2">ብሔራዊ መልቲሞዳል የጭነት ኦፕሬተሮች</p>
                                <div class="flex flex-wrap gap-4 text-sm text-slate-500">
                                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-location-dot"></i> የገላፊ / ዴወሌ ድንበር ፍተሻ ጣቢያ</span>
                                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-briefcase"></i> የጉምሩክ ሰነዶች ማጣራት</span>
                                    <span class="flex items-center gap-1.5"><i class="fa-regular fa-calendar"></i> ከአንድ ሳምንት በፊት የወጣ</span>
                                </div>
                            </div>
                            <div class="flex-shrink-0">
                                <button type="button" data-job-id="customs-liaison" class="job-modal-trigger inline-flex justify-center items-center px-5 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-primary-50 hover:border-primary-200 hover:text-primary-800 transition-colors cursor-pointer">
                                    ዝርዝሩን ይመልከቱ
                                </button>
                            </div>
                        </div>

                        <!-- Job Card 4 -->
                        <div data-category="logistics" data-employer="member" class="job-listing-card bg-white rounded-lg border border-slate-200 p-6 hover:border-slate-400 hover:shadow-md transition-all group flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer relative overflow-hidden">
                            <div class="absolute left-0 top-0 bottom-0 w-1 bg-slate-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div class="flex-grow">
                                <div class="flex items-center gap-3 mb-2">
                                    <span class="bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold px-2.5 py-1 rounded-md">አባል ድርጅት</span>
                                    <span class="text-slate-400 text-sm flex items-center gap-1"><i class="fa-regular fa-clock"></i> ቋሚ የሙሉ ጊዜ</span>
                                </div>
                                <h3 class="text-xl font-bold text-slate-900 mb-1 group-hover:text-slate-700 transition-colors">የክልል አውቶቡስ ስምሪት አስተባባሪ</h3>
                                <p class="text-sm font-medium text-slate-700 mb-2">ሴፍዌይ የሕዝብ ትራንስፖርት አገልግሎት</p>
                                <div class="flex flex-wrap gap-4 text-sm text-slate-500">
                                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-location-dot"></i> የሐዋሳ ማዕከላዊ አውቶቡስ ተርሚናል</span>
                                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-briefcase"></i> የተሳፋሪ ትራንስፖርት ስምሪት</span>
                                    <span class="flex items-center gap-1.5"><i class="fa-regular fa-calendar"></i> ከሁለት ሳምንት በፊት የወጣ</span>
                                </div>
                            </div>
                            <div class="flex-shrink-0">
                                <button type="button" data-job-id="dispatch-coordinator" class="job-modal-trigger inline-flex justify-center items-center px-5 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 hover:border-slate-400 hover:text-slate-900 transition-colors cursor-pointer">
                                    ዝርዝሩን ይመልከቱ
                                </button>
                            </div>
                        </div>

                        <!-- No Jobs Found State -->
                        <div id="job-no-results" class="hidden text-center py-16 bg-white rounded-lg border border-dashed border-slate-200 p-8">
                            <div class="w-12 h-12 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-3 text-lg">
                                <i class="fa-solid fa-briefcase"></i>
                            </div>
                            <h4 class="font-bold text-slate-800 text-lg mb-1">ምንም ክፍት የሥራ ቦታ አልተገኘም</h4>
                            <p class="text-slate-500 text-sm">የፍለጋ ቃሉን በማስተካከል ወይም "ሁሉም ዘርፎች" የሚለውን በመምረጥ እንደገና ይሞክሩ።</p>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Info Sidebar -->
                <div class="lg:w-1/3 xl:w-1/4">
                    <!-- General Application Card -->
                    <div class="rounded-lg p-6 text-white mb-8 shadow-md relative overflow-hidden">
                          <div class="absolute inset-0 z-0 bg-[url('/images/news_office_admin.jpg')] bg-cover bg-center animate-slow-motion"></div>
                          <div class="absolute inset-0 z-0 bg-black/50"></div>
                          <div class="relative z-10">
                              <div class="text-white bg-primary-500/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-xl border border-white/20">
                            <i class="fa-solid fa-file-arrow-up"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-2">ተስማሚ የሥራ መደብ አላገኙም?</h3>
                        <p class="text-primary-100 text-sm mb-6 leading-relaxed">
                            የትራንስፖርትና ሎጂስቲክስ ባለሙያዎችን ሁልጊዜ እንፈልጋለን። የሙያ መገለጫዎን ወደ ዳታቤዛችን ያስገቡ፤ ተስማሚ ክፍት ቦታ ሲኖር እናገኝዎታለን።
                        </p>
                        <button type="button" data-talent-modal class="talent-modal-trigger block w-full text-center px-4 py-3 bg-white text-primary-700 font-bold rounded-lg hover:bg-slate-50 transition-colors cursor-pointer border-none shadow-sm">
                            የሙያ መገለጫዎን ያስመዝግቡ
                        </button>
                          </div>
                      </div>

                    <div class="mb-6">
                        <h3 class="text-lg font-bold text-slate-900 mb-2">ከትራንስፖርት አሠሪዎች ጋር መሥራት</h3>
                        <p class="text-slate-500 text-sm">በፌዴሬሽኑ ጥላ ስር መሥራት የሚሰጣቸውን ጥቅሞች ይወቁ።</p>
                    </div>

                    <div class="space-y-4">
                        <div class="bg-white border border-slate-200 p-4 rounded-lg shadow-sm flex items-start gap-4">
                            <div class="bg-blue-50 text-primary-600 h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <i class="fa-solid fa-chart-line"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-sm mb-1">ሀገራዊ ተፅዕኖ</h4>
                                <p class="text-slate-500 text-xs leading-relaxed">ሥራዎ የኢትዮጵያን የንግድና የሎጂስቲክስ የጀርባ አጥንት በሚያጠናክሩ ፖሊሲዎች ላይ አስተዋጽዖ ያበረክታል።</p>
                            </div>
                        </div>

                        <div class="bg-white border border-slate-200 p-4 rounded-lg shadow-sm flex items-start gap-4">
                            <div class="bg-blue-50 text-primary-600 h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <i class="fa-solid fa-graduation-cap"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-sm mb-1">የሙያ ዕድገት</h4>
                                <p class="text-slate-500 text-xs leading-relaxed">ዓለም አቀፍ ሴሚናሮች፣ ስልጠናዎችና የተሽከርካሪ ቴክኖሎጂ ትስስሮች ተጠቃሚ ይሁኑ።</p>
                            </div>
                        </div>

                        <div class="bg-white border border-slate-200 p-4 rounded-lg shadow-sm flex items-start gap-4">
                            <div class="bg-blue-50 text-primary-600 h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <i class="fa-solid fa-heart-pulse"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-sm mb-1">ምቹ የሥራ አካባቢ</h4>
                                <p class="text-slate-500 text-xs leading-relaxed">ተመጣጣኝ ደመወዝ፣ የጤና ዋስትና ሽፋንና የሙያ ማሻሻያ ድጋፎች።</p>
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
    ENG: "Career Opportunities - Ethiopian Transport Employers Federation",
    "አማ": "ክፍት የሥራ ቦታዎች - የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን",
  },
  markup: {
    ENG: vacancyEng,
    "አማ": vacancyAm,
  },
};
