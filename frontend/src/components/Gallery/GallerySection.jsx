// import { useEffect, useState } from "react";
// import { FaArrowRight, FaSearch, FaMapMarkerAlt } from "react-icons/fa";

// import api from "../../services/api.js";

// import "./GallerySection.css";

// const GallerySection = () => {
//   const [gallery, setGallery] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [hoveredItem, setHoveredItem] = useState(null);

//   useEffect(() => {
//     loadGallery();
//   }, []);

//   const loadGallery = async () => {
//     try {
//       const response = await api.get("/gallery");
//       const data = response.data?.data || response.data || [];
//       setGallery(data.slice(0, 6));
//     } catch (error) {
//       console.error("Gallery Load Error:", error);
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

//   const defaultGallery = [
//     {
//       id: 1,
//       image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
//       title: "Modern Architecture",
//       category: "ARCHITECTURE",
//       location: "Chennai, India",
//     },
//     {
//       id: 2,
//       image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
//       title: "Residential Construction",
//       category: "RESIDENTIAL",
//       location: "Pondicherry, India",
//     },
//     {
//       id: 3,
//       image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
//       title: "Interior Finish",
//       category: "INTERIORS",
//       location: "Bangalore, India",
//     },
//     {
//       id: 4,
//       image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
//       title: "Project Execution",
//       category: "CONSTRUCTION",
//       location: "Coimbatore, India",
//     },
//     {
//       id: 5,
//       image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
//       title: "Commercial Building",
//       category: "COMMERCIAL",
//       location: "Chennai, India",
//     },
//     {
//       id: 6,
//       image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
//       title: "Completed Project",
//       category: "COMPLETED",
//       location: "Pondicherry, India",
//     },
//   ];

//   const displayGallery = gallery.length > 0 ? gallery : defaultGallery;

//   return (
//     <section className="fya-gallery" id="gallery">
//       <div className="fya-container">
        
//         {/* =========================================
//             HEADER
//         ========================================= */}
//         <div className="fya-gallery-header">
//           <div className="fya-section-label">
//             <span className="fya-section-number">07</span>
//             <span className="fya-section-label-text">PROJECT GALLERY</span>
//             <span className="fya-section-line" />
//           </div>

//           <div className="fya-gallery-heading">
//             <h2 className="fya-gallery-title">
//               A Glimpse Into
//               <br />
//               Our <span className="fya-text-gold">Work</span>
//             </h2>
//             <div className="fya-gallery-heading-right">
//               <p className="fya-gallery-description">
//                 From raw structures to finished spaces, every image
//                 represents the detail and discipline behind our work.
//               </p>

//               <a href="/gallery" className="fya-gallery-link">
//                 <span>View Full Gallery</span>
//                 <span className="fya-gallery-link-icon">
//                   <FaArrowRight />
//                 </span>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* =========================================
//             GALLERY GRID
//         ========================================= */}
//         {loading ? (
//           <div className="fya-gallery-loading">
//             <div className="fya-loading-spinner" />
//             <span>Loading gallery...</span>
//           </div>
//         ) : (
//           <div className="fya-gallery-grid">
//             {displayGallery.map((item, index) => (
//               <div
//                 className={`fya-gallery-item ${index === 0 ? 'fya-gallery-item-large' : ''} ${index === 3 ? 'fya-gallery-item-medium' : ''}`}
//                 key={item.id}
//                 onMouseEnter={() => setHoveredItem(item.id)}
//                 onMouseLeave={() => setHoveredItem(null)}
//               >
//                 <div className="fya-gallery-image">
//                   {item.image ? (
//                     <img
//                       src={getImageUrl(item.image)}
//                       alt={item.title || "FIYA Builders project"}
//                     />
//                   ) : (
//                     <div className="fya-gallery-placeholder">
//                       <span>FIYA</span>
//                     </div>
//                   )}

//                   {/* Overlay */}
//                   <div className={`fya-gallery-overlay ${hoveredItem === item.id ? 'fya-gallery-overlay-visible' : ''}`}>
//                     <div className="fya-gallery-overlay-content">
//                       <span className="fya-gallery-category">
//                         {item.category || "PROJECT"}
//                       </span>
//                       <h3 className="fya-gallery-item-title">
//                         {item.title || `Project ${String(index + 1).padStart(2, "0")}`}
//                       </h3>
//                       {item.location && (
//                         <span className="fya-gallery-location">
//                           <FaMapMarkerAlt className="fya-gallery-location-icon" />
//                           {item.location}
//                         </span>
//                       )}
//                     </div>
                    
//                     <div className="fya-gallery-view-btn">
//                       <FaSearch />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* =========================================
//             FOOTER STATEMENT
//         ========================================= */}
//         <div className="fya-gallery-footer">
//           <span className="fya-gallery-footer-label">
//             FIYA / VISUAL ARCHIVE
//           </span>
//           <div className="fya-gallery-footer-line" />
//           <p className="fya-gallery-footer-text">
//             Built with precision. Captured through detail.
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default GallerySection;

// src/components/sections/GallerySection/GallerySection.jsx
import { useEffect, useState } from "react";
import { FaArrowRight, FaSearch, FaMapMarkerAlt, FaExpand } from "react-icons/fa";

import api from "../../services/api.js";
import "./GallerySection.css";

const GallerySection = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    loadGallery();
  }, []);

  const loadGallery = async () => {
    try {
      const response = await api.get("/gallery");
      const data = response.data?.data || response.data || [];
      setGallery(data.slice(0, 6));
    } catch (error) {
      console.error("Gallery Load Error:", error);
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
      "http://localhost:5041";
    return `${API_URL}${image}`;
  };

  const defaultGallery = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      title: "Modern Architecture",
      category: "ARCHITECTURE",
      location: "Chennai, India",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      title: "Residential Construction",
      category: "RESIDENTIAL",
      location: "Pondicherry, India",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
      title: "Interior Finish",
      category: "INTERIORS",
      location: "Bangalore, India",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
      title: "Project Execution",
      category: "CONSTRUCTION",
      location: "Coimbatore, India",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      title: "Commercial Building",
      category: "COMMERCIAL",
      location: "Chennai, India",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      title: "Completed Project",
      category: "COMPLETED",
      location: "Pondicherry, India",
    },
  ];

  const displayGallery = gallery.length > 0 ? gallery : defaultGallery;

  return (
    <section className="fya-gallery" id="gallery">
      <div className="fya-gallery__container">
        
        {/* =========================================
            HEADER
        ========================================= */}
        <div className="fya-gallery__header">
          <div className="fya-gallery__label-wrapper">
            <span className="fya-gallery__number">07</span>
            <span className="fya-gallery__label">PROJECT GALLERY</span>
            <span className="fya-gallery__divider-line" />
          </div>

          <div className="fya-gallery__heading">
            <h2 className="fya-gallery__title">
              A Glimpse Into
              <br />
              Our <span className="fya-gallery__title-highlight">Work</span>
            </h2>
            <div className="fya-gallery__heading-right">
              <p className="fya-gallery__description">
                From raw structures to finished spaces, every image
                represents the detail and discipline behind our work.
              </p>

              <a href="/gallery" className="fya-gallery__link">
                <span className="fya-gallery__link-text">View Full Gallery</span>
                <span className="fya-gallery__link-icon">
                  <FaArrowRight />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* =========================================
            GALLERY GRID
        ========================================= */}
        {loading ? (
          <div className="fya-gallery__loading">
            <div className="fya-gallery__spinner" />
            <span>Loading gallery...</span>
          </div>
        ) : (
          <div className="fya-gallery__grid">
            {displayGallery.map((item, index) => {
              const isLarge = index === 0;
              const isMedium = index === 3;
              const isHovered = hoveredItem === item.id;
              
              return (
                <div
                  className={`fya-gallery__item 
                    ${isLarge ? 'fya-gallery__item--large' : ''} 
                    ${isMedium ? 'fya-gallery__item--medium' : ''}`}
                  key={item.id}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="fya-gallery__item-media">
                    {item.image ? (
                      <img
                        src={getImageUrl(item.image)}
                        alt={item.title || "FIYA Builders project"}
                        className="fya-gallery__item-image"
                      />
                    ) : (
                      <div className="fya-gallery__item-placeholder">
                        <span>FIYA</span>
                      </div>
                    )}

                    {/* Overlay */}
                    <div className={`fya-gallery__item-overlay ${isHovered ? 'fya-gallery__item-overlay--visible' : ''}`}>
                      <div className="fya-gallery__item-overlay-content">
                        <span className="fya-gallery__item-category">
                          {item.category || "PROJECT"}
                        </span>
                        <h3 className="fya-gallery__item-title">
                          {item.title || `Project ${String(index + 1).padStart(2, "0")}`}
                        </h3>
                        {item.location && (
                          <span className="fya-gallery__item-location">
                            <FaMapMarkerAlt className="fya-gallery__item-location-icon" />
                            {item.location}
                          </span>
                        )}
                      </div>
                      
                      <div className="fya-gallery__item-view">
                        <FaSearch className="fya-gallery__item-view-icon" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* =========================================
            FOOTER
        ========================================= */}
        <div className="fya-gallery__footer">
          <span className="fya-gallery__footer-label">
            FIYA / VISUAL ARCHIVE
          </span>
          <div className="fya-gallery__footer-divider" />
          <p className="fya-gallery__footer-text">
            Built with precision. Captured through detail.
          </p>
        </div>

      </div>
    </section>
  );
};

export default GallerySection;