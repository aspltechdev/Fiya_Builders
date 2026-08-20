import { useState, useEffect, useCallback } from "react";
import { Bell } from "lucide-react";
import { useAuth } from "../../context/AuthContext.jsx";
import "./AdminHeader.css";

const AdminHeader = () => {
  const { user } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle scroll with RAF for performance
  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      setScrolled(window.scrollY > 10);
    });
  }, []);

  // Handle resize
  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= 640);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    
    // Initial check
    handleScroll();
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);

  return (
    <header className={`admin-header ${scrolled ? 'scrolled' : ''}`}>
      {/* Header Title */}
      <div className="admin-header-title">
        <h1>Admin Panel</h1>
        {!isMobile && (
          <p>Manage your FIYA Builders website</p>
        )}
      </div>

      {/* Right Section */}
      <div className="admin-header-right">
        {/* Notification Button */}
        <button 
          className={`notification-btn ${hasNotifications ? 'has-notifications' : ''}`}
          aria-label="Notifications"
          title="Notifications"
          onClick={() => setHasNotifications(false)}
        >
          <Bell size={19} strokeWidth={2} />
        </button>

        {/* User Section */}
        <div className="admin-user" role="button" tabIndex={0}>
          {/* Avatar */}
          <div className="admin-avatar" aria-hidden="true">
            {user?.name?.charAt(0)?.toUpperCase() || 'A'}
          </div>

          {/* User Info - Hidden on mobile */}
          <div className="admin-user-info">
            <strong>{user?.name || 'Admin User'}</strong>
            <span>Administrator</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;