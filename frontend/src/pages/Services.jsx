// // // // import { useEffect, useState } from "react";
// // // // import {
// // // //   ArrowDown,
// // // //   ArrowUpRight,
// // // //   Building2,
// // // //   Home,
// // // //   Ruler,
// // // //   Hammer,
// // // //   Paintbrush,
// // // //   Wrench,
// // // // } from "lucide-react";

// // // // import api from "../services/api.js";

// // // // import "./ServicesPage.css";

// // // // const iconMap = {
// // // //   building: Building2,
// // // //   residential: Home,
// // // //   design: Ruler,
// // // //   construction: Hammer,
// // // //   interior: Paintbrush,
// // // //   renovation: Wrench,
// // // // };

// // // // const defaultServices = [
// // // //   {
// // // //     id: 1,
// // // //     title: "Residential Construction",
// // // //     slug: "residential-construction",
// // // //     description:
// // // //       "Thoughtfully planned and professionally executed homes designed around the way you live.",
// // // //     category: "RESIDENTIAL",
// // // //     icon: "residential",
// // // //   },
// // // //   {
// // // //     id: 2,
// // // //     title: "Commercial Construction",
// // // //     slug: "commercial-construction",
// // // //     description:
// // // //       "High-quality commercial spaces built with functionality, efficiency and long-term value in mind.",
// // // //     category: "COMMERCIAL",
// // // //     icon: "building",
// // // //   },
// // // //   {
// // // //     id: 3,
// // // //     title: "Architectural Design",
// // // //     slug: "architectural-design",
// // // //     description:
// // // //       "Design solutions that balance aesthetics, functionality, engineering and the character of the site.",
// // // //     category: "DESIGN",
// // // //     icon: "design",
// // // //   },
// // // //   {
// // // //     id: 4,
// // // //     title: "Turnkey Construction",
// // // //     slug: "turnkey-construction",
// // // //     description:
// // // //       "End-to-end project execution from planning and design through construction and final handover.",
// // // //     category: "TURNKEY",
// // // //     icon: "construction",
// // // //   },
// // // //   {
// // // //     id: 5,
// // // //     title: "Interior Solutions",
// // // //     slug: "interior-solutions",
// // // //     description:
// // // //       "Interior environments carefully finished to complement the architecture and purpose of every space.",
// // // //     category: "INTERIORS",
// // // //     icon: "interior",
// // // //   },
// // // //   {
// // // //     id: 6,
// // // //     title: "Renovation & Restoration",
// // // //     slug: "renovation-restoration",
// // // //     description:
// // // //       "Transforming existing spaces through considered renovation, upgrades and structural improvements.",
// // // //     category: "RENOVATION",
// // // //     icon: "renovation",
// // // //   },
// // // // ];

// // // // const ServicesPage = () => {
// // // //   const [services, setServices] =
// // // //     useState(defaultServices);

// // // //   const [loading, setLoading] =
// // // //     useState(true);

// // // //   useEffect(() => {
// // // //     loadServices();
// // // //   }, []);

// // // //   const loadServices = async () => {
// // // //     try {
// // // //       const response = await api.get(
// // // //         "/services"
// // // //       );

// // // //       const data =
// // // //         response.data?.data ||
// // // //         response.data ||
// // // //         [];

// // // //       if (
// // // //         Array.isArray(data) &&
// // // //         data.length > 0
// // // //       ) {
// // // //         setServices(data);
// // // //       }
// // // //     } catch (error) {
// // // //       console.log(
// // // //         "Services API not available yet. Using defaults."
// // // //       );
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <main className="fiya-services-page">

// // // //       {/* ==================================================
// // // //           HERO
// // // //       ================================================== */}

// // // //       <section className="fiya-services-hero">

// // // //         <div className="public-container">

// // // //           <div className="fiya-services-label">

// // // //             <span>
// // // //               01
// // // //             </span>

// // // //             <span>
// // // //               OUR SERVICES
// // // //             </span>

// // // //             <span className="fiya-services-line" />

// // // //           </div>


// // // //           <div className="fiya-services-hero-content">

// // // //             <h1>
// // // //               Spaces
// // // //               <br />
// // // //               <span>built</span>
// // // //               <br />
// // // //               with intent.
// // // //             </h1>

// // // //             <div className="fiya-services-hero-copy">

// // // //               <p>
// // // //                 From the first drawing to the
// // // //                 final finish, we bring together
// // // //                 design, engineering and
// // // //                 construction under one direction.
// // // //               </p>

// // // //               <div className="fiya-services-scroll">

// // // //                 <ArrowDown
// // // //                   size={16}
// // // //                   strokeWidth={1.4}
// // // //                 />

// // // //                 <span>
// // // //                   EXPLORE SERVICES
// // // //                 </span>

// // // //               </div>

// // // //             </div>

// // // //           </div>

// // // //         </div>

// // // //       </section>


// // // //       {/* ==================================================
// // // //           INTRO
// // // //       ================================================== */}

// // // //       <section className="fiya-services-intro">

// // // //         <div className="public-container">

// // // //           <div className="fiya-services-intro-grid">

// // // //             <span className="fiya-services-intro-number">
// // // //               02
// // // //             </span>

// // // //             <div>

// // // //               <span className="fiya-services-overline">
// // // //                 WHAT WE DO
// // // //               </span>

// // // //               <h2>
// // // //                 One team.
// // // //                 <br />
// // // //                 Multiple
// // // //                 <br />
// // // //                 <em>possibilities.</em>
// // // //               </h2>

// // // //               <p>
// // // //                 Every project has different
// // // //                 requirements. Our services are
// // // //                 designed to give you the flexibility
// // // //                 to work with us from a single
// // // //                 discipline or through a complete
// // // //                 turnkey solution.
// // // //               </p>

// // // //             </div>

// // // //           </div>

// // // //         </div>

// // // //       </section>


// // // //       {/* ==================================================
// // // //           SERVICES LIST
// // // //       ================================================== */}

// // // //       <section className="fiya-services-list-section">

// // // //         <div className="public-container">

// // // //           <div className="fiya-services-section-header">

// // // //             <div className="fiya-services-label">

// // // //               <span>
// // // //                 03
// // // //               </span>

// // // //               <span>
// // // //                 EXPERTISE
// // // //               </span>

// // // //               <span className="fiya-services-line" />

// // // //             </div>

// // // //             <p>
// // // //               Our capabilities cover the complete
// // // //               lifecycle of a construction project.
// // // //             </p>

// // // //           </div>


// // // //           <div className="fiya-services-list">

// // // //             {loading ? (
// // // //               <div className="fiya-services-loading">
// // // //                 Loading services...
// // // //               </div>
// // // //             ) : (
// // // //               services.map(
// // // //                 (service, index) => {

// // // //                   const Icon =
// // // //                     iconMap[
// // // //                       service.icon
// // // //                     ] || Building2;

// // // //                   return (
// // // //                     <article
// // // //                       className="fiya-service-item"
// // // //                       key={
// // // //                         service.id ||
// // // //                         index
// // // //                       }
// // // //                     >

// // // //                       <div className="fiya-service-number">
// // // //                         {String(
// // // //                           index + 1
// // // //                         ).padStart(2, "0")}
// // // //                       </div>


// // // //                       <div className="fiya-service-icon">

// // // //                         <Icon
// // // //                           size={28}
// // // //                           strokeWidth={1.3}
// // // //                         />

// // // //                       </div>


// // // //                       <div className="fiya-service-content">

// // // //                         <span>
// // // //                           {service.category ||
// // // //                             "FIYA BUILDERS"}
// // // //                         </span>

// // // //                         <h3>
// // // //                           {service.title}
// // // //                         </h3>

// // // //                         <p>
// // // //                           {service.description}
// // // //                         </p>

// // // //                       </div>


// // // //                       <a
// // // //                         href={`/contact?service=${encodeURIComponent(
// // // //                           service.title
// // // //                         )}`}
// // // //                         className="fiya-service-action"
// // // //                         aria-label={`Enquire about ${service.title}`}
// // // //                       >

// // // //                         <ArrowUpRight
// // // //                           size={20}
// // // //                           strokeWidth={1.5}
// // // //                         />

// // // //                       </a>

// // // //                     </article>
// // // //                   );
// // // //                 }
// // // //               )
// // // //             )}

// // // //           </div>

// // // //         </div>

// // // //       </section>


// // // //       {/* ==================================================
// // // //           PROCESS STRIP
// // // //       ================================================== */}

// // // //       <section className="fiya-services-process">

// // // //         <div className="public-container">

// // // //           <div className="fiya-services-process-grid">

// // // //             <div>

// // // //               <span>
// // // //                 HOW WE WORK
// // // //               </span>

// // // //               <h2>
// // // //                 From idea
// // // //                 <br />
// // // //                 to <em>reality.</em>
// // // //               </h2>

// // // //             </div>


// // // //             <div className="fiya-services-process-steps">

// // // //               <div>
// // // //                 <strong>
// // // //                   01
// // // //                 </strong>

// // // //                 <span>
// // // //                   CONSULT
// // // //                 </span>
// // // //               </div>

// // // //               <div>
// // // //                 <strong>
// // // //                   02
// // // //                 </strong>

// // // //                 <span>
// // // //                   DESIGN
// // // //                 </span>
// // // //               </div>

// // // //               <div>
// // // //                 <strong>
// // // //                   03
// // // //                 </strong>

// // // //                 <span>
// // // //                   BUILD
// // // //                 </span>
// // // //               </div>

// // // //               <div>
// // // //                 <strong>
// // // //                   04
// // // //                 </strong>

// // // //                 <span>
// // // //                   HANDOVER
// // // //                 </span>
// // // //               </div>

// // // //             </div>

// // // //           </div>

// // // //         </div>

// // // //       </section>


// // // //       {/* ==================================================
// // // //           CTA
// // // //       ================================================== */}

// // // //       <section className="fiya-services-cta">

// // // //         <div className="public-container">

// // // //           <div className="fiya-services-cta-inner">

// // // //             <div>

// // // //               <span>
// // // //                 HAVE A PROJECT IN MIND?
// // // //               </span>

// // // //               <h2>
// // // //                 Let's build
// // // //                 <br />
// // // //                 it <em>together.</em>
// // // //               </h2>

// // // //             </div>


// // // //             <a href="/contact">

// // // //               <span>
// // // //                 Discuss Your Project
// // // //               </span>

// // // //               <span>
// // // //                 <ArrowUpRight
// // // //                   size={20}
// // // //                   strokeWidth={1.5}
// // // //                 />
// // // //               </span>

// // // //             </a>

// // // //           </div>

// // // //         </div>

// // // //       </section>

// // // //     </main>
// // // //   );
// // // // };

// // // // export default ServicesPage;



// // // import { useEffect, useState } from "react";
// // // import {
// // //   ArrowDown,
// // //   ArrowUpRight,
// // //   Building2,
// // //   Home,
// // //   Ruler,
// // //   Hammer,
// // //   Paintbrush,
// // //   Wrench,
// // //   CheckCircle2,
// // //   Clock,
// // //   Shield,
// // //   Sparkles,
// // // } from "lucide-react";

// // // import api from "../services/api.js";

// // // import "./ServicesPage.css";

// // // const iconMap = {
// // //   building: Building2,
// // //   residential: Home,
// // //   design: Ruler,
// // //   construction: Hammer,
// // //   interior: Paintbrush,
// // //   renovation: Wrench,
// // // };

// // // const defaultServices = [
// // //   {
// // //     id: 1,
// // //     title: "Residential Construction",
// // //     slug: "residential-construction",
// // //     description:
// // //       "Thoughtfully planned and professionally executed homes designed around the way you live.",
// // //     category: "RESIDENTIAL",
// // //     icon: "residential",
// // //   },
// // //   {
// // //     id: 2,
// // //     title: "Commercial Construction",
// // //     slug: "commercial-construction",
// // //     description:
// // //       "High-quality commercial spaces built with functionality, efficiency and long-term value in mind.",
// // //     category: "COMMERCIAL",
// // //     icon: "building",
// // //   },
// // //   {
// // //     id: 3,
// // //     title: "Architectural Design",
// // //     slug: "architectural-design",
// // //     description:
// // //       "Design solutions that balance aesthetics, functionality, engineering and the character of the site.",
// // //     category: "DESIGN",
// // //     icon: "design",
// // //   },
// // //   {
// // //     id: 4,
// // //     title: "Turnkey Construction",
// // //     slug: "turnkey-construction",
// // //     description:
// // //       "End-to-end project execution from planning and design through construction and final handover.",
// // //     category: "TURNKEY",
// // //     icon: "construction",
// // //   },
// // //   {
// // //     id: 5,
// // //     title: "Interior Solutions",
// // //     slug: "interior-solutions",
// // //     description:
// // //       "Interior environments carefully finished to complement the architecture and purpose of every space.",
// // //     category: "INTERIORS",
// // //     icon: "interior",
// // //   },
// // //   {
// // //     id: 6,
// // //     title: "Renovation & Restoration",
// // //     slug: "renovation-restoration",
// // //     description:
// // //       "Transforming existing spaces through considered renovation, upgrades and structural improvements.",
// // //     category: "RENOVATION",
// // //     icon: "renovation",
// // //   },
// // // ];

// // // const processSteps = [
// // //   {
// // //     number: "01",
// // //     title: "Consultation",
// // //     description: "Understanding your vision, requirements, and project goals.",
// // //     icon: Clock,
// // //   },
// // //   {
// // //     number: "02",
// // //     title: "Design & Planning",
// // //     description: "Creating detailed plans and architectural solutions.",
// // //     icon: Ruler,
// // //   },
// // //   {
// // //     number: "03",
// // //     title: "Construction",
// // //     description: "Executing with precision, quality materials, and expertise.",
// // //     icon: Hammer,
// // //   },
// // //   {
// // //     number: "04",
// // //     title: "Delivery",
// // //     description: "Final inspection, handover, and post-project support.",
// // //     icon: CheckCircle2,
// // //   },
// // // ];

// // // const ServicesPage = () => {
// // //   const [services, setServices] = useState(defaultServices);
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     loadServices();
// // //   }, []);

// // //   const loadServices = async () => {
// // //     try {
// // //       const response = await api.get("/services");
// // //       const data = response.data?.data || response.data || [];
// // //       if (Array.isArray(data) && data.length > 0) {
// // //         setServices(data);
// // //       }
// // //     } catch (error) {
// // //       console.log("Services API not available yet. Using defaults.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <main className="fya-services-page">
      
// // //       {/* ==================================================
// // //           HERO — Premium Blue/Gold
// // //       ================================================== */}
// // //       <section className="fya-services-hero">
// // //         <div className="fya-hero-pattern" />
// // //         <div className="fya-container fya-services-hero-container">
// // //           <div className="fya-hero-badge">
// // //             <Sparkles size={16} />
// // //             <span>PREMIUM CONSTRUCTION SERVICES</span>
// // //           </div>
          
// // //           <div className="fya-services-hero-grid">
// // //             <div className="fya-services-hero-content">
// // //               <h1 className="fya-services-hero-title">
// // //                 BUILDING
// // //                 <span className="fya-text-blue"> SPACES</span>
// // //                 <br />
// // //                 WITH <span className="fya-text-gold">EXCELLENCE</span>
// // //               </h1>
// // //               <p className="fya-services-hero-subtitle">
// // //                 From initial concept to final construction, we deliver
// // //                 comprehensive building solutions with unmatched quality
// // //                 and precision.
// // //               </p>
// // //               <div className="fya-services-hero-actions">
// // //                 <a href="#services" className="fya-btn-primary">
// // //                   EXPLORE SERVICES
// // //                   <ArrowDown size={18} />
// // //                 </a>
// // //                 <a href="/contact" className="fya-btn-secondary">
// // //                   FREE CONSULTATION
// // //                 </a>
// // //               </div>
// // //             </div>
            
// // //             <div className="fya-services-hero-stats">
// // //               <div className="fya-hero-stat-card">
// // //                 <span className="fya-stat-number">250+</span>
// // //                 <span className="fya-stat-label">Projects Done</span>
// // //               </div>
// // //               <div className="fya-hero-stat-card">
// // //                 <span className="fya-stat-number">15+</span>
// // //                 <span className="fya-stat-label">Years Experience</span>
// // //               </div>
// // //               <div className="fya-hero-stat-card">
// // //                 <span className="fya-stat-number">98%</span>
// // //                 <span className="fya-stat-label">Client Satisfaction</span>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ==================================================
// // //           INTRO — What We Do
// // //       ================================================== */}
// // //       <section className="fya-services-intro">
// // //         <div className="fya-container">
// // //           <div className="fya-intro-wrapper">
// // //             <div className="fya-section-label">
// // //               <span className="fya-label-number">01</span>
// // //               <span className="fya-label-line" />
// // //               <span className="fya-label-text">WHAT WE DO</span>
// // //             </div>
// // //             <div className="fya-intro-grid">
// // //               <h2 className="fya-intro-heading">
// // //                 ONE TEAM.
// // //                 <br />
// // //                 MULTIPLE
// // //                 <br />
// // //                 <span className="fya-text-blue">POSSIBILITIES.</span>
// // //               </h2>
// // //               <div className="fya-intro-content">
// // //                 <p className="fya-intro-text">
// // //                   Every project has different requirements. Our services are
// // //                   designed to give you the flexibility to work with us from
// // //                   a single discipline or through a complete turnkey solution.
// // //                 </p>
// // //                 <div className="fya-intro-features">
// // //                   <div className="fya-feature-item">
// // //                     <Shield size={20} />
// // //                     <span>Quality Assured</span>
// // //                   </div>
// // //                   <div className="fya-feature-item">
// // //                     <Clock size={20} />
// // //                     <span>On-Time Delivery</span>
// // //                   </div>
// // //                   <div className="fya-feature-item">
// // //                     <CheckCircle2 size={20} />
// // //                     <span>Certified Experts</span>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ==================================================
// // //           SERVICES LIST — Premium Cards
// // //       ================================================== */}
// // //       <section className="fya-services-list-section" id="services">
// // //         <div className="fya-container">
// // //           <div className="fya-services-section-header">
// // //             <div className="fya-section-label">
// // //               <span className="fya-label-number">02</span>
// // //               <span className="fya-label-line" />
// // //               <span className="fya-label-text">OUR EXPERTISE</span>
// // //             </div>
// // //             <h2 className="fya-services-heading">
// // //               COMPREHENSIVE <span className="fya-text-gold">SOLUTIONS</span>
// // //             </h2>
// // //             <p className="fya-services-description">
// // //               Our capabilities cover the complete lifecycle of a construction project,
// // //               from initial planning to final handover.
// // //             </p>
// // //           </div>

// // //           {loading ? (
// // //             <div className="fya-services-loading">
// // //               <div className="fya-loading-spinner" />
// // //               <span>Loading services...</span>
// // //             </div>
// // //           ) : (
// // //             <div className="fya-services-grid">
// // //               {services.map((service, index) => {
// // //                 const Icon = iconMap[service.icon] || Building2;
// // //                 return (
// // //                   <article className="fya-service-card" key={service.id || index}>
// // //                     <div className="fya-service-card-header">
// // //                       <div className="fya-service-icon">
// // //                         <Icon size={32} strokeWidth={1.5} />
// // //                       </div>
// // //                       <span className="fya-service-number">
// // //                         {String(index + 1).padStart(2, "0")}
// // //                       </span>
// // //                     </div>
                    
// // //                     <div className="fya-service-content">
// // //                       <span className="fya-service-category">
// // //                         {service.category || "FIYA BUILDERS"}
// // //                       </span>
// // //                       <h3 className="fya-service-title">{service.title}</h3>
// // //                       <p className="fya-service-description">
// // //                         {service.description}
// // //                       </p>
// // //                     </div>
                    
// // //                     <a
// // //                       href={`/contact?service=${encodeURIComponent(service.title)}`}
// // //                       className="fya-service-link"
// // //                       aria-label={`Enquire about ${service.title}`}
// // //                     >
// // //                       <span>LEARN MORE</span>
// // //                       <ArrowUpRight size={18} />
// // //                     </a>
// // //                   </article>
// // //                 );
// // //               })}
// // //             </div>
// // //           )}
// // //         </div>
// // //       </section>

// // //       {/* ==================================================
// // //           PROCESS — How We Work
// // //       ================================================== */}
// // //       <section className="fya-process-section">
// // //         <div className="fya-container">
// // //           <div className="fya-process-header">
// // //             <div className="fya-section-label">
// // //               <span className="fya-label-number">03</span>
// // //               <span className="fya-label-line" />
// // //               <span className="fya-label-text">HOW WE WORK</span>
// // //             </div>
// // //             <h2 className="fya-process-heading">
// // //               FROM IDEA TO <span className="fya-text-blue">REALITY</span>
// // //             </h2>
// // //           </div>

// // //           <div className="fya-process-grid">
// // //             {processSteps.map((step, index) => (
// // //               <div className="fya-process-card" key={index}>
// // //                 <div className="fya-process-number">
// // //                   {step.number}
// // //                 </div>
// // //                 <step.icon size={32} className="fya-process-icon" />
// // //                 <h3 className="fya-process-title">{step.title}</h3>
// // //                 <p className="fya-process-description">{step.description}</p>
// // //                 {index < processSteps.length - 1 && (
// // //                   <div className="fya-process-arrow">
// // //                     <ArrowUpRight size={20} />
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ==================================================
// // //           CTA — Premium Gold
// // //       ================================================== */}
// // //       <section className="fya-services-cta">
// // //         <div className="fya-container">
// // //           <div className="fya-cta-wrapper">
// // //             <div className="fya-cta-pattern" />
// // //             <div className="fya-cta-content">
// // //               <span className="fya-cta-label">HAVE A PROJECT IN MIND?</span>
// // //               <h2 className="fya-cta-heading">
// // //                 LET'S BUILD IT <span className="fya-text-gold">TOGETHER</span>
// // //               </h2>
// // //               <p className="fya-cta-text">
// // //                 Partner with us for your next project and experience
// // //                 the difference of working with industry leaders.
// // //               </p>
// // //               <a href="/contact" className="fya-btn-gold">
// // //                 DISCUSS YOUR PROJECT
// // //                 <ArrowUpRight size={20} />
// // //               </a>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //     </main>
// // //   );
// // // };

// // // export default ServicesPage;


// // // import { useEffect, useState } from "react";
// // // import { ArrowDown, ArrowUpRight } from "lucide-react";

// // // import api from "../services/api.js";

// // // import "./ServicesPage.css";

// // // const API_URL =
// // //   import.meta.env.VITE_API_URL?.replace(
// // //     "/api",
// // //     ""
// // //   ) || "http://localhost:5041";

// // // const defaultServices = [
// // //   {
// // //     id: 1,
// // //     title: "Residential Construction",
// // //     slug: "residential-construction",
// // //     description:
// // //       "Thoughtfully planned and professionally executed homes designed around the way you live.",
// // //     category: "RESIDENTIAL",
// // //     image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
// // //     features: ["Custom Homes", "Villa Projects", "Apartment Complexes"],
// // //   },
// // //   {
// // //     id: 2,
// // //     title: "Commercial Construction",
// // //     slug: "commercial-construction",
// // //     description:
// // //       "High-quality commercial spaces built with functionality, efficiency and long-term value in mind.",
// // //     category: "COMMERCIAL",
// // //     image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
// // //     features: ["Office Buildings", "Retail Spaces", "Corporate Campuses"],
// // //   },
// // //   {
// // //     id: 3,
// // //     title: "Architectural Design",
// // //     slug: "architectural-design",
// // //     description:
// // //       "Design solutions that balance aesthetics, functionality, engineering and the character of the site.",
// // //     category: "DESIGN",
// // //     image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
// // //     features: ["Concept Design", "3D Visualization", "Structural Planning"],
// // //   },
// // //   {
// // //     id: 4,
// // //     title: "Turnkey Construction",
// // //     slug: "turnkey-construction",
// // //     description:
// // //       "End-to-end project execution from planning and design through construction and final handover.",
// // //     category: "TURNKEY",
// // //     image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
// // //     features: ["Project Management", "Complete Execution", "Timely Delivery"],
// // //   },
// // //   {
// // //     id: 5,
// // //     title: "Interior Solutions",
// // //     slug: "interior-solutions",
// // //     description:
// // //       "Interior environments carefully finished to complement the architecture and purpose of every space.",
// // //     category: "INTERIORS",
// // //     image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
// // //     features: ["Space Planning", "Material Selection", "Custom Finishes"],
// // //   },
// // //   {
// // //     id: 6,
// // //     title: "Renovation & Restoration",
// // //     slug: "renovation-restoration",
// // //     description:
// // //       "Transforming existing spaces through considered renovation, upgrades and structural improvements.",
// // //     category: "RENOVATION",
// // //     image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
// // //     features: ["Structural Upgrades", "Facade Restoration", "Modernization"],
// // //   },
// // // ];

// // // const processSteps = [
// // //   {
// // //     number: "01",
// // //     title: "Consultation & Planning",
// // //     description: "We begin with a thorough consultation to understand your vision, requirements, and project goals. Our team analyzes the site and develops a comprehensive project brief.",
// // //     image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
// // //   },
// // //   {
// // //     number: "02",
// // //     title: "Design & Development",
// // //     description: "Our architects and engineers collaborate to create detailed designs, structural plans, and 3D visualizations that bring your vision to life.",
// // //     image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
// // //   },
// // //   {
// // //     number: "03",
// // //     title: "Construction Phase",
// // //     description: "With approved designs, our construction team executes with precision, using quality materials and following strict safety and quality standards.",
// // //     image: "https://images.unsplash.com/photo-1590725121839-892b458a74fe?w=600&q=80",
// // //   },
// // //   {
// // //     number: "04",
// // //     title: "Delivery & Handover",
// // //     description: "After rigorous quality checks and inspections, we hand over your completed project with comprehensive documentation and post-project support.",
// // //     image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
// // //   },
// // // ];

// // // const ServicesPage = () => {
// // //   const [services, setServices] = useState(defaultServices);
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     loadServices();
// // //   }, []);

// // //   const loadServices = async () => {
// // //     try {
// // //       const response = await api.get("/services");
// // //       const data = response.data?.data || response.data || [];
// // //       if (Array.isArray(data) && data.length > 0) {
// // //         setServices(data);
// // //       }
// // //     } catch (error) {
// // //       console.log("Services API not available yet. Using defaults.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const getImageUrl = (image) => {
// // //     if (!image) return "";
// // //     if (image.startsWith("http://") || image.startsWith("https://")) {
// // //       return image;
// // //     }
// // //     return `${API_URL}${image}`;
// // //   };

// // //   return (
// // //     <main className="fya-services-page">
      
// // //       {/* ==================================================
// // //           HERO — Premium Blue/Gold
// // //       ================================================== */}
// // //       <section className="fya-services-hero">
// // //         <div className="fya-hero-background">
// // //           <img 
// // //             src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80" 
// // //             alt="Premium Construction" 
// // //           />
// // //           <div className="fya-hero-overlay" />
// // //         </div>
        
// // //         <div className="fya-container fya-services-hero-container">
// // //           <div className="fya-hero-top-bar">
// // //             <div className="fya-logo">
// // //               <span className="fya-logo-white">FIYA</span>
// // //               <span className="fya-logo-gold">BUILDERS</span>
// // //             </div>
// // //             <div className="fya-hero-tagline">
// // //               <span className="fya-gold-line" />
// // //               PREMIUM CONSTRUCTION SERVICES
// // //             </div>
// // //           </div>
          
// // //           <div className="fya-services-hero-content">
// // //             <h1 className="fya-services-hero-title">
// // //               Crafting Spaces
// // //               <br />
// // //               <span className="fya-text-blue">With Precision</span>
// // //               <br />
// // //               <span className="fya-text-gold">& Excellence</span>
// // //             </h1>
// // //             <p className="fya-services-hero-subtitle">
// // //               From initial concept to final construction, we deliver
// // //               comprehensive building solutions with unmatched quality
// // //               and attention to detail.
// // //             </p>
// // //             <div className="fya-services-hero-actions">
// // //               <a href="#services" className="fya-btn-primary">
// // //                 EXPLORE SERVICES
// // //                 <ArrowDown size={18} />
// // //               </a>
// // //               <a href="/contact" className="fya-btn-outline">
// // //                 GET CONSULTATION
// // //               </a>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ==================================================
// // //           INTRO — What We Do
// // //       ================================================== */}
// // //       <section className="fya-services-intro">
// // //         <div className="fya-container">
// // //           <div className="fya-intro-grid">
// // //             <div className="fya-intro-left">
// // //               <div className="fya-section-label">
// // //                 <span className="fya-label-number">01</span>
// // //                 <span className="fya-label-line" />
// // //                 <span className="fya-label-text">WHAT WE DO</span>
// // //               </div>
// // //               <h2 className="fya-intro-heading">
// // //                 Building Beyond
// // //                 <br />
// // //                 <span className="fya-text-blue">Expectations</span>
// // //               </h2>
// // //             </div>
// // //             <div className="fya-intro-right">
// // //               <p className="fya-intro-text">
// // //                 Every project has different requirements. Our services are
// // //                 designed to give you the flexibility to work with us from
// // //                 a single discipline or through a complete turnkey solution.
// // //               </p>
// // //               <div className="fya-intro-features">
// // //                 <div className="fya-feature-item">
// // //                   <span className="fya-feature-number">250+</span>
// // //                   <span className="fya-feature-label">Projects Completed</span>
// // //                 </div>
// // //                 <div className="fya-feature-divider" />
// // //                 <div className="fya-feature-item">
// // //                   <span className="fya-feature-number">15+</span>
// // //                   <span className="fya-feature-label">Years of Excellence</span>
// // //                 </div>
// // //                 <div className="fya-feature-divider" />
// // //                 <div className="fya-feature-item">
// // //                   <span className="fya-feature-number">98%</span>
// // //                   <span className="fya-feature-label">Client Satisfaction</span>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ==================================================
// // //           SERVICES GRID — Image Cards
// // //       ================================================== */}
// // //       <section className="fya-services-list-section" id="services">
// // //         <div className="fya-container">
// // //           <div className="fya-services-section-header">
// // //             <div className="fya-section-label">
// // //               <span className="fya-label-number">02</span>
// // //               <span className="fya-label-line" />
// // //               <span className="fya-label-text">OUR EXPERTISE</span>
// // //             </div>
// // //             <h2 className="fya-services-heading">
// // //               Comprehensive <span className="fya-text-gold">Solutions</span>
// // //             </h2>
// // //             <p className="fya-services-description">
// // //               Our capabilities cover the complete lifecycle of a construction project,
// // //               from initial planning to final handover.
// // //             </p>
// // //           </div>

// // //           {loading ? (
// // //             <div className="fya-services-loading">
// // //               <div className="fya-loading-spinner" />
// // //               <span>Loading services...</span>
// // //             </div>
// // //           ) : (
// // //             <div className="fya-services-grid">
// // //               {services.map((service, index) => (
// // //                 <article className="fya-service-card" key={service.id || index}>
// // //                   <div className="fya-service-image">
// // //                     <img 
// // //                       src={service.image || getImageUrl(service.image)} 
// // //                       alt={service.title}
// // //                     />
// // //                     <div className="fya-service-overlay" />
// // //                     <span className="fya-service-category">
// // //                       {service.category || "FIYA BUILDERS"}
// // //                     </span>
// // //                     <span className="fya-service-number">
// // //                       {String(index + 1).padStart(2, "0")}
// // //                     </span>
// // //                   </div>
                  
// // //                   <div className="fya-service-body">
// // //                     <h3 className="fya-service-title">{service.title}</h3>
// // //                     <p className="fya-service-description">
// // //                       {service.description}
// // //                     </p>
                    
// // //                     {service.features && (
// // //                       <ul className="fya-service-features">
// // //                         {service.features.map((feature, idx) => (
// // //                           <li key={idx}>{feature}</li>
// // //                         ))}
// // //                       </ul>
// // //                     )}
                    
// // //                     <a
// // //                       href={`/contact?service=${encodeURIComponent(service.title)}`}
// // //                       className="fya-service-link"
// // //                     >
// // //                       <span>LEARN MORE</span>
// // //                       <ArrowUpRight size={18} />
// // //                     </a>
// // //                   </div>
// // //                 </article>
// // //               ))}
// // //             </div>
// // //           )}
// // //         </div>
// // //       </section>

// // //       {/* ==================================================
// // //           PROCESS — How We Work
// // //       ================================================== */}
// // //       <section className="fya-process-section">
// // //         <div className="fya-container">
// // //           <div className="fya-process-header">
// // //             <div className="fya-section-label">
// // //               <span className="fya-label-number">03</span>
// // //               <span className="fya-label-line" />
// // //               <span className="fya-label-text">HOW WE WORK</span>
// // //             </div>
// // //             <h2 className="fya-process-heading">
// // //               From Idea to <span className="fya-text-blue">Reality</span>
// // //             </h2>
// // //           </div>

// // //           <div className="fya-process-timeline">
// // //             {processSteps.map((step, index) => (
// // //               <div className="fya-process-item" key={index}>
// // //                 <div className="fya-process-visual">
// // //                   <img src={step.image} alt={step.title} />
// // //                   <div className="fya-process-number">{step.number}</div>
// // //                 </div>
// // //                 <div className="fya-process-content">
// // //                   <h3 className="fya-process-title">{step.title}</h3>
// // //                   <p className="fya-process-description">{step.description}</p>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ==================================================
// // //           CTA — Premium Gold
// // //       ================================================== */}
// // //       <section className="fya-services-cta">
// // //         <div className="fya-container">
// // //           <div className="fya-cta-wrapper">
// // //             <div className="fya-cta-pattern" />
// // //             <div className="fya-cta-content">
// // //               <span className="fya-cta-label">HAVE A PROJECT IN MIND?</span>
// // //               <h2 className="fya-cta-heading">
// // //                 Let's Build Something
// // //                 <br />
// // //                 <span className="fya-text-gold">Extraordinary Together</span>
// // //               </h2>
// // //               <p className="fya-cta-text">
// // //                 Partner with us for your next project and experience
// // //                 the difference of working with industry leaders.
// // //               </p>
// // //               <a href="/contact" className="fya-btn-gold">
// // //                 DISCUSS YOUR PROJECT
// // //                 <ArrowUpRight size={18} />
// // //               </a>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //     </main>
// // //   );
// // // };

// // // export default ServicesPage;









// // // // src/pages/Services/ServicesPage.jsx
// // // import { useEffect, useState } from "react";
// // // import { ArrowDown, ArrowUpRight, CheckCircle, Building2, Award, Users, Target, Clock, Shield, Star, ChevronRight } from "lucide-react";
// // // import api from "../services/api.js";
// // // import "./ServicesPage.css";

// // // const API_URL = import.meta.env.VITE_API_URL?.replace("/api", "") || "http://localhost:5041";

// // // const defaultServices = [
// // //   {
// // //     id: 1,
// // //     title: "Residential Construction",
// // //     slug: "residential-construction",
// // //     description: "Thoughtfully planned and professionally executed homes designed around the way you live.",
// // //     category: "RESIDENTIAL",
// // //     image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
// // //     features: ["Custom Homes", "Villa Projects", "Apartment Complexes"],
// // //   },
// // //   {
// // //     id: 2,
// // //     title: "Commercial Construction",
// // //     slug: "commercial-construction",
// // //     description: "High-quality commercial spaces built with functionality, efficiency and long-term value.",
// // //     category: "COMMERCIAL",
// // //     image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
// // //     features: ["Office Buildings", "Retail Spaces", "Corporate Campuses"],
// // //   },
// // //   {
// // //     id: 3,
// // //     title: "Architectural Design",
// // //     slug: "architectural-design",
// // //     description: "Design solutions that balance aesthetics, functionality and engineering.",
// // //     category: "DESIGN",
// // //     image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
// // //     features: ["Concept Design", "3D Visualization", "Structural Planning"],
// // //   },
// // //   {
// // //     id: 4,
// // //     title: "Turnkey Construction",
// // //     slug: "turnkey-construction",
// // //     description: "End-to-end project execution from planning through construction and final handover.",
// // //     category: "TURNKEY",
// // //     image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
// // //     features: ["Project Management", "Complete Execution", "Timely Delivery"],
// // //   },
// // //   {
// // //     id: 5,
// // //     title: "Interior Solutions",
// // //     slug: "interior-solutions",
// // //     description: "Interior environments carefully finished to complement the architecture and purpose of every space.",
// // //     category: "INTERIORS",
// // //     image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
// // //     features: ["Space Planning", "Material Selection", "Custom Finishes"],
// // //   },
// // //   {
// // //     id: 6,
// // //     title: "Renovation & Restoration",
// // //     slug: "renovation-restoration",
// // //     description: "Transforming existing spaces through considered renovation and structural improvements.",
// // //     category: "RENOVATION",
// // //     image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
// // //     features: ["Structural Upgrades", "Facade Restoration", "Modernization"],
// // //   },
// // // ];

// // // const processSteps = [
// // //   {
// // //     number: "01",
// // //     title: "Consultation & Planning",
// // //     description: "We begin with a thorough consultation to understand your vision, requirements, and project goals.",
// // //     image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
// // //   },
// // //   {
// // //     number: "02",
// // //     title: "Design & Development",
// // //     description: "Our architects and engineers collaborate to create detailed designs and structural plans.",
// // //     image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
// // //   },
// // //   {
// // //     number: "03",
// // //     title: "Construction Phase",
// // //     description: "With approved designs, our construction team executes with precision and quality.",
// // //     image: "https://images.unsplash.com/photo-1590725121839-892b458a74fe?w=600&q=80",
// // //   },
// // //   {
// // //     number: "04",
// // //     title: "Delivery & Handover",
// // //     description: "After rigorous quality checks, we hand over your completed project with full support.",
// // //     image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
// // //   },
// // // ];

// // // const stats = [
// // //   { value: "250+", label: "Projects Completed", icon: Building2 },
// // //   { value: "15+", label: "Years Excellence", icon: Award },
// // //   { value: "98%", label: "Client Satisfaction", icon: Star },
// // //   { value: "150+", label: "Expert Team", icon: Users },
// // // ];

// // // const ServicesPage = () => {
// // //   const [services, setServices] = useState(defaultServices);
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     loadServices();
// // //   }, []);

// // //   const loadServices = async () => {
// // //     try {
// // //       const response = await api.get("/services");
// // //       const data = response.data?.data || response.data || [];
// // //       if (Array.isArray(data) && data.length > 0) {
// // //         setServices(data);
// // //       }
// // //     } catch (error) {
// // //       console.log("Services API not available yet. Using defaults.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const getImageUrl = (image) => {
// // //     if (!image) return "";
// // //     if (image.startsWith("http://") || image.startsWith("https://")) {
// // //       return image;
// // //     }
// // //     return `${API_URL}${image}`;
// // //   };

// // //   return (
// // //     <main className="fya-services">

// // //       {/* ==================================================
// // //           HERO — Same as About Page
// // //       ================================================== */}
// // //       <section className="fya-services__hero">
// // //         <div className="fya-services__hero-bg">
// // //           <img
// // //             src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80"
// // //             alt="Premium Construction"
// // //             className="fya-services__hero-image"
// // //           />
// // //           <div className="fya-services__hero-gradient" />
// // //           <div className="fya-services__hero-overlay-text">
// // //             {["E","X","C","E","L","L","E","N","C","E"].map((letter, i) => (
// // //               <span key={i} className="fya-services__hero-overlay-letter">{letter}</span>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         <div className="fya-services__hero-container">
// // //           <div className="fya-services__hero-top">
// // //             <div className="fya-services__hero-label">
// // //               <span className="fya-services__hero-number">01</span>
// // //               <span className="fya-services__hero-label-text">OUR SERVICES</span>
// // //               <span className="fya-services__hero-line" />
// // //             </div>
// // //           </div>

// // //           <div className="fya-services__hero-main">
// // //             <h1 className="fya-services__hero-title">
// // //               Crafting Spaces
// // //               <br />
// // //               <span className="fya-services__hero-highlight">With Precision</span>
// // //               <br />
// // //               <span className="fya-services__hero-highlight-gold">& Excellence</span>
// // //             </h1>
// // //             <p className="fya-services__hero-subtitle">
// // //               From initial concept to final construction, we deliver
// // //               comprehensive building solutions with unmatched quality
// // //               and attention to detail.
// // //             </p>
// // //             <div className="fya-services__hero-actions">
// // //               <a href="#services" className="fya-services__hero-btn fya-services__hero-btn--primary">
// // //                 Explore Our Work
// // //                 <ArrowDown size={18} />
// // //               </a>
// // //               <a href="/contact" className="fya-services__hero-btn fya-services__hero-btn--secondary">
// // //                 Get Consultation
// // //               </a>
// // //             </div>
// // //           </div>

// // //           <div className="fya-services__hero-bottom">
// // //             <div className="fya-services__hero-scroll">
// // //               <ArrowDown size={16} strokeWidth={1.5} />
// // //               <span>SCROLL TO EXPLORE</span>
// // //             </div>
// // //             <div className="fya-services__hero-counter">
// // //               <span className="fya-services__counter-current">01</span>
// // //               <span className="fya-services__counter-line" />
// // //               <span className="fya-services__counter-total">04</span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ==================================================
// // //           INTRO — Same as About Page
// // //       ================================================== */}
// // //       <section className="fya-services__intro">
// // //         <div className="fya-services__container">
// // //           <div className="fya-services__intro-grid">
// // //             <div className="fya-services__intro-left">
// // //               <span className="fya-services__intro-number">01</span>
// // //               <h2 className="fya-services__intro-title">
// // //                 Building Beyond
// // //                 <br />
// // //                 <span className="fya-services__text-red">Expectations</span>
// // //               </h2>
// // //             </div>
// // //             <div className="fya-services__intro-right">
// // //               <p className="fya-services__intro-description">
// // //                 Every project has different requirements. Our services are
// // //                 designed to give you the flexibility to work with us from
// // //                 a single discipline or through a complete turnkey solution.
// // //               </p>
// // //               <div className="fya-services__intro-stats">
// // //                 {stats.map((stat, index) => (
// // //                   <div key={index} className="fya-services__stat-item">
// // //                     <stat.icon className="fya-services__stat-icon" />
// // //                     <span className="fya-services__stat-value">{stat.value}</span>
// // //                     <span className="fya-services__stat-label">{stat.label}</span>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ==================================================
// // //           SERVICES GRID — Premium Cards
// // //       ================================================== */}
// // //       <section className="fya-services__grid-section" id="services">
// // //         <div className="fya-services__container">
// // //           <div className="fya-services__grid-top">
// // //             <div className="fya-services__section-label">
// // //               <span className="fya-services__label-number">02</span>
// // //               <span className="fya-services__label-line" />
// // //               <span className="fya-services__label-text">OUR EXPERTISE</span>
// // //             </div>
// // //             <h2 className="fya-services__grid-title">
// // //               Comprehensive <span className="fya-services__text-red">Solutions</span>
// // //             </h2>
// // //             <p className="fya-services__grid-subtitle">
// // //               Our capabilities cover the complete lifecycle of a construction project,
// // //               from initial planning to final handover.
// // //             </p>
// // //           </div>

// // //           {loading ? (
// // //             <div className="fya-services__loading">
// // //               <div className="fya-services__spinner" />
// // //               <span>Loading services...</span>
// // //             </div>
// // //           ) : (
// // //             <div className="fya-services__grid">
// // //               {services.map((service, index) => (
// // //                 <article className="fya-services__card" key={service.id || index}>
// // //                   <div className="fya-services__card-image">
// // //                     <img
// // //                       src={service.image || getImageUrl(service.image)}
// // //                       alt={service.title}
// // //                       className="fya-services__card-img"
// // //                     />
// // //                     <div className="fya-services__card-overlay" />
// // //                     <span className="fya-services__card-category">
// // //                       {service.category || "FIYA BUILDERS"}
// // //                     </span>
// // //                     <span className="fya-services__card-number">
// // //                       {String(index + 1).padStart(2, "0")}
// // //                     </span>
// // //                   </div>

// // //                   <div className="fya-services__card-body">
// // //                     <h3 className="fya-services__card-title">{service.title}</h3>
// // //                     <p className="fya-services__card-description">
// // //                       {service.description}
// // //                     </p>

// // //                     {service.features && (
// // //                       <ul className="fya-services__card-features">
// // //                         {service.features.map((feature, idx) => (
// // //                           <li key={idx} className="fya-services__card-feature">
// // //                             <CheckCircle size={14} className="fya-services__card-feature-icon" />
// // //                             {feature}
// // //                           </li>
// // //                         ))}
// // //                       </ul>
// // //                     )}

// // //                     <a
// // //                       href={`/contact?service=${encodeURIComponent(service.title)}`}
// // //                       className="fya-services__card-link"
// // //                     >
// // //                       <span>LEARN MORE</span>
// // //                       <ArrowUpRight size={18} />
// // //                     </a>
// // //                   </div>
// // //                 </article>
// // //               ))}
// // //             </div>
// // //           )}
// // //         </div>
// // //       </section>

// // //       {/* ==================================================
// // //           PROCESS — Same as About Section Style
// // //       ================================================== */}
// // //       <section className="fya-services__process">
// // //         <div className="fya-services__container">
// // //           <div className="fya-services__process-top">
// // //             <div className="fya-services__section-label">
// // //               <span className="fya-services__label-number">03</span>
// // //               <span className="fya-services__label-line" />
// // //               <span className="fya-services__label-text">HOW WE WORK</span>
// // //             </div>
// // //             <h2 className="fya-services__process-title">
// // //               From Idea to <span className="fya-services__text-red">Reality</span>
// // //             </h2>
// // //           </div>

// // //           <div className="fya-services__process-grid">
// // //             {processSteps.map((step, index) => (
// // //               <div key={index} className="fya-services__process-item">
// // //                 <div className="fya-services__process-image-wrap">
// // //                   <img src={step.image} alt={step.title} className="fya-services__process-img" />
// // //                   <div className="fya-services__process-overlay" />
// // //                   <span className="fya-services__process-number">{step.number}</span>
// // //                 </div>
// // //                 <h3 className="fya-services__process-item-title">{step.title}</h3>
// // //                 <p className="fya-services__process-item-description">{step.description}</p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ==================================================
// // //           CTA — Same as About Page
// // //       ================================================== */}
// // //       <section className="fya-services__cta">
// // //         <div className="fya-services__container">
// // //           <div className="fya-services__cta-box">
// // //             <div className="fya-services__cta-bg">
// // //               <img
// // //                 src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80"
// // //                 alt="Construction"
// // //                 className="fya-services__cta-image"
// // //               />
// // //               <div className="fya-services__cta-overlay" />
// // //               <div className="fya-services__cta-pattern" />
// // //             </div>
// // //             <div className="fya-services__cta-content">
// // //               <span className="fya-services__cta-label">READY TO BUILD?</span>
// // //               <h2 className="fya-services__cta-title">
// // //                 Let's Create Something
// // //                 <br />
// // //                 <span className="fya-services__text-red">Extraordinary Together</span>
// // //               </h2>
// // //               <p className="fya-services__cta-text">
// // //                 Partner with us for your next project and experience
// // //                 the difference of working with industry leaders.
// // //               </p>
// // //               <div className="fya-services__cta-actions">
// // //                 <a href="/contact" className="fya-services__cta-btn fya-services__cta-btn--primary">
// // //                   START A CONVERSATION
// // //                   <ArrowUpRight size={18} />
// // //                 </a>
// // //                 <a href="/projects" className="fya-services__cta-btn fya-services__cta-btn--secondary">
// // //                   VIEW OUR WORK
// // //                 </a>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //     </main>
// // //   );
// // // };

// // // export default ServicesPage;


// // // src/pages/Services/ServicesPage.jsx









// // // import { useEffect, useState } from "react";
// // // import api from "../services/api.js";
// // // import "./ServicesPage.css";
// // // import ServiceHeroSection from "./ServicesPage/ServiceHeroSection.jsx";
// // // import IntroSection from "./ServicesPage/IntroSection.jsx";
// // // import ServicesGridSection from "./ServicesPage/ServicesGridSection.jsx";
// // // import ProcessSection from "./ServicesPage/ProcessSection.jsx";
// // // import CTASection from "./ServicesPage/CTASection.jsx";

// // // // Import all sections


// // // const API_URL = import.meta.env.VITE_API_URL?.replace("/api", "") || "http://localhost:5041";

// // // const ServicesPage = () => {
// // //   const [services, setServices] = useState([]);
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     loadServices();
// // //   }, []);

// // //   const loadServices = async () => {
// // //     try {
// // //       const response = await api.get("/services");
// // //       const data = response.data?.data || response.data || [];
// // //       if (Array.isArray(data) && data.length > 0) {
// // //         setServices(data);
// // //       }
// // //     } catch (error) {
// // //       console.log("Services API not available yet.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const getImageUrl = (image) => {
// // //     if (!image) return "";
// // //     if (image.startsWith("http://") || image.startsWith("https://")) {
// // //       return image;
// // //     }
// // //     return `${API_URL}${image}`;
// // //   };

// // //   const defaultServices = [
// // //     {
// // //       id: 1,
// // //       title: "Residential Construction",
// // //       description: "Thoughtfully planned and professionally executed homes designed around the way you live.",
// // //       category: "RESIDENTIAL",
// // //       image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
// // //       features: ["Custom Homes", "Villa Projects", "Apartment Complexes"],
// // //     },
// // //     {
// // //       id: 2,
// // //       title: "Commercial Construction",
// // //       description: "High-quality commercial spaces built with functionality, efficiency and long-term value.",
// // //       category: "COMMERCIAL",
// // //       image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
// // //       features: ["Office Buildings", "Retail Spaces", "Corporate Campuses"],
// // //     },
// // //     {
// // //       id: 3,
// // //       title: "Architectural Design",
// // //       description: "Design solutions that balance aesthetics, functionality and engineering.",
// // //       category: "DESIGN",
// // //       image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
// // //       features: ["Concept Design", "3D Visualization", "Structural Planning"],
// // //     },
// // //     {
// // //       id: 4,
// // //       title: "Turnkey Construction",
// // //       description: "End-to-end project execution from planning through construction and final handover.",
// // //       category: "TURNKEY",
// // //       image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
// // //       features: ["Project Management", "Complete Execution", "Timely Delivery"],
// // //     },
// // //     {
// // //       id: 5,
// // //       title: "Interior Solutions",
// // //       description: "Interior environments carefully finished to complement the architecture and purpose of every space.",
// // //       category: "INTERIORS",
// // //       image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
// // //       features: ["Space Planning", "Material Selection", "Custom Finishes"],
// // //     },
// // //     {
// // //       id: 6,
// // //       title: "Renovation & Restoration",
// // //       description: "Transforming existing spaces through considered renovation and structural improvements.",
// // //       category: "RENOVATION",
// // //       image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
// // //       features: ["Structural Upgrades", "Facade Restoration", "Modernization"],
// // //     },
// // //   ];

// // //   const defaultProcess = [
// // //     {
// // //       number: "01",
// // //       title: "Consultation & Planning",
// // //       description: "We begin with a thorough consultation to understand your vision, requirements, and project goals.",
// // //       image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
// // //     },
// // //     {
// // //       number: "02",
// // //       title: "Design & Development",
// // //       description: "Our architects and engineers collaborate to create detailed designs and structural plans.",
// // //       image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
// // //     },
// // //     {
// // //       number: "03",
// // //       title: "Construction Phase",
// // //       description: "With approved designs, our construction team executes with precision and quality.",
// // //       image: "https://images.unsplash.com/photo-1590725121839-892b458a74fe?w=600&q=80",
// // //     },
// // //     {
// // //       number: "04",
// // //       title: "Delivery & Handover",
// // //       description: "After rigorous quality checks, we hand over your completed project with full support.",
// // //       image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
// // //     },
// // //   ];

// // //   const displayServices = services.length > 0 ? services : defaultServices;

// // //   return (
// // //     <main >
// // //       <ServiceHeroSection />
// // //       <IntroSection />
// // //       <ServicesGridSection services={displayServices} loading={loading} getImageUrl={getImageUrl} />
// // //       <ProcessSection processSteps={defaultProcess} />
// // //       <CTASection />
// // //     </main>
// // //   );
// // // };

// // // export default ServicesPage;


// // // src/pages/Services/ServicesPage.jsx
// // import { useEffect, useState } from "react";
// // import api from "../services/api.js";
// // import "./ServicesPage.css";

// // // Import all sections
// // import ServiceHeroSection from "./ServicesPage/ServiceHeroSection.jsx";
// // import IntroSection from "./ServicesPage/IntroSection.jsx";
// // import ServicesGridSection from "./ServicesPage/ServicesGridSection.jsx";
// // import ProcessSection from "./ServicesPage/ProcessSection.jsx";
// // import CTASection from "./ServicesPage/CTASection.jsx";

// // const API_URL = import.meta.env.VITE_API_URL?.replace("/api", "") || "http://localhost:5041";

// // const ServicesPage = () => {
// //   const [services, setServices] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     loadServices();
// //   }, []);

// //   const loadServices = async () => {
// //     try {
// //       const response = await api.get("/services");
// //       const data = response.data?.data || response.data || [];
// //       if (Array.isArray(data) && data.length > 0) {
// //         setServices(data);
// //       }
// //     } catch (error) {
// //       console.log("Services API not available yet.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const getImageUrl = (image) => {
// //     if (!image) return "";
// //     if (image.startsWith("http://") || image.startsWith("https://")) {
// //       return image;
// //     }
// //     // If image is a relative path from API
// //     if (image.startsWith("/")) {
// //       return `${API_URL}${image}`;
// //     }
// //     return `${API_URL}/${image}`;
// //   };

// //   const defaultServices = [
// //     {
// //       id: 1,
// //       title: "Residential Construction",
// //       description: "Thoughtfully planned and professionally executed homes designed around the way you live.",
// //       category: "RESIDENTIAL",
// //       image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
// //       features: ["Custom Homes", "Villa Projects", "Apartment Complexes"],
// //     },
// //     {
// //       id: 2,
// //       title: "Commercial Construction",
// //       description: "High-quality commercial spaces built with functionality, efficiency and long-term value.",
// //       category: "COMMERCIAL",
// //       image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
// //       features: ["Office Buildings", "Retail Spaces", "Corporate Campuses"],
// //     },
// //     {
// //       id: 3,
// //       title: "Architectural Design",
// //       description: "Design solutions that balance aesthetics, functionality and engineering.",
// //       category: "DESIGN",
// //       image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
// //       features: ["Concept Design", "3D Visualization", "Structural Planning"],
// //     },
// //     {
// //       id: 4,
// //       title: "Turnkey Construction",
// //       description: "End-to-end project execution from planning through construction and final handover.",
// //       category: "TURNKEY",
// //       image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
// //       features: ["Project Management", "Complete Execution", "Timely Delivery"],
// //     },
// //     {
// //       id: 5,
// //       title: "Interior Solutions",
// //       description: "Interior environments carefully finished to complement the architecture and purpose of every space.",
// //       category: "INTERIORS",
// //       image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
// //       features: ["Space Planning", "Material Selection", "Custom Finishes"],
// //     },
// //     {
// //       id: 6,
// //       title: "Renovation & Restoration",
// //       description: "Transforming existing spaces through considered renovation and structural improvements.",
// //       category: "RENOVATION",
// //       image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
// //       features: ["Structural Upgrades", "Facade Restoration", "Modernization"],
// //     },
// //   ];

// //   const defaultProcess = [
// //     {
// //       number: "01",
// //       title: "Consultation & Planning",
// //       description: "We begin with a thorough consultation to understand your vision, requirements, and project goals.",
// //       image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
// //     },
// //     {
// //       number: "02",
// //       title: "Design & Development",
// //       description: "Our architects and engineers collaborate to create detailed designs and structural plans.",
// //       image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
// //     },
// //     {
// //       number: "03",
// //       title: "Construction Phase",
// //       description: "With approved designs, our construction team executes with precision and quality.",
// //       image: "https://images.unsplash.com/photo-1590725121839-892b458a74fe?w=600&q=80",
// //     },
// //     {
// //       number: "04",
// //       title: "Delivery & Handover",
// //       description: "After rigorous quality checks, we hand over your completed project with full support.",
// //       image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
// //     },
// //   ];

// //   const displayServices = services.length > 0 ? services : defaultServices;

// //   return (
// //     <main >
// //       <ServiceHeroSection />
// //       <IntroSection />
// //       <ServicesGridSection 
// //         services={displayServices} 
// //         loading={loading} 
// //         getImageUrl={getImageUrl} 
// //       />
// //       <ProcessSection processSteps={defaultProcess} />
// //       <CTASection />
// //     </main>
// //   );
// // };

// // export default ServicesPage;















// // // src/pages/Services/ServicesPage.jsx
// // import { useEffect, useState } from "react";
// // import api from "../services/api.js";
// // import "./ServicesPage.css";

// // // Import all sections
// // import ServiceHeroSection from "./ServicesPage/ServiceHeroSection.jsx";
// // import IntroSection from "./ServicesPage/IntroSection.jsx";
// // import ServicesGridSection from "./ServicesPage/ServicesGridSection.jsx";
// // import ProcessSection from "./ServicesPage/ProcessSection.jsx";
// // import CTASection from "./ServicesPage/CTASection.jsx";

// // const API_URL = import.meta.env.VITE_API_URL?.replace("/api", "") || "http://localhost:5041";

// // const ServicesPage = () => {
// //   const [services, setServices] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     loadServices();
// //   }, []);

// //   const loadServices = async () => {
// //     try {
// //       setLoading(true);
// //       const response = await api.get("/services");
      
// //       console.log("API Response:", response);
      
// //       // ✅ FIXED: Handle the response structure correctly
// //       // Your response is: { success: true, data: [...] }
// //       let data = [];
      
// //       // Check if response.data exists and has data property
// //       if (response.data && response.data.data && Array.isArray(response.data.data)) {
// //         data = response.data.data;
// //       } 
// //       // Check if response.data is directly an array
// //       else if (response.data && Array.isArray(response.data)) {
// //         data = response.data;
// //       }
// //       // Check if response itself is an array
// //       else if (Array.isArray(response)) {
// //         data = response;
// //       }
      
// //       console.log("Extracted data:", data);
      
// //       if (data.length > 0) {
// //         setServices(data);
// //       } else {
// //         // Use default services if API returns empty
// //         console.log("No data from API, using defaults");
// //         setServices(getDefaultServices());
// //       }
// //     } catch (error) {
// //       console.error("Services API Error:", error);
// //       setServices(getDefaultServices());
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const getDefaultServices = () => [
// //     {
// //       id: 1,
// //       title: "Residential Construction",
// //       description: "Thoughtfully planned and professionally executed homes designed around the way you live.",
// //       category: "RESIDENTIAL",
// //       image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
// //       features: ["Custom Homes", "Villa Projects", "Apartment Complexes"],
// //     },
// //     {
// //       id: 2,
// //       title: "Commercial Construction",
// //       description: "High-quality commercial spaces built with functionality, efficiency and long-term value.",
// //       category: "COMMERCIAL",
// //       image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
// //       features: ["Office Buildings", "Retail Spaces", "Corporate Campuses"],
// //     },
// //     {
// //       id: 3,
// //       title: "Architectural Design",
// //       description: "Design solutions that balance aesthetics, functionality and engineering.",
// //       category: "DESIGN",
// //       image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
// //       features: ["Concept Design", "3D Visualization", "Structural Planning"],
// //     },
// //     {
// //       id: 4,
// //       title: "Turnkey Construction",
// //       description: "End-to-end project execution from planning through construction and final handover.",
// //       category: "TURNKEY",
// //       image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
// //       features: ["Project Management", "Complete Execution", "Timely Delivery"],
// //     },
// //     {
// //       id: 5,
// //       title: "Interior Solutions",
// //       description: "Interior environments carefully finished to complement the architecture and purpose of every space.",
// //       category: "INTERIORS",
// //       image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
// //       features: ["Space Planning", "Material Selection", "Custom Finishes"],
// //     },
// //     {
// //       id: 6,
// //       title: "Renovation & Restoration",
// //       description: "Transforming existing spaces through considered renovation and structural improvements.",
// //       category: "RENOVATION",
// //       image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
// //       features: ["Structural Upgrades", "Facade Restoration", "Modernization"],
// //     },
// //   ];

// //   const defaultProcess = [
// //     {
// //       number: "01",
// //       title: "Consultation & Planning",
// //       description: "We begin with a thorough consultation to understand your vision, requirements, and project goals.",
// //       image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
// //     },
// //     {
// //       number: "02",
// //       title: "Design & Development",
// //       description: "Our architects and engineers collaborate to create detailed designs and structural plans.",
// //       image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
// //     },
// //     {
// //       number: "03",
// //       title: "Construction Phase",
// //       description: "With approved designs, our construction team executes with precision and quality.",
// //       image: "https://images.unsplash.com/photo-1590725121839-892b458a74fe?w=600&q=80",
// //     },
// //     {
// //       number: "04",
// //       title: "Delivery & Handover",
// //       description: "After rigorous quality checks, we hand over your completed project with full support.",
// //       image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
// //     },
// //   ];

// //   const getImageUrl = (image) => {
// //     if (!image) return "";
// //     if (image.startsWith("http://") || image.startsWith("https://")) {
// //       return image;
// //     }
// //     if (image.startsWith("/")) {
// //       return `${API_URL}${image}`;
// //     }
// //     return `${API_URL}/${image}`;
// //   };

// //   const displayServices = services.length > 0 ? services : getDefaultServices();

// //   return (
// //     <main >
// //       <ServiceHeroSection />
// //       <IntroSection />
// //       <ServicesGridSection 
// //         services={displayServices} 
// //         loading={loading} 
// //         getImageUrl={getImageUrl} 
// //       />
// //       <ProcessSection processSteps={defaultProcess} />
// //       <CTASection />
// //     </main>
// //   );
// // };

// // export default ServicesPage;


// // src/pages/Services/ServicesPage.jsx
// import { useEffect, useState } from "react";
// import api from "../services/api.js";
// import "./ServicesPage.css";

// // Import all sections
// import ServiceHeroSection from "./ServicesPage/ServiceHeroSection.jsx";
// import IntroSection from "./ServicesPage/IntroSection.jsx";
// import ServicesGridSection from "./ServicesPage/ServicesGridSection.jsx";
// import ProcessSection from "./ServicesPage/ProcessSection.jsx";
// import CTASection from "./ServicesPage/CTASection.jsx";

// const API_URL = import.meta.env.VITE_API_URL?.replace("/api", "") || "http://localhost:5041";

// const ServicesPage = () => {
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     loadServices();
//   }, []);

//   const loadServices = async () => {
//     try {
//       setLoading(true);
//       setError(null);
      
//       console.log("🔄 Fetching services from API...");
      
//       // Make the API call
//       const response = await api.get("/services");
      
//       console.log("📦 Full API Response:", response);
//       console.log("📦 Response data:", response.data);
      
//       // ✅ FIXED: Handle the response structure correctly
//       let data = [];
      
//       // Check various response structures
//       if (response.data) {
//         // Structure 1: { success: true, data: [...] }
//         if (response.data.data && Array.isArray(response.data.data)) {
//           data = response.data.data;
//           console.log("✅ Extracted from response.data.data");
//         } 
//         // Structure 2: { data: [...] }
//         else if (response.data.data && Array.isArray(response.data.data)) {
//           data = response.data.data;
//           console.log("✅ Extracted from response.data.data");
//         }
//         // Structure 3: { services: [...] }
//         else if (response.data.services && Array.isArray(response.data.services)) {
//           data = response.data.services;
//           console.log("✅ Extracted from response.data.services");
//         }
//         // Structure 4: response.data is directly an array
//         else if (Array.isArray(response.data)) {
//           data = response.data;
//           console.log("✅ Extracted from response.data (array)");
//         }
//         // Structure 5: response.data has data property that's an object with data array
//         else if (response.data.data && response.data.data.data && Array.isArray(response.data.data.data)) {
//           data = response.data.data.data;
//           console.log("✅ Extracted from response.data.data.data");
//         }
//       }
      
//       console.log(`📊 Extracted ${data.length} services:`, data);
      
//       if (data.length > 0) {
//         setServices(data);
//       } else {
//         console.warn("⚠️ No data from API, using defaults");
//         setServices(getDefaultServices());
//       }
      
//     } catch (error) {
//       console.error("❌ Services API Error:", error);
      
//       // Check if it's a network error
//       if (error.code === "ERR_NETWORK") {
//         setError("Network error: Cannot connect to the server. Please check if the backend is running.");
//       } else if (error.response) {
//         setError(`Server error: ${error.response.status} - ${error.response.data?.message || "Unknown error"}`);
//       } else {
//         setError(error.message || "Failed to load services");
//       }
      
//       // Use default services as fallback
//       setServices(getDefaultServices());
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getDefaultServices = () => [
//     {
//       id: 1,
//       title: "Residential Construction",
//       description: "Thoughtfully planned and professionally executed homes designed around the way you live.",
//       category: "RESIDENTIAL",
//       image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
//       features: ["Custom Homes", "Villa Projects", "Apartment Complexes"],
//     },
//     {
//       id: 2,
//       title: "Commercial Construction",
//       description: "High-quality commercial spaces built with functionality, efficiency and long-term value.",
//       category: "COMMERCIAL",
//       image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
//       features: ["Office Buildings", "Retail Spaces", "Corporate Campuses"],
//     },
//     {
//       id: 3,
//       title: "Architectural Design",
//       description: "Design solutions that balance aesthetics, functionality and engineering.",
//       category: "DESIGN",
//       image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
//       features: ["Concept Design", "3D Visualization", "Structural Planning"],
//     },
//     {
//       id: 4,
//       title: "Turnkey Construction",
//       description: "End-to-end project execution from planning through construction and final handover.",
//       category: "TURNKEY",
//       image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
//       features: ["Project Management", "Complete Execution", "Timely Delivery"],
//     },
//     {
//       id: 5,
//       title: "Interior Solutions",
//       description: "Interior environments carefully finished to complement the architecture and purpose of every space.",
//       category: "INTERIORS",
//       image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
//       features: ["Space Planning", "Material Selection", "Custom Finishes"],
//     },
//     {
//       id: 6,
//       title: "Renovation & Restoration",
//       description: "Transforming existing spaces through considered renovation and structural improvements.",
//       category: "RENOVATION",
//       image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
//       features: ["Structural Upgrades", "Facade Restoration", "Modernization"],
//     },
//   ];

//   const defaultProcess = [
//     {
//       number: "01",
//       title: "Consultation & Planning",
//       description: "We begin with a thorough consultation to understand your vision, requirements, and project goals.",
//       image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
//     },
//     {
//       number: "02",
//       title: "Design & Development",
//       description: "Our architects and engineers collaborate to create detailed designs and structural plans.",
//       image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
//     },
//     {
//       number: "03",
//       title: "Construction Phase",
//       description: "With approved designs, our construction team executes with precision and quality.",
//       image: "https://images.unsplash.com/photo-1590725121839-892b458a74fe?w=600&q=80",
//     },
//     {
//       number: "04",
//       title: "Delivery & Handover",
//       description: "After rigorous quality checks, we hand over your completed project with full support.",
//       image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
//     },
//   ];

//   const getImageUrl = (image) => {
//     if (!image) return "";
    
//     // If it's already a full URL
//     if (image.startsWith("http://") || image.startsWith("https://")) {
//       return image;
//     }
    
//     // If it's a relative path from the server
//     if (image.startsWith("/")) {
//       return `${API_URL}${image}`;
//     }
    
//     // If it's just a filename
//     return `${API_URL}/uploads/services/${image}`;
//   };

//   const displayServices = services.length > 0 ? services : getDefaultServices();

//   // Show error state
//   if (error && services.length === 0) {
//     return (
//       <main className="fya-services__page">
//         <ServiceHeroSection />
//         <div className="fya-services__error-container">
//           <div className="fya-services__error">
//             <h3>⚠️ Error Loading Services</h3>
//             <p>{error}</p>
//             <button onClick={loadServices} className="fya-services__retry-btn">
//               Retry
//             </button>
//           </div>
//         </div>
//         <ProcessSection processSteps={defaultProcess} />
//         <CTASection />
//       </main>
//     );
//   }

//   return (
//     <main className="fya-services__page">
//       <ServiceHeroSection />
//       <IntroSection />
//       <ServicesGridSection 
//         services={displayServices} 
//         loading={loading} 
//         getImageUrl={getImageUrl} 
//       />
//       <ProcessSection processSteps={defaultProcess} />
//       <CTASection />
//     </main>
//   );
// };

// export default ServicesPage;


// src/pages/Services/ServicesPage.jsx
import { useEffect, useState } from "react";
import api from "../services/api.js";
import "./ServicesPage.css";

// Import all sections
import ServiceHeroSection from "./ServicesPage/ServiceHeroSection.jsx";
import IntroSection from "./ServicesPage/IntroSection.jsx";
import ServicesGridSection from "./ServicesPage/ServicesGridSection.jsx";
import ProcessSection from "./ServicesPage/ProcessSection.jsx";
import CTASection from "./ServicesPage/CTASection.jsx";

const API_URL = import.meta.env.VITE_API_URL?.replace("/api", "") || "http://localhost:5041";

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log("🔄 Fetching services from API...");
      
      // Make the API call
      const response = await api.get("/services");
      
      console.log("📦 Full API Response:", response);
      
      // ✅ CORRECT: Your response structure is { success: true, data: [...] }
      let data = [];
      
      // Check if response.data exists and has the data property
      if (response.data && response.data.success === true) {
        if (response.data.data && Array.isArray(response.data.data)) {
          data = response.data.data;
          console.log("✅ Extracted from response.data.data");
        }
      } 
      // Fallback: check if response.data is directly an array
      else if (response.data && Array.isArray(response.data)) {
        data = response.data;
        console.log("✅ Extracted from response.data (array)");
      }
      // Fallback: check if response itself is an array
      else if (Array.isArray(response)) {
        data = response;
        console.log("✅ Extracted from response (array)");
      }
      
      console.log(`📊 Extracted ${data.length} services:`, data);
      
      if (data.length > 0) {
        setServices(data);
      } else {
        console.warn("⚠️ No data from API, using defaults");
        setServices(getDefaultServices());
      }
      
    } catch (error) {
      console.error("❌ Services API Error:", error);
      
      // Check if it's a network error
      if (error.code === "ERR_NETWORK") {
        setError("Network error: Cannot connect to the server. Please check if the backend is running.");
      } else if (error.response) {
        setError(`Server error: ${error.response.status} - ${error.response.data?.message || "Unknown error"}`);
      } else {
        setError(error.message || "Failed to load services");
      }
      
      // Use default services as fallback
      setServices(getDefaultServices());
    } finally {
      setLoading(false);
    }
  };

  const getDefaultServices = () => [
    {
      id: 1,
      title: "Residential Construction",
      description: "Thoughtfully planned and professionally executed homes designed around the way you live.",
      category: "RESIDENTIAL",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      features: ["Custom Homes", "Villa Projects", "Apartment Complexes"],
    },
    {
      id: 2,
      title: "Commercial Construction",
      description: "High-quality commercial spaces built with functionality, efficiency and long-term value.",
      category: "COMMERCIAL",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      features: ["Office Buildings", "Retail Spaces", "Corporate Campuses"],
    },
    {
      id: 3,
      title: "Architectural Design",
      description: "Design solutions that balance aesthetics, functionality and engineering.",
      category: "DESIGN",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
      features: ["Concept Design", "3D Visualization", "Structural Planning"],
    },
    {
      id: 4,
      title: "Turnkey Construction",
      description: "End-to-end project execution from planning through construction and final handover.",
      category: "TURNKEY",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
      features: ["Project Management", "Complete Execution", "Timely Delivery"],
    },
    {
      id: 5,
      title: "Interior Solutions",
      description: "Interior environments carefully finished to complement the architecture and purpose of every space.",
      category: "INTERIORS",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
      features: ["Space Planning", "Material Selection", "Custom Finishes"],
    },
    {
      id: 6,
      title: "Renovation & Restoration",
      description: "Transforming existing spaces through considered renovation and structural improvements.",
      category: "RENOVATION",
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
      features: ["Structural Upgrades", "Facade Restoration", "Modernization"],
    },
  ];

  const defaultProcess = [
    {
      number: "01",
      title: "Consultation & Planning",
      description: "We begin with a thorough consultation to understand your vision, requirements, and project goals.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
    },
    {
      number: "02",
      title: "Design & Development",
      description: "Our architects and engineers collaborate to create detailed designs and structural plans.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
    },
    {
      number: "03",
      title: "Construction Phase",
      description: "With approved designs, our construction team executes with precision and quality.",
      image: "https://images.unsplash.com/photo-1590725121839-892b458a74fe?w=600&q=80",
    },
    {
      number: "04",
      title: "Delivery & Handover",
      description: "After rigorous quality checks, we hand over your completed project with full support.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    },
  ];

  const getImageUrl = (image) => {
    if (!image) return "";
    
    // If it's already a full URL
    if (image.startsWith("http://") || image.startsWith("https://")) {
      return image;
    }
    
    // If it's a relative path from the server
    if (image.startsWith("/")) {
      return `${API_URL}${image}`;
    }
    
    // If it's just a filename
    return `${API_URL}/uploads/services/${image}`;
  };

  const displayServices = services.length > 0 ? services : getDefaultServices();

  // Show error state
  if (error && services.length === 0) {
    return (
      <main className="fya-services__page">
        <ServiceHeroSection />
        <div className="fya-services__error-container">
          <div className="fya-services__error">
            <h3>⚠️ Error Loading Services</h3>
            <p>{error}</p>
            <button onClick={loadServices} className="fya-services__retry-btn">
              Retry
            </button>
          </div>
        </div>
        <ProcessSection processSteps={defaultProcess} />
        <CTASection />
      </main>
    );
  }

  return (
    <main className="fya-services__page">
      <ServiceHeroSection />
      <IntroSection />
      <ServicesGridSection 
        services={displayServices} 
        loading={loading} 
        getImageUrl={getImageUrl} 
      />
      <ProcessSection processSteps={defaultProcess} />
      <CTASection />
    </main>
  );
};

export default ServicesPage;