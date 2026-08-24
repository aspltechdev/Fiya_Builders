// // // import {
// // //   Outlet,
// // // } from "react-router-dom";
// // // import AdminSidebar from "../components/AdminSidebar";
// // // import AdminHeader from "../components/AdminHeader";


// // // const AdminLayout = () => {
// // //   return (
// // //     <div className="admin-layout">
// // //       <AdminSidebar />

// // //       <div className="admin-main">
// // //         <AdminHeader />

// // //         <main className="admin-content">
// // //           <Outlet />
// // //         </main>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AdminLayout;


// // // import { useState, useEffect } from "react";
// // // import { Outlet, useLocation } from "react-router-dom";
// // // import { Menu, X } from "lucide-react";
// // // import AdminSidebar from "../components/AdminSidebar";
// // // import AdminHeader from "../components/AdminHeader";
// // // import "./AdminLayout.css";

// // // const AdminLayout = () => {
// // //   const [sidebarOpen, setSidebarOpen] = useState(false);
// // //   const [isMobile, setIsMobile] = useState(false);
// // //   const location = useLocation();

// // //   useEffect(() => {
// // //     const handleResize = () => {
// // //       const mobile = window.innerWidth <= 768;
// // //       setIsMobile(mobile);
// // //       if (!mobile) {
// // //         setSidebarOpen(false);
// // //       }
// // //     };

// // //     handleResize();
// // //     window.addEventListener("resize", handleResize);
// // //     return () => window.removeEventListener("resize", handleResize);
// // //   }, []);

// // //   useEffect(() => {
// // //     // Close sidebar on route change on mobile
// // //     setSidebarOpen(false);
// // //   }, [location.pathname]);

// // //   const toggleSidebar = () => {
// // //     setSidebarOpen(!sidebarOpen);
// // //   };

// // //   return (
// // //     <div className="admin-layout">
// // //       {/* Mobile Overlay */}
// // //       {sidebarOpen && (
// // //         <div 
// // //           className="sidebar-overlay" 
// // //           onClick={() => setSidebarOpen(false)}
// // //           aria-hidden="true"
// // //         />
// // //       )}

// // //       {/* Sidebar */}
// // //       <div className={`admin-sidebar-wrapper ${sidebarOpen ? 'open' : ''}`}>
// // //         <AdminSidebar />
        
// // //         {/* Mobile Close Button */}
// // //         {sidebarOpen && (
// // //           <button 
// // //             className="sidebar-close-btn"
// // //             onClick={toggleSidebar}
// // //             aria-label="Close sidebar"
// // //             title="Close sidebar"
// // //           >
// // //             <X size={20} strokeWidth={2} />
// // //           </button>
// // //         )}
// // //       </div>

// // //       {/* Main Content */}
// // //       <div className="admin-main">
// // //         <AdminHeader />
        
// // //         {/* Mobile Menu Toggle */}
// // //         {isMobile && (
// // //           <button 
// // //             className="mobile-menu-btn"
// // //             onClick={toggleSidebar}
// // //             aria-label="Toggle sidebar"
// // //             title="Toggle sidebar"
// // //           >
// // //             {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
// // //           </button>
// // //         )}

// // //         <main className="admin-content">
// // //           <Outlet />
// // //         </main>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AdminLayout;


// // import { useState, useEffect, useCallback, useRef } from "react";
// // import { Outlet, useLocation } from "react-router-dom";
// // import { Menu, X, ChevronUp } from "lucide-react";
// // import AdminSidebar from "../components/AdminSidebar";
// // import AdminHeader from "../components/AdminHeader";
// // import "./AdminLayout.css";

// // const AdminLayout = () => {
// //   const [sidebarOpen, setSidebarOpen] = useState(false);
// //   const [isMobile, setIsMobile] = useState(false);
// //   const [showScrollTop, setShowScrollTop] = useState(false);
// //   const [isScrolling, setIsScrolling] = useState(false);
// //   const location = useLocation();
// //   const contentRef = useRef(null);
// //   const scrollTimeout = useRef(null);

// //   // Handle resize with debounce
// //   const handleResize = useCallback(() => {
// //     const mobile = window.innerWidth <= 768;
// //     setIsMobile(mobile);
// //     if (!mobile) {
// //       setSidebarOpen(false);
// //     }
// //   }, []);

// //   // Handle scroll for scroll-to-top button
// //   const handleScroll = useCallback(() => {
// //     const content = contentRef.current;
// //     if (content) {
// //       setShowScrollTop(content.scrollTop > 400);
      
// //       // Add scrolling class for visual feedback
// //       setIsScrolling(true);
// //       clearTimeout(scrollTimeout.current);
// //       scrollTimeout.current = setTimeout(() => {
// //         setIsScrolling(false);
// //       }, 150);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     handleResize();
    
// //     // Debounced resize handler
// //     let resizeTimeout;
// //     const debouncedResize = () => {
// //       clearTimeout(resizeTimeout);
// //       resizeTimeout = setTimeout(handleResize, 100);
// //     };
    
// //     window.addEventListener("resize", debouncedResize, { passive: true });
    
// //     // Scroll listener
// //     const content = contentRef.current;
// //     if (content) {
// //       content.addEventListener("scroll", handleScroll, { passive: true });
// //     }
    
// //     return () => {
// //       window.removeEventListener("resize", debouncedResize);
// //       if (content) {
// //         content.removeEventListener("scroll", handleScroll);
// //       }
// //       clearTimeout(scrollTimeout.current);
// //     };
// //   }, [handleResize, handleScroll]);

// //   // Close sidebar on route change
// //   useEffect(() => {
// //     setSidebarOpen(false);
// //   }, [location.pathname]);

// //   // Handle escape key to close sidebar
// //   useEffect(() => {
// //     const handleEscape = (e) => {
// //       if (e.key === "Escape" && sidebarOpen) {
// //         setSidebarOpen(false);
// //       }
// //     };
    
// //     window.addEventListener("keydown", handleEscape);
// //     return () => window.removeEventListener("keydown", handleEscape);
// //   }, [sidebarOpen]);

// //   // Lock body scroll when sidebar is open on mobile
// //   useEffect(() => {
// //     if (sidebarOpen && isMobile) {
// //       document.body.style.overflow = "hidden";
// //     } else {
// //       document.body.style.overflow = "";
// //     }
    
// //     return () => {
// //       document.body.style.overflow = "";
// //     };
// //   }, [sidebarOpen, isMobile]);

// //   const toggleSidebar = useCallback(() => {
// //     setSidebarOpen(prev => !prev);
// //   }, []);

// //   const scrollToTop = useCallback(() => {
// //     const content = contentRef.current;
// //     if (content) {
// //       content.scrollTo({
// //         top: 0,
// //         behavior: "smooth"
// //       });
// //     }
// //   }, []);

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
// //         <AdminSidebar 
// //           isOpen={sidebarOpen}
// //           onClose={() => setSidebarOpen(false)}
// //         />
        
// //         {/* Mobile Close Button */}
// //         {sidebarOpen && isMobile && (
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
// //         {isMobile && !sidebarOpen && (
// //           <button 
// //             className="mobile-menu-btn"
// //             onClick={toggleSidebar}
// //             aria-label="Open sidebar"
// //             title="Open sidebar"
// //           >
// //             <Menu size={20} strokeWidth={2} />
// //           </button>
// //         )}

// //         <main 
// //           ref={contentRef}
// //           className={`admin-content ${isScrolling ? 'is-scrolling' : ''}`}
// //         >
// //           <Outlet />
// //         </main>

// //         {/* Scroll to Top Button */}
// //         {showScrollTop && (
// //           <button 
// //             className="scroll-top-btn"
// //             onClick={scrollToTop}
// //             aria-label="Scroll to top"
// //             title="Scroll to top"
// //           >
// //             <ChevronUp size={20} strokeWidth={2} />
// //           </button>
// //         )}
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

// src/layouts/AdminLayout/AdminLayout.jsx
import { useState, useEffect, useCallback, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Menu, X, ChevronUp } from "lucide-react";

import "./AdminLayout.css";
import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";

const AdminLayout = () => {
  const [fyaSidebarOpen, setFyaSidebarOpen] = useState(false);
  const [fyaIsMobile, setFyaIsMobile] = useState(false);
  const [fyaShowScrollTop, setFyaShowScrollTop] = useState(false);
  const [fyaIsScrolling, setFyaIsScrolling] = useState(false);
  const location = useLocation();
  const fyaContentRef = useRef(null);
  const fyaScrollTimeout = useRef(null);

  // Handle resize with debounce
  const fyaHandleResize = useCallback(() => {
    const mobile = window.innerWidth <= 768;
    setFyaIsMobile(mobile);
    if (!mobile) {
      setFyaSidebarOpen(false);
    }
  }, []);

  // Handle scroll for scroll-to-top button
  const fyaHandleScroll = useCallback(() => {
    const content = fyaContentRef.current;
    if (content) {
      setFyaShowScrollTop(content.scrollTop > 400);
      
      setFyaIsScrolling(true);
      clearTimeout(fyaScrollTimeout.current);
      fyaScrollTimeout.current = setTimeout(() => {
        setFyaIsScrolling(false);
      }, 150);
    }
  }, []);

  useEffect(() => {
    fyaHandleResize();
    
    let resizeTimeout;
    const fyaDebouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(fyaHandleResize, 100);
    };
    
    window.addEventListener("resize", fyaDebouncedResize, { passive: true });
    
    const content = fyaContentRef.current;
    if (content) {
      content.addEventListener("scroll", fyaHandleScroll, { passive: true });
    }
    
    return () => {
      window.removeEventListener("resize", fyaDebouncedResize);
      if (content) {
        content.removeEventListener("scroll", fyaHandleScroll);
      }
      clearTimeout(fyaScrollTimeout.current);
    };
  }, [fyaHandleResize, fyaHandleScroll]);

  // Close sidebar on route change
  useEffect(() => {
    setFyaSidebarOpen(false);
  }, [location.pathname]);

  // Handle escape key to close sidebar
  useEffect(() => {
    const fyaHandleEscape = (e) => {
      if (e.key === "Escape" && fyaSidebarOpen) {
        setFyaSidebarOpen(false);
      }
    };
    
    window.addEventListener("keydown", fyaHandleEscape);
    return () => window.removeEventListener("keydown", fyaHandleEscape);
  }, [fyaSidebarOpen]);

  // Lock body scroll when sidebar is open on mobile
  useEffect(() => {
    if (fyaSidebarOpen && fyaIsMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [fyaSidebarOpen, fyaIsMobile]);

  const fyaToggleSidebar = useCallback(() => {
    setFyaSidebarOpen(prev => !prev);
  }, []);

  const fyaScrollToTop = useCallback(() => {
    const content = fyaContentRef.current;
    if (content) {
      content.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }, []);

  return (
    <div className="fya-admin-layout">
      {/* Mobile Overlay */}
      {fyaSidebarOpen && (
        <div 
          className="fya-admin-layout__overlay" 
          onClick={() => setFyaSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Wrapper */}
      <div className={`fya-admin-layout__sidebar-wrapper ${fyaSidebarOpen ? 'fya-admin-layout__sidebar-wrapper--open' : ''}`}>
        <AdminSidebar 
          isOpen={fyaSidebarOpen}
          onClose={() => setFyaSidebarOpen(false)}
        />
        
        {/* Mobile Close Button */}
        {fyaSidebarOpen && fyaIsMobile && (
          <button 
            className="fya-admin-layout__sidebar-close"
            onClick={fyaToggleSidebar}
            aria-label="Close sidebar"
            title="Close sidebar"
          >
            <X size={20} strokeWidth={2} />
          </button>
        )}
      </div>

      {/* Main Content */}
      <div className="fya-admin-layout__main">
        <AdminHeader />
        
        {/* Mobile Menu Toggle */}
        {fyaIsMobile && !fyaSidebarOpen && (
          <button 
            className="fya-admin-layout__mobile-toggle"
            onClick={fyaToggleSidebar}
            aria-label="Open sidebar"
            title="Open sidebar"
          >
            <Menu size={20} strokeWidth={2} />
          </button>
        )}

        <main 
          ref={fyaContentRef}
          className={`fya-admin-layout__content ${fyaIsScrolling ? 'fya-admin-layout__content--scrolling' : ''}`}
        >
          <Outlet />
        </main>

        {/* Scroll to Top Button */}
        {fyaShowScrollTop && (
          <button 
            className="fya-admin-layout__scroll-top"
            onClick={fyaScrollToTop}
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