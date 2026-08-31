// // src/pages/Gallery/sections/GalleryGridSection.jsx
// import { useRef, useEffect, useState } from "react";
// import { ArrowUpRight, X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
// import "./GalleryGridSection.css";

// const GalleryGridSection = ({ gallery, loading, getImageUrl }) => {
//   const fyaGalleryGridRef = useRef(null);
//   const [fyaGridFilter, setFyaGridFilter] = useState("ALL");
//   const [fyaGridSelected, setFyaGridSelected] = useState(null);
//   const [fyaGridIndex, setFyaGridIndex] = useState(0);

//   const fyaGridCategories = [
//     "ALL",
//     ...new Set(
//       gallery
//         .map((item) => item.category || item.type)
//         .filter(Boolean)
//         .map((item) => String(item).toUpperCase())
//     ),
//   ];

//   const fyaGridItems =
//     fyaGridFilter === "ALL"
//       ? gallery
//       : gallery.filter((item) => {
//           const category = item.category || item.type || "";
//           return String(category).toUpperCase() === fyaGridFilter;
//         });

//   const fyaGridOpenLightbox = (item, index) => {
//     setFyaGridSelected(item);
//     setFyaGridIndex(index);
//     document.body.style.overflow = "hidden";
//   };

//   const fyaGridCloseLightbox = () => {
//     setFyaGridSelected(null);
//     document.body.style.overflow = "";
//   };

//   const fyaGridNavigate = (direction) => {
//     const newIndex = fyaGridIndex + direction;
//     if (newIndex >= 0 && newIndex < fyaGridItems.length) {
//       setFyaGridIndex(newIndex);
//       setFyaGridSelected(fyaGridItems[newIndex]);
//     }
//   };

//   const fyaGridGetImage = (item) => {
//     const image = item.image || item.imageUrl || item.url || item.coverImage || item.thumbnail;
//     if (!image) return "";
//     if (image.startsWith("http://") || image.startsWith("https://")) return image;
//     return getImageUrl(image);
//   };

//   useEffect(() => {
//     const fyaGridObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("fya-grid-animate--visible");
//           }
//         });
//       },
//       { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
//     );

//     document.querySelectorAll(".fya-grid-animate").forEach((el) => {
//       fyaGridObserver.observe(el);
//     });

//     return () => fyaGridObserver.disconnect();
//   }, []);

//   useEffect(() => {
//     const fyaGridKeyHandler = (e) => {
//       if (!fyaGridSelected) return;
//       if (e.key === "Escape") fyaGridCloseLightbox();
//       if (e.key === "ArrowLeft") fyaGridNavigate(-1);
//       if (e.key === "ArrowRight") fyaGridNavigate(1);
//     };

//     document.addEventListener("keydown", fyaGridKeyHandler);
//     return () => {
//       document.removeEventListener("keydown", fyaGridKeyHandler);
//       document.body.style.overflow = "";
//     };
//   }, [fyaGridSelected, fyaGridIndex]);

//   return (
//     <section className="fya-grid-section" id="fya-gallery" ref={fyaGalleryGridRef}>
//       <div className="fya-grid-container">
//         {/* Header */}
//         <div className="fya-grid-header">
//           <div className="fya-grid-label fya-grid-animate">
//             <span className="fya-grid-label-num">02</span>
//             <span className="fya-grid-label-line" />
//             <span className="fya-grid-label-text">EXPLORE COLLECTION</span>
//           </div>

//           <div className="fya-grid-filters fya-grid-animate fya-grid-animate--delay1">
//             {fyaGridCategories.map((cat) => (
//               <button
//                 key={cat}
//                 type="button"
//                 className={`fya-grid-filter-btn ${
//                   fyaGridFilter === cat ? "fya-grid-filter-btn--active" : ""
//                 }`}
//                 onClick={() => setFyaGridFilter(cat)}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Loading */}
//         {loading ? (
//           <div className="fya-grid-loading">
//             <div className="fya-grid-spinner" />
//             <span>Loading gallery...</span>
//           </div>
//         ) : fyaGridItems.length === 0 ? (
//           <div className="fya-grid-empty">
//             <span className="fya-grid-empty-label">NO IMAGES AVAILABLE</span>
//             <p className="fya-grid-empty-text">Gallery images will appear here once they are added.</p>
//           </div>
//         ) : (
//           <div className="fya-grid-wrapper">
//             {fyaGridItems.map((item, index) => {
//               const isTall = index % 3 === 0;
//               const isWide = index % 4 === 0;
//               const imgSrc = fyaGridGetImage(item);
              
//               return (
//                 <article
//                   className={`fya-grid-card ${
//                     isTall ? "fya-grid-card--tall" : ""
//                   } ${isWide ? "fya-grid-card--wide" : ""} 
//                   fya-grid-animate fya-grid-animate--delay${(index + 1)}`}
//                   key={item.id || index}
//                   onClick={() => fyaGridOpenLightbox(item, index)}
//                 >
//                   <div className="fya-grid-card-media">
//                     {imgSrc ? (
//                       <img
//                         src={imgSrc}
//                         alt={item.title || "FIYA Builders"}
//                         className="fya-grid-card-img"
//                         loading="lazy"
//                         onError={(e) => {
//                           e.target.src = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80";
//                         }}
//                       />
//                     ) : (
//                       <div className="fya-grid-card-placeholder">
//                         <span>FIYA</span>
//                       </div>
//                     )}

//                     <div className="fya-grid-card-overlay">
//                       <div className="fya-grid-card-info">
//                         <span className="fya-grid-card-cat">
//                           {item.category || "FIYA BUILDERS"}
//                         </span>
//                         <h3 className="fya-grid-card-title">
//                           {item.title || `Project ${String(index + 1).padStart(2, "0")}`}
//                         </h3>
//                         {item.location && (
//                           <span className="fya-grid-card-location">
//                             <MapPin size={12} className="fya-grid-card-loc-icon" />
//                             {item.location}
//                           </span>
//                         )}
//                       </div>
//                       <span className="fya-grid-card-arrow">
//                         <ArrowUpRight size={18} />
//                       </span>
//                     </div>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         )}
//       </div>

//       {/* Lightbox */}
//       {fyaGridSelected && (
//         <div className="fya-grid-lightbox" onClick={fyaGridCloseLightbox}>
//           <button
//             type="button"
//             className="fya-grid-lightbox-close"
//             onClick={fyaGridCloseLightbox}
//             aria-label="Close"
//           >
//             <X size={24} />
//           </button>

//           <button
//             type="button"
//             className="fya-grid-lightbox-nav fya-grid-lightbox-nav--prev"
//             onClick={(e) => { e.stopPropagation(); fyaGridNavigate(-1); }}
//             disabled={fyaGridIndex === 0}
//             aria-label="Previous"
//           >
//             <ChevronLeft size={28} />
//           </button>

//           <div className="fya-grid-lightbox-content" onClick={(e) => e.stopPropagation()}>
//             <img
//               src={fyaGridGetImage(fyaGridSelected)}
//               alt={fyaGridSelected.title || "FIYA Builders"}
//               className="fya-grid-lightbox-img"
//               onError={(e) => {
//                 e.target.src = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80";
//               }}
//             />

//             {(fyaGridSelected.title || fyaGridSelected.category) && (
//               <div className="fya-grid-lightbox-info">
//                 <span className="fya-grid-lightbox-cat">
//                   {fyaGridSelected.category || "FIYA BUILDERS"}
//                 </span>
//                 <strong className="fya-grid-lightbox-title">
//                   {fyaGridSelected.title || "Project"}
//                 </strong>
//                 {fyaGridSelected.location && (
//                   <span className="fya-grid-lightbox-location">
//                     <MapPin size={14} />
//                     {fyaGridSelected.location}
//                   </span>
//                 )}
//               </div>
//             )}
//           </div>

//           <button
//             type="button"
//             className="fya-grid-lightbox-nav fya-grid-lightbox-nav--next"
//             onClick={(e) => { e.stopPropagation(); fyaGridNavigate(1); }}
//             disabled={fyaGridIndex === fyaGridItems.length - 1}
//             aria-label="Next"
//           >
//             <ChevronRight size={28} />
//           </button>

//           <div className="fya-grid-lightbox-counter">
//             <span>{fyaGridIndex + 1}</span>
//             <span className="fya-grid-lightbox-counter-div">/</span>
//             <span>{fyaGridItems.length}</span>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default GalleryGridSection;

// src/pages/Gallery/sections/GalleryGridSection.jsx
import { useRef, useEffect, useState } from "react";
import { ArrowUpRight, X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import "./GalleryGridSection.css";

const GalleryGridSection = ({ gallery, loading, getImageUrl }) => {
  const fyaGalleryGridRef = useRef(null);
  const [fyaGridFilter, setFyaGridFilter] = useState("ALL");
  const [fyaGridSelected, setFyaGridSelected] = useState(null);
  const [fyaGridIndex, setFyaGridIndex] = useState(0);

  const fyaGridCategories = [
    "ALL",
    ...new Set(
      gallery
        .map((item) => item.category || item.type)
        .filter(Boolean)
        .map((item) => String(item).toUpperCase())
    ),
  ];

  const fyaGridItems =
    fyaGridFilter === "ALL"
      ? gallery
      : gallery.filter((item) => {
          const category = item.category || item.type || "";
          return String(category).toUpperCase() === fyaGridFilter;
        });

  const fyaGridOpenLightbox = (item, index) => {
    setFyaGridSelected(item);
    setFyaGridIndex(index);
    document.body.style.overflow = "hidden";
  };

  const fyaGridCloseLightbox = () => {
    setFyaGridSelected(null);
    document.body.style.overflow = "";
  };

  const fyaGridNavigate = (direction) => {
    const newIndex = fyaGridIndex + direction;
    if (newIndex >= 0 && newIndex < fyaGridItems.length) {
      setFyaGridIndex(newIndex);
      setFyaGridSelected(fyaGridItems[newIndex]);
    }
  };

  const fyaGridGetImage = (item) => {
    const image = item.image || item.imageUrl || item.url || item.coverImage || item.thumbnail;
    if (!image) return "";
    if (image.startsWith("http://") || image.startsWith("https://")) return image;
    return getImageUrl(image);
  };

  useEffect(() => {
    // First, make all elements visible immediately as a fallback
    const animateElements = document.querySelectorAll(".fya-grid-animate");
    
    // If IntersectionObserver is not available, show everything
    if (!("IntersectionObserver" in window)) {
      animateElements.forEach((el) => {
        el.classList.add("fya-grid-animate--visible");
      });
      return;
    }

    const fyaGridObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fya-grid-animate--visible");
            // Unobserve after animation to improve performance
            fyaGridObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    animateElements.forEach((el) => {
      fyaGridObserver.observe(el);
    });

    // Fallback: Show all elements after 1 second if they haven't been shown
    const fallbackTimeout = setTimeout(() => {
      animateElements.forEach((el) => {
        el.classList.add("fya-grid-animate--visible");
      });
    }, 1000);

    return () => {
      fyaGridObserver.disconnect();
      clearTimeout(fallbackTimeout);
    };
  }, [fyaGridItems.length, fyaGridFilter]); // Re-run when items change

  useEffect(() => {
    const fyaGridKeyHandler = (e) => {
      if (!fyaGridSelected) return;
      if (e.key === "Escape") fyaGridCloseLightbox();
      if (e.key === "ArrowLeft") fyaGridNavigate(-1);
      if (e.key === "ArrowRight") fyaGridNavigate(1);
    };

    document.addEventListener("keydown", fyaGridKeyHandler);
    return () => {
      document.removeEventListener("keydown", fyaGridKeyHandler);
      document.body.style.overflow = "";
    };
  }, [fyaGridSelected, fyaGridIndex]);

  return (
    <section className="fya-grid-section" id="fya-gallery" ref={fyaGalleryGridRef}>
      <div className="fya-grid-container">
        {/* Header */}
        <div className="fya-grid-header">
          <div className="fya-grid-label fya-grid-animate">
            <span className="fya-grid-label-num">02</span>
            <span className="fya-grid-label-line" />
            <span className="fya-grid-label-text">EXPLORE COLLECTION</span>
          </div>

          <div className="fya-grid-filters fya-grid-animate fya-grid-animate--delay1">
            {fyaGridCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`fya-grid-filter-btn ${
                  fyaGridFilter === cat ? "fya-grid-filter-btn--active" : ""
                }`}
                onClick={() => setFyaGridFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="fya-grid-loading">
            <div className="fya-grid-spinner" />
            <span>Loading gallery...</span>
          </div>
        ) : fyaGridItems.length === 0 ? (
          <div className="fya-grid-empty">
            <span className="fya-grid-empty-label">NO IMAGES AVAILABLE</span>
            <p className="fya-grid-empty-text">Gallery images will appear here once they are added.</p>
          </div>
        ) : (
          <div className="fya-grid-wrapper">
            {fyaGridItems.map((item, index) => {
              const isTall = index % 3 === 0;
              const isWide = index % 4 === 0;
              const imgSrc = fyaGridGetImage(item);
              const delayClass = `fya-grid-animate--delay${(index % 6) + 1}`;
              
              return (
                <article
                  className={`fya-grid-card ${
                    isTall ? "fya-grid-card--tall" : ""
                  } ${isWide ? "fya-grid-card--wide" : ""} 
                  fya-grid-animate ${delayClass}`}
                  key={item.id || item._id || index}
                  onClick={() => fyaGridOpenLightbox(item, index)}
                >
                  <div className="fya-grid-card-media">
                    {imgSrc ? (
                      <img
                        src={imgSrc}
                        alt={item.title || "FIYA Builders"}
                        className="fya-grid-card-img"
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80";
                        }}
                      />
                    ) : (
                      <div className="fya-grid-card-placeholder">
                        <span>FIYA</span>
                      </div>
                    )}

                    <div className="fya-grid-card-overlay">
                      <div className="fya-grid-card-info">
                        <span className="fya-grid-card-cat">
                          {item.category || "FIYA BUILDERS"}
                        </span>
                        <h3 className="fya-grid-card-title">
                          {item.title || `Project ${String(index + 1).padStart(2, "0")}`}
                        </h3>
                        {item.location && (
                          <span className="fya-grid-card-location">
                            <MapPin size={12} className="fya-grid-card-loc-icon" />
                            {item.location}
                          </span>
                        )}
                      </div>
                      <span className="fya-grid-card-arrow">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {fyaGridSelected && (
        <div className="fya-grid-lightbox" onClick={fyaGridCloseLightbox}>
          <button
            type="button"
            className="fya-grid-lightbox-close"
            onClick={fyaGridCloseLightbox}
            aria-label="Close"
          >
            <X size={24} />
          </button>

          <button
            type="button"
            className="fya-grid-lightbox-nav fya-grid-lightbox-nav--prev"
            onClick={(e) => { e.stopPropagation(); fyaGridNavigate(-1); }}
            disabled={fyaGridIndex === 0}
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="fya-grid-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={fyaGridGetImage(fyaGridSelected)}
              alt={fyaGridSelected.title || "FIYA Builders"}
              className="fya-grid-lightbox-img"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80";
              }}
            />

            {(fyaGridSelected.title || fyaGridSelected.category) && (
              <div className="fya-grid-lightbox-info">
                <span className="fya-grid-lightbox-cat">
                  {fyaGridSelected.category || "FIYA BUILDERS"}
                </span>
                <strong className="fya-grid-lightbox-title">
                  {fyaGridSelected.title || "Project"}
                </strong>
                {fyaGridSelected.location && (
                  <span className="fya-grid-lightbox-location">
                    <MapPin size={14} />
                    {fyaGridSelected.location}
                  </span>
                )}
              </div>
            )}
          </div>

          <button
            type="button"
            className="fya-grid-lightbox-nav fya-grid-lightbox-nav--next"
            onClick={(e) => { e.stopPropagation(); fyaGridNavigate(1); }}
            disabled={fyaGridIndex === fyaGridItems.length - 1}
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>

          <div className="fya-grid-lightbox-counter">
            <span>{fyaGridIndex + 1}</span>
            <span className="fya-grid-lightbox-counter-div">/</span>
            <span>{fyaGridItems.length}</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryGridSection;