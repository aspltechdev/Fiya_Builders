import { useState, useEffect, useCallback } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  PanelsTopLeft,
  Info,
  BriefcaseBusiness,
  Building2,
  Images,
  MessageSquareQuote,
  Mail,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext.jsx";
import "./AdminSidebar.css";

const menu = [
  { label: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { label: "Hero", path: "/admin/hero", icon: PanelsTopLeft },
  { label: "About", path: "/admin/about", icon: Info },
  { label: "Services", path: "/admin/services", icon: BriefcaseBusiness },
  { label: "Projects", path: "/admin/projects", icon: Building2 },
  { label: "Gallery", path: "/admin/gallery", icon: Images },
  { label: "Testimonials", path: "/admin/testimonials", icon: MessageSquareQuote },
  { label: "Enquiries", path: "/admin/enquiries", icon: Mail },
  { label: "Settings", path: "/admin/settings", icon: Settings },
];

const AdminSidebar = ({ isOpen, onClose }) => {
  const { logout } = useAuth();
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  // Handle resize
  const handleResize = useCallback(() => {
    const mobile = window.innerWidth <= 768;
    setIsMobile(mobile);
    if (!mobile) {
      setIsCollapsed(false);
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  // Set active item based on current route
  useEffect(() => {
    const currentItem = menu.find(item => 
      item.path === location.pathname || 
      (item.path !== "/admin" && location.pathname.startsWith(item.path))
    );
    setActiveItem(currentItem?.path || "");
  }, [location.pathname]);

  // Handle logout with confirmation
  const handleLogout = async () => {
    if (window.confirm("Are you sure you want to logout?")) {
      await logout();
      if (onClose) onClose();
    }
  };

  // Toggle sidebar collapse (desktop only)
  const toggleCollapse = () => {
    if (!isMobile) {
      setIsCollapsed(!isCollapsed);
    }
  };

  return (
    <aside 
      className={`admin-sidebar ${isCollapsed ? 'collapsed' : ''} ${isOpen ? 'open' : ''}`}
      aria-label="Admin Sidebar"
    >
      {/* Logo Section */}
      <div className="admin-logo">
        <div className="admin-logo-icon">
          <span>FIYA</span>
        </div>
        {!isCollapsed && (
          <div className="admin-logo-text">
            <small>BUILDERS</small>
          </div>
        )}
      </div>

      {/* Collapse Toggle Button (Desktop) */}
      {!isMobile && (
        <button 
          className="sidebar-collapse-btn"
          onClick={toggleCollapse}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          title={isCollapsed ? "Expand" : "Collapse"}
        >
          {isCollapsed ? (
            <ChevronRight size={16} />
          ) : (
            <ChevronLeft size={16} />
          )}
        </button>
      )}

      {/* Navigation */}
      <nav className="admin-nav" aria-label="Admin Navigation">
        {menu.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.path;
          
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/admin"}
              className={({ isActive: navActive }) =>
                `admin-nav-item ${navActive || isActive ? "active" : ""}`
              }
              data-label={item.label}
              title={isCollapsed ? item.label : undefined}
              onClick={() => {
                if (isMobile && onClose) {
                  onClose();
                }
              }}
            >
              <Icon size={19} strokeWidth={2} />
              {!isCollapsed && <span>{item.label}</span>}
              
              {/* Active indicator dot for collapsed mode */}
              {isCollapsed && isActive && (
                <span className="active-dot" />
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Sidebar Footer */}
      <div className="admin-sidebar-footer">
        {/* Settings shortcut */}
        {!isCollapsed && (
          <div className="sidebar-footer-info">
            <span>v1.0.0</span>
          </div>
        )}

        {/* Logout Button */}
        <button
          className="admin-logout"
          onClick={handleLogout}
          data-label="Logout"
          title={isCollapsed ? "Logout" : undefined}
          aria-label="Logout"
        >
          <LogOut size={18} strokeWidth={2} />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;