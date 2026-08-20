// // import { useEffect, useState } from "react";
// // import {
// //   ArrowDown,
// //   ArrowUpRight,
// //   Building2,
// //   Home,
// //   Ruler,
// //   Hammer,
// //   Paintbrush,
// //   Wrench,
// // } from "lucide-react";

// // import api from "../services/api.js";

// // import "./ServicesPage.css";

// // const iconMap = {
// //   building: Building2,
// //   residential: Home,
// //   design: Ruler,
// //   construction: Hammer,
// //   interior: Paintbrush,
// //   renovation: Wrench,
// // };

// // const defaultServices = [
// //   {
// //     id: 1,
// //     title: "Residential Construction",
// //     slug: "residential-construction",
// //     description:
// //       "Thoughtfully planned and professionally executed homes designed around the way you live.",
// //     category: "RESIDENTIAL",
// //     icon: "residential",
// //   },
// //   {
// //     id: 2,
// //     title: "Commercial Construction",
// //     slug: "commercial-construction",
// //     description:
// //       "High-quality commercial spaces built with functionality, efficiency and long-term value in mind.",
// //     category: "COMMERCIAL",
// //     icon: "building",
// //   },
// //   {
// //     id: 3,
// //     title: "Architectural Design",
// //     slug: "architectural-design",
// //     description:
// //       "Design solutions that balance aesthetics, functionality, engineering and the character of the site.",
// //     category: "DESIGN",
// //     icon: "design",
// //   },
// //   {
// //     id: 4,
// //     title: "Turnkey Construction",
// //     slug: "turnkey-construction",
// //     description:
// //       "End-to-end project execution from planning and design through construction and final handover.",
// //     category: "TURNKEY",
// //     icon: "construction",
// //   },
// //   {
// //     id: 5,
// //     title: "Interior Solutions",
// //     slug: "interior-solutions",
// //     description:
// //       "Interior environments carefully finished to complement the architecture and purpose of every space.",
// //     category: "INTERIORS",
// //     icon: "interior",
// //   },
// //   {
// //     id: 6,
// //     title: "Renovation & Restoration",
// //     slug: "renovation-restoration",
// //     description:
// //       "Transforming existing spaces through considered renovation, upgrades and structural improvements.",
// //     category: "RENOVATION",
// //     icon: "renovation",
// //   },
// // ];

// // const ServicesPage = () => {
// //   const [services, setServices] =
// //     useState(defaultServices);

// //   const [loading, setLoading] =
// //     useState(true);

// //   useEffect(() => {
// //     loadServices();
// //   }, []);

// //   const loadServices = async () => {
// //     try {
// //       const response = await api.get(
// //         "/services"
// //       );

// //       const data =
// //         response.data?.data ||
// //         response.data ||
// //         [];

// //       if (
// //         Array.isArray(data) &&
// //         data.length > 0
// //       ) {
// //         setServices(data);
// //       }
// //     } catch (error) {
// //       console.log(
// //         "Services API not available yet. Using defaults."
// //       );
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <main className="fiya-services-page">

// //       {/* ==================================================
// //           HERO
// //       ================================================== */}

// //       <section className="fiya-services-hero">

// //         <div className="public-container">

// //           <div className="fiya-services-label">

// //             <span>
// //               01
// //             </span>

// //             <span>
// //               OUR SERVICES
// //             </span>

// //             <span className="fiya-services-line" />

// //           </div>


// //           <div className="fiya-services-hero-content">

// //             <h1>
// //               Spaces
// //               <br />
// //               <span>built</span>
// //               <br />
// //               with intent.
// //             </h1>

// //             <div className="fiya-services-hero-copy">

// //               <p>
// //                 From the first drawing to the
// //                 final finish, we bring together
// //                 design, engineering and
// //                 construction under one direction.
// //               </p>

// //               <div className="fiya-services-scroll">

// //                 <ArrowDown
// //                   size={16}
// //                   strokeWidth={1.4}
// //                 />

// //                 <span>
// //                   EXPLORE SERVICES
// //                 </span>

// //               </div>

// //             </div>

// //           </div>

// //         </div>

// //       </section>


// //       {/* ==================================================
// //           INTRO
// //       ================================================== */}

// //       <section className="fiya-services-intro">

// //         <div className="public-container">

// //           <div className="fiya-services-intro-grid">

// //             <span className="fiya-services-intro-number">
// //               02
// //             </span>

// //             <div>

// //               <span className="fiya-services-overline">
// //                 WHAT WE DO
// //               </span>

// //               <h2>
// //                 One team.
// //                 <br />
// //                 Multiple
// //                 <br />
// //                 <em>possibilities.</em>
// //               </h2>

// //               <p>
// //                 Every project has different
// //                 requirements. Our services are
// //                 designed to give you the flexibility
// //                 to work with us from a single
// //                 discipline or through a complete
// //                 turnkey solution.
// //               </p>

// //             </div>

// //           </div>

// //         </div>

// //       </section>


// //       {/* ==================================================
// //           SERVICES LIST
// //       ================================================== */}

// //       <section className="fiya-services-list-section">

// //         <div className="public-container">

// //           <div className="fiya-services-section-header">

// //             <div className="fiya-services-label">

// //               <span>
// //                 03
// //               </span>

// //               <span>
// //                 EXPERTISE
// //               </span>

// //               <span className="fiya-services-line" />

// //             </div>

// //             <p>
// //               Our capabilities cover the complete
// //               lifecycle of a construction project.
// //             </p>

// //           </div>


// //           <div className="fiya-services-list">

// //             {loading ? (
// //               <div className="fiya-services-loading">
// //                 Loading services...
// //               </div>
// //             ) : (
// //               services.map(
// //                 (service, index) => {

// //                   const Icon =
// //                     iconMap[
// //                       service.icon
// //                     ] || Building2;

// //                   return (
// //                     <article
// //                       className="fiya-service-item"
// //                       key={
// //                         service.id ||
// //                         index
// //                       }
// //                     >

// //                       <div className="fiya-service-number">
// //                         {String(
// //                           index + 1
// //                         ).padStart(2, "0")}
// //                       </div>


// //                       <div className="fiya-service-icon">

// //                         <Icon
// //                           size={28}
// //                           strokeWidth={1.3}
// //                         />

// //                       </div>


// //                       <div className="fiya-service-content">

// //                         <span>
// //                           {service.category ||
// //                             "FIYA BUILDERS"}
// //                         </span>

// //                         <h3>
// //                           {service.title}
// //                         </h3>

// //                         <p>
// //                           {service.description}
// //                         </p>

// //                       </div>


// //                       <a
// //                         href={`/contact?service=${encodeURIComponent(
// //                           service.title
// //                         )}`}
// //                         className="fiya-service-action"
// //                         aria-label={`Enquire about ${service.title}`}
// //                       >

// //                         <ArrowUpRight
// //                           size={20}
// //                           strokeWidth={1.5}
// //                         />

// //                       </a>

// //                     </article>
// //                   );
// //                 }
// //               )
// //             )}

// //           </div>

// //         </div>

// //       </section>


// //       {/* ==================================================
// //           PROCESS STRIP
// //       ================================================== */}

// //       <section className="fiya-services-process">

// //         <div className="public-container">

// //           <div className="fiya-services-process-grid">

// //             <div>

// //               <span>
// //                 HOW WE WORK
// //               </span>

// //               <h2>
// //                 From idea
// //                 <br />
// //                 to <em>reality.</em>
// //               </h2>

// //             </div>


// //             <div className="fiya-services-process-steps">

// //               <div>
// //                 <strong>
// //                   01
// //                 </strong>

// //                 <span>
// //                   CONSULT
// //                 </span>
// //               </div>

// //               <div>
// //                 <strong>
// //                   02
// //                 </strong>

// //                 <span>
// //                   DESIGN
// //                 </span>
// //               </div>

// //               <div>
// //                 <strong>
// //                   03
// //                 </strong>

// //                 <span>
// //                   BUILD
// //                 </span>
// //               </div>

// //               <div>
// //                 <strong>
// //                   04
// //                 </strong>

// //                 <span>
// //                   HANDOVER
// //                 </span>
// //               </div>

// //             </div>

// //           </div>

// //         </div>

// //       </section>


// //       {/* ==================================================
// //           CTA
// //       ================================================== */}

// //       <section className="fiya-services-cta">

// //         <div className="public-container">

// //           <div className="fiya-services-cta-inner">

// //             <div>

// //               <span>
// //                 HAVE A PROJECT IN MIND?
// //               </span>

// //               <h2>
// //                 Let's build
// //                 <br />
// //                 it <em>together.</em>
// //               </h2>

// //             </div>


// //             <a href="/contact">

// //               <span>
// //                 Discuss Your Project
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

// // export default ServicesPage;



// import { useEffect, useState } from "react";
// import {
//   ArrowDown,
//   ArrowUpRight,
//   Building2,
//   Home,
//   Ruler,
//   Hammer,
//   Paintbrush,
//   Wrench,
//   CheckCircle2,
//   Clock,
//   Shield,
//   Sparkles,
// } from "lucide-react";

// import api from "../services/api.js";

// import "./ServicesPage.css";

// const iconMap = {
//   building: Building2,
//   residential: Home,
//   design: Ruler,
//   construction: Hammer,
//   interior: Paintbrush,
//   renovation: Wrench,
// };

// const defaultServices = [
//   {
//     id: 1,
//     title: "Residential Construction",
//     slug: "residential-construction",
//     description:
//       "Thoughtfully planned and professionally executed homes designed around the way you live.",
//     category: "RESIDENTIAL",
//     icon: "residential",
//   },
//   {
//     id: 2,
//     title: "Commercial Construction",
//     slug: "commercial-construction",
//     description:
//       "High-quality commercial spaces built with functionality, efficiency and long-term value in mind.",
//     category: "COMMERCIAL",
//     icon: "building",
//   },
//   {
//     id: 3,
//     title: "Architectural Design",
//     slug: "architectural-design",
//     description:
//       "Design solutions that balance aesthetics, functionality, engineering and the character of the site.",
//     category: "DESIGN",
//     icon: "design",
//   },
//   {
//     id: 4,
//     title: "Turnkey Construction",
//     slug: "turnkey-construction",
//     description:
//       "End-to-end project execution from planning and design through construction and final handover.",
//     category: "TURNKEY",
//     icon: "construction",
//   },
//   {
//     id: 5,
//     title: "Interior Solutions",
//     slug: "interior-solutions",
//     description:
//       "Interior environments carefully finished to complement the architecture and purpose of every space.",
//     category: "INTERIORS",
//     icon: "interior",
//   },
//   {
//     id: 6,
//     title: "Renovation & Restoration",
//     slug: "renovation-restoration",
//     description:
//       "Transforming existing spaces through considered renovation, upgrades and structural improvements.",
//     category: "RENOVATION",
//     icon: "renovation",
//   },
// ];

// const processSteps = [
//   {
//     number: "01",
//     title: "Consultation",
//     description: "Understanding your vision, requirements, and project goals.",
//     icon: Clock,
//   },
//   {
//     number: "02",
//     title: "Design & Planning",
//     description: "Creating detailed plans and architectural solutions.",
//     icon: Ruler,
//   },
//   {
//     number: "03",
//     title: "Construction",
//     description: "Executing with precision, quality materials, and expertise.",
//     icon: Hammer,
//   },
//   {
//     number: "04",
//     title: "Delivery",
//     description: "Final inspection, handover, and post-project support.",
//     icon: CheckCircle2,
//   },
// ];

// const ServicesPage = () => {
//   const [services, setServices] = useState(defaultServices);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadServices();
//   }, []);

//   const loadServices = async () => {
//     try {
//       const response = await api.get("/services");
//       const data = response.data?.data || response.data || [];
//       if (Array.isArray(data) && data.length > 0) {
//         setServices(data);
//       }
//     } catch (error) {
//       console.log("Services API not available yet. Using defaults.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="fya-services-page">
      
//       {/* ==================================================
//           HERO — Premium Blue/Gold
//       ================================================== */}
//       <section className="fya-services-hero">
//         <div className="fya-hero-pattern" />
//         <div className="fya-container fya-services-hero-container">
//           <div className="fya-hero-badge">
//             <Sparkles size={16} />
//             <span>PREMIUM CONSTRUCTION SERVICES</span>
//           </div>
          
//           <div className="fya-services-hero-grid">
//             <div className="fya-services-hero-content">
//               <h1 className="fya-services-hero-title">
//                 BUILDING
//                 <span className="fya-text-blue"> SPACES</span>
//                 <br />
//                 WITH <span className="fya-text-gold">EXCELLENCE</span>
//               </h1>
//               <p className="fya-services-hero-subtitle">
//                 From initial concept to final construction, we deliver
//                 comprehensive building solutions with unmatched quality
//                 and precision.
//               </p>
//               <div className="fya-services-hero-actions">
//                 <a href="#services" className="fya-btn-primary">
//                   EXPLORE SERVICES
//                   <ArrowDown size={18} />
//                 </a>
//                 <a href="/contact" className="fya-btn-secondary">
//                   FREE CONSULTATION
//                 </a>
//               </div>
//             </div>
            
//             <div className="fya-services-hero-stats">
//               <div className="fya-hero-stat-card">
//                 <span className="fya-stat-number">250+</span>
//                 <span className="fya-stat-label">Projects Done</span>
//               </div>
//               <div className="fya-hero-stat-card">
//                 <span className="fya-stat-number">15+</span>
//                 <span className="fya-stat-label">Years Experience</span>
//               </div>
//               <div className="fya-hero-stat-card">
//                 <span className="fya-stat-number">98%</span>
//                 <span className="fya-stat-label">Client Satisfaction</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==================================================
//           INTRO — What We Do
//       ================================================== */}
//       <section className="fya-services-intro">
//         <div className="fya-container">
//           <div className="fya-intro-wrapper">
//             <div className="fya-section-label">
//               <span className="fya-label-number">01</span>
//               <span className="fya-label-line" />
//               <span className="fya-label-text">WHAT WE DO</span>
//             </div>
//             <div className="fya-intro-grid">
//               <h2 className="fya-intro-heading">
//                 ONE TEAM.
//                 <br />
//                 MULTIPLE
//                 <br />
//                 <span className="fya-text-blue">POSSIBILITIES.</span>
//               </h2>
//               <div className="fya-intro-content">
//                 <p className="fya-intro-text">
//                   Every project has different requirements. Our services are
//                   designed to give you the flexibility to work with us from
//                   a single discipline or through a complete turnkey solution.
//                 </p>
//                 <div className="fya-intro-features">
//                   <div className="fya-feature-item">
//                     <Shield size={20} />
//                     <span>Quality Assured</span>
//                   </div>
//                   <div className="fya-feature-item">
//                     <Clock size={20} />
//                     <span>On-Time Delivery</span>
//                   </div>
//                   <div className="fya-feature-item">
//                     <CheckCircle2 size={20} />
//                     <span>Certified Experts</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==================================================
//           SERVICES LIST — Premium Cards
//       ================================================== */}
//       <section className="fya-services-list-section" id="services">
//         <div className="fya-container">
//           <div className="fya-services-section-header">
//             <div className="fya-section-label">
//               <span className="fya-label-number">02</span>
//               <span className="fya-label-line" />
//               <span className="fya-label-text">OUR EXPERTISE</span>
//             </div>
//             <h2 className="fya-services-heading">
//               COMPREHENSIVE <span className="fya-text-gold">SOLUTIONS</span>
//             </h2>
//             <p className="fya-services-description">
//               Our capabilities cover the complete lifecycle of a construction project,
//               from initial planning to final handover.
//             </p>
//           </div>

//           {loading ? (
//             <div className="fya-services-loading">
//               <div className="fya-loading-spinner" />
//               <span>Loading services...</span>
//             </div>
//           ) : (
//             <div className="fya-services-grid">
//               {services.map((service, index) => {
//                 const Icon = iconMap[service.icon] || Building2;
//                 return (
//                   <article className="fya-service-card" key={service.id || index}>
//                     <div className="fya-service-card-header">
//                       <div className="fya-service-icon">
//                         <Icon size={32} strokeWidth={1.5} />
//                       </div>
//                       <span className="fya-service-number">
//                         {String(index + 1).padStart(2, "0")}
//                       </span>
//                     </div>
                    
//                     <div className="fya-service-content">
//                       <span className="fya-service-category">
//                         {service.category || "FIYA BUILDERS"}
//                       </span>
//                       <h3 className="fya-service-title">{service.title}</h3>
//                       <p className="fya-service-description">
//                         {service.description}
//                       </p>
//                     </div>
                    
//                     <a
//                       href={`/contact?service=${encodeURIComponent(service.title)}`}
//                       className="fya-service-link"
//                       aria-label={`Enquire about ${service.title}`}
//                     >
//                       <span>LEARN MORE</span>
//                       <ArrowUpRight size={18} />
//                     </a>
//                   </article>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* ==================================================
//           PROCESS — How We Work
//       ================================================== */}
//       <section className="fya-process-section">
//         <div className="fya-container">
//           <div className="fya-process-header">
//             <div className="fya-section-label">
//               <span className="fya-label-number">03</span>
//               <span className="fya-label-line" />
//               <span className="fya-label-text">HOW WE WORK</span>
//             </div>
//             <h2 className="fya-process-heading">
//               FROM IDEA TO <span className="fya-text-blue">REALITY</span>
//             </h2>
//           </div>

//           <div className="fya-process-grid">
//             {processSteps.map((step, index) => (
//               <div className="fya-process-card" key={index}>
//                 <div className="fya-process-number">
//                   {step.number}
//                 </div>
//                 <step.icon size={32} className="fya-process-icon" />
//                 <h3 className="fya-process-title">{step.title}</h3>
//                 <p className="fya-process-description">{step.description}</p>
//                 {index < processSteps.length - 1 && (
//                   <div className="fya-process-arrow">
//                     <ArrowUpRight size={20} />
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ==================================================
//           CTA — Premium Gold
//       ================================================== */}
//       <section className="fya-services-cta">
//         <div className="fya-container">
//           <div className="fya-cta-wrapper">
//             <div className="fya-cta-pattern" />
//             <div className="fya-cta-content">
//               <span className="fya-cta-label">HAVE A PROJECT IN MIND?</span>
//               <h2 className="fya-cta-heading">
//                 LET'S BUILD IT <span className="fya-text-gold">TOGETHER</span>
//               </h2>
//               <p className="fya-cta-text">
//                 Partner with us for your next project and experience
//                 the difference of working with industry leaders.
//               </p>
//               <a href="/contact" className="fya-btn-gold">
//                 DISCUSS YOUR PROJECT
//                 <ArrowUpRight size={20} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//     </main>
//   );
// };

// export default ServicesPage;


import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import api from "../services/api.js";

import "./ServicesPage.css";

const API_URL =
  import.meta.env.VITE_API_URL?.replace(
    "/api",
    ""
  ) || "http://localhost:5000";

const defaultServices = [
  {
    id: 1,
    title: "Residential Construction",
    slug: "residential-construction",
    description:
      "Thoughtfully planned and professionally executed homes designed around the way you live.",
    category: "RESIDENTIAL",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    features: ["Custom Homes", "Villa Projects", "Apartment Complexes"],
  },
  {
    id: 2,
    title: "Commercial Construction",
    slug: "commercial-construction",
    description:
      "High-quality commercial spaces built with functionality, efficiency and long-term value in mind.",
    category: "COMMERCIAL",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    features: ["Office Buildings", "Retail Spaces", "Corporate Campuses"],
  },
  {
    id: 3,
    title: "Architectural Design",
    slug: "architectural-design",
    description:
      "Design solutions that balance aesthetics, functionality, engineering and the character of the site.",
    category: "DESIGN",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    features: ["Concept Design", "3D Visualization", "Structural Planning"],
  },
  {
    id: 4,
    title: "Turnkey Construction",
    slug: "turnkey-construction",
    description:
      "End-to-end project execution from planning and design through construction and final handover.",
    category: "TURNKEY",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    features: ["Project Management", "Complete Execution", "Timely Delivery"],
  },
  {
    id: 5,
    title: "Interior Solutions",
    slug: "interior-solutions",
    description:
      "Interior environments carefully finished to complement the architecture and purpose of every space.",
    category: "INTERIORS",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    features: ["Space Planning", "Material Selection", "Custom Finishes"],
  },
  {
    id: 6,
    title: "Renovation & Restoration",
    slug: "renovation-restoration",
    description:
      "Transforming existing spaces through considered renovation, upgrades and structural improvements.",
    category: "RENOVATION",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
    features: ["Structural Upgrades", "Facade Restoration", "Modernization"],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Consultation & Planning",
    description: "We begin with a thorough consultation to understand your vision, requirements, and project goals. Our team analyzes the site and develops a comprehensive project brief.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
  },
  {
    number: "02",
    title: "Design & Development",
    description: "Our architects and engineers collaborate to create detailed designs, structural plans, and 3D visualizations that bring your vision to life.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
  },
  {
    number: "03",
    title: "Construction Phase",
    description: "With approved designs, our construction team executes with precision, using quality materials and following strict safety and quality standards.",
    image: "https://images.unsplash.com/photo-1590725121839-892b458a74fe?w=600&q=80",
  },
  {
    number: "04",
    title: "Delivery & Handover",
    description: "After rigorous quality checks and inspections, we hand over your completed project with comprehensive documentation and post-project support.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
  },
];

const ServicesPage = () => {
  const [services, setServices] = useState(defaultServices);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      const response = await api.get("/services");
      const data = response.data?.data || response.data || [];
      if (Array.isArray(data) && data.length > 0) {
        setServices(data);
      }
    } catch (error) {
      console.log("Services API not available yet. Using defaults.");
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

  return (
    <main className="fya-services-page">
      
      {/* ==================================================
          HERO — Premium Blue/Gold
      ================================================== */}
      <section className="fya-services-hero">
        <div className="fya-hero-background">
          <img 
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80" 
            alt="Premium Construction" 
          />
          <div className="fya-hero-overlay" />
        </div>
        
        <div className="fya-container fya-services-hero-container">
          <div className="fya-hero-top-bar">
            <div className="fya-logo">
              <span className="fya-logo-white">FIYA</span>
              <span className="fya-logo-gold">BUILDERS</span>
            </div>
            <div className="fya-hero-tagline">
              <span className="fya-gold-line" />
              PREMIUM CONSTRUCTION SERVICES
            </div>
          </div>
          
          <div className="fya-services-hero-content">
            <h1 className="fya-services-hero-title">
              Crafting Spaces
              <br />
              <span className="fya-text-blue">With Precision</span>
              <br />
              <span className="fya-text-gold">& Excellence</span>
            </h1>
            <p className="fya-services-hero-subtitle">
              From initial concept to final construction, we deliver
              comprehensive building solutions with unmatched quality
              and attention to detail.
            </p>
            <div className="fya-services-hero-actions">
              <a href="#services" className="fya-btn-primary">
                EXPLORE SERVICES
                <ArrowDown size={18} />
              </a>
              <a href="/contact" className="fya-btn-outline">
                GET CONSULTATION
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          INTRO — What We Do
      ================================================== */}
      <section className="fya-services-intro">
        <div className="fya-container">
          <div className="fya-intro-grid">
            <div className="fya-intro-left">
              <div className="fya-section-label">
                <span className="fya-label-number">01</span>
                <span className="fya-label-line" />
                <span className="fya-label-text">WHAT WE DO</span>
              </div>
              <h2 className="fya-intro-heading">
                Building Beyond
                <br />
                <span className="fya-text-blue">Expectations</span>
              </h2>
            </div>
            <div className="fya-intro-right">
              <p className="fya-intro-text">
                Every project has different requirements. Our services are
                designed to give you the flexibility to work with us from
                a single discipline or through a complete turnkey solution.
              </p>
              <div className="fya-intro-features">
                <div className="fya-feature-item">
                  <span className="fya-feature-number">250+</span>
                  <span className="fya-feature-label">Projects Completed</span>
                </div>
                <div className="fya-feature-divider" />
                <div className="fya-feature-item">
                  <span className="fya-feature-number">15+</span>
                  <span className="fya-feature-label">Years of Excellence</span>
                </div>
                <div className="fya-feature-divider" />
                <div className="fya-feature-item">
                  <span className="fya-feature-number">98%</span>
                  <span className="fya-feature-label">Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SERVICES GRID — Image Cards
      ================================================== */}
      <section className="fya-services-list-section" id="services">
        <div className="fya-container">
          <div className="fya-services-section-header">
            <div className="fya-section-label">
              <span className="fya-label-number">02</span>
              <span className="fya-label-line" />
              <span className="fya-label-text">OUR EXPERTISE</span>
            </div>
            <h2 className="fya-services-heading">
              Comprehensive <span className="fya-text-gold">Solutions</span>
            </h2>
            <p className="fya-services-description">
              Our capabilities cover the complete lifecycle of a construction project,
              from initial planning to final handover.
            </p>
          </div>

          {loading ? (
            <div className="fya-services-loading">
              <div className="fya-loading-spinner" />
              <span>Loading services...</span>
            </div>
          ) : (
            <div className="fya-services-grid">
              {services.map((service, index) => (
                <article className="fya-service-card" key={service.id || index}>
                  <div className="fya-service-image">
                    <img 
                      src={service.image || getImageUrl(service.image)} 
                      alt={service.title}
                    />
                    <div className="fya-service-overlay" />
                    <span className="fya-service-category">
                      {service.category || "FIYA BUILDERS"}
                    </span>
                    <span className="fya-service-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  
                  <div className="fya-service-body">
                    <h3 className="fya-service-title">{service.title}</h3>
                    <p className="fya-service-description">
                      {service.description}
                    </p>
                    
                    {service.features && (
                      <ul className="fya-service-features">
                        {service.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    )}
                    
                    <a
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="fya-service-link"
                    >
                      <span>LEARN MORE</span>
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ==================================================
          PROCESS — How We Work
      ================================================== */}
      <section className="fya-process-section">
        <div className="fya-container">
          <div className="fya-process-header">
            <div className="fya-section-label">
              <span className="fya-label-number">03</span>
              <span className="fya-label-line" />
              <span className="fya-label-text">HOW WE WORK</span>
            </div>
            <h2 className="fya-process-heading">
              From Idea to <span className="fya-text-blue">Reality</span>
            </h2>
          </div>

          <div className="fya-process-timeline">
            {processSteps.map((step, index) => (
              <div className="fya-process-item" key={index}>
                <div className="fya-process-visual">
                  <img src={step.image} alt={step.title} />
                  <div className="fya-process-number">{step.number}</div>
                </div>
                <div className="fya-process-content">
                  <h3 className="fya-process-title">{step.title}</h3>
                  <p className="fya-process-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          CTA — Premium Gold
      ================================================== */}
      <section className="fya-services-cta">
        <div className="fya-container">
          <div className="fya-cta-wrapper">
            <div className="fya-cta-pattern" />
            <div className="fya-cta-content">
              <span className="fya-cta-label">HAVE A PROJECT IN MIND?</span>
              <h2 className="fya-cta-heading">
                Let's Build Something
                <br />
                <span className="fya-text-gold">Extraordinary Together</span>
              </h2>
              <p className="fya-cta-text">
                Partner with us for your next project and experience
                the difference of working with industry leaders.
              </p>
              <a href="/contact" className="fya-btn-gold">
                DISCUSS YOUR PROJECT
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default ServicesPage;