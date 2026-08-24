// // src/pages/Services/sections/CTASection.jsx
// import { useRef, useEffect } from "react";
// import { ArrowUpRight } from "lucide-react";

// const CTASection = () => {
//   const ctaRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("fya-srv-cta__animate--visible");
//           }
//         });
//       },
//       { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
//     );

//     document.querySelectorAll(".fya-srv-cta__animate").forEach((el) => {
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="fya-srv-cta" ref={ctaRef}>
//       <div className="fya-srv-cta__container">
//         <div className="fya-srv-cta__box fya-srv-cta__animate">
//           <div className="fya-srv-cta__bg">
//             <img
//               src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80"
//               alt="Construction"
//               className="fya-srv-cta__image"
//             />
//             <div className="fya-srv-cta__overlay" />
//             <div className="fya-srv-cta__pattern" />
//           </div>

//           <div className="fya-srv-cta__content">
//             <span className="fya-srv-cta__label">READY TO BUILD?</span>
//             <h2 className="fya-srv-cta__title">
//               Let's Create Something
//               <br />
//               <span className="fya-srv-cta__highlight">Extraordinary Together</span>
//             </h2>
//             <p className="fya-srv-cta__text">
//               Partner with us for your next project and experience
//               the difference of working with industry leaders.
//             </p>
//             <div className="fya-srv-cta__actions">
//               <a href="/contact" className="fya-srv-cta__btn fya-srv-cta__btn--primary">
//                 START A CONVERSATION
//                 <ArrowUpRight size={18} />
//               </a>
//               <a href="/projects" className="fya-srv-cta__btn fya-srv-cta__btn--secondary">
//                 VIEW OUR WORK
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CTASection;

// src/pages/Services/sections/CTASection.jsx
import { useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import "./CTASection.css";

const CTASection = () => {
  const ctaRef = useRef(null);

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
    <section className="fya-services__cta" ref={ctaRef}>
      <div className="fya-services__container">
        <div className="fya-services__cta-box fya-services__animate">
          {/* Background */}
          <div className="fya-services__cta-bg">
            <img
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80"
              alt="Construction"
              className="fya-services__cta-image"
            />
            <div className="fya-services__cta-overlay" />
          </div>

          {/* Content */}
          <div className="fya-services__cta-content">
            <span className="fya-services__cta-label">READY TO BUILD?</span>
            <h2 className="fya-services__cta-title">
              Let's Create Something
              <br />
              <span className="fya-services__text-red">Extraordinary Together</span>
            </h2>
            <p className="fya-services__cta-text">
              Partner with us for your next project and experience
              the difference of working with industry leaders.
            </p>
            <div className="fya-services__cta-actions">
              <a href="/contact" className="fya-services__cta-btn fya-services__cta-btn--primary">
                START A CONVERSATION
                <ArrowUpRight size={18} />
              </a>
              <a href="/projects" className="fya-services__cta-btn fya-services__cta-btn--secondary">
                VIEW OUR WORK
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;