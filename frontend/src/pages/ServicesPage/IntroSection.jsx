// src/pages/Services/sections/IntroSection.jsx
import { useRef, useEffect } from "react";
import { Building2, Award, Users, Star } from "lucide-react";
import "./IntroSection.css";

const IntroSection = () => {
  const introRef = useRef(null);

  const stats = [
    { value: "250+", label: "Projects Completed", icon: Building2 },
    { value: "15+", label: "Years Excellence", icon: Award },
    { value: "98%", label: "Client Satisfaction", icon: Star },
    { value: "150+", label: "Expert Team", icon: Users },
  ];

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
    <section className="fya-services__intro" ref={introRef}>
      <div className="fya-services__container">
        <div className="fya-services__intro-grid">
          <div className="fya-services__intro-left fya-services__animate">
            <span className="fya-services__intro-number">01</span>
            <h2 className="fya-services__intro-title">
              Building Beyond
              <br />
              <span className="fya-services__text-red">Expectations</span>
            </h2>
          </div>
          <div className="fya-services__intro-right fya-services__animate fya-services__animate--delay-1">
            <p className="fya-services__intro-description">
              Every project has different requirements. Our services are
              designed to give you the flexibility to work with us from
              a single discipline or through a complete turnkey solution.
            </p>
            <div className="fya-services__intro-stats">
              {stats.map((stat, index) => (
                <div key={index} className="fya-services__stat-item">
                  <stat.icon className="fya-services__stat-icon" />
                  <span className="fya-services__stat-value">{stat.value}</span>
                  <span className="fya-services__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;