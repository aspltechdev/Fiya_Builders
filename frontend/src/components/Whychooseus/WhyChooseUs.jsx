// import {
//   ArrowUpRight,
//   Check,
// } from "lucide-react";

// import "./WhyChooseUs.css";

// const reasons = [
//   {
//     number: "01",
//     title: "Quality First",
//     description:
//       "We maintain high standards across materials, workmanship and execution to create spaces built for the long term.",
//   },
//   {
//     number: "02",
//     title: "Transparent Process",
//     description:
//       "Clear communication, defined milestones and honest project updates keep every stage of construction transparent.",
//   },
//   {
//     number: "03",
//     title: "Engineering Precision",
//     description:
//       "Every project combines practical engineering, thoughtful planning and attention to structural detail.",
//   },
//   {
//     number: "04",
//     title: "End-to-End Execution",
//     description:
//       "From the first conversation to final handover, our team manages the process with one clear direction.",
//   },
// ];

// const WhyChooseUs = () => {
//   return (
//     <section
//       className="fiya-why"
//       id="why-fiya"
//     >
//       <div className="public-container">

//         {/* =========================================
//             TOP
//         ========================================= */}

//         <div className="fiya-why-top">

//           <div className="fiya-why-label">

//             <span className="fiya-why-number">
//               04
//             </span>

//             <span>
//               WHY FIYA
//             </span>

//             <span className="fiya-why-line" />

//           </div>

//         </div>


//         {/* =========================================
//             INTRO
//         ========================================= */}

//         <div className="fiya-why-intro">

//           <div className="fiya-why-heading">

//             <span>
//               BUILT DIFFERENTLY.
//             </span>

//             <h2>
//               Built on trust.
//               <br />
//               Defined by
//               <br />
//               <em>quality.</em>
//             </h2>

//           </div>


//           <div className="fiya-why-intro-copy">

//             <p>
//               Construction is more than
//               putting materials together.
//               It is about creating confidence
//               at every stage of the journey.
//             </p>

//             <div className="fiya-why-mark">
//               <Check
//                 size={17}
//                 strokeWidth={2}
//               />
//               <span>
//                 Quality you can see.
//               </span>
//             </div>

//           </div>

//         </div>


//         {/* =========================================
//             REASONS
//         ========================================= */}

//         <div className="fiya-why-list">

//           {reasons.map((reason) => (
//             <article
//               className="fiya-why-item"
//               key={reason.number}
//             >

//               <div className="fiya-why-item-number">
//                 {reason.number}
//               </div>


//               <div className="fiya-why-item-title">

//                 <h3>
//                   {reason.title}
//                 </h3>

//               </div>


//               <div className="fiya-why-item-description">

//                 <p>
//                   {reason.description}
//                 </p>

//                 <span className="fiya-why-item-arrow">
//                   <ArrowUpRight
//                     size={18}
//                     strokeWidth={1.6}
//                   />
//                 </span>

//               </div>

//             </article>
//           ))}

//         </div>


//         {/* =========================================
//             BOTTOM STATEMENT
//         ========================================= */}

//         <div className="fiya-why-bottom">

//           <div className="fiya-why-bottom-number">
//             04
//           </div>

//           <div className="fiya-why-bottom-content">

//             <span>
//               OUR PROMISE
//             </span>

//             <p>
//               Every project deserves
//               the same level of care,
//               regardless of its size.
//             </p>

//           </div>

//           <a
//             href="/contact"
//             className="fiya-why-bottom-link"
//           >
//             <span>
//               Talk to our team
//             </span>

//             <span className="fiya-why-bottom-icon">
//               <ArrowUpRight
//                 size={18}
//                 strokeWidth={1.6}
//               />
//             </span>
//           </a>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;
















// import { 
//   FaAward, 
//   FaHandshake, 
//   FaDraftingCompass, 
//   FaClipboardCheck,
//   FaCheckCircle,
//   FaArrowRight,
//   FaShieldAlt,
//   FaStar,
//   FaMedal,
//   FaThumbsUp
// } from "react-icons/fa";

// import "./WhyChooseUs.css";

// const reasons = [
//   {
//     number: "01",
//     title: "Quality First",
//     description:
//       "We maintain high standards across materials, workmanship and execution to create spaces built for the long term.",
//     icon: FaAward,
//     color: "blue",
//   },
//   {
//     number: "02",
//     title: "Transparent Process",
//     description:
//       "Clear communication, defined milestones and honest project updates keep every stage of construction transparent.",
//     icon: FaHandshake,
//     color: "gold",
//   },
//   {
//     number: "03",
//     title: "Engineering Precision",
//     description:
//       "Every project combines practical engineering, thoughtful planning and attention to structural detail.",
//     icon: FaDraftingCompass,
//     color: "blue",
//   },
//   {
//     number: "04",
//     title: "End-to-End Execution",
//     description:
//       "From the first conversation to final handover, our team manages the process with one clear direction.",
//     icon: FaClipboardCheck,
//     color: "gold",
//   },
// ];

// const stats = [
//   { icon: FaShieldAlt, value: "100%", label: "Quality Guaranteed" },
//   { icon: FaStar, value: "4.9/5", label: "Client Rating" },
//   { icon: FaMedal, value: "15+", label: "Industry Awards" },
//   { icon: FaThumbsUp, value: "98%", label: "Satisfaction Rate" },
// ];

// const WhyChooseUs = () => {
//   return (
//     <section className="fya-why" id="why-fiya">
//       <div className="fya-container">
        
//         {/* =========================================
//             TOP LABEL
//         ========================================= */}
//         <div className="fya-why-top">
//           <div className="fya-section-label">
//             <span className="fya-section-number">04</span>
//             <span className="fya-section-label-text">WHY FIYA</span>
//             <span className="fya-section-line" />
//           </div>
//         </div>

//         {/* =========================================
//             INTRO
//         ========================================= */}
//         <div className="fya-why-intro">
//           <div className="fya-why-heading">
//             <span className="fya-why-small-label">
//               <FaStar className="fya-label-star" />
//               BUILT DIFFERENTLY
//             </span>
//             <h2 className="fya-why-title">
//               Built on Trust.
//               <br />
//               Defined by <span className="fya-text-gold">Quality.</span>
//             </h2>
//           </div>

//           <div className="fya-why-intro-copy">
//             <p className="fya-why-description">
//               Construction is more than putting materials together.
//               It is about creating confidence at every stage of the journey.
//             </p>

//             <div className="fya-why-mark">
//               <FaCheckCircle className="fya-mark-icon" />
//               <span>Quality you can see</span>
//             </div>
//           </div>
//         </div>

//         {/* =========================================
//             REASONS GRID
//         ========================================= */}
//         <div className="fya-why-grid">
//           {reasons.map((reason) => (
//             <article className="fya-why-card" key={reason.number}>
//               <div className="fya-why-card-header">
//                 <div className={`fya-why-icon fya-why-icon--${reason.color}`}>
//                   <reason.icon />
//                 </div>
//                 <span className="fya-why-card-number">{reason.number}</span>
//               </div>

//               <h3 className="fya-why-card-title">
//                 {reason.title}
//               </h3>

//               <p className="fya-why-card-description">
//                 {reason.description}
//               </p>

//               <div className="fya-why-card-footer">
//                 <span className="fya-why-card-line" />
//                 <FaArrowRight className="fya-why-card-arrow" />
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* =========================================
//             STATS BAND
//         ========================================= */}
//         <div className="fya-why-stats">
//           {stats.map((stat, index) => (
//             <div className="fya-stat-card" key={index}>
//               <div className="fya-stat-icon">
//                 <stat.icon />
//               </div>
//               <span className="fya-stat-value">{stat.value}</span>
//               <span className="fya-stat-label">{stat.label}</span>
//             </div>
//           ))}
//         </div>

//         {/* =========================================
//             BOTTOM CTA
//         ========================================= */}
//         <div className="fya-why-bottom">
//           <div className="fya-bottom-content">
//             <span className="fya-bottom-label">OUR PROMISE</span>
//             <p className="fya-bottom-text">
//               Every project deserves the same level of care,
//               regardless of its size.
//             </p>
//           </div>

//           <a href="/contact" className="fya-why-bottom-link">
//             <span>Talk to Our Team</span>
//             <span className="fya-why-bottom-icon">
//               <FaArrowRight />
//             </span>
//           </a>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;


// src/components/sections/WhyChooseUs/WhyChooseUs.jsx
import { 
  FaAward, 
  FaHandshake, 
  FaDraftingCompass, 
  FaClipboardCheck,
  FaCheckCircle,
  FaArrowRight,
  FaShieldAlt,
  FaStar,
  FaMedal,
  FaThumbsUp,
  FaBuilding,
  FaUsers,
  FaTrophy,
  FaGem,
} from "react-icons/fa";

import "./WhyChooseUs.css";

const reasons = [
  {
    number: "01",
    title: "Quality First",
    description: "We maintain high standards across materials, workmanship and execution to create spaces built for the long term.",
    icon: FaAward,
    color: "red",
  },
  {
    number: "02",
    title: "Transparent Process",
    description: "Clear communication, defined milestones and honest project updates keep every stage of construction transparent.",
    icon: FaHandshake,
    color: "gold",
  },
  {
    number: "03",
    title: "Engineering Precision",
    description: "Every project combines practical engineering, thoughtful planning and attention to structural detail.",
    icon: FaDraftingCompass,
    color: "blue",
  },
  {
    number: "04",
    title: "End-to-End Execution",
    description: "From the first conversation to final handover, our team manages the process with one clear direction.",
    icon: FaClipboardCheck,
    color: "red",
  },
];

const stats = [
  { icon: FaShieldAlt, value: "100%", label: "Quality Guaranteed", color: "#D71920" },
  { icon: FaStar, value: "4.9/5", label: "Client Rating", color: "#C9972B" },
  { icon: FaMedal, value: "15+", label: "Industry Awards", color: "#3D5D96" },
  { icon: FaThumbsUp, value: "98%", label: "Satisfaction Rate", color: "#16A34A" },
];

const WhyChooseUs = () => {
  return (
    <section className="fya-why" id="why-fiya">
      <div className="fya-container">
        
        {/* =========================================
            TOP LABEL
        ========================================= */}
        <div className="fya-why__top">
          <div className="fya-why__label">
            <span className="fya-why__number">04</span>
            <span className="fya-why__label-text">WHY FIYA</span>
            <span className="fya-why__line" />
          </div>
        </div>

        {/* =========================================
            INTRO
        ========================================= */}
        <div className="fya-why__intro">
          <div className="fya-why__heading">
            <span className="fya-why__tag">
              <FaGem className="fya-why__tag-icon" />
              BUILT DIFFERENTLY
            </span>
            <h2 className="fya-why__title">
              Built on Trust.
              <br />
              Defined by <span className="fya-why__highlight">Quality.</span>
            </h2>
          </div>

          <div className="fya-why__copy">
            <p className="fya-why__description">
              Construction is more than putting materials together.
              It is about creating confidence at every stage of the journey.
            </p>

            <div className="fya-why__mark">
              <FaCheckCircle className="fya-why__mark-icon" />
              <span>Quality you can see</span>
            </div>
          </div>
        </div>

        {/* =========================================
            REASONS GRID
        ========================================= */}
        <div className="fya-why__grid">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <article className="fya-why__card" key={reason.number}>
                <div className="fya-why__card-header">
                  <div className={`fya-why__card-icon fya-why__card-icon--${reason.color}`}>
                    <Icon />
                  </div>
                  <span className="fya-why__card-number">{reason.number}</span>
                </div>

                <h3 className="fya-why__card-title">
                  {reason.title}
                </h3>

                <p className="fya-why__card-description">
                  {reason.description}
                </p>

                <div className="fya-why__card-footer">
                  <span className="fya-why__card-line" />
                  <FaArrowRight className="fya-why__card-arrow" />
                </div>
              </article>
            );
          })}
        </div>

        {/* =========================================
            STATS BAND
        ========================================= */}
        <div className="fya-why__stats">
          {stats.map((stat, index) => (
            <div className="fya-why__stat" key={index}>
              <div className="fya-why__stat-icon" style={{ color: stat.color }}>
                <stat.icon />
              </div>
              <span className="fya-why__stat-value">{stat.value}</span>
              <span className="fya-why__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* =========================================
            BOTTOM CTA
        ========================================= */}
        <div className="fya-why__bottom">
          <div className="fya-why__bottom-content">
            <span className="fya-why__bottom-label">OUR PROMISE</span>
            <p className="fya-why__bottom-text">
              Every project deserves the same level of care,
              regardless of its size.
            </p>
          </div>

          <a href="/contact" className="fya-why__bottom-link">
            <span>Talk to Our Team</span>
            <span className="fya-why__bottom-arrow">
              <FaArrowRight />
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;