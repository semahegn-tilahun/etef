// ETEF Secretariat Management Portal - Modern Human-Centered Admin Console
// Clean, single-accent design (#1d64d6 + white + black/slate), real image file uploaders, and direct controls.

const markup = `
<div id="admin-root-container" class="flex h-screen w-full bg-slate-50 overflow-hidden font-sans text-slate-800">
    
    <!-- Mobile Sidebar Backdrop -->
    <div id="admin-mobile-backdrop" class="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-40 hidden md:hidden transition-opacity"></div>

    <!-- Admin Sidebar -->
    <aside id="admin-sidebar" class="w-64 bg-white border-r border-slate-200 flex flex-col shrink-0 h-screen z-50 fixed md:static inset-y-0 left-0 -translate-x-full md:translate-x-0 transition-transform duration-200 ease-in-out shadow-lg md:shadow-none select-none">
        
        <!-- Sidebar Brand Header -->
        <div class="h-16 flex items-center justify-between px-5 border-b border-slate-200 shrink-0">
            <a href="/admin" class="flex items-center gap-3">
                <img src="/favicon.png" alt="ETEF Logo" class="h-9 w-9 object-contain rounded-lg border border-slate-200 p-0.5 shrink-0" />
                <div>
                    <div class="font-bold text-slate-900 text-sm tracking-tight leading-none">ETEF Admin</div>
                    <span class="text-[11px] text-slate-500 font-medium block mt-1">Management Studio</span>
                </div>
            </a>
            <button id="admin-mobile-close-btn" class="md:hidden text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Close menu">
                <i class="fa-solid fa-xmark text-base"></i>
            </button>
        </div>

        <!-- Sidebar Navigation Menu -->
        <div class="flex-grow overflow-y-auto px-3 py-4 space-y-5">
            <div>
                <span class="px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">Overview</span>
                <nav class="space-y-0.5 text-xs font-semibold">
                    <a href="#dashboard" id="nav-dashboard" class="flex items-center justify-between px-3 py-2 rounded-lg bg-primary-600 text-white shadow-xs transition-colors">
                        <span class="flex items-center gap-2.5">
                            <i class="fa-solid fa-chart-pie w-4 text-center text-xs"></i>
                            <span>Dashboard</span>
                        </span>
                    </a>
                </nav>
            </div>

            <div>
                <span class="px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">Content & Media</span>
                <nav class="space-y-0.5 text-xs font-medium">
                    <a href="#heroes" id="nav-heroes" class="flex items-center justify-between px-3 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors">
                        <span class="flex items-center gap-2.5">
                            <i class="fa-solid fa-image w-4 text-center text-xs"></i>
                            <span>Page Heroes</span>
                        </span>
                        <span class="px-1.5 py-0.5 text-[10px] font-bold rounded bg-slate-100 text-slate-600">7</span>
                    </a>

                    <a href="#board" id="nav-board" class="flex items-center justify-between px-3 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors">
                        <span class="flex items-center gap-2.5">
                            <i class="fa-solid fa-users w-4 text-center text-xs"></i>
                            <span>Board Members</span>
                        </span>
                        <span id="badge-board-count" class="px-1.5 py-0.5 text-[10px] font-bold rounded bg-slate-100 text-slate-600">13</span>
                    </a>

                    <a href="#vacancies" id="nav-vacancies" class="flex items-center justify-between px-3 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors">
                        <span class="flex items-center gap-2.5">
                            <i class="fa-solid fa-briefcase w-4 text-center text-xs"></i>
                            <span>Job Vacancies</span>
                        </span>
                        <span id="badge-vacancies-count" class="px-1.5 py-0.5 text-[10px] font-bold rounded bg-slate-100 text-slate-600">4</span>
                    </a>

                    <a href="#news" id="nav-news" class="flex items-center justify-between px-3 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors">
                        <span class="flex items-center gap-2.5">
                            <i class="fa-solid fa-newspaper w-4 text-center text-xs"></i>
                            <span>News & Bulletins</span>
                        </span>
                        <span id="badge-news-count" class="px-1.5 py-0.5 text-[10px] font-bold rounded bg-slate-100 text-slate-600">4</span>
                    </a>

                    <a href="#partners" id="nav-partners" class="flex items-center justify-between px-3 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors">
                        <span class="flex items-center gap-2.5">
                            <i class="fa-solid fa-handshake w-4 text-center text-xs"></i>
                            <span>Partners & Sponsors</span>
                        </span>
                        <span id="badge-partners-count" class="px-1.5 py-0.5 text-[10px] font-bold rounded bg-slate-100 text-slate-600">4</span>
                    </a>

                    <a href="#content" id="nav-content" class="flex items-center justify-between px-3 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors">
                        <span class="flex items-center gap-2.5">
                            <i class="fa-solid fa-sliders w-4 text-center text-xs"></i>
                            <span>Page Content</span>
                        </span>
                    </a>
                </nav>
            </div>

            <div>
                <span class="px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">Management</span>
                <nav class="space-y-0.5 text-xs font-medium">
                    <a href="#memberships" id="nav-memberships" class="flex items-center justify-between px-3 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors">
                        <span class="flex items-center gap-2.5">
                            <i class="fa-solid fa-address-book w-4 text-center text-xs"></i>
                            <span>Memberships</span>
                        </span>
                        <span class="px-1.5 py-0.5 text-[10px] font-bold rounded bg-slate-100 text-slate-600">342</span>
                    </a>

                    <a href="#logs" id="nav-logs" class="flex items-center justify-between px-3 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors">
                        <span class="flex items-center gap-2.5">
                            <i class="fa-solid fa-clock-rotate-left w-4 text-center text-xs"></i>
                            <span>Activity Logs</span>
                        </span>
                        <span id="badge-logs-count" class="px-1.5 py-0.5 text-[10px] font-bold rounded bg-slate-100 text-slate-600">Live</span>
                    </a>
                </nav>
            </div>
        </div>

        <!-- Sidebar User & Footer Action -->
        <div class="p-3 border-t border-slate-200 bg-slate-50/70 shrink-0 space-y-2">
            <div class="flex items-center gap-2.5 px-2 py-1.5">
                <div class="w-8 h-8 rounded-full bg-primary-600 text-white font-bold flex items-center justify-center text-xs">
                    AD
                </div>
                <div class="overflow-hidden">
                    <div class="text-xs font-bold text-slate-900 truncate">admin@etef.com</div>
                    <div class="text-[10px] text-slate-500">Administrator</div>
                </div>
            </div>
            <a href="/" class="flex items-center justify-between px-2.5 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors text-xs font-medium border border-slate-200 bg-white">
                <span class="flex items-center gap-2">
                    <i class="fa-solid fa-arrow-up-right-from-square text-[11px] text-primary-600"></i>
                    <span>View Public Website</span>
                </span>
                <i class="fa-solid fa-angle-right text-[10px] text-slate-400"></i>
            </a>
        </div>
    </aside>

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
        
        <!-- Top Navbar -->
        <header class="h-16 bg-white border-b border-slate-200 px-4 sm:px-8 flex items-center justify-between sticky top-0 z-30 shrink-0">
            <div class="flex items-center gap-3">
                <button id="admin-mobile-menu-btn" class="md:hidden text-slate-600 hover:text-slate-900 p-2 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Open navigation menu">
                    <i class="fa-solid fa-bars text-base"></i>
                </button>
                <div>
                    <h1 class="text-base sm:text-lg font-bold text-slate-900 leading-tight" id="pageTitle">Admin Overview</h1>
                </div>
            </div>
            
            <div class="flex items-center gap-3">
                <div class="relative hidden sm:block w-64">
                    <input type="text" id="admin-global-search" placeholder="Search pages, vacancies, news..." class="w-full pl-8 pr-3 py-1.5 border border-slate-200 rounded-lg text-xs bg-slate-50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:bg-white transition-all">
                    <i class="fa-solid fa-magnifying-glass absolute left-2.5 top-2.5 text-slate-400 text-xs"></i>
                </div>
                <a href="/" target="_blank" class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-primary-600 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors">
                    <i class="fa-solid fa-arrow-up-right-from-square text-[11px]"></i>
                    <span class="hidden sm:inline">Live Site</span>
                </a>
            </div>
        </header>

        <!-- Dynamic Tab Contents -->
        <main class="flex-grow p-4 sm:p-8 max-w-7xl w-full mx-auto space-y-6">
            
            <!-- 1. DASHBOARD TAB -->
            <div id="tab-dashboard" class="space-y-6">
                <!-- Welcome Banner -->
                <div class="rounded-xl bg-white border border-slate-200 p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <div class="flex items-center gap-2 mb-1">
                            <span class="w-2 h-2 rounded-full bg-primary-600"></span>
                            <span class="text-xs font-semibold text-primary-600">ETEF Secretariat</span>
                        </div>
                        <h2 class="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">Welcome to the Administration Console</h2>
                        <p class="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl">
                            Easily manage website cover photos, board leadership, job postings, bulletins, and registered members.
                        </p>
                    </div>
                    <div class="flex items-center gap-2 shrink-0">
                        <a href="#heroes" class="px-3.5 py-2 bg-primary-600 text-white font-semibold text-xs rounded-lg hover:bg-primary-700 transition-colors shadow-xs">
                            Edit Covers
                        </a>
                        <button id="quick-add-news" class="px-3.5 py-2 bg-white text-slate-700 border border-slate-200 font-semibold text-xs rounded-lg hover:bg-slate-50 transition-colors">
                            + New Article
                        </button>
                    </div>
                </div>

                <!-- Stats Grid -->
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                        <span class="text-xs font-semibold text-slate-500 block">Total Members</span>
                        <div class="flex items-baseline justify-between mt-2">
                            <h3 class="text-2xl font-bold text-slate-900">342</h3>
                            <span class="text-[11px] font-semibold text-slate-500">17 Associations</span>
                        </div>
                    </div>

                    <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                        <span class="text-xs font-semibold text-slate-500 block">Page Heroes</span>
                        <div class="flex items-baseline justify-between mt-2">
                            <h3 class="text-2xl font-bold text-slate-900">7</h3>
                            <span class="text-[11px] font-semibold text-slate-500">All Active</span>
                        </div>
                    </div>

                    <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                        <span class="text-xs font-semibold text-slate-500 block">Board Members</span>
                        <div class="flex items-baseline justify-between mt-2">
                            <h3 class="text-2xl font-bold text-slate-900">13</h3>
                            <span class="text-[11px] font-semibold text-slate-500">Directory</span>
                        </div>
                    </div>

                    <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                        <span class="text-xs font-semibold text-slate-500 block">Active Vacancies</span>
                        <div class="flex items-baseline justify-between mt-2">
                            <h3 id="dash-vacancies-stat" class="text-2xl font-bold text-slate-900">4</h3>
                            <span class="text-[11px] font-semibold text-slate-500">Recruiting</span>
                        </div>
                    </div>
                </div>

                <!-- Quick Action Bar -->
                <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                    <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Quick Actions</div>
                    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                        <a href="#heroes" class="p-3 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-center transition-colors">
                            <i class="fa-solid fa-image text-primary-600 text-base mb-1 block"></i>
                            <span class="text-xs font-semibold text-slate-800">Page Covers</span>
                        </a>
                        <a href="#board" class="p-3 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-center transition-colors">
                            <i class="fa-solid fa-users text-primary-600 text-base mb-1 block"></i>
                            <span class="text-xs font-semibold text-slate-800">Board Photos</span>
                        </a>
                        <button id="quick-add-vacancy" class="p-3 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-center transition-colors cursor-pointer">
                            <i class="fa-solid fa-briefcase text-primary-600 text-base mb-1 block"></i>
                            <span class="text-xs font-semibold text-slate-800">+ Vacancy</span>
                        </button>
                        <button id="quick-add-partner" class="p-3 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-center transition-colors cursor-pointer">
                            <i class="fa-solid fa-handshake text-primary-600 text-base mb-1 block"></i>
                            <span class="text-xs font-semibold text-slate-800">+ Partner</span>
                        </button>
                        <a href="#content" class="p-3 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-center transition-colors">
                            <i class="fa-solid fa-sliders text-primary-600 text-base mb-1 block"></i>
                            <span class="text-xs font-semibold text-slate-800">Page Content</span>
                        </a>
                        <a href="#logs" class="p-3 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-center transition-colors">
                            <i class="fa-solid fa-clock-rotate-left text-primary-600 text-base mb-1 block"></i>
                            <span class="text-xs font-semibold text-slate-800">Activity Logs</span>
                        </a>
                    </div>
                </div>

                <!-- Recent Activity Logs Snippet -->
                <div class="bg-white rounded-xl border border-slate-200 shadow-xs p-5">
                    <div class="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
                        <div class="flex items-center gap-2">
                            <i class="fa-solid fa-clock-rotate-left text-primary-600 text-sm"></i>
                            <h3 class="font-bold text-slate-900 text-sm">Recent Actions</h3>
                        </div>
                        <a href="#logs" class="text-xs font-semibold text-primary-600 hover:underline">View All</a>
                    </div>
                    <div id="dash-recent-logs-list" class="space-y-2 text-xs">
                        <!-- Populated by JS -->
                    </div>
                </div>
            </div>

            <!-- 2. HEROES & BACKGROUNDS TAB -->
            <div id="tab-heroes" class="hidden space-y-5">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                        <h2 class="text-xl font-bold text-slate-900 tracking-tight">Hero Sections & Cover Photos</h2>
                        <p class="text-slate-500 text-xs mt-0.5">Manage cover photos, headings, and descriptions for all 7 public website pages.</p>
                    </div>
                </div>

                <!-- Grid of 7 Public Page Heroes -->
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5" id="admin-heroes-grid">
                    <!-- Dynamic rendering by JS from adminStore -->
                </div>
            </div>

            <!-- 3. BOARD OF DIRECTORS TAB -->
            <div id="tab-board" class="hidden space-y-5">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                        <h2 class="text-xl font-bold text-slate-900 tracking-tight">Board of Directors</h2>
                        <p class="text-slate-500 text-xs mt-0.5">Manage board members, uploaded photos, titles, and portfolios.</p>
                    </div>
                    <button id="admin-open-board-add-modal" class="px-4 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-xs shadow-xs flex items-center gap-2 cursor-pointer self-start sm:self-auto">
                        <i class="fa-solid fa-user-plus"></i> Add Board Member
                    </button>
                </div>

                <!-- Filter & Search Bar -->
                <div class="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-3 justify-between items-center">
                    <div class="relative w-full sm:w-72">
                        <input type="text" id="admin-board-search" placeholder="Search director by name or role..." class="w-full pl-8 pr-3 py-1.5 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-600 outline-none bg-slate-50">
                        <i class="fa-solid fa-magnifying-glass absolute left-2.5 top-2.5 text-slate-400 text-xs"></i>
                    </div>
                    <div class="flex items-center gap-2 w-full sm:w-auto">
                        <label for="admin-board-filter" class="text-xs font-semibold text-slate-500 shrink-0">Photo Status:</label>
                        <select id="admin-board-filter" class="px-2.5 py-1.5 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-600 outline-none bg-white">
                            <option value="all">All Members</option>
                            <option value="photo">With Verified Photo</option>
                            <option value="placeholder">No-Photo Placeholder</option>
                        </select>
                    </div>
                </div>

                <!-- Board Members Table -->
                <div class="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse text-xs" id="admin-board-table">
                            <thead>
                                <tr class="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider border-b border-slate-200 text-[11px]">
                                    <th class="py-3 px-5">Member</th>
                                    <th class="py-3 px-5">Role & Title</th>
                                    <th class="py-3 px-5">Photo Status</th>
                                    <th class="py-3 px-5">Portfolio Summary</th>
                                    <th class="py-3 px-5 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100 text-slate-700">
                                <!-- Populated dynamically by JS -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- 4. VACANCIES TAB -->
            <div id="tab-vacancies" class="hidden space-y-5">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                        <h2 class="text-xl font-bold text-slate-900 tracking-tight">Job Vacancies</h2>
                        <p class="text-slate-500 text-xs mt-0.5">Post, edit, close, or delete career listings.</p>
                    </div>
                    <button id="admin-open-vacancy-modal" class="px-4 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-xs shadow-xs flex items-center gap-2 cursor-pointer self-start sm:self-auto">
                        <i class="fa-solid fa-plus"></i> Post Vacancy
                    </button>
                </div>

                <!-- Search and Status Bar -->
                <div class="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-3 justify-between items-center">
                    <div class="relative w-full sm:w-72">
                        <input type="text" id="admin-vacancy-search" placeholder="Search vacancies..." class="w-full pl-8 pr-3 py-1.5 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-600 outline-none bg-slate-50">
                        <i class="fa-solid fa-magnifying-glass absolute left-2.5 top-2.5 text-slate-400 text-xs"></i>
                    </div>
                    <div class="flex items-center gap-2 w-full sm:w-auto">
                        <label for="admin-vacancy-filter" class="text-xs font-semibold text-slate-500 shrink-0">Filter Status:</label>
                        <select id="admin-vacancy-filter" class="px-2.5 py-1.5 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-600 outline-none bg-white">
                            <option value="all">All Statuses</option>
                            <option value="Active">Active Only</option>
                            <option value="Closed">Closed Only</option>
                        </select>
                    </div>
                </div>

                <!-- Vacancies Table -->
                <div class="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse text-xs" id="admin-vacancies-table">
                            <thead>
                                <tr class="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider border-b border-slate-200 text-[11px]">
                                    <th class="py-3 px-5">Job Title</th>
                                    <th class="py-3 px-5">Duty Station</th>
                                    <th class="py-3 px-5">Type</th>
                                    <th class="py-3 px-5">Deadline</th>
                                    <th class="py-3 px-5">Status</th>
                                    <th class="py-3 px-5 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100 text-slate-700">
                                <!-- Populated dynamically by JS -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- 5. NEWS TAB -->
            <div id="tab-news" class="hidden space-y-5">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                        <h2 class="text-xl font-bold text-slate-900 tracking-tight">News & Bulletins</h2>
                        <p class="text-slate-500 text-xs mt-0.5">Publish articles, upload cover images, and manage publications.</p>
                    </div>
                    <button id="admin-open-news-modal" class="px-4 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-xs shadow-xs flex items-center gap-2 cursor-pointer self-start sm:self-auto">
                        <i class="fa-solid fa-plus"></i> Create Article
                    </button>
                </div>

                <!-- Search and Category Bar -->
                <div class="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-3 justify-between items-center">
                    <div class="relative w-full sm:w-72">
                        <input type="text" id="admin-news-search" placeholder="Search headlines..." class="w-full pl-8 pr-3 py-1.5 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-600 outline-none bg-slate-50">
                        <i class="fa-solid fa-magnifying-glass absolute left-2.5 top-2.5 text-slate-400 text-xs"></i>
                    </div>
                    <div class="flex items-center gap-2 w-full sm:w-auto">
                        <label for="admin-news-filter" class="text-xs font-semibold text-slate-500 shrink-0">Filter Category:</label>
                        <select id="admin-news-filter" class="px-2.5 py-1.5 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-600 outline-none bg-white">
                            <option value="all">All Categories</option>
                            <option value="Industry News">Industry News</option>
                            <option value="Corridor Update">Corridor Update</option>
                            <option value="Safety & Skills">Safety & Skills</option>
                            <option value="Association Updates">Association Updates</option>
                        </select>
                    </div>
                </div>

                <!-- Articles Table -->
                <div class="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse text-xs" id="admin-news-table">
                            <thead>
                                <tr class="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider border-b border-slate-200 text-[11px]">
                                    <th class="py-3 px-5">Headline</th>
                                    <th class="py-3 px-5">Category</th>
                                    <th class="py-3 px-5">Publish Date</th>
                                    <th class="py-3 px-5">Views</th>
                                    <th class="py-3 px-5">Status</th>
                                    <th class="py-3 px-5 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100 text-slate-700">
                                <!-- Populated dynamically by JS -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- 6. PARTNERS TAB -->
            <div id="tab-partners" class="hidden space-y-5">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                        <h2 class="text-xl font-bold text-slate-900 tracking-tight">Partners & Sponsors</h2>
                        <p class="text-slate-500 text-xs mt-0.5">Manage partner accords, organizations, and uploaded logos.</p>
                    </div>
                    <button id="admin-open-partner-modal" class="px-4 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-xs shadow-xs flex items-center gap-2 cursor-pointer self-start sm:self-auto">
                        <i class="fa-solid fa-plus"></i> Add Partner
                    </button>
                </div>

                <!-- Partners Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5" id="admin-partners-grid">
                    <!-- Populated dynamically by JS -->
                </div>
            </div>

            <!-- 7. PAGE CONTENTS TAB -->
            <div id="tab-content" class="hidden space-y-5">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                        <h2 class="text-xl font-bold text-slate-900 tracking-tight">Page Content & Organization Information</h2>
                        <p class="text-slate-500 text-xs mt-0.5">Update official titles, proclamations, contact phone numbers, and address.</p>
                    </div>
                    <button id="admin-save-content-btn" class="px-4 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-xs shadow-xs flex items-center gap-2 cursor-pointer self-start sm:self-auto">
                        <i class="fa-solid fa-floppy-disk"></i> Save Content
                    </button>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <!-- Card 1: Official Titles & Proclamations -->
                    <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-3.5">
                        <div class="flex items-center gap-2 pb-2.5 border-b border-slate-200">
                            <i class="fa-solid fa-scale-balanced text-primary-600 text-sm"></i>
                            <h3 class="font-bold text-slate-900 text-sm">Legal & Constitutional Citations</h3>
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-slate-700 mb-1">Federation Name (English)</label>
                            <input type="text" id="content-fed-name-eng" class="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-slate-700 mb-1">Federation Name (Amharic)</label>
                            <input type="text" id="content-fed-name-am" class="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-slate-700 mb-1">Proclamation Citation (English)</label>
                            <input type="text" id="content-proclamation-eng" class="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-slate-700 mb-1">Proclamation Citation (Amharic)</label>
                            <input type="text" id="content-proclamation-am" class="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                        </div>
                    </div>

                    <!-- Card 2: Foundation Metrics & Stats -->
                    <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-3.5">
                        <div class="flex items-center gap-2 pb-2.5 border-b border-slate-200">
                            <i class="fa-solid fa-chart-simple text-primary-600 text-sm"></i>
                            <h3 class="font-bold text-slate-900 text-sm">Foundation Statistics</h3>
                        </div>
                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="block text-xs font-semibold text-slate-700 mb-1">Members Count</label>
                                <input type="text" id="content-stat-members" class="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-slate-700 mb-1">Associations Count</label>
                                <input type="text" id="content-stat-assoc" class="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="block text-xs font-semibold text-slate-700 mb-1">Founding Union</label>
                                <input type="text" id="content-stat-unions" class="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-slate-700 mb-1">Certification Date</label>
                                <input type="text" id="content-stat-date" class="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                            </div>
                        </div>
                    </div>

                    <!-- Card 3: Secretariat Contact Details -->
                    <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-3.5 lg:col-span-2">
                        <div class="flex items-center gap-2 pb-2.5 border-b border-slate-200">
                            <i class="fa-solid fa-address-book text-primary-600 text-sm"></i>
                            <h3 class="font-bold text-slate-900 text-sm">Secretariat Contact Information</h3>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                            <div>
                                <label class="block text-xs font-semibold text-slate-700 mb-1">Official Email</label>
                                <input type="email" id="content-contact-email" class="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-slate-700 mb-1">Telephone</label>
                                <input type="text" id="content-contact-phone" class="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-slate-700 mb-1">Headquarters Address</label>
                                <input type="text" id="content-contact-address" class="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-slate-700 mb-1">Working Hours</label>
                                <input type="text" id="content-support-hours" class="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 8. MEMBERSHIPS TAB -->
            <div id="tab-memberships" class="hidden space-y-5">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                        <h2 class="text-xl font-bold text-slate-900 tracking-tight">Registered Members</h2>
                        <p class="text-slate-500 text-xs mt-0.5">Commercial transport operators and registered associations.</p>
                    </div>
                    <button id="admin-open-member-modal" class="px-4 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-xs shadow-xs flex items-center gap-2 cursor-pointer self-start sm:self-auto">
                        <i class="fa-solid fa-plus"></i> Register Member
                    </button>
                </div>

                <!-- Search and Filter Bar -->
                <div class="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-3 justify-between items-center">
                    <div class="relative w-full sm:w-72">
                        <input type="text" id="admin-member-search" placeholder="Search by name or region..." class="w-full pl-8 pr-3 py-1.5 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-600 outline-none bg-slate-50">
                        <i class="fa-solid fa-magnifying-glass absolute left-2.5 top-2.5 text-slate-400 text-xs"></i>
                    </div>
                    <div class="flex items-center gap-2 w-full sm:w-auto">
                        <label for="admin-member-sector-filter" class="text-xs font-semibold text-slate-500 shrink-0">Filter Sector:</label>
                        <select id="admin-member-sector-filter" class="px-2.5 py-1.5 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-600 outline-none bg-white">
                            <option value="all">All Sectors</option>
                            <option value="Freight">Freight Transport</option>
                            <option value="Passenger">Passenger Transport</option>
                            <option value="Logistics">Logistics & Customs</option>
                            <option value="Petroleum">Fuel & Bulk Cargo</option>
                        </select>
                    </div>
                </div>

                <!-- Member Directory Table -->
                <div class="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse text-xs" id="admin-members-table">
                            <thead>
                                <tr class="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider border-b border-slate-200 text-[11px]">
                                    <th class="py-3 px-5">Organization</th>
                                    <th class="py-3 px-5">Sector</th>
                                    <th class="py-3 px-5">Region / Base</th>
                                    <th class="py-3 px-5">Fleet Size</th>
                                    <th class="py-3 px-5">Tier</th>
                                    <th class="py-3 px-5">Status</th>
                                    <th class="py-3 px-5 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100 text-slate-700">
                                <tr class="hover:bg-slate-50/70 transition-colors admin-member-row" data-sector="Freight">
                                    <td class="py-3.5 px-5 font-bold text-slate-900">Abay Express Freight PLC</td>
                                    <td class="py-3.5 px-5"><span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-primary-50 text-primary-700 border border-primary-200">Freight</span></td>
                                    <td class="py-3.5 px-5 text-slate-600">Addis Ababa</td>
                                    <td class="py-3.5 px-5 font-semibold text-slate-900">140 Trucks</td>
                                    <td class="py-3.5 px-5 text-slate-700">Executive Member</td>
                                    <td class="py-3.5 px-5"><span class="px-2 py-0.5 bg-primary-50 text-primary-700 text-[11px] font-semibold rounded border border-primary-200">Active</span></td>
                                    <td class="py-3.5 px-5 text-right">
                                        <button class="px-2.5 py-1 text-slate-600 hover:text-primary-600 font-medium text-xs rounded hover:bg-slate-100 transition-colors">Details</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/70 transition-colors admin-member-row" data-sector="Passenger">
                                    <td class="py-3.5 px-5 font-bold text-slate-900">Selam Bus Lines S.C.</td>
                                    <td class="py-3.5 px-5"><span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">Passenger</span></td>
                                    <td class="py-3.5 px-5 text-slate-600">National Network</td>
                                    <td class="py-3.5 px-5 font-semibold text-slate-900">85 Coaches</td>
                                    <td class="py-3.5 px-5 text-slate-700">Executive Member</td>
                                    <td class="py-3.5 px-5"><span class="px-2 py-0.5 bg-primary-50 text-primary-700 text-[11px] font-semibold rounded border border-primary-200">Active</span></td>
                                    <td class="py-3.5 px-5 text-right">
                                        <button class="px-2.5 py-1 text-slate-600 hover:text-primary-600 font-medium text-xs rounded hover:bg-slate-100 transition-colors">Details</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/70 transition-colors admin-member-row" data-sector="Logistics">
                                    <td class="py-3.5 px-5 font-bold text-slate-900">Dire Trans Logistics S.C.</td>
                                    <td class="py-3.5 px-5"><span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">Logistics</span></td>
                                    <td class="py-3.5 px-5 text-slate-600">Dire Dawa Hub</td>
                                    <td class="py-3.5 px-5 font-semibold text-slate-900">62 Vehicles</td>
                                    <td class="py-3.5 px-5 text-slate-700">Corporate Member</td>
                                    <td class="py-3.5 px-5"><span class="px-2 py-0.5 bg-primary-50 text-primary-700 text-[11px] font-semibold rounded border border-primary-200">Active</span></td>
                                    <td class="py-3.5 px-5 text-right">
                                        <button class="px-2.5 py-1 text-slate-600 hover:text-primary-600 font-medium text-xs rounded hover:bg-slate-100 transition-colors">Details</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- 9. ACTIVITY LOGS TAB -->
            <div id="tab-logs" class="hidden space-y-5">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                        <h2 class="text-xl font-bold text-slate-900 tracking-tight">Activity Logs</h2>
                        <p class="text-slate-500 text-xs mt-0.5">Audit history of content changes, postings, and updates.</p>
                    </div>
                    <div class="flex items-center gap-2 self-start sm:self-auto">
                        <button id="admin-export-logs-btn" class="px-3 py-1.5 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold rounded-lg text-xs shadow-xs flex items-center gap-1.5 transition-colors cursor-pointer">
                            <i class="fa-solid fa-download"></i> Export JSON
                        </button>
                        <button id="admin-clear-logs-btn" class="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 font-semibold rounded-lg text-xs transition-colors cursor-pointer">
                            <i class="fa-solid fa-trash-can"></i> Clear History
                        </button>
                    </div>
                </div>

                <!-- Filter Logs Bar -->
                <div class="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-3 justify-between items-center">
                    <div class="relative w-full sm:w-72">
                        <input type="text" id="admin-logs-search" placeholder="Search logs..." class="w-full pl-8 pr-3 py-1.5 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-600 outline-none bg-slate-50">
                        <i class="fa-solid fa-magnifying-glass absolute left-2.5 top-2.5 text-slate-400 text-xs"></i>
                    </div>
                    <div class="flex items-center gap-2 w-full sm:w-auto">
                        <label for="admin-logs-category-filter" class="text-xs font-semibold text-slate-500 shrink-0">Filter Category:</label>
                        <select id="admin-logs-category-filter" class="px-2.5 py-1.5 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-600 outline-none bg-white">
                            <option value="all">All Categories</option>
                            <option value="Heroes">Page Heroes</option>
                            <option value="Board">Board of Directors</option>
                            <option value="Vacancies">Job Vacancies</option>
                            <option value="News">News & Bulletins</option>
                            <option value="Partners">Partners</option>
                            <option value="Content">Page Content</option>
                            <option value="System">System Audits</option>
                        </select>
                    </div>
                </div>

                <!-- Logs Table -->
                <div class="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse text-xs" id="admin-logs-table">
                            <thead>
                                <tr class="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider border-b border-slate-200 text-[11px]">
                                    <th class="py-3 px-5">Timestamp</th>
                                    <th class="py-3 px-5">Category</th>
                                    <th class="py-3 px-5">Action</th>
                                    <th class="py-3 px-5">Description</th>
                                    <th class="py-3 px-5">Operator</th>
                                    <th class="py-3 px-5 text-right">Status</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100 text-slate-700" id="admin-logs-tbody">
                                <!-- Populated dynamically by JS -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </main>
    </div>

    <!-- ========================================== -->
    <!-- ACTION MODALS (With Real Image Uploaders)   -->
    <!-- ========================================== -->

    <!-- Modal: Edit Hero Section -->
    <div id="admin-modal-hero-edit" class="hidden fixed inset-0 z-50 items-center justify-center p-4">
        <div class="admin-modal-backdrop fixed inset-0 bg-slate-900/60 backdrop-blur-xs"></div>
        <div class="relative bg-white rounded-2xl max-w-lg w-full p-6 z-10 shadow-xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-5 pb-3 border-b border-slate-200">
                <div class="flex items-center gap-2">
                    <i class="fa-solid fa-image text-primary-600"></i>
                    <h3 class="font-bold text-base text-slate-900" id="hero-modal-title">Edit Page Cover</h3>
                </div>
                <button type="button" class="admin-modal-close text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Close modal">
                    <i class="fa-solid fa-xmark text-base"></i>
                </button>
            </div>
            <form id="admin-form-hero-edit" class="space-y-4 text-xs">
                <input type="hidden" id="hero-edit-id" />
                <input type="hidden" id="hero-edit-image" />

                <!-- Image File Upload Component -->
                <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1.5">Cover Image File *</label>
                    <div class="border-2 border-dashed border-slate-300 rounded-xl p-4 text-center hover:border-primary-600 transition-colors bg-slate-50/60 flex flex-col items-center justify-center gap-2">
                        <img id="hero-edit-preview" src="" alt="Hero preview" class="max-h-36 w-full object-cover rounded-lg border border-slate-200 shadow-2xs hidden" />
                        <label for="hero-edit-file" class="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-700 font-semibold hover:bg-slate-50 text-xs shadow-2xs">
                            <i class="fa-solid fa-cloud-arrow-up text-primary-600"></i>
                            <span id="hero-edit-file-label">Choose Image File...</span>
                        </label>
                        <input type="file" id="hero-edit-file" accept="image/*" class="sr-only" />
                        <span class="text-[11px] text-slate-400">PNG, JPG, WebP supported</span>
                    </div>
                </div>

                <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Main Heading *</label>
                    <input type="text" id="hero-edit-heading" required class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                </div>
                <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Subtitle / Summary *</label>
                    <textarea id="hero-edit-subtitle" rows="3" required class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600 leading-relaxed"></textarea>
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Brightness Filter</label>
                        <select id="hero-edit-brightness" class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600 bg-white">
                            <option value="brightness-105">Bright (+5%)</option>
                            <option value="brightness-100">Normal (100%)</option>
                            <option value="brightness-110">Extra Bright (+10%)</option>
                            <option value="brightness-95">Contrast (95%)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Badge Tag</label>
                        <input type="text" id="hero-edit-badge" class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                    </div>
                </div>
                <div class="pt-3 flex justify-end gap-2.5 border-t border-slate-200">
                    <button type="button" class="admin-modal-close px-3.5 py-1.5 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 font-semibold transition-colors">Cancel</button>
                    <button type="submit" class="px-4 py-1.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold shadow-xs transition-colors">Save Changes</button>
                </div>
            </form>
        </div>
    </div>

    <!-- Modal: Edit Board Member -->
    <div id="admin-modal-board-edit" class="hidden fixed inset-0 z-50 items-center justify-center p-4">
        <div class="admin-modal-backdrop fixed inset-0 bg-slate-900/60 backdrop-blur-xs"></div>
        <div class="relative bg-white rounded-2xl max-w-lg w-full p-6 z-10 shadow-xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-5 pb-3 border-b border-slate-200">
                <div class="flex items-center gap-2">
                    <i class="fa-solid fa-user-pen text-primary-600"></i>
                    <h3 class="font-bold text-base text-slate-900">Edit Board Member</h3>
                </div>
                <button type="button" class="admin-modal-close text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Close modal">
                    <i class="fa-solid fa-xmark text-base"></i>
                </button>
            </div>
            <form id="admin-form-board-edit" class="space-y-4 text-xs">
                <input type="hidden" id="board-edit-biokey" />
                <input type="hidden" id="board-edit-image" />

                <!-- Photo Upload Component -->
                <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1.5">Director Photo File</label>
                    <div class="border-2 border-dashed border-slate-300 rounded-xl p-3 text-center hover:border-primary-600 transition-colors bg-slate-50/60 flex items-center gap-3">
                        <img id="board-edit-preview" src="" alt="Director preview" class="w-14 h-14 rounded-lg object-cover object-top border border-slate-200 shrink-0 hidden" />
                        <div class="text-left flex-grow">
                            <label for="board-edit-file" class="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-700 font-semibold hover:bg-slate-50 text-xs shadow-2xs">
                                <i class="fa-solid fa-cloud-arrow-up text-primary-600"></i>
                                <span id="board-edit-file-label">Upload Photo File...</span>
                            </label>
                            <span class="text-[11px] text-slate-400 block mt-1">Accepts PNG, JPG or WebP</span>
                        </div>
                    </div>
                    <input type="file" id="board-edit-file" accept="image/*" class="sr-only" />
                </div>

                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Name (English) *</label>
                        <input type="text" id="board-edit-name-eng" required class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Name (Amharic) *</label>
                        <input type="text" id="board-edit-name-am" required class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Role Title (English) *</label>
                        <input type="text" id="board-edit-role-eng" required class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Role Title (Amharic) *</label>
                        <input type="text" id="board-edit-role-am" required class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                    </div>
                </div>

                <div class="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between">
                    <div>
                        <span class="text-xs font-semibold text-slate-800 block">No-Photo State Placeholder</span>
                        <span class="text-[11px] text-slate-500">Show executive icon placeholder if photo is unavailable</span>
                    </div>
                    <input type="checkbox" id="board-edit-isplaceholder" class="w-4 h-4 text-primary-600 rounded border-slate-300 focus:ring-primary-600">
                </div>

                <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Portfolio (English)</label>
                    <textarea id="board-edit-desc-eng" rows="2" class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600"></textarea>
                </div>
                <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Portfolio (Amharic)</label>
                    <textarea id="board-edit-desc-am" rows="2" class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600"></textarea>
                </div>
                <div class="pt-3 flex justify-between items-center border-t border-slate-200">
                    <button type="button" id="board-edit-delete-btn" class="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-semibold text-xs transition-colors cursor-pointer border border-slate-200">
                        <i class="fa-solid fa-trash-can mr-1"></i> Delete
                    </button>
                    <div class="flex gap-2">
                        <button type="button" class="admin-modal-close px-3.5 py-1.5 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 font-semibold transition-colors">Cancel</button>
                        <button type="submit" class="px-4 py-1.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold shadow-xs transition-colors">Save Member</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <!-- Modal: Add New Board Member -->
    <div id="admin-modal-board-add" class="hidden fixed inset-0 z-50 items-center justify-center p-4">
        <div class="admin-modal-backdrop fixed inset-0 bg-slate-900/60 backdrop-blur-xs"></div>
        <div class="relative bg-white rounded-2xl max-w-lg w-full p-6 z-10 shadow-xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-5 pb-3 border-b border-slate-200">
                <div class="flex items-center gap-2">
                    <i class="fa-solid fa-user-plus text-primary-600"></i>
                    <h3 class="font-bold text-base text-slate-900">Add Board Member</h3>
                </div>
                <button type="button" class="admin-modal-close text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Close modal">
                    <i class="fa-solid fa-xmark text-base"></i>
                </button>
            </div>
            <form id="admin-form-board-add" class="space-y-4 text-xs">
                <input type="hidden" id="board-add-image" />
                <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Unique Identifier Key *</label>
                    <input type="text" id="board-add-biokey" required placeholder="e.g. kassahun" class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600 font-mono">
                </div>

                <!-- Photo Upload Component -->
                <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1.5">Director Photo File</label>
                    <div class="border-2 border-dashed border-slate-300 rounded-xl p-3 text-center hover:border-primary-600 transition-colors bg-slate-50/60 flex items-center gap-3">
                        <img id="board-add-preview" src="" alt="Director preview" class="w-14 h-14 rounded-lg object-cover object-top border border-slate-200 shrink-0 hidden" />
                        <div class="text-left flex-grow">
                            <label for="board-add-file" class="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-700 font-semibold hover:bg-slate-50 text-xs shadow-2xs">
                                <i class="fa-solid fa-cloud-arrow-up text-primary-600"></i>
                                <span id="board-add-file-label">Upload Photo File...</span>
                            </label>
                            <span class="text-[11px] text-slate-400 block mt-1">Accepts PNG, JPG or WebP</span>
                        </div>
                    </div>
                    <input type="file" id="board-add-file" accept="image/*" class="sr-only" />
                </div>

                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Director Name (English) *</label>
                        <input type="text" id="board-add-name-eng" required class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Director Name (Amharic) *</label>
                        <input type="text" id="board-add-name-am" required class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Role Title (English) *</label>
                        <input type="text" id="board-add-role-eng" required value="Board Member" class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Role Title (Amharic) *</label>
                        <input type="text" id="board-add-role-am" required value="የዳይሬክተሮች ቦርድ አባል" class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                    </div>
                </div>
                <div class="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between">
                    <div>
                        <span class="text-xs font-semibold text-slate-800 block">No-Photo State Placeholder</span>
                        <span class="text-[11px] text-slate-500">Enable if director does not have a photo yet</span>
                    </div>
                    <input type="checkbox" id="board-add-isplaceholder" checked class="w-4 h-4 text-primary-600 rounded border-slate-300 focus:ring-primary-600">
                </div>
                <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Portfolio (English)</label>
                    <textarea id="board-add-desc-eng" rows="2" class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600"></textarea>
                </div>
                <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Portfolio (Amharic)</label>
                    <textarea id="board-add-desc-am" rows="2" class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600"></textarea>
                </div>
                <div class="pt-3 flex justify-end gap-2.5 border-t border-slate-200">
                    <button type="button" class="admin-modal-close px-3.5 py-1.5 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 font-semibold transition-colors">Cancel</button>
                    <button type="submit" class="px-4 py-1.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold shadow-xs transition-colors">Save Member</button>
                </div>
            </form>
        </div>
    </div>

    <!-- Modal: Edit Vacancy -->
    <div id="admin-modal-vacancy-edit" class="hidden fixed inset-0 z-50 items-center justify-center p-4">
        <div class="admin-modal-backdrop fixed inset-0 bg-slate-900/60 backdrop-blur-xs"></div>
        <div class="relative bg-white rounded-2xl max-w-lg w-full p-6 z-10 shadow-xl border border-slate-200">
            <div class="flex justify-between items-center mb-5 pb-3 border-b border-slate-200">
                <div class="flex items-center gap-2">
                    <i class="fa-solid fa-briefcase text-primary-600"></i>
                    <h3 class="font-bold text-base text-slate-900">Edit Vacancy</h3>
                </div>
                <button type="button" class="admin-modal-close text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Close modal">
                    <i class="fa-solid fa-xmark text-base"></i>
                </button>
            </div>
            <form id="admin-form-vacancy-edit" class="space-y-4 text-xs">
                <input type="hidden" id="vacancy-edit-id" />
                <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Job Title *</label>
                    <input type="text" id="vacancy-edit-title" required class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Location / Station *</label>
                        <input type="text" id="vacancy-edit-station" required class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Contract Type *</label>
                        <select id="vacancy-edit-type" required class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600 bg-white">
                            <option value="Full-Time">Full-Time</option>
                            <option value="Contract">Contract</option>
                            <option value="Part-Time">Part-Time</option>
                        </select>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Closing Deadline *</label>
                        <input type="text" id="vacancy-edit-deadline" required class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Status</label>
                        <select id="vacancy-edit-status" class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600 bg-white">
                            <option value="Active">Active</option>
                            <option value="Closed">Closed</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Role Scope / Summary</label>
                    <textarea id="vacancy-edit-overview" rows="2" class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600"></textarea>
                </div>
                <div class="pt-3 flex justify-between items-center border-t border-slate-200">
                    <button type="button" id="vacancy-edit-delete-btn" class="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-semibold text-xs transition-colors cursor-pointer border border-slate-200">
                        <i class="fa-solid fa-trash-can mr-1"></i> Delete
                    </button>
                    <div class="flex gap-2">
                        <button type="button" class="admin-modal-close px-3.5 py-1.5 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 font-semibold transition-colors">Cancel</button>
                        <button type="submit" class="px-4 py-1.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold shadow-xs transition-colors">Save Vacancy</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <!-- Modal: Add Vacancy -->
    <div id="admin-modal-vacancy" class="hidden fixed inset-0 z-50 items-center justify-center p-4">
        <div class="admin-modal-backdrop fixed inset-0 bg-slate-900/60 backdrop-blur-xs"></div>
        <div class="relative bg-white rounded-2xl max-w-lg w-full p-6 z-10 shadow-xl border border-slate-200">
            <div class="flex justify-between items-center mb-5 pb-3 border-b border-slate-200">
                <div class="flex items-center gap-2">
                    <i class="fa-solid fa-briefcase text-primary-600"></i>
                    <h3 class="font-bold text-base text-slate-900">Post Vacancy</h3>
                </div>
                <button type="button" class="admin-modal-close text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Close modal">
                    <i class="fa-solid fa-xmark text-base"></i>
                </button>
            </div>
            <form id="admin-form-new-vacancy" class="space-y-4 text-xs">
                <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Job Title *</label>
                    <input type="text" id="vacancy-title" required placeholder="e.g. Customs Transit Liaison Officer" class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Station / Location *</label>
                        <input type="text" id="vacancy-station" required placeholder="e.g. Galafi Post" class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Contract Type *</label>
                        <select id="vacancy-type" required class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600 bg-white">
                            <option value="Full-Time">Full-Time</option>
                            <option value="Contract">Contract</option>
                            <option value="Part-Time">Part-Time</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Closing Deadline *</label>
                    <input type="text" id="vacancy-deadline" required placeholder="e.g. Dec 30, 2026" class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                </div>
                <div class="pt-3 flex justify-end gap-2.5 border-t border-slate-200">
                    <button type="button" class="admin-modal-close px-3.5 py-1.5 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 font-semibold transition-colors">Cancel</button>
                    <button type="submit" class="px-4 py-1.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold shadow-xs transition-colors">Publish Vacancy</button>
                </div>
            </form>
        </div>
    </div>

    <!-- Modal: Edit News Article -->
    <div id="admin-modal-news-edit" class="hidden fixed inset-0 z-50 items-center justify-center p-4">
        <div class="admin-modal-backdrop fixed inset-0 bg-slate-900/60 backdrop-blur-xs"></div>
        <div class="relative bg-white rounded-2xl max-w-lg w-full p-6 z-10 shadow-xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-5 pb-3 border-b border-slate-200">
                <div class="flex items-center gap-2">
                    <i class="fa-solid fa-newspaper text-primary-600"></i>
                    <h3 class="font-bold text-base text-slate-900">Edit News Bulletin</h3>
                </div>
                <button type="button" class="admin-modal-close text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Close modal">
                    <i class="fa-solid fa-xmark text-base"></i>
                </button>
            </div>
            <form id="admin-form-news-edit" class="space-y-4 text-xs">
                <input type="hidden" id="news-edit-id" />
                <input type="hidden" id="news-edit-image" />

                <!-- Cover Image File Upload -->
                <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1.5">Article Cover Image File</label>
                    <div class="border-2 border-dashed border-slate-300 rounded-xl p-3 text-center hover:border-primary-600 transition-colors bg-slate-50/60 flex items-center gap-3">
                        <img id="news-edit-preview" src="" alt="News preview" class="w-16 h-12 rounded-lg object-cover border border-slate-200 shrink-0 hidden" />
                        <div class="text-left flex-grow">
                            <label for="news-edit-file" class="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-700 font-semibold hover:bg-slate-50 text-xs shadow-2xs">
                                <i class="fa-solid fa-cloud-arrow-up text-primary-600"></i>
                                <span id="news-edit-file-label">Upload Cover File...</span>
                            </label>
                            <span class="text-[11px] text-slate-400 block mt-1">Accepts PNG, JPG or WebP</span>
                        </div>
                    </div>
                    <input type="file" id="news-edit-file" accept="image/*" class="sr-only" />
                </div>

                <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Headline *</label>
                    <input type="text" id="news-edit-title" required class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Category *</label>
                        <select id="news-edit-category" required class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600 bg-white">
                            <option value="Industry News">Industry News</option>
                            <option value="Corridor Update">Corridor Update</option>
                            <option value="Safety & Skills">Safety & Skills</option>
                            <option value="Association Updates">Association Updates</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Status *</label>
                        <select id="news-edit-status" required class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600 bg-white">
                            <option value="Published">Published</option>
                            <option value="Draft">Draft</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Summary / Lead Text</label>
                    <textarea id="news-edit-content" rows="3" class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600"></textarea>
                </div>
                <div class="pt-3 flex justify-between items-center border-t border-slate-200">
                    <button type="button" id="news-edit-delete-btn" class="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-semibold text-xs transition-colors cursor-pointer border border-slate-200">
                        <i class="fa-solid fa-trash-can mr-1"></i> Delete
                    </button>
                    <div class="flex gap-2">
                        <button type="button" class="admin-modal-close px-3.5 py-1.5 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 font-semibold transition-colors">Cancel</button>
                        <button type="submit" class="px-4 py-1.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold shadow-xs transition-colors">Save Article</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <!-- Modal: Add News Article -->
    <div id="admin-modal-news" class="hidden fixed inset-0 z-50 items-center justify-center p-4">
        <div class="admin-modal-backdrop fixed inset-0 bg-slate-900/60 backdrop-blur-xs"></div>
        <div class="relative bg-white rounded-2xl max-w-lg w-full p-6 z-10 shadow-xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-5 pb-3 border-b border-slate-200">
                <div class="flex items-center gap-2">
                    <i class="fa-solid fa-newspaper text-primary-600"></i>
                    <h3 class="font-bold text-base text-slate-900">Create Article</h3>
                </div>
                <button type="button" class="admin-modal-close text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Close modal">
                    <i class="fa-solid fa-xmark text-base"></i>
                </button>
            </div>
            <form id="admin-form-new-news" class="space-y-4 text-xs">
                <input type="hidden" id="news-image" value="/images/news_hero_media.jpg" />

                <!-- Cover Image File Upload -->
                <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1.5">Article Cover Image File</label>
                    <div class="border-2 border-dashed border-slate-300 rounded-xl p-3 text-center hover:border-primary-600 transition-colors bg-slate-50/60 flex items-center gap-3">
                        <img id="news-preview" src="/images/news_hero_media.jpg" alt="News preview" class="w-16 h-12 rounded-lg object-cover border border-slate-200 shrink-0" />
                        <div class="text-left flex-grow">
                            <label for="news-file" class="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-700 font-semibold hover:bg-slate-50 text-xs shadow-2xs">
                                <i class="fa-solid fa-cloud-arrow-up text-primary-600"></i>
                                <span id="news-file-label">Upload Cover File...</span>
                            </label>
                            <span class="text-[11px] text-slate-400 block mt-1">Accepts PNG, JPG or WebP</span>
                        </div>
                    </div>
                    <input type="file" id="news-file" accept="image/*" class="sr-only" />
                </div>

                <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Headline *</label>
                    <input type="text" id="news-title" required placeholder="e.g. New Bilateral Agreement Signed" class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Category *</label>
                        <select id="news-category" required class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600 bg-white">
                            <option value="Industry News">Industry News</option>
                            <option value="Corridor Update">Corridor Update</option>
                            <option value="Safety & Skills">Safety & Skills</option>
                            <option value="Association Updates">Association Updates</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Status *</label>
                        <select id="news-status" required class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600 bg-white">
                            <option value="Published">Published</option>
                            <option value="Draft">Draft</option>
                        </select>
                    </div>
                </div>
                <div class="pt-3 flex justify-end gap-2.5 border-t border-slate-200">
                    <button type="button" class="admin-modal-close px-3.5 py-1.5 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 font-semibold transition-colors">Cancel</button>
                    <button type="submit" class="px-4 py-1.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold shadow-xs transition-colors">Save & Post</button>
                </div>
            </form>
        </div>
    </div>

    <!-- Modal: Edit Partner -->
    <div id="admin-modal-partner-edit" class="hidden fixed inset-0 z-50 items-center justify-center p-4">
        <div class="admin-modal-backdrop fixed inset-0 bg-slate-900/60 backdrop-blur-xs"></div>
        <div class="relative bg-white rounded-2xl max-w-lg w-full p-6 z-10 shadow-xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-5 pb-3 border-b border-slate-200">
                <div class="flex items-center gap-2">
                    <i class="fa-solid fa-handshake text-primary-600"></i>
                    <h3 class="font-bold text-base text-slate-900">Edit Partner</h3>
                </div>
                <button type="button" class="admin-modal-close text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Close modal">
                    <i class="fa-solid fa-xmark text-base"></i>
                </button>
            </div>
            <form id="admin-form-partner-edit" class="space-y-4 text-xs">
                <input type="hidden" id="partner-edit-id" />
                <input type="hidden" id="partner-edit-logo" />

                <!-- Partner Logo File Upload -->
                <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1.5">Partner Logo File</label>
                    <div class="border-2 border-dashed border-slate-300 rounded-xl p-3 text-center hover:border-primary-600 transition-colors bg-slate-50/60 flex items-center gap-3">
                        <img id="partner-edit-preview" src="" alt="Partner logo" class="w-12 h-12 rounded object-contain border border-slate-200 p-1 bg-white shrink-0 hidden" />
                        <div class="text-left flex-grow">
                            <label for="partner-edit-file" class="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-700 font-semibold hover:bg-slate-50 text-xs shadow-2xs">
                                <i class="fa-solid fa-cloud-arrow-up text-primary-600"></i>
                                <span id="partner-edit-file-label">Upload Logo File...</span>
                            </label>
                            <span class="text-[11px] text-slate-400 block mt-1">Accepts PNG, SVG or WebP</span>
                        </div>
                    </div>
                    <input type="file" id="partner-edit-file" accept="image/*" class="sr-only" />
                </div>

                <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Organization Name *</label>
                    <input type="text" id="partner-edit-name" required class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Sector / Type *</label>
                        <input type="text" id="partner-edit-sector" required class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Tier *</label>
                        <select id="partner-edit-tier" required class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600 bg-white">
                            <option value="Institutional Accord">Institutional Accord</option>
                            <option value="Tier 1 Partner">Tier 1 Partner</option>
                            <option value="Strategic Financial Partner">Strategic Financial Partner</option>
                            <option value="Tripartite Social Partner">Tripartite Social Partner</option>
                            <option value="Corporate Sponsor">Corporate Sponsor</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Overview / Description</label>
                    <input type="text" id="partner-edit-desc" class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                </div>
                <div class="pt-3 flex justify-between items-center border-t border-slate-200">
                    <button type="button" id="partner-edit-delete-btn" class="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-semibold text-xs transition-colors cursor-pointer border border-slate-200">
                        <i class="fa-solid fa-trash-can mr-1"></i> Delete
                    </button>
                    <div class="flex gap-2">
                        <button type="button" class="admin-modal-close px-3.5 py-1.5 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 font-semibold transition-colors">Cancel</button>
                        <button type="submit" class="px-4 py-1.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold shadow-xs transition-colors">Save Partner</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <!-- Modal: Add Partner -->
    <div id="admin-modal-partner" class="hidden fixed inset-0 z-50 items-center justify-center p-4">
        <div class="admin-modal-backdrop fixed inset-0 bg-slate-900/60 backdrop-blur-xs"></div>
        <div class="relative bg-white rounded-2xl max-w-lg w-full p-6 z-10 shadow-xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-5 pb-3 border-b border-slate-200">
                <div class="flex items-center gap-2">
                    <i class="fa-solid fa-handshake text-primary-600"></i>
                    <h3 class="font-bold text-base text-slate-900">Add Partner</h3>
                </div>
                <button type="button" class="admin-modal-close text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Close modal">
                    <i class="fa-solid fa-xmark text-base"></i>
                </button>
            </div>
            <form id="admin-form-new-partner" class="space-y-4 text-xs">
                <input type="hidden" id="partner-logo" value="/images/etef_logo.png" />

                <!-- Partner Logo File Upload -->
                <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1.5">Partner Logo File</label>
                    <div class="border-2 border-dashed border-slate-300 rounded-xl p-3 text-center hover:border-primary-600 transition-colors bg-slate-50/60 flex items-center gap-3">
                        <img id="partner-preview" src="/images/etef_logo.png" alt="Partner logo" class="w-12 h-12 rounded object-contain border border-slate-200 p-1 bg-white shrink-0" />
                        <div class="text-left flex-grow">
                            <label for="partner-file" class="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-700 font-semibold hover:bg-slate-50 text-xs shadow-2xs">
                                <i class="fa-solid fa-cloud-arrow-up text-primary-600"></i>
                                <span id="partner-file-label">Upload Logo File...</span>
                            </label>
                            <span class="text-[11px] text-slate-400 block mt-1">Accepts PNG, SVG or WebP</span>
                        </div>
                    </div>
                    <input type="file" id="partner-file" accept="image/*" class="sr-only" />
                </div>

                <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Organization Name *</label>
                    <input type="text" id="partner-name" required placeholder="e.g. Ethiopian Insurance Corporation" class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Sector / Type *</label>
                        <input type="text" id="partner-sector" required placeholder="e.g. Commercial Underwriting" class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Tier *</label>
                        <select id="partner-tier" required class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600 bg-white">
                            <option value="Institutional Accord">Institutional Accord</option>
                            <option value="Tier 1 Partner">Tier 1 Partner</option>
                            <option value="Strategic Financial Partner">Strategic Financial Partner</option>
                            <option value="Corporate Sponsor">Corporate Sponsor</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Scope / Collaboration Overview</label>
                    <input type="text" id="partner-desc" placeholder="Brief scope..." class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                </div>
                <div class="pt-3 flex justify-end gap-2.5 border-t border-slate-200">
                    <button type="button" class="admin-modal-close px-3.5 py-1.5 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 font-semibold transition-colors">Cancel</button>
                    <button type="submit" class="px-4 py-1.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold shadow-xs transition-colors">Save Partner</button>
                </div>
            </form>
        </div>
    </div>

    <!-- Modal: Register Member -->
    <div id="admin-modal-member" class="hidden fixed inset-0 z-50 items-center justify-center p-4">
        <div class="admin-modal-backdrop fixed inset-0 bg-slate-900/60 backdrop-blur-xs"></div>
        <div class="relative bg-white rounded-2xl max-w-lg w-full p-6 z-10 shadow-xl border border-slate-200">
            <div class="flex justify-between items-center mb-5 pb-3 border-b border-slate-200">
                <div class="flex items-center gap-2">
                    <i class="fa-solid fa-address-book text-primary-600"></i>
                    <h3 class="font-bold text-base text-slate-900">Register Member Organization</h3>
                </div>
                <button type="button" class="admin-modal-close text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Close modal">
                    <i class="fa-solid fa-xmark text-base"></i>
                </button>
            </div>
            <form id="admin-form-new-member" class="space-y-4 text-xs">
                <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Organization Name *</label>
                    <input type="text" id="member-org-name" required placeholder="e.g. Awash Valley Haulage PLC" class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Sector *</label>
                        <select id="member-sector" required class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600 bg-white">
                            <option value="Freight">Freight Transport</option>
                            <option value="Passenger">Passenger Transport</option>
                            <option value="Logistics">Logistics & Customs</option>
                            <option value="Petroleum">Fuel & Bulk Cargo</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Region / Base *</label>
                        <input type="text" id="member-region" required placeholder="e.g. Addis Ababa" class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Fleet Count *</label>
                        <input type="text" id="member-fleet" required placeholder="e.g. 45 Trucks" class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Tier *</label>
                        <select id="member-tier" required class="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-600 bg-white">
                            <option value="Corporate Member">Corporate Member</option>
                            <option value="Executive Member">Executive Member</option>
                            <option value="Associate Member">Associate Member</option>
                        </select>
                    </div>
                </div>
                <div class="pt-3 flex justify-end gap-2.5 border-t border-slate-200">
                    <button type="button" class="admin-modal-close px-3.5 py-1.5 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 font-semibold transition-colors">Cancel</button>
                    <button type="submit" class="px-4 py-1.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold shadow-xs transition-colors">Save Member</button>
                </div>
            </form>
        </div>
    </div>

    <!-- Toast Notification -->
    <div id="toast" class="fixed bottom-6 right-6 bg-slate-900 text-white px-4 py-2.5 rounded-lg shadow-xl transform translate-y-20 opacity-0 transition-all duration-300 z-50 text-xs font-semibold flex items-center gap-2.5 border border-slate-700">
        <i class="fa-solid fa-circle-check text-primary-400 text-sm"></i>
        <span id="toastMessage">Action completed successfully</span>
    </div>

</div>
`;

export default { title: "ETEF Admin Studio", markup };
