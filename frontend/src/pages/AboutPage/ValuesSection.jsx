// // src/pages/About/sections/ValuesSection.jsx
// import { useRef } from "react";
// import { Target, Award, Building2, Users } from "lucide-react";

// const ValuesSection = () => {
//   const valuesRef = useRef(null);

//   const values = [
//     {
//       number: "01",
//       title: "Quality",
//       description: "We believe quality is not an extra feature. It is the foundation of every project we undertake.",
//       icon: Target,
//     },
//     {
//       number: "02",
//       title: "Integrity",
//       description: "Clear communication and honest execution define how we work with our clients.",
//       icon: Award,
//     },
//     {
//       number: "03",
//       title: "Precision",
//       description: "From planning to finishing, attention to detail remains central to our process.",
//       icon: Building2,
//     },
//     {
//       number: "04",
//       title: "Responsibility",
//       description: "We take ownership of every stage of a project through completion.",
//       icon: Users,
//     },
//   ];

//   return (
//     <section className="fya-about__values" ref={valuesRef}>
//       <div className="fya-container">
//         <div className="fya-about__values-top">
//           <div className="fya-about__section-label fya-about__animate">
//             <span className="fya-about__label-number">05</span>
//             <span className="fya-about__label-line" />
//             <span className="fya-about__label-text">WHAT WE STAND FOR</span>
//           </div>
//           <h2 className="fya-about__values-title fya-about__animate fya-about__animate--delay-1">
//             Principles behind
//             <br />
//             every <span className="fya-about__text-red">project.</span>
//           </h2>
//         </div>

//         <div className="fya-about__values-grid">
//           {values.map((value, index) => {
//             const Icon = value.icon;
//             return (
//               <div key={index} className={`fya-about__value-card fya-about__animate fya-about__animate--delay-${(index + 1) * 0.1}`}>
//                 <span className="fya-about__value-number">{value.number}</span>
//                 <div className="fya-about__value-icon">
//                   <Icon size={24} />
//                 </div>
//                 <h3 className="fya-about__value-title">{value.title}</h3>
//                 <p className="fya-about__value-text">{value.description}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ValuesSection;



// src/pages/About/sections/ValuesSection.jsx
import { useRef, useEffect } from "react";
import { Target, Award, Building2, Users, CheckCircle, Shield, Ruler, Heart } from "lucide-react";
import "./ValuesSection.css";
const ValuesSection = () => {
  const valuesRef = useRef(null);

  const values = [
    {
      number: "01",
      title: "Quality",
      description: "We believe quality is not an extra feature. It is the foundation of every project we undertake.",
      icon: Target,
      color: "#D71920",
      bgColor: "rgba(215, 25, 32, 0.08)",
    },
    {
      number: "02",
      title: "Integrity",
      description: "Clear communication and honest execution define how we work with our clients.",
      icon: Shield,
      color: "#3D5D96",
      bgColor: "rgba(61, 93, 150, 0.08)",
    },
    {
      number: "03",
      title: "Precision",
      description: "From planning to finishing, attention to detail remains central to our process.",
      icon: Ruler,
      color: "#16A34A",
      bgColor: "rgba(22, 163, 74, 0.08)",
    },
    {
      number: "04",
      title: "Responsibility",
      description: "We take ownership of every stage of a project through completion.",
      icon: Heart,
      color: "#C9972B",
      bgColor: "rgba(201, 151, 43, 0.08)",
    },
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
    <section className="fya-about__values" ref={valuesRef}>
      {/* Background Decoration */}
      <div className="fya-about__values-bg" />
      
      <div className="fya-container">
        <div className="fya-about__values-top">
          <div className="fya-about__section-label fya-about__animate">
            <span className="fya-about__label-number">05</span>
            <span className="fya-about__label-line" />
            <span className="fya-about__label-text">WHAT WE STAND FOR</span>
          </div>
          <h2 className="fya-about__values-title fya-about__animate fya-about__animate--delay-1">
            Principles behind
            <br />
            every <span className="fya-about__text-red">project.</span>
          </h2>
        </div>

        <div className="fya-about__values-grid">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index} 
                className={`fya-about__value-card fya-about__animate fya-about__animate--delay-${(index + 1) * 0.1}`}
              >
                <div className="fya-about__value-header">
                  <span className="fya-about__value-number">{value.number}</span>
                  <div 
                    className="fya-about__value-icon" 
                    style={{ background: value.bgColor, color: value.color }}
                  >
                    <Icon size={24} />
                  </div>
                </div>
                <h3 className="fya-about__value-title">{value.title}</h3>
                <p className="fya-about__value-text">{value.description}</p>
                <div className="fya-about__value-line" style={{ background: value.color }} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;