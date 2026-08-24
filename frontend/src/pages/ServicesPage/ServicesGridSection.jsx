// // // src/pages/Services/sections/ServicesGridSection.jsx
// // import { useRef, useEffect } from "react";
// // import { ArrowUpRight, CheckCircle } from "lucide-react";

// // const ServicesGridSection = ({ services, loading, getImageUrl }) => {
// //   const gridRef = useRef(null);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             entry.target.classList.add("fya-srv-grid__animate--visible");
// //           }
// //         });
// //       },
// //       { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
// //     );

// //     document.querySelectorAll(".fya-srv-grid__animate").forEach((el) => {
// //       observer.observe(el);
// //     });

// //     return () => observer.disconnect();
// //   }, []);

// //   return (
// //     <section className="fya-srv-grid" id="services" ref={gridRef}>
// //       <div className="fya-srv-grid__container">
// //         <div className="fya-srv-grid__header">
// //           <div className="fya-srv-grid__label fya-srv-grid__animate">
// //             <span className="fya-srv-grid__label-number">02</span>
// //             <span className="fya-srv-grid__label-line" />
// //             <span className="fya-srv-grid__label-text">OUR EXPERTISE</span>
// //           </div>
// //           <h2 className="fya-srv-grid__title fya-srv-grid__animate fya-srv-grid__animate--delay-1">
// //             Comprehensive <span className="fya-srv-grid__highlight">Solutions</span>
// //           </h2>
// //           <p className="fya-srv-grid__subtitle fya-srv-grid__animate fya-srv-grid__animate--delay-2">
// //             Our capabilities cover the complete lifecycle of a construction project,
// //             from initial planning to final handover.
// //           </p>
// //         </div>

// //         {loading ? (
// //           <div className="fya-srv-grid__loading">
// //             <div className="fya-srv-grid__spinner" />
// //             <span>Loading services...</span>
// //           </div>
// //         ) : (
// //           <div className="fya-srv-grid__grid">
// //             {services.map((service, index) => (
// //               <article 
// //                 key={service.id || index} 
// //                 className={`fya-srv-grid__card fya-srv-grid__animate fya-srv-grid__animate--delay-${(index + 1) * 0.1}`}
// //               >
// //                 <div className="fya-srv-grid__card-image">
// //                   <img
// //                     src={service.image || getImageUrl(service.image)}
// //                     alt={service.title}
// //                     className="fya-srv-grid__card-img"
// //                   />
// //                   <div className="fya-srv-grid__card-overlay" />
// //                   <span className="fya-srv-grid__card-category">
// //                     {service.category || "FIYA BUILDERS"}
// //                   </span>
// //                   <span className="fya-srv-grid__card-number">
// //                     {String(index + 1).padStart(2, "0")}
// //                   </span>
// //                 </div>

// //                 <div className="fya-srv-grid__card-body">
// //                   <h3 className="fya-srv-grid__card-title">{service.title}</h3>
// //                   <p className="fya-srv-grid__card-description">
// //                     {service.description}
// //                   </p>

// //                   {service.features && (
// //                     <ul className="fya-srv-grid__card-features">
// //                       {service.features.map((feature, idx) => (
// //                         <li key={idx} className="fya-srv-grid__card-feature">
// //                           <CheckCircle size={14} className="fya-srv-grid__card-feature-icon" />
// //                           {feature}
// //                         </li>
// //                       ))}
// //                     </ul>
// //                   )}

// //                   <a
// //                     href={`/contact?service=${encodeURIComponent(service.title)}`}
// //                     className="fya-srv-grid__card-link"
// //                   >
// //                     <span>LEARN MORE</span>
// //                     <ArrowUpRight size={18} />
// //                   </a>
// //                 </div>
// //               </article>
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </section>
// //   );
// // };

// // export default ServicesGridSection;











// // // src/pages/Services/sections/ServicesGridSection.jsx
// // import { useRef, useEffect } from "react";
// // import { ArrowUpRight, CheckCircle } from "lucide-react";
// // import "./ServicesGridSection.css";

// // const ServicesGridSection = ({ services, loading, getImageUrl }) => {
// //   const gridRef = useRef(null);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             entry.target.classList.add("fya-services__animate--visible");
// //           }
// //         });
// //       },
// //       { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
// //     );

// //     document.querySelectorAll(".fya-services__animate").forEach((el) => {
// //       observer.observe(el);
// //     });

// //     return () => observer.disconnect();
// //   }, []);

// //   return (
// //     <section className="fya-services__grid" id="services" ref={gridRef}>
// //       <div className="fya-services__container">
// //         <div className="fya-services__grid-header">
// //           <div className="fya-services__label fya-services__animate">
// //             <span className="fya-services__label-number">02</span>
// //             <span className="fya-services__label-line" />
// //             <span className="fya-services__label-text">OUR EXPERTISE</span>
// //           </div>
// //           <h2 className="fya-services__grid-title fya-services__animate fya-services__animate--delay-1">
// //             Comprehensive <span className="fya-services__text-red">Solutions</span>
// //           </h2>
// //           <p className="fya-services__grid-subtitle fya-services__animate fya-services__animate--delay-2">
// //             Our capabilities cover the complete lifecycle of a construction project,
// //             from initial planning to final handover.
// //           </p>
// //         </div>

// //         {loading ? (
// //           <div className="fya-services__loading">
// //             <div className="fya-services__spinner" />
// //             <span>Loading services...</span>
// //           </div>
// //         ) : (
// //           <div className="fya-services__grid-list">
// //             {services.map((service, index) => (
// //               <article 
// //                 key={service.id || index} 
// //                 className={`fya-services__card fya-services__animate fya-services__animate--delay-${(index + 1) * 0.1}`}
// //               >
// //                 <div className="fya-services__card-image">
// //                   <img
// //                     src={service.image || getImageUrl(service.image)}
// //                     alt={service.title}
// //                     className="fya-services__card-img"
// //                   />
// //                   <div className="fya-services__card-overlay" />
// //                   <span className="fya-services__card-category">
// //                     {service.category || "FIYA BUILDERS"}
// //                   </span>
// //                   <span className="fya-services__card-number">
// //                     {String(index + 1).padStart(2, "0")}
// //                   </span>
// //                 </div>

// //                 <div className="fya-services__card-body">
// //                   <h3 className="fya-services__card-title">{service.title}</h3>
// //                   <p className="fya-services__card-description">
// //                     {service.description}
// //                   </p>

// //                   {service.features && (
// //                     <ul className="fya-services__card-features">
// //                       {service.features.map((feature, idx) => (
// //                         <li key={idx} className="fya-services__card-feature">
// //                           <CheckCircle size={14} className="fya-services__card-feature-icon" />
// //                           {feature}
// //                         </li>
// //                       ))}
// //                     </ul>
// //                   )}

// //                   <a
// //                     href={`/contact?service=${encodeURIComponent(service.title)}`}
// //                     className="fya-services__card-link"
// //                   >
// //                     <span>LEARN MORE</span>
// //                     <ArrowUpRight size={18} />
// //                   </a>
// //                 </div>
// //               </article>
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </section>
// //   );
// // };

// // export default ServicesGridSection;

// // src/pages/Services/sections/ServicesGridSection.jsx
// import { useRef, useEffect } from "react";
// import { ArrowUpRight, CheckCircle } from "lucide-react";
// import "./ServicesGridSection.css";

// const ServicesGridSection = ({ services, loading, getImageUrl }) => {
//   const gridRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("fya-services__animate--visible");
//           }
//         });
//       },
//       { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
//     );

//     document.querySelectorAll(".fya-services__animate").forEach((el) => {
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   // Helper to get features (handle both array and string)
//   const getFeatures = (service) => {
//     if (service.features && Array.isArray(service.features)) {
//       return service.features;
//     }
//     if (service.features && typeof service.features === 'string') {
//       return service.features.split(',').map(f => f.trim());
//     }
//     return [];
//   };

//   // Helper to get category
//   const getCategory = (service) => {
//     return service.category || service.type || "FIYA BUILDERS";
//   };

//   // Helper to get image
//   const getImage = (service) => {
//     return service.image || service.featuredImage || service.thumbnail;
//   };

//   return (
//     <section className="fya-services__grid" id="services" ref={gridRef}>
//       <div className="fya-services__container">
//         <div className="fya-services__grid-header">
//           <div className="fya-services__label fya-services__animate">
//             <span className="fya-services__label-number">02</span>
//             <span className="fya-services__label-line" />
//             <span className="fya-services__label-text">OUR EXPERTISE</span>
//           </div>
//           <h2 className="fya-services__grid-title fya-services__animate fya-services__animate--delay-1">
//             Comprehensive <span className="fya-services__text-red">Solutions</span>
//           </h2>
//           <p className="fya-services__grid-subtitle fya-services__animate fya-services__animate--delay-2">
//             Our capabilities cover the complete lifecycle of a construction project,
//             from initial planning to final handover.
//           </p>
//         </div>

//         {loading ? (
//           <div className="fya-services__loading">
//             <div className="fya-services__spinner" />
//             <span>Loading services...</span>
//           </div>
//         ) : services.length === 0 ? (
//           <div className="fya-services__empty">
//             <p>No services available at the moment.</p>
//           </div>
//         ) : (
//           <div className="fya-services__grid-list">
//             {services.map((service, index) => {
//               const features = getFeatures(service);
//               const category = getCategory(service);
//               const image = getImage(service);
              
//               return (
//                 <article 
//                   key={service.id || index} 
//                   className={`fya-services__card fya-services__animate fya-services__animate--delay-${(index + 1) * 0.1}`}
//                 >
//                   <div className="fya-services__card-image">
//                     <img
//                       src={image ? getImageUrl(image) : ""}
//                       alt={service.title}
//                       className="fya-services__card-img"
//                       onError={(e) => {
//                         e.target.src = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80";
//                       }}
//                     />
//                     <div className="fya-services__card-overlay" />
//                     <span className="fya-services__card-category">
//                       {category}
//                     </span>
//                     <span className="fya-services__card-number">
//                       {String(index + 1).padStart(2, "0")}
//                     </span>
//                   </div>

//                   <div className="fya-services__card-body">
//                     <h3 className="fya-services__card-title">{service.title}</h3>
//                     <p className="fya-services__card-description">
//                       {service.description || service.shortDescription || "Professional construction services."}
//                     </p>

//                     {features.length > 0 && (
//                       <ul className="fya-services__card-features">
//                         {features.slice(0, 3).map((feature, idx) => (
//                           <li key={idx} className="fya-services__card-feature">
//                             <CheckCircle size={14} className="fya-services__card-feature-icon" />
//                             {feature}
//                           </li>
//                         ))}
//                       </ul>
//                     )}

//                     <a
//                       href={`/contact?service=${encodeURIComponent(service.title)}`}
//                       className="fya-services__card-link"
//                     >
//                       <span>LEARN MORE</span>
//                       <ArrowUpRight size={18} />
//                     </a>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default ServicesGridSection;












// import { useRef, useEffect } from "react";
// import { ArrowUpRight, CheckCircle } from "lucide-react";
// import "./ServicesGridSection.css";

// const ServicesGridSection = ({ services, loading, getImageUrl }) => {
//   const gridRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("fya-services__animate--visible");
//           }
//         });
//       },
//       { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
//     );

//     document.querySelectorAll(".fya-services__animate").forEach((el) => {
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   // Debug: Log services prop
//   console.log("ServicesGridSection received:", services);
//   console.log("Loading state:", loading);

//   // Helper to get features
//   const getFeatures = (service) => {
//     if (service.features && Array.isArray(service.features)) {
//       return service.features;
//     }
//     if (service.features && typeof service.features === 'string') {
//       return service.features.split(',').map(f => f.trim());
//     }
//     return [];
//   };

//   // Helper to get category
//   const getCategory = (service) => {
//     return service.category || service.type || "FIYA BUILDERS";
//   };

//   // Helper to get image
//   const getImage = (service) => {
//     return service.image || service.featuredImage || service.thumbnail || "";
//   };

//   if (loading) {
//     return (
//       <section className="fya-services__grid" id="services" ref={gridRef}>
//         <div className="fya-services__container">
//           <div className="fya-services__grid-header">
//             <div className="fya-services__label fya-services__animate">
//               <span className="fya-services__label-number">02</span>
//               <span className="fya-services__label-line" />
//               <span className="fya-services__label-text">OUR EXPERTISE</span>
//             </div>
//             <h2 className="fya-services__grid-title fya-services__animate fya-services__animate--delay-1">
//               Comprehensive <span className="fya-services__text-red">Solutions</span>
//             </h2>
//             <p className="fya-services__grid-subtitle fya-services__animate fya-services__animate--delay-2">
//               Our capabilities cover the complete lifecycle of a construction project,
//               from initial planning to final handover.
//             </p>
//           </div>
//           <div className="fya-services__loading">
//             <div className="fya-services__spinner" />
//             <span>Loading services...</span>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   if (!services || services.length === 0) {
//     return (
//       <section className="fya-services__grid" id="services" ref={gridRef}>
//         <div className="fya-services__container">
//           <div className="fya-services__grid-header">
//             <div className="fya-services__label fya-services__animate">
//               <span className="fya-services__label-number">02</span>
//               <span className="fya-services__label-line" />
//               <span className="fya-services__label-text">OUR EXPERTISE</span>
//             </div>
//             <h2 className="fya-services__grid-title fya-services__animate fya-services__animate--delay-1">
//               Comprehensive <span className="fya-services__text-red">Solutions</span>
//             </h2>
//             <p className="fya-services__grid-subtitle fya-services__animate fya-services__animate--delay-2">
//               Our capabilities cover the complete lifecycle of a construction project,
//               from initial planning to final handover.
//             </p>
//           </div>
//           <div className="fya-services__empty">
//             <p>No services available at the moment.</p>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="fya-services__grid" id="services" ref={gridRef}>
//       <div className="fya-services__container">
//         <div className="fya-services__grid-header">
//           <div className="fya-services__label fya-services__animate">
//             <span className="fya-services__label-number">02</span>
//             <span className="fya-services__label-line" />
//             <span className="fya-services__label-text">OUR EXPERTISE</span>
//           </div>
//           <h2 className="fya-services__grid-title fya-services__animate fya-services__animate--delay-1">
//             Comprehensive <span className="fya-services__text-red">Solutions</span>
//           </h2>
//           <p className="fya-services__grid-subtitle fya-services__animate fya-services__animate--delay-2">
//             Our capabilities cover the complete lifecycle of a construction project,
//             from initial planning to final handover.
//           </p>
//         </div>

//         <div className="fya-services__grid-list">
//           {services.map((service, index) => {
//             const features = getFeatures(service);
//             const category = getCategory(service);
//             const image = getImage(service);
            
//             return (
//               <article 
//                 key={service.id || index} 
//                 className={`fya-services__card fya-services__animate fya-services__animate--delay-${(index + 1) * 0.1}`}
//               >
//                 <div className="fya-services__card-image">
//                   <img
//                     src={image ? getImageUrl(image) : ""}
//                     alt={service.title || "Service"}
//                     className="fya-services__card-img"
//                     onError={(e) => {
//                       e.target.src = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80";
//                     }}
//                   />
//                   <div className="fya-services__card-overlay" />
//                   <span className="fya-services__card-category">
//                     {category}
//                   </span>
//                   <span className="fya-services__card-number">
//                     {String(index + 1).padStart(2, "0")}
//                   </span>
//                 </div>

//                 <div className="fya-services__card-body">
//                   <h3 className="fya-services__card-title">{service.title || "Service"}</h3>
//                   <p className="fya-services__card-description">
//                     {service.description || service.shortDescription || "Professional construction services."}
//                   </p>

//                   {features.length > 0 && (
//                     <ul className="fya-services__card-features">
//                       {features.slice(0, 3).map((feature, idx) => (
//                         <li key={idx} className="fya-services__card-feature">
//                           <CheckCircle size={14} className="fya-services__card-feature-icon" />
//                           {feature}
//                         </li>
//                       ))}
//                     </ul>
//                   )}

//                   <a
//                     href={`/contact?service=${encodeURIComponent(service.title || "service")}`}
//                     className="fya-services__card-link"
//                   >
//                     <span>LEARN MORE</span>
//                     <ArrowUpRight size={18} />
//                   </a>
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesGridSection;







// // src/pages/Services/ServicesPage/ServicesGridSection.jsx
// import { useRef, useEffect } from "react";
// import { ArrowUpRight, CheckCircle } from "lucide-react";
// import "./ServicesGridSection.css";

// const ServicesGridSection = ({ services, loading, getImageUrl }) => {
//   const gridRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("fya-services__animate--visible");
//           }
//         });
//       },
//       { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
//     );

//     document.querySelectorAll(".fya-services__animate").forEach((el) => {
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   // 🔍 Enhanced Debug logging
//   console.log("🔍 ServicesGridSection Debug:");
//   console.log("  - services prop:", services);
//   console.log("  - services type:", typeof services);
//   console.log("  - is array:", Array.isArray(services));
//   console.log("  - services length:", services?.length);
//   console.log("  - loading state:", loading);
  
//   // Log each service
//   if (services && Array.isArray(services)) {
//     services.forEach((service, index) => {
//       console.log(`  - Service ${index + 1}:`, {
//         id: service.id || service._id,
//         title: service.title,
//         description: service.description,
//         category: service.category,
//         image: service.image,
//         features: service.features,
//       });
//     });
//   }

//   // Helper to get features
//   const getFeatures = (service) => {
//     if (service.features && Array.isArray(service.features)) {
//       return service.features;
//     }
//     if (service.features && typeof service.features === 'string') {
//       return service.features.split(',').map(f => f.trim());
//     }
//     return [];
//   };

//   // Helper to get category
//   const getCategory = (service) => {
//     return service.category || service.type || "FIYA BUILDERS";
//   };

//   // Helper to get image
//   const getImage = (service) => {
//     return service.image || service.featuredImage || service.thumbnail || "";
//   };

//   if (loading) {
//     return (
//       <section className="fya-services__grid" id="services" ref={gridRef}>
//         <div className="fya-services__container">
//           <div className="fya-services__grid-header">
//             <div className="fya-services__label fya-services__animate">
//               <span className="fya-services__label-number">02</span>
//               <span className="fya-services__label-line" />
//               <span className="fya-services__label-text">OUR EXPERTISE</span>
//             </div>
//             <h2 className="fya-services__grid-title fya-services__animate fya-services__animate--delay-1">
//               Comprehensive <span className="fya-services__text-red">Solutions</span>
//             </h2>
//             <p className="fya-services__grid-subtitle fya-services__animate fya-services__animate--delay-2">
//               Our capabilities cover the complete lifecycle of a construction project,
//               from initial planning to final handover.
//             </p>
//           </div>
//           <div className="fya-services__loading">
//             <div className="fya-services__spinner" />
//             <span>Loading services...</span>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   if (!services || services.length === 0) {
//     return (
//       <section className="fya-services__grid" id="services" ref={gridRef}>
//         <div className="fya-services__container">
//           <div className="fya-services__grid-header">
//             <div className="fya-services__label fya-services__animate">
//               <span className="fya-services__label-number">02</span>
//               <span className="fya-services__label-line" />
//               <span className="fya-services__label-text">OUR EXPERTISE</span>
//             </div>
//             <h2 className="fya-services__grid-title fya-services__animate fya-services__animate--delay-1">
//               Comprehensive <span className="fya-services__text-red">Solutions</span>
//             </h2>
//             <p className="fya-services__grid-subtitle fya-services__animate fya-services__animate--delay-2">
//               Our capabilities cover the complete lifecycle of a construction project,
//               from initial planning to final handover.
//             </p>
//           </div>
//           <div className="fya-services__empty">
//             <p>No services available at the moment.</p>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="fya-services__grid" id="services" ref={gridRef}>
//       <div className="fya-services__container">
//         <div className="fya-services__grid-header">
//           <div className="fya-services__label fya-services__animate">
//             <span className="fya-services__label-number">02</span>
//             <span className="fya-services__label-line" />
//             <span className="fya-services__label-text">OUR EXPERTISE</span>
//           </div>
//           <h2 className="fya-services__grid-title fya-services__animate fya-services__animate--delay-1">
//             Comprehensive <span className="fya-services__text-red">Solutions</span>
//           </h2>
//           <p className="fya-services__grid-subtitle fya-services__animate fya-services__animate--delay-2">
//             Our capabilities cover the complete lifecycle of a construction project,
//             from initial planning to final handover.
//           </p>
//         </div>

//         <div className="fya-services__grid-list">
//           {services.map((service, index) => {
//             const features = getFeatures(service);
//             const category = getCategory(service);
//             const image = getImage(service);
            
//             console.log(`🎨 Rendering service ${index + 1}:`, {
//               title: service.title,
//               image: image,
//               imageUrl: getImageUrl(image),
//               features: features,
//             });
            
//             return (
//               <article 
//                 key={service.id || service._id || index} 
//                 className={`fya-services__card fya-services__animate fya-services__animate--delay-${Math.min((index + 1) * 0.1, 0.5)}`}
//               >
//                 <div className="fya-services__card-image">
//                   <img
//                     src={image ? getImageUrl(image) : "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"}
//                     alt={service.title || "Service"}
//                     className="fya-services__card-img"
//                     onError={(e) => {
//                       console.warn(`⚠️ Image failed to load for ${service.title}:`, image);
//                       e.target.src = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80";
//                     }}
//                   />
//                   <div className="fya-services__card-overlay" />
//                   <span className="fya-services__card-category">
//                     {category}
//                   </span>
//                   <span className="fya-services__card-number">
//                     {String(index + 1).padStart(2, "0")}
//                   </span>
//                 </div>

//                 <div className="fya-services__card-body">
//                   <h3 className="fya-services__card-title">{service.title || "Service"}</h3>
//                   <p className="fya-services__card-description">
//                     {service.description || service.shortDescription || "Professional construction services."}
//                   </p>

//                   {features.length > 0 && (
//                     <ul className="fya-services__card-features">
//                       {features.slice(0, 3).map((feature, idx) => (
//                         <li key={idx} className="fya-services__card-feature">
//                           <CheckCircle size={14} className="fya-services__card-feature-icon" />
//                           {feature}
//                         </li>
//                       ))}
//                     </ul>
//                   )}

//                   <a
//                     href={`/contact?service=${encodeURIComponent(service.title || "service")}`}
//                     className="fya-services__card-link"
//                   >
//                     <span>LEARN MORE</span>
//                     <ArrowUpRight size={18} />
//                   </a>
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesGridSection;

// src/pages/Services/ServicesPage/ServicesGridSection.jsx
import { useRef, useEffect } from "react";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import "./ServicesGridSection.css";

const ServicesGridSection = ({ services, loading, getImageUrl }) => {
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fya-sgs__animate--visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".fya-sgs__animate").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Debug logging
  console.log("🔍 ServicesGridSection Debug:");
  console.log("  - services prop:", services);
  console.log("  - services type:", typeof services);
  console.log("  - is array:", Array.isArray(services));
  console.log("  - services length:", services?.length);
  console.log("  - loading state:", loading);
  
  if (services && Array.isArray(services)) {
    services.forEach((service, index) => {
      console.log(`  - Service ${index + 1}:`, {
        id: service.id || service._id,
        title: service.title,
        description: service.description,
        category: service.category,
        image: service.image,
        features: service.features,
      });
    });
  }

  // Helper functions
  const getFeatures = (service) => {
    if (service.features && Array.isArray(service.features)) {
      return service.features;
    }
    if (service.features && typeof service.features === 'string') {
      return service.features.split(',').map(f => f.trim());
    }
    return [];
  };

  const getCategory = (service) => {
    return service.category || service.type || "FIYA BUILDERS";
  };

  const getImage = (service) => {
    return service.image || service.featuredImage || service.thumbnail || "";
  };

  // Loading State
  if (loading) {
    return (
      <section className="fya-sgs__section" id="services" ref={gridRef}>
        <div className="fya-sgs__container">
          <div className="fya-sgs__header">
            <div className="fya-sgs__label fya-sgs__animate">
              <span className="fya-sgs__label-number">02</span>
              <span className="fya-sgs__label-line" />
              <span className="fya-sgs__label-text">OUR EXPERTISE</span>
            </div>
            <h2 className="fya-sgs__title fya-sgs__animate fya-sgs__animate--delay-1">
              Comprehensive <span className="fya-sgs__highlight">Solutions</span>
            </h2>
            <p className="fya-sgs__subtitle fya-sgs__animate fya-sgs__animate--delay-2">
              Our capabilities cover the complete lifecycle of a construction project,
              from initial planning to final handover.
            </p>
          </div>
          <div className="fya-sgs__loading">
            <div className="fya-sgs__spinner" />
            <span>Loading services...</span>
          </div>
        </div>
      </section>
    );
  }

  // Empty State
  if (!services || services.length === 0) {
    return (
      <section className="fya-sgs__section" id="services" ref={gridRef}>
        <div className="fya-sgs__container">
          <div className="fya-sgs__header">
            <div className="fya-sgs__label fya-sgs__animate">
              <span className="fya-sgs__label-number">02</span>
              <span className="fya-sgs__label-line" />
              <span className="fya-sgs__label-text">OUR EXPERTISE</span>
            </div>
            <h2 className="fya-sgs__title fya-sgs__animate fya-sgs__animate--delay-1">
              Comprehensive <span className="fya-sgs__highlight">Solutions</span>
            </h2>
            <p className="fya-sgs__subtitle fya-sgs__animate fya-sgs__animate--delay-2">
              Our capabilities cover the complete lifecycle of a construction project,
              from initial planning to final handover.
            </p>
          </div>
          <div className="fya-sgs__empty">
            <p>No services available at the moment.</p>
          </div>
        </div>
      </section>
    );
  }

  // Main Render with Services
  return (
    <section className="fya-sgs__section" id="services" ref={gridRef}>
      <div className="fya-sgs__container">
        <div className="fya-sgs__header">
          <div className="fya-sgs__label fya-sgs__animate">
            <span className="fya-sgs__label-number">02</span>
            <span className="fya-sgs__label-line" />
            <span className="fya-sgs__label-text">OUR EXPERTISE</span>
          </div>
          <h2 className="fya-sgs__title fya-sgs__animate fya-sgs__animate--delay-1">
            Comprehensive <span className="fya-sgs__highlight">Solutions</span>
          </h2>
          <p className="fya-sgs__subtitle fya-sgs__animate fya-sgs__animate--delay-2">
            Our capabilities cover the complete lifecycle of a construction project,
            from initial planning to final handover.
          </p>
        </div>

        <div className="fya-sgs__grid">
          {services.map((service, index) => {
            const features = getFeatures(service);
            const category = getCategory(service);
            const image = getImage(service);
            
            console.log(`🎨 Rendering service ${index + 1}:`, {
              title: service.title,
              image: image,
              imageUrl: getImageUrl(image),
              features: features,
            });
            
            return (
              <article 
                key={service.id || service._id || index} 
                className={`fya-sgs__card fya-sgs__animate fya-sgs__animate--delay-${Math.min((index + 1) * 0.1, 0.5)}`}
              >
                <div className="fya-sgs__card-image-wrapper">
                  <img
                    src={image ? getImageUrl(image) : "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"}
                    alt={service.title || "Service"}
                    className="fya-sgs__card-image"
                    onError={(e) => {
                      console.warn(`⚠️ Image failed to load for ${service.title}:`, image);
                      e.target.src = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80";
                    }}
                  />
                  <div className="fya-sgs__card-overlay" />
                  <span className="fya-sgs__card-category">
                    {category}
                  </span>
                  <span className="fya-sgs__card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="fya-sgs__card-body">
                  <h3 className="fya-sgs__card-title">{service.title || "Service"}</h3>
                  <p className="fya-sgs__card-description">
                    {service.description || service.shortDescription || "Professional construction services."}
                  </p>

                  {features.length > 0 && (
                    <ul className="fya-sgs__card-features">
                      {features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="fya-sgs__card-feature">
                          <CheckCircle size={14} className="fya-sgs__card-feature-icon" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  <a
                    href={`/contact?service=${encodeURIComponent(service.title || "service")}`}
                    className="fya-sgs__card-link"
                  >
                    <span>LEARN MORE</span>
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGridSection;