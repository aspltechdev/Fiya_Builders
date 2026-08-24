// // import { useEffect, useState } from "react";
// // import { ArrowUpRight, Plus } from "lucide-react";

// // import api from "../../services/api";

// // import "./AboutSection.css";

// // const API_URL =
// //   import.meta.env.VITE_API_URL?.replace("/api", "") ||
// //   "http://localhost:5000";

// // const AboutSection = () => {
// //   const [about, setAbout] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     loadAbout();
// //   }, []);

// //   const loadAbout = async () => {
// //     try {
// //       const response = await api.get("/about");

// //       setAbout(
// //         response.data?.data ||
// //           response.data
// //       );
// //     } catch (error) {
// //       console.error(
// //         "About Load Error:",
// //         error
// //       );
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const getImageUrl = (image) => {
// //     if (!image) return "";

// //     if (
// //       image.startsWith("http://") ||
// //       image.startsWith("https://")
// //     ) {
// //       return image;
// //     }

// //     return `${API_URL}${image}`;
// //   };

// //   const title =
// //     about?.title ||
// //     "We don't just build structures. We build what comes next.";

// //   const subtitle =
// //     about?.subtitle ||
// //     "ABOUT FIYA BUILDERS";

// //   const description =
// //     about?.description ||
// //     "FIYA Builders brings together construction expertise, engineering precision and thoughtful execution to create spaces that are built for today and designed to last.";

// //   return (
// //     <section
// //       className="fiya-about"
// //       id="about"
// //     >

// //       {/* =========================================
// //           TOP LABEL
// //       ========================================= */}

// //       <div className="public-container">

// //         <div className="fiya-about-top">

// //           <span className="fiya-about-number">
// //             01
// //           </span>

// //           <span className="fiya-about-label">
// //             {subtitle}
// //           </span>

// //           <span className="fiya-about-rule" />

// //         </div>


// //         {/* =========================================
// //             MAIN CONTENT
// //         ========================================= */}

// //         <div className="fiya-about-grid">

// //           {/* LEFT — IMAGE */}

// //           <div className="fiya-about-image-wrap">

// //             <div className="fiya-about-image">

// //               {about?.image ? (
// //                 <img
// //                   src={getImageUrl(
// //                     about.image
// //                   )}
// //                   alt={
// //                     about?.title ||
// //                     "FIYA Builders"
// //                   }
// //                 />
// //               ) : (
// //                 <div className="fiya-about-image-placeholder">
// //                   FIYA
// //                 </div>
// //               )}

// //             </div>


// //             {/* IMAGE INDEX */}

// //             <div className="fiya-about-image-meta">

// //               <span>
// //                 FIYA / 01
// //               </span>

// //               <span>
// //                 PONDICHERRY · INDIA
// //               </span>

// //             </div>

// //           </div>


// //           {/* RIGHT — CONTENT */}

// //           <div className="fiya-about-content">

// //             <div className="fiya-about-heading-wrap">

// //               <span className="fiya-about-small-label">
// //                 OUR APPROACH
// //               </span>

// //               <h2>
// //                 {title}
// //               </h2>

// //             </div>


// //             <div className="fiya-about-description">

// //               <p>
// //                 {description}
// //               </p>

// //             </div>


// //             {/* EXPERIENCE */}

// //             {about?.experience && (
// //               <div className="fiya-about-experience">

// //                 <div className="fiya-about-experience-number">
// //                   <span>
// //                     {about.experience}
// //                   </span>

// //                   <Plus
// //                     size={22}
// //                     strokeWidth={1.5}
// //                   />
// //                 </div>

// //                 <div className="fiya-about-experience-text">
// //                   <span>
// //                     YEARS
// //                   </span>

// //                   <span>
// //                     OF EXPERIENCE
// //                   </span>
// //                 </div>

// //               </div>
// //             )}


// //             {/* CTA */}

// //             <a
// //               href="/about"
// //               className="fiya-about-link"
// //             >

// //               <span>
// //                 Discover FIYA Builders
// //               </span>

// //               <span className="fiya-about-link-icon">

// //                 <ArrowUpRight
// //                   size={18}
// //                   strokeWidth={1.7}
// //                 />

// //               </span>

// //             </a>

// //           </div>

// //         </div>


// //         {/* =========================================
// //             BOTTOM STATEMENT
// //         ========================================= */}

// //         <div className="fiya-about-statement">

// //           <div className="fiya-about-statement-line" />

// //           <p>
// //             From concept to completion,
// //             every detail is shaped around
// //             quality, purpose and
// //             long-term value.
// //           </p>

// //         </div>

// //       </div>

// //     </section>
// //   );
// // };

// // export default AboutSection;

// import { useEffect, useState } from "react";
// import { FaArrowRight, FaPlus, FaAward, FaCheckCircle, FaUsers, FaBuilding } from "react-icons/fa";

// import api from "../../services/api";

// import "./AboutSection.css";

// const API_URL =
//   import.meta.env.VITE_API_URL?.replace("/api", "") ||
//   "http://localhost:5000";

// const AboutSection = () => {
//   const [about, setAbout] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadAbout();
//   }, []);

//   const loadAbout = async () => {
//     try {
//       const response = await api.get("/about");
//       setAbout(response.data?.data || response.data);
//     } catch (error) {
//       console.error("About Load Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getImageUrl = (image) => {
//     if (!image) return "";
//     if (image.startsWith("http://") || image.startsWith("https://")) {
//       return image;
//     }
//     return `${API_URL}${image}`;
//   };

//   const title =
//     about?.title ||
//     "We don't just build structures. We build what comes next.";

//   const subtitle =
//     about?.subtitle ||
//     "ABOUT FIYA BUILDERS";

//   const description =
//     about?.description ||
//     "FIYA Builders brings together construction expertise, engineering precision and thoughtful execution to create spaces that are built for today and designed to last.";

//   const experience = about?.experience || "15";

//   const highlights = [
//     { icon: FaAward, text: "ISO Certified Company" },
//     { icon: FaCheckCircle, text: "Quality Assured Projects" },
//     { icon: FaUsers, text: "Expert Team of 150+" },
//     { icon: FaBuilding, text: "250+ Projects Completed" },
//   ];

//   return (
//     <section className="fya-about" id="about">
//       <div className="fya-container">
        
//         {/* =========================================
//             TOP LABEL
//         ========================================= */}
//         <div className="fya-about-top">
//           <span className="fya-section-number">01</span>
//           <span className="fya-section-label">{subtitle}</span>
//           <span className="fya-section-line" />
//         </div>

//         {/* =========================================
//             MAIN CONTENT
//         ========================================= */}
//         <div className="fya-about-grid">
          
//           {/* LEFT — IMAGE */}
//           <div className="fya-about-image-wrap">
//             <div className="fya-about-image">
//               {about?.image ? (
//                 <img
//                   src={getImageUrl(about.image)}
//                   alt={about?.title || "FIYA Builders"}
//                 />
//               ) : (
//                 <img
//                   src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
//                   alt="FIYA Builders Construction"
//                 />
//               )}
//               <div className="fya-about-image-overlay" />
              
//               {/* Experience Badge */}
//               <div className="fya-about-experience-badge">
//                 <span className="fya-badge-number">{experience}</span>
//                 <span className="fya-badge-plus">
//                   <FaPlus size={16} />
//                 </span>
//                 <div className="fya-badge-text">
//                   <span className="fya-badge-label">YEARS OF</span>
//                   <span className="fya-badge-label">EXCELLENCE</span>
//                 </div>
//               </div>
//             </div>

//             {/* Image Meta */}
//             <div className="fya-about-image-meta">
//               <span className="fya-meta-left">FIYA / 01</span>
//               <span className="fya-meta-right">PONDICHERRY · INDIA</span>
//             </div>
//           </div>

//           {/* RIGHT — CONTENT */}
//           <div className="fya-about-content">
//             <div className="fya-about-heading-wrap">
//               <span className="fya-about-small-label">OUR APPROACH</span>
//               <h2 className="fya-about-title">{title}</h2>
//             </div>

//             <div className="fya-about-description">
//               <p>{description}</p>
//             </div>

//             {/* Highlights */}
//             <div className="fya-about-highlights">
//               {highlights.map((item, index) => (
//                 <div className="fya-highlight-item" key={index}>
//                   <div className="fya-highlight-icon">
//                     <item.icon size={16} />
//                   </div>
//                   <span className="fya-highlight-text">{item.text}</span>
//                 </div>
//               ))}
//             </div>

//             {/* CTA */}
//             <a href="/about" className="fya-about-link">
//               <span>Discover FIYA Builders</span>
//               <span className="fya-about-link-icon">
//                 <FaArrowRight size={16} />
//               </span>
//             </a>
//           </div>
//         </div>

//         {/* =========================================
//             BOTTOM STATEMENT
//         ========================================= */}
//         <div className="fya-about-statement">
//           <div className="fya-statement-content">
//             <span className="fya-statement-quote">"</span>
//             <p>
//               From concept to completion, every detail is shaped around
//               quality, purpose and long-term value.
//             </p>
//           </div>
//           <div className="fya-statement-line" />
//         </div>

//       </div>
//     </section>
//   );
// };

// export default AboutSection;

// src/components/sections/AboutSection/AboutSection.jsx
import { useEffect, useState } from "react";
import { FaArrowRight, FaPlus, FaAward, FaCheckCircle, FaUsers, FaBuilding, FaQuoteLeft } from "react-icons/fa";
import api from "../../services/api";
import "./AboutSection.css";

const API_URL =
  import.meta.env.VITE_API_URL?.replace("/api", "") ||
  "http://localhost:5000";

const AboutSection = () => {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAbout();
  }, []);

  const loadAbout = async () => {
    try {
      const response = await api.get("/about");
      setAbout(response.data?.data || response.data);
    } catch (error) {
      console.error("About Load Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const getImageUrl = (image) => {
    if (!image) return "";
    if (image.startsWith("http://") || image.startsWith("https://")) {
      return image;
    }
    return `${API_URL}${image}`;
  };

  const title = about?.title || "We don't just build structures. We build what comes next.";
  const subtitle = about?.subtitle || "ABOUT FIYA BUILDERS";
  const description = about?.description || "FIYA Builders brings together construction expertise, engineering precision and thoughtful execution to create spaces that are built for today and designed to last.";
  const experience = about?.experience || "15";

  const highlights = [
    { icon: FaAward, text: "ISO Certified", color: "#D71920" },
    { icon: FaCheckCircle, text: "Quality Assured", color: "#16A34A" },
    { icon: FaUsers, text: "Expert Team 150+", color: "#2563EB" },
    { icon: FaBuilding, text: "250+ Projects", color: "#7C3AED" },
  ];

  if (loading) {
    return (
      <section className="fya-about">
        <div className="fya-container">
          <div className="fya-about__loading">
            <div className="fya-about__spinner" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="fya-about" id="about">
      <div className="fya-container">
        
        {/* =========================================
            TOP LABEL
        ========================================= */}
        <div className="fya-about__top">
          <span className="fya-about__number">01</span>
          <span className="fya-about__label">{subtitle}</span>
          <span className="fya-about__line" />
        </div>

        {/* =========================================
            MAIN CONTENT
        ========================================= */}
        <div className="fya-about__grid">
          
          {/* LEFT — IMAGE */}
          <div className="fya-about__image-wrap">
            <div className="fya-about__image">
              <img
                src={getImageUrl(about?.image) || "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"}
                alt={about?.title || "FIYA Builders"}
                className="fya-about__img"
              />
              <div className="fya-about__image-overlay" />
              
              {/* Experience Badge */}
              <div className="fya-about__badge">
                <div className="fya-about__badge-number">
                  <span>{experience}</span>
                  <FaPlus className="fya-about__badge-plus" />
                </div>
                <div className="fya-about__badge-text">
                  <span>YEARS OF</span>
                  <span>EXCELLENCE</span>
                </div>
              </div>
            </div>

            {/* Image Meta */}
            <div className="fya-about__meta">
              <span className="fya-about__meta-left">FIYA / 01</span>
              <span className="fya-about__meta-right">PONDICHERRY · INDIA</span>
            </div>
          </div>

          {/* RIGHT — CONTENT */}
          <div className="fya-about__content">
            <div className="fya-about__header">
              <span className="fya-about__tag">OUR APPROACH</span>
              <h2 className="fya-about__title">{title}</h2>
            </div>

            <p className="fya-about__description">{description}</p>

            {/* Highlights */}
            <div className="fya-about__highlights">
              {highlights.map((item, index) => (
                <div className="fya-about__highlight" key={index}>
                  <div className="fya-about__highlight-icon" style={{ background: `${item.color}15`, color: item.color }}>
                    <item.icon size={14} />
                  </div>
                  <span className="fya-about__highlight-text">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a href="/about" className="fya-about__cta">
              <span className="fya-about__cta-text">Discover FIYA Builders</span>
              <span className="fya-about__cta-arrow">
                <FaArrowRight size={14} />
              </span>
            </a>
          </div>
        </div>

        {/* =========================================
            BOTTOM STATEMENT
        ========================================= */}
        <div className="fya-about__statement">
          <div className="fya-about__statement-content">
            <FaQuoteLeft className="fya-about__statement-icon" />
            <p className="fya-about__statement-text">
              From concept to completion, every detail is shaped around
              quality, purpose and long-term value.
            </p>
          </div>
          <div className="fya-about__statement-line" />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;