// // src/pages/Gallery/sections/GalleryCTASection.jsx
// import { useRef, useEffect } from "react";
// import { ArrowUpRight } from "lucide-react";
// import "./GalleryCTASection.css";

// const GalleryCTASection = () => {
//   const ctaRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("fya-gal-cta__animate--visible");
//           }
//         });
//       },
//       { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
//     );

//     document.querySelectorAll(".fya-gal-cta__animate").forEach((el) => {
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="fya-gal-cta" ref={ctaRef}>
//       <div className="fya-gal-cta__container">
//         <div className="fya-gal-cta__box fya-gal-cta__animate">
//           <div className="fya-gal-cta__bg">
//             <img
//               src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80"
//               alt="Construction"
//               className="fya-gal-cta__image"
//             />
//             <div className="fya-gal-cta__overlay" />
//           </div>

//           <div className="fya-gal-cta__content">
//             <span className="fya-gal-cta__label">HAVE A PROJECT IN MIND?</span>
//             <h2 className="fya-gal-cta__title">
//               Your Space Could
//               <br />
//               Be <span className="fya-gal-cta__highlight">Next</span>
//             </h2>
//             <p className="fya-gal-cta__text">
//               Let's create something extraordinary together. Partner with us
//               and bring your vision to life.
//             </p>
//             <div className="fya-gal-cta__actions">
//               <a href="/contact" className="fya-gal-cta__btn fya-gal-cta__btn--primary">
//                 START A CONVERSATION
//                 <ArrowUpRight size={18} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GalleryCTASection;




// src/pages/Gallery/sections/GalleryCTASection.jsx
import { useRef, useEffect } from "react";
import { ArrowUpRight, Phone, Mail, Clock, Shield, Users } from "lucide-react";
import "./GalleryCTASection.css";

const GalleryCTASection = () => {
  const ctaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fya-gallery-cta__animate--visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".fya-gallery-cta__animate").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="fya-gallery-cta" ref={ctaRef}>
      <div className="fya-gallery-cta__container">
        <div className="fya-gallery-cta__box fya-gallery-cta__animate">
          {/* Background */}
          <div className="fya-gallery-cta__bg">
            <img
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80"
              alt="Construction"
              className="fya-gallery-cta__image"
            />
            <div className="fya-gallery-cta__overlay" />
            <div className="fya-gallery-cta__pattern" />
          </div>

          {/* Content */}
          <div className="fya-gallery-cta__content">
            <div className="fya-gallery-cta__header">
              <span className="fya-gallery-cta__badge">
                <span className="fya-gallery-cta__badge-dot" />
                HAVE A PROJECT IN MIND?
              </span>
            </div>

            <h2 className="fya-gallery-cta__title">
              Your Space Could
              <br />
              Be <span className="fya-gallery-cta__highlight">Next</span>
            </h2>

            <p className="fya-gallery-cta__description">
              Let's create something extraordinary together. Partner with us
              and bring your vision to life.
            </p>

            <div className="fya-gallery-cta__features">
              <div className="fya-gallery-cta__feature">
                <div className="fya-gallery-cta__feature-icon">
                  <Clock size={16} />
                </div>
                <span className="fya-gallery-cta__feature-text">On-Time Delivery</span>
              </div>
              <div className="fya-gallery-cta__feature">
                <div className="fya-gallery-cta__feature-icon">
                  <Shield size={16} />
                </div>
                <span className="fya-gallery-cta__feature-text">Quality Guaranteed</span>
              </div>
              <div className="fya-gallery-cta__feature">
                <div className="fya-gallery-cta__feature-icon">
                  <Users size={16} />
                </div>
                <span className="fya-gallery-cta__feature-text">Expert Team</span>
              </div>
            </div>

            <div className="fya-gallery-cta__actions">
              <a href="/contact" className="fya-gallery-cta__btn fya-gallery-cta__btn--primary">
                <span>START A CONVERSATION</span>
                <ArrowUpRight size={18} className="fya-gallery-cta__btn-icon" />
              </a>
              <a href="tel:+919999999999" className="fya-gallery-cta__btn fya-gallery-cta__btn--secondary">
                <Phone size={18} className="fya-gallery-cta__btn-icon" />
                <span>CALL US</span>
              </a>
            </div>

            <div className="fya-gallery-cta__footer">
              <span className="fya-gallery-cta__footer-text">
                No obligation. Just a conversation about your vision.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryCTASection;