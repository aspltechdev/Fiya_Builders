// // import {
// //   Outlet,
// // } from "react-router-dom";
// // import AdminSidebar from "../components/AdminSidebar";
// // import AdminHeader from "../components/AdminHeader";


// // const AdminLayout = () => {
// //   return (
// //     <div className="admin-layout">
// //       <AdminSidebar />

// //       <div className="admin-main">
// //         <AdminHeader />

// //         <main className="admin-content">
// //           <Outlet />
// //         </main>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminLayout;


// // import { useState, useEffect } from "react";
// // import { Outlet, useLocation } from "react-router-dom";
// // import { Menu, X } from "lucide-react";
// // import AdminSidebar from "../components/AdminSidebar";
// // import AdminHeader from "../components/AdminHeader";
// // import "./AdminLayout.css";

// // const AdminLayout = () => {
// //   const [sidebarOpen, setSidebarOpen] = useState(false);
// //   const [isMobile, setIsMobile] = useState(false);
// //   const location = useLocation();

// //   useEffect(() => {
// //     const handleResize = () => {
// //       const mobile = window.innerWidth <= 768;
// //       setIsMobile(mobile);
// //       if (!mobile) {
// //         setSidebarOpen(false);
// //       }
// //     };

// //     handleResize();
// //     window.addEventListener("resize", handleResize);
// //     return () => window.removeEventListener("resize", handleResize);
// //   }, []);

// //   useEffect(() => {
// //     // Close sidebar on route change on mobile
// //     setSidebarOpen(false);
// //   }, [location.pathname]);

// //   const toggleSidebar = () => {
// //     setSidebarOpen(!sidebarOpen);
// //   };

// //   return (
// //     <div className="admin-layout">
// //       {/* Mobile Overlay */}
// //       {sidebarOpen && (
// //         <div 
// //           className="sidebar-overlay" 
// //           onClick={() => setSidebarOpen(false)}
// //           aria-hidden="true"
// //         />
// //       )}

// //       {/* Sidebar */}
// //       <div className={`admin-sidebar-wrapper ${sidebarOpen ? 'open' : ''}`}>
// //         <AdminSidebar />
        
// //         {/* Mobile Close Button */}
// //         {sidebarOpen && (
// //           <button 
// //             className="sidebar-close-btn"
// //             onClick={toggleSidebar}
// //             aria-label="Close sidebar"
// //             title="Close sidebar"
// //           >
// //             <X size={20} strokeWidth={2} />
// //           </button>
// //         )}
// //       </div>

// //       {/* Main Content */}
// //       <div className="admin-main">
// //         <AdminHeader />
        
// //         {/* Mobile Menu Toggle */}
// //         {isMobile && (
// //           <button 
// //             className="mobile-menu-btn"
// //             onClick={toggleSidebar}
// //             aria-label="Toggle sidebar"
// //             title="Toggle sidebar"
// //           >
// //             {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
// //           </button>
// //         )}

// //         <main className="admin-content">
// //           <Outlet />
// //         </main>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminLayout;


// import { useState, useEffect, useCallback, useRef } from "react";
// import { Outlet, useLocation } from "react-router-dom";
// import { Menu, X, ChevronUp } from "lucide-react";
// import AdminSidebar from "../components/AdminSidebar";
// import AdminHeader from "../components/AdminHeader";
// import "./AdminLayout.css";

// const AdminLayout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const [isScrolling, setIsScrolling] = useState(false);
//   const location = useLocation();
//   const contentRef = useRef(null);
//   const scrollTimeout = useRef(null);

//   // Handle resize with debounce
//   const handleResize = useCallback(() => {
//     const mobile = window.innerWidth <= 768;
//     setIsMobile(mobile);
//     if (!mobile) {
//       setSidebarOpen(false);
//     }
//   }, []);

//   // Handle scroll for scroll-to-top button
//   const handleScroll = useCallback(() => {
//     const content = contentRef.current;
//     if (content) {
//       setShowScrollTop(content.scrollTop > 400);
      
//       // Add scrolling class for visual feedback
//       setIsScrolling(true);
//       clearTimeout(scrollTimeout.current);
//       scrollTimeout.current = setTimeout(() => {
//         setIsScrolling(false);
//       }, 150);
//     }
//   }, []);

//   useEffect(() => {
//     handleResize();
    
//     // Debounced resize handler
//     let resizeTimeout;
//     const debouncedResize = () => {
//       clearTimeout(resizeTimeout);
//       resizeTimeout = setTimeout(handleResize, 100);
//     };
    
//     window.addEventListener("resize", debouncedResize, { passive: true });
    
//     // Scroll listener
//     const content = contentRef.current;
//     if (content) {
//       content.addEventListener("scroll", handleScroll, { passive: true });
//     }
    
//     return () => {
//       window.removeEventListener("resize", debouncedResize);
//       if (content) {
//         content.removeEventListener("scroll", handleScroll);
//       }
//       clearTimeout(scrollTimeout.current);
//     };
//   }, [handleResize, handleScroll]);

//   // Close sidebar on route change
//   useEffect(() => {
//     setSidebarOpen(false);
//   }, [location.pathname]);

//   // Handle escape key to close sidebar
//   useEffect(() => {
//     const handleEscape = (e) => {
//       if (e.key === "Escape" && sidebarOpen) {
//         setSidebarOpen(false);
//       }
//     };
    
//     window.addEventListener("keydown", handleEscape);
//     return () => window.removeEventListener("keydown", handleEscape);
//   }, [sidebarOpen]);

//   // Lock body scroll when sidebar is open on mobile
//   useEffect(() => {
//     if (sidebarOpen && isMobile) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
    
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [sidebarOpen, isMobile]);

//   const toggleSidebar = useCallback(() => {
//     setSidebarOpen(prev => !prev);
//   }, []);

//   const scrollToTop = useCallback(() => {
//     const content = contentRef.current;
//     if (content) {
//       content.scrollTo({
//         top: 0,
//         behavior: "smooth"
//       });
//     }
//   }, []);

//   return (
//     <div className="admin-layout">
//       {/* Mobile Overlay */}
//       {sidebarOpen && (
//         <div 
//           className="sidebar-overlay" 
//           onClick={() => setSidebarOpen(false)}
//           aria-hidden="true"
//         />
//       )}

//       {/* Sidebar */}
//       <div className={`admin-sidebar-wrapper ${sidebarOpen ? 'open' : ''}`}>
//         <AdminSidebar 
//           isOpen={sidebarOpen}
//           onClose={() => setSidebarOpen(false)}
//         />
        
//         {/* Mobile Close Button */}
//         {sidebarOpen && isMobile && (
//           <button 
//             className="sidebar-close-btn"
//             onClick={toggleSidebar}
//             aria-label="Close sidebar"
//             title="Close sidebar"
//           >
//             <X size={20} strokeWidth={2} />
//           </button>
//         )}
//       </div>

//       {/* Main Content */}
//       <div className="admin-main">
//         <AdminHeader />
        
//         {/* Mobile Menu Toggle */}
//         {isMobile && !sidebarOpen && (
//           <button 
//             className="mobile-menu-btn"
//             onClick={toggleSidebar}
//             aria-label="Open sidebar"
//             title="Open sidebar"
//           >
//             <Menu size={20} strokeWidth={2} />
//           </button>
//         )}

//         <main 
//           ref={contentRef}
//           className={`admin-content ${isScrolling ? 'is-scrolling' : ''}`}
//         >
//           <Outlet />
//         </main>

//         {/* Scroll to Top Button */}
//         {showScrollTop && (
//           <button 
//             className="scroll-top-btn"
//             onClick={scrollToTop}
//             aria-label="Scroll to top"
//             title="Scroll to top"
//           >
//             <ChevronUp size={20} strokeWidth={2} />
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminLayout;


import { useState, useEffect, useCallback, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Menu, X, ChevronUp } from "lucide-react";
import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";
import "./AdminLayout.css";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const location = useLocation();
  const contentRef = useRef(null);
  const scrollTimeout = useRef(null);

  // Handle resize with debounce
  const handleResize = useCallback(() => {
    const mobile = window.innerWidth <= 768;
    setIsMobile(mobile);
    if (!mobile) {
      setSidebarOpen(false);
    }
  }, []);

  // Handle scroll for scroll-to-top button
  const handleScroll = useCallback(() => {
    const content = contentRef.current;
    if (content) {
      setShowScrollTop(content.scrollTop > 400);
      
      // Add scrolling class for visual feedback
      setIsScrolling(true);
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    }
  }, []);

  useEffect(() => {
    handleResize();
    
    // Debounced resize handler
    let resizeTimeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 100);
    };
    
    window.addEventListener("resize", debouncedResize, { passive: true });
    
    // Scroll listener
    const content = contentRef.current;
    if (content) {
      content.addEventListener("scroll", handleScroll, { passive: true });
    }
    
    return () => {
      window.removeEventListener("resize", debouncedResize);
      if (content) {
        content.removeEventListener("scroll", handleScroll);
      }
      clearTimeout(scrollTimeout.current);
    };
  }, [handleResize, handleScroll]);

  // Close sidebar on route change
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  // Handle escape key to close sidebar
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && sidebarOpen) {
        setSidebarOpen(false);
      }
    };
    
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [sidebarOpen]);

  // Lock body scroll when sidebar is open on mobile
  useEffect(() => {
    if (sidebarOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen, isMobile]);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(prev => !prev);
  }, []);

  const scrollToTop = useCallback(() => {
    const content = contentRef.current;
    if (content) {
      content.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }, []);

  return (
    <div className="admin-layout">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="sidebar-overlay" 
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <div className={`admin-sidebar-wrapper ${sidebarOpen ? 'open' : ''}`}>
        <AdminSidebar 
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        
        {/* Mobile Close Button */}
        {sidebarOpen && isMobile && (
          <button 
            className="sidebar-close-btn"
            onClick={toggleSidebar}
            aria-label="Close sidebar"
            title="Close sidebar"
          >
            <X size={20} strokeWidth={2} />
          </button>
        )}
      </div>

      {/* Main Content */}
      <div className="admin-main">
        <AdminHeader />
        
        {/* Mobile Menu Toggle */}
        {isMobile && !sidebarOpen && (
          <button 
            className="mobile-menu-btn"
            onClick={toggleSidebar}
            aria-label="Open sidebar"
            title="Open sidebar"
          >
            <Menu size={20} strokeWidth={2} />
          </button>
        )}

        <main 
          ref={contentRef}
          className={`admin-content ${isScrolling ? 'is-scrolling' : ''}`}
        >
          <Outlet />
        </main>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button 
            className="scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ChevronUp size={20} strokeWidth={2} />
          </button>
        )}
      </div>
    </div>
  );
};

export default AdminLayout;