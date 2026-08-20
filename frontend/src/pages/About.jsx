// import { useEffect, useState } from "react";
// import {
//   ArrowDown,
//   ArrowUpRight,
//   Plus,
// } from "lucide-react";

// import api from "../services/api.js";

// import "./AboutPage.css";

// const API_URL =
//   import.meta.env.VITE_API_URL?.replace(
//     "/api",
//     ""
//   ) || "http://localhost:5000";

// const AboutPage = () => {
//   const [about, setAbout] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadAbout();
//   }, []);

//   const loadAbout = async () => {
//     try {
//       const response = await api.get(
//         "/about"
//       );

//       setAbout(
//         response.data?.data ||
//           response.data ||
//           null
//       );
//     } catch (error) {
//       console.error(
//         "About Page Error:",
//         error
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getImageUrl = (image) => {
//     if (!image) return "";

//     if (
//       image.startsWith("http://") ||
//       image.startsWith("https://")
//     ) {
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

//   const experience =
//     about?.experience || "10";

//   return (
//     <main className="fiya-about-page">

//       {/* ==================================================
//           HERO
//       ================================================== */}

//       <section className="fiya-about-page-hero">

//         <div className="public-container">

//           <div className="fiya-about-page-label">

//             <span>
//               01
//             </span>

//             <span>
//               {subtitle}
//             </span>

//             <span className="fiya-about-page-line" />

//           </div>


//           <div className="fiya-about-page-hero-content">

//             <h1>
//               Building with
//               <br />
//               <span>purpose.</span>
//             </h1>

//             <p>
//               Construction shaped by
//               experience, precision and a
//               commitment to doing things right.
//             </p>

//           </div>


//           <div className="fiya-about-page-scroll">

//             <ArrowDown
//               size={16}
//               strokeWidth={1.4}
//             />

//             <span>
//               SCROLL TO EXPLORE
//             </span>

//           </div>

//         </div>

//       </section>


//       {/* ==================================================
//           INTRO
//       ================================================== */}

//       <section className="fiya-about-page-intro">

//         <div className="public-container">

//           <div className="fiya-about-page-intro-grid">

//             <div className="fiya-about-page-intro-number">
//               01
//             </div>

//             <div className="fiya-about-page-intro-content">

//               <span>
//                 WHO WE ARE
//               </span>

//               <h2>
//                 {title}
//               </h2>

//               <p>
//                 {description}
//               </p>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* ==================================================
//           IMAGE / STORY
//       ================================================== */}

//       <section className="fiya-about-page-story">

//         <div className="public-container">

//           <div className="fiya-about-page-story-grid">

//             <div className="fiya-about-page-story-image">

//               {about?.image ? (
//                 <img
//                   src={getImageUrl(
//                     about.image
//                   )}
//                   alt="FIYA Builders"
//                 />
//               ) : (
//                 <div className="fiya-about-page-placeholder">
//                   FIYA
//                 </div>
//               )}

//               <div className="fiya-about-page-image-meta">

//                 <span>
//                   FIYA / 01
//                 </span>

//                 <span>
//                   PONDICHERRY · INDIA
//                 </span>

//               </div>

//             </div>


//             <div className="fiya-about-page-story-content">

//               <span className="fiya-about-page-overline">
//                 OUR PHILOSOPHY
//               </span>

//               <h2>
//                 Good buildings
//                 <br />
//                 begin with
//                 <br />
//                 <em>good thinking.</em>
//               </h2>

//               <p>
//                 Every successful project starts
//                 long before construction begins.
//                 It starts with understanding the
//                 people, purpose and possibilities
//                 behind the space.
//               </p>

//               <p>
//                 Our approach combines practical
//                 planning, engineering discipline
//                 and careful execution to create
//                 spaces that remain valuable long
//                 after completion.
//               </p>

//               <a
//                 href="/services"
//                 className="fiya-about-page-link"
//               >
//                 <span>
//                   Explore our expertise
//                 </span>

//                 <span>
//                   <ArrowUpRight
//                     size={18}
//                     strokeWidth={1.6}
//                   />
//                 </span>

//               </a>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* ==================================================
//           EXPERIENCE
//       ================================================== */}

//       <section className="fiya-about-page-experience">

//         <div className="public-container">

//           <div className="fiya-about-page-experience-header">

//             <div className="fiya-about-page-label dark">

//               <span>
//                 02
//               </span>

//               <span>
//                 EXPERIENCE
//               </span>

//               <span className="fiya-about-page-line" />

//             </div>

//             <h2>
//               Experience that
//               <br />
//               <span>builds confidence.</span>
//             </h2>

//           </div>


//           <div className="fiya-about-page-experience-grid">

//             <div className="fiya-about-page-big-number">

//               <span>
//                 {experience}
//               </span>

//               <Plus
//                 size={30}
//                 strokeWidth={1.4}
//               />

//             </div>

//             <div className="fiya-about-page-experience-copy">

//               <span>
//                 YEARS OF EXPERIENCE
//               </span>

//               <p>
//                 Over the years, our work has
//                 been shaped by the lessons,
//                 challenges and relationships
//                 built through every project.
//               </p>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* ==================================================
//           VALUES
//       ================================================== */}

//       <section className="fiya-about-page-values">

//         <div className="public-container">

//           <div className="fiya-about-page-label">

//             <span>
//               03
//             </span>

//             <span>
//               WHAT WE STAND FOR
//             </span>

//             <span className="fiya-about-page-line" />

//           </div>


//           <div className="fiya-about-page-values-heading">

//             <h2>
//               Principles behind
//               <br />
//               every <span>project.</span>
//             </h2>

//           </div>


//           <div className="fiya-about-page-values-list">

//             <div className="fiya-about-page-value">

//               <span>
//                 01
//               </span>

//               <div>
//                 <h3>
//                   Quality
//                 </h3>

//                 <p>
//                   We believe quality is not
//                   an extra feature. It is the
//                   foundation of every project.
//                 </p>
//               </div>

//             </div>


//             <div className="fiya-about-page-value">

//               <span>
//                 02
//               </span>

//               <div>
//                 <h3>
//                   Integrity
//                 </h3>

//                 <p>
//                   Clear communication and
//                   honest execution define how
//                   we work with our clients.
//                 </p>
//               </div>

//             </div>


//             <div className="fiya-about-page-value">

//               <span>
//                 03
//               </span>

//               <div>
//                 <h3>
//                   Precision
//                 </h3>

//                 <p>
//                   From planning to finishing,
//                   attention to detail remains
//                   central to our process.
//                 </p>
//               </div>

//             </div>


//             <div className="fiya-about-page-value">

//               <span>
//                 04
//               </span>

//               <div>
//                 <h3>
//                   Responsibility
//                 </h3>

//                 <p>
//                   We take ownership of every
//                   stage of a project through
//                   completion.
//                 </p>
//               </div>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* ==================================================
//           CTA
//       ================================================== */}

//       <section className="fiya-about-page-cta">

//         <div className="public-container">

//           <div className="fiya-about-page-cta-inner">

//             <span>
//               READY TO BUILD?
//             </span>

//             <h2>
//               Let's create
//               <br />
//               something
//               <br />
//               <em>lasting.</em>
//             </h2>

//             <a href="/contact">

//               <span>
//                 Start a conversation
//               </span>

//               <span>
//                 <ArrowUpRight
//                   size={19}
//                   strokeWidth={1.6}
//                 />
//               </span>

//             </a>

//           </div>

//         </div>

//       </section>

//     </main>
//   );
// };

// export default AboutPage;


import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Plus,
  Award,
  Building2,
  Users,
  Target,
} from "lucide-react";

import api from "../services/api.js";

import "./AboutPage.css";

const API_URL =
  import.meta.env.VITE_API_URL?.replace(
    "/api",
    ""
  ) || "http://localhost:5000";

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
    if (
      image.startsWith("http://") ||
      image.startsWith("https://")
    ) {
      return image;
    }
    return `${API_URL}${image}`;
  };

  const title =
    about?.title ||
    "We don't just build structures. We build what comes next.";

  const subtitle =
    about?.subtitle ||
    "ABOUT FIYA BUILDERS";

  const description =
    about?.description ||
    "FIYA Builders brings together construction expertise, engineering precision and thoughtful execution to create spaces that are built for today and designed to last.";

  const experience =
    about?.experience || "10";

  // Default images from Unsplash
  const defaultImages = {
    hero: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80",
    philosophy: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    team: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
    project1: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    project2: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    project3: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  };

  const stats = [
    { value: "250+", label: "Projects Completed", icon: Building2 },
    { value: experience + "+", label: "Years Experience", icon: Award },
    { value: "150+", label: "Team Members", icon: Users },
    { value: "98%", label: "Client Satisfaction", icon: Target },
  ];

  return (
    <main className="fya-about-page">
      
      {/* ==================================================
          HERO — Premium Blue/Gold
      ================================================== */}
      <section className="fya-hero">
        <div className="fya-hero-bg">
          <img
            src={getImageUrl(about?.image) || defaultImages.hero}
            alt="FIYA Builders Architecture"
          />
          <div className="fya-hero-gradient" />
        </div>

        <div className="fya-container fya-hero-container">
          <div className="fya-hero-nav">
            <div className="fya-logo">
              <span className="fya-logo-blue">FIYA</span>
              <span className="fya-logo-gold">BUILDERS</span>
            </div>
            <div className="fya-hero-tagline">
              <span className="fya-gold-dot" />
              CONSTRUCTION • CONSULTANCY • ENGINEERING
            </div>
          </div>

          <div className="fya-hero-main">
            <div className="fya-hero-badge">
              <span>EST. 2014</span>
              <span className="fya-badge-line" />
              <span>PONDICHERRY, INDIA</span>
            </div>
            <h1 className="fya-hero-title">
              BUILDING
              <span className="fya-title-blue"> EXCELLENCE</span>
              <br />
              <span className="fya-title-gold">THAT ENDURES</span>
            </h1>
            <p className="fya-hero-subtitle">
              Premium construction services with unwavering
              commitment to quality, innovation and integrity.
            </p>
            <div className="fya-hero-actions">
              <a href="/projects" className="fya-btn-primary">
                EXPLORE PROJECTS
                <ArrowUpRight size={18} />
              </a>
              <a href="/contact" className="fya-btn-secondary">
                GET CONSULTATION
              </a>
            </div>
          </div>

          <div className="fya-hero-footer">
            <div className="fya-hero-scroll">
              <ArrowDown size={16} />
              <span>SCROLL TO DISCOVER</span>
            </div>
            <div className="fya-hero-counter">
              <span className="fya-counter-current">01</span>
              <span className="fya-counter-line" />
              <span className="fya-counter-total">04</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          ABOUT INTRO — Corporate Premium
      ================================================== */}
      <section className="fya-intro">
        <div className="fya-container">
          <div className="fya-intro-grid">
            <div className="fya-intro-left">
              <div className="fya-section-label">
                <span className="fya-label-number">01</span>
                <span className="fya-label-line" />
                <span className="fya-label-text">WHO WE ARE</span>
              </div>
              <h2 className="fya-intro-title">
                {title}
              </h2>
            </div>
            <div className="fya-intro-right">
              <p className="fya-intro-description">
                {description}
              </p>
              <div className="fya-intro-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="fya-stat-item">
                    <stat.icon size={24} className="fya-stat-icon" />
                    <div className="fya-stat-value">{stat.value}</div>
                    <div className="fya-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          PHILOSOPHY — Blue Theme
      ================================================== */}
      <section className="fya-philosophy">
        <div className="fya-container">
          <div className="fya-philosophy-grid">
            <div className="fya-philosophy-images">
              <div className="fya-philosophy-main-image">
                <img
                  src={getImageUrl(about?.image) || defaultImages.philosophy}
                  alt="Our Philosophy"
                />
                <div className="fya-image-overlay" />
                <div className="fya-image-caption">
                  <span className="fya-caption-line" />
                  <span>OUR APPROACH TO EXCELLENCE</span>
                </div>
              </div>
              <div className="fya-philosophy-accent">
                <div className="fya-accent-box">
                  <Award size={32} className="fya-accent-icon" />
                  <span>ISO Certified</span>
                  <small>Quality Management</small>
                </div>
              </div>
            </div>

            <div className="fya-philosophy-content">
              <div className="fya-section-label">
                <span className="fya-label-number">02</span>
                <span className="fya-label-line" />
                <span className="fya-label-text">OUR PHILOSOPHY</span>
              </div>
              <h2 className="fya-philosophy-title">
                Good buildings
                <br />
                begin with
                <br />
                <span className="fya-text-blue">good thinking.</span>
              </h2>
              <p className="fya-philosophy-text">
                Every successful project starts
                long before construction begins.
                It starts with understanding the
                people, purpose and possibilities
                behind the space.
              </p>
              <p className="fya-philosophy-text">
                Our approach combines practical
                planning, engineering discipline
                and careful execution to create
                spaces that remain valuable long
                after completion.
              </p>
              <a href="/services" className="fya-link-arrow">
                <span>Explore our expertise</span>
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          PROJECTS SHOWCASE — Image Gallery
      ================================================== */}
      <section className="fya-showcase">
        <div className="fya-container">
          <div className="fya-showcase-header">
            <div className="fya-section-label">
              <span className="fya-label-number">03</span>
              <span className="fya-label-line" />
              <span className="fya-label-text">FEATURED PROJECTS</span>
            </div>
            <h2 className="fya-showcase-title">
              Our Signature <span className="fya-text-gold">Work</span>
            </h2>
          </div>

          <div className="fya-showcase-grid">
            <div className="fya-project-card fya-project-large">
              <img src={defaultImages.project1} alt="Commercial Building" />
              <div className="fya-project-info">
                <span className="fya-project-category">COMMERCIAL</span>
                <h3>Modern Office Complex</h3>
                <span className="fya-project-location">Chennai, India</span>
              </div>
            </div>
            <div className="fya-project-card">
              <img src={defaultImages.project2} alt="Residential Building" />
              <div className="fya-project-info">
                <span className="fya-project-category">RESIDENTIAL</span>
                <h3>Luxury Apartments</h3>
                <span className="fya-project-location">Pondicherry, India</span>
              </div>
            </div>
            <div className="fya-project-card">
              <img src={defaultImages.project3} alt="Industrial Project" />
              <div className="fya-project-info">
                <span className="fya-project-category">INDUSTRIAL</span>
                <h3>Manufacturing Facility</h3>
                <span className="fya-project-location">Bangalore, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          EXPERIENCE — Gold Accent
      ================================================== */}
      <section className="fya-experience">
        <div className="fya-container">
          <div className="fya-experience-grid">
            <div className="fya-experience-number">
              <span className="fya-number-value">{experience}</span>
              <Plus size={32} className="fya-number-plus" />
              <span className="fya-number-suffix">YEARS</span>
            </div>
            <div className="fya-experience-content">
              <div className="fya-section-label">
                <span className="fya-label-number">04</span>
                <span className="fya-label-line" />
                <span className="fya-label-text">EXPERIENCE</span>
              </div>
              <h2 className="fya-experience-title">
                Experience that
                <br />
                <span className="fya-text-gold">builds confidence.</span>
              </h2>
              <p className="fya-experience-text">
                Over the years, our work has been shaped by the lessons,
                challenges and relationships built through every project.
                We've grown from a small local builder to a respected
                name in construction.
              </p>
              <div className="fya-experience-metrics">
                <div className="fya-metric">
                  <span className="fya-metric-value">50+</span>
                  <span className="fya-metric-label">Ongoing Projects</span>
                </div>
                <div className="fya-metric">
                  <span className="fya-metric-value">1000+</span>
                  <span className="fya-metric-label">Happy Clients</span>
                </div>
                <div className="fya-metric">
                  <span className="fya-metric-value">15</span>
                  <span className="fya-metric-label">Awards Won</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          VALUES — Blue & White
      ================================================== */}
      <section className="fya-values">
        <div className="fya-container">
          <div className="fya-values-header">
            <div className="fya-section-label">
              <span className="fya-label-number">05</span>
              <span className="fya-label-line" />
              <span className="fya-label-text">WHAT WE STAND FOR</span>
            </div>
            <h2 className="fya-values-title">
              Principles behind
              <br />
              every <span className="fya-text-blue">project.</span>
            </h2>
          </div>

          <div className="fya-values-grid">
            <div className="fya-value-card">
              <div className="fya-value-icon">
                <Target size={24} />
              </div>
              <span className="fya-value-number">01</span>
              <h3 className="fya-value-title">Quality</h3>
              <p className="fya-value-text">
                We believe quality is not an extra feature.
                It is the foundation of every project we undertake.
              </p>
            </div>

            <div className="fya-value-card">
              <div className="fya-value-icon">
                <Award size={24} />
              </div>
              <span className="fya-value-number">02</span>
              <h3 className="fya-value-title">Integrity</h3>
              <p className="fya-value-text">
                Clear communication and honest execution
                define how we work with our clients.
              </p>
            </div>

            <div className="fya-value-card">
              <div className="fya-value-icon">
                <Building2 size={24} />
              </div>
              <span className="fya-value-number">03</span>
              <h3 className="fya-value-title">Precision</h3>
              <p className="fya-value-text">
                From planning to finishing, attention to
                detail remains central to our process.
              </p>
            </div>

            <div className="fya-value-card">
              <div className="fya-value-icon">
                <Users size={24} />
              </div>
              <span className="fya-value-number">04</span>
              <h3 className="fya-value-title">Responsibility</h3>
              <p className="fya-value-text">
                We take ownership of every stage of
                a project through completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          TEAM SECTION — Premium
      ================================================== */}
      <section className="fya-team">
        <div className="fya-container">
          <div className="fya-team-grid">
            <div className="fya-team-content">
              <div className="fya-section-label">
                <span className="fya-label-number">06</span>
                <span className="fya-label-line" />
                <span className="fya-label-text">OUR TEAM</span>
              </div>
              <h2 className="fya-team-title">
                The Minds Behind
                <br />
                <span className="fya-text-blue">Our Success</span>
              </h2>
              <p className="fya-team-text">
                Our team of engineers, architects, and project
                managers brings decades of combined experience
                to every project.
              </p>
              <a href="/team" className="fya-link-arrow">
                <span>Meet our team</span>
                <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="fya-team-image">
              <img src={defaultImages.team} alt="FIYA Builders Team" />
              <div className="fya-team-overlay" />
              <div className="fya-team-badge">
                <Users size={20} />
                <span>150+ Experts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          CTA — Premium Gold
      ================================================== */}
      <section className="fya-cta">
        <div className="fya-container">
          <div className="fya-cta-box">
            <div className="fya-cta-pattern" />
            <div className="fya-cta-content">
              <span className="fya-cta-label">READY TO BUILD?</span>
              <h2 className="fya-cta-title">
                Let's Create Something
                <br />
                <span className="fya-text-gold">Extraordinary Together</span>
              </h2>
              <p className="fya-cta-text">
                Partner with us for your next project and experience
                the difference of working with industry leaders.
              </p>
              <div className="fya-cta-actions">
                <a href="/contact" className="fya-btn-gold">
                  START A CONVERSATION
                  <ArrowUpRight size={18} />
                </a>
                <a href="/projects" className="fya-btn-outline">
                  VIEW OUR WORK
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default AboutPage;