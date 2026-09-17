import React, { useEffect, useState, type ReactNode } from "react";
import {
  Link,
  NavLink,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import MembershipRegister from "./pages/MembershipRegister";
import Admin from "./admin/Admin";
import { api, API_ORIGIN } from "./api";
import AdminLogin from "./auth/AdminLogin";
import ProtectedAdmin from "./auth/ProtectedAdmin";

const nav = [
  ["/", "home"],
  ["/about", "about"],
  ["/membership", "membership"],
  ["/news", "news"],
  ["/gallery", "gallery"],
  ["/vacancies", "vacancies"],
  ["/partners", "partners"],
  ["/faq", "faq"],
  ["/contact", "contact"],
] as const;

function Brand() {
  return (
    <Link className="brand" to="/">
      <span className="brand-seal">ETEF</span>
      <span className="brand-copy">
        <strong>ETHIOPIAN TRANSPORT</strong>
        <small>EMPLOYERS' FEDERATION</small>
      </span>
    </Link>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: "en" | "am") => {
    i18n.changeLanguage(language);
    document.documentElement.lang = language;
    document.documentElement.dir = "ltr";
    setOpen(false);
  };

  return (
    <header className="header">
      <div className="container header-inner">
        <Brand />

        <button
          className="mobile-menu"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navigation ${open ? "open" : ""}`}>
          <div className="nav-links">
            {nav.map(([path, key]) => (
              <NavLink
                key={path}
                to={path}
                end={path === "/"}
                onClick={() => setOpen(false)}
              >
                {t(key)}
              </NavLink>
            ))}
          </div>

          <div className="language-switcher" aria-label={t("language")}>
            <button
              className={i18n.language === "am" ? "active" : ""}
              onClick={() => changeLanguage("am")}
            >
              አማ
            </button>
            <button
              className={i18n.language === "en" ? "active" : ""}
              onClick={() => changeLanguage("en")}
            >
              EN
            </button>
          </div>

          <Link
            className="nav-cta"
            to="/membership"
            onClick={() => setOpen(false)}
          >
            {t("register")}
            <span>↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-brand-block">
          <Brand />
          <p>
            A professional digital home for Ethiopia's transport employers,
            members and partners.
          </p>
        </div>

        <div className="footer-column">
          <h3>{t("explore")}</h3>
          <Link to="/about">{t("about")}</Link>
          <Link to="/membership">{t("membership")}</Link>
          <Link to="/gallery">{t("gallery")}</Link>
          <Link to="/vacancies">{t("vacancies")}</Link>
        </div>

        <div className="footer-column">
          <h3>{t("connect")}</h3>
          <a href="#" onClick={(e) => e.preventDefault()}>
            Facebook
          </a>
          <a href="#" onClick={(e) => e.preventDefault()}>
            LinkedIn
          </a>
          <a href="#" onClick={(e) => e.preventDefault()}>
            Telegram
          </a>
          <a href="#" onClick={(e) => e.preventDefault()}>
            YouTube
          </a>
        </div>

        <div className="footer-column">
          <h3>{t("contact")}</h3>
          <p className="footer-label">{t("officialEmail")}</p>
          <p className="footer-pending">To be confirmed by ETEF</p>
          <Link to="/contact" className="footer-contact-link">
            {t("contact")} →
          </Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} ETEF. All rights reserved.</span>
        <span>Amharic · English</span>
      </div>
    </footer>
  );
}

function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    const timer = window.setTimeout(() => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>(".section, .stats-strip"),
      );
      sections.forEach((section) => section.classList.add("reveal-ready"));
      if (!("IntersectionObserver" in window)) {
        sections.forEach((section) => section.classList.add("is-visible"));
        return;
      }
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
      );
      sections.forEach((section) => observer.observe(section));
    }, 30);
    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-heading ${align === "center" ? "center" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function Home() {
  const { t } = useTranslation();
  const [heroSlides, setHeroSlides] = useState<any[]>([]);
  const [heroIndex, setHeroIndex] = useState(0);
  useEffect(() => {
    api<{ items: any[] }>("/hero-slides")
      .then((r) => setHeroSlides(r.items || []))
      .catch(() => setHeroSlides([]));
  }, []);
  useEffect(() => {
    if (heroSlides.length < 2) return;
    const timer = window.setInterval(
      () => setHeroIndex((i) => (i + 1) % heroSlides.length),
      7000,
    );
    return () => window.clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <>
      <section className="hero">
        <div className="hero-background" aria-hidden="true">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`hero-background-slide ${index === heroIndex ? "active" : ""}`}
              style={{
                backgroundImage: `url(${API_ORIGIN}${slide.image_url})`,
              }}
            />
          ))}
          <div className="hero-overlay" />
        </div>
        <div className="hero-grid container">
          <div className="hero-copy">
            <span className="eyebrow eyebrow-light">{t("heroEyebrow")}</span>
            <h1>{t("hero")}</h1>
            <p>{t("heroText")}</p>

            <div className="hero-actions">
              <Link className="button button-gold" to="/membership">
                {t("register")} <span>↗</span>
              </Link>
              <Link className="button button-outline-light" to="/about">
                {t("discover")} <span>→</span>
              </Link>
            </div>

            <div className="hero-note">
              <span className="hero-note-dot" />
              <span>{t("heroNote")}</span>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="hero-ring ring-one" />
            <div className="hero-ring ring-two" />
            <div className="hero-glow" />
            <div className="hero-emblem">
              <span className="emblem-top">ETHIOPIAN</span>
              <strong>ETEF</strong>
              <span className="emblem-bottom">
                TRANSPORT EMPLOYERS' FEDERATION
              </span>
              <i />
            </div>
            <div className="floating-card floating-card-top">
              <span className="floating-label">MEMBERSHIP</span>
              <strong>Join the federation</strong>
              <span>Online registration</span>
            </div>
            <div className="floating-card floating-card-bottom">
              <span className="floating-label">ETHIOPIA</span>
              <strong>Transport employers</strong>
              <span>Connected through one voice</span>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-strip">
        <div className="container stats-grid">
          <div>
            <strong>01</strong>
            <span>Unified representation</span>
          </div>
          <div>
            <strong>02</strong>
            <span>Member-focused support</span>
          </div>
          <div>
            <strong>03</strong>
            <span>Industry collaboration</span>
          </div>
          <div>
            <strong>04</strong>
            <span>Digital access</span>
          </div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="container">
          <SectionHeading
            eyebrow="About Us"
            title="ETEF"
            text="The ETEF website brings institutional information, membership access, events, opportunities and official contact channels together in one trusted public platform."
          />
          <div className="intro-grid">
            <div className="intro-copy-block">
              <p>
                ETEF is a unified platform for transport employers, members and
                partners, providing clear institutional information and easier
                access to federation services and opportunities.
              </p>

              <Link className="arrow-link" to="/about">
                Explore ETEF <span>→</span>
              </Link>
            </div>

            <div className="intro-visual">
              <div className="visual-line line-a" />
              <div className="visual-line line-b" />
              <div className="visual-number">ETEF</div>

              <div className="visual-caption">
                <span>ETHIOPIAN</span>
                <span>TRANSPORT</span>
                <span>EMPLOYERS'</span>
                <span>FEDERATION</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section principles-section">
        <div className="container">
          <div className="principles-grid">
            <article className="principle-card principle-featured">
              <span className="principle-tag">MISSION</span>
              <h2 className="principle-title">Mission</h2>
              <p>
                Safeguarding members' economic, legal, social and other rights
                and benefits while supporting their performance through
                training, education, legal support, technology and cooperation
                toward industrial peace.
              </p>
            </article>

            <article className="principle-card">
              <span className="principle-tag">VISION</span>
              <h2 className="principle-title">Vision</h2>
              <h3>
                Seeing strong and representing voice in Ethiopian transport
                industry.
              </h3>
            </article>
          </div>
          <div className="values-panel">
            <SectionHeading
              align="center"
              eyebrow="VALUES "
              title="Member satisfaction is our leading value."
              text="Integrity, respect, diligence, teamwork and industrial peace guide how ETEF serves and represents transport employers."
            />
            <div className="values-list">
              <span>Member satisfaction</span>
              <span>Integrity</span>
              <span>Respect</span>
              <span>Diligence</span>
              <span>Teamwork</span>
              <span>Industrial peace</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="SERVICES"
            title="Supporting a stronger transport industry."
            text="ETEF advocates for transport employers, builds constructive dialogue and protects members’ rights and benefits."
          />
          <div className="feature-grid">
            <FeatureCard
              number="01"
              title="Advocacy"
              text="Representing the shared interests and priorities of transport employers."
              to="/about"
            />
            <FeatureCard
              number="02"
              title="Lobby & dialogue"
              text="Engaging stakeholders to encourage practical, fair and sustainable transport policies."
              to="/contact"
            />
            <FeatureCard
              number="03"
              title="Rights & benefits"
              text="Protecting members’ legal, economic and social rights and benefits."
              to="/membership"
            />
            <FeatureCard
              number="04"
              title="Training & support"
              text="Connecting members with education, legal support and industry collaboration."
              to="/about"
            />
          </div>
        </div>
      </section>

      <NewsPreview />
      <GalleryPreview />
      <VacanciesPreview />
      <ContactPreview />
      <FAQPreview />
      <PartnersPreview />

      <section className="section final-cta">
        <div className="container final-cta-inner">
          <div>
            <span className="eyebrow eyebrow-light">
              OFFICIAL ETEF PLATFORM
            </span>
            <h2>
              One federation.
              <br />
              One trusted digital home.
            </h2>
          </div>
          <Link className="button button-gold" to="/contact">
            Connect with ETEF <span>↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}

function PartnersPreview() {
  const { i18n } = useTranslation();
  const [items, setItems] = useState<any[]>([]);
  const am = i18n.language.startsWith("am");
  useEffect(() => {
    api<{ items: any[] }>("/partners")
      .then((r) => setItems(r.items.slice(0, 4)))
      .catch(() => setItems([]));
  }, []);
  if (!items.length) return null;
  return (
    <PreviewShell
      eyebrow="PARTNERS"
      title={
        am
          ? "ከETEF ጋር የሚሰሩ አጋሮች"
          : "Organizations working with and supporting ETEF"
      }
      text={
        am
          ? "ETEFን ከሚደግፉ እና ከሚተባበሩ ድርጅቶች ጋር ይተዋወቁ።"
          : "Meet selected organizations that collaborate with and support ETEF."
      }
      to="/partners"
      label={am ? "ሁሉንም አጋሮች ይመልከቱ" : "Explore more partners"}
      className="partners-section"
    >
      <div className="partners-grid">
        {items.map((x) => (
          <PartnerCard key={x.id} item={x} am={am} />
        ))}
      </div>
    </PreviewShell>
  );
}

function PartnerCard({ item, am }: { item: any; am: boolean }) {
  const name = am ? item.name_am || item.name_en : item.name_en || item.name_am;
  const label =
    item.category === "SPONSOR"
      ? am
        ? "ስፖንሰር"
        : "SPONSOR"
      : item.category === "BOTH"
        ? am
          ? "አጋር · ስፖንሰር"
          : "PARTNER · SPONSOR"
        : am
          ? "አጋር"
          : "PARTNER";
  return (
    <article className="partner-card">
      {item.logo_url ? (
        <img src={`${API_ORIGIN}${item.logo_url}`} alt={name} />
      ) : (
        <div className="partner-logo-fallback">
          {name?.slice(0, 2).toUpperCase()}
        </div>
      )}
      <div>
        <span>{label}</span>
        <h3>{name}</h3>
        {(am
          ? item.description_am || item.description_en
          : item.description_en || item.description_am) && (
          <p>
            {am
              ? item.description_am || item.description_en
              : item.description_en || item.description_am}
          </p>
        )}
        {item.website_url && (
          <a href={item.website_url} target="_blank" rel="noreferrer">
            {am ? "ድረ-ገጽ" : "Website"} ↗
          </a>
        )}
      </div>
    </article>
  );
}

function Partners() {
  const { i18n } = useTranslation();
  const [items, setItems] = useState<any[]>([]);
  const am = i18n.language.startsWith("am");
  useEffect(() => {
    api<{ items: any[] }>("/partners")
      .then((r) => setItems(r.items))
      .catch(() => setItems([]));
  }, []);
  const sponsors = items.filter(
    (x) => x.category === "SPONSOR" || x.category === "BOTH",
  );
  const partners = items.filter(
    (x) => x.category === "PARTNER" || x.category === "BOTH",
  );
  return (
    <Page
      title={am ? "የETEF አጋሮች እና ስፖንሰሮች" : "Our partners & sponsors"}
      eyebrow="PARTNERS"
    >
      <p className="page-lead">
        {am
          ? "ETEFን ከሚደግፉ፣ ከሚተባበሩ እና አብረው ከሚሰሩ ድርጅቶች ጋር ይተዋወቁ።"
          : "Meet the organizations that work with, collaborate with, and support ETEF."}
      </p>
      {partners.length > 0 && (
        <>
          <span className="eyebrow">{am ? "አጋሮች" : "PARTNERS"}</span>
          <div className="partners-page-grid">
            {partners.map((x) => (
              <PartnerCard key={`p-${x.id}`} item={x} am={am} />
            ))}
          </div>
        </>
      )}
      {sponsors.length > 0 && (
        <>
          <span className="eyebrow partner-section-label">
            {am ? "ስፖንሰሮች" : "SPONSORS"}
          </span>
          <div className="partners-page-grid">
            {sponsors.map((x) => (
              <PartnerCard key={`s-${x.id}`} item={x} am={am} />
            ))}
          </div>
        </>
      )}
      {!items.length && (
        <div className="empty-state">
          <span>ETEF</span>
          <h2>{am ? "አሁን የታተሙ አጋሮች የሉም" : "No partners published yet"}</h2>
        </div>
      )}
    </Page>
  );
}

function PreviewShell({
  eyebrow,
  title,
  text,
  to,
  label,
  children,
  className = "",
}: {
  eyebrow: string;
  title: string;
  text: string;
  to: string;
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`section preview-section ${className}`}>
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow={eyebrow}
          title={title}
          text={text}
        />
        <div className="preview-content">{children}</div>
        <div className="preview-action">
          <Link className="button button-outline-dark" to={to}>
            {label} <span>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function NewsPreview() {
  const { i18n } = useTranslation();
  const [items, setItems] = useState<any[]>([]);
  const am = i18n.language.startsWith("am");
  useEffect(() => {
    api<{ items: any[] }>("/news")
      .then((r) => setItems(r.items.slice(0, 3)))
      .catch(() => setItems([]));
  }, []);
  return (
    <PreviewShell
      eyebrow="NEWS UPDATE"
      title={am ? "የፌዴሬሽኑ ዜናዎች" : "Latest federation news"}
      text={
        am
          ? "የፌዴሬሽኑን ወቅታዊ ዜናዎች ይከታተሉ።"
          : "Follow the latest updates, announcements and activities from ETEF."
      }
      to="/news"
      label={am ? "ተጨማሪ ዜናዎች" : "Explore more news"}
      className="news-section"
    >
      <div className="news-grid">
        {items.map((x) => (
          <article className="news-card" key={x.id}>
            <span className="eyebrow">ETEF NEWS</span>
            <h3>{am ? x.title_am || x.title_en : x.title_en || x.title_am}</h3>
            <p>
              {am ? x.excerpt_am || x.excerpt_en : x.excerpt_en || x.excerpt_am}
            </p>
            <small>
              {x.published_at
                ? new Date(x.published_at).toLocaleDateString()
                : ""}
            </small>
          </article>
        ))}
      </div>
      {!items.length && (
        <div className="empty-state">
          <h2>{am ? "እስካሁን የታተመ ዜና የለም" : "No news published yet"}</h2>
        </div>
      )}
    </PreviewShell>
  );
}

function GalleryPreview() {
  const { i18n } = useTranslation();
  const [items, setItems] = useState<any[]>([]);
  const am = i18n.language.startsWith("am");
  useEffect(() => {
    api<{ items: any[] }>("/gallery/albums")
      .then((r) => setItems(r.items.slice(0, 3)))
      .catch(() => setItems([]));
  }, []);
  return (
    <PreviewShell
      eyebrow="GALLERY"
      title={am ? "የETEF ዝግጅቶች የፎቶ ማዕከል" : "ETEF event gallery"}
      text={
        am
          ? "የፌዴሬሽኑን ዝግጅቶችና ተግባራት በፎቶ ይመልከቱ።"
          : "Explore selected photographs from ETEF events and activities."
      }
      to="/gallery"
      label={am ? "ሁሉንም ፎቶዎች ይመልከቱ" : "Explore more gallery"}
      className="gallery-preview-section"
    >
      <div className="preview-gallery-grid">
        {items.map((album: any, index: number) => (
          <article className="album" key={album.id}>
            <div className={`album-image album-${(index % 4) + 1}`}>
              {album.cover_image_url ? (
                <img src={`${API_ORIGIN}${album.cover_image_url}`} alt="" />
              ) : (
                <span>ETEF</span>
              )}
            </div>
            <div className="album-meta">
              <span>EVENT ALBUM</span>
              <h3>
                {am
                  ? album.title_am || album.title_en
                  : album.title_en || album.title_am}
              </h3>
              <b>{am ? "ይመልከቱ →" : "View album →"}</b>
            </div>
          </article>
        ))}
      </div>
      {!items.length && (
        <div className="empty-state">
          <h2>{am ? "የፎቶ አልበሞች የሉም" : "No gallery albums published yet"}</h2>
        </div>
      )}
    </PreviewShell>
  );
}

function VacanciesPreview() {
  const { i18n } = useTranslation();
  const [items, setItems] = useState<any[]>([]);
  const am = i18n.language.startsWith("am");
  useEffect(() => {
    api<{ items: any[] }>("/vacancies")
      .then((r) => setItems(r.items.slice(0, 3)))
      .catch(() => setItems([]));
  }, []);
  return (
    <PreviewShell
      eyebrow="VACANCY"
      title={am ? "የሥራ ዕድሎች" : "Current job vacancies"}
      text={
        am
          ? "በETEF የታተሙ የሥራ ዕድሎችን ይመልከቱ።"
          : "Discover current opportunities published by ETEF."
      }
      to="/vacancies"
      label={am ? "ተጨማሪ የሥራ ዕድሎች" : "Explore more vacancies"}
      className="vacancies-preview-section"
    >
      <div className="preview-list">
        {items.map((x) => (
          <article className="page-card preview-list-card" key={x.id}>
            <span className="eyebrow">
              {x.employment_type || "OPPORTUNITY"}
            </span>
            <h3>{am ? x.title_am || x.title_en : x.title_en || x.title_am}</h3>
            <p>
              {x.location || ""}
              {x.closing_date
                ? ` · ${am ? "የመጨረሻ ቀን" : "Deadline"}: ${new Date(x.closing_date).toLocaleDateString()}`
                : ""}
            </p>
          </article>
        ))}
      </div>
      {!items.length && (
        <div className="empty-state">
          <h2>{am ? "አሁን የታተመ የሥራ ዕድል የለም" : "No vacancies published yet"}</h2>
        </div>
      )}
    </PreviewShell>
  );
}

function ContactPreview() {
  const { i18n } = useTranslation();
  const [settings, setSettings] = useState<Record<string, string>>({});
  const am = i18n.language.startsWith("am");
  useEffect(() => {
    api<{ settings: Record<string, string> }>("/settings")
      .then((r) => setSettings(r.settings))
      .catch(() => setSettings({}));
  }, []);
  return (
    <PreviewShell
      eyebrow="CONTACT US"
      title={am ? "ከETEF ጋር ይገናኙ" : "Connect with ETEF"}
      text={
        am
          ? "የፌዴሬሽኑን የተረጋገጡ የግንኙነት መስመሮች ይጠቀሙ።"
          : "Use ETEF's official contact channels and social links."
      }
      to="/contact"
      label={am ? "የግንኙነት መረጃ" : "Explore contact details"}
      className="contact-preview-section"
    >
      <div className="preview-contact-grid">
        <div className="page-card">
          <span className="eyebrow">EMAIL</span>
          <h3>{settings.organization_email || "—"}</h3>
        </div>
        <div className="page-card">
          <span className="eyebrow">OFFICIAL PLATFORM</span>
          <h3>{am ? "በቀጥታ ከETEF ጋር ይገናኙ" : "Connect directly with ETEF"}</h3>
          <p>
            {am
              ? "የቢሮ አድራሻና ስልክ መረጃ በአስተዳደር ፖርታሉ ይዘምናል።"
              : "Official office and telephone details are maintained by authorized administrators."}
          </p>
        </div>
      </div>
    </PreviewShell>
  );
}

function FAQPreview() {
  const { i18n } = useTranslation();
  const [items, setItems] = useState<any[]>([]);
  const am = i18n.language.startsWith("am");
  useEffect(() => {
    api<{ items: any[] }>("/faqs")
      .then((r) => setItems(r.items.slice(0, 3)))
      .catch(() => setItems([]));
  }, []);
  return (
    <PreviewShell
      eyebrow="FAQ"
      title={am ? "ተደጋጋሚ ጥያቄዎች" : "Frequently asked questions"}
      text={
        am
          ? "ስለ ETEF የሚነሱ የተለመዱ ጥያቄዎችን ያግኙ።"
          : "Find concise answers to common questions about ETEF."
      }
      to="/faq"
      label={am ? "ተጨማሪ ጥያቄዎች" : "Explore more FAQs"}
      className="faq-preview-section"
    >
      <div className="faq-list preview-faq-list">
        {items.map((x, index) => {
          const q = am
            ? x.question_am || x.question_en
            : x.question_en || x.question_am;
          const a = am
            ? x.answer_am || x.answer_en
            : x.answer_en || x.answer_am;
          return <FaqRow key={x.id} question={q} answer={a} index={index} />;
        })}
      </div>
      {!items.length && (
        <div className="empty-state">
          <h2>{am ? "ጥያቄዎች እስካሁን አልታተሙም" : "No FAQs published yet"}</h2>
        </div>
      )}
    </PreviewShell>
  );
}

function News() {
  const { i18n } = useTranslation();
  const [items, setItems] = useState<any[]>([]);
  const am = i18n.language.startsWith("am");
  useEffect(() => {
    api<{ items: any[] }>("/news")
      .then((r) => setItems(r.items))
      .catch(() => setItems([]));
  }, []);
  return (
    <Page title={am ? "የፌዴሬሽኑ ዜና" : "News updates"} eyebrow="NEWS UPDATE">
      <div className="news-grid">
        {items.map((x) => (
          <article className="news-card" key={x.id}>
            <span className="eyebrow">ETEF NEWS</span>
            <h2>{am ? x.title_am || x.title_en : x.title_en || x.title_am}</h2>
            <p>
              {am
                ? x.body_am || x.excerpt_am || x.body_en || x.excerpt_en
                : x.body_en || x.excerpt_en || x.body_am || x.excerpt_am}
            </p>
            <small>
              {x.published_at
                ? new Date(x.published_at).toLocaleDateString()
                : ""}
            </small>
          </article>
        ))}
      </div>
    </Page>
  );
}

function FeatureCard({
  number,
  title,
  text,
  to,
}: {
  number: string;
  title: string;
  text: string;
  to: string;
}) {
  return (
    <Link className="feature-card" to={to}>
      <div className="feature-card-top">
        <span>{number}</span>
        <span>↗</span>
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
      <span className="feature-card-line" />
    </Link>
  );
}

function Page({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow: string;
  children: ReactNode;
}) {
  return (
    <section className="page">
      <div className="container narrow">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  );
}

function usePublicContent(key: string) {
  const { i18n } = useTranslation();
  const [item, setItem] = useState<any>(null);
  useEffect(() => {
    api<{ items: any[] }>("/content")
      .then((r) => setItem(r.items.find((x) => x.content_key === key) || null))
      .catch(() => setItem(null));
  }, [key]);
  const am = i18n.language.startsWith("am");
  return {
    item,
    title: am
      ? item?.title_am || item?.title_en
      : item?.title_en || item?.title_am,
    body: am ? item?.body_am || item?.body_en : item?.body_en || item?.body_am,
    am,
  };
}

function PublicState({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

function About() {
  const about = usePublicContent("about");
  const vision = usePublicContent("vision");
  const mission = usePublicContent("mission");
  return (
    <Page title={about.title || "About ETEF"} eyebrow="ABOUT ETEF">
      <p className="page-lead">
        {about.body ||
          "The Ethiopian Transport Employers Federation is a premier apex organization dedicated to safeguarding the rights and benefits of its members within the transportation sector."}
      </p>
      <div className="page-block">
        <span className="eyebrow">{vision.title || "Vision"}</span>
        <h2>
          {vision.body ||
            "Seeing strong and representing voice in Ethiopian transport industry."}
        </h2>
      </div>
      <div className="page-block">
        <span className="eyebrow">{mission.title || "Mission"}</span>
        <p>
          {mission.body ||
            "ETEF works to safeguard the rights and benefits of its members and support their performance toward industrial peace."}
        </p>
      </div>
    </Page>
  );
}
function Membership() {
  return (
    <Page title="Membership" eyebrow="MEMBERSHIP">
      <p className="page-lead">
        Membership information and the official online registration process will
        be available here.
      </p>
      <div className="membership-page-grid">
        <div className="page-card">
          <span className="eyebrow">INFORMATION</span>
          <h2>Membership access</h2>
          <p>
            Learn about membership, requirements, benefits and the registration
            process.
          </p>
          <ul>
            <li>Membership information</li>
            <li>Membership requirements</li>
            <li>Online registration</li>
            <li>Application review</li>
          </ul>
        </div>
        <div className="page-card page-card-dark">
          <span className="eyebrow eyebrow-light">ONLINE REGISTRATION</span>
          <h2>Register your organization</h2>
          <p>
            The full application form will be connected to the secure ETEF
            backend.
          </p>
          <Link className="button button-gold" to="/membership/register">
            Start registration ↗
          </Link>
        </div>
      </div>
    </Page>
  );
}

function FAQ() {
  const { i18n } = useTranslation();
  const [items, setItems] = useState<any[]>([]);
  const [open, setOpen] = useState<number | null>(0);
  const am = i18n.language.startsWith("am");
  useEffect(() => {
    api<{ items: any[] }>("/faqs")
      .then((r) => setItems(r.items))
      .catch(() => setItems([]));
  }, []);
  return (
    <Page
      title={am ? "ተደጋጋሚ ጥያቄዎች" : "Frequently asked questions"}
      eyebrow="FAQ"
    >
      <div className="faq-list">
        {items.map((x, index) => {
          const q = am
            ? x.question_am || x.question_en
            : x.question_en || x.question_am;
          const a = am
            ? x.answer_am || x.answer_en
            : x.answer_en || x.answer_am;
          return (
            <button
              className={`faq-row ${open === index ? "open" : ""}`}
              key={x.id}
              onClick={() => setOpen(open === index ? null : index)}
            >
              <span>
                <strong>{q}</strong>
                {open === index && <p>{a}</p>}
              </span>
              <b>{open === index ? "−" : "+"}</b>
            </button>
          );
        })}
        {!items.length && (
          <div className="empty-state">
            <span>ETEF</span>
            <h2>{am ? "ጥያቄዎች እስካሁን አልታተሙም" : "No FAQs published yet"}</h2>
            <p>
              {am
                ? "የተፈቀዱ ጥያቄዎች እዚህ ይታያሉ።"
                : "Approved FAQ entries will appear here."}
            </p>
          </div>
        )}
      </div>
    </Page>
  );
}
function FaqRow({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(index === 0);
  return (
    <button
      className={`faq-row ${open ? "open" : ""}`}
      onClick={() => setOpen((v) => !v)}
    >
      <span>
        <strong>{question}</strong>
        {open && <p>{answer}</p>}
      </span>
      <b>{open ? "−" : "+"}</b>
    </button>
  );
}

function Gallery() {
  const { i18n } = useTranslation();
  const [albums, setAlbums] = useState<any[]>([]);
  const am = i18n.language.startsWith("am");
  useEffect(() => {
    api<{ items: any[] }>("/gallery/albums")
      .then((r) => setAlbums(r.items))
      .catch(() => setAlbums([]));
  }, []);
  return (
    <Page
      title={am ? "የETEF ዝግጅቶች የፎቶ ማዕከል" : "ETEF event gallery"}
      eyebrow="GALLERY"
    >
      <p className="page-lead">
        {am
          ? "የተፈቀዱ የዝግጅት ፎቶዎች እዚህ ይታያሉ።"
          : "Approved event photographs and albums are published here."}
      </p>
      <div className="gallery-grid">
        {albums.map((album: any, index: number) => (
          <article className="album" key={album.id}>
            <div className={`album-image album-${(index % 4) + 1}`}>
              {album.cover_image_url ? (
                <img src={`${API_ORIGIN}${album.cover_image_url}`} alt="" />
              ) : (
                <span>ETEF</span>
              )}
            </div>
            <div className="album-meta">
              <span>EVENT ALBUM</span>
              <h3>
                {am
                  ? album.title_am || album.title_en
                  : album.title_en || album.title_am}
              </h3>
              {(am
                ? album.description_am || album.description_en
                : album.description_en || album.description_am) && (
                <p>
                  {am
                    ? album.description_am || album.description_en
                    : album.description_en || album.description_am}
                </p>
              )}
              <b>{am ? "ይመልከቱ →" : "View album →"}</b>
            </div>
          </article>
        ))}
        {!albums.length && (
          <div className="empty-state">
            <span>ETEF</span>
            <h2>{am ? "የፎቶ አልበሞች የሉም" : "No gallery albums published yet"}</h2>
          </div>
        )}
      </div>
    </Page>
  );
}
function Vacancies() {
  const { i18n } = useTranslation();
  const [items, setItems] = useState<any[]>([]);
  const am = i18n.language.startsWith("am");
  useEffect(() => {
    api<{ items: any[] }>("/vacancies")
      .then((r) => setItems(r.items))
      .catch(() => setItems([]));
  }, []);
  return (
    <Page title={am ? "የሥራ ዕድሎች" : "Job vacancies"} eyebrow="CAREERS">
      <p className="page-lead">
        {am
          ? "በETEF የታተሙ የሥራ ዕድሎች።"
          : "Current opportunities published by ETEF."}
      </p>
      {items.length ? (
        <div className="vacancy-list">
          {items.map((x) => (
            <article className="page-card" key={x.id}>
              <span className="eyebrow">
                {x.employment_type || "OPPORTUNITY"}
              </span>
              <h2>
                {am ? x.title_am || x.title_en : x.title_en || x.title_am}
              </h2>
              <p>
                {x.location || ""}
                {x.closing_date
                  ? ` · ${am ? "የመጨረሻ ቀን" : "Deadline"}: ${new Date(x.closing_date).toLocaleDateString()}`
                  : ""}
              </p>
              {(am
                ? x.description_am || x.description_en
                : x.description_en || x.description_am) && (
                <p>
                  {am
                    ? x.description_am || x.description_en
                    : x.description_en || x.description_am}
                </p>
              )}{" "}
              {(am
                ? x.requirements_am || x.requirements_en
                : x.requirements_en || x.requirements_am) && (
                <div className="page-block">
                  <span className="eyebrow">
                    {am ? "መስፈርቶች" : "REQUIREMENTS"}
                  </span>
                  <p>
                    {am
                      ? x.requirements_am || x.requirements_en
                      : x.requirements_en || x.requirements_am}
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <span>ETEF</span>
          <h2>{am ? "አሁን የታተመ የሥራ ዕድል የለም" : "No vacancies published yet"}</h2>
          <p>
            {am
              ? "የታተሙ የሥራ ዕድሎች እዚህ ይታያሉ።"
              : "Published vacancies will automatically appear here."}
          </p>
        </div>
      )}
    </Page>
  );
}
function Contact() {
  const { i18n } = useTranslation();
  const [settings, setSettings] = useState<Record<string, string>>({});
  const am = i18n.language.startsWith("am");
  useEffect(() => {
    api<{ settings: Record<string, string> }>("/settings")
      .then((r) => setSettings(r.settings))
      .catch(() => setSettings({}));
  }, []);
  const links = [
    ["facebook_url", "Facebook"],
    ["linkedin_url", "LinkedIn"],
    ["telegram_url", "Telegram"],
    ["youtube_url", "YouTube"],
  ].filter(([k]) => settings[k]);
  return (
    <Page title={am ? "ETEFን ያግኙ" : "Connect with ETEF"} eyebrow="CONTACT">
      <p className="page-lead">
        {am
          ? "የተረጋገጠ የETEF የግንኙነት መረጃ።"
          : "Official ETEF contact information and approved social channels."}
      </p>
      <div className="contact-grid">
        <div className="page-card">
          <span className="eyebrow">{am ? "ኢሜይል" : "EMAIL"}</span>
          <h2>{settings.organization_email || "—"}</h2>
          {settings.organization_email && (
            <a
              className="button button-gold"
              href={`mailto:${settings.organization_email}`}
            >
              {am ? "ኢሜይል ይላኩ" : "Send email"} ↗
            </a>
          )}
        </div>
        <div className="page-card">
          <span className="eyebrow">{am ? "ማህበራዊ ሚዲያ" : "SOCIAL"}</span>
          <h2>
            {links.length
              ? links.map(([k, label]) => (
                  <a
                    key={k}
                    href={settings[k]}
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: "block", margin: ".4rem 0" }}
                  >
                    {label} ↗
                  </a>
                ))
              : "—"}
          </h2>
        </div>
        <div className="page-card">
          <span className="eyebrow">{am ? "መስሪያ ቤት" : "OFFICE"}</span>
          <h2>{am ? "የቢሮ መረጃ" : "Office information"}</h2>
          <p>
            {am
              ? "የቢሮ አድራሻና ስልክ መረጃ በአስተዳደር ፖርታሉ ይዘምናል።"
              : "Office address and telephone details can be maintained by the administrator."}
          </p>
        </div>
      </div>
    </Page>
  );
}
function App() {
  return (
    <Routes>
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route element={<ProtectedAdmin />}>
        <Route path="/admin" element={<Admin />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/news" element={<News />} />
        <Route path="/membership/register" element={<MembershipRegister />} />
      </Route>
    </Routes>
  );
}

export default App;
