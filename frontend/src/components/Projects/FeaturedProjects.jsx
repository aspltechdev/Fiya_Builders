// // // import { useEffect, useState } from "react";
// // // import { ArrowUpRight } from "lucide-react";

// // // import api from "../../services/api.js";

// // // import "./FeaturedProjects.css";

// // // const FeaturedProjects = () => {
// // //   const [projects, setProjects] = useState([]);
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     loadProjects();
// // //   }, []);

// // //   const loadProjects = async () => {
// // //     try {
// // //       const response = await api.get(
// // //         "/projects"
// // //       );

// // //       const data =
// // //         response.data?.data ||
// // //         response.data ||
// // //         [];

// // //       /*
// // //        * Show only featured projects on Home.
// // //        * If your backend doesn't have isFeatured yet,
// // //        * this will simply use the latest projects.
// // //        */

// // //       const featured = data.filter(
// // //         (project) =>
// // //           project.isFeatured === true
// // //       );

// // //       setProjects(
// // //         featured.length > 0
// // //           ? featured.slice(0, 4)
// // //           : data.slice(0, 4)
// // //       );
// // //     } catch (error) {
// // //       console.error(
// // //         "Projects Load Error:",
// // //         error
// // //       );
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const getImageUrl = (image) => {
// // //     if (!image) return "";

// // //     if (
// // //       image.startsWith("http://") ||
// // //       image.startsWith("https://")
// // //     ) {
// // //       return image;
// // //     }

// // //     const API_URL =
// // //       import.meta.env.VITE_API_URL?.replace(
// // //         "/api",
// // //         ""
// // //       ) ||
// // //       "http://localhost:5041";

// // //     return `${API_URL}${image}`;
// // //   };

// // //   const defaultProjects = [
// // //     {
// // //       id: 1,
// // //       title: "Modern Residence",
// // //       category: "Residential",
// // //       location: "Pondicherry",
// // //       year: "2026",
// // //       image: null,
// // //     },
// // //     {
// // //       id: 2,
// // //       title: "Contemporary Villa",
// // //       category: "Residential",
// // //       location: "Pondicherry",
// // //       year: "2025",
// // //       image: null,
// // //     },
// // //     {
// // //       id: 3,
// // //       title: "Commercial Space",
// // //       category: "Commercial",
// // //       location: "Pondicherry",
// // //       year: "2025",
// // //       image: null,
// // //     },
// // //   ];

// // //   const displayProjects =
// // //     projects.length > 0
// // //       ? projects
// // //       : defaultProjects;

// // //   return (
// // //     <section
// // //       className="fiya-projects"
// // //       id="projects"
// // //     >

// // //       <div className="public-container">

// // //         {/* =========================================
// // //             SECTION HEADER
// // //         ========================================= */}

// // //         <div className="fiya-projects-header">

// // //           <div className="fiya-projects-label">

// // //             <span className="fiya-projects-number">
// // //               03
// // //             </span>

// // //             <span>
// // //               SELECTED PROJECTS
// // //             </span>

// // //             <span className="fiya-projects-line" />

// // //           </div>


// // //           <div className="fiya-projects-intro">

// // //             <h2>
// // //               Spaces we've
// // //               <br />
// // //               <span>created.</span>
// // //             </h2>

// // //             <p>
// // //               A selection of projects that
// // //               reflect our approach to quality,
// // //               detail and purposeful design.
// // //             </p>

// // //           </div>

// // //         </div>


// // //         {/* =========================================
// // //             PROJECTS
// // //         ========================================= */}

// // //         {loading ? (
// // //           <div className="fiya-projects-loading">
// // //             Loading projects...
// // //           </div>
// // //         ) : (
// // //           <div className="fiya-projects-grid">

// // //             {displayProjects.map(
// // //               (project, index) => (
// // //                 <a
// // //                   href={`/projects/${project.id}`}
// // //                   className={`fiya-project-card project-${index + 1}`}
// // //                   key={project.id}
// // //                 >

// // //                   {/* IMAGE */}

// // //                   <div className="fiya-project-image">

// // //                     {project.image ? (
// // //                       <img
// // //                         src={getImageUrl(
// // //                           project.image
// // //                         )}
// // //                         alt={
// // //                           project.title
// // //                         }
// // //                       />
// // //                     ) : (
// // //                       <div className="fiya-project-placeholder">
// // //                         <span>
// // //                           FIYA
// // //                         </span>
// // //                       </div>
// // //                     )}

// // //                     <div className="fiya-project-overlay" />

// // //                     <div className="fiya-project-view">
// // //                       <ArrowUpRight
// // //                         size={22}
// // //                         strokeWidth={1.5}
// // //                       />
// // //                     </div>

// // //                   </div>


// // //                   {/* INFORMATION */}

// // //                   <div className="fiya-project-info">

// // //                     <div>

// // //                       <h3>
// // //                         {
// // //                           project.title
// // //                         }
// // //                       </h3>

// // //                       <span>
// // //                         {
// // //                           project.category ||
// // //                           "Construction"
// // //                         }
// // //                       </span>

// // //                     </div>

// // //                     <div className="fiya-project-meta">

// // //                       <span>
// // //                         {
// // //                           project.location ||
// // //                           "Pondicherry"
// // //                         }
// // //                       </span>

// // //                       <span>
// // //                         {
// // //                           project.year ||
// // //                           "2026"
// // //                         }
// // //                       </span>

// // //                     </div>

// // //                   </div>

// // //                 </a>
// // //               )
// // //             )}

// // //           </div>
// // //         )}


// // //         {/* =========================================
// // //             FOOTER
// // //         ========================================= */}

// // //         <div className="fiya-projects-footer">

// // //           <div className="fiya-projects-footer-line" />

// // //           <p>
// // //             Every project is a reflection
// // //             of our commitment to building
// // //             better.
// // //           </p>

// // //           <a
// // //             href="/projects"
// // //             className="fiya-projects-link"
// // //           >
// // //             <span>
// // //               Explore all projects
// // //             </span>

// // //             <span className="fiya-projects-link-icon">
// // //               <ArrowUpRight
// // //                 size={18}
// // //                 strokeWidth={1.6}
// // //               />
// // //             </span>
// // //           </a>

// // //         </div>

// // //       </div>

// // //     </section>
// // //   );
// // // };

// // // export default FeaturedProjects;


// // import { useEffect, useState } from "react";
// // import { FaArrowRight, FaMapMarkerAlt, FaCalendarAlt, FaBuilding, FaHome, FaWarehouse } from "react-icons/fa";

// // import api from "../../services/api.js";

// // import "./FeaturedProjects.css";

// // const FeaturedProjects = () => {
// //   const [projects, setProjects] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     loadProjects();
// //   }, []);

// //   const loadProjects = async () => {
// //     try {
// //       const response = await api.get("/projects");
// //       const data = response.data?.data || response.data || [];
      
// //       const featured = data.filter(
// //         (project) => project.isFeatured === true
// //       );

// //       setProjects(
// //         featured.length > 0
// //           ? featured.slice(0, 4)
// //           : data.slice(0, 4)
// //       );
// //     } catch (error) {
// //       console.error("Projects Load Error:", error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const getImageUrl = (image) => {
// //     if (!image) return "";
// //     if (image.startsWith("http://") || image.startsWith("https://")) {
// //       return image;
// //     }
// //     const API_URL =
// //       import.meta.env.VITE_API_URL?.replace("/api", "") ||
// //       "http://localhost:5041";
// //     return `${API_URL}${image}`;
// //   };

// //   const defaultProjects = [
// //     {
// //       id: 1,
// //       title: "Modern Luxury Residence",
// //       category: "Residential",
// //       location: "Pondicherry, India",
// //       year: "2026",
// //       image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
// //       icon: FaHome,
// //     },
// //     {
// //       id: 2,
// //       title: "Contemporary Villa Complex",
// //       category: "Residential",
// //       location: "Chennai, India",
// //       year: "2025",
// //       image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
// //       icon: FaHome,
// //     },
// //     {
// //       id: 3,
// //       title: "Corporate Office Building",
// //       category: "Commercial",
// //       location: "Bangalore, India",
// //       year: "2025",
// //       image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
// //       icon: FaBuilding,
// //     },
// //     {
// //       id: 4,
// //       title: "Industrial Warehouse",
// //       category: "Industrial",
// //       location: "Coimbatore, India",
// //       year: "2024",
// //       image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
// //       icon: FaWarehouse,
// //     },
// //   ];

// //   const displayProjects = projects.length > 0 ? projects : defaultProjects;

// //   return (
// //     <section className="fya-projects" id="projects">
// //       <div className="fya-container">
        
// //         {/* =========================================
// //             SECTION HEADER
// //         ========================================= */}
// //         <div className="fya-projects-header">
// //           <div className="fya-section-label">
// //             <span className="fya-section-number">03</span>
// //             <span className="fya-section-label-text">SELECTED PROJECTS</span>
// //             <span className="fya-section-line" />
// //           </div>

// //           <div className="fya-projects-intro">
// //             <h2 className="fya-projects-title">
// //               Spaces We've <span className="fya-text-gold">Created</span>
// //             </h2>
// //             <p className="fya-projects-subtitle">
// //               A selection of projects that reflect our approach to quality,
// //               detail and purposeful design.
// //             </p>
// //           </div>
// //         </div>

// //         {/* =========================================
// //             PROJECTS GRID
// //         ========================================= */}
// //         {loading ? (
// //           <div className="fya-projects-loading">
// //             <div className="fya-loading-spinner" />
// //             <span>Loading projects...</span>
// //           </div>
// //         ) : (
// //           <div className="fya-projects-grid">
// //             {displayProjects.map((project, index) => {
// //               const ProjectIcon = project.icon || FaBuilding;
              
// //               return (
// //                 <a
// //                   href={`/projects/${project.id}`}
// //                   className={`fya-project-card ${index === 0 ? 'fya-project-card--large' : ''}`}
// //                   key={project.id}
// //                 >
// //                   {/* Image */}
// //                   <div className="fya-project-image">
// //                     {project.image ? (
// //                       <img
// //                         src={getImageUrl(project.image)}
// //                         alt={project.title}
// //                       />
// //                     ) : (
// //                       <div className="fya-project-placeholder">
// //                         <ProjectIcon />
// //                       </div>
// //                     )}
// //                     <div className="fya-project-overlay" />
                    
// //                     {/* Category Badge */}
// //                     <span className="fya-project-category">
// //                       {project.category || "Construction"}
// //                     </span>
                    
// //                     {/* View Icon */}
// //                     <div className="fya-project-view">
// //                       <FaArrowRight />
// //                     </div>
// //                   </div>

// //                   {/* Information */}
// //                   <div className="fya-project-info">
// //                     <div className="fya-project-info-top">
// //                       <h3 className="fya-project-title">
// //                         {project.title}
// //                       </h3>
// //                     </div>

// //                     <div className="fya-project-meta">
// //                       <span className="fya-project-location">
// //                         <FaMapMarkerAlt className="fya-meta-icon" />
// //                         {project.location || "Pondicherry"}
// //                       </span>
// //                       <span className="fya-project-year">
// //                         <FaCalendarAlt className="fya-meta-icon" />
// //                         {project.year || "2026"}
// //                       </span>
// //                     </div>
// //                   </div>
// //                 </a>
// //               );
// //             })}
// //           </div>
// //         )}

// //         {/* =========================================
// //             FOOTER
// //         ========================================= */}
// //         <div className="fya-projects-footer">
// //           <div className="fya-footer-content">
// //             <p className="fya-footer-text">
// //               Every project is a reflection of our commitment to building better.
// //             </p>

// //             <a href="/projects" className="fya-projects-link">
// //               <span>Explore All Projects</span>
// //               <span className="fya-projects-link-icon">
// //                 <FaArrowRight />
// //               </span>
// //             </a>
// //           </div>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // };

// // export default FeaturedProjects;


// // src/components/sections/FeaturedProjects/FeaturedProjects.jsx
// import { useEffect, useState } from "react";
// import { 
//   FaArrowRight, 
//   FaMapMarkerAlt, 
//   FaCalendarAlt, 
//   FaBuilding, 
//   FaHome, 
//   FaWarehouse,
//   FaLayerGroup,
//   FaEye,
// } from "react-icons/fa";

// import api from "../../services/api.js";
// import "./FeaturedProjects.css";

// const FeaturedProjects = () => {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadProjects();
//   }, []);

//   const loadProjects = async () => {
//     try {
//       const response = await api.get("/projects");
//       const data = response.data?.data || response.data || [];
      
//       const featured = data.filter(
//         (project) => project.isFeatured === true
//       );

//       setProjects(
//         featured.length > 0
//           ? featured.slice(0, 4)
//           : data.slice(0, 4)
//       );
//     } catch (error) {
//       console.error("Projects Load Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getImageUrl = (image) => {
//     if (!image) return "";
//     if (image.startsWith("http://") || image.startsWith("https://")) {
//       return image;
//     }
//     const API_URL =
//       import.meta.env.VITE_API_URL?.replace("/api", "") ||
//       "http://localhost:5041";
//     return `${API_URL}${image}`;
//   };

//   const defaultProjects = [
//     {
//       id: 1,
//       title: "Modern Luxury Residence",
//       category: "Residential",
//       location: "Pondicherry, India",
//       year: "2026",
//       image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
//       icon: FaHome,
//     },
//     {
//       id: 2,
//       title: "Contemporary Villa Complex",
//       category: "Residential",
//       location: "Chennai, India",
//       year: "2025",
//       image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
//       icon: FaHome,
//     },
//     {
//       id: 3,
//       title: "Corporate Office Building",
//       category: "Commercial",
//       location: "Bangalore, India",
//       year: "2025",
//       image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
//       icon: FaBuilding,
//     },
//     {
//       id: 4,
//       title: "Industrial Warehouse Complex",
//       category: "Industrial",
//       location: "Coimbatore, India",
//       year: "2024",
//       image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
//       icon: FaWarehouse,
//     },
//   ];

//   const displayProjects = projects.length > 0 ? projects : defaultProjects;

//   return (
//     <section className="fya-projects" id="projects">
//       <div className="fya-container">
        
//         {/* =========================================
//             SECTION HEADER
//         ========================================= */}
//         <div className="fya-projects__header">
//           <div className="fya-projects__label">
//             <span className="fya-projects__number">03</span>
//             <span className="fya-projects__label-text">SELECTED PROJECTS</span>
//             <span className="fya-projects__line" />
//           </div>

//           <div className="fya-projects__intro">
//             <h2 className="fya-projects__title">
//               Spaces We've <span className="fya-projects__highlight">Created</span>
//             </h2>
//             <p className="fya-projects__subtitle">
//               A selection of projects that reflect our approach to quality,
//               detail and purposeful design.
//             </p>
//           </div>
//         </div>

//         {/* =========================================
//             PROJECTS GRID
//         ========================================= */}
//         {loading ? (
//           <div className="fya-projects__loading">
//             <div className="fya-projects__spinner" />
//             <span>Loading projects...</span>
//           </div>
//         ) : (
//           <div className="fya-projects__grid">
//             {displayProjects.map((project, index) => {
//               const ProjectIcon = project.icon || FaBuilding;
//               const isLarge = index === 0;
              
//               return (
//                 <a
//                   href={`/projects/${project.id}`}
//                   className={`fya-projects__card ${isLarge ? 'fya-projects__card--large' : ''}`}
//                   key={project.id}
//                 >
//                   {/* Image */}
//                   <div className="fya-projects__card-image">
//                     {project.image ? (
//                       <img
//                         src={getImageUrl(project.image)}
//                         alt={project.title}
//                         className="fya-projects__card-img"
//                       />
//                     ) : (
//                       <div className="fya-projects__card-placeholder">
//                         <ProjectIcon />
//                       </div>
//                     )}
//                     <div className="fya-projects__card-overlay" />
                    
//                     {/* Category Badge */}
//                     <span className="fya-projects__card-category">
//                       <FaLayerGroup className="fya-projects__card-category-icon" />
//                       {project.category || "Construction"}
//                     </span>
                    
//                     {/* View Overlay */}
//                     <div className="fya-projects__card-hover">
//                       <div className="fya-projects__card-hover-content">
//                         <FaEye className="fya-projects__card-hover-icon" />
//                         <span>View Project</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Information */}
//                   <div className="fya-projects__card-info">
//                     <div className="fya-projects__card-info-top">
//                       <h3 className="fya-projects__card-title">
//                         {project.title}
//                       </h3>
//                     </div>

//                     <div className="fya-projects__card-meta">
//                       <span className="fya-projects__card-location">
//                         <FaMapMarkerAlt className="fya-projects__card-meta-icon" />
//                         {project.location || "Pondicherry"}
//                       </span>
//                       <span className="fya-projects__card-year">
//                         <FaCalendarAlt className="fya-projects__card-meta-icon" />
//                         {project.year || "2026"}
//                       </span>
//                     </div>
//                   </div>
//                 </a>
//               );
//             })}
//           </div>
//         )}

//         {/* =========================================
//             FOOTER
//         ========================================= */}
//         <div className="fya-projects__footer">
//           <div className="fya-projects__footer-content">
//             <p className="fya-projects__footer-text">
//               Every project is a reflection of our commitment to building better.
//             </p>

//             <a href="/projects" className="fya-projects__footer-link">
//               <span>Explore All Projects</span>
//               <span className="fya-projects__footer-arrow">
//                 <FaArrowRight />
//               </span>
//             </a>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default FeaturedProjects;
// src/components/sections/FeaturedProjects/FeaturedProjects.jsx
import { useEffect, useState } from "react";
import { 
  FaArrowRight, 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaBuilding, 
  FaHome, 
  FaWarehouse,
  FaLayerGroup,
  FaEye,
} from "react-icons/fa";

import api from "../../services/api.js";
import "./FeaturedProjects.css";

const API_URL = import.meta.env.VITE_API_URL?.replace("/api", "") || "http://localhost:5041";

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const response = await api.get("/projects");
      const data = response.data?.data || response.data || [];
      
      console.log("✅ Raw projects data:", data);
      
      const featured = data.filter(
        (project) => project.isFeatured === true
      );

      const projectsToShow = featured.length > 0
        ? featured.slice(0, 4)
        : data.slice(0, 4);
      
      console.log("✅ Projects to display:", projectsToShow);
      
      // Log image URLs for debugging
      projectsToShow.forEach(p => {
        console.log(`📸 Project: ${p.title}, Image: ${p.featuredImage || p.image}`);
        console.log(`📸 Full URL: ${getImageUrl(p.featuredImage || p.image)}`);
      });
      
      setProjects(projectsToShow);
    } catch (error) {
      console.error("Projects Load Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const getImageUrl = (image) => {
    if (!image) {
      console.log("⚠️ No image provided");
      return "";
    }
    
    console.log(`🔍 Processing image: ${image}`);
    
    // If it's already a full URL, return as is
    if (image.startsWith("http://") || image.startsWith("https://")) {
      console.log(`✅ Full URL detected: ${image}`);
      return image;
    }
    
    // If it starts with /, just add the API_URL
    if (image.startsWith("/")) {
      const fullUrl = `${API_URL}${image}`;
      console.log(`✅ Built URL: ${fullUrl}`);
      return fullUrl;
    }
    
    // If it doesn't start with /, add a slash
    const fullUrl = `${API_URL}/${image}`;
    console.log(`✅ Built URL with slash: ${fullUrl}`);
    return fullUrl;
  };

  const defaultProjects = [
    {
      id: 1,
      title: "Modern Luxury Residence",
      category: "Residential",
      location: "Pondicherry, India",
      year: "2026",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      icon: FaHome,
    },
    {
      id: 2,
      title: "Contemporary Villa Complex",
      category: "Residential",
      location: "Chennai, India",
      year: "2025",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      icon: FaHome,
    },
    {
      id: 3,
      title: "Corporate Office Building",
      category: "Commercial",
      location: "Bangalore, India",
      year: "2025",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      icon: FaBuilding,
    },
    {
      id: 4,
      title: "Industrial Warehouse Complex",
      category: "Industrial",
      location: "Coimbatore, India",
      year: "2024",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
      icon: FaWarehouse,
    },
  ];

  const displayProjects = projects.length > 0 ? projects : defaultProjects;

  return (
    <section className="fya-projects" id="projects">
      <div className="fya-container">
        
        {/* =========================================
            SECTION HEADER
        ========================================= */}
        <div className="fya-projects__header">
          <div className="fya-projects__label">
            <span className="fya-projects__number">03</span>
            <span className="fya-projects__label-text">SELECTED PROJECTS</span>
            <span className="fya-projects__line" />
          </div>

          <div className="fya-projects__intro">
            <h2 className="fya-projects__title">
              Spaces We've <span className="fya-projects__highlight">Created</span>
            </h2>
            <p className="fya-projects__subtitle">
              A selection of projects that reflect our approach to quality,
              detail and purposeful design.
            </p>
          </div>
        </div>

        {/* =========================================
            PROJECTS GRID
        ========================================= */}
        {loading ? (
          <div className="fya-projects__loading">
            <div className="fya-projects__spinner" />
            <span>Loading projects...</span>
          </div>
        ) : (
          <div className="fya-projects__grid">
            {displayProjects.map((project, index) => {
              const ProjectIcon = project.icon || FaBuilding;
              const isLarge = index === 0;
              
              // Get the image URL - check both featuredImage and image fields
              const imageSrc = project.featuredImage || project.image;
              const imageUrl = getImageUrl(imageSrc);
              
              console.log(`🖼️ Project ${index + 1}: ${project.title}`);
              console.log(`   Image field: ${imageSrc}`);
              console.log(`   Final URL: ${imageUrl}`);
              
              return (
                <a
                  href={`/projects/${project.id}`}
                  className={`fya-projects__card ${isLarge ? 'fya-projects__card--large' : ''}`}
                  key={project.id}
                >
                  {/* Image */}
                  <div className="fya-projects__card-image">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={project.title}
                        className="fya-projects__card-img"
                        onError={(e) => {
                          console.error(`❌ Failed to load image: ${imageUrl}`);
                          e.target.style.display = "none";
                          e.target.nextElementSibling.style.display = "flex";
                        }}
                        onLoad={() => console.log(`✅ Image loaded: ${imageUrl}`)}
                      />
                    ) : (
                      <div className="fya-projects__card-placeholder">
                        <ProjectIcon />
                      </div>
                    )}
                    <div className="fya-projects__card-overlay" />
                    
                    {/* Category Badge */}
                    <span className="fya-projects__card-category">
                      <FaLayerGroup className="fya-projects__card-category-icon" />
                      {project.category || "Construction"}
                    </span>
                    
                    {/* View Overlay */}
                    <div className="fya-projects__card-hover">
                      <div className="fya-projects__card-hover-content">
                        <FaEye className="fya-projects__card-hover-icon" />
                        <span>View Project</span>
                      </div>
                    </div>
                  </div>

                  {/* Information */}
                  <div className="fya-projects__card-info">
                    <div className="fya-projects__card-info-top">
                      <h3 className="fya-projects__card-title">
                        {project.title}
                      </h3>
                    </div>

                    <div className="fya-projects__card-meta">
                      <span className="fya-projects__card-location">
                        <FaMapMarkerAlt className="fya-projects__card-meta-icon" />
                        {project.location || "Pondicherry"}
                      </span>
                      <span className="fya-projects__card-year">
                        <FaCalendarAlt className="fya-projects__card-meta-icon" />
                        {project.year || "2026"}
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        )}

        {/* =========================================
            FOOTER
        ========================================= */}
        <div className="fya-projects__footer">
          <div className="fya-projects__footer-content">
            <p className="fya-projects__footer-text">
              Every project is a reflection of our commitment to building better.
            </p>

            <a href="/projects" className="fya-projects__footer-link">
              <span>Explore All Projects</span>
              <span className="fya-projects__footer-arrow">
                <FaArrowRight />
              </span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;