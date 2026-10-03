import { renderNavbar, renderFooter } from "../layout";

const markupEng = `
    ${renderNavbar("", "ENG")}

    <main class="flex-grow flex items-center justify-center py-20 px-4">
        <div class="max-w-xl text-center">
            <div class="w-24 h-24 mx-auto mb-6 bg-primary-50 text-primary-600 rounded-3xl flex items-center justify-center text-4xl shadow-sm border border-primary-100">
                <i class="fa-solid fa-compass-drafting"></i>
            </div>
            <span class="text-xs font-bold text-primary-600 uppercase tracking-widest block mb-2">Error 404</span>
            <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Destination Not Found</h1>
            <p class="text-slate-600 text-base leading-relaxed mb-8">
                The resource or page you are looking for may have been updated, relocated, or is no longer available at this address.
            </p>
            <div class="flex flex-wrap justify-center gap-4">
                <a href="/" class="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-colors shadow-sm inline-flex items-center gap-2">
                    <i class="fa-solid fa-house"></i> Return to Home
                </a>
                <a href="/news" class="px-6 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold rounded-xl transition-colors inline-flex items-center gap-2">
                    <i class="fa-solid fa-newspaper"></i> Latest News
                </a>
                <a href="/contact" class="px-6 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold rounded-xl transition-colors inline-flex items-center gap-2">
                    <i class="fa-solid fa-envelope"></i> Contact Secretariat
                </a>
            </div>
        </div>
    </main>

    ${renderFooter("ENG")}
`;

const markupAm = `
    ${renderNavbar("", "አማ")}

    <main class="flex-grow flex items-center justify-center py-20 px-4">
        <div class="max-w-xl text-center">
            <div class="w-24 h-24 mx-auto mb-6 bg-primary-50 text-primary-600 rounded-3xl flex items-center justify-center text-4xl shadow-sm border border-primary-100">
                <i class="fa-solid fa-compass-drafting"></i>
            </div>
            <span class="text-xs font-bold text-primary-600 uppercase tracking-widest block mb-2">ስህተት 404</span>
            <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">የተጠየቀው ገጽ አልተገኘም</h1>
            <p class="text-slate-600 text-base leading-relaxed mb-8">
                የፈለጉት ገጽ ወይም መረጃ ተዛውሯል፣ ተሰርዟል ወይም በዚህ አድራሻ አይገኝም። እባክዎ ወደ መነሻ ገጽ ይመለሱ ወይም ሌሎችን አማራጮች ይጠቀሙ።
            </p>
            <div class="flex flex-wrap justify-center gap-4">
                <a href="/" class="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-colors shadow-sm inline-flex items-center gap-2">
                    <i class="fa-solid fa-house"></i> ወደ መነሻ ገጽ ይመለሱ
                </a>
                <a href="/news" class="px-6 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold rounded-xl transition-colors inline-flex items-center gap-2">
                    <i class="fa-solid fa-newspaper"></i> ወቅታዊ ዜናዎች
                </a>
                <a href="/contact" class="px-6 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold rounded-xl transition-colors inline-flex items-center gap-2">
                    <i class="fa-solid fa-envelope"></i> ዋና ጽሕፈት ቤቱን ያነጋግሩ
                </a>
            </div>
        </div>
    </main>

    ${renderFooter("አማ")}
`;

export default {
  title: {
    ENG: "404 - Page Not Found | ETEF",
    "አማ": "404 - ገጹ አልተገኘም | ኢትራአፌ",
  },
  markup: {
    ENG: markupEng,
    "አማ": markupAm,
  },
};
