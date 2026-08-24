// // // src/pages/Projects/sections/ProjectsIntroSection.jsx
// // const ProjectsIntroSection = () => {
// //   return (
// //     <section className="fya-projects-intro">
// //       <div className="fya-container">
// //         <div className="fya-intro-grid">
// //           <div className="fya-intro-left">
// //             <div className="fya-section-label">
// //               <span className="fya-label-number">01</span>
// //               <span className="fya-label-line" />
// //               <span className="fya-label-text">OUR WORK</span>
// //             </div>
// //             <h2 className="fya-intro-heading">
// //               Building
// //               <br />
// //               <span className="fya-text-blue">Excellence</span>
// //               <br />
// //               Every Day
// //             </h2>
// //           </div>
          
// //           <div className="fya-intro-right">
// //             <p className="fya-intro-text">
// //               From residential homes to commercial spaces, our portfolio
// //               reflects the diversity of projects we undertake and the
// //               consistency of our approach.
// //             </p>
            
// //             <div className="fya-stats-grid">
// //               <div className="fya-stat-box">
// //                 <span className="fya-stat-value">250+</span>
// //                 <span className="fya-stat-label">Projects Completed</span>
// //               </div>
// //               <div className="fya-stat-box">
// //                 <span className="fya-stat-value">50+</span>
// //                 <span className="fya-stat-label">Ongoing Projects</span>
// //               </div>
// //               <div className="fya-stat-box">
// //                 <span className="fya-stat-value">15+</span>
// //                 <span className="fya-stat-label">Years Experience</span>
// //               </div>
// //               <div className="fya-stat-box">
// //                 <span className="fya-stat-value">20+</span>
// //                 <span className="fya-stat-label">Cities Served</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ProjectsIntroSection;


// // src/pages/Projects/sections/ProjectsIntroSection.jsx
// import "./ProjectsIntroSection.css";

// const ProjectsIntroSection = () => {
//   return (
//     <section className="fya-pis__section">
//       <div className="fya-pis__container">
//         <div className="fya-pis__grid">
//           <div className="fya-pis__left">
//             <div className="fya-pis__label">
//               <span className="fya-pis__label-number">01</span>
//               <span className="fya-pis__label-line" />
//               <span className="fya-pis__label-text">OUR WORK</span>
//             </div>
//             <h2 className="fya-pis__heading">
//               Building
//               <br />
//               <span className="fya-pis__text-blue">Excellence</span>
//               <br />
//               Every Day
//             </h2>
//           </div>
          
//           <div className="fya-pis__right">
//             <p className="fya-pis__text">
//               From residential homes to commercial spaces, our portfolio
//               reflects the diversity of projects we undertake and the
//               consistency of our approach.
//             </p>
            
//             <div className="fya-pis__stats">
//               <div className="fya-pis__stat-box">
//                 <span className="fya-pis__stat-value">250+</span>
//                 <span className="fya-pis__stat-label">Projects Completed</span>
//               </div>
//               <div className="fya-pis__stat-box">
//                 <span className="fya-pis__stat-value">50+</span>
//                 <span className="fya-pis__stat-label">Ongoing Projects</span>
//               </div>
//               <div className="fya-pis__stat-box">
//                 <span className="fya-pis__stat-value">15+</span>
//                 <span className="fya-pis__stat-label">Years Experience</span>
//               </div>
//               <div className="fya-pis__stat-box">
//                 <span className="fya-pis__stat-value">20+</span>
//                 <span className="fya-pis__stat-label">Cities Served</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsIntroSection;




// src/pages/Projects/sections/ProjectsIntroSection.jsx
import { useRef, useEffect } from "react";
import { Building2, Award, Users, Target } from "lucide-react";
import "./ProjectsIntroSection.css";

const ProjectsIntroSection = () => {
  const introRef = useRef(null);

  const stats = [
    { value: "250+", label: "Projects Completed", icon: Building2 },
    { value: "15+", label: "Years Experience", icon: Award },
    { value: "150+", label: "Team Members", icon: Users },
    { value: "98%", label: "Client Satisfaction", icon: Target },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fya-prj-intro__animate--visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".fya-prj-intro__animate").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="fya-prj-intro" ref={introRef}>
      <div className="fya-prj-intro__container">
        <div className="fya-prj-intro__grid">
          {/* Left Column */}
          <div className="fya-prj-intro__left fya-prj-intro__animate">
            <div className="fya-prj-intro__label">
              <span className="fya-prj-intro__label-number">01</span>
              <span className="fya-prj-intro__label-line" />
              <span className="fya-prj-intro__label-text">OUR PORTFOLIO</span>
            </div>
            <h2 className="fya-prj-intro__title">
              Building Beyond
              <br />
              <span className="fya-prj-intro__title-highlight">Expectations</span>
            </h2>
          </div>

          {/* Right Column */}
          <div className="fya-prj-intro__right fya-prj-intro__animate fya-prj-intro__animate--delay-1">
            <p className="fya-prj-intro__description">
              Each project reflects our commitment to quality craftsmanship,
              innovative design, and attention to detail. From residential
              homes to commercial complexes, we deliver spaces that inspire.
            </p>

            {/* Stats */}
            <div className="fya-prj-intro__stats">
              {stats.map((stat, index) => (
                <div key={index} className="fya-prj-intro__stat-item">
                  <stat.icon className="fya-prj-intro__stat-icon" />
                  <span className="fya-prj-intro__stat-value">{stat.value}</span>
                  <span className="fya-prj-intro__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsIntroSection;