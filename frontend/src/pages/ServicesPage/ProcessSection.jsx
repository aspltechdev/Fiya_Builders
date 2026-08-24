// // src/pages/Services/sections/ProcessSection.jsx
// import { useRef, useEffect } from "react";

// const ProcessSection = ({ processSteps }) => {
//   const processRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("fya-srv-process__animate--visible");
//           }
//         });
//       },
//       { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
//     );

//     document.querySelectorAll(".fya-srv-process__animate").forEach((el) => {
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="fya-srv-process" ref={processRef}>
//       <div className="fya-srv-process__container">
//         <div className="fya-srv-process__header">
//           <div className="fya-srv-process__label fya-srv-process__animate">
//             <span className="fya-srv-process__label-number">03</span>
//             <span className="fya-srv-process__label-line" />
//             <span className="fya-srv-process__label-text">HOW WE WORK</span>
//           </div>
//           <h2 className="fya-srv-process__title fya-srv-process__animate fya-srv-process__animate--delay-1">
//             From Idea to <span className="fya-srv-process__highlight">Reality</span>
//           </h2>
//         </div>

//         <div className="fya-srv-process__grid">
//           {processSteps.map((step, index) => (
//             <div 
//               key={index} 
//               className={`fya-srv-process__item fya-srv-process__animate fya-srv-process__animate--delay-${(index + 1) * 0.1}`}
//             >
//               <div className="fya-srv-process__image-wrap">
//                 <img src={step.image} alt={step.title} className="fya-srv-process__image" />
//                 <div className="fya-srv-process__overlay" />
//                 <span className="fya-srv-process__number">{step.number}</span>
//               </div>
//               <h3 className="fya-srv-process__item-title">{step.title}</h3>
//               <p className="fya-srv-process__item-description">{step.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProcessSection;

// src/pages/Services/sections/ProcessSection.jsx
import { useRef, useEffect } from "react";
import "./ProcessSection.css";

const ProcessSection = ({ processSteps }) => {
  const processRef = useRef(null);

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
    <section className="fya-services__process" ref={processRef}>
      <div className="fya-services__container">
        <div className="fya-services__process-header">
          <div className="fya-services__label fya-services__animate">
            <span className="fya-services__label-number">03</span>
            <span className="fya-services__label-line" />
            <span className="fya-services__label-text">HOW WE WORK</span>
          </div>
          <h2 className="fya-services__process-title fya-services__animate fya-services__animate--delay-1">
            From Idea to <span className="fya-services__text-red">Reality</span>
          </h2>
        </div>

        <div className="fya-services__process-grid">
          {processSteps.map((step, index) => (
            <div 
              key={index} 
              className={`fya-services__process-item fya-services__animate fya-services__animate--delay-${(index + 1) * 0.1}`}
            >
              <div className="fya-services__process-image">
                <img src={step.image} alt={step.title} className="fya-services__process-img" />
                <div className="fya-services__process-overlay" />
                <span className="fya-services__process-number">{step.number}</span>
              </div>
              <h3 className="fya-services__process-item-title">{step.title}</h3>
              <p className="fya-services__process-item-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;