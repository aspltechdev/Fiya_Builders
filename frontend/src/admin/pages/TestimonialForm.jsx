//  // src/components/TestimonialForm/TestimonialForm.jsx
// import React, { useState } from 'react';
// import { Star, Upload, X } from 'lucide-react';
// import './TestimonialForm.css';

// const TestimonialForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     designation: '',
//     company: '',
//     message: '',
//     rating: 5,
//   });
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleRating = (value) => {
//     setFormData(prev => ({ ...prev, rating: value }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   const removeImage = () => {
//     setImage(null);
//     setPreview(null);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     try {
//       const formDataToSend = new FormData();
//       formDataToSend.append('name', formData.name);
//       formDataToSend.append('designation', formData.designation || '');
//       formDataToSend.append('company', formData.company || '');
//       formDataToSend.append('message', formData.message);
//       formDataToSend.append('rating', formData.rating);
      
//       if (image) {
//         formDataToSend.append('image', image);
//       }

//       const response = await fetch('http://localhost:5041/api/testimonials/submit', {
//         method: 'POST',
//         body: formDataToSend,
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setSubmitted(true);
//         setFormData({
//           name: '',
//           designation: '',
//           company: '',
//           message: '',
//           rating: 5,
//         });
//         setImage(null);
//         setPreview(null);
//       } else {
//         setError(data.message || 'Failed to submit testimonial');
//       }
//     } catch (err) {
//       setError('Network error. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (submitted) {
//     return (
//       <div className="testimonial-success">
//         <div className="success-icon">✓</div>
//         <h3>Thank You!</h3>
//         <p>Your testimonial has been submitted for review.</p>
//         <button onClick={() => setSubmitted(false)} className="btn-submit-another">
//           Submit Another
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="testimonial-form-wrapper">
//       <h2 className="form-title">Share Your Experience</h2>
//       <p className="form-subtitle">Tell us about your experience with FIYA BUILDERS</p>

//       <form onSubmit={handleSubmit} className="testimonial-form">
//         {/* Name */}
//         <div className="form-group">
//           <label htmlFor="name">Full Name *</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             placeholder="Your full name"
//           />
//         </div>

//         {/* Designation & Company */}
//         <div className="form-row">
//           <div className="form-group">
//             <label htmlFor="designation">Designation</label>
//             <input
//               type="text"
//               id="designation"
//               name="designation"
//               value={formData.designation}
//               onChange={handleChange}
//               placeholder="e.g., CEO, Manager"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="company">Company</label>
//             <input
//               type="text"
//               id="company"
//               name="company"
//               value={formData.company}
//               onChange={handleChange}
//               placeholder="Your company name"
//             />
//           </div>
//         </div>

//         {/* Message */}
//         <div className="form-group">
//           <label htmlFor="message">Your Message *</label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             rows="4"
//             placeholder="Share your experience with FIYA BUILDERS..."
//           />
//         </div>

//         {/* Rating */}
//         <div className="form-group">
//           <label>Rating</label>
//           <div className="rating-stars">
//             {[1, 2, 3, 4, 5].map((value) => (
//               <button
//                 key={value}
//                 type="button"
//                 className={`star-btn ${value <= formData.rating ? 'active' : ''}`}
//                 onClick={() => handleRating(value)}
//               >
//                 <Star size={24} fill={value <= formData.rating ? '#D71920' : 'none'} />
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Image Upload */}
//         <div className="form-group">
//           <label>Profile Photo (Optional)</label>
//           <div className="image-upload-area">
//             {preview ? (
//               <div className="image-preview">
//                 <img src={preview} alt="Profile preview" />
//                 <button type="button" className="remove-image" onClick={removeImage}>
//                   <X size={18} />
//                 </button>
//               </div>
//             ) : (
//               <label className="upload-label">
//                 <Upload size={24} />
//                 <span>Upload your photo</span>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                   hidden
//                 />
//               </label>
//             )}
//           </div>
//         </div>

//         {/* Error */}
//         {error && <div className="form-error">{error}</div>}

//         {/* Submit */}
//         <button type="submit" className="btn-submit" disabled={loading}>
//           {loading ? 'Submitting...' : 'Submit Testimonial'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default TestimonialForm;

// src/components/TestimonialForm/TestimonialForm.jsx
import React, { useState } from 'react';
import { Star, Upload, X, CheckCircle, AlertCircle, User, Briefcase, Building2, MessageSquare } from 'lucide-react';
import './TestimonialForm.css';

const TestimonialForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    company: '',
    message: '',
    rating: 5,
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRating = (value) => {
    setFormData(prev => ({ ...prev, rating: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setImage(null);
    setPreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('designation', formData.designation || '');
      formDataToSend.append('company', formData.company || '');
      formDataToSend.append('message', formData.message);
      formDataToSend.append('rating', formData.rating);
      
      if (image) {
        formDataToSend.append('image', image);
      }

      const response = await fetch('http://localhost:5041/api/testimonials/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          designation: '',
          company: '',
          message: '',
          rating: 5,
        });
        setImage(null);
        setPreview(null);
      } else {
        setError(data.message || 'Failed to submit testimonial');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="fya-testimonial-success">
        <div className="fya-testimonial-success__icon">
          <CheckCircle size={40} />
        </div>
        <h3 className="fya-testimonial-success__title">Thank You!</h3>
        <p className="fya-testimonial-success__text">
          Your testimonial has been submitted for review.
        </p>
        <button 
          onClick={() => setSubmitted(false)} 
          className="fya-testimonial-success__btn"
        >
          Submit Another
        </button>
      </div>
    );
  }

  return (
    <div className="fya-testimonial-form">
      <div className="fya-testimonial-form__header">
        <h2 className="fya-testimonial-form__title">Share Your Experience</h2>
        <p className="fya-testimonial-form__subtitle">
          Tell us about your experience with FIYA BUILDERS
        </p>
      </div>

      <form onSubmit={handleSubmit} className="fya-testimonial-form__form">
        {/* Name */}
        <div className="fya-testimonial-form__group">
          <label htmlFor="fya-name" className="fya-testimonial-form__label">
            Full Name <span className="fya-testimonial-form__required">*</span>
          </label>
          <div className="fya-testimonial-form__input-wrapper">
            <User className="fya-testimonial-form__input-icon" size={18} />
            <input
              type="text"
              id="fya-name"
              name="name"
              className="fya-testimonial-form__input"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
            />
          </div>
        </div>

        {/* Designation & Company */}
        <div className="fya-testimonial-form__row">
          <div className="fya-testimonial-form__group">
            <label htmlFor="fya-designation" className="fya-testimonial-form__label">
              Designation
            </label>
            <div className="fya-testimonial-form__input-wrapper">
              <Briefcase className="fya-testimonial-form__input-icon" size={18} />
              <input
                type="text"
                id="fya-designation"
                name="designation"
                className="fya-testimonial-form__input"
                value={formData.designation}
                onChange={handleChange}
                placeholder="e.g., CEO, Manager"
              />
            </div>
          </div>
          <div className="fya-testimonial-form__group">
            <label htmlFor="fya-company" className="fya-testimonial-form__label">
              Company
            </label>
            <div className="fya-testimonial-form__input-wrapper">
              <Building2 className="fya-testimonial-form__input-icon" size={18} />
              <input
                type="text"
                id="fya-company"
                name="company"
                className="fya-testimonial-form__input"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name"
              />
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="fya-testimonial-form__group">
          <label htmlFor="fya-message" className="fya-testimonial-form__label">
            Your Message <span className="fya-testimonial-form__required">*</span>
          </label>
          <div className="fya-testimonial-form__input-wrapper fya-testimonial-form__input-wrapper--textarea">
            <MessageSquare className="fya-testimonial-form__input-icon" size={18} />
            <textarea
              id="fya-message"
              name="message"
              className="fya-testimonial-form__input fya-testimonial-form__input--textarea"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Share your experience with FIYA BUILDERS..."
            />
          </div>
        </div>

        {/* Rating */}
        <div className="fya-testimonial-form__group">
          <label className="fya-testimonial-form__label">Rating</label>
          <div className="fya-testimonial-form__rating">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                className={`fya-testimonial-form__star-btn ${
                  value <= formData.rating ? 'fya-testimonial-form__star-btn--active' : ''
                }`}
                onClick={() => handleRating(value)}
                aria-label={`Rate ${value} stars`}
              >
                <Star 
                  size={28} 
                  fill={value <= formData.rating ? '#D71920' : 'none'}
                  stroke={value <= formData.rating ? '#D71920' : '#DEDEDC'}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Image Upload */}
        <div className="fya-testimonial-form__group">
          <label className="fya-testimonial-form__label">Profile Photo (Optional)</label>
          <div className="fya-testimonial-form__upload">
            {preview ? (
              <div className="fya-testimonial-form__preview">
                <img 
                  src={preview} 
                  alt="Profile preview" 
                  className="fya-testimonial-form__preview-image" 
                />
                <button 
                  type="button" 
                  className="fya-testimonial-form__preview-remove" 
                  onClick={removeImage}
                  aria-label="Remove image"
                >
                  <X size={18} />
                </button>
              </div>
            ) : (
              <label className="fya-testimonial-form__upload-label">
                <Upload className="fya-testimonial-form__upload-icon" size={24} />
                <span className="fya-testimonial-form__upload-text">Upload your photo</span>
                <span className="fya-testimonial-form__upload-hint">PNG, JPEG, WebP (max 5MB)</span>
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/webp,image/gif"
                  onChange={handleImageChange}
                  className="fya-testimonial-form__upload-input"
                />
              </label>
            )}
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="fya-testimonial-form__error">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        {/* Submit */}
        <button 
          type="submit" 
          className="fya-testimonial-form__submit"
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="fya-testimonial-form__spinner" />
              Submitting...
            </>
          ) : (
            'Submit Testimonial'
          )}
        </button>
      </form>
    </div>
  );
};

export default TestimonialForm;