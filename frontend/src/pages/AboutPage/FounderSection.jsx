// // src/pages/About/sections/FounderSection.jsx

// import { useRef } from "react";
// import { Quote, Crown, Play } from "lucide-react";

// const FounderSection = ({ about, defaultImages }) => {
//   const founderRef = useRef(null);
  
//   const founderQuote = about?.founderQuote || "Building is not just about structures; it's about creating lasting value for communities and generations to come.";
//   const founderName = about?.founderName || "Founder";
//   const founderTitle = about?.founderTitle || "Founder & Chairman";

//   const milestones = [
//     { year: "2014", title: "Founded", description: "FIYA Builders established" },
//     { year: "2016", title: "First Project", description: "Completed first residential project" },
//     { year: "2018", title: "Expansion", description: "Entered commercial construction" },
//     { year: "2020", title: "ISO Certified", description: "Achieved ISO 9001 certification" },
//     { year: "2022", title: "100+ Projects", description: "Reached 100 completed projects" },
//     { year: "2024", title: "New Horizons", description: "Expanded to 3 cities" },
//   ];

//   return (
//     <section className="fya-about__founder" ref={founderRef}>
//       <div className="fya-container">
//         <div className="fya-about__founder-top">
//           <div className="fya-about__section-label fya-about__animate">
//             <span className="fya-about__label-number">02</span>
//             <span className="fya-about__label-line" />
//             <span className="fya-about__label-text">FOUNDER'S STORY</span>
//           </div>
//           <h2 className="fya-about__founder-title fya-about__animate fya-about__animate--delay-1">
//             Building a Legacy
//             <br />
//             <span className="fya-about__text-red">From Vision to Reality</span>
//           </h2>
//         </div>

//         <div className="fya-about__founder-grid">
//           <div className="fya-about__founder-image-wrapper fya-about__animate">
//             <div className="fya-about__founder-image">
//               <img src={defaultImages.founder} alt={founderName} className="fya-about__founder-img" />
//               <div className="fya-about__founder-overlay" />
//               <div className="fya-about__founder-badge">
//                 <Crown size={18} />
//                 <span>Founded 2014</span>
//               </div>
//               <div className="fya-about__founder-play">
//                 <Play size={24} />
//               </div>
//             </div>
//           </div>

//           <div className="fya-about__founder-content fya-about__animate fya-about__animate--delay-1">
//             <div className="fya-about__founder-quote">
//               <Quote className="fya-about__quote-icon" />
//               <p className="fya-about__quote-text">"{founderQuote}"</p>
//               <div className="fya-about__quote-author">
//                 <strong>{founderName}</strong>
//                 <span>{founderTitle}</span>
//               </div>
//             </div>

//             <p className="fya-about__founder-text">
//               What started as a small construction firm with a handful of
//               dedicated workers has grown into one of the most trusted
//               names in the industry. Through every challenge and success,
//               our founder's vision has remained unchanged: to build with
//               integrity, precision and lasting value.
//             </p>

//             <div className="fya-about__founder-milestones">
//               {milestones.map((milestone, index) => (
//                 <div key={index} className={`fya-about__milestone fya-about__animate fya-about__animate--delay-${(index + 2) * 0.1}`}>
//                   <span className="fya-about__milestone-year">{milestone.year}</span>
//                   <div className="fya-about__milestone-content">
//                     <strong className="fya-about__milestone-title">{milestone.title}</strong>
//                     <span className="fya-about__milestone-desc">{milestone.description}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FounderSection;













// src/pages/About/sections/FounderSection.jsx


// import { useRef, useEffect } from "react";
// import { Quote, Crown, Play } from "lucide-react";
// import "./FounderSection.css";

// const FounderSection = ({ about, defaultImages }) => {
//   const founderRef = useRef(null);
  
//   const founderQuote = about?.founderQuote || "Building is not just about structures; it's about creating lasting value for communities and generations to come.";
//   const founderName = about?.founderName || "Founder";
//   const founderTitle = about?.founderTitle || "Founder & Chairman";

//   const milestones = [
//     { year: "2014", title: "Founded", description: "FIYA Builders established" },
//     { year: "2016", title: "First Project", description: "Completed first residential project" },
//     { year: "2018", title: "Expansion", description: "Entered commercial construction" },
//     { year: "2020", title: "ISO Certified", description: "Achieved ISO 9001 certification" },
//     { year: "2022", title: "100+ Projects", description: "Reached 100 completed projects" },
//     { year: "2024", title: "New Horizons", description: "Expanded to 3 cities" },
//   ];

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
//     <section className="fya-about__founder" ref={founderRef}>
//       <div className="fya-container">
//         {/* Top Section */}
//         <div className="fya-about__founder-top">
//           <div className="fya-about__section-label fya-about__animate">
//             <span className="fya-about__label-number">02</span>
//             <span className="fya-about__label-line" />
//             <span className="fya-about__label-text">FOUNDER'S STORY</span>
//           </div>
//           <h2 className="fya-about__founder-title fya-about__animate fya-about__animate--delay-1">
//             Building a Legacy
//             <br />
//             <span className="fya-about__text-red">From Vision to Reality</span>
//           </h2>
//         </div>

//         {/* Grid */}
//         <div className="fya-about__founder-grid">
//           {/* Left - Image */}
//           <div className="fya-about__founder-image-wrapper fya-about__animate">
//             <div className="fya-about__founder-image">
//               <img
//                 src={defaultImages.founder}
//                 alt={founderName}
//                 className="fya-about__founder-img"
//               />
//               <div className="fya-about__founder-overlay" />
//               <div className="fya-about__founder-badge">
//                 <Crown size={18} />
//                 <span>Founded 2014</span>
//               </div>
//               <div className="fya-about__founder-play">
//                 <Play size={24} />
//               </div>
//             </div>
//           </div>

//           {/* Right - Content */}
//           <div className="fya-about__founder-content fya-about__animate fya-about__animate--delay-1">
//             {/* Quote */}
//             <div className="fya-about__founder-quote">
//               <Quote className="fya-about__quote-icon" />
//               <p className="fya-about__quote-text">"{founderQuote}"</p>
//               <div className="fya-about__quote-author">
//                 <strong>{founderName}</strong>
//                 <span>{founderTitle}</span>
//               </div>
//             </div>

//             {/* Text */}
//             <p className="fya-about__founder-text">
//               What started as a small construction firm with a handful of
//               dedicated workers has grown into one of the most trusted
//               names in the industry. Through every challenge and success,
//               our founder's vision has remained unchanged: to build with
//               integrity, precision and lasting value.
//             </p>

//             {/* Milestones */}
//             <div className="fya-about__founder-milestones">
//               {milestones.map((milestone, index) => (
//                 <div 
//                   key={index} 
//                   className={`fya-about__milestone fya-about__animate fya-about__animate--delay-${(index + 2) * 0.1}`}
//                 >
//                   <span className="fya-about__milestone-year">{milestone.year}</span>
//                   <div className="fya-about__milestone-content">
//                     <strong className="fya-about__milestone-title">{milestone.title}</strong>
//                     <span className="fya-about__milestone-desc">{milestone.description}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FounderSection;

// src/pages/About/sections/FounderSection.jsx
import { useRef, useEffect } from "react";
import { Quote, Crown, Play } from "lucide-react";
import founderImage from "../../assets/founder.png"; // Adjust path as needed
import "./FounderSection.css";

const FounderSection = ({ about, defaultImages }) => {
  const founderRef = useRef(null);
  
  const founderQuote = about?.founderQuote || "Building is not just about structures; it's about creating lasting value for communities and generations to come.";
  const founderName = about?.founderName || "Founder";
  const founderTitle = about?.founderTitle || "Founder & Chairman";

  const milestones = [
    { year: "2014", title: "Founded", description: "FIYA Builders established" },
    { year: "2016", title: "First Project", description: "Completed first residential project" },
    { year: "2018", title: "Expansion", description: "Entered commercial construction" },
    { year: "2020", title: "ISO Certified", description: "Achieved ISO 9001 certification" },
    { year: "2022", title: "100+ Projects", description: "Reached 100 completed projects" },
    { year: "2024", title: "New Horizons", description: "Expanded to 3 cities" },
  ];

  // Scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fya-founder__animate--visible");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    document.querySelectorAll(".fya-founder__animate").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="fya-founder" ref={founderRef}>
      <div className="fya-founder__container">
        {/* Top Section */}
        <div className="fya-founder__top">
          <div className="fya-founder__label fya-founder__animate">
            <span className="fya-founder__label-number">02</span>
            <span className="fya-founder__label-line" />
            <span className="fya-founder__label-text">FOUNDER'S STORY</span>
          </div>
          <h2 className="fya-founder__title fya-founder__animate fya-founder__animate--delay-1">
            Building a Legacy
            <br />
            <span className="fya-founder__title-highlight">From Vision to Reality</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="fya-founder__grid">
          {/* Left - Image */}
          <div className="fya-founder__image-wrapper fya-founder__animate">
            <div className="fya-founder__image">
              <img
                src={founderImage}
                alt={founderName}
                className="fya-founder__image-img"
              />
              <div className="fya-founder__image-overlay" />
              <div className="fya-founder__badge">
                <Crown size={18} />
                <span>Founded 2014</span>
              </div>
              {/* <div className="fya-founder__play-btn">
                <Play size={24} />
              </div> */}
            </div>
          </div>

          {/* Right - Content */}
          <div className="fya-founder__content fya-founder__animate fya-founder__animate--delay-1">
            {/* Quote */}
            <div className="fya-founder__quote">
              <Quote className="fya-founder__quote-icon" />
              <p className="fya-founder__quote-text">"{founderQuote}"</p>
              <div className="fya-founder__quote-author">
                <strong>{founderName}</strong>
                <span>{founderTitle}</span>
              </div>
            </div>

            {/* Text */}
            <p className="fya-founder__text">
              What started as a small construction firm with a handful of
              dedicated workers has grown into one of the most trusted
              names in the industry. Through every challenge and success,
              our founder's vision has remained unchanged: to build with
              integrity, precision and lasting value.
            </p>

            {/* Milestones */}
            <div className="fya-founder__milestones">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`fya-founder__milestone fya-founder__animate fya-founder__animate--delay-${(index + 2) * 0.1}`}
                >
                  <span className="fya-founder__milestone-year">{milestone.year}</span>
                  <div className="fya-founder__milestone-content">
                    <strong className="fya-founder__milestone-title">{milestone.title}</strong>
                    <span className="fya-founder__milestone-desc">{milestone.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;