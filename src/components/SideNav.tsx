import { ChevronLeft, Info, Mail, Menu, Sparkles, X, Home, type LucideIcon } from "lucide-react";

type NavItem = {
  id: string;
  label: string;
  icon: LucideIcon;
};

type SideNavProps = {
  activeId: string;
  isDesktop: boolean;
  isOpen: boolean;
  items: NavItem[];
  logoSrc: string;
  onClose: () => void;
  onNavigate: (id: string) => void;
  onToggle: () => void;
};

function NavItemButton({
  active,
  icon: Icon,
  isDesktop,
  isOpen,
  label,
  onClick,
}: {
  active: boolean;
  icon: LucideIcon;
  isDesktop: boolean;
  isOpen: boolean;
  label: string;
  onClick: () => void;
}) {
  const showLabel = !isDesktop || isOpen;

  return (
    <button
      type="button"
      className={`app-sidebar__item ${active ? "is-active" : ""}`}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      aria-label={label}
      title={label}
    >
      <span className="app-sidebar__item-icon">
        <Icon className="h-5 w-5" strokeWidth={1.8} />
      </span>
      <span className={`app-sidebar__item-label ${showLabel ? "is-visible" : ""}`}>{label}</span>
    </button>
  );
}

export default function SideNav({
  activeId,
  isDesktop,
  isOpen,
  items,
  logoSrc,
  onClose,
  onNavigate,
  onToggle,
}: SideNavProps) {
  const expanded = isOpen;

  return (
    <div className="app-sidebar-root">
      <button
        type="button"
        className={`app-sidebar-backdrop ${isOpen ? "is-open" : ""}`}
        onClick={onClose}
        aria-label="Close navigation menu"
        tabIndex={isOpen ? 0 : -1}
      />

      <aside
        id="site-sidebar"
        className={`app-sidebar ${isDesktop ? "is-desktop" : "is-mobile"} ${expanded ? "is-open" : ""}`}
        aria-label="Primary navigation"
      >
        <div className="app-sidebar__panel">
          <div className="app-sidebar__header">
            <a
              href="#top"
              className="app-sidebar__brand"
              onClick={(event) => {
                event.preventDefault();
                onNavigate("top");
              }}
            >
              <img src={logoSrc} alt="Prexilon" className="app-sidebar__brand-mark" />
              <div className={`app-sidebar__brand-copy ${expanded ? "is-visible" : ""}`}>
                <span className="app-sidebar__brand-title">PREXILON</span>
                <span className="app-sidebar__brand-subtitle">Precision diagnostics</span>
              </div>
            </a>

            <button
              type="button"
              className="app-sidebar__toggle"
              onClick={onClose}
              aria-label={isDesktop ? "Collapse navigation" : "Close navigation"}
              aria-expanded={expanded}
              aria-controls="site-sidebar-nav"
            >
              {isDesktop ? <ChevronLeft className="h-5 w-5" strokeWidth={1.8} /> : <X className="h-5 w-5" strokeWidth={1.8} />}
            </button>
          </div>

          <div className={`app-sidebar__section-label ${expanded ? "is-visible" : ""}`}>Navigation</div>

          <nav id="site-sidebar-nav" className="app-sidebar__nav">
            {items.map((item) => (
              <div key={item.id}>
                <NavItemButton
                  active={activeId === item.id}
                  icon={item.icon}
                  isDesktop={isDesktop}
                  isOpen={expanded}
                  label={item.label}
                  onClick={() => onNavigate(item.id)}
                />
              </div>
            ))}
          </nav>

          <div className="app-sidebar__footer">
            <div className="app-sidebar__profile">
              <div className="app-sidebar__profile-badge">PX</div>
              <div className={`app-sidebar__profile-copy ${expanded ? "is-visible" : ""}`}>
                <span className="app-sidebar__profile-title">Prexilon Care</span>
                <span className="app-sidebar__profile-subtitle">Future-ready diagnostics</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export const defaultNavItems: NavItem[] = [
  { id: "top", label: "Home", icon: Home },
  { id: "about-us", label: "About Us", icon: Info },
  { id: "services", label: "Services", icon: Sparkles },
  { id: "contact-us", label: "Contact Us", icon: Mail },
];
