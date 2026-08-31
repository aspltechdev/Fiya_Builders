

// // // src/components/Header/Header.jsx
// // import React, { useState, useEffect, useCallback, useRef } from 'react';
// // import { Link, NavLink, useLocation } from 'react-router-dom';
// // import './Header.css';

// // // Icons
// // import { 
// //   FaPhone, 
// //   FaEnvelope, 
// //   FaBars, 
// //   FaTimes,
// //   FaArrowRight,
// //   FaMapMarkerAlt,
// //   FaClock,
// //   FaFacebookF,
// //   FaInstagram,
// //   FaYoutube,
// //   FaLinkedinIn,
// // } from 'react-icons/fa';

// // const Header = () => {
// //   const [isScrolled, setIsScrolled] = useState(false);
// //   const [isMobileOpen, setIsMobileOpen] = useState(false);
// //   const location = useLocation();
// //   const headerRef = useRef(null);
// //   const mobileMenuRef = useRef(null);

// //   // Navigation configuration
// //   const navItems = [
// //     { id: 'nav-home', label: 'Home', path: '/' },
// //     { id: 'nav-about', label: 'About', path: '/about' },
// //     { id: 'nav-services', label: 'Services', path: '/services' },
// //     { id: 'nav-projects', label: 'Projects', path: '/projects' },
// //     { id: 'nav-gallery', label: 'Gallery', path: '/gallery' },
// //     { id: 'nav-contact', label: 'Contact', path: '/contact' },
// //   ];

// //   // Handle scroll effect
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsScrolled(window.scrollY > 30);
// //     };

// //     window.addEventListener('scroll', handleScroll, { passive: true });
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   // Close mobile menu on route change
// //   useEffect(() => {
// //     setIsMobileOpen(false);
// //   }, [location]);

// //   // Lock body scroll
// //   useEffect(() => {
// //     if (isMobileOpen) {
// //       document.body.style.overflow = 'hidden';
// //     } else {
// //       document.body.style.overflow = '';
// //     }
// //     return () => {
// //       document.body.style.overflow = '';
// //     };
// //   }, [isMobileOpen]);

// //   // Handle click outside
// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
// //         setIsMobileOpen(false);
// //       }
// //     };

// //     if (isMobileOpen) {
// //       document.addEventListener('mousedown', handleClickOutside);
// //     }
// //     return () => document.removeEventListener('mousedown', handleClickOutside);
// //   }, [isMobileOpen]);

// //   // Handle escape key
// //   useEffect(() => {
// //     const handleEscape = (event) => {
// //       if (event.key === 'Escape') {
// //         setIsMobileOpen(false);
// //       }
// //     };

// //     document.addEventListener('keydown', handleEscape);
// //     return () => document.removeEventListener('keydown', handleEscape);
// //   }, []);

// //   const toggleMobileMenu = useCallback(() => {
// //     setIsMobileOpen(prev => !prev);
// //   }, []);

// //   const closeMobileMenu = useCallback(() => {
// //     setIsMobileOpen(false);
// //   }, []);

// //   // Contact info
// //   const contactInfo = {
// //     phone: '+91 99999 99999',
// //     email: 'info@fiyabuilders.com',
// //     address: 'Pondicherry, India',
// //   };

// //   return (
// //     <>
// //       {/* =================================================
// //           TOP BAR - Premium Info Bar
// //       ================================================= */}
// //       <div className="fya-topbar">
// //         <div className="fya-topbar__container">
// //           <div className="fya-topbar__left">
// //             <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="fya-topbar__link">
// //               <FaPhone className="fya-topbar__icon" />
// //               <span>{contactInfo.phone}</span>
// //             </a>
// //             <span className="fya-topbar__divider">|</span>
// //             <a href={`mailto:${contactInfo.email}`} className="fya-topbar__link">
// //               <FaEnvelope className="fya-topbar__icon" />
// //               <span>{contactInfo.email}</span>
// //             </a>
// //             <span className="fya-topbar__divider">|</span>
// //             <span className="fya-topbar__link">
// //               <FaClock className="fya-topbar__icon" />
// //               <span>Mon-Sat: 9:00 AM - 7:00 PM</span>
// //             </span>
// //           </div>
          
// //           <div className="fya-topbar__right">
// //             <span className="fya-topbar__link">
// //               <FaMapMarkerAlt className="fya-topbar__icon" />
// //               <span>{contactInfo.address}</span>
// //             </span>
// //             <div className="fya-topbar__social">
// //               <a href="#" aria-label="Facebook" className="fya-topbar__social-link">
// //                 <FaFacebookF />
// //               </a>
// //               <a href="#" aria-label="Instagram" className="fya-topbar__social-link">
// //                 <FaInstagram />
// //               </a>
// //               <a href="#" aria-label="LinkedIn" className="fya-topbar__social-link">
// //                 <FaLinkedinIn />
// //               </a>
// //               <a href="#" aria-label="YouTube" className="fya-topbar__social-link">
// //                 <FaYoutube />
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* =================================================
// //           MAIN HEADER
// //       ================================================= */}
// //       <header
// //         ref={headerRef}
// //         className={`fya-header ${isScrolled ? 'fya-header--scrolled' : ''}`}
// //         role="banner"
// //       >
// //         <div className="fya-header__container">
// //           {/* Logo */}
// //           <Link to="/" className="fya-logo" aria-label="FIYA BUILDERS Home">
// //             <div className="fya-logo__mark">
// //               <span className="fya-logo__primary">FIYA</span>
// //               <span className="fya-logo__secondary">BUILDERS</span>
// //             </div>
// //             <span className="fya-logo__tagline">Construction • Consultancy • Civil Engineering</span>
// //           </Link>

// //           {/* Desktop Navigation */}
// //           <nav className="fya-nav" role="navigation" aria-label="Main navigation">
// //             <ul className="fya-nav__list">
// //               {navItems.map((item) => (
// //                 <li key={item.id} className="fya-nav__item">
// //                   <NavLink
// //                     to={item.path}
// //                     className={({ isActive }) =>
// //                       `fya-nav__link ${isActive ? 'fya-nav__link--active' : ''}`
// //                     }
// //                     end={item.path === '/'}
// //                   >
// //                     <span className="fya-nav__text">{item.label}</span>
// //                     <span className="fya-nav__indicator" />
// //                   </NavLink>
// //                 </li>
// //               ))}
// //             </ul>
// //           </nav>

// //           {/* Header Actions */}
// //           <div className="fya-header__actions">
// //             <Link to="/contact" className="fya-btn fya-btn--primary">
// //               <span>Get Consultation</span>
// //               <FaArrowRight className="fya-btn__icon" />
// //             </Link>

// //             {/* Mobile Toggle */}
// //             <button
// //               className="fya-toggle"
// //               onClick={toggleMobileMenu}
// //               aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
// //               aria-expanded={isMobileOpen}
// //             >
// //               {isMobileOpen ? <FaTimes /> : <FaBars />}
// //             </button>
// //           </div>
// //         </div>
// //       </header>

// //       {/* =================================================
// //           MOBILE OVERLAY
// //       ================================================= */}
// //       <div
// //         className={`fya-overlay ${isMobileOpen ? 'fya-overlay--visible' : ''}`}
// //         onClick={closeMobileMenu}
// //       />

// //       {/* =================================================
// //           MOBILE NAVIGATION
// //       ================================================= */}
// //       <nav
// //         ref={mobileMenuRef}
// //         className={`fya-mobile-nav ${isMobileOpen ? 'fya-mobile-nav--open' : ''}`}
// //         role="navigation"
// //         aria-label="Mobile navigation"
// //       >
// //         <div className="fya-mobile-nav__header">
// //           <div className="fya-mobile-nav__logo">
// //             <span className="fya-logo__primary">FIYA</span>
// //             <span className="fya-logo__secondary">BUILDERS</span>
// //           </div>
// //           <button
// //             className="fya-mobile-nav__close"
// //             onClick={closeMobileMenu}
// //             aria-label="Close menu"
// //           >
// //             <FaTimes />
// //           </button>
// //         </div>

// //         <ul className="fya-mobile-nav__list">
// //           {navItems.map((item) => (
// //             <li key={item.id} className="fya-mobile-nav__item">
// //               <NavLink
// //                 to={item.path}
// //                 className={({ isActive }) =>
// //                   `fya-mobile-nav__link ${isActive ? 'fya-mobile-nav__link--active' : ''}`
// //                 }
// //                 onClick={closeMobileMenu}
// //                 end={item.path === '/'}
// //               >
// //                 <span className="fya-mobile-nav__label">{item.label}</span>
// //                 <FaArrowRight className="fya-mobile-nav__arrow" />
// //               </NavLink>
// //             </li>
// //           ))}
// //         </ul>

// //         <div className="fya-mobile-nav__footer">
// //           <Link
// //             to="/contact"
// //             className="fya-btn fya-btn--primary fya-btn--block"
// //             onClick={closeMobileMenu}
// //           >
// //             <span>Get Consultation</span>
// //             <FaArrowRight className="fya-btn__icon" />
// //           </Link>

// //           <div className="fya-mobile-nav__contact">
// //             <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="fya-mobile-nav__contact-link">
// //               <FaPhone className="fya-mobile-nav__contact-icon" />
// //               <span>{contactInfo.phone}</span>
// //             </a>
// //             <a href={`mailto:${contactInfo.email}`} className="fya-mobile-nav__contact-link">
// //               <FaEnvelope className="fya-mobile-nav__contact-icon" />
// //               <span>{contactInfo.email}</span>
// //             </a>
// //           </div>

// //           <div className="fya-mobile-nav__social">
// //             <a href="#" aria-label="Facebook" className="fya-mobile-nav__social-link">
// //               <FaFacebookF />
// //             </a>
// //             <a href="#" aria-label="Instagram" className="fya-mobile-nav__social-link">
// //               <FaInstagram />
// //             </a>
// //             <a href="#" aria-label="LinkedIn" className="fya-mobile-nav__social-link">
// //               <FaLinkedinIn />
// //             </a>
// //             <a href="#" aria-label="YouTube" className="fya-mobile-nav__social-link">
// //               <FaYoutube />
// //             </a>
// //           </div>
// //         </div>
// //       </nav>
// //     </>
// //   );
// // };

// // export default Header;
// // src/components/Header/Header.jsx
// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import './Header.css';

// // Icons
// import { 
//   FaPhone, 
//   FaEnvelope, 
//   FaBars, 
//   FaTimes,
//   FaArrowRight,
//   FaMapMarkerAlt,
//   FaClock,
//   FaFacebookF,
//   FaInstagram,
//   FaYoutube,
//   FaLinkedinIn,
// } from 'react-icons/fa';

// // Import your logo image
// // Option 1: If logo is in src/assets/
// import logoImage from '../../assets/logo.png'; // Adjust path based on your file structure

// // Option 2: If logo is in public/assets/
// // const logoImage = '/assets/logo.png';

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
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 30);
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
//     phone: '+91 99999 99999',
//     email: 'info@fiyabuilders.com',
//     address: 'Pondicherry, India',
//   };

//   return (
//     <>
//       {/* =================================================
//           TOP BAR - Premium Info Bar
//       ================================================= */}
//       <div className="fya-topbar">
//         <div className="fya-topbar__container">
//           <div className="fya-topbar__left">
//             <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="fya-topbar__link">
//               <FaPhone className="fya-topbar__icon" />
//               <span>{contactInfo.phone}</span>
//             </a>
//             <span className="fya-topbar__divider">|</span>
//             <a href={`mailto:${contactInfo.email}`} className="fya-topbar__link">
//               <FaEnvelope className="fya-topbar__icon" />
//               <span>{contactInfo.email}</span>
//             </a>
//             <span className="fya-topbar__divider">|</span>
//             <span className="fya-topbar__link">
//               <FaClock className="fya-topbar__icon" />
//               <span>Mon-Sat: 9:00 AM - 7:00 PM</span>
//             </span>
//           </div>
          
//           <div className="fya-topbar__right">
//             <span className="fya-topbar__link">
//               <FaMapMarkerAlt className="fya-topbar__icon" />
//               <span>{contactInfo.address}</span>
//             </span>
//             <div className="fya-topbar__social">
//               <a href="#" aria-label="Facebook" className="fya-topbar__social-link">
//                 <FaFacebookF />
//               </a>
//               <a href="#" aria-label="Instagram" className="fya-topbar__social-link">
//                 <FaInstagram />
//               </a>
//               <a href="#" aria-label="LinkedIn" className="fya-topbar__social-link">
//                 <FaLinkedinIn />
//               </a>
//               <a href="#" aria-label="YouTube" className="fya-topbar__social-link">
//                 <FaYoutube />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* =================================================
//           MAIN HEADER
//       ================================================= */}
//       <header
//         ref={headerRef}
//         className={`fya-header ${isScrolled ? 'fya-header--scrolled' : ''}`}
//         role="banner"
//       >
//         <div className="fya-header__container">
//           {/* Logo with Image */}
//           <Link to="/" className="fya-logo" aria-label="FIYA BUILDERS Home">
//             <img 
//               src={logoImage} 
//               alt="FIYA BUILDERS Logo" 
//               className="fya-logo__image"
//             />
//             <div className="fya-logo__text">
//               <div className="fya-logo__mark">
//                 <span className="fya-logo__primary">FIYA</span>
//                 <span className="fya-logo__secondary">BUILDERS</span>
//               </div>
//               <span className="fya-logo__tagline">Construction • Consultancy • Civil Engineering</span>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="fya-nav" role="navigation" aria-label="Main navigation">
//             <ul className="fya-nav__list">
//               {navItems.map((item) => (
//                 <li key={item.id} className="fya-nav__item">
//                   <NavLink
//                     to={item.path}
//                     className={({ isActive }) =>
//                       `fya-nav__link ${isActive ? 'fya-nav__link--active' : ''}`
//                     }
//                     end={item.path === '/'}
//                   >
//                     <span className="fya-nav__text">{item.label}</span>
//                     <span className="fya-nav__indicator" />
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           {/* Header Actions */}
//           <div className="fya-header__actions">
//             <Link to="/contact" className="fya-btn fya-btn--primary">
//               <span>Get Consultation</span>
//               <FaArrowRight className="fya-btn__icon" />
//             </Link>

//             {/* Mobile Toggle */}
//             <button
//               className="fya-toggle"
//               onClick={toggleMobileMenu}
//               aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
//               aria-expanded={isMobileOpen}
//             >
//               {isMobileOpen ? <FaTimes /> : <FaBars />}
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* =================================================
//           MOBILE OVERLAY
//       ================================================= */}
//       <div
//         className={`fya-overlay ${isMobileOpen ? 'fya-overlay--visible' : ''}`}
//         onClick={closeMobileMenu}
//       />

//       {/* =================================================
//           MOBILE NAVIGATION
//       ================================================= */}
//       <nav
//         ref={mobileMenuRef}
//         className={`fya-mobile-nav ${isMobileOpen ? 'fya-mobile-nav--open' : ''}`}
//         role="navigation"
//         aria-label="Mobile navigation"
//       >
//         <div className="fya-mobile-nav__header">
//           <Link to="/" className="fya-mobile-nav__logo" onClick={closeMobileMenu}>
//             <img 
//               src={logoImage} 
//               alt="FIYA BUILDERS Logo" 
//               className="fya-mobile-nav__logo-image"
//             />
//             <div className="fya-mobile-nav__logo-text">
//               <span className="fya-logo__primary">FIYA</span>
//               <span className="fya-logo__secondary">BUILDERS</span>
//             </div>
//           </Link>
//           <button
//             className="fya-mobile-nav__close"
//             onClick={closeMobileMenu}
//             aria-label="Close menu"
//           >
//             <FaTimes />
//           </button>
//         </div>

//         <ul className="fya-mobile-nav__list">
//           {navItems.map((item) => (
//             <li key={item.id} className="fya-mobile-nav__item">
//               <NavLink
//                 to={item.path}
//                 className={({ isActive }) =>
//                   `fya-mobile-nav__link ${isActive ? 'fya-mobile-nav__link--active' : ''}`
//                 }
//                 onClick={closeMobileMenu}
//                 end={item.path === '/'}
//               >
//                 <span className="fya-mobile-nav__label">{item.label}</span>
//                 <FaArrowRight className="fya-mobile-nav__arrow" />
//               </NavLink>
//             </li>
//           ))}
//         </ul>

//         <div className="fya-mobile-nav__footer">
//           <Link
//             to="/contact"
//             className="fya-btn fya-btn--primary fya-btn--block"
//             onClick={closeMobileMenu}
//           >
//             <span>Get Consultation</span>
//             <FaArrowRight className="fya-btn__icon" />
//           </Link>

//           <div className="fya-mobile-nav__contact">
//             <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="fya-mobile-nav__contact-link">
//               <FaPhone className="fya-mobile-nav__contact-icon" />
//               <span>{contactInfo.phone}</span>
//             </a>
//             <a href={`mailto:${contactInfo.email}`} className="fya-mobile-nav__contact-link">
//               <FaEnvelope className="fya-mobile-nav__contact-icon" />
//               <span>{contactInfo.email}</span>
//             </a>
//           </div>

//           <div className="fya-mobile-nav__social">
//             <a href="#" aria-label="Facebook" className="fya-mobile-nav__social-link">
//               <FaFacebookF />
//             </a>
//             <a href="#" aria-label="Instagram" className="fya-mobile-nav__social-link">
//               <FaInstagram />
//             </a>
//             <a href="#" aria-label="LinkedIn" className="fya-mobile-nav__social-link">
//               <FaLinkedinIn />
//             </a>
//             <a href="#" aria-label="YouTube" className="fya-mobile-nav__social-link">
//               <FaYoutube />
//             </a>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Header;

// src/components/Header/Header.jsx
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.css';

// Icons
import { 
  FaPhone, 
  FaEnvelope, 
  FaBars, 
  FaTimes,
  FaArrowRight,
} from 'react-icons/fa';

// Import your logo image
import logoImage from '../../assets/logo.png'; // Adjust path as needed

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Navigation configuration
  const navItems = [
    { id: 'nav-home', label: 'Home', path: '/' },
    { id: 'nav-about', label: 'About', path: '/about' },
    { id: 'nav-services', label: 'Services', path: '/services' },
    { id: 'nav-projects', label: 'Projects', path: '/projects' },
    { id: 'nav-gallery', label: 'Gallery', path: '/gallery' },
    { id: 'nav-contact', label: 'Contact', path: '/contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
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
    phone: '+91 88077 55674',
    email: 'info@fiyabuilders.com',
  };

  return (
    <>
      {/* =================================================
          TOP BAR - Minimal
      ================================================= */}
      <div className="fya-topbar">
        <div className="fya-topbar__container">
          <div className="fya-topbar__left">
            <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="fya-topbar__link">
              <FaPhone className="fya-topbar__icon" />
              <span>{contactInfo.phone}</span>
            </a>
            <span className="fya-topbar__divider">|</span>
            <a href={`mailto:${contactInfo.email}`} className="fya-topbar__link">
              <FaEnvelope className="fya-topbar__icon" />
              <span>{contactInfo.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* =================================================
          MAIN HEADER
      ================================================= */}
      <header
        ref={headerRef}
        className={`fya-header ${isScrolled ? 'fya-header--scrolled' : ''}`}
        role="banner"
      >
        <div className="fya-header__container">
          {/* Logo */}
          <Link to="/" className="fya-logo" aria-label="FIYA BUILDERS Home">
            <img 
              src={logoImage} 
              alt="FIYA BUILDERS" 
              className="fya-logo__image"
            />
            <div className="fya-logo__content">
              <div className="fya-logo__mark">
                <span className="fya-logo__primary">FIYA</span>
                <span className="fya-logo__secondary">BUILDERS</span>
              </div>
              <span className="fya-logo__tagline">CONSTRUCTION · CONSULTANCY · CIVIL ENGINEERING</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="fya-nav" role="navigation" aria-label="Main navigation">
            <ul className="fya-nav__list">
              {navItems.map((item) => (
                <li key={item.id} className="fya-nav__item">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `fya-nav__link ${isActive ? 'fya-nav__link--active' : ''}`
                    }
                    end={item.path === '/'}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Header Actions */}
          <div className="fya-header__actions">
            <Link to="/contact" className="fya-btn fya-btn--primary">
              <span>Get Consultation</span>
              <FaArrowRight className="fya-btn__icon" />
            </Link>

            {/* Mobile Toggle */}
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
      </header>

      {/* =================================================
          MOBILE OVERLAY & MENU
      ================================================= */}
      <div
        className={`fya-overlay ${isMobileOpen ? 'fya-overlay--visible' : ''}`}
        onClick={closeMobileMenu}
      />

      <nav
        ref={mobileMenuRef}
        className={`fya-mobile-nav ${isMobileOpen ? 'fya-mobile-nav--open' : ''}`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="fya-mobile-nav__header">
          <Link to="/" className="fya-mobile-nav__logo" onClick={closeMobileMenu}>
            <img 
              src={logoImage} 
              alt="FIYA BUILDERS" 
              className="fya-mobile-nav__logo-image"
            />
            <span className="fya-mobile-nav__logo-text">FIYA BUILDERS</span>
          </Link>
          <button
            className="fya-mobile-nav__close"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        <ul className="fya-mobile-nav__list">
          {navItems.map((item) => (
            <li key={item.id} className="fya-mobile-nav__item">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `fya-mobile-nav__link ${isActive ? 'fya-mobile-nav__link--active' : ''}`
                }
                onClick={closeMobileMenu}
                end={item.path === '/'}
              >
                {item.label}
                <FaArrowRight className="fya-mobile-nav__arrow" />
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="fya-mobile-nav__footer">
          <Link
            to="/contact"
            className="fya-btn fya-btn--primary fya-btn--block"
            onClick={closeMobileMenu}
          >
            <span>Get Consultation</span>
            <FaArrowRight className="fya-btn__icon" />
          </Link>

          <div className="fya-mobile-nav__contact">
            <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="fya-mobile-nav__contact-link">
              <FaPhone />
              <span>{contactInfo.phone}</span>
            </a>
            <a href={`mailto:${contactInfo.email}`} className="fya-mobile-nav__contact-link">
              <FaEnvelope />
              <span>{contactInfo.email}</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;