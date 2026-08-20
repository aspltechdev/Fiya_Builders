// import { useEffect, useState } from "react";
// import { ArrowUpRight } from "lucide-react";

// import api from "../../services/api.js";

// import "./ServicesSection.css";

// const ServicesSection = () => {
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadServices();
//   }, []);

//   const loadServices = async () => {
//     try {
//       const response = await api.get("/services");

//       setServices(
//         response.data?.data ||
//           response.data ||
//           []
//       );
//     } catch (error) {
//       console.error(
//         "Services Load Error:",
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

//     const API_URL =
//       import.meta.env.VITE_API_URL?.replace(
//         "/api",
//         ""
//       ) || "http://localhost:5000";

//     return `${API_URL}${image}`;
//   };

//   const defaultServices = [
//     {
//       id: 1,
//       title: "Residential Construction",
//       description:
//         "Thoughtfully planned homes built around quality, functionality and lasting value.",
//       image: null,
//     },
//     {
//       id: 2,
//       title: "Commercial Construction",
//       description:
//         "Purpose-built commercial spaces designed for performance, efficiency and growth.",
//       image: null,
//     },
//     {
//       id: 3,
//       title: "Civil Engineering",
//       description:
//         "Engineering solutions driven by precision, safety and technical expertise.",
//       image: null,
//     },
//     {
//       id: 4,
//       title: "Renovation & Remodeling",
//       description:
//         "Transforming existing spaces through intelligent planning and refined execution.",
//       image: null,
//     },
//     {
//       id: 5,
//       title: "Turnkey Solutions",
//       description:
//         "Complete project execution from initial concept to final handover.",
//       image: null,
//     },
//   ];

//   const displayServices =
//     services.length > 0
//       ? services
//       : defaultServices;

//   return (
//     <section
//       className="fiya-services"
//       id="services"
//     >

//       <div className="public-container">

//         {/* =========================================
//             HEADER
//         ========================================= */}

//         <div className="fiya-services-header">

//           <div className="fiya-services-label">

//             <span className="fiya-services-number">
//               02
//             </span>

//             <span>
//               OUR EXPERTISE
//             </span>

//             <span className="fiya-services-line" />

//           </div>


//           <div className="fiya-services-heading">

//             <h2>
//               Built with
//               <br />
//               <span>purpose.</span>
//             </h2>

//             <p>
//               From foundations to finished
//               spaces, our expertise brings
//               together construction,
//               engineering and execution.
//             </p>

//           </div>

//         </div>


//         {/* =========================================
//             SERVICES LIST
//         ========================================= */}

//         <div className="fiya-services-list">

//           {loading ? (
//             <div className="fiya-services-loading">
//               Loading services...
//             </div>
//           ) : (
//             displayServices.map(
//               (service, index) => (
//                 <article
//                   className="fiya-service-item"
//                   key={service.id}
//                 >

//                   {/* NUMBER */}

//                   <div className="fiya-service-number">
//                     {String(index + 1).padStart(
//                       2,
//                       "0"
//                     )}
//                   </div>


//                   {/* TITLE */}

//                   <div className="fiya-service-title">

//                     <h3>
//                       {service.title}
//                     </h3>

//                   </div>


//                   {/* DESCRIPTION */}

//                   <div className="fiya-service-description">

//                     <p>
//                       {
//                         service.description
//                       }
//                     </p>

//                     <a
//                       href="/services"
//                       className="fiya-service-arrow"
//                       aria-label={`Explore ${service.title}`}
//                     >
//                       <ArrowUpRight
//                         size={19}
//                         strokeWidth={1.6}
//                       />
//                     </a>

//                   </div>


//                   {/* IMAGE */}

//                   <div className="fiya-service-image">

//                     {service.image ? (
//                       <img
//                         src={getImageUrl(
//                           service.image
//                         )}
//                         alt={
//                           service.title
//                         }
//                       />
//                     ) : (
//                       <div className="fiya-service-image-placeholder">
//                         <span>
//                           FIYA
//                         </span>
//                       </div>
//                     )}

//                   </div>

//                 </article>
//               )
//             )
//           )}

//         </div>


//         {/* =========================================
//             FOOTER STATEMENT
//         ========================================= */}

//         <div className="fiya-services-footer">

//           <p>
//             One partner.
//             <br />
//             Complete construction
//             expertise.
//           </p>

//           <a
//             href="/services"
//             className="fiya-services-link"
//           >
//             <span>
//               View all services
//             </span>

//             <ArrowUpRight
//               size={17}
//               strokeWidth={1.7}
//             />
//           </a>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default ServicesSection;






import { useEffect, useState } from "react";
import { FaArrowRight, FaHardHat, FaBuilding, FaDraftingCompass, FaHome, FaTools, FaCheckCircle } from "react-icons/fa";

import api from "../../services/api.js";

import "./ServicesSection.css";

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      const response = await api.get("/services");
      setServices(response.data?.data || response.data || []);
    } catch (error) {
      console.error("Services Load Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const getImageUrl = (image) => {
    if (!image) return "";
    if (image.startsWith("http://") || image.startsWith("https://")) {
      return image;
    }
    const API_URL =
      import.meta.env.VITE_API_URL?.replace("/api", "") ||
      "http://localhost:5000";
    return `${API_URL}${image}`;
  };

  const defaultServices = [
    {
      id: 1,
      title: "Residential Construction",
      description: "Thoughtfully planned homes built around quality, functionality and lasting value.",
      icon: FaHome,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      features: ["Custom Homes", "Villa Projects", "Apartments"],
    },
    {
      id: 2,
      title: "Commercial Construction",
      description: "Purpose-built commercial spaces designed for performance, efficiency and growth.",
      icon: FaBuilding,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      features: ["Office Buildings", "Retail Spaces", "Corporate Campuses"],
    },
    {
      id: 3,
      title: "Civil Engineering",
      description: "Engineering solutions driven by precision, safety and technical expertise.",
      icon: FaDraftingCompass,
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
      features: ["Structural Design", "Infrastructure", "Site Development"],
    },
    {
      id: 4,
      title: "Renovation & Remodeling",
      description: "Transforming existing spaces through intelligent planning and refined execution.",
      icon: FaTools,
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
      features: ["Structural Upgrades", "Facade Restoration", "Modernization"],
    },
    {
      id: 5,
      title: "Turnkey Solutions",
      description: "Complete project execution from initial concept to final handover.",
      icon: FaHardHat,
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
      features: ["Project Management", "Complete Execution", "Timely Delivery"],
    },
  ];

  const displayServices = services.length > 0 ? services : defaultServices;

  return (
    <section className="fya-services" id="services">
      <div className="fya-container">
        
        {/* =========================================
            HEADER
        ========================================= */}
        <div className="fya-services-header">
          <div className="fya-section-label">
            <span className="fya-section-number">02</span>
            <span className="fya-section-label-text">OUR EXPERTISE</span>
            <span className="fya-section-line" />
          </div>

          <div className="fya-services-heading">
            <h2 className="fya-services-title">
              Built With <span className="fya-text-gold">Purpose</span>
            </h2>
            <p className="fya-services-subtitle">
              From foundations to finished spaces, our expertise brings
              together construction, engineering and execution.
            </p>
          </div>
        </div>

        {/* =========================================
            SERVICES GRID
        ========================================= */}
        {loading ? (
          <div className="fya-services-loading">
            <div className="fya-loading-spinner" />
            <span>Loading services...</span>
          </div>
        ) : (
          <div className="fya-services-grid">
            {displayServices.map((service, index) => {
              const ServiceIcon = service.icon || FaHardHat;
              
              return (
                <article className="fya-service-card" key={service.id || index}>
                  {/* Image */}
                  <div className="fya-service-image">
                    {service.image ? (
                      <img
                        src={getImageUrl(service.image)}
                        alt={service.title}
                      />
                    ) : (
                      <div className="fya-service-image-placeholder">
                        <ServiceIcon />
                      </div>
                    )}
                    <div className="fya-service-image-overlay" />
                    
                    {/* Icon Badge */}
                    <div className="fya-service-icon-badge">
                      <ServiceIcon />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="fya-service-content">
                    <span className="fya-service-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    
                    <h3 className="fya-service-title">
                      {service.title}
                    </h3>
                    
                    <p className="fya-service-description">
                      {service.description}
                    </p>

                    {/* Features */}
                    {service.features && (
                      <ul className="fya-service-features">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="fya-service-feature">
                            <FaCheckCircle className="fya-feature-icon" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Link */}
                    <a
                      href="/services"
                      className="fya-service-link"
                      aria-label={`Explore ${service.title}`}
                    >
                      <span>Learn More</span>
                      <FaArrowRight className="fya-service-arrow" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* =========================================
            FOOTER STATEMENT
        ========================================= */}
        <div className="fya-services-footer">
          <div className="fya-services-footer-content">
            <p className="fya-services-footer-text">
              One partner.
              <br />
              <span className="fya-text-blue">Complete construction expertise.</span>
            </p>
            
            <a href="/services" className="fya-services-footer-link">
              <span>View All Services</span>
              <FaArrowRight />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;