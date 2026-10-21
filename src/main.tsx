import { renderHomeCms, mountCmsAdmin } from "./homepageCms";
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Lenis from "lenis";

let globalLenis: Lenis | null = null;
function initLenis() {
  if (typeof window === "undefined" || globalLenis) return globalLenis;
  globalLenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    touchMultiplier: 1.5,
    infinite: false,
  });
  (window as any).lenis = globalLenis;

  function raf(time: number) {
    globalLenis?.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  return globalLenis;
}
initLenis();
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";

import home from "./pages/home";
import about from "./pages/about";
import news from "./pages/news";
import vacancy from "./pages/vacancy";
import partners from "./pages/partners";
import faq from "./pages/faq";
import contact from "./pages/contact";
import membership from "./pages/membership";
import admin from "./pages/admin";
import privacy from "./pages/privacy";
import terms from "./pages/terms";
import notfound from "./pages/notfound";
import {
  setupModals,
  openBioModal,
  openArticleModal,
  openJobModal,
  openTalentModal,
  openPromotionModal,
  lockBodyScroll,
  unlockBodyScroll,
} from "./modals";
import { Lang, getCurrentLang, setCurrentLang, onLangChange, commonText } from "./i18n";
import { adminStore } from "./adminStore";

import "./style.css";

const pages = [
  { path: "/", page: home },
  { path: "/home", page: home },
  { path: "/about", page: about },
  { path: "/partners", page: partners },
  { path: "/partner", page: partners },
  { path: "/vacancies", page: vacancy },
  { path: "/vacancy", page: vacancy },
  { path: "/membership", page: membership },
  { path: "/memberships", page: membership },
  { path: "/news", page: news },
  { path: "/faq", page: faq },
  { path: "/faqs", page: faq },
  { path: "/contact", page: contact },
  { path: "/contact-us", page: contact },
  { path: "/privacy", page: privacy },
  { path: "/privacy-policy", page: privacy },
  { path: "/terms", page: terms },
  { path: "/terms-of-service", page: terms },
  { path: "/admin", page: admin },
  { path: "*", page: notfound },
];

export type PageData = {
  title: string | { ENG: string; "አማ": string } | Record<string, string>;
  markup: string | { ENG: string; "አማ": string } | Record<string, string> | ((lang: Lang) => string);
};

function Page({ page }: { page: PageData }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [lang, setLang] = useState<Lang>(getCurrentLang);

  useEffect(() => {
    return onLangChange((newLang) => {
      setLang(newLang);
    });
  }, []);

  const pageTitle =
    typeof page.title === "object"
      ? (page.title as Record<string, string>)[lang] || (page.title as Record<string, string>).ENG || "ETEF"
      : page.title;

  const pageMarkup =
    typeof page.markup === "function"
      ? page.markup(lang)
      : typeof page.markup === "object"
      ? (page.markup as Record<string, string>)[lang] || (page.markup as Record<string, string>).ENG || ""
      : page.markup;

  useEffect(() => {
    document.title = pageTitle;
    const faviconEl = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (faviconEl) faviconEl.href = "/favicon.png";
    setupModals();

    const root = document.getElementById("page-content");
    if (!root) return;

    root.innerHTML = pageMarkup;
    if (location.pathname === "/" || location.pathname === "/home") void renderHomeCms(root);
    if (location.pathname === "/admin") {
      // The legacy local-only administration view is never exposed without server authentication.
      void mountCmsAdmin(root, () => {});
      return;
    }
    if (location.hash) {
      setTimeout(() => {
        try {
          const targetEl = document.querySelector(location.hash);
          if (targetEl) {
            if ((window as any).lenis?.scrollTo) {
              (window as any).lenis.scrollTo(targetEl, { offset: -80 });
            } else {
              targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          } else {
            window.scrollTo({ top: 0, behavior: "instant" });
          }
        } catch {
          window.scrollTo({ top: 0, behavior: "instant" });
        }
      }, 120);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }

    // If not on admin page, hydrate public page components dynamically from adminStore
    if (location.pathname !== "/admin") {
      adminStore.hydratePublicPage(location.pathname, lang);
    }

    // Set up About & Services dropdown hover reset
    root.querySelectorAll<HTMLElement>(".about-dropdown-container, .services-dropdown-container").forEach((container) => {
      const resetMenu = () => {
        container.classList.remove("menu-closed");
        container.querySelector<HTMLElement>(".about-dropdown-menu, .services-dropdown-menu")?.classList.remove("force-hidden");
      };
      container.addEventListener("mouseleave", resetMenu);
      container.addEventListener("mouseenter", resetMenu);
    });

    // Set up Global Search Form handler in floating topbar
    const globalSearchForm = root.querySelector<HTMLFormElement>("#global-search-form");
    if (globalSearchForm) {
      globalSearchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const searchInput = globalSearchForm.querySelector<HTMLInputElement>("#global-top-search");
        const q = searchInput?.value.trim();
        if (q) {
          navigate(`/faq?search=${encodeURIComponent(q)}`);
        }
      });
    }

    // Set up Floating Promotion Bar docking on page/hero scroll
    const floatingPromo = root.querySelector<HTMLElement>("#nav-floating-promo");
    const closePromoBtn = root.querySelector<HTMLButtonElement>("#close-floating-promo");
    let promoDismissed = false;

    if (floatingPromo) {
      const handlePromoScroll = () => {
        if (promoDismissed) return;
        if (window.scrollY > 160) {
          floatingPromo.classList.add("promo-docked");
        } else {
          floatingPromo.classList.remove("promo-docked");
        }
      };

      window.addEventListener("scroll", handlePromoScroll, { passive: true });
      handlePromoScroll();

      closePromoBtn?.addEventListener("click", () => {
        promoDismissed = true;
        floatingPromo.classList.remove("promo-docked");
      });
    }

    // Set up Very Top Info Bar hiding on scroll
    const topUtilityBar = root.querySelector<HTMLElement>("#top-utility-bar");
    if (topUtilityBar) {
      const handleTopBarScroll = () => {
        if (window.scrollY > 35) {
          topUtilityBar.classList.add("top-bar-hidden");
        } else {
          topUtilityBar.classList.remove("top-bar-hidden");
        }
      };

      window.addEventListener("scroll", handleTopBarScroll, { passive: true });
      handleTopBarScroll();
    }

    // Set up Cookie Consent Popup Banner
    if (
      typeof window !== "undefined" &&
      !localStorage.getItem("etef_cookie_consent") &&
      !document.getElementById("etef-cookie-banner") &&
      location.pathname !== "/admin"
    ) {
      const isAm = lang === "አማ";
      const cookieBanner = document.createElement("div");
      cookieBanner.id = "etef-cookie-banner";
      cookieBanner.className =
        "fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-[9999] bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-2xl rounded-2xl p-5 text-slate-800 animate-in fade-in slide-in-from-bottom-5 duration-300";

      cookieBanner.innerHTML = `
        <div class="flex items-start gap-3.5">
          <div class="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl shrink-0 border border-primary-100/80">
            <i class="fa-solid fa-cookie-bite"></i>
          </div>
          <div class="flex-1">
            <div class="flex items-center justify-between mb-1.5">
              <h4 class="font-bold text-sm text-slate-900">${isAm ? "የኩኪ እና የግላዊነት ምርጫዎች" : "Cookie & Privacy Notice"}</h4>
              <button id="etef-cookie-close" type="button" class="text-slate-400 hover:text-slate-600 p-1 cursor-pointer transition-colors" aria-label="Dismiss">
                <i class="fa-solid fa-xmark text-xs"></i>
              </button>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">
              ${
                isAm
                  ? "የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን ድረ-ገጹን ይበልጥ ምቹ ለማድረግና አገልግሎቶችን ለማሻሻል አስፈላጊ ኩኪዎችን ይጠቀማል። ለተጨማሪ መረጃ "
                  : "ETEF uses essential cookies and portal telemetry to improve site navigation, authenticate member accounts, and analyze transit traffic. Learn more in our "
              }
              <a href="/privacy" class="text-primary-600 hover:underline font-semibold">${isAm ? "የግላዊነት ፖሊሲ" : "Privacy Policy"}</a>.
            </p>
            <div class="flex items-center gap-2.5 mt-3.5 pt-1">
              <button id="etef-cookie-accept" type="button" class="flex-1 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm hover:shadow cursor-pointer text-center">
                ${isAm ? "ሁሉንም ተቀበል" : "Accept All Cookies"}
              </button>
              <button id="etef-cookie-decline" type="button" class="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition-all cursor-pointer">
                ${isAm ? "አስፈላጊውን ብቻ" : "Essential Only"}
              </button>
            </div>
          </div>
        </div>
      `;

      document.body.appendChild(cookieBanner);

      const dismissCookieBanner = (choice: string) => {
        try {
          localStorage.setItem("etef_cookie_consent", choice);
        } catch {}
        cookieBanner.classList.add("opacity-0", "translate-y-4", "pointer-events-none", "transition-all", "duration-300");
        setTimeout(() => cookieBanner.remove(), 320);
      };

      cookieBanner.querySelector("#etef-cookie-accept")?.addEventListener("click", () => dismissCookieBanner("accepted"));
      cookieBanner.querySelector("#etef-cookie-decline")?.addEventListener("click", () => dismissCookieBanner("essential"));
      cookieBanner.querySelector("#etef-cookie-close")?.addEventListener("click", () => dismissCookieBanner("dismissed"));
    }

    // Set up FAQ search filtering if on FAQ page
    const faqSearchInput = root.querySelector<HTMLInputElement>("#faq-search-input");
    const faqItems = root.querySelectorAll<HTMLElement>(".faq-item");
    const faqFilterBtns = root.querySelectorAll<HTMLButtonElement>(".faq-filter-btn");

    let currentCategory = "all";

    const filterFaqs = () => {
      const query = (faqSearchInput?.value || "").toLowerCase().trim();

      faqItems.forEach((item) => {
        const itemCat = item.getAttribute("data-category") || "";
        const itemText = item.textContent?.toLowerCase() || "";

        const matchesCat = currentCategory === "all" || itemCat === currentCategory;
        const matchesQuery = !query || itemText.includes(query);

        if (matchesCat && matchesQuery) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    };

    if (faqSearchInput) {
      faqSearchInput.addEventListener("input", filterFaqs);
      const urlParams = new URLSearchParams(location.search);
      const searchParam = urlParams.get("search");
      if (searchParam) {
        faqSearchInput.value = searchParam;
        filterFaqs();
      }
    }

    if (faqFilterBtns.length > 0) {
      faqFilterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          faqFilterBtns.forEach((b) => {
            b.className = "faq-filter-btn px-4 py-1.5 rounded-full text-xs font-medium bg-white text-slate-600 border border-slate-300 hover:bg-slate-50 transition-colors";
          });
          btn.className = "faq-filter-btn px-4 py-1.5 rounded-full text-xs font-semibold bg-primary-600 text-white shadow-sm";
          currentCategory = btn.getAttribute("data-category") || "all";
          filterFaqs();
        });
      });
    }

    // Set up FAQ Page Question/Inquiry submission form handler
    const faqInquiryForm = root.querySelector<HTMLFormElement>("#faq-page-inquiry-form");
    if (faqInquiryForm) {
      faqInquiryForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const successBox = root.querySelector<HTMLElement>("#faq-page-submit-success");
        if (successBox) {
          successBox.classList.remove("hidden");
          if ((window as any).lenis?.scrollTo) {
            (window as any).lenis.scrollTo(successBox, { offset: -100 });
          } else {
            successBox.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }
        faqInquiryForm.reset();
      });
    }

    // Set up News search and category filtering if on News page
    const newsSearchInput = root.querySelector<HTMLInputElement>("#news-search-input");
    const newsCards = root.querySelectorAll<HTMLElement>(".news-card");
    const newsFilterBtns = root.querySelectorAll<HTMLButtonElement>(".news-filter-btn");
    const newsNoResults = root.querySelector<HTMLElement>("#news-no-results");

    let currentNewsCategory = "all";

    const filterNews = () => {
      const query = (newsSearchInput?.value || "").toLowerCase().trim();
      let visibleCount = 0;

      newsCards.forEach((card) => {
        const cat = card.getAttribute("data-category") || "";
        const text = card.textContent?.toLowerCase() || "";

        const matchesCat = currentNewsCategory === "all" || cat === currentNewsCategory;
        const matchesQuery = !query || text.includes(query);

        if (matchesCat && matchesQuery) {
          card.classList.remove("hidden");
          visibleCount++;
        } else {
          card.classList.add("hidden");
        }
      });

      if (newsNoResults) {
        if (visibleCount === 0) {
          newsNoResults.classList.remove("hidden");
        } else {
          newsNoResults.classList.add("hidden");
        }
      }
    };

    if (newsSearchInput) {
      newsSearchInput.addEventListener("input", filterNews);
    }

    if (newsFilterBtns.length > 0) {
      newsFilterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          newsFilterBtns.forEach((b) => {
            b.className = "news-filter-btn px-4 py-2 bg-white text-slate-600 hover:bg-slate-50 font-medium text-sm rounded-full border border-slate-200 transition-colors cursor-pointer";
          });
          btn.className = "news-filter-btn px-4 py-2 bg-primary-600 text-white font-medium text-sm rounded-full shadow-sm transition-colors cursor-pointer border-none";
          currentNewsCategory = btn.getAttribute("data-category") || "all";
          filterNews();
        });
      });
    }

    // Set up Vacancy search and filtering if on Vacancy page
    const jobSearchInput = root.querySelector<HTMLInputElement>("#job-search-input");
    const jobCategorySelect = root.querySelector<HTMLSelectElement>("#job-category-select");
    const jobEmployerSelect = root.querySelector<HTMLSelectElement>("#job-employer-select");
    const jobSearchBtn = root.querySelector<HTMLButtonElement>("#job-search-btn");
    const jobCards = root.querySelectorAll<HTMLElement>(".job-listing-card");
    const jobNoResults = root.querySelector<HTMLElement>("#job-no-results");

    const filterJobs = () => {
      const query = (jobSearchInput?.value || "").toLowerCase().trim();
      const selectedCat = (jobCategorySelect?.value || "").toLowerCase();
      const selectedEmp = (jobEmployerSelect?.value || "").toLowerCase();
      let visibleCount = 0;

      jobCards.forEach((card) => {
        const cat = (card.getAttribute("data-category") || "").toLowerCase();
        const emp = (card.getAttribute("data-employer") || "").toLowerCase();
        const text = card.textContent?.toLowerCase() || "";

        const matchesQuery = !query || text.includes(query);
        const matchesCat = !selectedCat || cat === selectedCat;
        const matchesEmp = !selectedEmp || emp === selectedEmp;

        if (matchesQuery && matchesCat && matchesEmp) {
          card.classList.remove("hidden");
          visibleCount++;
        } else {
          card.classList.add("hidden");
        }
      });

      if (jobNoResults) {
        if (visibleCount === 0) {
          jobNoResults.classList.remove("hidden");
        } else {
          jobNoResults.classList.add("hidden");
        }
      }
    };

    if (jobSearchInput) {
      jobSearchInput.addEventListener("input", filterJobs);
    }
    if (jobCategorySelect) {
      jobCategorySelect.addEventListener("change", filterJobs);
    }
    if (jobEmployerSelect) {
      jobEmployerSelect.addEventListener("change", filterJobs);
    }
    if (jobSearchBtn) {
      jobSearchBtn.addEventListener("click", filterJobs);
    }

    // ==========================================
    // ADMIN PORTAL COMPLETE MANAGEMENT LOGIC
    // ==========================================
    const toast = root.querySelector<HTMLElement>("#toast");
    const toastMessage = root.querySelector<HTMLElement>("#toastMessage");

    const showAdminToast = (msg: string) => {
      if (toast && toastMessage) {
        toastMessage.textContent = msg;
        toast.classList.remove("translate-y-20", "opacity-0");
        setTimeout(() => toast.classList.add("translate-y-20", "opacity-0"), 3000);
      }
    };

    let activateAdminTab: ((tabId: string) => void) | null = null;

    if (location.pathname === "/admin") {
      const openModal = (id: string) => {
        const modal = document.getElementById(id);
        if (modal) {
          modal.classList.remove("hidden");
          modal.classList.add("flex");
          modal.style.zIndex = "100000";
          lockBodyScroll();
        }
      };

      const closeAllAdminModals = () => {
        const modals = root.querySelectorAll<HTMLElement>('[id^="admin-modal-"]');
        modals.forEach((m) => {
          m.classList.add("hidden");
          m.classList.remove("flex");
        });
        unlockBodyScroll();
      };

      // Modal Triggers
      root.querySelector("#admin-open-member-modal")?.addEventListener("click", () => openModal("admin-modal-member"));
      root.querySelector("#admin-open-vacancy-modal")?.addEventListener("click", () => openModal("admin-modal-vacancy"));
      root.querySelector("#quick-add-vacancy")?.addEventListener("click", () => openModal("admin-modal-vacancy"));
      root.querySelector("#admin-open-news-modal")?.addEventListener("click", () => openModal("admin-modal-news"));
      root.querySelector("#quick-add-news")?.addEventListener("click", () => openModal("admin-modal-news"));
      root.querySelector("#admin-open-partner-modal")?.addEventListener("click", () => openModal("admin-modal-partner"));
      root.querySelector("#quick-add-partner")?.addEventListener("click", () => openModal("admin-modal-partner"));
      root.querySelector("#admin-open-board-add-modal")?.addEventListener("click", () => openModal("admin-modal-board-add"));

      root.querySelectorAll(".admin-modal-close, .admin-modal-backdrop").forEach((el) => {
        el.addEventListener("click", closeAllAdminModals);
      });

      // Image Uploaders with Live FileReader Preview
      const setupImageUploader = (fileInputId: string, hiddenInputId: string, previewImgId: string, labelId?: string) => {
        const fileInput = root.querySelector<HTMLInputElement>(`#${fileInputId}`);
        const hiddenInput = root.querySelector<HTMLInputElement>(`#${hiddenInputId}`);
        const previewImg = root.querySelector<HTMLImageElement>(`#${previewImgId}`);
        const labelEl = labelId ? root.querySelector<HTMLElement>(`#${labelId}`) : null;

        if (!fileInput || !hiddenInput) return;

        fileInput.addEventListener("change", () => {
          const file = fileInput.files?.[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
              const result = e.target?.result as string;
              hiddenInput.value = result;
              if (previewImg) {
                previewImg.src = result;
                previewImg.classList.remove("hidden");
              }
              if (labelEl) {
                labelEl.textContent = file.name;
              }
            };
            reader.readAsDataURL(file);
          }
        });
      };

      setupImageUploader("hero-edit-file", "hero-edit-image", "hero-edit-preview", "hero-edit-file-label");
      setupImageUploader("board-edit-file", "board-edit-image", "board-edit-preview", "board-edit-file-label");
      setupImageUploader("board-add-file", "board-add-image", "board-add-preview", "board-add-file-label");
      setupImageUploader("news-edit-file", "news-edit-image", "news-edit-preview", "news-edit-file-label");
      setupImageUploader("news-file", "news-image", "news-preview", "news-file-label");
      setupImageUploader("partner-edit-file", "partner-edit-logo", "partner-edit-preview", "partner-edit-file-label");
      setupImageUploader("partner-file", "partner-logo", "partner-preview", "partner-file-label");

      // 1. Dashboard Tab Renderer
      const renderDashboard = () => {
        const boardCount = root.querySelector<HTMLElement>("#badge-board-count");
        if (boardCount) boardCount.textContent = String(adminStore.getBoard().length);

        const activeVacancies = adminStore.getVacancies().filter(v => v.status === "Active").length;
        const vacBadge = root.querySelector<HTMLElement>("#badge-vacancies-count");
        if (vacBadge) vacBadge.textContent = String(activeVacancies);
        const dashVac = root.querySelector<HTMLElement>("#dash-vacancies-stat");
        if (dashVac) dashVac.textContent = String(activeVacancies);

        const publishedNews = adminStore.getNews().filter(n => n.status === "Published").length;
        const newsBadge = root.querySelector<HTMLElement>("#badge-news-count");
        if (newsBadge) newsBadge.textContent = String(publishedNews);

        const partnersCount = root.querySelector<HTMLElement>("#badge-partners-count");
        if (partnersCount) partnersCount.textContent = String(adminStore.getPartners().length);

        const logsBadge = root.querySelector<HTMLElement>("#badge-logs-count");
        if (logsBadge) logsBadge.textContent = `${adminStore.getLogs().length} Entries`;

        // Render recent logs snippet
        const recentLogsContainer = root.querySelector<HTMLElement>("#dash-recent-logs-list");
        if (recentLogsContainer) {
          const logs = adminStore.getLogs().slice(0, 4);
          recentLogsContainer.innerHTML = logs.map(l => {
            const badgeClass = l.action === "CREATE" || l.action === "STATUS_CHANGE"
              ? "bg-primary-50 text-primary-700 border border-primary-200"
              : "bg-slate-100 text-slate-700 border border-slate-200";

            return `
              <div class="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200 hover:bg-slate-100/70 transition-colors">
                <div class="flex items-center gap-2.5">
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold ${badgeClass}">${l.action}</span>
                  <span class="font-semibold text-slate-900">${l.category}:</span>
                  <span class="text-slate-600 line-clamp-1">${l.target}</span>
                </div>
                <span class="text-[11px] text-slate-400 font-mono shrink-0 ml-3">${l.timestamp.slice(11)}</span>
              </div>
            `;
          }).join("");
        }
      };

      // 2. Heroes Tab Renderer
      const renderHeroesTab = () => {
        const grid = root.querySelector<HTMLElement>("#admin-heroes-grid");
        if (!grid) return;

        const heroes = adminStore.getHeroes();
        grid.innerHTML = heroes.map(hero => `
          <div class="bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between">
            <div>
              <div class="relative h-40 overflow-hidden bg-slate-900 group">
                <img src="${hero.image}" alt="${hero.pageName}" class="w-full h-full object-cover ${hero.brightness}">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div class="absolute top-2.5 left-2.5">
                  <span class="px-2 py-0.5 bg-black/60 backdrop-blur-xs text-white border border-white/20 rounded text-[11px] font-mono">
                    ${hero.route}
                  </span>
                </div>
                <div class="absolute bottom-2.5 left-3 right-3 text-white">
                  <span class="text-[10px] uppercase font-bold text-slate-300 block mb-0.5">${hero.badge}</span>
                  <h4 class="font-bold text-sm text-white truncate">${hero.pageName}</h4>
                </div>
              </div>
              <div class="p-4 space-y-1.5">
                <h5 class="font-bold text-slate-900 text-sm line-clamp-1">${hero.title}</h5>
                <p class="text-xs text-slate-500 line-clamp-2 leading-relaxed">${hero.subtitle}</p>
              </div>
            </div>
            <div class="p-4 pt-0">
              <button type="button" data-hero-id="${hero.id}" class="admin-edit-hero-btn w-full py-2 px-3 bg-white hover:bg-slate-50 text-slate-700 hover:text-primary-600 font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-slate-200 shadow-2xs">
                <i class="fa-solid fa-pen-to-square text-primary-600"></i>
                <span>Edit Cover</span>
              </button>
            </div>
          </div>
        `).join("");

        grid.querySelectorAll<HTMLButtonElement>(".admin-edit-hero-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            const heroId = btn.getAttribute("data-hero-id");
            if (!heroId) return;
            const hero = adminStore.getHeroes().find(h => h.id === heroId);
            if (!hero) return;

            const modalTitle = root.querySelector<HTMLElement>("#hero-modal-title");
            if (modalTitle) modalTitle.textContent = `Edit ${hero.pageName} Cover`;

            const idInput = root.querySelector<HTMLInputElement>("#hero-edit-id");
            if (idInput) idInput.value = hero.id;

            const imageInput = root.querySelector<HTMLInputElement>("#hero-edit-image");
            if (imageInput) imageInput.value = hero.image;

            const preview = root.querySelector<HTMLImageElement>("#hero-edit-preview");
            if (preview) {
              preview.src = hero.image;
              preview.classList.remove("hidden");
            }

            const labelEl = root.querySelector<HTMLElement>("#hero-edit-file-label");
            if (labelEl) labelEl.textContent = "Change Image File...";

            const headingInput = root.querySelector<HTMLInputElement>("#hero-edit-heading");
            if (headingInput) headingInput.value = hero.title;

            const subtitleInput = root.querySelector<HTMLTextAreaElement>("#hero-edit-subtitle");
            if (subtitleInput) subtitleInput.value = hero.subtitle;

            const brightnessSelect = root.querySelector<HTMLSelectElement>("#hero-edit-brightness");
            if (brightnessSelect) brightnessSelect.value = hero.brightness || "brightness-105";

            const badgeInput = root.querySelector<HTMLInputElement>("#hero-edit-badge");
            if (badgeInput) badgeInput.value = hero.badge || "";

            openModal("admin-modal-hero-edit");
          });
        });
      };

      // 3. Board Tab Renderer
      const renderBoardTab = () => {
        const tbody = root.querySelector<HTMLElement>("#admin-board-table tbody");
        if (!tbody) return;

        const searchVal = (root.querySelector<HTMLInputElement>("#admin-board-search")?.value || "").toLowerCase().trim();
        const filterVal = root.querySelector<HTMLSelectElement>("#admin-board-filter")?.value || "all";

        let members = adminStore.getBoard();
        if (filterVal === "photo") {
          members = members.filter(m => !m.isPlaceholder);
        } else if (filterVal === "placeholder") {
          members = members.filter(m => m.isPlaceholder);
        }

        if (searchVal) {
          members = members.filter(m =>
            m.nameEng.toLowerCase().includes(searchVal) ||
            m.nameAm.includes(searchVal) ||
            m.roleEng.toLowerCase().includes(searchVal) ||
            m.roleAm.includes(searchVal)
          );
        }

        tbody.innerHTML = members.map(m => `
          <tr class="hover:bg-slate-50/70 transition-colors">
            <td class="py-3 px-5 font-bold text-slate-900">
              <div class="flex items-center gap-3">
                ${m.isPlaceholder ? `
                  <div class="w-10 h-10 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center text-base shrink-0 border border-slate-200">
                    <i class="fa-solid fa-user-tie"></i>
                  </div>
                ` : `
                  <img src="${m.image}" alt="${m.nameEng}" class="w-10 h-10 rounded-lg object-cover object-top shrink-0 border border-slate-200">
                `}
                <div>
                  <span class="block text-xs font-bold text-slate-900">${m.nameEng}</span>
                  <span class="block text-[11px] text-slate-400 font-normal">${m.nameAm}</span>
                </div>
              </div>
            </td>
            <td class="py-3 px-5">
              <span class="block text-xs font-semibold text-slate-800">${m.roleEng}</span>
              <span class="block text-[11px] text-slate-400">${m.roleAm}</span>
            </td>
            <td class="py-3 px-5">
              ${m.isPlaceholder ? `
                <span class="px-2 py-0.5 bg-slate-100 text-slate-700 border border-slate-200 rounded text-[11px] font-semibold inline-flex items-center gap-1">
                  <i class="fa-solid fa-user-clock text-[10px]"></i> Placeholder
                </span>
              ` : `
                <span class="px-2 py-0.5 bg-primary-50 text-primary-700 border border-primary-200 rounded text-[11px] font-semibold inline-flex items-center gap-1">
                  <i class="fa-solid fa-circle-check text-[10px]"></i> Verified Photo
                </span>
              `}
            </td>
            <td class="py-3 px-5 max-w-xs">
              <p class="text-xs text-slate-500 line-clamp-1">${m.descEng}</p>
            </td>
            <td class="py-3 px-5 text-right space-x-1.5 whitespace-nowrap">
              <button type="button" data-biokey="${m.bioKey}" class="admin-board-edit-btn px-2.5 py-1.5 bg-white text-slate-700 hover:text-primary-600 hover:bg-slate-50 font-semibold text-xs rounded-lg transition-colors cursor-pointer border border-slate-200 shadow-2xs">
                <i class="fa-solid fa-pen mr-1 text-primary-600"></i> Edit
              </button>
              <button type="button" data-biokey="${m.bioKey}" class="admin-board-delete-btn px-2 py-1.5 bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 font-semibold text-xs rounded-lg transition-colors cursor-pointer border border-slate-200">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </td>
          </tr>
        `).join("");

        // Wire Edit Member Buttons
        tbody.querySelectorAll<HTMLButtonElement>(".admin-board-edit-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            const bioKey = btn.getAttribute("data-biokey");
            if (!bioKey) return;
            const m = adminStore.getBoard().find(b => b.bioKey === bioKey);
            if (!m) return;

            const bioKeyInput = root.querySelector<HTMLInputElement>("#board-edit-biokey");
            if (bioKeyInput) bioKeyInput.value = m.bioKey;

            const nameEngInput = root.querySelector<HTMLInputElement>("#board-edit-name-eng");
            if (nameEngInput) nameEngInput.value = m.nameEng;

            const nameAmInput = root.querySelector<HTMLInputElement>("#board-edit-name-am");
            if (nameAmInput) nameAmInput.value = m.nameAm;

            const roleEngInput = root.querySelector<HTMLInputElement>("#board-edit-role-eng");
            if (roleEngInput) roleEngInput.value = m.roleEng;

            const roleAmInput = root.querySelector<HTMLInputElement>("#board-edit-role-am");
            if (roleAmInput) roleAmInput.value = m.roleAm;

            const imageInput = root.querySelector<HTMLInputElement>("#board-edit-image");
            if (imageInput) imageInput.value = m.image;

            const preview = root.querySelector<HTMLImageElement>("#board-edit-preview");
            if (preview) {
              if (m.image) {
                preview.src = m.image;
                preview.classList.remove("hidden");
              } else {
                preview.classList.add("hidden");
              }
            }

            const labelEl = root.querySelector<HTMLElement>("#board-edit-file-label");
            if (labelEl) labelEl.textContent = m.image ? "Change Photo File..." : "Upload Photo File...";

            const placeholderCheck = root.querySelector<HTMLInputElement>("#board-edit-isplaceholder");
            if (placeholderCheck) placeholderCheck.checked = !!m.isPlaceholder;

            const descEngInput = root.querySelector<HTMLTextAreaElement>("#board-edit-desc-eng");
            if (descEngInput) descEngInput.value = m.descEng;

            const descAmInput = root.querySelector<HTMLTextAreaElement>("#board-edit-desc-am");
            if (descAmInput) descAmInput.value = m.descAm;

            openModal("admin-modal-board-edit");
          });
        });

        // Wire Delete Member Buttons
        tbody.querySelectorAll<HTMLButtonElement>(".admin-board-delete-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            const bioKey = btn.getAttribute("data-biokey");
            if (!bioKey) return;
            const member = adminStore.getBoard().find(b => b.bioKey === bioKey);
            if (!member) return;
            if (confirm(`Are you sure you want to remove ${member.nameEng} from the Board of Directors?`)) {
              adminStore.deleteBoardMember(bioKey);
              renderBoardTab();
              renderDashboard();
              showAdminToast(`Board member "${member.nameEng}" deleted.`);
            }
          });
        });
      };

      // 4. Vacancies Tab Renderer
      const renderVacanciesTab = () => {
        const tbody = root.querySelector<HTMLElement>("#admin-vacancies-table tbody");
        if (!tbody) return;

        const searchVal = (root.querySelector<HTMLInputElement>("#admin-vacancy-search")?.value || "").toLowerCase().trim();
        const filterVal = root.querySelector<HTMLSelectElement>("#admin-vacancy-filter")?.value || "all";

        let vacancies = adminStore.getVacancies();
        if (filterVal !== "all") {
          vacancies = vacancies.filter(v => v.status === filterVal);
        }
        if (searchVal) {
          vacancies = vacancies.filter(v =>
            v.title.toLowerCase().includes(searchVal) ||
            v.station.toLowerCase().includes(searchVal) ||
            v.type.toLowerCase().includes(searchVal)
          );
        }

        tbody.innerHTML = vacancies.map(v => `
          <tr class="hover:bg-slate-50/70 transition-colors">
            <td class="py-3 px-5 font-bold text-slate-900">
              <span class="block text-xs font-bold text-slate-900">${v.title}</span>
              <span class="block text-[11px] text-slate-400 font-normal line-clamp-1">${v.overview || ""}</span>
            </td>
            <td class="py-3 px-5 text-slate-600 font-medium text-xs">${v.station}</td>
            <td class="py-3 px-5">
              <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">${v.type}</span>
            </td>
            <td class="py-3 px-5 text-slate-500 text-xs">${v.deadline}</td>
            <td class="py-3 px-5">
              <span class="px-2 py-0.5 ${v.status === 'Active' ? 'bg-primary-50 text-primary-700 border border-primary-200' : 'bg-slate-100 text-slate-700 border border-slate-200'} text-[11px] font-semibold rounded">
                ${v.status}
              </span>
            </td>
            <td class="py-3 px-5 text-right space-x-1.5 whitespace-nowrap">
              <button type="button" data-vacancy-id="${v.id}" class="admin-vacancy-edit-btn px-2.5 py-1.5 bg-white text-slate-700 hover:text-primary-600 hover:bg-slate-50 font-semibold text-xs rounded-lg transition-colors cursor-pointer border border-slate-200 shadow-2xs">
                <i class="fa-solid fa-pen mr-1 text-primary-600"></i> Edit
              </button>
              <button type="button" data-vacancy-id="${v.id}" class="admin-vacancy-status-toggle-btn px-2.5 py-1.5 bg-white text-slate-700 hover:text-primary-600 hover:bg-slate-50 font-semibold text-xs rounded-lg transition-colors cursor-pointer border border-slate-200 shadow-2xs">
                ${v.status === 'Active' ? 'Close' : 'Reopen'}
              </button>
              <button type="button" data-vacancy-id="${v.id}" class="admin-vacancy-delete-btn px-2 py-1.5 bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 font-semibold text-xs rounded-lg transition-colors cursor-pointer border border-slate-200">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </td>
          </tr>
        `).join("");

        tbody.querySelectorAll<HTMLButtonElement>(".admin-vacancy-edit-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            const vId = btn.getAttribute("data-vacancy-id");
            if (!vId) return;
            const vac = adminStore.getVacancies().find(v => v.id === vId);
            if (!vac) return;

            const idInput = root.querySelector<HTMLInputElement>("#vacancy-edit-id");
            if (idInput) idInput.value = vac.id;

            const titleInput = root.querySelector<HTMLInputElement>("#vacancy-edit-title");
            if (titleInput) titleInput.value = vac.title;

            const stationInput = root.querySelector<HTMLInputElement>("#vacancy-edit-station");
            if (stationInput) stationInput.value = vac.station;

            const typeSelect = root.querySelector<HTMLSelectElement>("#vacancy-edit-type");
            if (typeSelect) typeSelect.value = vac.type;

            const deadlineInput = root.querySelector<HTMLInputElement>("#vacancy-edit-deadline");
            if (deadlineInput) deadlineInput.value = vac.deadline;

            const statusSelect = root.querySelector<HTMLSelectElement>("#vacancy-edit-status");
            if (statusSelect) statusSelect.value = vac.status;

            const overviewInput = root.querySelector<HTMLTextAreaElement>("#vacancy-edit-overview");
            if (overviewInput) overviewInput.value = vac.overview || "";

            openModal("admin-modal-vacancy-edit");
          });
        });

        tbody.querySelectorAll<HTMLButtonElement>(".admin-vacancy-status-toggle-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            const vId = btn.getAttribute("data-vacancy-id");
            if (!vId) return;
            const newStatus = adminStore.toggleVacancyStatus(vId);
            renderVacanciesTab();
            renderDashboard();
            showAdminToast(`Vacancy status set to ${newStatus}`);
          });
        });

        tbody.querySelectorAll<HTMLButtonElement>(".admin-vacancy-delete-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            const vId = btn.getAttribute("data-vacancy-id");
            if (!vId) return;
            const vac = adminStore.getVacancies().find(v => v.id === vId);
            if (!vac) return;
            if (confirm(`Are you sure you want to delete vacancy "${vac.title}"?`)) {
              adminStore.deleteVacancy(vId);
              renderVacanciesTab();
              renderDashboard();
              showAdminToast(`Vacancy "${vac.title}" deleted.`);
            }
          });
        });
      };

      // 5. News Tab Renderer
      const renderNewsTab = () => {
        const tbody = root.querySelector<HTMLElement>("#admin-news-table tbody");
        if (!tbody) return;

        const searchVal = (root.querySelector<HTMLInputElement>("#admin-news-search")?.value || "").toLowerCase().trim();
        const filterVal = root.querySelector<HTMLSelectElement>("#admin-news-filter")?.value || "all";

        let newsItems = adminStore.getNews();
        if (filterVal !== "all") {
          newsItems = newsItems.filter(n => n.category === filterVal);
        }
        if (searchVal) {
          newsItems = newsItems.filter(n =>
            n.title.toLowerCase().includes(searchVal) ||
            n.content.toLowerCase().includes(searchVal) ||
            n.category.toLowerCase().includes(searchVal)
          );
        }

        tbody.innerHTML = newsItems.map(n => `
          <tr class="hover:bg-slate-50/70 transition-colors">
            <td class="py-3 px-5 font-bold text-slate-900 max-w-sm">
              <div class="flex items-center gap-3">
                <img src="${n.image}" alt="${n.title}" class="w-10 h-10 rounded-lg object-cover shrink-0 border border-slate-200">
                <div>
                  <span class="block text-xs font-bold text-slate-900 line-clamp-1">${n.title}</span>
                  <span class="block text-[11px] text-slate-400 font-normal line-clamp-1">${n.content || ""}</span>
                </div>
              </div>
            </td>
            <td class="py-3 px-5">
              <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">${n.category}</span>
            </td>
            <td class="py-3 px-5 text-slate-500 text-xs">${n.publishDate}</td>
            <td class="py-3 px-5 font-semibold text-slate-700 text-xs">${n.views.toLocaleString()} views</td>
            <td class="py-3 px-5">
              <span class="px-2 py-0.5 ${n.status === 'Published' ? 'bg-primary-50 text-primary-700 border border-primary-200' : 'bg-slate-100 text-slate-700 border border-slate-200'} text-[11px] font-semibold rounded">
                ${n.status}
              </span>
            </td>
            <td class="py-3 px-5 text-right space-x-1.5 whitespace-nowrap">
              <button type="button" data-news-id="${n.id}" class="admin-news-edit-btn px-2.5 py-1.5 bg-white text-slate-700 hover:text-primary-600 hover:bg-slate-50 font-semibold text-xs rounded-lg transition-colors cursor-pointer border border-slate-200 shadow-2xs">
                <i class="fa-solid fa-pen mr-1 text-primary-600"></i> Edit
              </button>
              <button type="button" data-news-id="${n.id}" class="admin-news-toggle-btn px-2.5 py-1.5 bg-white text-slate-700 hover:text-primary-600 hover:bg-slate-50 font-semibold text-xs rounded-lg transition-colors cursor-pointer border border-slate-200 shadow-2xs">
                ${n.status === 'Published' ? 'Unpublish' : 'Publish'}
              </button>
              <button type="button" data-news-id="${n.id}" class="admin-news-delete-btn px-2 py-1.5 bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 font-semibold text-xs rounded-lg transition-colors cursor-pointer border border-slate-200">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </td>
          </tr>
        `).join("");

        tbody.querySelectorAll<HTMLButtonElement>(".admin-news-edit-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            const nId = btn.getAttribute("data-news-id");
            if (!nId) return;
            const article = adminStore.getNews().find(n => n.id === nId);
            if (!article) return;

            const idInput = root.querySelector<HTMLInputElement>("#news-edit-id");
            if (idInput) idInput.value = article.id;

            const titleInput = root.querySelector<HTMLInputElement>("#news-edit-title");
            if (titleInput) titleInput.value = article.title;

            const catSelect = root.querySelector<HTMLSelectElement>("#news-edit-category");
            if (catSelect) catSelect.value = article.category;

            const statusSelect = root.querySelector<HTMLSelectElement>("#news-edit-status");
            if (statusSelect) statusSelect.value = article.status;

            const imageInput = root.querySelector<HTMLInputElement>("#news-edit-image");
            if (imageInput) imageInput.value = article.image;

            const preview = root.querySelector<HTMLImageElement>("#news-edit-preview");
            if (preview) {
              if (article.image) {
                preview.src = article.image;
                preview.classList.remove("hidden");
              } else {
                preview.classList.add("hidden");
              }
            }

            const labelEl = root.querySelector<HTMLElement>("#news-edit-file-label");
            if (labelEl) labelEl.textContent = article.image ? "Change Cover File..." : "Upload Cover File...";

            const contentInput = root.querySelector<HTMLTextAreaElement>("#news-edit-content");
            if (contentInput) contentInput.value = article.content || "";

            openModal("admin-modal-news-edit");
          });
        });

        tbody.querySelectorAll<HTMLButtonElement>(".admin-news-toggle-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            const nId = btn.getAttribute("data-news-id");
            if (!nId) return;
            const newStatus = adminStore.toggleNewsStatus(nId);
            renderNewsTab();
            renderDashboard();
            showAdminToast(`Article status set to ${newStatus}`);
          });
        });

        tbody.querySelectorAll<HTMLButtonElement>(".admin-news-delete-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            const nId = btn.getAttribute("data-news-id");
            if (!nId) return;
            const article = adminStore.getNews().find(n => n.id === nId);
            if (!article) return;
            if (confirm(`Are you sure you want to delete article "${article.title}"?`)) {
              adminStore.deleteNews(nId);
              renderNewsTab();
              renderDashboard();
              showAdminToast(`Article "${article.title.slice(0, 25)}..." deleted.`);
            }
          });
        });
      };

      // 6. Partners Tab Renderer
      const renderPartnersTab = () => {
        const grid = root.querySelector<HTMLElement>("#admin-partners-grid");
        if (!grid) return;

        const partners = adminStore.getPartners();
        grid.innerHTML = partners.map(p => `
          <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div class="flex justify-between items-start mb-3">
                <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">${p.tier}</span>
                <span class="text-[11px] font-semibold text-primary-600 flex items-center gap-1"><i class="fa-solid fa-circle-check text-[10px]"></i> Active</span>
              </div>
              <div class="flex items-center gap-3 mb-2.5">
                <img src="${p.logo || '/images/etef_logo.png'}" alt="${p.name}" class="w-10 h-10 rounded object-contain border border-slate-200 p-1 bg-white shrink-0">
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">${p.name}</h4>
                  <p class="text-xs text-primary-600 font-semibold">${p.sector}</p>
                </div>
              </div>
              <p class="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-3">${p.description}</p>
            </div>
            <div class="pt-3 border-t border-slate-100 flex justify-between items-center text-xs">
              <span class="text-slate-400 text-[11px]">Since ${p.since || '2018'}</span>
              <div class="space-x-1.5">
                <button type="button" data-partner-id="${p.id}" class="admin-partner-edit-btn px-2.5 py-1.5 bg-white text-slate-700 hover:text-primary-600 hover:bg-slate-50 font-semibold rounded-lg transition-colors cursor-pointer border border-slate-200 shadow-2xs">
                  <i class="fa-solid fa-pen mr-1 text-primary-600"></i> Edit
                </button>
                <button type="button" data-partner-id="${p.id}" class="admin-partner-delete-btn px-2 py-1.5 bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 font-semibold rounded-lg transition-colors cursor-pointer border border-slate-200">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
          </div>
        `).join("");

        grid.querySelectorAll<HTMLButtonElement>(".admin-partner-edit-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            const pId = btn.getAttribute("data-partner-id");
            if (!pId) return;
            const p = adminStore.getPartners().find(item => item.id === pId);
            if (!p) return;

            const idInput = root.querySelector<HTMLInputElement>("#partner-edit-id");
            if (idInput) idInput.value = p.id;

            const nameInput = root.querySelector<HTMLInputElement>("#partner-edit-name");
            if (nameInput) nameInput.value = p.name;

            const sectorInput = root.querySelector<HTMLInputElement>("#partner-edit-sector");
            if (sectorInput) sectorInput.value = p.sector;

            const tierSelect = root.querySelector<HTMLSelectElement>("#partner-edit-tier");
            if (tierSelect) tierSelect.value = p.tier;

            const descInput = root.querySelector<HTMLInputElement>("#partner-edit-desc");
            if (descInput) descInput.value = p.description;

            const logoInput = root.querySelector<HTMLInputElement>("#partner-edit-logo");
            if (logoInput) logoInput.value = p.logo || "/images/etef_logo.png";

            const preview = root.querySelector<HTMLImageElement>("#partner-edit-preview");
            if (preview) {
              preview.src = p.logo || "/images/etef_logo.png";
              preview.classList.remove("hidden");
            }

            const labelEl = root.querySelector<HTMLElement>("#partner-edit-file-label");
            if (labelEl) labelEl.textContent = "Change Logo File...";

            openModal("admin-modal-partner-edit");
          });
        });

        grid.querySelectorAll<HTMLButtonElement>(".admin-partner-delete-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            const pId = btn.getAttribute("data-partner-id");
            if (!pId) return;
            const p = adminStore.getPartners().find(item => item.id === pId);
            if (!p) return;
            if (confirm(`Are you sure you want to delete agreement with "${p.name}"?`)) {
              adminStore.deletePartner(pId);
              renderPartnersTab();
              renderDashboard();
              showAdminToast(`Partner "${p.name}" removed.`);
            }
          });
        });
      };

      // 7. Content Tab Renderer
      const renderContentTab = () => {
        const c = adminStore.getContent();
        const setVal = (id: string, val: string) => {
          const el = root.querySelector<HTMLInputElement | HTMLTextAreaElement>(`#${id}`);
          if (el) el.value = val || "";
        };

        setVal("content-fed-name-eng", c.federationNameEng);
        setVal("content-fed-name-am", c.federationNameAm);
        setVal("content-proclamation-eng", c.proclamationTextEng);
        setVal("content-proclamation-am", c.proclamationTextAm);
        setVal("content-stat-members", c.statMembers);
        setVal("content-stat-assoc", c.statAssociations);
        setVal("content-stat-unions", c.statUnions);
        setVal("content-stat-date", c.statDate);
        setVal("content-contact-email", c.contactEmail);
        setVal("content-contact-phone", c.contactPhone);
        setVal("content-contact-address", c.contactAddress);
        setVal("content-support-hours", c.supportHours);
      };

      // 8. Logs Tab Renderer
      const renderLogsTab = () => {
        const tbody = root.querySelector<HTMLElement>("#admin-logs-tbody");
        if (!tbody) return;

        const searchVal = (root.querySelector<HTMLInputElement>("#admin-logs-search")?.value || "").toLowerCase().trim();
        const filterVal = root.querySelector<HTMLSelectElement>("#admin-logs-category-filter")?.value || "all";

        let logs = adminStore.getLogs();
        if (filterVal !== "all") {
          logs = logs.filter(l => l.category === filterVal);
        }
        if (searchVal) {
          logs = logs.filter(l =>
            l.target.toLowerCase().includes(searchVal) ||
            l.operator.toLowerCase().includes(searchVal) ||
            l.action.toLowerCase().includes(searchVal) ||
            l.category.toLowerCase().includes(searchVal)
          );
        }

        tbody.innerHTML = logs.map(l => {
          const actionBadge = l.action === "CREATE" || l.action === "STATUS_CHANGE"
            ? "bg-primary-50 text-primary-700 border border-primary-200"
            : "bg-slate-100 text-slate-700 border border-slate-200";

          return `
            <tr class="hover:bg-slate-50/70 transition-colors">
              <td class="py-2.5 px-5 text-slate-500 font-mono text-xs whitespace-nowrap">${l.timestamp}</td>
              <td class="py-2.5 px-5"><span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-700">${l.category}</span></td>
              <td class="py-2.5 px-5"><span class="px-2 py-0.5 rounded text-[11px] font-semibold ${actionBadge}">${l.action}</span></td>
              <td class="py-2.5 px-5 font-medium text-slate-800">${l.target}</td>
              <td class="py-2.5 px-5 text-slate-500 text-xs">${l.operator}</td>
              <td class="py-2.5 px-5 text-right"><span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-primary-50 text-primary-700 border border-primary-200">${l.status}</span></td>
            </tr>
          `;
        }).join("");
      };

      // Search & Filter event listeners
      root.querySelector("#admin-board-search")?.addEventListener("input", renderBoardTab);
      root.querySelector("#admin-board-filter")?.addEventListener("change", renderBoardTab);

      root.querySelector("#admin-vacancy-search")?.addEventListener("input", renderVacanciesTab);
      root.querySelector("#admin-vacancy-filter")?.addEventListener("change", renderVacanciesTab);

      root.querySelector("#admin-news-search")?.addEventListener("input", renderNewsTab);
      root.querySelector("#admin-news-filter")?.addEventListener("change", renderNewsTab);

      root.querySelector("#admin-logs-search")?.addEventListener("input", renderLogsTab);
      root.querySelector("#admin-logs-category-filter")?.addEventListener("change", renderLogsTab);

      // Member Directory Search & Sector Filter
      const memberSearch = root.querySelector<HTMLInputElement>("#admin-member-search");
      const memberSector = root.querySelector<HTMLSelectElement>("#admin-member-sector-filter");
      const memberRows = root.querySelectorAll<HTMLElement>(".admin-member-row");

      const filterAdminMembers = () => {
        const q = (memberSearch?.value || "").toLowerCase().trim();
        const sector = memberSector?.value || "all";

        memberRows.forEach((row) => {
          const rowSector = row.getAttribute("data-sector") || "";
          const text = row.textContent?.toLowerCase() || "";
          const matchSector = sector === "all" || rowSector === sector;
          const matchQ = !q || text.includes(q);

          if (matchSector && matchQ) {
            row.classList.remove("hidden");
          } else {
            row.classList.add("hidden");
          }
        });
      };

      memberSearch?.addEventListener("input", filterAdminMembers);
      memberSector?.addEventListener("change", filterAdminMembers);

      // FORM SUBMISSIONS & ACTIONS

      // Form: Hero Edit
      root.querySelector<HTMLFormElement>("#admin-form-hero-edit")?.addEventListener("submit", (e) => {
        e.preventDefault();
        const id = root.querySelector<HTMLInputElement>("#hero-edit-id")?.value;
        const image = (root.querySelector<HTMLInputElement>("#hero-edit-image")?.value || "").trim();
        const title = (root.querySelector<HTMLInputElement>("#hero-edit-heading")?.value || "").trim();
        const subtitle = (root.querySelector<HTMLTextAreaElement>("#hero-edit-subtitle")?.value || "").trim();
        const brightness = root.querySelector<HTMLSelectElement>("#hero-edit-brightness")?.value || "brightness-105";
        const badge = (root.querySelector<HTMLInputElement>("#hero-edit-badge")?.value || "").trim();

        if (id && image && title) {
          adminStore.updateHero(id, { image, title, subtitle, brightness, badge });
          closeAllAdminModals();
          renderHeroesTab();
          renderDashboard();
          showAdminToast(`Hero section & background updated successfully!`);
        }
      });

      // Form: Board Member Edit
      root.querySelector<HTMLFormElement>("#admin-form-board-edit")?.addEventListener("submit", (e) => {
        e.preventDefault();
        const bioKey = root.querySelector<HTMLInputElement>("#board-edit-biokey")?.value;
        const nameEng = (root.querySelector<HTMLInputElement>("#board-edit-name-eng")?.value || "").trim();
        const nameAm = (root.querySelector<HTMLInputElement>("#board-edit-name-am")?.value || "").trim();
        const roleEng = (root.querySelector<HTMLInputElement>("#board-edit-role-eng")?.value || "").trim();
        const roleAm = (root.querySelector<HTMLInputElement>("#board-edit-role-am")?.value || "").trim();
        const image = (root.querySelector<HTMLInputElement>("#board-edit-image")?.value || "").trim();
        const isPlaceholder = !!root.querySelector<HTMLInputElement>("#board-edit-isplaceholder")?.checked;
        const descEng = (root.querySelector<HTMLTextAreaElement>("#board-edit-desc-eng")?.value || "").trim();
        const descAm = (root.querySelector<HTMLTextAreaElement>("#board-edit-desc-am")?.value || "").trim();

        if (bioKey && nameEng && roleEng) {
          adminStore.updateBoardMember(bioKey, {
            nameEng,
            nameAm,
            roleEng,
            roleAm,
            image: isPlaceholder ? "/images/placeholder_avatar.svg" : image,
            isPlaceholder,
            descEng,
            descAm
          });
          closeAllAdminModals();
          renderBoardTab();
          renderDashboard();
          showAdminToast(`Board member "${nameEng}" updated!`);
        }
      });

      // Board Member Delete button in edit modal
      root.querySelector<HTMLButtonElement>("#board-edit-delete-btn")?.addEventListener("click", () => {
        const bioKey = root.querySelector<HTMLInputElement>("#board-edit-biokey")?.value;
        if (!bioKey) return;
        const m = adminStore.getBoard().find(b => b.bioKey === bioKey);
        if (m && confirm(`Are you sure you want to remove ${m.nameEng} from the Board of Directors?`)) {
          adminStore.deleteBoardMember(bioKey);
          closeAllAdminModals();
          renderBoardTab();
          renderDashboard();
          showAdminToast(`Board member "${m.nameEng}" deleted.`);
        }
      });

      // Form: Board Member Add
      root.querySelector<HTMLFormElement>("#admin-form-board-add")?.addEventListener("submit", (e) => {
        e.preventDefault();
        const bioKey = (root.querySelector<HTMLInputElement>("#board-add-biokey")?.value || `member-${Date.now()}`).trim().toLowerCase();
        const nameEng = (root.querySelector<HTMLInputElement>("#board-add-name-eng")?.value || "").trim();
        const nameAm = (root.querySelector<HTMLInputElement>("#board-add-name-am")?.value || "").trim();
        const roleEng = (root.querySelector<HTMLInputElement>("#board-add-role-eng")?.value || "Board Member").trim();
        const roleAm = (root.querySelector<HTMLInputElement>("#board-add-role-am")?.value || "የዳይሬክተሮች ቦርድ አባል").trim();
        const isPlaceholder = !!root.querySelector<HTMLInputElement>("#board-add-isplaceholder")?.checked;
        const image = (root.querySelector<HTMLInputElement>("#board-add-image")?.value || (isPlaceholder ? "/images/placeholder_avatar.svg" : "/images/etef_logo.png")).trim();
        const descEng = (root.querySelector<HTMLTextAreaElement>("#board-add-desc-eng")?.value || "").trim();
        const descAm = (root.querySelector<HTMLTextAreaElement>("#board-add-desc-am")?.value || "").trim();

        if (bioKey && nameEng) {
          adminStore.addBoardMember({
            bioKey,
            nameEng,
            nameAm,
            roleEng,
            roleAm,
            roleBadgeEng: roleEng,
            roleBadgeAm: roleAm,
            image: isPlaceholder ? "/images/placeholder_avatar.svg" : image,
            isPlaceholder,
            descEng,
            descAm
          });
          (root.querySelector<HTMLFormElement>("#admin-form-board-add"))?.reset();
          const addPreview = root.querySelector<HTMLImageElement>("#board-add-preview");
          if (addPreview) addPreview.classList.add("hidden");
          closeAllAdminModals();
          renderBoardTab();
          renderDashboard();
          showAdminToast(`Director "${nameEng}" added to the Board!`);
        }
      });

      // Form: Vacancy Edit
      root.querySelector<HTMLFormElement>("#admin-form-vacancy-edit")?.addEventListener("submit", (e) => {
        e.preventDefault();
        const id = root.querySelector<HTMLInputElement>("#vacancy-edit-id")?.value;
        const title = (root.querySelector<HTMLInputElement>("#vacancy-edit-title")?.value || "").trim();
        const station = (root.querySelector<HTMLInputElement>("#vacancy-edit-station")?.value || "").trim();
        const type = root.querySelector<HTMLSelectElement>("#vacancy-edit-type")?.value || "Full-Time";
        const deadline = (root.querySelector<HTMLInputElement>("#vacancy-edit-deadline")?.value || "").trim();
        const status = (root.querySelector<HTMLSelectElement>("#vacancy-edit-status")?.value || "Active") as "Active" | "Closed";
        const overview = (root.querySelector<HTMLTextAreaElement>("#vacancy-edit-overview")?.value || "").trim();

        if (id && title) {
          adminStore.updateVacancy(id, { title, station, type, deadline, status, overview });
          closeAllAdminModals();
          renderVacanciesTab();
          renderDashboard();
          showAdminToast(`Vacancy "${title}" updated!`);
        }
      });

      // Vacancy Delete in modal
      root.querySelector<HTMLButtonElement>("#vacancy-edit-delete-btn")?.addEventListener("click", () => {
        const id = root.querySelector<HTMLInputElement>("#vacancy-edit-id")?.value;
        if (!id) return;
        const vac = adminStore.getVacancies().find(v => v.id === id);
        if (vac && confirm(`Are you sure you want to delete vacancy "${vac.title}"?`)) {
          adminStore.deleteVacancy(id);
          closeAllAdminModals();
          renderVacanciesTab();
          renderDashboard();
          showAdminToast(`Vacancy deleted.`);
        }
      });

      // Form: New Vacancy Add
      root.querySelector<HTMLFormElement>("#admin-form-new-vacancy")?.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = (root.querySelector<HTMLInputElement>("#vacancy-title")?.value || "").trim();
        const station = (root.querySelector<HTMLInputElement>("#vacancy-station")?.value || "ETEF Secretariat HQ").trim();
        const type = root.querySelector<HTMLSelectElement>("#vacancy-type")?.value || "Full-Time";
        const deadline = (root.querySelector<HTMLInputElement>("#vacancy-deadline")?.value || "Dec 30, 2026").trim();

        if (title) {
          const id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-" + Date.now();
          adminStore.addVacancy({
            id,
            title,
            station,
            type,
            candidates: 0,
            deadline,
            status: "Active",
            category: "Operations",
            salary: "Competitive Federation Scale",
            overview: `Strategic career position supporting transport coordination.`
          });
          (root.querySelector<HTMLFormElement>("#admin-form-new-vacancy"))?.reset();
          closeAllAdminModals();
          renderVacanciesTab();
          renderDashboard();
          showAdminToast(`Vacancy "${title}" published!`);
        }
      });

      // Form: News Edit
      root.querySelector<HTMLFormElement>("#admin-form-news-edit")?.addEventListener("submit", (e) => {
        e.preventDefault();
        const id = root.querySelector<HTMLInputElement>("#news-edit-id")?.value;
        const title = (root.querySelector<HTMLInputElement>("#news-edit-title")?.value || "").trim();
        const category = root.querySelector<HTMLSelectElement>("#news-edit-category")?.value || "Industry News";
        const status = (root.querySelector<HTMLSelectElement>("#news-edit-status")?.value || "Published") as "Published" | "Draft";
        const image = (root.querySelector<HTMLInputElement>("#news-edit-image")?.value || "/images/news_hero_media.jpg").trim();
        const content = (root.querySelector<HTMLTextAreaElement>("#news-edit-content")?.value || "").trim();

        if (id && title) {
          adminStore.updateNews(id, { title, category, status, image, content });
          closeAllAdminModals();
          renderNewsTab();
          renderDashboard();
          showAdminToast(`Article "${title.slice(0, 25)}..." updated!`);
        }
      });

      // News Delete in modal
      root.querySelector<HTMLButtonElement>("#news-edit-delete-btn")?.addEventListener("click", () => {
        const id = root.querySelector<HTMLInputElement>("#news-edit-id")?.value;
        if (!id) return;
        const n = adminStore.getNews().find(item => item.id === id);
        if (n && confirm(`Are you sure you want to delete article "${n.title}"?`)) {
          adminStore.deleteNews(id);
          closeAllAdminModals();
          renderNewsTab();
          renderDashboard();
          showAdminToast(`Article deleted.`);
        }
      });

      // Form: News Add
      root.querySelector<HTMLFormElement>("#admin-form-new-news")?.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = (root.querySelector<HTMLInputElement>("#news-title")?.value || "").trim();
        const category = root.querySelector<HTMLSelectElement>("#news-category")?.value || "Industry News";
        const status = (root.querySelector<HTMLSelectElement>("#news-status")?.value || "Published") as "Published" | "Draft";
        const image = (root.querySelector<HTMLInputElement>("#news-image")?.value || "/images/news_hero_media.jpg").trim();

        if (title) {
          const id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-" + Date.now();
          adminStore.addNews({
            id,
            title,
            category,
            publishDate: "Today",
            views: 0,
            status,
            readTime: "4 min read",
            image,
            author: "Secretariat Administration",
            content: title
          });
          (root.querySelector<HTMLFormElement>("#admin-form-new-news"))?.reset();
          const newsPreview = root.querySelector<HTMLImageElement>("#news-preview");
          if (newsPreview) newsPreview.src = "/images/news_hero_media.jpg";
          closeAllAdminModals();
          renderNewsTab();
          renderDashboard();
          showAdminToast(`News article published!`);
        }
      });

      // Form: Partner Edit
      root.querySelector<HTMLFormElement>("#admin-form-partner-edit")?.addEventListener("submit", (e) => {
        e.preventDefault();
        const id = root.querySelector<HTMLInputElement>("#partner-edit-id")?.value;
        const name = (root.querySelector<HTMLInputElement>("#partner-edit-name")?.value || "").trim();
        const sector = (root.querySelector<HTMLInputElement>("#partner-edit-sector")?.value || "").trim();
        const tier = root.querySelector<HTMLSelectElement>("#partner-edit-tier")?.value || "Institutional Accord";
        const desc = (root.querySelector<HTMLInputElement>("#partner-edit-desc")?.value || "").trim();
        const logo = (root.querySelector<HTMLInputElement>("#partner-edit-logo")?.value || "/images/etef_logo.png").trim();

        if (id && name) {
          adminStore.updatePartner(id, { name, sector, tier, description: desc, logo });
          closeAllAdminModals();
          renderPartnersTab();
          renderDashboard();
          showAdminToast(`Partner "${name}" updated!`);
        }
      });

      // Partner Delete in modal
      root.querySelector<HTMLButtonElement>("#partner-edit-delete-btn")?.addEventListener("click", () => {
        const id = root.querySelector<HTMLInputElement>("#partner-edit-id")?.value;
        if (!id) return;
        const p = adminStore.getPartners().find(item => item.id === id);
        if (p && confirm(`Are you sure you want to delete agreement with "${p.name}"?`)) {
          adminStore.deletePartner(id);
          closeAllAdminModals();
          renderPartnersTab();
          renderDashboard();
          showAdminToast(`Partner removed.`);
        }
      });

      // Form: Partner Add
      root.querySelector<HTMLFormElement>("#admin-form-new-partner")?.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = (root.querySelector<HTMLInputElement>("#partner-name")?.value || "").trim();
        const sector = (root.querySelector<HTMLInputElement>("#partner-sector")?.value || "").trim();
        const tier = root.querySelector<HTMLSelectElement>("#partner-tier")?.value || "Institutional Accord";
        const desc = (root.querySelector<HTMLInputElement>("#partner-desc")?.value || "").trim();
        const logo = (root.querySelector<HTMLInputElement>("#partner-logo")?.value || "/images/etef_logo.png").trim();

        if (name) {
          const id = name.toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-" + Date.now();
          adminStore.addPartner({
            id,
            name,
            sector,
            tier,
            logo,
            description: desc || "Official institutional accord.",
            since: "2026",
            accordType: tier
          });
          (root.querySelector<HTMLFormElement>("#admin-form-new-partner"))?.reset();
          const partnerPreview = root.querySelector<HTMLImageElement>("#partner-preview");
          if (partnerPreview) partnerPreview.src = "/images/etef_logo.png";
          closeAllAdminModals();
          renderPartnersTab();
          renderDashboard();
          showAdminToast(`Partner "${name}" added!`);
        }
      });

      // Form: Member Add
      root.querySelector<HTMLFormElement>("#admin-form-new-member")?.addEventListener("submit", (e) => {
        e.preventDefault();
        const orgName = (root.querySelector<HTMLInputElement>("#member-org-name")?.value || "").trim();
        const sector = root.querySelector<HTMLSelectElement>("#member-sector")?.value || "Freight";
        const region = (root.querySelector<HTMLInputElement>("#member-region")?.value || "Addis Ababa").trim();
        const fleet = (root.querySelector<HTMLInputElement>("#member-fleet")?.value || "40 Trucks").trim();
        const tier = root.querySelector<HTMLSelectElement>("#member-tier")?.value || "Corporate Member";

        const tbody = root.querySelector("#admin-members-table tbody");
        if (tbody && orgName) {
          const newRow = document.createElement("tr");
          newRow.className = "hover:bg-slate-50/70 transition-colors admin-member-row";
          newRow.setAttribute("data-sector", sector);
          newRow.innerHTML = `
            <td class="py-3.5 px-5 font-bold text-slate-900">${orgName}</td>
            <td class="py-3.5 px-5"><span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-primary-50 text-primary-700 border border-primary-200">${sector}</span></td>
            <td class="py-3.5 px-5 text-slate-600">${region}</td>
            <td class="py-3.5 px-5 font-semibold text-slate-900">${fleet}</td>
            <td class="py-3.5 px-5 text-slate-700">${tier}</td>
            <td class="py-3.5 px-5"><span class="px-2 py-0.5 bg-primary-50 text-primary-700 text-[11px] font-semibold rounded border border-primary-200">Active</span></td>
            <td class="py-3.5 px-5 text-right">
                <button class="px-2.5 py-1 text-slate-600 hover:text-primary-600 font-medium text-xs rounded hover:bg-slate-100 transition-colors">Details</button>
            </td>
          `;
          tbody.prepend(newRow);
          (root.querySelector<HTMLFormElement>("#admin-form-new-member"))?.reset();
          closeAllAdminModals();
          showAdminToast(`Member "${orgName}" registered successfully!`);
        }
      });

      // Save Content button
      root.querySelector<HTMLButtonElement>("#admin-save-content-btn")?.addEventListener("click", () => {
        const federationNameEng = (root.querySelector<HTMLInputElement>("#content-fed-name-eng")?.value || "").trim();
        const federationNameAm = (root.querySelector<HTMLInputElement>("#content-fed-name-am")?.value || "").trim();
        const proclamationTextEng = (root.querySelector<HTMLInputElement>("#content-proclamation-eng")?.value || "").trim();
        const proclamationTextAm = (root.querySelector<HTMLInputElement>("#content-proclamation-am")?.value || "").trim();
        const statMembers = (root.querySelector<HTMLInputElement>("#content-stat-members")?.value || "").trim();
        const statAssociations = (root.querySelector<HTMLInputElement>("#content-stat-assoc")?.value || "").trim();
        const statUnions = (root.querySelector<HTMLInputElement>("#content-stat-unions")?.value || "").trim();
        const statDate = (root.querySelector<HTMLInputElement>("#content-stat-date")?.value || "").trim();
        const contactEmail = (root.querySelector<HTMLInputElement>("#content-contact-email")?.value || "").trim();
        const contactPhone = (root.querySelector<HTMLInputElement>("#content-contact-phone")?.value || "").trim();
        const contactAddress = (root.querySelector<HTMLInputElement>("#content-contact-address")?.value || "").trim();
        const supportHours = (root.querySelector<HTMLInputElement>("#content-support-hours")?.value || "").trim();

        adminStore.saveContent({
          federationNameEng,
          federationNameAm,
          proclamationTextEng,
          proclamationTextAm,
          statMembers,
          statAssociations,
          statUnions,
          statDate,
          contactEmail,
          contactPhone,
          contactAddress,
          supportHours
        });

        renderDashboard();
        showAdminToast("Federation content settings saved successfully!");
      });

      // Clear Logs button
      root.querySelector<HTMLButtonElement>("#admin-clear-logs-btn")?.addEventListener("click", () => {
        if (confirm("Are you sure you want to clear all audit activity logs?")) {
          adminStore.clearLogs();
          renderLogsTab();
          renderDashboard();
          showAdminToast("Audit logs cleared.");
        }
      });

      // Export Logs button
      root.querySelector<HTMLButtonElement>("#admin-export-logs-btn")?.addEventListener("click", () => {
        const logs = adminStore.getLogs();
        const blob = new Blob([JSON.stringify(logs, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `etef_audit_logs_${Date.now()}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showAdminToast("Logs exported as JSON.");
      });

      // Master Tab Activation Function
      activateAdminTab = (tabId: string) => {
        const cleanId = tabId.replace("#", "").replace("nav-", "") || "dashboard";
        const allTabs = root.querySelectorAll<HTMLElement>('[id^="tab-"]');
        allTabs.forEach((tab) => tab.classList.add("hidden"));
        const targetTab = document.getElementById(`tab-${cleanId}`);
        if (targetTab) {
          targetTab.classList.remove("hidden");
        }

        const navItems = root.querySelectorAll("aside nav a");
        navItems.forEach((link) => {
          link.classList.remove("bg-primary-600", "text-white", "font-semibold", "shadow-xs");
          link.classList.add("text-slate-600", "hover:text-slate-900", "hover:bg-slate-100", "font-medium");
        });
        const activeNav = root.querySelector(`aside nav a[href="#${cleanId}"]`);
        if (activeNav) {
          activeNav.classList.add("bg-primary-600", "text-white", "font-semibold", "shadow-xs");
          activeNav.classList.remove("text-slate-600", "hover:text-slate-900", "hover:bg-slate-100", "font-medium");
        }

        const pageTitle = root.querySelector("#pageTitle");
        if (pageTitle) {
          const titles: Record<string, string> = {
            dashboard: "Dashboard Overview",
            heroes: "Hero Sections & Cover Photos",
            board: "Board of Directors",
            vacancies: "Job Vacancies",
            news: "News & Bulletins",
            partners: "Partners & Sponsors",
            content: "Page Content & Organization",
            memberships: "Registered Members",
            logs: "Activity Logs",
          };
          pageTitle.textContent = titles[cleanId] || "ETEF Admin Studio";
        }

        // Render contents of newly activated tab
        if (cleanId === "dashboard") renderDashboard();
        else if (cleanId === "heroes") renderHeroesTab();
        else if (cleanId === "board") renderBoardTab();
        else if (cleanId === "vacancies") renderVacanciesTab();
        else if (cleanId === "news") renderNewsTab();
        else if (cleanId === "partners") renderPartnersTab();
        else if (cleanId === "content") renderContentTab();
        else if (cleanId === "logs") renderLogsTab();
      };

      // Initial activation on page load
      const initialTab = location.hash ? location.hash.replace("#", "") : "dashboard";
      activateAdminTab(initialTab);
    }

    // Set up Contact form submission if on Contact page
    const contactForm = root.querySelector<HTMLFormElement>("#contact-form");
    const contactFeedback = root.querySelector<HTMLElement>("#contact-form-feedback");

    if (contactForm && contactFeedback) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const submitBtn = contactForm.querySelector<HTMLButtonElement>("#contact-submit-btn");
        const isAm = getCurrentLang() === "አማ";
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = isAm
            ? '<span>በመላክ ላይ...</span> <i class="fa-solid fa-spinner fa-spin"></i>'
            : '<span>Sending...</span> <i class="fa-solid fa-spinner fa-spin"></i>';
        }

        setTimeout(() => {
          contactFeedback.className = "mb-6 p-4 rounded-xl border bg-primary-50 border-primary-200 text-primary-950 text-sm flex items-start gap-3 shadow-sm";
          contactFeedback.innerHTML = isAm
            ? `
              <i class="fa-solid fa-circle-check text-primary-600 text-lg mt-0.5"></i>
              <div>
                <span class="font-bold block text-primary-950">መልእክትዎ በተሳካ ሁኔታ ደርሷል!</span>
                <p class="text-xs text-primary-800 mt-0.5">የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን ዋና ጽህፈት ቤትን ስላነጋገሩ እናመሰግናለን። ጥያቄዎ ወደሚመለከተው የስራ ክፍል ተመርቷል። በኢሜይል ወይም በስልክ በ24 የስራ ሰዓታት ውስጥ ምላሽ እንሰጣለን።</p>
              </div>
            `
            : `
              <i class="fa-solid fa-circle-check text-primary-600 text-lg mt-0.5"></i>
              <div>
                <span class="font-bold block text-primary-950">Inquiry Received Successfully!</span>
                <p class="text-xs text-primary-800 mt-0.5">Thank you for contacting the Ethiopian Transport Employers Federation Secretariat. Your inquiry has been routed to the appropriate department. We will respond via email or phone within 24 business hours.</p>
              </div>
            `;
          contactFeedback.classList.remove("hidden");
          contactForm.reset();
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = isAm
              ? '<span>መልእክት ተልኳል</span> <i class="fa-solid fa-check"></i>'
              : '<span>Message Sent</span> <i class="fa-solid fa-check"></i>';
            setTimeout(() => {
              submitBtn.innerHTML = isAm
                ? '<span>መልእክት ላክ</span> <i class="fa-solid fa-paper-plane text-sm"></i>'
                : '<span>Send Message</span> <i class="fa-solid fa-paper-plane text-sm"></i>';
            }, 3000);
          }
        }, 600);
      });
    }

    // Set up Membership form submission if on Membership page
    const membershipForm = root.querySelector<HTMLFormElement>("#membership-form");
    const membershipAlert = root.querySelector<HTMLElement>("#membership-alert");

    if (membershipForm && membershipAlert) {
      membershipForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const submitBtn = membershipForm.querySelector<HTMLButtonElement>("#membership-submit-btn");
        const isAm = getCurrentLang() === "አማ";
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = isAm
            ? '<span>ማመልከቻውን በመመዝገብ ላይ...</span> <i class="fa-solid fa-spinner fa-spin"></i>'
            : '<span>Processing Application...</span> <i class="fa-solid fa-spinner fa-spin"></i>';
        }

        setTimeout(() => {
          membershipAlert.className = "mb-6 p-5 rounded-2xl border bg-primary-50 border-primary-200 text-primary-950 text-sm flex items-start gap-3 shadow-sm";
          membershipAlert.innerHTML = isAm
            ? `
              <i class="fa-solid fa-circle-check text-primary-600 text-xl mt-0.5 shrink-0"></i>
              <div>
                <span class="font-bold block text-primary-950 text-base">የአባልነት ማመልከቻ በተሳካ ሁኔታ ገብቷል!</span>
                <p class="text-xs sm:text-sm text-primary-800 mt-1 leading-relaxed">ድርጅትዎን በኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን ስለመዘገቡ እናመሰግናለን። የዋና ጽህፈት ቤቱ የአባልነት ዳይሬክቶሬት ማመልከቻዎን የተቀበለ ሲሆን ሰነዶቹን ያጣራል። ይፋዊ የማረጋገጫ ኢሜይል ከዝርዝር መመሪያ ጋር በ2 የስራ ቀናት ውስጥ ይላክልዎታል።</p>
              </div>
            `
            : `
              <i class="fa-solid fa-circle-check text-primary-600 text-xl mt-0.5 shrink-0"></i>
              <div>
                <span class="font-bold block text-primary-950 text-base">Membership Application Submitted!</span>
                <p class="text-xs sm:text-sm text-primary-800 mt-1 leading-relaxed">Thank you for registering your organization with the Ethiopian Transport Employers Federation. Our Secretariat Membership Directorate has received your submission and will review the documentation. An official confirmation email with onboarding materials will be sent to your registered address within 2 business days.</p>
              </div>
            `;
          membershipAlert.classList.remove("hidden");
          membershipForm.reset();
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = isAm
              ? '<span>ማመልከቻው ተቀብሏል</span> <i class="fa-solid fa-check"></i>'
              : '<span>Application Received</span> <i class="fa-solid fa-check"></i>';
            setTimeout(() => {
              submitBtn.innerHTML = isAm
                ? '<span>ማመልከቻ ያስገቡ</span> <i class="fa-solid fa-paper-plane text-sm"></i>'
                : '<span>SUBMIT APPLICATION</span> <i class="fa-solid fa-paper-plane text-sm"></i>';
            }, 3500);
          }
        }, 700);
      });
    }

    // ==========================================
    // MEMBERSHIP CALCULATOR & DOWNLOAD LOGIC
    // ==========================================
    const fleetSlider = root.querySelector<HTMLInputElement>("#calc-fleet-slider");
    const fleetDisplay = root.querySelector<HTMLElement>("#calc-fleet-display");
    const duesAmount = root.querySelector<HTMLElement>("#calc-dues-amount");
    const tierBadge = root.querySelector<HTMLElement>("#calc-tier-badge");
    const sectorBtns = root.querySelectorAll<HTMLButtonElement>(".calc-sector-btn");
    const calcApplyBtn = root.querySelector<HTMLButtonElement>("#calc-apply-btn");

    if (fleetSlider && duesAmount && tierBadge) {
      let activeRate = 450;
      let activeBase = 15000;
      let activeSectorName = "Freight Transport";

      const recalculateDues = () => {
        const isAm = getCurrentLang() === "አማ";
        const count = parseInt(fleetSlider.value, 10) || 1;
        if (fleetDisplay) {
          fleetDisplay.textContent = isAm
            ? `${count} ${count === 1 ? "ተሽከርካሪ" : "ተሽከርካሪዎች"}`
            : `${count} ${count === 1 ? "Vehicle" : "Vehicles"}`;
        }

        const totalDues = activeBase + count * activeRate;
        duesAmount.textContent = totalDues.toLocaleString();

        let tier = isAm ? "ተባባሪ አባል" : "Associate Member";
        let tierClass = "px-3 py-1 rounded-full text-xs font-bold bg-slate-500/20 text-slate-300 border border-slate-400/30";

        if (count > 150) {
          tier = isAm ? "ስልታዊ ጠቅላላ ጉባኤ አባል" : "Strategic Assembly Member";
          tierClass = "px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white border border-white/40";
        } else if (count > 50) {
          tier = isAm ? "ሥራ አስፈፃሚ አባል" : "Executive Member";
          tierClass = "px-3 py-1 rounded-full text-xs font-bold bg-primary-500/30 text-primary-200 border border-primary-400/40";
        } else if (count > 10) {
          tier = isAm ? "ኮርፖሬት አባል" : "Corporate Member";
          tierClass = "px-3 py-1 rounded-full text-xs font-bold bg-primary-500/20 text-primary-300 border border-primary-400/30";
        }

        tierBadge.textContent = tier;
        tierBadge.className = tierClass;
      };

      sectorBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          sectorBtns.forEach((b) => {
            b.className = "calc-sector-btn px-3 py-2.5 rounded-xl border border-white/15 bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white font-medium text-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer backdrop-blur-sm";
          });
          btn.className = "calc-sector-btn active px-3 py-2.5 rounded-xl border border-primary-400 bg-primary-600/95 text-white font-bold text-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer shadow-lg ring-2 ring-primary-400/40";

          activeRate = parseInt(btn.getAttribute("data-rate") || "450", 10);
          activeBase = parseInt(btn.getAttribute("data-base") || "15000", 10);
          activeSectorName = btn.getAttribute("data-sector") || "Freight Transport";
          recalculateDues();
        });
      });

      fleetSlider.addEventListener("input", recalculateDues);

      if (calcApplyBtn) {
        calcApplyBtn.addEventListener("click", () => {
          const isAm = getCurrentLang() === "አማ";
          const count = fleetSlider.value;
          const currentTier = tierBadge.textContent || (isAm ? "ኮርፖሬት አባል" : "Corporate Member");
          const sectorInput = root.querySelector<HTMLInputElement>("#sector");
          const form = root.querySelector<HTMLFormElement>("#membership-form");

          if (sectorInput) {
            sectorInput.value = isAm
              ? `${activeSectorName} (${count} የንግድ ክፍሎች - ${currentTier})`
              : `${activeSectorName} (${count} Commercial Units - ${currentTier})`;
            sectorInput.classList.add("ring-2", "ring-primary-500");
            setTimeout(() => sectorInput.classList.remove("ring-2", "ring-primary-500"), 2000);
          }

          if (form) {
            form.scrollIntoView({ behavior: "smooth", block: "start" });
          }

          showAdminToast(
            isAm
              ? `የተመረጠው ${activeSectorName} ደረጃ በማመልከቻ ቅጹ ላይ ተሞልቷል።`
              : `Selected ${activeSectorName} tier applied to registration form.`
          );
        });
      }
    }

    // Handle Documentation Download Buttons
    const docBtns = root.querySelectorAll<HTMLButtonElement>(".doc-download-btn");
    docBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const isAm = getCurrentLang() === "አማ";
        const docName = btn.getAttribute("data-doc") || (isAm ? "የኢትራአፌ ይፋዊ ሰነድ" : "ETEF Official Documentation");
        showAdminToast(
          isAm
            ? `ሰነድ በማውረድ ላይ፦ "${docName}"...`
            : `Preparing download: "${docName}"...`
        );
        setTimeout(() => {
          showAdminToast(
            isAm
              ? `ሰነዱ ዝግጁ ሆኗል፦ "${docName}"`
              : `Download ready: "${docName}"`
          );
        }, 1200);
      });
    });

    // Handle About Us Directorate Tabs
    const directorateBtns = root.querySelectorAll<HTMLButtonElement>(".directorate-tab-btn");
    directorateBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetDir = btn.getAttribute("data-directorate");
        if (!targetDir) return;

        // Reset all tabs
        directorateBtns.forEach((b) => {
          b.classList.remove("active", "bg-primary-600", "text-white", "shadow-md", "shadow-primary-600/20");
          b.classList.add("bg-slate-100", "text-slate-700", "hover:bg-slate-200");
        });

        // Activate clicked tab
        btn.classList.add("active", "bg-primary-600", "text-white", "shadow-md", "shadow-primary-600/20");
        btn.classList.remove("bg-slate-100", "text-slate-700", "hover:bg-slate-200");

        // Toggle panels
        root.querySelectorAll<HTMLElement>(".directorate-panel").forEach((panel) => {
          panel.classList.add("hidden");
          panel.classList.remove("block");
        });
        const activePanel = root.querySelector<HTMLElement>(`#directorate-panel-${targetDir}`);
        if (activePanel) {
          activePanel.classList.remove("hidden");
          activePanel.classList.add("block");
        }
      });
    });

    // Handle About Us Historical Milestones Timeline
    const timelineBtns = root.querySelectorAll<HTMLButtonElement>(".timeline-year-btn");
    timelineBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetYear = btn.getAttribute("data-year");
        if (!targetYear) return;

        // Reset all timeline buttons
        timelineBtns.forEach((b) => {
          b.classList.remove("active");
          const circle = b.querySelector("span:first-child");
          const label = b.querySelector("span:last-child");
          if (circle) {
            circle.className = "w-12 h-12 rounded-2xl bg-slate-800 text-slate-400 group-hover:text-white flex items-center justify-center font-bold text-sm border-2 border-slate-700 group-hover:border-slate-500 transition-all";
          }
          if (label) {
            label.className = "text-xs font-semibold text-slate-400 group-hover:text-slate-200";
          }
        });

        // Activate clicked button
        btn.classList.add("active");
        const activeCircle = btn.querySelector("span:first-child");
        const activeLabel = btn.querySelector("span:last-child");
        if (activeCircle) {
          activeCircle.className = "w-12 h-12 rounded-2xl bg-primary-600 text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-primary-600/40 border-2 border-primary-400 transition-all";
        }
        if (activeLabel) {
          activeLabel.className = "text-xs font-bold text-primary-300";
        }

        // Toggle cards
        root.querySelectorAll<HTMLElement>(".timeline-content-card").forEach((card) => {
          card.classList.add("hidden");
          card.classList.remove("block");
        });
        const activeCard = root.querySelector<HTMLElement>(`#timeline-card-${targetYear}`);
        if (activeCard) {
          activeCard.classList.remove("hidden");
          activeCard.classList.add("block");
        }
      });
    });

    // Auto-rotating Hero Background Slideshow Setup
    let heroSliderTimer: number | null = null;
    const heroSlides = root.querySelectorAll<HTMLElement>(".hero-bg-slide");
    const heroDots = root.querySelectorAll<HTMLElement>(".hero-slide-dot");
    let currentHeroIndex = 0;

    const showHeroSlide = (index: number) => {
      if (heroSlides.length === 0) return;
      currentHeroIndex = (index + heroSlides.length) % heroSlides.length;
      heroSlides.forEach((slide, i) => {
        if (i === currentHeroIndex) {
          slide.classList.remove("opacity-0", "scale-105");
          slide.classList.add("opacity-100", "scale-100");
        } else {
          slide.classList.remove("opacity-100", "scale-100");
          slide.classList.add("opacity-0", "scale-105");
        }
      });
      heroDots.forEach((dot, i) => {
        if (i === currentHeroIndex) {
          dot.className = "hero-slide-dot w-8 h-2 rounded-full bg-white transition-all duration-300 cursor-pointer shadow-sm";
        } else {
          dot.className = "hero-slide-dot w-2 h-2 rounded-full bg-white/40 hover:bg-white/80 transition-all duration-300 cursor-pointer shadow-sm";
        }
      });
    };

    const nextHeroSlide = () => {
      showHeroSlide(currentHeroIndex + 1);
    };

    const prevHeroSlide = () => {
      showHeroSlide(currentHeroIndex - 1);
    };

    const resetHeroTimer = () => {
      if (heroSliderTimer) clearInterval(heroSliderTimer);
      heroSliderTimer = window.setInterval(nextHeroSlide, 4500);
    };

    if (heroSlides.length > 0) {
      resetHeroTimer();
    }

    // Handle all clicks: routing, admin tabs, FAQ accordion, and mobile menu toggle
    const handleNavigation = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Handle Hero slider controls
      const heroNext = target.closest("#hero-slide-next");
      if (heroNext) {
        event.preventDefault();
        nextHeroSlide();
        resetHeroTimer();
        return;
      }

      const heroPrev = target.closest("#hero-slide-prev");
      if (heroPrev) {
        event.preventDefault();
        prevHeroSlide();
        resetHeroTimer();
        return;
      }

      const heroDot = target.closest<HTMLElement>(".hero-slide-dot");
      if (heroDot) {
        event.preventDefault();
        const dotIndex = Array.from(heroDots).indexOf(heroDot);
        if (dotIndex !== -1) {
          showHeroSlide(dotIndex);
          resetHeroTimer();
        }
        return;
      }

      // Handle FAQ accordion toggle
      const faqHeader = target.closest<HTMLElement>(".faq-accordion-header");
      if (faqHeader) {
        event.preventDefault();
        const item = faqHeader.closest<HTMLElement>(".faq-item");
        if (item) {
          const content = item.querySelector<HTMLElement>(".faq-accordion-content");
          const icon = item.querySelector<HTMLElement>(".faq-icon i");
          if (content) {
            const isHidden = content.classList.contains("hidden");
            if (isHidden) {
              content.classList.remove("hidden");
              if (icon) {
                icon.className = "fa-solid fa-chevron-up text-xs";
              }
            } else {
              content.classList.add("hidden");
              if (icon) {
                icon.className = "fa-solid fa-chevron-down text-xs";
              }
            }
          }
        }
        return;
      }

      // Handle Partner carousel scroll buttons
      const partnerPrev = target.closest("#partner-carousel-prev");
      if (partnerPrev) {
        event.preventDefault();
        const track = document.getElementById("partner-carousel-track");
        if (track) {
          track.scrollBy({ left: -340, behavior: "smooth" });
        }
        return;
      }

      const partnerNext = target.closest("#partner-carousel-next");
      if (partnerNext) {
        event.preventDefault();
        const track = document.getElementById("partner-carousel-track");
        if (track) {
          track.scrollBy({ left: 340, behavior: "smooth" });
        }
        return;
      }

      // Handle Bio modal triggers
      const bioBtn = target.closest<HTMLElement>(".bio-modal-trigger");
      if (bioBtn) {
        event.preventDefault();
        const bioId = bioBtn.getAttribute("data-bio");
        if (bioId) {
          openBioModal(bioId);
        }
        return;
      }

      // Handle Article modal triggers
      const articleBtn = target.closest<HTMLElement>(".article-modal-trigger");
      if (articleBtn) {
        event.preventDefault();
        const articleId = articleBtn.getAttribute("data-article-id");
        if (articleId) {
          openArticleModal(articleId);
        }
        return;
      }

      // Handle Job modal triggers
      const jobBtn = target.closest<HTMLElement>(".job-modal-trigger");
      if (jobBtn) {
        event.preventDefault();
        const jobId = jobBtn.getAttribute("data-job-id");
        if (jobId) {
          openJobModal(jobId);
        }
        return;
      }

      // Handle Talent modal triggers
      const talentBtn = target.closest<HTMLElement>(".talent-modal-trigger");
      if (talentBtn) {
        event.preventDefault();
        openTalentModal();
        return;
      }

      // Handle Language dropdown toggle
      const langBtn = target.closest<HTMLElement>(".lang-dropdown-btn");
      if (langBtn) {
        event.preventDefault();
        const container = langBtn.closest(".lang-dropdown-container");
        const menu = container?.querySelector<HTMLElement>(".lang-dropdown-menu");
        if (menu) {
          menu.classList.toggle("hidden");
        }
        return;
      }

      // Handle Language option select
      const langOption = target.closest<HTMLElement>(".lang-select-option");
      if (langOption) {
        event.preventDefault();
        const selectedLang = (langOption.getAttribute("data-lang") || "").trim() as Lang;
        const langName = langOption.getAttribute("data-lang-name");
        if (selectedLang === "ENG" || selectedLang === "አማ") {
          setCurrentLang(selectedLang);

          // Close all open language dropdowns
          document.querySelectorAll<HTMLElement>(".lang-dropdown-menu").forEach((m) => {
            m.classList.add("hidden");
          });

          // Show confirmation toast
          if (toast && toastMessage) {
            toastMessage.textContent = selectedLang === "ENG" ? "Language switched to English" : "ቋንቋ ወደ አማርኛ ተቀይሯል";
            toast.classList.remove("translate-y-20", "opacity-0");
            setTimeout(() => toast.classList.add("translate-y-20", "opacity-0"), 2500);
          }
        }
        return;
      }

      // Close language dropdown if clicked outside
      if (!target.closest(".lang-dropdown-container")) {
        document.querySelectorAll<HTMLElement>(".lang-dropdown-menu").forEach((m) => {
          m.classList.add("hidden");
        });
      }

      // Handle About & Services dropdown item click (auto-close immediately on selection)
      const subLink = target.closest<HTMLElement>(".about-sub-link, #nav-about-link, .services-sub-link, #nav-services-link");
      if (subLink) {
        const container = subLink.closest<HTMLElement>(".about-dropdown-container, .services-dropdown-container");
        if (container) {
          container.classList.add("menu-closed");
          const menu = container.querySelector<HTMLElement>(".about-dropdown-menu, .services-dropdown-menu");
          if (menu) {
            menu.classList.add("force-hidden");
          }
        }
        (document.activeElement as HTMLElement)?.blur();
      }

      // Close About & Services dropdown if clicked outside
      if (!target.closest(".about-dropdown-container, .services-dropdown-container")) {
        root.querySelectorAll<HTMLElement>(".about-dropdown-container, .services-dropdown-container").forEach((c) => {
          c.classList.add("menu-closed");
          c.querySelector<HTMLElement>(".about-dropdown-menu, .services-dropdown-menu")?.classList.add("force-hidden");
        });
      }

      // Handle admin mobile sidebar drawer toggle
      const adminMobileTrigger = target.closest<HTMLElement>("#admin-mobile-menu-btn, #admin-mobile-close-btn, #admin-mobile-backdrop");
      if (adminMobileTrigger || (location.pathname === "/admin" && target.closest("#admin-mobile-menu-btn"))) {
        event.preventDefault();
        const sidebar = root.querySelector<HTMLElement>("#admin-sidebar");
        const backdrop = root.querySelector<HTMLElement>("#admin-mobile-backdrop");
        if (sidebar && backdrop) {
          const isClosed = sidebar.classList.contains("-translate-x-full");
          if (isClosed) {
            sidebar.classList.remove("-translate-x-full");
            backdrop.classList.remove("hidden");
          } else {
            sidebar.classList.add("-translate-x-full");
            backdrop.classList.add("hidden");
          }
        }
        return;
      }

      // Fixed, accessible off-canvas mobile navigation, independent of icon markup.
      if (location.pathname !== "/admin") {
        const toggle = target.closest<HTMLButtonElement>("#etef-mobile-menu-toggle");
        const close = target.closest("#etef-mobile-close, #etef-mobile-backdrop");
        const existing = document.getElementById("etef-mobile-drawer");
        const dismiss = () => {
          existing?.remove();
          document.getElementById("etef-mobile-backdrop")?.remove();
          document.body.classList.remove("etef-menu-open");
          const button = document.getElementById("etef-mobile-menu-toggle");
          button?.setAttribute("aria-expanded", "false");
          button?.setAttribute("aria-label", "Open navigation");
          button?.querySelector("i")?.setAttribute("class", "fa-solid fa-bars text-2xl");
        };
        if (close || (toggle && existing)) { event.preventDefault(); dismiss(); return; }
        if (toggle) {
          event.preventDefault();
          const t = commonText[getCurrentLang()].nav;
          const sub = t.aboutSub || {history:"History",vision:"Vision & Mission",missionValues:"Core Value",service:"Service"};
          const sSub = t.servicesSub || {vacancies:"Vacancy",partnership:"Partnership",becomeMember:"Become Member",blogs:"Blogs",promotion:"Promotion"};
          const drawer = document.createElement("aside");
          drawer.id = "etef-mobile-drawer";
          drawer.className = "etef-mobile-drawer";
          drawer.setAttribute("aria-label", "Mobile navigation");
          drawer.innerHTML = `
            <div class="etef-drawer-head"><a href="/" class="flex items-center gap-3 font-bold"><img src="/favicon.png" alt="" class="w-10 h-10 object-contain bg-white rounded-full p-0.5 shadow-sm"/><span>ETEF</span></a><button id="etef-mobile-close" aria-label="Close navigation" type="button"><i class="fa-solid fa-xmark text-2xl"></i></button></div>
            <nav class="etef-drawer-links" aria-label="Main menu">
              <a href="/">${t.home}</a>
              <details><summary>${t.about}</summary><div class="etef-drawer-sub"><a href="/about">${t.about}</a><a href="/about#history">${sub.history}</a><a href="/about#vision">${sub.vision}</a><a href="/about#mission-values">${sub.missionValues}</a><a href="/about#services-section">${sub.service}</a></div></details>
              <details><summary>${t.services || 'Services'}</summary><div class="etef-drawer-sub">
                <a href="/vacancies"><i class="fa-solid fa-briefcase mr-1.5 text-xs text-primary-300"></i> ${sSub.vacancies || 'Vacancy'}</a>
                <a href="/partners"><i class="fa-solid fa-handshake mr-1.5 text-xs text-primary-300"></i> ${sSub.partnership || 'Partnership'}</a>
                <a href="/membership"><i class="fa-solid fa-id-card mr-1.5 text-xs text-primary-300"></i> ${sSub.becomeMember || 'Become Member'}</a>
                <a href="/news"><i class="fa-solid fa-newspaper mr-1.5 text-xs text-primary-300"></i> ${sSub.blogs || 'Blogs'}</a>
                <a href="/#promotion"><i class="fa-solid fa-bullhorn mr-1.5 text-xs text-amber-300"></i> ${sSub.promotion || 'Promotion'}</a>
              </div></details>
              <a href="/news">${t.news}</a><a href="/partners">${t.partners}</a><a href="/faq">${t.faq}</a><a href="/contact">${t.contact}</a><a class="etef-drawer-join" href="/membership">${t.join}</a>
            </nav>`;
          const backdrop = document.createElement("button");
          backdrop.id = "etef-mobile-backdrop";
          backdrop.type = "button";
          backdrop.setAttribute("aria-label", "Close navigation");
          root.append(backdrop, drawer);
          document.body.classList.add("etef-menu-open");
          toggle.setAttribute("aria-expanded", "true");
          toggle.setAttribute("aria-label", "Close navigation");
          toggle.querySelector("i")?.setAttribute("class", "fa-solid fa-xmark text-2xl");
          drawer.querySelector<HTMLButtonElement>("#etef-mobile-close")?.focus();
          return;
        }
        if (target.closest("#etef-mobile-drawer a")) dismiss();
      }

      // Check for Promotion Modal Triggers (e.g. View Details button, promotional badge/banner)
      const promoTrigger = target.closest<HTMLElement>(".promo-modal-trigger, #open-promo-modal-btn");
      if (promoTrigger) {
        event.preventDefault();
        openPromotionModal();
        return;
      }

      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Handle admin portal hash tabs
      if (href.startsWith("#") && location.pathname === "/admin") {
        event.preventDefault();
        const tabId = href.replace("#", "").replace("nav-", "");
        if (activateAdminTab) {
          activateAdminTab(tabId);
        }

        // Auto-close mobile sidebar if open
        const sidebar = root.querySelector<HTMLElement>("#admin-sidebar");
        const backdrop = root.querySelector<HTMLElement>("#admin-mobile-backdrop");
        if (sidebar && backdrop) {
          sidebar.classList.add("-translate-x-full");
          backdrop.classList.add("hidden");
        }
        return;
      }

      // Ignore external or protocol links
      if (
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
      ) {
        return;
      }

      // Route internal links without full page reload
      try {
        const url = new URL(anchor.href, window.location.origin);
        if (url.origin === window.location.origin) {
          event.preventDefault();
          const cleanPath = url.pathname.replace(/\.html$/, "") || "/";
          if (cleanPath === location.pathname && url.hash) {
            // Auto-close About & Services dropdown menu immediately
            root.querySelectorAll<HTMLElement>(".about-dropdown-container, .services-dropdown-container").forEach((c) => {
              c.classList.add("menu-closed");
              c.querySelector<HTMLElement>(".about-dropdown-menu, .services-dropdown-menu")?.classList.add("force-hidden");
            });
            (document.activeElement as HTMLElement)?.blur();

            window.history.pushState(null, "", cleanPath + url.search + url.hash);
            try {
              const targetEl = document.querySelector(url.hash);
              if (targetEl) {
                if ((window as any).lenis?.scrollTo) {
                  (window as any).lenis.scrollTo(targetEl, { offset: -80 });
                } else {
                  targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }
            } catch {}
            return;
          }
          navigate(cleanPath + url.search + url.hash);
        }
      } catch {
        if (href.startsWith("/")) {
          event.preventDefault();
          const cleanPath = href.replace(/\.html$/, "");
          navigate(cleanPath);
        }
      }
    };

    root.addEventListener("click", handleNavigation);

    return () => {
      root.removeEventListener("click", handleNavigation);
      if (heroSliderTimer) {
        clearInterval(heroSliderTimer);
      }
      if (faqSearchInput) {
        faqSearchInput.removeEventListener("input", filterFaqs);
      }
    };
  }, [page, lang, pageTitle, pageMarkup, location.pathname, navigate]);

  return React.createElement("div", { id: "page-content" });
}

function App() {
  const routes = pages.map(({ path, page }) =>
    React.createElement(Route, {
      key: path,
      path,
      element: React.createElement(Page, { page }),
    }),
  );

  return React.createElement(
    BrowserRouter,
    null,
    React.createElement(Routes, null, routes),
  );
}

createRoot(document.getElementById("root")!).render(
  React.createElement(React.StrictMode, null, React.createElement(App)),
);
// Escape closes the public mobile drawer without changing desktop navigation.
document.addEventListener("keydown", (event) => { if (event.key === "Escape" && document.getElementById("etef-mobile-drawer")) { document.getElementById("etef-mobile-drawer")?.remove(); document.getElementById("etef-mobile-backdrop")?.remove(); document.body.classList.remove("etef-menu-open"); const btn = document.getElementById("etef-mobile-menu-toggle"); btn?.setAttribute("aria-expanded", "false"); btn?.setAttribute("aria-label", "Open navigation"); btn?.querySelector("i")?.setAttribute("class", "fa-solid fa-bars text-2xl"); btn?.focus(); } });
