// import { 
//   FaArrowRight,
//   FaCheckCircle,
//   FaCalendarCheck,
//   FaClipboardList,
//   FaPhone
// } from "react-icons/fa";

// import "./ProcessSection.css";

// const processSteps = [
//   {
//     number: "01",
//     title: "Consultation",
//     description:
//       "We begin by understanding your vision, requirements, budget and expectations.",
//     image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
//     details: ["Initial meeting", "Site assessment", "Requirement analysis"],
//   },
//   {
//     number: "02",
//     title: "Planning & Design",
//     description:
//       "Our team translates your requirements into a practical and well-considered project plan.",
//     image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
//     details: ["Concept development", "Detailed planning", "Budget estimation"],
//   },
//   {
//     number: "03",
//     title: "Construction",
//     description:
//       "With disciplined execution and quality control, we bring the approved plan to life.",
//     image: "https://images.unsplash.com/photo-1590725121839-892b458a74fe?w=600&q=80",
//     details: ["Quality materials", "Regular updates", "Safety compliance"],
//   },
//   {
//     number: "04",
//     title: "Quality & Handover",
//     description:
//       "Every detail is reviewed before we complete the project and hand over your space.",
//     image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
//     details: ["Final inspection", "Quality assurance", "Project handover"],
//   },
// ];

// const ProcessSection = () => {
//   return (
//     <section className="fya-process" id="process">
//       <div className="fya-container">
        
//         {/* =========================================
//             HEADER
//         ========================================= */}
//         <div className="fya-process-header">
//           <div className="fya-section-label">
//             <span className="fya-section-number">05</span>
//             <span className="fya-section-label-text">OUR PROCESS</span>
//             <span className="fya-section-line" />
//           </div>

//           <div className="fya-process-heading">
//             <h2 className="fya-process-title">
//               From First Conversation
//               <br />
//               to <span className="fya-text-gold">Handover</span>
//             </h2>
//             <p className="fya-process-subtitle">
//               A clear, structured process designed to keep your project
//               moving with confidence from beginning to end.
//             </p>
//           </div>
//         </div>

//         {/* =========================================
//             PROCESS GRID WITH IMAGES
//         ========================================= */}
//         <div className="fya-process-grid">
//           {processSteps.map((step, index) => (
//             <article className="fya-process-card" key={step.number}>
//               {/* Image */}
//               <div className="fya-process-image">
//                 <img src={step.image} alt={step.title} />
//                 <div className="fya-process-image-overlay" />
//                 <span className="fya-process-step-number">{step.number}</span>
//               </div>

//               {/* Connector */}
//               {index < processSteps.length - 1 && (
//                 <div className="fya-process-connector">
//                   <FaArrowRight className="fya-connector-arrow" />
//                 </div>
//               )}

//               {/* Content */}
//               <div className="fya-process-content">
//                 <h3 className="fya-process-step-title">{step.title}</h3>
//                 <p className="fya-process-step-description">
//                   {step.description}
//                 </p>

//                 {/* Details List */}
//                 <ul className="fya-process-details">
//                   {step.details.map((detail, idx) => (
//                     <li key={idx} className="fya-process-detail">
//                       <FaCheckCircle className="fya-detail-icon" />
//                       <span>{detail}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* =========================================
//             PROCESS HIGHLIGHTS
//         ========================================= */}
//         <div className="fya-process-highlights">
//           <div className="fya-highlight-card">
//             <FaClipboardList className="fya-highlight-icon" />
//             <div className="fya-highlight-content">
//               <span className="fya-highlight-label">TRANSPARENT</span>
//               <span className="fya-highlight-text">Detailed project documentation</span>
//             </div>
//           </div>

//           <div className="fya-highlight-card">
//             <FaCalendarCheck className="fya-highlight-icon" />
//             <div className="fya-highlight-content">
//               <span className="fya-highlight-label">TIMELY</span>
//               <span className="fya-highlight-text">On-schedule project delivery</span>
//             </div>
//           </div>

//           <div className="fya-highlight-card">
//             <FaPhone className="fya-highlight-icon" />
//             <div className="fya-highlight-content">
//               <span className="fya-highlight-label">CONNECTED</span>
//               <span className="fya-highlight-text">Regular communication updates</span>
//             </div>
//           </div>
//         </div>

//         {/* =========================================
//             FOOTER CTA
//         ========================================= */}
//         <div className="fya-process-footer">
//           <div className="fya-footer-content">
//             <span className="fya-footer-label">ONE CLEAR DIRECTION</span>
//             <p className="fya-footer-text">
//               Good construction starts with good communication.
//             </p>
//           </div>

//           <a href="/contact" className="fya-process-footer-link">
//             <span>Start a Conversation</span>
//             <span className="fya-footer-link-icon">
//               <FaArrowRight />
//             </span>
//           </a>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ProcessSection;




// src/components/sections/ProcessSection/ProcessSection.jsx
import { 
  FaArrowRight,
  FaCheckCircle,
  FaCalendarCheck,
  FaClipboardList,
  FaPhone,
  FaRulerCombined,
  FaHardHat,
  FaClipboardCheck,
  FaUserCheck,
  FaPenFancy,
} from "react-icons/fa";

import "./ProcessSection.css";

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description: "We begin by understanding your vision, requirements, budget and expectations.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
    icon: FaUserCheck,
    details: ["Initial meeting", "Site assessment", "Requirement analysis"],
  },
  {
    number: "02",
    title: "Planning & Design",
    description: "Our team translates your requirements into a practical and well-considered project plan.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
    icon: FaPenFancy,
    details: ["Concept development", "Detailed planning", "Budget estimation"],
  },
  {
    number: "03",
    title: "Construction",
    description: "With disciplined execution and quality control, we bring the approved plan to life.",
    image: "https://images.unsplash.com/photo-1590725121839-892b458a74fe?w=600&q=80",
    icon: FaHardHat,
    details: ["Quality materials", "Regular updates", "Safety compliance"],
  },
  {
    number: "04",
    title: "Quality & Handover",
    description: "Every detail is reviewed before we complete the project and hand over your space.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    icon: FaClipboardCheck,
    details: ["Final inspection", "Quality assurance", "Project handover"],
  },
];

const highlights = [
  { 
    icon: FaClipboardList, 
    label: "TRANSPARENT", 
    text: "Detailed project documentation",
    color: "#3D5D96"
  },
  { 
    icon: FaCalendarCheck, 
    label: "TIMELY", 
    text: "On-schedule project delivery",
    color: "#16A34A"
  },
  { 
    icon: FaPhone, 
    label: "CONNECTED", 
    text: "Regular communication updates",
    color: "#D71920"
  },
];

const ProcessSection = () => {
  return (
    <section className="fya-process" id="process">
      <div className="fya-container">
        
        {/* =========================================
            HEADER
        ========================================= */}
        <div className="fya-process__header">
          <div className="fya-process__label">
            <span className="fya-process__number">05</span>
            <span className="fya-process__label-text">OUR PROCESS</span>
            <span className="fya-process__line" />
          </div>

          <div className="fya-process__heading">
            <h2 className="fya-process__title">
              From First Conversation
              <br />
              to <span className="fya-process__highlight">Handover</span>
            </h2>
            <p className="fya-process__subtitle">
              A clear, structured process designed to keep your project
              moving with confidence from beginning to end.
            </p>
          </div>
        </div>

        {/* =========================================
            PROCESS GRID
        ========================================= */}
        <div className="fya-process__grid">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div className="fya-process__step" key={step.number}>
                {/* Image */}
                <div className="fya-process__step-image">
                  <img src={step.image} alt={step.title} className="fya-process__step-img" />
                  <div className="fya-process__step-overlay" />
                  
                  {/* Number Badge */}
                  <span className="fya-process__step-badge">{step.number}</span>
                  
                  {/* Icon */}
                  <div className="fya-process__step-icon">
                    <Icon />
                  </div>
                </div>

                {/* Content */}
                <div className="fya-process__step-content">
                  <h3 className="fya-process__step-title">{step.title}</h3>
                  <p className="fya-process__step-description">
                    {step.description}
                  </p>

                  {/* Details List */}
                  <ul className="fya-process__step-details">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="fya-process__step-detail">
                        <FaCheckCircle className="fya-process__detail-icon" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="fya-process__connector">
                    <div className="fya-process__connector-line" />
                    <div className="fya-process__connector-dot" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* =========================================
            PROCESS HIGHLIGHTS
        ========================================= */}
        <div className="fya-process__highlights">
          {highlights.map((item, index) => (
            <div className="fya-process__highlight" key={index}>
              <div className="fya-process__highlight-icon" style={{ background: `${item.color}15`, color: item.color }}>
                <item.icon />
              </div>
              <div className="fya-process__highlight-content">
                <span className="fya-process__highlight-label">{item.label}</span>
                <span className="fya-process__highlight-text">{item.text}</span>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================
            FOOTER CTA
        ========================================= */}
        <div className="fya-process__footer">
          <div className="fya-process__footer-content">
            <span className="fya-process__footer-label">ONE CLEAR DIRECTION</span>
            <p className="fya-process__footer-text">
              Good construction starts with good communication.
            </p>
          </div>

          <a href="/contact" className="fya-process__footer-link">
            <span>Start a Conversation</span>
            <span className="fya-process__footer-arrow">
              <FaArrowRight />
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;