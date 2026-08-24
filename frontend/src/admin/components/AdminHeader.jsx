// src/components/admin/AdminHeader/AdminHeader.jsx
import React, { useState, useEffect, useCallback, useRef } from "react";
import { Bell, ChevronDown, LogOut, Settings, User, Shield, Menu, X } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import "./AdminHeader.css";

const AdminHeader = () => {
  const { user, logout } = useAuth();
  const [fyaScrolled, setFyaScrolled] = useState(false);
  const [fyaHasNotifications, setFyaHasNotifications] = useState(true);
  const [fyaIsMobile, setFyaIsMobile] = useState(false);
  const [fyaIsDropdownOpen, setFyaIsDropdownOpen] = useState(false);
  const [fyaIsMobileMenuOpen, setFyaIsMobileMenuOpen] = useState(false);
  const fyaDropdownRef = useRef(null);
  const fyaMobileMenuRef = useRef(null);

  // Handle scroll with RAF for performance
  const fyaHandleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      setFyaScrolled(window.scrollY > 10);
    });
  }, []);

  // Handle resize
  const fyaHandleResize = useCallback(() => {
    setFyaIsMobile(window.innerWidth <= 768);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const fyaHandleClickOutside = (event) => {
      if (fyaDropdownRef.current && !fyaDropdownRef.current.contains(event.target)) {
        setFyaIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", fyaHandleClickOutside);
    return () => document.removeEventListener("mousedown", fyaHandleClickOutside);
  }, []);

  // Close mobile menu on click outside
  useEffect(() => {
    const fyaHandleClickOutside = (event) => {
      if (fyaMobileMenuRef.current && !fyaMobileMenuRef.current.contains(event.target)) {
        setFyaIsMobileMenuOpen(false);
      }
    };

    if (fyaIsMobileMenuOpen) {
      document.addEventListener("mousedown", fyaHandleClickOutside);
    }
    return () => document.removeEventListener("mousedown", fyaHandleClickOutside);
  }, [fyaIsMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (fyaIsMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [fyaIsMobileMenuOpen]);

  useEffect(() => {
    window.addEventListener("scroll", fyaHandleScroll, { passive: true });
    window.addEventListener("resize", fyaHandleResize, { passive: true });
    
    fyaHandleScroll();
    fyaHandleResize();

    return () => {
      window.removeEventListener("scroll", fyaHandleScroll);
      window.removeEventListener("resize", fyaHandleResize);
    };
  }, [fyaHandleScroll, fyaHandleResize]);

  const fyaHandleLogout = () => {
    setFyaIsDropdownOpen(false);
    logout();
  };

  const fyaToggleDropdown = () => {
    setFyaIsDropdownOpen(prev => !prev);
  };

  const fyaToggleMobileMenu = () => {
    setFyaIsMobileMenuOpen(prev => !prev);
  };

  const fyaCloseMobileMenu = () => {
    setFyaIsMobileMenuOpen(false);
  };

  // Get user initials
  const fyaGetInitials = () => {
    if (user?.name) {
      return user.name.charAt(0).toUpperCase();
    }
    return "A";
  };

  return (
    <header className={`fya-admin-header ${fyaScrolled ? "fya-admin-header--scrolled" : ""}`}>
      {/* Logo / Brand */}
      <div className="fya-admin-header__brand">
        <div className="fya-admin-header__logo">
          <span className="fya-admin-header__logo-primary">FIYA</span>
          <span className="fya-admin-header__logo-divider">|</span>
          <span className="fya-admin-header__logo-secondary">Admin</span>
        </div>
        {!fyaIsMobile && (
          <span className="fya-admin-header__subtitle">Dashboard</span>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="fya-admin-header__mobile-toggle"
        onClick={fyaToggleMobileMenu}
        aria-label={fyaIsMobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {fyaIsMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Right Section */}
      <div className="fya-admin-header__right">
        {/* Notification Button */}
        <button 
          className={`fya-admin-header__notif ${fyaHasNotifications ? "fya-admin-header__notif--has" : ""}`}
          aria-label="Notifications"
          onClick={() => setFyaHasNotifications(false)}
        >
          <Bell size={19} />
          {fyaHasNotifications && (
            <span className="fya-admin-header__notif-dot" />
          )}
        </button>

        {/* User Dropdown */}
        <div className="fya-admin-header__user" ref={fyaDropdownRef}>
          <button
            className="fya-admin-header__user-btn"
            onClick={fyaToggleDropdown}
            aria-expanded={fyaIsDropdownOpen}
            aria-haspopup="true"
          >
            <div className="fya-admin-header__avatar">
              {user?.avatar ? (
                <img src={user.avatar} alt={user.name || "Admin"} />
              ) : (
                <span>{fyaGetInitials()}</span>
              )}
            </div>
            <div className="fya-admin-header__user-info">
              <strong className="fya-admin-header__user-name">
                {user?.name || "Admin User"}
              </strong>
              <span className="fya-admin-header__user-role">
                {user?.role || "Administrator"}
              </span>
            </div>
            <ChevronDown 
              size={16} 
              className={`fya-admin-header__chevron ${fyaIsDropdownOpen ? "fya-admin-header__chevron--open" : ""}`}
            />
          </button>

          {/* Dropdown Menu */}
          {fyaIsDropdownOpen && (
            <div className="fya-admin-header__dropdown">
              <div className="fya-admin-header__dropdown-header">
                <div className="fya-admin-header__dropdown-avatar">
                  {user?.avatar ? (
                    <img src={user.avatar} alt={user.name || "Admin"} />
                  ) : (
                    <span>{fyaGetInitials()}</span>
                  )}
                </div>
                <div className="fya-admin-header__dropdown-info">
                  <strong>{user?.name || "Admin User"}</strong>
                  <span>{user?.email || "admin@fiyabuilders.com"}</span>
                </div>
              </div>

              <div className="fya-admin-header__dropdown-divider" />

              <button className="fya-admin-header__dropdown-item">
                <User size={16} />
                <span>Profile</span>
              </button>

              <button className="fya-admin-header__dropdown-item">
                <Settings size={16} />
                <span>Settings</span>
              </button>

              <button className="fya-admin-header__dropdown-item">
                <Shield size={16} />
                <span>Security</span>
              </button>

              <div className="fya-admin-header__dropdown-divider" />

              <button 
                className="fya-admin-header__dropdown-item fya-admin-header__dropdown-item--danger"
                onClick={fyaHandleLogout}
              >
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fya-admin-header__overlay ${fyaIsMobileMenuOpen ? "fya-admin-header__overlay--open" : ""}`}
        onClick={fyaCloseMobileMenu}
      />

      {/* Mobile Navigation Menu */}
      <nav 
        ref={fyaMobileMenuRef}
        className={`fya-admin-header__mobile-menu ${fyaIsMobileMenuOpen ? "fya-admin-header__mobile-menu--open" : ""}`}
        aria-hidden={!fyaIsMobileMenuOpen}
      >
        <div className="fya-admin-header__mobile-header">
          <div className="fya-admin-header__mobile-avatar">
            {user?.avatar ? (
              <img src={user.avatar} alt={user.name || "Admin"} />
            ) : (
              <span>{fyaGetInitials()}</span>
            )}
          </div>
          <div className="fya-admin-header__mobile-info">
            <strong>{user?.name || "Admin User"}</strong>
            <span>{user?.email || "admin@fiyabuilders.com"}</span>
          </div>
        </div>

        <div className="fya-admin-header__mobile-divider" />

        <div className="fya-admin-header__mobile-links">
          <a href="/admin" className="fya-admin-header__mobile-link">
            <span>Dashboard</span>
          </a>
          <a href="/admin/profile" className="fya-admin-header__mobile-link">
            <User size={18} />
            <span>Profile</span>
          </a>
          <a href="/admin/settings" className="fya-admin-header__mobile-link">
            <Settings size={18} />
            <span>Settings</span>
          </a>
          <a href="/admin/security" className="fya-admin-header__mobile-link">
            <Shield size={18} />
            <span>Security</span>
          </a>
        </div>

        <div className="fya-admin-header__mobile-divider" />

        <button className="fya-admin-header__mobile-logout" onClick={fyaHandleLogout}>
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </nav>
    </header>
  );
};


export default AdminHeader;