import { Lang, commonText } from "./i18n";

export function renderNavbar(activePath: string, lang: Lang): string {
  const isAm = lang === "አማ";
  const t = commonText[lang].nav;

  const links = [
    { path: "/", label: t.home, key: "home" },
    { path: "/about", label: t.about, key: "about" },
    { path: "/services", label: t.services || "Services", key: "services" },
    { path: "/news", label: t.news, key: "news" },
    { path: "/partners", label: t.partners, key: "partners" },
    { path: "/faq", label: t.faq, key: "faq" },
    { path: "/contact", label: t.contact, key: "contact" },
  ];

  const isActive = (p: string, key: string) => {
    if (key === "home") return activePath === "/" || activePath === "/home";
    if (key === "about") return activePath === "/about" || activePath.startsWith("/about#");
    if (key === "services") return activePath === "/services" || activePath === "/vacancies" || activePath === "/vacancy" || activePath === "/membership" || activePath === "/memberships" || activePath === "/promotion";
    if (key === "news") return activePath === "/news";
    if (key === "partners") return activePath === "/partners" || activePath === "/partner";
    if (key === "faq") return activePath === "/faq" || activePath === "/faqs";
    if (key === "contact") return activePath === "/contact" || activePath === "/contact-us";
    return activePath === p;
  };

  const navLinksHtml = links
    .map((item) => {
      const active = isActive(item.path, item.key);
      const cls = active
        ? "bg-white text-primary-600 px-2.5 xl:px-3 py-1.5 xl:py-2 rounded-md text-xs xl:text-sm font-semibold transition-colors shadow-sm whitespace-nowrap shrink-0"
        : "text-white hover:bg-primary-700 px-2.5 xl:px-3 py-1.5 xl:py-2 rounded-md text-xs xl:text-sm font-medium transition-colors whitespace-nowrap shrink-0";

      if (item.key === "about") {
        return `
          <div class="relative group about-dropdown-container shrink-0">
              <a href="${item.path}" class="${cls} inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap" id="nav-about-link">
                  <span>${item.label}</span>
                  <i class="fa-solid fa-chevron-down text-[10px] transition-transform duration-200 dropdown-chevron opacity-80"></i>
              </a>
              <div class="about-dropdown-menu hidden absolute left-0 top-full pt-2 w-56 z-50">
                  <div class="bg-white rounded-lg shadow-xl border border-slate-100 py-1.5 text-slate-800 text-sm overflow-hidden ring-1 ring-black/5 animate-in fade-in slide-in-from-top-1 duration-150">
                      <a href="/about#history" class="about-sub-link flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-primary-600 hover:bg-slate-50 transition-colors">
                          <i class="fa-solid fa-landmark text-primary-600 w-4 text-center"></i>
                          <span>${t.aboutSub?.history || "History"}</span>
                      </a>
                      <a href="/about#vision" class="about-sub-link flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-primary-600 hover:bg-slate-50 transition-colors">
                          <i class="fa-solid fa-eye text-primary-600 w-4 text-center"></i>
                          <span>${t.aboutSub?.vision || "Vision"}</span>
                      </a>
                      <a href="/about#mission-values" class="about-sub-link flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-primary-600 hover:bg-slate-50 transition-colors">
                          <i class="fa-solid fa-bullseye text-primary-600 w-4 text-center"></i>
                          <span>${t.aboutSub?.missionValues || "Mission & Value"}</span>
                      </a>
                      <a href="/about#services-section" class="about-sub-link flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-primary-600 hover:bg-slate-50 transition-colors border-t border-slate-100 mt-0.5">
                          <i class="fa-solid fa-handshake-angle text-primary-600 w-4 text-center"></i>
                          <span>${t.aboutSub?.service || "Service"}</span>
                      </a>
                  </div>
              </div>
          </div>
        `;
      }

      if (item.key === "services") {
        return `
          <div class="relative group services-dropdown-container shrink-0">
              <a href="#services" class="${cls} inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap" id="nav-services-link">
                  <span>${item.label}</span>
                  <i class="fa-solid fa-chevron-down text-[10px] transition-transform duration-200 dropdown-chevron opacity-80"></i>
              </a>
              <div class="services-dropdown-menu hidden absolute left-0 top-full pt-2 w-64 z-50">
                  <div class="bg-white rounded-xl shadow-2xl border border-slate-100 py-1.5 text-slate-800 text-sm overflow-hidden ring-1 ring-black/5 animate-in fade-in slide-in-from-top-1 duration-150">
                      <div class="px-3.5 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 flex items-center justify-between">
                          <span>${isAm ? "የትራንስፖርት አገልግሎቶች" : "Federation Services"}</span>
                          <span class="text-[9px] bg-primary-50 text-primary-700 font-bold px-1.5 py-0.5 rounded">ETEF</span>
                      </div>
                      <a href="/vacancies" class="services-sub-link flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-primary-600 hover:bg-slate-50 transition-colors">
                          <span class="w-7 h-7 rounded-lg bg-blue-50 text-primary-600 flex items-center justify-center shrink-0"><i class="fa-solid fa-briefcase"></i></span>
                          <div class="flex flex-col">
                              <span>${t.servicesSub?.vacancies || "Vacancy"}</span>
                              <span class="text-[10px] text-slate-400 font-normal leading-tight">${isAm ? "ክፍት የሥራ ማስታወቂያዎች" : "Transport Industry Vacancies"}</span>
                          </div>
                      </a>
                      <a href="/partners" class="services-sub-link flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-primary-600 hover:bg-slate-50 transition-colors">
                          <span class="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0"><i class="fa-solid fa-handshake"></i></span>
                          <div class="flex flex-col">
                              <span>${t.servicesSub?.partnership || "Partnership"}</span>
                              <span class="text-[10px] text-slate-400 font-normal leading-tight">${isAm ? "ስትራቴጂክና ተቋማዊ አጋርነት" : "Institutional Strategic Network"}</span>
                          </div>
                      </a>
                      <a href="/membership" class="services-sub-link flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-primary-600 hover:bg-slate-50 transition-colors">
                          <span class="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0"><i class="fa-solid fa-id-card"></i></span>
                          <div class="flex flex-col">
                              <span>${t.servicesSub?.becomeMember || "Become Member"}</span>
                              <span class="text-[10px] text-slate-400 font-normal leading-tight">${isAm ? "የአባልነት ምዝገባና ጥበቃ" : "Operator Registration & Advocacy"}</span>
                          </div>
                      </a>
                      <a href="/news" class="services-sub-link flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-primary-600 hover:bg-slate-50 transition-colors">
                          <span class="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0"><i class="fa-solid fa-newspaper"></i></span>
                          <div class="flex flex-col">
                              <span>${t.servicesSub?.blogs || "Blogs"}</span>
                              <span class="text-[10px] text-slate-400 font-normal leading-tight">${isAm ? "የዘርፉ ዜናዎችና ትንታኔዎች" : "Industry Insights & Publications"}</span>
                          </div>
                      </a>
                      <a href="/#promotion" class="services-sub-link flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-primary-600 hover:bg-slate-50 transition-colors border-t border-slate-100 mt-0.5">
                          <span class="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0"><i class="fa-solid fa-bullhorn"></i></span>
                          <div class="flex flex-col">
                              <span>${t.servicesSub?.promotion || "Promotion"}</span>
                              <span class="text-[10px] text-slate-400 font-normal leading-tight">${isAm ? "ልዩ ኤክስፖና ማስተዋወቂያ" : "Summit & Fleet Expo 2026"}</span>
                          </div>
                      </a>
                  </div>
              </div>
          </div>
        `;
      }

      return `<a href="${item.path}" class="${cls}">${item.label}</a>`;
    })
    .join("\n                    ");

  const brandName = isAm ? "ኢትራአፌ" : "ETEF";
  const brandSub = isAm ? "የትራንስፖርት አሠሪዎች" : "EMPLOYERS FEDERATION";

  return `
    <div class="w-full z-50 sticky top-0 shadow-md">
        <!-- Narrow Floating Utility Header (Hides smoothly on page scroll) -->
        <div id="top-utility-bar" class="top-utility-bar bg-primary-700 text-white text-[11px] border-b border-primary-500/40 w-full backdrop-blur-md py-1.5 px-4 sm:px-6 lg:px-8 overflow-hidden transition-all duration-300">
            <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
                <!-- Left: Contact Information -->
                <div class="flex items-center gap-4 sm:gap-6 flex-wrap">
                    <a href="tel:+251114717787" class="text-white hover:text-white/80 flex items-center gap-1.5 transition-colors font-medium whitespace-nowrap">
                        <i class="fa-solid fa-phone text-white text-[10px]"></i>
                        <span>+251 11 4717787</span>
                    </a>
                    <a href="mailto:ethtransfed@gmail.com" class="text-white hover:text-white/80 flex items-center gap-1.5 transition-colors hidden sm:flex font-medium whitespace-nowrap">
                        <i class="fa-solid fa-envelope text-white text-[10px]"></i>
                        <span>ethtransfed@gmail.com</span>
                    </a>
                    <span class="text-white/40 hidden md:inline">|</span>
                    <span class="text-white hidden md:flex items-center gap-1.5 font-medium whitespace-nowrap">
                        <i class="fa-regular fa-clock text-[10px] text-white"></i>
                        <span>${isAm ? "ሰኞ - ዓርብ: 2:30 - 11:30" : "Mon - Fri: 8:30 AM - 5:30 PM (EAT)"}</span>
                    </span>
                </div>

                <!-- Right: Information Tag & Search Bar -->
                <div class="flex items-center gap-3">
                    <div class="hidden lg:flex items-center gap-1.5 text-white text-[10px] font-medium whitespace-nowrap">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                        <span>${isAm ? "ይፋዊ የፌዴሬሽኑ መድረክ • ግንቦት 4 2010" : "Official Federation • Ginbot 4, 2010 E.C."}</span>
                    </div>
                    <!-- Quick Global Search Input -->
                    <div class="relative">
                        <form id="global-search-form" class="flex items-center bg-primary-800/80 border border-primary-400/50 hover:border-white rounded-full px-2.5 py-0.5 text-white focus-within:ring-2 focus-within:ring-white/40 transition-all">
                            <i class="fa-solid fa-magnifying-glass text-[10px] text-white mr-1.5"></i>
                            <input id="global-top-search" type="search" placeholder="${isAm ? 'ፈልግ (ዜና፣ ክፍት ቦታዎች)...' : 'Search news, vacancies...'}" class="bg-transparent text-[11px] text-white placeholder-white/80 focus:outline-none w-32 sm:w-44 transition-all" />
                            <kbd class="hidden sm:inline-block px-1 py-0.2 bg-primary-900/60 text-[9px] text-white/90 rounded border border-primary-400/50 font-mono ml-1">↵</kbd>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Navigation Header -->
        <header class="bg-primary-600 text-white w-full">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-20">
                    <!-- Logo Area -->
                    <a href="/" class="flex-shrink-0 flex items-center gap-3 cursor-pointer">
                        <img src="/favicon.png" alt="ETEF Logo" class="h-11 w-11 object-contain rounded-full bg-white p-0.5 shadow-sm shrink-0" />
                        <div>
                            <span class="font-bold text-xl tracking-tight text-white block leading-none">${brandName}</span>
                            <span class="text-[10px] text-white/80 block mt-0.5 tracking-wider">${brandSub}</span>
                        </div>
                    </a>

                    <!-- Desktop Navigation (Responsive with whitespace-nowrap, hidden on screens < xl) -->
                    <nav class="hidden xl:flex space-x-1 xl:space-x-2 items-center">
                        ${navLinksHtml}
                    </nav>

                    <!-- Right Actions: Language Selector & CTA (hidden on screens < xl) -->
                    <div class="hidden xl:flex items-center space-x-3 shrink-0">
                        <div class="relative lang-dropdown-container">
                            <button class="lang-dropdown-btn flex items-center gap-2 text-white hover:text-gray-200 transition-colors text-xs xl:text-sm font-medium border border-transparent hover:border-white/30 px-2.5 py-1.5 rounded cursor-pointer whitespace-nowrap shrink-0" aria-label="${isAm ? "ቋንቋ ይምረጡ" : "Select Language"}">
                                <i class="fa-solid fa-globe text-white"></i> <span class="current-lang-text">${lang}</span> <i class="fa-solid fa-chevron-down text-xs text-white"></i>
                            </button>
                            <div class="lang-dropdown-menu hidden absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-xl border border-slate-100 py-1.5 z-50 text-slate-800 text-sm">
                                <div class="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">${isAm ? "ቋንቋ ይምረጡ" : "Select Language"}</div>
                                <button type="button" class="lang-select-option w-full text-left px-3 py-2 hover:bg-slate-50 flex items-center justify-between text-xs ${lang === "ENG" ? "font-semibold text-primary-700 bg-primary-50/50" : "font-medium text-slate-700 hover:text-primary-600"} cursor-pointer" data-lang="ENG" data-lang-name="English">
                                    <span class="flex items-center gap-2">🇬🇧 English</span>
                                    ${lang === "ENG" ? '<i class="fa-solid fa-check text-primary-600 text-xs"></i>' : '<span class="w-3.5"></span>'}
                                </button>
                                <button type="button" class="lang-select-option w-full text-left px-3 py-2 hover:bg-slate-50 flex items-center justify-between text-xs ${lang === "አማ" ? "font-semibold text-primary-700 bg-primary-50/50" : "font-medium text-slate-700 hover:text-primary-600"} cursor-pointer" data-lang="አማ" data-lang-name="Amharic">
                                    <span class="flex items-center gap-2">🇪🇹 አማርኛ</span>
                                    ${lang === "አማ" ? '<i class="fa-solid fa-check text-primary-600 text-xs"></i>' : '<span class="w-3.5"></span>'}
                                </button>
                            </div>
                        </div>
                        <a href="/membership" class="${activePath === "/membership" || activePath === "/memberships" ? "bg-white text-primary-600" : "border-2 border-white text-white hover:bg-white hover:text-primary-600"} px-3.5 xl:px-4 py-1.5 xl:py-2 rounded-md text-xs xl:text-sm font-semibold transition-all shadow-sm whitespace-nowrap shrink-0">
                            ${t.join}
                        </a>
                    </div>

                    <!-- Mobile menu button (Visible below xl breakpoint) -->
                    <div class="xl:hidden flex items-center gap-2">
                        <div class="relative lang-dropdown-container">
                            <button class="lang-dropdown-btn flex items-center gap-1.5 text-white hover:text-gray-200 transition-colors text-xs font-semibold px-2 py-1 rounded border border-white/30 cursor-pointer whitespace-nowrap">
                                <i class="fa-solid fa-globe text-white"></i> <span>${lang}</span>
                            </button>
                            <div class="lang-dropdown-menu hidden absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl border border-slate-100 py-1.5 z-50 text-slate-800 text-sm">
                                <button type="button" class="lang-select-option w-full text-left px-3 py-2 hover:bg-slate-50 flex items-center justify-between text-xs ${lang === "ENG" ? "font-semibold text-primary-700 bg-primary-50/50" : "font-medium text-slate-700"} cursor-pointer" data-lang="ENG" data-lang-name="English">
                                    <span>🇬🇧 English</span>
                                    ${lang === "ENG" ? '<i class="fa-solid fa-check text-primary-600 text-xs"></i>' : '<span class="w-3.5"></span>'}
                                </button>
                                <button type="button" class="lang-select-option w-full text-left px-3 py-2 hover:bg-slate-50 flex items-center justify-between text-xs ${lang === "አማ" ? "font-semibold text-primary-700 bg-primary-50/50" : "font-medium text-slate-700"} cursor-pointer" data-lang="አማ" data-lang-name="Amharic">
                                    <span>🇪🇹 አማርኛ</span>
                                    ${lang === "አማ" ? '<i class="fa-solid fa-check text-primary-600 text-xs"></i>' : '<span class="w-3.5"></span>'}
                                </button>
                            </div>
                        </div>
                        <button id="etef-mobile-menu-toggle" type="button" class="text-white hover:text-gray-200 focus-visible:ring-2 focus-visible:ring-white rounded-lg p-2 cursor-pointer" aria-label="Open navigation" aria-controls="etef-mobile-drawer" aria-expanded="false">
                            <i class="fa-solid fa-bars text-2xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>

        <!-- Floating Promotion Bar (Floats/docks to nav when page/hero scrolls) -->
        <div id="nav-floating-promo" class="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-slate-950 py-1.5 px-4 text-xs font-bold shadow-lg border-t border-amber-300/40 transition-all duration-300 ease-out overflow-hidden max-h-0 opacity-0 -translate-y-2 pointer-events-none">
            <div class="max-w-7xl mx-auto flex items-center justify-between gap-3">
                <a href="#promotion" class="promo-modal-trigger flex items-center gap-2.5 truncate hover:text-white transition-colors group cursor-pointer">
                    <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-slate-950 text-amber-400 shadow-sm shrink-0">
                        <span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>
                        <i class="fa-solid fa-bullhorn text-[9px]"></i>
                        <span>PROMOTION 2026</span>
                    </span>
                    <span class="truncate font-semibold text-[11px] sm:text-xs text-slate-950 group-hover:text-white transition-colors">
                        ${isAm ? "ብሔራዊ የንግድ ትራንስፖርት ጉባኤና የፍሊት ኢኖቬሽን ኤክስፖ • ምዝገባ ክፍት ነው" : "National Commercial Transport Summit & Fleet Innovation Expo • Registration Open"}
                    </span>
                    <i class="fa-solid fa-arrow-right text-[10px] shrink-0 text-slate-950 group-hover:translate-x-1 transition-transform"></i>
                </a>
                <div class="flex items-center gap-2 shrink-0">
                    <button type="button" id="open-promo-modal-btn" class="promo-modal-trigger hidden sm:inline-flex items-center gap-1 px-3 py-1 bg-slate-950 hover:bg-slate-900 text-white rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm transition-all cursor-pointer">
                        <span>${isAm ? "ዝርዝሩን ይመልከቱ" : "View Details"}</span>
                        <i class="fa-solid fa-up-right-from-square text-[9px] text-amber-400"></i>
                    </button>
                    <button id="close-floating-promo" type="button" class="text-slate-900 hover:text-white p-1 transition-colors cursor-pointer" aria-label="Close promo">
                        <i class="fa-solid fa-xmark text-xs"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
  `;
}

export function renderFooter(lang: Lang): string {
  const isAm = lang === "አማ";
  const f = commonText[lang].footer;

  return `
    <footer class="bg-primary-600 text-white border-t border-primary-500">
        <!-- Pre-footer CTA Banner -->
        <div class="bg-primary-700 py-12 border-b border-white/15 relative overflow-hidden">
            <div class="absolute inset-0 z-0 bg-[url('/images/hero_truck.jpg')] bg-cover bg-center animate-slow-motion"></div>
            <div class="absolute inset-0 z-0 bg-primary-800/85"></div>
            <div class="max-w-7xl relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <span class="text-xs font-bold uppercase tracking-wider text-blue-200 block mb-1">${f.preTitle}</span>
                    <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">${f.preHeading}</h2>
                    <p class="text-blue-100 text-sm mt-1 max-w-2xl">${isAm ? "17 የአሠሪ ማኅበራትንና ከ6,652 በላይ የንግድ ትራንስፖርት ኦፕሬተሮችን በአንድነት ያስተባበረ ብሔራዊ ፌዴሬሽን።" : "Uniting 17 employers' associations and over 6,652 commercial transport operators nationwide."}</p>
                </div>
                <div class="flex items-center gap-3 shrink-0">
                    <a href="/contact" class="px-6 py-3 rounded-lg bg-white text-primary-700 hover:bg-slate-100 font-bold text-sm transition-all shadow-md">
                        ${f.connectBtn}
                    </a>
                </div>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                <!-- Column 1: Brand & Charter Statement -->
                <div class="lg:col-span-2 space-y-4">
                    <div class="flex items-center gap-3">
                        <img src="/favicon.png" alt="ETEF Logo" class="h-12 w-12 object-contain rounded-full bg-white p-1 shadow-md shrink-0" />
                        <div>
                            <span class="font-extrabold text-lg text-white block leading-tight tracking-tight">${f.orgName}</span>
                            <span class="text-xs font-semibold text-blue-200 block tracking-wider">${f.orgSub}</span>
                        </div>
                    </div>
                    <p class="text-sm text-blue-100 leading-relaxed pr-6">
                        ${f.desc}
                    </p>
                    <div class="pt-2 flex items-center gap-3 text-white">
                        <a href="https://t.me" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-lg bg-white/15 hover:bg-white hover:text-primary-700 flex items-center justify-center transition-colors text-sm" aria-label="Telegram">
                            <i class="fa-brands fa-telegram"></i>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-lg bg-white/15 hover:bg-white hover:text-primary-700 flex items-center justify-center transition-colors text-sm" aria-label="Facebook">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-lg bg-white/15 hover:bg-white hover:text-primary-700 flex items-center justify-center transition-colors text-sm" aria-label="X (formerly Twitter)">
                            <i class="fa-brands fa-x-twitter"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-lg bg-white/15 hover:bg-white hover:text-primary-700 flex items-center justify-center transition-colors text-sm" aria-label="LinkedIn">
                            <i class="fa-brands fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>

                <!-- Column 2: Explore Links -->
                <div>
                    <h3 class="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-white pl-2.5">${f.exploreTitle}</h3>
                    <ul class="space-y-2.5 text-sm text-blue-100">
                        <li><a href="/about" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-angle-right text-[10px] text-blue-300"></i> ${isAm ? "ስለ ፌዴሬሽኑ" : "About ETEF"}</a></li>
                        <li><a href="/about#history" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-angle-right text-[10px] text-blue-300"></i> ${isAm ? "የመመሥረት ታሪክ" : "Founding History"}</a></li>
                        <li><a href="/about#leadership" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-angle-right text-[10px] text-blue-300"></i> ${isAm ? "የሥራ አመራር ቦርድ" : "Executive Board"}</a></li>
                        <li><a href="/membership" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-angle-right text-[10px] text-blue-300"></i> ${isAm ? "የአባልነት መመሪያ" : "Membership Guide"}</a></li>
                        <li><a href="/partners" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-angle-right text-[10px] text-blue-300"></i> ${isAm ? "ስትራቴጂካዊ አጋሮች" : "Strategic Partners"}</a></li>
                    </ul>
                </div>

                <!-- Column 3: Discover Links -->
                <div>
                    <h3 class="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-white pl-2.5">${f.discoverTitle}</h3>
                    <ul class="space-y-2.5 text-sm text-blue-100">
                        <li><a href="/news" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-angle-right text-[10px] text-blue-300"></i> ${isAm ? "የትራንስፖርት ዜናዎች" : "Industry News"}</a></li>
                        <li><a href="/vacancies" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-angle-right text-[10px] text-blue-300"></i> ${isAm ? "ክፍት የሥራ ቦታዎች" : "Job Openings"}</a></li>
                        
                        <li><a href="/faq" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-angle-right text-[10px] text-blue-300"></i> ${isAm ? "ተደጋጋሚ ጥያቄዎች" : "Regulatory FAQ"}</a></li>
                    </ul>
                </div>

                <!-- Column 4: Contact & Secretariat -->
                <div>
                    <h3 class="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-white pl-2.5">${f.connectTitle}</h3>
                    <ul class="space-y-3 text-sm text-blue-100">
                        <li class="flex items-start gap-2.5">
                            <i class="fa-solid fa-location-dot text-white mt-1 shrink-0"></i>
                            <span>${f.address}</span>
                        </li>
                        <li class="flex items-center gap-2.5">
                            <i class="fa-solid fa-phone text-white shrink-0"></i>
                            <a href="tel:+251114717787" class="hover:text-white transition-colors font-medium">${f.phone}</a>
                        </li>
                        <li class="flex items-center gap-2.5">
                            <i class="fa-solid fa-envelope text-white shrink-0"></i>
                            <a href="mailto:ethtransfed@gmail.com" class="hover:text-white transition-colors font-medium">${f.email}</a>
                        </li>
                        <li class="pt-2">
                            <a href="/contact" class="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/15 hover:bg-white hover:text-primary-700 text-xs font-semibold text-white transition-colors">
                                <i class="fa-solid fa-headset"></i>
                                <span>${f.support}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Bottom Copyright & Legal Links -->
            <div class="border-t border-white/15 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200">
                <p>${f.rights}</p>
                <div class="flex items-center gap-6">
                    <a href="/privacy" class="hover:text-white transition-colors">${f.privacy}</a>
                    <span class="text-blue-300">•</span>
                    <a href="/terms" class="hover:text-white transition-colors">${f.terms}</a>
                </div>
            </div>
        </div>
    </footer>
  `;
}
