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
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";
import ProtectedAdmin from "./auth/ProtectedAdmin";
import logo from "./asset/etelogo.jpg";

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
      <span className="brand-seal">
        <img src={logo} alt="ETEF logo" />
      </span>
      <span className="brand-copy">
        <strong>ETHIOPIAN TRANSPORT</strong>
        <small>EMPLOYERS' FEDERATION</small>
      </span>
    </Link>
  );
}

function TopOrganizationBar() {
  return (
    <div className="org-topbar" role="banner">
      <div className="container org-topbar-inner">
        <div className="org-topbar-left">
          <span className="org-recognition">FDRE MoTL Recognized</span>
          <span className="org-separator" aria-hidden="true">•</span>
          <span>Apex Employer Body for Freight, Public Transit &amp; Logistics Operators</span>
        </div>
        <div className="org-topbar-right">
          <span>📞 &nbsp;+251 (0) 11 550 4880</span>
          <span className="org-divider" aria-hidden="true" />
          <span>📍 &nbsp;Addis Ababa, Ethiopia</span>
        </div>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const changeLanguage = (language: "en" | "am") => {
    i18n.changeLanguage(language);
    document.documentElement.lang = language;
    document.documentElement.dir = "ltr";
    setOpen(false);
  };

  return (
    <>
      {location.pathname === "/" && <TopOrganizationBar />}
      <header className="header">
        <div className="container header-inner">
          <Brand />

          <button
            className={`mobile-menu ${open ? "is-open" : ""}`}
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((val) => !val)}
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
    </>
  );
}

function HeroUpdates() {
  const { i18n } = useTranslation();
  const am = i18n.language.startsWith("am");
  const [updates, setUpdates] = useState<any[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let cancelled = false;
    Promise.all([
      api<{ items: any[] }>("/news").catch(() => ({ items: [] })),
      api<{ items: any[] }>("/vacancies").catch(() => ({ items: [] })),
    ]).then(([news, vacancies]) => {
      if (cancelled) return;
      const latestNews = (news.items || []).slice(0, 3).map((item) => ({
        id: `news-${item.id}`,
        type: am ? "ወቅታዊ ዜና" : "LATEST EVENT / NEWS",
        title: am ? item.title_am || item.title_en : item.title_en || item.title_am,
        summary: am ? item.excerpt_am || item.excerpt_en : item.excerpt_en || item.excerpt_am,
        date: item.published_at
          ? new Date(item.published_at).toLocaleDateString(am ? "am-ET" : "en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })
          : "",
        to: "/news",
      }));

      const latestVacancies = (vacancies.items || []).slice(0, 1).map((item) => ({
        id: `vacancy-${item.id}`,
        type: am ? "የሥራ ዕድል" : "OPPORTUNITY",
        title: am ? item.title_am || item.title_en : item.title_en || item.title_am,
        summary: item.location || (am ? "ክፍት የሥራ ቦታ" : "Current vacancy announcement"),
        date: item.closing_date
          ? new Date(item.closing_date).toLocaleDateString(am ? "am-ET" : "en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })
          : "",
        to: "/vacancies",
      }));

      const all = [...latestNews, ...latestVacancies];
      setUpdates(
        all.length
          ? all
          : [
              {
                id: "default-event",
                type: am ? "ወቅታዊ ዝግጅት" : "LATEST EVENT",
                title: am
                  ? "ዓመታዊ የትራንስፖርት ዘርፍ አጠቃላይ ጉባዔ"
                  : "National Transport Employers' Strategic Assembly",
                summary: am
                  ? "የክልል ማህበራትንና ባለድርሻ አካላትን ያሳተፈ ዓመታዊ የውይይት መድረክ በአዲስ አበባ ይካሄዳል።"
                  : "Annual nationwide stakeholders and regional operators assembly in Addis Ababa.",
                date: "2026",
                to: "/news",
              },
            ],
      );
      setIndex(0);
    });
    return () => {
      cancelled = true;
    };
  }, [am]);

  useEffect(() => {
    if (updates.length < 2) return;
    const timer = window.setInterval(
      () => setIndex((val) => (val + 1) % updates.length),
      6500,
    );
    return () => window.clearInterval(timer);
  }, [updates.length]);

  const active = updates[index] || updates[0];
  if (!active) return null;

  return (
    <div
      className="latest-event-card"
      aria-label={am ? "የቅርብ ጊዜ ዝግጅት እና መረጃ" : "Latest Event and Information"}
    >
      <div>
        <div className="latest-event-topline">
          <span className="latest-event-badge">{active.type}</span>
          {active.date && <span className="latest-event-date">{active.date}</span>}
        </div>
        <h3 className="latest-event-title">{active.title}</h3>
        {active.summary && <p className="latest-event-summary">{active.summary}</p>}
      </div>

      <div>
        <div className="latest-event-footer">
          <Link to={active.to} className="latest-event-link">
            <span>{am ? "ዝርዝር መረጃ ይመልከቱ" : "View Full Details"}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {updates.length > 1 && (
          <div className="hero-update-controls">
            <div className="hero-update-dots">
              {updates.map((item, dotIndex) => (
                <button
                  key={item.id}
                  type="button"
                  className={dotIndex === index ? "active" : ""}
                  aria-label={`Slide ${dotIndex + 1}`}
                  onClick={() => setIndex(dotIndex)}
                />
              ))}
            </div>
            <span>
              {String(index + 1).padStart(2, "0")} / {String(updates.length).padStart(2, "0")}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function Home() {
  const { t, i18n } = useTranslation();
  const am = i18n.language.startsWith("am");
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
        {/* Background slideshow */}
        <div className="hero-background" aria-hidden="true">
          {heroSlides.length > 0 ? (
            heroSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`hero-background-slide ${index === heroIndex ? "active" : ""}`}
                style={{
                  backgroundImage: `url(${API_ORIGIN}${slide.image_url})`,
                }}
              />
            ))
          ) : (
            <div
              className="hero-background-slide active"
              style={{ backgroundImage: `url(${logo})` }}
            />
          )}
        </div>

        {/* Flush left blue gradient wash (Zero margin, docks to left edge) */}
        <div className="hero-left-wash" aria-hidden="true" />
        <div className="hero-top-vignette" aria-hidden="true" />

        <div className="hero-grid container">
          {/* Main Row: Left Copy & Right Event Content */}

          <div className="hero-main-row">
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
                <Link className="button button-verify" to="/membership#verify-association">
                  <span className="verify-icon" aria-hidden="true">♢</span>
                  Verify Association ID
                </Link>
              </div>

              <div className="hero-note">
                <span className="hero-note-dot" />
                <span>{t("heroNote")}</span>
              </div>
            </div>

            {/* Right side: Latest event rectangle card without logos */}
            <div className="hero-right-col">
              <HeroUpdates />
            </div>
          </div>

          {/* 3. Hero Statistics Row (Dedicated bottom row - no collision) */}
          <div className="hero-statistics" aria-label="ETEF at a glance">
            <div className="hero-stat-item">
              <strong>34<span>+</span></strong>
              <span>Transport Associations</span>
            </div>
            <div className="hero-stat-item">
              <strong>125K<span>+</span></strong>
              <span>Fleet Commercial Units</span>
            </div>
            <div className="hero-stat-item">
              <strong>4 <em>Sectors</em></strong>
              <span>Freight, Tanker, Bus &amp; Taxi</span>
            </div>
          </div>

          {/* 4. Federation access pillars restored from the latest reference design. */}
          <div className="hero-focus-strip" aria-label="ETEF federation priorities">
            <div className="hero-focus-item">
              <strong>01</strong>
              <span>Unified representation</span>
            </div>
            <div className="hero-focus-item">
              <strong>02</strong>
              <span>Member-focused support</span>
            </div>
            <div className="hero-focus-item">
              <strong>03</strong>
              <span>Industry collaboration</span>
            </div>
            <div className="hero-focus-item">
              <strong>04</strong>
              <span>Digital access</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section intro-section">
        <div className="container">
          <SectionHeading
            eyebrow={t("aboutEyebrow")}
            title="ETEF"
            text={t("aboutIntro")}
          />
          <div className="institutional-overview-grid">
            <div className="institutional-overview-copy">
              <span className="section-index">01 / ABOUT ETEF</span>
              <h3>Connecting transport employers through representation, dialogue and practical federation services.</h3>
              <p>
                ETEF provides a unified institutional platform for transport employers, members and partners. The federation brings together information about membership, advocacy, industry dialogue, member interests and opportunities in one accessible digital home.
              </p>
              <Link className="arrow-link" to="/about">Explore ETEF <span>→</span></Link>
            </div>

            <div className="institutional-overview-grid-items">
              <Link className="overview-item" to="/membership">
                <span>01</span>
                <div><strong>Membership</strong><p>Registration, member information and federation access.</p></div>
                <b>↗</b>
              </Link>
              <Link className="overview-item" to="/about">
                <span>02</span>
                <div><strong>Representation</strong><p>Advocacy and engagement around transport employers' interests.</p></div>
                <b>↗</b>
              </Link>
              <Link className="overview-item" to="/contact">
                <span>03</span>
                <div><strong>Industry dialogue</strong><p>Connections among employers, associations and institutional partners.</p></div>
                <b>↗</b>
              </Link>
              <Link className="overview-item" to="/news">
                <span>04</span>
                <div><strong>Information &amp; updates</strong><p>News, announcements and current federation information.</p></div>
                <b>↗</b>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="section principles-section">
        <div className="container">
          <div className="principles-grid">
            <article className="principle-card principle-featured">
              <span className="principle-tag">{t("missionTag")}</span>
              <h2 className="principle-title">{t("missionTitle")}</h2>
              <p>{t("missionText")}</p>
            </article>

            <article className="principle-card">
              <span className="principle-tag">{t("visionTag")}</span>
              <h2 className="principle-title">{t("visionTitle")}</h2>
              <p>{t("visionText")}</p>
            </article>
          </div>

          <div className="values-panel">
            <SectionHeading
              align="center"
              eyebrow={t("valuesTag")}
              title={t("valuesTitle")}
              text={t("valuesText")}
            />
            <div className="values-list">
              <span>{t("value1")}</span>
              <span>{t("value2")}</span>
              <span>{t("value3")}</span>
              <span>{t("value4")}</span>
              <span>{t("value5")}</span>
              <span>{t("value6")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section" id="services">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow={t("servicesTag")}
            title={t("servicesTitle")}
            text={t("servicesText")}
          />
          <div className="feature-grid">
            <FeatureCard
              number="01"
              title={t("advocacy")}
              text={t("advocacyText")}
              to="/about"
            />
            <FeatureCard
              number="02"
              title={t("dialogue")}
              text={t("dialogueText")}
              to="/contact"
            />
            <FeatureCard
              number="03"
              title={t("rights")}
              text={t("rightsText")}
              to="/membership"
            />
            <FeatureCard
              number="04"
              title={t("training")}
              text={t("trainingText")}
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

      {/* Final Call to Action */}
      <section className="section final-cta">
        <div className="container final-cta-inner">
          <div>
            <span className="eyebrow eyebrow-light">OFFICIAL ETEF PLATFORM</span>
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
        <SectionHeading align="center" eyebrow={eyebrow} title={title} text={text} />
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
            <div className="news-card-media">
              {x.image_url ? (
                <img src={`${API_ORIGIN}${x.image_url}`} alt="" />
              ) : (
                <span style={{ fontSize: "28px", fontWeight: "900", color: "#1e2dbe" }}>
                  ETEF
                </span>
              )}
            </div>
            <div className="news-card-body">
              <div className="news-card-topline">
                <span className="eyebrow" style={{ margin: 0 }}>ETEF NEWS</span>
                <small>
                  {x.published_at ? new Date(x.published_at).toLocaleDateString() : ""}
                </small>
              </div>
              <h3>{am ? x.title_am || x.title_en : x.title_en || x.title_am}</h3>
              <p>{am ? x.excerpt_am || x.excerpt_en : x.excerpt_en || x.excerpt_am}</p>
              <Link className="arrow-link" to="/news">
                {am ? "ዝርዝር ይመልከቱ" : "Read update"} <span>→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
      {!items.length && (
        <div style={{ textAlign: "center", padding: "40px", color: "#888" }}>
          <p>{am ? "እስካሁን የታተመ ዜና የለም" : "No news published yet"}</p>
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
    >
      <div className="preview-gallery-grid">
        {items.map((album: any) => (
          <article className="album" key={album.id}>
            <div className="album-image">
              {album.cover_image_url ? (
                <img src={`${API_ORIGIN}${album.cover_image_url}`} alt="" />
              ) : (
                <span>ETEF</span>
              )}
            </div>
            <div className="album-meta">
              <span>EVENT ALBUM</span>
              <h3>
                {am ? album.title_am || album.title_en : album.title_en || album.title_am}
              </h3>
              <b>{am ? "ይመልከቱ →" : "View album →"}</b>
            </div>
          </article>
        ))}
      </div>
      {!items.length && (
        <div style={{ textAlign: "center", padding: "40px", color: "#888" }}>
          <p>{am ? "የፎቶ አልበሞች የሉም" : "No gallery albums published yet"}</p>
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
    >
      <div className="preview-list">
        {items.map((x) => (
          <article className="page-card preview-list-card" key={x.id}>
            <span className="eyebrow">{x.employment_type || "OPPORTUNITY"}</span>
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
        <div style={{ textAlign: "center", padding: "40px", color: "#888" }}>
          <p>{am ? "አሁን የታተመ የሥራ ዕድል የለም" : "No vacancies published yet"}</p>
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
          : "Use ETEF's official contact channels and telephone links."
      }
      to="/contact"
      label={am ? "የግንኙነት መረጃ" : "Explore contact details"}
    >
      <div className="preview-contact-grid">
        <div className="page-card">
          <span className="eyebrow">EMAIL</span>
          <h3>{settings.organization_email || "info@etef.org.et"}</h3>
        </div>
        <div className="page-card">
          <span className="eyebrow">HEADQUARTERS</span>
          <h3>{am ? "አዲስ አበባ፣ ኢትዮጵያ" : "Addis Ababa, Ethiopia"}</h3>
          <p>{am ? "ቀጥታ ከETEF ጽሕፈት ቤት ጋር ይገናኙ።" : "Direct access to the apex transport employers federation."}</p>
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
    >
      <div className="faq-list">
        {items.map((x, idx) => (
          <FaqRow
            key={x.id}
            index={idx}
            question={am ? x.question_am || x.question_en : x.question_en || x.question_am}
            answer={am ? x.answer_am || x.answer_en : x.answer_en || x.answer_am}
          />
        ))}
      </div>
      {!items.length && (
        <div style={{ textAlign: "center", padding: "40px", color: "#888" }}>
          <p>{am ? "ጥያቄዎች እስካሁን አልታተሙም" : "No FAQs published yet"}</p>
        </div>
      )}
    </PreviewShell>
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
    <article className={`faq-item ${open ? "open" : ""}`}>
      <button
        type="button"
        className="faq-question"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="faq-question-number">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="faq-question-text">{question}</span>
        <span className="faq-toggle" aria-hidden="true">
          {open ? "−" : "+"}
        </span>
      </button>
      <div className={`faq-answer ${open ? "visible" : ""}`}>
        <p>{answer}</p>
      </div>
    </article>
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
        <span className="eyebrow" style={{ marginBottom: "4px" }}>
          {item.category || "PARTNER"}
        </span>
        <h3>{name}</h3>
        {(am ? item.description_am : item.description_en) && (
          <p>{am ? item.description_am : item.description_en}</p>
        )}
      </div>
    </article>
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
    <section className="page" style={{ padding: "60px 0" }}>
      <div className="container narrow">
        <span className="eyebrow">{eyebrow}</span>
        <h1 style={{ fontSize: "38px", margin: "10px 0 24px" }}>{title}</h1>
        {children}
      </div>
    </section>
  );
}

function About() {
  return (
    <Page title="About ETEF" eyebrow="ABOUT US">
      <div className="page-card" style={{ marginBottom: "20px" }}>
        <h3>Ethiopian Transport Employers' Federation</h3>
        <p style={{ lineHeight: 1.8, color: "#667085" }}>
          The Ethiopian Transport Employers Federation (ETEF) is the premier apex organization
          representing freight, public bus transit, tanker, and regional transport associations
          across Ethiopia. Dedicated to industrial peace, modern logistics regulations, and 
          sustainable commercial transport infrastructure.
        </p>
      </div>
    </Page>
  );
}

function Membership() {
  return (
    <Page title="Membership Portal" eyebrow="MEMBERSHIP">
      <div className="page-card" style={{ display: "grid", gap: "16px" }}>
        <h3>Join the National Federation</h3>
        <p style={{ color: "#667085" }}>
          Register your association or commercial fleet operator organization to access federation benefits.
        </p>
        <Link className="button button-gold" style={{ background: "#1e2dbe", color: "#fff", width: "fit-content" }} to="/membership/register">
          Start Membership Registration ↗
        </Link>
      </div>
    </Page>
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
    <Page title={am ? "የፌዴሬሽኑ ዜናዎች" : "News & Announcements"} eyebrow="NEWS">
      <div className="news-grid">
        {items.map((x) => (
          <article className="news-card" key={x.id}>
            <div className="news-card-media">
              {x.image_url ? (
                <img src={`${API_ORIGIN}${x.image_url}`} alt="" />
              ) : (
                <span style={{ fontSize: "28px", fontWeight: "900", color: "#1e2dbe" }}>ETEF</span>
              )}
            </div>
            <div className="news-card-body">
              <h3>{am ? x.title_am || x.title_en : x.title_en || x.title_am}</h3>
              <p>{am ? x.excerpt_am || x.excerpt_en : x.excerpt_en || x.excerpt_am}</p>
            </div>
          </article>
        ))}
      </div>
    </Page>
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
    <Page title={am ? "የፎቶ ማዕከል" : "Event Gallery"} eyebrow="GALLERY">
      <div className="preview-gallery-grid">
        {albums.map((album: any) => (
          <article className="album" key={album.id}>
            <div className="album-image">
              {album.cover_image_url ? (
                <img src={`${API_ORIGIN}${album.cover_image_url}`} alt="" />
              ) : (
                <span>ETEF</span>
              )}
            </div>
            <div className="album-meta">
              <h3>{am ? album.title_am || album.title_en : album.title_en || album.title_am}</h3>
            </div>
          </article>
        ))}
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
    <Page title={am ? "የሥራ ዕድሎች" : "Careers & Vacancies"} eyebrow="VACANCIES">
      <div className="preview-list">
        {items.map((x) => (
          <article className="page-card" key={x.id}>
            <span className="eyebrow">{x.employment_type || "FULL TIME"}</span>
            <h3>{am ? x.title_am || x.title_en : x.title_en || x.title_am}</h3>
            <p>{x.location || "Addis Ababa"}</p>
          </article>
        ))}
      </div>
    </Page>
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

  return (
    <Page title={am ? "አጋሮች" : "Partners & Sponsors"} eyebrow="PARTNERS">
      <div className="partners-grid">
        {items.map((x) => (
          <PartnerCard key={x.id} item={x} am={am} />
        ))}
      </div>
    </Page>
  );
}

function FAQ() {
  const { i18n } = useTranslation();
  const [items, setItems] = useState<any[]>([]);
  const am = i18n.language.startsWith("am");

  useEffect(() => {
    api<{ items: any[] }>("/faqs")
      .then((r) => setItems(r.items))
      .catch(() => setItems([]));
  }, []);

  return (
    <Page title={am ? "ተደጋጋሚ ጥያቄዎች" : "FAQ"} eyebrow="QUESTIONS">
      <div className="faq-list">
        {items.map((x, idx) => (
          <FaqRow
            key={x.id}
            index={idx}
            question={am ? x.question_am || x.question_en : x.question_en || x.question_am}
            answer={am ? x.answer_am || x.answer_en : x.answer_en || x.answer_am}
          />
        ))}
      </div>
    </Page>
  );
}

function Contact() {
  return (
    <Page title="Contact ETEF" eyebrow="CONTACT">
      <div className="preview-contact-grid">
        <div className="page-card">
          <span className="eyebrow">HEADQUARTERS</span>
          <h3>Addis Ababa, Ethiopia</h3>
          <p>Kirkos Sub-City, Commercial District</p>
        </div>
        <div className="page-card">
          <span className="eyebrow">DIRECT CONTACT</span>
          <h3>+251 (0) 11 550 4880</h3>
          <p>info@etef.org.et</p>
        </div>
      </div>
    </Page>
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
            A unified digital portal for Ethiopia's commercial transport employers, 
            regional associations, and logistics partners.
          </p>
        </div>

        <div className="footer-column">
          <h3>{t("explore")}</h3>
          <Link to="/about">{t("about")}</Link>
          <Link to="/membership">{t("membership")}</Link>
          <Link to="/news">{t("news")}</Link>
          <Link to="/gallery">{t("gallery")}</Link>
        </div>

        <div className="footer-column">
          <h3>Discover</h3>
          <Link to="/vacancies">{t("vacancies")}</Link>
          <Link to="/partners">{t("partners")}</Link>
          <Link to="/faq">{t("faq")}</Link>
          <Link to="/contact">{t("contact")}</Link>
        </div>

        <div className="footer-column">
          <h3>{t("connect")}</h3>
          <p>Official Secretariat</p>
          <p>Addis Ababa, Ethiopia</p>
          <Link to="/contact" style={{ fontWeight: 800, marginTop: "6px" }}>
            Contact Support →
          </Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} ETEF. All rights reserved.</span>
        <a
          className="powered-by"
          href="https://mulutilacodecomp.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Powered by LXD TEAM
        </a>
        <span>{t("languageFooter")}</span>
      </div>
    </footer>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;
  return (
    <button
      type="button"
      className="back-to-top"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <span aria-hidden="true">⇈</span>
    </button>
  );
}

function Layout() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/forgot-password" element={<ForgotPassword />} />
      <Route path="/admin/reset-password" element={<ResetPassword />} />
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