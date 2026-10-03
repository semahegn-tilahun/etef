import { renderNavbar, renderFooter } from "../layout";

const membershipEng = `
    ${renderNavbar("/membership", "ENG")}

    <main class="flex-grow pb-24">
        <div class="relative text-white pt-12 pb-16 overflow-hidden bg-slate-950 mb-10">
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <img src="/images/hero_expressway.jpg" class="w-full h-full object-cover object-center animate-slow-motion filter brightness-95" />
                <div class="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-900/80 to-primary-950/90"></div>
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
                                <span class="text-white font-semibold">Membership</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <!-- Page Title -->
                <h1 class="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Become an ETEF Member</h1>
                <p class="text-lg text-blue-100 max-w-3xl leading-relaxed">
                    Join 17 employers' associations and over 6,652 commercial operators united under the Ethiopian Transport Employers' Federation. Certified under FDRE Constitution Article 31 and Labor Proclamation No. 1156/2012.
                </p>
            </div>
        </div>

        <!-- FLEET TIER & DUES ESTIMATOR -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
            <div class="bg-primary-600 rounded-lg p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
                <div class="max-w-3xl mb-8 relative z-10">
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-white border border-white/25 mb-3">
                        <i class="fa-solid fa-calculator text-white"></i>
                        <span>ETEF MEMBERSHIP TARIFF & ESTIMATOR</span>
                    </div>
                    <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        Calculate Your Federation Tier & Annual Dues
                    </h2>
                    <p class="text-sm text-blue-100 mt-2 leading-relaxed">
                        Configure your commercial fleet profile to estimate statutory association dues, legal defense coverage, and driver welfare fund allocations under the 2026 ETEF General Assembly Charter.
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                    <!-- Inputs -->
                    <div class="lg:col-span-7 space-y-6">
                        <div>
                            <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Select Transport Sector / Operation Type</label>
                            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5" id="calc-sector-selector">
                                <button type="button" class="calc-sector-btn active px-3 py-2.5 rounded-lg border border-primary-400 bg-primary-600 text-white font-bold text-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer shadow-sm" data-sector="Freight Transport" data-rate="450" data-base="15000">
                                    <i class="fa-solid fa-truck-moving text-base text-primary-200"></i>
                                    <span>Heavy Freight</span>
                                </button>
                                <button type="button" class="calc-sector-btn px-3 py-2.5 rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:text-white font-medium text-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer" data-sector="Passenger Transport" data-rate="300" data-base="10000">
                                    <i class="fa-solid fa-bus text-base text-primary-300"></i>
                                    <span>Intercity Bus</span>
                                </button>
                                <button type="button" class="calc-sector-btn px-3 py-2.5 rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:text-white font-medium text-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer" data-sector="Urban Transit" data-rate="150" data-base="5000">
                                    <i class="fa-solid fa-van-shuttle text-base text-primary-300"></i>
                                    <span>Urban Transit</span>
                                </button>
                                <button type="button" class="calc-sector-btn px-3 py-2.5 rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:text-white font-medium text-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer" data-sector="Logistics & Customs" data-rate="600" data-base="25000">
                                    <i class="fa-solid fa-boxes-stacked text-base text-primary-300"></i>
                                    <span>Logistics Depot</span>
                                </button>
                            </div>
                        </div>

                        <div>
                            <div class="flex justify-between items-center mb-2">
                                <label for="calc-fleet-slider" class="text-xs font-bold text-slate-300 uppercase tracking-wider">Number of Operating Vehicles / Fleets</label>
                                <span class="px-3 py-1 bg-white/10 border border-white/20 rounded-lg text-sm font-black text-primary-300" id="calc-fleet-display">25 Vehicles</span>
                            </div>
                            <input type="range" id="calc-fleet-slider" min="1" max="250" value="25" step="1" class="w-full accent-primary-500 cursor-pointer h-2 bg-slate-700 rounded-lg">
                            <div class="flex justify-between text-[11px] text-slate-400 mt-1">
                                <span>1 Vehicle</span>
                                <span>50</span>
                                <span>100</span>
                                <span>175</span>
                                <span>250+ Commercial Units</span>
                            </div>
                        </div>
                    </div>

                    <!-- Results Card -->
                    <div class="lg:col-span-5 bg-white/5 border border-white/15 rounded-lg p-6 backdrop-blur-md flex flex-col justify-between">
                        <div>
                            <div class="flex justify-between items-start mb-4">
                                <span class="text-xs text-slate-400 uppercase tracking-wider font-semibold">Calculated Federation Tier</span>
                                <span id="calc-tier-badge" class="px-3 py-1 rounded-full text-xs font-bold bg-primary-500/20 text-primary-300 border border-primary-400/30">
                                    Corporate Member
                                </span>
                            </div>

                            <div class="mb-5 pb-5 border-b border-white/10">
                                <span class="text-xs text-slate-400 block mb-1">Estimated Annual Federation Contribution</span>
                                <div class="flex items-baseline gap-2">
                                    <span class="text-3xl sm:text-4xl font-extrabold text-white" id="calc-dues-amount">26,250</span>
                                    <span class="text-sm font-bold text-primary-400">ETB / Year</span>
                                </div>
                                <span class="text-[11px] text-slate-400 mt-1 block">Billed annually or in semi-annual installments</span>
                            </div>

                            <div class="space-y-2 text-xs text-slate-300 mb-6">
                                <div class="flex items-center gap-2">
                                    <i class="fa-solid fa-check text-primary-400 text-xs"></i>
                                    <span>Full tripartite representation before the Ministry of Transport</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <i class="fa-solid fa-check text-primary-400 text-xs"></i>
                                    <span>Cross-border corridor legal arbitration and demurrage defense</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <i class="fa-solid fa-check text-primary-400 text-xs"></i>
                                    <span>Certified commercial driver safety training subsidy</span>
                                </div>
                            </div>
                        </div>

                        <button type="button" id="calc-apply-btn" class="w-full py-3 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-lg text-xs sm:text-sm transition-all shadow-lg hover:shadow-primary-600/30 flex items-center justify-center gap-2 cursor-pointer">
                            <span>Apply with This Profile</span>
                            <i class="fa-solid fa-arrow-down text-xs"></i>
                        </button>
                    </div>
                </div>

                <!-- Documentation Downloads Strip -->
                <div class="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
                    <div class="flex items-center gap-2 text-xs text-slate-300">
                        <i class="fa-solid fa-folder-closed text-primary-400 text-sm"></i>
                        <span>Official Documentation Pack:</span>
                    </div>
                    <div class="flex flex-wrap items-center gap-2.5">
                        <button type="button" class="doc-download-btn px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/15 rounded-lg text-xs font-semibold text-white flex items-center gap-2 transition-colors cursor-pointer" data-doc="ETEF Constitution & Bylaws Charter (2026 Edition)">
                            <i class="fa-solid fa-file-pdf text-primary-400"></i>
                            <span>Constitution Charter (PDF)</span>
                        </button>
                        <button type="button" class="doc-download-btn px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/15 rounded-lg text-xs font-semibold text-white flex items-center gap-2 transition-colors cursor-pointer" data-doc="2026 Commercial Tariff Harmonization Schedule">
                            <i class="fa-solid fa-file-pdf text-primary-400"></i>
                            <span>Tariff Schedule (PDF)</span>
                        </button>
                        <button type="button" class="doc-download-btn px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/15 rounded-lg text-xs font-semibold text-white flex items-center gap-2 transition-colors cursor-pointer" data-doc="ETEF Carrier Onboarding & Checklist Document">
                            <i class="fa-solid fa-file-arrow-down text-primary-400"></i>
                            <span>Registration Checklist (PDF)</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Registration Form & Benefits -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row gap-10 lg:gap-16">
                <!-- Registration Form -->
                <div class="lg:w-7/12 xl:w-2/3">
                    <div class="bg-white rounded-lg shadow-sm border border-slate-200 p-8 md:p-10">
                        <div class="mb-8">
                            <h2 class="text-2xl font-bold text-slate-900 mb-2">Organization Registration</h2>
                            <p class="text-slate-500 text-sm">Please fill out the form below to register your transport enterprise with ETEF.</p>
                        </div>

                        <form id="membership-form" class="space-y-6">
                            <div id="membership-alert" class="hidden p-4 rounded-lg text-sm font-medium"></div>

                            <div>
                                <label for="orgName" class="block text-sm font-semibold text-slate-700 mb-1">Organization Name <span class="text-red-500">*</span></label>
                                <input type="text" id="orgName" required placeholder="e.g. Ethiopia National Logistics PLC" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow text-slate-800 bg-white shadow-sm placeholder:text-slate-400">
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label for="contactName" class="block text-sm font-semibold text-slate-700 mb-1">Contact Person Name <span class="text-red-500">*</span></label>
                                    <input type="text" id="contactName" required placeholder="e.g. Abebe Kebede" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow text-slate-800 bg-white shadow-sm placeholder:text-slate-400">
                                </div>
                                <div>
                                    <label for="jobTitle" class="block text-sm font-semibold text-slate-700 mb-1">Job Title</label>
                                    <input type="text" id="jobTitle" placeholder="e.g. Managing Director" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow text-slate-800 bg-white shadow-sm placeholder:text-slate-400">
                                </div>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label for="email" class="block text-sm font-semibold text-slate-700 mb-1">Email Address <span class="text-red-500">*</span></label>
                                    <input type="email" id="email" required placeholder="name@organization.com" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow text-slate-800 bg-white shadow-sm placeholder:text-slate-400">
                                </div>
                                <div>
                                    <label for="phone" class="block text-sm font-semibold text-slate-700 mb-1">Phone Number <span class="text-red-500">*</span></label>
                                    <input type="tel" id="phone" required placeholder="+251 911 00 0000" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow text-slate-800 bg-white shadow-sm placeholder:text-slate-400">
                                </div>
                            </div>

                            <div>
                                <label for="sector" class="block text-sm font-semibold text-slate-700 mb-1">Organization Sector / Transport Type <span class="text-red-500">*</span></label>
                                <input type="text" id="sector" required placeholder="e.g. Freight Transport, Passenger Bus, Logistics Service" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow text-slate-800 bg-white shadow-sm placeholder:text-slate-400">
                            </div>

                            <div>
                                <label for="message" class="block text-sm font-semibold text-slate-700 mb-1">Message / Specific Membership Objectives</label>
                                <textarea id="message" rows="4" placeholder="Tell us about your operations or any specific challenges your company is facing in the transport sector..." class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow text-slate-800 bg-white shadow-sm placeholder:text-slate-400 resize-y"></textarea>
                            </div>

                            <div class="pt-4">
                                <button type="submit" id="membership-submit-btn" class="w-full sm:w-auto px-8 py-4 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-colors shadow-md focus:ring-4 focus:ring-primary-200 flex items-center justify-center gap-2">
                                    <span>SUBMIT APPLICATION</span>
                                    <i class="fa-solid fa-paper-plane text-sm"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- Info Sidebar -->
                <div class="lg:w-5/12 xl:w-1/3">
                    <div class="mb-6">
                        <h3 class="text-2xl font-bold text-slate-900 mb-2">Why join ETEF?</h3>
                        <p class="text-slate-500 text-sm">Unlock exclusive advocacy and statutory representation for your transport business.</p>
                    </div>

                    <div class="space-y-4 mb-8">
                        <div class="bg-white border border-slate-200 p-5 rounded-lg shadow-sm flex items-start gap-4 hover:border-primary-300 transition-colors">
                            <div class="bg-primary-50 text-primary-600 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                                <i class="fa-solid fa-users text-lg"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-[15px] mb-1">Industry Representation</h4>
                                <p class="text-slate-600 text-sm leading-relaxed">Be heard at regional and federal policy levels where critical decisions about tariffs, transit routes, and borders are made.</p>
                            </div>
                        </div>

                        <div class="bg-white border border-slate-200 p-5 rounded-lg shadow-sm flex items-start gap-4 hover:border-primary-300 transition-colors">
                            <div class="bg-primary-50 text-primary-600 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                                <i class="fa-solid fa-scale-balanced text-lg"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-[15px] mb-1">Policy Advocacy</h4>
                                <p class="text-slate-600 text-sm leading-relaxed">ETEF represents employer priorities in national labor laws, safety standards, and logistical reforms.</p>
                            </div>
                        </div>

                        <div class="bg-white border border-slate-200 p-5 rounded-lg shadow-sm flex items-start gap-4 hover:border-primary-300 transition-colors">
                            <div class="bg-primary-50 text-primary-600 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                                <i class="fa-solid fa-globe text-lg"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-[15px] mb-1">Business Networking</h4>
                                <p class="text-slate-600 text-sm leading-relaxed">Connect with major logistics operators, public freight owners, and international transport associations.</p>
                            </div>
                        </div>

                        <div class="bg-white border border-slate-200 p-5 rounded-lg shadow-sm flex items-start gap-4 hover:border-primary-300 transition-colors">
                            <div class="bg-primary-50 text-primary-600 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                                <i class="fa-solid fa-award text-lg"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-[15px] mb-1">Training Access</h4>
                                <p class="text-slate-600 text-sm leading-relaxed">Obtain certified driver safety programs, fleet efficiency coaching, and transport business management tutorials.</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-primary-50 border border-primary-100 rounded-lg p-6">
                        <h4 class="font-bold text-primary-800 mb-2">Need assistance?</h4>
                        <p class="text-primary-700 text-sm mb-4 leading-relaxed">
                            If you have questions regarding eligibility, documents, or annual membership fees, please reach out directly to our support desk.
                        </p>
                        <a href="mailto:ethtransfed@gmail.com" class="font-bold text-primary-700 hover:text-primary-900 transition-colors">
                            ethtransfed@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </main>

    ${renderFooter("ENG")}
`;

const membershipAm = `
    ${renderNavbar("/membership", "አማ")}

    <main class="flex-grow pb-24">
        <div class="relative text-white pt-12 pb-16 overflow-hidden bg-slate-950 mb-10">
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <img src="/images/hero_expressway.jpg" class="w-full h-full object-cover object-center animate-slow-motion filter brightness-95" />
                <div class="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-900/80 to-primary-950/90"></div>
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
                                <span class="text-white font-semibold">አባልነት</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <!-- Page Title -->
                <h1 class="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">የኢትራአፌ አባል ይሁኑ</h1>
                <p class="text-lg text-blue-100 max-w-3xl leading-relaxed">
                    በኢፌዲሪ ሕገ-መንግሥት አንቀጽ 31 እና በአሠሪና ሠራተኛ ጉዳይ አዋጅ ቁጥር 1156/2012 መሠረት የተቋቋመውን የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን ይቀላቀሉ። ከ17 አሠሪ ማኅበራትና ከ6,652 በላይ የንግድ ትራንስፖርት ኦፕሬተሮች ጋር በአንድነት ይቁሙ።
                </p>
            </div>
        </div>

        <!-- FLEET TIER & DUES ESTIMATOR (Amharic) -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
            <div class="bg-primary-600 rounded-lg p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
                <div class="max-w-3xl mb-8 relative z-10">
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-white border border-white/25 mb-3">
                        <i class="fa-solid fa-calculator text-white"></i>
                        <span>የአባልነት ታሪፍና መዋጮ አስሊ</span>
                    </div>
                    <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        የአባልነት ደረጃዎንና ዓመታዊ መዋጮዎን ያሰሉ
                    </h2>
                    <p class="text-sm text-blue-100 mt-2 leading-relaxed">
                        የንግድ ተሽከርካሪዎችዎን ብዛትና የስምሪት ዘርፍ በማስገባት በ2026 የፌዴሬሽኑ ጠቅላላ ጉባኤ ውሳኔ መሠረት የሚጠበቅብዎትን ዓመታዊ መዋጮና የሕግ ከለላ ፓኬጅ ያሰሉ።
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                    <!-- Inputs -->
                    <div class="lg:col-span-7 space-y-6">
                        <div>
                            <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">የትራንስፖርት ዘርፍ / የስምሪት አይነት ይምረጡ</label>
                            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5" id="calc-sector-selector">
                                <button type="button" class="calc-sector-btn active px-3 py-2.5 rounded-lg border border-primary-400 bg-primary-600 text-white font-bold text-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer shadow-sm" data-sector="የከባድ ጭነት ትራንስፖርት" data-rate="450" data-base="15000">
                                    <i class="fa-solid fa-truck-moving text-base text-primary-200"></i>
                                    <span>የከባድ ጭነት</span>
                                </button>
                                <button type="button" class="calc-sector-btn px-3 py-2.5 rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:text-white font-medium text-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer" data-sector="የሕዝብ አውቶቡስ" data-rate="300" data-base="10000">
                                    <i class="fa-solid fa-bus text-base text-primary-300"></i>
                                    <span>የሀገር አቋራጭ</span>
                                </button>
                                <button type="button" class="calc-sector-btn px-3 py-2.5 rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:text-white font-medium text-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer" data-sector="የከተማ ትራንስፖርት" data-rate="150" data-base="5000">
                                    <i class="fa-solid fa-van-shuttle text-base text-primary-300"></i>
                                    <span>የከተማ ትራንስፖርት</span>
                                </button>
                                <button type="button" class="calc-sector-btn px-3 py-2.5 rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:text-white font-medium text-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer" data-sector="የሎጂስቲክስና ጉምሩክ" data-rate="600" data-base="25000">
                                    <i class="fa-solid fa-boxes-stacked text-base text-primary-300"></i>
                                    <span>የሎጂስቲክስ መጋዘን</span>
                                </button>
                            </div>
                        </div>

                        <div>
                            <div class="flex justify-between items-center mb-2">
                                <label for="calc-fleet-slider" class="text-xs font-bold text-slate-300 uppercase tracking-wider">የተሽከርካሪዎች ብዛት</label>
                                <span class="px-3 py-1 bg-white/10 border border-white/20 rounded-lg text-sm font-black text-primary-300" id="calc-fleet-display">25 ተሽከርካሪዎች</span>
                            </div>
                            <input type="range" id="calc-fleet-slider" min="1" max="250" value="25" step="1" class="w-full accent-primary-500 cursor-pointer h-2 bg-slate-700 rounded-lg">
                            <div class="flex justify-between text-[11px] text-slate-400 mt-1">
                                <span>1 ተሽከርካሪ</span>
                                <span>50</span>
                                <span>100</span>
                                <span>175</span>
                                <span>250+ የንግድ ተሽከርካሪዎች</span>
                            </div>
                        </div>
                    </div>

                    <!-- Results Card -->
                    <div class="lg:col-span-5 bg-white/5 border border-white/15 rounded-lg p-6 backdrop-blur-md flex flex-col justify-between">
                        <div>
                            <div class="flex justify-between items-start mb-4">
                                <span class="text-xs text-slate-400 uppercase tracking-wider font-semibold">የአባልነት ደረጃ</span>
                                <span id="calc-tier-badge" class="px-3 py-1 rounded-full text-xs font-bold bg-primary-500/20 text-primary-300 border border-primary-400/30">
                                    የኮርፖሬት አባል
                                </span>
                            </div>

                            <div class="mb-5 pb-5 border-b border-white/10">
                                <span class="text-xs text-slate-400 block mb-1">የዓመታዊ መዋጮ ግምት</span>
                                <div class="flex items-baseline gap-2">
                                    <span class="text-3xl sm:text-4xl font-extrabold text-white" id="calc-dues-amount">26,250</span>
                                    <span class="text-sm font-bold text-primary-400">የኢትዮጵያ ብር / በዓመት</span>
                                </div>
                                <span class="text-[11px] text-slate-400 mt-1 block">በዓመት አንድ ጊዜ ወይም በየስድስት ወሩ የሚከፈል</span>
                            </div>

                            <div class="space-y-2 text-xs text-slate-300 mb-6">
                                <div class="flex items-center gap-2">
                                    <i class="fa-solid fa-check text-primary-400 text-xs"></i>
                                    <span>በትራንስፖርት ሚኒስቴርና ተቆጣጣሪ አካላት ፊት ሙሉ ውክልና</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <i class="fa-solid fa-check text-primary-400 text-xs"></i>
                                    <span>የድንበር ተሻጋሪ የሕግ ድጋፍና የዲመሬጅ ክርክር ከለላ</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <i class="fa-solid fa-check text-primary-400 text-xs"></i>
                                    <span>ለአሽከርካሪዎች የደህንነትና የሙያ ስልጠና ድጎማ</span>
                                </div>
                            </div>
                        </div>

                        <button type="button" id="calc-apply-btn" class="w-full py-3 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-lg text-xs sm:text-sm transition-all shadow-lg hover:shadow-primary-600/30 flex items-center justify-center gap-2 cursor-pointer">
                            <span>በዚህ መረጃ ያመልክቱ</span>
                            <i class="fa-solid fa-arrow-down text-xs"></i>
                        </button>
                    </div>
                </div>

                <!-- Documentation Downloads Strip -->
                <div class="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
                    <div class="flex items-center gap-2 text-xs text-slate-300">
                        <i class="fa-solid fa-folder-closed text-primary-400 text-sm"></i>
                        <span>ይፋዊ ሰነዶችና ቅጾች፡</span>
                    </div>
                    <div class="flex flex-wrap items-center gap-2.5">
                        <button type="button" class="doc-download-btn px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/15 rounded-lg text-xs font-semibold text-white flex items-center gap-2 transition-colors cursor-pointer" data-doc="የኢትራአፌ መተዳደሪያ ደንብ ሰነድ">
                            <i class="fa-solid fa-file-pdf text-primary-400"></i>
                            <span>መተዳደሪያ ደንብ (ፒዲኤፍ)</span>
                        </button>
                        <button type="button" class="doc-download-btn px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/15 rounded-lg text-xs font-semibold text-white flex items-center gap-2 transition-colors cursor-pointer" data-doc="የ2026 የንግድ ታሪፍ መመሪያ">
                            <i class="fa-solid fa-file-pdf text-primary-400"></i>
                            <span>የታሪፍ ሰንጠረዥ (ፒዲኤፍ)</span>
                        </button>
                        <button type="button" class="doc-download-btn px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/15 rounded-lg text-xs font-semibold text-white flex items-center gap-2 transition-colors cursor-pointer" data-doc="የአባልነት ምዝገባ መስፈርቶች">
                            <i class="fa-solid fa-file-arrow-down text-primary-400"></i>
                            <span>የምዝገባ ማረጋገጫ (ፒዲኤፍ)</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Registration Form & Benefits -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row gap-10 lg:gap-16">
                <!-- Registration Form -->
                <div class="lg:w-7/12 xl:w-2/3">
                    <div class="bg-white rounded-lg shadow-sm border border-slate-200 p-8 md:p-10">
                        <div class="mb-8">
                            <h2 class="text-2xl font-bold text-slate-900 mb-2">የድርጅት ምዝገባ ማመልከቻ</h2>
                            <p class="text-slate-500 text-sm">የትራንስፖርት ድርጅትዎን በፌዴሬሽኑ አባልነት ለማስመዝገብ ከታች ያለውን ቅጽ በትክክል ይሙሉ::</p>
                        </div>

                        <form id="membership-form" class="space-y-6">
                            <div id="membership-alert" class="hidden p-4 rounded-lg text-sm font-medium"></div>

                            <div>
                                <label for="orgName" class="block text-sm font-semibold text-slate-700 mb-1">የድርጅቱ / ማኅበሩ ስም <span class="text-red-500">*</span></label>
                                <input type="text" id="orgName" required placeholder="ለምሳሌ፡ ብሔራዊ ሎጂስቲክስ ኃ/የተ/የግ/ማ" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow text-slate-800 bg-white shadow-sm placeholder:text-slate-400">
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label for="contactName" class="block text-sm font-semibold text-slate-700 mb-1">የተወካይ / ኃላፊ ስም <span class="text-red-500">*</span></label>
                                    <input type="text" id="contactName" required placeholder="ለምሳሌ፡ አበበ ከበደ" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow text-slate-800 bg-white shadow-sm placeholder:text-slate-400">
                                </div>
                                <div>
                                    <label for="jobTitle" class="block text-sm font-semibold text-slate-700 mb-1">የሥራ ኃላፊነት</label>
                                    <input type="text" id="jobTitle" placeholder="ለምሳሌ፡ ሥራ አስኪያጅ" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow text-slate-800 bg-white shadow-sm placeholder:text-slate-400">
                                </div>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label for="email" class="block text-sm font-semibold text-slate-700 mb-1">የኢሜይል አድራሻ <span class="text-red-500">*</span></label>
                                    <input type="email" id="email" required placeholder="name@organization.com" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow text-slate-800 bg-white shadow-sm placeholder:text-slate-400">
                                </div>
                                <div>
                                    <label for="phone" class="block text-sm font-semibold text-slate-700 mb-1">ስልክ ቁጥር <span class="text-red-500">*</span></label>
                                    <input type="tel" id="phone" required placeholder="+251 911 00 0000" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow text-slate-800 bg-white shadow-sm placeholder:text-slate-400">
                                </div>
                            </div>

                            <div>
                                <label for="sector" class="block text-sm font-semibold text-slate-700 mb-1">የትራንስፖርት ዘርፍ / የስራ መስክ <span class="text-red-500">*</span></label>
                                <input type="text" id="sector" required placeholder="ለምሳሌ፡ የደረቅ ጭነት፣ የሕዝብ አውቶቡስ፣ የሎጂስቲክስ አገልግሎት" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow text-slate-800 bg-white shadow-sm placeholder:text-slate-400">
                            </div>

                            <div>
                                <label for="message" class="block text-sm font-semibold text-slate-700 mb-1">ተጨማሪ መረጃ ወይም የአባልነት ግብ</label>
                                <textarea id="message" rows="4" placeholder="ስለ ድርጅትዎ የስምሪት መስመር ወይም በዘርፉ ስለገጠምዎት ተግዳሮቶች ያብራሩ..." class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow text-slate-800 bg-white shadow-sm placeholder:text-slate-400 resize-y"></textarea>
                            </div>

                            <div class="pt-4">
                                <button type="submit" id="membership-submit-btn" class="w-full sm:w-auto px-8 py-4 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-colors shadow-md focus:ring-4 focus:ring-primary-200 flex items-center justify-center gap-2">
                                    <span>ማመልከቻውን አስገባ</span>
                                    <i class="fa-solid fa-paper-plane text-sm"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- Info Sidebar -->
                <div class="lg:w-5/12 xl:w-1/3">
                    <div class="mb-6">
                        <h3 class="text-2xl font-bold text-slate-900 mb-2">ለምን ኢትራአፌን ይቀላቀላሉ?</h3>
                        <p class="text-slate-500 text-sm">ለድርጅትዎ አስተማማኝ የሕግ ጥበቃና ሀገራዊ የዘርፍ ውክልና ያግኙ።</p>
                    </div>

                    <div class="space-y-4 mb-8">
                        <div class="bg-white border border-slate-200 p-5 rounded-lg shadow-sm flex items-start gap-4 hover:border-primary-300 transition-colors">
                            <div class="bg-primary-50 text-primary-600 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                                <i class="fa-solid fa-users text-lg"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-[15px] mb-1">ሀገራዊ የዘርፍ ውክልና</h4>
                                <p class="text-slate-600 text-sm leading-relaxed">በትራንስፖርት ታሪፍ፣ መስመሮችና ድንበሮች ላይ ውሳኔ በሚተላለፍባቸው መንግሥታዊ መድረኮች ላይ ተደማጭ ድምፅ ይሁኑ።</p>
                            </div>
                        </div>

                        <div class="bg-white border border-slate-200 p-5 rounded-lg shadow-sm flex items-start gap-4 hover:border-primary-300 transition-colors">
                            <div class="bg-primary-50 text-primary-600 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                                <i class="fa-solid fa-scale-balanced text-lg"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-[15px] mb-1">የፖሊሲና የሕግ ከለላ</h4>
                                <p class="text-slate-600 text-sm leading-relaxed">ኢትራአፌ የአሠሪዎችን ፍላጎት በብሔራዊ የሠራተኛ ሕጎች፣ የደህንነት ደረጃዎችና የሎጂስቲክስ ማሻሻያዎች ውስጥ ያስከብራል።</p>
                            </div>
                        </div>

                        <div class="bg-white border border-slate-200 p-5 rounded-lg shadow-sm flex items-start gap-4 hover:border-primary-300 transition-colors">
                            <div class="bg-primary-50 text-primary-600 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                                <i class="fa-solid fa-globe text-lg"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-[15px] mb-1">የንግድ ትስስር ዕድሎች</h4>
                                <p class="text-slate-600 text-sm leading-relaxed">ከዋና ዋና የሎጂስቲክስ ኦፕሬተሮች፣ የመንግሥት የጭነት ባለቤቶችና ዓለም አቀፍ ድርጅቶች ጋር ይገናኙ።</p>
                            </div>
                        </div>

                        <div class="bg-white border border-slate-200 p-5 rounded-lg shadow-sm flex items-start gap-4 hover:border-primary-300 transition-colors">
                            <div class="bg-primary-50 text-primary-600 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                                <i class="fa-solid fa-award text-lg"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-[15px] mb-1">የስልጠና ዕድሎች</h4>
                                <p class="text-slate-600 text-sm leading-relaxed">የአሽከርካሪዎች ደህንነት ስልጠና፣ የተሽከርካሪ ስምሪት ውጤታማነትና የትራንስፖርት ንግድ አመራር ስልጠናዎችን ያግኙ።</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-primary-50 border border-primary-100 rounded-lg p-6">
                        <h4 class="font-bold text-primary-800 mb-2">ድጋፍ ይፈልጋሉ?</h4>
                        <p class="text-primary-700 text-sm mb-4 leading-relaxed">
                            ስለ አባልነት መስፈርቶች፣ አስፈላጊ ሰነዶች ወይም ክፍያዎች ጥያቄ ካለዎት በቀጥታ ሴክሬታሪያቱን ያነጋግሩ።
                        </p>
                        <a href="mailto:ethtransfed@gmail.com" class="font-bold text-primary-700 hover:text-primary-900 transition-colors">
                            ethtransfed@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </main>

    ${renderFooter("አማ")}
`;

export default {
  title: {
    ENG: "Become a Member - Ethiopian Transport Employers Federation",
    "አማ": "አባል ይሁኑ - የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን",
  },
  markup: {
    ENG: membershipEng,
    "አማ": membershipAm,
  },
};
