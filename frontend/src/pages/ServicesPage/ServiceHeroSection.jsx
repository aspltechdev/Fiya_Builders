// src/pages/Services/sections/HeroSection.jsx
import { useRef, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import "./ServiceHeroSection.css";

const ServiceHeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fya-services__animate--visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".fya-services__animate").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="fya-services__hero" ref={heroRef}>
      {/* Background */}
      <div className="fya-services__hero-bg">
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80"
          alt="Premium Construction"
          className="fya-services__hero-image"
        />
        <div className="fya-services__hero-gradient" />
        <div className="fya-services__hero-overlay-text">
          {["E","X","C","E","L","L","E","N","C","E"].map((letter, i) => (
            <span key={i} className="fya-services__hero-overlay-letter">{letter}</span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="fya-services__hero-container">
        <div className="fya-services__hero-top fya-services__animate">
          <div className="fya-services__hero-label">
            <span className="fya-services__hero-number">01</span>
            <span className="fya-services__hero-label-text">OUR SERVICES</span>
            <span className="fya-services__hero-line" />
          </div>
        </div>

        <div className="fya-services__hero-main fya-services__animate fya-services__animate--delay-1">
          <h1 className="fya-services__hero-title">
            Crafting Spaces
            <br />
            <span className="fya-services__hero-highlight">With Precision</span>
            <br />
            <span className="fya-services__hero-highlight-gold">& Excellence</span>
          </h1>
          <p className="fya-services__hero-subtitle">
            From initial concept to final construction, we deliver
            comprehensive building solutions with unmatched quality
            and attention to detail.
          </p>
          <div className="fya-services__hero-actions">
            <a href="#services" className="fya-services__hero-btn fya-services__hero-btn--primary">
              Explore Our Work
              <ArrowDown size={18} />
            </a>
            <a href="/contact" className="fya-services__hero-btn fya-services__hero-btn--secondary">
              Get Consultation
            </a>
          </div>
        </div>

        <div className="fya-services__hero-bottom fya-services__animate fya-services__animate--delay-2">
          <div className="fya-services__hero-scroll">
            <ArrowDown size={16} strokeWidth={1.5} />
            <span>SCROLL TO EXPLORE</span>
          </div>
          <div className="fya-services__hero-counter">
            <span className="fya-services__counter-current">01</span>
            <span className="fya-services__counter-line" />
            <span className="fya-services__counter-total">04</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroSection;