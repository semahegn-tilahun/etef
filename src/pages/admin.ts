const markup = `
<div id="admin-root-container" class="flex h-screen w-full bg-slate-100 overflow-hidden font-sans">
    
    <!-- Mobile Sidebar Backdrop -->
    <div id="admin-mobile-backdrop" class="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-40 hidden md:hidden transition-opacity"></div>

    <!-- Admin Sidebar -->
    <aside id="admin-sidebar" class="w-64 lg:w-72 bg-slate-900 text-slate-300 flex flex-col shrink-0 h-screen border-r border-slate-800 z-50 fixed md:static inset-y-0 left-0 -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out shadow-2xl md:shadow-none select-none">
        
        <!-- Sidebar Brand Header -->
        <div class="h-20 flex items-center justify-between px-6 border-b border-slate-800/80 shrink-0">
            <div class="flex items-center gap-3">
                <img src="/images/etef_logo.png" alt="ETEF Logo" class="h-10 w-10 object-contain rounded-full bg-white p-0.5 shadow-sm shrink-0" />
                <div>
                    <div class="flex items-center gap-2">
                        <span class="font-bold text-white text-base tracking-tight leading-none">ETEF ADMIN</span>
                        <span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-primary-900/80 text-primary-300 border border-primary-700/60 font-mono">v2.4</span>
                    </div>
                    <span class="text-[10px] text-blue-400 font-semibold uppercase tracking-widest block mt-1">Secretariat Portal</span>
                </div>
            </div>
            <button id="admin-mobile-close-btn" class="md:hidden text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors" aria-label="Close sidebar">
                <i class="fa-solid fa-xmark text-lg"></i>
            </button>
        </div>

        <!-- Sidebar Navigation Menu -->
        <div class="flex-grow overflow-y-auto px-4 py-6 space-y-6">
            <div>
                <span class="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">Management Console</span>
                <nav class="space-y-1.5 text-sm font-medium">
                    <a href="#dashboard" id="nav-dashboard" class="flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-primary-600 text-white font-semibold shadow-sm transition-all">
                        <span class="flex items-center gap-3">
                            <i class="fa-solid fa-chart-pie w-5 text-center text-sm"></i>
                            <span>Dashboard</span>
                        </span>
                        <span class="px-1.5 py-0.5 text-[10px] font-bold rounded bg-white/20 text-white font-mono">Live</span>
                    </a>

                    <a href="#memberships" id="nav-memberships" class="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 transition-all">
                        <span class="flex items-center gap-3">
                            <i class="fa-solid fa-users-rectangle w-5 text-center text-sm"></i>
                            <span>Memberships</span>
                        </span>
                        <span class="px-2 py-0.5 text-[10px] font-bold rounded-full bg-slate-800 text-slate-300 font-mono">342</span>
                    </a>

                    <a href="#vacancies" id="nav-vacancies" class="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 transition-all">
                        <span class="flex items-center gap-3">
                            <i class="fa-solid fa-briefcase w-5 text-center text-sm"></i>
                            <span>Job Vacancies</span>
                        </span>
                        <span class="px-2 py-0.5 text-[10px] font-bold rounded-full bg-slate-800 text-slate-300 font-mono">7</span>
                    </a>

                    <a href="#news" id="nav-news" class="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 transition-all">
                        <span class="flex items-center gap-3">
                            <i class="fa-solid fa-newspaper w-5 text-center text-sm"></i>
                            <span>News & Updates</span>
                        </span>
                        <span class="px-2 py-0.5 text-[10px] font-bold rounded-full bg-slate-800 text-slate-300 font-mono">4</span>
                    </a>

                    <a href="#partners" id="nav-partners" class="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 transition-all">
                        <span class="flex items-center gap-3">
                            <i class="fa-solid fa-handshake w-5 text-center text-sm"></i>
                            <span>Partners & Sponsors</span>
                        </span>
                        <span class="px-2 py-0.5 text-[10px] font-bold rounded-full bg-slate-800 text-slate-300 font-mono">14</span>
                    </a>
                </nav>
            </div>

            <!-- Portal System Quick Status -->
            <div class="pt-4 border-t border-slate-800/80">
                <span class="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">Federation Services</span>
                <div class="px-3 py-2.5 rounded-lg bg-slate-800/40 border border-slate-700/50 space-y-1.5 text-xs text-slate-400">
                    <div class="flex items-center justify-between font-medium">
                        <span class="flex items-center gap-2">
                            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span>System Status</span>
                        </span>
                        <span class="text-emerald-400 text-[11px] font-semibold">Healthy</span>
                    </div>
                    <div class="text-[11px] text-slate-400 flex items-center justify-between pt-1 border-t border-slate-700/40 font-mono">
                        <span>Database: Synced</span>
                        <span>Corridors: Active</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Sidebar Footer Action -->
        <div class="p-4 border-t border-slate-800/80 bg-slate-950/40 shrink-0">
            <a href="/" class="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-rose-400 hover:bg-rose-500/10 hover:text-rose-300 transition-all font-medium text-xs">
                <span class="flex items-center gap-2.5">
                    <i class="fa-solid fa-arrow-right-from-bracket text-sm"></i>
                    <span>Exit to Public Site</span>
                </span>
                <i class="fa-solid fa-angle-right text-[10px] opacity-70"></i>
            </a>
        </div>
    </aside>

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto bg-slate-50/70">
        
        <!-- Top Navbar -->
        <header class="h-20 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-8 lg:px-10 flex items-center justify-between sticky top-0 z-30 shadow-xs shrink-0">
            <div class="flex items-center gap-4">
                <button id="admin-mobile-menu-btn" class="md:hidden text-slate-600 hover:text-slate-900 p-2 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Open sidebar menu">
                    <i class="fa-solid fa-bars text-lg"></i>
                </button>
                <div>
                    <div class="text-[11px] font-bold text-primary-600 uppercase tracking-wider hidden sm:block">Federation Administration</div>
                    <h1 class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight" id="pageTitle">Admin Overview</h1>
                </div>
            </div>
            
            <div class="flex items-center gap-3 sm:gap-5">
                <!-- Search bar -->
                <div class="relative hidden lg:block w-72">
                    <input type="text" placeholder="Search records, members, jobs..." class="w-full pl-9 pr-12 py-2 border border-slate-200 rounded-lg text-xs bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-all">
                    <i class="fa-solid fa-magnifying-glass absolute left-3 top-2.5 text-slate-400 text-xs"></i>
                    <kbd class="absolute right-2.5 top-2 px-1.5 py-0.5 text-[10px] font-semibold text-slate-400 bg-slate-200/70 rounded font-mono">Ctrl K</kbd>
                </div>

                <!-- Live website quick link -->
                <a href="/" class="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-primary-600 bg-slate-100 hover:bg-primary-50 border border-slate-200/80 rounded-lg transition-colors">
                    <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                    <span>Live Site</span>
                </a>

                <!-- Notification Bell -->
                <button class="relative p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors" aria-label="Notifications">
                    <i class="fa-solid fa-bell text-base"></i>
                    <span class="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary-600 ring-2 ring-white"></span>
                </button>

                <!-- Admin Profile Card -->
                <div class="flex items-center gap-3 pl-2 sm:pl-3 border-l border-slate-200">
                    <div class="relative">
                        <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-primary-700 to-blue-500 text-white font-bold flex items-center justify-center text-xs shadow-xs">
                            AD
                        </div>
                        <span class="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white"></span>
                    </div>
                    <div class="hidden sm:block text-left">
                        <span class="font-bold text-xs text-slate-900 block leading-tight">Secretariat Admin</span>
                        <span class="text-[11px] text-slate-500 block">Addis Ababa HQ</span>
                    </div>
                </div>
            </div>
        </header>

        <!-- Dynamic Tab Contents -->
        <main class="flex-grow p-4 sm:p-8 lg:p-10 max-w-7xl w-full mx-auto space-y-8">
            
            <!-- DASHBOARD TAB -->
            <div id="tab-dashboard" class="space-y-8">
                <!-- Welcome Banner -->
                <div class="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-900 via-primary-700 to-blue-600 text-white p-6 sm:p-8 shadow-sm">
                    <div class="relative z-10 max-w-3xl space-y-2">
                        <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/15 text-blue-100 backdrop-blur-xs inline-flex items-center gap-1.5 border border-white/20">
                            <i class="fa-solid fa-shield-halved text-xs"></i> Federation Executive Portal
                        </span>
                        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight">ETEF Secretariat Operational Overview</h2>
                        <p class="text-blue-100 text-xs sm:text-sm leading-relaxed max-w-2xl">
                            Monitoring 17 member associations, 6,652 commercial freight and passenger operators, active multimodal transport corridors, and regulatory compliance.
                        </p>
                    </div>
                    <div class="absolute -right-8 -bottom-10 opacity-10 text-9xl text-white pointer-events-none">
                        <i class="fa-solid fa-truck-moving"></i>
                    </div>
                </div>

                <!-- Stats Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    <!-- Total Members Card -->
                    <div class="bg-white p-6 rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Total Members</span>
                                <h3 class="text-3xl font-black text-slate-900 mt-1">342</h3>
                            </div>
                            <div class="w-11 h-11 bg-blue-50 text-primary-600 rounded-xl flex items-center justify-center text-lg font-bold border border-blue-100/60">
                                <i class="fa-solid fa-users"></i>
                            </div>
                        </div>
                        <div class="flex items-center justify-between text-xs pt-3 border-t border-slate-100">
                            <span class="text-emerald-600 font-bold flex items-center gap-1">
                                <i class="fa-solid fa-arrow-trend-up"></i> +12 this month
                            </span>
                            <span class="text-slate-400">17 Associations</span>
                        </div>
                    </div>

                    <!-- Pending Applications Card -->
                    <div class="bg-white p-6 rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Pending Applications</span>
                                <h3 class="text-3xl font-black text-slate-900 mt-1">18</h3>
                            </div>
                            <div class="w-11 h-11 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center text-lg font-bold border border-amber-100/60">
                                <i class="fa-solid fa-clock-rotate-left"></i>
                            </div>
                        </div>
                        <div class="flex items-center justify-between text-xs pt-3 border-t border-slate-100">
                            <span class="text-amber-700 font-semibold">Requires review</span>
                            <span class="text-slate-400">4 High Priority</span>
                        </div>
                    </div>

                    <!-- Active Vacancies Card -->
                    <div class="bg-white p-6 rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Active Vacancies</span>
                                <h3 class="text-3xl font-black text-slate-900 mt-1">7</h3>
                            </div>
                            <div class="w-11 h-11 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center text-lg font-bold border border-emerald-100/60">
                                <i class="fa-solid fa-briefcase"></i>
                            </div>
                        </div>
                        <div class="flex items-center justify-between text-xs pt-3 border-t border-slate-100">
                            <span class="text-primary-600 font-semibold">Across network</span>
                            <span class="text-slate-400">63 Candidates</span>
                        </div>
                    </div>

                    <!-- Partners Card -->
                    <div class="bg-white p-6 rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Strategic Partners</span>
                                <h3 class="text-3xl font-black text-slate-900 mt-1">14</h3>
                            </div>
                            <div class="w-11 h-11 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center text-lg font-bold border border-purple-100/60">
                                <i class="fa-solid fa-handshake"></i>
                            </div>
                        </div>
                        <div class="flex items-center justify-between text-xs pt-3 border-t border-slate-100">
                            <span class="text-purple-700 font-semibold">Active Accords</span>
                            <span class="text-slate-400">6 Key Ministries</span>
                        </div>
                    </div>
                </div>

                <!-- Recent Applications Table Section -->
                <div class="bg-white rounded-xl border border-slate-200/90 shadow-xs overflow-hidden">
                    <div class="p-5 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50/50">
                        <div>
                            <h3 class="font-bold text-base sm:text-lg text-slate-900">Recent Membership Applications</h3>
                            <p class="text-xs text-slate-500 mt-0.5">Verification queue for commercial transport operators requesting ETEF certification.</p>
                        </div>
                        <a href="#memberships" class="text-xs font-bold text-primary-600 hover:text-primary-700 flex items-center gap-1 self-start sm:self-auto hover:underline">
                            <span>View All Members</span>
                            <i class="fa-solid fa-arrow-right text-[10px]"></i>
                        </a>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse text-xs sm:text-sm">
                            <thead>
                                <tr class="bg-slate-50 text-slate-500 font-bold text-[11px] uppercase tracking-wider border-b border-slate-200/80">
                                    <th class="py-3.5 px-6">Organization</th>
                                    <th class="py-3.5 px-6">Contact Person</th>
                                    <th class="py-3.5 px-6">Sector</th>
                                    <th class="py-3.5 px-6">Date</th>
                                    <th class="py-3.5 px-6">Status</th>
                                    <th class="py-3.5 px-6 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100 text-slate-700">
                                <tr class="hover:bg-slate-50/70 transition-colors">
                                    <td class="py-4 px-6 font-bold text-slate-900">
                                        <div class="flex items-center gap-3">
                                            <div class="w-8 h-8 rounded-lg bg-primary-100 text-primary-700 font-bold flex items-center justify-center text-xs shrink-0">
                                                AE
                                            </div>
                                            <span>Abay Express Freight PLC</span>
                                        </div>
                                    </td>
                                    <td class="py-4 px-6 text-slate-700 font-medium">Kassa Belay</td>
                                    <td class="py-4 px-6">
                                        <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">Freight Transport</span>
                                    </td>
                                    <td class="py-4 px-6 text-slate-500">26 Sep 2026</td>
                                    <td class="py-4 px-6">
                                        <span class="px-2.5 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-full border border-amber-200/60">Pending</span>
                                    </td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="px-3 py-1.5 bg-primary-50 text-primary-700 font-bold text-xs rounded-lg hover:bg-primary-100 transition-colors cursor-pointer">Approve</button>
                                        <button class="px-3 py-1.5 bg-slate-100 text-slate-600 font-bold text-xs rounded-lg hover:bg-rose-50 hover:text-rose-700 transition-colors cursor-pointer">Reject</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/70 transition-colors">
                                    <td class="py-4 px-6 font-bold text-slate-900">
                                        <div class="flex items-center gap-3">
                                            <div class="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-xs shrink-0">
                                                SB
                                            </div>
                                            <span>Selam Bus Lines S.C.</span>
                                        </div>
                                    </td>
                                    <td class="py-4 px-6 text-slate-700 font-medium">Tadesse Mekonnen</td>
                                    <td class="py-4 px-6">
                                        <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-100">Passenger Transport</span>
                                    </td>
                                    <td class="py-4 px-6 text-slate-500">24 Sep 2026</td>
                                    <td class="py-4 px-6">
                                        <span class="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200/60">Approved</span>
                                    </td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="px-3 py-1.5 bg-slate-100 text-slate-700 font-semibold text-xs rounded-lg hover:bg-slate-200 transition-colors cursor-pointer">View</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/70 transition-colors">
                                    <td class="py-4 px-6 font-bold text-slate-900">
                                        <div class="flex items-center gap-3">
                                            <div class="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 font-bold flex items-center justify-center text-xs shrink-0">
                                                DT
                                            </div>
                                            <span>Dire Trans Logistics</span>
                                        </div>
                                    </td>
                                    <td class="py-4 px-6 text-slate-700 font-medium">Fatuma Ahmed</td>
                                    <td class="py-4 px-6">
                                        <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-purple-50 text-purple-700 border border-purple-100">Logistics & Customs</span>
                                    </td>
                                    <td class="py-4 px-6 text-slate-500">21 Sep 2026</td>
                                    <td class="py-4 px-6">
                                        <span class="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200/60">Approved</span>
                                    </td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="px-3 py-1.5 bg-slate-100 text-slate-700 font-semibold text-xs rounded-lg hover:bg-slate-200 transition-colors cursor-pointer">View</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Corridor Live Status Bar -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-3">
                        <div class="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                            <i class="fa-solid fa-route"></i>
                        </div>
                        <div>
                            <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wide block">Djibouti - Addis Corridor</span>
                            <span class="text-xs font-bold text-emerald-600 flex items-center gap-1.5">
                                <span class="w-2 h-2 rounded-full bg-emerald-500"></span> Normal Freight Flow (98.2%)
                            </span>
                        </div>
                    </div>
                    <div class="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-3">
                        <div class="w-9 h-9 rounded-lg bg-blue-50 text-primary-600 flex items-center justify-center shrink-0">
                            <i class="fa-solid fa-warehouse"></i>
                        </div>
                        <div>
                            <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wide block">Modjo Dry Port Staging</span>
                            <span class="text-xs font-bold text-primary-600 flex items-center gap-1.5">
                                <span class="w-2 h-2 rounded-full bg-primary-500"></span> Capacity at 64% (Optimal)
                            </span>
                        </div>
                    </div>
                    <div class="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-3">
                        <div class="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                            <i class="fa-solid fa-file-contract"></i>
                        </div>
                        <div>
                            <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wide block">Tripartite Accord</span>
                            <span class="text-xs font-bold text-purple-600 flex items-center gap-1.5">
                                <span class="w-2 h-2 rounded-full bg-purple-500"></span> Active with MoTL & CETU
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- MEMBERSHIPS TAB -->
            <div id="tab-memberships" class="hidden space-y-6">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h2 class="text-2xl font-black text-slate-900 tracking-tight">Registered Members Directory</h2>
                        <p class="text-slate-500 text-xs sm:text-sm mt-0.5">Search and manage all verified commercial transport and logistics operators.</p>
                    </div>
                    <button id="admin-open-member-modal" class="px-4 py-2.5 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-colors text-xs sm:text-sm shadow-sm flex items-center gap-2 cursor-pointer self-start sm:self-auto">
                        <i class="fa-solid fa-plus"></i> Register New Member
                    </button>
                </div>

                <!-- Search and Filter Bar -->
                <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-4 justify-between items-center">
                    <div class="relative w-full sm:w-80">
                        <input type="text" id="admin-member-search" placeholder="Search by name or region..." class="w-full pl-9 pr-4 py-2 text-xs sm:text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 outline-none">
                        <i class="fa-solid fa-magnifying-glass absolute left-3 top-2.5 text-slate-400 text-xs"></i>
                    </div>
                    <div class="flex items-center gap-3 w-full sm:w-auto">
                        <label for="admin-member-sector-filter" class="text-xs font-bold text-slate-500 shrink-0">Filter Sector:</label>
                        <select id="admin-member-sector-filter" class="px-3 py-2 text-xs sm:text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 outline-none bg-white">
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
                        <table class="w-full text-left border-collapse text-xs sm:text-sm" id="admin-members-table">
                            <thead>
                                <tr class="bg-slate-50 text-slate-500 font-bold text-[11px] uppercase tracking-wider border-b border-slate-200">
                                    <th class="py-3.5 px-6">Organization</th>
                                    <th class="py-3.5 px-6">Sector</th>
                                    <th class="py-3.5 px-6">Region / Base</th>
                                    <th class="py-3.5 px-6">Fleet Size</th>
                                    <th class="py-3.5 px-6">Membership Tier</th>
                                    <th class="py-3.5 px-6">Status</th>
                                    <th class="py-3.5 px-6 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100 text-slate-700">
                                <tr class="hover:bg-slate-50/70 transition-colors admin-member-row" data-sector="Freight">
                                    <td class="py-4 px-6 font-bold text-slate-900">Abay Express Freight PLC</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">Freight</span></td>
                                    <td class="py-4 px-6 text-slate-600">Addis Ababa</td>
                                    <td class="py-4 px-6 font-bold text-slate-900">140 Trucks</td>
                                    <td class="py-4 px-6"><span class="text-xs font-semibold text-primary-700">Executive Member</span></td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200/60">Active</span></td>
                                    <td class="py-4 px-6 text-right">
                                        <button class="px-2.5 py-1 text-slate-600 hover:text-primary-600 font-medium text-xs rounded hover:bg-slate-100 transition-colors">Details</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/70 transition-colors admin-member-row" data-sector="Passenger">
                                    <td class="py-4 px-6 font-bold text-slate-900">Selam Bus Lines S.C.</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">Passenger</span></td>
                                    <td class="py-4 px-6 text-slate-600">National Network</td>
                                    <td class="py-4 px-6 font-bold text-slate-900">85 Coaches</td>
                                    <td class="py-4 px-6"><span class="text-xs font-semibold text-primary-700">Executive Member</span></td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200/60">Active</span></td>
                                    <td class="py-4 px-6 text-right">
                                        <button class="px-2.5 py-1 text-slate-600 hover:text-primary-600 font-medium text-xs rounded hover:bg-slate-100 transition-colors">Details</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/70 transition-colors admin-member-row" data-sector="Logistics">
                                    <td class="py-4 px-6 font-bold text-slate-900">Dire Trans Logistics S.C.</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-100">Logistics</span></td>
                                    <td class="py-4 px-6 text-slate-600">Dire Dawa Hub</td>
                                    <td class="py-4 px-6 font-bold text-slate-900">62 Vehicles</td>
                                    <td class="py-4 px-6"><span class="text-xs font-semibold text-slate-700">Corporate Member</span></td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200/60">Active</span></td>
                                    <td class="py-4 px-6 text-right">
                                        <button class="px-2.5 py-1 text-slate-600 hover:text-primary-600 font-medium text-xs rounded hover:bg-slate-100 transition-colors">Details</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/70 transition-colors admin-member-row" data-sector="Freight">
                                    <td class="py-4 px-6 font-bold text-slate-900">Ethio-Djibouti Corridor Haulers</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">Freight</span></td>
                                    <td class="py-4 px-6 text-slate-600">Afar / Somali</td>
                                    <td class="py-4 px-6 font-bold text-slate-900">310 Fleets</td>
                                    <td class="py-4 px-6"><span class="text-xs font-semibold text-primary-700">Strategic Assoc.</span></td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200/60">Active</span></td>
                                    <td class="py-4 px-6 text-right">
                                        <button class="px-2.5 py-1 text-slate-600 hover:text-primary-600 font-medium text-xs rounded hover:bg-slate-100 transition-colors">Details</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/70 transition-colors admin-member-row" data-sector="Passenger">
                                    <td class="py-4 px-6 font-bold text-slate-900">Sheger Express Transit</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">Passenger</span></td>
                                    <td class="py-4 px-6 text-slate-600">Addis Ababa</td>
                                    <td class="py-4 px-6 font-bold text-slate-900">220 Buses</td>
                                    <td class="py-4 px-6"><span class="text-xs font-semibold text-slate-700">Corporate Member</span></td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200/60">Active</span></td>
                                    <td class="py-4 px-6 text-right">
                                        <button class="px-2.5 py-1 text-slate-600 hover:text-primary-600 font-medium text-xs rounded hover:bg-slate-100 transition-colors">Details</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/70 transition-colors admin-member-row" data-sector="Petroleum">
                                    <td class="py-4 px-6 font-bold text-slate-900">Oromia Bulk Petroleum Transporters</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-100">Petroleum</span></td>
                                    <td class="py-4 px-6 text-slate-600">Oromia</td>
                                    <td class="py-4 px-6 font-bold text-slate-900">95 Tankers</td>
                                    <td class="py-4 px-6"><span class="text-xs font-semibold text-slate-700">Corporate Member</span></td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200/60">Active</span></td>
                                    <td class="py-4 px-6 text-right">
                                        <button class="px-2.5 py-1 text-slate-600 hover:text-primary-600 font-medium text-xs rounded hover:bg-slate-100 transition-colors">Details</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- VACANCIES TAB -->
            <div id="tab-vacancies" class="hidden space-y-6">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h2 class="text-2xl font-black text-slate-900 tracking-tight">Job Vacancies Management</h2>
                        <p class="text-slate-500 text-xs sm:text-sm mt-0.5">Post, review applicants, and manage recruitment across ETEF Secretariat and member networks.</p>
                    </div>
                    <button id="admin-open-vacancy-modal" class="px-4 py-2.5 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-colors text-xs sm:text-sm shadow-sm flex items-center gap-2 cursor-pointer self-start sm:self-auto">
                        <i class="fa-solid fa-plus"></i> Post New Vacancy
                    </button>
                </div>

                <!-- Vacancies Table -->
                <div class="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse text-xs sm:text-sm" id="admin-vacancies-table">
                            <thead>
                                <tr class="bg-slate-50 text-slate-500 font-bold text-[11px] uppercase tracking-wider border-b border-slate-200">
                                    <th class="py-3.5 px-6">Job Title</th>
                                    <th class="py-3.5 px-6">Duty Station</th>
                                    <th class="py-3.5 px-6">Type</th>
                                    <th class="py-3.5 px-6">Applicants</th>
                                    <th class="py-3.5 px-6">Closing Date</th>
                                    <th class="py-3.5 px-6">Status</th>
                                    <th class="py-3.5 px-6 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100 text-slate-700">
                                <tr class="hover:bg-slate-50/70 transition-colors">
                                    <td class="py-4 px-6 font-bold text-slate-900">Senior Transport Logistics Coordinator</td>
                                    <td class="py-4 px-6 text-slate-600">ETEF Secretariat HQ, Addis Ababa</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">Full-Time</span></td>
                                    <td class="py-4 px-6 font-bold text-primary-600">14 Candidates</td>
                                    <td class="py-4 px-6 text-slate-500">Oct 30, 2026</td>
                                    <td class="py-4 px-6"><span class="vacancy-status-pill px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200/60">Active</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="admin-vacancy-toggle-btn px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer">Close</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/70 transition-colors">
                                    <td class="py-4 px-6 font-bold text-slate-900">Heavy Commercial Fleet Safety Inspector</td>
                                    <td class="py-4 px-6 text-slate-600">Dire Dawa Logistics Hub</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">Full-Time</span></td>
                                    <td class="py-4 px-6 font-bold text-primary-600">9 Candidates</td>
                                    <td class="py-4 px-6 text-slate-500">Nov 15, 2026</td>
                                    <td class="py-4 px-6"><span class="vacancy-status-pill px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200/60">Active</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="admin-vacancy-toggle-btn px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer">Close</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/70 transition-colors">
                                    <td class="py-4 px-6 font-bold text-slate-900">Association Operations & Tripartite Liaison</td>
                                    <td class="py-4 px-6 text-slate-600">Kirkos Sub-City Office, Addis Ababa</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">Full-Time</span></td>
                                    <td class="py-4 px-6 font-bold text-primary-600">22 Candidates</td>
                                    <td class="py-4 px-6 text-slate-500">Nov 10, 2026</td>
                                    <td class="py-4 px-6"><span class="vacancy-status-pill px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200/60">Active</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="admin-vacancy-toggle-btn px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer">Close</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/70 transition-colors">
                                    <td class="py-4 px-6 font-bold text-slate-900">Multimodal Freight Forwarding Specialist</td>
                                    <td class="py-4 px-6 text-slate-600">Modjo Dry Port & Terminal</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">Contract</span></td>
                                    <td class="py-4 px-6 font-bold text-primary-600">18 Candidates</td>
                                    <td class="py-4 px-6 text-slate-500">Dec 01, 2026</td>
                                    <td class="py-4 px-6"><span class="vacancy-status-pill px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200/60">Active</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="admin-vacancy-toggle-btn px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer">Close</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- NEWS TAB -->
            <div id="tab-news" class="hidden space-y-6">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h2 class="text-2xl font-black text-slate-900 tracking-tight">News & Articles Management</h2>
                        <p class="text-slate-500 text-xs sm:text-sm mt-0.5">Publish updates, corridor bulletins, and official press releases.</p>
                    </div>
                    <button id="admin-open-news-modal" class="px-4 py-2.5 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-colors text-xs sm:text-sm shadow-sm flex items-center gap-2 cursor-pointer self-start sm:self-auto">
                        <i class="fa-solid fa-plus"></i> Create Article
                    </button>
                </div>

                <!-- Articles Table -->
                <div class="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse text-xs sm:text-sm" id="admin-news-table">
                            <thead>
                                <tr class="bg-slate-50 text-slate-500 font-bold text-[11px] uppercase tracking-wider border-b border-slate-200">
                                    <th class="py-3.5 px-6">Headline</th>
                                    <th class="py-3.5 px-6">Category</th>
                                    <th class="py-3.5 px-6">Publish Date</th>
                                    <th class="py-3.5 px-6">Readership</th>
                                    <th class="py-3.5 px-6">Status</th>
                                    <th class="py-3.5 px-6 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100 text-slate-700">
                                <tr class="hover:bg-slate-50/70 transition-colors">
                                    <td class="py-4 px-6 font-bold text-slate-900 max-w-xs truncate">ETEF and Ministry of Transport Sign Historic Tripartite Road Safety Accord</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">Industry News</span></td>
                                    <td class="py-4 px-6 text-slate-500">Oct 01, 2026</td>
                                    <td class="py-4 px-6 font-bold text-slate-700">1,420 views</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200/60">Published</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="admin-news-status-btn px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer">Unpublish</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/70 transition-colors">
                                    <td class="py-4 px-6 font-bold text-slate-900 max-w-xs truncate">Djibouti Corridor Freight Tariffs Harmonization Strategy Finalized</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">Corridor Update</span></td>
                                    <td class="py-4 px-6 text-slate-500">Sep 24, 2026</td>
                                    <td class="py-4 px-6 font-bold text-slate-700">2,890 views</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200/60">Published</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="admin-news-status-btn px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer">Unpublish</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/70 transition-colors">
                                    <td class="py-4 px-6 font-bold text-slate-900 max-w-xs truncate">Commercial Driver Health, Safety & Rest Facility Initiative 2026</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">Safety & Welfare</span></td>
                                    <td class="py-4 px-6 text-slate-500">Sep 15, 2026</td>
                                    <td class="py-4 px-6 font-bold text-slate-700">980 views</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200/60">Published</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="admin-news-status-btn px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer">Unpublish</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/70 transition-colors">
                                    <td class="py-4 px-6 font-bold text-slate-900 max-w-xs truncate">Draft National Fleet Electrification & Fuel Subsidy Policy Whitepaper</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">Policy & Law</span></td>
                                    <td class="py-4 px-6 text-slate-500">Sep 05, 2026</td>
                                    <td class="py-4 px-6 font-bold text-slate-700">0 views</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">Draft</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="admin-news-status-btn px-3 py-1 bg-primary-50 hover:bg-primary-100 text-primary-700 text-xs font-bold rounded-lg transition-colors cursor-pointer">Publish</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- PARTNERS TAB -->
            <div id="tab-partners" class="hidden space-y-6">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h2 class="text-2xl font-black text-slate-900 tracking-tight">Partners & Sponsors Management</h2>
                        <p class="text-slate-500 text-xs sm:text-sm mt-0.5">Configure sponsor tiers, strategic institutional accords, and official relationships.</p>
                    </div>
                    <button id="admin-open-partner-modal" class="px-4 py-2.5 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-colors text-xs sm:text-sm shadow-sm flex items-center gap-2 cursor-pointer self-start sm:self-auto">
                        <i class="fa-solid fa-plus"></i> Add Partner
                    </button>
                </div>

                <!-- Partners Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="admin-partners-grid">
                    <div class="bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                        <div>
                            <div class="flex items-center justify-between mb-3">
                                <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-100">Strategic Banking</span>
                                <span class="text-xs text-emerald-600 font-bold flex items-center gap-1"><i class="fa-solid fa-circle-check"></i> Active</span>
                            </div>
                            <h3 class="font-bold text-slate-900 text-base">Commercial Bank of Ethiopia (CBE)</h3>
                            <p class="text-xs text-slate-500 mt-1.5 leading-relaxed">Fleet Financing, Letter of Credit & Digital Payment Accord</p>
                        </div>
                        <div class="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                            <span>Partner since: 2018</span>
                            <span class="font-bold text-primary-600">Tier 1 Partner</span>
                        </div>
                    </div>

                    <div class="bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                        <div>
                            <div class="flex items-center justify-between mb-3">
                                <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-100">Government Authority</span>
                                <span class="text-xs text-emerald-600 font-bold flex items-center gap-1"><i class="fa-solid fa-circle-check"></i> Active</span>
                            </div>
                            <h3 class="font-bold text-slate-900 text-base">Ministry of Transport & Logistics (MoTL)</h3>
                            <p class="text-xs text-slate-500 mt-1.5 leading-relaxed">Federal Regulatory Framework, Policy Dialogue & Safety Accord</p>
                        </div>
                        <div class="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                            <span>Partner since: 2014</span>
                            <span class="font-bold text-primary-600">Institutional Accord</span>
                        </div>
                    </div>

                    <div class="bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                        <div>
                            <div class="flex items-center justify-between mb-3">
                                <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-100">Road Infrastructure</span>
                                <span class="text-xs text-emerald-600 font-bold flex items-center gap-1"><i class="fa-solid fa-circle-check"></i> Active</span>
                            </div>
                            <h3 class="font-bold text-slate-900 text-base">Ethiopian Roads Administration (ERA)</h3>
                            <p class="text-xs text-slate-500 mt-1.5 leading-relaxed">Corridor Maintenance, Weighbridge Standards & Road Safety</p>
                        </div>
                        <div class="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                            <span>Partner since: 2016</span>
                            <span class="font-bold text-primary-600">Institutional Accord</span>
                        </div>
                    </div>

                    <div class="bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                        <div>
                            <div class="flex items-center justify-between mb-3">
                                <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-100">Municipal Transit</span>
                                <span class="text-xs text-emerald-600 font-bold flex items-center gap-1"><i class="fa-solid fa-circle-check"></i> Active</span>
                            </div>
                            <h3 class="font-bold text-slate-900 text-base">Addis Ababa City Transport Bureau (AARTB)</h3>
                            <p class="text-xs text-slate-500 mt-1.5 leading-relaxed">Urban Bus Route Licensing & Terminal Management</p>
                        </div>
                        <div class="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                            <span>Partner since: 2017</span>
                            <span class="font-bold text-primary-600">Municipal Accord</span>
                        </div>
                    </div>

                    <div class="bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                        <div>
                            <div class="flex items-center justify-between mb-3">
                                <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-100">Regional Freight</span>
                                <span class="text-xs text-emerald-600 font-bold flex items-center gap-1"><i class="fa-solid fa-circle-check"></i> Active</span>
                            </div>
                            <h3 class="font-bold text-slate-900 text-base">Oromia Freight & Transport Enterprise</h3>
                            <p class="text-xs text-slate-500 mt-1.5 leading-relaxed">Regional Fleet Haulage & Agricultural Freight Logistics</p>
                        </div>
                        <div class="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                            <span>Partner since: 2019</span>
                            <span class="font-bold text-primary-600">Regional Affiliate</span>
                        </div>
                    </div>

                    <div class="bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                        <div>
                            <div class="flex items-center justify-between mb-3">
                                <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-100">Port Authority</span>
                                <span class="text-xs text-emerald-600 font-bold flex items-center gap-1"><i class="fa-solid fa-circle-check"></i> Active</span>
                            </div>
                            <h3 class="font-bold text-slate-900 text-base">Djibouti Port & Free Zones Authority</h3>
                            <p class="text-xs text-slate-500 mt-1.5 leading-relaxed">Maritime Cargo Handover, Doraleh Terminal Staging Protocols</p>
                        </div>
                        <div class="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                            <span>Partner since: 2015</span>
                            <span class="font-bold text-primary-600">Bilateral Accord</span>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    </div>

    <!-- ADMIN MODALS -->
    <!-- Modal 1: Register Member -->
    <div id="admin-modal-member" class="hidden fixed inset-0 z-50 items-center justify-center p-4">
        <div class="admin-modal-backdrop fixed inset-0 bg-slate-900/60 backdrop-blur-xs"></div>
        <div class="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 z-10 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            <div class="flex justify-between items-center mb-6 pb-3 border-b border-slate-100">
                <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-lg bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-sm">
                        <i class="fa-solid fa-building-circle-check"></i>
                    </div>
                    <h3 class="font-bold text-lg text-slate-900">Register Member Association</h3>
                </div>
                <button type="button" class="admin-modal-close text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Close modal">
                    <i class="fa-solid fa-xmark text-lg"></i>
                </button>
            </div>
            <form id="admin-form-new-member" class="space-y-4 text-xs sm:text-sm">
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Organization Name *</label>
                    <input type="text" id="member-org-name" required placeholder="e.g. Awash Valley Haulage PLC" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500">
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Sector *</label>
                        <select id="member-sector" required class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 bg-white">
                            <option value="Freight">Freight Transport</option>
                            <option value="Passenger">Passenger Transport</option>
                            <option value="Logistics">Logistics & Customs</option>
                            <option value="Petroleum">Fuel & Bulk Cargo</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Region / Base *</label>
                        <input type="text" id="member-region" required placeholder="e.g. Addis Ababa" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500">
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Fleet Count *</label>
                        <input type="text" id="member-fleet" required placeholder="e.g. 45 Trucks" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500">
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Membership Tier *</label>
                        <select id="member-tier" required class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 bg-white">
                            <option value="Corporate Member">Corporate Member</option>
                            <option value="Executive Member">Executive Member</option>
                            <option value="Associate Member">Associate Member</option>
                        </select>
                    </div>
                </div>
                <div class="pt-4 flex justify-end gap-3 border-t border-slate-100">
                    <button type="button" class="admin-modal-close px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 font-bold transition-colors">Cancel</button>
                    <button type="submit" class="px-5 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-bold shadow-sm transition-colors">Save Member</button>
                </div>
            </form>
        </div>
    </div>

    <!-- Modal 2: Post Vacancy -->
    <div id="admin-modal-vacancy" class="hidden fixed inset-0 z-50 items-center justify-center p-4">
        <div class="admin-modal-backdrop fixed inset-0 bg-slate-900/60 backdrop-blur-xs"></div>
        <div class="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 z-10 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            <div class="flex justify-between items-center mb-6 pb-3 border-b border-slate-100">
                <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
                        <i class="fa-solid fa-briefcase"></i>
                    </div>
                    <h3 class="font-bold text-lg text-slate-900">Post Career Vacancy</h3>
                </div>
                <button type="button" class="admin-modal-close text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Close modal">
                    <i class="fa-solid fa-xmark text-lg"></i>
                </button>
            </div>
            <form id="admin-form-new-vacancy" class="space-y-4 text-xs sm:text-sm">
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Job Title *</label>
                    <input type="text" id="vacancy-title" required placeholder="e.g. Customs Transit Liaison Officer" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500">
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Station / Location *</label>
                        <input type="text" id="vacancy-station" required placeholder="e.g. Galafi Border Post" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500">
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Contract Type *</label>
                        <select id="vacancy-type" required class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 bg-white">
                            <option value="Full-Time">Full-Time</option>
                            <option value="Contract">Contract</option>
                            <option value="Part-Time">Part-Time</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Closing Date *</label>
                    <input type="text" id="vacancy-deadline" required placeholder="e.g. Dec 15, 2026" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500">
                </div>
                <div class="pt-4 flex justify-end gap-3 border-t border-slate-100">
                    <button type="button" class="admin-modal-close px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 font-bold transition-colors">Cancel</button>
                    <button type="submit" class="px-5 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-bold shadow-sm transition-colors">Publish Vacancy</button>
                </div>
            </form>
        </div>
    </div>

    <!-- Modal 3: Create Article -->
    <div id="admin-modal-news" class="hidden fixed inset-0 z-50 items-center justify-center p-4">
        <div class="admin-modal-backdrop fixed inset-0 bg-slate-900/60 backdrop-blur-xs"></div>
        <div class="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 z-10 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            <div class="flex justify-between items-center mb-6 pb-3 border-b border-slate-100">
                <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
                        <i class="fa-solid fa-newspaper"></i>
                    </div>
                    <h3 class="font-bold text-lg text-slate-900">Publish News Bulletin</h3>
                </div>
                <button type="button" class="admin-modal-close text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Close modal">
                    <i class="fa-solid fa-xmark text-lg"></i>
                </button>
            </div>
            <form id="admin-form-new-news" class="space-y-4 text-xs sm:text-sm">
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Headline *</label>
                    <input type="text" id="news-title" required placeholder="e.g. New Bilateral Agreement Signed at Galafi" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500">
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Category *</label>
                        <select id="news-category" required class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 bg-white">
                            <option value="Industry News">Industry News</option>
                            <option value="Corridor Update">Corridor Update</option>
                            <option value="Safety & Welfare">Safety & Welfare</option>
                            <option value="Policy & Law">Policy & Law</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Status *</label>
                        <select id="news-status" required class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 bg-white">
                            <option value="Published">Published</option>
                            <option value="Draft">Draft</option>
                        </select>
                    </div>
                </div>
                <div class="pt-4 flex justify-end gap-3 border-t border-slate-100">
                    <button type="button" class="admin-modal-close px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 font-bold transition-colors">Cancel</button>
                    <button type="submit" class="px-5 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-bold shadow-sm transition-colors">Save & Post</button>
                </div>
            </form>
        </div>
    </div>

    <!-- Modal 4: Add Partner -->
    <div id="admin-modal-partner" class="hidden fixed inset-0 z-50 items-center justify-center p-4">
        <div class="admin-modal-backdrop fixed inset-0 bg-slate-900/60 backdrop-blur-xs"></div>
        <div class="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 z-10 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            <div class="flex justify-between items-center mb-6 pb-3 border-b border-slate-100">
                <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">
                        <i class="fa-solid fa-handshake"></i>
                    </div>
                    <h3 class="font-bold text-lg text-slate-900">Add Strategic Partner / Sponsor</h3>
                </div>
                <button type="button" class="admin-modal-close text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Close modal">
                    <i class="fa-solid fa-xmark text-lg"></i>
                </button>
            </div>
            <form id="admin-form-new-partner" class="space-y-4 text-xs sm:text-sm">
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Partner Organization Name *</label>
                    <input type="text" id="partner-name" required placeholder="e.g. Ethiopian Insurance Corporation" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500">
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Sector / Type *</label>
                        <input type="text" id="partner-sector" required placeholder="e.g. Commercial Underwriting" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500">
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Agreement Tier *</label>
                        <select id="partner-tier" required class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 bg-white">
                            <option value="Institutional Accord">Institutional Accord</option>
                            <option value="Tier 1 Partner">Tier 1 Partner</option>
                            <option value="Corporate Sponsor">Corporate Sponsor</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Scope / Collaboration Overview</label>
                    <input type="text" id="partner-desc" placeholder="e.g. Comprehensive commercial fleet and cargo underwriting" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500">
                </div>
                <div class="pt-4 flex justify-end gap-3 border-t border-slate-100">
                    <button type="button" class="admin-modal-close px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 font-bold transition-colors">Cancel</button>
                    <button type="submit" class="px-5 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-bold shadow-sm transition-colors">Save Partner</button>
                </div>
            </form>
        </div>
    </div>

    <!-- Toast Notification -->
    <div id="toast" class="fixed bottom-6 right-6 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl transform translate-y-20 opacity-0 transition-all duration-300 z-50 text-xs sm:text-sm font-semibold flex items-center gap-3 border border-slate-700/80">
        <i class="fa-solid fa-circle-check text-emerald-400 text-base"></i>
        <span id="toastMessage">Action completed successfully</span>
    </div>

</div>
`;

export default { title: "Admin Dashboard - ETEF", markup };
