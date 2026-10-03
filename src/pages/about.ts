import { Lang } from "../i18n";
import { renderNavbar, renderFooter } from "../layout";

const markupEng = `
    ${renderNavbar("/about", "ENG")}

    <main class="flex-grow">
        <div class="bg-primary-600 text-white pt-10 pb-16 relative overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <nav class="flex text-sm text-blue-100 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-house text-xs"></i> Home</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <i class="fa-solid fa-chevron-right text-xs mx-2 text-blue-200"></i>
                                <span class="text-white font-semibold">About Us</span>
                            </div>
                        </li>
                    </ol>
                </nav>
                <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                    <div class="max-w-3xl">
                        <div class="inline-flex items-center gap-2 px-3 py-1 bg-white/15 border border-white/25 rounded-full text-xs font-semibold text-white uppercase tracking-widest mb-4">
                            <i class="fa-solid fa-scale-balanced text-white"></i> FDRE Constitution Art. 31 • Proclamation No. 1156/2012
                        </div>
                        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                            Ethiopian Transport Employers' Federation
                        </h1>
                        <p class="mt-4 text-base sm:text-lg text-blue-100 leading-relaxed">
                            Established on May 12, 2018 (Ginbot 4, 2010 E.C.) by 17 employers' associations comprising over 6,652 members. Dedicated to industrial peace, legal advocacy, and operational efficiency across Ethiopia's transport sector.
                        </p>
                    </div>
                    <div class="flex flex-wrap items-center gap-3 shrink-0">
                        <a href="#services-section" class="px-5 py-2.5 bg-white text-primary-700 hover:bg-slate-100 rounded-xl text-sm font-bold transition-all shadow-md flex items-center gap-2">
                            <i class="fa-solid fa-handshake-angle text-xs"></i> Federation Services
                        </a>
                        <a href="#leadership-section" class="px-5 py-2.5 bg-primary-700 hover:bg-primary-800 text-white border border-white/30 rounded-xl text-sm font-semibold transition-all flex items-center gap-2">
                            <i class="fa-solid fa-users text-xs"></i> Board of Directors (13)
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <section class="relative -mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div class="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 flex items-center gap-4">
                    <div class="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-2xl font-bold shrink-0 shadow-inner">
                        <i class="fa-solid fa-users"></i>
                    </div>
                    <div>
                        <div class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">6,652+</div>
                        <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Foundation Members</div>
                    </div>
                </div>

                <div class="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 flex items-center gap-4">
                    <div class="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-2xl font-bold shrink-0 shadow-inner">
                        <i class="fa-solid fa-sitemap"></i>
                    </div>
                    <div>
                        <div class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">17</div>
                        <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Employers' Associations</div>
                    </div>
                </div>

                <div class="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 flex items-center gap-4">
                    <div class="w-14 h-14 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center text-2xl font-bold shrink-0 shadow-inner">
                        <i class="fa-solid fa-truck-moving"></i>
                    </div>
                    <div>
                        <div class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">39</div>
                        <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Founding Cargo Union</div>
                    </div>
                </div>

                <div class="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 flex items-center gap-4">
                    <div class="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-2xl font-bold shrink-0 shadow-inner">
                        <i class="fa-solid fa-certificate"></i>
                    </div>
                    <div>
                        <div class="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">May 12, 2018</div>
                        <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Ginbot 4, 2010 E.C. Certified</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-16 md:py-24 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col lg:flex-row gap-14 items-center">
                    <div class="lg:w-1/2">
                        <span class="text-primary-600 font-bold tracking-wider text-xs uppercase mb-3 block">HISTORICAL BACKGROUND & LEGAL FOUNDATION</span>
                        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6 leading-snug">
                            The Foundation and Institutional Evolution of ETEF
                        </h2>
                        
                        <div class="space-y-5 text-base sm:text-lg text-slate-600 leading-relaxed">
                            <p>
                                <strong>Background:</strong> Recognizing the need to move beyond operating individually, transporters initiated efforts to establish an organization by forming an organizing committee in 1993 E.C. Through their sustained efforts to secure government recognition, identify operational bottlenecks, and ensure their voices were heard, 39 associations founded the "Dry Cargo Associations Union" in Hidar 2009 E.C. (November 2016).
                            </p>
                            <p>
                                <strong>Establishment:</strong> The Ethiopian Transport Employers' Federation was formally established by uniting 17 employers' associations—representing over 6,652 individual members—under the constitutional right to organize enshrined in Article 31 of the FDRE Constitution, the Labor Proclamation No. 1156/2012, and international conventions ratified by Ethiopia pursuant to Article 9, Sub-article 9.4.
                            </p>
                            <p>
                                On May 12, 2018 (Ginbot 4, 2010 E.C.), the Federation received its official certificate of legal recognition from the former Ministry of Labor and Social Affairs, solidifying its role as the national employer voice.
                            </p>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 pt-6 border-t border-slate-100">
                            <div class="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                                <i class="fa-solid fa-circle-check text-primary-600 text-base"></i>
                                <span>FDRE Constitution Article 31</span>
                            </div>
                            <div class="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                                <i class="fa-solid fa-circle-check text-primary-600 text-base"></i>
                                <span>Labor Proclamation No. 1156/2012</span>
                            </div>
                            <div class="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                                <i class="fa-solid fa-circle-check text-primary-600 text-base"></i>
                                <span>Constitution Article 9, Sub-art. 9.4</span>
                            </div>
                            <div class="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                                <i class="fa-solid fa-circle-check text-primary-600 text-base"></i>
                                <span>Official Legal Recognition May 12, 2018</span>
                            </div>
                        </div>
                    </div>

                    <div class="lg:w-1/2 w-full">
                        <div class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-slate-900">
                            <img src="/images/about_vision.jpg" alt="Commercial Transport Fleets in Ethiopia" class="w-full h-[420px] object-cover opacity-90 hover:scale-105 transition-transform duration-700">
                            
                            <div class="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white text-xs font-semibold flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-primary-400"></span>
                                <span>Certified Legal Employer Federation</span>
                            </div>

                            <div class="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-slate-200">
                                <div class="flex items-start gap-3">
                                    <img src="/images/etef_logo.png" alt="ETEF Emblem" class="w-10 h-10 object-contain rounded-full bg-white p-0.5 shadow-sm shrink-0 border border-slate-200" />
                                    <div>
                                        <p class="text-xs sm:text-sm text-slate-800 italic leading-snug font-medium">
                                            "Beyond advocating for the rights and interests of our members, ETEF strives to leave a lasting mark and play a significant role in Ethiopia’s economic, social, political, and historical development."
                                        </p>
                                        <div class="mt-2 text-xs font-bold text-primary-700">
                                            — Ato Berehane Zeru, President of ETEF Board of Directors
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-16 bg-primary-600 text-white relative overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center max-w-3xl mx-auto mb-12">
                    <span class="text-blue-200 font-bold tracking-wider text-xs uppercase mb-2 block">OFFICIAL CHARTER MANDATE</span>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Vision, Mission & Strategic Goal</h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-white text-slate-900 p-8 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <div class="h-14 w-14 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                                <i class="fa-solid fa-eye text-2xl"></i>
                            </div>
                            <h3 class="text-xl sm:text-2xl font-bold mb-3 text-slate-900">Our Vision</h3>
                            <p class="text-slate-600 leading-relaxed text-sm">
                                "To become a strong and influential representative within Ethiopia’s transport sector."
                            </p>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-100 text-xs text-primary-600 font-semibold flex items-center gap-2">
                            <i class="fa-solid fa-check"></i> Influential Sector Voice
                        </div>
                    </div>

                    <div class="bg-white text-slate-900 p-8 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <div class="h-14 w-14 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                                <i class="fa-solid fa-bullseye text-2xl"></i>
                            </div>
                            <h3 class="text-xl sm:text-2xl font-bold mb-3 text-slate-900">Our Mission</h3>
                            <p class="text-slate-600 leading-relaxed text-sm">
                                "To ensure industrial peace and the effectiveness and efficiency of operations, the Ethiopian Transport Employers' Federation works to safeguard the legal, economic, and other rights of its members."
                            </p>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-100 text-xs text-primary-600 font-semibold flex items-center gap-2">
                            <i class="fa-solid fa-check-double"></i> Industrial Peace & Member Rights
                        </div>
                    </div>

                    <div class="bg-white text-slate-900 p-8 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <div class="h-14 w-14 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                                <i class="fa-solid fa-flag-checkered text-2xl"></i>
                            </div>
                            <h3 class="text-xl sm:text-2xl font-bold mb-3 text-slate-900">Our Goal</h3>
                            <p class="text-slate-600 leading-relaxed text-sm">
                                "Beyond advocating for the rights and interests of its members, to leave a lasting mark and play a significant role in the country’s economic, social, political, and historical development."
                            </p>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-100 text-xs text-primary-600 font-semibold flex items-center gap-2">
                            <i class="fa-solid fa-trophy"></i> National Impact & Historical Legacy
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-20 bg-slate-50 border-b border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <span class="text-primary-600 font-bold tracking-wider text-xs uppercase mb-2 block">FEDERATION VALUES</span>
                    <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">Institutional Values & Ethics</h2>
                    <p class="text-base sm:text-lg text-slate-600">
                        The Federation's primary value is <strong>Member Satisfaction</strong>, supported by six core institutional values:
                    </p>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    <div class="bg-white rounded-2xl p-5 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 mx-auto rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-3">
                            <i class="fa-solid fa-handshake"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">Integrity</h4>
                        <span class="text-xs text-slate-500 mt-1 block">Ethical Transparency</span>
                    </div>

                    <div class="bg-white rounded-2xl p-5 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 mx-auto rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-3">
                            <i class="fa-solid fa-heart"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">Respect</h4>
                        <span class="text-xs text-slate-500 mt-1 block">Mutual Regard</span>
                    </div>

                    <div class="bg-white rounded-2xl p-5 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 mx-auto rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-3">
                            <i class="fa-solid fa-bolt"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">Diligence</h4>
                        <span class="text-xs text-slate-500 mt-1 block">Commitment to Service</span>
                    </div>

                    <div class="bg-white rounded-2xl p-5 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 mx-auto rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-3">
                            <i class="fa-solid fa-shield-halved"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">Loyalty</h4>
                        <span class="text-xs text-slate-500 mt-1 block">Fidelity to Members</span>
                    </div>

                    <div class="bg-white rounded-2xl p-5 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 mx-auto rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-3">
                            <i class="fa-solid fa-people-group"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">Teamwork</h4>
                        <span class="text-xs text-slate-500 mt-1 block">Cohesive Action</span>
                    </div>

                    <div class="bg-white rounded-2xl p-5 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 mx-auto rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-3">
                            <i class="fa-solid fa-dove"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">Industrial Peace</h4>
                        <span class="text-xs text-slate-500 mt-1 block">Harmonious Growth</span>
                    </div>
                </div>
            </div>
        </section>

        <section id="services-section" class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-14">
                    <div class="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 border border-primary-200 rounded-full text-xs font-bold text-primary-700 uppercase tracking-wider mb-3">
                        <i class="fa-solid fa-briefcase"></i> Core Mandates & Member Services
                    </div>
                    <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                        Federation Services & Portfolios
                    </h2>
                    <p class="text-base sm:text-lg text-slate-600">
                        Providing comprehensive services to member operators regarding court representation, collective bargaining, capacity building, and market networking.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-primary-400 transition-all flex flex-col justify-between">
                        <div>
                            <div class="w-12 h-12 rounded-2xl bg-blue-100 text-primary-600 flex items-center justify-center text-xl font-bold mb-5">
                                <i class="fa-solid fa-gavel"></i>
                            </div>
                            <span class="text-xs font-bold text-primary-600 uppercase tracking-wider">Advocacy & Defense</span>
                            <h3 class="text-xl font-bold text-slate-900 mt-1 mb-3">Legal Representation & Court Advocacy</h3>
                            <ul class="space-y-2 text-xs sm:text-sm text-slate-600">
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>Represents employers before judicial courts and administrative tribunals</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>Provides comprehensive legal assistance regarding matters that may lead to disputes</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>Strives to prevent conflicts and ensure their prompt resolution within the industry</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>Provides expert counsel on taxation, customs assessments, and commercial liabilities</span>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-primary-700">
                            Court Representation & Legal Support Desk
                        </div>
                    </div>

                    <div class="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-primary-400 transition-all flex flex-col justify-between">
                        <div>
                            <div class="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl font-bold mb-5">
                                <i class="fa-solid fa-handshake"></i>
                            </div>
                            <span class="text-xs font-bold text-primary-600 uppercase tracking-wider">Industrial Relations</span>
                            <h3 class="text-xl font-bold text-slate-900 mt-1 mb-3">Collective Bargaining & Social Dialogue</h3>
                            <ul class="space-y-2 text-xs sm:text-sm text-slate-600">
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>Deals effectively with industrial relations through collective bargaining and social dialogue</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>Prepares agreements and negotiates on behalf of the employer during collective bargaining</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>Organizes and coordinates bilateral and tripartite consultative forums</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>Compiles and drafts memoranda of association and statutory governance charters</span>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-primary-700">
                            Bipartite & Tripartite Social Dialogue
                        </div>
                    </div>

                    <div class="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-primary-400 transition-all flex flex-col justify-between">
                        <div>
                            <div class="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl font-bold mb-5">
                                <i class="fa-solid fa-file-signature"></i>
                            </div>
                            <span class="text-xs font-bold text-primary-700 uppercase tracking-wider">Regulatory Reform</span>
                            <h3 class="text-xl font-bold text-slate-900 mt-1 mb-3">Policy Input & Law Enactment</h3>
                            <ul class="space-y-2 text-xs sm:text-sm text-slate-600">
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>Participates actively in drafting national policies, proclamations, and transport directives</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>Provides input on legislative amendments to protect employers' constitutional rights</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>Generates proposals for the revision of labor proclamations and carrier liabilities</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>Supports transport operators in exercising their lawful freedom of association</span>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-primary-700">
                            National Policy & Proclamation Review
                        </div>
                    </div>

                    <div class="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-primary-400 transition-all flex flex-col justify-between">
                        <div>
                            <div class="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl font-bold mb-5">
                                <i class="fa-solid fa-chalkboard-user"></i>
                            </div>
                            <span class="text-xs font-bold text-primary-700 uppercase tracking-wider">Workforce Development</span>
                            <h3 class="text-xl font-bold text-slate-900 mt-1 mb-3">Professional Capacity Building</h3>
                            <p class="text-xs text-slate-500 mb-3">Renders professional development trainings on:</p>
                            <div class="grid grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
                                <span class="bg-white px-2 py-1.5 rounded-lg border border-slate-200">✓ Management</span>
                                <span class="bg-white px-2 py-1.5 rounded-lg border border-slate-200">✓ Leadership</span>
                                <span class="bg-white px-2 py-1.5 rounded-lg border border-slate-200">✓ Labor Law</span>
                                <span class="bg-white px-2 py-1.5 rounded-lg border border-slate-200">✓ Good Governance</span>
                                <span class="bg-white px-2 py-1.5 rounded-lg border border-slate-200">✓ Kaizen / Productivity</span>
                                <span class="bg-white px-2 py-1.5 rounded-lg border border-slate-200">✓ Competitive Advantage</span>
                            </div>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-primary-700">
                            Continuous Professional Education
                        </div>
                    </div>

                    <div class="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-primary-400 transition-all flex flex-col justify-between">
                        <div>
                            <div class="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl font-bold mb-5">
                                <i class="fa-solid fa-network-wired"></i>
                            </div>
                            <span class="text-xs font-bold text-primary-700 uppercase tracking-wider">Enterprise Growth</span>
                            <h3 class="text-xl font-bold text-slate-900 mt-1 mb-3">Market Networking & Commercial Contracts</h3>
                            <ul class="space-y-2 text-xs sm:text-sm text-slate-600">
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>Promotes market networking and inter-carrier freight exchanges</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>Facilitates commercial contracts between members and partner organizations</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>Assists operators in business planning and sector competitive advantage</span>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-primary-700">
                            Commercial Contract Facilitation
                        </div>
                    </div>

                    <div class="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-primary-400 transition-all flex flex-col justify-between">
                        <div>
                            <div class="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl font-bold mb-5">
                                <i class="fa-solid fa-globe"></i>
                            </div>
                            <span class="text-xs font-bold text-primary-700 uppercase tracking-wider">Global Linkages</span>
                            <h3 class="text-xl font-bold text-slate-900 mt-1 mb-3">Exhibitions & Experience Sharing</h3>
                            <ul class="space-y-2 text-xs sm:text-sm text-slate-600">
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>Organizes trade exhibitions, symposiums, and transport conventions</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>Conducts domestic and international experience-sharing programs</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>Advocates for occupational health, safety, and conducive working conditions</span>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-primary-700">
                            National & Global Industry Linkages
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="leadership-section" class="py-20 bg-slate-50 border-t border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <span class="text-primary-600 font-bold tracking-wider text-xs uppercase mb-2 block">OFFICIAL ETEF GOVERNANCE</span>
                    <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                        Executive Board of Directors
                    </h2>
                    <p class="text-base sm:text-lg text-slate-600">
                        Elected industry principals guiding the strategic vision and safeguarding the rights of Ethiopia's transport employers.
                    </p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_president_dr_dawit.jpg" alt="Ato Berehane Zeru" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-primary-600 rounded-full text-[11px] font-bold uppercase tracking-wider">President</span>
                                <h3 class="text-xl font-bold text-white mt-1">Ato Berehane Zeru</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                President of the Board of Directors. Leading executive governance and national policy advocacy.
                            </p>
                            <button type="button" data-bio="berehane" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>Read Full Biography</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_vp_tigist.jpg" alt="Ato Mesele Hagos" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-sky-600 rounded-full text-[11px] font-bold uppercase tracking-wider">Vice President</span>
                                <h3 class="text-xl font-bold text-white mt-1">Ato Mesele Hagos</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                Vice President of the Board of Directors. Directing collective bargaining and operational efficiency.
                            </p>
                            <button type="button" data-bio="mesele" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>Read Full Biography</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_sec_yared.jpg" alt="Ato Derje Legesse" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-primary-600 rounded-full text-[11px] font-bold uppercase tracking-wider">Secretary</span>
                                <h3 class="text-xl font-bold text-white mt-1">Ato Derje Legesse</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                Secretary of the Board of Directors. Managing institutional governance, statutory filings, and legal records.
                            </p>
                            <button type="button" data-bio="derje" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>Read Full Biography</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_logistics_selamawit.jpg" alt="Ato Dejene Luchie" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">Board Member</span>
                                <h3 class="text-xl font-bold text-white mt-1">Ato Dejene Luchie</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                Board Member representing dry cargo freight carriers and regional operator associations.
                            </p>
                            <button type="button" data-bio="dejene" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>Read Full Biography</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_regional_bereket.jpg" alt="Ato Seid Ibrahim" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">Board Member</span>
                                <h3 class="text-xl font-bold text-white mt-1">Ato Seid Ibrahim</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                Board Member advocating for corridor route security, fair tariffs, and carrier rights.
                            </p>
                            <button type="button" data-bio="seid" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>Read Full Biography</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_policy_helen.jpg" alt="Ato Mekonnen Workie" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">Board Member</span>
                                <h3 class="text-xl font-bold text-white mt-1">Ato Mekonnen Workie</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                Board Member spearheading enterprise business planning and market networking programs.
                            </p>
                            <button type="button" data-bio="mekonnen" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>Read Full Biography</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_president_dr_dawit.jpg" alt="Ato Yergalem Sefani" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">Board Member</span>
                                <h3 class="text-xl font-bold text-white mt-1">Ato Yergalem Sefani</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                Board Member leading legal dispute advisory and court representation coordination.
                            </p>
                            <button type="button" data-bio="yergalem" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>Read Full Biography</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_vp_tigist.jpg" alt="Ato Msfin Eshetu" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">Board Member</span>
                                <h3 class="text-xl font-bold text-white mt-1">Ato Msfin Eshetu</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                Board Member focusing on occupational safety, roadworthiness, and labor law compliance.
                            </p>
                            <button type="button" data-bio="msfin" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>Read Full Biography</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_sec_yared.jpg" alt="Ato Tadsse Ejegu" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">Board Member</span>
                                <h3 class="text-xl font-bold text-white mt-1">Ato Tadsse Ejegu</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                Board Member providing expert input on transport proclamations, directives, and operator rights.
                            </p>
                            <button type="button" data-bio="tadsse" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>Read Full Biography</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_logistics_selamawit.jpg" alt="Ato Mohammed Hassan" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">Board Member</span>
                                <h3 class="text-xl font-bold text-white mt-1">Ato Mohammed Hassan</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                Board Member coordinating regional association relations, bilateral forums, and member consultations.
                            </p>
                            <button type="button" data-bio="mohammed" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>Read Full Biography</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_regional_bereket.jpg" alt="Ato Nurdin Ditamo" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">Board Member</span>
                                <h3 class="text-xl font-bold text-white mt-1">Ato Nurdin Ditamo</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                Board Member promoting fleet technology adoption, Kaizen productivity methods, and tax counseling.
                            </p>
                            <button type="button" data-bio="nurdin" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>Read Full Biography</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_policy_helen.jpg" alt="Ato Abeba Kassa" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">Board Member</span>
                                <h3 class="text-xl font-bold text-white mt-1">Ato Abeba Kassa</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                Board Member supporting commercial partnerships, trade exhibitions, and collective agreement documentation.
                            </p>
                            <button type="button" data-bio="abeba" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>Read Full Biography</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_president_dr_dawit.jpg" alt="Ato Engeda H/Maryam" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">Board Member</span>
                                <h3 class="text-xl font-bold text-white mt-1">Ato Engeda H/Maryam</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                Board Member organizing experience-sharing programs, technological adoption, and fleet modernization.
                            </p>
                            <button type="button" data-bio="engeda" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>Read Full Biography</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <span class="text-primary-600 font-bold tracking-wider text-xs uppercase mb-2 block">OFFICIAL RECORDS & PROCLAMATIONS</span>
                        <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Statutory Documents & Publications</h2>
                        <p class="text-sm sm:text-base text-slate-600 mt-2">Access the legal constitution, labor proclamation reference, and collective bargaining guidelines.</p>
                    </div>
                    <a href="/contact" class="text-sm font-bold text-primary-600 hover:text-primary-700 flex items-center gap-1.5 shrink-0">
                        Request Official Records <i class="fa-solid fa-arrow-right text-xs"></i>
                    </a>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-primary-400 transition-colors">
                        <div>
                            <div class="w-12 h-12 rounded-xl bg-blue-100 text-primary-700 flex items-center justify-center font-bold text-xl mb-4">
                                <i class="fa-solid fa-book-bookmark"></i>
                            </div>
                            <span class="text-[11px] font-bold text-primary-600 uppercase tracking-wider block">Bylaws & Constitution</span>
                            <h4 class="text-base font-bold text-slate-900 mt-1 mb-2">ETEF Constitution & Establishment Charter</h4>
                            <p class="text-xs text-slate-500 leading-relaxed">Official constitution established under FDRE Constitution Art. 31 and Labor Proclamation 1156/2012.</p>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                            <span class="text-xs text-slate-400 font-semibold">PDF • 4.2 MB</span>
                            <button type="button" class="doc-download-btn text-xs font-bold text-primary-600 hover:text-primary-800 flex items-center gap-1 cursor-pointer bg-transparent border-none p-0" data-doc="ETEF Constitution & Establishment Charter (PDF)">
                                Download <i class="fa-solid fa-download text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-primary-400 transition-colors">
                        <div>
                            <div class="w-12 h-12 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center font-bold text-xl mb-4">
                                <i class="fa-solid fa-certificate"></i>
                            </div>
                            <span class="text-[11px] font-bold text-primary-600 uppercase tracking-wider block">Legal Recognition</span>
                            <h4 class="text-base font-bold text-slate-900 mt-1 mb-2">Ministry Certificate of Recognition (Ginbot 4, 2010 E.C.)</h4>
                            <p class="text-xs text-slate-500 leading-relaxed">Official certificate of registration from the former Ministry of Labor and Social Affairs.</p>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                            <span class="text-xs text-slate-400 font-semibold">PDF • 2.1 MB</span>
                            <button type="button" class="doc-download-btn text-xs font-bold text-primary-600 hover:text-primary-800 flex items-center gap-1 cursor-pointer bg-transparent border-none p-0" data-doc="Ministry Certificate of Recognition Ginbot 4, 2010 E.C. (PDF)">
                                Download <i class="fa-solid fa-download text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-primary-400 transition-colors">
                        <div>
                            <div class="w-12 h-12 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center font-bold text-xl mb-4">
                                <i class="fa-solid fa-scale-balanced"></i>
                            </div>
                            <span class="text-[11px] font-bold text-primary-700 uppercase tracking-wider block">Labor Proclamation</span>
                            <h4 class="text-base font-bold text-slate-900 mt-1 mb-2">Labor Proclamation No. 1156/2012 Handbook</h4>
                            <p class="text-xs text-slate-500 leading-relaxed">Employers' rights, collective bargaining protocols, and industrial relations provisions.</p>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                            <span class="text-xs text-slate-400 font-semibold">PDF • 3.5 MB</span>
                            <button type="button" class="doc-download-btn text-xs font-bold text-primary-600 hover:text-primary-800 flex items-center gap-1 cursor-pointer bg-transparent border-none p-0" data-doc="Labor Proclamation No. 1156/2012 Handbook (PDF)">
                                Download <i class="fa-solid fa-download text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-primary-400 transition-colors">
                        <div>
                            <div class="w-12 h-12 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center font-bold text-xl mb-4">
                                <i class="fa-solid fa-handshake-simple"></i>
                            </div>
                            <span class="text-[11px] font-bold text-primary-700 uppercase tracking-wider block">Collective Agreements</span>
                            <h4 class="text-base font-bold text-slate-900 mt-1 mb-2">Standard Collective Bargaining Guide</h4>
                            <p class="text-xs text-slate-500 leading-relaxed">Model collective bargaining agreements, tripartite dialogue guidelines, and dispute prevention rules.</p>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                            <span class="text-xs text-slate-400 font-semibold">PDF • 2.8 MB</span>
                            <button type="button" class="doc-download-btn text-xs font-bold text-primary-600 hover:text-primary-800 flex items-center gap-1 cursor-pointer bg-transparent border-none p-0" data-doc="Standard Collective Bargaining Guide (PDF)">
                                Download <i class="fa-solid fa-download text-[10px]"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-16 bg-primary-600 text-white relative overflow-hidden">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <span class="text-blue-200 font-bold tracking-wider text-xs uppercase mb-3 block">JOIN ETEF</span>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-4">Partner with the Federation Today</h2>
                <p class="text-base sm:text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                    Enhance your transport services and productivity by entrusting your challenges and concerns to the Ethiopian Transport Employers' Federation.
                </p>
                <div class="flex flex-wrap justify-center gap-4">
                    <a href="/membership" class="inline-flex justify-center items-center px-8 py-3.5 bg-white text-primary-700 rounded-xl text-sm font-bold hover:bg-slate-100 transition-colors shadow-md">
                        Become a Member
                    </a>
                    <a href="/contact" class="inline-flex justify-center items-center px-8 py-3.5 bg-primary-700 border border-white/30 text-white rounded-xl text-sm font-semibold hover:bg-primary-800 transition-colors shadow-sm">
                        Contact the Secretariat
                    </a>
                </div>
            </div>
        </section>
    </main>

    ${renderFooter("ENG")}
`;

const markupAm = `
    ${renderNavbar("/about", "አማ")}

    <main class="flex-grow">
        <div class="bg-primary-600 text-white pt-10 pb-16 relative overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <nav class="flex text-sm text-blue-100 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-house text-xs"></i> መነሻ</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <i class="fa-solid fa-chevron-right text-xs mx-2 text-blue-200"></i>
                                <span class="text-white font-semibold">ስለ እኛ</span>
                            </div>
                        </li>
                    </ol>
                </nav>
                <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                    <div class="max-w-3xl">
                        <div class="inline-flex items-center gap-2 px-3 py-1 bg-white/15 border border-white/25 rounded-full text-xs font-semibold text-white uppercase tracking-widest mb-4">
                            <i class="fa-solid fa-scale-balanced text-white"></i> በኢ.ፌ.ዲ.ሪ. ሕገ መንግሥት አንቀጽ 31 • አዋጅ ቁጥር 1156/2012
                        </div>
                        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                            የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን
                        </h1>
                        <p class="mt-4 text-base sm:text-lg text-blue-100 leading-relaxed">
                            በስሩ ከ6,652 በላይ አባላት ያሏቸውን 17 የአሠሪ ማኅበራትን በማቀፍ ግንቦት 04 ቀን 2010 ዓ/ም የተመሠረተ። የኢንዱስትሪውን ሰላም ለማስፈን፣ የአሠሪዎችን መብት ለማስከበርና ዘርፉን ለማዘመን የሚሰራ ብሔራዊ ተቋም።
                        </p>
                    </div>
                    <div class="flex flex-wrap items-center gap-3 shrink-0">
                        <a href="#services-section" class="px-5 py-2.5 bg-white text-primary-700 hover:bg-slate-100 rounded-xl text-sm font-bold transition-all shadow-md flex items-center gap-2">
                            <i class="fa-solid fa-handshake-angle text-xs"></i> የፌዴሬሽኑ አገልግሎቶች
                        </a>
                        <a href="#leadership-section" class="px-5 py-2.5 bg-primary-700 hover:bg-primary-800 text-white border border-white/30 rounded-xl text-sm font-semibold transition-all flex items-center gap-2">
                            <i class="fa-solid fa-users text-xs"></i> የሥራ አስፈጻሚ ቦርድ (13)
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <section class="relative -mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div class="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 flex items-center gap-4">
                    <div class="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-2xl font-bold shrink-0 shadow-inner">
                        <i class="fa-solid fa-users"></i>
                    </div>
                    <div>
                        <div class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">6,652+</div>
                        <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">የፌዴሬሽኑ አባላት</div>
                    </div>
                </div>

                <div class="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 flex items-center gap-4">
                    <div class="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-2xl font-bold shrink-0 shadow-inner">
                        <i class="fa-solid fa-sitemap"></i>
                    </div>
                    <div>
                        <div class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">17</div>
                        <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">የአሠሪ ማኅበራት</div>
                    </div>
                </div>

                <div class="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 flex items-center gap-4">
                    <div class="w-14 h-14 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center text-2xl font-bold shrink-0 shadow-inner">
                        <i class="fa-solid fa-truck-moving"></i>
                    </div>
                    <div>
                        <div class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">39</div>
                        <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">የደረቅ ጭነት ኀብረት ማኅበራት</div>
                    </div>
                </div>

                <div class="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 flex items-center gap-4">
                    <div class="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-2xl font-bold shrink-0 shadow-inner">
                        <i class="fa-solid fa-certificate"></i>
                    </div>
                    <div>
                        <div class="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">ግንቦት 04/2010</div>
                        <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">ሕጋዊ የዕውቅና ምስክር</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-16 md:py-24 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col lg:flex-row gap-14 items-center">
                    <div class="lg:w-1/2">
                        <span class="text-primary-600 font-bold tracking-wider text-xs uppercase mb-3 block">የፌዴሬሽኑ ታሪክ እና ሕጋዊ መሠረት</span>
                        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6 leading-snug">
                            ቅድመ ታሪክ እና የፌዴሬሽኑ ምሥረታ
                        </h2>
                        
                        <div class="space-y-5 text-base sm:text-lg text-slate-600 leading-relaxed">
                            <p>
                                <strong>ቅድመ ታሪክ፦</strong> ትራንስፖርተሩ በተናጠል ከመንቀሳቀስ ይልቅ አስፈላጊነት በማመን ድርጅት የመመስረት ጥረቱን አደራጅ ኮሚቴ በማቋቋም በ1993 ዓ.ም. ጀመረ። 39 ማኅበራት በመንግሥት እውቅና እንዲያገኙ፣ ችግሮቻቸው ተለይተው እንዲታወቁና ድምፃቸው እንዲሰማ በመንቀሳቀስ «የደረቅ ጭነት ማኅበራት ኀብረት»ን በኅዳር ወር 2009 ዓ/ም መሠረቱ።
                            </p>
                            <p>
                                <strong>ምሥረታ፦</strong> የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን፣ በኢ.ፌ.ዲ.ሪ. ሕገ መንግሥት አንቀጽ 31 የመደራጀት መብት መሠረት፤ በአሠሪና ሠራተኛ ዐዋጅ ቁጥር 1156/2012 የአሠሪና ሠራተኛ ጉዳይ አዋጅ፤ ኢትዮጵያ በሕገ መንግሥቱ አንቀጽ 9 ንዑስ አንቀጽ 9.4 መሠረት የሕገ መንግሥቷ አካል በማድረግ ዕውቅና ሰጥታ በተቀበለቻቸውና ባጸደቀቻቸው ዓለም አቀፍ ኮንቬንሽኖች እና ሬኮማንዴሽኖች መሠረት በስሩ 6,652 በላይ አባላት ያሏቸውን 17 የአሠሪ ማኅበራትን በማቀፍ ተመስርቷል።
                            </p>
                            <p>
                                ፌዴሬሽኑ ከቀድሞው የሠራተኛ እና ማኅበራዊ ጉዳይ ሚኒስቴር ሕጋዊ የምሥክር ግንቦት 04 ቀን 2010 ዓ/ም የእውቅና ምስክር ወረቀት ተቀብሏል።
                            </p>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 pt-6 border-t border-slate-100">
                            <div class="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                                <i class="fa-solid fa-circle-check text-primary-600 text-base"></i>
                                <span>በኢ.ፌ.ዲ.ሪ. ሕገ መንግሥት አንቀጽ 31</span>
                            </div>
                            <div class="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                                <i class="fa-solid fa-circle-check text-primary-600 text-base"></i>
                                <span>በአሠሪና ሠራተኛ ዐዋጅ ቁጥር 1156/2012</span>
                            </div>
                            <div class="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                                <i class="fa-solid fa-circle-check text-primary-600 text-base"></i>
                                <span>ሕገ መንግሥቱ አንቀጽ 9 ንዑስ አንቀጽ 9.4</span>
                            </div>
                            <div class="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                                <i class="fa-solid fa-circle-check text-primary-600 text-base"></i>
                                <span>ግንቦት 04 ቀን 2010 ዓ/ም ሕጋዊ ምዝገባ</span>
                            </div>
                        </div>
                    </div>

                    <div class="lg:w-1/2 w-full">
                        <div class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-slate-900">
                            <img src="/images/about_vision.jpg" alt="የኢትዮጵያ የጭነት ትራንስፖርት" class="w-full h-[420px] object-cover opacity-90 hover:scale-105 transition-transform duration-700">
                            
                            <div class="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white text-xs font-semibold flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-primary-400"></span>
                                <span>ሕጋዊ ዕውቅና ያለው የአሠሪዎች ፌዴሬሽን</span>
                            </div>

                            <div class="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-slate-200">
                                <div class="flex items-start gap-3">
                                    <img src="/images/etef_logo.png" alt="የኢትራአፌ አርማ" class="w-10 h-10 object-contain rounded-full bg-white p-0.5 shadow-sm shrink-0 border border-slate-200" />
                                    <div>
                                        <p class="text-xs sm:text-sm text-slate-800 italic leading-snug font-medium">
                                            "በኢትዮጵያ ትራንስፖርት ዘርፍ የተሰማሩ አባላቱን መብት እና ጥቅም ከማስከበር እና ድምፃቸውን ከማሰማት ባለፈ በሃገራችን ምጣኔ-ሃብታዊ፣ ማህበራዊ፣ ፖለቲካዊ እና ታሪካዊ እድገት ላይ የራሱን አሻራ ማሳረፍ እና ጉልህ ሚናን መጫወት ዋነኛ ግባችን ነው።"
                                        </p>
                                        <div class="mt-2 text-xs font-bold text-primary-700">
                                            — አቶ ብርሃኔ ዘርዑ፣ የቦርድ ፕሬዚዳንት
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-16 bg-primary-600 text-white relative overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center max-w-3xl mx-auto mb-12">
                    <span class="text-blue-200 font-bold tracking-wider text-xs uppercase mb-2 block">ይፋዊ የፌዴሬሽኑ ዓላማ</span>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">ራዕይ፣ ተልዕኮ እና ግብ</h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-white text-slate-900 p-8 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <div class="h-14 w-14 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                                <i class="fa-solid fa-eye text-2xl"></i>
                            </div>
                            <h3 class="text-xl sm:text-2xl font-bold mb-3 text-slate-900">ራዕይ</h3>
                            <p class="text-slate-600 leading-relaxed text-sm">
                                "በኢትዮጵያ የትራንስፖርት ዘርፍ ጠንካራ እና ተደማጭ ወኪል ሆኖ ማየት።"
                            </p>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-100 text-xs text-primary-600 font-semibold flex items-center gap-2">
                            <i class="fa-solid fa-check"></i> ጠንካራና ተደማጭ ወኪል
                        </div>
                    </div>

                    <div class="bg-white text-slate-900 p-8 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <div class="h-14 w-14 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                                <i class="fa-solid fa-bullseye text-2xl"></i>
                            </div>
                            <h3 class="text-xl sm:text-2xl font-bold mb-3 text-slate-900">ተልዕኮ</h3>
                            <p class="text-slate-600 leading-relaxed text-sm">
                                "የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን የአባላቱን ሕጋዊ፣ ምጣኔ-ሃብታዊ እና ሌሎችንም መብቶቻቸውን ለማስከበር ሥራቸውም ውጤታማና ቀልጣፋ እንዲሆን በተለያየ ዘርፎች የአቅም ማጎልበቻ ስልጠናዎችን እና ትምህርቶችን እንዲሁም የሕግ ድጋፍ እና ምክር አገልግሎት በመስጠት ራሱን እና አባላቱን አልፎም ዘርፉን ዘመኑ ባፈራቸው የቴክኖሎጂ ውጤቶች በማደራጀት እና ከዓለም አቀፍ እና ሃገር አቀፍ ከማህበራዊ አጋሮች ጋር በትብብር በመስራት የኢንዱስትሪው ሰላም እንዲረጋገጥ መስራት፡፡"
                            </p>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-100 text-xs text-primary-600 font-semibold flex items-center gap-2">
                            <i class="fa-solid fa-check-double"></i> የኢንዱስትሪ ሰላም እና የአባላት መብት
                        </div>
                    </div>

                    <div class="bg-white text-slate-900 p-8 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <div class="h-14 w-14 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                                <i class="fa-solid fa-flag-checkered text-2xl"></i>
                            </div>
                            <h3 class="text-xl sm:text-2xl font-bold mb-3 text-slate-900">ግብ</h3>
                            <p class="text-slate-600 leading-relaxed text-sm">
                                "በኢትዮጵያ ትራንስፖርት ዘርፍ የተሰማሩ አባላቱን መብት እና ጥቅም ከማስከበር እና ድምፃቸውን ከማሰማት ባለፈ በሃገራችን ምጣኔ-ሃብታዊ፣ ማህበራዊ፣ ፖለቲካዊ እና ታሪካዊ እድገት ላይ የራሱን አሻራ ማሳረፍ እና ጉልህ ሚናን መጫወት፡፡"
                            </p>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-100 text-xs text-primary-600 font-semibold flex items-center gap-2">
                            <i class="fa-solid fa-trophy"></i> ታሪካዊ እድገትና አሻራ
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-20 bg-slate-50 border-b border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <span class="text-primary-600 font-bold tracking-wider text-xs uppercase mb-2 block">የፌዴሬሽኑ እሴቶች</span>
                    <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">መሪና ዋነኛ እሴቶቻችን</h2>
                    <p class="text-base sm:text-lg text-slate-600">
                        የፌዴሬሽኑ መሪ እሴት <strong>የአባላቱ ርካታ</strong> ሲሆን ዋነኛ እሴቶቹ የሚከተሉት ናቸው፦
                    </p>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    <div class="bg-white rounded-2xl p-5 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 mx-auto rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-3">
                            <i class="fa-solid fa-handshake"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">ታማኝነት</h4>
                        <span class="text-xs text-slate-500 mt-1 block">ግልጽነትና ፍትሃዊነት</span>
                    </div>

                    <div class="bg-white rounded-2xl p-5 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 mx-auto rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-3">
                            <i class="fa-solid fa-heart"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">ክብር</h4>
                        <span class="text-xs text-slate-500 mt-1 block">የጋራ አክብሮት</span>
                    </div>

                    <div class="bg-white rounded-2xl p-5 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 mx-auto rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-3">
                            <i class="fa-solid fa-bolt"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">ትጋት</h4>
                        <span class="text-xs text-slate-500 mt-1 block">ተግቶ ማገልገል</span>
                    </div>

                    <div class="bg-white rounded-2xl p-5 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 mx-auto rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-3">
                            <i class="fa-solid fa-shield-halved"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">ታማኝነት</h4>
                        <span class="text-xs text-slate-500 mt-1 block">ለአባላት ታማኝ መሆን</span>
                    </div>

                    <div class="bg-white rounded-2xl p-5 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 mx-auto rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-3">
                            <i class="fa-solid fa-people-group"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">የቡድን ስራ</h4>
                        <span class="text-xs text-slate-500 mt-1 block">የተቀናጀ ጥረት</span>
                    </div>

                    <div class="bg-white rounded-2xl p-5 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 mx-auto rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-3">
                            <i class="fa-solid fa-dove"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">የኢንዱስትሪ ሰላም</h4>
                        <span class="text-xs text-slate-500 mt-1 block">ለሰላም መትጋት</span>
                    </div>
                </div>
            </div>
        </section>

        <section id="services-section" class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-14">
                    <div class="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 border border-primary-200 rounded-full text-xs font-bold text-primary-700 uppercase tracking-wider mb-3">
                        <i class="fa-solid fa-briefcase"></i> ይፋዊ አገልግሎቶች
                    </div>
                    <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                        የፌዴሬሽኑ አገልግሎቶች
                    </h2>
                    <p class="text-base sm:text-lg text-slate-600">
                        ፌዴሬሽኑ ለአባላቱ ሕግና ለሌሎች ሕግ ነክ ጉዳዮች፣ የጋራ ድርድር፣ የአቅም ግንባታ እና የገበያ ትስስር አጠቃላይ አገልግሎት ይሰጣል፦
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-primary-400 transition-all flex flex-col justify-between">
                        <div>
                            <div class="w-12 h-12 rounded-2xl bg-blue-100 text-primary-600 flex items-center justify-center text-xl font-bold mb-5">
                                <i class="fa-solid fa-gavel"></i>
                            </div>
                            <span class="text-xs font-bold text-primary-600 uppercase tracking-wider">የውትወታና መሟገት</span>
                            <h3 class="text-xl font-bold text-slate-900 mt-1 mb-3">የፍርድ ቤት ውክልና እና የሕግ ድጋፍ</h3>
                            <ul class="space-y-2 text-xs sm:text-sm text-slate-600">
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>በፍርድ ቤት አሠሪዎችን ይወክላል</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>ለክርክር ምክንያት በሚሆን ጉዳይ ላይ ሙሉ አገልግሎት መስጠት</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>ግጭቶች እንዳይፈጠሩ ጥረት ማድረግ፥ በተፈጠሩ ጊዜም ኢንዱስትሪው ውስጥ እንዲፈቱ ማድረግ</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>ለአባላት በግብር ታክስና በሌሎች ተዛማጅ ጉዳዮች ላይ ምክር መስጠት</span>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-primary-700">
                            የፍርድ ቤት ክርክርና የሕግ ምክር
                        </div>
                    </div>

                    <div class="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-primary-400 transition-all flex flex-col justify-between">
                        <div>
                            <div class="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl font-bold mb-5">
                                <i class="fa-solid fa-handshake"></i>
                            </div>
                            <span class="text-xs font-bold text-primary-600 uppercase tracking-wider">የኢንዱስትሪ ሰላም</span>
                            <h3 class="text-xl font-bold text-slate-900 mt-1 mb-3">የጋራ ድርድር እና ማህበራዊ ውይይት</h3>
                            <ul class="space-y-2 text-xs sm:text-sm text-slate-600">
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>በጋራ ድርድር እና ማህበራዊ ውይይት አማካኝነት የኢንዱስትሪ ግንኙነቶችን መምራት</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>በሕብረት ድርድር ወቅት ሰነዶችን ማዘጋጀት፥ አሠሪውን ወክሎ መደራደር ወይም ማማከር</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>የሁለትዮሽና ሦስትዮሽ መድረኮች በማዘጋጀት፣ መሳተፍ እና ማስተባበር</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>የሰነዶች ዝግጅት (መመስረቻ፣ ሕብረት ስምምነት... ወዘተ) ማጠናቀቅ</span>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-primary-700">
                            የሁለትዮሽና ሦስትዮሽ መድረኮች
                        </div>
                    </div>

                    <div class="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-primary-400 transition-all flex flex-col justify-between">
                        <div>
                            <div class="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl font-bold mb-5">
                                <i class="fa-solid fa-file-signature"></i>
                            </div>
                            <span class="text-xs font-bold text-primary-700 uppercase tracking-wider">የሕግ ማሻሻያ</span>
                            <h3 class="text-xl font-bold text-slate-900 mt-1 mb-3">ፖሊሲዎች እና ሕጎች ማሻሻያ</h3>
                            <ul class="space-y-2 text-xs sm:text-sm text-slate-600">
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>ብሔራዊ ፖሊሲዎችን፣ ሕጎችን፣ መመሪያዎችን በማርቀቅ ሂደት ላይ መሳተፍ</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>አዋጆችና ደንቦች ሲወጡ የአሠሪውን መብትና ጥቅም የሚያስጠብቁ እንዲሆኑ አስተያየት መስጠት</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>የአሠሪና ሠራተኛ ሕግ እንዲወጣና እንዲሻሻል ሀሳብ ማመንጨት፥ ማሻሻያ ማቅረብ</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>የትራንስፖርት ዘርፍ አሠሪዎች የመደራጀት መብታቸውን እንዲጠቀሙ ድጋፍ ማድረግ</span>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-primary-700">
                            የብሔራዊ አዋጆች ግምገማ
                        </div>
                    </div>

                    <div class="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-primary-400 transition-all flex flex-col justify-between">
                        <div>
                            <div class="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl font-bold mb-5">
                                <i class="fa-solid fa-chalkboard-user"></i>
                            </div>
                            <span class="text-xs font-bold text-primary-700 uppercase tracking-wider">የአቅም ግንባታ</span>
                            <h3 class="text-xl font-bold text-slate-900 mt-1 mb-3">የአቅም ግንባታና የሙያ ማሻሻያ ሥልጠናዎች</h3>
                            <p class="text-xs text-slate-500 mb-3">በሚከተሉት ርዕሰ ጉዳዮች ላይ ሥልጠናዎችን መስጠት፦</p>
                            <div class="grid grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
                                <span class="bg-white px-2 py-1.5 rounded-lg border border-slate-200">✓ አስተዳደር</span>
                                <span class="bg-white px-2 py-1.5 rounded-lg border border-slate-200">✓ አመራር</span>
                                <span class="bg-white px-2 py-1.5 rounded-lg border border-slate-200">✓ የአሠሪና ሠራተኛ ጉዳይ ሕግ</span>
                                <span class="bg-white px-2 py-1.5 rounded-lg border border-slate-200">✓ መልካም አስተዳደር</span>
                                <span class="bg-white px-2 py-1.5 rounded-lg border border-slate-200">✓ የካይዘን/የምርት ማሻሻል</span>
                                <span class="bg-white px-2 py-1.5 rounded-lg border border-slate-200">✓ የተወዳዳሪ አሸናፊነት</span>
                            </div>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-primary-700">
                            ተከታታይ የሙያ ማሻሻያ
                        </div>
                    </div>

                    <div class="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-primary-400 transition-all flex flex-col justify-between">
                        <div>
                            <div class="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl font-bold mb-5">
                                <i class="fa-solid fa-network-wired"></i>
                            </div>
                            <span class="text-xs font-bold text-primary-700 uppercase tracking-wider">የገበያ ትስስር</span>
                            <h3 class="text-xl font-bold text-slate-900 mt-1 mb-3">የገበያ ትስስር እና የንግድ ውሎች</h3>
                            <ul class="space-y-2 text-xs sm:text-sm text-slate-600">
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>የገበያ ትስስርን ያበረታታል</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>አባላት ከድርጅቶችና ከአባላት ጋር የንግድ ውል እንዲፈጽሙ ማድረግ</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>የቢዝነስ ፕላን የመሳሰሉ የንግድ ዘርፍ ፕላኖችን ማዘጋጀት</span>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-primary-700">
                            የንግድ ስምምነቶች ድጋፍ
                        </div>
                    </div>

                    <div class="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-primary-400 transition-all flex flex-col justify-between">
                        <div>
                            <div class="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl font-bold mb-5">
                                <i class="fa-solid fa-globe"></i>
                            </div>
                            <span class="text-xs font-bold text-primary-700 uppercase tracking-wider">ኤግዚቪሽንና ልምድ</span>
                            <h3 class="text-xl font-bold text-slate-900 mt-1 mb-3">ኤግዚቪሽኖች እና የልምድ ልውውጥ</h3>
                            <ul class="space-y-2 text-xs sm:text-sm text-slate-600">
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>ኤግዚቪሽኖችን እና ሲምፖዚየሞችን ማዘጋጀትና ማካሄድ</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>የልምድ ልውውጥ ማዘጋጀት (በአገር ውስጥና በውጭ ሀገራት)</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>የስራ ላይ ደህንነት እና ጤንነት፣ ምቹ የስራ ቦታ እንዲኖር መስራት</span>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-primary-700">
                            አገር አቀፍና ዓለም አቀፍ ትስስር
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="leadership-section" class="py-20 bg-slate-50 border-t border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <span class="text-primary-600 font-bold tracking-wider text-xs uppercase mb-2 block">ይፋዊ አመራር</span>
                    <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                        የሥራ አስፈጻሚ ቦርድ አባላት
                    </h2>
                    <p class="text-base sm:text-lg text-slate-600">
                        የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን የሥራ አስፈጻሚ ቦርድ አባላት ዝርዝር፦
                    </p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_president_dr_dawit.jpg" alt="አቶ ብርሃኔ ዘርዑ" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-primary-600 rounded-full text-[11px] font-bold uppercase tracking-wider">የቦርድ ፕሬዚዳንት</span>
                                <h3 class="text-xl font-bold text-white mt-1">አቶ ብርሃኔ ዘርዑ</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                የቦርድ ፕሬዚዳንት። የፌዴሬሽኑን ሥራ አስፈጻሚ አመራር እና የብሔራዊ የሦስትዮሽ ውይይት በበላይነት ይመራሉ።
                            </p>
                            <button type="button" data-bio="berehane" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>ሙሉ የሕይወት ታሪክ</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_vp_tigist.jpg" alt="አቶ መሠለ ሐጎስ" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-sky-600 rounded-full text-[11px] font-bold uppercase tracking-wider">የቦርድ ም/ፕሬዚዳንት</span>
                                <h3 class="text-xl font-bold text-white mt-1">አቶ መሠለ ሐጎስ</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                የቦርድ ም/ፕሬዚዳንት። የጋራ ድርድር እና የኢንዱስትሪ ሰላም ማስፈን ስራዎችን በኃላፊነት ያስተባብራሉ።
                            </p>
                            <button type="button" data-bio="mesele" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>ሙሉ የሕይወት ታሪክ</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_sec_yared.jpg" alt="አቶ ደረጀ ለገሠ" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-primary-600 rounded-full text-[11px] font-bold uppercase tracking-wider">የቦርድ ዋና ፀሐፊ</span>
                                <h3 class="text-xl font-bold text-white mt-1">አቶ ደረጀ ለገሠ</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                የቦርድ ዋና ፀሐፊ። የሕግ ሰነዶችን፣ የቦርድ መዝገቦችን እና የተቋማዊ አሰራር ተገዢነትን ይመራሉ።
                            </p>
                            <button type="button" data-bio="derje" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>ሙሉ የሕይወት ታሪክ</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_logistics_selamawit.jpg" alt="አቶ ደጀኔ ሉጬ" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">የቦርድ አባል</span>
                                <h3 class="text-xl font-bold text-white mt-1">አቶ ደጀኔ ሉጬ</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                የቦርድ አባል። የደረቅ ጭነት አሠሪዎችና የክልል ማኅበራት ተወካይ።
                            </p>
                            <button type="button" data-bio="dejene" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>ሙሉ የሕይወት ታሪክ</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_regional_bereket.jpg" alt="አቶ ሰዒድ ኢብራሂም" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">የቦርድ አባል</span>
                                <h3 class="text-xl font-bold text-white mt-1">አቶ ሰዒድ ኢብራሂም</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                የቦርድ አባል። የኮሪደር መስመሮች ደህንነትና የአሠሪዎች መብት ተሟጋች።
                            </p>
                            <button type="button" data-bio="seid" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>ሙሉ የሕይወት ታሪክ</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_policy_helen.jpg" alt="አቶ መኮንን ወርቄ" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">የቦርድ አባል</span>
                                <h3 class="text-xl font-bold text-white mt-1">አቶ መኮንን ወርቄ</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                የቦርድ አባል። የቢዝነስ ፕላን ዝግጅትና የገበያ ትስስር አማካሪ።
                            </p>
                            <button type="button" data-bio="mekonnen" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>ሙሉ የሕይወት ታሪክ</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_president_dr_dawit.jpg" alt="አቶ ይርጋዓለም ሰፋኒ" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">የቦርድ አባል</span>
                                <h3 class="text-xl font-bold text-white mt-1">አቶ ይርጋዓለም ሰፋኒ</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                የቦርድ አባል። የክርክር አፈታትና የፍርድ ቤት ውክልና አስተባባሪ።
                            </p>
                            <button type="button" data-bio="yergalem" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>ሙሉ የሕይወት ታሪክ</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_vp_tigist.jpg" alt="አቶ መስፍን እሸቱ" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">የቦርድ አባል</span>
                                <h3 class="text-xl font-bold text-white mt-1">አቶ መስፍን እሸቱ</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                የቦርድ አባል። የስራ ላይ ደህንነት እና የሕግ ተገዢነት አማካሪ።
                            </p>
                            <button type="button" data-bio="msfin" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>ሙሉ የሕይወት ታሪክ</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_sec_yared.jpg" alt="አቶ ታደሰ እጅጉ" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">የቦርድ አባል</span>
                                <h3 class="text-xl font-bold text-white mt-1">አቶ ታደሰ እጅጉ</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                የቦርድ አባል። የትራንስፖርት አዋጆችና ደንቦች ማሻሻያ አማካሪ።
                            </p>
                            <button type="button" data-bio="tadsse" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>ሙሉ የሕይወት ታሪክ</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_logistics_selamawit.jpg" alt="አቶ መሐመድ ሀሰን" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">የቦርድ አባል</span>
                                <h3 class="text-xl font-bold text-white mt-1">አቶ መሐመድ ሀሰን</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                የቦርድ አባል። የክልል ማኅበራት ትስስርና የሁለትዮሽ መድረኮች አስተባባሪ።
                            </p>
                            <button type="button" data-bio="mohammed" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>ሙሉ የሕይወት ታሪክ</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_regional_bereket.jpg" alt="አቶ ኑረዲን ዲታሞ" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">የቦርድ አባል</span>
                                <h3 class="text-xl font-bold text-white mt-1">አቶ ኑረዲን ዲታሞ</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                የቦርድ አባል። የቴክኖሎጂ አሰራርና የካይዘን ምርታማነት ዘዴዎች አስተባባሪ።
                            </p>
                            <button type="button" data-bio="nurdin" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>ሙሉ የሕይወት ታሪክ</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_policy_helen.jpg" alt="አቶ አበባው ካሣ" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">የቦርድ አባል</span>
                                <h3 class="text-xl font-bold text-white mt-1">አቶ አበባው ካሣ</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                የቦርድ አባል። የንግድ ውሎች ዝግጅት እና የኤግዚቪሽኖች አስተባባሪ።
                            </p>
                            <button type="button" data-bio="abeba" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>ሙሉ የሕይወት ታሪክ</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_president_dr_dawit.jpg" alt="አቶ እንግዳ ኃ/ማርያም" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">የቦርድ አባል</span>
                                <h3 class="text-xl font-bold text-white mt-1">አቶ እንግዳ ኃ/ማርያም</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                የቦርድ አባል። የልምድ ልውውጥ እና የቴክኖሎጂ አጠቃቀም አስተባባሪ።
                            </p>
                            <button type="button" data-bio="engeda" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>ሙሉ የሕይወት ታሪክ</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <span class="text-primary-600 font-bold tracking-wider text-xs uppercase mb-2 block">ይፋዊ ሰነዶች እና አዋጆች</span>
                        <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">ይፋዊ ሰነዶች እና ሕትመቶች</h2>
                        <p class="text-sm sm:text-base text-slate-600 mt-2">የፌዴሬሽኑን ሕገ መንግሥት፣ የዕውቅና ምስክር ወረቀት እና የአሠሪና ሠራተኛ ጉዳይ አዋጅ ማጣቀሻዎችን ያግኙ።</p>
                    </div>
                    <a href="/contact" class="text-sm font-bold text-primary-600 hover:text-primary-700 flex items-center gap-1.5 shrink-0">
                        ሰነዶችን ይጠይቁ <i class="fa-solid fa-arrow-right text-xs"></i>
                    </a>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-primary-400 transition-colors">
                        <div>
                            <div class="w-12 h-12 rounded-xl bg-blue-100 text-primary-700 flex items-center justify-center font-bold text-xl mb-4">
                                <i class="fa-solid fa-book-bookmark"></i>
                            </div>
                            <span class="text-[11px] font-bold text-primary-600 uppercase tracking-wider block">መተዳደሪያ ደንብ</span>
                            <h4 class="text-base font-bold text-slate-900 mt-1 mb-2">የፌዴሬሽኑ መተዳደሪያ ደንብ</h4>
                            <p class="text-xs text-slate-500 leading-relaxed">በኢ.ፌ.ዲ.ሪ. ሕገ መንግሥት አንቀጽ 31 እና አዋጅ 1156/2012 መሠረት የተዘጋጀ ይፋዊ መተዳደሪያ ደንብ።</p>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                            <span class="text-xs text-slate-400 font-semibold">ፒዲኤፍ • 4.2 ሜባ</span>
                            <button type="button" class="doc-download-btn text-xs font-bold text-primary-600 hover:text-primary-800 flex items-center gap-1 cursor-pointer bg-transparent border-none p-0" data-doc="የፌዴሬሽኑ መተዳደሪያ ደንብ (ፒዲኤፍ)">
                                አውርድ <i class="fa-solid fa-download text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-primary-400 transition-colors">
                        <div>
                            <div class="w-12 h-12 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center font-bold text-xl mb-4">
                                <i class="fa-solid fa-certificate"></i>
                            </div>
                            <span class="text-[11px] font-bold text-primary-600 uppercase tracking-wider block">የዕውቅና ምስክር</span>
                            <h4 class="text-base font-bold text-slate-900 mt-1 mb-2">የሚኒስቴሩ የዕውቅና ምስክር ወረቀት (ግንቦት 04/2010)</h4>
                            <p class="text-xs text-slate-500 leading-relaxed">ከቀድሞው የሠራተኛ እና ማኅበራዊ ጉዳይ ሚኒስቴር የተሰጠ ይፋዊ የዕውቅና ምስክር ወረቀት።</p>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                            <span class="text-xs text-slate-400 font-semibold">ፒዲኤፍ • 2.1 ሜባ</span>
                            <button type="button" class="doc-download-btn text-xs font-bold text-primary-600 hover:text-primary-800 flex items-center gap-1 cursor-pointer bg-transparent border-none p-0" data-doc="የሚኒስቴሩ የዕውቅና ምስክር ወረቀት ግንቦት 04/2010 (ፒዲኤፍ)">
                                አውርድ <i class="fa-solid fa-download text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-primary-400 transition-colors">
                        <div>
                            <div class="w-12 h-12 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center font-bold text-xl mb-4">
                                <i class="fa-solid fa-scale-balanced"></i>
                            </div>
                            <span class="text-[11px] font-bold text-primary-700 uppercase tracking-wider block">የአሠሪና ሠራተኛ አዋጅ</span>
                            <h4 class="text-base font-bold text-slate-900 mt-1 mb-2">የአሠሪና ሠራተኛ ጉዳይ አዋጅ ቁጥር 1156/2012</h4>
                            <p class="text-xs text-slate-500 leading-relaxed">የአሠሪዎች መብቶች፣ የሕብረት ድርድር እና የኢንዱስትሪ ግንኙነት ሕጎች ማጠቃለያ።</p>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                            <span class="text-xs text-slate-400 font-semibold">ፒዲኤፍ • 3.5 ሜባ</span>
                            <button type="button" class="doc-download-btn text-xs font-bold text-primary-600 hover:text-primary-800 flex items-center gap-1 cursor-pointer bg-transparent border-none p-0" data-doc="የአሠሪና ሠራተኛ ጉዳይ አዋጅ ቁጥር 1156/2012 (ፒዲኤፍ)">
                                አውርድ <i class="fa-solid fa-download text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-primary-400 transition-colors">
                        <div>
                            <div class="w-12 h-12 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center font-bold text-xl mb-4">
                                <i class="fa-solid fa-handshake-simple"></i>
                            </div>
                            <span class="text-[11px] font-bold text-primary-700 uppercase tracking-wider block">የሕብረት ስምምነት</span>
                            <h4 class="text-base font-bold text-slate-900 mt-1 mb-2">የጋራ ድርድር እና የሕብረት ስምምነት መመሪያ</h4>
                            <p class="text-xs text-slate-500 leading-relaxed">የአሠሪዎችን መብት የሚያስከብር የጋራ ስምምነት ሞዴል እና የማህበራዊ ውይይት መመሪያ።</p>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                            <span class="text-xs text-slate-400 font-semibold">ፒዲኤፍ • 2.8 ሜባ</span>
                            <button type="button" class="doc-download-btn text-xs font-bold text-primary-600 hover:text-primary-800 flex items-center gap-1 cursor-pointer bg-transparent border-none p-0" data-doc="የጋራ ድርድር እና የሕብረት ስምምነት መመሪያ (ፒዲኤፍ)">
                                አውርድ <i class="fa-solid fa-download text-[10px]"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-16 bg-primary-600 text-white relative overflow-hidden">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <span class="text-blue-200 font-bold tracking-wider text-xs uppercase mb-3 block">አባል ይሁኑ</span>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-4">ከፌዴሬሽኑ ጋር ዛሬውኑ አብረው ይስሩ</h2>
                <p class="text-base sm:text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                    እርስዎ የሚያጋጥምዎትን ዘርፈ ብዙ ችግሮችና ሀሳብዎን ለኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን በመተው አገልግሎትዎንና ምርትዎን ያሳድጉ።
                </p>
                <div class="flex flex-wrap justify-center gap-4">
                    <a href="/membership" class="inline-flex justify-center items-center px-8 py-3.5 bg-white text-primary-700 rounded-xl text-sm font-bold hover:bg-slate-100 transition-colors shadow-md">
                        የፌዴሬሽኑ አባል ይሁኑ
                    </a>
                    <a href="/contact" class="inline-flex justify-center items-center px-8 py-3.5 bg-primary-700 border border-white/30 text-white rounded-xl text-sm font-semibold hover:bg-primary-800 transition-colors shadow-sm">
                        ጽሕፈት ቤቱን ያነጋግሩ
                    </a>
                </div>
            </div>
        </section>
    </main>

    ${renderFooter("አማ")}
`;

export default {
  title: {
    ENG: "About Us - Ethiopian Transport Employers' Federation",
    "አማ": "ስለ እኛ - የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን",
  },
  markup: {
    ENG: markupEng,
    "አማ": markupAm,
  },
};
