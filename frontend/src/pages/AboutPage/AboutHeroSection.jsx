// // src/pages/About/sections/HeroSection.jsx
// import { useRef } from "react";
// import { ArrowDown, ArrowUpRight } from "lucide-react";

// const AboutHeroSection = ({ about, getImageUrl, defaultImages }) => {
//   const heroRef = useRef(null);
  
//   const subtitle = about?.subtitle || "ABOUT FIYA BUILDERS";

//   return (
//     <section className="fya-about__hero" ref={heroRef}>
//       <div className="fya-about__hero-bg">
//         <img
//           src={getImageUrl(about?.image) || defaultImages.hero}
//           alt="FIYA Builders Architecture"
//           className="fya-about__hero-image"
//         />
//         <div className="fya-about__hero-gradient" />
//         <div className="fya-about__hero-overlay-text">
//           {["E","X","C","E","L","L","E","N","C","E"].map((letter, i) => (
//             <span key={i} className="fya-about__hero-overlay-letter">{letter}</span>
//           ))}
//         </div>
//       </div>

//       <div className="fya-container fya-about__hero-container">
//         <div className="fya-about__hero-top fya-about__animate">
//           <div className="fya-about__hero-label">
//             <span className="fya-about__hero-number">01</span>
//             <span className="fya-about__hero-label-text">{subtitle}</span>
//             <span className="fya-about__hero-line" />
//           </div>
//         </div>

//         <div className="fya-about__hero-main fya-about__animate fya-about__animate--delay-1">
//           <h1 className="fya-about__hero-title">
//             Building with
//             <br />
//             <span className="fya-about__hero-highlight">purpose.</span>
//           </h1>
//           <p className="fya-about__hero-subtitle">
//             Construction shaped by experience, precision and a
//             commitment to doing things right.
//           </p>
//           <div className="fya-about__hero-actions">
//             <a href="/projects" className="fya-about__hero-btn fya-about__hero-btn--primary">
//               Explore Our Work <ArrowUpRight size={18} />
//             </a>
//             <a href="/contact" className="fya-about__hero-btn fya-about__hero-btn--secondary">
//               Get Consultation
//             </a>
//           </div>
//         </div>

//         <div className="fya-about__hero-bottom fya-about__animate fya-about__animate--delay-2">
//           <div className="fya-about__hero-scroll">
//             <ArrowDown size={16} strokeWidth={1.5} />
//             <span>SCROLL TO EXPLORE</span>
//           </div>
//           <div className="fya-about__hero-counter">
//             <span className="fya-about__counter-current">01</span>
//             <span className="fya-about__counter-line" />
//             <span className="fya-about__counter-total">06</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutHeroSection;

// src/pages/About/sections/HeroSection.jsx
import { useRef, useEffect } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import './AboutHeroSection.css';

const AboutHeroSection = ({ about, getImageUrl, defaultImages }) => {
  const heroRef = useRef(null);
  
  const subtitle = about?.subtitle || "ABOUT FIYA BUILDERS";

  // Scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fya-about__animate--visible");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    document.querySelectorAll(".fya-about__animate").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="fya-about__hero" ref={heroRef}>
      {/* Background */}
      <div className="fya-about__hero-bg">
        <img
          src={getImageUrl(about?.image) || defaultImages.hero}
          alt="FIYA Builders Architecture"
          className="fya-about__hero-image"
        />
        <div className="fya-about__hero-gradient" />
        <div className="fya-about__hero-overlay-text">
          {["E","X","C","E","L","L","E","N","C","E"].map((letter, i) => (
            <span key={i} className="fya-about__hero-overlay-letter">{letter}</span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="fya-about__hero-container">
        <div className="fya-about__hero-top fya-about__animate">
          <div className="fya-about__hero-label">
            <span className="fya-about__hero-number">01</span>
            <span className="fya-about__hero-label-text">{subtitle}</span>
            <span className="fya-about__hero-line" />
          </div>
        </div>

        <div className="fya-about__hero-main fya-about__animate fya-about__animate--delay-1">
          <h1 className="fya-about__hero-title">
            Building with
            <br />
            <span className="fya-about__hero-highlight">purpose.</span>
          </h1>
          <p className="fya-about__hero-subtitle">
            Construction shaped by experience, precision and a
            commitment to doing things right.
          </p>
          <div className="fya-about__hero-actions">
            <a href="/projects" className="fya-about__hero-btn fya-about__hero-btn--primary">
              Explore Our Work
              <ArrowUpRight size={18} />
            </a>
            <a href="/contact" className="fya-about__hero-btn fya-about__hero-btn--secondary">
              Get Consultation
            </a>
          </div>
        </div>

        <div className="fya-about__hero-bottom fya-about__animate fya-about__animate--delay-2">
          <div className="fya-about__hero-scroll">
            <ArrowDown size={16} strokeWidth={1.5} />
            <span>SCROLL TO EXPLORE</span>
          </div>
          <div className="fya-about__hero-counter">
            <span className="fya-about__counter-current">01</span>
            <span className="fya-about__counter-line" />
            <span className="fya-about__counter-total">06</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;