// src/pages/About/sections/CTASection.jsx
import { useRef, useEffect } from "react";
import { ArrowUpRight, Phone, Mail, ChevronRight, Clock, Shield, Users } from "lucide-react";
import "./CTASection.css";

const CTASection = () => {
  const ctaRef = useRef(null);

  // Scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fya-cta__animate--visible");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    document.querySelectorAll(".fya-cta__animate").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="fya-cta" ref={ctaRef}>
      <div className="fya-cta__wrapper">
        <div className="fya-cta__box fya-cta__animate">
          {/* Background Image */}
          <div className="fya-cta__media">
            <img
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80"
              alt="Construction Background"
              className="fya-cta__media-image"
            />
            <div className="fya-cta__media-overlay" />
            <div className="fya-cta__media-pattern" />
          </div>

          {/* Content */}
          <div className="fya-cta__inner">
            <div className="fya-cta__header">
              <span className="fya-cta__badge">
                <span className="fya-cta__badge-dot" />
                READY TO BUILD?
              </span>
            </div>

            <h2 className="fya-cta__heading">
              Let's Create Something
              <br />
              <span className="fya-cta__heading-highlight">Extraordinary Together</span>
            </h2>

            <p className="fya-cta__description">
              Partner with us for your next project and experience
              the difference of working with industry leaders.
            </p>

            <div className="fya-cta__features-grid">
              <div className="fya-cta__feature">
                <div className="fya-cta__feature-icon">
                  <Phone size={16} />
                </div>
                <span className="fya-cta__feature-text">Quick Response</span>
              </div>
              <div className="fya-cta__feature">
                <div className="fya-cta__feature-icon">
                  <Mail size={16} />
                </div>
                <span className="fya-cta__feature-text">Free Consultation</span>
              </div>
              <div className="fya-cta__feature">
                <div className="fya-cta__feature-icon">
                  <Clock size={16} />
                </div>
                <span className="fya-cta__feature-text">On-Time Delivery</span>
              </div>
              <div className="fya-cta__feature">
                <div className="fya-cta__feature-icon">
                  <Shield size={16} />
                </div>
                <span className="fya-cta__feature-text">Quality Guaranteed</span>
              </div>
            </div>

            <div className="fya-cta__actions">
              <a href="/contact" className="fya-cta__btn fya-cta__btn--primary">
                <span className="fya-cta__btn-text">START A CONVERSATION</span>
                <ArrowUpRight className="fya-cta__btn-icon" size={18} />
              </a>
              <a href="/projects" className="fya-cta__btn fya-cta__btn--secondary">
                <span className="fya-cta__btn-text">VIEW OUR WORK</span>
                <ChevronRight className="fya-cta__btn-icon" size={18} />
              </a>
            </div>

            <div className="fya-cta__footer">
              <Users className="fya-cta__footer-icon" size={16} />
              <span className="fya-cta__footer-text">
                No obligation. Just a conversation about your vision.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;