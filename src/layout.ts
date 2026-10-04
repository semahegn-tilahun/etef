import { Lang, commonText } from "./i18n";

export function renderNavbar(activePath: string, lang: Lang): string {
  const isAm = lang === "አማ";
  const t = commonText[lang].nav;

  const links = [
    { path: "/", label: t.home, key: "home" },
    { path: "/about", label: t.about, key: "about" },
    { path: "/news", label: t.news, key: "news" },
    { path: "/vacancies", label: t.vacancies, key: "vacancies" },
    { path: "/partners", label: t.partners, key: "partners" },
    { path: "/faq", label: t.faq, key: "faq" },
    { path: "/contact", label: t.contact, key: "contact" },
  ];

  const isActive = (p: string, key: string) => {
    if (key === "home") return activePath === "/" || activePath === "/home";
    if (key === "about") return activePath === "/about" || activePath.startsWith("/about#");
    if (key === "vacancies") return activePath === "/vacancies" || activePath === "/vacancy";
    if (key === "partners") return activePath === "/partners" || activePath === "/partner";
    if (key === "faq") return activePath === "/faq" || activePath === "/faqs";
    if (key === "contact") return activePath === "/contact" || activePath === "/contact-us";
    return activePath === p;
  };

  const navLinksHtml = links
    .map((item) => {
      const active = isActive(item.path, item.key);
      const cls = active
        ? "bg-white text-primary-600 px-3 py-2 rounded-md text-sm font-semibold transition-colors shadow-sm"
        : "text-white hover:bg-primary-700 px-3 py-2 rounded-md text-sm font-medium transition-colors";
      if (item.key === "about") {
        return `
          <div class="relative group about-dropdown-container">
              <a href="${item.path}" class="${cls} inline-flex items-center gap-1.5 cursor-pointer" id="nav-about-link">
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
      return `<a href="${item.path}" class="${cls}">${item.label}</a>`;
    })
    .join("\n                    ");

  const brandName = isAm ? "ኢትራአፌ" : "ETEF";
  const brandSub = isAm ? "የትራንስፖርት አሠሪዎች" : "EMPLOYERS FEDERATION";

  return `
    <header class="bg-primary-600 text-white w-full z-50 shadow-md sticky top-0">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <!-- Logo Area -->
                <a href="/" class="flex-shrink-0 flex items-center gap-3 cursor-pointer">
                    <img src="/images/etef_logo.png" alt="ETEF Logo" class="h-11 w-11 object-contain rounded-full bg-white p-0.5 shadow-sm shrink-0" />
                    <div>
                        <span class="font-bold text-xl tracking-tight text-white block leading-none">${brandName}</span>
                        <span class="text-[10px] text-white/80 block mt-0.5 tracking-wider">${brandSub}</span>
                    </div>
                </a>

                <!-- Desktop Navigation -->
                <nav class="hidden md:flex space-x-1 lg:space-x-2 xl:space-x-3 items-center">
                    ${navLinksHtml}
                </nav>

                <!-- Right Actions: Language Selector & CTA -->
                <div class="hidden md:flex items-center space-x-3">
                    <div class="relative lang-dropdown-container">
                        <button class="lang-dropdown-btn flex items-center gap-2 text-white hover:text-gray-200 transition-colors text-sm font-medium border border-transparent hover:border-white/30 px-2.5 py-1.5 rounded cursor-pointer" aria-label="${isAm ? "ቋንቋ ይምረጡ" : "Select Language"}">
                            <i class="fa-solid fa-globe"></i> <span class="current-lang-text">${lang}</span> <i class="fa-solid fa-chevron-down text-xs"></i>
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
                    <a href="/membership" class="${activePath === "/membership" || activePath === "/memberships" ? "bg-white text-primary-600" : "border-2 border-white text-white hover:bg-white hover:text-primary-600"} px-4 py-2 rounded-md text-sm font-semibold transition-all shadow-sm">
                        ${t.join}
                    </a>
                </div>

                <!-- Mobile menu button -->
                <div class="md:hidden flex items-center gap-2">
                    <div class="relative lang-dropdown-container">
                        <button class="lang-dropdown-btn flex items-center gap-1.5 text-white hover:text-gray-200 transition-colors text-xs font-semibold px-2 py-1 rounded border border-white/30 cursor-pointer">
                            <i class="fa-solid fa-globe"></i> <span>${lang}</span>
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
                    <button class="text-white hover:text-gray-200 focus:outline-none p-2 cursor-pointer" aria-label="Toggle Navigation">
                        <i class="fa-solid fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
        </div>
    </header>
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
                        <img src="/images/etef_logo.png" alt="ETEF Logo" class="h-12 w-12 object-contain rounded-full bg-white p-1 shadow-md shrink-0" />
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
                        <li><a href="/home#corridors" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-angle-right text-[10px] text-blue-300"></i> ${isAm ? "የንግድ ኮሪደሮች ሁኔታ" : "Corridor Watch"}</a></li>
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
