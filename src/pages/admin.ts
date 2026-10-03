const markup = `

    <!-- Sidebar -->
    <aside class="w-64 bg-sidebar text-slate-300 flex flex-col hidden md:flex z-20">
        <div class="h-20 flex items-center gap-3 px-6 border-b border-slate-800">
            <div class="bg-primary-600 text-white p-2 rounded-full h-10 w-10 flex items-center justify-center font-bold">
                <i class="fa-solid fa-shield-halved"></i>
            </div>
            <div>
                <span class="font-bold text-white text-lg tracking-tight block">ETEF ADMIN</span>
                <span class="text-[10px] text-slate-400 uppercase tracking-widest">Secretariat Portal</span>
            </div>
        </div>

        <nav class="flex-grow px-4 py-6 space-y-2 text-sm">
            <a href="#dashboard" id="nav-dashboard" class="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary-600 text-white font-semibold transition-all">
                <i class="fa-solid fa-chart-pie w-5"></i> Dashboard
            </a>
            <a href="#memberships" id="nav-memberships" class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-all">
                <i class="fa-solid fa-users-rectangle w-5"></i> Memberships
            </a>
            <a href="#vacancies" id="nav-vacancies" class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-all">
                <i class="fa-solid fa-briefcase w-5"></i> Job Vacancies
            </a>
            <a href="#news" id="nav-news" class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-all">
                <i class="fa-solid fa-newspaper w-5"></i> News & Updates
            </a>
            <a href="#partners" id="nav-partners" class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-all">
                <i class="fa-solid fa-handshake w-5"></i> Partners & Sponsors
            </a>
        </nav>

        <div class="p-4 border-t border-slate-800">
            <a href="/" class="flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 transition-all font-medium text-sm">
                <i class="fa-solid fa-arrow-right-from-bracket w-5"></i> Exit to Website
            </a>
        </div>
    </aside>

    <!-- Main Content Area -->
    <div class="flex-grow flex flex-col h-screen overflow-y-auto">
        
        <!-- Top Navbar -->
        <header class="h-20 bg-white border-b border-slate-200 px-6 sm:px-10 flex items-center justify-between sticky top-0 z-10 shadow-sm">
            <div class="flex items-center gap-4">
                <button class="md:hidden text-slate-600 focus:outline-none text-xl"><i class="fa-solid fa-bars"></i></button>
                <h1 class="text-xl sm:text-2xl font-bold text-slate-900" id="pageTitle">Admin Overview</h1>
            </div>
            
            <div class="flex items-center gap-4">
                <div class="relative hidden sm:block">
                    <input type="text" placeholder="Search records..." class="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary-500">
                    <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-3 text-slate-400 text-sm"></i>
                </div>
                <div class="flex items-center gap-3 border-l border-slate-200 pl-4">
                    <div class="w-10 h-10 rounded-full bg-primary-100 text-primary-600 font-bold flex items-center justify-center">
                        AD
                    </div>
                    <div class="hidden sm:block text-left">
                        <span class="font-bold text-sm text-slate-900 block">Secretariat Admin</span>
                        <span class="text-xs text-slate-500 block">Addis Ababa Office</span>
                    </div>
                </div>
            </div>
        </header>

        <!-- Dynamic Tab Contents -->
        <main class="flex-grow p-6 sm:p-10">
            
            <!-- DASHBOARD TAB -->
            <div id="tab-dashboard" class="space-y-8">
                <!-- Stats Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                        <div class="flex justify-between items-start mb-4">
                            <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Members</span>
                            <div class="w-10 h-10 bg-blue-50 text-primary-600 rounded-lg flex items-center justify-center font-bold"><i class="fa-solid fa-users"></i></div>
                        </div>
                        <h3 class="text-3xl font-extrabold text-slate-900 mb-1">342</h3>
                        <span class="text-xs text-primary-600 font-semibold flex items-center gap-1"><i class="fa-solid fa-arrow-up"></i> +12 this month</span>
                    </div>

                    <div class="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                        <div class="flex justify-between items-start mb-4">
                            <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Pending Applications</span>
                            <div class="w-10 h-10 bg-slate-100 text-slate-700 rounded-lg flex items-center justify-center font-bold"><i class="fa-solid fa-clock"></i></div>
                        </div>
                        <h3 class="text-3xl font-extrabold text-slate-900 mb-1">18</h3>
                        <span class="text-xs text-slate-600 font-semibold">Requires review</span>
                    </div>

                    <div class="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                        <div class="flex justify-between items-start mb-4">
                            <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Active Vacancies</span>
                            <div class="w-10 h-10 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center font-bold"><i class="fa-solid fa-briefcase"></i></div>
                        </div>
                        <h3 class="text-3xl font-extrabold text-slate-900 mb-1">7</h3>
                        <span class="text-xs text-primary-600 font-semibold">Across network</span>
                    </div>

                    <div class="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                        <div class="flex justify-between items-start mb-4">
                            <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Partners & Sponsors</span>
                            <div class="w-10 h-10 bg-primary-50 text-primary-700 rounded-lg flex items-center justify-center font-bold"><i class="fa-solid fa-handshake"></i></div>
                        </div>
                        <h3 class="text-3xl font-extrabold text-slate-900 mb-1">14</h3>
                        <span class="text-xs text-primary-600 font-semibold">Institutional & Corporate</span>
                    </div>
                </div>

                <!-- Recent Applications Table -->
                <div class="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
                    <div class="p-6 border-b border-slate-200 flex justify-between items-center">
                        <h3 class="font-bold text-lg text-slate-900">Recent Membership Applications</h3>
                        <button class="text-sm font-semibold text-primary-600 hover:underline">View All</button>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead>
                                <tr class="bg-slate-50 text-slate-500 font-semibold text-xs uppercase tracking-wider border-b border-slate-200">
                                    <th class="py-4 px-6">Organization</th>
                                    <th class="py-4 px-6">Contact Person</th>
                                    <th class="py-4 px-6">Sector</th>
                                    <th class="py-4 px-6">Date</th>
                                    <th class="py-4 px-6">Status</th>
                                    <th class="py-4 px-6 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-200 text-slate-700">
                                <tr class="hover:bg-slate-50/50">
                                    <td class="py-4 px-6 font-bold text-slate-900">Abay Express Freight PLC</td>
                                    <td class="py-4 px-6">Kassa Belay</td>
                                    <td class="py-4 px-6">Freight Transport</td>
                                    <td class="py-4 px-6 text-slate-500">26 Sep 2026</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-full">Pending</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="px-3 py-1 bg-primary-50 text-primary-700 font-semibold rounded hover:bg-primary-100 transition-colors">Approve</button>
                                        <button class="px-3 py-1 bg-slate-100 text-slate-700 font-semibold rounded hover:bg-slate-200 transition-colors">Reject</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/50">
                                    <td class="py-4 px-6 font-bold text-slate-900">Selam Bus Lines S.C.</td>
                                    <td class="py-4 px-6">Tadesse Mekonnen</td>
                                    <td class="py-4 px-6">Passenger Transport</td>
                                    <td class="py-4 px-6 text-slate-500">24 Sep 2026</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Approved</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="px-3 py-1 bg-slate-100 text-slate-700 font-semibold rounded hover:bg-slate-200 transition-colors">View</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/50">
                                    <td class="py-4 px-6 font-bold text-slate-900">Dire Trans Logistics</td>
                                    <td class="py-4 px-6">Fatuma Ahmed</td>
                                    <td class="py-4 px-6">Logistics & Customs</td>
                                    <td class="py-4 px-6 text-slate-500">21 Sep 2026</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Approved</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="px-3 py-1 bg-slate-100 text-slate-700 font-semibold rounded hover:bg-slate-200 transition-colors">View</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- MEMBERSHIPS TAB -->
            <div id="tab-memberships" class="hidden space-y-6">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h2 class="text-2xl font-bold text-slate-900">Registered Members Directory</h2>
                        <p class="text-slate-500 text-sm">Search and manage all verified commercial transport and logistics operators.</p>
                    </div>
                    <button id="admin-open-member-modal" class="px-4 py-2.5 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-sm shadow-sm flex items-center gap-2 cursor-pointer self-start sm:self-auto">
                        <i class="fa-solid fa-plus"></i> Register New Member
                    </button>
                </div>

                <!-- Search and Filter Bar -->
                <div class="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-4 justify-between items-center">
                    <div class="relative w-full sm:w-80">
                        <input type="text" id="admin-member-search" placeholder="Search by name or region..." class="w-full pl-10 pr-4 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none">
                        <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-3 text-slate-400 text-xs"></i>
                    </div>
                    <div class="flex items-center gap-3 w-full sm:w-auto">
                        <label for="admin-member-sector-filter" class="text-xs font-semibold text-slate-500 shrink-0">Sector:</label>
                        <select id="admin-member-sector-filter" class="px-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none bg-white">
                            <option value="all">All Sectors</option>
                            <option value="Freight">Freight Transport</option>
                            <option value="Passenger">Passenger Transport</option>
                            <option value="Logistics">Logistics & Customs</option>
                            <option value="Petroleum">Fuel & Bulk Cargo</option>
                        </select>
                    </div>
                </div>

                <!-- Member Directory Table -->
                <div class="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse text-sm" id="admin-members-table">
                            <thead>
                                <tr class="bg-slate-50 text-slate-500 font-semibold text-xs uppercase tracking-wider border-b border-slate-200">
                                    <th class="py-4 px-6">Organization</th>
                                    <th class="py-4 px-6">Sector</th>
                                    <th class="py-4 px-6">Region / Base</th>
                                    <th class="py-4 px-6">Fleet Size</th>
                                    <th class="py-4 px-6">Membership Tier</th>
                                    <th class="py-4 px-6">Status</th>
                                    <th class="py-4 px-6 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-200 text-slate-700">
                                <tr class="hover:bg-slate-50/50 admin-member-row" data-sector="Freight">
                                    <td class="py-4 px-6 font-bold text-slate-900">Abay Express Freight PLC</td>
                                    <td class="py-4 px-6"><span class="px-2 py-0.5 rounded text-xs font-medium bg-primary-50 text-primary-700">Freight</span></td>
                                    <td class="py-4 px-6 text-slate-600">Addis Ababa</td>
                                    <td class="py-4 px-6 font-semibold text-slate-900">140 Trucks</td>
                                    <td class="py-4 px-6"><span class="text-xs font-semibold text-primary-700">Executive Member</span></td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Active</span></td>
                                    <td class="py-4 px-6 text-right">
                                        <button class="px-2.5 py-1 text-slate-600 hover:text-primary-600 font-medium text-xs rounded hover:bg-slate-100 transition-colors">Details</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/50 admin-member-row" data-sector="Passenger">
                                    <td class="py-4 px-6 font-bold text-slate-900">Selam Bus Lines S.C.</td>
                                    <td class="py-4 px-6"><span class="px-2 py-0.5 rounded text-xs font-medium bg-primary-50 text-primary-700">Passenger</span></td>
                                    <td class="py-4 px-6 text-slate-600">National Network</td>
                                    <td class="py-4 px-6 font-semibold text-slate-900">85 Coaches</td>
                                    <td class="py-4 px-6"><span class="text-xs font-semibold text-primary-700">Executive Member</span></td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Active</span></td>
                                    <td class="py-4 px-6 text-right">
                                        <button class="px-2.5 py-1 text-slate-600 hover:text-primary-600 font-medium text-xs rounded hover:bg-slate-100 transition-colors">Details</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/50 admin-member-row" data-sector="Logistics">
                                    <td class="py-4 px-6 font-bold text-slate-900">Dire Trans Logistics S.C.</td>
                                    <td class="py-4 px-6"><span class="px-2 py-0.5 rounded text-xs font-medium bg-primary-50 text-primary-700">Logistics</span></td>
                                    <td class="py-4 px-6 text-slate-600">Dire Dawa Hub</td>
                                    <td class="py-4 px-6 font-semibold text-slate-900">62 Vehicles</td>
                                    <td class="py-4 px-6"><span class="text-xs font-semibold text-slate-700">Corporate Member</span></td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Active</span></td>
                                    <td class="py-4 px-6 text-right">
                                        <button class="px-2.5 py-1 text-slate-600 hover:text-primary-600 font-medium text-xs rounded hover:bg-slate-100 transition-colors">Details</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/50 admin-member-row" data-sector="Freight">
                                    <td class="py-4 px-6 font-bold text-slate-900">Ethio-Djibouti Corridor Haulers</td>
                                    <td class="py-4 px-6"><span class="px-2 py-0.5 rounded text-xs font-medium bg-primary-50 text-primary-700">Freight</span></td>
                                    <td class="py-4 px-6 text-slate-600">Afar / Somali</td>
                                    <td class="py-4 px-6 font-semibold text-slate-900">310 Fleets</td>
                                    <td class="py-4 px-6"><span class="text-xs font-semibold text-primary-700">Strategic Assoc.</span></td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Active</span></td>
                                    <td class="py-4 px-6 text-right">
                                        <button class="px-2.5 py-1 text-slate-600 hover:text-primary-600 font-medium text-xs rounded hover:bg-slate-100 transition-colors">Details</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/50 admin-member-row" data-sector="Passenger">
                                    <td class="py-4 px-6 font-bold text-slate-900">Sheger Express Transit</td>
                                    <td class="py-4 px-6"><span class="px-2 py-0.5 rounded text-xs font-medium bg-primary-50 text-primary-700">Passenger</span></td>
                                    <td class="py-4 px-6 text-slate-600">Addis Ababa</td>
                                    <td class="py-4 px-6 font-semibold text-slate-900">220 Buses</td>
                                    <td class="py-4 px-6"><span class="text-xs font-semibold text-slate-700">Corporate Member</span></td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Active</span></td>
                                    <td class="py-4 px-6 text-right">
                                        <button class="px-2.5 py-1 text-slate-600 hover:text-primary-600 font-medium text-xs rounded hover:bg-slate-100 transition-colors">Details</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/50 admin-member-row" data-sector="Petroleum">
                                    <td class="py-4 px-6 font-bold text-slate-900">Oromia Bulk Petroleum Transporters</td>
                                    <td class="py-4 px-6"><span class="px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700">Petroleum</span></td>
                                    <td class="py-4 px-6 text-slate-600">Oromia</td>
                                    <td class="py-4 px-6 font-semibold text-slate-900">95 Tankers</td>
                                    <td class="py-4 px-6"><span class="text-xs font-semibold text-slate-700">Corporate Member</span></td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Active</span></td>
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
                        <h2 class="text-2xl font-bold text-slate-900">Job Vacancies Management</h2>
                        <p class="text-slate-500 text-sm">Post, review applicants, and manage recruitment across ETEF Secretariat and member networks.</p>
                    </div>
                    <button id="admin-open-vacancy-modal" class="px-4 py-2.5 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-sm shadow-sm flex items-center gap-2 cursor-pointer self-start sm:self-auto">
                        <i class="fa-solid fa-plus"></i> Post New Vacancy
                    </button>
                </div>

                <!-- Vacancies Table -->
                <div class="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse text-sm" id="admin-vacancies-table">
                            <thead>
                                <tr class="bg-slate-50 text-slate-500 font-semibold text-xs uppercase tracking-wider border-b border-slate-200">
                                    <th class="py-4 px-6">Job Title</th>
                                    <th class="py-4 px-6">Duty Station</th>
                                    <th class="py-4 px-6">Type</th>
                                    <th class="py-4 px-6">Applicants</th>
                                    <th class="py-4 px-6">Closing Date</th>
                                    <th class="py-4 px-6">Status</th>
                                    <th class="py-4 px-6 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-200 text-slate-700">
                                <tr class="hover:bg-slate-50/50">
                                    <td class="py-4 px-6 font-bold text-slate-900">Senior Transport Logistics Coordinator</td>
                                    <td class="py-4 px-6 text-slate-600">ETEF Secretariat HQ, Addis Ababa</td>
                                    <td class="py-4 px-6"><span class="px-2 py-0.5 rounded text-xs bg-slate-100 text-slate-700">Full-Time</span></td>
                                    <td class="py-4 px-6 font-bold text-primary-600">14 Candidates</td>
                                    <td class="py-4 px-6 text-slate-500">Oct 30, 2026</td>
                                    <td class="py-4 px-6"><span class="vacancy-status-pill px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Active</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="admin-vacancy-toggle-btn px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded transition-colors">Close</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/50">
                                    <td class="py-4 px-6 font-bold text-slate-900">Heavy Commercial Fleet Safety Inspector</td>
                                    <td class="py-4 px-6 text-slate-600">Dire Dawa Logistics Hub</td>
                                    <td class="py-4 px-6"><span class="px-2 py-0.5 rounded text-xs bg-slate-100 text-slate-700">Full-Time</span></td>
                                    <td class="py-4 px-6 font-bold text-primary-600">9 Candidates</td>
                                    <td class="py-4 px-6 text-slate-500">Nov 15, 2026</td>
                                    <td class="py-4 px-6"><span class="vacancy-status-pill px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Active</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="admin-vacancy-toggle-btn px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded transition-colors">Close</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/50">
                                    <td class="py-4 px-6 font-bold text-slate-900">Association Operations & Tripartite Liaison</td>
                                    <td class="py-4 px-6 text-slate-600">Kirkos Sub-City Office, Addis Ababa</td>
                                    <td class="py-4 px-6"><span class="px-2 py-0.5 rounded text-xs bg-slate-100 text-slate-700">Full-Time</span></td>
                                    <td class="py-4 px-6 font-bold text-primary-600">22 Candidates</td>
                                    <td class="py-4 px-6 text-slate-500">Nov 10, 2026</td>
                                    <td class="py-4 px-6"><span class="vacancy-status-pill px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Active</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="admin-vacancy-toggle-btn px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded transition-colors">Close</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/50">
                                    <td class="py-4 px-6 font-bold text-slate-900">Multimodal Freight Forwarding Specialist</td>
                                    <td class="py-4 px-6 text-slate-600">Modjo Dry Port & Terminal</td>
                                    <td class="py-4 px-6"><span class="px-2 py-0.5 rounded text-xs bg-slate-100 text-slate-700">Contract</span></td>
                                    <td class="py-4 px-6 font-bold text-primary-600">18 Candidates</td>
                                    <td class="py-4 px-6 text-slate-500">Dec 01, 2026</td>
                                    <td class="py-4 px-6"><span class="vacancy-status-pill px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Active</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="admin-vacancy-toggle-btn px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded transition-colors">Close</button>
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
                        <h2 class="text-2xl font-bold text-slate-900">News & Articles Management</h2>
                        <p class="text-slate-500 text-sm">Publish updates, corridor bulletins, and official press releases.</p>
                    </div>
                    <button id="admin-open-news-modal" class="px-4 py-2.5 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-sm shadow-sm flex items-center gap-2 cursor-pointer self-start sm:self-auto">
                        <i class="fa-solid fa-plus"></i> Create Article
                    </button>
                </div>

                <!-- Articles Table -->
                <div class="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse text-sm" id="admin-news-table">
                            <thead>
                                <tr class="bg-slate-50 text-slate-500 font-semibold text-xs uppercase tracking-wider border-b border-slate-200">
                                    <th class="py-4 px-6">Headline</th>
                                    <th class="py-4 px-6">Category</th>
                                    <th class="py-4 px-6">Publish Date</th>
                                    <th class="py-4 px-6">Readership</th>
                                    <th class="py-4 px-6">Status</th>
                                    <th class="py-4 px-6 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-200 text-slate-700">
                                <tr class="hover:bg-slate-50/50">
                                    <td class="py-4 px-6 font-bold text-slate-900 max-w-xs truncate">ETEF and Ministry of Transport Sign Historic Tripartite Road Safety Accord</td>
                                    <td class="py-4 px-6"><span class="px-2 py-0.5 rounded text-xs font-medium bg-primary-50 text-primary-700">Industry News</span></td>
                                    <td class="py-4 px-6 text-slate-500">Oct 01, 2026</td>
                                    <td class="py-4 px-6 font-semibold text-slate-700">1,420 views</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Published</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="admin-news-status-btn px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded transition-colors">Unpublish</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/50">
                                    <td class="py-4 px-6 font-bold text-slate-900 max-w-xs truncate">Djibouti Corridor Freight Tariffs Harmonization Strategy Finalized</td>
                                    <td class="py-4 px-6"><span class="px-2 py-0.5 rounded text-xs font-medium bg-primary-50 text-primary-700">Corridor Update</span></td>
                                    <td class="py-4 px-6 text-slate-500">Sep 24, 2026</td>
                                    <td class="py-4 px-6 font-semibold text-slate-700">2,890 views</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Published</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="admin-news-status-btn px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded transition-colors">Unpublish</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/50">
                                    <td class="py-4 px-6 font-bold text-slate-900 max-w-xs truncate">Commercial Driver Health, Safety & Rest Facility Initiative 2026</td>
                                    <td class="py-4 px-6"><span class="px-2 py-0.5 rounded text-xs font-medium bg-primary-50 text-primary-700">Safety & Welfare</span></td>
                                    <td class="py-4 px-6 text-slate-500">Sep 15, 2026</td>
                                    <td class="py-4 px-6 font-semibold text-slate-700">980 views</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Published</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="admin-news-status-btn px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded transition-colors">Unpublish</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/50">
                                    <td class="py-4 px-6 font-bold text-slate-900 max-w-xs truncate">Draft National Fleet Electrification & Fuel Subsidy Policy Whitepaper</td>
                                    <td class="py-4 px-6"><span class="px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700">Policy & Law</span></td>
                                    <td class="py-4 px-6 text-slate-500">Sep 05, 2026</td>
                                    <td class="py-4 px-6 font-semibold text-slate-700">0 views</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">Draft</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="admin-news-status-btn px-2.5 py-1 bg-primary-50 hover:bg-primary-100 text-primary-700 text-xs font-semibold rounded transition-colors">Publish</button>
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
                        <h2 class="text-2xl font-bold text-slate-900">Partners & Sponsors Management</h2>
                        <p class="text-slate-500 text-sm">Configure sponsor tiers, strategic institutional accords, and official relationships.</p>
                    </div>
                    <button id="admin-open-partner-modal" class="px-4 py-2.5 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-sm shadow-sm flex items-center gap-2 cursor-pointer self-start sm:self-auto">
                        <i class="fa-solid fa-plus"></i> Add Partner
                    </button>
                </div>

                <!-- Partners Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="admin-partners-grid">
                    <div class="bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between">
                        <div>
                            <div class="flex items-center justify-between mb-3">
                                <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-primary-50 text-primary-700">Strategic Banking</span>
                                <span class="text-xs text-primary-600 font-semibold"><i class="fa-solid fa-circle-check"></i> Active</span>
                            </div>
                            <h3 class="font-bold text-slate-900 text-base">Commercial Bank of Ethiopia (CBE)</h3>
                            <p class="text-xs text-slate-500 mt-1">Fleet Financing, Letter of Credit & Digital Payment Accord</p>
                        </div>
                        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                            <span>Partner since: 2018</span>
                            <span class="font-semibold text-primary-600">Tier 1 Partner</span>
                        </div>
                    </div>

                    <div class="bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between">
                        <div>
                            <div class="flex items-center justify-between mb-3">
                                <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-primary-50 text-primary-700">Government Authority</span>
                                <span class="text-xs text-primary-600 font-semibold"><i class="fa-solid fa-circle-check"></i> Active</span>
                            </div>
                            <h3 class="font-bold text-slate-900 text-base">Ministry of Transport & Logistics (MoTL)</h3>
                            <p class="text-xs text-slate-500 mt-1">Federal Regulatory Framework, Policy Dialogue & Safety Accord</p>
                        </div>
                        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                            <span>Partner since: 2014</span>
                            <span class="font-semibold text-primary-600">Institutional Accord</span>
                        </div>
                    </div>

                    <div class="bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between">
                        <div>
                            <div class="flex items-center justify-between mb-3">
                                <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-primary-50 text-primary-700">Road Infrastructure</span>
                                <span class="text-xs text-primary-600 font-semibold"><i class="fa-solid fa-circle-check"></i> Active</span>
                            </div>
                            <h3 class="font-bold text-slate-900 text-base">Ethiopian Roads Administration (ERA)</h3>
                            <p class="text-xs text-slate-500 mt-1">Corridor Maintenance, Weighbridge Standards & Road Safety</p>
                        </div>
                        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                            <span>Partner since: 2016</span>
                            <span class="font-semibold text-primary-600">Institutional Accord</span>
                        </div>
                    </div>

                    <div class="bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between">
                        <div>
                            <div class="flex items-center justify-between mb-3">
                                <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-primary-50 text-primary-700">Municipal Transit</span>
                                <span class="text-xs text-primary-600 font-semibold"><i class="fa-solid fa-circle-check"></i> Active</span>
                            </div>
                            <h3 class="font-bold text-slate-900 text-base">Addis Ababa City Transport Bureau (AARTB)</h3>
                            <p class="text-xs text-slate-500 mt-1">Urban Bus Route Licensing & Terminal Management</p>
                        </div>
                        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                            <span>Partner since: 2017</span>
                            <span class="font-semibold text-primary-600">Municipal Accord</span>
                        </div>
                    </div>

                    <div class="bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between">
                        <div>
                            <div class="flex items-center justify-between mb-3">
                                <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-slate-100 text-slate-700">Regional Freight</span>
                                <span class="text-xs text-primary-600 font-semibold"><i class="fa-solid fa-circle-check"></i> Active</span>
                            </div>
                            <h3 class="font-bold text-slate-900 text-base">Oromia Freight & Transport Enterprise</h3>
                            <p class="text-xs text-slate-500 mt-1">Regional Fleet Haulage & Agricultural Freight Logistics</p>
                        </div>
                        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                            <span>Partner since: 2019</span>
                            <span class="font-semibold text-primary-600">Regional Affiliate</span>
                        </div>
                    </div>

                    <div class="bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between">
                        <div>
                            <div class="flex items-center justify-between mb-3">
                                <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-primary-50 text-primary-700">Port Authority</span>
                                <span class="text-xs text-primary-600 font-semibold"><i class="fa-solid fa-circle-check"></i> Active</span>
                            </div>
                            <h3 class="font-bold text-slate-900 text-base">Djibouti Port & Free Zones Authority</h3>
                            <p class="text-xs text-slate-500 mt-1">Maritime Cargo Handover, Doraleh Terminal Staging Protocols</p>
                        </div>
                        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                            <span>Partner since: 2015</span>
                            <span class="font-semibold text-primary-600">Bilateral Accord</span>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    </div>

    <!-- ADMIN MODALS -->
    <!-- Modal 1: Register Member -->
    <div id="admin-modal-member" class="hidden fixed inset-0 z-50 items-center justify-center p-4">
        <div class="admin-modal-backdrop fixed inset-0 bg-slate-900/60 backdrop-blur-sm"></div>
        <div class="relative bg-white rounded-lg max-w-lg w-full p-6 sm:p-8 z-10 shadow-2xl border border-slate-100">
            <div class="flex justify-between items-center mb-6 pb-3 border-b border-slate-100">
                <h3 class="font-bold text-lg text-slate-900">Register New Member Association</h3>
                <button type="button" class="admin-modal-close text-slate-400 hover:text-slate-600"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <form id="admin-form-new-member" class="space-y-4 text-sm">
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Organization Name *</label>
                    <input type="text" id="member-org-name" required placeholder="e.g. Awash Valley Haulage PLC" class="w-full px-3.5 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500">
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Sector *</label>
                        <select id="member-sector" required class="w-full px-3.5 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500 bg-white">
                            <option value="Freight">Freight Transport</option>
                            <option value="Passenger">Passenger Transport</option>
                            <option value="Logistics">Logistics & Customs</option>
                            <option value="Petroleum">Fuel & Bulk Cargo</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Region / Base *</label>
                        <input type="text" id="member-region" required placeholder="e.g. Addis Ababa" class="w-full px-3.5 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500">
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Fleet Count *</label>
                        <input type="text" id="member-fleet" required placeholder="e.g. 45 Trucks" class="w-full px-3.5 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500">
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Tier *</label>
                        <select id="member-tier" required class="w-full px-3.5 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500 bg-white">
                            <option value="Corporate Member">Corporate Member</option>
                            <option value="Executive Member">Executive Member</option>
                            <option value="Associate Member">Associate Member</option>
                        </select>
                    </div>
                </div>
                <div class="pt-4 flex justify-end gap-3">
                    <button type="button" class="admin-modal-close px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 font-medium">Cancel</button>
                    <button type="submit" class="px-5 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold shadow-sm">Save Member</button>
                </div>
            </form>
        </div>
    </div>

    <!-- Modal 2: Post Vacancy -->
    <div id="admin-modal-vacancy" class="hidden fixed inset-0 z-50 items-center justify-center p-4">
        <div class="admin-modal-backdrop fixed inset-0 bg-slate-900/60 backdrop-blur-sm"></div>
        <div class="relative bg-white rounded-lg max-w-lg w-full p-6 sm:p-8 z-10 shadow-2xl border border-slate-100">
            <div class="flex justify-between items-center mb-6 pb-3 border-b border-slate-100">
                <h3 class="font-bold text-lg text-slate-900">Post New Career Vacancy</h3>
                <button type="button" class="admin-modal-close text-slate-400 hover:text-slate-600"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <form id="admin-form-new-vacancy" class="space-y-4 text-sm">
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Job Title *</label>
                    <input type="text" id="vacancy-title" required placeholder="e.g. Customs Transit Liaison Officer" class="w-full px-3.5 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500">
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Station / Location *</label>
                        <input type="text" id="vacancy-station" required placeholder="e.g. Galafi Border Post" class="w-full px-3.5 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500">
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Contract Type *</label>
                        <select id="vacancy-type" required class="w-full px-3.5 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500 bg-white">
                            <option value="Full-Time">Full-Time</option>
                            <option value="Contract">Contract</option>
                            <option value="Part-Time">Part-Time</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Closing Date *</label>
                    <input type="text" id="vacancy-deadline" required placeholder="e.g. Dec 15, 2026" class="w-full px-3.5 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500">
                </div>
                <div class="pt-4 flex justify-end gap-3">
                    <button type="button" class="admin-modal-close px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 font-medium">Cancel</button>
                    <button type="submit" class="px-5 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold shadow-sm">Publish Vacancy</button>
                </div>
            </form>
        </div>
    </div>

    <!-- Modal 3: Create Article -->
    <div id="admin-modal-news" class="hidden fixed inset-0 z-50 items-center justify-center p-4">
        <div class="admin-modal-backdrop fixed inset-0 bg-slate-900/60 backdrop-blur-sm"></div>
        <div class="relative bg-white rounded-lg max-w-lg w-full p-6 sm:p-8 z-10 shadow-2xl border border-slate-100">
            <div class="flex justify-between items-center mb-6 pb-3 border-b border-slate-100">
                <h3 class="font-bold text-lg text-slate-900">Publish News or Bulletin</h3>
                <button type="button" class="admin-modal-close text-slate-400 hover:text-slate-600"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <form id="admin-form-new-news" class="space-y-4 text-sm">
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Headline *</label>
                    <input type="text" id="news-title" required placeholder="e.g. New Bilateral Agreement Signed at Galafi" class="w-full px-3.5 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500">
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Category *</label>
                        <select id="news-category" required class="w-full px-3.5 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500 bg-white">
                            <option value="Industry News">Industry News</option>
                            <option value="Corridor Update">Corridor Update</option>
                            <option value="Safety & Welfare">Safety & Welfare</option>
                            <option value="Policy & Law">Policy & Law</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Status *</label>
                        <select id="news-status" required class="w-full px-3.5 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500 bg-white">
                            <option value="Published">Published</option>
                            <option value="Draft">Draft</option>
                        </select>
                    </div>
                </div>
                <div class="pt-4 flex justify-end gap-3">
                    <button type="button" class="admin-modal-close px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 font-medium">Cancel</button>
                    <button type="submit" class="px-5 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold shadow-sm">Save & Post</button>
                </div>
            </form>
        </div>
    </div>

    <!-- Modal 4: Add Partner -->
    <div id="admin-modal-partner" class="hidden fixed inset-0 z-50 items-center justify-center p-4">
        <div class="admin-modal-backdrop fixed inset-0 bg-slate-900/60 backdrop-blur-sm"></div>
        <div class="relative bg-white rounded-lg max-w-lg w-full p-6 sm:p-8 z-10 shadow-2xl border border-slate-100">
            <div class="flex justify-between items-center mb-6 pb-3 border-b border-slate-100">
                <h3 class="font-bold text-lg text-slate-900">Add Strategic Partner / Sponsor</h3>
                <button type="button" class="admin-modal-close text-slate-400 hover:text-slate-600"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <form id="admin-form-new-partner" class="space-y-4 text-sm">
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Partner Organization Name *</label>
                    <input type="text" id="partner-name" required placeholder="e.g. Ethiopian Insurance Corporation" class="w-full px-3.5 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500">
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Sector / Type *</label>
                        <input type="text" id="partner-sector" required placeholder="e.g. Commercial Underwriting" class="w-full px-3.5 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500">
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Agreement Tier *</label>
                        <select id="partner-tier" required class="w-full px-3.5 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500 bg-white">
                            <option value="Institutional Accord">Institutional Accord</option>
                            <option value="Tier 1 Partner">Tier 1 Partner</option>
                            <option value="Corporate Sponsor">Corporate Sponsor</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Scope / Collaboration Overview</label>
                    <input type="text" id="partner-desc" placeholder="e.g. Comprehensive commercial fleet and cargo underwriting" class="w-full px-3.5 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500">
                </div>
                <div class="pt-4 flex justify-end gap-3">
                    <button type="button" class="admin-modal-close px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 font-medium">Cancel</button>
                    <button type="submit" class="px-5 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold shadow-sm">Save Partner</button>
                </div>
            </form>
        </div>
    </div>

    <!-- Toast Notification -->
    <div id="toast" class="fixed bottom-6 right-6 bg-slate-900 text-white px-6 py-3 rounded-lg shadow-2xl transform translate-y-20 opacity-0 transition-all duration-300 z-50 text-sm font-medium flex items-center gap-3">
        <i class="fa-solid fa-circle-check text-primary-400"></i>
        <span id="toastMessage">Action completed successfully</span>
    </div>

    
`;
export default { title: "Admin Dashboard - ETEF", markup };
