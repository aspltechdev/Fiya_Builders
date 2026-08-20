// import { useState } from "react";
// import {
//   ArrowDown,
//   ArrowUpRight,
//   Check,
//   Mail,
//   MapPin,
//   Phone,
// } from "lucide-react";

// import api from "../services/api.js";

// import "./ContactPage.css";

// const ContactPage = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     projectType: "",
//     budget: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState("");
//   const [error, setError] = useState("");

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setForm((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     setLoading(true);
//     setSuccess("");
//     setError("");

//     try {
//       await api.post(
//         "/enquiries",
//         form
//       );

//       setSuccess(
//         "Thank you. Our team will get back to you shortly."
//       );

//       setForm({
//         name: "",
//         email: "",
//         phone: "",
//         projectType: "",
//         budget: "",
//         message: "",
//       });
//     } catch (err) {
//       console.error(
//         "Enquiry Error:",
//         err
//       );

//       setError(
//         err.response?.data?.message ||
//           "Something went wrong. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="fiya-contact-page">

//       {/* ==================================================
//           HERO
//       ================================================== */}

//       <section className="fiya-contact-hero">

//         <div className="public-container">

//           <div className="fiya-contact-label">

//             <span>
//               01
//             </span>

//             <span>
//               GET IN TOUCH
//             </span>

//             <span className="fiya-contact-line" />

//           </div>


//           <div className="fiya-contact-hero-content">

//             <h1>
//               Let's
//               <br />
//               build
//               <br />
//               <span>together.</span>
//             </h1>

//             <div className="fiya-contact-hero-copy">

//               <p>
//                 Have a project in mind?
//                 Tell us what you're planning
//                 and let's start the conversation.
//               </p>

//               <div className="fiya-contact-scroll">

//                 <ArrowDown
//                   size={16}
//                   strokeWidth={1.4}
//                 />

//                 <span>
//                   START YOUR ENQUIRY
//                 </span>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* ==================================================
//           CONTACT INFORMATION
//       ================================================== */}

//       <section className="fiya-contact-info">

//         <div className="public-container">

//           <div className="fiya-contact-info-grid">

//             <div className="fiya-contact-info-intro">

//               <span>
//                 02
//               </span>

//               <div>

//                 <span className="fiya-contact-overline">
//                   CONTACT FIYA
//                 </span>

//                 <h2>
//                   Start with
//                   <br />
//                   a simple
//                   <br />
//                   <em>conversation.</em>
//                 </h2>

//               </div>

//             </div>


//             <div className="fiya-contact-details">

//               <div className="fiya-contact-detail">

//                 <div className="fiya-contact-detail-icon">
//                   <Phone
//                     size={18}
//                     strokeWidth={1.4}
//                   />
//                 </div>

//                 <div>

//                   <span>
//                     CALL US
//                   </span>

//                   <a href="tel:+919999999999">
//                     +91 99999 99999
//                   </a>

//                 </div>

//               </div>


//               <div className="fiya-contact-detail">

//                 <div className="fiya-contact-detail-icon">
//                   <Mail
//                     size={18}
//                     strokeWidth={1.4}
//                   />
//                 </div>

//                 <div>

//                   <span>
//                     EMAIL US
//                   </span>

//                   <a href="mailto:info@fiyabuilders.com">
//                     info@fiyabuilders.com
//                   </a>

//                 </div>

//               </div>


//               <div className="fiya-contact-detail">

//                 <div className="fiya-contact-detail-icon">
//                   <MapPin
//                     size={18}
//                     strokeWidth={1.4}
//                   />
//                 </div>

//                 <div>

//                   <span>
//                     VISIT US
//                   </span>

//                   <p>
//                     Pondicherry,
//                     <br />
//                     Tamil Nadu, India
//                   </p>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* ==================================================
//           ENQUIRY FORM
//       ================================================== */}

//       <section className="fiya-contact-form-section">

//         <div className="public-container">

//           <div className="fiya-contact-form-header">

//             <div className="fiya-contact-label">

//               <span>
//                 03
//               </span>

//               <span>
//                 PROJECT ENQUIRY
//               </span>

//               <span className="fiya-contact-line" />

//             </div>

//             <p>
//               Tell us a little about your
//               project. We'll take it from there.
//             </p>

//           </div>


//           <form
//             className="fiya-contact-form"
//             onSubmit={handleSubmit}
//           >

//             {/* NAME */}

//             <div className="fiya-form-field">

//               <label htmlFor="name">
//                 01 / YOUR NAME
//               </label>

//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 placeholder="Enter your name"
//                 value={form.name}
//                 onChange={handleChange}
//                 required
//               />

//             </div>


//             {/* EMAIL */}

//             <div className="fiya-form-field">

//               <label htmlFor="email">
//                 02 / EMAIL ADDRESS
//               </label>

//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 placeholder="you@example.com"
//                 value={form.email}
//                 onChange={handleChange}
//                 required
//               />

//             </div>


//             {/* PHONE */}

//             <div className="fiya-form-field">

//               <label htmlFor="phone">
//                 03 / PHONE NUMBER
//               </label>

//               <input
//                 id="phone"
//                 name="phone"
//                 type="tel"
//                 placeholder="+91"
//                 value={form.phone}
//                 onChange={handleChange}
//                 required
//               />

//             </div>


//             {/* PROJECT TYPE */}

//             <div className="fiya-form-field">

//               <label htmlFor="projectType">
//                 04 / PROJECT TYPE
//               </label>

//               <select
//                 id="projectType"
//                 name="projectType"
//                 value={form.projectType}
//                 onChange={handleChange}
//                 required
//               >

//                 <option value="">
//                   Select project type
//                 </option>

//                 <option value="Residential">
//                   Residential
//                 </option>

//                 <option value="Commercial">
//                   Commercial
//                 </option>

//                 <option value="Turnkey">
//                   Turnkey
//                 </option>

//                 <option value="Renovation">
//                   Renovation
//                 </option>

//                 <option value="Interior">
//                   Interior
//                 </option>

//                 <option value="Other">
//                   Other
//                 </option>

//               </select>

//             </div>


//             {/* BUDGET */}

//             <div className="fiya-form-field">

//               <label htmlFor="budget">
//                 05 / ESTIMATED BUDGET
//               </label>

//               <select
//                 id="budget"
//                 name="budget"
//                 value={form.budget}
//                 onChange={handleChange}
//               >

//                 <option value="">
//                   Select budget
//                 </option>

//                 <option value="Below ₹25 Lakhs">
//                   Below ₹25 Lakhs
//                 </option>

//                 <option value="₹25 - ₹50 Lakhs">
//                   ₹25 - ₹50 Lakhs
//                 </option>

//                 <option value="₹50 Lakhs - ₹1 Crore">
//                   ₹50 Lakhs - ₹1 Crore
//                 </option>

//                 <option value="₹1 Crore+">
//                   ₹1 Crore+
//                 </option>

//                 <option value="Not Decided">
//                   Not decided
//                 </option>

//               </select>

//             </div>


//             {/* MESSAGE */}

//             <div className="fiya-form-field fiya-form-field-full">

//               <label htmlFor="message">
//                 06 / TELL US ABOUT YOUR PROJECT
//               </label>

//               <textarea
//                 id="message"
//                 name="message"
//                 rows="6"
//                 placeholder="Tell us about your project, location, requirements..."
//                 value={form.message}
//                 onChange={handleChange}
//                 required
//               />

//             </div>


//             {/* RESPONSE */}

//             {success && (
//               <div className="fiya-form-success">

//                 <Check
//                   size={17}
//                   strokeWidth={1.8}
//                 />

//                 <span>
//                   {success}
//                 </span>

//               </div>
//             )}


//             {error && (
//               <div className="fiya-form-error">
//                 {error}
//               </div>
//             )}


//             {/* SUBMIT */}

//             <div className="fiya-form-submit">

//               <p>
//                 By submitting this form,
//                 you agree to be contacted
//                 by the FIYA Builders team.
//               </p>

//               <button
//                 type="submit"
//                 disabled={loading}
//               >

//                 <span>
//                   {loading
//                     ? "SENDING..."
//                     : "SEND ENQUIRY"}
//                 </span>

//                 <span>
//                   <ArrowUpRight
//                     size={20}
//                     strokeWidth={1.5}
//                   />
//                 </span>

//               </button>

//             </div>

//           </form>

//         </div>

//       </section>


//       {/* ==================================================
//           MAP / LOCATION
//       ================================================== */}

//       <section className="fiya-contact-location">

//         <div className="public-container">

//           <div className="fiya-contact-location-grid">

//             <div>

//               <div className="fiya-contact-label">

//                 <span>
//                   04
//                 </span>

//                 <span>
//                   FIND US
//                 </span>

//                 <span className="fiya-contact-line" />

//               </div>


//               <h2>
//                 Come
//                 <br />
//                 <em>say hello.</em>
//               </h2>

//               <p>
//                 Pondicherry,
//                 <br />
//                 Tamil Nadu, India
//               </p>

//               <a
//                 href="https://maps.google.com"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="fiya-contact-map-link"
//               >
//                 <span>
//                   Open in Google Maps
//                 </span>

//                 <span>
//                   <ArrowUpRight
//                     size={18}
//                     strokeWidth={1.5}
//                   />
//                 </span>
//               </a>

//             </div>


//             <div className="fiya-contact-map">

//               <div className="fiya-contact-map-placeholder">

//                 <MapPin
//                   size={30}
//                   strokeWidth={1.2}
//                 />

//                 <span>
//                   FIYA BUILDERS
//                 </span>

//                 <small>
//                   PONDICHERRY · INDIA
//                 </small>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* ==================================================
//           FINAL
//       ================================================== */}

//       <section className="fiya-contact-final">

//         <div className="public-container">

//           <span>
//             FIYA BUILDERS
//           </span>

//           <h2>
//             Your next
//             <br />
//             space starts
//             <br />
//             <em>with a conversation.</em>
//           </h2>

//           <a href="tel:+919999999999">
//             <span>
//               Call FIYA
//             </span>

//             <span>
//               <ArrowUpRight
//                 size={19}
//                 strokeWidth={1.5}
//               />
//             </span>
//           </a>

//         </div>

//       </section>

//     </main>
//   );
// };

// export default ContactPage;


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
} from "lucide-react";

import api from "../services/api.js";

import "./ContactPage.css";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      await api.post("/enquiries", form);
      setSuccess("Thank you. Our team will get back to you shortly.");
      setForm({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        message: "",
      });
    } catch (err) {
      console.error("Enquiry Error:", err);
      setError(
        err.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
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

  return (
    <main className="fya-contact-page">
      
      {/* ==================================================
          HERO — Premium Visual
      ================================================== */}
      <section className="fya-contact-hero">
        <div className="fya-hero-background">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80" 
            alt="Contact FIYA Builders" 
          />
          <div className="fya-hero-overlay" />
        </div>
        
        <div className="fya-container fya-contact-hero-container">
          <div className="fya-hero-top-bar">
            <div className="fya-logo">
              <span className="fya-logo-white">FIYA</span>
              <span className="fya-logo-gold">BUILDERS</span>
            </div>
            <div className="fya-hero-tagline">
              <span className="fya-gold-line" />
              GET IN TOUCH
            </div>
          </div>
          
          <div className="fya-contact-hero-content">
            <h1 className="fya-contact-hero-title">
              Let's Build
              <br />
              <span className="fya-text-blue">Something</span>
              <br />
              <span className="fya-text-gold">Together</span>
            </h1>
            <p className="fya-contact-hero-subtitle">
              Have a project in mind? Tell us what you're planning
              and let's start the conversation.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================
          CONTACT INFORMATION CARDS
      ================================================== */}
      <section className="fya-contact-info">
        <div className="fya-container">
          <div className="fya-section-label">
            <span className="fya-label-number">01</span>
            <span className="fya-label-line" />
            <span className="fya-label-text">CONTACT INFORMATION</span>
          </div>
          
          <div className="fya-contact-info-grid">
            {contactInfo.map((info, index) => (
              <div className="fya-contact-card" key={index}>
                <div className="fya-contact-card-icon">
                  <info.icon size={24} strokeWidth={1.5} />
                </div>
                <span className="fya-contact-card-label">{info.label}</span>
                {info.href ? (
                  <a href={info.href} className="fya-contact-card-value">
                    {info.value}
                  </a>
                ) : (
                  <span className="fya-contact-card-value">{info.value}</span>
                )}
                <span className="fya-contact-card-detail">{info.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          ENQUIRY FORM — Premium Design
      ================================================== */}
      <section className="fya-contact-form-section">
        <div className="fya-container">
          <div className="fya-form-wrapper">
            <div className="fya-form-left">
              <div className="fya-section-label">
                <span className="fya-label-number">02</span>
                <span className="fya-label-line" />
                <span className="fya-label-text">PROJECT ENQUIRY</span>
              </div>
              <h2 className="fya-form-heading">
                Tell Us About
                <br />
                <span className="fya-text-blue">Your Project</span>
              </h2>
              <p className="fya-form-description">
                Share the details of your project and our team will get back
                to you with the next steps.
              </p>
              
              <div className="fya-form-benefits">
                <div className="fya-benefit">
                  <Check size={16} />
                  <span>Free consultation</span>
                </div>
                <div className="fya-benefit">
                  <Check size={16} />
                  <span>Detailed project estimate</span>
                </div>
                <div className="fya-benefit">
                  <Check size={16} />
                  <span>Expert guidance</span>
                </div>
              </div>
            </div>
            
            <form className="fya-contact-form" onSubmit={handleSubmit}>
              <div className="fya-form-row">
                <div className="fya-form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="fya-form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="fya-form-row">
                <div className="fya-form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="fya-form-group">
                  <label htmlFor="projectType">Project Type *</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select project type</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Turnkey">Turnkey</option>
                    <option value="Renovation">Renovation</option>
                    <option value="Interior">Interior</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="fya-form-group">
                <label htmlFor="budget">Estimated Budget</label>
                <select
                  id="budget"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                >
                  <option value="">Select budget range</option>
                  <option value="Below ₹25 Lakhs">Below ₹25 Lakhs</option>
                  <option value="₹25 - ₹50 Lakhs">₹25 - ₹50 Lakhs</option>
                  <option value="₹50 Lakhs - ₹1 Crore">₹50 Lakhs - ₹1 Crore</option>
                  <option value="₹1 Crore+">₹1 Crore+</option>
                  <option value="Not Decided">Not decided</option>
                </select>
              </div>
              
              <div className="fya-form-group">
                <label htmlFor="message">Project Details *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us about your project, location, requirements..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              {success && (
                <div className="fya-form-success">
                  <Check size={18} />
                  <span>{success}</span>
                </div>
              )}
              
              {error && (
                <div className="fya-form-error">
                  {error}
                </div>
              )}
              
              <button
                type="submit"
                disabled={loading}
                className="fya-form-submit-btn"
              >
                <span>{loading ? "SENDING..." : "SEND ENQUIRY"}</span>
                <ArrowUpRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ==================================================
          LOCATION — Map Section
      ================================================== */}
      <section className="fya-contact-location">
        <div className="fya-container">
          <div className="fya-location-wrapper">
            <div className="fya-location-content">
              <div className="fya-section-label">
                <span className="fya-label-number">03</span>
                <span className="fya-label-line" />
                <span className="fya-label-text">FIND US</span>
              </div>
              <h2 className="fya-location-heading">
                Visit Our
                <br />
                <span className="fya-text-gold">Office</span>
              </h2>
              <p className="fya-location-address">
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
                className="fya-location-link"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight size={18} />
              </a>
            </div>
            
            <div className="fya-location-map">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80" 
                alt="FIYA Builders Location"
              />
              <div className="fya-map-overlay" />
              <div className="fya-map-marker">
                <Building2 size={32} />
                <span>FIYA BUILDERS</span>
                <small>PONDICHERRY · INDIA</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          CTA — Final Section
      ================================================== */}
      <section className="fya-contact-final">
        <div className="fya-container">
          <div className="fya-final-wrapper">
            <div className="fya-final-pattern" />
            <div className="fya-final-content">
              <span className="fya-final-logo">FIYA BUILDERS</span>
              <h2 className="fya-final-heading">
                Your Next Space
                <br />
                Starts <span className="fya-text-gold">With a Conversation</span>
              </h2>
              <div className="fya-final-actions">
                <a href="tel:+919999999999" className="fya-btn-gold">
                  CALL FIYA
                  <ArrowUpRight size={18} />
                </a>
                <a href="mailto:info@fiyabuilders.com" className="fya-btn-outline">
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