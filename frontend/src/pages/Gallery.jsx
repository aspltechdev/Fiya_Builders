// import { useEffect, useState } from "react";
// import {
//   ArrowDown,
//   ArrowUpRight,
//   X,
// } from "lucide-react";

// import api from "../services/api.js";

// import "./GalleryPage.css";

// const API_URL =
//   import.meta.env.VITE_API_URL?.replace(
//     "/api",
//     ""
//   ) || "http://localhost:5000";

// const GalleryPage = () => {
//   const [gallery, setGallery] = useState([]);
//   const [activeFilter, setActiveFilter] =
//     useState("ALL");
//   const [selectedImage, setSelectedImage] =
//     useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadGallery();
//   }, []);

//   const loadGallery = async () => {
//     try {
//       const response = await api.get(
//         "/gallery"
//       );

//       const data =
//         response.data?.data ||
//         response.data ||
//         [];

//       setGallery(
//         Array.isArray(data) ? data : []
//       );
//     } catch (error) {
//       console.error(
//         "Gallery Load Error:",
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

//   /*
//    * Dynamic categories
//    */

//   const categories = [
//     "ALL",
//     ...new Set(
//       gallery
//         .map(
//           (item) =>
//             item.category ||
//             item.type
//         )
//         .filter(Boolean)
//         .map((item) =>
//           String(item).toUpperCase()
//         )
//     ),
//   ];

//   const filteredGallery =
//     activeFilter === "ALL"
//       ? gallery
//       : gallery.filter((item) => {
//           const category =
//             item.category ||
//             item.type ||
//             "";

//           return (
//             String(category).toUpperCase() ===
//             activeFilter
//           );
//         });

//   return (
//     <main className="fiya-gallery-page">

//       {/* ==================================================
//           HERO
//       ================================================== */}

//       <section className="fiya-gallery-page-hero">

//         <div className="public-container">

//           <div className="fiya-gallery-page-label">

//             <span>
//               01
//             </span>

//             <span>
//               VISUAL ARCHIVE
//             </span>

//             <span className="fiya-gallery-page-line" />

//           </div>


//           <div className="fiya-gallery-page-hero-content">

//             <h1>
//               Built
//               <br />
//               through
//               <br />
//               <span>detail.</span>
//             </h1>

//             <div className="fiya-gallery-page-hero-copy">

//               <p>
//                 Explore moments from our projects,
//                 from construction and architecture
//                 to the details that bring every space
//                 together.
//               </p>

//               <div className="fiya-gallery-page-scroll">

//                 <ArrowDown
//                   size={16}
//                   strokeWidth={1.4}
//                 />

//                 <span>
//                   EXPLORE GALLERY
//                 </span>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* ==================================================
//           INTRO
//       ================================================== */}

//       <section className="fiya-gallery-page-intro">

//         <div className="public-container">

//           <div className="fiya-gallery-page-intro-grid">

//             <span>
//               02
//             </span>

//             <div>

//               <span className="fiya-gallery-page-overline">
//                 THE FIYA ARCHIVE
//               </span>

//               <h2>
//                 Every detail
//                 <br />
//                 has a
//                 <br />
//                 <em>story.</em>
//               </h2>

//               <p>
//                 A building is made up of thousands
//                 of decisions. Our gallery captures
//                 some of those moments — the
//                 materials, spaces, craftsmanship
//                 and people behind the finished work.
//               </p>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* ==================================================
//           GALLERY
//       ================================================== */}

//       <section className="fiya-gallery-page-content">

//         <div className="public-container">

//           {/* TOOLBAR */}

//           <div className="fiya-gallery-page-toolbar">

//             <div className="fiya-gallery-page-toolbar-title">

//               <span>
//                 03
//               </span>

//               <span>
//                 EXPLORE COLLECTION
//               </span>

//             </div>


//             <div className="fiya-gallery-page-filters">

//               {categories.map(
//                 (category) => (
//                   <button
//                     key={category}
//                     type="button"
//                     className={
//                       activeFilter ===
//                       category
//                         ? "active"
//                         : ""
//                     }
//                     onClick={() =>
//                       setActiveFilter(
//                         category
//                       )
//                     }
//                   >
//                     {category}
//                   </button>
//                 )
//               )}

//             </div>

//           </div>


//           {/* GALLERY GRID */}

//           {loading ? (
//             <div className="fiya-gallery-page-loading">
//               Loading gallery...
//             </div>
//           ) : filteredGallery.length ===
//             0 ? (
//             <div className="fiya-gallery-page-empty">

//               <span>
//                 NO IMAGES AVAILABLE
//               </span>

//               <p>
//                 Gallery images will appear
//                 here once they are added from
//                 the admin panel.
//               </p>

//             </div>
//           ) : (
//             <div className="fiya-gallery-page-grid">

//               {filteredGallery.map(
//                 (item, index) => (
//                   <article
//                     className={`fiya-gallery-page-item gallery-page-item-${(
//                       index % 6
//                     ) + 1}`}
//                     key={
//                       item.id ||
//                       index
//                     }
//                     onClick={() =>
//                       setSelectedImage(
//                         item
//                       )
//                     }
//                   >

//                     <div className="fiya-gallery-page-image">

//                       <img
//                         src={getImageUrl(
//                           item.image ||
//                             item.imageUrl ||
//                             item.url
//                         )}
//                         alt={
//                           item.title ||
//                           "FIYA Builders gallery"
//                         }
//                         loading="lazy"
//                       />


//                       <div className="fiya-gallery-page-overlay">

//                         <div>

//                           <span>
//                             {item.category ||
//                               "FIYA BUILDERS"}
//                           </span>

//                           <strong>
//                             {item.title ||
//                               `Project ${String(
//                                 index + 1
//                               ).padStart(
//                                 2,
//                                 "0"
//                               )}`}
//                           </strong>

//                         </div>


//                         <span className="fiya-gallery-page-arrow">

//                           <ArrowUpRight
//                             size={18}
//                             strokeWidth={1.5}
//                           />

//                         </span>

//                       </div>

//                     </div>

//                   </article>
//                 )
//               )}

//             </div>
//           )}

//         </div>

//       </section>


//       {/* ==================================================
//           PHILOSOPHY
//       ================================================== */}

//       <section className="fiya-gallery-page-philosophy">

//         <div className="public-container">

//           <div className="fiya-gallery-page-philosophy-grid">

//             <div>

//               <span>
//                 04
//               </span>

//               <span>
//                 BEYOND THE IMAGE
//               </span>

//             </div>


//             <div>

//               <h2>
//                 Good construction
//                 <br />
//                 is visible in the
//                 <br />
//                 <em>details.</em>
//               </h2>

//               <p>
//                 Materials, proportions, finishes
//                 and craftsmanship come together
//                 to create spaces that feel right
//                 long after the project is complete.
//               </p>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* ==================================================
//           CTA
//       ================================================== */}

//       <section className="fiya-gallery-page-cta">

//         <div className="public-container">

//           <div className="fiya-gallery-page-cta-inner">

//             <div>

//               <span>
//                 HAVE A PROJECT IN MIND?
//               </span>

//               <h2>
//                 Your space
//                 <br />
//                 could be
//                 <br />
//                 <em>next.</em>
//               </h2>

//             </div>


//             <a href="/contact">

//               <span>
//                 Start a Conversation
//               </span>

//               <span>
//                 <ArrowUpRight
//                   size={20}
//                   strokeWidth={1.5}
//                 />
//               </span>

//             </a>

//           </div>

//         </div>

//       </section>


//       {/* ==================================================
//           LIGHTBOX
//       ================================================== */}

//       {selectedImage && (
//         <div
//           className="fiya-gallery-lightbox"
//           onClick={() =>
//             setSelectedImage(null)
//           }
//         >

//           <button
//             type="button"
//             className="fiya-gallery-lightbox-close"
//             onClick={() =>
//               setSelectedImage(null)
//             }
//             aria-label="Close image"
//           >
//             <X
//               size={22}
//               strokeWidth={1.5}
//             />
//           </button>


//           <div
//             className="fiya-gallery-lightbox-content"
//             onClick={(event) =>
//               event.stopPropagation()
//             }
//           >

//             <img
//               src={getImageUrl(
//                 selectedImage.image ||
//                   selectedImage.imageUrl ||
//                   selectedImage.url
//               )}
//               alt={
//                 selectedImage.title ||
//                 "FIYA Builders"
//               }
//             />

//             {(selectedImage.title ||
//               selectedImage.category) && (
//               <div className="fiya-gallery-lightbox-info">

//                 <span>
//                   {selectedImage.category ||
//                     "FIYA BUILDERS"}
//                 </span>

//                 <strong>
//                   {selectedImage.title ||
//                     "Project"}
//                 </strong>

//               </div>
//             )}

//           </div>

//         </div>
//       )}

//     </main>
//   );
// };

// export default GalleryPage;



















import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import api from "../services/api.js";

import "./GalleryPage.css";

const API_URL =
  import.meta.env.VITE_API_URL?.replace(
    "/api",
    ""
  ) || "http://localhost:5000";

const defaultGallery = [
  {
    id: 1,
    title: "Modern Facade Design",
    category: "ARCHITECTURE",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    location: "Chennai, India",
  },
  {
    id: 2,
    title: "Residential Interior",
    category: "INTERIORS",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    location: "Pondicherry, India",
  },
  {
    id: 3,
    title: "Construction Progress",
    category: "CONSTRUCTION",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    location: "Bangalore, India",
  },
  {
    id: 4,
    title: "Premium Finishes",
    category: "DETAILS",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    location: "Chennai, India",
  },
  {
    id: 5,
    title: "Structural Excellence",
    category: "CONSTRUCTION",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    location: "Coimbatore, India",
  },
  {
    id: 6,
    title: "Landscape Design",
    category: "ARCHITECTURE",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    location: "Mahabalipuram, India",
  },
  {
    id: 7,
    title: "Commercial Space",
    category: "COMMERCIAL",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    location: "Bangalore, India",
  },
  {
    id: 8,
    title: "Luxury Villa",
    category: "RESIDENTIAL",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    location: "Pondicherry, India",
  },
  {
    id: 9,
    title: "Material Details",
    category: "DETAILS",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
    location: "Chennai, India",
  },
  {
    id: 10,
    title: "Office Interiors",
    category: "INTERIORS",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
    location: "Bangalore, India",
  },
  {
    id: 11,
    title: "Building Exterior",
    category: "ARCHITECTURE",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80",
    location: "Chennai, India",
  },
  {
    id: 12,
    title: "Construction Site",
    category: "CONSTRUCTION",
    image: "https://images.unsplash.com/photo-1590725121839-892b458a74fe?w=800&q=80",
    location: "Vellore, India",
  },
];

const GalleryPage = () => {
  const [gallery, setGallery] = useState(defaultGallery);
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadGallery();
  }, []);

  const loadGallery = async () => {
    try {
      const response = await api.get("/gallery");
      const data = response.data?.data || response.data || [];
      if (Array.isArray(data) && data.length > 0) {
        setGallery(data);
      }
    } catch (error) {
      console.log("Using default gallery images");
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

  const categories = [
    "ALL",
    ...new Set(
      gallery
        .map((item) => item.category || item.type)
        .filter(Boolean)
        .map((item) => String(item).toUpperCase())
    ),
  ];

  const filteredGallery =
    activeFilter === "ALL"
      ? gallery
      : gallery.filter((item) => {
          const category = item.category || item.type || "";
          return String(category).toUpperCase() === activeFilter;
        });

  const openLightbox = (item, index) => {
    setSelectedImage(item);
    setCurrentIndex(index);
  };

  const navigateImage = (direction) => {
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < filteredGallery.length) {
      setCurrentIndex(newIndex);
      setSelectedImage(filteredGallery[newIndex]);
    }
  };

  return (
    <main className="fya-gallery-page">
      
      {/* ==================================================
          HERO — Premium Visual
      ================================================== */}
      <section className="fya-gallery-hero">
        <div className="fya-hero-background">
          <img 
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80" 
            alt="Gallery Hero" 
          />
          <div className="fya-hero-overlay" />
        </div>
        
        <div className="fya-container fya-gallery-hero-container">
          <div className="fya-hero-top-bar">
            <div className="fya-logo">
              <span className="fya-logo-white">FIYA</span>
              <span className="fya-logo-gold">BUILDERS</span>
            </div>
            <div className="fya-hero-tagline">
              <span className="fya-gold-line" />
              VISUAL ARCHIVE
            </div>
          </div>
          
          <div className="fya-gallery-hero-content">
            <h1 className="fya-gallery-hero-title">
              Crafted
              <br />
              <span className="fya-text-blue">With</span>
              <br />
              <span className="fya-text-gold">Precision</span>
            </h1>
            <p className="fya-gallery-hero-subtitle">
              Explore moments from our projects, from construction and architecture
              to the details that bring every space together.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================
          INTRO — Statistics
      ================================================== */}
      <section className="fya-gallery-intro">
        <div className="fya-container">
          <div className="fya-intro-grid">
            <div className="fya-intro-left">
              <div className="fya-section-label">
                <span className="fya-label-number">01</span>
                <span className="fya-label-line" />
                <span className="fya-label-text">THE FIYA ARCHIVE</span>
              </div>
              <h2 className="fya-intro-heading">
                Every Detail
                <br />
                Tells a <span className="fya-text-gold">Story</span>
              </h2>
            </div>
            <div className="fya-intro-right">
              <p className="fya-intro-text">
                A building is made up of thousands of decisions. Our gallery
                captures some of those moments — the materials, spaces,
                craftsmanship and people behind the finished work.
              </p>
              <div className="fya-gallery-stats">
                <div className="fya-stat-item">
                  <span className="fya-stat-value">500+</span>
                  <span className="fya-stat-label">Images Captured</span>
                </div>
                <div className="fya-stat-item">
                  <span className="fya-stat-value">50+</span>
                  <span className="fya-stat-label">Projects Documented</span>
                </div>
                <div className="fya-stat-item">
                  <span className="fya-stat-value">10+</span>
                  <span className="fya-stat-label">Categories</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          GALLERY GRID — Masonry Layout
      ================================================== */}
      <section className="fya-gallery-content">
        <div className="fya-container">
          <div className="fya-gallery-toolbar">
            <div className="fya-section-label">
              <span className="fya-label-number">02</span>
              <span className="fya-label-line" />
              <span className="fya-label-text">EXPLORE COLLECTION</span>
            </div>
            
            <div className="fya-gallery-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`fya-filter-btn ${activeFilter === category ? "active" : ""}`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="fya-gallery-loading">
              <div className="fya-loading-spinner" />
              <span>Loading gallery...</span>
            </div>
          ) : filteredGallery.length === 0 ? (
            <div className="fya-gallery-empty">
              <span>NO IMAGES AVAILABLE</span>
              <p>Gallery images will appear here once they are added.</p>
            </div>
          ) : (
            <div className="fya-gallery-grid">
              {filteredGallery.map((item, index) => (
                <article
                  className={`fya-gallery-item ${index % 3 === 0 ? "fya-gallery-tall" : ""} ${index % 4 === 0 ? "fya-gallery-wide" : ""}`}
                  key={item.id || index}
                  onClick={() => openLightbox(item, index)}
                >
                  <div className="fya-gallery-image">
                    <img
                      src={getImageUrl(item.image || item.imageUrl || item.url)}
                      alt={item.title || "FIYA Builders gallery"}
                      loading="lazy"
                    />
                    
                    <div className="fya-gallery-overlay">
                      <div className="fya-gallery-info">
                        <span className="fya-gallery-category">
                          {item.category || "FIYA BUILDERS"}
                        </span>
                        <h3 className="fya-gallery-title">
                          {item.title || `Project ${String(index + 1).padStart(2, "0")}`}
                        </h3>
                        {item.location && (
                          <span className="fya-gallery-location">
                            {item.location}
                          </span>
                        )}
                      </div>
                      <span className="fya-gallery-arrow">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ==================================================
          PHILOSOPHY — Premium Quote
      ================================================== */}
      <section className="fya-gallery-philosophy">
        <div className="fya-container">
          <div className="fya-philosophy-wrapper">
            <div className="fya-philosophy-image">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
                alt="Craftsmanship"
              />
              <div className="fya-philosophy-overlay" />
              <div className="fya-philosophy-quote">
                <span className="fya-quote-mark">"</span>
                <p>Details are not just details. They make the design.</p>
                <span className="fya-quote-author">— Charles Eames</span>
              </div>
            </div>
            
            <div className="fya-philosophy-content">
              <div className="fya-section-label">
                <span className="fya-label-number">03</span>
                <span className="fya-label-line" />
                <span className="fya-label-text">BEYOND THE IMAGE</span>
              </div>
              <h2 className="fya-philosophy-heading">
                Good Construction
                <br />
                is Visible in
                <br />
                the <span className="fya-text-gold">Details</span>
              </h2>
              <p className="fya-philosophy-text">
                Materials, proportions, finishes and craftsmanship come together
                to create spaces that feel right long after the project is complete.
              </p>
              
              <div className="fya-philosophy-points">
                <div className="fya-point">
                  <span className="fya-point-number">01</span>
                  <div>
                    <h4>Material Excellence</h4>
                    <p>Premium materials selected for durability and aesthetics</p>
                  </div>
                </div>
                <div className="fya-point">
                  <span className="fya-point-number">02</span>
                  <div>
                    <h4>Precision Craftsmanship</h4>
                    <p>Attention to detail in every aspect of construction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          CTA — Premium Gold
      ================================================== */}
      <section className="fya-gallery-cta">
        <div className="fya-container">
          <div className="fya-cta-wrapper">
            <div className="fya-cta-pattern" />
            <div className="fya-cta-content">
              <span className="fya-cta-label">HAVE A PROJECT IN MIND?</span>
              <h2 className="fya-cta-heading">
                Your Space Could
                <br />
                Be <span className="fya-text-gold">Next</span>
              </h2>
              <p className="fya-cta-text">
                Let's create something extraordinary together. Partner with us
                and bring your vision to life.
              </p>
              <a href="/contact" className="fya-btn-gold">
                START A CONVERSATION
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          LIGHTBOX — Enhanced
      ================================================== */}
      {selectedImage && (
        <div
          className="fya-lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="fya-lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            <X size={22} />
          </button>
          
          <button
            type="button"
            className="fya-lightbox-nav fya-lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage(-1);
            }}
            disabled={currentIndex === 0}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div
            className="fya-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={getImageUrl(
                selectedImage.image || selectedImage.imageUrl || selectedImage.url
              )}
              alt={selectedImage.title || "FIYA Builders"}
            />
            
            {(selectedImage.title || selectedImage.category) && (
              <div className="fya-lightbox-info">
                <span className="fya-lightbox-category">
                  {selectedImage.category || "FIYA BUILDERS"}
                </span>
                <strong className="fya-lightbox-title">
                  {selectedImage.title || "Project"}
                </strong>
                {selectedImage.location && (
                  <span className="fya-lightbox-location">
                    {selectedImage.location}
                  </span>
                )}
              </div>
            )}
          </div>
          
          <button
            type="button"
            className="fya-lightbox-nav fya-lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage(1);
            }}
            disabled={currentIndex === filteredGallery.length - 1}
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}

    </main>
  );
};

export default GalleryPage;