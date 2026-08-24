// // src/pages/Gallery/sections/GalleryIntroSection.jsx
// import { useRef, useEffect } from "react";
// import { Image, FolderOpen, Camera } from "lucide-react";
// import "./GalleryIntroSection.css";

// const GalleryIntroSection = () => {
//   const introRef = useRef(null);

//   const stats = [
//     { value: "500+", label: "Images Captured", icon: Camera },
//     { value: "50+", label: "Projects Documented", icon: FolderOpen },
//     { value: "10+", label: "Categories", icon: Image },
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("fya-gal-intro__animate--visible");
//           }
//         });
//       },
//       { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
//     );

//     document.querySelectorAll(".fya-gal-intro__animate").forEach((el) => {
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="fya-gal-intro" ref={introRef}>
//       <div className="fya-gal-intro__container">
//         <div className="fya-gal-intro__grid">
//           <div className="fya-gal-intro__left fya-gal-intro__animate">
//             <div className="fya-gal-intro__label">
//               <span className="fya-gal-intro__label-number">01</span>
//               <span className="fya-gal-intro__label-line" />
//               <span className="fya-gal-intro__label-text">THE FIYA ARCHIVE</span>
//             </div>
//             <h2 className="fya-gal-intro__title">
//               Every Detail
//               <br />
//               Tells a <span className="fya-gal-intro__highlight">Story</span>
//             </h2>
//           </div>
//           <div className="fya-gal-intro__right fya-gal-intro__animate fya-gal-intro__animate--delay-1">
//             <p className="fya-gal-intro__description">
//               A building is made up of thousands of decisions. Our gallery
//               captures some of those moments — the materials, spaces,
//               craftsmanship and people behind the finished work.
//             </p>
//             <div className="fya-gal-intro__stats">
//               {stats.map((stat, index) => (
//                 <div key={index} className="fya-gal-intro__stat-item">
//                   <stat.icon className="fya-gal-intro__stat-icon" />
//                   <span className="fya-gal-intro__stat-value">{stat.value}</span>
//                   <span className="fya-gal-intro__stat-label">{stat.label}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GalleryIntroSection;



// src/pages/Gallery/sections/GalleryIntroSection.jsx
import { useRef, useEffect } from "react";
import { Image, FolderOpen, Camera } from "lucide-react";
import "./GalleryIntroSection.css";

const GalleryIntroSection = () => {
  const introRef = useRef(null);

  const stats = [
    { value: "500+", label: "Images Captured", icon: Camera },
    { value: "50+", label: "Projects Documented", icon: FolderOpen },
    { value: "10+", label: "Categories", icon: Image },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fya-gallery-intro__animate--visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".fya-gallery-intro__animate").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="fya-gallery-intro" ref={introRef}>
      <div className="fya-gallery-intro__container">
        <div className="fya-gallery-intro__grid">
          {/* Left Column */}
          <div className="fya-gallery-intro__left fya-gallery-intro__animate">
            <div className="fya-gallery-intro__label">
              <span className="fya-gallery-intro__label-number">01</span>
              <span className="fya-gallery-intro__label-line" />
              <span className="fya-gallery-intro__label-text">THE FIYA ARCHIVE</span>
            </div>
            <h2 className="fya-gallery-intro__title">
              Every Detail
              <br />
              Tells a <span className="fya-gallery-intro__highlight">Story</span>
            </h2>
          </div>

          {/* Right Column */}
          <div className="fya-gallery-intro__right fya-gallery-intro__animate fya-gallery-intro__animate--delay-1">
            <p className="fya-gallery-intro__description">
              A building is made up of thousands of decisions. Our gallery
              captures some of those moments — the materials, spaces,
              craftsmanship and people behind the finished work.
            </p>

            {/* Stats */}
            <div className="fya-gallery-intro__stats">
              {stats.map((stat, index) => (
                <div key={index} className="fya-gallery-intro__stat-item">
                  <stat.icon className="fya-gallery-intro__stat-icon" />
                  <span className="fya-gallery-intro__stat-value">{stat.value}</span>
                  <span className="fya-gallery-intro__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryIntroSection;