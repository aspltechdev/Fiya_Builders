// // src/pages/Gallery/sections/GalleryHeroSection.jsx
// import { useRef, useEffect } from "react";
// import { ArrowDown } from "lucide-react";
// import "./GalleryHeroSection.css";

// const GalleryHeroSection = () => {
//   const heroRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("fya-gal-hero__animate--visible");
//           }
//         });
//       },
//       { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
//     );

//     document.querySelectorAll(".fya-gal-hero__animate").forEach((el) => {
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="fya-gal-hero" ref={heroRef}>
//       <div className="fya-gal-hero__bg">
//         <img
//           src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80"
//           alt="Gallery Hero"
//           className="fya-gal-hero__image"
//         />
//         <div className="fya-gal-hero__gradient" />
//         <div className="fya-gal-hero__overlay-text">
//           {["G","A","L","L","E","R","Y"].map((letter, i) => (
//             <span key={i} className="fya-gal-hero__overlay-letter">{letter}</span>
//           ))}
//         </div>
//       </div>

//       <div className="fya-gal-hero__container">
//         <div className="fya-gal-hero__top fya-gal-hero__animate">
//           <div className="fya-gal-hero__label">
//             <span className="fya-gal-hero__number">01</span>
//             <span className="fya-gal-hero__label-text">VISUAL ARCHIVE</span>
//             <span className="fya-gal-hero__line" />
//           </div>
//         </div>

//         <div className="fya-gal-hero__main fya-gal-hero__animate fya-gal-hero__animate--delay-1">
//           <h1 className="fya-gal-hero__title">
//             Crafted
//             <br />
//             <span className="fya-gal-hero__highlight">With</span>
//             <br />
//             <span className="fya-gal-hero__highlight-gold">Precision</span>
//           </h1>
//           <p className="fya-gal-hero__subtitle">
//             Explore moments from our projects, from construction and architecture
//             to the details that bring every space together.
//           </p>
//         </div>

//         <div className="fya-gal-hero__bottom fya-gal-hero__animate fya-gal-hero__animate--delay-2">
//           <div className="fya-gal-hero__scroll">
//             <ArrowDown size={16} strokeWidth={1.5} />
//             <span>SCROLL TO EXPLORE</span>
//           </div>
//           <div className="fya-gal-hero__counter">
//             <span className="fya-gal-hero__counter-current">01</span>
//             <span className="fya-gal-hero__counter-line" />
//             <span className="fya-gal-hero__counter-total">04</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GalleryHeroSection;

// src/pages/Gallery/sections/GalleryHeroSection.jsx
import { useRef, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import "./GalleryHeroSection.css";

const GalleryHeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fya-gallery-hero__animate--visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".fya-gallery-hero__animate").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="fya-gallery-hero" ref={heroRef}>
      {/* Background */}
      <div className="fya-gallery-hero__bg">
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80"
          alt="Gallery Hero"
          className="fya-gallery-hero__image"
        />
        <div className="fya-gallery-hero__gradient" />
        <div className="fya-gallery-hero__overlay-text">
          {["G","A","L","L","E","R","Y"].map((letter, i) => (
            <span key={i} className="fya-gallery-hero__overlay-letter">{letter}</span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="fya-gallery-hero__container">
        {/* Top - Label */}
        <div className="fya-gallery-hero__top fya-gallery-hero__animate">
          <div className="fya-gallery-hero__label">
            <span className="fya-gallery-hero__number">01</span>
            <span className="fya-gallery-hero__label-text">VISUAL ARCHIVE</span>
            <span className="fya-gallery-hero__line" />
          </div>
        </div>

        {/* Main Content */}
        <div className="fya-gallery-hero__main fya-gallery-hero__animate fya-gallery-hero__animate--delay-1">
          <h1 className="fya-gallery-hero__title">
            Crafted
            <br />
            <span className="fya-gallery-hero__highlight">With</span>
            <br />
            <span className="fya-gallery-hero__highlight-gold">Precision</span>
          </h1>
          <p className="fya-gallery-hero__subtitle">
            Explore moments from our projects, from construction and architecture
            to the details that bring every space together.
          </p>
        </div>

        {/* Bottom - Scroll & Counter */}
        <div className="fya-gallery-hero__bottom fya-gallery-hero__animate fya-gallery-hero__animate--delay-2">
          <div className="fya-gallery-hero__scroll">
            <ArrowDown size={16} strokeWidth={1.5} />
            <span>SCROLL TO EXPLORE</span>
          </div>
          <div className="fya-gallery-hero__counter">
            <span className="fya-gallery-hero__counter-current">01</span>
            <span className="fya-gallery-hero__counter-line" />
            <span className="fya-gallery-hero__counter-total">04</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryHeroSection;