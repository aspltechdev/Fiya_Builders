// import { useEffect, useState } from "react";
// import { FaArrowRight } from "react-icons/fa";

// import api from "../../services/api.js";

// import "./StatsSection.css";

// const defaultStats = [
//   {
//     id: 1,
//     value: "10+",
//     label: "Years Experience",
//     description: "Industry expertise",
//     image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
//   },
//   {
//     id: 2,
//     value: "150+",
//     label: "Projects Delivered",
//     description: "Successful completions",
//     image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
//   },
//   {
//     id: 3,
//     value: "50+",
//     label: "Professionals",
//     description: "Expert team members",
//     image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
//   },
//   {
//     id: 4,
//     value: "98%",
//     label: "Client Satisfaction",
//     description: "Happy clients",
//     image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
//   },
// ];

// const StatsSection = () => {
//   const [stats, setStats] = useState(defaultStats);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadStats();
//   }, []);

//   const loadStats = async () => {
//     try {
//       const response = await api.get("/stats");
//       const data = response.data?.data || response.data || [];
//       if (Array.isArray(data) && data.length) {
//         setStats(data.slice(0, 4));
//       }
//     } catch (error) {
//       console.log("Stats API not available yet. Using defaults.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="fya-stats" id="stats">
//       <div className="fya-container">
        
//         {/* =====================================
//             HEADER
//         ===================================== */}
//         <div className="fya-stats-header">
//           <div className="fya-section-label">
//             <span className="fya-section-number">06</span>
//             <span className="fya-section-label-text">FIYA BY NUMBERS</span>
//             <span className="fya-section-line" />
//           </div>
//         </div>

//         {/* =====================================
//             INTRO
//         ===================================== */}
//         <div className="fya-stats-intro">
//           <h2 className="fya-stats-title">
//             Experience You
//             <br />
//             Can <span className="fya-text-gold">Build On</span>
//           </h2>
//           <p className="fya-stats-description">
//             Every number represents years of experience, projects completed
//             and relationships built through our commitment to quality.
//           </p>
//         </div>

//         {/* =====================================
//             STATISTICS GRID WITH IMAGES
//         ===================================== */}
//         <div className="fya-stats-grid">
//           {stats.map((stat, index) => (
//             <div className="fya-stat-card" key={stat.id || index}>
//               {/* Background Image */}
//               <div className="fya-stat-image">
//                 <img src={stat.image} alt={stat.label} />
//                 <div className="fya-stat-image-overlay" />
                
//                 {/* Number Badge */}
//                 <span className="fya-stat-badge">
//                   {String(index + 1).padStart(2, "0")}
//                 </span>
//               </div>

//               {/* Content */}
//               <div className="fya-stat-content">
//                 <div className="fya-stat-value">
//                   {stat.value}
//                 </div>

//                 <div className="fya-stat-label">
//                   {stat.label}
//                 </div>

//                 <div className="fya-stat-description">
//                   {stat.description}
//                 </div>

//                 <div className="fya-stat-footer">
//                   <span className="fya-stat-line" />
//                   <FaArrowRight className="fya-stat-arrow" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* =====================================
//             FOOTER WITH IMAGE
//         ===================================== */}
//         <div className="fya-stats-footer">
//           <div className="fya-stats-footer-image">
//             <img 
//               src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80" 
//               alt="Construction Excellence"
//             />
//             <div className="fya-stats-footer-overlay" />
//           </div>
          
//           <div className="fya-stats-footer-content">
//             <span className="fya-stats-footer-label">
//               BUILT OVER TIME
//             </span>
//             <div className="fya-stats-footer-line" />
//             <p className="fya-stats-footer-text">
//               Quality isn't a milestone. It's a standard
//               we maintain on every project.
//             </p>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default StatsSection;

// src/components/sections/StatsSection/StatsSection.jsx
import { useEffect, useState } from "react";
import { FaArrowRight, FaTrophy, FaBuilding, FaUsers, FaStar } from "react-icons/fa";

import api from "../../services/api.js";
import "./StatsSection.css";

const defaultStats = [
  {
    id: 1,
    value: "10+",
    label: "Years Experience",
    description: "Industry expertise",
    icon: FaTrophy,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    color: "#D71920",
  },
  {
    id: 2,
    value: "150+",
    label: "Projects Delivered",
    description: "Successful completions",
    icon: FaBuilding,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    color: "#3D5D96",
  },
  {
    id: 3,
    value: "50+",
    label: "Professionals",
    description: "Expert team members",
    icon: FaUsers,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    color: "#16A34A",
  },
  {
    id: 4,
    value: "98%",
    label: "Client Satisfaction",
    description: "Happy clients",
    icon: FaStar,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
    color: "#C9972B",
  },
];

const StatsSection = () => {
  const [stats, setStats] = useState(defaultStats);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const response = await api.get("/stats");
      const data = response.data?.data || response.data || [];
      if (Array.isArray(data) && data.length) {
        setStats(data.slice(0, 4));
      }
    } catch (error) {
      console.log("Stats API not available yet. Using defaults.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="fya-stats" id="stats">
      <div className="fya-stats__container">
        
        {/* =========================================
            HEADER
        ========================================= */}
        <div className="fya-stats__header">
          <div className="fya-stats__label-wrapper">
            <span className="fya-stats__number">06</span>
            <span className="fya-stats__label">FIYA BY NUMBERS</span>
            <span className="fya-stats__divider-line" />
          </div>
        </div>

        {/* =========================================
            INTRO
        ========================================= */}
        <div className="fya-stats__intro">
          <h2 className="fya-stats__title">
            Experience You
            <br />
            Can <span className="fya-stats__title-highlight">Build On</span>
          </h2>
          <p className="fya-stats__description">
            Every number represents years of experience, projects completed
            and relationships built through our commitment to quality.
          </p>
        </div>

        {/* =========================================
            STATISTICS GRID
        ========================================= */}
        <div className="fya-stats__grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div className="fya-stats__card" key={stat.id || index}>
                {/* Background Image */}
                <div className="fya-stats__card-media">
                  <img 
                    src={stat.image} 
                    alt={stat.label} 
                    className="fya-stats__card-image" 
                  />
                  <div className="fya-stats__card-overlay" />
                  
                  {/* Icon */}
                  <div 
                    className="fya-stats__card-icon" 
                    style={{ background: stat.color }}
                  >
                    <Icon className="fya-stats__card-icon-svg" />
                  </div>
                </div>

                {/* Content */}
                <div className="fya-stats__card-body">
                  <div 
                    className="fya-stats__card-value" 
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>

                  <div className="fya-stats__card-label">
                    {stat.label}
                  </div>

                  <div className="fya-stats__card-description">
                    {stat.description}
                  </div>

                  <div className="fya-stats__card-footer">
                    <span className="fya-stats__card-footer-line" />
                    <FaArrowRight className="fya-stats__card-footer-arrow" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================
            FOOTER BANNER
        ========================================= */}
        <div className="fya-stats__banner">
          <div className="fya-stats__banner-media">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80" 
              alt="Construction Excellence"
              className="fya-stats__banner-image"
            />
            <div className="fya-stats__banner-overlay" />
          </div>
          
          <div className="fya-stats__banner-content">
            <span className="fya-stats__banner-label">
              BUILT OVER TIME
            </span>
            <div className="fya-stats__banner-divider" />
            <p className="fya-stats__banner-text">
              Quality isn't a milestone. It's a standard
              we maintain on every project.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;