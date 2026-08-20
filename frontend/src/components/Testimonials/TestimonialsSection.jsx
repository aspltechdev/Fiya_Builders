// import { useEffect, useState } from "react";
// import {
//   ArrowLeft,
//   ArrowRight,
//   Quote,
// } from "lucide-react";

// import api from "../../services/api.js";

// import "./TestimonialsSection.css";

// const defaultTestimonials = [
//   {
//     id: 1,
//     quote:
//       "FIYA Builders understood our requirements from the beginning and delivered the project with impressive attention to detail and quality.",
//     name: "Client Name",
//     role: "Residential Client",
//     location: "Pondicherry",
//   },
//   {
//     id: 2,
//     quote:
//       "The entire construction process was handled professionally. Communication was clear and the execution was exactly what we expected.",
//     name: "Client Name",
//     role: "Commercial Client",
//     location: "Pondicherry",
//   },
//   {
//     id: 3,
//     quote:
//       "What stood out was their commitment to quality. The team was responsive, transparent and focused throughout the project.",
//     name: "Client Name",
//     role: "Project Client",
//     location: "Pondicherry",
//   },
// ];

// const TestimonialsSection = () => {
//   const [testimonials, setTestimonials] =
//     useState(defaultTestimonials);

//   const [activeIndex, setActiveIndex] =
//     useState(0);

//   useEffect(() => {
//     loadTestimonials();
//   }, []);

//   const loadTestimonials = async () => {
//     try {
//       const response = await api.get(
//         "/testimonials"
//       );

//       const data =
//         response.data?.data ||
//         response.data ||
//         [];

//       if (
//         Array.isArray(data) &&
//         data.length > 0
//       ) {
//         setTestimonials(data);
//       }
//     } catch (error) {
//       console.log(
//         "Testimonials API not available yet."
//       );
//     }
//   };

//   const current =
//     testimonials[activeIndex];

//   const nextTestimonial = () => {
//     setActiveIndex(
//       (prev) =>
//         (prev + 1) %
//         testimonials.length
//     );
//   };

//   const previousTestimonial = () => {
//     setActiveIndex(
//       (prev) =>
//         (prev - 1 + testimonials.length) %
//         testimonials.length
//     );
//   };

//   if (!current) {
//     return null;
//   }

//   return (
//     <section
//       className="fiya-testimonials"
//       id="testimonials"
//     >
//       <div className="public-container">

//         {/* =========================================
//             HEADER
//         ========================================= */}

//         <div className="fiya-testimonials-label">

//           <span className="fiya-testimonials-number">
//             08
//           </span>

//           <span>
//             CLIENT PERSPECTIVE
//           </span>

//           <span className="fiya-testimonials-line" />

//         </div>


//         {/* =========================================
//             MAIN QUOTE
//         ========================================= */}

//         <div className="fiya-testimonials-main">

//           {/* LEFT */}

//           <div className="fiya-testimonials-side">

//             <Quote
//               size={42}
//               strokeWidth={1}
//             />

//             <span>
//               WHAT OUR
//               <br />
//               CLIENTS SAY
//             </span>

//           </div>


//           {/* QUOTE */}

//           <div className="fiya-testimonial-content">

//             <div className="fiya-testimonial-index">
//               {String(
//                 activeIndex + 1
//               ).padStart(2, "0")}
//               {" "}
//               /{" "}
//               {String(
//                 testimonials.length
//               ).padStart(2, "0")}
//             </div>

//             <blockquote>
//               “
//               {current.quote}
//               ”
//             </blockquote>


//             {/* CLIENT */}

//             <div className="fiya-testimonial-client">

//               <div className="fiya-testimonial-client-line" />

//               <div>

//                 <strong>
//                   {current.name ||
//                     current.clientName ||
//                     "Client"}
//                 </strong>

//                 <span>
//                   {current.role ||
//                     current.designation ||
//                     "Client"}
//                 </span>

//                 <span>
//                   {current.location ||
//                     "Pondicherry"}
//                 </span>

//               </div>

//             </div>

//           </div>

//         </div>


//         {/* =========================================
//             CONTROLS
//         ========================================= */}

//         <div className="fiya-testimonials-controls">

//           <div className="fiya-testimonials-progress">

//             <span>
//               {String(
//                 activeIndex + 1
//               ).padStart(2, "0")}
//             </span>

//             <div className="fiya-testimonials-progress-track">

//               <div
//                 className="fiya-testimonials-progress-bar"
//                 style={{
//                   width: `${
//                     ((activeIndex + 1) /
//                       testimonials.length) *
//                     100
//                   }%`,
//                 }}
//               />

//             </div>

//             <span>
//               {String(
//                 testimonials.length
//               ).padStart(2, "0")}
//             </span>

//           </div>


//           <div className="fiya-testimonials-buttons">

//             <button
//               type="button"
//               onClick={
//                 previousTestimonial
//               }
//               aria-label="Previous testimonial"
//             >
//               <ArrowLeft
//                 size={18}
//                 strokeWidth={1.5}
//               />
//             </button>

//             <button
//               type="button"
//               onClick={
//                 nextTestimonial
//               }
//               aria-label="Next testimonial"
//             >
//               <ArrowRight
//                 size={18}
//                 strokeWidth={1.5}
//               />
//             </button>

//           </div>

//         </div>


//         {/* =========================================
//             FOOTER
//         ========================================= */}

//         <div className="fiya-testimonials-footer">

//           <span>
//             BUILT ON RELATIONSHIPS
//           </span>

//           <p>
//             Great projects are built with
//             great partnerships.
//           </p>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;



































import { useEffect, useState } from "react";
import { 
  FaArrowLeft, 
  FaArrowRight, 
  FaQuoteLeft,
  FaStar,
  FaMapMarkerAlt,
  FaBuilding,
  FaHome,
  FaBriefcase
} from "react-icons/fa";

import api from "../../services/api.js";

import "./TestimonialsSection.css";

const defaultTestimonials = [
  {
    id: 1,
    quote:
      "FIYA Builders understood our requirements from the beginning and delivered the project with impressive attention to detail and quality.",
    name: "Rajesh Kumar",
    role: "Residential Client",
    location: "Pondicherry",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    projectType: "Residential",
    projectIcon: FaHome,
  },
  {
    id: 2,
    quote:
      "The entire construction process was handled professionally. Communication was clear and the execution was exactly what we expected.",
    name: "Priya Sharma",
    role: "Commercial Client",
    location: "Chennai",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    projectType: "Commercial",
    projectIcon: FaBuilding,
  },
  {
    id: 3,
    quote:
      "What stood out was their commitment to quality. The team was responsive, transparent and focused throughout the project.",
    name: "Michael Chen",
    role: "Project Client",
    location: "Bangalore",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    projectType: "Turnkey",
    projectIcon: FaBriefcase,
  },
];

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState(defaultTestimonials);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    try {
      const response = await api.get("/testimonials");
      const data = response.data?.data || response.data || [];
      if (Array.isArray(data) && data.length > 0) {
        setTestimonials(data);
      }
    } catch (error) {
      console.log("Testimonials API not available yet.");
    }
  };

  const current = testimonials[activeIndex];

  const nextTestimonial = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const previousTestimonial = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  if (!current) {
    return null;
  }

  const CurrentProjectIcon = current.projectIcon || FaBuilding;

  return (
    <section className="fya-testimonials" id="testimonials">
      <div className="fya-container">
        
        {/* =========================================
            HEADER
        ========================================= */}
        <div className="fya-testimonials-header">
          <div className="fya-section-label">
            <span className="fya-section-number">08</span>
            <span className="fya-section-label-text">CLIENT PERSPECTIVE</span>
            <span className="fya-section-line" />
          </div>

          <div className="fya-testimonials-heading">
            <h2 className="fya-testimonials-title">
              What Our <span className="fya-text-gold">Clients Say</span>
            </h2>
          </div>
        </div>

        {/* =========================================
            MAIN TESTIMONIAL
        ========================================= */}
        <div className={`fya-testimonials-main ${isAnimating ? 'fya-testimonials-animating' : ''}`}>
          
          {/* Client Image */}
          <div className="fya-testimonial-image">
            <img src={current.image} alt={current.name} />
            <div className="fya-testimonial-image-overlay" />
            
            {/* Quote Icon */}
            <div className="fya-testimonial-quote-icon">
              <FaQuoteLeft />
            </div>
          </div>

          {/* Content */}
          <div className="fya-testimonial-content">
            {/* Rating */}
            <div className="fya-testimonial-rating">
              {[...Array(current.rating || 5)].map((_, idx) => (
                <FaStar key={idx} className="fya-rating-star" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="fya-testimonial-quote">
              "{current.quote}"
            </blockquote>

            {/* Client Info */}
            <div className="fya-testimonial-client">
              <div className="fya-testimonial-client-info">
                <strong className="fya-client-name">
                  {current.name || current.clientName || "Client"}
                </strong>
                <span className="fya-client-role">
                  {current.role || current.designation || "Client"}
                </span>
                <span className="fya-client-location">
                  <FaMapMarkerAlt className="fya-location-icon" />
                  {current.location || "Pondicherry"}
                </span>
              </div>

              {/* Project Type Badge */}
              <div className="fya-project-type-badge">
                <CurrentProjectIcon className="fya-project-icon" />
                <span>{current.projectType || "Project"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            CONTROLS
        ========================================= */}
        <div className="fya-testimonials-controls">
          <div className="fya-testimonials-progress">
            <span className="fya-progress-number">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <div className="fya-progress-track">
              <div
                className="fya-progress-bar"
                style={{
                  width: `${((activeIndex + 1) / testimonials.length) * 100}%`,
                }}
              />
            </div>
            <span className="fya-progress-number">
              {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>

          <div className="fya-testimonials-buttons">
            <button
              type="button"
              onClick={previousTestimonial}
              aria-label="Previous testimonial"
              className="fya-nav-btn"
            >
              <FaArrowLeft />
            </button>
            <button
              type="button"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="fya-nav-btn"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* =========================================
            FOOTER
        ========================================= */}
        <div className="fya-testimonials-footer">
          <span className="fya-footer-label">BUILT ON RELATIONSHIPS</span>
          <div className="fya-footer-line" />
          <p className="fya-footer-text">
            Great projects are built with great partnerships.
          </p>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;