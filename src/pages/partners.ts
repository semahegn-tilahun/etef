import { renderNavbar, renderFooter } from "../layout";

const partnersEng = `
    ${renderNavbar("/partners", "ENG")}

    <main class="flex-grow pb-24">
        <div class="relative text-white pt-12 pb-16 overflow-hidden bg-primary-900 mb-10">
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <img src="/images/partners_hero_network.jpg" alt="Strategic Partners & Transport Network" class="w-full h-full object-cover object-center animate-slow-motion filter brightness-105" />
                <div class="absolute inset-0 bg-gradient-to-r from-primary-900/75 via-blue-700/35 to-blue-400/15"></div>
                <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/25 via-transparent to-transparent"></div>
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
                                <span class="text-white font-semibold">Partners & Affiliates</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <!-- Page Title -->
                <h1 class="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 drop-shadow-md">Strategic Partners & Network</h1>
                <p class="text-lg text-blue-100 max-w-3xl leading-relaxed">
                    Advancing Ethiopia's commercial transport ecosystem through institutional collaboration with federal ministries, regulatory authorities, regional employers' associations, and international tripartite partners.
                </p>
            </div>
        </div>

        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
            <div class="mb-10">
                <span class="text-primary-600 font-bold tracking-wider text-xs uppercase mb-2 block">Institutional Partners</span>
                <h2 class="text-3xl font-bold text-slate-900 mb-4">Federal Regulatory & Strategic Partners</h2>
                <p class="text-slate-600 max-w-2xl">Key government ministries and regulatory authorities with whom ETEF engages in tripartite policy dialogue, legislative review, and corridor efficiency initiatives.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                <!-- Strategic Partner 1 -->
                <div class="bg-white rounded-lg border border-slate-200 p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-lg hover:border-primary-300 transition-all group">
                    <div class="w-24 h-24 flex-shrink-0 bg-white shadow-sm rounded-full border border-slate-100 flex items-center justify-center p-3">
                        <img src="/images/partner_mot.png" alt="Ministry of Transport and Logistics Logo" class="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300">
                    </div>
                    <div class="text-center sm:text-left">
                        <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">Ministry of Transport and Logistics</h3>
                        <p class="text-sm text-slate-600 mb-4 leading-relaxed">The federal executive ministry responsible for formulating national transport policy, trade corridor governance, and multimodal infrastructure master plans.</p>
                        <a href="https://motl.gov.et" target="_blank" rel="noopener noreferrer" class="text-primary-600 text-sm font-semibold inline-flex items-center gap-1.5 hover:text-primary-800 transition-colors">
                            Visit Official Portal <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                        </a>
                    </div>
                </div>

                <!-- Strategic Partner 2 -->
                <div class="bg-white rounded-lg border border-slate-200 p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-lg hover:border-primary-300 transition-all group">
                    <div class="w-24 h-24 flex-shrink-0 bg-white shadow-sm rounded-full border border-slate-100 flex items-center justify-center p-3">
                        <img src="/images/partner_era.png" alt="Ethiopian Roads Authority Logo" class="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300">
                    </div>
                    <div class="text-center sm:text-left">
                        <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">Ethiopian Roads Authority (ERA)</h3>
                        <p class="text-sm text-slate-600 mb-4 leading-relaxed">Collaborating on expressway network maintenance, freight weighbridge compliance standards, and road safety enforcement nationwide.</p>
                        <a href="https://motl.gov.et" target="_blank" rel="noopener noreferrer" class="text-primary-600 text-sm font-semibold inline-flex items-center gap-1.5 hover:text-primary-800 transition-colors">
                            Visit Official Portal <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Regional Associations -->
            <div class="mb-10">
                <span class="text-primary-600 font-bold tracking-wider text-xs uppercase mb-2 block">Founding Federation Base</span>
                <h2 class="text-3xl font-bold text-slate-900 mb-4">Affiliated Employers' Associations</h2>
                <p class="text-slate-600 max-w-2xl">Representing 17 employers' associations and over 6,652 commercial operators operating across all economic regions of Ethiopia.</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                <div class="bg-white rounded-lg border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md hover:border-primary-300 transition-all cursor-pointer group">
                    <div class="w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center overflow-hidden p-1">
                        <img src="/images/partner_aartb.png" alt="Addis Ababa Logo" class="w-full h-full object-contain">
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">Addis Ababa City Transport Association</h4>
                        <p class="text-xs text-slate-500 mb-2">Urban passenger transit & city distribution</p>
                        <span class="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">Founding Affiliate</span>
                    </div>
                </div>
                
                <div class="bg-white rounded-lg border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md hover:border-primary-300 transition-all cursor-pointer group">
                    <div class="w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center overflow-hidden p-1">
                        <img src="/images/partner_oromia_freight.png" alt="Oromia Freight Logo" class="w-full h-full object-contain">
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">Oromia Freight Transporters Association</h4>
                        <p class="text-xs text-slate-500 mb-2">Heavy dry bulk, grain, & industrial haulage</p>
                        <span class="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">Founding Affiliate</span>
                    </div>
                </div>

                <div class="bg-white rounded-lg border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md hover:border-primary-300 transition-all cursor-pointer group">
                    <div class="w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center overflow-hidden p-1">
                        <div class="w-full h-full rounded bg-blue-50 flex items-center justify-center text-primary-700 font-bold text-xs">DDLC</div>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">Dire Dawa Logistics Corridor Association</h4>
                        <p class="text-xs text-slate-500 mb-2">Eastern maritime corridor & customs transit</p>
                        <span class="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">Founding Affiliate</span>
                    </div>
                </div>

                <div class="bg-white rounded-lg border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md hover:border-primary-300 transition-all cursor-pointer group">
                    <div class="w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center overflow-hidden p-1">
                        <div class="w-full h-full rounded bg-primary-50 flex items-center justify-center text-primary-700 font-bold text-xs">SPTA</div>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">Southern Passenger Transport Association</h4>
                        <p class="text-xs text-slate-500 mb-2">Inter-regional bus fleet & passenger safety</p>
                        <span class="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">Founding Affiliate</span>
                    </div>
                </div>

                <div class="bg-white rounded-lg border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md hover:border-primary-300 transition-all cursor-pointer group">
                    <div class="w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center overflow-hidden p-1">
                        <div class="w-full h-full rounded bg-slate-100 flex items-center justify-center text-slate-800 font-bold text-xs">AMFA</div>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">Amhara Commercial Hauliers Association</h4>
                        <p class="text-xs text-slate-500 mb-2">Agricultural commodities & construction transit</p>
                        <span class="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">Founding Affiliate</span>
                    </div>
                </div>

                <div class="bg-white rounded-lg border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md hover:border-primary-300 transition-all cursor-pointer group">
                    <div class="w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center overflow-hidden p-1">
                        <div class="w-full h-full rounded bg-primary-50 flex items-center justify-center text-primary-700 font-bold text-xs">EDFA</div>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">Ethio-Djibouti Corridor Hauliers Union</h4>
                        <p class="text-xs text-slate-500 mb-2">Primary maritime containerized & fuel transit</p>
                        <span class="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">Founding Affiliate</span>
                    </div>
                </div>
            </div>

            <!-- Partnership Callout (Clean White / Light Brand Card) -->
            <div class="bg-white rounded-lg p-8 sm:p-12 text-slate-900 border border-slate-200 shadow-md mb-20 relative overflow-hidden">
                <div class="max-w-2xl relative z-10">
                    <span class="text-primary-700 font-bold tracking-wider text-xs uppercase bg-primary-50 px-3 py-1 rounded-full border border-primary-200 inline-block mb-3">Institutional Alliance</span>
                    <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">Partner with the Apex Transport Federation</h3>
                    <p class="text-slate-600 text-sm leading-relaxed mb-6">
                        ETEF collaborates with commercial vehicle manufacturers, financial institutions, insurance syndicates, and international trade bodies to advance the transport industry.
                    </p>
                    <a href="/contact" class="inline-flex items-center gap-2 px-6 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg text-sm transition-all shadow-md">
                        <span>Inquire About Partnership</span>
                        <i class="fa-solid fa-arrow-right text-xs"></i>
                    </a>
                </div>
            </div>
        </section>
    </main>

    ${renderFooter("ENG")}
`;

const partnersAm = `
    ${renderNavbar("/partners", "አማ")}

    <main class="flex-grow pb-24">
        <div class="relative text-white pt-12 pb-16 overflow-hidden bg-primary-900 mb-10">
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <img src="/images/partners_hero_network.jpg" alt="ስትራቴጂካዊ አጋሮችና የትራንስፖርት መረብ" class="w-full h-full object-cover object-center animate-slow-motion filter brightness-105" />
                <div class="absolute inset-0 bg-gradient-to-r from-primary-900/75 via-blue-700/35 to-blue-400/15"></div>
                <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/25 via-transparent to-transparent"></div>
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
                                <span class="text-white font-semibold">አጋሮች</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <!-- Page Title -->
                <h1 class="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 drop-shadow-md">ስትራቴጂካዊ አጋሮችና አባል ማኅበራት</h1>
                <p class="text-lg text-blue-100 max-w-3xl leading-relaxed">
                    በኢትዮጵያ አስተማማኝና ዘመናዊ የትራንስፖርት ሥርዓት ለመገንባት ከመንግሥት አስፈፃሚ አካላት፣ ከተቆጣጣሪ ባለሥልጣናት፣ ከክልል አሠሪ ማኅበራትና ከዓለም አቀፍ አጋሮች ጋር በቅንጅት እንሰራለን።
                </p>
            </div>
        </div>

        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
            <div class="mb-10">
                <span class="text-primary-600 font-bold tracking-wider text-xs uppercase mb-2 block">መንግሥታዊ አጋሮች</span>
                <h2 class="text-3xl font-bold text-slate-900 mb-4">የፌዴራል አስፈፃሚና ተቆጣጣሪ ተቋማት</h2>
                <p class="text-slate-600 max-w-2xl">ፌዴሬሽኑ በፖሊሲ ማሻሻያ፣ በሕግ ማዕቀፎች ዝግጅትና በኮሪደሮች ቅንጅት ዙሪያ አብሮ የሚሰራባቸው ዋና ዋና የመንግሥት ተቋማት።</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                <!-- Strategic Partner 1 -->
                <div class="bg-white rounded-lg border border-slate-200 p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-lg hover:border-primary-300 transition-all group">
                    <div class="w-24 h-24 flex-shrink-0 bg-white shadow-sm rounded-full border border-slate-100 flex items-center justify-center p-3">
                        <img src="/images/partner_mot.png" alt="የትራንስፖርትና ሎጂስቲክስ ሚኒስቴር" class="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300">
                    </div>
                    <div class="text-center sm:text-left">
                        <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">የትራንስፖርትና ሎጂስቲክስ ሚኒስቴር</h3>
                        <p class="text-sm text-slate-600 mb-4 leading-relaxed">የሀገሪቱን የትራንስፖርትና የሎጂስቲክስ ዘርፍ በበላይነት የሚመራ፣ ፖሊሲዎችን የሚያመነጭና የመሰረተ ልማት ማስተር ፕላኖችን የሚያስፈጽም የፌዴራል ሚኒስቴር።</p>
                        <a href="https://motl.gov.et" target="_blank" rel="noopener noreferrer" class="text-primary-600 text-sm font-semibold inline-flex items-center gap-1.5 hover:text-primary-800 transition-colors">
                            ይፋዊ ፖርታልን ይጎብኙ <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                        </a>
                    </div>
                </div>

                <!-- Strategic Partner 2 -->
                <div class="bg-white rounded-lg border border-slate-200 p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-lg hover:border-primary-300 transition-all group">
                    <div class="w-24 h-24 flex-shrink-0 bg-white shadow-sm rounded-full border border-slate-100 flex items-center justify-center p-3">
                        <img src="/images/partner_era.png" alt="የኢትዮጵያ መንገዶች አስተዳደር" class="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300">
                    </div>
                    <div class="text-center sm:text-left">
                        <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">የኢትዮጵያ መንገዶች አስተዳደር (ኢመአ)</h3>
                        <p class="text-sm text-slate-600 mb-4 leading-relaxed">የሀገር አቀፍ የፍጥነት መንገዶች ግንባታና ጥገና፣ የሚዛን ጣቢያዎች ደንብ አከባበርና የመንገድ ደህንነት ላይ ከፌዴሬሽኑ ጋር በቅርበት ይሰራል::</p>
                        <a href="https://motl.gov.et" target="_blank" rel="noopener noreferrer" class="text-primary-600 text-sm font-semibold inline-flex items-center gap-1.5 hover:text-primary-800 transition-colors">
                            ይፋዊ ፖርታልን ይጎብኙ <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Regional Associations -->
            <div class="mb-10">
                <span class="text-primary-600 font-bold tracking-wider text-xs uppercase mb-2 block">የፌዴሬሽኑ መሰረት</span>
                <h2 class="text-3xl font-bold text-slate-900 mb-4">አባል የትራንስፖርት አሠሪ ማኅበራት</h2>
                <p class="text-slate-600 max-w-2xl">በሁሉም የኢትዮጵያ ክልሎች የሚንቀሳቀሱ 17 የአሠሪ ማኅበራትንና ከ6,652 በላይ የንግድ ተሽከርካሪ ባለቤቶችን በአንድነት አስተባብረን እንወክላለን።</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                <div class="bg-white rounded-lg border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md hover:border-primary-300 transition-all cursor-pointer group">
                    <div class="w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center overflow-hidden p-1">
                        <img src="/images/partner_aartb.png" alt="አዲስ አበባ አርማ" class="w-full h-full object-contain">
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">የአዲስ አበባ ከተማ ትራንስፖርት አሠሪዎች ማኅበር</h4>
                        <p class="text-xs text-slate-500 mb-2">የከተማ ሕዝብ ትራንስፖርትና የከተማ ውስጥ ስምሪት</p>
                        <span class="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">መሥራች አባል</span>
                    </div>
                </div>
                
                <div class="bg-white rounded-lg border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md hover:border-primary-300 transition-all cursor-pointer group">
                    <div class="w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center overflow-hidden p-1">
                        <img src="/images/partner_oromia_freight.png" alt="ኦሮሚያ ጭነት አርማ" class="w-full h-full object-contain">
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">የኦሮሚያ የጭነት ትራንስፖርት አሠሪዎች ማኅበር</h4>
                        <p class="text-xs text-slate-500 mb-2">የከባድ ደረቅ ጭነት፣ የእህልና የኢንዱስትሪ ምርቶች</p>
                        <span class="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">መሥራች አባል</span>
                    </div>
                </div>

                <div class="bg-white rounded-lg border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md hover:border-primary-300 transition-all cursor-pointer group">
                    <div class="w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center overflow-hidden p-1">
                        <div class="w-full h-full rounded bg-blue-50 flex items-center justify-center text-primary-700 font-bold text-xs">ድሬዳዋ</div>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">የድሬዳዋ የሎጂስቲክስ ኮሪደር አሠሪዎች ማኅበር</h4>
                        <p class="text-xs text-slate-500 mb-2">የምስራቅ የባህር በርና የጉምሩክ ትራንዚት ስምሪት</p>
                        <span class="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">መሥራች አባል</span>
                    </div>
                </div>

                <div class="bg-white rounded-lg border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md hover:border-primary-300 transition-all cursor-pointer group">
                    <div class="w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center overflow-hidden p-1">
                        <div class="w-full h-full rounded bg-primary-50 flex items-center justify-center text-primary-700 font-bold text-xs">ደቡብ</div>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">የደቡብ የሕዝብ ትራንስፖርት አሠሪዎች ማኅበር</h4>
                        <p class="text-xs text-slate-500 mb-2">የሀገር አቋራጭ አውቶቡሶችና የተሳፋሪ ደህንነት</p>
                        <span class="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">መሥራች አባል</span>
                    </div>
                </div>

                <div class="bg-white rounded-lg border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md hover:border-primary-300 transition-all cursor-pointer group">
                    <div class="w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center overflow-hidden p-1">
                        <div class="w-full h-full rounded bg-slate-100 flex items-center justify-center text-slate-800 font-bold text-xs">አማራ</div>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">የአማራ የንግድ ትራንስፖርት አሠሪዎች ማኅበር</h4>
                        <p class="text-xs text-slate-500 mb-2">የግብርና ምርቶችና የግንባታ ግብአቶች ማጓጓዝ</p>
                        <span class="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">መሥራች አባል</span>
                    </div>
                </div>

                <div class="bg-white rounded-lg border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md hover:border-primary-300 transition-all cursor-pointer group">
                    <div class="w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center overflow-hidden p-1">
                        <div class="w-full h-full rounded bg-primary-50 flex items-center justify-center text-primary-700 font-bold text-xs">ኢት-ጅቡቲ</div>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">የኢትዮ-ጅቡቲ ኮሪደር የከባድ ጭነት አሠሪዎች ኅብረት</h4>
                        <p class="text-xs text-slate-500 mb-2">የኮንቴነር ዕቃዎችና የፈሳሽ ነዳጅ ማጓጓዣ ዋነኛ መስመር</p>
                        <span class="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">መሥራች አባል</span>
                    </div>
                </div>
            </div>

            <!-- Partnership Callout (Clean White / Light Brand Card) -->
            <div class="bg-white rounded-lg p-8 sm:p-12 text-slate-900 border border-slate-200 shadow-md mb-20 relative overflow-hidden">
                <div class="max-w-2xl relative z-10">
                    <span class="text-primary-700 font-bold tracking-wider text-xs uppercase bg-primary-50 px-3 py-1 rounded-full border border-primary-200 inline-block mb-3">ተቋማዊ ጥምረት</span>
                    <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">ከከፍተኛው የትራንስፖርት ፌዴሬሽን ጋር አጋር ይሁኑ</h3>
                    <p class="text-slate-600 text-sm leading-relaxed mb-6">
                        ኢትራአፌ ከተሽከርካሪ አምራቾች፣ ከፋይናንስና ከኢንሹራንስ ተቋማት እንዲሁም ከዓለም አቀፍ የንግድ ድርጅቶች ጋር በትብብር ይሰራል::
                    </p>
                    <a href="/contact" class="inline-flex items-center gap-2 px-6 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg text-sm transition-all shadow-md">
                        <span>ስለ አጋርነት ያነጋግሩን</span>
                        <i class="fa-solid fa-arrow-right text-xs"></i>
                    </a>
                </div>
            </div>
        </section>
    </main>

    ${renderFooter("አማ")}
`;

export default {
  title: {
    ENG: "Strategic Partners - Ethiopian Transport Employers Federation",
    "አማ": "ስትራቴጂካዊ አጋሮች - የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን",
  },
  markup: {
    ENG: partnersEng,
    "አማ": partnersAm,
  },
};
