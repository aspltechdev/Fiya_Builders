// // src/pages/About/sections/ExperienceSection.jsx
// import { useRef } from "react";
// import { Plus } from "lucide-react";

// const ExperienceSection = ({ about }) => {
//   const experienceRef = useRef(null);
//   const experience = about?.experience || "10";

//   return (
//     <section className="fya-about__experience" ref={experienceRef}>
//       <div className="fya-container">
//         <div className="fya-about__experience-top">
//           <div className="fya-about__section-label fya-about__animate">
//             <span className="fya-about__label-number">04</span>
//             <span className="fya-about__label-line" />
//             <span className="fya-about__label-text">EXPERIENCE</span>
//           </div>
//         </div>

//         <div className="fya-about__experience-grid">
//           <div className="fya-about__experience-number fya-about__animate fya-about__animate--delay-1">
//             <span className="fya-about__number-value">{experience}</span>
//             <Plus size={32} className="fya-about__number-plus" />
//             <span className="fya-about__number-label">YEARS</span>
//           </div>
//           <div className="fya-about__experience-content fya-about__animate fya-about__animate--delay-2">
//             <h2 className="fya-about__experience-title">
//               Experience that
//               <br />
//               <span className="fya-about__text-red">builds confidence.</span>
//             </h2>
//             <p className="fya-about__experience-text">
//               Over the years, our work has been shaped by the lessons,
//               challenges and relationships built through every project.
//               We've grown from a small local builder to a respected
//               name in construction.
//             </p>
//             <div className="fya-about__experience-metrics">
//               <div className="fya-about__metric">
//                 <span className="fya-about__metric-value">50+</span>
//                 <span className="fya-about__metric-label">Ongoing Projects</span>
//               </div>
//               <div className="fya-about__metric">
//                 <span className="fya-about__metric-value">1000+</span>
//                 <span className="fya-about__metric-label">Happy Clients</span>
//               </div>
//               <div className="fya-about__metric">
//                 <span className="fya-about__metric-value">15</span>
//                 <span className="fya-about__metric-label">Awards Won</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExperienceSection;














// // src/pages/About/sections/ExperienceSection.jsx
// import { useRef, useEffect } from "react";
// import { Plus } from "lucide-react";
// import "./ExperienceSection.css";

// const ExperienceSection = ({ about }) => {
//   const experienceRef = useRef(null);
//   const experience = about?.experience || "10";

//   // Scroll-triggered animations
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("fya-about__animate--visible");
//           }
//         });
//       },
//       {
//         threshold: 0.15,
//         rootMargin: "0px 0px -50px 0px",
//       }
//     );

//     document.querySelectorAll(".fya-about__animate").forEach((el) => {
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="fya-about__experience" ref={experienceRef}>
//       <div className="fya-container">
//         <div className="fya-about__experience-top">
//           <div className="fya-about__section-label fya-about__animate">
//             <span className="fya-about__label-number">04</span>
//             <span className="fya-about__label-line" />
//             <span className="fya-about__label-text">EXPERIENCE</span>
//           </div>
//         </div>

//         <div className="fya-about__experience-grid">
//           {/* Left - Large Number */}
//           <div className="fya-about__experience-number fya-about__animate fya-about__animate--delay-1">
//             <span className="fya-about__number-value">{experience}</span>
//             <Plus size={32} className="fya-about__number-plus" />
//             <span className="fya-about__number-label">YEARS</span>
//           </div>

//           {/* Right - Content */}
//           <div className="fya-about__experience-content fya-about__animate fya-about__animate--delay-2">
//             <h2 className="fya-about__experience-title">
//               Experience that
//               <br />
//               <span className="fya-about__text-red">builds confidence.</span>
//             </h2>
//             <p className="fya-about__experience-text">
//               Over the years, our work has been shaped by the lessons,
//               challenges and relationships built through every project.
//               We've grown from a small local builder to a respected
//               name in construction.
//             </p>

//             {/* Metrics */}
//             <div className="fya-about__experience-metrics">
//               <div className="fya-about__metric">
//                 <span className="fya-about__metric-value">50+</span>
//                 <span className="fya-about__metric-label">Ongoing Projects</span>
//               </div>
//               <div className="fya-about__metric">
//                 <span className="fya-about__metric-value">1000+</span>
//                 <span className="fya-about__metric-label">Happy Clients</span>
//               </div>
//               <div className="fya-about__metric">
//                 <span className="fya-about__metric-value">15</span>
//                 <span className="fya-about__metric-label">Awards Won</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExperienceSection;


// src/pages/About/sections/ExperienceSection.jsx



import { useRef, useEffect } from "react";
import { Plus } from "lucide-react";
import "./ExperienceSection.css";

const ExperienceSection = ({ about }) => {
  const experienceRef = useRef(null);
  const experience = about?.experience || "10";

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
    <section className="fya-about__experience" ref={experienceRef}>
      {/* Background Image */}
      <div className="fya-about__experience-bg">
        <img
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80"
          alt="Construction Background"
          className="fya-about__experience-bg-image"
        />
        <div className="fya-about__experience-overlay" />
      </div>

      <div className="fya-container">
        <div className="fya-about__experience-top">
          <div className="fya-about__section-label fya-about__animate">
            <span className="fya-about__label-number">04</span>
            <span className="fya-about__label-line" />
            <span className="fya-about__label-text">EXPERIENCE</span>
          </div>
        </div>

        <div className="fya-about__experience-grid">
          {/* Left - Large Number */}
          <div className="fya-about__experience-number fya-about__animate fya-about__animate--delay-1">
            <span className="fya-about__number-value">{experience}</span>
            <Plus size={32} className="fya-about__number-plus" />
            <span className="fya-about__number-label">YEARS</span>
          </div>

          {/* Right - Content */}
          <div className="fya-about__experience-content fya-about__animate fya-about__animate--delay-2">
            <h2 className="fya-about__experience-title">
              Experience that
              <br />
              <span className="fya-about__text-red">builds confidence.</span>
            </h2>
            <p className="fya-about__experience-text">
              Over the years, our work has been shaped by the lessons,
              challenges and relationships built through every project.
              We've grown from a small local builder to a respected
              name in construction.
            </p>

            {/* Metrics */}
            <div className="fya-about__experience-metrics">
              <div className="fya-about__metric">
                <span className="fya-about__metric-value">50+</span>
                <span className="fya-about__metric-label">Ongoing Projects</span>
              </div>
              <div className="fya-about__metric">
                <span className="fya-about__metric-value">1000+</span>
                <span className="fya-about__metric-label">Happy Clients</span>
              </div>
              <div className="fya-about__metric">
                <span className="fya-about__metric-value">15</span>
                <span className="fya-about__metric-label">Awards Won</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;