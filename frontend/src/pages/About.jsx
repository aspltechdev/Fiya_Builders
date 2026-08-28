// // src/pages/About/AboutPage.jsx
// import { useEffect, useState, useRef } from "react";
// import {
//   ArrowDown,
//   ArrowUpRight,
//   Plus,
//   Award,
//   Building2,
//   Users,
//   Target,
//   Quote,
//   Crown,
//   Briefcase,
//   Clock,
//   CheckCircle,
//   Star,
//   ChevronRight,
//   Calendar,
//   MapPin,
//   Mail,
//   Phone,
//   Play,
//   ExternalLink,
// } from "lucide-react";

// import api from "../services/api.js";
// import "./AboutPage.css";

// const API_URL =
//   import.meta.env.VITE_API_URL?.replace("/api", "") ||
//   "http://localhost:5041";

// const AboutPage = () => {
//   const [about, setAbout] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Refs for scroll animations
//   const heroRef = useRef(null);
//   const introRef = useRef(null);
//   const founderRef = useRef(null);
//   const philosophyRef = useRef(null);
//   const experienceRef = useRef(null);
//   const valuesRef = useRef(null);
//   const ctaRef = useRef(null);

//   useEffect(() => {
//     loadAbout();
//     initScrollAnimations();
//   }, []);

//   const loadAbout = async () => {
//     try {
//       const response = await api.get("/about");
//       setAbout(response.data?.data || response.data || null);
//     } catch (error) {
//       console.error("About Page Error:", error);
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

//   // Scroll-triggered animations
//   const initScrollAnimations = () => {
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
//   };

//   const title = about?.title ||
//     "We don't just build structures. We build what comes next.";
//   const subtitle = about?.subtitle || "ABOUT FIYA BUILDERS";
//   const description = about?.description ||
//     "FIYA Builders brings together construction expertise, engineering precision and thoughtful execution to create spaces that are built for today and designed to last.";
//   const experience = about?.experience || "10";
//   const founderQuote = about?.founderQuote ||
//     "Building is not just about structures; it's about creating lasting value for communities and generations to come.";
//   const founderName = about?.founderName || "Founder";
//   const founderTitle = about?.founderTitle || "Founder & Chairman";

//   const defaultImages = {
//     hero: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80",
//     philosophy: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
//     founder: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
//   };

//   const stats = [
//     { value: "250+", label: "Projects Completed", icon: Building2 },
//     { value: experience + "+", label: "Years Experience", icon: Award },
//     { value: "150+", label: "Team Members", icon: Users },
//     { value: "98%", label: "Client Satisfaction", icon: Target },
//   ];

//   const milestones = [
//     { year: "2014", title: "Founded", description: "FIYA Builders established" },
//     { year: "2016", title: "First Project", description: "Completed first residential project" },
//     { year: "2018", title: "Expansion", description: "Entered commercial construction" },
//     { year: "2020", title: "ISO Certified", description: "Achieved ISO 9001 certification" },
//     { year: "2022", title: "100+ Projects", description: "Reached 100 completed projects" },
//     { year: "2024", title: "New Horizons", description: "Expanded to 3 cities" },
//   ];

//   const values = [
//     {
//       number: "01",
//       title: "Quality",
//       description: "We believe quality is not an extra feature. It is the foundation of every project we undertake.",
//       icon: Target,
//     },
//     {
//       number: "02",
//       title: "Integrity",
//       description: "Clear communication and honest execution define how we work with our clients.",
//       icon: Award,
//     },
//     {
//       number: "03",
//       title: "Precision",
//       description: "From planning to finishing, attention to detail remains central to our process.",
//       icon: Building2,
//     },
//     {
//       number: "04",
//       title: "Responsibility",
//       description: "We take ownership of every stage of a project through completion.",
//       icon: Users,
//     },
//   ];

//   return (
//     <main className="fya-about">

//       {/* ==================================================
//           HERO SECTION — Cinematic
//       ================================================== */}
//       <section className="fya-about__hero" ref={heroRef}>
//         <div className="fya-about__hero-bg">
//           <img
//             src={getImageUrl(about?.image) || defaultImages.hero}
//             alt="FIYA Builders Architecture"
//             className="fya-about__hero-image"
//           />
//           <div className="fya-about__hero-gradient" />
//           <div className="fya-about__hero-overlay-text">
//             <span className="fya-about__hero-overlay-letter">E</span>
//             <span className="fya-about__hero-overlay-letter">X</span>
//             <span className="fya-about__hero-overlay-letter">C</span>
//             <span className="fya-about__hero-overlay-letter">E</span>
//             <span className="fya-about__hero-overlay-letter">L</span>
//             <span className="fya-about__hero-overlay-letter">L</span>
//             <span className="fya-about__hero-overlay-letter">E</span>
//             <span className="fya-about__hero-overlay-letter">N</span>
//             <span className="fya-about__hero-overlay-letter">C</span>
//             <span className="fya-about__hero-overlay-letter">E</span>
//           </div>
//         </div>

//         <div className="fya-container fya-about__hero-container">
//           <div className="fya-about__hero-top fya-about__animate">
//             <div className="fya-about__hero-label">
//               <span className="fya-about__hero-number">01</span>
//               <span className="fya-about__hero-label-text">{subtitle}</span>
//               <span className="fya-about__hero-line" />
//             </div>
//           </div>

//           <div className="fya-about__hero-main fya-about__animate fya-about__animate--delay-1">
//             <h1 className="fya-about__hero-title">
//               Building with
//               <br />
//               <span className="fya-about__hero-highlight">purpose.</span>
//             </h1>
//             <p className="fya-about__hero-subtitle">
//               Construction shaped by experience, precision and a
//               commitment to doing things right.
//             </p>
//             <div className="fya-about__hero-actions">
//               <a href="/projects" className="fya-about__hero-btn fya-about__hero-btn--primary">
//                 Explore Our Work
//                 <ArrowUpRight size={18} />
//               </a>
//               <a href="/contact" className="fya-about__hero-btn fya-about__hero-btn--secondary">
//                 Get Consultation
//               </a>
//             </div>
//           </div>

//           <div className="fya-about__hero-bottom fya-about__animate fya-about__animate--delay-2">
//             <div className="fya-about__hero-scroll">
//               <ArrowDown size={16} strokeWidth={1.5} />
//               <span>SCROLL TO EXPLORE</span>
//             </div>
//             <div className="fya-about__hero-counter">
//               <span className="fya-about__counter-current">01</span>
//               <span className="fya-about__counter-line" />
//               <span className="fya-about__counter-total">06</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==================================================
//           INTRO SECTION
//       ================================================== */}
//       <section className="fya-about__intro" ref={introRef}>
//         <div className="fya-container">
//           <div className="fya-about__intro-grid">
//             <div className="fya-about__intro-left fya-about__animate">
//               <span className="fya-about__intro-number">01</span>
//               <h2 className="fya-about__intro-title">{title}</h2>
//             </div>
//             <div className="fya-about__intro-right fya-about__animate fya-about__animate--delay-1">
//               <p className="fya-about__intro-description">{description}</p>
//               <div className="fya-about__intro-stats">
//                 {stats.map((stat, index) => (
//                   <div key={index} className="fya-about__stat-item">
//                     <stat.icon className="fya-about__stat-icon" />
//                     <span className="fya-about__stat-value">{stat.value}</span>
//                     <span className="fya-about__stat-label">{stat.label}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==================================================
//           FOUNDER'S STORY — Premium with Image
//       ================================================== */}
//       <section className="fya-about__founder" ref={founderRef}>
//         <div className="fya-container">
//           <div className="fya-about__founder-top">
//             <div className="fya-about__section-label fya-about__animate">
//               <span className="fya-about__label-number">02</span>
//               <span className="fya-about__label-line" />
//               <span className="fya-about__label-text">FOUNDER'S STORY</span>
//             </div>
//             <h2 className="fya-about__founder-title fya-about__animate fya-about__animate--delay-1">
//               Building a Legacy
//               <br />
//               <span className="fya-about__text-red">From Vision to Reality</span>
//             </h2>
//           </div>

//           <div className="fya-about__founder-grid">
//             <div className="fya-about__founder-image-wrapper fya-about__animate">
//               <div className="fya-about__founder-image">
//                 <img
//                   src={defaultImages.founder}
//                   alt={founderName}
//                   className="fya-about__founder-img"
//                 />
//                 <div className="fya-about__founder-overlay" />
//                 <div className="fya-about__founder-badge">
//                   <Crown size={18} />
//                   <span>Founded 2014</span>
//                 </div>
//                 <div className="fya-about__founder-play">
//                   <Play size={24} />
//                 </div>
//               </div>
//             </div>

//             <div className="fya-about__founder-content fya-about__animate fya-about__animate--delay-1">
//               <div className="fya-about__founder-quote">
//                 <Quote className="fya-about__quote-icon" />
//                 <p className="fya-about__quote-text">
//                   "{founderQuote}"
//                 </p>
//                 <div className="fya-about__quote-author">
//                   <strong>{founderName}</strong>
//                   <span>{founderTitle}</span>
//                 </div>
//               </div>

//               <p className="fya-about__founder-text">
//                 What started as a small construction firm with a handful of
//                 dedicated workers has grown into one of the most trusted
//                 names in the industry. Through every challenge and success,
//                 our founder's vision has remained unchanged: to build with
//                 integrity, precision and lasting value.
//               </p>

//               <div className="fya-about__founder-milestones">
//                 {milestones.map((milestone, index) => (
//                   <div key={index} className="fya-about__milestone fya-about__animate fya-about__animate--delay-${(index + 2) * 0.1}">
//                     <span className="fya-about__milestone-year">{milestone.year}</span>
//                     <div className="fya-about__milestone-content">
//                       <strong className="fya-about__milestone-title">{milestone.title}</strong>
//                       <span className="fya-about__milestone-desc">{milestone.description}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==================================================
//           PHILOSOPHY — Cinematic with Large Image
//       ================================================== */}
//       <section className="fya-about__philosophy" ref={philosophyRef}>
//         <div className="fya-container">
//           <div className="fya-about__philosophy-top">
//             <div className="fya-about__section-label fya-about__animate">
//               <span className="fya-about__label-number">03</span>
//               <span className="fya-about__label-line" />
//               <span className="fya-about__label-text">OUR PHILOSOPHY</span>
//             </div>
//           </div>

//           <div className="fya-about__philosophy-grid">
//             <div className="fya-about__philosophy-image-wrapper fya-about__animate fya-about__animate--delay-1">
//               <img
//                 src={getImageUrl(about?.image) || defaultImages.philosophy}
//                 alt="Our Philosophy"
//                 className="fya-about__philosophy-img"
//               />
//               <div className="fya-about__philosophy-overlay" />
//               <div className="fya-about__philosophy-caption">
//                 <span className="fya-about__caption-line" />
//                 <span>OUR APPROACH TO EXCELLENCE</span>
//               </div>
//               <div className="fya-about__philosophy-badge">
//                 <div className="fya-about__philosophy-badge-icon">
//                   <Building2 size={24} />
//                 </div>
//                 <div className="fya-about__philosophy-badge-text">
//                   <span>20+ Years</span>
//                   <span>Industry Excellence</span>
//                 </div>
//               </div>
//             </div>

//             <div className="fya-about__philosophy-content fya-about__animate fya-about__animate--delay-2">
//               <h2 className="fya-about__philosophy-title">
//                 Good buildings
//                 <br />
//                 begin with
//                 <br />
//                 <span className="fya-about__text-red">good thinking.</span>
//               </h2>
//               <p className="fya-about__philosophy-text">
//                 Every successful project starts long before construction begins.
//                 It starts with understanding the people, purpose and possibilities
//                 behind the space.
//               </p>
//               <p className="fya-about__philosophy-text">
//                 Our approach combines practical planning, engineering discipline
//                 and careful execution to create spaces that remain valuable long
//                 after completion.
//               </p>
//               <a href="/services" className="fya-about__link-arrow">
//                 <span>Explore our expertise</span>
//                 <ArrowUpRight size={18} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==================================================
//           EXPERIENCE — Bold Numbers
//       ================================================== */}
//       <section className="fya-about__experience" ref={experienceRef}>
//         <div className="fya-container">
//           <div className="fya-about__experience-top">
//             <div className="fya-about__section-label fya-about__animate">
//               <span className="fya-about__label-number">04</span>
//               <span className="fya-about__label-line" />
//               <span className="fya-about__label-text">EXPERIENCE</span>
//             </div>
//           </div>

//           <div className="fya-about__experience-grid">
//             <div className="fya-about__experience-number fya-about__animate fya-about__animate--delay-1">
//               <span className="fya-about__number-value">{experience}</span>
//               <Plus size={32} className="fya-about__number-plus" />
//               <span className="fya-about__number-label">YEARS</span>
//             </div>
//             <div className="fya-about__experience-content fya-about__animate fya-about__animate--delay-2">
//               <h2 className="fya-about__experience-title">
//                 Experience that
//                 <br />
//                 <span className="fya-about__text-red">builds confidence.</span>
//               </h2>
//               <p className="fya-about__experience-text">
//                 Over the years, our work has been shaped by the lessons,
//                 challenges and relationships built through every project.
//                 We've grown from a small local builder to a respected
//                 name in construction.
//               </p>
//               <div className="fya-about__experience-metrics">
//                 <div className="fya-about__metric">
//                   <span className="fya-about__metric-value">50+</span>
//                   <span className="fya-about__metric-label">Ongoing Projects</span>
//                 </div>
//                 <div className="fya-about__metric">
//                   <span className="fya-about__metric-value">1000+</span>
//                   <span className="fya-about__metric-label">Happy Clients</span>
//                 </div>
//                 <div className="fya-about__metric">
//                   <span className="fya-about__metric-value">15</span>
//                   <span className="fya-about__metric-label">Awards Won</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==================================================
//           VALUES — Premium Cards
//       ================================================== */}
//       <section className="fya-about__values" ref={valuesRef}>
//         <div className="fya-container">
//           <div className="fya-about__values-top">
//             <div className="fya-about__section-label fya-about__animate">
//               <span className="fya-about__label-number">05</span>
//               <span className="fya-about__label-line" />
//               <span className="fya-about__label-text">WHAT WE STAND FOR</span>
//             </div>
//             <h2 className="fya-about__values-title fya-about__animate fya-about__animate--delay-1">
//               Principles behind
//               <br />
//               every <span className="fya-about__text-red">project.</span>
//             </h2>
//           </div>

//           <div className="fya-about__values-grid">
//             {values.map((value, index) => {
//               const Icon = value.icon;
//               return (
//                 <div 
//                   key={index} 
//                   className={`fya-about__value-card fya-about__animate fya-about__animate--delay-${(index + 1) * 0.1}`}
//                 >
//                   <span className="fya-about__value-number">{value.number}</span>
//                   <div className="fya-about__value-icon">
//                     <Icon size={24} />
//                   </div>
//                   <h3 className="fya-about__value-title">{value.title}</h3>
//                   <p className="fya-about__value-text">{value.description}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ==================================================
//           CTA — Powerful Call to Action
//       ================================================== */}
//       <section className="fya-about__cta" ref={ctaRef}>
//         <div className="fya-container">
//           <div className="fya-about__cta-box fya-about__animate">
//             <div className="fya-about__cta-bg">
//               <img
//                 src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&q=80"
//                 alt="Construction"
//               />
//               <div className="fya-about__cta-overlay" />
//             </div>
//             <div className="fya-about__cta-content">
//               <span className="fya-about__cta-label">READY TO BUILD?</span>
//               <h2 className="fya-about__cta-title">
//                 Let's Create Something
//                 <br />
//                 <span className="fya-about__text-red">Extraordinary Together</span>
//               </h2>
//               <p className="fya-about__cta-text">
//                 Partner with us for your next project and experience
//                 the difference of working with industry leaders.
//               </p>
//               <div className="fya-about__cta-actions">
//                 <a href="/contact" className="fya-about__cta-btn fya-about__cta-btn--primary">
//                   START A CONVERSATION
//                   <ArrowUpRight size={18} />
//                 </a>
//                 <a href="/projects" className="fya-about__cta-btn fya-about__cta-btn--secondary">
//                   VIEW OUR WORK
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//     </main>
//   );
// };

// export default AboutPage;

















// src/pages/About/AboutPage.jsx
import { useEffect, useState, useRef } from "react";
import { ArrowDown, ArrowUpRight, Plus, Award, Building2, Users, Target, Quote, Crown } from "lucide-react";
import api from "../services/api.js";
import "./AboutPage.css";
import AboutHeroSection from "./AboutPage/AboutHeroSection.jsx";
import IntroSection from "./AboutPage/IntroSection.jsx";
import FounderSection from "./AboutPage/FounderSection.jsx";
import ExperienceSection from "./AboutPage/ExperienceSection.jsx";
import ValuesSection from "./AboutPage/ValuesSection.jsx";
import CTASection from "./AboutPage/CTASection.jsx";

// Import all sections



const API_URL = import.meta.env.VITE_API_URL?.replace("/api", "") || "http://localhost:5041";

const AboutPage = () => {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAbout();
  }, []);

  const loadAbout = async () => {
    try {
      const response = await api.get("/about");
      setAbout(response.data?.data || response.data || null);
    } catch (error) {
      console.error("About Page Error:", error);
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

  const defaultImages = {
    hero: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80",
    philosophy: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    founder: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  };

  return (
    <main className="fya-about-page">
      <AboutHeroSection about={about} getImageUrl={getImageUrl} defaultImages={defaultImages} />
      <IntroSection about={about} />
      <FounderSection about={about} defaultImages={defaultImages} />
     
      <ExperienceSection about={about} />
      <ValuesSection />
      <CTASection />
    </main>
  );
};

export default AboutPage;