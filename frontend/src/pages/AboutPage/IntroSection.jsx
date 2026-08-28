// // src/pages/About/sections/IntroSection.jsx
// import { useRef } from "react";
// import { Building2, Award, Users, Target } from "lucide-react";

// const IntroSection = ({ about }) => {
//   const introRef = useRef(null);
  
//   const title = about?.title || "We don't just build structures. We build what comes next.";
//   const description = about?.description || "FIYA Builders brings together construction expertise, engineering precision and thoughtful execution to create spaces that are built for today and designed to last.";
//   const experience = about?.experience || "10";

//   const stats = [
//     { value: "250+", label: "Projects Completed", icon: Building2 },
//     { value: experience + "+", label: "Years Experience", icon: Award },
//     { value: "150+", label: "Team Members", icon: Users },
//     { value: "98%", label: "Client Satisfaction", icon: Target },
//   ];

//   return (
//     <section className="fya-about__intro" ref={introRef}>
//       <div className="fya-container">
//         <div className="fya-about__intro-grid">
//           <div className="fya-about__intro-left fya-about__animate">
//             <span className="fya-about__intro-number">01</span>
//             <h2 className="fya-about__intro-title">{title}</h2>
//           </div>
//           <div className="fya-about__intro-right fya-about__animate fya-about__animate--delay-1">
//             <p className="fya-about__intro-description">{description}</p>
//             <div className="fya-about__intro-stats">
//               {stats.map((stat, index) => (
//                 <div key={index} className="fya-about__stat-item">
//                   <stat.icon className="fya-about__stat-icon" />
//                   <span className="fya-about__stat-value">{stat.value}</span>
//                   <span className="fya-about__stat-label">{stat.label}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default IntroSection;


// src/pages/About/sections/IntroSection.jsx


import { useRef, useEffect } from "react";
import { Building2, Award, Users, Target } from "lucide-react";
import "./IntroSection.css";

const IntroSection = ({ about }) => {
  const introRef = useRef(null);
  
  const title = about?.title || "We don't just build structures. We build what comes next.";
  const description = about?.description || "FIYA Builders brings together construction expertise, engineering precision and thoughtful execution to create spaces that are built for today and designed to last.";
  const experience = about?.experience || "10";

  const stats = [
    { value: "250+", label: "Projects Completed", icon: Building2 },
    { value: experience + "+", label: "Years Experience", icon: Award },
    { value: "150+", label: "Team Members", icon: Users },
    { value: "98%", label: "Client Satisfaction", icon: Target },
  ];

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
    <section className="fya-about__intro" ref={introRef}>
      <div className="fya-container">
        <div className="fya-about__intro-grid">
          {/* Left Column */}
          <div className="fya-about__intro-left fya-about__animate">
            <span className="fya-about__intro-number">01</span>
            <h2 className="fya-about__intro-title">{title}</h2>
          </div>

          {/* Right Column */}
          <div className="fya-about__intro-right fya-about__animate fya-about__animate--delay-1">
            <p className="fya-about__intro-description">{description}</p>

            {/* Stats Grid */}
            <div className="fya-about__intro-stats">
              {stats.map((stat, index) => (
                <div key={index} className="fya-about__stat-item">
                  <stat.icon className="fya-about__stat-icon" />
                  <span className="fya-about__stat-value">{stat.value}</span>
                  <span className="fya-about__stat-label">{stat.label}</span>
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