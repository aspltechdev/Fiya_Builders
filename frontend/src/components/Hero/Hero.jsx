
// // import { useEffect, useState } from "react";
// // import { ArrowDown, ArrowUpRight } from "lucide-react";
// // import { getHero } from "../../services/hero.api";
// // import "./HeroSection.css";

// // const API_URL =
// //   import.meta.env.VITE_API_URL?.replace("/api", "") ||
// //   "http://localhost:5000";

// // const HeroSection = () => {
// //   const [hero, setHero] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     loadHero();
// //   }, []);

// //   const loadHero = async () => {
// //     try {
// //       const response = await getHero();
// //       setHero(response.data || response);
// //     } catch (error) {
// //       console.error("Hero Load Error:", error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const getImageUrl = (image) => {
// //     if (!image) return "";
// //     if (image.startsWith("http://") || image.startsWith("https://")) {
// //       return image;
// //     }
// //     return `${API_URL}${image}`;
// //   };

// //   // Default content
// //   const title = hero?.title || "Building Spaces That Last.";
// //   const subtitle = hero?.subtitle || "CONSTRUCTION • CONSULTANCY • CIVIL ENGINEERING";
// //   const description = hero?.description || "Thoughtfully designed. Precisely built.";
// //   const buttonText = hero?.buttonText || "Explore Our Projects";
// //   const buttonLink = hero?.buttonLink || "/projects";

// //   return (
// //     <section className="fiya-hero">
// //       {/* Background Image */}
// //       <div className="fiya-hero__media">
// //         {!loading && hero?.image && (
// //           <img
// //             src={getImageUrl(hero.image)}
// //             alt={hero?.title || "FIYA Builders"}
// //             className="fiya-hero__image"
// //           />
// //         )}
// //         <div className="fiya-hero__overlay" />
// //       </div>

// //       {/* Content Container */}
// //       <div className="fiya-hero__container">
// //         <div className="fiya-hero__content">
// //           {/* Brand Label - Top Left */}
// //           <div className="fiya-hero__brand">
// //             <span className="fiya-hero__brand-name">FIYA</span>
// //             <span className="fiya-hero__brand-suffix">BUILDERS</span>
// //           </div>

// //           {/* Subtitle Line */}
// //           <div className="fiya-hero__subtitle-wrapper">
// //             <span className="fiya-hero__subtitle-line" />
// //             <span className="fiya-hero__subtitle-text">
// //               {subtitle}
// //             </span>
// //           </div>

// //           {/* Main Title */}
// //           <h1 className="fiya-hero__title">
// //             {title}
// //           </h1>

// //           {/* Description */}
// //           <p className="fiya-hero__description">
// //             {description}
// //           </p>

// //           {/* CTA Button */}
// //           <a
// //             href={buttonLink}
// //             className="fiya-hero__cta"
// //           >
// //             <span className="fiya-hero__cta-text">{buttonText}</span>
// //             <span className="fiya-hero__cta-arrow">
// //               <ArrowUpRight size={18} strokeWidth={2} />
// //             </span>
// //           </a>
// //         </div>

// //         {/* Bottom Bar */}
// //         <div className="fiya-hero__bottom">
// //           {/* Scroll Indicator */}
// //           <div className="fiya-hero__scroll">
// //             <span className="fiya-hero__scroll-text">Scroll</span>
// //             <ArrowDown size={14} strokeWidth={1.5} />
// //           </div>

// //           {/* Location */}
// //           <div className="fiya-hero__location">
// //             <span className="fiya-hero__location-label">BASED IN</span>
// //             <span className="fiya-hero__location-value">Pondicherry · India</span>
// //           </div>

// //           {/* Page Index */}
// //           <div className="fiya-hero__index">
// //             <span className="fiya-hero__index-current">01</span>
// //             <span className="fiya-hero__index-line" />
// //             <span className="fiya-hero__index-total">04</span>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default HeroSection;    


















// import { useEffect, useState } from "react";
// import { FaArrowDown, FaArrowRight, FaMapMarkerAlt, FaPhone, FaStar } from "react-icons/fa";
// import { getHero } from "../../services/hero.api";
// import "./HeroSection.css";

// const API_URL =
//   import.meta.env.VITE_API_URL?.replace("/api", "") ||
//   "http://localhost:5000";

// const HeroSection = () => {
//   const [hero, setHero] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadHero();
//   }, []);

//   const loadHero = async () => {
//     try {
//       const response = await getHero();
//       setHero(response.data || response);
//     } catch (error) {
//       console.error("Hero Load Error:", error);
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

//   // Default content
//   const title = hero?.title || "Building Excellence That Endures";
//   const subtitle = hero?.subtitle || "PREMIUM CONSTRUCTION COMPANY";
//   const description = hero?.description || "We craft spaces with precision, innovation, and unwavering commitment to quality.";
//   const buttonText = hero?.buttonText || "Explore Our Projects";
//   const buttonLink = hero?.buttonLink || "/projects";

//   return (
//     <section className="fya-hero">
//       {/* Background Image */}
//       <div className="fya-hero-media">
//         {!loading && hero?.image && (
//           <img
//             src={getImageUrl(hero.image)}
//             alt={hero?.title || "FIYA Builders"}
//             className="fya-hero-image"
//           />
//         )}
//         {!loading && !hero?.image && (
//           <img
//             src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80"
//             alt="FIYA Builders"
//             className="fya-hero-image"
//           />
//         )}
//         <div className="fya-hero-overlay" />
//       </div>

//       {/* Content Container */}
//       <div className="fya-hero-container">
//         <div className="fya-hero-content">
          
//           {/* Badge */}
//           <div className="fya-hero-badge">
//             <FaStar className="fya-hero-badge-icon" />
//             <span className="fya-hero-badge-text">Trusted Since 2014</span>
//             <span className="fya-hero-badge-line" />
//             <span className="fya-hero-badge-text">ISO Certified</span>
//           </div>

//           {/* Main Title */}
//           <h1 className="fya-hero-title">
//             {title.split(" ").map((word, index) => {
//               if (word === "Excellence" || word === "Endures" || word === "Last.") {
//                 return <span key={index} className="fya-hero-title-highlight">{word} </span>;
//               }
//               return <span key={index}>{word} </span>;
//             })}
//           </h1>

//           {/* Description */}
//           <p className="fya-hero-description">
//             {description}
//           </p>

//           {/* CTA Buttons */}
//           <div className="fya-hero-actions">
//             <a href={buttonLink} className="fya-hero-btn-primary">
//               <span className="fya-hero-btn-text">{buttonText}</span>
//               <FaArrowRight className="fya-hero-btn-icon" />
//             </a>
//             <a href="/contact" className="fya-hero-btn-secondary">
//               <span className="fya-hero-btn-text">Get Consultation</span>
//               <FaPhone className="fya-hero-btn-icon" />
//             </a>
//           </div>

//           {/* Stats */}
//           <div className="fya-hero-stats">
//             <div className="fya-hero-stat">
//               <span className="fya-hero-stat-value">250+</span>
//               <span className="fya-hero-stat-label">Projects Completed</span>
//             </div>
//             <div className="fya-hero-stat-divider" />
//             <div className="fya-hero-stat">
//               <span className="fya-hero-stat-value">15+</span>
//               <span className="fya-hero-stat-label">Years Experience</span>
//             </div>
//             <div className="fya-hero-stat-divider" />
//             <div className="fya-hero-stat">
//               <span className="fya-hero-stat-value">98%</span>
//               <span className="fya-hero-stat-label">Client Satisfaction</span>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="fya-hero-bottom">
//           {/* Scroll Indicator */}
//           <div className="fya-hero-scroll">
//             <span className="fya-hero-scroll-text">Scroll to explore</span>
//             <FaArrowDown className="fya-hero-scroll-icon" />
//           </div>

//           {/* Location */}
//           <div className="fya-hero-location">
//             <FaMapMarkerAlt className="fya-hero-location-icon" />
//             <div className="fya-hero-location-text">
//               <span className="fya-hero-location-label">Based in</span>
//               <span className="fya-hero-location-value">Pondicherry, India</span>
//             </div>
//           </div>

//           {/* Page Index */}
//           <div className="fya-hero-index">
//             <span className="fya-hero-index-current">01</span>
//             <span className="fya-hero-index-line" />
//             <span className="fya-hero-index-total">04</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection; 


import { useEffect, useState, useRef } from "react";
import { 
  FaArrowDown, 
  FaArrowRight, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaStar,
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute
} from "react-icons/fa";
import { getHero } from "../../services/hero.api";
import "./HeroSection.css";

const API_URL =
  import.meta.env.VITE_API_URL?.replace("/api", "") ||
  "http://localhost:5000";

const HeroSection = () => {
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    loadHero();
  }, []);

  const loadHero = async () => {
    try {
      const response = await getHero();
      setHero(response.data || response);
    } catch (error) {
      console.error("Hero Load Error:", error);
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

  // Video controls
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Update progress
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  // Default content
  const title = hero?.title || "Building Excellence That Endures";
  const subtitle = hero?.subtitle || "PREMIUM CONSTRUCTION COMPANY";
  const description = hero?.description || "We craft spaces with precision, innovation, and unwavering commitment to quality.";
  const buttonText = hero?.buttonText || "Explore Our Projects";
  const buttonLink = hero?.buttonLink || "/projects";

  // Split title for animated reveal
  const titleWords = title.split(" ");

  return (
    <section className="fya-hero-cinematic" ref={containerRef}>
      {/* ============================================================
          MEDIA BACKGROUND
      ============================================================ */}
      <div className="fya-hero-cinematic__media">
        {/* Video Background (if available) */}
        {!loading && hero?.video ? (
          <video
            ref={videoRef}
            className="fya-hero-cinematic__video"
            src={getImageUrl(hero.video)}
            autoPlay
            muted
            loop
            playsInline
            onTimeUpdate={handleTimeUpdate}
          />
        ) : (
          <img
            src={!loading && hero?.image ? getImageUrl(hero.image) : "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80"}
            alt={hero?.title || "FIYA Builders"}
            className="fya-hero-cinematic__image"
          />
        )}
        
        {/* Gradient Overlays */}
        <div className="fya-hero-cinematic__overlay-top" />
        <div className="fya-hero-cinematic__overlay-bottom" />
        <div className="fya-hero-cinematic__overlay-vignette" />
        
        {/* Scan Lines Effect */}
        <div className="fya-hero-cinematic__scanlines" />
      </div>

      {/* ============================================================
          VIDEO CONTROLS
      ============================================================ */}
      {!loading && hero?.video && (
        <div className="fya-hero-cinematic__controls">
          <button 
            className="fya-hero-cinematic__control-btn"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <div className="fya-hero-cinematic__progress-bar">
            <div 
              className="fya-hero-cinematic__progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <button 
            className="fya-hero-cinematic__control-btn"
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
        </div>
      )}

      {/* ============================================================
          CONTENT
      ============================================================ */}
      <div className="fya-hero-cinematic__container">
        <div className="fya-hero-cinematic__content">
          
          {/* Badge - Cinematic Style */}
          <div className="fya-hero-cinematic__badge animate-fade-in-up">
            <span className="fya-hero-cinematic__badge-line" />
            <FaStar className="fya-hero-cinematic__badge-icon" />
            <span className="fya-hero-cinematic__badge-text">Trusted Since 2014</span>
            <span className="fya-hero-cinematic__badge-dot" />
            <span className="fya-hero-cinematic__badge-text">ISO Certified</span>
          </div>

          {/* Subtitle */}
          <div className="fya-hero-cinematic__subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="fya-hero-cinematic__subtitle-line" />
            <span>{subtitle}</span>
          </div>

          {/* Main Title - Cinematic Reveal */}
          <h1 className="fya-hero-cinematic__title animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {titleWords.map((word, index) => {
              const isHighlight = ["Excellence", "Endures", "Last.", "Future", "Legacy"].includes(word.replace(/[.,!?]/, ''));
              return (
                <span 
                  key={index} 
                  className={`fya-hero-cinematic__title-word ${isHighlight ? 'highlight' : ''}`}
                  style={{ animationDelay: `${0.4 + index * 0.05}s` }}
                >
                  {word}{' '}
                </span>
              );
            })}
          </h1>

          {/* Description */}
          <p className="fya-hero-cinematic__description animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="fya-hero-cinematic__actions animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <a href={buttonLink} className="fya-hero-cinematic__btn-primary">
              <span>{buttonText}</span>
              <FaArrowRight className="fya-hero-cinematic__btn-icon" />
              <span className="fya-hero-cinematic__btn-glow" />
            </a>
            <a href="/contact" className="fya-hero-cinematic__btn-secondary">
              <FaPhone className="fya-hero-cinematic__btn-icon" />
              <span>Get Consultation</span>
            </a>
          </div>

          {/* Stats - Cinematic */}
          <div className="fya-hero-cinematic__stats animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="fya-hero-cinematic__stat">
              <span className="fya-hero-cinematic__stat-value">
                <span className="counter">250</span>+
              </span>
              <span className="fya-hero-cinematic__stat-label">Projects Completed</span>
            </div>
            <div className="fya-hero-cinematic__stat-divider" />
            <div className="fya-hero-cinematic__stat">
              <span className="fya-hero-cinematic__stat-value">
                <span className="counter">15</span>+
              </span>
              <span className="fya-hero-cinematic__stat-label">Years Experience</span>
            </div>
            <div className="fya-hero-cinematic__stat-divider" />
            <div className="fya-hero-cinematic__stat">
              <span className="fya-hero-cinematic__stat-value">
                <span className="counter">98</span>%
              </span>
              <span className="fya-hero-cinematic__stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>

        {/* ============================================================
            BOTTOM BAR - Cinematic
        ============================================================ */}
        <div className="fya-hero-cinematic__bottom animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          {/* Scroll Indicator */}
          <div className="fya-hero-cinematic__scroll">
            <span className="fya-hero-cinematic__scroll-text">Scroll to explore</span>
            <div className="fya-hero-cinematic__scroll-line">
              <span className="fya-hero-cinematic__scroll-progress" />
            </div>
            <FaArrowDown className="fya-hero-cinematic__scroll-icon" />
          </div>

          {/* Location */}
          <div className="fya-hero-cinematic__location">
            <div className="fya-hero-cinematic__location-pulse" />
            <FaMapMarkerAlt className="fya-hero-cinematic__location-icon" />
            <div className="fya-hero-cinematic__location-text">
              <span className="fya-hero-cinematic__location-label">Based in</span>
              <span className="fya-hero-cinematic__location-value">Pondicherry, India</span>
            </div>
          </div>

          {/* Page Index */}
          <div className="fya-hero-cinematic__index">
            <span className="fya-hero-cinematic__index-current">01</span>
            <span className="fya-hero-cinematic__index-line">
              <span className="fya-hero-cinematic__index-progress" />
            </span>
            <span className="fya-hero-cinematic__index-total">04</span>
          </div>
        </div>
      </div>

      {/* ============================================================
          AMBIENT LIGHT EFFECTS
      ============================================================ */}
      <div className="fya-hero-cinematic__ambient-light" />
      <div className="fya-hero-cinematic__particles">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="fya-hero-cinematic__particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;