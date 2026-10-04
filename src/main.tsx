import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
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
  openCorridorModal,
  openIncidentModal,
  lockBodyScroll,
  unlockBodyScroll,
} from "./modals";
import { Lang, getCurrentLang, setCurrentLang, onLangChange, commonText } from "./i18n";

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
    setupModals();

    const root = document.getElementById("page-content");
    if (!root) return;

    root.innerHTML = pageMarkup;
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

    // If on /admin, initialize default dashboard tab
    if (location.pathname === "/admin") {
      const allTabs = root.querySelectorAll<HTMLElement>('[id^="tab-"]');
      allTabs.forEach((tab) => tab.classList.add("hidden"));
      const dashboardTab = document.getElementById("tab-dashboard");
      if (dashboardTab) dashboardTab.classList.remove("hidden");
    }

    // Set up About dropdown hover reset
    root.querySelectorAll<HTMLElement>(".about-dropdown-container").forEach((container) => {
      const resetMenu = () => {
        container.classList.remove("menu-closed");
        container.querySelector<HTMLElement>(".about-dropdown-menu")?.classList.remove("force-hidden");
      };
      container.addEventListener("mouseleave", resetMenu);
      container.addEventListener("mouseenter", resetMenu);
    });

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

      root.querySelector("#admin-open-member-modal")?.addEventListener("click", () => openModal("admin-modal-member"));
      root.querySelector("#admin-open-vacancy-modal")?.addEventListener("click", () => openModal("admin-modal-vacancy"));
      root.querySelector("#admin-open-news-modal")?.addEventListener("click", () => openModal("admin-modal-news"));
      root.querySelector("#admin-open-partner-modal")?.addEventListener("click", () => openModal("admin-modal-partner"));

      root.querySelectorAll(".admin-modal-close, .admin-modal-backdrop").forEach((el) => {
        el.addEventListener("click", closeAllAdminModals);
      });

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

      // Form 1: New Member Registration Form
      const formNewMember = root.querySelector<HTMLFormElement>("#admin-form-new-member");
      formNewMember?.addEventListener("submit", (e) => {
        e.preventDefault();
        const orgName = (root.querySelector<HTMLInputElement>("#member-org-name")?.value || "").trim();
        const sector = root.querySelector<HTMLSelectElement>("#member-sector")?.value || "Freight";
        const region = (root.querySelector<HTMLInputElement>("#member-region")?.value || "").trim();
        const fleet = (root.querySelector<HTMLInputElement>("#member-fleet")?.value || "").trim();
        const tier = root.querySelector<HTMLSelectElement>("#member-tier")?.value || "Corporate Member";

        const tbody = root.querySelector("#admin-members-table tbody");
        if (tbody && orgName) {
          const newRow = document.createElement("tr");
          newRow.className = "hover:bg-slate-50/50 admin-member-row";
          newRow.setAttribute("data-sector", sector);
          newRow.innerHTML = `
            <td class="py-4 px-6 font-bold text-slate-900">${orgName}</td>
            <td class="py-4 px-6"><span class="px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700">${sector}</span></td>
            <td class="py-4 px-6 text-slate-600">${region || "Addis Ababa"}</td>
            <td class="py-4 px-6 font-semibold text-slate-900">${fleet || "N/A"}</td>
            <td class="py-4 px-6"><span class="text-xs font-semibold text-primary-700">${tier}</span></td>
            <td class="py-4 px-6"><span class="px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Active</span></td>
            <td class="py-4 px-6 text-right">
                <button class="px-2.5 py-1 text-slate-600 hover:text-primary-600 font-medium text-xs rounded hover:bg-slate-100 transition-colors">Details</button>
            </td>
          `;
          tbody.prepend(newRow);
          formNewMember.reset();
          closeAllAdminModals();
          showAdminToast(`Member "${orgName}" registered successfully!`);
        }
      });

      // Form 2: New Career Vacancy Form
      const formNewVacancy = root.querySelector<HTMLFormElement>("#admin-form-new-vacancy");
      formNewVacancy?.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = (root.querySelector<HTMLInputElement>("#vacancy-title")?.value || "").trim();
        const station = (root.querySelector<HTMLInputElement>("#vacancy-station")?.value || "").trim();
        const type = root.querySelector<HTMLSelectElement>("#vacancy-type")?.value || "Full-Time";
        const deadline = (root.querySelector<HTMLInputElement>("#vacancy-deadline")?.value || "").trim();

        const tbody = root.querySelector("#admin-vacancies-table tbody");
        if (tbody && title) {
          const newRow = document.createElement("tr");
          newRow.className = "hover:bg-slate-50/50";
          newRow.innerHTML = `
            <td class="py-4 px-6 font-bold text-slate-900">${title}</td>
            <td class="py-4 px-6 text-slate-600">${station}</td>
            <td class="py-4 px-6"><span class="px-2 py-0.5 rounded text-xs bg-slate-100 text-slate-700">${type}</span></td>
            <td class="py-4 px-6 font-bold text-primary-600">0 Candidates</td>
            <td class="py-4 px-6 text-slate-500">${deadline}</td>
            <td class="py-4 px-6"><span class="vacancy-status-pill px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Active</span></td>
            <td class="py-4 px-6 text-right space-x-2">
                <button class="admin-vacancy-toggle-btn px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded transition-colors">Close</button>
            </td>
          `;
          tbody.prepend(newRow);
          formNewVacancy.reset();
          closeAllAdminModals();
          showAdminToast(`Vacancy "${title}" published!`);
        }
      });

      // Form 3: New Article / News Form
      const formNewNews = root.querySelector<HTMLFormElement>("#admin-form-new-news");
      formNewNews?.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = (root.querySelector<HTMLInputElement>("#news-title")?.value || "").trim();
        const category = root.querySelector<HTMLSelectElement>("#news-category")?.value || "Industry News";
        const status = root.querySelector<HTMLSelectElement>("#news-status")?.value || "Published";

        const tbody = root.querySelector("#admin-news-table tbody");
        if (tbody && title) {
          const newRow = document.createElement("tr");
          newRow.className = "hover:bg-slate-50/50";
          const isPublished = status === "Published";
          newRow.innerHTML = `
            <td class="py-4 px-6 font-bold text-slate-900 max-w-xs truncate">${title}</td>
            <td class="py-4 px-6"><span class="px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700">${category}</span></td>
            <td class="py-4 px-6 text-slate-500">Today</td>
            <td class="py-4 px-6 font-semibold text-slate-700">0 views</td>
            <td class="py-4 px-6"><span class="px-2.5 py-1 ${isPublished ? "bg-primary-50 text-primary-700" : "bg-slate-100 text-slate-600"} text-xs font-bold rounded-full">${status}</span></td>
            <td class="py-4 px-6 text-right space-x-2">
                <button class="admin-news-status-btn px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded transition-colors">${isPublished ? "Unpublish" : "Publish"}</button>
            </td>
          `;
          tbody.prepend(newRow);
          formNewNews.reset();
          closeAllAdminModals();
          showAdminToast(`Article "${title.slice(0, 30)}..." saved!`);
        }
      });

      // Form 4: New Partner / Sponsor Form
      const formNewPartner = root.querySelector<HTMLFormElement>("#admin-form-new-partner");
      formNewPartner?.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = (root.querySelector<HTMLInputElement>("#partner-name")?.value || "").trim();
        const sector = (root.querySelector<HTMLInputElement>("#partner-sector")?.value || "").trim();
        const tier = root.querySelector<HTMLSelectElement>("#partner-tier")?.value || "Tier 1 Partner";
        const desc = (root.querySelector<HTMLInputElement>("#partner-desc")?.value || "").trim();

        const grid = root.querySelector("#admin-partners-grid");
        if (grid && name) {
          const newCard = document.createElement("div");
          newCard.className = "bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between";
          newCard.innerHTML = `
            <div>
                <div class="flex justify-between items-start mb-3">
                    <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-primary-50 text-primary-700 border border-primary-100">${tier}</span>
                    <span class="text-xs font-semibold text-primary-600 flex items-center gap-1"><i class="fa-solid fa-circle-check"></i> Active</span>
                </div>
                <h4 class="font-bold text-slate-900 text-base mb-1">${name}</h4>
                <p class="text-xs text-slate-500 mb-3">${sector}</p>
                <p class="text-xs text-slate-600 leading-relaxed mb-4">${desc || "Official strategic partnership and institutional accord."}</p>
            </div>
            <div class="pt-3 border-t border-slate-100 flex justify-between items-center text-xs">
                <span class="text-slate-400">Added Today</span>
                <button class="text-slate-600 hover:text-primary-600 font-semibold">Edit Agreement</button>
            </div>
          `;
          grid.prepend(newCard);
          formNewPartner.reset();
          closeAllAdminModals();
          showAdminToast(`Partner "${name}" added!`);
        }
      });
    }

    // Set up Admin Membership actions
    const adminActionBtns = root.querySelectorAll<HTMLButtonElement>("#tab-dashboard table button");
    adminActionBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const row = btn.closest("tr");
        const action = btn.textContent?.trim();
        if (!row || !action) return;

        const statusCell = row.querySelector("td:nth-child(5)");
        const actionsCell = row.querySelector("td:nth-child(6)");

        if (action === "Approve") {
          if (statusCell) {
            statusCell.innerHTML = '<span class="px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Approved</span>';
          }
          if (actionsCell) {
            actionsCell.innerHTML = '<button class="px-3 py-1 bg-slate-100 text-slate-700 font-semibold rounded hover:bg-slate-200 transition-colors">View</button>';
          }
          showAdminToast("Membership application approved successfully.");
        } else if (action === "Reject") {
          if (statusCell) {
            statusCell.innerHTML = '<span class="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-full">Rejected</span>';
          }
          if (actionsCell) {
            actionsCell.innerHTML = '<button class="px-3 py-1 bg-slate-100 text-slate-700 font-semibold rounded hover:bg-slate-200 transition-colors">Re-evaluate</button>';
          }
          showAdminToast("Membership application rejected.");
        }
      });
    });

    // Admin vacancy toggle button
    root.querySelectorAll<HTMLButtonElement>(".admin-vacancy-toggle-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const row = btn.closest("tr");
        const pill = row?.querySelector<HTMLElement>(".vacancy-status-pill");
        if (pill) {
          const isCurrentlyActive = pill.textContent?.trim().toLowerCase() === "active";
          if (isCurrentlyActive) {
            pill.textContent = "Closed";
            pill.className = "vacancy-status-pill px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full";
            btn.textContent = "Reopen";
            showAdminToast("Vacancy status set to Closed");
          } else {
            pill.textContent = "Active";
            pill.className = "vacancy-status-pill px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200/60";
            btn.textContent = "Close";
            showAdminToast("Vacancy status reopened as Active");
          }
        }
      });
    });

    // Admin news publish/unpublish toggle button
    root.querySelectorAll<HTMLButtonElement>(".admin-news-status-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const row = btn.closest("tr");
        const pill = row?.querySelector<HTMLElement>("td:nth-child(5) span");
        if (pill) {
          const isPublished = pill.textContent?.trim().toLowerCase() === "published";
          if (isPublished) {
            pill.textContent = "Draft";
            pill.className = "px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full";
            btn.textContent = "Publish";
            btn.className = "admin-news-status-btn px-3 py-1 bg-primary-50 hover:bg-primary-100 text-primary-700 text-xs font-bold rounded-lg transition-colors cursor-pointer";
            showAdminToast("Article moved to Drafts");
          } else {
            pill.textContent = "Published";
            pill.className = "px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200/60";
            btn.textContent = "Unpublish";
            btn.className = "admin-news-status-btn px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer";
            showAdminToast("Article published successfully");
          }
        }
      });
    });

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
            b.className = "calc-sector-btn px-3 py-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-white font-medium text-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer";
          });
          btn.className = "calc-sector-btn active px-3 py-2.5 rounded-xl border border-primary-400 bg-primary-600 text-white font-bold text-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer shadow-sm";

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

      // Handle Corridor advisory modal triggers
      const corridorBtn = target.closest<HTMLElement>(".corridor-advisory-btn");
      if (corridorBtn) {
        event.preventDefault();
        const corridorId = corridorBtn.getAttribute("data-corridor-id");
        if (corridorId) {
          openCorridorModal(corridorId);
        }
        return;
      }

      // Handle Emergency Corridor Incident Report modal trigger
      const incidentBtn = target.closest<HTMLElement>("#btn-corridor-incident-report");
      if (incidentBtn) {
        event.preventDefault();
        openIncidentModal();
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

      // Handle About dropdown item click (auto-close immediately on selection)
      const aboutLink = target.closest<HTMLElement>(".about-sub-link, #nav-about-link");
      if (aboutLink) {
        const container = aboutLink.closest<HTMLElement>(".about-dropdown-container");
        if (container) {
          container.classList.add("menu-closed");
          const menu = container.querySelector<HTMLElement>(".about-dropdown-menu");
          if (menu) {
            menu.classList.add("force-hidden");
          }
        }
        (document.activeElement as HTMLElement)?.blur();
      }

      // Close About dropdown if clicked outside
      if (!target.closest(".about-dropdown-container")) {
        root.querySelectorAll<HTMLElement>(".about-dropdown-container").forEach((c) => {
          c.classList.add("menu-closed");
          c.querySelector<HTMLElement>(".about-dropdown-menu")?.classList.add("force-hidden");
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

      // Handle public mobile hamburger button clicks
      if (location.pathname !== "/admin") {
        const mobileBtn = target.closest("button");
        if (mobileBtn && mobileBtn.querySelector(".fa-bars, .fa-xmark")) {
          const existingDrawer = document.getElementById("etef-mobile-drawer");
          if (existingDrawer) {
            existingDrawer.remove();
            const icon = mobileBtn.querySelector("i");
            if (icon) {
              icon.className = "fa-solid fa-bars text-2xl";
            }
          } else {
            const header = root.querySelector("header");
            if (header) {
              const currentL = getCurrentLang();
              const t = commonText[currentL].nav;
              const drawer = document.createElement("div");
              drawer.id = "etef-mobile-drawer";
              drawer.className =
                "md:hidden bg-primary-700 text-white px-6 py-5 border-t border-primary-500/30 flex flex-col space-y-2 shadow-lg";
              const subL = t.aboutSub || {
                history: "History",
                vision: "Vision & Mission",
                missionValues: "Core Value",
                service: "Service",
              };
              drawer.innerHTML = `
                <a href="/" class="py-2 text-white font-medium hover:text-primary-100 transition-colors">${t.home}</a>
                <div class="flex flex-col">
                  <a href="/about" class="py-2 text-white font-medium hover:text-primary-100 transition-colors flex items-center justify-between">
                    <span>${t.about}</span>
                  </a>
                  <div class="pl-4 flex flex-col space-y-2 pb-2 text-xs text-blue-100 border-l border-white/25 ml-2 mt-1">
                    <a href="/about#history" class="hover:text-white py-1 transition-colors flex items-center gap-2">
                      <i class="fa-solid fa-landmark text-[11px] text-blue-200"></i> ${subL.history}
                    </a>
                    <a href="/about#vision" class="hover:text-white py-1 transition-colors flex items-center gap-2">
                      <i class="fa-solid fa-eye text-[11px] text-blue-200"></i> ${subL.vision}
                    </a>
                    <a href="/about#mission-values" class="hover:text-white py-1 transition-colors flex items-center gap-2">
                      <i class="fa-solid fa-bullseye text-[11px] text-blue-200"></i> ${subL.missionValues}
                    </a>
                    <a href="/about#services-section" class="hover:text-white py-1 transition-colors flex items-center gap-2">
                      <i class="fa-solid fa-handshake-angle text-[11px] text-blue-200"></i> ${subL.service}
                    </a>
                  </div>
                </div>
                <a href="/news" class="py-2 text-white font-medium hover:text-primary-100 transition-colors">${t.news}</a>
                <a href="/vacancies" class="py-2 text-white font-medium hover:text-primary-100 transition-colors">${t.vacancies}</a>
                <a href="/partners" class="py-2 text-white font-medium hover:text-primary-100 transition-colors">${t.partners}</a>
                <a href="/faq" class="py-2 text-white font-medium hover:text-primary-100 transition-colors">${t.faq}</a>
                <a href="/contact" class="py-2 text-white font-medium hover:text-primary-100 transition-colors">${t.contact}</a>
                <a href="/membership" class="mt-2 text-center py-2.5 px-4 bg-white text-primary-600 rounded-lg font-bold shadow-sm">${t.join}</a>
              `;
              header.insertAdjacentElement("afterend", drawer);
              const icon = mobileBtn.querySelector("i");
              if (icon) {
                icon.className = "fa-solid fa-xmark text-2xl";
              }
            }
          }
          return;
        }
      }

      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Close mobile drawer if an internal link inside it is clicked
      const insideMobileDrawer = anchor.closest("#etef-mobile-drawer");
      if (insideMobileDrawer) {
        insideMobileDrawer.remove();
        const header = root.querySelector("header");
        const hamburgerIcon = header?.querySelector(".fa-xmark");
        if (hamburgerIcon) {
          hamburgerIcon.className = "fa-solid fa-bars text-2xl";
        }
      }

      // Handle admin portal hash tabs
      if (href.startsWith("#") && location.pathname === "/admin") {
        event.preventDefault();
        const tabId = href.replace("#", "").replace("nav-", "");
        const targetTab = document.getElementById(`tab-${tabId}`);
        if (targetTab) {
          const allTabs = root.querySelectorAll<HTMLElement>('[id^="tab-"]');
          allTabs.forEach((tab) => tab.classList.add("hidden"));
          targetTab.classList.remove("hidden");

          const navItems = root.querySelectorAll("aside nav a");
          navItems.forEach((link) => {
            link.classList.remove("bg-primary-600", "text-white", "font-semibold", "shadow-sm");
            link.classList.add("text-slate-400", "hover:text-slate-100", "hover:bg-slate-800/60");
          });
          anchor.classList.add("bg-primary-600", "text-white", "font-semibold", "shadow-sm");
          anchor.classList.remove("text-slate-400", "hover:text-slate-100", "hover:bg-slate-800/60");

          const pageTitle = root.querySelector("#pageTitle");
          if (pageTitle) {
            const titles: Record<string, string> = {
              dashboard: "Admin Overview",
              memberships: "Membership Management",
              vacancies: "Job Vacancies Management",
              news: "News & Media Management",
              partners: "Partners & Sponsors",
            };
            pageTitle.textContent = titles[tabId] || "Secretariat Portal";
          }

          // Auto-close mobile sidebar if open
          const sidebar = root.querySelector<HTMLElement>("#admin-sidebar");
          const backdrop = root.querySelector<HTMLElement>("#admin-mobile-backdrop");
          if (sidebar && backdrop) {
            sidebar.classList.add("-translate-x-full");
            backdrop.classList.add("hidden");
          }
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
            // Auto-close About dropdown menu immediately
            root.querySelectorAll<HTMLElement>(".about-dropdown-container").forEach((c) => {
              c.classList.add("menu-closed");
              c.querySelector<HTMLElement>(".about-dropdown-menu")?.classList.add("force-hidden");
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