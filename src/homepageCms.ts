// Homepage content is loaded from the public API; editing requires an authenticated server session.
// Use the same-origin Vite proxy locally; set an explicit API origin for separately hosted production deployments.
import {
  adminStore,
  HeroItem,
  ServiceItem,
  NewsItem,
  VacancyItem,
  PartnerItem,
  FaqItem,
  MemberItem,
  ContentSettings,
} from './adminStore';

const API = (import.meta.env.VITE_API_BASE_URL || '/api/v1').replace(/\/$/, '');

export type Block = {
  title: string;
  intro?: string;
  subtitle?: string;
  items?: { title: string; description?: string; logo?: string }[];
};

const escapeHtml = (s: unknown) =>
  String(s ?? '').replace(
    /[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] || c)
  );

export const fallback: Record<string, Block> = {
  hero: {
    title: "A stronger voice for Ethiopia's transport employers.",
    subtitle:
      'Connecting transport employers, protecting member interests and supporting a stronger, sustainable and peaceful transport industry.',
  },
  coverage: {
    title: 'Comprehensive Transport Sub-Sector Coverage',
    intro: 'Representing commercial freight, passenger transit, multimodal logistics, and city transport operators.',
  },
  services: {
    title: 'Our Services',
    intro: 'Working together for a stronger, more resilient transport industry.',
    items: [
      {
        title: 'Legal Representation & Court Defense',
        description:
          'Defending member transport employers before judicial courts, tribunals, and ministerial arbitration boards.',
      },
      {
        title: 'Collective Bargaining & Labor Conciliation',
        description:
          'Structured negotiations under Proclamation 1156/2012 fostering workplace stability and commercial viability.',
      },
      {
        title: 'Strategic Trade Corridor Watch',
        description:
          '24/7 telematics, dwell-time tracking, and emergency breakdown coordination across Djibouti, Modjo, and Moyale corridors.',
      },
      {
        title: 'Executive Training & Capacity Building',
        description:
          'Accredited curriculum in fleet telematics, commercial defensive driving, cold-chain operations, and HAZMAT safety.',
      },
      {
        title: 'Policy Reform & Tariff Modernization',
        description:
          'Empirical rate advocacy, tariff reviews with federal commissions, and import duty relief on spare parts.',
      },
      {
        title: 'Cross-Border Transit Protocols',
        description:
          'Reciprocal bilateral transit permits, COMESA Yellow Card insurance, and harmonized axle-load standards.',
      },
    ],
  },
  partners: {
    title: 'Our Partners',
    intro: 'Strategic institutional and commercial partners driving Ethiopia’s transport sector forward.',
    items: [
      { title: 'Commercial Bank of Ethiopia', logo: '/images/partner_cbe.svg' },
      { title: 'Ethiopian Roads Administration', logo: '/images/partner_era.png' },
      { title: 'Ministry of Transport and Logistics', logo: '/images/partner_mot.png' },
      { title: 'Addis Ababa Transport Bureau', logo: '/images/partner_aartb.png' },
      { title: 'Oromia Freight Transporters', logo: '/images/partner_oromia_freight.png' },
    ],
  },
  faq: {
    title: 'Frequently Asked Questions',
    intro:
      'Find authoritative answers regarding ETEF membership criteria, policy and regulatory advocacy,  and transport sector services.',
    items: [
      {
        title: 'What is ETEF and what is its statutory mandate?',
        description:
          'The Ethiopian Transport Employers Federation (ETEF) is the apex federation representing commercial transport employers, freight carriers, passenger transit operators, and regional associations across Ethiopia under FDRE Constitution Article 31 and Labor Proclamation No. 1156/2012.',
      },
      {
        title: 'Who is eligible to join ETEF and what are the member tiers?',
        description:
          'Membership is open to commercial dry and liquid cargo associations, cross-country passenger bus fleets, city transit operators, multimodal logistics providers, and private fleet enterprises.',
      },
      {
        title: 'What legal protection and court advocacy does ETEF provide to members?',
        description:
          'ETEF maintains an experienced Legal Directorate providing direct representation before federal and regional judicial courts, administrative tribunals, and arbitration boards.',
      },
      {
        title: 'How does ETEF monitor strategic trade corridors like Djibouti–Addis Ababa?',
        description:
          'Our Corridor Watch Directorate operates 24/7 monitoring across four vital trade corridors: Djibouti–Addis Ababa, Modjo Dry Port, Moyale–Lamu, and Berbera–Dire Dawa.',
      },
      {
        title: 'How are collective bargaining agreements (CBAs) negotiated?',
        description:
          'Under Labor Proclamation No. 1156/2012, ETEF serves as the authorized employer representative in negotiations with transport labor syndicates.',
      },
      {
        title: 'How does ETEF advocate regarding fuel subsidies, tariffs, and taxation?',
        description:
          'ETEF participates actively in national tariff review commissions and Ministry of Transport task forces advocating for fair freight rates and spare parts relief.',
      },
      {
        title: 'What professional training and capacity-building programs are available?',
        description:
          'Through our Training and Research Institute, ETEF delivers accredited modules in defensive commercial driving, fleet telematics management, and HAZMAT safety.',
      },
    ],
  },
};

async function api(path: string, init: RequestInit = {}) {
  let r: Response;
  try {
    r = await fetch(API + path, { credentials: 'include', ...init });
  } catch {
    throw new Error('Cannot reach API. Check network or backend server.');
  }
  const contentType = r.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    throw new Error(`API returned ${r.status}.`);
  }
  const json = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(json.message || `Request failed (${r.status})`);
  return json;
}

// ============================================================================
// PUBLIC HOMEPAGE RENDERER
// ============================================================================

export async function renderHomeCms(root: HTMLElement) {
  const mount = root.querySelector<HTMLElement>('#homepage-cms-sections');
  if (!mount) return;

  const publishedServices = adminStore.getServices().filter((s) => s.status === 'Published');
  const serviceItems = publishedServices.length > 0
    ? publishedServices.map((s) => ({ title: s.title, description: s.description }))
    : fallback.services.items || [];

  const activePartners = adminStore.getPartners().filter((p) => p.status !== 'Draft');
  const partnerItems = activePartners.length > 0
    ? activePartners.map((p) => ({ title: p.name, logo: p.logo }))
    : fallback.partners.items || [];

  const publishedFaqs = adminStore.getFaqs().filter((f) => f.status === 'Published');
  const faqItems = publishedFaqs.length > 0
    ? publishedFaqs.map((f) => ({ title: f.question, description: f.answer }))
    : fallback.faq.items || [];

  const service = { ...fallback.services, items: serviceItems };
  const partners = { ...fallback.partners, items: partnerItems };
  const faq = { ...fallback.faq, items: faqItems };

  mount.innerHTML = `
    <!-- Services Section -->
    <section id="home-services" class="py-20 bg-slate-50 border-t border-slate-200/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-14">
          <span class="text-xs font-bold text-primary-600 uppercase tracking-wider bg-primary-50 px-3.5 py-1.5 rounded-full border border-primary-100 inline-block mb-3">
            Federation Services
          </span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">${escapeHtml(service.title)}</h2>
          <p class="text-slate-600 text-base mt-3 leading-relaxed">${escapeHtml(
            service.intro || 'Comprehensive support and representation for transport employers.'
          )}</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          ${(service.items || [])
            .map(
              (item, idx) => `
            <article class="etef-service-card rounded-2xl border border-slate-200/80 bg-white p-7 shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
              <div class="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-5 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300 shadow-xs">
                <i class="${
                  idx === 0
                    ? 'fa-solid fa-scale-balanced'
                    : idx === 1
                    ? 'fa-solid fa-gavel'
                    : idx === 2
                    ? 'fa-solid fa-satellite-dish'
                    : idx === 3
                    ? 'fa-solid fa-graduation-cap'
                    : idx === 4
                    ? 'fa-solid fa-coins'
                    : 'fa-solid fa-earth-africa'
                }"></i>
              </div>
              <h3 class="font-bold text-slate-900 text-lg mb-3 group-hover:text-primary-700 transition-colors">${escapeHtml(
                item.title
              )}</h3>
              <p class="text-sm leading-relaxed text-slate-600 font-normal">${escapeHtml(item.description)}</p>
            </article>`
            )
            .join('')}
        </div>
      </div>
    </section>

    <!-- Partners Section with Auto-Spinning Ticker -->
    <section id="home-partners" class="py-20 bg-white overflow-hidden border-t border-slate-200/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <span class="text-xs font-bold text-primary-600 uppercase tracking-wider bg-primary-50 px-3.5 py-1.5 rounded-full border border-primary-100 inline-block mb-3">
            Collaborative Ecosystem
          </span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">${escapeHtml(partners.title)}</h2>
          <p class="text-slate-600 text-base mt-3 leading-relaxed">${escapeHtml(
            partners.intro || 'Organizations working collaboratively across Ethiopia’s commercial transport network.'
          )}</p>
        </div>
        <div class="etef-logo-marquee" aria-label="Partner organizations">
          <div class="etef-logo-track">
            ${[0, 1]
              .map(
                (index) =>
                  `<div class="etef-logo-group" ${index ? 'aria-hidden="true"' : ''}>` +
                  (partners.items || [])
                    .map(
                      (item) => `
                        <div class="etef-logo-item" ${index ? 'aria-hidden="true"' : ''} title="${escapeHtml(item.title)}">
                          <div class="etef-logo-thumb">
                            <img loading="lazy" src="${escapeHtml(
                              item.logo || '/favicon.png'
                            )}" alt="${escapeHtml(item.title)}" onerror="this.src='/favicon.png'"/>
                          </div>
                        </div>`
                    )
                    .join('') +
                  `</div>`
              )
              .join('')}
          </div>
        </div>
      </div>
    </section>

    <!-- Two-Column Interactive FAQ Section -->
    <section id="home-faq" class="py-20 bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 border-t border-slate-200/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          <div class="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-primary-50 text-primary-700 border border-primary-100">
              <i class="fa-solid fa-circle-question text-primary-600"></i>
              <span>Federation Knowledge Desk</span>
            </div>

            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              ${escapeHtml(faq.title || 'Frequently Asked Questions')}
            </h2>

            <p class="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              Find authoritative answers regarding ETEF membership criteria, policy and regulatory advocacy,  and transport sector services.
            </p>

            <div>
              <a href="/faq#inquiry-form" id="faq-see-more-btn" class="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-bold text-sm text-white shadow-lg shadow-primary-600/30 hover:shadow-primary-600/50 bg-gradient-to-r from-primary-600 via-blue-600 to-indigo-600 hover:from-primary-500 hover:to-indigo-500 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer border border-white/20">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping shrink-0"></span>
                <span>If you do not find your question — See More</span>
                <i class="fa-solid fa-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-1.5 text-white/90"></i>
              </a>
            </div>
          </div>

          <div class="lg:col-span-7 space-y-3.5" id="home-faq-accordions">
            <div class="flex items-center justify-between pb-2 border-b border-slate-200/80 mb-2">
              <span class="text-xs font-bold uppercase tracking-wider text-slate-500">
                Frequently Asked Transport Questions
              </span>
              <span class="text-xs font-bold text-primary-700 bg-primary-50 px-2.5 py-0.5 rounded-full border border-primary-100">
                7 Core Q&amp;A
              </span>
            </div>

            ${(faq.items || [])
              .slice(0, 7)
              .map(
                (item, idx) => `
                <details class="etef-faq-card group bg-white border border-slate-200/90 hover:border-primary-300 rounded-xl p-5 shadow-xs hover:shadow-md transition-all duration-200" ${
                  idx === 0 ? 'open' : ''
                }>
                  <summary class="cursor-pointer font-bold text-slate-900 list-none flex items-center justify-between gap-4 select-none">
                    <div class="flex items-center gap-3.5">
                      <span class="w-8 h-8 rounded-lg bg-primary-50 text-primary-700 font-mono text-xs font-extrabold flex items-center justify-center shrink-0 border border-primary-100/80 group-open:bg-primary-600 group-open:text-white transition-colors">
                        ${String(idx + 1).padStart(2, '0')}
                      </span>
                      <span class="text-sm sm:text-base text-slate-900 group-open:text-primary-700 transition-colors">
                        ${escapeHtml(item.title)}
                      </span>
                    </div>
                    <span class="w-8 h-8 rounded-full bg-slate-100 text-slate-500 group-hover:bg-primary-50 group-hover:text-primary-600 flex items-center justify-center shrink-0 transition-transform duration-300 group-open:rotate-180">
                      <i class="fa-solid fa-chevron-down text-xs"></i>
                    </span>
                  </summary>
                  <div class="mt-4 pt-3.5 border-t border-slate-100 text-slate-600 text-xs sm:text-sm leading-relaxed pl-11 font-normal">
                    ${escapeHtml(item.description)}
                  </div>
                </details>`
              )
              .join('')}
          </div>

        </div>
      </div>
    </section>
  `;
}

// ============================================================================
// IMAGE FILE UPLOAD COMPONENT (Human-Centered File Uploader with Live Preview)
// ============================================================================

function renderImageUploadInput(
  id: string,
  label: string,
  currentVal: string = '',
  presetOptions: { label: string; value: string }[] = []
) {
  return `
    <div class="image-upload-component space-y-1.5" data-field-id="${id}">
      <div class="flex items-center justify-between">
        <label class="block text-xs font-semibold text-slate-800">${escapeHtml(label)}</label>
        ${
          presetOptions.length > 0
            ? `
          <select class="image-preset-picker text-[11px] text-primary-600 bg-transparent border-none cursor-pointer focus:outline-none hover:underline font-medium">
            <option value="">Or choose preset...</option>
            ${presetOptions
              .map(
                (p) => `<option value="${escapeHtml(p.value)}">${escapeHtml(p.label)}</option>`
              )
              .join('')}
          </select>`
            : ''
        }
      </div>

      <div class="image-drop-area relative border border-dashed border-slate-300 hover:border-primary-600 rounded-xl p-3 bg-slate-50/70 hover:bg-primary-50/20 transition-all text-center cursor-pointer group">
        <input type="file" accept="image/*" class="image-file-control absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
        <input type="hidden" name="${id}" class="image-hidden-input" value="${escapeHtml(currentVal)}" />

        <div class="image-preview-state ${currentVal ? '' : 'hidden'} flex items-center gap-3">
          <img src="${escapeHtml(
            currentVal || '/favicon.png'
          )}" class="image-preview-thumb w-12 h-12 object-cover rounded-lg border border-slate-200 bg-white shadow-2xs shrink-0" onerror="this.src='/favicon.png'"/>
          <div class="text-left flex-1 min-w-0">
            <p class="text-xs font-semibold text-slate-800 truncate image-file-label">Image attached</p>
            <p class="text-[11px] text-primary-600 font-medium mt-0.5">Click to replace image</p>
          </div>
          <button type="button" class="image-clear-btn z-20 w-7 h-7 rounded-lg hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer" title="Remove image">
            <i class="fa-solid fa-xmark text-xs"></i>
          </button>
        </div>

        <div class="image-empty-state ${currentVal ? 'hidden' : ''} py-2.5">
          <i class="fa-solid fa-cloud-arrow-up text-lg text-slate-400 group-hover:text-primary-600 transition-colors mb-1 block"></i>
          <p class="text-xs font-medium text-slate-700">
            <span class="text-primary-600 font-semibold">Upload an image file</span> or drag and drop
          </p>
          <p class="text-[10px] text-slate-400 mt-0.5">PNG, JPG, WebP</p>
        </div>
      </div>
    </div>
  `;
}

function initImageUploaders(container: HTMLElement) {
  container.querySelectorAll<HTMLElement>('.image-upload-component').forEach((comp) => {
    const fileInput = comp.querySelector<HTMLInputElement>('.image-file-control');
    const hiddenInput = comp.querySelector<HTMLInputElement>('.image-hidden-input');
    const previewState = comp.querySelector<HTMLElement>('.image-preview-state');
    const emptyState = comp.querySelector<HTMLElement>('.image-empty-state');
    const previewThumb = comp.querySelector<HTMLImageElement>('.image-preview-thumb');
    const fileLabel = comp.querySelector<HTMLElement>('.image-file-label');
    const clearBtn = comp.querySelector<HTMLButtonElement>('.image-clear-btn');
    const presetPicker = comp.querySelector<HTMLSelectElement>('.image-preset-picker');

    if (!fileInput || !hiddenInput || !previewState || !emptyState || !previewThumb) return;

    fileInput.addEventListener('change', () => {
      const file = fileInput.files?.[0];
      if (file) {
        if (file.size > 8 * 1024 * 1024) {
          alert('Image file is too large (max 8MB).');
          return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result as string;
          hiddenInput.value = result;
          previewThumb.src = result;
          if (fileLabel) fileLabel.textContent = file.name;
          previewState.classList.remove('hidden');
          emptyState.classList.add('hidden');
        };
        reader.readAsDataURL(file);
      }
    });

    clearBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      fileInput.value = '';
      hiddenInput.value = '';
      previewThumb.src = '';
      previewState.classList.add('hidden');
      emptyState.classList.remove('hidden');
      if (presetPicker) presetPicker.value = '';
    });

    presetPicker?.addEventListener('change', () => {
      if (presetPicker.value) {
        hiddenInput.value = presetPicker.value;
        previewThumb.src = presetPicker.value;
        if (fileLabel) fileLabel.textContent = presetPicker.options[presetPicker.selectedIndex].text;
        previewState.classList.remove('hidden');
        emptyState.classList.add('hidden');
      }
    });
  });
}

// ============================================================================
// LOGIN SCREEN (Clean, Modern, Monochromatic + Primary Blue)
// ============================================================================

export const loginMarkup = `
<section class="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-900">
  <div class="w-full max-w-sm bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
    <form id="cms-login-form">
      <div class="text-center mb-6">
        <img src="/favicon.png" alt="ETEF Logo" class="w-14 h-14 mx-auto mb-3 object-contain" />
        <h1 class="text-xl font-bold text-slate-900 tracking-tight">ETEF Admin</h1>
        <p class="text-slate-500 text-xs mt-1">Sign in to manage website content</p>
      </div>

      <div class="space-y-4">
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">Email</label>
          <input name="email" type="email" required autocomplete="username" value="admin@etef.com" class="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition-all font-medium" />
        </div>

        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">Password</label>
          <input name="password" type="password" required autocomplete="current-password" placeholder="Admin@12345678" class="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition-all" />
        </div>
      </div>

      <div id="cms-login-error" class="text-slate-800 text-xs font-semibold mt-3 min-h-[1.25rem] text-center" role="alert"></div>

      <button id="cms-login-btn" type="submit" class="w-full mt-2 bg-primary-600 hover:bg-primary-700 text-white rounded-xl py-2.5 font-semibold text-xs shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer">
        <span class="btn-text">Sign In</span>
        <span class="btn-spinner hidden"><i class="fa-solid fa-circle-notch fa-spin"></i> Signing in...</span>
      </button>

      <div class="mt-6 pt-4 border-t border-slate-200 text-center">
        <a href="/" class="text-xs text-slate-500 hover:text-primary-600 transition-colors">
          Return to website
        </a>
      </div>
    </form>
  </div>
</section>
`;

// ============================================================================
// MODERN ADMIN PANEL LAYOUT (Sidebar + Content Workspace)
// ============================================================================

export const adminCmsMarkup = `
<div id="etef-admin-console" class="min-h-screen bg-slate-50 text-slate-900 flex font-sans antialiased">
  
  <!-- Left Sidebar Navigation -->
  <aside id="admin-sidebar" class="w-64 bg-white border-r border-slate-200 flex flex-col shrink-0 min-h-screen z-30 select-none">
    
    <!-- Sidebar Header (Pure Home Nav Blue: bg-primary-600) -->
    <div class="h-16 bg-primary-600 px-5 flex items-center justify-between text-white shrink-0">
      <div class="flex items-center gap-3">
        <img id="admin-header-logo" src="/favicon.png" alt="ETEF Logo" class="w-8 h-8 object-contain rounded-full bg-white p-0.5 shrink-0" />
        <div>
          <span class="font-bold text-sm tracking-tight text-white block leading-none">ETEF Admin</span>
          <span class="text-[10px] text-white/80 block mt-0.5">Control Panel</span>
        </div>
      </div>
    </div>

    <!-- Navigation Menu Items -->
    <div class="flex-1 overflow-y-auto px-3 py-4 space-y-1" id="admin-category-nav">
      <button data-cat="dashboard" class="cat-nav-btn active w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-all bg-primary-600 text-white cursor-pointer">
        <span class="flex items-center gap-2.5">
          <i class="fa-solid fa-table-columns text-xs w-4 text-center"></i>
          <span>Dashboard</span>
        </span>
      </button>

      <button data-cat="services" class="cat-nav-btn w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all cursor-pointer">
        <span class="flex items-center gap-2.5">
          <i class="fa-solid fa-handshake-angle text-xs w-4 text-center"></i>
          <span>Services</span>
        </span>
        <span id="nav-count-services" class="text-[10px] font-semibold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-md">6</span>
      </button>

      <button data-cat="news" class="cat-nav-btn w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all cursor-pointer">
        <span class="flex items-center gap-2.5">
          <i class="fa-solid fa-newspaper text-xs w-4 text-center"></i>
          <span>News &amp; Bulletins</span>
        </span>
        <span id="nav-count-news" class="text-[10px] font-semibold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-md">4</span>
      </button>

      <button data-cat="vacancies" class="cat-nav-btn w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all cursor-pointer">
        <span class="flex items-center gap-2.5">
          <i class="fa-solid fa-briefcase text-xs w-4 text-center"></i>
          <span>Job Vacancies</span>
        </span>
        <span id="nav-count-vacancies" class="text-[10px] font-semibold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-md">4</span>
      </button>

      <button data-cat="partners" class="cat-nav-btn w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all cursor-pointer">
        <span class="flex items-center gap-2.5">
          <i class="fa-solid fa-handshake text-xs w-4 text-center"></i>
          <span>Partners &amp; Sponsors</span>
        </span>
        <span id="nav-count-partners" class="text-[10px] font-semibold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-md">4</span>
      </button>

      <button data-cat="faqs" class="cat-nav-btn w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all cursor-pointer">
        <span class="flex items-center gap-2.5">
          <i class="fa-solid fa-circle-question text-xs w-4 text-center"></i>
          <span>FAQ Desk</span>
        </span>
        <span id="nav-count-faqs" class="text-[10px] font-semibold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-md">7</span>
      </button>

      <button data-cat="heroes" class="cat-nav-btn w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all cursor-pointer">
        <span class="flex items-center gap-2.5">
          <i class="fa-solid fa-image text-xs w-4 text-center"></i>
          <span>Hero Banners</span>
        </span>
        <span class="text-[10px] font-semibold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-md">7</span>
      </button>

      <button data-cat="contact" class="cat-nav-btn w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all cursor-pointer">
        <span class="flex items-center gap-2.5">
          <i class="fa-solid fa-sliders text-xs w-4 text-center"></i>
          <span>Branding &amp; Contacts</span>
        </span>
      </button>

      <button data-cat="memberships" class="cat-nav-btn w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all cursor-pointer">
        <span class="flex items-center gap-2.5">
          <i class="fa-solid fa-users text-xs w-4 text-center"></i>
          <span>Memberships</span>
        </span>
        <span id="nav-count-members" class="text-[10px] font-semibold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-md">6</span>
      </button>

      <button data-cat="audit" class="cat-nav-btn w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all cursor-pointer">
        <span class="flex items-center gap-2.5">
          <i class="fa-solid fa-clock-rotate-left text-xs w-4 text-center"></i>
          <span>Activity Log</span>
        </span>
      </button>
    </div>

    <!-- User / Session Footer -->
    <div class="p-3.5 border-t border-slate-200 bg-slate-50/80 shrink-0 space-y-2">
      <div class="flex items-center justify-between text-xs text-slate-600 px-1">
        <span class="truncate font-medium">admin@etef.com</span>
        <button id="cms-logout" class="text-xs text-slate-500 hover:text-slate-900 font-semibold cursor-pointer" title="Sign out">
          <i class="fa-solid fa-right-from-bracket"></i>
        </button>
      </div>
    </div>
  </aside>

  <!-- Right Main Workspace -->
  <div class="flex-1 flex flex-col min-w-0 min-h-screen">
    
    <!-- Top Bar -->
    <header class="h-16 bg-white border-b border-slate-200 px-6 sm:px-8 flex items-center justify-between shrink-0 sticky top-0 z-20">
      <div class="flex items-center gap-3">
        <h2 id="top-bar-title" class="font-bold text-slate-900 text-base">Dashboard</h2>
      </div>

      <div class="flex items-center gap-3">
        <a href="/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 hover:border-slate-400 text-slate-700 text-xs font-semibold transition-colors bg-white">
          <span>View Site</span>
          <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
        </a>
      </div>
    </header>

    <!-- Workspace Content -->
    <main class="flex-1 p-6 sm:p-8 max-w-6xl w-full mx-auto">
      <div id="admin-workspace-content"></div>
    </main>

  </div>

  <!-- Universal Modal Container -->
  <div id="admin-modal" class="fixed inset-0 z-50 hidden items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4 overflow-y-auto">
    <div class="bg-white rounded-2xl shadow-xl border border-slate-200 w-full max-w-lg overflow-hidden my-6">
      
      <div class="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
        <h3 id="admin-modal-title" class="font-bold text-slate-900 text-base">Edit Item</h3>
        <button id="admin-modal-close" class="text-slate-400 hover:text-slate-700 w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
          <i class="fa-solid fa-xmark text-sm"></i>
        </button>
      </div>

      <form id="admin-modal-form" class="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
        <div id="admin-modal-fields" class="space-y-4"></div>

        <div id="admin-modal-error" class="text-slate-900 text-xs font-semibold min-h-[1rem]"></div>

        <div class="pt-4 border-t border-slate-200 flex items-center justify-end gap-2.5">
          <button type="button" id="admin-modal-cancel" class="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-xs cursor-pointer transition-colors">
            Cancel
          </button>
          <button type="submit" id="admin-modal-submit" class="px-5 py-2 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold text-xs cursor-pointer shadow-xs transition-colors flex items-center gap-1.5">
            <span>Save Changes</span>
          </button>
        </div>
      </form>

    </div>
  </div>

  <!-- Toast Floating Notification -->
  <div id="admin-toast" class="fixed bottom-5 right-5 z-50 hidden items-center gap-2 px-4 py-3 rounded-xl bg-slate-900 text-white text-xs font-medium shadow-lg border border-slate-800 transition-all">
    <span id="admin-toast-icon" class="text-primary-400 text-sm"><i class="fa-solid fa-check"></i></span>
    <span id="admin-toast-msg">Saved successfully</span>
  </div>

</div>
`;

// ============================================================================
// MOUNT CMS ADMIN
// ============================================================================

export async function mountCmsAdmin(root: HTMLElement, onAuth: () => void) {
  let csrf = '';

  const showToast = (msg: string) => {
    const toast = root.querySelector<HTMLElement>('#admin-toast');
    const toastMsg = root.querySelector<HTMLElement>('#admin-toast-msg');
    if (!toast || !toastMsg) return;

    toastMsg.textContent = msg;
    toast.classList.remove('hidden');
    toast.classList.add('flex');

    setTimeout(() => {
      toast.classList.add('hidden');
      toast.classList.remove('flex');
    }, 2800);
  };

  const showLogin = () => {
    root.innerHTML = loginMarkup;
    root.querySelector<HTMLFormElement>('#cms-login-form')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const form = e.currentTarget as HTMLFormElement;
      const fd = new FormData(form);
      const error = root.querySelector<HTMLElement>('#cms-login-error');
      const submitBtn = root.querySelector<HTMLButtonElement>('#cms-login-btn');
      const btnText = submitBtn?.querySelector<HTMLElement>('.btn-text');
      const btnSpinner = submitBtn?.querySelector<HTMLElement>('.btn-spinner');

      if (error) error.textContent = '';
      if (submitBtn) submitBtn.disabled = true;
      if (btnText) btnText.classList.add('hidden');
      if (btnSpinner) btnSpinner.classList.remove('hidden');

      try {
        const login = await api('/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: fd.get('email'), password: fd.get('password') }),
        });
        csrf = login.csrfToken;
        onAuth();
        await showStudio();
      } catch (err) {
        if (error) error.textContent = (err as Error).message;
      } finally {
        if (submitBtn) submitBtn.disabled = false;
        if (btnText) btnText.classList.remove('hidden');
        if (btnSpinner) btnSpinner.classList.add('hidden');
      }
    });
  };

  const showStudio = async () => {
    root.innerHTML = adminCmsMarkup;

    let activeCategory = 'dashboard';
    const workspace = root.querySelector<HTMLElement>('#admin-workspace-content')!;
    const topBarTitle = root.querySelector<HTMLElement>('#top-bar-title')!;
    const modal = root.querySelector<HTMLElement>('#admin-modal')!;
    const modalTitle = root.querySelector<HTMLElement>('#admin-modal-title')!;
    const modalFields = root.querySelector<HTMLElement>('#admin-modal-fields')!;
    const modalForm = root.querySelector<HTMLFormElement>('#admin-modal-form')!;
    const modalError = root.querySelector<HTMLElement>('#admin-modal-error')!;

    const state = {
      services: { search: '', category: 'all', status: 'all', page: 1, pageSize: 6 },
      news: { search: '', category: 'all', status: 'all', page: 1, pageSize: 5 },
      vacancies: { search: '', type: 'all', status: 'all', page: 1, pageSize: 5 },
      partners: { search: '', tier: 'all', status: 'all', page: 1, pageSize: 5 },
      faqs: { search: '', category: 'all', status: 'all', page: 1, pageSize: 6 },
      members: { search: '', status: 'all', page: 1, pageSize: 6 },
      audit: { search: '', category: 'all', page: 1, pageSize: 8 },
    };

    let onModalSubmit: ((fd: FormData) => Promise<void>) | null = null;

    const closeModal = () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      if (modalError) modalError.textContent = '';
      onModalSubmit = null;
    };

    const openModal = (title: string, fieldsHtml: string, onSubmit: (fd: FormData) => Promise<void>) => {
      modalTitle.textContent = title;
      modalFields.innerHTML = fieldsHtml;
      modalForm.reset();
      initImageUploaders(modalFields);
      if (modalError) modalError.textContent = '';
      onModalSubmit = onSubmit;
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    };

    root.querySelector('#admin-modal-close')?.addEventListener('click', closeModal);
    root.querySelector('#admin-modal-cancel')?.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    modalForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!onModalSubmit) return;
      const submitBtn = root.querySelector<HTMLButtonElement>('#admin-modal-submit')!;
      const origText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin text-xs"></i> Saving...';
      try {
        await onModalSubmit(new FormData(modalForm));
        closeModal();
      } catch (err) {
        if (modalError) modalError.textContent = (err as Error).message;
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = origText;
      }
    });

    const updateNavBadges = () => {
      const svCount = root.querySelector('#nav-count-services');
      if (svCount) svCount.textContent = String(adminStore.getServices().length);

      const nwCount = root.querySelector('#nav-count-news');
      if (nwCount) nwCount.textContent = String(adminStore.getNews().length);

      const vcCount = root.querySelector('#nav-count-vacancies');
      if (vcCount) vcCount.textContent = String(adminStore.getVacancies().length);

      const ptCount = root.querySelector('#nav-count-partners');
      if (ptCount) ptCount.textContent = String(adminStore.getPartners().length);

      const fqCount = root.querySelector('#nav-count-faqs');
      if (fqCount) fqCount.textContent = String(adminStore.getFaqs().length);

      const mbCount = root.querySelector('#nav-count-members');
      if (mbCount) mbCount.textContent = String(adminStore.getMembers().length);
    };

    const renderPaginationControls = (
      total: number,
      currentPage: number,
      pageSize: number,
      onPageChange: (newPage: number) => void
    ) => {
      const totalPages = Math.max(1, Math.ceil(total / pageSize));
      const start = total === 0 ? 0 : (currentPage - 1) * pageSize + 1;
      const end = Math.min(total, currentPage * pageSize);

      const div = document.createElement('div');
      div.className =
        'px-5 py-3.5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500';
      div.innerHTML = `
        <div>
          Showing <span class="font-semibold text-slate-900">${start}</span> to <span class="font-semibold text-slate-900">${end}</span> of <span class="font-semibold text-slate-900">${total}</span>
        </div>
        <div class="flex items-center gap-1">
          <button class="page-prev px-2.5 py-1 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-medium text-slate-700" ${
            currentPage <= 1 ? 'disabled' : ''
          }>
            Previous
          </button>
          
          ${Array.from({ length: totalPages })
            .map(
              (_, i) => `
            <button class="page-num w-7 h-7 rounded-lg text-xs font-semibold ${
              i + 1 === currentPage
                ? 'bg-primary-600 text-white'
                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
            }" data-page="${i + 1}">
              ${i + 1}
            </button>`
            )
            .join('')}

          <button class="page-next px-2.5 py-1 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-medium text-slate-700" ${
            currentPage >= totalPages ? 'disabled' : ''
          }>
            Next
          </button>
        </div>
      `;

      div.querySelector('.page-prev')?.addEventListener('click', () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
      });
      div.querySelector('.page-next')?.addEventListener('click', () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
      });
      div.querySelectorAll('.page-num').forEach((btn) => {
        btn.addEventListener('click', () => {
          const p = Number((btn as HTMLElement).dataset.page);
          if (p && p !== currentPage) onPageChange(p);
        });
      });

      return div;
    };

    // ------------------------------------------------------------------------
    // TAB: DASHBOARD
    // ------------------------------------------------------------------------
    const renderDashboard = () => {
      topBarTitle.textContent = 'Dashboard';
      const services = adminStore.getServices();
      const news = adminStore.getNews();
      const vacancies = adminStore.getVacancies();
      const partners = adminStore.getPartners();
      const logs = adminStore.getLogs();

      const publishedServices = services.filter((s) => s.status === 'Published').length;
      const publishedNews = news.filter((n) => n.status === 'Published').length;
      const activeVacancies = vacancies.filter((v) => v.status === 'Active').length;
      const publishedPartners = partners.filter((p) => p.status !== 'Draft').length;

      workspace.innerHTML = `
        <div class="space-y-6">
          
          <!-- Welcome Bar -->
          <div class="bg-white border border-slate-200 rounded-xl p-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 class="text-xl font-bold text-slate-900 tracking-tight">Overview</h1>
              <p class="text-xs text-slate-500 mt-0.5">Welcome back. Select any section to update or publish content.</p>
            </div>
            <div class="flex items-center gap-2">
              <button id="quick-add-service-btn" class="px-3.5 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-semibold text-xs shadow-xs transition-colors cursor-pointer">
                + New Service
              </button>
              <button id="quick-add-news-btn" class="px-3.5 py-2 rounded-lg bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-xs transition-colors cursor-pointer">
                + New Article
              </button>
            </div>
          </div>

          <!-- KPI Metric Cards -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-white border border-slate-200 rounded-xl p-5 cursor-pointer hover:border-primary-600 transition-colors" data-goto="services">
              <span class="text-xs font-semibold text-slate-500 block">Services</span>
              <div class="text-2xl font-bold text-slate-900 mt-1">${publishedServices} <span class="text-xs font-normal text-slate-400">/ ${services.length}</span></div>
              <span class="text-[11px] text-primary-600 font-medium mt-1 block">Manage services &rarr;</span>
            </div>

            <div class="bg-white border border-slate-200 rounded-xl p-5 cursor-pointer hover:border-primary-600 transition-colors" data-goto="news">
              <span class="text-xs font-semibold text-slate-500 block">News &amp; Articles</span>
              <div class="text-2xl font-bold text-slate-900 mt-1">${publishedNews} <span class="text-xs font-normal text-slate-400">/ ${news.length}</span></div>
              <span class="text-[11px] text-primary-600 font-medium mt-1 block">Manage news &rarr;</span>
            </div>

            <div class="bg-white border border-slate-200 rounded-xl p-5 cursor-pointer hover:border-primary-600 transition-colors" data-goto="vacancies">
              <span class="text-xs font-semibold text-slate-500 block">Vacancies</span>
              <div class="text-2xl font-bold text-slate-900 mt-1">${activeVacancies} <span class="text-xs font-normal text-slate-400">/ ${vacancies.length}</span></div>
              <span class="text-[11px] text-primary-600 font-medium mt-1 block">Manage jobs &rarr;</span>
            </div>

            <div class="bg-white border border-slate-200 rounded-xl p-5 cursor-pointer hover:border-primary-600 transition-colors" data-goto="partners">
              <span class="text-xs font-semibold text-slate-500 block">Partners</span>
              <div class="text-2xl font-bold text-slate-900 mt-1">${publishedPartners} <span class="text-xs font-normal text-slate-400">/ ${partners.length}</span></div>
              <span class="text-[11px] text-primary-600 font-medium mt-1 block">Manage partners &rarr;</span>
            </div>
          </div>

          <!-- Recent Activity -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden">
            <div class="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
              <h3 class="font-bold text-slate-900 text-sm">Recent Activity</h3>
              <button data-goto="audit" class="text-xs font-semibold text-primary-600 hover:text-primary-700 cursor-pointer">
                View All
              </button>
            </div>
            <div class="divide-y divide-slate-100">
              ${logs.slice(0, 5).map(l => `
                <div class="px-5 py-3 flex items-center justify-between text-xs hover:bg-slate-50/50 transition-colors">
                  <div class="flex items-center gap-2.5">
                    <span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700">${l.action}</span>
                    <span class="font-semibold text-slate-800">${l.category}:</span>
                    <span class="text-slate-600 line-clamp-1">${escapeHtml(l.target)}</span>
                  </div>
                  <span class="text-slate-400 font-mono text-[11px] shrink-0">${l.timestamp.split(' ')[0]}</span>
                </div>
              `).join('')}
            </div>
          </div>

        </div>
      `;

      workspace.querySelectorAll('[data-goto]').forEach((el) => {
        el.addEventListener('click', () => {
          const target = (el as HTMLElement).dataset.goto;
          if (target) switchCategory(target);
        });
      });

      workspace.querySelector('#quick-add-service-btn')?.addEventListener('click', () => {
        switchCategory('services');
        setTimeout(() => (workspace.querySelector('#btn-add-service') as HTMLElement)?.click(), 50);
      });
      workspace.querySelector('#quick-add-news-btn')?.addEventListener('click', () => {
        switchCategory('news');
        setTimeout(() => (workspace.querySelector('#btn-add-news') as HTMLElement)?.click(), 50);
      });
    };

    // ------------------------------------------------------------------------
    // TAB: SERVICES
    // ------------------------------------------------------------------------
    const renderServices = () => {
      topBarTitle.textContent = 'Services';
      const allServices = adminStore.getServices();
      const st = state.services;

      let filtered = allServices.filter((s) => {
        const matchesQuery =
          !st.search ||
          s.title.toLowerCase().includes(st.search.toLowerCase()) ||
          s.description.toLowerCase().includes(st.search.toLowerCase());
        const matchesCat = st.category === 'all' || s.category === st.category;
        const matchesStatus = st.status === 'all' || s.status === st.status;
        return matchesQuery && matchesCat && matchesStatus;
      });

      const totalPages = Math.max(1, Math.ceil(filtered.length / st.pageSize));
      if (st.page > totalPages) st.page = totalPages;
      const start = (st.page - 1) * st.pageSize;
      const pageItems = filtered.slice(start, start + st.pageSize);

      const categories = Array.from(new Set(allServices.map((s) => s.category)));

      workspace.innerHTML = `
        <div class="space-y-4">
          
          <!-- Toolbar -->
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2">
              <input id="srv-search" type="text" placeholder="Search services..." value="${escapeHtml(
                st.search
              )}" class="px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 w-48 sm:w-64" />

              <select id="srv-cat-filter" class="px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-700 focus:outline-none focus:border-primary-600">
                <option value="all">All Categories</option>
                ${categories.map((c) => `<option value="${escapeHtml(c)}" ${st.category === c ? 'selected' : ''}>${escapeHtml(c)}</option>`).join('')}
              </select>

              <select id="srv-status-filter" class="px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-700 focus:outline-none focus:border-primary-600">
                <option value="all">All Status</option>
                <option value="Published" ${st.status === 'Published' ? 'selected' : ''}>Published</option>
                <option value="Draft" ${st.status === 'Draft' ? 'selected' : ''}>Draft</option>
              </select>
            </div>

            <button id="btn-add-service" class="px-4 py-2 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold text-xs shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer">
              <i class="fa-solid fa-plus text-[10px]"></i>
              <span>New Service</span>
            </button>
          </div>

          <!-- Table -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse text-xs">
                <thead>
                  <tr class="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-semibold text-[11px]">
                    <th class="py-3 px-4 w-12">#</th>
                    <th class="py-3 px-4">Title</th>
                    <th class="py-3 px-4">Category</th>
                    <th class="py-3 px-4 text-center">Status</th>
                    <th class="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  ${
                    pageItems.length === 0
                      ? `<tr><td colspan="5" class="py-10 text-center text-slate-400">No services found.</td></tr>`
                      : pageItems
                          .map(
                            (s, idx) => `
                    <tr class="hover:bg-slate-50/60 transition-colors">
                      <td class="py-3 px-4 font-mono text-slate-400">${start + idx + 1}</td>
                      <td class="py-3 px-4">
                        <div class="font-semibold text-slate-900">${escapeHtml(s.title)}</div>
                        <div class="text-slate-500 text-[11px] line-clamp-1 mt-0.5">${escapeHtml(s.description)}</div>
                      </td>
                      <td class="py-3 px-4 text-slate-600">
                        ${escapeHtml(s.category)}
                      </td>
                      <td class="py-3 px-4 text-center">
                        <button data-action="toggle-service" data-id="${s.id}" class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold cursor-pointer transition-colors ${
                              s.status === 'Published'
                                ? 'bg-primary-50 text-primary-700 border border-primary-200'
                                : 'bg-slate-100 text-slate-600 border border-slate-200'
                            }">
                          <i class="fa-solid ${s.status === 'Published' ? 'fa-check text-[10px]' : 'fa-minus text-[10px]'}"></i>
                          <span>${s.status}</span>
                        </button>
                      </td>
                      <td class="py-3 px-4 text-right">
                        <div class="flex items-center justify-end gap-1">
                          <button data-action="edit-service" data-id="${s.id}" class="px-2.5 py-1 text-slate-700 hover:text-primary-600 font-semibold cursor-pointer">
                            Edit
                          </button>
                          <button data-action="delete-service" data-id="${s.id}" class="px-2.5 py-1 text-slate-500 hover:text-slate-900 font-semibold cursor-pointer">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>`
                          )
                          .join('')
                  }
                </tbody>
              </table>
            </div>

            <div id="srv-pagination-mount"></div>
          </div>
        </div>
      `;

      const mount = workspace.querySelector('#srv-pagination-mount');
      if (mount) {
        mount.appendChild(
          renderPaginationControls(filtered.length, st.page, st.pageSize, (newPage) => {
            st.page = newPage;
            renderServices();
          })
        );
      }

      workspace.querySelector('#srv-search')?.addEventListener('input', (e) => {
        st.search = (e.target as HTMLInputElement).value;
        st.page = 1;
        renderServices();
      });
      workspace.querySelector('#srv-cat-filter')?.addEventListener('change', (e) => {
        st.category = (e.target as HTMLSelectElement).value;
        st.page = 1;
        renderServices();
      });
      workspace.querySelector('#srv-status-filter')?.addEventListener('change', (e) => {
        st.status = (e.target as HTMLSelectElement).value;
        st.page = 1;
        renderServices();
      });

      workspace.querySelectorAll('[data-action="toggle-service"]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = (btn as HTMLElement).dataset.id!;
          const newStatus = adminStore.toggleServiceStatus(id);
          showToast(`Status: ${newStatus}`);
          renderServices();
          updateNavBadges();
        });
      });

      workspace.querySelectorAll('[data-action="delete-service"]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = (btn as HTMLElement).dataset.id!;
          const item = allServices.find((s) => s.id === id);
          if (!confirm(`Delete "${item?.title || 'this service'}"?`)) return;
          adminStore.deleteService(id);
          showToast('Service deleted');
          renderServices();
          updateNavBadges();
        });
      });

      const openServiceForm = (existing?: ServiceItem) => {
        const isEdit = Boolean(existing);
        const fields = `
          <div>
            <label class="block text-xs font-semibold text-slate-800 mb-1">Service Title</label>
            <input name="title" required value="${escapeHtml(existing?.title || '')}" placeholder="Title..." class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600" />
          </div>

          <div class="grid sm:grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-semibold text-slate-800 mb-1">Category</label>
              <input name="category" required value="${escapeHtml(existing?.category || 'Legal & Advocacy')}" class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600" />
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-800 mb-1">Status</label>
              <select name="status" class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600">
                <option value="Published" ${existing?.status === 'Published' ? 'selected' : ''}>Published</option>
                <option value="Draft" ${existing?.status === 'Draft' ? 'selected' : ''}>Draft</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-800 mb-1">Icon Class</label>
            <input name="icon" value="${escapeHtml(existing?.icon || 'fa-scale-balanced')}" class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 font-mono focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600" />
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-800 mb-1">Description</label>
            <textarea name="description" rows="3" required class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 leading-relaxed">${escapeHtml(existing?.description || '')}</textarea>
          </div>
        `;

        openModal(isEdit ? 'Edit Service' : 'New Service', fields, async (fd) => {
          const item: ServiceItem = {
            id: existing ? existing.id : 'srv-' + Date.now(),
            title: String(fd.get('title')).trim(),
            description: String(fd.get('description')).trim(),
            category: String(fd.get('category')).trim(),
            icon: String(fd.get('icon')).trim() || 'fa-scale-balanced',
            status: (fd.get('status') as any) || 'Published',
          };

          if (isEdit) {
            adminStore.updateService(existing!.id, item);
            showToast('Service updated');
          } else {
            adminStore.addService(item);
            showToast('Service created');
          }
          renderServices();
          updateNavBadges();
        });
      };

      workspace.querySelector('#btn-add-service')?.addEventListener('click', () => openServiceForm());
      workspace.querySelectorAll('[data-action="edit-service"]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = (btn as HTMLElement).dataset.id!;
          const item = allServices.find((s) => s.id === id);
          if (item) openServiceForm(item);
        });
      });
    };

    // ------------------------------------------------------------------------
    // TAB: NEWS & BULLETINS (With Image File Upload)
    // ------------------------------------------------------------------------
    const renderNews = () => {
      topBarTitle.textContent = 'News & Bulletins';
      const allNews = adminStore.getNews();
      const st = state.news;

      let filtered = allNews.filter((n) => {
        const matchesQuery =
          !st.search ||
          n.title.toLowerCase().includes(st.search.toLowerCase()) ||
          n.content.toLowerCase().includes(st.search.toLowerCase());
        const matchesCat = st.category === 'all' || n.category === st.category;
        const matchesStatus = st.status === 'all' || n.status === st.status;
        return matchesQuery && matchesCat && matchesStatus;
      });

      const totalPages = Math.max(1, Math.ceil(filtered.length / st.pageSize));
      if (st.page > totalPages) st.page = totalPages;
      const start = (st.page - 1) * st.pageSize;
      const pageItems = filtered.slice(start, start + st.pageSize);

      const categories = Array.from(new Set(allNews.map((n) => n.category)));

      workspace.innerHTML = `
        <div class="space-y-4">
          
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2">
              <input id="news-search" type="text" placeholder="Search news..." value="${escapeHtml(
                st.search
              )}" class="px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 w-48 sm:w-64" />

              <select id="news-cat-filter" class="px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-700 focus:outline-none focus:border-primary-600">
                <option value="all">All Categories</option>
                ${categories.map((c) => `<option value="${escapeHtml(c)}" ${st.category === c ? 'selected' : ''}>${escapeHtml(c)}</option>`).join('')}
              </select>

              <select id="news-status-filter" class="px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-700 focus:outline-none focus:border-primary-600">
                <option value="all">All Status</option>
                <option value="Published" ${st.status === 'Published' ? 'selected' : ''}>Published</option>
                <option value="Draft" ${st.status === 'Draft' ? 'selected' : ''}>Draft</option>
              </select>
            </div>

            <button id="btn-add-news" class="px-4 py-2 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold text-xs shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer">
              <i class="fa-solid fa-plus text-[10px]"></i>
              <span>New Article</span>
            </button>
          </div>

          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse text-xs">
                <thead>
                  <tr class="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-semibold text-[11px]">
                    <th class="py-3 px-4 w-12">#</th>
                    <th class="py-3 px-4 w-14">Image</th>
                    <th class="py-3 px-4">Title</th>
                    <th class="py-3 px-4">Category</th>
                    <th class="py-3 px-4">Date</th>
                    <th class="py-3 px-4 text-center">Status</th>
                    <th class="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  ${
                    pageItems.length === 0
                      ? `<tr><td colspan="7" class="py-10 text-center text-slate-400">No articles found.</td></tr>`
                      : pageItems
                          .map(
                            (n, idx) => `
                    <tr class="hover:bg-slate-50/60 transition-colors">
                      <td class="py-3 px-4 font-mono text-slate-400">${start + idx + 1}</td>
                      <td class="py-3 px-4">
                        <img src="${escapeHtml(
                          n.image || '/images/hero_transport_hub.jpg'
                        )}" class="w-10 h-10 rounded-lg object-cover border border-slate-200 bg-white" onerror="this.src='/images/hero_transport_hub.jpg'"/>
                      </td>
                      <td class="py-3 px-4">
                        <div class="font-semibold text-slate-900">${escapeHtml(n.title)}</div>
                        <div class="text-slate-500 text-[11px] line-clamp-1 mt-0.5">${escapeHtml(n.content)}</div>
                      </td>
                      <td class="py-3 px-4 text-slate-600">${escapeHtml(n.category)}</td>
                      <td class="py-3 px-4 text-slate-500 whitespace-nowrap">${escapeHtml(n.publishDate)}</td>
                      <td class="py-3 px-4 text-center">
                        <button data-action="toggle-news" data-id="${n.id}" class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold cursor-pointer transition-colors ${
                              n.status === 'Published'
                                ? 'bg-primary-50 text-primary-700 border border-primary-200'
                                : 'bg-slate-100 text-slate-600 border border-slate-200'
                            }">
                          <i class="fa-solid ${n.status === 'Published' ? 'fa-check text-[10px]' : 'fa-minus text-[10px]'}"></i>
                          <span>${n.status}</span>
                        </button>
                      </td>
                      <td class="py-3 px-4 text-right">
                        <div class="flex items-center justify-end gap-1">
                          <button data-action="edit-news" data-id="${n.id}" class="px-2.5 py-1 text-slate-700 hover:text-primary-600 font-semibold cursor-pointer">
                            Edit
                          </button>
                          <button data-action="delete-news" data-id="${n.id}" class="px-2.5 py-1 text-slate-500 hover:text-slate-900 font-semibold cursor-pointer">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>`
                          )
                          .join('')
                  }
                </tbody>
              </table>
            </div>

            <div id="news-pagination-mount"></div>
          </div>
        </div>
      `;

      const mount = workspace.querySelector('#news-pagination-mount');
      if (mount) {
        mount.appendChild(
          renderPaginationControls(filtered.length, st.page, st.pageSize, (newPage) => {
            st.page = newPage;
            renderNews();
          })
        );
      }

      workspace.querySelector('#news-search')?.addEventListener('input', (e) => {
        st.search = (e.target as HTMLInputElement).value;
        st.page = 1;
        renderNews();
      });
      workspace.querySelector('#news-cat-filter')?.addEventListener('change', (e) => {
        st.category = (e.target as HTMLSelectElement).value;
        st.page = 1;
        renderNews();
      });
      workspace.querySelector('#news-status-filter')?.addEventListener('change', (e) => {
        st.status = (e.target as HTMLSelectElement).value;
        st.page = 1;
        renderNews();
      });

      workspace.querySelectorAll('[data-action="toggle-news"]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = (btn as HTMLElement).dataset.id!;
          const newStatus = adminStore.toggleNewsStatus(id);
          showToast(`Status: ${newStatus}`);
          renderNews();
          updateNavBadges();
        });
      });

      workspace.querySelectorAll('[data-action="delete-news"]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = (btn as HTMLElement).dataset.id!;
          const item = allNews.find((n) => n.id === id);
          if (!confirm(`Delete "${item?.title || 'this article'}"?`)) return;
          adminStore.deleteNews(id);
          showToast('Article deleted');
          renderNews();
          updateNavBadges();
        });
      });

      const openNewsForm = (existing?: NewsItem) => {
        const isEdit = Boolean(existing);
        const fields = `
          <div>
            <label class="block text-xs font-semibold text-slate-800 mb-1">Headline</label>
            <input name="title" required value="${escapeHtml(existing?.title || '')}" placeholder="Article title..." class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600" />
          </div>

          <div class="grid sm:grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-semibold text-slate-800 mb-1">Category</label>
              <input name="category" required value="${escapeHtml(existing?.category || 'Corridor Intelligence')}" class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600" />
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-800 mb-1">Status</label>
              <select name="status" class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600">
                <option value="Published" ${existing?.status === 'Published' ? 'selected' : ''}>Published</option>
                <option value="Draft" ${existing?.status === 'Draft' ? 'selected' : ''}>Draft</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-800 mb-1">Author</label>
            <input name="author" value="${escapeHtml(existing?.author || 'Secretariat Directorate')}" class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600" />
          </div>

          <!-- File Upload for News Image -->
          ${renderImageUploadInput('image', 'Cover Image File', existing?.image || '', [
            { label: 'Transport Hub', value: '/images/hero_transport_hub.jpg' },
            { label: 'Media & Press', value: '/images/news_hero_press.jpg' },
            { label: 'Fleet Terminal', value: '/images/about_hero_fleet.jpg' },
          ])}

          <div>
            <label class="block text-xs font-semibold text-slate-800 mb-1">Content</label>
            <textarea name="content" rows="4" required class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600 leading-relaxed">${escapeHtml(existing?.content || '')}</textarea>
          </div>
        `;

        openModal(isEdit ? 'Edit Article' : 'New Article', fields, async (fd) => {
          const item: NewsItem = {
            id: existing ? existing.id : 'news-' + Date.now(),
            title: String(fd.get('title')).trim(),
            category: String(fd.get('category')).trim(),
            status: (fd.get('status') as any) || 'Published',
            author: String(fd.get('author')).trim(),
            image: String(fd.get('image')).trim() || '/images/hero_transport_hub.jpg',
            content: String(fd.get('content')).trim(),
            publishDate: existing
              ? existing.publishDate
              : new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            views: existing ? existing.views : 120,
            readTime: '3 min read',
          };

          if (isEdit) {
            adminStore.updateNews(existing!.id, item);
            showToast('Article updated');
          } else {
            adminStore.addNews(item);
            showToast('Article published');
          }
          renderNews();
          updateNavBadges();
        });
      };

      workspace.querySelector('#btn-add-news')?.addEventListener('click', () => openNewsForm());
      workspace.querySelectorAll('[data-action="edit-news"]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = (btn as HTMLElement).dataset.id!;
          const item = allNews.find((n) => n.id === id);
          if (item) openNewsForm(item);
        });
      });
    };

    // ------------------------------------------------------------------------
    // TAB: VACANCIES
    // ------------------------------------------------------------------------
    const renderVacancies = () => {
      topBarTitle.textContent = 'Job Vacancies';
      const allVacancies = adminStore.getVacancies();
      const st = state.vacancies;

      let filtered = allVacancies.filter((v) => {
        const matchesQuery =
          !st.search ||
          v.title.toLowerCase().includes(st.search.toLowerCase()) ||
          v.station.toLowerCase().includes(st.search.toLowerCase());
        const matchesType = st.type === 'all' || v.type === st.type;
        const matchesStatus = st.status === 'all' || v.status === st.status;
        return matchesQuery && matchesType && matchesStatus;
      });

      const totalPages = Math.max(1, Math.ceil(filtered.length / st.pageSize));
      if (st.page > totalPages) st.page = totalPages;
      const start = (st.page - 1) * st.pageSize;
      const pageItems = filtered.slice(start, start + st.pageSize);

      workspace.innerHTML = `
        <div class="space-y-4">
          
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2">
              <input id="vac-search" type="text" placeholder="Search vacancies..." value="${escapeHtml(
                st.search
              )}" class="px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 w-48 sm:w-64" />

              <select id="vac-type-filter" class="px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-700 focus:outline-none focus:border-primary-600">
                <option value="all">All Types</option>
                <option value="Full-Time" ${st.type === 'Full-Time' ? 'selected' : ''}>Full-Time</option>
                <option value="Contract" ${st.type === 'Contract' ? 'selected' : ''}>Contract</option>
              </select>

              <select id="vac-status-filter" class="px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-700 focus:outline-none focus:border-primary-600">
                <option value="all">All Status</option>
                <option value="Active" ${st.status === 'Active' ? 'selected' : ''}>Active</option>
                <option value="Closed" ${st.status === 'Closed' ? 'selected' : ''}>Closed</option>
              </select>
            </div>

            <button id="btn-add-vacancy" class="px-4 py-2 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold text-xs shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer">
              <i class="fa-solid fa-plus text-[10px]"></i>
              <span>New Vacancy</span>
            </button>
          </div>

          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse text-xs">
                <thead>
                  <tr class="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-semibold text-[11px]">
                    <th class="py-3 px-4 w-12">#</th>
                    <th class="py-3 px-4">Position</th>
                    <th class="py-3 px-4">Station</th>
                    <th class="py-3 px-4">Type</th>
                    <th class="py-3 px-4">Deadline</th>
                    <th class="py-3 px-4 text-center">Status</th>
                    <th class="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  ${
                    pageItems.length === 0
                      ? `<tr><td colspan="7" class="py-10 text-center text-slate-400">No vacancies found.</td></tr>`
                      : pageItems
                          .map(
                            (v, idx) => `
                    <tr class="hover:bg-slate-50/60 transition-colors">
                      <td class="py-3 px-4 font-mono text-slate-400">${start + idx + 1}</td>
                      <td class="py-3 px-4">
                        <div class="font-semibold text-slate-900">${escapeHtml(v.title)}</div>
                      </td>
                      <td class="py-3 px-4 text-slate-600">${escapeHtml(v.station)}</td>
                      <td class="py-3 px-4 text-slate-600">${escapeHtml(v.type)}</td>
                      <td class="py-3 px-4 text-slate-500 whitespace-nowrap">${escapeHtml(v.deadline)}</td>
                      <td class="py-3 px-4 text-center">
                        <button data-action="toggle-vacancy" data-id="${v.id}" class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold cursor-pointer transition-colors ${
                              v.status === 'Active'
                                ? 'bg-primary-50 text-primary-700 border border-primary-200'
                                : 'bg-slate-100 text-slate-600 border border-slate-200'
                            }">
                          <i class="fa-solid ${v.status === 'Active' ? 'fa-check text-[10px]' : 'fa-minus text-[10px]'}"></i>
                          <span>${v.status}</span>
                        </button>
                      </td>
                      <td class="py-3 px-4 text-right">
                        <div class="flex items-center justify-end gap-1">
                          <button data-action="edit-vacancy" data-id="${v.id}" class="px-2.5 py-1 text-slate-700 hover:text-primary-600 font-semibold cursor-pointer">
                            Edit
                          </button>
                          <button data-action="delete-vacancy" data-id="${v.id}" class="px-2.5 py-1 text-slate-500 hover:text-slate-900 font-semibold cursor-pointer">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>`
                          )
                          .join('')
                  }
                </tbody>
              </table>
            </div>

            <div id="vac-pagination-mount"></div>
          </div>
        </div>
      `;

      const mount = workspace.querySelector('#vac-pagination-mount');
      if (mount) {
        mount.appendChild(
          renderPaginationControls(filtered.length, st.page, st.pageSize, (newPage) => {
            st.page = newPage;
            renderVacancies();
          })
        );
      }

      workspace.querySelector('#vac-search')?.addEventListener('input', (e) => {
        st.search = (e.target as HTMLInputElement).value;
        st.page = 1;
        renderVacancies();
      });
      workspace.querySelector('#vac-type-filter')?.addEventListener('change', (e) => {
        st.type = (e.target as HTMLSelectElement).value;
        st.page = 1;
        renderVacancies();
      });
      workspace.querySelector('#vac-status-filter')?.addEventListener('change', (e) => {
        st.status = (e.target as HTMLSelectElement).value;
        st.page = 1;
        renderVacancies();
      });

      workspace.querySelectorAll('[data-action="toggle-vacancy"]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = (btn as HTMLElement).dataset.id!;
          const newStatus = adminStore.toggleVacancyStatus(id);
          showToast(`Status: ${newStatus}`);
          renderVacancies();
          updateNavBadges();
        });
      });

      workspace.querySelectorAll('[data-action="delete-vacancy"]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = (btn as HTMLElement).dataset.id!;
          const item = allVacancies.find((v) => v.id === id);
          if (!confirm(`Delete "${item?.title || 'this vacancy'}"?`)) return;
          adminStore.deleteVacancy(id);
          showToast('Vacancy deleted');
          renderVacancies();
          updateNavBadges();
        });
      });

      const openVacancyForm = (existing?: VacancyItem) => {
        const isEdit = Boolean(existing);
        const fields = `
          <div>
            <label class="block text-xs font-semibold text-slate-800 mb-1">Position Title</label>
            <input name="title" required value="${escapeHtml(existing?.title || '')}" class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600" />
          </div>

          <div class="grid sm:grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-semibold text-slate-800 mb-1">Duty Station</label>
              <input name="station" required value="${escapeHtml(existing?.station || 'Addis Ababa HQ')}" class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600" />
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-800 mb-1">Contract Type</label>
              <select name="type" class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600">
                <option value="Full-Time" ${existing?.type === 'Full-Time' ? 'selected' : ''}>Full-Time</option>
                <option value="Contract" ${existing?.type === 'Contract' ? 'selected' : ''}>Contract</option>
              </select>
            </div>
          </div>

          <div class="grid sm:grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-semibold text-slate-800 mb-1">Deadline</label>
              <input name="deadline" required value="${escapeHtml(existing?.deadline || 'Nov 30, 2026')}" class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600" />
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-800 mb-1">Status</label>
              <select name="status" class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600">
                <option value="Active" ${existing?.status === 'Active' ? 'selected' : ''}>Active</option>
                <option value="Closed" ${existing?.status === 'Closed' ? 'selected' : ''}>Closed</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-800 mb-1">Overview / Requirements</label>
            <textarea name="overview" rows="3" required class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600 leading-relaxed">${escapeHtml(existing?.overview || '')}</textarea>
          </div>
        `;

        openModal(isEdit ? 'Edit Vacancy' : 'New Vacancy', fields, async (fd) => {
          const item: VacancyItem = {
            id: existing ? existing.id : 'vac-' + Date.now(),
            title: String(fd.get('title')).trim(),
            station: String(fd.get('station')).trim(),
            type: String(fd.get('type')).trim(),
            deadline: String(fd.get('deadline')).trim(),
            status: (fd.get('status') as any) || 'Active',
            overview: String(fd.get('overview')).trim(),
            category: 'Operations',
            salary: 'Standard Scale',
            candidates: existing ? existing.candidates : 0,
          };

          if (isEdit) {
            adminStore.updateVacancy(existing!.id, item);
            showToast('Vacancy updated');
          } else {
            adminStore.addVacancy(item);
            showToast('Vacancy posted');
          }
          renderVacancies();
          updateNavBadges();
        });
      };

      workspace.querySelector('#btn-add-vacancy')?.addEventListener('click', () => openVacancyForm());
      workspace.querySelectorAll('[data-action="edit-vacancy"]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = (btn as HTMLElement).dataset.id!;
          const item = allVacancies.find((v) => v.id === id);
          if (item) openVacancyForm(item);
        });
      });
    };

    // ------------------------------------------------------------------------
    // TAB: PARTNERS & SPONSORS (With Logo File Upload)
    // ------------------------------------------------------------------------
    const renderPartners = () => {
      topBarTitle.textContent = 'Partners & Sponsors';
      const allPartners = adminStore.getPartners();
      const st = state.partners;

      let filtered = allPartners.filter((p) => {
        const matchesQuery =
          !st.search ||
          p.name.toLowerCase().includes(st.search.toLowerCase()) ||
          p.sector.toLowerCase().includes(st.search.toLowerCase());
        const matchesTier = st.tier === 'all' || p.tier === st.tier;
        const pStatus = p.status || 'Published';
        const matchesStatus = st.status === 'all' || pStatus === st.status;
        return matchesQuery && matchesTier && matchesStatus;
      });

      const totalPages = Math.max(1, Math.ceil(filtered.length / st.pageSize));
      if (st.page > totalPages) st.page = totalPages;
      const start = (st.page - 1) * st.pageSize;
      const pageItems = filtered.slice(start, start + st.pageSize);

      const tiers = Array.from(new Set(allPartners.map((p) => p.tier)));

      workspace.innerHTML = `
        <div class="space-y-4">
          
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2">
              <input id="pt-search" type="text" placeholder="Search partners..." value="${escapeHtml(
                st.search
              )}" class="px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 w-48 sm:w-64" />

              <select id="pt-tier-filter" class="px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-700 focus:outline-none focus:border-primary-600">
                <option value="all">All Tiers</option>
                ${tiers.map((t) => `<option value="${escapeHtml(t)}" ${st.tier === t ? 'selected' : ''}>${escapeHtml(t)}</option>`).join('')}
              </select>

              <select id="pt-status-filter" class="px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-700 focus:outline-none focus:border-primary-600">
                <option value="all">All Status</option>
                <option value="Published" ${st.status === 'Published' ? 'selected' : ''}>Published</option>
                <option value="Draft" ${st.status === 'Draft' ? 'selected' : ''}>Draft</option>
              </select>
            </div>

            <button id="btn-add-partner" class="px-4 py-2 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold text-xs shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer">
              <i class="fa-solid fa-plus text-[10px]"></i>
              <span>New Partner</span>
            </button>
          </div>

          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse text-xs">
                <thead>
                  <tr class="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-semibold text-[11px]">
                    <th class="py-3 px-4 w-12">#</th>
                    <th class="py-3 px-4 w-14">Logo</th>
                    <th class="py-3 px-4">Partner Name</th>
                    <th class="py-3 px-4">Tier / Accord</th>
                    <th class="py-3 px-4 text-center">Status</th>
                    <th class="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  ${
                    pageItems.length === 0
                      ? `<tr><td colspan="6" class="py-10 text-center text-slate-400">No partners found.</td></tr>`
                      : pageItems
                          .map((p, idx) => {
                            const pStatus = p.status || 'Published';
                            return `
                    <tr class="hover:bg-slate-50/60 transition-colors">
                      <td class="py-3 px-4 font-mono text-slate-400">${start + idx + 1}</td>
                      <td class="py-3 px-4">
                        <img src="${escapeHtml(
                          p.logo || '/favicon.png'
                        )}" class="w-8 h-8 rounded-lg object-contain bg-white border border-slate-200 p-0.5" onerror="this.src='/favicon.png'"/>
                      </td>
                      <td class="py-3 px-4">
                        <div class="font-semibold text-slate-900">${escapeHtml(p.name)}</div>
                        <div class="text-slate-500 text-[11px] line-clamp-1">${escapeHtml(p.sector)}</div>
                      </td>
                      <td class="py-3 px-4 text-slate-600">${escapeHtml(p.tier)}</td>
                      <td class="py-3 px-4 text-center">
                        <button data-action="toggle-partner" data-id="${p.id}" class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold cursor-pointer transition-colors ${
                              pStatus === 'Published'
                                ? 'bg-primary-50 text-primary-700 border border-primary-200'
                                : 'bg-slate-100 text-slate-600 border border-slate-200'
                            }">
                          <i class="fa-solid ${pStatus === 'Published' ? 'fa-check text-[10px]' : 'fa-minus text-[10px]'}"></i>
                          <span>${pStatus}</span>
                        </button>
                      </td>
                      <td class="py-3 px-4 text-right">
                        <div class="flex items-center justify-end gap-1">
                          <button data-action="edit-partner" data-id="${p.id}" class="px-2.5 py-1 text-slate-700 hover:text-primary-600 font-semibold cursor-pointer">
                            Edit
                          </button>
                          <button data-action="delete-partner" data-id="${p.id}" class="px-2.5 py-1 text-slate-500 hover:text-slate-900 font-semibold cursor-pointer">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>`;
                          })
                          .join('')
                  }
                </tbody>
              </table>
            </div>

            <div id="pt-pagination-mount"></div>
          </div>
        </div>
      `;

      const mount = workspace.querySelector('#pt-pagination-mount');
      if (mount) {
        mount.appendChild(
          renderPaginationControls(filtered.length, st.page, st.pageSize, (newPage) => {
            st.page = newPage;
            renderPartners();
          })
        );
      }

      workspace.querySelector('#pt-search')?.addEventListener('input', (e) => {
        st.search = (e.target as HTMLInputElement).value;
        st.page = 1;
        renderPartners();
      });
      workspace.querySelector('#pt-tier-filter')?.addEventListener('change', (e) => {
        st.tier = (e.target as HTMLSelectElement).value;
        st.page = 1;
        renderPartners();
      });
      workspace.querySelector('#pt-status-filter')?.addEventListener('change', (e) => {
        st.status = (e.target as HTMLSelectElement).value;
        st.page = 1;
        renderPartners();
      });

      workspace.querySelectorAll('[data-action="toggle-partner"]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = (btn as HTMLElement).dataset.id!;
          const newStatus = adminStore.togglePartnerStatus(id);
          showToast(`Status: ${newStatus}`);
          renderPartners();
          updateNavBadges();
        });
      });

      workspace.querySelectorAll('[data-action="delete-partner"]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = (btn as HTMLElement).dataset.id!;
          const item = allPartners.find((p) => p.id === id);
          if (!confirm(`Delete "${item?.name || 'this partner'}"?`)) return;
          adminStore.deletePartner(id);
          showToast('Partner deleted');
          renderPartners();
          updateNavBadges();
        });
      });

      const openPartnerForm = (existing?: PartnerItem) => {
        const isEdit = Boolean(existing);
        const fields = `
          <div>
            <label class="block text-xs font-semibold text-slate-800 mb-1">Partner Organization Name</label>
            <input name="name" required value="${escapeHtml(existing?.name || '')}" placeholder="Name..." class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600" />
          </div>

          <div class="grid sm:grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-semibold text-slate-800 mb-1">Sector</label>
              <input name="sector" required value="${escapeHtml(existing?.sector || 'Financial & Fleet Credit')}" class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600" />
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-800 mb-1">Partnership Tier</label>
              <select name="tier" class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600">
                <option value="Institutional Accord" ${existing?.tier === 'Institutional Accord' ? 'selected' : ''}>Institutional Accord</option>
                <option value="Tier 1 Partner" ${existing?.tier === 'Tier 1 Partner' ? 'selected' : ''}>Tier 1 Partner</option>
                <option value="Strategic Financial Partner" ${existing?.tier === 'Strategic Financial Partner' ? 'selected' : ''}>Strategic Financial Partner</option>
                <option value="Tripartite Social Partner" ${existing?.tier === 'Tripartite Social Partner' ? 'selected' : ''}>Tripartite Social Partner</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-800 mb-1">Status</label>
            <select name="status" class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600">
              <option value="Published" ${(existing?.status || 'Published') === 'Published' ? 'selected' : ''}>Published</option>
              <option value="Draft" ${(existing?.status || 'Published') === 'Draft' ? 'selected' : ''}>Draft</option>
            </select>
          </div>

          <!-- File Upload for Partner Logo -->
          ${renderImageUploadInput('logo', 'Partner Logo Image File', existing?.logo || '', [
            { label: 'CBE Bank Logo', value: '/images/partner_cbe.svg' },
            { label: 'Roads Admin Logo', value: '/images/partner_era.png' },
            { label: 'Ministry Transport Logo', value: '/images/partner_mot.png' },
            { label: 'ETEF Emblem', value: '/images/etef_logo.png' },
          ])}

          <div>
            <label class="block text-xs font-semibold text-slate-800 mb-1">Description</label>
            <textarea name="description" rows="3" required class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600 leading-relaxed">${escapeHtml(existing?.description || '')}</textarea>
          </div>
        `;

        openModal(isEdit ? 'Edit Partner' : 'New Partner', fields, async (fd) => {
          const item: PartnerItem = {
            id: existing ? existing.id : 'partner-' + Date.now(),
            name: String(fd.get('name')).trim(),
            sector: String(fd.get('sector')).trim(),
            tier: String(fd.get('tier')).trim(),
            logo: String(fd.get('logo')).trim() || '/images/etef_logo.png',
            status: (fd.get('status') as any) || 'Published',
            description: String(fd.get('description')).trim(),
            since: existing ? existing.since : '2026',
            accordType: String(fd.get('tier')).trim(),
          };

          if (isEdit) {
            adminStore.updatePartner(existing!.id, item);
            showToast('Partner updated');
          } else {
            adminStore.addPartner(item);
            showToast('Partner added');
          }
          renderPartners();
          updateNavBadges();
        });
      };

      workspace.querySelector('#btn-add-partner')?.addEventListener('click', () => openPartnerForm());
      workspace.querySelectorAll('[data-action="edit-partner"]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = (btn as HTMLElement).dataset.id!;
          const item = allPartners.find((p) => p.id === id);
          if (item) openPartnerForm(item);
        });
      });
    };

    // ------------------------------------------------------------------------
    // TAB: FAQ DESK
    // ------------------------------------------------------------------------
    const renderFaqs = () => {
      topBarTitle.textContent = 'FAQ Desk';
      const allFaqs = adminStore.getFaqs();
      const st = state.faqs;

      let filtered = allFaqs.filter((f) => {
        const matchesQuery =
          !st.search ||
          f.question.toLowerCase().includes(st.search.toLowerCase()) ||
          f.answer.toLowerCase().includes(st.search.toLowerCase());
        const matchesCat = st.category === 'all' || f.category === st.category;
        const matchesStatus = st.status === 'all' || f.status === st.status;
        return matchesQuery && matchesCat && matchesStatus;
      });

      const totalPages = Math.max(1, Math.ceil(filtered.length / st.pageSize));
      if (st.page > totalPages) st.page = totalPages;
      const start = (st.page - 1) * st.pageSize;
      const pageItems = filtered.slice(start, start + st.pageSize);

      const categories = Array.from(new Set(allFaqs.map((f) => f.category)));

      workspace.innerHTML = `
        <div class="space-y-4">
          
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2">
              <input id="faq-search" type="text" placeholder="Search FAQ..." value="${escapeHtml(
                st.search
              )}" class="px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 w-48 sm:w-64" />

              <select id="faq-cat-filter" class="px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-700 focus:outline-none focus:border-primary-600">
                <option value="all">All Categories</option>
                ${categories.map((c) => `<option value="${escapeHtml(c)}" ${st.category === c ? 'selected' : ''}>${escapeHtml(c)}</option>`).join('')}
              </select>

              <select id="faq-status-filter" class="px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-700 focus:outline-none focus:border-primary-600">
                <option value="all">All Status</option>
                <option value="Published" ${st.status === 'Published' ? 'selected' : ''}>Published</option>
                <option value="Draft" ${st.status === 'Draft' ? 'selected' : ''}>Draft</option>
              </select>
            </div>

            <button id="btn-add-faq" class="px-4 py-2 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold text-xs shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer">
              <i class="fa-solid fa-plus text-[10px]"></i>
              <span>New FAQ</span>
            </button>
          </div>

          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse text-xs">
                <thead>
                  <tr class="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-semibold text-[11px]">
                    <th class="py-3 px-4 w-12">#</th>
                    <th class="py-3 px-4">Question</th>
                    <th class="py-3 px-4">Category</th>
                    <th class="py-3 px-4 text-center">Status</th>
                    <th class="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  ${
                    pageItems.length === 0
                      ? `<tr><td colspan="5" class="py-10 text-center text-slate-400">No questions found.</td></tr>`
                      : pageItems
                          .map(
                            (f, idx) => `
                    <tr class="hover:bg-slate-50/60 transition-colors">
                      <td class="py-3 px-4 font-mono text-slate-400">${start + idx + 1}</td>
                      <td class="py-3 px-4">
                        <div class="font-semibold text-slate-900">${escapeHtml(f.question)}</div>
                        <div class="text-slate-500 text-[11px] line-clamp-1 mt-0.5">${escapeHtml(f.answer)}</div>
                      </td>
                      <td class="py-3 px-4 text-slate-600">${escapeHtml(f.category)}</td>
                      <td class="py-3 px-4 text-center">
                        <button data-action="toggle-faq" data-id="${f.id}" class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold cursor-pointer transition-colors ${
                              f.status === 'Published'
                                ? 'bg-primary-50 text-primary-700 border border-primary-200'
                                : 'bg-slate-100 text-slate-600 border border-slate-200'
                            }">
                          <i class="fa-solid ${f.status === 'Published' ? 'fa-check text-[10px]' : 'fa-minus text-[10px]'}"></i>
                          <span>${f.status}</span>
                        </button>
                      </td>
                      <td class="py-3 px-4 text-right">
                        <div class="flex items-center justify-end gap-1">
                          <button data-action="edit-faq" data-id="${f.id}" class="px-2.5 py-1 text-slate-700 hover:text-primary-600 font-semibold cursor-pointer">
                            Edit
                          </button>
                          <button data-action="delete-faq" data-id="${f.id}" class="px-2.5 py-1 text-slate-500 hover:text-slate-900 font-semibold cursor-pointer">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>`
                          )
                          .join('')
                  }
                </tbody>
              </table>
            </div>

            <div id="faq-pagination-mount"></div>
          </div>
        </div>
      `;

      const mount = workspace.querySelector('#faq-pagination-mount');
      if (mount) {
        mount.appendChild(
          renderPaginationControls(filtered.length, st.page, st.pageSize, (newPage) => {
            st.page = newPage;
            renderFaqs();
          })
        );
      }

      workspace.querySelector('#faq-search')?.addEventListener('input', (e) => {
        st.search = (e.target as HTMLInputElement).value;
        st.page = 1;
        renderFaqs();
      });
      workspace.querySelector('#faq-cat-filter')?.addEventListener('change', (e) => {
        st.category = (e.target as HTMLSelectElement).value;
        st.page = 1;
        renderFaqs();
      });
      workspace.querySelector('#faq-status-filter')?.addEventListener('change', (e) => {
        st.status = (e.target as HTMLSelectElement).value;
        st.page = 1;
        renderFaqs();
      });

      workspace.querySelectorAll('[data-action="toggle-faq"]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = (btn as HTMLElement).dataset.id!;
          const newStatus = adminStore.toggleFaqStatus(id);
          showToast(`Status: ${newStatus}`);
          renderFaqs();
          updateNavBadges();
        });
      });

      workspace.querySelectorAll('[data-action="delete-faq"]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = (btn as HTMLElement).dataset.id!;
          const item = allFaqs.find((f) => f.id === id);
          if (!confirm(`Delete "${item?.question || 'this question'}"?`)) return;
          adminStore.deleteFaq(id);
          showToast('FAQ deleted');
          renderFaqs();
          updateNavBadges();
        });
      });

      const openFaqForm = (existing?: FaqItem) => {
        const isEdit = Boolean(existing);
        const fields = `
          <div>
            <label class="block text-xs font-semibold text-slate-800 mb-1">Question</label>
            <input name="question" required value="${escapeHtml(existing?.question || '')}" placeholder="Question..." class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600" />
          </div>

          <div class="grid sm:grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-semibold text-slate-800 mb-1">Category</label>
              <input name="category" required value="${escapeHtml(existing?.category || 'Institutional')}" class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600" />
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-800 mb-1">Status</label>
              <select name="status" class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600">
                <option value="Published" ${existing?.status === 'Published' ? 'selected' : ''}>Published</option>
                <option value="Draft" ${existing?.status === 'Draft' ? 'selected' : ''}>Draft</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-800 mb-1">Answer</label>
            <textarea name="answer" rows="4" required class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600 leading-relaxed">${escapeHtml(existing?.answer || '')}</textarea>
          </div>
        `;

        openModal(isEdit ? 'Edit FAQ' : 'New FAQ', fields, async (fd) => {
          const item: FaqItem = {
            id: existing ? existing.id : 'faq-' + Date.now(),
            question: String(fd.get('question')).trim(),
            answer: String(fd.get('answer')).trim(),
            category: String(fd.get('category')).trim(),
            status: (fd.get('status') as any) || 'Published',
          };

          if (isEdit) {
            adminStore.updateFaq(existing!.id, item);
            showToast('FAQ updated');
          } else {
            adminStore.addFaq(item);
            showToast('FAQ added');
          }
          renderFaqs();
          updateNavBadges();
        });
      };

      workspace.querySelector('#btn-add-faq')?.addEventListener('click', () => openFaqForm());
      workspace.querySelectorAll('[data-action="edit-faq"]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = (btn as HTMLElement).dataset.id!;
          const item = allFaqs.find((f) => f.id === id);
          if (item) openFaqForm(item);
        });
      });
    };

    // ------------------------------------------------------------------------
    // TAB: HERO BANNERS (With File Upload & Live Preview)
    // ------------------------------------------------------------------------
    const renderHeroes = () => {
      topBarTitle.textContent = 'Hero Banners';
      const heroes = adminStore.getHeroes();
      let selectedHeroId = 'home';
      const curHero = () => heroes.find((h) => h.id === selectedHeroId) || heroes[0];

      const draw = () => {
        const h = curHero();
        workspace.innerHTML = `
          <div class="space-y-5">
            
            <!-- Page Selector Tabs -->
            <div class="flex items-center gap-1.5 overflow-x-auto pb-1" id="hero-page-selector">
              ${heroes
                .map(
                  (hero) => `
                <button data-heroid="${hero.id}" class="px-3.5 py-1.5 rounded-lg text-xs font-semibold shrink-0 transition-colors cursor-pointer ${
                    hero.id === selectedHeroId
                      ? 'bg-primary-600 text-white shadow-2xs'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                  }">
                  ${hero.pageName}
                </button>`
                )
                .join('')}
            </div>

            <!-- Preview Card -->
            <div class="bg-slate-900 rounded-2xl overflow-hidden relative min-h-[220px] flex items-center justify-center p-6 text-center border border-slate-800">
              <img id="hero-preview-img" src="${escapeHtml(
                h.image
              )}" class="absolute inset-0 w-full h-full object-cover opacity-60" onerror="this.src='/images/hero_transport_hub.jpg'"/>
              <div class="relative z-10 max-w-xl space-y-2">
                <span id="hero-preview-badge" class="px-3 py-0.5 rounded-full text-[10px] font-bold bg-white/20 text-white uppercase tracking-wider inline-block">
                  ${escapeHtml(h.badge)}
                </span>
                <h2 id="hero-preview-title" class="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  ${escapeHtml(h.title)}
                </h2>
                <p id="hero-preview-subtitle" class="text-xs text-white/90 line-clamp-2">
                  ${escapeHtml(h.subtitle)}
                </p>
              </div>
            </div>

            <!-- Form -->
            <form id="hero-edit-form" class="bg-white border border-slate-200 rounded-xl p-5 space-y-4">
              <div>
                <label class="block text-xs font-semibold text-slate-800 mb-1">Headline</label>
                <input name="title" required value="${escapeHtml(
                  h.title
                )}" class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600" />
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-800 mb-1">Subtitle</label>
                <textarea name="subtitle" rows="2" class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600 leading-relaxed">${escapeHtml(
                  h.subtitle
                )}</textarea>
              </div>

              <div class="grid sm:grid-cols-2 gap-3">
                <div>
                  <label class="block text-xs font-semibold text-slate-800 mb-1">Badge Text</label>
                  <input name="badge" value="${escapeHtml(
                    h.badge
                  )}" class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600" />
                </div>

                <div>
                  <label class="block text-xs font-semibold text-slate-800 mb-1">Brightness</label>
                  <select name="brightness" class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600">
                    <option value="brightness-90" ${h.brightness === 'brightness-90' ? 'selected' : ''}>Darkened</option>
                    <option value="brightness-100" ${h.brightness === 'brightness-100' ? 'selected' : ''}>Normal</option>
                    <option value="brightness-105" ${h.brightness === 'brightness-105' ? 'selected' : ''}>Clear (Recommended)</option>
                    <option value="brightness-110" ${h.brightness === 'brightness-110' ? 'selected' : ''}>Bright</option>
                  </select>
                </div>
              </div>

              <!-- Hero Image File Upload -->
              ${renderImageUploadInput('image', 'Hero Background Image File', h.image, [
                { label: 'Transport Hub & Corridor', value: '/images/hero_transport_hub.jpg' },
                { label: 'Fleet & Logistics', value: '/images/about_hero_fleet.jpg' },
                { label: 'Press & Media Hub', value: '/images/news_hero_press.jpg' },
                { label: 'Careers & Transit', value: '/images/vacancies_hero_careers.jpg' },
                { label: 'Partners Network', value: '/images/partners_hero_network.jpg' },
                { label: 'FAQ & Knowledge Hub', value: '/images/faq_hero_support.jpg' },
                { label: 'Headquarters Building', value: '/images/contact_hero_hq.jpg' },
              ])}

              <div class="pt-3 border-t border-slate-200 flex justify-end">
                <button type="submit" class="px-5 py-2 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold text-xs shadow-xs transition-colors cursor-pointer">
                  Save Changes
                </button>
              </div>
            </form>

          </div>
        `;

        initImageUploaders(workspace);

        workspace.querySelectorAll('#hero-page-selector button').forEach((btn) => {
          btn.addEventListener('click', () => {
            selectedHeroId = (btn as HTMLElement).dataset.heroid || 'home';
            draw();
          });
        });

        const titleInput = workspace.querySelector<HTMLInputElement>('input[name="title"]');
        const subInput = workspace.querySelector<HTMLTextAreaElement>('textarea[name="subtitle"]');
        const badgeInput = workspace.querySelector<HTMLInputElement>('input[name="badge"]');

        titleInput?.addEventListener('input', () => {
          const el = workspace.querySelector('#hero-preview-title');
          if (el) el.textContent = titleInput.value;
        });
        subInput?.addEventListener('input', () => {
          const el = workspace.querySelector('#hero-preview-subtitle');
          if (el) el.textContent = subInput.value;
        });
        badgeInput?.addEventListener('input', () => {
          const el = workspace.querySelector('#hero-preview-badge');
          if (el) el.textContent = badgeInput.value;
        });

        workspace.querySelector('#hero-edit-form')?.addEventListener('submit', async (e) => {
          e.preventDefault();
          const fd = new FormData(e.currentTarget as HTMLFormElement);
          const updates: Partial<HeroItem> = {
            title: String(fd.get('title')).trim(),
            subtitle: String(fd.get('subtitle')).trim(),
            badge: String(fd.get('badge')).trim(),
            image: String(fd.get('image')).trim() || h.image,
            brightness: String(fd.get('brightness')).trim(),
          };

          adminStore.updateHero(selectedHeroId, updates);

          if (selectedHeroId === 'home') {
            try {
              await api(`/admin/homepage/hero?publish=true`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': csrf },
                body: JSON.stringify({ title: updates.title, subtitle: updates.subtitle }),
              });
            } catch {
              // ignore
            }
          }

          showToast('Hero banner saved');
          draw();
        });
      };

      draw();
    };

    // ------------------------------------------------------------------------
    // TAB: BRANDING & CONTACT (With Logo & Favicon File Upload)
    // ------------------------------------------------------------------------
    const renderContact = () => {
      topBarTitle.textContent = 'Branding & Contacts';
      const content = adminStore.getContent();

      workspace.innerHTML = `
        <form id="contact-edit-form" class="space-y-5">
          
          <!-- Logos Card -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 space-y-4">
            <h3 class="font-bold text-slate-900 text-sm">Official Logos &amp; Emblems</h3>

            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                ${renderImageUploadInput('logoUrl', 'Header & Footer Logo File', content.logoUrl || '/favicon.png', [
                  { label: 'Standard ETEF Favicon', value: '/favicon.png' },
                  { label: 'ETEF Crest Logo', value: '/images/etef_logo.png' },
                ])}
              </div>

              <div>
                ${renderImageUploadInput('faviconUrl', 'Browser Favicon File', content.faviconUrl || '/favicon.png', [
                  { label: 'Standard ETEF Favicon', value: '/favicon.png' },
                ])}
              </div>
            </div>
          </div>

          <!-- Legal Names & Charter -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 space-y-4">
            <h3 class="font-bold text-slate-900 text-sm">Organization Details</h3>

            <div class="grid sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-semibold text-slate-800 mb-1">Name (English)</label>
                <input name="federationNameEng" value="${escapeHtml(
                  content.federationNameEng
                )}" class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600" />
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-800 mb-1">Name (Amharic)</label>
                <input name="federationNameAm" value="${escapeHtml(
                  content.federationNameAm
                )}" class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600" />
              </div>

              <div class="sm:col-span-2">
                <label class="block text-xs font-semibold text-slate-800 mb-1">Proclamation Reference (English)</label>
                <input name="proclamationTextEng" value="${escapeHtml(
                  content.proclamationTextEng
                )}" class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600" />
              </div>

              <div class="sm:col-span-2">
                <label class="block text-xs font-semibold text-slate-800 mb-1">Proclamation Reference (Amharic)</label>
                <input name="proclamationTextAm" value="${escapeHtml(
                  content.proclamationTextAm
                )}" class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600" />
              </div>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 space-y-4">
            <h3 class="font-bold text-slate-900 text-sm">Office &amp; Contact</h3>

            <div class="grid sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-semibold text-slate-800 mb-1">Phone</label>
                <input name="contactPhone" value="${escapeHtml(
                  content.contactPhone
                )}" class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600 font-mono" />
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-800 mb-1">Email</label>
                <input name="contactEmail" type="email" value="${escapeHtml(
                  content.contactEmail
                )}" class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600 font-mono" />
              </div>

              <div class="sm:col-span-2">
                <label class="block text-xs font-semibold text-slate-800 mb-1">Address</label>
                <input name="contactAddress" value="${escapeHtml(
                  content.contactAddress
                )}" class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600" />
              </div>

              <div class="sm:col-span-2">
                <label class="block text-xs font-semibold text-slate-800 mb-1">Working Hours</label>
                <input name="supportHours" value="${escapeHtml(
                  content.supportHours
                )}" class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600" />
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 space-y-4">
            <h3 class="font-bold text-slate-900 text-sm">Social Links</h3>

            <div class="grid sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-semibold text-slate-800 mb-1">Facebook</label>
                <input name="facebookUrl" value="${escapeHtml(
                  content.facebookUrl || 'https://facebook.com/etef.ethiopia'
                )}" class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600 font-mono" />
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-800 mb-1">Telegram</label>
                <input name="telegramUrl" value="${escapeHtml(
                  content.telegramUrl || 'https://t.me/etef_official'
                )}" class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600 font-mono" />
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-800 mb-1">LinkedIn</label>
                <input name="linkedinUrl" value="${escapeHtml(
                  content.linkedinUrl || 'https://linkedin.com/company/etef-ethiopia'
                )}" class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600 font-mono" />
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-800 mb-1">Twitter / X</label>
                <input name="twitterUrl" value="${escapeHtml(
                  content.twitterUrl || 'https://twitter.com/etef_ethiopia'
                )}" class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600 font-mono" />
              </div>
            </div>
          </div>

          <div class="flex justify-end">
            <button type="submit" class="px-6 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold text-xs shadow-xs transition-colors cursor-pointer">
              Save Settings
            </button>
          </div>
        </form>
      `;

      initImageUploaders(workspace);

      workspace.querySelector('#contact-edit-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget as HTMLFormElement);
        const settings: ContentSettings = {
          federationNameEng: String(fd.get('federationNameEng')).trim(),
          federationNameAm: String(fd.get('federationNameAm')).trim(),
          proclamationTextEng: String(fd.get('proclamationTextEng')).trim(),
          proclamationTextAm: String(fd.get('proclamationTextAm')).trim(),
          statMembers: content.statMembers,
          statAssociations: content.statAssociations,
          statUnions: content.statUnions,
          statDate: content.statDate,
          contactEmail: String(fd.get('contactEmail')).trim(),
          contactPhone: String(fd.get('contactPhone')).trim(),
          contactAddress: String(fd.get('contactAddress')).trim(),
          supportHours: String(fd.get('supportHours')).trim(),
          logoUrl: String(fd.get('logoUrl')).trim(),
          faviconUrl: String(fd.get('faviconUrl')).trim(),
          facebookUrl: String(fd.get('facebookUrl')).trim(),
          telegramUrl: String(fd.get('telegramUrl')).trim(),
          linkedinUrl: String(fd.get('linkedinUrl')).trim(),
          twitterUrl: String(fd.get('twitterUrl')).trim(),
        };

        adminStore.saveContent(settings);

        const headerLogo = root.querySelector<HTMLImageElement>('#admin-header-logo');
        if (headerLogo && settings.logoUrl) headerLogo.src = settings.logoUrl;

        showToast('Settings saved');
      });
    };

    // ------------------------------------------------------------------------
    // TAB: MEMBERSHIPS
    // ------------------------------------------------------------------------
    const renderMemberships = () => {
      topBarTitle.textContent = 'Memberships';
      const allMembers = adminStore.getMembers();
      const st = state.members;

      let filtered = allMembers.filter((m) => {
        const matchesQuery =
          !st.search ||
          m.name.toLowerCase().includes(st.search.toLowerCase()) ||
          m.sector.toLowerCase().includes(st.search.toLowerCase()) ||
          m.region.toLowerCase().includes(st.search.toLowerCase());
        const matchesStatus = st.status === 'all' || m.status === st.status;
        return matchesQuery && matchesStatus;
      });

      const totalPages = Math.max(1, Math.ceil(filtered.length / st.pageSize));
      if (st.page > totalPages) st.page = totalPages;
      const start = (st.page - 1) * st.pageSize;
      const pageItems = filtered.slice(start, start + st.pageSize);

      workspace.innerHTML = `
        <div class="space-y-4">
          
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2">
              <input id="mb-search" type="text" placeholder="Search members..." value="${escapeHtml(
                st.search
              )}" class="px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 w-48 sm:w-64" />

              <select id="mb-status-filter" class="px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-700 focus:outline-none focus:border-primary-600">
                <option value="all">All Status</option>
                <option value="Active" ${st.status === 'Active' ? 'selected' : ''}>Active</option>
                <option value="Suspended" ${st.status === 'Suspended' ? 'selected' : ''}>Suspended</option>
              </select>
            </div>

            <button id="btn-add-member" class="px-4 py-2 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold text-xs shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer">
              <i class="fa-solid fa-plus text-[10px]"></i>
              <span>New Member</span>
            </button>
          </div>

          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse text-xs">
                <thead>
                  <tr class="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-semibold text-[11px]">
                    <th class="py-3 px-4 w-12">#</th>
                    <th class="py-3 px-4">Member Organization</th>
                    <th class="py-3 px-4">Sector</th>
                    <th class="py-3 px-4">Fleet</th>
                    <th class="py-3 px-4 text-center">Status</th>
                    <th class="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  ${
                    pageItems.length === 0
                      ? `<tr><td colspan="6" class="py-10 text-center text-slate-400">No members found.</td></tr>`
                      : pageItems
                          .map(
                            (m, idx) => `
                    <tr class="hover:bg-slate-50/60 transition-colors">
                      <td class="py-3 px-4 font-mono text-slate-400">${start + idx + 1}</td>
                      <td class="py-3 px-4">
                        <div class="font-semibold text-slate-900">${escapeHtml(m.name)}</div>
                        <div class="text-slate-500 text-[11px]">${escapeHtml(m.region)}</div>
                      </td>
                      <td class="py-3 px-4 text-slate-600">${escapeHtml(m.sector)}</td>
                      <td class="py-3 px-4 font-mono text-slate-600">${escapeHtml(m.fleetCount)}</td>
                      <td class="py-3 px-4 text-center">
                        <button data-action="toggle-member" data-id="${m.id}" class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold cursor-pointer transition-colors ${
                              m.status === 'Active'
                                ? 'bg-primary-50 text-primary-700 border border-primary-200'
                                : 'bg-slate-100 text-slate-600 border border-slate-200'
                            }">
                          <i class="fa-solid ${m.status === 'Active' ? 'fa-check text-[10px]' : 'fa-minus text-[10px]'}"></i>
                          <span>${m.status}</span>
                        </button>
                      </td>
                      <td class="py-3 px-4 text-right">
                        <div class="flex items-center justify-end gap-1">
                          <button data-action="edit-member" data-id="${m.id}" class="px-2.5 py-1 text-slate-700 hover:text-primary-600 font-semibold cursor-pointer">
                            Edit
                          </button>
                          <button data-action="delete-member" data-id="${m.id}" class="px-2.5 py-1 text-slate-500 hover:text-slate-900 font-semibold cursor-pointer">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>`
                          )
                          .join('')
                  }
                </tbody>
              </table>
            </div>

            <div id="mb-pagination-mount"></div>
          </div>
        </div>
      `;

      const mount = workspace.querySelector('#mb-pagination-mount');
      if (mount) {
        mount.appendChild(
          renderPaginationControls(filtered.length, st.page, st.pageSize, (newPage) => {
            st.page = newPage;
            renderMemberships();
          })
        );
      }

      workspace.querySelector('#mb-search')?.addEventListener('input', (e) => {
        st.search = (e.target as HTMLInputElement).value;
        st.page = 1;
        renderMemberships();
      });
      workspace.querySelector('#mb-status-filter')?.addEventListener('change', (e) => {
        st.status = (e.target as HTMLSelectElement).value;
        st.page = 1;
        renderMemberships();
      });

      workspace.querySelectorAll('[data-action="toggle-member"]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = (btn as HTMLElement).dataset.id!;
          const newStatus = adminStore.toggleMemberStatus(id);
          showToast(`Status: ${newStatus}`);
          renderMemberships();
          updateNavBadges();
        });
      });

      workspace.querySelectorAll('[data-action="delete-member"]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = (btn as HTMLElement).dataset.id!;
          const item = allMembers.find((m) => m.id === id);
          if (!confirm(`Delete "${item?.name || 'this member'}"?`)) return;
          adminStore.deleteMember(id);
          showToast('Member removed');
          renderMemberships();
          updateNavBadges();
        });
      });

      const openMemberForm = (existing?: MemberItem) => {
        const isEdit = Boolean(existing);
        const fields = `
          <div>
            <label class="block text-xs font-semibold text-slate-800 mb-1">Organization Name</label>
            <input name="name" required value="${escapeHtml(existing?.name || '')}" class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600" />
          </div>

          <div class="grid sm:grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-semibold text-slate-800 mb-1">Sector</label>
              <input name="sector" required value="${escapeHtml(existing?.sector || 'Dry Cargo Transport')}" class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600" />
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-800 mb-1">Fleet Count</label>
              <input name="fleetCount" required value="${escapeHtml(existing?.fleetCount || '150 Vehicles')}" class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600" />
            </div>
          </div>

          <div class="grid sm:grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-semibold text-slate-800 mb-1">Region</label>
              <input name="region" required value="${escapeHtml(existing?.region || 'Addis Ababa')}" class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600" />
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-800 mb-1">Status</label>
              <select name="status" class="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600">
                <option value="Active" ${existing?.status === 'Active' ? 'selected' : ''}>Active</option>
                <option value="Suspended" ${existing?.status === 'Suspended' ? 'selected' : ''}>Suspended</option>
              </select>
            </div>
          </div>
        `;

        openModal(isEdit ? 'Edit Member' : 'New Member', fields, async (fd) => {
          const item: MemberItem = {
            id: existing ? existing.id : 'mem-' + Date.now(),
            name: String(fd.get('name')).trim(),
            sector: String(fd.get('sector')).trim(),
            fleetCount: String(fd.get('fleetCount')).trim(),
            region: String(fd.get('region')).trim(),
            tier: 'Institutional Member',
            status: (fd.get('status') as any) || 'Active',
            joinedDate: existing ? existing.joinedDate : new Date().toISOString().substring(0, 10),
          };

          if (isEdit) {
            adminStore.updateMember(existing!.id, item);
            showToast('Member updated');
          } else {
            adminStore.addMember(item);
            showToast('Member enrolled');
          }
          renderMemberships();
          updateNavBadges();
        });
      };

      workspace.querySelector('#btn-add-member')?.addEventListener('click', () => openMemberForm());
      workspace.querySelectorAll('[data-action="edit-member"]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = (btn as HTMLElement).dataset.id!;
          const item = allMembers.find((m) => m.id === id);
          if (item) openMemberForm(item);
        });
      });
    };

    // ------------------------------------------------------------------------
    // TAB: ACTIVITY AUDIT LOG
    // ------------------------------------------------------------------------
    const renderAudit = () => {
      topBarTitle.textContent = 'Activity Log';
      const allLogs = adminStore.getLogs();
      const st = state.audit;

      let filtered = allLogs.filter((l) => {
        const matchesQuery =
          !st.search ||
          l.target.toLowerCase().includes(st.search.toLowerCase()) ||
          l.operator.toLowerCase().includes(st.search.toLowerCase());
        const matchesCat = st.category === 'all' || l.category === st.category;
        return matchesQuery && matchesCat;
      });

      const totalPages = Math.max(1, Math.ceil(filtered.length / st.pageSize));
      if (st.page > totalPages) st.page = totalPages;
      const start = (st.page - 1) * st.pageSize;
      const pageItems = filtered.slice(start, start + st.pageSize);

      const categories = Array.from(new Set(allLogs.map((l) => l.category)));

      workspace.innerHTML = `
        <div class="space-y-4">
          
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2">
              <input id="log-search" type="text" placeholder="Search activity..." value="${escapeHtml(
                st.search
              )}" class="px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 w-48 sm:w-64" />

              <select id="log-cat-filter" class="px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-700 focus:outline-none focus:border-primary-600">
                <option value="all">All Categories</option>
                ${categories.map((c) => `<option value="${escapeHtml(c)}" ${st.category === c ? 'selected' : ''}>${escapeHtml(c)}</option>`).join('')}
              </select>
            </div>

            <button id="btn-clear-logs" class="px-3.5 py-2 rounded-xl border border-slate-300 hover:border-slate-400 bg-white text-slate-700 text-xs font-semibold transition-colors cursor-pointer">
              Clear Log
            </button>
          </div>

          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse text-xs">
                <thead>
                  <tr class="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-semibold text-[11px]">
                    <th class="py-3 px-4 w-12">#</th>
                    <th class="py-3 px-4">Timestamp</th>
                    <th class="py-3 px-4">Action</th>
                    <th class="py-3 px-4">Category</th>
                    <th class="py-3 px-4">Details</th>
                    <th class="py-3 px-4">Operator</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  ${
                    pageItems.length === 0
                      ? `<tr><td colspan="6" class="py-10 text-center text-slate-400">No records found.</td></tr>`
                      : pageItems
                          .map(
                            (l, idx) => `
                    <tr class="hover:bg-slate-50/60 transition-colors">
                      <td class="py-3 px-4 font-mono text-slate-400">${start + idx + 1}</td>
                      <td class="py-3 px-4 font-mono text-slate-500 whitespace-nowrap">${escapeHtml(l.timestamp)}</td>
                      <td class="py-3 px-4">
                        <span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700">${l.action}</span>
                      </td>
                      <td class="py-3 px-4 font-medium text-slate-700">${escapeHtml(l.category)}</td>
                      <td class="py-3 px-4 font-medium text-slate-900">${escapeHtml(l.target)}</td>
                      <td class="py-3 px-4 text-slate-500 whitespace-nowrap">${escapeHtml(l.operator)}</td>
                    </tr>`
                          )
                          .join('')
                  }
                </tbody>
              </table>
            </div>

            <div id="log-pagination-mount"></div>
          </div>
        </div>
      `;

      const mount = workspace.querySelector('#log-pagination-mount');
      if (mount) {
        mount.appendChild(
          renderPaginationControls(filtered.length, st.page, st.pageSize, (newPage) => {
            st.page = newPage;
            renderAudit();
          })
        );
      }

      workspace.querySelector('#log-search')?.addEventListener('input', (e) => {
        st.search = (e.target as HTMLInputElement).value;
        st.page = 1;
        renderAudit();
      });
      workspace.querySelector('#log-cat-filter')?.addEventListener('change', (e) => {
        st.category = (e.target as HTMLSelectElement).value;
        st.page = 1;
        renderAudit();
      });
      workspace.querySelector('#btn-clear-logs')?.addEventListener('click', () => {
        if (!confirm('Clear all logs?')) return;
        adminStore.clearLogs();
        showToast('Logs cleared');
        renderAudit();
      });
    };

    // Category Switching Router
    const switchCategory = (cat: string) => {
      activeCategory = cat;

      root.querySelectorAll<HTMLButtonElement>('.cat-nav-btn').forEach((btn) => {
        const isMatch = btn.dataset.cat === cat;
        if (isMatch) {
          btn.classList.remove('text-slate-600', 'hover:text-slate-900', 'hover:bg-slate-100', 'font-medium');
          btn.classList.add('active', 'bg-primary-600', 'text-white', 'font-semibold');
        } else {
          btn.classList.remove('active', 'bg-primary-600', 'text-white', 'font-semibold');
          btn.classList.add('text-slate-600', 'hover:text-slate-900', 'hover:bg-slate-100', 'font-medium');
        }
      });

      if (cat === 'dashboard') renderDashboard();
      else if (cat === 'services') renderServices();
      else if (cat === 'news') renderNews();
      else if (cat === 'vacancies') renderVacancies();
      else if (cat === 'partners') renderPartners();
      else if (cat === 'faqs') renderFaqs();
      else if (cat === 'heroes') renderHeroes();
      else if (cat === 'contact') renderContact();
      else if (cat === 'memberships') renderMemberships();
      else if (cat === 'audit') renderAudit();
      else renderDashboard();
    };

    // Nav click handlers
    root.querySelectorAll<HTMLButtonElement>('.cat-nav-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const cat = btn.dataset.cat || 'dashboard';
        switchCategory(cat);
      });
    });

    // Sign Out
    root.querySelector('#cms-logout')?.addEventListener('click', async () => {
      try {
        await api('/auth/logout', { method: 'POST', headers: { 'X-CSRF-Token': csrf } });
      } finally {
        showLogin();
      }
    });

    // Initial render
    updateNavBadges();
    switchCategory(activeCategory);
  };

  try {
    const me = await api('/auth/me');
    csrf = me.csrfToken;
    await showStudio();
  } catch {
    showLogin();
  }
}
