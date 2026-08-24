// // // src/pages/Projects/sections/ProjectsGridSection.jsx
// // import { MapPin, ArrowUpRight } from "lucide-react";

// // const ProjectsGridSection = ({
// //   projects,
// //   loading,
// //   activeFilter,
// //   setActiveFilter,
// //   categories,
// //   getImageUrl,
// // }) => {
// //   return (
// //     <section className="fya-projects-section">
// //       <div className="fya-container">
// //         {/* Toolbar */}
// //         <div className="fya-projects-toolbar">
// //           <div className="fya-section-label">
// //             <span className="fya-label-number">02</span>
// //             <span className="fya-label-line" />
// //             <span className="fya-label-text">SELECTED WORK</span>
// //           </div>
          
// //           <div className="fya-project-filters">
// //             {categories.map((category) => (
// //               <button
// //                 key={category}
// //                 type="button"
// //                 className={`fya-filter-btn ${activeFilter === category ? "active" : ""}`}
// //                 onClick={() => setActiveFilter(category)}
// //               >
// //                 {category}
// //               </button>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Loading State */}
// //         {loading ? (
// //           <div className="fya-projects-loading">
// //             <div className="fya-loading-spinner" />
// //             <span>Loading projects...</span>
// //           </div>
// //         ) : projects.length === 0 ? (
// //           <div className="fya-projects-empty">
// //             <span>NO PROJECTS FOUND</span>
// //             <p>Projects will appear here once they are added from the admin panel.</p>
// //           </div>
// //         ) : (
// //           /* Projects Grid */
// //           <div className="fya-projects-grid">
// //             {projects.map((project, index) => {
// //               const image = project.image || project.coverImage || project.thumbnail;
              
// //               return (
// //                 <article 
// //                   className={`fya-project-card ${index % 3 === 0 ? "fya-project-wide" : ""}`}
// //                   key={project.id || index}
// //                 >
// //                   <a
// //                     href={`/projects/${project.slug || project.id}`}
// //                     className="fya-project-image"
// //                   >
// //                     {image ? (
// //                       <img
// //                         src={getImageUrl(image)}
// //                         alt={project.title || "FIYA Builders project"}
// //                       />
// //                     ) : (
// //                       <div className="fya-project-placeholder">
// //                         FIYA
// //                       </div>
// //                     )}
                    
// //                     <div className="fya-project-overlay">
// //                       <span className="fya-project-year">
// //                         {project.year || "2024"}
// //                       </span>
// //                       <span className="fya-project-view">
// //                         VIEW PROJECT
// //                         <ArrowUpRight size={18} />
// //                       </span>
// //                     </div>
// //                   </a>
                  
// //                   <div className="fya-project-info">
// //                     <div className="fya-project-info-left">
// //                       <span className="fya-project-category">
// //                         {project.category || project.type || "PROJECT"}
// //                       </span>
// //                       <h3 className="fya-project-title">
// //                         {project.title || project.name}
// //                       </h3>
// //                     </div>
                    
// //                     <div className="fya-project-location">
// //                       <MapPin size={14} />
// //                       <span>{project.location || "Pondicherry"}</span>
// //                     </div>
// //                   </div>
// //                 </article>
// //               );
// //             })}
// //           </div>
// //         )}
// //       </div>
// //     </section>
// //   );
// // };

// // export default ProjectsGridSection;

// // src/pages/Projects/sections/ProjectsGridSection.jsx
// import { useRef, useEffect } from "react";
// import { MapPin, ArrowUpRight } from "lucide-react";
// import "./ProjectsGridSection.css";

// const ProjectsGridSection = ({
//   projects,
//   loading,
//   activeFilter,
//   setActiveFilter,
//   categories,
//   getImageUrl,
// }) => {
//   const gridRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("fya-prj-grid__animate--visible");
//           }
//         });
//       },
//       { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
//     );

//     document.querySelectorAll(".fya-prj-grid__animate").forEach((el) => {
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="fya-prj-grid" id="projects" ref={gridRef}>
//       <div className="fya-prj-grid__container">
//         {/* Toolbar */}
//         <div className="fya-prj-grid__toolbar">
//           <div className="fya-prj-grid__label fya-prj-grid__animate">
//             <span className="fya-prj-grid__label-number">02</span>
//             <span className="fya-prj-grid__label-line" />
//             <span className="fya-prj-grid__label-text">SELECTED WORK</span>
//           </div>
          
//           <div className="fya-prj-grid__filters fya-prj-grid__animate fya-prj-grid__animate--delay-1">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 type="button"
//                 className={`fya-prj-grid__filter-btn ${
//                   activeFilter === category ? "fya-prj-grid__filter-btn--active" : ""
//                 }`}
//                 onClick={() => setActiveFilter(category)}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Loading State */}
//         {loading ? (
//           <div className="fya-prj-grid__loading">
//             <div className="fya-prj-grid__spinner" />
//             <span>Loading projects...</span>
//           </div>
//         ) : projects.length === 0 ? (
//           <div className="fya-prj-grid__empty">
//             <span className="fya-prj-grid__empty-label">NO PROJECTS FOUND</span>
//             <p className="fya-prj-grid__empty-text">
//               Projects will appear here once they are added from the admin panel.
//             </p>
//           </div>
//         ) : (
//           /* Projects Grid */
//           <div className="fya-prj-grid__grid">
//             {projects.map((project, index) => {
//               const image = project.image || project.coverImage || project.thumbnail;
//               const isWide = index % 3 === 0;
              
//               return (
//                 <article 
//                   className={`fya-prj-grid__card ${
//                     isWide ? "fya-prj-grid__card--wide" : ""
//                   } fya-prj-grid__animate fya-prj-grid__animate--delay-${(index + 1) * 0.1}`}
//                   key={project.id || index}
//                 >
//                   <a
//                     href={`/projects/${project.slug || project.id}`}
//                     className="fya-prj-grid__card-link"
//                   >
//                     <div className="fya-prj-grid__card-image">
//                       {image ? (
//                         <img
//                           src={getImageUrl(image)}
//                           alt={project.title || "FIYA Builders project"}
//                           className="fya-prj-grid__card-img"
//                           onError={(e) => {
//                             e.target.src = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80";
//                           }}
//                         />
//                       ) : (
//                         <div className="fya-prj-grid__card-placeholder">
//                           <span>FIYA</span>
//                         </div>
//                       )}
                      
//                       <div className="fya-prj-grid__card-overlay">
//                         <span className="fya-prj-grid__card-year">
//                           {project.year || "2024"}
//                         </span>
//                         <span className="fya-prj-grid__card-view">
//                           VIEW PROJECT
//                           <ArrowUpRight size={18} className="fya-prj-grid__card-view-icon" />
//                         </span>
//                       </div>
//                     </div>
                    
//                     <div className="fya-prj-grid__card-info">
//                       <div className="fya-prj-grid__card-info-left">
//                         <span className="fya-prj-grid__card-category">
//                           {project.category || project.type || "PROJECT"}
//                         </span>
//                         <h3 className="fya-prj-grid__card-title">
//                           {project.title || project.name}
//                         </h3>
//                       </div>
                      
//                       <div className="fya-prj-grid__card-location">
//                         <MapPin size={14} className="fya-prj-grid__card-location-icon" />
//                         <span>{project.location || "Pondicherry"}</span>
//                       </div>
//                     </div>
//                   </a>
//                 </article>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default ProjectsGridSection;



// src/pages/Projects/sections/ProjectsGridSection.jsx
import { useRef, useEffect } from "react";
import { MapPin, ArrowUpRight } from "lucide-react";
import "./ProjectsGridSection.css";

const ProjectsGridSection = ({
  projects,
  loading,
  activeFilter,
  setActiveFilter,
  categories,
  getImageUrl,
}) => {
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fya-prj-grid__animate--visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".fya-prj-grid__animate").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Helper to get the correct image URL
  const getProjectImage = (project) => {
    // Check for different possible image field names
    const image = project.image || project.featuredImage || project.coverImage || project.thumbnail;
    
    if (!image) {
      console.log(`No image for project: ${project.title}`);
      return "";
    }
    
    // If it's already a full URL, return as is
    if (image.startsWith("http://") || image.startsWith("https://")) {
      return image;
    }
    
    // Use the getImageUrl function passed from parent
    return getImageUrl(image);
  };

  return (
    <section className="fya-prj-grid" id="projects" ref={gridRef}>
      <div className="fya-prj-grid__container">
        {/* Toolbar */}
        <div className="fya-prj-grid__toolbar">
          <div className="fya-prj-grid__label fya-prj-grid__animate">
            <span className="fya-prj-grid__label-number">02</span>
            <span className="fya-prj-grid__label-line" />
            <span className="fya-prj-grid__label-text">SELECTED WORK</span>
          </div>
          
          <div className="fya-prj-grid__filters fya-prj-grid__animate fya-prj-grid__animate--delay-1">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`fya-prj-grid__filter-btn ${
                  activeFilter === category ? "fya-prj-grid__filter-btn--active" : ""
                }`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="fya-prj-grid__loading">
            <div className="fya-prj-grid__spinner" />
            <span>Loading projects...</span>
          </div>
        ) : projects.length === 0 ? (
          <div className="fya-prj-grid__empty">
            <span className="fya-prj-grid__empty-label">NO PROJECTS FOUND</span>
            <p className="fya-prj-grid__empty-text">
              Projects will appear here once they are added from the admin panel.
            </p>
          </div>
        ) : (
          /* Projects Grid */
          <div className="fya-prj-grid__grid">
            {projects.map((project, index) => {
              const image = getProjectImage(project);
              const isWide = index % 3 === 0;
              
              console.log(`Project ${index + 1}: ${project.title}`, {
                imageField: project.image,
                featuredImage: project.featuredImage,
                finalImage: image
              });
              
              return (
                <article 
                  className={`fya-prj-grid__card ${
                    isWide ? "fya-prj-grid__card--wide" : ""
                  } fya-prj-grid__animate fya-prj-grid__animate--delay-${(index + 1) * 0.1}`}
                  key={project.id || index}
                >
                  <a
                    href={`/projects/${project.slug || project.id}`}
                    className="fya-prj-grid__card-link"
                  >
                    <div className="fya-prj-grid__card-image">
                      {image ? (
                        <img
                          src={image}
                          alt={project.title || "FIYA Builders project"}
                          className="fya-prj-grid__card-img"
                          onError={(e) => {
                            console.error(`Image failed to load: ${image}`);
                            e.target.src = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80";
                          }}
                          onLoad={() => console.log(`Image loaded: ${image}`)}
                        />
                      ) : (
                        <div className="fya-prj-grid__card-placeholder">
                          <span>FIYA</span>
                        </div>
                      )}
                      
                      <div className="fya-prj-grid__card-overlay">
                        <span className="fya-prj-grid__card-year">
                          {project.year || "2024"}
                        </span>
                        <span className="fya-prj-grid__card-view">
                          VIEW PROJECT
                          <ArrowUpRight size={18} className="fya-prj-grid__card-view-icon" />
                        </span>
                      </div>
                    </div>
                    
                    <div className="fya-prj-grid__card-info">
                      <div className="fya-prj-grid__card-info-left">
                        <span className="fya-prj-grid__card-category">
                          {project.category || project.type || "PROJECT"}
                        </span>
                        <h3 className="fya-prj-grid__card-title">
                          {project.title || project.name}
                        </h3>
                      </div>
                      
                      <div className="fya-prj-grid__card-location">
                        <MapPin size={14} className="fya-prj-grid__card-location-icon" />
                        <span>{project.location || "Pondicherry"}</span>
                      </div>
                    </div>
                  </a>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGridSection;