// // src/components/Header/Header.jsx
// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import './Header.css';

// // Icons
// import { Menu, X, Phone, Mail, ChevronRight, Home, Info, Grid, Image, Contact, Layers } from 'lucide-react';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileOpen, setIsMobileOpen] = useState(false);
//   const location = useLocation();
//   const headerRef = useRef(null);
//   const mobileMenuRef = useRef(null);

//   // Navigation configuration
//   const navItems = [
//     { id: 'nav-home', label: 'Home', path: '/', icon: Home },
//     { id: 'nav-about', label: 'About', path: '/about', icon: Info },
//     { id: 'nav-services', label: 'Services', path: '/services', icon: Layers },
//     { id: 'nav-projects', label: 'Projects', path: '/projects', icon: Grid },
//     { id: 'nav-gallery', label: 'Gallery', path: '/gallery', icon: Image },
//     { id: 'nav-contact', label: 'Contact', path: '/contact', icon: Contact },
//   ];

//   // Handle scroll effect
//   useEffect(() => {
//     let ticking = false;
    
//     const handleScroll = () => {
//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           setIsScrolled(window.scrollY > 50);
//           ticking = false;
//         });
//         ticking = true;
//       }
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close mobile menu on route change
//   useEffect(() => {
//     setIsMobileOpen(false);
//   }, [location]);

//   // Lock body scroll
//   useEffect(() => {
//     if (isMobileOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = '';
//     }
//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [isMobileOpen]);

//   // Handle click outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
//         setIsMobileOpen(false);
//       }
//     };

//     if (isMobileOpen) {
//       document.addEventListener('mousedown', handleClickOutside);
//     }
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [isMobileOpen]);

//   // Handle escape key
//   useEffect(() => {
//     const handleEscape = (event) => {
//       if (event.key === 'Escape') {
//         setIsMobileOpen(false);
//       }
//     };

//     document.addEventListener('keydown', handleEscape);
//     return () => document.removeEventListener('keydown', handleEscape);
//   }, []);

//   const toggleMobileMenu = useCallback(() => {
//     setIsMobileOpen(prev => !prev);
//   }, []);

//   const closeMobileMenu = useCallback(() => {
//     setIsMobileOpen(false);
//   }, []);

//   // Contact info
//   const contactInfo = {
//     phone: '+1 (234) 567-890',
//     email: 'info@fiyabuilders.com',
//   };

//   return (
//     <header
//       ref={headerRef}
//       className={`header ${isScrolled ? 'header--scrolled' : ''}`}
//       role="banner"
//     >
//       <div className="header__container">
//         {/* Logo */}
//         <Link to="/" className="header__logo" aria-label="FIYA BUILDERS Home">
//           <span className="header__logo-primary">FIYA</span>
//           <span className="header__logo-secondary">BUILDERS</span>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="header__nav" role="navigation" aria-label="Main navigation">
//           <ul className="header__nav-list">
//             {navItems.map((item) => (
//               <li key={item.id} className="header__nav-item">
//                 <NavLink
//                   to={item.path}
//                   className={({ isActive }) =>
//                     `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
//                   }
//                   end={item.path === '/'}
//                 >
//                   {item.label}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Header Actions */}
//         <div className="header__actions">
//           <a
//             href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
//             className="header__phone"
//             aria-label="Call us"
//           >
//             <Phone size={16} />
//             <span>{contactInfo.phone}</span>
//           </a>

//           <Link to="/contact" className="btn btn--primary btn--cta">
//             Get a Consultation
//             <ChevronRight size={16} className="btn__icon" />
//           </Link>

//           {/* Mobile Toggle */}
//           <button
//             className="header__toggle"
//             onClick={toggleMobileMenu}
//             aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
//             aria-expanded={isMobileOpen}
//           >
//             {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Overlay */}
//       <div
//         className={`overlay ${isMobileOpen ? 'overlay--visible' : ''}`}
//         onClick={closeMobileMenu}
//       />

//       {/* Mobile Navigation */}
//       <nav
//         ref={mobileMenuRef}
//         className={`mobile-nav ${isMobileOpen ? 'mobile-nav--open' : ''}`}
//         role="navigation"
//         aria-label="Mobile navigation"
//       >
//         <div className="mobile-nav__header">
//           <span className="mobile-nav__brand">FIYA BUILDERS</span>
//           <button
//             className="mobile-nav__close"
//             onClick={closeMobileMenu}
//             aria-label="Close menu"
//           >
//             <X size={24} />
//           </button>
//         </div>

//         <ul className="mobile-nav__list">
//           {navItems.map((item) => {
//             const Icon = item.icon;
//             return (
//               <li key={item.id} className="mobile-nav__item">
//                 <NavLink
//                   to={item.path}
//                   className={({ isActive }) =>
//                     `mobile-nav__link ${isActive ? 'mobile-nav__link--active' : ''}`
//                   }
//                   onClick={closeMobileMenu}
//                 >
//                   <Icon size={20} />
//                   <span>{item.label}</span>
//                 </NavLink>
//               </li>
//             );
//           })}
//         </ul>

//         <div className="mobile-nav__footer">
//           <Link
//             to="/contact"
//             className="btn btn--primary btn--block"
//             onClick={closeMobileMenu}
//           >
//             Get a Consultation
//           </Link>

//           <div className="mobile-nav__contact">
//             <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="mobile-nav__contact-link">
//               <Phone size={16} />
//               <span>{contactInfo.phone}</span>
//             </a>
//             <a href={`mailto:${contactInfo.email}`} className="mobile-nav__contact-link">
//               <Mail size={16} />
//               <span>{contactInfo.email}</span>
//             </a>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;


// src/components/Header/Header.jsx
// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import './Header.css';

// // Icons
// import { Menu, X, Phone, Mail, ChevronRight } from 'lucide-react';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileOpen, setIsMobileOpen] = useState(false);
//   const location = useLocation();
//   const headerRef = useRef(null);
//   const mobileMenuRef = useRef(null);

//   // Navigation configuration
//   const navItems = [
//     { id: 'nav-home', label: 'Home', path: '/' },
//     { id: 'nav-about', label: 'About', path: '/about' },
//     { id: 'nav-services', label: 'Services', path: '/services' },
//     { id: 'nav-projects', label: 'Projects', path: '/projects' },
//     { id: 'nav-gallery', label: 'Gallery', path: '/gallery' },
//     { id: 'nav-contact', label: 'Contact', path: '/contact' },
//   ];

//   // Handle scroll effect
//   useEffect(() => {
//     let ticking = false;
    
//     const handleScroll = () => {
//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           setIsScrolled(window.scrollY > 50);
//           ticking = false;
//         });
//         ticking = true;
//       }
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close mobile menu on route change
//   useEffect(() => {
//     setIsMobileOpen(false);
//   }, [location]);

//   // Lock body scroll
//   useEffect(() => {
//     if (isMobileOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = '';
//     }
//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [isMobileOpen]);

//   // Handle click outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
//         setIsMobileOpen(false);
//       }
//     };

//     if (isMobileOpen) {
//       document.addEventListener('mousedown', handleClickOutside);
//     }
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [isMobileOpen]);

//   // Handle escape key
//   useEffect(() => {
//     const handleEscape = (event) => {
//       if (event.key === 'Escape') {
//         setIsMobileOpen(false);
//       }
//     };

//     document.addEventListener('keydown', handleEscape);
//     return () => document.removeEventListener('keydown', handleEscape);
//   }, []);

//   const toggleMobileMenu = useCallback(() => {
//     setIsMobileOpen(prev => !prev);
//   }, []);

//   const closeMobileMenu = useCallback(() => {
//     setIsMobileOpen(false);
//   }, []);

//   // Contact info
//   const contactInfo = {
//     phone: '+1 (234) 567-890',
//     email: 'info@fiyabuilders.com',
//   };

//   return (
//     <header
//       ref={headerRef}
//       className={`header ${isScrolled ? 'header--scrolled' : ''}`}
//       role="banner"
//     >
//       <div className="header__container">
//         {/* Logo */}
//         <Link to="/" className="header__logo" aria-label="FIYA BUILDERS Home">
//           <div className="header__logo-wrapper">
//             <span className="header__logo-primary">FIYA</span>
//             <span className="header__logo-secondary">BUILDERS</span>
//           </div>
//           <span className="header__logo-tagline">CONSTRUCTION | CONSULTANCY | CIVIL ENGINEERING</span>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="header__nav" role="navigation" aria-label="Main navigation">
//           <ul className="header__nav-list">
//             {navItems.map((item) => (
//               <li key={item.id} className="header__nav-item">
//                 <NavLink
//                   to={item.path}
//                   className={({ isActive }) =>
//                     `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
//                   }
//                   end={item.path === '/'}
//                 >
//                   {item.label}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Header Actions */}
//         <div className="header__actions">
//           <a
//             href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
//             className="header__phone"
//             aria-label="Call us"
//           >
//             <Phone size={16} />
//             <span>{contactInfo.phone}</span>
//           </a>

//           <Link to="/contact" className="btn btn--primary btn--cta">
//             Get a Consultation
//             <ChevronRight size={16} className="btn__icon" />
//           </Link>

//           {/* Mobile Toggle */}
//           <button
//             className="header__toggle"
//             onClick={toggleMobileMenu}
//             aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
//             aria-expanded={isMobileOpen}
//           >
//             {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Overlay */}
//       <div
//         className={`overlay ${isMobileOpen ? 'overlay--visible' : ''}`}
//         onClick={closeMobileMenu}
//       />

//       {/* Mobile Navigation */}
//       <nav
//         ref={mobileMenuRef}
//         className={`mobile-nav ${isMobileOpen ? 'mobile-nav--open' : ''}`}
//         role="navigation"
//         aria-label="Mobile navigation"
//       >
//         <div className="mobile-nav__header">
//           <div className="mobile-nav__brand-wrapper">
//             <span className="mobile-nav__brand-primary">FIYA</span>
//             <span className="mobile-nav__brand-secondary">BUILDERS</span>
//           </div>
//           <button
//             className="mobile-nav__close"
//             onClick={closeMobileMenu}
//             aria-label="Close menu"
//           >
//             <X size={24} />
//           </button>
//         </div>

//         <ul className="mobile-nav__list">
//           {navItems.map((item) => (
//             <li key={item.id} className="mobile-nav__item">
//               <NavLink
//                 to={item.path}
//                 className={({ isActive }) =>
//                   `mobile-nav__link ${isActive ? 'mobile-nav__link--active' : ''}`
//                 }
//                 onClick={closeMobileMenu}
//               >
//                 {item.label}
//               </NavLink>
//             </li>
//           ))}
//         </ul>

//         <div className="mobile-nav__footer">
//           <Link
//             to="/contact"
//             className="btn btn--primary btn--block"
//             onClick={closeMobileMenu}
//           >
//             Get a Consultation
//           </Link>

//           <div className="mobile-nav__contact">
//             <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="mobile-nav__contact-link">
//               <Phone size={16} />
//               <span>{contactInfo.phone}</span>
//             </a>
//             <a href={`mailto:${contactInfo.email}`} className="mobile-nav__contact-link">
//               <Mail size={16} />
//               <span>{contactInfo.email}</span>
//             </a>
//           </div>

//           <div className="mobile-nav__tagline">
//             CONSTRUCTION | CONSULTANCY | CIVIL ENGINEERING
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;


import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.css';

// Icons - Using react-icons
import { 
  FaPhone, 
  FaEnvelope, 
  FaBars, 
  FaTimes,
  FaArrowRight,
  FaMapMarkerAlt,
  FaClock,
} from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Navigation configuration - Simple, no dropdowns
  const navItems = [
    { id: 'nav-home', label: 'Home', path: '/' },
    { id: 'nav-about', label: 'About Us', path: '/about' },
    { id: 'nav-services', label: 'Services', path: '/services' },
    { id: 'nav-projects', label: 'Projects', path: '/projects' },
    { id: 'nav-gallery', label: 'Gallery', path: '/gallery' },
    { id: 'nav-contact', label: 'Contact', path: '/contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  // Lock body scroll
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileOpen(false);
      }
    };

    if (isMobileOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  // Contact info
  const contactInfo = {
    phone: '+91 99999 99999',
    email: 'info@fiyabuilders.com',
    address: 'Pondicherry, India',
  };

  return (
    <>
      {/* =================================================
          TOP BAR - Clean and Professional
      ================================================= */}
      <div className="fya-topbar">
        <div className="fya-container">
          <div className="fya-topbar-content">
            <div className="fya-topbar-left">
              <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="fya-topbar-link">
                <FaPhone className="fya-topbar-icon" />
                <span className="fya-topbar-text">{contactInfo.phone}</span>
              </a>
              <span className="fya-topbar-separator">•</span>
              <a href={`mailto:${contactInfo.email}`} className="fya-topbar-link">
                <FaEnvelope className="fya-topbar-icon" />
                <span className="fya-topbar-text">{contactInfo.email}</span>
              </a>
            </div>
            
            <div className="fya-topbar-right">
              <span className="fya-topbar-link">
                <FaClock className="fya-topbar-icon" />
                <span className="fya-topbar-text">Mon-Sat: 9:00 AM - 7:00 PM</span>
              </span>
              <span className="fya-topbar-separator">•</span>
              <span className="fya-topbar-link">
                <FaMapMarkerAlt className="fya-topbar-icon" />
                <span className="fya-topbar-text">{contactInfo.address}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================
          MAIN HEADER - Bold and Clear
      ================================================= */}
      <header
        ref={headerRef}
        className={`fya-header ${isScrolled ? 'fya-header--scrolled' : ''}`}
        role="banner"
      >
        <div className="fya-container">
          <div className="fya-header-content">
            
            {/* Logo - Prominent and Clear */}
            <Link to="/" className="fya-logo" aria-label="FIYA BUILDERS Home">
              <div className="fya-logo-box">
                <span className="fya-logo-main">FIYA</span>
                <span className="fya-logo-sub">BUILDERS</span>
              </div>
            </Link>

            {/* Desktop Navigation - Simple, No Dropdowns */}
            <nav className="fya-nav" role="navigation" aria-label="Main navigation">
              <ul className="fya-nav-list">
                {navItems.map((item) => (
                  <li key={item.id} className="fya-nav-item">
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `fya-nav-link ${isActive ? 'fya-nav-link--active' : ''}`
                      }
                      end={item.path === '/'}
                    >
                      <span className="fya-nav-text">{item.label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Header Actions - Clear CTA */}
            <div className="fya-header-actions">
              <Link to="/contact" className="fya-btn-consultation">
                <span className="fya-btn-text">FREE CONSULTATION</span>
                <FaArrowRight className="fya-btn-icon" />
              </Link>

              {/* Mobile Toggle - Visible */}
              <button
                className="fya-toggle"
                onClick={toggleMobileMenu}
                aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileOpen}
              >
                {isMobileOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* =================================================
          MOBILE OVERLAY
      ================================================= */}
      <div
        className={`fya-overlay ${isMobileOpen ? 'fya-overlay--visible' : ''}`}
        onClick={closeMobileMenu}
      />

      {/* =================================================
          MOBILE NAVIGATION - Simple and Clear
      ================================================= */}
      <nav
        ref={mobileMenuRef}
        className={`fya-mobile-nav ${isMobileOpen ? 'fya-mobile-nav--open' : ''}`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="fya-mobile-header">
          <div className="fya-mobile-logo">
            <span className="fya-logo-main">FIYA</span>
            <span className="fya-logo-sub">BUILDERS</span>
          </div>
          <button
            className="fya-mobile-close"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        <ul className="fya-mobile-list">
          {navItems.map((item) => (
            <li key={item.id} className="fya-mobile-item">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `fya-mobile-link ${isActive ? 'fya-mobile-link--active' : ''}`
                }
                onClick={closeMobileMenu}
                end={item.path === '/'}
              >
                <span className="fya-mobile-link-text">{item.label}</span>
                <FaArrowRight className="fya-mobile-link-arrow" />
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="fya-mobile-footer">
          <Link
            to="/contact"
            className="fya-btn-consultation fya-btn-block"
            onClick={closeMobileMenu}
          >
            <span className="fya-btn-text">FREE CONSULTATION</span>
            <FaArrowRight className="fya-btn-icon" />
          </Link>

          <div className="fya-mobile-contact">
            <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="fya-mobile-contact-link">
              <FaPhone className="fya-mobile-contact-icon" />
              <span className="fya-mobile-contact-text">{contactInfo.phone}</span>
            </a>
            <a href={`mailto:${contactInfo.email}`} className="fya-mobile-contact-link">
              <FaEnvelope className="fya-mobile-contact-icon" />
              <span className="fya-mobile-contact-text">{contactInfo.email}</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;