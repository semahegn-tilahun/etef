import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { api, API_ORIGIN } from "../api";
import { useAuth } from "../auth/AuthContext";
import logo from "../asset/etelogo.jpg";

type Section =
  | "dashboard"
  | "applications"
  | "faq"
  | "gallery"
  | "vacancies"
  | "content"
  | "partners"
  | "news"
  | "hero";
type FAQ = {
  id: string;
  question_en: string;
  answer_en: string;
  question_am?: string;
  answer_am?: string;
  is_published: boolean;
  sort_order: number;
};
type Vacancy = {
  id: string;
  title_en: string;
  title_am?: string;
  description_en?: string;
  description_am?: string;
  requirements_en?: string;
  requirements_am?: string;
  location?: string;
  employment_type?: string;
  closing_date?: string;
  status: string;
};
type Album = {
  id: string;
  title_en: string;
  title_am?: string;
  description_en?: string;
  description_am?: string;
  event_date?: string;
  photo_count: number;
  is_published: boolean;
  cover_image_url?: string;
};
type Application = {
  id: string;
  reference: string;
  organization_name: string;
  organization_type?: string;
  transport_sector?: string;
  region?: string;
  city?: string;
  sub_city?: string;
  woreda?: string;
  office_address?: string;
  phone?: string;
  email?: string;
  member_count?: number | null;
  vehicle_count?: number | null;
  general_manager_name?: string;
  general_manager_phone?: string;
  general_manager_email?: string;
  federation_representative_name?: string;
  federation_representative_phone?: string;
  status: string;
  submitted_at: string;
  reviewed_at?: string | null;
};

function ActionIcon({ name }: { name: "dashboard" | "applications" | "faq" | "gallery" | "vacancies" | "content" | "partners" | "news" | "hero" | "view" | "edit" | "delete" | "close" | "menu" | "external" }) {
  const paths = {
    dashboard: <><path d="M4 13h6V4H4v9Zm10 7h6v-9h-6v9ZM4 20h6v-3H4v3Zm10-10h6V4h-6v6Z"/></>,
    applications: <><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 9h8M8 13h8M8 17h5"/></>,
    faq: <><circle cx="12" cy="12" r="9"/><path d="M9.7 9.2a2.5 2.5 0 1 1 4.4 1.6c-.9 1-2.1 1.3-2.1 2.8M12 17h.01"/></>,
    gallery: <><rect x="4" y="5" width="16" height="14" rx="2"/><circle cx="9" cy="10" r="1.4"/><path d="m5 17 4.5-4.5 3 3 2-2 4.5 4.5"/></>,
    vacancies: <><rect x="4" y="6" width="16" height="14" rx="2"/><path d="M9 6V4h6v2M4 11h16M10 14h4"/></>,
    content: <><path d="M6 5h12M6 9h12M6 13h8M6 17h10"/><circle cx="4" cy="5" r=".7" fill="currentColor" stroke="none"/><circle cx="4" cy="9" r=".7" fill="currentColor" stroke="none"/><circle cx="4" cy="13" r=".7" fill="currentColor" stroke="none"/><circle cx="4" cy="17" r=".7" fill="currentColor" stroke="none"/></>,
    partners: <><circle cx="8" cy="8" r="3"/><circle cx="16" cy="16" r="3"/><path d="m10.2 10.2 3.6 3.6"/></>,
    news: <><path d="M5 5h14v14H5z"/><path d="M8 9h8M8 12h8M8 15h5"/></>,
    hero: <><rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="m6 16 4-4 2.5 2.5L15 12l3 4M7.5 9.5h.01"/></>,
    view: <><path d="M2.2 12s3.2-5 9.8-5 9.8 5 9.8 5-3.2 5-9.8 5-9.8-5-9.8-5Z"/><circle cx="12" cy="12" r="2.7"/></>,
    edit: <><path d="M4 20h4l10.4-10.4a2.1 2.1 0 0 0 0-3L16.4 4.6a2.1 2.1 0 0 0-3 0L3 15v5Z"/><path d="m12.1 6.9 5 5"/></>,
    delete: <><path d="M4 7h16"/><path d="M9 7V4h6v3M7 7l.8 13h8.4L17 7M10 11v5M14 11v5"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    external: <><path d="M14 5h5v5M19 5l-8 8"/><path d="M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></>,
  } as const;
  return <svg className="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

export default function Admin() {
  const [section, setSection] = useState<Section>("dashboard"),
    [mobileOpen, setMobileOpen] = useState(false),
    [toast, setToast] = useState(""),
    [stats, setStats] = useState<any>({
      total: 0,
      pending: 0,
      review: 0,
      approved: 0,
      rejected: 0,
    });
  const { user, logout } = useAuth();
  const notify = (m: string) => {
    setToast(m);
    setTimeout(() => setToast(""), 2200);
  };
  useEffect(() => {
    api("/admin/application-stats")
      .then((r) => setStats(r.stats))
      .catch(() => {});
  }, []);
  return (
    <div className="admin-shell">
      {mobileOpen && (
        <button
          type="button"
          className="admin-drawer-backdrop"
          aria-label="Close admin navigation"
          onClick={() => setMobileOpen(false)}
        />
      )}
      <aside className={`admin-sidebar ${mobileOpen ? "is-open" : ""}`}>
        <Link className="admin-brand" to="/">
          <span className="admin-brand-mark"><img src={logo} alt="ETEF logo" /></span>
          <span className="admin-brand-copy">
            <strong>ADMIN</strong>
            <small>ETEF CONTROL CENTER</small>
          </span>
        </Link>
        <div className="admin-nav-groups">
          <AdminNavGroup
            label="WORKSPACE"
            items={[
              ["dashboard", "Dashboard"],
              ["applications", "Applications"],
            ]}
            section={section}
            onSelect={(next) => { setSection(next); setMobileOpen(false); }}
          />
          <AdminNavGroup
            label="WEBSITE"
            items={[
              ["content", "Content"],
              ["faq", "FAQ"],
              ["gallery", "Gallery"],
              ["vacancies", "Vacancies"],
              ["news", "News updates"],
              ["partners", "Partners & sponsors"],
              ["hero", "Hero backgrounds"],
            ]}
            section={section}
            onSelect={(next) => { setSection(next); setMobileOpen(false); }}
          />
        </div>
        <div className="admin-sidebar-bottom">
          <span>SIGNED IN</span>
          <strong>{user?.fullName}</strong>
          <small>{user?.role}</small>
          <button className="admin-signout" onClick={() => logout()}>
            Sign out
          </button>
          <Link to="/">View public site ↗</Link>
        </div>
      </aside>
      <main className="admin-main">
        <header className="admin-topbar">
          <button
            type="button"
            className="admin-mobile-menu"
            aria-label="Open admin navigation"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <ActionIcon name="menu" />
          </button>
          <div className="admin-topbar-copy">
            <span className="eyebrow">ETEF DIGITAL PLATFORM</span>
            <h1>{sectionTitle(section)}</h1>
            <p>Manage and publish the federation's public digital content.</p>
          </div>
          <div className="admin-topbar-right">
            <div className="admin-status"><i /> Secure session</div>
            <div className="admin-user-chip">
              <span className="admin-user-avatar">{(user?.fullName || "A").slice(0, 1).toUpperCase()}</span>
              <span>
                <strong>{user?.fullName || "Administrator"}</strong>
                <small>{user?.role || "ADMIN"}</small>
              </span>
            </div>
          </div>
        </header>
        {section === "dashboard" && (
          <Dashboard stats={stats} setSection={setSection} />
        )}{" "}
        {section === "applications" && <Applications notify={notify} />}{" "}
        {section === "faq" && <FaqManager notify={notify} />}{" "}
        {section === "gallery" && <GalleryManager notify={notify} />}{" "}
        {section === "vacancies" && <VacancyManager notify={notify} />}{" "}
        {section === "content" && <ContentManager notify={notify} />}{" "}
        {section === "partners" && <PartnersManager notify={notify} />}{" "}
        {section === "news" && <NewsManager notify={notify} />}{" "}
        {section === "hero" && <HeroManager notify={notify} />}
      </main>
      {toast && <div className="admin-toast">✓ {toast}</div>}
    </div>
  );
}
function AdminNavGroup({
  label,
  items,
  section,
  onSelect,
}: {
  label: string;
  items: [Section, string][];
  section: Section;
  onSelect: (section: Section) => void;
}) {
  return (
    <section className="admin-nav-group">
      <span className="admin-sidebar-label">{label}</span>
      <nav className="admin-nav">
        {items.map(([key, text]) => (
          <button
            key={key}
            type="button"
            className={section === key ? "active" : ""}
            aria-current={section === key ? "page" : undefined}
            onClick={() => onSelect(key)}
          >
            <span className="admin-nav-icon">
              <ActionIcon name={key} />
            </span>
            <span className="admin-nav-text">{text}</span>
          </button>
        ))}
      </nav>
    </section>
  );
}

function sectionTitle(s: Section) {
  return (
    {
      dashboard: "Dashboard",
      applications: "Membership applications",
      faq: "FAQ manager",
      gallery: "Gallery manager",
      vacancies: "Job vacancies",
      content: "Website content",
      partners: "Partners & sponsors",
      news: "News updates",
      hero: "Hero backgrounds",
    } as any
  )[s];
}
function Dashboard({
  stats,
  setSection,
}: {
  stats: any;
  setSection: (s: Section) => void;
}) {
  return (
    <div className="admin-content">
      <div className="admin-stat-grid">
        <div className="admin-stat">
          <strong>{stats.total}</strong>
          <span>Membership applications</span>
          <small>{stats.pending} pending</small>
        </div>
        <div className="admin-stat">
          <strong>{stats.review}</strong>
          <span>Needs review</span>
          <small>Applications in review</small>
        </div>
        <div className="admin-stat">
          <strong>{stats.approved}</strong>
          <span>Approved</span>
          <small>Membership decisions</small>
        </div>
        <div className="admin-stat">
          <strong>{stats.rejected}</strong>
          <span>Rejected</span>
          <small>Closed applications</small>
        </div>
      </div>
      <div className="admin-two-col">
        <section className="admin-panel">
          <div className="panel-heading">
            <div>
              <span className="eyebrow">QUICK ACTIONS</span>
              <h2>Manage public information</h2>
            </div>
          </div>
          <div className="quick-grid">
            <Quick
              title="Review applications"
              text="Check incoming membership registrations."
              onClick={() => setSection("applications")}
            />
            <Quick
              title="Update FAQ"
              text="Add, edit or publish answers."
              onClick={() => setSection("faq")}
            />
            <Quick
              title="Manage gallery"
              text="Create event albums and publish them."
              onClick={() => setSection("gallery")}
            />
            <Quick
              title="Post vacancy"
              text="Publish current job opportunities."
              onClick={() => setSection("vacancies")}
            />
            <Quick
              title="Manage partners"
              text="Add partners and sponsors with logos."
              onClick={() => setSection("partners")}
            />
            <Quick
              title="Manage hero images"
              text="Upload and rotate homepage background images."
              onClick={() => setSection("hero")}
            />
          </div>
        </section>
        <section className="admin-panel">
          <div className="panel-heading">
            <div>
              <span className="eyebrow">SECURITY</span>
              <h2>Protected publishing workspace.</h2>
            </div>
          </div>
          <p className="admin-copy">
            Changes are now sent to PostgreSQL through authenticated API
            requests. Publishing actions require a valid administrator session
            and CSRF token.
          </p>
          <div className="admin-rule">
            <span>01</span>
            <b>Sign in</b>
            <span>→</span>
            <b>Edit</b>
            <span>→</span>
            <b>Publish</b>
          </div>
        </section>
      </div>
    </div>
  );
}
function Quick({
  title,
  text,
  onClick,
}: {
  title: string;
  text: string;
  onClick: () => void;
}) {
  return (
    <button className="quick-action" onClick={onClick}>
      <strong>{title}</strong>
      <span>{text}</span>
      <b>→</b>
    </button>
  );
}
function Applications({ notify }: { notify: (m: string) => void }) {
  const [rows, setRows] = useState<Application[]>([]);
  const [filter, setFilter] = useState("ALL");
  const [sectorFilter, setSectorFilter] = useState("ALL");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selected, setSelected] = useState<Application | null>(null);

  const load = () =>
    api<{ items: Application[] }>(
      `/admin/applications${filter === "ALL" ? "" : `?status=${filter}`}`,
    ).then((r) => {
      setRows(r.items || []);
      setPage(1);
    });

  useEffect(() => {
    load().catch(() => notify("Unable to load applications"));
  }, [filter]);

  useEffect(() => {
    if (!selected) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  const update = async (id: string, status: string) => {
    try {
      await api(`/admin/applications/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ status }),
      });
      notify("Application status updated");
      setSelected((current) =>
        current?.id === id ? { ...current, status } : current,
      );
      await load();
    } catch (e: any) {
      notify(e.message);
    }
  };

  const sectors = useMemo(() => {
    return Array.from(new Set(rows.map((row) => row.transport_sector).filter(Boolean))) as string[];
  }, [rows]);

  const filteredRows = useMemo(() => {
    const term = search.trim().toLowerCase();
    return rows.filter((row) => {
      const matchesSector = sectorFilter === "ALL" || row.transport_sector === sectorFilter;
      if (!term) return matchesSector;
      const haystack = [
        row.reference,
        row.organization_name,
        row.organization_type,
        row.transport_sector,
        row.region,
        row.city,
        row.email,
      ].filter(Boolean).join(" ").toLowerCase();
      return matchesSector && haystack.includes(term);
    });
  }, [rows, search, sectorFilter]);

  useEffect(() => { setPage(1); }, [search, sectorFilter, pageSize]);

  const pageCount = Math.max(1, Math.ceil(filteredRows.length / pageSize));
  const safePage = Math.min(page, pageCount);
  const visibleRows = filteredRows.slice(
    (safePage - 1) * pageSize,
    safePage * pageSize,
  );
  const firstItem = filteredRows.length ? (safePage - 1) * pageSize + 1 : 0;
  const lastItem = Math.min(safePage * pageSize, filteredRows.length);

  const formatDate = (value?: string | null) =>
    value
      ? new Date(value).toLocaleDateString(undefined, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : "—";

  return (
    <div className="admin-content applications-page">
      <div className="admin-toolbar applications-toolbar">
        <div>
          <strong>Membership applications</strong>
          <p>Review complete registration records submitted by organizations.</p>
        </div>
        <div className="applications-toolbar-controls">
          <label className="application-search">
            <span className="search-icon" aria-hidden="true">⌕</span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search organizations, reference, city..."
              aria-label="Search membership applications"
            />
          </label>
          <label className="admin-filter">
            <span>Status</span>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="ALL">All applications</option>
              <option value="PENDING">Pending</option>
              <option value="REVIEW">In review</option>
              <option value="APPROVED">Approved</option>
              <option value="REJECTED">Rejected</option>
            </select>
          </label>
          <label className="admin-filter">
            <span>Sector</span>
            <select value={sectorFilter} onChange={(e) => setSectorFilter(e.target.value)}>
              <option value="ALL">All sectors</option>
              {sectors.map((sector) => <option key={sector} value={sector}>{sector}</option>)}
            </select>
          </label>
        </div>
      </div>

      <section className="admin-panel applications-panel">
        <div className="applications-table-wrap">
          <table className="applications-table">
            <thead>
              <tr>
                <th>Reference</th>
                <th>Organization</th>
                <th>Sector</th>
                <th>Submitted</th>
                <th>Status</th>
                <th>Decision</th>
                <th className="actions-heading">Actions</th>
              </tr>
            </thead>
            <tbody>
              {visibleRows.map((r) => (
                <tr
                  key={r.id}
                  className="application-row"
                  tabIndex={0}
                  onClick={() => setSelected(r)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setSelected(r);
                    }
                  }}
                >
                  <td>
                    <span className="application-reference">{r.reference}</span>
                  </td>
                  <td>
                    <div className="application-org">
                      <span className="application-avatar">
                        {(r.organization_name || "ET").slice(0, 2).toUpperCase()}
                      </span>
                      <span>
                        <strong>{r.organization_name}</strong>
                        <small>{r.organization_type || "Organization"}</small>
                      </span>
                    </div>
                  </td>
                  <td>{r.transport_sector || "—"}</td>
                  <td>{formatDate(r.submitted_at)}</td>
                  <td>
                    <span className={`status-pill status-${r.status.toLowerCase()}`}>
                      {r.status}
                    </span>
                  </td>
                  <td onClick={(event) => event.stopPropagation()}>
                    <select
                      className="mini-select application-status-select"
                      value={r.status}
                      aria-label={`Update status for ${r.organization_name}`}
                      onChange={(e) => update(r.id, e.target.value)}
                    >
                      <option value="PENDING">Pending</option>
                      <option value="REVIEW">Review</option>
                      <option value="APPROVED">Approve</option>
                      <option value="REJECTED">Reject</option>
                    </select>
                  </td>
                  <td className="actions-cell" onClick={(event) => event.stopPropagation()}>
                    <button
                      type="button"
                      className="icon-action view"
                      data-tooltip="View application"
                      aria-label={`View ${r.organization_name}`}
                      onClick={() => setSelected(r)}
                    >
                      <ActionIcon name="view" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {!filteredRows.length && (
          <div className="admin-empty applications-empty">
            <div className="empty-icon">◎</div>
            <strong>{rows.length ? "No matching applications" : "No applications found"}</strong>
            <p>{rows.length ? "Try another search or filter." : "Applications will appear here when organizations submit the membership form."}</p>
          </div>
        )}

        {filteredRows.length > 0 && (
          <div className="pagination-bar">
            <div className="pagination-meta">
              <span className="pagination-summary">
                Showing <strong>{firstItem}</strong>–<strong>{lastItem}</strong> of <strong>{filteredRows.length}</strong>
              </span>
              <label className="page-size">
                Rows
                <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
              </label>
            </div>
            <div className="pagination-controls" aria-label="Pagination">
              <button
                type="button"
                className="pagination-button"
                disabled={safePage === 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
              >
                ← Previous
              </button>
              <div className="pagination-pages">
                {Array.from({ length: pageCount }, (_, index) => index + 1)
                  .filter(
                    (number) =>
                      number === 1 ||
                      number === pageCount ||
                      Math.abs(number - safePage) <= 1,
                  )
                  .map((number, index, numbers) => (
                    <span key={number} className="pagination-page-wrap">
                      {index > 0 && numbers[index - 1] !== number - 1 && (
                        <span className="pagination-ellipsis">…</span>
                      )}
                      <button
                        type="button"
                        className={`pagination-page ${number === safePage ? "active" : ""}`}
                        onClick={() => setPage(number)}
                        aria-current={number === safePage ? "page" : undefined}
                      >
                        {number}
                      </button>
                    </span>
                  ))}
              </div>
              <button
                type="button"
                className="pagination-button"
                disabled={safePage === pageCount}
                onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
              >
                Next →
              </button>
            </div>
          </div>
        )}
      </section>

      {selected && (
        <div
          className="application-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setSelected(null);
          }}
        >
          <section
            className="application-detail-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="application-detail-title"
          >
            <header className="application-modal-header">
              <div>
                <span className="eyebrow">MEMBERSHIP APPLICATION</span>
                <h2 id="application-detail-title">
                  {selected.organization_name}
                </h2>
                <p>{selected.reference}</p>
              </div>
              <button
                type="button"
                className="modal-close"
                aria-label="Close application details"
                onClick={() => setSelected(null)}
              >
                <ActionIcon name="close" />
              </button>
            </header>

            <div className="application-detail-body">
              <div className="application-detail-status">
                <div>
                  <span>Current status</span>
                  <strong className={`status-pill status-${selected.status.toLowerCase()}`}>
                    {selected.status}
                  </strong>
                </div>
                <label>
                  <span>Update status</span>
                  <select
                    className="mini-select"
                    value={selected.status}
                    onChange={(e) => update(selected.id, e.target.value)}
                  >
                    <option value="PENDING">Pending</option>
                    <option value="REVIEW">Review</option>
                    <option value="APPROVED">Approve</option>
                    <option value="REJECTED">Reject</option>
                  </select>
                </label>
              </div>

              <div className="application-detail-grid">
                <ApplicationDetail label="Organization name" value={selected.organization_name} />
                <ApplicationDetail label="Organization type" value={selected.organization_type} />
                <ApplicationDetail label="Transport sector" value={selected.transport_sector} />
                <ApplicationDetail label="Region" value={selected.region} />
                <ApplicationDetail label="City" value={selected.city} />
                <ApplicationDetail label="Sub-city" value={selected.sub_city} />
                <ApplicationDetail label="Woreda" value={selected.woreda} />
                <ApplicationDetail label="Office address" value={selected.office_address} wide />
                <ApplicationDetail label="Office phone" value={selected.phone} />
                <ApplicationDetail label="Organization email" value={selected.email} />
                <ApplicationDetail label="Member count" value={selected.member_count} />
                <ApplicationDetail label="Vehicle count" value={selected.vehicle_count} />
                <ApplicationDetail label="General manager" value={selected.general_manager_name} />
                <ApplicationDetail label="Manager phone" value={selected.general_manager_phone} />
                <ApplicationDetail label="Manager email" value={selected.general_manager_email} />
                <ApplicationDetail
                  label="Federation representative"
                  value={selected.federation_representative_name}
                />
                <ApplicationDetail
                  label="Representative phone"
                  value={selected.federation_representative_phone}
                />
                <ApplicationDetail label="Submitted" value={formatDate(selected.submitted_at)} />
                <ApplicationDetail label="Reviewed" value={formatDate(selected.reviewed_at)} />
              </div>
            </div>

            <footer className="application-modal-footer">
              <span>Click outside or press Esc to close.</span>
              <button
                type="button"
                className="admin-button light"
                onClick={() => setSelected(null)}
              >
                Close details
              </button>
            </footer>
          </section>
        </div>
      )}
    </div>
  );
}

function ApplicationDetail({
  label,
  value,
  wide = false,
}: {
  label: string;
  value?: string | number | null;
  wide?: boolean;
}) {
  return (
    <div className={`application-detail-item ${wide ? "wide" : ""}`}>
      <span>{label}</span>
      <strong>{value === undefined || value === null || value === "" ? "—" : String(value)}</strong>
    </div>
  );
}

function FaqManager({ notify }: { notify: (m: string) => void }) {
  const [items, setItems] = useState<FAQ[]>([]),
    [editing, setEditing] = useState<FAQ | null>(null),
    [qEn, setQEn] = useState(""),
    [aEn, setAEn] = useState(""),
    [qAm, setQAm] = useState(""),
    [aAm, setAAm] = useState("");
  const load = () =>
    api<{ items: FAQ[] }>("/admin/faqs").then((r) => setItems(r.items));
  useEffect(() => {
    load().catch(() => notify("Unable to load FAQs"));
  }, []);
  const reset = () => {
    setEditing(null);
    setQEn("");
    setAEn("");
    setQAm("");
    setAAm("");
  };
  const save = async () => {
    if (!qEn.trim() || !aEn.trim())
      return notify("English question and answer are required");
    try {
      await api(editing ? `/admin/faqs/${editing.id}` : "/admin/faqs", {
        method: editing ? "PATCH" : "POST",
        body: JSON.stringify({
          questionEn: qEn,
          answerEn: aEn,
          questionAm: qAm,
          answerAm: aAm,
          isPublished: editing?.is_published || false,
        }),
      });
      reset();
      notify("FAQ saved");
      load();
    } catch (e: any) {
      notify(e.message);
    }
  };
  return (
    <div className="admin-content">
      <div className="admin-two-col">
        <section className="admin-panel">
          <div className="panel-heading">
            <div>
              <span className="eyebrow">
                {editing ? "EDIT ENTRY" : "NEW ENTRY"}
              </span>
              <h2>{editing ? "Edit FAQ" : "Add FAQ"}</h2>
              <p className="panel-subcopy">
                English is required. Add Amharic so visitors can switch
                languages without duplicating the entry.
              </p>
            </div>
          </div>
          <label className="admin-field">
            <span>Question · English *</span>
            <input value={qEn} onChange={(e) => setQEn(e.target.value)} />
          </label>
          <label className="admin-field">
            <span>Question · አማርኛ</span>
            <input
              value={qAm}
              onChange={(e) => setQAm(e.target.value)}
              dir="auto"
            />
          </label>
          <label className="admin-field">
            <span>Answer · English *</span>
            <textarea value={aEn} onChange={(e) => setAEn(e.target.value)} />
          </label>
          <label className="admin-field">
            <span>Answer · አማርኛ</span>
            <textarea
              value={aAm}
              onChange={(e) => setAAm(e.target.value)}
              dir="auto"
            />
          </label>
          <div className="admin-actions">
            <button className="admin-button dark" onClick={save}>
              {editing ? "Save changes" : "Add FAQ"}
            </button>
            {editing && (
              <button className="admin-button light" onClick={reset}>
                Cancel
              </button>
            )}
          </div>
        </section>
        <section className="admin-panel">
          <div className="panel-heading">
            <div>
              <span className="eyebrow">DATABASE CONTENT</span>
              <h2>FAQ entries</h2>
            </div>
          </div>
          {items.map((x) => (
            <div className="content-row" key={x.id}>
              <div>
                <strong>{x.question_en}</strong>
                <p>{x.question_am || "No Amharic translation yet."}</p>
                <p>{x.answer_en}</p>
                <small>
                  {x.answer_am ? "EN + አማርኛ" : "English only"} ·{" "}
                  {x.is_published ? "Published" : "Draft"}
                </small>
              </div>
              <div className="row-actions">
                <button
                  onClick={() => {
                    setEditing(x);
                    setQEn(x.question_en);
                    setAEn(x.answer_en);
                    setQAm(x.question_am || "");
                    setAAm(x.answer_am || "");
                  }}
                >
                  <ActionIcon name="edit" />
                  <span className="sr-only">Edit FAQ</span>
                </button>
                <button
                  onClick={async () => {
                    try {
                      await api(`/admin/faqs/${x.id}`, {
                        method: "PATCH",
                        body: JSON.stringify({ isPublished: !x.is_published }),
                      });
                      notify(
                        x.is_published ? "FAQ unpublished" : "FAQ published",
                      );
                      load();
                    } catch (e: any) {
                      notify(e.message);
                    }
                  }}
                >
                  {x.is_published ? "Unpublish" : "Publish"}
                </button>
                <button
                  className="danger-text"
                  onClick={async () => {
                    if (!window.confirm("Delete this FAQ?")) return;
                    try {
                      await api(`/admin/faqs/${x.id}`, { method: "DELETE" });
                      notify("FAQ deleted");
                      load();
                    } catch (e: any) {
                      notify(e.message);
                    }
                  }}
                >
                  <ActionIcon name="delete" />
                  <span className="sr-only">Delete FAQ</span>
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
function GalleryManager({ notify }: { notify: (m: string) => void }) {
  const [items, setItems] = useState<Album[]>([]),
    [title, setTitle] = useState(""),
    [selected, setSelected] = useState<Album | null>(null),
    [photos, setPhotos] = useState<Photo[]>([]),
    [files, setFiles] = useState<File[]>([]),
    [loading, setLoading] = useState(false),
    [meta, setMeta] = useState({
      titleEn: "",
      titleAm: "",
      descriptionEn: "",
      descriptionAm: "",
      eventDate: "",
    });
  const load = () =>
    api<{ items: Album[] }>("/admin/gallery/albums").then((r) =>
      setItems(r.items),
    );
  useEffect(() => {
    load().catch(() => notify("Unable to load gallery"));
  }, []);
  const openAlbum = async (album: Album) => {
    setSelected(album);
    setFiles([]);
    setMeta({
      titleEn: album.title_en || "",
      titleAm: album.title_am || "",
      descriptionEn: album.description_en || "",
      descriptionAm: album.description_am || "",
      eventDate: album.event_date || "",
    });
    try {
      const r = await api<{ items: Photo[] }>(
        `/admin/gallery/albums/${album.id}/items`,
      );
      setPhotos(r.items);
    } catch (e: any) {
      notify(e.message);
    }
  };
  const saveMeta = async () => {
    if (!selected || !meta.titleEn.trim())
      return notify("English album title is required");
    try {
      await api(`/admin/gallery/albums/${selected.id}`, {
        method: "PATCH",
        body: JSON.stringify(meta),
      });
      notify("Album details saved");
      load();
    } catch (e: any) {
      notify(e.message);
    }
  };
  const add = async () => {
    if (!title.trim()) return notify("Album title is required");
    try {
      await api("/admin/gallery/albums", {
        method: "POST",
        body: JSON.stringify({ titleEn: title, isPublished: false }),
      });
      setTitle("");
      notify("Album created");
      load();
    } catch (e: any) {
      notify(e.message);
    }
  };
  const upload = async () => {
    if (!selected || !files.length) return notify("Select one or more images");
    setLoading(true);
    try {
      const form = new FormData();
      files.forEach((file) => form.append("photos", file));
      const r = await api<{ items: Photo[]; skipped: number }>(
        `/admin/gallery/albums/${selected.id}/items`,
        { method: "POST", body: form },
      );
      setFiles([]);
      notify(
        `${r.items.length} image${r.items.length === 1 ? "" : "s"} uploaded${r.skipped ? ` · ${r.skipped} skipped` : ""}`,
      );
      await openAlbum(selected);
      await load();
    } catch (e: any) {
      notify(e.message);
    } finally {
      setLoading(false);
    }
  };
  const remove = async (photo: Photo) => {
    if (!selected || !window.confirm("Delete this photo permanently?")) return;
    try {
      await api(`/admin/gallery/albums/${selected.id}/items/${photo.id}`, {
        method: "DELETE",
      });
      notify("Photo deleted");
      openAlbum(selected);
      load();
    } catch (e: any) {
      notify(e.message);
    }
  };
  const cover = async (photo: Photo) => {
    if (!selected) return;
    try {
      await api(
        `/admin/gallery/albums/${selected.id}/items/${photo.id}/cover`,
        { method: "POST", body: JSON.stringify({}) },
      );
      notify("Album cover updated");
      openAlbum(selected);
      load();
    } catch (e: any) {
      notify(e.message);
    }
  };
  const toggle = async (album: Album) => {
    try {
      await api(`/admin/gallery/albums/${album.id}`, {
        method: "PATCH",
        body: JSON.stringify({ isPublished: !album.is_published }),
      });
      notify(album.is_published ? "Album unpublished" : "Album published");
      load();
    } catch (e: any) {
      notify(e.message);
    }
  };
  const deleteAlbum = async (album: Album) => {
    if (!window.confirm(`Delete “${album.title_en}” and all its photos?`))
      return;
    try {
      await api(`/admin/gallery/albums/${album.id}`, { method: "DELETE" });
      notify("Album deleted");
      if (selected?.id === album.id) {
        setSelected(null);
        setPhotos([]);
      }
      load();
    } catch (e: any) {
      notify(e.message);
    }
  };
  return (
    <div className="admin-content">
      <section className="admin-panel">
        <div className="panel-heading">
          <div>
            <span className="eyebrow">EVENT ALBUMS</span>
            <h2>Gallery library</h2>
            <p className="panel-subcopy">
              Upload optimized JPEG, PNG or WebP photographs. Maximum 10 files
              per upload, 5 MB each.
            </p>
          </div>
          <div className="inline-create">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="New album title"
            />
            <button className="admin-button dark" onClick={add}>
              Create album
            </button>
          </div>
        </div>
        <div className="album-admin-grid">
          {items.map((x) => (
            <article
              className={`album-admin-card ${selected?.id === x.id ? "selected" : ""}`}
              key={x.id}
            >
              <button
                className="album-admin-art-button"
                onClick={() => openAlbum(x)}
                aria-label={`Open ${x.title_en}`}
              >
                <div className="album-admin-art">
                  {x.cover_image_url ? (
                    <img src={`${API_ORIGIN}${x.cover_image_url}`} alt="" />
                  ) : (
                    <span>ETEF</span>
                  )}
                </div>
              </button>
              <div>
                <strong>{x.title_en}</strong>
                <p>
                  {x.photo_count} photos ·{" "}
                  {x.is_published ? "Published" : "Draft"}
                </p>
              </div>
              <div className="row-actions">
                <button className="icon-action view" data-tooltip="View photos" aria-label={`View photos in ${x.title_en}`} onClick={() => openAlbum(x)}><ActionIcon name="view" /></button>
                <button onClick={() => toggle(x)}>
                  {x.is_published ? "Unpublish" : "Publish"}
                </button>
                <button className="icon-action danger" data-tooltip="Delete album" aria-label={`Delete ${x.title_en}`} onClick={() => deleteAlbum(x)}>
                  <ActionIcon name="delete" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
      {selected && (
        <section className="admin-panel gallery-upload-panel">
          <div className="panel-heading">
            <div>
              <span className="eyebrow">PHOTO LIBRARY</span>
              <h2>{selected.title_en}</h2>
              <p className="panel-subcopy">
                Files are stored with randomized server filenames. SVG and
                executable content are rejected.
              </p>
            </div>
            <button
              className="admin-button light"
              onClick={() => {
                setSelected(null);
                setPhotos([]);
              }}
            >
              Close
            </button>
          </div>
          <div className="admin-two-col gallery-meta-editor">
            <label className="admin-field">
              <span>Album title · English *</span>
              <input
                value={meta.titleEn}
                onChange={(e) =>
                  setMeta((m) => ({ ...m, titleEn: e.target.value }))
                }
              />
            </label>
            <label className="admin-field">
              <span>Album title · አማርኛ</span>
              <input
                value={meta.titleAm}
                onChange={(e) =>
                  setMeta((m) => ({ ...m, titleAm: e.target.value }))
                }
                dir="auto"
              />
            </label>
            <label className="admin-field">
              <span>Description · English</span>
              <textarea
                value={meta.descriptionEn}
                onChange={(e) =>
                  setMeta((m) => ({ ...m, descriptionEn: e.target.value }))
                }
              />
            </label>
            <label className="admin-field">
              <span>Description · አማርኛ</span>
              <textarea
                value={meta.descriptionAm}
                onChange={(e) =>
                  setMeta((m) => ({ ...m, descriptionAm: e.target.value }))
                }
                dir="auto"
              />
            </label>
            <label className="admin-field">
              <span>Event date</span>
              <input
                type="date"
                value={meta.eventDate}
                onChange={(e) =>
                  setMeta((m) => ({ ...m, eventDate: e.target.value }))
                }
              />
            </label>
            <button className="admin-button dark" onClick={saveMeta}>
              Save album details
            </button>
          </div>
          <div className="gallery-dropzone">
            <input
              id="gallery-file-input"
              type="file"
              accept="image/jpeg,image/png,image/webp"
              multiple
              onChange={(e) => setFiles(Array.from(e.target.files || []))}
            />
            <label htmlFor="gallery-file-input">
              <strong>Choose photographs</strong>
              <span>JPEG, PNG or WebP · up to 10 files · 5 MB each</span>
            </label>
            {files.length > 0 && (
              <div className="selected-files">
                {files.map((f) => (
                  <span key={`${f.name}-${f.size}`}>{f.name}</span>
                ))}
              </div>
            )}
            <button
              className="admin-button dark"
              disabled={loading || !files.length}
              onClick={upload}
            >
              {loading
                ? "Uploading…"
                : `Upload ${files.length || ""} image${files.length === 1 ? "" : "s"}`}
            </button>
          </div>
          <div className="photo-grid">
            {photos.map((photo) => (
              <article className="photo-card" key={photo.id}>
                <img
                  src={`${API_ORIGIN}${photo.image_url}`}
                  alt={photo.title_en || "ETEF gallery photograph"}
                />
                <div className="photo-card-meta">
                  <div>
                    <strong>
                      {selected.cover_image_url === photo.image_url
                        ? "Cover image"
                        : "Gallery image"}
                    </strong>
                    <small>{photo.sort_order + 1}</small>
                  </div>
                  <div className="row-actions">
                    <button
                      onClick={() => cover(photo)}
                      disabled={selected.cover_image_url === photo.image_url}
                    >
                      {selected.cover_image_url === photo.image_url
                        ? "Cover"
                        : "Set cover"}
                    </button>
                    <button className="icon-action danger" data-tooltip="Delete photo" aria-label="Delete photo" onClick={() => remove(photo)}>
                      <ActionIcon name="delete" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
            {!photos.length && (
              <div className="admin-empty">
                No photographs in this album yet.
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}

type Photo = {
  id: string;
  album_id: string;
  title_en?: string;
  title_am?: string;
  image_url: string;
  sort_order: number;
  created_at: string;
};
function VacancyManager({ notify }: { notify: (m: string) => void }) {
  const [items, setItems] = useState<Vacancy[]>([]),
    [editing, setEditing] = useState<Vacancy | null>(null),
    [form, setForm] = useState({
      titleEn: "",
      titleAm: "",
      descriptionEn: "",
      descriptionAm: "",
      requirementsEn: "",
      requirementsAm: "",
      location: "",
      employmentType: "",
      closingDate: "",
    });
  const load = () =>
    api<{ items: Vacancy[] }>("/admin/vacancies").then((r) =>
      setItems(r.items),
    );
  useEffect(() => {
    load().catch(() => notify("Unable to load vacancies"));
  }, []);
  const reset = () => {
    setEditing(null);
    setForm({
      titleEn: "",
      titleAm: "",
      descriptionEn: "",
      descriptionAm: "",
      requirementsEn: "",
      requirementsAm: "",
      location: "",
      employmentType: "",
      closingDate: "",
    });
  };
  const save = async () => {
    if (!form.titleEn.trim()) return notify("English job title is required");
    try {
      await api(
        editing ? `/admin/vacancies/${editing.id}` : "/admin/vacancies",
        { method: editing ? "PATCH" : "POST", body: JSON.stringify(form) },
      );
      notify(editing ? "Vacancy updated" : "Vacancy created");
      reset();
      load();
    } catch (e: any) {
      notify(e.message);
    }
  };
  return (
    <div className="admin-content">
      <section className="admin-panel">
        <div className="panel-heading">
          <div>
            <span className="eyebrow">JOB VACANCIES</span>
            <h2>{editing ? "Edit opportunity" : "Create opportunity"}</h2>
            <p className="panel-subcopy">
              English title is required; Amharic fields are optional and shown
              automatically when visitors select አማርኛ.
            </p>
          </div>
        </div>
        <div className="form-row-admin">
          <label className="admin-field">
            <span>Title · English *</span>
            <input
              value={form.titleEn}
              onChange={(e) =>
                setForm((f) => ({ ...f, titleEn: e.target.value }))
              }
            />
          </label>
          <label className="admin-field">
            <span>Title · አማርኛ</span>
            <input
              value={form.titleAm}
              onChange={(e) =>
                setForm((f) => ({ ...f, titleAm: e.target.value }))
              }
              dir="auto"
            />
          </label>
          <label className="admin-field">
            <span>Location</span>
            <input
              value={form.location}
              onChange={(e) =>
                setForm((f) => ({ ...f, location: e.target.value }))
              }
            />
          </label>
          <label className="admin-field">
            <span>Employment type</span>
            <input
              value={form.employmentType}
              onChange={(e) =>
                setForm((f) => ({ ...f, employmentType: e.target.value }))
              }
            />
          </label>
          <label className="admin-field">
            <span>Deadline</span>
            <input
              type="date"
              value={form.closingDate}
              onChange={(e) =>
                setForm((f) => ({ ...f, closingDate: e.target.value }))
              }
            />
          </label>
        </div>
        <div className="admin-two-col">
          <label className="admin-field">
            <span>Description · English</span>
            <textarea
              value={form.descriptionEn}
              onChange={(e) =>
                setForm((f) => ({ ...f, descriptionEn: e.target.value }))
              }
            />
          </label>
          <label className="admin-field">
            <span>Description · አማርኛ</span>
            <textarea
              value={form.descriptionAm}
              onChange={(e) =>
                setForm((f) => ({ ...f, descriptionAm: e.target.value }))
              }
              dir="auto"
            />
          </label>
          <label className="admin-field">
            <span>Requirements · English</span>
            <textarea
              value={form.requirementsEn}
              onChange={(e) =>
                setForm((f) => ({ ...f, requirementsEn: e.target.value }))
              }
            />
          </label>
          <label className="admin-field">
            <span>Requirements · አማርኛ</span>
            <textarea
              value={form.requirementsAm}
              onChange={(e) =>
                setForm((f) => ({ ...f, requirementsAm: e.target.value }))
              }
              dir="auto"
            />
          </label>
        </div>
        <div className="admin-actions">
          <button className="admin-button dark" onClick={save}>
            {editing ? "Save changes" : "Add vacancy"}
          </button>
          {editing && (
            <button className="admin-button light" onClick={reset}>
              Cancel
            </button>
          )}
        </div>
      </section>
      <section className="admin-panel table-panel">
        <table>
          <thead>
            <tr>
              <th>Position</th>
              <th>Location</th>
              <th>Deadline</th>
              <th>Language</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((x) => (
              <tr key={x.id}>
                <td>
                  <strong>{x.title_en}</strong>
                  <br />
                  <small>{x.title_am || "English only"}</small>
                </td>
                <td>{x.location || "—"}</td>
                <td>{x.closing_date || "Open"}</td>
                <td>
                  {x.title_am || x.description_am ? "EN + አማርኛ" : "English"}
                </td>
                <td>
                  <span
                    className={`status-pill ${x.status === "CLOSED" ? "closed" : ""}`}
                  >
                    {x.status}
                  </span>
                </td>
                <td>
                  <div className="row-actions">
                    <button
                      onClick={() => {
                        setEditing(x);
                        setForm({
                          titleEn: x.title_en || "",
                          titleAm: x.title_am || "",
                          descriptionEn: x.description_en || "",
                          descriptionAm: x.description_am || "",
                          requirementsEn: x.requirements_en || "",
                          requirementsAm: x.requirements_am || "",
                          location: x.location || "",
                          employmentType: x.employment_type || "",
                          closingDate: x.closing_date || "",
                        });
                      }}
                    >
                      <ActionIcon name="edit" />
                      <span className="sr-only">Edit vacancy</span>
                    </button>
                    <button
                      onClick={async () => {
                        const status = x.status === "OPEN" ? "CLOSED" : "OPEN";
                        try {
                          await api(`/admin/vacancies/${x.id}`, {
                            method: "PATCH",
                            body: JSON.stringify({ status }),
                          });
                          notify("Vacancy status updated");
                          load();
                        } catch (e: any) {
                          notify(e.message);
                        }
                      }}
                    >
                      {x.status === "OPEN" ? "Close" : "Reopen"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!items.length && (
          <div className="admin-empty">No vacancies found.</div>
        )}
      </section>
    </div>
  );
}
function PartnersManager({ notify }: { notify: (m: string) => void }) {
  const blank = {
    nameEn: "",
    nameAm: "",
    descriptionEn: "",
    descriptionAm: "",
    category: "PARTNER",
    websiteUrl: "",
    isPublished: true,
    sortOrder: 0,
  };
  const [items, setItems] = useState<any[]>([]),
    [editing, setEditing] = useState<any | null>(null),
    [form, setForm] = useState<any>(blank),
    [logo, setLogo] = useState<File | null>(null),
    [saving, setSaving] = useState(false);
  const load = () =>
    api<{ items: any[] }>("/admin/partners").then((r) => setItems(r.items));
  useEffect(() => {
    load().catch(() => notify("Unable to load partners"));
  }, []);
  const reset = () => {
    setEditing(null);
    setForm(blank);
    setLogo(null);
  };
  const save = async () => {
    if (!form.nameEn.trim())
      return notify("English organization name is required");
    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => fd.append(k, String(v)));
    if (logo) fd.append("logo", logo);
    setSaving(true);
    try {
      await api(editing ? `/admin/partners/${editing.id}` : "/admin/partners", {
        method: editing ? "PATCH" : "POST",
        body: fd,
      });
      notify(editing ? "Partner updated" : "Partner added");
      reset();
      await load();
    } catch (e: any) {
      notify(e.message);
    } finally {
      setSaving(false);
    }
  };
  return (
    <div className="admin-content">
      <div className="admin-two-col">
        <section className="admin-panel">
          <div className="panel-heading">
            <div>
              <span className="eyebrow">
                {editing ? "EDIT ORGANIZATION" : "NEW ORGANIZATION"}
              </span>
              <h2>
                {editing ? "Edit partner or sponsor" : "Add partner or sponsor"}
              </h2>
              <p className="panel-subcopy">
                Maintain the organizations ETEF works with and the organizations
                that sponsor or support its activities.
              </p>
            </div>
          </div>
          <label className="admin-field">
            <span>Organization name · English *</span>
            <input
              value={form.nameEn}
              onChange={(e) => setForm({ ...form, nameEn: e.target.value })}
            />
          </label>
          <label className="admin-field">
            <span>Organization name · አማርኛ</span>
            <input
              dir="auto"
              value={form.nameAm}
              onChange={(e) => setForm({ ...form, nameAm: e.target.value })}
            />
          </label>
          <label className="admin-field">
            <span>Type</span>
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
              <option value="PARTNER">Partner</option>
              <option value="SPONSOR">Sponsor</option>
              <option value="BOTH">Partner & Sponsor</option>
            </select>
          </label>
          <label className="admin-field">
            <span>Website URL</span>
            <input
              placeholder="https://example.org"
              value={form.websiteUrl}
              onChange={(e) => setForm({ ...form, websiteUrl: e.target.value })}
            />
          </label>
          <label className="admin-field">
            <span>Description · English</span>
            <textarea
              value={form.descriptionEn}
              onChange={(e) =>
                setForm({ ...form, descriptionEn: e.target.value })
              }
            />
          </label>
          <label className="admin-field">
            <span>Description · አማርኛ</span>
            <textarea
              dir="auto"
              value={form.descriptionAm}
              onChange={(e) =>
                setForm({ ...form, descriptionAm: e.target.value })
              }
            />
          </label>
          <label className="admin-field">
            <span>Logo · JPEG / PNG / WebP · max 2 MB</span>
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={(e) => setLogo(e.target.files?.[0] || null)}
            />
          </label>
          <label className="admin-field">
            <span>Display order</span>
            <input
              type="number"
              min="0"
              value={form.sortOrder}
              onChange={(e) =>
                setForm({ ...form, sortOrder: Number(e.target.value) || 0 })
              }
            />
          </label>
          <label className="admin-check">
            <input
              type="checkbox"
              checked={form.isPublished}
              onChange={(e) =>
                setForm({ ...form, isPublished: e.target.checked })
              }
            />
            <span>Published on public website</span>
          </label>
          <div className="admin-actions">
            <button
              className="admin-button dark"
              disabled={saving}
              onClick={save}
            >
              {saving
                ? "Saving…"
                : editing
                  ? "Save changes"
                  : "Add organization"}
            </button>
            {editing && (
              <button className="admin-button light" onClick={reset}>
                Cancel
              </button>
            )}
          </div>
        </section>
        <section className="admin-panel">
          <div className="panel-heading">
            <div>
              <span className="eyebrow">DATABASE CONTENT</span>
              <h2>Partners & sponsors</h2>
            </div>
          </div>
          {items.map((x) => (
            <div className="partner-admin-row" key={x.id}>
              {x.logo_url ? (
                <img src={`${API_ORIGIN}${x.logo_url}`} alt="" />
              ) : (
                <div className="partner-admin-fallback">
                  {x.name_en.slice(0, 2).toUpperCase()}
                </div>
              )}
              <div className="partner-admin-copy">
                <strong>{x.name_en}</strong>
                <small>
                  {x.category} · {x.is_published ? "Published" : "Draft"}
                </small>
                <p>{x.name_am || "No Amharic translation"}</p>
              </div>
              <div className="row-actions">
                <button
                  onClick={() => {
                    setEditing(x);
                    setForm({
                      nameEn: x.name_en,
                      nameAm: x.name_am || "",
                      descriptionEn: x.description_en || "",
                      descriptionAm: x.description_am || "",
                      category: x.category,
                      websiteUrl: x.website_url || "",
                      isPublished: x.is_published,
                      sortOrder: x.sort_order,
                    });
                    setLogo(null);
                  }}
                >
                  <ActionIcon name="edit" />
                  <span className="sr-only">Edit partner</span>
                </button>
                <button
                  onClick={async () => {
                    try {
                      await api(`/admin/partners/${x.id}`, {
                        method: "PATCH",
                        body: JSON.stringify({
                          nameEn: x.name_en,
                          nameAm: x.name_am,
                          descriptionEn: x.description_en,
                          descriptionAm: x.description_am,
                          category: x.category,
                          websiteUrl: x.website_url,
                          isPublished: !x.is_published,
                          sortOrder: x.sort_order,
                        }),
                      });
                      notify(
                        x.is_published
                          ? "Partner unpublished"
                          : "Partner published",
                      );
                      load();
                    } catch (e: any) {
                      notify(e.message);
                    }
                  }}
                >
                  {x.is_published ? "Unpublish" : "Publish"}
                </button>
                <button
                  className="danger-text"
                  onClick={async () => {
                    if (!window.confirm(`Delete ${x.name_en}?`)) return;
                    try {
                      await api(`/admin/partners/${x.id}`, {
                        method: "DELETE",
                      });
                      notify("Partner deleted");
                      load();
                    } catch (e: any) {
                      notify(e.message);
                    }
                  }}
                >
                  <ActionIcon name="delete" />
                  <span className="sr-only">Delete partner</span>
                </button>
              </div>
            </div>
          ))}
          {!items.length && (
            <div className="admin-empty">
              No partners or sponsors added yet.
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function NewsManager({ notify }: { notify: (m: string) => void }) {
  const [items, setItems] = useState<any[]>([]);
  const [editing, setEditing] = useState<any>(null);
  const [form, setForm] = useState<any>({
    titleEn: "",
    titleAm: "",
    excerptEn: "",
    excerptAm: "",
    bodyEn: "",
    bodyAm: "",
    isPublished: false,
  });
  const load = () =>
    api<{ items: any[] }>("/admin/news").then((r) => setItems(r.items));
  useEffect(() => {
    load().catch(() => notify("Unable to load news"));
  }, []);
  const reset = () => {
    setEditing(null);
    setForm({
      titleEn: "",
      titleAm: "",
      excerptEn: "",
      excerptAm: "",
      bodyEn: "",
      bodyAm: "",
      isPublished: false,
    });
  };
  const save = async () => {
    try {
      await api(editing ? `/admin/news/${editing.id}` : "/admin/news", {
        method: editing ? "PATCH" : "POST",
        body: JSON.stringify(form),
      });
      notify("News saved");
      reset();
      load();
    } catch (e: any) {
      notify(e.message);
    }
  };
  return (
    <div className="admin-content">
      <div className="admin-two-col">
        <section className="admin-panel">
          <div className="panel-heading">
            <h2>{editing ? "Edit news" : "Publish news update"}</h2>
          </div>
          {[
            "titleEn",
            "titleAm",
            "excerptEn",
            "excerptAm",
            "bodyEn",
            "bodyAm",
          ].map((k) => (
            <label className="admin-field" key={k}>
              <span>{k}</span>
              <textarea
                value={form[k]}
                onChange={(e) => setForm({ ...form, [k]: e.target.value })}
              />
            </label>
          ))}
          <label className="admin-checkbox">
            <input
              type="checkbox"
              checked={form.isPublished}
              onChange={(e) =>
                setForm({ ...form, isPublished: e.target.checked })
              }
            />{" "}
            Published
          </label>
          <div className="admin-actions">
            <button className="admin-button dark" onClick={save}>
              Save news
            </button>
            {editing && (
              <button className="admin-button light" onClick={reset}>
                Cancel
              </button>
            )}
          </div>
        </section>
        <section className="admin-panel">
          <h2>News archive</h2>
          {items.map((x) => (
            <div className="content-row" key={x.id}>
              <div>
                <strong>{x.title_en}</strong>
                <small>{x.is_published ? "Published" : "Draft"}</small>
              </div>
              <div className="row-actions">
                <button
                  onClick={() => {
                    setEditing(x);
                    setForm({
                      titleEn: x.title_en,
                      titleAm: x.title_am || "",
                      excerptEn: x.excerpt_en || "",
                      excerptAm: x.excerpt_am || "",
                      bodyEn: x.body_en || "",
                      bodyAm: x.body_am || "",
                      isPublished: x.is_published,
                    });
                  }}
                >
                  <ActionIcon name="edit" />
                  <span className="sr-only">Edit news</span>
                </button>
                <button
                  onClick={async () => {
                    if (confirm("Delete this news post?")) {
                      await api(`/admin/news/${x.id}`, { method: "DELETE" });
                      load();
                    }
                  }}
                >
                  <ActionIcon name="delete" />
                  <span className="sr-only">Delete news</span>
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

function HeroManager({ notify }: { notify: (m: string) => void }) {
  const [items, setItems] = useState<any[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [altEn, setAltEn] = useState("");
  const [altAm, setAltAm] = useState("");
  const [sortOrder, setSortOrder] = useState(0);
  const [saving, setSaving] = useState(false);
  const load = () =>
    api<{ items: any[] }>("/admin/hero-slides").then((r) => setItems(r.items));
  useEffect(() => {
    load().catch(() => notify("Unable to load hero images"));
  }, []);
  const reset = () => {
    setFile(null);
    setAltEn("");
    setAltAm("");
    setSortOrder(0);
    const input = document.getElementById(
      "hero-file-input",
    ) as HTMLInputElement | null;
    if (input) input.value = "";
  };
  const add = async () => {
    if (!file) return notify("Select a hero background image");
    const fd = new FormData();
    fd.append("image", file);
    fd.append("altEn", altEn);
    fd.append("altAm", altAm);
    fd.append("sortOrder", String(sortOrder));
    fd.append("isPublished", "true");
    try {
      setSaving(true);
      await api("/admin/hero-slides", { method: "POST", body: fd });
      notify("Hero image uploaded");
      reset();
      load();
    } catch (e: any) {
      notify(e.message);
    } finally {
      setSaving(false);
    }
  };
  return (
    <div className="admin-content">
      <div className="admin-two-col">
        <section className="admin-panel">
          <div className="panel-heading">
            <div>
              <span className="eyebrow">HOMEPAGE HERO</span>
              <h2>Manage background images</h2>
              <p className="panel-subcopy">
                Upload approved JPEG, PNG or WebP images. Published images
                rotate automatically every 7 seconds on the homepage.
              </p>
            </div>
          </div>
          <label className="admin-field">
            <span>Background image · max 5 MB *</span>
            <input
              id="hero-file-input"
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </label>
          <label className="admin-field">
            <span>Accessibility text · English</span>
            <input value={altEn} onChange={(e) => setAltEn(e.target.value)} />
          </label>
          <label className="admin-field">
            <span>Accessibility text · አማርኛ</span>
            <input
              dir="auto"
              value={altAm}
              onChange={(e) => setAltAm(e.target.value)}
            />
          </label>
          <label className="admin-field">
            <span>Display order</span>
            <input
              type="number"
              min="0"
              value={sortOrder}
              onChange={(e) => setSortOrder(Number(e.target.value) || 0)}
            />
          </label>
          <button className="admin-button dark" disabled={saving} onClick={add}>
            {saving ? "Uploading…" : "Upload hero image"}
          </button>
        </section>
        <section className="admin-panel">
          <div className="panel-heading">
            <div>
              <span className="eyebrow">PUBLISHED ROTATION</span>
              <h2>Homepage hero gallery</h2>
            </div>
          </div>
          {items.map((x) => (
            <div className="hero-admin-row" key={x.id}>
              <img src={`${API_ORIGIN}${x.image_url}`} alt="" />
              <div className="hero-admin-fields">
                <strong>{x.is_published ? "Published" : "Draft"}</strong>
                <label>
                  <span>Order</span>
                  <input
                    type="number"
                    min="0"
                    value={x.sort_order}
                    onChange={(e) =>
                      setItems((rows) =>
                        rows.map((r) =>
                          r.id === x.id
                            ? { ...r, sort_order: Number(e.target.value) || 0 }
                            : r,
                        ),
                      )
                    }
                  />
                </label>
                <label>
                  <span>Alt text</span>
                  <input
                    value={x.alt_en || ""}
                    onChange={(e) =>
                      setItems((rows) =>
                        rows.map((r) =>
                          r.id === x.id ? { ...r, alt_en: e.target.value } : r,
                        ),
                      )
                    }
                  />
                </label>
              </div>
              <div className="row-actions">
                <button
                  onClick={async () => {
                    try {
                      await api(`/admin/hero-slides/${x.id}`, {
                        method: "PATCH",
                        body: JSON.stringify({
                          isPublished: x.is_published,
                          sortOrder: x.sort_order,
                          altEn: x.alt_en || "",
                          altAm: x.alt_am || "",
                        }),
                      });
                      notify("Hero image settings saved");
                      load();
                    } catch (e: any) {
                      notify(e.message);
                    }
                  }}
                >
                  Save
                </button>
                <button
                  onClick={async () => {
                    try {
                      await api(`/admin/hero-slides/${x.id}`, {
                        method: "PATCH",
                        body: JSON.stringify({
                          isPublished: !x.is_published,
                          sortOrder: x.sort_order,
                          altEn: x.alt_en || "",
                          altAm: x.alt_am || "",
                        }),
                      });
                      notify(
                        x.is_published
                          ? "Hero image unpublished"
                          : "Hero image published",
                      );
                      load();
                    } catch (e: any) {
                      notify(e.message);
                    }
                  }}
                >
                  {x.is_published ? "Unpublish" : "Publish"}
                </button>
                <button
                  type="button"
                  className="icon-action danger"
                  data-tooltip="Delete hero image"
                  aria-label="Delete hero image"
                  onClick={async () => {
                    if (!confirm("Delete this hero image?")) return;
                    try {
                      await api(`/admin/hero-slides/${x.id}`, {
                        method: "DELETE",
                      });
                      notify("Hero image deleted");
                      load();
                    } catch (e: any) {
                      notify(e.message);
                    }
                  }}
                >
                  <ActionIcon name="delete" />
                </button>
              </div>
            </div>
          ))}
          {!items.length && (
            <div className="admin-empty">
              No hero images uploaded yet. The existing hero design remains
              visible until images are added.
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function ContentManager({ notify }: { notify: (m: string) => void }) {
  const [settings, setSettings] = useState<Record<string, string>>({
    organization_email: "",
    facebook_url: "",
    telegram_url: "",
    linkedin_url: "",
    youtube_url: "",
  });
  const [items, setItems] = useState<any[]>([]);
  const [active, setActive] = useState("about");
  const [form, setForm] = useState({
    titleEn: "",
    titleAm: "",
    bodyEn: "",
    bodyAm: "",
    isPublished: true,
  });
  const load = () =>
    Promise.all([
      api<{ settings: Record<string, string> }>("/admin/settings"),
      api<{ items: any[] }>("/admin/content"),
    ]).then(([s, c]) => {
      setSettings((x) => ({ ...x, ...s.settings }));
      setItems(c.items);
      const item = c.items.find((x) => x.content_key === active) || c.items[0];
      if (item)
        setForm({
          titleEn: item.title_en || "",
          titleAm: item.title_am || "",
          bodyEn: item.body_en || "",
          bodyAm: item.body_am || "",
          isPublished: item.is_published,
        });
    });
  useEffect(() => {
    load().catch(() => notify("Unable to load website content"));
  }, []);
  const select = (key: string) => {
    setActive(key);
    const item = items.find((x) => x.content_key === key);
    if (item)
      setForm({
        titleEn: item.title_en || "",
        titleAm: item.title_am || "",
        bodyEn: item.body_en || "",
        bodyAm: item.body_am || "",
        isPublished: item.is_published,
      });
  };
  const saveContent = async () => {
    if (!form.titleEn.trim() || !form.bodyEn.trim())
      return notify("English title and body are required");
    try {
      await api(`/admin/content/${active}`, {
        method: "PATCH",
        body: JSON.stringify(form),
      });
      notify(`${active} content saved`);
      load();
    } catch (e: any) {
      notify(e.message);
    }
  };
  const saveSettings = async () => {
    try {
      await api("/admin/settings", {
        method: "PUT",
        body: JSON.stringify(settings),
      });
      notify("Site settings saved");
    } catch (e: any) {
      notify(e.message);
    }
  };
  return (
    <div className="admin-content">
      <section className="admin-panel">
        <div className="panel-heading">
          <div>
            <span className="eyebrow">PUBLIC CONTENT</span>
            <h2>Bilingual institutional pages</h2>
            <p className="panel-subcopy">
              Manage the approved About, Vision and Mission content in English
              and Amharic.
            </p>
          </div>
        </div>
        <div className="row-actions content-tabs">
          {["about", "vision", "mission"].map((k) => (
            <button
              className={active === k ? "active" : ""}
              key={k}
              onClick={() => select(k)}
            >
              {k[0].toUpperCase() + k.slice(1)}
            </button>
          ))}
        </div>
        <div className="admin-two-col">
          <label className="admin-field">
            <span>Title · English *</span>
            <input
              value={form.titleEn}
              onChange={(e) =>
                setForm((f) => ({ ...f, titleEn: e.target.value }))
              }
            />
          </label>
          <label className="admin-field">
            <span>Title · አማርኛ</span>
            <input
              value={form.titleAm}
              onChange={(e) =>
                setForm((f) => ({ ...f, titleAm: e.target.value }))
              }
              dir="auto"
            />
          </label>
          <label className="admin-field">
            <span>Body · English *</span>
            <textarea
              value={form.bodyEn}
              onChange={(e) =>
                setForm((f) => ({ ...f, bodyEn: e.target.value }))
              }
            />
          </label>
          <label className="admin-field">
            <span>Body · አማርኛ</span>
            <textarea
              value={form.bodyAm}
              onChange={(e) =>
                setForm((f) => ({ ...f, bodyAm: e.target.value }))
              }
              dir="auto"
            />
          </label>
        </div>
        <label className="admin-checkbox">
          <input
            type="checkbox"
            checked={form.isPublished}
            onChange={(e) =>
              setForm((f) => ({ ...f, isPublished: e.target.checked }))
            }
          />{" "}
          Published
        </label>
        <div className="admin-actions">
          <button className="admin-button dark" onClick={saveContent}>
            Save {active}
          </button>
        </div>
      </section>
      <section className="admin-panel">
        <div className="panel-heading">
          <div>
            <span className="eyebrow">SITE SETTINGS</span>
            <h2>Official contact & social links</h2>
          </div>
        </div>
        <div className="form-row-admin">
          {Object.entries(settings).map(([k, v]) => (
            <label className="admin-field" key={k}>
              <span>{k.replaceAll("_", " ")}</span>
              <input
                value={v}
                onChange={(e) =>
                  setSettings((f) => ({ ...f, [k]: e.target.value }))
                }
                placeholder={k.endsWith("url") ? "https://…" : ""}
              />
            </label>
          ))}
        </div>
        <button className="admin-button dark" onClick={saveSettings}>
          Save settings
        </button>
      </section>
    </div>
  );
}
