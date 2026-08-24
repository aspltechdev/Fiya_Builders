// // src/pages/Projects/sections/ProjectsCTASection.jsx
// import { ArrowUpRight } from "lucide-react";

// const ProjectsCTASection = () => {
//   return (
//     <section className="fya-projects-cta">
//       <div className="fya-container">
//         <div className="fya-cta-wrapper">
//           <div className="fya-cta-pattern" />
//           <div className="fya-cta-content">
//             <span className="fya-cta-label">YOUR PROJECT COULD BE NEXT</span>
//             <h2 className="fya-cta-heading">
//               Let's Create Something
//               <br />
//               <span className="fya-text-gold">Worth Building</span>
//             </h2>
//             <p className="fya-cta-text">
//               Partner with us and experience the difference of working
//               with a team that truly cares about your vision.
//             </p>
//             <a href="/contact" className="fya-btn-gold">
//               START YOUR PROJECT
//               <ArrowUpRight size={18} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsCTASection;




// src/pages/Projects/sections/ProjectsCTASection.jsx
import { useRef, useEffect } from "react";
import { ArrowUpRight, Phone, Mail, Clock, Shield, Users } from "lucide-react";
import "./ProjectsCTASection.css";

const ProjectsCTASection = () => {
  const ctaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fya-prj-cta__animate--visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".fya-prj-cta__animate").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="fya-prj-cta" ref={ctaRef}>
      <div className="fya-prj-cta__container">
        <div className="fya-prj-cta__box fya-prj-cta__animate">
          {/* Background */}
          <div className="fya-prj-cta__bg">
            <img
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80"
              alt="Construction"
              className="fya-prj-cta__image"
            />
            <div className="fya-prj-cta__overlay" />
            <div className="fya-prj-cta__pattern" />
          </div>

          {/* Content */}
          <div className="fya-prj-cta__content">
            <div className="fya-prj-cta__header">
              <span className="fya-prj-cta__badge">
                <span className="fya-prj-cta__badge-dot" />
                YOUR PROJECT COULD BE NEXT
              </span>
            </div>

            <h2 className="fya-prj-cta__title">
              Let's Create Something
              <br />
              <span className="fya-prj-cta__highlight">Worth Building</span>
            </h2>

            <p className="fya-prj-cta__description">
              Partner with us and experience the difference of working
              with a team that truly cares about your vision.
            </p>

            <div className="fya-prj-cta__features">
              <div className="fya-prj-cta__feature">
                <div className="fya-prj-cta__feature-icon">
                  <Clock size={16} />
                </div>
                <span className="fya-prj-cta__feature-text">On-Time Delivery</span>
              </div>
              <div className="fya-prj-cta__feature">
                <div className="fya-prj-cta__feature-icon">
                  <Shield size={16} />
                </div>
                <span className="fya-prj-cta__feature-text">Quality Guaranteed</span>
              </div>
              <div className="fya-prj-cta__feature">
                <div className="fya-prj-cta__feature-icon">
                  <Users size={16} />
                </div>
                <span className="fya-prj-cta__feature-text">Expert Team</span>
              </div>
            </div>

            <div className="fya-prj-cta__actions">
              <a href="/contact" className="fya-prj-cta__btn fya-prj-cta__btn--primary">
                <span>START YOUR PROJECT</span>
                <ArrowUpRight size={18} className="fya-prj-cta__btn-icon" />
              </a>
              <a href="tel:+919999999999" className="fya-prj-cta__btn fya-prj-cta__btn--secondary">
                <Phone size={18} className="fya-prj-cta__btn-icon" />
                <span>CALL US</span>
              </a>
            </div>

            <div className="fya-prj-cta__footer">
              <span className="fya-prj-cta__footer-text">
                No obligation. Just a conversation about your vision.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCTASection;