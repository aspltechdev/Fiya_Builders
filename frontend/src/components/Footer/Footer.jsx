import {
  FaArrowUp,
  FaArrowRight,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaPaperPlane,
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    const email = e.target.email.value;
    console.log("Newsletter subscription:", email);
    e.target.reset();
    // You can add API call here
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  const serviceLinks = [
    { label: "Residential Construction", href: "/services#residential" },
    { label: "Commercial Construction", href: "/services#commercial" },
    { label: "Architectural Design", href: "/services#design" },
    { label: "Turnkey Construction", href: "/services#turnkey" },
    { label: "Interior Solutions", href: "/services#interior" },
    { label: "Renovation & Restoration", href: "/services#renovation" },
  ];

  return (
    <footer className="fya-footer">
      
      {/* =================================================
          NEWSLETTER SECTION
      ================================================= */}
 

      {/* =================================================
          MAIN FOOTER
      ================================================= */}
      <div className="fya-footer-main">
        <div className="fya-container">
          
          {/* TOP SECTION */}
          <div className="fya-footer-top">
            
            {/* Brand Column */}
            <div className="fya-footer-brand">
              <a href="/" className="fya-footer-logo">
                <span className="fya-logo-white">FIYA</span>
                <span className="fya-logo-gold">BUILDERS</span>
              </a>
              <p className="fya-footer-description">
                Building spaces with purpose, precision
                and lasting value. Your trusted partner
                in construction excellence since 2014.
              </p>
              
              <div className="fya-footer-certifications">
                <span className="fya-cert-badge">ISO 9001:2015</span>
                <span className="fya-cert-badge">ISO 14001:2015</span>
              </div>
              
              <div className="fya-footer-social">
                <a 
                  href="https://www.instagram.com/" 
                  target="_blank" 
                  rel="noreferrer"
                  aria-label="Follow us on Instagram"
                  title="Instagram"
                >
                  <FaInstagram size={18} />
                </a>
                <a 
                  href="https://www.linkedin.com/" 
                  target="_blank" 
                  rel="noreferrer"
                  aria-label="Follow us on LinkedIn"
                  title="LinkedIn"
                >
                  <FaLinkedinIn size={18} />
                </a>
                <a 
                  href="https://www.facebook.com/" 
                  target="_blank" 
                  rel="noreferrer"
                  aria-label="Follow us on Facebook"
                  title="Facebook"
                >
                  <FaFacebookF size={18} />
                </a>
                <a 
                  href="https://twitter.com/" 
                  target="_blank" 
                  rel="noreferrer"
                  aria-label="Follow us on Twitter"
                  title="Twitter"
                >
                  <FaTwitter size={18} />
                </a>
              </div>
            </div>

            {/* Navigation Columns */}
            <div className="fya-footer-navigation">
              
              {/* Quick Links */}
              <div className="fya-footer-column">
                <span className="fya-footer-heading">QUICK LINKS</span>
                <ul className="fya-footer-links">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>
                        <span className="fya-link-arrow">→</span>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div className="fya-footer-column">
                <span className="fya-footer-heading">OUR SERVICES</span>
                <ul className="fya-footer-links">
                  {serviceLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>
                        <span className="fya-link-arrow">→</span>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="fya-footer-column">
                <span className="fya-footer-heading">CONTACT US</span>
                <ul className="fya-footer-contact-list">
                  <li>
                    <div className="fya-contact-icon">
                      <FaPhone size={14} />
                    </div>
                    <div>
                      <span className="fya-contact-label">Phone</span>
                      <a href="tel:+919999999999">+91 99999 99999</a>
                    </div>
                  </li>
                  <li>
                    <div className="fya-contact-icon">
                      <FaEnvelope size={14} />
                    </div>
                    <div>
                      <span className="fya-contact-label">Email</span>
                      <a href="mailto:info@fiyabuilders.com">
                        info@fiyabuilders.com
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="fya-contact-icon">
                      <FaMapMarkerAlt size={14} />
                    </div>
                    <div>
                      <span className="fya-contact-label">Address</span>
                      <span>Pondicherry, Tamil Nadu, India</span>
                    </div>
                  </li>
                </ul>
                
                <a href="/contact" className="fya-footer-cta">
                  <span>GET IN TOUCH</span>
                  <FaArrowRight size={14} />
                </a>
              </div>

            </div>
          </div>

    

          {/* BOTTOM BAR */}
          <div className="fya-footer-bottom">
            <div className="fya-footer-copyright">
              <span>© {currentYear} FIYA Builders. All rights reserved.</span>
            </div>
            
            <div className="fya-footer-legal">
              <a href="/privacy-policy">Privacy Policy</a>
              <span className="fya-legal-divider">|</span>
              <a href="/terms">Terms of Service</a>
              <span className="fya-legal-divider">|</span>
              <a href="/sitemap">Sitemap</a>
            </div>
            
            <button
              type="button"
              className="fya-footer-top-button"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <span>BACK TO TOP</span>
              <span className="fya-footer-top-icon">
                <FaArrowUp size={14} />
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* =================================================
          PREMIUM ACCENT BAR
      ================================================= */}
   

    </footer>
  );
};

export default Footer;