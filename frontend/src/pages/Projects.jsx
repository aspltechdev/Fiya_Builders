// // import { useEffect, useState } from "react";
// // import {
// //   ArrowDown,
// //   ArrowUpRight,
// //   MapPin,
// // } from "lucide-react";

// // import api from "../services/api.js";

// // import "./ProjectsPage.css";

// // const API_URL =
// //   import.meta.env.VITE_API_URL?.replace(
// //     "/api",
// //     ""
// //   ) || "http://localhost:5041";

// // const ProjectsPage = () => {
// //   const [projects, setProjects] = useState([]);
// //   const [activeFilter, setActiveFilter] =
// //     useState("ALL");
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     loadProjects();
// //   }, []);

// //   const loadProjects = async () => {
// //     try {
// //       const response = await api.get(
// //         "/projects"
// //       );

// //       const data =
// //         response.data?.data ||
// //         response.data ||
// //         [];

// //       setProjects(
// //         Array.isArray(data) ? data : []
// //       );
// //     } catch (error) {
// //       console.error(
// //         "Projects Load Error:",
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

// //   /*
// //    * Get unique project categories
// //    */

// //   const categories = [
// //     "ALL",
// //     ...new Set(
// //       projects
// //         .map(
// //           (project) =>
// //             project.category ||
// //             project.type
// //         )
// //         .filter(Boolean)
// //         .map((item) =>
// //           String(item).toUpperCase()
// //         )
// //     ),
// //   ];

// //   const filteredProjects =
// //     activeFilter === "ALL"
// //       ? projects
// //       : projects.filter((project) => {
// //           const category =
// //             project.category ||
// //             project.type ||
// //             "";

// //           return (
// //             String(category).toUpperCase() ===
// //             activeFilter
// //           );
// //         });

// //   return (
// //     <main className="fiya-projects-page">

// //       {/* ==================================================
// //           HERO
// //       ================================================== */}

// //       <section className="fiya-projects-hero">

// //         <div className="public-container">

// //           <div className="fiya-projects-label">

// //             <span>
// //               01
// //             </span>

// //             <span>
// //               OUR PROJECTS
// //             </span>

// //             <span className="fiya-projects-line" />

// //           </div>


// //           <div className="fiya-projects-hero-content">

// //             <h1>
// //               Spaces
// //               <br />
// //               we've
// //               <br />
// //               <span>built.</span>
// //             </h1>

// //             <div className="fiya-projects-hero-copy">

// //               <p>
// //                 A collection of spaces shaped
// //                 through thoughtful design,
// //                 disciplined construction and
// //                 attention to detail.
// //               </p>

// //               <div className="fiya-projects-scroll">

// //                 <ArrowDown
// //                   size={16}
// //                   strokeWidth={1.4}
// //                 />

// //                 <span>
// //                   EXPLORE PROJECTS
// //                 </span>

// //               </div>

// //             </div>

// //           </div>

// //         </div>

// //       </section>


// //       {/* ==================================================
// //           INTRO
// //       ================================================== */}

// //       <section className="fiya-projects-intro">

// //         <div className="public-container">

// //           <div className="fiya-projects-intro-grid">

// //             <span>
// //               02
// //             </span>

// //             <div>

// //               <span className="fiya-projects-overline">
// //                 OUR WORK
// //               </span>

// //               <h2>
// //                 Every project
// //                 <br />
// //                 tells a
// //                 <br />
// //                 <em>different story.</em>
// //               </h2>

// //               <p>
// //                 From residential homes to
// //                 commercial spaces, our portfolio
// //                 reflects the diversity of projects
// //                 we undertake and the consistency
// //                 of our approach.
// //               </p>

// //             </div>

// //           </div>

// //         </div>

// //       </section>


// //       {/* ==================================================
// //           FILTERS
// //       ================================================== */}

// //       <section className="fiya-projects-section">

// //         <div className="public-container">

// //           <div className="fiya-projects-toolbar">

// //             <div className="fiya-projects-toolbar-label">

// //               <span>
// //                 03
// //               </span>

// //               <span>
// //                 SELECTED WORK
// //               </span>

// //             </div>


// //             <div className="fiya-project-filters">

// //               {categories.map(
// //                 (category) => (
// //                   <button
// //                     key={category}
// //                     type="button"
// //                     className={
// //                       activeFilter ===
// //                       category
// //                         ? "active"
// //                         : ""
// //                     }
// //                     onClick={() =>
// //                       setActiveFilter(
// //                         category
// //                       )
// //                     }
// //                   >
// //                     {category}
// //                   </button>
// //                 )
// //               )}

// //             </div>

// //           </div>


// //           {/* ==================================================
// //               PROJECT GRID
// //           ================================================== */}

// //           {loading ? (
// //             <div className="fiya-projects-loading">
// //               Loading projects...
// //             </div>
// //           ) : filteredProjects.length ===
// //             0 ? (
// //             <div className="fiya-projects-empty">

// //               <span>
// //                 NO PROJECTS FOUND
// //               </span>

// //               <p>
// //                 Projects will appear here once
// //                 they are added from the admin
// //                 panel.
// //               </p>

// //             </div>
// //           ) : (
// //             <div className="fiya-projects-grid">

// //               {filteredProjects.map(
// //                 (project, index) => {

// //                   const image =
// //                     project.image ||
// //                     project.coverImage ||
// //                     project.thumbnail;

// //                   return (
// //                     <article
// //                       className={`fiya-project-card project-card-${(
// //                         index % 6
// //                       ) + 1}`}
// //                       key={
// //                         project.id ||
// //                         index
// //                       }
// //                     >

// //                       <a
// //                         href={`/projects/${
// //                           project.slug ||
// //                           project.id
// //                         }`}
// //                         className="fiya-project-image"
// //                       >

// //                         {image ? (
// //                           <img
// //                             src={getImageUrl(
// //                               image
// //                             )}
// //                             alt={
// //                               project.title ||
// //                               "FIYA Builders project"
// //                             }
// //                           />
// //                         ) : (
// //                           <div className="fiya-project-placeholder">
// //                             FIYA
// //                           </div>
// //                         )}


// //                         <div className="fiya-project-overlay">

// //                           <span>
// //                             VIEW PROJECT
// //                           </span>

// //                           <span>
// //                             <ArrowUpRight
// //                               size={19}
// //                               strokeWidth={1.5}
// //                             />
// //                           </span>

// //                         </div>

// //                       </a>


// //                       <div className="fiya-project-info">

// //                         <div>

// //                           <span className="fiya-project-category">
// //                             {project.category ||
// //                               project.type ||
// //                               "PROJECT"}
// //                           </span>

// //                           <h3>
// //                             {project.title ||
// //                               project.name}
// //                           </h3>

// //                         </div>


// //                         <div className="fiya-project-location">

// //                           <MapPin
// //                             size={13}
// //                             strokeWidth={1.5}
// //                           />

// //                           <span>
// //                             {project.location ||
// //                               "Pondicherry"}
// //                           </span>

// //                         </div>

// //                       </div>

// //                     </article>
// //                   );
// //                 }
// //               )}

// //             </div>
// //           )}

// //         </div>

// //       </section>


// //       {/* ==================================================
// //           PROJECT PHILOSOPHY
// //       ================================================== */}

// //       <section className="fiya-projects-philosophy">

// //         <div className="public-container">

// //           <div className="fiya-projects-philosophy-grid">

// //             <div className="fiya-projects-philosophy-label">

// //               <span>
// //                 04
// //               </span>

// //               <span>
// //                 OUR APPROACH
// //               </span>

// //             </div>


// //             <div>

// //               <h2>
// //                 We don't measure a
// //                 <br />
// //                 project only by how
// //                 <br />
// //                 it <em>looks.</em>
// //               </h2>

// //               <p>
// //                 We look at how it performs,
// //                 how it feels to use and how
// //                 well it stands the test of time.
// //               </p>

// //             </div>

// //           </div>

// //         </div>

// //       </section>


// //       {/* ==================================================
// //           CTA
// //       ================================================== */}

// //       <section className="fiya-projects-cta">

// //         <div className="public-container">

// //           <div className="fiya-projects-cta-inner">

// //             <div>

// //               <span>
// //                 YOUR PROJECT COULD BE NEXT
// //               </span>

// //               <h2>
// //                 Let's create
// //                 <br />
// //                 something
// //                 <br />
// //                 <em>worth building.</em>
// //               </h2>

// //             </div>


// //             <a href="/contact">

// //               <span>
// //                 Start Your Project
// //               </span>

// //               <span>
// //                 <ArrowUpRight
// //                   size={20}
// //                   strokeWidth={1.5}
// //                 />
// //               </span>

// //             </a>

// //           </div>

// //         </div>

// //       </section>

// //     </main>
// //   );
// // };

// // export default ProjectsPage;
















// import { useEffect, useState } from "react";
// import {
//   ArrowDown,
//   ArrowUpRight,
//   MapPin,
// } from "lucide-react";

// import api from "../services/api.js";

// import "./ProjectsPage.css";

// const API_URL =
//   import.meta.env.VITE_API_URL?.replace(
//     "/api",
//     ""
//   ) || "http://localhost:5041";

// const defaultProjects = [
//   {
//     id: 1,
//     title: "Modern Office Complex",
//     slug: "modern-office-complex",
//     category: "COMMERCIAL",
//     location: "Chennai, India",
//     image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
//     year: "2024",
//     description: "Premium commercial space with modern architecture",
//   },
//   {
//     id: 2,
//     title: "Luxury Villa Residences",
//     slug: "luxury-villa-residences",
//     category: "RESIDENTIAL",
//     location: "Pondicherry, India",
//     image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
//     year: "2024",
//     description: "High-end residential project with premium finishes",
//   },
//   {
//     id: 3,
//     title: "Industrial Warehouse",
//     slug: "industrial-warehouse",
//     category: "INDUSTRIAL",
//     location: "Bangalore, India",
//     image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
//     year: "2023",
//     description: "Large-scale industrial facility with modern amenities",
//   },
//   {
//     id: 4,
//     title: "Boutique Hotel",
//     slug: "boutique-hotel",
//     category: "HOSPITALITY",
//     location: "Mahabalipuram, India",
//     image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
//     year: "2023",
//     description: "Luxury hospitality project with unique design elements",
//   },
//   {
//     id: 5,
//     title: "Shopping Complex",
//     slug: "shopping-complex",
//     category: "COMMERCIAL",
//     location: "Coimbatore, India",
//     image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800&q=80",
//     year: "2023",
//     description: "Modern retail space with contemporary architecture",
//   },
//   {
//     id: 6,
//     title: "Apartment Complex",
//     slug: "apartment-complex",
//     category: "RESIDENTIAL",
//     location: "Chennai, India",
//     image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
//     year: "2022",
//     description: "Multi-story residential complex with premium amenities",
//   },
//   {
//     id: 7,
//     title: "Corporate Headquarters",
//     slug: "corporate-headquarters",
//     category: "COMMERCIAL",
//     location: "Bangalore, India",
//     image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
//     year: "2022",
//     description: "State-of-the-art corporate office building",
//   },
//   {
//     id: 8,
//     title: "Beach House",
//     slug: "beach-house",
//     category: "RESIDENTIAL",
//     location: "Pondicherry, India",
//     image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
//     year: "2022",
//     description: "Custom-designed beachfront residence",
//   },
//   {
//     id: 9,
//     title: "Educational Institute",
//     slug: "educational-institute",
//     category: "INSTITUTIONAL",
//     location: "Vellore, India",
//     image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
//     year: "2021",
//     description: "Modern educational facility with sustainable design",
//   },
// ];

// const ProjectsPage = () => {
//   const [projects, setProjects] = useState(defaultProjects);
//   const [activeFilter, setActiveFilter] = useState("ALL");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadProjects();
//   }, []);

//   const loadProjects = async () => {
//     try {
//       const response = await api.get("/projects");
//       const data = response.data?.data || response.data || [];
//       if (Array.isArray(data) && data.length > 0) {
//         setProjects(data);
//       }
//     } catch (error) {
//       console.log("Using default projects");
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

//   const categories = [
//     "ALL",
//     ...new Set(
//       projects
//         .map((project) => project.category || project.type)
//         .filter(Boolean)
//         .map((item) => String(item).toUpperCase())
//     ),
//   ];

//   const filteredProjects =
//     activeFilter === "ALL"
//       ? projects
//       : projects.filter((project) => {
//           const category = project.category || project.type || "";
//           return String(category).toUpperCase() === activeFilter;
//         });

//   return (
//     <main className="fya-projects-page">
      
//       {/* ==================================================
//           HERO — Premium Image Background
//       ================================================== */}
//       <section className="fya-projects-hero">
//         <div className="fya-hero-background">
//           <img 
//             src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80" 
//             alt="Premium Architecture" 
//           />
//           <div className="fya-hero-overlay" />
//         </div>
        
//         <div className="fya-container fya-projects-hero-container">
//           <div className="fya-hero-top-bar">
//             <div className="fya-logo">
//               <span className="fya-logo-white">FIYA</span>
//               <span className="fya-logo-gold">BUILDERS</span>
//             </div>
//             <div className="fya-hero-tagline">
//               <span className="fya-gold-line" />
//               OUR PORTFOLIO
//             </div>
//           </div>
          
//           <div className="fya-projects-hero-content">
//             <h1 className="fya-projects-hero-title">
//               Featured
//               <br />
//               <span className="fya-text-blue">Projects</span>
//               <br />
//               <span className="fya-text-gold">& Achievements</span>
//             </h1>
//             <p className="fya-projects-hero-subtitle">
//               A collection of spaces shaped through thoughtful design,
//               disciplined construction and attention to detail.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ==================================================
//           INTRO — Statistics
//       ================================================== */}
//       <section className="fya-projects-intro">
//         <div className="fya-container">
//           <div className="fya-intro-grid">
//             <div className="fya-intro-left">
//               <div className="fya-section-label">
//                 <span className="fya-label-number">01</span>
//                 <span className="fya-label-line" />
//                 <span className="fya-label-text">OUR WORK</span>
//               </div>
//               <h2 className="fya-intro-heading">
//                 Building
//                 <br />
//                 <span className="fya-text-blue">Excellence</span>
//                 <br />
//                 Every Day
//               </h2>
//             </div>
//             <div className="fya-intro-right">
//               <p className="fya-intro-text">
//                 From residential homes to commercial spaces, our portfolio
//                 reflects the diversity of projects we undertake and the
//                 consistency of our approach.
//               </p>
//               <div className="fya-stats-grid">
//                 <div className="fya-stat-box">
//                   <span className="fya-stat-value">250+</span>
//                   <span className="fya-stat-label">Projects Completed</span>
//                 </div>
//                 <div className="fya-stat-box">
//                   <span className="fya-stat-value">50+</span>
//                   <span className="fya-stat-label">Ongoing Projects</span>
//                 </div>
//                 <div className="fya-stat-box">
//                   <span className="fya-stat-value">15+</span>
//                   <span className="fya-stat-label">Years Experience</span>
//                 </div>
//                 <div className="fya-stat-box">
//                   <span className="fya-stat-value">20+</span>
//                   <span className="fya-stat-label">Cities Served</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==================================================
//           PROJECTS GRID — Masonry Layout
//       ================================================== */}
//       <section className="fya-projects-section">
//         <div className="fya-container">
//           <div className="fya-projects-toolbar">
//             <div className="fya-section-label">
//               <span className="fya-label-number">02</span>
//               <span className="fya-label-line" />
//               <span className="fya-label-text">SELECTED WORK</span>
//             </div>
            
//             <div className="fya-project-filters">
//               {categories.map((category) => (
//                 <button
//                   key={category}
//                   type="button"
//                   className={`fya-filter-btn ${activeFilter === category ? "active" : ""}`}
//                   onClick={() => setActiveFilter(category)}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {loading ? (
//             <div className="fya-projects-loading">
//               <div className="fya-loading-spinner" />
//               <span>Loading projects...</span>
//             </div>
//           ) : filteredProjects.length === 0 ? (
//             <div className="fya-projects-empty">
//               <span>NO PROJECTS FOUND</span>
//               <p>Projects will appear here once they are added from the admin panel.</p>
//             </div>
//           ) : (
//             <div className="fya-projects-grid">
//               {filteredProjects.map((project, index) => {
//                 const image = project.image || project.coverImage || project.thumbnail;
                
//                 return (
//                   <article 
//                     className={`fya-project-card ${index % 3 === 0 ? "fya-project-wide" : ""}`}
//                     key={project.id || index}
//                   >
//                     <a
//                       href={`/projects/${project.slug || project.id}`}
//                       className="fya-project-image"
//                     >
//                       {image ? (
//                         <img
//                           src={getImageUrl(image)}
//                           alt={project.title || "FIYA Builders project"}
//                         />
//                       ) : (
//                         <div className="fya-project-placeholder">
//                           FIYA
//                         </div>
//                       )}
                      
//                       <div className="fya-project-overlay">
//                         <span className="fya-project-year">
//                           {project.year || "2024"}
//                         </span>
//                         <span className="fya-project-view">
//                           VIEW PROJECT
//                           <ArrowUpRight size={18} />
//                         </span>
//                       </div>
//                     </a>
                    
//                     <div className="fya-project-info">
//                       <div className="fya-project-info-left">
//                         <span className="fya-project-category">
//                           {project.category || project.type || "PROJECT"}
//                         </span>
//                         <h3 className="fya-project-title">
//                           {project.title || project.name}
//                         </h3>
//                       </div>
                      
//                       <div className="fya-project-location">
//                         <MapPin size={14} />
//                         <span>{project.location || "Pondicherry"}</span>
//                       </div>
//                     </div>
//                   </article>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* ==================================================
//           PROJECT PHILOSOPHY — Premium Section
//       ================================================== */}
//       <section className="fya-projects-philosophy">
//         <div className="fya-container">
//           <div className="fya-philosophy-wrapper">
//             <div className="fya-philosophy-image">
//               <img 
//                 src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
//                 alt="Our Philosophy"
//               />
//               <div className="fya-philosophy-overlay" />
//               <div className="fya-philosophy-quote">
//                 <span className="fya-quote-mark">"</span>
//                 <p>Quality is never an accident. It is always the result of intelligent effort.</p>
//                 <span className="fya-quote-author">— John Ruskin</span>
//               </div>
//             </div>
            
//             <div className="fya-philosophy-content">
//               <div className="fya-section-label">
//                 <span className="fya-label-number">03</span>
//                 <span className="fya-label-line" />
//                 <span className="fya-label-text">OUR APPROACH</span>
//               </div>
//               <h2 className="fya-philosophy-heading">
//                 We Don't Just Build
//                 <br />
//                 <span className="fya-text-blue">Structures,</span>
//                 <br />
//                 We Build <span className="fya-text-gold">Legacies</span>
//               </h2>
//               <p className="fya-philosophy-text">
//                 We look at how a project performs, how it feels to use,
//                 and how well it stands the test of time. Our commitment
//                 to excellence goes beyond aesthetics.
//               </p>
              
//               <div className="fya-philosophy-points">
//                 <div className="fya-point">
//                   <span className="fya-point-number">01</span>
//                   <div>
//                     <h4>Design Excellence</h4>
//                     <p>Thoughtful architecture that balances form and function</p>
//                   </div>
//                 </div>
//                 <div className="fya-point">
//                   <span className="fya-point-number">02</span>
//                   <div>
//                     <h4>Quality Construction</h4>
//                     <p>Precision engineering with premium materials</p>
//                   </div>
//                 </div>
//                 <div className="fya-point">
//                   <span className="fya-point-number">03</span>
//                   <div>
//                     <h4>Sustainable Future</h4>
//                     <p>Environmentally conscious building practices</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==================================================
//           CTA — Premium Gold
//       ================================================== */}
//       <section className="fya-projects-cta">
//         <div className="fya-container">
//           <div className="fya-cta-wrapper">
//             <div className="fya-cta-pattern" />
//             <div className="fya-cta-content">
//               <span className="fya-cta-label">YOUR PROJECT COULD BE NEXT</span>
//               <h2 className="fya-cta-heading">
//                 Let's Create Something
//                 <br />
//                 <span className="fya-text-gold">Worth Building</span>
//               </h2>
//               <p className="fya-cta-text">
//                 Partner with us and experience the difference of working
//                 with a team that truly cares about your vision.
//               </p>
//               <a href="/contact" className="fya-btn-gold">
//                 START YOUR PROJECT
//                 <ArrowUpRight size={18} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//     </main>
//   );
// };

// export default ProjectsPage;






// src/pages/Projects/ProjectsPage.jsx
import { useEffect, useState } from "react";
import api from "../services/api.js";
import "./ProjectsPage.css";
import ProjectsHeroSection from "./Projects/ProjectsHeroSection.jsx";
import ProjectsIntroSection from "./Projects/ProjectsIntroSection.jsx";
import ProjectsGridSection from "./Projects/ProjectsGridSection.jsx";
import ProjectsCTASection from "./Projects/ProjectsCTASection.jsx";

// Import all sections


const API_URL = import.meta.env.VITE_API_URL?.replace("/api", "") || "http://localhost:5041";

const defaultProjects = [
  {
    id: 1,
    title: "Modern Office Complex",
    slug: "modern-office-complex",
    category: "COMMERCIAL",
    location: "Chennai, India",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    year: "2024",
    description: "Premium commercial space with modern architecture",
  },
  {
    id: 2,
    title: "Luxury Villa Residences",
    slug: "luxury-villa-residences",
    category: "RESIDENTIAL",
    location: "Pondicherry, India",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    year: "2024",
    description: "High-end residential project with premium finishes",
  },
  {
    id: 3,
    title: "Industrial Warehouse",
    slug: "industrial-warehouse",
    category: "INDUSTRIAL",
    location: "Bangalore, India",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    year: "2023",
    description: "Large-scale industrial facility with modern amenities",
  },
  {
    id: 4,
    title: "Boutique Hotel",
    slug: "boutique-hotel",
    category: "HOSPITALITY",
    location: "Mahabalipuram, India",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    year: "2023",
    description: "Luxury hospitality project with unique design elements",
  },
  {
    id: 5,
    title: "Shopping Complex",
    slug: "shopping-complex",
    category: "COMMERCIAL",
    location: "Coimbatore, India",
    image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800&q=80",
    year: "2023",
    description: "Modern retail space with contemporary architecture",
  },
  {
    id: 6,
    title: "Apartment Complex",
    slug: "apartment-complex",
    category: "RESIDENTIAL",
    location: "Chennai, India",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    year: "2022",
    description: "Multi-story residential complex with premium amenities",
  },
  {
    id: 7,
    title: "Corporate Headquarters",
    slug: "corporate-headquarters",
    category: "COMMERCIAL",
    location: "Bangalore, India",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    year: "2022",
    description: "State-of-the-art corporate office building",
  },
  {
    id: 8,
    title: "Beach House",
    slug: "beach-house",
    category: "RESIDENTIAL",
    location: "Pondicherry, India",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    year: "2022",
    description: "Custom-designed beachfront residence",
  },
  {
    id: 9,
    title: "Educational Institute",
    slug: "educational-institute",
    category: "INSTITUTIONAL",
    location: "Vellore, India",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    year: "2021",
    description: "Modern educational facility with sustainable design",
  },
];

const ProjectsPage = () => {
  const [projects, setProjects] = useState(defaultProjects);
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const response = await api.get("/projects");
      const data = response.data?.data || response.data || [];
      if (Array.isArray(data) && data.length > 0) {
        setProjects(data);
      }
    } catch (error) {
      console.log("Using default projects");
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

  const categories = [
    "ALL",
    ...new Set(
      projects
        .map((project) => project.category || project.type)
        .filter(Boolean)
        .map((item) => String(item).toUpperCase())
    ),
  ];

  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((project) => {
          const category = project.category || project.type || "";
          return String(category).toUpperCase() === activeFilter;
        });

  return (
    <main className="fya-projects-page">
      <ProjectsHeroSection />
      <ProjectsIntroSection />
      <ProjectsGridSection
        projects={filteredProjects}
        loading={loading}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        categories={categories}
        getImageUrl={getImageUrl}
      />
 
      <ProjectsCTASection />
    </main>
  );
};

export default ProjectsPage;