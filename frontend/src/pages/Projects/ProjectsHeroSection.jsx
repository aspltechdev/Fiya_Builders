// // // src/pages/Projects/sections/ProjectsHeroSection.jsx
// // import { ArrowDown } from "lucide-react";

// // const ProjectsHeroSection = () => {
// //   return (
// //     <section className="fya-projects-hero">
// //       <div className="fya-hero-background">
// //         <img 
// //           src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80" 
// //           alt="Premium Architecture" 
// //         />
// //         <div className="fya-hero-overlay" />
// //       </div>
      
// //       <div className="fya-container fya-projects-hero-container">
// //         <div className="fya-hero-top-bar">
// //           <div className="fya-logo">
// //             <span className="fya-logo-white">FIYA</span>
// //             <span className="fya-logo-gold">BUILDERS</span>
// //           </div>
// //           <div className="fya-hero-tagline">
// //             <span className="fya-gold-line" />
// //             OUR PORTFOLIO
// //           </div>
// //         </div>
        
// //         <div className="fya-projects-hero-content">
// //           <h1 className="fya-projects-hero-title">
// //             Featured
// //             <br />
// //             <span className="fya-text-blue">Projects</span>
// //             <br />
// //             <span className="fya-text-gold">& Achievements</span>
// //           </h1>
// //           <p className="fya-projects-hero-subtitle">
// //             A collection of spaces shaped through thoughtful design,
// //             disciplined construction and attention to detail.
// //           </p>
// //           <div className="fya-hero-scroll">
// //             <ArrowDown size={20} strokeWidth={1.5} />
// //             <span>SCROLL TO EXPLORE</span>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ProjectsHeroSection;



// // // src/pages/Projects/sections/ProjectsHeroSection.jsx
// // import { ArrowDown } from "lucide-react";
// // import "./ProjectsHeroSection.css";

// // const ProjectsHeroSection = () => {
// //   return (
// //     <section className="fya-phs__section">
// //       <div className="fya-phs__background">
// //         <img 
// //           src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80" 
// //           alt="Premium Architecture" 
// //         />
// //         <div className="fya-phs__overlay" />
// //       </div>
      
// //       <div className="fya-phs__container">
// //         <div className="fya-phs__top-bar">
// //           <div className="fya-phs__logo">
// //             <span className="fya-phs__logo-white">FIYA</span>
// //             <span className="fya-phs__logo-gold">BUILDERS</span>
// //           </div>
// //           <div className="fya-phs__tagline">
// //             <span className="fya-phs__gold-line" />
// //             OUR PORTFOLIO
// //           </div>
// //         </div>
        
// //         <div className="fya-phs__content">
// //           <h1 className="fya-phs__title">
// //             Featured
// //             <br />
// //             <span className="fya-phs__text-blue">Projects</span>
// //             <br />
// //             <span className="fya-phs__text-gold">& Achievements</span>
// //           </h1>
// //           <p className="fya-phs__subtitle">
// //             A collection of spaces shaped through thoughtful design,
// //             disciplined construction and attention to detail.
// //           </p>
// //           <div className="fya-phs__scroll">
// //             <ArrowDown size={20} strokeWidth={1.5} />
// //             <span>SCROLL TO EXPLORE</span>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ProjectsHeroSection;


// // src/pages/Projects/sections/ProjectsHeroSection.jsx



// import { ArrowDown } from "lucide-react";
// import "./ProjectsHeroSection.css";

// const ProjectsHeroSection = () => {
//   return (
//     <section className="fya-phs__hero">
//       {/* Background */}
//       <div className="fya-phs__hero-bg">
//         <img 
//           src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80" 
//           alt="Premium Architecture" 
//           className="fya-phs__hero-image"
//         />
//         <div className="fya-phs__hero-gradient" />
//       </div>

//       {/* Overlay Text */}
//       <div className="fya-phs__hero-overlay-text">
//         <span className="fya-phs__hero-overlay-letter">P</span>
//         <span className="fya-phs__hero-overlay-letter">R</span>
//         <span className="fya-phs__hero-overlay-letter">O</span>
//         <span className="fya-phs__hero-overlay-letter">J</span>
//         <span className="fya-phs__hero-overlay-letter">E</span>
//         <span className="fya-phs__hero-overlay-letter">C</span>
//         <span className="fya-phs__hero-overlay-letter">T</span>
//         <span className="fya-phs__hero-overlay-letter">S</span>
//       </div>
      
//       {/* Container */}
//       <div className="fya-phs__hero-container">
//         {/* Top - Label */}
//         <div className="fya-phs__hero-top">
//           <div className="fya-phs__hero-label">
//             <span className="fya-phs__hero-number">01</span>
//             <span className="fya-phs__hero-label-text">OUR PORTFOLIO</span>
//             <span className="fya-phs__hero-line" />
//           </div>
//         </div>
        
//         {/* Main Content */}
//         <div className="fya-phs__hero-main">
//           <h1 className="fya-phs__hero-title">
//             Featured
//             <br />
//             <span className="fya-phs__hero-highlight">Projects</span>
//             <br />
//             <span className="fya-phs__hero-highlight-gold">& Achievements</span>
//           </h1>
//           <p className="fya-phs__hero-subtitle">
//             A collection of spaces shaped through thoughtful design,
//             disciplined construction and attention to detail.
//           </p>
          
//           {/* Actions */}
//           <div className="fya-phs__hero-actions">
//             <a href="#projects" className="fya-phs__hero-btn fya-phs__hero-btn--primary">
//               View All Projects
//               <ArrowDown size={18} />
//             </a>
//             <a href="/contact" className="fya-phs__hero-btn fya-phs__hero-btn--secondary">
//               Start a Project
//             </a>
//           </div>
//         </div>

//         {/* Bottom - Scroll & Counter */}
//         <div className="fya-phs__hero-bottom">
//           <div className="fya-phs__hero-scroll">
//             <ArrowDown size={16} strokeWidth={1.5} />
//             <span>Scroll to Explore</span>
//           </div>
//           <div className="fya-phs__hero-counter">
//             <span className="fya-phs__counter-current">01</span>
//             <span className="fya-phs__counter-line" />
//             <span className="fya-phs__counter-total">09</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsHeroSection;


// src/pages/Projects/sections/ProjectsHeroSection.jsx
import { useRef, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import "./ProjectsHeroSection.css";

const ProjectsHeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fya-prj-hero__animate--visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".fya-prj-hero__animate").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="fya-prj-hero" ref={heroRef}>
      {/* Background */}
      <div className="fya-prj-hero__bg">
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80"
          alt="Premium Architecture"
          className="fya-prj-hero__image"
        />
        <div className="fya-prj-hero__gradient" />
        <div className="fya-prj-hero__overlay-text">
          {["P","R","O","J","E","C","T","S"].map((letter, i) => (
            <span key={i} className="fya-prj-hero__overlay-letter">{letter}</span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="fya-prj-hero__container">
        {/* Top - Label */}
        <div className="fya-prj-hero__top fya-prj-hero__animate">
          <div className="fya-prj-hero__label">
            <span className="fya-prj-hero__number">01</span>
            <span className="fya-prj-hero__label-text">OUR PORTFOLIO</span>
            <span className="fya-prj-hero__line" />
          </div>
        </div>

        {/* Main Content */}
        <div className="fya-prj-hero__main fya-prj-hero__animate fya-prj-hero__animate--delay-1">
          <h1 className="fya-prj-hero__title">
            Featured
            <br />
            <span className="fya-prj-hero__highlight">Projects</span>
            <br />
            <span className="fya-prj-hero__highlight-gold">& Achievements</span>
          </h1>
          <p className="fya-prj-hero__subtitle">
            A collection of spaces shaped through thoughtful design,
            disciplined construction and attention to detail.
          </p>

          {/* Actions */}
          <div className="fya-prj-hero__actions">
            <a href="#projects" className="fya-prj-hero__btn fya-prj-hero__btn--primary">
              View All Projects
              <ArrowDown size={18} />
            </a>
            <a href="/contact" className="fya-prj-hero__btn fya-prj-hero__btn--secondary">
              Start a Project
            </a>
          </div>
        </div>

        {/* Bottom - Scroll & Counter */}
        <div className="fya-prj-hero__bottom fya-prj-hero__animate fya-prj-hero__animate--delay-2">
          <div className="fya-prj-hero__scroll">
            <ArrowDown size={16} strokeWidth={1.5} />
            <span>Scroll to Explore</span>
          </div>
          <div className="fya-prj-hero__counter">
            <span className="fya-prj-hero__counter-current">01</span>
            <span className="fya-prj-hero__counter-line" />
            <span className="fya-prj-hero__counter-total">09</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHeroSection;