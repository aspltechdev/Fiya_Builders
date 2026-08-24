// import { useState, useEffect, useCallback } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import {
//   LayoutDashboard,
//   PanelsTopLeft,
//   Info,
//   BriefcaseBusiness,
//   Building2,
//   Images,
//   MessageSquareQuote,
//   Mail,
//   Settings,
//   LogOut,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";
// import { useAuth } from "../../context/AuthContext.jsx";
// import "./AdminSidebar.css";

// const menu = [
//   { label: "Dashboard", path: "/admin", icon: LayoutDashboard },
//   { label: "Hero", path: "/admin/hero", icon: PanelsTopLeft },
//   // { label: "About", path: "/admin/about", icon: Info },
//   { label: "Services", path: "/admin/services", icon: BriefcaseBusiness },
//   { label: "Projects", path: "/admin/projects", icon: Building2 },
//   { label: "Gallery", path: "/admin/gallery", icon: Images },
//   { label: "Testimonials", path: "/admin/testimonials", icon: MessageSquareQuote },
//   { label: "Enquiries", path: "/admin/enquiries", icon: Mail },
//   // { label: "Settings", path: "/admin/settings", icon: Settings },
// ];

// const AdminSidebar = ({ isOpen, onClose }) => {
//   const { logout } = useAuth();
//   const location = useLocation();
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [activeItem, setActiveItem] = useState("");

//   // Handle resize
//   const handleResize = useCallback(() => {
//     const mobile = window.innerWidth <= 768;
//     setIsMobile(mobile);
//     if (!mobile) {
//       setIsCollapsed(false);
//     }
//   }, []);

//   useEffect(() => {
//     handleResize();
//     window.addEventListener("resize", handleResize, { passive: true });
//     return () => window.removeEventListener("resize", handleResize);
//   }, [handleResize]);

//   // Set active item based on current route
//   useEffect(() => {
//     const currentItem = menu.find(item => 
//       item.path === location.pathname || 
//       (item.path !== "/admin" && location.pathname.startsWith(item.path))
//     );
//     setActiveItem(currentItem?.path || "");
//   }, [location.pathname]);

//   // Handle logout with confirmation
//   const handleLogout = async () => {
//     if (window.confirm("Are you sure you want to logout?")) {
//       await logout();
//       if (onClose) onClose();
//     }
//   };

//   // Toggle sidebar collapse (desktop only)
//   const toggleCollapse = () => {
//     if (!isMobile) {
//       setIsCollapsed(!isCollapsed);
//     }
//   };

//   return (
//     <aside 
//       className={`admin-sidebar ${isCollapsed ? 'collapsed' : ''} ${isOpen ? 'open' : ''}`}
//       aria-label="Admin Sidebar"
//     >
//       {/* Logo Section */}
//       <div className="admin-logo">
//         <div className="admin-logo-icon">
//           <span>FIYA</span>
//         </div>
//         {!isCollapsed && (
//           <div className="admin-logo-text">
//             <small>BUILDERS</small>
//           </div>
//         )}
//       </div>

//       {/* Collapse Toggle Button (Desktop) */}
//       {!isMobile && (
//         <button 
//           className="sidebar-collapse-btn"
//           onClick={toggleCollapse}
//           aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
//           title={isCollapsed ? "Expand" : "Collapse"}
//         >
//           {isCollapsed ? (
//             <ChevronRight size={16} />
//           ) : (
//             <ChevronLeft size={16} />
//           )}
//         </button>
//       )}

//       {/* Navigation */}
//       <nav className="admin-nav" aria-label="Admin Navigation">
//         {menu.map((item) => {
//           const Icon = item.icon;
//           const isActive = activeItem === item.path;
          
//           return (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               end={item.path === "/admin"}
//               className={({ isActive: navActive }) =>
//                 `admin-nav-item ${navActive || isActive ? "active" : ""}`
//               }
//               data-label={item.label}
//               title={isCollapsed ? item.label : undefined}
//               onClick={() => {
//                 if (isMobile && onClose) {
//                   onClose();
//                 }
//               }}
//             >
//               <Icon size={19} strokeWidth={2} />
//               {!isCollapsed && <span>{item.label}</span>}
              
//               {/* Active indicator dot for collapsed mode */}
//               {isCollapsed && isActive && (
//                 <span className="active-dot" />
//               )}
//             </NavLink>
//           );
//         })}
//       </nav>

//       {/* Sidebar Footer */}
//       <div className="admin-sidebar-footer">
//         {/* Settings shortcut */}
//         {!isCollapsed && (
//           <div className="sidebar-footer-info">
//             <span>v1.0.0</span>
//           </div>
//         )}

//         {/* Logout Button */}
//         <button
//           className="admin-logout"
//           onClick={handleLogout}
//           data-label="Logout"
//           title={isCollapsed ? "Logout" : undefined}
//           aria-label="Logout"
//         >
//           <LogOut size={18} strokeWidth={2} />
//           {!isCollapsed && <span>Logout</span>}
//         </button>
//       </div>
//     </aside>
//   );
// };

// export default AdminSidebar;

// src/components/admin/AdminSidebar/AdminSidebar.jsx
import { useState, useEffect, useCallback } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  PanelsTopLeft,
  BriefcaseBusiness,
  Building2,
  Images,
  MessageSquareQuote,
  Mail,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Shield,
  Crown,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext.jsx";
import "./AdminSidebar.css";

const menu = [
  { 
    label: "Dashboard", 
    path: "/admin", 
    icon: LayoutDashboard,
    description: "Overview"
  },
  { 
    label: "Hero", 
    path: "/admin/hero", 
    icon: PanelsTopLeft,
    description: "Hero section"
  },
  { 
    label: "Services", 
    path: "/admin/services", 
    icon: BriefcaseBusiness,
    description: "Services"
  },
  { 
    label: "Projects", 
    path: "/admin/projects", 
    icon: Building2,
    description: "Projects"
  },
  { 
    label: "Gallery", 
    path: "/admin/gallery", 
    icon: Images,
    description: "Gallery"
  },
  { 
    label: "Testimonials", 
    path: "/admin/testimonials", 
    icon: MessageSquareQuote,
    description: "Testimonials"
  },
  { 
    label: "Enquiries", 
    path: "/admin/enquiries", 
    icon: Mail,
    description: "Enquiries"
  },
];

const AdminSidebar = ({ isOpen, onClose }) => {
  const { logout, user } = useAuth();
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [hoveredItem, setHoveredItem] = useState(null);

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

  // Close sidebar on mobile
  const closeSidebar = () => {
    if (isMobile && onClose) {
      onClose();
    }
  };

  // Get user initials
  const getInitials = () => {
    if (user?.name) {
      return user.name.charAt(0).toUpperCase();
    }
    return "A";
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && isOpen && (
        <div className="fya-sidebar-overlay" onClick={closeSidebar} />
      )}

      <aside 
        className={`fya-sidebar ${isCollapsed ? 'fya-sidebar--collapsed' : ''} ${isOpen ? 'fya-sidebar--open' : ''}`}
        aria-label="Admin Sidebar"
      >
        {/* ======================================================
            LOGO SECTION
        ====================================================== */}
        <div className="fya-sidebar-brand">
          <div className="fya-sidebar-brand__inner">
            {/* Logo Mark */}
            <div className="fya-sidebar-brand__mark">
              <div className="fya-sidebar-brand__icon">
                <span className="fya-sidebar-brand__primary">FIYA</span>
                {!isCollapsed && (
                  <span className="fya-sidebar-brand__secondary">BUILDERS</span>
                )}
              </div>
              {!isCollapsed && (
                <div className="fya-sidebar-brand__badge">
                  <Crown size={10} />
                  <span>Admin</span>
                </div>
              )}
            </div>

            {/* Collapse Toggle */}
            {!isMobile && (
              <button 
                className="fya-sidebar-brand__toggle"
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
          </div>

          {/* Divider */}
          <div className="fya-sidebar-brand__divider" />
        </div>

        {/* ======================================================
            USER MINI (Collapsed)
        ====================================================== */}
        {isCollapsed && (
          <div className="fya-sidebar-user-mini">
            <div className="fya-sidebar-user-mini__avatar">
              {user?.avatar ? (
                <img src={user.avatar} alt={user.name || "Admin"} />
              ) : (
                <span>{getInitials()}</span>
              )}
            </div>
          </div>
        )}

        {/* ======================================================
            NAVIGATION
        ====================================================== */}
        <nav className="fya-sidebar-nav" aria-label="Admin Navigation">
          {menu.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.path;
            
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/admin"}
                className={({ isActive: navActive }) =>
                  `fya-sidebar-nav__link ${navActive || isActive ? 'fya-sidebar-nav__link--active' : ''}`
                }
                onClick={closeSidebar}
                onMouseEnter={() => setHoveredItem(item.path)}
                onMouseLeave={() => setHoveredItem(null)}
                data-label={item.label}
                title={isCollapsed ? item.label : undefined}
              >
                <div className="fya-sidebar-nav__icon">
                  <Icon size={20} strokeWidth={1.8} />
                  {isActive && (
                    <span className="fya-sidebar-nav__indicator" />
                  )}
                </div>
                {!isCollapsed && (
                  <div className="fya-sidebar-nav__content">
                    <span className="fya-sidebar-nav__label">{item.label}</span>
                    <span className="fya-sidebar-nav__desc">{item.description}</span>
                  </div>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* ======================================================
            FOOTER
        ====================================================== */}
        <div className="fya-sidebar-footer">
          {/* User Profile */}
          {!isCollapsed && (
            <div className="fya-sidebar-footer__user">
              <div className="fya-sidebar-footer__avatar">
                {user?.avatar ? (
                  <img src={user.avatar} alt={user.name || "Admin"} />
                ) : (
                  <span>{getInitials()}</span>
                )}
              </div>
              <div className="fya-sidebar-footer__info">
                <strong>{user?.name || "Admin User"}</strong>
                <span>{user?.role || "Administrator"}</span>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="fya-sidebar-footer__actions">
            {!isCollapsed && (
              <div className="fya-sidebar-footer__version">
                <Shield size={12} />
                <span>v1.0.0</span>
              </div>
            )}

            <button
              className={`fya-sidebar-footer__logout ${isCollapsed ? 'fya-sidebar-footer__logout--mini' : ''}`}
              onClick={handleLogout}
              aria-label="Logout"
              title={isCollapsed ? "Logout" : undefined}
            >
              <LogOut size={18} strokeWidth={2} />
              {!isCollapsed && <span>Logout</span>}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;