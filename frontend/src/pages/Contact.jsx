

// // import { useState } from "react";
// // import {
// //   ArrowDown,
// //   ArrowUpRight,
// //   Check,
// //   Mail,
// //   MapPin,
// //   Phone,
// //   Clock,
// //   Building2,
// // } from "lucide-react";

// // import api from "../services/api.js";

// // import "./ContactPage.css";

// // const ContactPage = () => {
// //   const [form, setForm] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     projectType: "",
// //     budget: "",
// //     message: "",
// //   });

// //   const [loading, setLoading] = useState(false);
// //   const [success, setSuccess] = useState("");
// //   const [error, setError] = useState("");

// //   const handleChange = (event) => {
// //     const { name, value } = event.target;
// //     setForm((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     setLoading(true);
// //     setSuccess("");
// //     setError("");

// //     try {
// //       await api.post("/enquiries", form);
// //       setSuccess("Thank you. Our team will get back to you shortly.");
// //       setForm({
// //         name: "",
// //         email: "",
// //         phone: "",
// //         projectType: "",
// //         budget: "",
// //         message: "",
// //       });
// //     } catch (err) {
// //       console.error("Enquiry Error:", err);
// //       setError(
// //         err.response?.data?.message ||
// //           "Something went wrong. Please try again."
// //       );
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const contactInfo = [
// //     {
// //       icon: Phone,
// //       label: "CALL US",
// //       value: "+91 99999 99999",
// //       href: "tel:+919999999999",
// //       detail: "Mon-Sat, 9AM-7PM",
// //     },
// //     {
// //       icon: Mail,
// //       label: "EMAIL US",
// //       value: "info@fiyabuilders.com",
// //       href: "mailto:info@fiyabuilders.com",
// //       detail: "We reply within 24 hours",
// //     },
// //     {
// //       icon: MapPin,
// //       label: "VISIT US",
// //       value: "Pondicherry, Tamil Nadu",
// //       href: "https://maps.google.com",
// //       detail: "India",
// //     },
// //     {
// //       icon: Clock,
// //       label: "WORKING HOURS",
// //       value: "Monday - Saturday",
// //       href: null,
// //       detail: "9:00 AM - 7:00 PM",
// //     },
// //   ];

// //   return (
// //     <main className="fya-contact-page">
      
// //       {/* ==================================================
// //           HERO — Premium Visual
// //       ================================================== */}
// //       <section className="fya-contact-hero">
// //         <div className="fya-hero-background">
// //           <img 
// //             src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80" 
// //             alt="Contact FIYA Builders" 
// //           />
// //           <div className="fya-hero-overlay" />
// //         </div>
        
// //         <div className="fya-container fya-contact-hero-container">
// //           <div className="fya-hero-top-bar">
// //             <div className="fya-logo">
// //               <span className="fya-logo-white">FIYA</span>
// //               <span className="fya-logo-gold">BUILDERS</span>
// //             </div>
// //             <div className="fya-hero-tagline">
// //               <span className="fya-gold-line" />
// //               GET IN TOUCH
// //             </div>
// //           </div>
          
// //           <div className="fya-contact-hero-content">
// //             <h1 className="fya-contact-hero-title">
// //               Let's Build
// //               <br />
// //               <span className="fya-text-blue">Something</span>
// //               <br />
// //               <span className="fya-text-gold">Together</span>
// //             </h1>
// //             <p className="fya-contact-hero-subtitle">
// //               Have a project in mind? Tell us what you're planning
// //               and let's start the conversation.
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ==================================================
// //           CONTACT INFORMATION CARDS
// //       ================================================== */}
// //       <section className="fya-contact-info">
// //         <div className="fya-container">
// //           <div className="fya-section-label">
// //             <span className="fya-label-number">01</span>
// //             <span className="fya-label-line" />
// //             <span className="fya-label-text">CONTACT INFORMATION</span>
// //           </div>
          
// //           <div className="fya-contact-info-grid">
// //             {contactInfo.map((info, index) => (
// //               <div className="fya-contact-card" key={index}>
// //                 <div className="fya-contact-card-icon">
// //                   <info.icon size={24} strokeWidth={1.5} />
// //                 </div>
// //                 <span className="fya-contact-card-label">{info.label}</span>
// //                 {info.href ? (
// //                   <a href={info.href} className="fya-contact-card-value">
// //                     {info.value}
// //                   </a>
// //                 ) : (
// //                   <span className="fya-contact-card-value">{info.value}</span>
// //                 )}
// //                 <span className="fya-contact-card-detail">{info.detail}</span>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ==================================================
// //           ENQUIRY FORM — Premium Design
// //       ================================================== */}
// //       <section className="fya-contact-form-section">
// //         <div className="fya-container">
// //           <div className="fya-form-wrapper">
// //             <div className="fya-form-left">
// //               <div className="fya-section-label">
// //                 <span className="fya-label-number">02</span>
// //                 <span className="fya-label-line" />
// //                 <span className="fya-label-text">PROJECT ENQUIRY</span>
// //               </div>
// //               <h2 className="fya-form-heading">
// //                 Tell Us About
// //                 <br />
// //                 <span className="fya-text-blue">Your Project</span>
// //               </h2>
// //               <p className="fya-form-description">
// //                 Share the details of your project and our team will get back
// //                 to you with the next steps.
// //               </p>
              
// //               <div className="fya-form-benefits">
// //                 <div className="fya-benefit">
// //                   <Check size={16} />
// //                   <span>Free consultation</span>
// //                 </div>
// //                 <div className="fya-benefit">
// //                   <Check size={16} />
// //                   <span>Detailed project estimate</span>
// //                 </div>
// //                 <div className="fya-benefit">
// //                   <Check size={16} />
// //                   <span>Expert guidance</span>
// //                 </div>
// //               </div>
// //             </div>
            
// //             <form className="fya-contact-form" onSubmit={handleSubmit}>
// //               <div className="fya-form-row">
// //                 <div className="fya-form-group">
// //                   <label htmlFor="name">Your Name *</label>
// //                   <input
// //                     id="name"
// //                     name="name"
// //                     type="text"
// //                     placeholder="Enter your full name"
// //                     value={form.name}
// //                     onChange={handleChange}
// //                     required
// //                   />
// //                 </div>
                
// //                 <div className="fya-form-group">
// //                   <label htmlFor="email">Email Address *</label>
// //                   <input
// //                     id="email"
// //                     name="email"
// //                     type="email"
// //                     placeholder="you@example.com"
// //                     value={form.email}
// //                     onChange={handleChange}
// //                     required
// //                   />
// //                 </div>
// //               </div>
              
// //               <div className="fya-form-row">
// //                 <div className="fya-form-group">
// //                   <label htmlFor="phone">Phone Number *</label>
// //                   <input
// //                     id="phone"
// //                     name="phone"
// //                     type="tel"
// //                     placeholder="+91"
// //                     value={form.phone}
// //                     onChange={handleChange}
// //                     required
// //                   />
// //                 </div>
                
// //                 <div className="fya-form-group">
// //                   <label htmlFor="projectType">Project Type *</label>
// //                   <select
// //                     id="projectType"
// //                     name="projectType"
// //                     value={form.projectType}
// //                     onChange={handleChange}
// //                     required
// //                   >
// //                     <option value="">Select project type</option>
// //                     <option value="Residential">Residential</option>
// //                     <option value="Commercial">Commercial</option>
// //                     <option value="Turnkey">Turnkey</option>
// //                     <option value="Renovation">Renovation</option>
// //                     <option value="Interior">Interior</option>
// //                     <option value="Other">Other</option>
// //                   </select>
// //                 </div>
// //               </div>
              
// //               <div className="fya-form-group">
// //                 <label htmlFor="budget">Estimated Budget</label>
// //                 <select
// //                   id="budget"
// //                   name="budget"
// //                   value={form.budget}
// //                   onChange={handleChange}
// //                 >
// //                   <option value="">Select budget range</option>
// //                   <option value="Below ₹25 Lakhs">Below ₹25 Lakhs</option>
// //                   <option value="₹25 - ₹50 Lakhs">₹25 - ₹50 Lakhs</option>
// //                   <option value="₹50 Lakhs - ₹1 Crore">₹50 Lakhs - ₹1 Crore</option>
// //                   <option value="₹1 Crore+">₹1 Crore+</option>
// //                   <option value="Not Decided">Not decided</option>
// //                 </select>
// //               </div>
              
// //               <div className="fya-form-group">
// //                 <label htmlFor="message">Project Details *</label>
// //                 <textarea
// //                   id="message"
// //                   name="message"
// //                   rows="5"
// //                   placeholder="Tell us about your project, location, requirements..."
// //                   value={form.message}
// //                   onChange={handleChange}
// //                   required
// //                 />
// //               </div>
              
// //               {success && (
// //                 <div className="fya-form-success">
// //                   <Check size={18} />
// //                   <span>{success}</span>
// //                 </div>
// //               )}
              
// //               {error && (
// //                 <div className="fya-form-error">
// //                   {error}
// //                 </div>
// //               )}
              
// //               <button
// //                 type="submit"
// //                 disabled={loading}
// //                 className="fya-form-submit-btn"
// //               >
// //                 <span>{loading ? "SENDING..." : "SEND ENQUIRY"}</span>
// //                 <ArrowUpRight size={18} />
// //               </button>
// //             </form>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ==================================================
// //           LOCATION — Map Section
// //       ================================================== */}
// //       <section className="fya-contact-location">
// //         <div className="fya-container">
// //           <div className="fya-location-wrapper">
// //             <div className="fya-location-content">
// //               <div className="fya-section-label">
// //                 <span className="fya-label-number">03</span>
// //                 <span className="fya-label-line" />
// //                 <span className="fya-label-text">FIND US</span>
// //               </div>
// //               <h2 className="fya-location-heading">
// //                 Visit Our
// //                 <br />
// //                 <span className="fya-text-gold">Office</span>
// //               </h2>
// //               <p className="fya-location-address">
// //                 FIYA Builders
// //                 <br />
// //                 Pondicherry, Tamil Nadu
// //                 <br />
// //                 India
// //               </p>
// //               <a
// //                 href="https://maps.google.com"
// //                 target="_blank"
// //                 rel="noreferrer"
// //                 className="fya-location-link"
// //               >
// //                 <span>Open in Google Maps</span>
// //                 <ArrowUpRight size={18} />
// //               </a>
// //             </div>
            
// //             <div className="fya-location-map">
// //               <img 
// //                 src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80" 
// //                 alt="FIYA Builders Location"
// //               />
// //               <div className="fya-map-overlay" />
// //               <div className="fya-map-marker">
// //                 <Building2 size={32} />
// //                 <span>FIYA BUILDERS</span>
// //                 <small>PONDICHERRY · INDIA</small>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ==================================================
// //           CTA — Final Section
// //       ================================================== */}
// //       <section className="fya-contact-final">
// //         <div className="fya-container">
// //           <div className="fya-final-wrapper">
// //             <div className="fya-final-pattern" />
// //             <div className="fya-final-content">
// //               <span className="fya-final-logo">FIYA BUILDERS</span>
// //               <h2 className="fya-final-heading">
// //                 Your Next Space
// //                 <br />
// //                 Starts <span className="fya-text-gold">With a Conversation</span>
// //               </h2>
// //               <div className="fya-final-actions">
// //                 <a href="tel:+919999999999" className="fya-btn-gold">
// //                   CALL FIYA
// //                   <ArrowUpRight size={18} />
// //                 </a>
// //                 <a href="mailto:info@fiyabuilders.com" className="fya-btn-outline">
// //                   EMAIL US
// //                 </a>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //     </main>
// //   );
// // };

// // export default ContactPage;


// // src/pages/Contact/ContactPage.jsx
// import { useState } from "react";
// import {
//   ArrowDown,
//   ArrowUpRight,
//   Check,
//   Mail,
//   MapPin,
//   Phone,
//   Clock,
//   Building2,
//   User,
//   Briefcase,
//   DollarSign,
//   MessageSquare,
// } from "lucide-react";

// import api from "../services/api.js";
// import "./ContactPage.css";

// const ContactPage = () => {
//   const [fyaContactForm, setFyaContactForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     projectType: "",
//     budget: "",
//     message: "",
//   });

//   const [fyaContactLoading, setFyaContactLoading] = useState(false);
//   const [fyaContactSuccess, setFyaContactSuccess] = useState("");
//   const [fyaContactError, setFyaContactError] = useState("");

//   const fyaContactHandleChange = (event) => {
//     const { name, value } = event.target;
//     setFyaContactForm((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const fyaContactHandleSubmit = async (event) => {
//     event.preventDefault();
//     setFyaContactLoading(true);
//     setFyaContactSuccess("");
//     setFyaContactError("");

//     try {
//       await api.post("/enquiries", fyaContactForm);
//       setFyaContactSuccess("Thank you. Our team will get back to you shortly.");
//       setFyaContactForm({
//         name: "",
//         email: "",
//         phone: "",
//         projectType: "",
//         budget: "",
//         message: "",
//       });
//     } catch (err) {
//       console.error("Enquiry Error:", err);
//       setFyaContactError(
//         err.response?.data?.message ||
//           "Something went wrong. Please try again."
//       );
//     } finally {
//       setFyaContactLoading(false);
//     }
//   };

//   const fyaContactInfo = [
//     {
//       icon: Phone,
//       label: "CALL US",
//       value: "+91 99999 99999",
//       href: "tel:+919999999999",
//       detail: "Mon-Sat, 9AM-7PM",
//     },
//     {
//       icon: Mail,
//       label: "EMAIL US",
//       value: "info@fiyabuilders.com",
//       href: "mailto:info@fiyabuilders.com",
//       detail: "We reply within 24 hours",
//     },
//     {
//       icon: MapPin,
//       label: "VISIT US",
//       value: "Pondicherry, Tamil Nadu",
//       href: "https://maps.google.com",
//       detail: "India",
//     },
//     {
//       icon: Clock,
//       label: "WORKING HOURS",
//       value: "Monday - Saturday",
//       href: null,
//       detail: "9:00 AM - 7:00 PM",
//     },
//   ];

//   const fyaContactProjectTypes = [
//     "Residential",
//     "Commercial",
//     "Turnkey",
//     "Renovation",
//     "Interior",
//     "Other",
//   ];

//   const fyaContactBudgetRanges = [
//     "Below ₹25 Lakhs",
//     "₹25 - ₹50 Lakhs",
//     "₹50 Lakhs - ₹1 Crore",
//     "₹1 Crore+",
//     "Not Decided",
//   ];

//   return (
//     <main className="fya-contact-page">

//       {/* ==================================================
//           HERO SECTION
//       ================================================== */}
//       <section className="fya-contact-hero">
//         <div className="fya-contact-hero-bg">
//           <img
//             src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
//             alt="Contact FIYA Builders"
//             className="fya-contact-hero-image"
//           />
//           <div className="fya-contact-hero-overlay" />
//           <div className="fya-contact-hero-pattern" />
//         </div>

//         <div className="fya-contact-hero-container">
//           <div className="fya-contact-hero-top">
//             <div className="fya-contact-logo">
//               <span className="fya-contact-logo-primary">FIYA</span>
//               <span className="fya-contact-logo-secondary">BUILDERS</span>
//             </div>
//             <div className="fya-contact-hero-tagline">
//               <span className="fya-contact-tagline-dot" />
//               GET IN TOUCH
//             </div>
//           </div>

//           <div className="fya-contact-hero-content">
//             <div className="fya-contact-hero-label">
//               <span className="fya-contact-hero-number">01</span>
//               <span className="fya-contact-hero-label-text">CONTACT</span>
//               <span className="fya-contact-hero-line" />
//             </div>
//             <h1 className="fya-contact-hero-title">
//               Let's Build
//               <br />
//               <span className="fya-contact-hero-highlight">Something</span>
//               <br />
//               <span className="fya-contact-hero-highlight-gold">Together</span>
//             </h1>
//             <p className="fya-contact-hero-subtitle">
//               Have a project in mind? Tell us what you're planning
//               and let's start the conversation.
//             </p>
//           </div>

//           <div className="fya-contact-hero-bottom">
//             <div className="fya-contact-hero-scroll">
//               <ArrowDown size={16} strokeWidth={1.5} />
//               <span>SCROLL TO EXPLORE</span>
//             </div>
//             <div className="fya-contact-hero-counter">
//               <span className="fya-contact-counter-current">01</span>
//               <span className="fya-contact-counter-line" />
//               <span className="fya-contact-counter-total">04</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==================================================
//           CONTACT INFO CARDS
//       ================================================== */}
//       <section className="fya-contact-info">
//         <div className="fya-contact-container">
//           <div className="fya-contact-info-header">
//             <div className="fya-contact-label">
//               <span className="fya-contact-label-number">01</span>
//               <span className="fya-contact-label-line" />
//               <span className="fya-contact-label-text">CONTACT INFORMATION</span>
//             </div>
//           </div>

//           <div className="fya-contact-info-grid">
//             {fyaContactInfo.map((info, index) => (
//               <div className="fya-contact-info-card" key={index}>
//                 <div className="fya-contact-info-icon">
//                   <info.icon size={22} strokeWidth={1.5} />
//                 </div>
//                 <span className="fya-contact-info-label">{info.label}</span>
//                 {info.href ? (
//                   <a href={info.href} className="fya-contact-info-value">
//                     {info.value}
//                   </a>
//                 ) : (
//                   <span className="fya-contact-info-value">{info.value}</span>
//                 )}
//                 <span className="fya-contact-info-detail">{info.detail}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ==================================================
//           FORM SECTION
//       ================================================== */}
//       <section className="fya-contact-form-section">
//         <div className="fya-contact-container">
//           <div className="fya-contact-form-wrapper">
//             <div className="fya-contact-form-left">
//               <div className="fya-contact-label">
//                 <span className="fya-contact-label-number">02</span>
//                 <span className="fya-contact-label-line" />
//                 <span className="fya-contact-label-text">PROJECT ENQUIRY</span>
//               </div>
//               <h2 className="fya-contact-form-heading">
//                 Tell Us About
//                 <br />
//                 <span className="fya-contact-text-blue">Your Project</span>
//               </h2>
//               <p className="fya-contact-form-description">
//                 Share the details of your project and our team will get back
//                 to you with the next steps.
//               </p>

//               <div className="fya-contact-form-benefits">
//                 <div className="fya-contact-benefit">
//                   <Check size={16} className="fya-contact-benefit-icon" />
//                   <span>Free consultation</span>
//                 </div>
//                 <div className="fya-contact-benefit">
//                   <Check size={16} className="fya-contact-benefit-icon" />
//                   <span>Detailed project estimate</span>
//                 </div>
//                 <div className="fya-contact-benefit">
//                   <Check size={16} className="fya-contact-benefit-icon" />
//                   <span>Expert guidance</span>
//                 </div>
//               </div>
//             </div>

//             <form className="fya-contact-form" onSubmit={fyaContactHandleSubmit}>
//               <div className="fya-contact-form-row">
//                 <div className="fya-contact-form-group">
//                   <label htmlFor="fya-name" className="fya-contact-form-label">
//                     Your Name <span className="fya-contact-required">*</span>
//                   </label>
//                   <div className="fya-contact-input-wrapper">
//                     <User size={18} className="fya-contact-input-icon" />
//                     <input
//                       id="fya-name"
//                       name="name"
//                       type="text"
//                       className="fya-contact-input"
//                       placeholder="Enter your full name"
//                       value={fyaContactForm.name}
//                       onChange={fyaContactHandleChange}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="fya-contact-form-group">
//                   <label htmlFor="fya-email" className="fya-contact-form-label">
//                     Email Address <span className="fya-contact-required">*</span>
//                   </label>
//                   <div className="fya-contact-input-wrapper">
//                     <Mail size={18} className="fya-contact-input-icon" />
//                     <input
//                       id="fya-email"
//                       name="email"
//                       type="email"
//                       className="fya-contact-input"
//                       placeholder="you@example.com"
//                       value={fyaContactForm.email}
//                       onChange={fyaContactHandleChange}
//                       required
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="fya-contact-form-row">
//                 <div className="fya-contact-form-group">
//                   <label htmlFor="fya-phone" className="fya-contact-form-label">
//                     Phone Number <span className="fya-contact-required">*</span>
//                   </label>
//                   <div className="fya-contact-input-wrapper">
//                     <Phone size={18} className="fya-contact-input-icon" />
//                     <input
//                       id="fya-phone"
//                       name="phone"
//                       type="tel"
//                       className="fya-contact-input"
//                       placeholder="+91"
//                       value={fyaContactForm.phone}
//                       onChange={fyaContactHandleChange}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="fya-contact-form-group">
//                   <label htmlFor="fya-project" className="fya-contact-form-label">
//                     Project Type <span className="fya-contact-required">*</span>
//                   </label>
//                   <div className="fya-contact-input-wrapper">
//                     <Briefcase size={18} className="fya-contact-input-icon" />
//                     <select
//                       id="fya-project"
//                       name="projectType"
//                       className="fya-contact-input fya-contact-select"
//                       value={fyaContactForm.projectType}
//                       onChange={fyaContactHandleChange}
//                       required
//                     >
//                       <option value="">Select project type</option>
//                       {fyaContactProjectTypes.map((type) => (
//                         <option key={type} value={type}>{type}</option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>
//               </div>

//               <div className="fya-contact-form-group">
//                 <label htmlFor="fya-budget" className="fya-contact-form-label">
//                   Estimated Budget
//                 </label>
//                 <div className="fya-contact-input-wrapper">
//                   <DollarSign size={18} className="fya-contact-input-icon" />
//                   <select
//                     id="fya-budget"
//                     name="budget"
//                     className="fya-contact-input fya-contact-select"
//                     value={fyaContactForm.budget}
//                     onChange={fyaContactHandleChange}
//                   >
//                     <option value="">Select budget range</option>
//                     {fyaContactBudgetRanges.map((range) => (
//                       <option key={range} value={range}>{range}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               <div className="fya-contact-form-group">
//                 <label htmlFor="fya-message" className="fya-contact-form-label">
//                   Project Details <span className="fya-contact-required">*</span>
//                 </label>
//                 <div className="fya-contact-input-wrapper fya-contact-textarea-wrapper">
//                   <MessageSquare size={18} className="fya-contact-input-icon" />
//                   <textarea
//                     id="fya-message"
//                     name="message"
//                     className="fya-contact-input fya-contact-textarea"
//                     rows="5"
//                     placeholder="Tell us about your project, location, requirements..."
//                     value={fyaContactForm.message}
//                     onChange={fyaContactHandleChange}
//                     required
//                   />
//                 </div>
//               </div>

//               {fyaContactSuccess && (
//                 <div className="fya-contact-form-success">
//                   <Check size={18} />
//                   <span>{fyaContactSuccess}</span>
//                 </div>
//               )}

//               {fyaContactError && (
//                 <div className="fya-contact-form-error">
//                   {fyaContactError}
//                 </div>
//               )}

//               <button
//                 type="submit"
//                 disabled={fyaContactLoading}
//                 className="fya-contact-submit-btn"
//               >
//                 <span>{fyaContactLoading ? "SENDING..." : "SEND ENQUIRY"}</span>
//                 <ArrowUpRight size={18} className="fya-contact-submit-icon" />
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* ==================================================
//           LOCATION SECTION
//       ================================================== */}
//       <section className="fya-contact-location">
//         <div className="fya-contact-container">
//           <div className="fya-contact-location-wrapper">
//             <div className="fya-contact-location-content">
//               <div className="fya-contact-label">
//                 <span className="fya-contact-label-number">03</span>
//                 <span className="fya-contact-label-line" />
//                 <span className="fya-contact-label-text">FIND US</span>
//               </div>
//               <h2 className="fya-contact-location-heading">
//                 Visit Our
//                 <br />
//                 <span className="fya-contact-text-gold">Office</span>
//               </h2>
//               <p className="fya-contact-location-address">
//                 FIYA Builders
//                 <br />
//                 Pondicherry, Tamil Nadu
//                 <br />
//                 India
//               </p>
//               <a
//                 href="https://maps.google.com"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="fya-contact-location-link"
//               >
//                 <span>Open in Google Maps</span>
//                 <ArrowUpRight size={18} />
//               </a>
//             </div>

//             <div className="fya-contact-location-map">
//               <img
//                 src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
//                 alt="FIYA Builders Location"
//                 className="fya-contact-map-image"
//               />
//               <div className="fya-contact-map-overlay" />
//               <div className="fya-contact-map-marker">
//                 <Building2 size={28} className="fya-contact-marker-icon" />
//                 <span className="fya-contact-marker-text">FIYA BUILDERS</span>
//                 <small className="fya-contact-marker-sub">PONDICHERRY · INDIA</small>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==================================================
//           FINAL CTA SECTION
//       ================================================== */}
//       <section className="fya-contact-final">
//         <div className="fya-contact-container">
//           <div className="fya-contact-final-wrapper">
//             <div className="fya-contact-final-pattern" />
//             <div className="fya-contact-final-content">
//               <span className="fya-contact-final-logo">FIYA BUILDERS</span>
//               <h2 className="fya-contact-final-heading">
//                 Your Next Space
//                 <br />
//                 Starts <span className="fya-contact-text-gold">With a Conversation</span>
//               </h2>
//               <div className="fya-contact-final-actions">
//                 <a href="tel:+919999999999" className="fya-contact-final-btn fya-contact-final-btn--primary">
//                   CALL FIYA
//                   <ArrowUpRight size={18} />
//                 </a>
//                 <a href="mailto:info@fiyabuilders.com" className="fya-contact-final-btn fya-contact-final-btn--secondary">
//                   EMAIL US
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//     </main>
//   );
// };

// export default ContactPage;


// src/pages/Contact/ContactPage.jsx
import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Mail,
  MapPin,
  Phone,
  Clock,
  Building2,
  User,
  Briefcase,
  DollarSign,
  MessageSquare,
} from "lucide-react";

import api from "../services/api.js";
import "./ContactPage.css";

const ContactPage = () => {
  const [fyaContactForm, setFyaContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [fyaContactLoading, setFyaContactLoading] = useState(false);
  const [fyaContactSuccess, setFyaContactSuccess] = useState("");
  const [fyaContactError, setFyaContactError] = useState("");

  const fyaContactHandleChange = (event) => {
    const { name, value } = event.target;
    setFyaContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const fyaContactHandleSubmit = async (event) => {
    event.preventDefault();
    setFyaContactLoading(true);
    setFyaContactSuccess("");
    setFyaContactError("");

    try {
      await api.post("/enquiries", fyaContactForm);
      setFyaContactSuccess("Thank you. Our team will get back to you shortly.");
      setFyaContactForm({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        message: "",
      });
    } catch (err) {
      console.error("Enquiry Error:", err);
      setFyaContactError(
        err.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setFyaContactLoading(false);
    }
  };

  const fyaContactInfo = [
    {
      icon: Phone,
      label: "CALL US",
      value: "+91 99999 99999",
      href: "tel:+919999999999",
      detail: "Mon-Sat, 9AM-7PM",
    },
    {
      icon: Mail,
      label: "EMAIL US",
      value: "info@fiyabuilders.com",
      href: "mailto:info@fiyabuilders.com",
      detail: "We reply within 24 hours",
    },
    {
      icon: MapPin,
      label: "VISIT US",
      value: "Pondicherry, Tamil Nadu",
      href: "https://maps.google.com",
      detail: "India",
    },
    {
      icon: Clock,
      label: "WORKING HOURS",
      value: "Monday - Saturday",
      href: null,
      detail: "9:00 AM - 7:00 PM",
    },
  ];

  const fyaContactProjectTypes = [
    "Residential",
    "Commercial",
    "Turnkey",
    "Renovation",
    "Interior",
    "Other",
  ];

  const fyaContactBudgetRanges = [
    "Below ₹25 Lakhs",
    "₹25 - ₹50 Lakhs",
    "₹50 Lakhs - ₹1 Crore",
    "₹1 Crore+",
    "Not Decided",
  ];

  return (
    <main className="fya-contact-page">

      {/* ==================================================
          HERO SECTION
      ================================================== */}
      <section className="fya-contact-hero">
        <div className="fya-contact-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="Contact FIYA Builders"
            className="fya-contact-hero-image"
          />
          <div className="fya-contact-hero-overlay" />
          <div className="fya-contact-hero-pattern" />
        </div>

        <div className="fya-contact-hero-container">
          <div className="fya-contact-hero-top">
            <div className="fya-contact-logo">
              <span className="fya-contact-logo-primary">FIYA</span>
              <span className="fya-contact-logo-secondary">BUILDERS</span>
            </div>
            <div className="fya-contact-hero-tagline">
              <span className="fya-contact-tagline-dot" />
              GET IN TOUCH
            </div>
          </div>

          <div className="fya-contact-hero-content">
            <div className="fya-contact-hero-label">
              <span className="fya-contact-hero-number">01</span>
              <span className="fya-contact-hero-label-text">CONTACT</span>
              <span className="fya-contact-hero-line" />
            </div>
            <h1 className="fya-contact-hero-title">
              Let's Build
              <br />
              <span className="fya-contact-hero-highlight">Something</span>
              <br />
              <span className="fya-contact-hero-highlight-gold">Together</span>
            </h1>
            <p className="fya-contact-hero-subtitle">
              Have a project in mind? Tell us what you're planning
              and let's start the conversation.
            </p>
          </div>

          <div className="fya-contact-hero-bottom">
            <div className="fya-contact-hero-scroll">
              <ArrowDown size={16} strokeWidth={1.5} />
              <span>SCROLL TO EXPLORE</span>
            </div>
            <div className="fya-contact-hero-counter">
              <span className="fya-contact-counter-current">01</span>
              <span className="fya-contact-counter-line" />
              <span className="fya-contact-counter-total">04</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          CONTACT INFO CARDS
      ================================================== */}
      <section className="fya-contact-info">
        <div className="fya-contact-container">
          <div className="fya-contact-info-header">
            <div className="fya-contact-label">
              <span className="fya-contact-label-number">01</span>
              <span className="fya-contact-label-line" />
              <span className="fya-contact-label-text">CONTACT INFORMATION</span>
            </div>
          </div>

          <div className="fya-contact-info-grid">
            {fyaContactInfo.map((info, index) => (
              <div className="fya-contact-info-card" key={index}>
                <div className="fya-contact-info-icon">
                  <info.icon size={22} strokeWidth={1.5} />
                </div>
                <span className="fya-contact-info-label">{info.label}</span>
                {info.href ? (
                  <a href={info.href} className="fya-contact-info-value">
                    {info.value}
                  </a>
                ) : (
                  <span className="fya-contact-info-value">{info.value}</span>
                )}
                <span className="fya-contact-info-detail">{info.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          FORM SECTION
      ================================================== */}
      <section className="fya-contact-form-section">
        <div className="fya-contact-container">
          <div className="fya-contact-form-wrapper">
            <div className="fya-contact-form-left">
              <div className="fya-contact-label">
                <span className="fya-contact-label-number">02</span>
                <span className="fya-contact-label-line" />
                <span className="fya-contact-label-text">PROJECT ENQUIRY</span>
              </div>
              <h2 className="fya-contact-form-heading">
                Tell Us About
                <br />
                <span className="fya-contact-text-blue">Your Project</span>
              </h2>
              <p className="fya-contact-form-description">
                Share the details of your project and our team will get back
                to you with the next steps.
              </p>

              <div className="fya-contact-form-benefits">
                <div className="fya-contact-benefit">
                  <Check size={16} className="fya-contact-benefit-icon" />
                  <span>Free consultation</span>
                </div>
                <div className="fya-contact-benefit">
                  <Check size={16} className="fya-contact-benefit-icon" />
                  <span>Detailed project estimate</span>
                </div>
                <div className="fya-contact-benefit">
                  <Check size={16} className="fya-contact-benefit-icon" />
                  <span>Expert guidance</span>
                </div>
              </div>
            </div>

            <form className="fya-contact-form" onSubmit={fyaContactHandleSubmit}>
              <div className="fya-contact-form-row">
                <div className="fya-contact-form-group">
                  <label htmlFor="fya-name" className="fya-contact-form-label">
                    Your Name <span className="fya-contact-required">*</span>
                  </label>
                  <div className="fya-contact-input-wrapper">
                    <User size={18} className="fya-contact-input-icon" />
                    <input
                      id="fya-name"
                      name="name"
                      type="text"
                      className="fya-contact-input"
                      placeholder="Enter your full name"
                      value={fyaContactForm.name}
                      onChange={fyaContactHandleChange}
                      required
                    />
                  </div>
                </div>

                <div className="fya-contact-form-group">
                  <label htmlFor="fya-email" className="fya-contact-form-label">
                    Email Address <span className="fya-contact-required">*</span>
                  </label>
                  <div className="fya-contact-input-wrapper">
                    <Mail size={18} className="fya-contact-input-icon" />
                    <input
                      id="fya-email"
                      name="email"
                      type="email"
                      className="fya-contact-input"
                      placeholder="you@example.com"
                      value={fyaContactForm.email}
                      onChange={fyaContactHandleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="fya-contact-form-row">
                <div className="fya-contact-form-group">
                  <label htmlFor="fya-phone" className="fya-contact-form-label">
                    Phone Number <span className="fya-contact-required">*</span>
                  </label>
                  <div className="fya-contact-input-wrapper">
                    <Phone size={18} className="fya-contact-input-icon" />
                    <input
                      id="fya-phone"
                      name="phone"
                      type="tel"
                      className="fya-contact-input"
                      placeholder="+91"
                      value={fyaContactForm.phone}
                      onChange={fyaContactHandleChange}
                      required
                    />
                  </div>
                </div>

                <div className="fya-contact-form-group">
                  <label htmlFor="fya-project" className="fya-contact-form-label">
                    Project Type <span className="fya-contact-required">*</span>
                  </label>
                  <div className="fya-contact-input-wrapper">
                    <Briefcase size={18} className="fya-contact-input-icon" />
                    <select
                      id="fya-project"
                      name="projectType"
                      className="fya-contact-input fya-contact-select"
                      value={fyaContactForm.projectType}
                      onChange={fyaContactHandleChange}
                      required
                    >
                      <option value="">Select project type</option>
                      {fyaContactProjectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="fya-contact-form-group">
                <label htmlFor="fya-budget" className="fya-contact-form-label">
                  Estimated Budget
                </label>
                <div className="fya-contact-input-wrapper">
                  <DollarSign size={18} className="fya-contact-input-icon" />
                  <select
                    id="fya-budget"
                    name="budget"
                    className="fya-contact-input fya-contact-select"
                    value={fyaContactForm.budget}
                    onChange={fyaContactHandleChange}
                  >
                    <option value="">Select budget range</option>
                    {fyaContactBudgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="fya-contact-form-group">
                <label htmlFor="fya-message" className="fya-contact-form-label">
                  Project Details <span className="fya-contact-required">*</span>
                </label>
                <div className="fya-contact-input-wrapper fya-contact-textarea-wrapper">
                  <MessageSquare size={18} className="fya-contact-input-icon" />
                  <textarea
                    id="fya-message"
                    name="message"
                    className="fya-contact-input fya-contact-textarea"
                    rows="5"
                    placeholder="Tell us about your project, location, requirements..."
                    value={fyaContactForm.message}
                    onChange={fyaContactHandleChange}
                    required
                  />
                </div>
              </div>

              {fyaContactSuccess && (
                <div className="fya-contact-form-success">
                  <Check size={18} />
                  <span>{fyaContactSuccess}</span>
                </div>
              )}

              {fyaContactError && (
                <div className="fya-contact-form-error">
                  {fyaContactError}
                </div>
              )}

              <button
                type="submit"
                disabled={fyaContactLoading}
                className="fya-contact-submit-btn"
              >
                <span>{fyaContactLoading ? "SENDING..." : "SEND ENQUIRY"}</span>
                <ArrowUpRight size={18} className="fya-contact-submit-icon" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ==================================================
          LOCATION SECTION
      ================================================== */}
      <section className="fya-contact-location">
        <div className="fya-contact-container">
          <div className="fya-contact-location-wrapper">
            <div className="fya-contact-location-content">
              <div className="fya-contact-label">
                <span className="fya-contact-label-number">03</span>
                <span className="fya-contact-label-line" />
                <span className="fya-contact-label-text">FIND US</span>
              </div>
              <h2 className="fya-contact-location-heading">
                Visit Our
                <br />
                <span className="fya-contact-text-gold">Office</span>
              </h2>
              <p className="fya-contact-location-address">
                FIYA Builders
                <br />
                Pondicherry, Tamil Nadu
                <br />
                India
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="fya-contact-location-link"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="fya-contact-location-map">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                alt="FIYA Builders Location"
                className="fya-contact-map-image"
              />
              <div className="fya-contact-map-overlay" />
              <div className="fya-contact-map-marker">
                <Building2 size={28} className="fya-contact-marker-icon" />
                <span className="fya-contact-marker-text">FIYA BUILDERS</span>
                <small className="fya-contact-marker-sub">PONDICHERRY · INDIA</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          FINAL CTA SECTION
      ================================================== */}
      <section className="fya-contact-final">
        <div className="fya-contact-container">
          <div className="fya-contact-final-wrapper">
            <div className="fya-contact-final-pattern" />
            <div className="fya-contact-final-content">
              <span className="fya-contact-final-logo">FIYA BUILDERS</span>
              <h2 className="fya-contact-final-heading">
                Your Next Space
                <br />
                Starts <span className="fya-contact-text-gold">With a Conversation</span>
              </h2>
              <div className="fya-contact-final-actions">
                <a href="tel:+919999999999" className="fya-contact-final-btn fya-contact-final-btn--primary">
                  CALL FIYA
                  <ArrowUpRight size={18} />
                </a>
                <a href="mailto:info@fiyabuilders.com" className="fya-contact-final-btn fya-contact-final-btn--secondary">
                  EMAIL US
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default ContactPage;