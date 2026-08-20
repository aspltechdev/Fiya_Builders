import { FaArrowRight, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCalendarCheck, FaHardHat } from "react-icons/fa";

import "./ConsultationCTA.css";

const ConsultationCTA = () => {
  return (
    <section className="fya-cta" id="start-project">
      {/* Background Image */}
      <div className="fya-cta-background">
        <img 
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80" 
          alt="Construction Background"
        />
        <div className="fya-cta-overlay" />
      </div>

      <div className="fya-container">
        
        {/* =========================================
            TOP LABEL
        ========================================= */}
        <div className="fya-cta-header">
          <div className="fya-section-label">
            <span className="fya-section-number">09</span>
            <span className="fya-section-label-text">START A PROJECT</span>
            <span className="fya-section-line" />
          </div>
        </div>

        {/* =========================================
            MAIN CONTENT
        ========================================= */}
        <div className="fya-cta-content">
          <div className="fya-cta-left">
            <span className="fya-cta-badge">
              <FaHardHat className="fya-badge-icon" />
              HAVE A VISION?
            </span>
            
            <h2 className="fya-cta-title">
              Let's Build
              <br />
              Something <span className="fya-text-gold">Lasting</span>
            </h2>
          </div>

          <div className="fya-cta-right">
            <p className="fya-cta-description">
              Whether you're planning a new home, commercial space or
              large-scale project, let's start with a conversation.
            </p>

            <div className="fya-cta-features">
              <div className="fya-cta-feature">
                <FaCalendarCheck className="fya-feature-icon" />
                <span>Free Consultation</span>
              </div>
              <div className="fya-cta-feature">
                <FaPhone className="fya-feature-icon" />
                <span>Quick Response</span>
              </div>
              <div className="fya-cta-feature">
                <FaMapMarkerAlt className="fya-feature-icon" />
                <span>On-Site Visit</span>
              </div>
            </div>

            <div className="fya-cta-actions">
              <a href="#contact" className="fya-cta-button-primary">
                <span>Discuss Your Project</span>
                <FaArrowRight className="fya-button-icon" />
              </a>
              
              <a href="tel:+919999999999" className="fya-cta-button-secondary">
                <FaPhone className="fya-button-icon" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>

        {/* =========================================
            BOTTOM INFO
        ========================================= */}
        <div className="fya-cta-bottom">
          <div className="fya-bottom-item">
            <span className="fya-bottom-label">COMPANY</span>
            <span className="fya-bottom-value">FIYA BUILDERS</span>
          </div>
          
          <div className="fya-bottom-divider" />
          
          <div className="fya-bottom-item">
            <span className="fya-bottom-label">SERVICES</span>
            <span className="fya-bottom-value">CONSTRUCTION · ENGINEERING · DESIGN</span>
          </div>
          
          <div className="fya-bottom-divider" />
          
          <div className="fya-bottom-item">
            <span className="fya-bottom-label">LOCATION</span>
            <span className="fya-bottom-value">PONDICHERRY · INDIA</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ConsultationCTA;