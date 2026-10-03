import { renderNavbar, renderFooter } from "../layout";

const homeEng = `
    ${renderNavbar("/", "ENG")}

    <main class="flex-grow">
        <!-- Hero Section (Auto-Rotating Transport Imagery) -->
        <section id="hero-section" class="relative text-white pt-16 pb-14 sm:pt-20 sm:pb-16 border-b border-slate-800/40 overflow-hidden min-h-[640px] flex flex-col justify-between">
            <!-- Background Image Slides -->
            <div id="hero-slider-container" class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div class="hero-bg-slide absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out opacity-100 scale-100" style="background-image: url('/images/hero_expressway.jpg');"></div>
                <div class="hero-bg-slide absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out opacity-0 scale-105" style="background-image: url('/images/hero_truck.jpg');"></div>
                <div class="hero-bg-slide absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out opacity-0 scale-105" style="background-image: url('/images/news_mountain_truck.jpg');"></div>
                <div class="hero-bg-slide absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out opacity-0 scale-105" style="background-image: url('/images/news_logistics_hub.jpg');"></div>
                <div class="hero-bg-slide absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out opacity-0 scale-105" style="background-image: url('/images/passenger_transit.jpg');"></div>

                <!-- Gradient Overlay -->
                <div class="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-slate-950/85 backdrop-blur-[1px]"></div>
                <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-600/25 via-transparent to-transparent"></div>
            </div>

            <!-- Floating Slide Arrows -->
            <button id="hero-slide-prev" class="hidden md:flex absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white/80 hover:text-white border border-white/20 items-center justify-center transition-all cursor-pointer backdrop-blur-sm shadow-lg hover:scale-105" aria-label="Previous Slide">
                <i class="fa-solid fa-chevron-left text-sm"></i>
            </button>
            <button id="hero-slide-next" class="hidden md:flex absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white/80 hover:text-white border border-white/20 items-center justify-center transition-all cursor-pointer backdrop-blur-sm shadow-lg hover:scale-105" aria-label="Next Slide">
                <i class="fa-solid fa-chevron-right text-sm"></i>
            </button>

            <!-- Foreground Content -->
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
                <!-- Badge -->
                <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/15 hover:bg-white/25 text-white border border-white/25 shadow-lg backdrop-blur-md mb-6 transition-all">
                    <i class="fa-solid fa-shield-halved text-primary-300 text-xs"></i>
                    <span>Official Transport Employers Federation</span>
                </div>

                <!-- Headline -->
                <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] max-w-4xl mx-auto mb-6 drop-shadow-md">
                    A stronger voice for<br />
                    Ethiopia's transport<br />
                    employers.
                </h1>

                <!-- Subtitle -->
                <p class="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed mb-8 drop-shadow">
                    Connecting transport employers, protecting member interests and supporting a stronger, sustainable and peaceful transport industry.
                </p>

                <!-- Action Buttons -->
                <div class="flex flex-wrap items-center justify-center gap-4 mb-10 sm:mb-12">
                    <a href="/about" class="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-6 py-3.5 rounded-lg font-semibold text-sm shadow-lg transition-all hover:border-white/50">
                        <span>Explore About Us</span>
                        <i class="fa-solid fa-arrow-right text-xs"></i>
                    </a>
                    <a href="/membership" class="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-7 py-3.5 rounded-lg font-bold text-sm shadow-xl shadow-primary-600/40 transition-all transform hover:-translate-y-0.5">
                        <span>Become a Member</span>
                        <i class="fa-solid fa-user-plus text-xs"></i>
                    </a>
                </div>

                <!-- Floating Glassmorphic Institutional Stats -->
                <div class="max-w-5xl mx-auto">
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                        <div class="bg-white/95 hover:bg-white p-6 rounded-lg border border-white/50 shadow-2xl hover:shadow-cyan-500/10 transition-all card-hover-fx text-left backdrop-blur-md">
                            <div class="w-11 h-11 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-3.5 text-lg">
                                <i class="fa-solid fa-users-viewfinder"></i>
                            </div>
                            <span class="text-2xl sm:text-3xl font-extrabold text-slate-900 block">6,652+</span>
                            <span class="text-xs font-semibold text-slate-700 block mt-1">Registered Members</span>
                            <span class="text-[11px] text-slate-500 block mt-0.5">Commercial Transporters</span>
                        </div>

                        <div class="bg-white/95 hover:bg-white p-6 rounded-lg border border-white/50 shadow-2xl hover:shadow-cyan-500/10 transition-all card-hover-fx text-left backdrop-blur-md">
                            <div class="w-11 h-11 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-3.5 text-lg">
                                <i class="fa-solid fa-sitemap"></i>
                            </div>
                            <span class="text-2xl sm:text-3xl font-extrabold text-slate-900 block">17</span>
                            <span class="text-xs font-semibold text-slate-700 block mt-1">Employers' Associations</span>
                            <span class="text-[11px] text-slate-500 block mt-0.5">Regional & Sector Unions</span>
                        </div>

                        <div class="bg-white/95 hover:bg-white p-6 rounded-lg border border-white/50 shadow-2xl hover:shadow-cyan-500/10 transition-all card-hover-fx text-left backdrop-blur-md">
                            <div class="w-11 h-11 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-3.5 text-lg">
                                <i class="fa-solid fa-route"></i>
                            </div>
                            <span class="text-2xl sm:text-3xl font-extrabold text-slate-900 block">4</span>
                            <span class="text-xs font-semibold text-slate-700 block mt-1">Key Corridors Monitored</span>
                            <span class="text-[11px] text-slate-500 block mt-0.5">Djibouti, Modjo, Moyale, Berbera</span>
                        </div>

                        <div class="bg-white/95 hover:bg-white p-6 rounded-lg border border-white/50 shadow-2xl hover:shadow-cyan-500/10 transition-all card-hover-fx text-left backdrop-blur-md">
                            <div class="w-11 h-11 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-3.5 text-lg">
                                <i class="fa-solid fa-certificate"></i>
                            </div>
                            <span class="text-xl sm:text-2xl font-extrabold text-slate-900 block">May 12, 2018</span>
                            <span class="text-xs font-semibold text-slate-700 block mt-1">Charter Certification Date</span>
                            <span class="text-[11px] text-slate-500 block mt-0.5">Ministry of Labor Recognition</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- LIVE TRADE CORRIDORS & PORT CLEARANCE TRACKER -->
        <section class="py-12 bg-white border-b border-slate-200 relative">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Section Header with Live Pulsing Badge -->
                <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                    <div>
                        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-primary-50 text-primary-700 border border-primary-200 mb-2">
                            <span class="w-2 h-2 rounded-full bg-primary-600 animate-pulse"></span>
                            <span>NATIONAL LOGISTICS WATCH • LIVE CORRIDOR STATUS</span>
                        </div>
                        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                            Strategic Trade Corridors & Port Clearance
                        </h2>
                        <p class="text-sm text-slate-600 mt-1">
                            Real-time transit conditions, customs checkpoint throughput, and freight alerts across Ethiopia's principal economic arteries.
                        </p>
                    </div>
                    <div class="text-xs text-slate-500 flex items-center gap-2">
                        <i class="fa-solid fa-clock-rotate-left"></i>
                        <span>Updated: Today, 08:30 EAT • Source: ETEF Secretariat Logistics Directorate</span>
                    </div>
                </div>

                <!-- 4 Corridors Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <!-- Corridor 1: Ethio-Djibouti Corridor -->
                    <div class="group bg-white rounded-lg border border-slate-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm">
                        <div>
                            <div class="relative h-44 overflow-hidden bg-slate-900">
                                <img src="/images/corridor_djibouti.jpg" alt="Djibouti – Addis Ababa Expressway Corridor" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
                                <div class="absolute top-3 left-3 right-3 flex items-center justify-between">
                                    <span class="px-2.5 py-1 rounded-md text-[11px] font-black bg-slate-900/85 text-white backdrop-blur-md uppercase tracking-wider border border-white/20 shadow-sm">
                                        Corridor 01
                                    </span>
                                    <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-primary-600 text-white backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                                        <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> Normal Flow
                                    </span>
                                </div>
                                <div class="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between text-white">
                                    <span class="text-[11px] font-semibold text-primary-300 flex items-center gap-1.5 drop-shadow">
                                        <i class="fa-solid fa-route text-[10px]"></i> Principal Sea-Trade Link
                                    </span>
                                    <span class="text-[10px] text-white/90 bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                                        <i class="fa-solid fa-satellite-dish text-[9px] text-primary-400 mr-1"></i> Live
                                    </span>
                                </div>
                            </div>

                            <div class="p-5">
                                <h3 class="font-bold text-slate-900 text-lg mb-0.5 group-hover:text-primary-600 transition-colors">
                                    Djibouti – Addis Ababa
                                </h3>
                                <p class="text-xs text-slate-500 mb-4 flex items-center gap-1.5">
                                    <i class="fa-solid fa-location-dot text-primary-500"></i> Galafi / Dewele Border Crossing
                                </p>

                                <div class="space-y-2.5 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-lg border border-slate-100">
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-regular fa-clock text-slate-400"></i> Transit Duration:</span>
                                        <span class="font-bold text-slate-800">42–48 Hours</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-hourglass-half text-slate-400"></i> Galafi Border Queue:</span>
                                        <span class="font-bold text-primary-700 bg-primary-50 px-2 py-0.5 rounded border border-primary-200">Under 4.2 Hours</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-scale-balanced text-slate-400"></i> Toll / Weighbridge:</span>
                                        <span class="font-semibold text-slate-800">All 6 Scales Active</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="p-5 pt-0">
                            <button class="corridor-advisory-btn w-full py-2.5 bg-primary-50 hover:bg-primary-600 text-primary-700 hover:text-white border border-primary-200 hover:border-transparent rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group/btn" data-corridor-id="djibouti">
                                <span>View Corridor Advisory</span>
                                <i class="fa-solid fa-arrow-right text-[11px] group-hover/btn:translate-x-1 transition-transform"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Corridor 2: Modjo Multimodal Dry Port -->
                    <div class="group bg-white rounded-lg border border-slate-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm">
                        <div>
                            <div class="relative h-44 overflow-hidden bg-slate-900">
                                <img src="/images/corridor_modjo.jpg" alt="Modjo Dry Port Multimodal Terminal Yard" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
                                <div class="absolute top-3 left-3 right-3 flex items-center justify-between">
                                    <span class="px-2.5 py-1 rounded-md text-[11px] font-black bg-slate-900/85 text-white backdrop-blur-md uppercase tracking-wider border border-white/20 shadow-sm">
                                        Corridor 02
                                    </span>
                                    <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-primary-600 text-white backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                                        <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> Terminal Open
                                    </span>
                                </div>
                                <div class="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between text-white">
                                    <span class="text-[11px] font-semibold text-primary-300 flex items-center gap-1.5 drop-shadow">
                                        <i class="fa-solid fa-train-subway text-[10px]"></i> Multimodal Rail Hub
                                    </span>
                                    <span class="text-[10px] text-white/90 bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                                        <i class="fa-solid fa-satellite-dish text-[9px] text-primary-400 mr-1"></i> Live
                                    </span>
                                </div>
                            </div>

                            <div class="p-5">
                                <h3 class="font-bold text-slate-900 text-lg mb-0.5 group-hover:text-primary-600 transition-colors">
                                    Modjo Multimodal Port
                                </h3>
                                <p class="text-xs text-slate-500 mb-4 flex items-center gap-1.5">
                                    <i class="fa-solid fa-location-dot text-primary-500"></i> Central Inbound Clearance Hub
                                </p>

                                <div class="space-y-2.5 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-lg border border-slate-100">
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-boxes-stacked text-slate-400"></i> Container Dwell:</span>
                                        <span class="font-bold text-primary-700 bg-primary-50 px-2 py-0.5 rounded border border-primary-200">3.8 Days (Optimal)</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-truck-ramp-box text-slate-400"></i> Daily Truck Dispatch:</span>
                                        <span class="font-bold text-slate-800">480+ Heavy Units</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-train text-slate-400"></i> Freight Rail Shunts:</span>
                                        <span class="font-semibold text-slate-800">3 Block Trains Daily</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="p-5 pt-0">
                            <button class="corridor-advisory-btn w-full py-2.5 bg-primary-50 hover:bg-primary-600 text-primary-700 hover:text-white border border-primary-200 hover:border-transparent rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group/btn" data-corridor-id="modjo">
                                <span>View Port Advisory</span>
                                <i class="fa-solid fa-arrow-right text-[11px] group-hover/btn:translate-x-1 transition-transform"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Corridor 3: Moyale – Lamu Corridor -->
                    <div class="group bg-white rounded-lg border border-slate-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm">
                        <div>
                            <div class="relative h-44 overflow-hidden bg-slate-900">
                                <img src="/images/corridor_moyale.jpg" alt="Moyale One Stop Border Post" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
                                <div class="absolute top-3 left-3 right-3 flex items-center justify-between">
                                    <span class="px-2.5 py-1 rounded-md text-[11px] font-black bg-slate-900/85 text-white backdrop-blur-md uppercase tracking-wider border border-white/20 shadow-sm">
                                        Corridor 03
                                    </span>
                                    <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-primary-600 text-white backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                                        <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> Operating
                                    </span>
                                </div>
                                <div class="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between text-white">
                                    <span class="text-[11px] font-semibold text-primary-300 flex items-center gap-1.5 drop-shadow">
                                        <i class="fa-solid fa-truck-moving text-[10px]"></i> Southern Gateway
                                    </span>
                                    <span class="text-[10px] text-white/90 bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                                        <i class="fa-solid fa-satellite-dish text-[9px] text-primary-400 mr-1"></i> Live
                                    </span>
                                </div>
                            </div>

                            <div class="p-5">
                                <h3 class="font-bold text-slate-900 text-lg mb-0.5 group-hover:text-primary-600 transition-colors">
                                    Moyale – Lamu Corridor
                                </h3>
                                <p class="text-xs text-slate-500 mb-4 flex items-center gap-1.5">
                                    <i class="fa-solid fa-location-dot text-primary-500"></i> Kenya One-Stop Border Post
                                </p>

                                <div class="space-y-2.5 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-lg border border-slate-100">
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-regular fa-clock text-slate-400"></i> Transit Duration:</span>
                                        <span class="font-bold text-slate-800">55–60 Hours</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-check-double text-slate-400"></i> OSBP Throughput:</span>
                                        <span class="font-bold text-primary-700 bg-primary-50 px-2 py-0.5 rounded border border-primary-200">Seamless Clearance</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-gas-pump text-slate-400"></i> Livestock & Fuel:</span>
                                        <span class="font-semibold text-slate-800">Standard Quarantine Open</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="p-5 pt-0">
                            <button class="corridor-advisory-btn w-full py-2.5 bg-primary-50 hover:bg-primary-600 text-primary-700 hover:text-white border border-primary-200 hover:border-transparent rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group/btn" data-corridor-id="moyale">
                                <span>View Border Advisory</span>
                                <i class="fa-solid fa-arrow-right text-[11px] group-hover/btn:translate-x-1 transition-transform"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Corridor 4: Berbera Port Corridor -->
                    <div class="group bg-white rounded-lg border border-slate-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm">
                        <div>
                            <div class="relative h-44 overflow-hidden bg-slate-900">
                                <img src="/images/corridor_berbera.jpg" alt="Berbera to Dire Dawa Trade Corridor Highway" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
                                <div class="absolute top-3 left-3 right-3 flex items-center justify-between">
                                    <span class="px-2.5 py-1 rounded-md text-[11px] font-black bg-slate-900/85 text-white backdrop-blur-md uppercase tracking-wider border border-white/20 shadow-sm">
                                        Corridor 04
                                    </span>
                                    <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-900 border border-white/20 text-white backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                                        <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> Freight Scaling
                                    </span>
                                </div>
                                <div class="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between text-white">
                                    <span class="text-[11px] font-semibold text-primary-300 flex items-center gap-1.5 drop-shadow">
                                        <i class="fa-solid fa-truck-fast text-[10px]"></i> Eastern Maritime Access
                                    </span>
                                    <span class="text-[10px] text-white/90 bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                                        <i class="fa-solid fa-satellite-dish text-[9px] text-primary-400 mr-1"></i> Live
                                    </span>
                                </div>
                            </div>

                            <div class="p-5">
                                <h3 class="font-bold text-slate-900 text-lg mb-0.5 group-hover:text-primary-600 transition-colors">
                                    Berbera – Dire Dawa
                                </h3>
                                <p class="text-xs text-slate-500 mb-4 flex items-center gap-1.5">
                                    <i class="fa-solid fa-location-dot text-primary-500"></i> Tog Wajaale Transit Point
                                </p>

                                <div class="space-y-2.5 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-lg border border-slate-100">
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-regular fa-clock text-slate-400"></i> Transit Duration:</span>
                                        <span class="font-bold text-slate-800">30–36 Hours</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-shield-halved text-slate-400"></i> Customs Clearance:</span>
                                        <span class="font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">5.5 Hours Avg</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-road text-slate-400"></i> Road Upgrades:</span>
                                        <span class="font-semibold text-slate-800">Section 2 Paving Active</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="p-5 pt-0">
                            <button class="corridor-advisory-btn w-full py-2.5 bg-primary-50 hover:bg-primary-600 text-primary-700 hover:text-white border border-primary-200 hover:border-transparent rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group/btn" data-corridor-id="berbera">
                                <span>View Corridor Advisory</span>
                                <i class="fa-solid fa-arrow-right text-[11px] group-hover/btn:translate-x-1 transition-transform"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Emergency Corridor Hotline Banner -->              <div class="mt-8 rounded-lg p-6 text-white flex flex-col md:flex-row items-center justify-between gap-5 shadow-xl relative overflow-hidden">
                    <div class="absolute inset-0 z-0 bg-[url('/images/hero_expressway.jpg')] bg-cover bg-center animate-slow-motion"></div>
                    <div class="absolute inset-0 z-0 bg-black/50"></div>
                    <div class="flex items-center gap-4 text-center md:text-left relative z-10">
                        <div class="w-12 h-12 rounded-lg bg-white/20 text-white flex items-center justify-center text-xl shrink-0 shadow-inner">
                            <i class="fa-solid fa-truck-ramp-box"></i>
                        </div>
                        <div>
                            <span class="font-bold text-base sm:text-lg block tracking-tight">ETEF National 24/7 Corridor Emergency & Breakdown Helpline</span>
                            <p class="text-xs sm:text-sm text-blue-100 mt-0.5">Encountering arbitrary delays, security issues, or breakdown between Modjo, Galafi, or Moyale?</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-3 shrink-0 relative z-10 w-full sm:w-auto justify-center">
                        <a href="tel:+251114717787" class="px-5 py-2.5 bg-white text-primary-700 hover:bg-slate-100 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md transition-all">
                            <i class="fa-solid fa-phone"></i>
                            <span>+251 11 4717787</span>
                        </a>
                        <button id="btn-corridor-incident-report" class="px-4 py-2.5 bg-primary-700 hover:bg-primary-800 text-white border border-white/30 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2">
                            <i class="fa-solid fa-triangle-exclamation text-white"></i>
                            <span>Report Road Incident</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- INSTITUTIONAL CHARTER, MISSION & VISION (Pure English) -->
        <section class="py-20 bg-slate-50 border-b border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <span class="text-xs font-bold text-primary-600 uppercase tracking-wider bg-primary-50 px-3.5 py-1.5 rounded-full border border-primary-100">
                        Institutional Mandate
                    </span>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                        A Statutory Apex Body For Ethiopian Transport Employers
                    </h2>
                    <p class="text-slate-600 text-sm mt-3 leading-relaxed">
                        Founded through the historic 2016 Dry Cargo Associations Union and certified on May 12, 2018 (Ginbot 4, 2010 E.C.) under FDRE Constitution Article 31 and Labor Proclamation No. 1156/2012.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <!-- Strategic Mission Card -->
                    <div class="bg-white rounded-lg p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                        <div class="w-14 h-14 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-2xl mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                            <i class="fa-solid fa-compass"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-slate-900 mb-2">Our Mission</h3>
                        <p class="text-primary-700 text-xs font-bold uppercase tracking-wider mb-3">
                            Protecting Transport Employers & Fostering Sustainable Growth
                        </p>
                        <p class="text-sm text-slate-600 leading-relaxed mb-6">
                            "To protect the statutory rights and business interests of member employers, establish industrial peace, provide legal and dispute mediation, and advocate for progressive transport policies."
                        </p>
                        <ul class="space-y-2.5 text-xs text-slate-700">
                            <li class="flex items-center gap-2">
                                <i class="fa-solid fa-circle-check text-primary-600"></i>
                                <span>Legal protection & high-level court advocacy</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="fa-solid fa-circle-check text-primary-600"></i>
                                <span>Collective bargaining & sustainable industrial peace</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="fa-solid fa-circle-check text-primary-600"></i>
                                <span>Policy dialogue with federal and international bodies</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Strategic Vision Card -->
                    <div class="bg-white rounded-lg p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                        <div class="w-14 h-14 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center text-2xl mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                            <i class="fa-solid fa-eye"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-slate-900 mb-2">Our Vision</h3>
                        <p class="text-sky-700 text-xs font-bold uppercase tracking-wider mb-3">
                            Strong & Influential Voice in Ethiopia's Transport Sector
                        </p>
                        <p class="text-sm text-slate-600 leading-relaxed mb-6">
                            "To become a strong and influential representative within Ethiopia's transport sector, driving national competitiveness, fleet modernization, and tripartite social dialogue."
                        </p>
                        <ul class="space-y-2.5 text-xs text-slate-700">
                            <li class="flex items-center gap-2">
                                <i class="fa-solid fa-circle-check text-sky-600"></i>
                                <span>Unified statutory voice for 17 employers' associations</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="fa-solid fa-circle-check text-sky-600"></i>
                                <span>Primary value: Member Satisfaction</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="fa-solid fa-circle-check text-sky-600"></i>
                                <span>National impact on economic, social, and trade development</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="text-center">
                    <a href="/about" class="inline-flex items-center gap-2.5 bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-3.5 rounded-lg shadow-md transition-all text-sm">
                        <span>Explore More About ETEF</span>
                        <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </section>

        <!-- Commercial Sector Representation -->
        <section class="py-20 bg-white border-b border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-14">
                    <span class="text-xs font-bold text-primary-600 uppercase tracking-wider bg-primary-50 px-3.5 py-1.5 rounded-full border border-primary-100">
                        Sector Representation
                    </span>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                        Comprehensive Transport Sector Coverage
                    </h2>
                    <p class="text-slate-600 text-sm mt-3">
                        From heavy cross-border freight convoys to nationwide inter-city passenger transit and multimodal dry port logistics terminals.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Sector 1: Freight & Heavy Cargo -->
                    <div class="card-hover-fx bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between group">
                        <div>
                            <div class="h-52 w-full overflow-hidden relative">
                                <img src="/images/hero_truck.jpg" alt="Commercial Heavy Freight Truck" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                <span class="absolute top-4 left-4 bg-primary-600/90 backdrop-blur-md text-white font-bold text-xs px-3 py-1 rounded-full shadow-sm">
                                    Heavy Freight
                                </span>
                            </div>
                            <div class="p-6">
                                <h3 class="text-xl font-bold text-slate-900 mb-2">Freight & Heavy Cargo Transport</h3>
                                <p class="text-xs text-slate-600 leading-relaxed mb-4">
                                    Advocating for dry bulk, containerized flatbeds, and liquid fuel carriers operating along the vital Addis Ababa–Djibouti, Modjo, and regional distribution routes.
                                </p>
                                <div class="space-y-1.5 text-xs text-slate-700">
                                    <div class="flex items-center gap-2">
                                        <i class="fa-solid fa-check text-primary-600 text-[11px]"></i>
                                        <span>Axle load & transit tariff standard facilitation</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <i class="fa-solid fa-check text-primary-600 text-[11px]"></i>
                                        <span>Corridor security and fuel transport protocols</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-6 pt-0">
                            <a href="/about" class="text-xs font-bold text-primary-600 hover:text-primary-700 inline-flex items-center gap-1.5">
                                <span>Learn Freight Mandate</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </a>
                        </div>
                    </div>

                    <!-- Sector 2: Passenger Transit -->
                    <div class="card-hover-fx bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between group">
                        <div>
                            <div class="h-52 w-full overflow-hidden relative">
                                <img src="/images/passenger_transit.jpg" alt="Passenger Bus Fleet" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                <span class="absolute top-4 left-4 bg-primary-600/90 backdrop-blur-md text-white font-bold text-xs px-3 py-1 rounded-full shadow-sm">
                                    Public Transit
                                </span>
                            </div>
                            <div class="p-6">
                                <h3 class="text-xl font-bold text-slate-900 mb-2">Public & Inter-City Passenger Transit</h3>
                                <p class="text-xs text-slate-600 leading-relaxed mb-4">
                                    Representing regional bus associations, cross-country passenger fleets, and urban transit operators serving millions of citizens daily.
                                </p>
                                <div class="space-y-1.5 text-xs text-slate-700">
                                    <div class="flex items-center gap-2">
                                        <i class="fa-solid fa-check text-primary-600 text-[11px]"></i>
                                        <span>Terminal safety & passenger service regulations</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <i class="fa-solid fa-check text-primary-600 text-[11px]"></i>
                                        <span>Cross-regional route licensing standardization</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-6 pt-0">
                            <a href="/about" class="text-xs font-bold text-primary-600 hover:text-primary-700 inline-flex items-center gap-1.5">
                                <span>Learn Transit Mandate</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </a>
                        </div>
                    </div>

                    <!-- Sector 3: Multimodal Logistics -->
                    <div class="card-hover-fx bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between group">
                        <div>
                            <div class="h-52 w-full overflow-hidden relative">
                                <img src="/images/about_vision.jpg" alt="Dry Port Cargo Logistics" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                <span class="absolute top-4 left-4 bg-primary-600/90 backdrop-blur-md text-white font-bold text-xs px-3 py-1 rounded-full shadow-sm">
                                    Multimodal Hubs
                                </span>
                            </div>
                            <div class="p-6">
                                <h3 class="text-xl font-bold text-slate-900 mb-2">Logistics & Multimodal Operators</h3>
                                <p class="text-xs text-slate-600 leading-relaxed mb-4">
                                    Supporting freight forwarders, dry port cargo handlers, warehouse operators, and modern supply chain technology service providers.
                                </p>
                                <div class="space-y-1.5 text-xs text-slate-700">
                                    <div class="flex items-center gap-2">
                                        <i class="fa-solid fa-check text-primary-600 text-[11px]"></i>
                                        <span>Modjo dry port dwell time reduction advocacy</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <i class="fa-solid fa-check text-primary-600 text-[11px]"></i>
                                        <span>Multimodal trade digitization & AfCFTA readiness</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-6 pt-0">
                            <a href="/about" class="text-xs font-bold text-primary-600 hover:text-primary-700 inline-flex items-center gap-1.5">
                                <span>Learn Logistics Mandate</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 6 Core Federation Services -->
        <section class="py-20 bg-slate-50 border-b border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <span class="text-xs font-bold text-primary-600 uppercase tracking-wider bg-primary-50 px-3.5 py-1.5 rounded-full border border-primary-100">
                        Core Services
                    </span>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                        How We Empower Transport Employers
                    </h2>
                    <p class="text-slate-600 text-sm mt-3">
                        Six official statutory service pillars established to protect employers' legal and commercial interests nationwide.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="bg-white p-7 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-5">
                            <i class="fa-solid fa-scale-balanced"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 text-lg mb-2">Legal Representation & Defense</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            Representing transport employers before judicial courts, administrative tribunals, and arbitration boards to protect business assets and contractual rights.
                        </p>
                    </div>

                    <div class="bg-white p-7 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-5">
                            <i class="fa-solid fa-handshake-angle"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 text-lg mb-2">Collective Bargaining</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            Leading structured negotiations with transport labor unions to establish fair, productive, and balanced collective agreements under Proclamation No. 1156/2012.
                        </p>
                    </div>

                    <div class="bg-white p-7 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-5">
                            <i class="fa-solid fa-scroll"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 text-lg mb-2">Policy & Regulatory Reform</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            Conducting empirical research and consulting with federal ministries on transit tariffs, taxation, customs checkpoints, and logistics master plans.
                        </p>
                    </div>

                    <div class="bg-white p-7 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-5">
                            <i class="fa-solid fa-user-graduate"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 text-lg mb-2">Professional Training</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            Delivering specialized leadership, fleet management, logistics technology, and workplace occupational safety programs for enterprise members.
                        </p>
                    </div>

                    <div class="bg-white p-7 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-5">
                            <i class="fa-solid fa-network-wired"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 text-lg mb-2">Freight Market Networking</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            Connecting member fleets with domestic and cross-border commercial opportunities, industrial parks, and agricultural export corridors.
                        </p>
                    </div>

                    <div class="bg-white p-7 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-5">
                            <i class="fa-solid fa-globe"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 text-lg mb-2">Exhibitions & Symposia</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            Hosting nationwide transport expos, vehicle technology showcases, and high-level tripartite conferences on logistics modernization.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section (Clean White / Light Brand Card) -->
        <section class="py-20 bg-white border-t border-slate-200 text-slate-900 relative">
            <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <span class="text-xs font-bold text-primary-700 uppercase tracking-wider bg-primary-50 px-4 py-1.5 rounded-full border border-primary-200 inline-block mb-4">
                    Join the Apex National Voice
                </span>
                <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
                    Ready to Strengthen Your Transport Enterprise?
                </h2>
                <p class="text-slate-600 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
                    Join 17 employers' associations and over 6,652 commercial operators. Benefit from collective legal representation, dispute resolution, and regulatory advocacy.
                </p>
                <div class="flex flex-wrap items-center justify-center gap-4">
                    <a href="/membership" class="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg text-sm shadow-md hover:shadow-lg transition-all">
                        Apply for Membership
                    </a>
                    <a href="/contact" class="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg text-sm shadow-sm transition-all">
                        Contact Secretariat
                    </a>
                </div>
            </div>
        </section>
    </main>

    ${renderFooter("ENG")}
`;

const homeAm = `
    ${renderNavbar("/", "አማ")}

    <main class="flex-grow">
        <!-- Hero Section (Auto-Rotating Transport Imagery) -->
        <section id="hero-section" class="relative text-white pt-16 pb-14 sm:pt-20 sm:pb-16 border-b border-slate-800/40 overflow-hidden min-h-[640px] flex flex-col justify-between">
            <!-- Background Image Slides -->
            <div id="hero-slider-container" class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div class="hero-bg-slide absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out opacity-100 scale-100" style="background-image: url('/images/hero_expressway.jpg');"></div>
                <div class="hero-bg-slide absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out opacity-0 scale-105" style="background-image: url('/images/hero_truck.jpg');"></div>
                <div class="hero-bg-slide absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out opacity-0 scale-105" style="background-image: url('/images/news_mountain_truck.jpg');"></div>
                <div class="hero-bg-slide absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out opacity-0 scale-105" style="background-image: url('/images/news_logistics_hub.jpg');"></div>
                <div class="hero-bg-slide absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out opacity-0 scale-105" style="background-image: url('/images/passenger_transit.jpg');"></div>

                <!-- Gradient Overlay -->
                <div class="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-slate-950/85 backdrop-blur-[1px]"></div>
                <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-600/25 via-transparent to-transparent"></div>
            </div>

            <!-- Floating Slide Arrows -->
            <button id="hero-slide-prev" class="hidden md:flex absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white/80 hover:text-white border border-white/20 items-center justify-center transition-all cursor-pointer backdrop-blur-sm shadow-lg hover:scale-105" aria-label="ቀዳሚ ምስል">
                <i class="fa-solid fa-chevron-left text-sm"></i>
            </button>
            <button id="hero-slide-next" class="hidden md:flex absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white/80 hover:text-white border border-white/20 items-center justify-center transition-all cursor-pointer backdrop-blur-sm shadow-lg hover:scale-105" aria-label="ቀጣይ ምስል">
                <i class="fa-solid fa-chevron-right text-sm"></i>
            </button>

            <!-- Foreground Content -->
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
                <!-- Badge -->
                <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/15 hover:bg-white/25 text-white border border-white/25 shadow-lg backdrop-blur-md mb-6 transition-all">
                    <i class="fa-solid fa-shield-halved text-primary-300 text-xs"></i>
                    <span>ይፋዊ የትራንስፖርት አሠሪዎች ፌዴሬሽን</span>
                </div>

                <!-- Headline -->
                <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.12] max-w-4xl mx-auto mb-6 drop-shadow-md">
                    ለኢትዮጵያ የትራንስፖርት<br />
                    አሠሪዎች ጠንካራና<br />
                    ተደማጭ የጋራ ድምፅ።
                </h1>

                <!-- Subtitle -->
                <p class="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed mb-8 drop-shadow">
                    የትራንስፖርት አሠሪዎችን በአንድነት በማስተባበር፣ የአባላትን የጋራ መብትና ጥቅም በማስጠበቅ ለዘላቂና ሰላማዊ የትራንስፖርት ኢንዱስትሪ እንሰራለን።
                </p>

                <!-- Action Buttons -->
                <div class="flex flex-wrap items-center justify-center gap-4 mb-10 sm:mb-12">
                    <a href="/about" class="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-6 py-3.5 rounded-lg font-semibold text-sm shadow-lg transition-all hover:border-white/50">
                        <span>ስለ ፌዴሬሽኑ ይወቁ</span>
                        <i class="fa-solid fa-arrow-right text-xs"></i>
                    </a>
                    <a href="/membership" class="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-7 py-3.5 rounded-lg font-bold text-sm shadow-xl shadow-primary-600/40 transition-all transform hover:-translate-y-0.5">
                        <span>አባል ይሁኑ</span>
                        <i class="fa-solid fa-user-plus text-xs"></i>
                    </a>
                </div>

                <!-- Floating Glassmorphic Institutional Stats -->
                <div class="max-w-5xl mx-auto">
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                        <div class="bg-white/95 hover:bg-white p-6 rounded-lg border border-white/50 shadow-2xl hover:shadow-cyan-500/10 transition-all card-hover-fx text-left backdrop-blur-md">
                            <div class="w-11 h-11 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-3.5 text-lg">
                                <i class="fa-solid fa-users-viewfinder"></i>
                            </div>
                            <span class="text-2xl sm:text-3xl font-extrabold text-slate-900 block">6,652+</span>
                            <span class="text-xs font-semibold text-slate-700 block mt-1">የተመዘገቡ አባላት</span>
                            <span class="text-[11px] text-slate-500 block mt-0.5">የትራንስፖርት ኦፕሬተሮች</span>
                        </div>

                        <div class="bg-white/95 hover:bg-white p-6 rounded-lg border border-white/50 shadow-2xl hover:shadow-cyan-500/10 transition-all card-hover-fx text-left backdrop-blur-md">
                            <div class="w-11 h-11 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-3.5 text-lg">
                                <i class="fa-solid fa-sitemap"></i>
                            </div>
                            <span class="text-2xl sm:text-3xl font-extrabold text-slate-900 block">17</span>
                            <span class="text-xs font-semibold text-slate-700 block mt-1">የአሠሪ ማኅበራት</span>
                            <span class="text-[11px] text-slate-500 block mt-0.5">ብሔራዊና ክልላዊ ማኅበራት</span>
                        </div>

                        <div class="bg-white/95 hover:bg-white p-6 rounded-lg border border-white/50 shadow-2xl hover:shadow-cyan-500/10 transition-all card-hover-fx text-left backdrop-blur-md">
                            <div class="w-11 h-11 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-3.5 text-lg">
                                <i class="fa-solid fa-route"></i>
                            </div>
                            <span class="text-2xl sm:text-3xl font-extrabold text-slate-900 block">4</span>
                            <span class="text-xs font-semibold text-slate-700 block mt-1">ስትራቴጂካዊ የንግድ ኮሪደሮች</span>
                            <span class="text-[11px] text-slate-500 block mt-0.5">ጅቡቲ፣ ሞጆ፣ ሞያሌ፣ በርበራ</span>
                        </div>

                        <div class="bg-white/95 hover:bg-white p-6 rounded-lg border border-white/50 shadow-2xl hover:shadow-cyan-500/10 transition-all card-hover-fx text-left backdrop-blur-md">
                            <div class="w-11 h-11 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-3.5 text-lg">
                                <i class="fa-solid fa-certificate"></i>
                            </div>
                            <span class="text-xl sm:text-2xl font-extrabold text-slate-900 block">ግንቦት 04/2010</span>
                            <span class="text-xs font-semibold text-slate-700 block mt-1">ሕጋዊ የትራንስፖርት አሰሪዎች ፌዴሬሽን የምስረታ ጊዜ</span>
                            <span class="text-[11px] text-slate-500 block mt-0.5">የሰራተኛና ማህበራዊ ጉዳይ ሚኒስቴር እውቅና</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- LIVE TRADE CORRIDORS & PORT CLEARANCE TRACKER -->
        <section class="py-12 bg-white border-b border-slate-200 relative">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Section Header with Live Pulsing Badge -->
                <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                    <div>
                        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-primary-50 text-primary-700 border border-primary-200 mb-2">
                            <span class="w-2 h-2 rounded-full bg-primary-600 animate-pulse"></span>
                            <span>ብሔራዊ የሎጂስቲክስ ክትትል • የኮሪደር ወቅታዊ ሁኔታ</span>
                        </div>
                        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                            ስትራቴጂካዊ የንግድ ኮሪደሮችና የጉምሩክ ክሊራንስ ሁኔታ
                        </h2>
                        <p class="text-sm text-slate-600 mt-1">
                            በኢትዮጵያ ዋና ዋና የኢኮኖሚ የንግድ መስመሮች ላይ ያሉ የትራንዚት እንቅስቃሴ፣ የፍተሻ ጣቢያዎችና የወደብ ክሊራንስ ፈጣን መረጃዎች።
                        </p>
                    </div>
                    <div class="text-xs text-slate-500 flex items-center gap-2">
                        <i class="fa-solid fa-clock-rotate-left"></i>
                        <span>የተሻሻለው፡ ዛሬ 08:30 • ምንጭ፡ የኢትራአፌ የጭነት ሎጂስቲክስ ዳይሬክቶሬት</span>
                    </div>
                </div>

                <!-- 4 Corridors Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <!-- Corridor 1: Ethio-Djibouti Corridor -->
                    <div class="group bg-white rounded-lg border border-slate-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm">
                        <div>
                            <div class="relative h-44 overflow-hidden bg-slate-900">
                                <img src="/images/corridor_djibouti.jpg" alt="ጅቡቲ – አዲስ አበባ የፍጥነት መንገድ ኮሪደር" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
                                <div class="absolute top-3 left-3 right-3 flex items-center justify-between">
                                    <span class="px-2.5 py-1 rounded-md text-[11px] font-black bg-slate-900/85 text-white backdrop-blur-md uppercase tracking-wider border border-white/20 shadow-sm">
                                        ኮሪደር 01
                                    </span>
                                    <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-primary-600 text-white backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                                        <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> የተረጋጋ ፍሰት
                                    </span>
                                </div>
                                <div class="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between text-white">
                                    <span class="text-[11px] font-semibold text-primary-300 flex items-center gap-1.5 drop-shadow">
                                        <i class="fa-solid fa-route text-[10px]"></i> ዋነኛ የባህር ንግድ መስመር
                                    </span>
                                    <span class="text-[10px] text-white/90 bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                                        <i class="fa-solid fa-satellite-dish text-[9px] text-primary-400 mr-1"></i> ቀጥታ
                                    </span>
                                </div>
                            </div>

                            <div class="p-5">
                                <h3 class="font-bold text-slate-900 text-lg mb-0.5 group-hover:text-primary-600 transition-colors">
                                    ጅቡቲ – አዲስ አበባ
                                </h3>
                                <p class="text-xs text-slate-500 mb-4 flex items-center gap-1.5">
                                    <i class="fa-solid fa-location-dot text-primary-500"></i> የገላፊ / ዴወሌ ድንበር ማቋረጫ
                                </p>

                                <div class="space-y-2.5 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-lg border border-slate-100">
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-regular fa-clock text-slate-400"></i> የትራንዚት ጊዜ፡</span>
                                        <span class="font-bold text-slate-800">42–48 ሰዓት</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-hourglass-half text-slate-400"></i> የገላፊ ድንበር ሰልፍ፡</span>
                                        <span class="font-bold text-primary-700 bg-primary-50 px-2 py-0.5 rounded border border-primary-200">ከ4.2 ሰዓት በታች</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-scale-balanced text-slate-400"></i> የሚዛን ጣቢያዎች፡</span>
                                        <span class="font-semibold text-slate-800">ሁሉም 6ቱ ሚዛኖች ክፍት</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="p-5 pt-0">
                            <button class="corridor-advisory-btn w-full py-2.5 bg-primary-50 hover:bg-primary-600 text-primary-700 hover:text-white border border-primary-200 hover:border-transparent rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group/btn" data-corridor-id="djibouti">
                                <span>የኮሪደሩን መረጃ ይመልከቱ</span>
                                <i class="fa-solid fa-arrow-right text-[11px] group-hover/btn:translate-x-1 transition-transform"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Corridor 2: Modjo Multimodal Dry Port -->
                    <div class="group bg-white rounded-lg border border-slate-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm">
                        <div>
                            <div class="relative h-44 overflow-hidden bg-slate-900">
                                <img src="/images/corridor_modjo.jpg" alt="የሞጆ ደረቅ ወደብ ተርሚናል" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
                                <div class="absolute top-3 left-3 right-3 flex items-center justify-between">
                                    <span class="px-2.5 py-1 rounded-md text-[11px] font-black bg-slate-900/85 text-white backdrop-blur-md uppercase tracking-wider border border-white/20 shadow-sm">
                                        ኮሪደር 02
                                    </span>
                                    <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-primary-600 text-white backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                                        <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> ወደቡ ክፍት ነው
                                    </span>
                                </div>
                                <div class="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between text-white">
                                    <span class="text-[11px] font-semibold text-primary-300 flex items-center gap-1.5 drop-shadow">
                                        <i class="fa-solid fa-train-subway text-[10px]"></i> የመልቲሞዳል ባቡር ማዕከል
                                    </span>
                                    <span class="text-[10px] text-white/90 bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                                        <i class="fa-solid fa-satellite-dish text-[9px] text-primary-400 mr-1"></i> ቀጥታ
                                    </span>
                                </div>
                            </div>

                            <div class="p-5">
                                <h3 class="font-bold text-slate-900 text-lg mb-0.5 group-hover:text-primary-600 transition-colors">
                                    የሞጆ መልቲሞዳል ደረቅ ወደብ
                                </h3>
                                <p class="text-xs text-slate-500 mb-4 flex items-center gap-1.5">
                                    <i class="fa-solid fa-location-dot text-primary-500"></i> ማዕከላዊ የገቢ ጭነት ክሊራንስ
                                </p>

                                <div class="space-y-2.5 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-lg border border-slate-100">
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-boxes-stacked text-slate-400"></i> የመያዣ ዕቃዎች ቆይታ፡</span>
                                        <span class="font-bold text-primary-700 bg-primary-50 px-2 py-0.5 rounded border border-primary-200">3.8 ቀናት (ተፈላጊ ደረጃ)</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-truck-ramp-box text-slate-400"></i> የቀን የጭነት ስምሪት፡</span>
                                        <span class="font-bold text-slate-800">480+ ከባድ ተሽከርካሪዎች</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-train text-slate-400"></i> የባቡር ስምሪት፡</span>
                                        <span class="font-semibold text-slate-800">በቀን 3 የጭነት ባቡሮች</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="p-5 pt-0">
                            <button class="corridor-advisory-btn w-full py-2.5 bg-primary-50 hover:bg-primary-600 text-primary-700 hover:text-white border border-primary-200 hover:border-transparent rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group/btn" data-corridor-id="modjo">
                                <span>የወደቡን መረጃ ይመልከቱ</span>
                                <i class="fa-solid fa-arrow-right text-[11px] group-hover/btn:translate-x-1 transition-transform"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Corridor 3: Moyale – Lamu Corridor -->
                    <div class="group bg-white rounded-lg border border-slate-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm">
                        <div>
                            <div class="relative h-44 overflow-hidden bg-slate-900">
                                <img src="/images/corridor_moyale.jpg" alt="የሞያሌ የጋራ ድንበር ጣቢያ" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
                                <div class="absolute top-3 left-3 right-3 flex items-center justify-between">
                                    <span class="px-2.5 py-1 rounded-md text-[11px] font-black bg-slate-900/85 text-white backdrop-blur-md uppercase tracking-wider border border-white/20 shadow-sm">
                                        ኮሪደር 03
                                    </span>
                                    <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-primary-600 text-white backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                                        <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> አገልግሎት ላይ ነው
                                    </span>
                                </div>
                                <div class="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between text-white">
                                    <span class="text-[11px] font-semibold text-primary-300 flex items-center gap-1.5 drop-shadow">
                                        <i class="fa-solid fa-truck-moving text-[10px]"></i> የደቡብ ንግድ በር
                                    </span>
                                    <span class="text-[10px] text-white/90 bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                                        <i class="fa-solid fa-satellite-dish text-[9px] text-primary-400 mr-1"></i> ቀጥታ
                                    </span>
                                </div>
                            </div>

                            <div class="p-5">
                                <h3 class="font-bold text-slate-900 text-lg mb-0.5 group-hover:text-primary-600 transition-colors">
                                    ሞያሌ – ላሙ (ኬንያ ድንበር)
                                </h3>
                                <p class="text-xs text-slate-500 mb-4 flex items-center gap-1.5">
                                    <i class="fa-solid fa-location-dot text-primary-500"></i> የሞያሌ የተቀናጀ የድንበር ፍተሻ
                                </p>

                                <div class="space-y-2.5 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-lg border border-slate-100">
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-regular fa-clock text-slate-400"></i> የትራንዚት ጊዜ፡</span>
                                        <span class="font-bold text-slate-800">55–60 ሰዓት</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-check-double text-slate-400"></i> የድንበር ክሊራንስ፡</span>
                                        <span class="font-bold text-primary-700 bg-primary-50 px-2 py-0.5 rounded border border-primary-200">ፈጣን አሰራር</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-gas-pump text-slate-400"></i> የነዳጅና የቀንድ ከብት፡</span>
                                        <span class="font-semibold text-slate-800">የኳራንቲን ፍተሻ ክፍት</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="p-5 pt-0">
                            <button class="corridor-advisory-btn w-full py-2.5 bg-primary-50 hover:bg-primary-600 text-primary-700 hover:text-white border border-primary-200 hover:border-transparent rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group/btn" data-corridor-id="moyale">
                                <span>የድንበሩን መረጃ ይመልከቱ</span>
                                <i class="fa-solid fa-arrow-right text-[11px] group-hover/btn:translate-x-1 transition-transform"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Corridor 4: Berbera Port Corridor -->
                    <div class="group bg-white rounded-lg border border-slate-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm">
                        <div>
                            <div class="relative h-44 overflow-hidden bg-slate-900">
                                <img src="/images/corridor_berbera.jpg" alt="የበርበራ – ድሬዳዋ የንግድ መስመር" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
                                <div class="absolute top-3 left-3 right-3 flex items-center justify-between">
                                    <span class="px-2.5 py-1 rounded-md text-[11px] font-black bg-slate-900/85 text-white backdrop-blur-md uppercase tracking-wider border border-white/20 shadow-sm">
                                        ኮሪደር 04
                                    </span>
                                    <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-900 border border-white/20 text-white backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                                        <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> የፍሰት ማስተካከያ
                                    </span>
                                </div>
                                <div class="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between text-white">
                                    <span class="text-[11px] font-semibold text-primary-300 flex items-center gap-1.5 drop-shadow">
                                        <i class="fa-solid fa-truck-fast text-[10px]"></i> የምስራቅ የባህር በር አማራጭ
                                    </span>
                                    <span class="text-[10px] text-white/90 bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                                        <i class="fa-solid fa-satellite-dish text-[9px] text-primary-400 mr-1"></i> ቀጥታ
                                    </span>
                                </div>
                            </div>

                            <div class="p-5">
                                <h3 class="font-bold text-slate-900 text-lg mb-0.5 group-hover:text-primary-600 transition-colors">
                                    በርበራ – ድሬዳዋ
                                </h3>
                                <p class="text-xs text-slate-500 mb-4 flex items-center gap-1.5">
                                    <i class="fa-solid fa-location-dot text-primary-500"></i> የቶግ ዋቻሌ የትራንዚት መተላለፊያ
                                </p>

                                <div class="space-y-2.5 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-lg border border-slate-100">
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-regular fa-clock text-slate-400"></i> የትራንዚት ጊዜ፡</span>
                                        <span class="font-bold text-slate-800">30–36 ሰዓት</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-shield-halved text-slate-400"></i> የጉምሩክ ክሊራንስ፡</span>
                                        <span class="font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">አማካይ 5.5 ሰዓት</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-road text-slate-400"></i> የመንገድ ግንባታ፡</span>
                                        <span class="font-semibold text-slate-800">ምዕራፍ 2 አስፋልት ስራ</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="p-5 pt-0">
                            <button class="corridor-advisory-btn w-full py-2.5 bg-primary-50 hover:bg-primary-600 text-primary-700 hover:text-white border border-primary-200 hover:border-transparent rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group/btn" data-corridor-id="berbera">
                                <span>የኮሪደሩን መረጃ ይመልከቱ</span>
                                <i class="fa-solid fa-arrow-right text-[11px] group-hover/btn:translate-x-1 transition-transform"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Emergency Corridor Hotline Banner -->
                <div class="mt-8 rounded-lg p-6 text-white flex flex-col md:flex-row items-center justify-between gap-5 shadow-xl relative overflow-hidden">
                    <div class="absolute inset-0 z-0 bg-[url('/images/hero_expressway.jpg')] bg-cover bg-center animate-slow-motion"></div>
                    <div class="absolute inset-0 z-0 bg-black/50"></div>
                    <div class="flex items-center gap-4 text-center md:text-left relative z-10">
                        <div class="w-12 h-12 rounded-lg bg-white/20 text-white flex items-center justify-center text-xl shrink-0 shadow-inner">
                            <i class="fa-solid fa-truck-ramp-box"></i>
                        </div>
                        <div>
                            <span class="font-bold text-base sm:text-lg block tracking-tight">የኢትራአፌ የ24/7 የኮሪደር ድንገተኛ አደጋና የመኪና ብልሽት የእርዳታ መስመር</span>
                            <p class="text-xs sm:text-sm text-blue-100 mt-0.5">በሞጆ፣ ገላፊ ወይም ሞያሌ መስመሮች ላይ ሕገወጥ መስተጓጎል፣ የጸጥታ ችግር ወይም የቴክኒክ ብልሽት ገጥሞዎታል?</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-3 shrink-0 relative z-10 w-full sm:w-auto justify-center">
                        <a href="tel:+251114717787" class="px-5 py-2.5 bg-white text-primary-700 hover:bg-slate-100 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md transition-all">
                            <i class="fa-solid fa-phone"></i>
                            <span>+251 11 4717787</span>
                        </a>
                        <button id="btn-corridor-incident-report" class="px-4 py-2.5 bg-primary-700 hover:bg-primary-800 text-white border border-white/30 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2">
                            <i class="fa-solid fa-triangle-exclamation text-white"></i>
                            <span>የመንገድ ችግር ሪፖርት ያድርጉ</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- INSTITUTIONAL CHARTER, MISSION & VISION (Pure Amharic) -->
        <section class="py-20 bg-slate-50 border-b border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <span class="text-xs font-bold text-primary-600 uppercase tracking-wider bg-primary-50 px-3.5 py-1.5 rounded-full border border-primary-100">
                        ሕጋዊ የፌዴሬሽኑ መተዳደሪያ ደንብ
                    </span>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                        የኢትዮጵያ የትራንስፖርት አሠሪዎች ከፍተኛ ብሔራዊ ተቋም
                    </h2>
                    <p class="text-slate-600 text-sm mt-3 leading-relaxed">
                        በኅዳር 2009 ዓ/ም በ39 ማኅበራት ውሳኔ ተመስርቶ በኢፌዲሪ ሕገ-መንግሥት አንቀጽ 31 እና በአዋጅ ቁጥር 1156/2012 መሠረት ግንቦት 04 ቀን 2010 ዓ/ም ሕጋዊ የዕውቅና ምስክር ወረቀት ያገኘ ብሔራዊ ፌዴሬሽን።
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <!-- Strategic Mission Card -->
                    <div class="bg-white rounded-lg p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                        <div class="w-14 h-14 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-2xl mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                            <i class="fa-solid fa-compass"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-slate-900 mb-2">ተልዕኳችን</h3>
                        <p class="text-primary-700 text-xs font-bold uppercase tracking-wider mb-3">
                            የትራንስፖርት አሠሪዎችን መብት ማስከበርና ዘላቂ ዕድገትን ማረጋገጥ
                        </p>
                        <p class="text-sm text-slate-600 leading-relaxed mb-6">
                            "የአባላት አሠሪዎችን ሕጋዊና ኢኮኖሚያዊ መብትና ጥቅም ማስጠበቅ፣ በዘርፉ አስተማማኝ የኢንዱስትሪ ሰላም መገንባት፣ የሕግና የሙያ ድጋፍ መስጠት እንዲሁም ለትራንስፖርት ፖሊሲዎች መሻሻል መሟገት።"
                        </p>
                        <ul class="space-y-2.5 text-xs text-slate-700">
                            <li class="flex items-center gap-2">
                                <i class="fa-solid fa-circle-check text-primary-600"></i>
                                <span>የሕግ ከለላና የፍርድ ቤት ጠበቃ ውክልና መስጠት</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="fa-solid fa-circle-check text-primary-600"></i>
                                <span>የኅብረት ስምምነት ድርድርና የኢንዱስትሪ ሰላም ማረጋገጥ</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="fa-solid fa-circle-check text-primary-600"></i>
                                <span>ከመንግሥትና ዓለም አቀፍ ተቋማት ጋር የፖሊሲ ውይይት ማካሄድ</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Strategic Vision Card -->
                    <div class="bg-white rounded-lg p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                        <div class="w-14 h-14 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center text-2xl mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                            <i class="fa-solid fa-eye"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-slate-900 mb-2">ራዕያችን</h3>
                        <p class="text-sky-700 text-xs font-bold uppercase tracking-wider mb-3">
                            በኢትዮጵያ የትራንስፖርት ዘርፍ ጠንካራና ተደማጭ ተወካይ መሆን
                        </p>
                        <p class="text-sm text-slate-600 leading-relaxed mb-6">
                            "በኢትዮጵያ የትራንስፖርት ዘርፍ ጠንካራና ተደማጭ የሆኑ አሠሪዎችን በብሔራዊና በዓለም አቀፍ ደረጃ በብቃት የሚወክል ተቋም ሆኖ ማየት።"
                        </p>
                        <ul class="space-y-2.5 text-xs text-slate-700">
                            <li class="flex items-center gap-2">
                                <i class="fa-solid fa-circle-check text-sky-600"></i>
                                <span>የ17 አሠሪ ማኅበራት ብቸኛ ሕጋዊ የጋራ ድምፅ</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="fa-solid fa-circle-check text-sky-600"></i>
                                <span>ዋነኛ መርህ፡ የአባላቱ ርካታ</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="fa-solid fa-circle-check text-sky-600"></i>
                                <span>ለሀገራዊ ኢኮኖሚና ማኅበራዊ ዕድገት ቁልፍ አስተዋጽዖ ማበርከት</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="text-center">
                    <a href="/about" class="inline-flex items-center gap-2.5 bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-3.5 rounded-lg shadow-md transition-all text-sm">
                        <span>ስለ ፌዴሬሽኑ በዝርዝር ያንብቡ</span>
                        <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </section>

        <!-- Commercial Sector Representation -->
        <section class="py-20 bg-white border-b border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-14">
                    <span class="text-xs font-bold text-primary-600 uppercase tracking-wider bg-primary-50 px-3.5 py-1.5 rounded-full border border-primary-100">
                        የትራንስፖርት ዘርፍ ውክልና
                    </span>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                        ሁሉን አቀፍ የትራንስፖርት ዘርፎች ሽፋን
                    </h2>
                    <p class="text-slate-600 text-sm mt-3">
                        ከከባድ የድንበር ተሻጋሪ የጭነት ኮንቮዮች አንስቶ እስከ ሀገር አቀፍ የሕዝብ ትራንስፖርትና የመልቲሞዳል ደረቅ ወደብ ሎጂስቲክስ ድረስ።
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Sector 1: Freight & Heavy Cargo -->
                    <div class="card-hover-fx bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between group">
                        <div>
                            <div class="h-52 w-full overflow-hidden relative">
                                <img src="/images/hero_truck.jpg" alt="የከባድ ጭነት ትራንስፖርት" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                <span class="absolute top-4 left-4 bg-primary-600/90 backdrop-blur-md text-white font-bold text-xs px-3 py-1 rounded-full shadow-sm">
                                    የከባድ ጭነት
                                </span>
                            </div>
                            <div class="p-6">
                                <h3 class="text-xl font-bold text-slate-900 mb-2">የደረቅና የፈሳሽ ከባድ ጭነት ትራንስፖርት</h3>
                                <p class="text-xs text-slate-600 leading-relaxed mb-4">
                                    በአዲስ አበባ–ጅቡቲ፣ ሞጆና በክልል ዋና የንግድ መስመሮች የሚንቀሳቀሱ የደረቅ ጭነትና የፈሳሽ ነዳጅ ጫኝ ማኅበራትን መብት ማስጠበቅ።
                                </p>
                                <div class="space-y-1.5 text-xs text-slate-700">
                                    <div class="flex items-center gap-2">
                                        <i class="fa-solid fa-check text-primary-600 text-[11px]"></i>
                                        <span>የትራንዚት ታሪፍና የክብደት ልኬት ማስተካከያ</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <i class="fa-solid fa-check text-primary-600 text-[11px]"></i>
                                        <span>የኮሪደር ደህንነትና የነዳጅ ማጓጓዣ ጥበቃ</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-6 pt-0">
                            <a href="/about" class="text-xs font-bold text-primary-600 hover:text-primary-700 inline-flex items-center gap-1.5">
                                <span>የጭነት ዘርፉን ተግባር ይወቁ</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </a>
                        </div>
                    </div>

                    <!-- Sector 2: Passenger Transit -->
                    <div class="card-hover-fx bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between group">
                        <div>
                            <div class="h-52 w-full overflow-hidden relative">
                                <img src="/images/passenger_transit.jpg" alt="የሕዝብ ትራንስፖርት አውቶቡሶች" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                <span class="absolute top-4 left-4 bg-primary-600/90 backdrop-blur-md text-white font-bold text-xs px-3 py-1 rounded-full shadow-sm">
                                    የሕዝብ ትራንስፖርት
                                </span>
                            </div>
                            <div class="p-6">
                                <h3 class="text-xl font-bold text-slate-900 mb-2">የከተማና የሀገር አቋራጭ ሕዝብ ትራንስፖርት</h3>
                                <p class="text-xs text-slate-600 leading-relaxed mb-4">
                                    በየዕለቱ ለሚሊዮኖች ፈጣንና አስተማማኝ አገልግሎት የሚሰጡ የክልልና የሀገር አቋራጭ አውቶቡስ አሠሪዎችን መወከልና መደገፍ።
                                </p>
                                <div class="space-y-1.5 text-xs text-slate-700">
                                    <div class="flex items-center gap-2">
                                        <i class="fa-solid fa-check text-primary-600 text-[11px]"></i>
                                        <span>የተርሚናል ደህንነትና የተሳፋሪ አገልግሎት ደንቦች</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <i class="fa-solid fa-check text-primary-600 text-[11px]"></i>
                                        <span>የመስመር ፈቃድ አሰጣጥና ቅንጅታዊ አሰራር</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-6 pt-0">
                            <a href="/about" class="text-xs font-bold text-primary-600 hover:text-primary-700 inline-flex items-center gap-1.5">
                                <span>የሕዝብ ትራንስፖርትን ተግባር ይወቁ</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </a>
                        </div>
                    </div>

                    <!-- Sector 3: Multimodal Logistics -->
                    <div class="card-hover-fx bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between group">
                        <div>
                            <div class="h-52 w-full overflow-hidden relative">
                                <img src="/images/about_vision.jpg" alt="የደረቅ ወደብ ጭነት ሎጂስቲክስ" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                <span class="absolute top-4 left-4 bg-primary-600/90 backdrop-blur-md text-white font-bold text-xs px-3 py-1 rounded-full shadow-sm">
                                    መልቲሞዳል ማዕከላት
                                </span>
                            </div>
                            <div class="p-6">
                                <h3 class="text-xl font-bold text-slate-900 mb-2">የሎጂስቲክስና ደረቅ ወደብ ኦፕሬተሮች</h3>
                                <p class="text-xs text-slate-600 leading-relaxed mb-4">
                                    የዕቃ አስተላላፊዎችን፣ የመጋዘንና የደረቅ ወደብ ጭነት ተርሚናል ኦፕሬተሮችን እንዲሁም የዘመናዊ አቅርቦት ሰንሰለት ቴክኖሎጂዎችን ማስተባበር።
                                </p>
                                <div class="space-y-1.5 text-xs text-slate-700">
                                    <div class="flex items-center gap-2">
                                        <i class="fa-solid fa-check text-primary-600 text-[11px]"></i>
                                        <span>የሞጆ ደረቅ ወደብ የዕቃዎች ቆይታ ቅነሳ</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <i class="fa-solid fa-check text-primary-600 text-[11px]"></i>
                                        <span>የዲጂታል ጉምሩክና የአፍሪካ ነፃ ንግድ ዝግጁነት</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-6 pt-0">
                            <a href="/about" class="text-xs font-bold text-primary-600 hover:text-primary-700 inline-flex items-center gap-1.5">
                                <span>የሎጂስቲክስ ዘርፉን ተግባር ይወቁ</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 6 Core Federation Services -->
        <section class="py-20 bg-slate-50 border-b border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <span class="text-xs font-bold text-primary-600 uppercase tracking-wider bg-primary-50 px-3.5 py-1.5 rounded-full border border-primary-100">
                        ዋና ዋና አገልግሎቶች
                    </span>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                        የትራንስፖርት አሠሪዎችን እንዴት እንደግፋለን?
                    </h2>
                    <p class="text-slate-600 text-sm mt-3">
                        የአባላትን ሕጋዊና ንግድ ጥቅሞች ለማስከበር በመተዳደሪያ ደንቡ መሰረት የተቋቋሙ ስድስት ቁልፍ ምሰሶዎች።
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="bg-white p-7 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-5">
                            <i class="fa-solid fa-scale-balanced"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 text-lg mb-2">የሕግ ከለላና የፍርድ ቤት ውክልና</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            የትራንስፖርት አሠሪዎችን በፍርድ ቤቶች፣ በአስተዳደራዊ አካላትና በግልግል ጉባኤዎች ፊት በመወከል የንግድ ሀብታቸውንና የውል መብታቸውን ማስከበር።
                        </p>
                    </div>

                    <div class="bg-white p-7 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-5">
                            <i class="fa-solid fa-handshake-angle"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 text-lg mb-2">የኅብረት ስምምነት ድርድር</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            ከሠራተኛ ማኅበራት ጋር በጋራ በመደራደር ፍትሃዊ፣ ሚዛናዊና ዘላቂ የሆነ የኢንዱስትሪ ሰላም በአዋጅ ቁጥር 1156/2012 መሠረት መገንባት።
                        </p>
                    </div>

                    <div class="bg-white p-7 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-5">
                            <i class="fa-solid fa-scroll"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 text-lg mb-2">የፖሊሲና መመሪያዎች ማሻሻያ</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            በዘርፉ ላይ በጥናት የተደገፉ የውሳኔ ሃሳቦችን በማዘጋጀት ከመንግሥት አስፈፃሚ አካላት ጋር በታሪፍ፣ ታክስና ፍተሻ ጣቢያዎች ዙሪያ መወያየት።
                        </p>
                    </div>

                    <div class="bg-white p-7 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-5">
                            <i class="fa-solid fa-user-graduate"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 text-lg mb-2">የሙያና አመራር አቅም ግንባታ</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            ለአባላትና አመራሮች የተሽከርካሪ ስምሪት አስተዳደር፣ አዳዲስ ቴክኖሎጂዎችና የሥራ ቦታ ደህንነት ዙሪያ ተግባራዊ ስልጠናዎችን መስጠት።
                        </p>
                    </div>

                    <div class="bg-white p-7 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-5">
                            <i class="fa-solid fa-network-wired"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 text-lg mb-2">የገበያና የጭነት ትስስር ማመቻቸት</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            የአባላትን ተሽከርካሪዎች ከሀገር ውስጥና ከድንበር ተሻጋሪ የንግድ ዕድሎች፣ ከኢንዱስትሪ ፓርኮችና ከወጪ ንግድ ዘርፎች ጋር ማስተሳሰር።
                        </p>
                    </div>

                    <div class="bg-white p-7 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-5">
                            <i class="fa-solid fa-globe"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 text-lg mb-2">ዓውደ ርዕዮችና ዓለም አቀፍ ሲምፖዚየሞች</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            ሀገራዊ የትራንስፖርት ኤክስፖዎችን፣ የተሽከርካሪ ቴክኖሎጂ ትርዒቶችንና የሦስትዮሽ የዘርፍ ውይይት መድረኮችን በበላይነት ማዘጋጀት።
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section (Clean White / Light Brand Card) -->
        <section class="py-20 bg-white border-t border-slate-200 text-slate-900 relative">
            <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <span class="text-xs font-bold text-primary-700 uppercase tracking-wider bg-primary-50 px-4 py-1.5 rounded-full border border-primary-200 inline-block mb-4">
                    የከፍተኛው ብሔራዊ ድምፅ አባል ይሁኑ
                </span>
                <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
                    የትራንስፖርት ድርጅትዎን አቅም ለማጠናከር ዝግጁ ነዎት?
                </h2>
                <p class="text-slate-600 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
                    ከ17 አሠሪ ማኅበራትና ከ6,652 በላይ የትራንስፖርት ባለቤቶች ጋር ይቀላቀሉ። የሕግ ጥበቃ፣ የውል ድርድርና ተደማጭ የጋራ ድምፅ ባለቤት ይሁኑ።
                </p>
                <div class="flex flex-wrap items-center justify-center gap-4">
                    <a href="/membership" class="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg text-sm shadow-md hover:shadow-lg transition-all">
                        የአባልነት ማመልከቻ ያስገቡ
                    </a>
                    <a href="/contact" class="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg text-sm shadow-sm transition-all">
                        ዋና መሥሪያ ቤቱን ያነጋግሩ
                    </a>
                </div>
            </div>
        </section>
    </main>

    ${renderFooter("አማ")}
`;

export default {
  title: {
    ENG: "Ethiopian Transport Employers Federation - Official National Platform",
    "አማ": "የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን - ይፋዊ ብሔራዊ መድረክ",
  },
  markup: {
    ENG: homeEng,
    "አማ": homeAm,
  },
};
