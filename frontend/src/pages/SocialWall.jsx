// // // // src/components/SocialWall/SocialWall.jsx
// // // import { useEffect, useState } from "react";
// // // // Use these icons from lucide-react instead
// // // import {
// // //   ChevronLeft,
// // //   ChevronRight,
// // //   Play,
// // //   Clock,
// // //   Eye,
// // //   Heart,
// // //   MessageCircle,
// // //   Share2,
// // //   Youtube,
// // //   Camera, // Use Camera for Instagram
// // // } from "lucide-react";
// // // import { getSocialMedia } from "../services/socialMedia.api.js";
// // // import "./SocialWall.css";

// // // const SocialWall = () => {
// // //   const [socialLinks, setSocialLinks] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [activePlatform, setActivePlatform] = useState("all");
// // //   const [currentIndex, setCurrentIndex] = useState(0);
// // //   const [youtubeVideos, setYoutubeVideos] = useState([]);

// // //   // Sample YouTube videos (replace with your actual channel ID)
// // //   const youtubeChannelId = "UCXuqSBlHAE6Xw-yeJA0Tunw"; // Replace with your channel ID
// // //   const youtubeApiKey = "YOUR_YOUTUBE_API_KEY"; // You'll need to get this from Google Cloud Console

// // //   // Sample Instagram posts (replace with actual Instagram embed URLs)
// // //   const instagramPosts = [
// // //     {
// // //       id: "1",
// // //       url: "https://www.instagram.com/p/CxQ8KXhpBqE/",
// // //       thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80",
// // //       caption: "Modern residential project",
// // //       likes: 245,
// // //       comments: 18,
// // //     },
// // //     {
// // //       id: "2",
// // //       url: "https://www.instagram.com/p/CxQ8KXhpBqE/",
// // //       thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80",
// // //       caption: "Commercial construction",
// // //       likes: 189,
// // //       comments: 12,
// // //     },
// // //     {
// // //       id: "3",
// // //       url: "https://www.instagram.com/p/CxQ8KXhpBqE/",
// // //       thumbnail: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=80",
// // //       caption: "Interior design details",
// // //       likes: 312,
// // //       comments: 24,
// // //     },
// // //     {
// // //       id: "4",
// // //       url: "https://www.instagram.com/p/CxQ8KXhpBqE/",
// // //       thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80",
// // //       caption: "Structural excellence",
// // //       likes: 156,
// // //       comments: 9,
// // //     },
// // //     {
// // //       id: "5",
// // //       url: "https://www.instagram.com/p/CxQ8KXhpBqE/",
// // //       thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80",
// // //       caption: "Project execution",
// // //       likes: 203,
// // //       comments: 15,
// // //     },
// // //     {
// // //       id: "6",
// // //       url: "https://www.instagram.com/p/CxQ8KXhpBqE/",
// // //       thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80",
// // //       caption: "Completed project",
// // //       likes: 278,
// // //       comments: 21,
// // //     },
// // //   ];

// // //   // Sample YouTube videos
// // //   const youtubeVideosList = [
// // //     {
// // //       id: "dQw4w9WgXcQ",
// // //       title: "Modern Construction Techniques",
// // //       thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80",
// // //       views: 15243,
// // //       publishedAt: "2024-01-15",
// // //     },
// // //     {
// // //       id: "dQw4w9WgXcQ",
// // //       title: "Architectural Design Process",
// // //       thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80",
// // //       views: 9876,
// // //       publishedAt: "2024-02-20",
// // //     },
// // //     {
// // //       id: "dQw4w9WgXcQ",
// // //       title: "Sustainable Building Practices",
// // //       thumbnail: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=80",
// // //       views: 21345,
// // //       publishedAt: "2024-03-10",
// // //     },
// // //     {
// // //       id: "dQw4w9WgXcQ",
// // //       title: "Interior Design Insights",
// // //       thumbnail: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80",
// // //       views: 12453,
// // //       publishedAt: "2024-04-05",
// // //     },
// // //   ];

// // //   useEffect(() => {
// // //     loadSocialLinks();
// // //   }, []);

// // //   const loadSocialLinks = async () => {
// // //     try {
// // //       setLoading(true);
// // //       const response = await getSocialMedia();
// // //       setSocialLinks(response.data || []);
// // //     } catch (error) {
// // //       console.error("Error loading social links:", error);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const getPlatformIcon = (platform) => {
// // //     const icons = {
// // //       instagram: Instagram,
// // //       youtube: Youtube,
// // //     };
// // //     const Icon = icons[platform?.toLowerCase()];
// // //     return Icon || Instagram;
// // //   };

// // //   const getPlatformColor = (platform) => {
// // //     const colors = {
// // //       instagram: "#E1306C",
// // //       youtube: "#FF0000",
// // //     };
// // //     return colors[platform?.toLowerCase()] || "#777777";
// // //   };

// // //   const filteredItems = () => {
// // //     if (activePlatform === "all") {
// // //       return [...instagramPosts, ...youtubeVideosList];
// // //     } else if (activePlatform === "instagram") {
// // //       return instagramPosts;
// // //     } else if (activePlatform === "youtube") {
// // //       return youtubeVideosList;
// // //     }
// // //     return [];
// // //   };

// // //   const items = filteredItems();
// // //   const totalItems = items.length;

// // //   const nextSlide = () => {
// // //     setCurrentIndex((prev) => (prev + 1) % totalItems);
// // //   };

// // //   const prevSlide = () => {
// // //     setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
// // //   };

// // //   const getItemsPerView = () => {
// // //     if (window.innerWidth < 768) return 1;
// // //     if (window.innerWidth < 1024) return 2;
// // //     return 3;
// // //   };

// // //   const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

// // //   useEffect(() => {
// // //     const handleResize = () => {
// // //       setItemsPerView(getItemsPerView());
// // //     };
// // //     window.addEventListener("resize", handleResize);
// // //     return () => window.removeEventListener("resize", handleResize);
// // //   }, []);

// // //   const visibleItems = items.slice(currentIndex, currentIndex + itemsPerView);
// // //   const remainingItems = items.slice(currentIndex + itemsPerView);

// // //   return (
// // //     <section className="fya-social-wall">
// // //       <div className="fya-social-wall__container">
// // //         {/* Header */}
// // //         <div className="fya-social-wall__header">
// // //           <div className="fya-social-wall__label">
// // //             <span className="fya-social-wall__number">06</span>
// // //             <span className="fya-social-wall__line" />
// // //             <span className="fya-social-wall__label-text">SOCIAL FEED</span>
// // //           </div>
// // //           <h2 className="fya-social-wall__title">
// // //             Connect With <span className="fya-social-wall__highlight">Us</span>
// // //           </h2>
// // //         </div>

// // //         {/* Platform Filters */}
// // //         <div className="fya-social-wall__filters">
// // //           <button
// // //             className={`fya-social-wall__filter ${
// // //               activePlatform === "all" ? "fya-social-wall__filter--active" : ""
// // //             }`}
// // //             onClick={() => setActivePlatform("all")}
// // //           >
// // //             <span>All</span>
// // //           </button>
// // //           <button
// // //             className={`fya-social-wall__filter ${
// // //               activePlatform === "instagram" ? "fya-social-wall__filter--active" : ""
// // //             }`}
// // //             onClick={() => setActivePlatform("instagram")}
// // //           >
// // //             <Instagram size={16} />
// // //             <span>Instagram</span>
// // //           </button>
// // //           <button
// // //             className={`fya-social-wall__filter ${
// // //               activePlatform === "youtube" ? "fya-social-wall__filter--active" : ""
// // //             }`}
// // //             onClick={() => setActivePlatform("youtube")}
// // //           >
// // //             <Youtube size={16} />
// // //             <span>YouTube</span>
// // //           </button>
// // //         </div>

// // //         {/* Carousel */}
// // //         <div className="fya-social-wall__carousel">
// // //           <button
// // //             className="fya-social-wall__nav fya-social-wall__nav--prev"
// // //             onClick={prevSlide}
// // //             disabled={totalItems <= itemsPerView}
// // //           >
// // //             <ChevronLeft size={24} />
// // //           </button>

// // //           <div className="fya-social-wall__track">
// // //             <div className="fya-social-wall__slides">
// // //               {visibleItems.map((item, index) => {
// // //                 const isInstagram = item.hasOwnProperty("likes");
// // //                 const isYoutube = item.hasOwnProperty("views");

// // //                 return (
// // //                   <div
// // //                     key={index}
// // //                     className="fya-social-wall__slide"
// // //                     style={{
// // //                       flex: `0 0 ${100 / itemsPerView}%`,
// // //                       maxWidth: `${100 / itemsPerView}%`,
// // //                     }}
// // //                   >
// // //                     {/* Instagram Card */}
// // //                     {isInstagram && (
// // //                       <div className="fya-social-wall__card fya-social-wall__card--instagram">
// // //                         <div className="fya-social-wall__card-image">
// // //                           <img src={item.thumbnail} alt={item.caption} />
// // //                           <div className="fya-social-wall__card-badge">
// // //                             <Instagram size={16} />
// // //                             <span>Instagram</span>
// // //                           </div>
// // //                           <div className="fya-social-wall__card-overlay">
// // //                             <a
// // //                               href={item.url}
// // //                               target="_blank"
// // //                               rel="noopener noreferrer"
// // //                               className="fya-social-wall__card-link"
// // //                             >
// // //                               View on Instagram
// // //                             </a>
// // //                           </div>
// // //                         </div>
// // //                         <div className="fya-social-wall__card-content">
// // //                           <p className="fya-social-wall__card-caption">
// // //                             {item.caption}
// // //                           </p>
// // //                           <div className="fya-social-wall__card-stats">
// // //                             <span className="fya-social-wall__card-stat">
// // //                               <Heart size={14} />
// // //                               {item.likes}
// // //                             </span>
// // //                             <span className="fya-social-wall__card-stat">
// // //                               <MessageCircle size={14} />
// // //                               {item.comments}
// // //                             </span>
// // //                           </div>
// // //                         </div>
// // //                       </div>
// // //                     )}

// // //                     {/* YouTube Card */}
// // //                     {isYoutube && (
// // //                       <div className="fya-social-wall__card fya-social-wall__card--youtube">
// // //                         <div className="fya-social-wall__card-image">
// // //                           <img src={item.thumbnail} alt={item.title} />
// // //                           <div className="fya-social-wall__card-badge">
// // //                             <Youtube size={16} />
// // //                             <span>YouTube</span>
// // //                           </div>
// // //                           <div className="fya-social-wall__card-play">
// // //                             <Play size={24} />
// // //                           </div>
// // //                           <div className="fya-social-wall__card-overlay">
// // //                             <a
// // //                               href={`https://www.youtube.com/watch?v=${item.id}`}
// // //                               target="_blank"
// // //                               rel="noopener noreferrer"
// // //                               className="fya-social-wall__card-link"
// // //                             >
// // //                               Watch on YouTube
// // //                             </a>
// // //                           </div>
// // //                         </div>
// // //                         <div className="fya-social-wall__card-content">
// // //                           <h4 className="fya-social-wall__card-title">
// // //                             {item.title}
// // //                           </h4>
// // //                           <div className="fya-social-wall__card-stats">
// // //                             <span className="fya-social-wall__card-stat">
// // //                               <Eye size={14} />
// // //                               {item.views.toLocaleString()}
// // //                             </span>
// // //                             <span className="fya-social-wall__card-stat">
// // //                               <Clock size={14} />
// // //                               {new Date(item.publishedAt).toLocaleDateString()}
// // //                             </span>
// // //                           </div>
// // //                         </div>
// // //                       </div>
// // //                     )}
// // //                   </div>
// // //                 );
// // //               })}
// // //             </div>
// // //           </div>

// // //           <button
// // //             className="fya-social-wall__nav fya-social-wall__nav--next"
// // //             onClick={nextSlide}
// // //             disabled={totalItems <= itemsPerView}
// // //           >
// // //             <ChevronRight size={24} />
// // //           </button>
// // //         </div>

// // //         {/* Dots Indicator */}
// // //         {totalItems > itemsPerView && (
// // //           <div className="fya-social-wall__dots">
// // //             {Array.from({ length: Math.ceil(totalItems / itemsPerView) }).map(
// // //               (_, index) => (
// // //                 <button
// // //                   key={index}
// // //                   className={`fya-social-wall__dot ${
// // //                     Math.floor(currentIndex / itemsPerView) === index
// // //                       ? "fya-social-wall__dot--active"
// // //                       : ""
// // //                   }`}
// // //                   onClick={() => setCurrentIndex(index * itemsPerView)}
// // //                 />
// // //               )
// // //             )}
// // //           </div>
// // //         )}

// // //         {/* Social Media Links */}
// // //         <div className="fya-social-wall__links">
// // //           <span className="fya-social-wall__links-label">Follow Us</span>
// // //           <div className="fya-social-wall__links-list">
// // //             {socialLinks.map((social) => {
// // //               const Icon = getPlatformIcon(social.platform);
// // //               const color = getPlatformColor(social.platform);
// // //               return (
// // //                 <a
// // //                   key={social.id}
// // //                   href={social.url}
// // //                   target="_blank"
// // //                   rel="noopener noreferrer"
// // //                   className="fya-social-wall__link"
// // //                   style={{ color }}
// // //                 >
// // //                   <Icon size={20} />
// // //                   <span>{social.label || social.platform}</span>
// // //                 </a>
// // //               );
// // //             })}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default SocialWall;

// // // src/components/SocialWall/SocialWall.jsx
// // import { useEffect, useState } from "react";
// // import {
// //   FaInstagram,
// //   FaYoutube,
// //   FaHeart,
// //   FaComment,
// //   FaEye,
// //   FaShare,
// // } from "react-icons/fa";
// // import {
// //   IoChevronBack,
// //   IoChevronForward,
// //   IoPlay,
// //   IoTimeOutline,
// // } from "react-icons/io5";
// // import { getSocialMedia } from "../services/socialMedia.api.js";
// // import "./SocialWall.css";

// // const SocialWall = () => {
// //   const [socialLinks, setSocialLinks] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [activePlatform, setActivePlatform] = useState("all");
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   // Sample Instagram posts
// //   const instagramPosts = [
// //     {
// //       id: "1",
// //       url: "https://www.instagram.com/p/CxQ8KXhpBqE/",
// //       thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80",
// //       caption: "Modern residential project - Completed in record time",
// //       likes: 245,
// //       comments: 18,
// //     },
// //     {
// //       id: "2",
// //       url: "https://www.instagram.com/p/CxQ8KXhpBqE/",
// //       thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80",
// //       caption: "Commercial construction at its finest",
// //       likes: 189,
// //       comments: 12,
// //     },
// //     {
// //       id: "3",
// //       url: "https://www.instagram.com/p/CxQ8KXhpBqE/",
// //       thumbnail: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=80",
// //       caption: "Attention to detail in every project",
// //       likes: 312,
// //       comments: 24,
// //     },
// //     {
// //       id: "4",
// //       url: "https://www.instagram.com/p/CxQ8KXhpBqE/",
// //       thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80",
// //       caption: "Structural excellence - Building for the future",
// //       likes: 156,
// //       comments: 9,
// //     },
// //     {
// //       id: "5",
// //       url: "https://www.instagram.com/p/CxQ8KXhpBqE/",
// //       thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80",
// //       caption: "Project execution - From concept to completion",
// //       likes: 203,
// //       comments: 15,
// //     },
// //     {
// //       id: "6",
// //       url: "https://www.instagram.com/p/CxQ8KXhpBqE/",
// //       thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80",
// //       caption: "Completed project - Ready for handover",
// //       likes: 278,
// //       comments: 21,
// //     },
// //   ];

// //   // Sample YouTube videos
// //   const youtubeVideosList = [
// //     {
// //       id: "dQw4w9WgXcQ",
// //       title: "Modern Construction Techniques",
// //       thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80",
// //       views: 15243,
// //       publishedAt: "2024-01-15",
// //     },
// //     {
// //       id: "dQw4w9WgXcQ",
// //       title: "Architectural Design Process",
// //       thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80",
// //       views: 9876,
// //       publishedAt: "2024-02-20",
// //     },
// //     {
// //       id: "dQw4w9WgXcQ",
// //       title: "Sustainable Building Practices",
// //       thumbnail: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=80",
// //       views: 21345,
// //       publishedAt: "2024-03-10",
// //     },
// //     {
// //       id: "dQw4w9WgXcQ",
// //       title: "Interior Design Insights",
// //       thumbnail: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80",
// //       views: 12453,
// //       publishedAt: "2024-04-05",
// //     },
// //   ];

// //   useEffect(() => {
// //     loadSocialLinks();
// //   }, []);

// //   const loadSocialLinks = async () => {
// //     try {
// //       setLoading(true);
// //       const response = await getSocialMedia();
// //       setSocialLinks(response.data || []);
// //     } catch (error) {
// //       console.error("Error loading social links:", error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const getPlatformIcon = (platform) => {
// //     if (platform?.toLowerCase() === "instagram") return FaInstagram;
// //     if (platform?.toLowerCase() === "youtube") return FaYoutube;
// //     return FaInstagram;
// //   };

// //   const getPlatformColor = (platform) => {
// //     const colors = {
// //       instagram: "#E1306C",
// //       youtube: "#FF0000",
// //     };
// //     return colors[platform?.toLowerCase()] || "#777777";
// //   };

// //   const filteredItems = () => {
// //     if (activePlatform === "all") {
// //       return [...instagramPosts, ...youtubeVideosList];
// //     } else if (activePlatform === "instagram") {
// //       return instagramPosts;
// //     } else if (activePlatform === "youtube") {
// //       return youtubeVideosList;
// //     }
// //     return [];
// //   };

// //   const items = filteredItems();
// //   const totalItems = items.length;

// //   const nextSlide = () => {
// //     setCurrentIndex((prev) => (prev + 1) % totalItems);
// //   };

// //   const prevSlide = () => {
// //     setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
// //   };

// //   const getItemsPerView = () => {
// //     if (window.innerWidth < 768) return 1;
// //     if (window.innerWidth < 1024) return 2;
// //     return 3;
// //   };

// //   const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

// //   useEffect(() => {
// //     const handleResize = () => {
// //       setItemsPerView(getItemsPerView());
// //     };
// //     window.addEventListener("resize", handleResize);
// //     return () => window.removeEventListener("resize", handleResize);
// //   }, []);

// //   const visibleItems = items.slice(currentIndex, currentIndex + itemsPerView);

// //   if (loading) {
// //     return (
// //       <section className="fya-social-wall">
// //         <div className="fya-social-wall__container">
// //           <div className="fya-social-wall__loading">
// //             <div className="fya-social-wall__spinner" />
// //             <span>Loading social feed...</span>
// //           </div>
// //         </div>
// //       </section>
// //     );
// //   }

// //   return (
// //     <section className="fya-social-wall">
// //       <div className="fya-social-wall__container">
// //         {/* Header */}
// //         <div className="fya-social-wall__header">
// //           <div className="fya-social-wall__label">
// //             <span className="fya-social-wall__number">06</span>
// //             <span className="fya-social-wall__line" />
// //             <span className="fya-social-wall__label-text">SOCIAL FEED</span>
// //           </div>
// //           <h2 className="fya-social-wall__title">
// //             Connect With <span className="fya-social-wall__highlight">Us</span>
// //           </h2>
// //         </div>

// //         {/* Platform Filters */}
// //         <div className="fya-social-wall__filters">
// //           <button
// //             className={`fya-social-wall__filter ${
// //               activePlatform === "all" ? "fya-social-wall__filter--active" : ""
// //             }`}
// //             onClick={() => setActivePlatform("all")}
// //           >
// //             <span>All</span>
// //           </button>
// //           <button
// //             className={`fya-social-wall__filter ${
// //               activePlatform === "instagram" ? "fya-social-wall__filter--active" : ""
// //             }`}
// //             onClick={() => setActivePlatform("instagram")}
// //           >
// //             <FaInstagram size={16} />
// //             <span>Instagram</span>
// //           </button>
// //           <button
// //             className={`fya-social-wall__filter ${
// //               activePlatform === "youtube" ? "fya-social-wall__filter--active" : ""
// //             }`}
// //             onClick={() => setActivePlatform("youtube")}
// //           >
// //             <FaYoutube size={16} />
// //             <span>YouTube</span>
// //           </button>
// //         </div>

// //         {/* Carousel */}
// //         <div className="fya-social-wall__carousel">
// //           <button
// //             className="fya-social-wall__nav fya-social-wall__nav--prev"
// //             onClick={prevSlide}
// //             disabled={totalItems <= itemsPerView}
// //           >
// //             <IoChevronBack size={24} />
// //           </button>

// //           <div className="fya-social-wall__track">
// //             <div className="fya-social-wall__slides">
// //               {visibleItems.map((item, index) => {
// //                 const isInstagram = item.hasOwnProperty("likes");
// //                 const isYoutube = item.hasOwnProperty("views");

// //                 return (
// //                   <div
// //                     key={index}
// //                     className="fya-social-wall__slide"
// //                     style={{
// //                       flex: `0 0 ${100 / itemsPerView}%`,
// //                       maxWidth: `${100 / itemsPerView}%`,
// //                     }}
// //                   >
// //                     {/* Instagram Card */}
// //                     {isInstagram && (
// //                       <div className="fya-social-wall__card fya-social-wall__card--instagram">
// //                         <div className="fya-social-wall__card-image">
// //                           <img src={item.thumbnail} alt={item.caption} />
// //                           <div className="fya-social-wall__card-badge">
// //                             <FaInstagram size={16} />
// //                             <span>Instagram</span>
// //                           </div>
// //                           <div className="fya-social-wall__card-overlay">
// //                             <a
// //                               href={item.url}
// //                               target="_blank"
// //                               rel="noopener noreferrer"
// //                               className="fya-social-wall__card-link"
// //                             >
// //                               View on Instagram
// //                             </a>
// //                           </div>
// //                         </div>
// //                         <div className="fya-social-wall__card-content">
// //                           <p className="fya-social-wall__card-caption">
// //                             {item.caption}
// //                           </p>
// //                           <div className="fya-social-wall__card-stats">
// //                             <span className="fya-social-wall__card-stat">
// //                               <FaHeart size={14} />
// //                               {item.likes}
// //                             </span>
// //                             <span className="fya-social-wall__card-stat">
// //                               <FaComment size={14} />
// //                               {item.comments}
// //                             </span>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     )}

// //                     {/* YouTube Card */}
// //                     {isYoutube && (
// //                       <div className="fya-social-wall__card fya-social-wall__card--youtube">
// //                         <div className="fya-social-wall__card-image">
// //                           <img src={item.thumbnail} alt={item.title} />
// //                           <div className="fya-social-wall__card-badge">
// //                             <FaYoutube size={16} />
// //                             <span>YouTube</span>
// //                           </div>
// //                           <div className="fya-social-wall__card-play">
// //                             <IoPlay size={24} />
// //                           </div>
// //                           <div className="fya-social-wall__card-overlay">
// //                             <a
// //                               href={`https://www.youtube.com/watch?v=${item.id}`}
// //                               target="_blank"
// //                               rel="noopener noreferrer"
// //                               className="fya-social-wall__card-link"
// //                             >
// //                               Watch on YouTube
// //                             </a>
// //                           </div>
// //                         </div>
// //                         <div className="fya-social-wall__card-content">
// //                           <h4 className="fya-social-wall__card-title">
// //                             {item.title}
// //                           </h4>
// //                           <div className="fya-social-wall__card-stats">
// //                             <span className="fya-social-wall__card-stat">
// //                               <FaEye size={14} />
// //                               {item.views.toLocaleString()}
// //                             </span>
// //                             <span className="fya-social-wall__card-stat">
// //                               <IoTimeOutline size={14} />
// //                               {new Date(item.publishedAt).toLocaleDateString()}
// //                             </span>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     )}
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           </div>

// //           <button
// //             className="fya-social-wall__nav fya-social-wall__nav--next"
// //             onClick={nextSlide}
// //             disabled={totalItems <= itemsPerView}
// //           >
// //             <IoChevronForward size={24} />
// //           </button>
// //         </div>

// //         {/* Dots Indicator */}
// //         {totalItems > itemsPerView && (
// //           <div className="fya-social-wall__dots">
// //             {Array.from({ length: Math.ceil(totalItems / itemsPerView) }).map(
// //               (_, index) => (
// //                 <button
// //                   key={index}
// //                   className={`fya-social-wall__dot ${
// //                     Math.floor(currentIndex / itemsPerView) === index
// //                       ? "fya-social-wall__dot--active"
// //                       : ""
// //                   }`}
// //                   onClick={() => setCurrentIndex(index * itemsPerView)}
// //                 />
// //               )
// //             )}
// //           </div>
// //         )}

// //         {/* Social Media Links */}
// //         <div className="fya-social-wall__links">
// //           <span className="fya-social-wall__links-label">Follow Us</span>
// //           <div className="fya-social-wall__links-list">
// //             {socialLinks.map((social) => {
// //               const Icon = getPlatformIcon(social.platform);
// //               const color = getPlatformColor(social.platform);
// //               return (
// //                 <a
// //                   key={social.id}
// //                   href={social.url}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="fya-social-wall__link"
// //                   style={{ color }}
// //                 >
// //                   <Icon size={20} />
// //                   <span>{social.label || social.platform}</span>
// //                 </a>
// //               );
// //             })}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default SocialWall;




















// // src/components/SocialWall/SocialWall.jsx
// import { useEffect, useState } from "react";
// import {
//   FaInstagram,
//   FaYoutube,
//   FaHeart,
//   FaComment,
//   FaEye,
//   FaShare,
//   FaFacebook,
//   FaLinkedin,
//   FaTwitter,
// } from "react-icons/fa";
// import {
//   IoChevronBack,
//   IoChevronForward,
//   IoPlay,
//   IoTimeOutline,
// } from "react-icons/io5";
// import { getSocialMedia } from "../services/socialMedia.api.js";
// import "./SocialWall.css";

// const SocialWall = () => {
//   const [socialLinks, setSocialLinks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activePlatform, setActivePlatform] = useState("all");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [instagramPosts, setInstagramPosts] = useState([]);
//   const [youtubeVideos, setYoutubeVideos] = useState([]);

//   // Instagram Feed IDs (you can add more)
//   const instagramFeedIds = [
//     "CxQ8KXhpBqE",
//     "CxQ8KXhpBqF",
//     "CxQ8KXhpBqG",
//     "CxQ8KXhpBqH",
//     "CxQ8KXhpBqI",
//     "CxQ8KXhpBqJ",
//   ];

//   useEffect(() => {
//     loadSocialLinks();
//     loadInstagramFeed();
//     loadYouTubeVideos();
//   }, []);

//   const loadSocialLinks = async () => {
//     try {
//       setLoading(true);
//       const response = await getSocialMedia();
//       setSocialLinks(response.data || []);
//     } catch (error) {
//       console.error("Error loading social links:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Load Instagram Feed using Embed API
//   const loadInstagramFeed = async () => {
//     try {
//       // Using Instagram oEmbed API (no API key required)
//       const posts = await Promise.all(
//         instagramFeedIds.map(async (id) => {
//           try {
//             const response = await fetch(
//               `https://api.instagram.com/oembed?url=https://www.instagram.com/p/${id}/`
//             );
//             const data = await response.json();
//             return {
//               id: id,
//               url: `https://www.instagram.com/p/${id}/`,
//               thumbnail: data.thumbnail_url || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80",
//               title: data.title || "Instagram Post",
//               author_name: data.author_name || "FIYA Builders",
//               author_url: data.author_url || "",
//               provider_name: "Instagram",
//               likes: Math.floor(Math.random() * 300) + 100,
//               comments: Math.floor(Math.random() * 50) + 5,
//             };
//           } catch (error) {
//             console.error(`Error fetching Instagram post ${id}:`, error);
//             return null;
//           }
//         })
//       );

//       // Filter out failed requests and set state
//       const validPosts = posts.filter((post) => post !== null);
//       if (validPosts.length > 0) {
//         setInstagramPosts(validPosts);
//       } else {
//         // Fallback to sample data if API fails
//         setInstagramPosts(getDefaultInstagramPosts());
//       }
//     } catch (error) {
//       console.error("Error loading Instagram feed:", error);
//       setInstagramPosts(getDefaultInstagramPosts());
//     }
//   };

//   // Load YouTube Videos using oEmbed API
//   const loadYouTubeVideos = async () => {
//     try {
//       // Sample YouTube video IDs (replace with your actual video IDs)
//       const videoIds = [
//         "dQw4w9WgXcQ",
//         "dQw4w9WgXcR",
//         "dQw4w9WgXcS",
//         "dQw4w9WgXcT",
//       ];

//       const videos = await Promise.all(
//         videoIds.map(async (id) => {
//           try {
//             const response = await fetch(
//               `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`
//             );
//             const data = await response.json();
//             return {
//               id: id,
//               title: data.title || "YouTube Video",
//               thumbnail: data.thumbnail_url || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80",
//               author_name: data.author_name || "FIYA Builders",
//               author_url: data.author_url || "",
//               provider_name: "YouTube",
//               views: Math.floor(Math.random() * 20000) + 5041,
//               publishedAt: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000).toISOString(),
//             };
//           } catch (error) {
//             console.error(`Error fetching YouTube video ${id}:`, error);
//             return null;
//           }
//         })
//       );

//       const validVideos = videos.filter((video) => video !== null);
//       if (validVideos.length > 0) {
//         setYoutubeVideos(validVideos);
//       } else {
//         setYoutubeVideos(getDefaultYouTubeVideos());
//       }
//     } catch (error) {
//       console.error("Error loading YouTube videos:", error);
//       setYoutubeVideos(getDefaultYouTubeVideos());
//     }
//   };

//   // Default Instagram Posts (fallback)
//   const getDefaultInstagramPosts = () => [
//     {
//       id: "1",
//       url: "https://www.instagram.com/p/CxQ8KXhpBqE/",
//       thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80",
//       title: "Modern residential project",
//       author_name: "FIYA Builders",
//       provider_name: "Instagram",
//       likes: 245,
//       comments: 18,
//     },
//     {
//       id: "2",
//       url: "https://www.instagram.com/p/CxQ8KXhpBqE/",
//       thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80",
//       title: "Commercial construction",
//       author_name: "FIYA Builders",
//       provider_name: "Instagram",
//       likes: 189,
//       comments: 12,
//     },
//     {
//       id: "3",
//       url: "https://www.instagram.com/p/CxQ8KXhpBqE/",
//       thumbnail: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=80",
//       title: "Attention to detail",
//       author_name: "FIYA Builders",
//       provider_name: "Instagram",
//       likes: 312,
//       comments: 24,
//     },
//     {
//       id: "4",
//       url: "https://www.instagram.com/p/CxQ8KXhpBqE/",
//       thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80",
//       title: "Structural excellence",
//       author_name: "FIYA Builders",
//       provider_name: "Instagram",
//       likes: 156,
//       comments: 9,
//     },
//     {
//       id: "5",
//       url: "https://www.instagram.com/p/CxQ8KXhpBqE/",
//       thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80",
//       title: "Project execution",
//       author_name: "FIYA Builders",
//       provider_name: "Instagram",
//       likes: 203,
//       comments: 15,
//     },
//     {
//       id: "6",
//       url: "https://www.instagram.com/p/CxQ8KXhpBqE/",
//       thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80",
//       title: "Completed project",
//       author_name: "FIYA Builders",
//       provider_name: "Instagram",
//       likes: 278,
//       comments: 21,
//     },
//   ];

//   // Default YouTube Videos (fallback)
//   const getDefaultYouTubeVideos = () => [
//     {
//       id: "dQw4w9WgXcQ",
//       title: "Modern Construction Techniques",
//       thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80",
//       author_name: "FIYA Builders",
//       provider_name: "YouTube",
//       views: 15243,
//       publishedAt: "2024-01-15",
//     },
//     {
//       id: "dQw4w9WgXcQ",
//       title: "Architectural Design Process",
//       thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80",
//       author_name: "FIYA Builders",
//       provider_name: "YouTube",
//       views: 9876,
//       publishedAt: "2024-02-20",
//     },
//     {
//       id: "dQw4w9WgXcQ",
//       title: "Sustainable Building Practices",
//       thumbnail: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=80",
//       author_name: "FIYA Builders",
//       provider_name: "YouTube",
//       views: 21345,
//       publishedAt: "2024-03-10",
//     },
//     {
//       id: "dQw4w9WgXcQ",
//       title: "Interior Design Insights",
//       thumbnail: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80",
//       author_name: "FIYA Builders",
//       provider_name: "YouTube",
//       views: 12453,
//       publishedAt: "2024-04-05",
//     },
//   ];

//   const getPlatformIcon = (platform) => {
//     const icons = {
//       instagram: FaInstagram,
//       youtube: FaYoutube,
//       facebook: FaFacebook,
//       linkedin: FaLinkedin,
//       twitter: FaTwitter,
//     };
//     return icons[platform?.toLowerCase()] || FaInstagram;
//   };

//   const getPlatformColor = (platform) => {
//     const colors = {
//       instagram: "#E1306C",
//       youtube: "#FF0000",
//       facebook: "#1877F2",
//       linkedin: "#0A66C2",
//       twitter: "#1DA1F2",
//     };
//     return colors[platform?.toLowerCase()] || "#777777";
//   };

//   const filteredItems = () => {
//     if (activePlatform === "all") {
//       return [...instagramPosts, ...youtubeVideos];
//     } else if (activePlatform === "instagram") {
//       return instagramPosts;
//     } else if (activePlatform === "youtube") {
//       return youtubeVideos;
//     }
//     return [];
//   };

//   const items = filteredItems();
//   const totalItems = items.length;

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % totalItems);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
//   };

//   const getItemsPerView = () => {
//     if (window.innerWidth < 768) return 1;
//     if (window.innerWidth < 1024) return 2;
//     return 3;
//   };

//   const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

//   useEffect(() => {
//     const handleResize = () => {
//       setItemsPerView(getItemsPerView());
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const visibleItems = items.slice(currentIndex, currentIndex + itemsPerView);

//   if (loading) {
//     return (
//       <section className="fya-social-wall">
//         <div className="fya-social-wall__container">
//           <div className="fya-social-wall__loading">
//             <div className="fya-social-wall__spinner" />
//             <span>Loading social feed...</span>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="fya-social-wall">
//       <div className="fya-social-wall__container">
//         {/* Header */}
//         <div className="fya-social-wall__header">
//           <div className="fya-social-wall__label">
//             <span className="fya-social-wall__number">06</span>
//             <span className="fya-social-wall__line" />
//             <span className="fya-social-wall__label-text">SOCIAL FEED</span>
//           </div>
//           <h2 className="fya-social-wall__title">
//             Connect With <span className="fya-social-wall__highlight">Us</span>
//           </h2>
//         </div>

//         {/* Platform Filters */}
//         <div className="fya-social-wall__filters">
//           <button
//             className={`fya-social-wall__filter ${
//               activePlatform === "all" ? "fya-social-wall__filter--active" : ""
//             }`}
//             onClick={() => setActivePlatform("all")}
//           >
//             <span>All</span>
//           </button>
//           {socialLinks.map((social) => {
//             const Icon = getPlatformIcon(social.platform);
//             return (
//               <button
//                 key={social.id}
//                 className={`fya-social-wall__filter ${
//                   activePlatform === social.platform ? "fya-social-wall__filter--active" : ""
//                 }`}
//                 onClick={() => setActivePlatform(social.platform)}
//               >
//                 <Icon size={16} />
//                 <span>{social.label || social.platform}</span>
//               </button>
//             );
//           })}
//         </div>

//         {/* Carousel */}
//         <div className="fya-social-wall__carousel">
//           <button
//             className="fya-social-wall__nav fya-social-wall__nav--prev"
//             onClick={prevSlide}
//             disabled={totalItems <= itemsPerView}
//           >
//             <IoChevronBack size={24} />
//           </button>

//           <div className="fya-social-wall__track">
//             <div className="fya-social-wall__slides">
//               {visibleItems.map((item, index) => {
//                 const isInstagram = item.provider_name === "Instagram" || item.hasOwnProperty("likes");
//                 const isYoutube = item.provider_name === "YouTube" || item.hasOwnProperty("views");

//                 return (
//                   <div
//                     key={index}
//                     className="fya-social-wall__slide"
//                     style={{
//                       flex: `0 0 ${100 / itemsPerView}%`,
//                       maxWidth: `${100 / itemsPerView}%`,
//                     }}
//                   >
//                     {/* Instagram Card */}
//                     {isInstagram && (
//                       <div className="fya-social-wall__card fya-social-wall__card--instagram">
//                         <div className="fya-social-wall__card-image">
//                           <img src={item.thumbnail} alt={item.title || item.caption} />
//                           <div className="fya-social-wall__card-badge">
//                             <FaInstagram size={16} />
//                             <span>Instagram</span>
//                           </div>
//                           <div className="fya-social-wall__card-overlay">
//                             <a
//                               href={item.url}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="fya-social-wall__card-link"
//                             >
//                               View on Instagram
//                             </a>
//                           </div>
//                         </div>
//                         <div className="fya-social-wall__card-content">
//                           <p className="fya-social-wall__card-caption">
//                             {item.title || item.caption}
//                           </p>
//                           <div className="fya-social-wall__card-stats">
//                             <span className="fya-social-wall__card-stat">
//                               <FaHeart size={14} />
//                               {item.likes || 0}
//                             </span>
//                             <span className="fya-social-wall__card-stat">
//                               <FaComment size={14} />
//                               {item.comments || 0}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     )}

//                     {/* YouTube Card */}
//                     {isYoutube && (
//                       <div className="fya-social-wall__card fya-social-wall__card--youtube">
//                         <div className="fya-social-wall__card-image">
//                           <img src={item.thumbnail} alt={item.title} />
//                           <div className="fya-social-wall__card-badge">
//                             <FaYoutube size={16} />
//                             <span>YouTube</span>
//                           </div>
//                           <div className="fya-social-wall__card-play">
//                             <IoPlay size={24} />
//                           </div>
//                           <div className="fya-social-wall__card-overlay">
//                             <a
//                               href={`https://www.youtube.com/watch?v=${item.id}`}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="fya-social-wall__card-link"
//                             >
//                               Watch on YouTube
//                             </a>
//                           </div>
//                         </div>
//                         <div className="fya-social-wall__card-content">
//                           <h4 className="fya-social-wall__card-title">
//                             {item.title}
//                           </h4>
//                           <div className="fya-social-wall__card-stats">
//                             <span className="fya-social-wall__card-stat">
//                               <FaEye size={14} />
//                               {item.views?.toLocaleString() || 0}
//                             </span>
//                             <span className="fya-social-wall__card-stat">
//                               <IoTimeOutline size={14} />
//                               {item.publishedAt ? new Date(item.publishedAt).toLocaleDateString() : "Recent"}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           <button
//             className="fya-social-wall__nav fya-social-wall__nav--next"
//             onClick={nextSlide}
//             disabled={totalItems <= itemsPerView}
//           >
//             <IoChevronForward size={24} />
//           </button>
//         </div>

//         {/* Dots Indicator */}
//         {totalItems > itemsPerView && (
//           <div className="fya-social-wall__dots">
//             {Array.from({ length: Math.ceil(totalItems / itemsPerView) }).map(
//               (_, index) => (
//                 <button
//                   key={index}
//                   className={`fya-social-wall__dot ${
//                     Math.floor(currentIndex / itemsPerView) === index
//                       ? "fya-social-wall__dot--active"
//                       : ""
//                   }`}
//                   onClick={() => setCurrentIndex(index * itemsPerView)}
//                 />
//               )
//             )}
//           </div>
//         )}

//         {/* Social Media Links */}
//         <div className="fya-social-wall__links">
//           <span className="fya-social-wall__links-label">Follow Us</span>
//           <div className="fya-social-wall__links-list">
//             {socialLinks.map((social) => {
//               const Icon = getPlatformIcon(social.platform);
//               const color = getPlatformColor(social.platform);
//               return (
//                 <a
//                   key={social.id}
//                   href={social.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="fya-social-wall__link"
//                   style={{ color }}
//                 >
//                   <Icon size={20} />
//                   <span>{social.label || social.platform}</span>
//                 </a>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SocialWall;


// // src/components/SocialWall/SocialWall.jsx
// import { useEffect, useRef, useState } from "react";
// import { motion, useInView } from "framer-motion";
// import { FaInstagram, FaYoutube } from "react-icons/fa";
// import { getSocialMedia } from "../services/socialMedia.api.js";
// import "./SocialWall.css";

// // ================================================================
// // INSTAGRAM EMBED
// // ================================================================

// function loadInstagramEmbedScript() {
//   const existingScript = document.getElementById("sw-instagram-embed-script");
//   if (existingScript) {
//     if (window.instgrm) {
//       window.instgrm.Embeds.process();
//     }
//     return;
//   }

//   const script = document.createElement("script");
//   script.id = "sw-instagram-embed-script";
//   script.src = "https://www.instagram.com/embed.js";
//   script.async = true;
//   script.onload = () => {
//     if (window.instgrm) {
//       window.instgrm.Embeds.process();
//     }
//   };
//   document.body.appendChild(script);
// }

// function InstagramEmbed({ link }) {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     loadInstagramEmbedScript();
//   }, [link]);

//   return (
//     <div className="sw-embed-wrap" ref={containerRef}>
//       <blockquote
//         className="instagram-media"
//         data-instgrm-permalink={link}
//         data-instgrm-version="14"
//         style={{
//           background: "#FFF",
//           border: 0,
//           borderRadius: "12px",
//           margin: "0",
//           maxWidth: "320px",
//           minWidth: "280px",
//           width: "100%",
//         }}
//       >
//         <a href={link} target="_blank" rel="noopener noreferrer">
//           View this post on Instagram
//         </a>
//       </blockquote>
//     </div>
//   );
// }

// // ================================================================
// // YOUTUBE EMBED
// // ================================================================

// function YouTubeEmbed({ link }) {
//   // Extract video ID from YouTube URL
//   const getYouTubeId = (url) => {
//     const patterns = [
//       /(?:youtube\.com\/watch\?v=)([^&]+)/,
//       /(?:youtu\.be\/)([^?]+)/,
//       /(?:youtube\.com\/embed\/)([^?]+)/,
//       /(?:youtube\.com\/shorts\/)([^?]+)/,
//     ];
    
//     for (const pattern of patterns) {
//       const match = url.match(pattern);
//       if (match) return match[1];
//     }
//     return null;
//   };

//   const videoId = getYouTubeId(link);
  
//   if (!videoId) {
//     return (
//       <div className="sw-embed-wrap sw-embed-error">
//         <p>Invalid YouTube URL</p>
//       </div>
//     );
//   }

//   return (
//     <div className="sw-embed-wrap sw-yt-embed">
//       <div className="sw-yt-container">
//         <iframe
//           src={`https://www.youtube.com/embed/${videoId}`}
//           title="YouTube video player"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           allowFullScreen
//           style={{
//             width: "100%",
//             height: "100%",
//             borderRadius: "12px",
//             position: "absolute",
//             top: 0,
//             left: 0,
//           }}
//         />
//       </div>
//     </div>
//   );
// }

// // ================================================================
// // FACEBOOK EMBED
// // ================================================================

// function loadFacebookEmbedScript() {
//   const existingScript = document.getElementById("sw-fb-embed-script");
//   if (existingScript) {
//     if (window.FB) {
//       window.FB.XFBML.parse();
//     }
//     return;
//   }

//   const script = document.createElement("script");
//   script.id = "sw-fb-embed-script";
//   script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0";
//   script.async = true;
//   script.defer = true;
//   script.crossOrigin = "anonymous";
//   script.onload = () => {
//     if (window.FB) {
//       window.FB.XFBML.parse();
//     }
//   };
//   document.body.appendChild(script);
// }

// function FacebookEmbed({ url }) {
//   useEffect(() => {
//     loadFacebookEmbedScript();
//   }, [url]);

//   // Extract post ID from Facebook URL
//   const getFacebookPostId = (url) => {
//     const match = url.match(/\/posts\/([^/?]+)/);
//     return match ? match[1] : null;
//   };

//   const postId = getFacebookPostId(url);

//   return (
//     <div className="sw-embed-wrap sw-fb-embed">
//       <div
//         className="fb-post"
//         data-href={url}
//         data-width="320"
//         data-show-text="true"
//       />
//     </div>
//   );
// }

// // ================================================================
// // MAIN SOCIAL WALL COMPONENT
// // ================================================================

// const SocialWall = () => {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
//   const [activeTab, setActiveTab] = useState("instagram");
//   const [socialLinks, setSocialLinks] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch social media links from backend
//   useEffect(() => {
//     loadSocialLinks();
//   }, []);

//   const loadSocialLinks = async () => {
//     try {
//       setLoading(true);
//       const response = await getSocialMedia();
//       setSocialLinks(response.data || []);
//     } catch (error) {
//       console.error("Error loading social links:", error);
//       // Fallback sample data
//       setSocialLinks([
//         { platform: "instagram", url: "https://www.instagram.com/fiyabuilders" },
//         { platform: "youtube", url: "https://www.youtube.com/channel/UCXuqSBlHAE6Xw-yeJA0Tunw" },
//         { platform: "facebook", url: "https://www.facebook.com/fiyabuilders" },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Load embed scripts
//   useEffect(() => {
//     if (activeTab === "instagram") {
//       loadInstagramEmbedScript();
//     } else if (activeTab === "facebook") {
//       loadFacebookEmbedScript();
//     }
//   }, [activeTab]);

//   // Get posts based on active tab
//   const getPostsForTab = () => {
//     if (activeTab === "instagram") {
//       // Instagram posts from your database or sample data
//       return [
//         { id: "ig-1", link: "https://www.instagram.com/reel/DZpTfJeSjtI/" },
//         { id: "ig-2", link: "https://www.instagram.com/p/DZpSJnIEnPv/" },
//         { id: "ig-3", link: "https://www.instagram.com/reel/DYziybcyZdW/" },
//         { id: "ig-4", link: "https://www.instagram.com/reel/DX1sRRESqId/" },
//         { id: "ig-5", link: "https://www.instagram.com/reel/DVgD89NklT7/" },
//       ];
//     } else if (activeTab === "youtube") {
//       // YouTube sample videos (you can fetch from your database)
//       return [
//         { id: "yt-1", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
//         { id: "yt-2", link: "https://www.youtube.com/watch?v=dQw4w9WgXcR" },
//         { id: "yt-3", link: "https://www.youtube.com/watch?v=dQw4w9WgXcS" },
//         { id: "yt-4", link: "https://www.youtube.com/watch?v=dQw4w9WgXcT" },
//       ];
//     } else if (activeTab === "facebook") {
//       // Facebook sample posts
//       return [
//         { id: "fb-1", link: "https://www.facebook.com/uvagaifoundation/posts/pfbid02example1" },
//         { id: "fb-2", link: "https://www.facebook.com/uvagaifoundation/posts/pfbid02example2" },
//         { id: "fb-3", link: "https://www.facebook.com/uvagaifoundation/posts/pfbid02example3" },
//         { id: "fb-4", link: "https://www.facebook.com/uvagaifoundation/posts/pfbid02example4" },
//         { id: "fb-5", link: "https://www.facebook.com/uvagaifoundation/posts/pfbid02example5" },
//       ];
//     }
//     return [];
//   };

//   const posts = getPostsForTab();
//   const marqueeItems = [...posts, ...posts];

//   // Get platform icon and color
//   const getPlatformInfo = (platform) => {
//     const info = {
//       instagram: { icon: FaInstagram, color: "#E1306C", label: "Instagram" },
//       youtube: { icon: FaYoutube, color: "#FF0000", label: "YouTube" },
//       facebook: { icon: null, color: "#1877F2", label: "Facebook" },
//     };
//     return info[platform] || info.instagram;
//   };

//   // Get social link for the active platform
//   const getSocialLink = () => {
//     const platform = socialLinks.find(
//       (link) => link.platform?.toLowerCase() === activeTab
//     );
//     return platform?.url || "#";
//   };

//   if (loading) {
//     return (
//       <section className="sw-section" ref={sectionRef}>
//         <div className="sw-container">
//           <div className="sw-loading">
//             <div className="sw-loading-spinner" />
//             <span>Loading social feed...</span>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="sw-section" ref={sectionRef}>
//       <div className="sw-container">
//         {/* Header */}
//         <motion.div
//           className="sw-header"
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
//         >
//           <div className="sw-header-tag">
//             <span className="sw-header-tag-line" />
//             <span className="sw-header-tag-text">Social Feed</span>
//           </div>
//           <h2 className="sw-header-title">
//             Connect With <span className="sw-text-red">Us</span>
//           </h2>
//           <p className="sw-header-desc">
//             Follow our journey through social media. Real moments, real impact,
//             straight from our community.
//           </p>

//           {/* Toggle Tabs */}
//           <div className="sw-tabs">
//             {socialLinks.map((link) => {
//               const platform = link.platform?.toLowerCase();
//               const info = getPlatformInfo(platform);
//               const isActive = activeTab === platform;
              
//               return (
//                 <button
//                   key={link.id}
//                   className={`sw-tab ${isActive ? "sw-tab-active" : ""}`}
//                   onClick={() => setActiveTab(platform)}
//                   style={{
//                     borderColor: isActive ? info.color : "transparent",
//                     background: isActive ? `${info.color}15` : "transparent",
//                   }}
//                 >
//                   {info.icon && <info.icon size={18} />}
//                   <span>{info.label}</span>
//                 </button>
//               );
//             })}
//           </div>
//         </motion.div>
//       </div>

//       {/* Marquee Row */}
//       <div className="sw-marquee-wrap" key={`marquee-${activeTab}`}>
//         <motion.div
//           className="sw-marquee-track"
//           animate={{
//             x: [0, "-50%"],
//           }}
//           transition={{
//             x: {
//               duration: 40,
//               repeat: Infinity,
//               ease: "linear",
//             },
//           }}
//         >
//           {marqueeItems.map((post, index) => (
//             <div className="sw-marquee-item" key={`${post.id}-${index}`}>
//               {activeTab === "instagram" && <InstagramEmbed link={post.link} />}
//               {activeTab === "youtube" && <YouTubeEmbed link={post.link} />}
//               {activeTab === "facebook" && <FacebookEmbed url={post.link} />}
//             </div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Follow Button */}
//       <motion.div
//         className="sw-cta"
//         initial={{ opacity: 0, y: 20 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.6, delay: 0.5 }}
//       >
//         <a
//           href={getSocialLink()}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="sw-cta-btn"
//           style={{
//             background: getPlatformInfo(activeTab)?.color || "#D71920",
//           }}
//         >
//           <span>
//             {activeTab === "instagram" && "Follow on Instagram"}
//             {activeTab === "youtube" && "Subscribe on YouTube"}
//             {activeTab === "facebook" && "Follow on Facebook"}
//           </span>
//           <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//             <path
//               d="M3 9H15M15 9L10 4M15 9L10 14"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </a>
//       </motion.div>
//     </section>
//   );
// };

// export default SocialWall;


// src/components/SocialWall/SocialWall.jsx


// import { useEffect, useRef, useState } from "react";
// import { motion, useInView } from "framer-motion";
// import { FaInstagram, FaYoutube, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
// import { getSocialMedia } from "../services/socialMedia.api.js";
// import "./SocialWall.css";

// // ================================================================
// // INSTAGRAM EMBED
// // ================================================================

// function loadInstagramEmbedScript() {
//   const existingScript = document.getElementById("sw-instagram-embed-script");
//   if (existingScript) {
//     if (window.instgrm) {
//       window.instgrm.Embeds.process();
//     }
//     return;
//   }

//   const script = document.createElement("script");
//   script.id = "sw-instagram-embed-script";
//   script.src = "https://www.instagram.com/embed.js";
//   script.async = true;
//   script.defer = true;
//   script.onload = () => {
//     if (window.instgrm) {
//       window.instgrm.Embeds.process();
//     }
//   };
//   document.body.appendChild(script);
// }

// function InstagramEmbed({ link, index }) {
//   const containerRef = useRef(null);
//   const [embedError, setEmbedError] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     let mounted = true;
//     let timeoutId = null;

//     const loadEmbed = () => {
//       try {
//         loadInstagramEmbedScript();
        
//         // Check if embed loaded after 5 seconds
//         timeoutId = setTimeout(() => {
//           if (!mounted) return;
          
//           const blockquote = containerRef.current?.querySelector('.instagram-media');
//           if (blockquote) {
//             // Check if the embed rendered properly
//             const iframe = blockquote.querySelector('iframe');
//             if (!iframe || !iframe.src) {
//               setEmbedError(true);
//             }
//           } else {
//             setEmbedError(true);
//           }
//           setIsLoading(false);
//         }, 5041);
//       } catch (error) {
//         if (mounted) {
//           setEmbedError(true);
//           setIsLoading(false);
//         }
//       }
//     };

//     // Small delay to prevent rate limiting
//     const timer = setTimeout(loadEmbed, index * 200);
    
//     return () => {
//       mounted = false;
//       clearTimeout(timer);
//       if (timeoutId) clearTimeout(timeoutId);
//     };
//   }, [link, index]);

//   if (isLoading) {
//     return (
//       <div className="sw-embed-wrap sw-embed-loading">
//         <div className="sw-embed-spinner" />
//         <span>Loading post...</span>
//       </div>
//     );
//   }

//   if (embedError) {
//     return (
//       <div className="sw-embed-wrap sw-embed-fallback">
//         <div className="sw-embed-fallback-content">
//           <FaInstagram size={32} className="sw-embed-fallback-icon" />
//           <p>View on Instagram</p>
//           <a 
//             href={link} 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="sw-embed-fallback-link"
//           >
//             Open Post →
//           </a>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="sw-embed-wrap" ref={containerRef}>
//       <blockquote
//         className="instagram-media"
//         data-instgrm-permalink={link}
//         data-instgrm-version="14"
//         style={{
//           background: "#FFF",
//           border: 0,
//           borderRadius: "12px",
//           margin: "0",
//           maxWidth: "320px",
//           minWidth: "280px",
//           width: "100%",
//         }}
//       >
//         <a href={link} target="_blank" rel="noopener noreferrer">
//           View this post on Instagram
//         </a>
//       </blockquote>
//     </div>
//   );
// }

// // ================================================================
// // YOUTUBE EMBED
// // ================================================================

// function YouTubeEmbed({ link }) {
//   const getYouTubeId = (url) => {
//     const patterns = [
//       /(?:youtube\.com\/watch\?v=)([^&]+)/,
//       /(?:youtu\.be\/)([^?]+)/,
//       /(?:youtube\.com\/embed\/)([^?]+)/,
//       /(?:youtube\.com\/shorts\/)([^?]+)/,
//       /(?:youtube\.com\/v\/)([^?]+)/,
//     ];
    
//     for (const pattern of patterns) {
//       const match = url.match(pattern);
//       if (match) return match[1];
//     }
//     return null;
//   };

//   const videoId = getYouTubeId(link);
  
//   if (!videoId) {
//     return (
//       <div className="sw-embed-wrap sw-embed-error">
//         <FaYoutube size={32} />
//         <p>Invalid YouTube URL</p>
//         <a href={link} target="_blank" rel="noopener noreferrer" className="sw-embed-fallback-link">
//           Watch on YouTube →
//         </a>
//       </div>
//     );
//   }

//   return (
//     <div className="sw-embed-wrap sw-yt-embed">
//       <div className="sw-yt-container">
//         <iframe
//           src={`https://www.youtube.com/embed/${videoId}`}
//           title="YouTube video player"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           allowFullScreen
//           loading="lazy"
//         />
//       </div>
//     </div>
//   );
// }

// // ================================================================
// // FACEBOOK EMBED
// // ================================================================

// function loadFacebookEmbedScript() {
//   const existingScript = document.getElementById("sw-fb-embed-script");
//   if (existingScript) {
//     if (window.FB) {
//       window.FB.XFBML.parse();
//     }
//     return;
//   }

//   const script = document.createElement("script");
//   script.id = "sw-fb-embed-script";
//   script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0";
//   script.async = true;
//   script.defer = true;
//   script.crossOrigin = "anonymous";
//   script.onload = () => {
//     if (window.FB) {
//       window.FB.XFBML.parse();
//     }
//   };
//   document.body.appendChild(script);
// }

// function FacebookEmbed({ url }) {
//   const containerRef = useRef(null);
//   const [embedError, setEmbedError] = useState(false);

//   useEffect(() => {
//     loadFacebookEmbedScript();
    
//     // Check if embed loaded
//     const timer = setTimeout(() => {
//       const container = containerRef.current;
//       if (container && !container.querySelector('.fb-post iframe')) {
//         setEmbedError(true);
//       }
//     }, 5041);
    
//     return () => clearTimeout(timer);
//   }, [url]);

//   if (embedError) {
//     return (
//       <div className="sw-embed-wrap sw-embed-fallback">
//         <div className="sw-embed-fallback-content">
//           <FaFacebook size={32} className="sw-embed-fallback-icon" />
//           <p>View on Facebook</p>
//           <a 
//             href={url} 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="sw-embed-fallback-link"
//           >
//             Open Post →
//           </a>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="sw-embed-wrap sw-fb-embed" ref={containerRef}>
//       <div
//         className="fb-post"
//         data-href={url}
//         data-width="320"
//         data-show-text="true"
//       />
//     </div>
//   );
// }

// // ================================================================
// // PLATFORM EMBED ROUTER
// // ================================================================

// const PlatformEmbed = ({ platform, url, index }) => {
//   const platformLower = platform?.toLowerCase() || "";
  
//   switch (platformLower) {
//     case "instagram":
//       return <InstagramEmbed link={url} index={index} />;
//     case "youtube":
//       return <YouTubeEmbed link={url} />;
//     case "facebook":
//       return <FacebookEmbed url={url} />;
//     default:
//       return (
//         <div className="sw-embed-wrap sw-embed-error">
//           <p>Unsupported platform: {platform}</p>
//           <a href={url} target="_blank" rel="noopener noreferrer" className="sw-embed-fallback-link">
//             Visit →
//           </a>
//         </div>
//       );
//   }
// };

// // ================================================================
// // MAIN SOCIAL WALL COMPONENT
// // ================================================================

// const SocialWall = () => {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
//   const [activeTab, setActiveTab] = useState("instagram");
//   const [socialLinks, setSocialLinks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [posts, setPosts] = useState([]);

//   // Fetch social media links from backend
//   useEffect(() => {
//     loadSocialLinks();
//   }, []);

//   const loadSocialLinks = async () => {
//     try {
//       setLoading(true);
//       const response = await getSocialMedia();
//       const links = response.data || [];
//       setSocialLinks(links);
      
//       // Set active tab to first available platform
//       if (links.length > 0) {
//         setActiveTab(links[0].platform.toLowerCase());
//       }
//     } catch (error) {
//       console.error("Error loading social links:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Get posts for the active tab
//   useEffect(() => {
//     if (socialLinks.length > 0) {
//       const platformLinks = socialLinks.filter(
//         link => link.platform.toLowerCase() === activeTab && link.isActive !== false
//       );
      
//       // For display, we need to generate post items from the links
//       // In a real app, you would fetch actual posts from the platform API
//       // For now, we'll use the links as post sources
//       const postsData = platformLinks.map((link, index) => ({
//         id: `post-${index}`,
//         url: link.url,
//         platform: link.platform,
//         label: link.label || link.platform,
//       }));
      
//       setPosts(postsData);
//     }
//   }, [activeTab, socialLinks]);

//   // Get unique platforms for tabs
//   const getUniquePlatforms = () => {
//     const platforms = {};
//     socialLinks.forEach(link => {
//       const platform = link.platform.toLowerCase();
//       if (!platforms[platform] && link.isActive !== false) {
//         platforms[platform] = link;
//       }
//     });
//     return Object.values(platforms);
//   };

//   // Get platform icon
//   const getPlatformIcon = (platform) => {
//     const icons = {
//       instagram: FaInstagram,
//       youtube: FaYoutube,
//       facebook: FaFacebook,
//       twitter: FaTwitter,
//       linkedin: FaLinkedin,
//     };
//     const Icon = icons[platform?.toLowerCase()];
//     return Icon || FaInstagram;
//   };

//   // Get platform color
//   const getPlatformColor = (platform) => {
//     const colors = {
//       instagram: "#E1306C",
//       youtube: "#FF0000",
//       facebook: "#1877F2",
//       twitter: "#1DA1F2",
//       linkedin: "#0A66C2",
//     };
//     return colors[platform?.toLowerCase()] || "#777777";
//   };

//   // Get platform label
//   const getPlatformLabel = (platform) => {
//     const labels = {
//       instagram: "Instagram",
//       youtube: "YouTube",
//       facebook: "Facebook",
//       twitter: "Twitter",
//       linkedin: "LinkedIn",
//     };
//     return labels[platform?.toLowerCase()] || platform;
//   };

//   // Marquee items (duplicate for infinite scroll)
//   const marqueeItems = [...posts, ...posts, ...posts];

//   // Get active platform info
//   const activePlatformInfo = socialLinks.find(
//     link => link.platform.toLowerCase() === activeTab
//   );

//   if (loading) {
//     return (
//       <section className="sw-section" ref={sectionRef}>
//         <div className="sw-container">
//           <div className="sw-loading">
//             <div className="sw-loading-spinner" />
//             <span>Loading social feed...</span>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   if (socialLinks.length === 0) {
//     return (
//       <section className="sw-section" ref={sectionRef}>
//         <div className="sw-container">
//           <div className="sw-empty">
//             <div className="sw-empty-icon">🌐</div>
//             <h3>No social links configured</h3>
//             <p>Add social media links in the admin panel to display your feed.</p>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="sw-section" ref={sectionRef}>
//       <div className="sw-container">
//         {/* Header */}
//         <motion.div
//           className="sw-header"
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
//         >
//           <div className="sw-header-tag">
//             <span className="sw-header-tag-line" />
//             <span className="sw-header-tag-text">Social Feed</span>
//           </div>
//           <h2 className="sw-header-title">
//             Connect With <span className="sw-text-red">Us</span>
//           </h2>
//           <p className="sw-header-desc">
//             Follow our journey through social media. Real moments, real impact,
//             straight from our community.
//           </p>

//           {/* Tabs from Database */}
//           <div className="sw-tabs">
//             {getUniquePlatforms().map((link) => {
//               const platform = link.platform.toLowerCase();
//               const Icon = getPlatformIcon(platform);
//               const color = getPlatformColor(platform);
//               const isActive = activeTab === platform;
              
//               return (
//                 <button
//                   key={link.id}
//                   className={`sw-tab ${isActive ? "sw-tab-active" : ""}`}
//                   onClick={() => setActiveTab(platform)}
//                   style={{
//                     borderColor: isActive ? color : "transparent",
//                     background: isActive ? `${color}15` : "transparent",
//                     color: isActive ? color : undefined,
//                   }}
//                 >
//                   <Icon size={18} />
//                   <span>{link.label || getPlatformLabel(platform)}</span>
//                 </button>
//               );
//             })}
//           </div>
//         </motion.div>
//       </div>

//       {/* Marquee Row */}
//       {posts.length > 0 && (
//         <div className="sw-marquee-wrap" key={`marquee-${activeTab}`}>
//           <motion.div
//             className="sw-marquee-track"
//             animate={{
//               x: [0, "-50%"],
//             }}
//             transition={{
//               x: {
//                 duration: 40,
//                 repeat: Infinity,
//                 ease: "linear",
//               },
//             }}
//           >
//             {marqueeItems.map((post, index) => (
//               <div className="sw-marquee-item" key={`${post.id}-${index}`}>
//                 <PlatformEmbed 
//                   platform={post.platform} 
//                   url={post.url} 
//                   index={index % 5}
//                 />
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       )}

//       {/* Follow Button */}
//       {activePlatformInfo && (
//         <motion.div
//           className="sw-cta"
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.5 }}
//         >
//           <a
//             href={activePlatformInfo.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="sw-cta-btn"
//             style={{
//               background: getPlatformColor(activeTab),
//             }}
//           >
//             <span>
//               Follow on {getPlatformLabel(activeTab)}
//             </span>
//             <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//               <path
//                 d="M3 9H15M15 9L10 4M15 9L10 14"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </a>
//         </motion.div>
//       )}
//     </section>
//   );
// };

// export default SocialWall;


import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import { getSocialMedia } from "../services/socialMedia.api.js";
import "./SocialWall.css";

// ================================================================
// INSTAGRAM EMBED - Using react-instagram-embed or direct embed
// ================================================================

function InstagramEmbed({ link, index }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Load Instagram embed script
    const loadInstagramScript = () => {
      if (document.getElementById('instagram-embed-script')) {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
          setIsLoading(false);
        }
        return;
      }

      const script = document.createElement('script');
      script.id = 'instagram-embed-script';
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
          setIsLoading(false);
        }
      };
      script.onerror = () => {
        setHasError(true);
        setIsLoading(false);
      };
      document.body.appendChild(script);
    };

    // Process embed after DOM update
    const timer = setTimeout(() => {
      loadInstagramScript();
    }, 300);

    return () => clearTimeout(timer);
  }, [link]);

  if (hasError) {
    return (
      <div className="sw-embed-wrap sw-embed-fallback">
        <div className="sw-embed-fallback-content">
          <FaInstagram size={32} className="sw-embed-fallback-icon" style={{ color: '#E1306C' }} />
          <p>View on Instagram</p>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="sw-embed-fallback-link"
          >
            Open Post <FaExternalLinkAlt size={12} style={{ marginLeft: '6px' }} />
          </a>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="sw-embed-wrap sw-embed-loading">
        <div className="sw-embed-spinner" />
        <span>Loading Instagram post...</span>
      </div>
    );
  }

  return (
    <div className="sw-embed-wrap sw-ig-embed" ref={containerRef}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={link}
        data-instgrm-version="14"
        data-instgrm-captioned
        style={{
          background: '#FFF',
          border: '0',
          borderRadius: '12px',
          margin: '0',
          maxWidth: '320px',
          minWidth: '280px',
          width: '100%',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        }}
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          View this post on Instagram
        </a>
      </blockquote>
    </div>
  );
}

// ================================================================
// YOUTUBE EMBED - Using iframe with proper styling
// ================================================================

function YouTubeEmbed({ link }) {
  const getYouTubeId = (url) => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=)([^&]+)/,
      /(?:youtu\.be\/)([^?]+)/,
      /(?:youtube\.com\/embed\/)([^?]+)/,
      /(?:youtube\.com\/shorts\/)([^?]+)/,
      /(?:youtube\.com\/v\/)([^?]+)/,
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  const videoId = getYouTubeId(link);
  
  if (!videoId) {
    return (
      <div className="sw-embed-wrap sw-embed-error">
        <FaYoutube size={32} style={{ color: '#FF0000' }} />
        <p>Invalid YouTube URL</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="sw-embed-fallback-link">
          Watch on YouTube <FaExternalLinkAlt size={12} style={{ marginLeft: '6px' }} />
        </a>
      </div>
    );
  }

  return (
    <div className="sw-embed-wrap sw-yt-embed">
      <div className="sw-yt-container">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}

// ================================================================
// FACEBOOK EMBED - Using Facebook SDK
// ================================================================

function FacebookEmbed({ url }) {
  const containerRef = useRef(null);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadFacebookSDK = () => {
      if (document.getElementById('facebook-jssdk')) {
        if (window.FB) {
          window.FB.XFBML.parse();
          setIsLoading(false);
        }
        return;
      }

      window.fbAsyncInit = function() {
        FB.init({
          xfbml: true,
          version: 'v18.0'
        });
        setIsLoading(false);
      };

      const script = document.createElement('script');
      script.id = 'facebook-jssdk';
      script.src = 'https://connect.facebook.net/en_US/sdk.js';
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      script.onerror = () => {
        setHasError(true);
        setIsLoading(false);
      };
      document.body.appendChild(script);
    };

    const timer = setTimeout(loadFacebookSDK, 300);
    return () => clearTimeout(timer);
  }, [url]);

  if (hasError) {
    return (
      <div className="sw-embed-wrap sw-embed-fallback">
        <div className="sw-embed-fallback-content">
          <FaFacebook size={32} className="sw-embed-fallback-icon" style={{ color: '#1877F2' }} />
          <p>View on Facebook</p>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="sw-embed-fallback-link"
          >
            Open Post <FaExternalLinkAlt size={12} style={{ marginLeft: '6px' }} />
          </a>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="sw-embed-wrap sw-embed-loading">
        <div className="sw-embed-spinner" />
        <span>Loading Facebook post...</span>
      </div>
    );
  }

  return (
    <div className="sw-embed-wrap sw-fb-embed" ref={containerRef}>
      <div
        className="fb-post"
        data-href={url}
        data-width="320"
        data-show-text="true"
      />
    </div>
  );
}

// ================================================================
// TWITTER/X EMBED
// ================================================================

function TwitterEmbed({ url }) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTwitterScript = () => {
      if (document.getElementById('twitter-wjs')) {
        if (window.twttr) {
          window.twttr.widgets.load();
          setIsLoading(false);
        }
        return;
      }

      const script = document.createElement('script');
      script.id = 'twitter-wjs';
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.onload = () => {
        if (window.twttr) {
          window.twttr.widgets.load();
          setIsLoading(false);
        }
      };
      script.onerror = () => {
        setHasError(true);
        setIsLoading(false);
      };
      document.body.appendChild(script);
    };

    const timer = setTimeout(loadTwitterScript, 300);
    return () => clearTimeout(timer);
  }, [url]);

  if (hasError) {
    return (
      <div className="sw-embed-wrap sw-embed-fallback">
        <div className="sw-embed-fallback-content">
          <FaTwitter size={32} className="sw-embed-fallback-icon" style={{ color: '#1DA1F2' }} />
          <p>View on Twitter/X</p>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="sw-embed-fallback-link"
          >
            Open Post <FaExternalLinkAlt size={12} style={{ marginLeft: '6px' }} />
          </a>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="sw-embed-wrap sw-embed-loading">
        <div className="sw-embed-spinner" />
        <span>Loading Tweet...</span>
      </div>
    );
  }

  return (
    <div className="sw-embed-wrap sw-twitter-embed">
      <blockquote className="twitter-tweet" data-dnt="true" data-theme="light">
        <a href={url} target="_blank" rel="noopener noreferrer">Loading Tweet...</a>
      </blockquote>
    </div>
  );
}

// ================================================================
// PLATFORM EMBED ROUTER
// ================================================================

const PlatformEmbed = ({ platform, url, index }) => {
  const platformLower = platform?.toLowerCase() || "";
  
  switch (platformLower) {
    case "instagram":
      return <InstagramEmbed link={url} index={index} />;
    case "youtube":
      return <YouTubeEmbed link={url} />;
    case "facebook":
      return <FacebookEmbed url={url} />;
    case "twitter":
    case "x":
      return <TwitterEmbed url={url} />;
    default:
      return (
        <div className="sw-embed-wrap sw-embed-error">
          <p>Unsupported platform: {platform}</p>
          <a href={url} target="_blank" rel="noopener noreferrer" className="sw-embed-fallback-link">
            Visit <FaExternalLinkAlt size={12} style={{ marginLeft: '6px' }} />
          </a>
        </div>
      );
  }
};

// ================================================================
// MAIN SOCIAL WALL COMPONENT
// ================================================================

const SocialWall = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const [activeTab, setActiveTab] = useState("instagram");
  const [socialLinks, setSocialLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  // Fetch social media links from backend
  useEffect(() => {
    loadSocialLinks();
  }, []);

  const loadSocialLinks = async () => {
    try {
      setLoading(true);
      const response = await getSocialMedia();
      const links = response.data || [];
      setSocialLinks(links);
      
      // Set active tab to first available platform
      if (links.length > 0) {
        setActiveTab(links[0].platform.toLowerCase());
      }
    } catch (error) {
      console.error("Error loading social links:", error);
    } finally {
      setLoading(false);
    }
  };

  // Get posts for the active tab
  useEffect(() => {
    if (socialLinks.length > 0) {
      const platformLinks = socialLinks.filter(
        link => link.platform.toLowerCase() === activeTab && link.isActive !== false
      );
      
      const postsData = platformLinks.map((link, index) => ({
        id: `post-${index}`,
        url: link.url,
        platform: link.platform,
        label: link.label || link.platform,
      }));
      
      setPosts(postsData);
    }
  }, [activeTab, socialLinks]);

  // Get unique platforms for tabs
  const getUniquePlatforms = () => {
    const platforms = {};
    socialLinks.forEach(link => {
      const platform = link.platform.toLowerCase();
      if (!platforms[platform] && link.isActive !== false) {
        platforms[platform] = link;
      }
    });
    return Object.values(platforms);
  };

  // Get platform icon
  const getPlatformIcon = (platform) => {
    const icons = {
      instagram: FaInstagram,
      youtube: FaYoutube,
      facebook: FaFacebook,
      twitter: FaTwitter,
      x: FaTwitter,
      linkedin: FaLinkedin,
    };
    const Icon = icons[platform?.toLowerCase()];
    return Icon || FaInstagram;
  };

  // Get platform color
  const getPlatformColor = (platform) => {
    const colors = {
      instagram: "#E1306C",
      youtube: "#FF0000",
      facebook: "#1877F2",
      twitter: "#1DA1F2",
      x: "#1DA1F2",
      linkedin: "#0A66C2",
    };
    return colors[platform?.toLowerCase()] || "#777777";
  };

  // Get platform label
  const getPlatformLabel = (platform) => {
    const labels = {
      instagram: "Instagram",
      youtube: "YouTube",
      facebook: "Facebook",
      twitter: "Twitter",
      x: "Twitter/X",
      linkedin: "LinkedIn",
    };
    return labels[platform?.toLowerCase()] || platform;
  };

  // Duplicate posts for infinite scroll
  const marqueeItems = posts.length > 0 ? [...posts, ...posts, ...posts] : [];

  // Get active platform info
  const activePlatformInfo = socialLinks.find(
    link => link.platform.toLowerCase() === activeTab
  );

  if (loading) {
    return (
      <section className="sw-section" ref={sectionRef}>
        <div className="sw-container">
          <div className="sw-loading">
            <div className="sw-loading-spinner" />
            <span>Loading social feed...</span>
          </div>
        </div>
      </section>
    );
  }

  if (socialLinks.length === 0) {
    return (
      <section className="sw-section" ref={sectionRef}>
        <div className="sw-container">
          <div className="sw-empty">
            <div className="sw-empty-icon">🌐</div>
            <h3>No social links configured</h3>
            <p>Add social media links in the admin panel to display your feed.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="sw-section" ref={sectionRef}>
      <div className="sw-container">
        {/* Header */}
        <motion.div
          className="sw-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
        >
          <div className="sw-header-tag">
            <span className="sw-header-tag-line" />
            <span className="sw-header-tag-text">Social Feed</span>
          </div>
          <h2 className="sw-header-title">
            Connect With <span className="sw-text-red">Us</span>
          </h2>
          <p className="sw-header-desc">
            Follow our journey through social media. Real moments, real impact,
            straight from our community.
          </p>

          {/* Tabs from Database */}
          <div className="sw-tabs">
            {getUniquePlatforms().map((link) => {
              const platform = link.platform.toLowerCase();
              const Icon = getPlatformIcon(platform);
              const color = getPlatformColor(platform);
              const isActive = activeTab === platform;
              
              return (
                <button
                  key={link.id || platform}
                  className={`sw-tab ${isActive ? "sw-tab-active" : ""}`}
                  onClick={() => setActiveTab(platform)}
                  style={{
                    borderColor: isActive ? color : "transparent",
                    background: isActive ? `${color}15` : "transparent",
                    color: isActive ? color : undefined,
                  }}
                >
                  <Icon size={18} />
                  <span>{link.label || getPlatformLabel(platform)}</span>
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Marquee Row - Display embedded posts */}
      {posts.length > 0 && (
        <div className="sw-marquee-wrap" key={`marquee-${activeTab}`}>
          <motion.div
            className="sw-marquee-track"
            animate={{
              x: [0, "-50%"],
            }}
            transition={{
              x: {
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {marqueeItems.map((post, index) => (
              <div className="sw-marquee-item" key={`${post.id}-${index}`}>
                <PlatformEmbed 
                  platform={post.platform} 
                  url={post.url} 
                  index={index % 5}
                />
              </div>
            ))}
          </motion.div>
        </div>
      )}

      {/* Follow Button */}
      {activePlatformInfo && (
        <motion.div
          className="sw-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href={activePlatformInfo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="sw-cta-btn"
            style={{
              background: getPlatformColor(activeTab),
            }}
          >
            <span>
              Follow on {getPlatformLabel(activeTab)}
            </span>
            <FaExternalLinkAlt size={14} />
          </a>
        </motion.div>
      )}
    </section>
  );
};

export default SocialWall; 