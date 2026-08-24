// import {
//   useEffect,
//   useState,
// } from "react";

// import {
//   Plus,
//   Pencil,
//   Trash2,
//   Power,
//   X,
//   ImagePlus,
//   Star,
// } from "lucide-react";

// import {
//   getAllTestimonials,
//   createTestimonial,
//   updateTestimonial,
//   toggleTestimonial,
//   deleteTestimonial,
// } from "../../services/testimonial.api.js";

// const API_URL =
//   import.meta.env.VITE_API_URL?.replace(
//     "/api",
//     ""
//   ) || "http://localhost:5000";

// const initialForm = {
//   name: "",
//   designation: "",
//   company: "",
//   message: "",
//   image: null,
//   rating: 5,
//   isActive: true,
// };

// const Testimonials = () => {
//   const [
//     testimonials,
//     setTestimonials,
//   ] = useState([]);

//   const [loading, setLoading] =
//     useState(true);

//   const [saving, setSaving] =
//     useState(false);

//   const [showModal, setShowModal] =
//     useState(false);

//   const [
//     editingTestimonial,
//     setEditingTestimonial,
//   ] = useState(null);

//   const [form, setForm] =
//     useState(initialForm);

//   const [preview, setPreview] =
//     useState(null);

//   useEffect(() => {
//     loadTestimonials();
//   }, []);

//   const loadTestimonials =
//     async () => {
//       try {
//         setLoading(true);

//         const response =
//           await getAllTestimonials();

//         setTestimonials(
//           response.data || []
//         );
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//   const openCreate = () => {
//     setEditingTestimonial(null);
//     setForm(initialForm);
//     setPreview(null);
//     setShowModal(true);
//   };

//   const openEdit = (
//     testimonial
//   ) => {
//     setEditingTestimonial(
//       testimonial
//     );

//     setForm({
//       name:
//         testimonial.name || "",
//       designation:
//         testimonial.designation ||
//         "",
//       company:
//         testimonial.company ||
//         "",
//       message:
//         testimonial.message || "",
//       image: null,
//       rating:
//         testimonial.rating || 5,
//       isActive:
//         testimonial.isActive ??
//         true,
//     });

//     setPreview(
//       testimonial.image
//         ? `${API_URL}${testimonial.image}`
//         : null
//     );

//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setEditingTestimonial(null);
//     setForm(initialForm);
//     setPreview(null);
//   };

//   const handleChange = (e) => {
//     const {
//       name,
//       value,
//       type,
//       checked,
//       files,
//     } = e.target;

//     if (type === "file") {
//       const file =
//         files?.[0] || null;

//       setForm((prev) => ({
//         ...prev,
//         image: file,
//       }));

//       if (file) {
//         setPreview(
//           URL.createObjectURL(file)
//         );
//       }

//       return;
//     }

//     setForm((prev) => ({
//       ...prev,
//       [name]:
//         type === "checkbox"
//           ? checked
//           : value,
//     }));
//   };

//   const handleSubmit = async (
//     e
//   ) => {
//     e.preventDefault();

//     try {
//       setSaving(true);

//       const formData =
//         new FormData();

//       formData.append(
//         "name",
//         form.name
//       );

//       formData.append(
//         "designation",
//         form.designation
//       );

//       formData.append(
//         "company",
//         form.company
//       );

//       formData.append(
//         "message",
//         form.message
//       );

//       formData.append(
//         "rating",
//         form.rating
//       );

//       formData.append(
//         "isActive",
//         form.isActive
//       );

//       if (form.image) {
//         formData.append(
//           "image",
//           form.image
//         );
//       }

//       if (
//         editingTestimonial
//       ) {
//         await updateTestimonial(
//           editingTestimonial.id,
//           formData
//         );
//       } else {
//         await createTestimonial(
//           formData
//         );
//       }

//       await loadTestimonials();
//       closeModal();
//     } catch (error) {
//       console.error(error);

//       alert(
//         error.response?.data
//           ?.message ||
//           "Failed to save testimonial"
//       );
//     } finally {
//       setSaving(false);
//     }
//   };

//   const handleToggle = async (
//     id
//   ) => {
//     try {
//       await toggleTestimonial(id);
//       await loadTestimonials();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleDelete = async (
//     id
//   ) => {
//     if (
//       !window.confirm(
//         "Are you sure you want to delete this testimonial?"
//       )
//     ) {
//       return;
//     }

//     try {
//       await deleteTestimonial(id);
//       await loadTestimonials();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="cms-page">

//       <div className="cms-page-header">

//         <div>
//           <h2>
//             Testimonials
//           </h2>

//           <p>
//             Manage client testimonials.
//           </p>
//         </div>

//         <button
//           className="primary-btn"
//           onClick={openCreate}
//         >
//           <Plus size={17} />
//           Add Testimonial
//         </button>

//       </div>

//       <div className="cms-card">

//         {loading ? (
//           <div className="cms-loading">
//             Loading testimonials...
//           </div>
//         ) : testimonials.length ===
//           0 ? (
//           <div className="cms-empty">

//             <Star
//               size={35}
//             />

//             <h3>
//               No testimonials
//             </h3>

//             <p>
//               Add your first client testimonial.
//             </p>

//             <button
//               className="primary-btn"
//               onClick={openCreate}
//             >
//               <Plus size={17} />
//               Add Testimonial
//             </button>

//           </div>
//         ) : (
//           <div className="testimonial-admin-list">

//             {testimonials.map(
//               (testimonial) => (
//                 <div
//                   className="testimonial-admin-card"
//                   key={
//                     testimonial.id
//                   }
//                 >

//                   <div className="testimonial-avatar">

//                     {testimonial.image ? (
//                       <img
//                         src={`${API_URL}${testimonial.image}`}
//                         alt={
//                           testimonial.name
//                         }
//                       />
//                     ) : (
//                       testimonial.name
//                         ?.charAt(
//                           0
//                         )
//                         ?.toUpperCase()
//                     )}

//                   </div>

//                   <div className="testimonial-admin-info">

//                     <strong>
//                       {
//                         testimonial.name
//                       }
//                     </strong>

//                     <span>
//                       {
//                         testimonial.designation ||
//                         "Client"
//                       }

//                       {testimonial.company &&
//                         ` • ${testimonial.company}`}
//                     </span>

//                     <div className="rating-row">

//                       {[
//                         1,
//                         2,
//                         3,
//                         4,
//                         5,
//                       ].map(
//                         (star) => (
//                           <Star
//                             key={
//                               star
//                             }
//                             size={13}
//                             fill={
//                               star <=
//                               testimonial.rating
//                                 ? "currentColor"
//                                 : "none"
//                             }
//                           />
//                         )
//                       )}

//                     </div>

//                     <p>
//                       {
//                         testimonial.message
//                       }
//                     </p>

//                   </div>

//                   <div className="testimonial-actions">

//                     <button
//                       className={`status-toggle ${
//                         testimonial.isActive
//                           ? "active"
//                           : "inactive"
//                       }`}
//                       onClick={() =>
//                         handleToggle(
//                           testimonial.id
//                         )
//                       }
//                     >
//                       <Power
//                         size={13}
//                       />

//                       {testimonial.isActive
//                         ? "Active"
//                         : "Inactive"}
//                     </button>

//                     <button
//                       className="icon-btn"
//                       onClick={() =>
//                         openEdit(
//                           testimonial
//                         )
//                       }
//                     >
//                       <Pencil
//                         size={15}
//                       />
//                     </button>

//                     <button
//                       className="icon-btn danger"
//                       onClick={() =>
//                         handleDelete(
//                           testimonial.id
//                         )
//                       }
//                     >
//                       <Trash2
//                         size={15}
//                       />
//                     </button>

//                   </div>

//                 </div>
//               )
//             )}

//           </div>
//         )}

//       </div>

//       {showModal && (
//         <div className="modal-overlay">

//           <div className="cms-modal">

//             <div className="modal-header">

//               <div>
//                 <h3>
//                   {editingTestimonial
//                     ? "Edit Testimonial"
//                     : "Add Testimonial"}
//                 </h3>

//                 <p>
//                   Add customer feedback.
//                 </p>
//               </div>

//               <button
//                 className="modal-close"
//                 onClick={
//                   closeModal
//                 }
//               >
//                 <X size={20} />
//               </button>

//             </div>

//             <form
//               onSubmit={
//                 handleSubmit
//               }
//             >

//               <div className="modal-body">

//                 <div className="form-group">

//                   <label>
//                     Client Image
//                   </label>

//                   <div className="image-upload">

//                     {preview ? (
//                       <div className="image-preview">

//                         <img
//                           src={preview}
//                           alt="Preview"
//                         />

//                       </div>
//                     ) : (
//                       <div className="image-placeholder">

//                         <ImagePlus
//                           size={30}
//                         />

//                         <span>
//                           Upload client image
//                         </span>

//                       </div>
//                     )}

//                     <input
//                       type="file"
//                       accept="image/*"
//                       onChange={
//                         handleChange
//                       }
//                     />

//                   </div>

//                 </div>

//                 <div className="form-grid">

//                   <div className="form-group">

//                     <label>
//                       Client Name
//                     </label>

//                     <input
//                       type="text"
//                       name="name"
//                       value={
//                         form.name
//                       }
//                       onChange={
//                         handleChange
//                       }
//                       required
//                     />

//                   </div>

//                   <div className="form-group">

//                     <label>
//                       Designation
//                     </label>

//                     <input
//                       type="text"
//                       name="designation"
//                       placeholder="Managing Director"
//                       value={
//                         form.designation
//                       }
//                       onChange={
//                         handleChange
//                       }
//                     />

//                   </div>

//                 </div>

//                 <div className="form-group">

//                   <label>
//                     Company
//                   </label>

//                   <input
//                     type="text"
//                     name="company"
//                     value={
//                       form.company
//                     }
//                     onChange={
//                       handleChange
//                     }
//                   />

//                 </div>

//                 <div className="form-group">

//                   <label>
//                     Testimonial
//                   </label>

//                   <textarea
//                     name="message"
//                     rows="5"
//                     value={
//                       form.message
//                     }
//                     onChange={
//                       handleChange
//                     }
//                     required
//                   />

//                 </div>

//                 <div className="form-group">

//                   <label>
//                     Rating
//                   </label>

//                   <select
//                     name="rating"
//                     value={
//                       form.rating
//                     }
//                     onChange={
//                       handleChange
//                     }
//                     style={{
//                       width: "100%",
//                       height: "42px",
//                       border:
//                         "1px solid #dfe1e4",
//                       borderRadius:
//                         "7px",
//                       padding:
//                         "0 12px",
//                     }}
//                   >
//                     <option value="5">
//                       5 Stars
//                     </option>

//                     <option value="4">
//                       4 Stars
//                     </option>

//                     <option value="3">
//                       3 Stars
//                     </option>

//                     <option value="2">
//                       2 Stars
//                     </option>

//                     <option value="1">
//                       1 Star
//                     </option>
//                   </select>

//                 </div>

//                 <label className="checkbox-row">

//                   <input
//                     type="checkbox"
//                     name="isActive"
//                     checked={
//                       form.isActive
//                     }
//                     onChange={
//                       handleChange
//                     }
//                   />

//                   Show testimonial
//                   on website

//                 </label>

//               </div>

//               <div className="modal-footer">

//                 <button
//                   type="button"
//                   className="secondary-btn"
//                   onClick={
//                     closeModal
//                   }
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   type="submit"
//                   className="primary-btn"
//                   disabled={saving}
//                 >
//                   {saving
//                     ? "Saving..."
//                     : editingTestimonial
//                     ? "Update Testimonial"
//                     : "Create Testimonial"}
//                 </button>

//               </div>

//             </form>

//           </div>

//         </div>
//       )}

//     </div>
//   );
// };

// export default Testimonials;


// import { useEffect, useState, useCallback, useRef } from "react";
// import {
//   Plus,
//   Pencil,
//   Trash2,
//   Power,
//   X,
//   ImagePlus,
//   Star,
//   AlertCircle,
//   CheckCircle2,
//   Loader2,
// } from "lucide-react";
// import {
//   getAllTestimonials,
//   createTestimonial,
//   updateTestimonial,
//   toggleTestimonial,
//   deleteTestimonial,
// } from "../../services/testimonial.api.js";
// import "./TestimonialsManagement.css";

// const API_URL =
//   import.meta.env.VITE_API_URL?.replace("/api", "") ||
//   "http://localhost:5000";

// const initialForm = {
//   name: "",
//   designation: "",
//   company: "",
//   message: "",
//   image: null,
//   rating: 5,
//   isActive: true,
// };

// const Testimonials = () => {
//   const [testimonials, setTestimonials] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [editingTestimonial, setEditingTestimonial] = useState(null);
//   const [form, setForm] = useState(initialForm);
//   const [preview, setPreview] = useState(null);
//   const [toast, setToast] = useState(null);
//   const [deleteConfirm, setDeleteConfirm] = useState(null);
//   const [formErrors, setFormErrors] = useState({});
//   const fileInputRef = useRef(null);

//   // =====================================================
//   // TOAST NOTIFICATION
//   // =====================================================
//   const showToast = useCallback((message, type = "success") => {
//     setToast({ message, type });
//     setTimeout(() => setToast(null), 3000);
//   }, []);

//   // =====================================================
//   // LOAD TESTIMONIALS
//   // =====================================================
//   useEffect(() => {
//     loadTestimonials();
//   }, []);

//   const loadTestimonials = async () => {
//     try {
//       setLoading(true);
//       const response = await getAllTestimonials();
//       setTestimonials(response.data || []);
//     } catch (error) {
//       console.error("Load Testimonials Error:", error);
//       showToast(
//         error.response?.data?.message || "Failed to load testimonials",
//         "error"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // =====================================================
//   // FORM VALIDATION
//   // =====================================================
//   const validateForm = () => {
//     const errors = {};
//     if (!form.name?.trim()) {
//       errors.name = "Client name is required";
//     }
//     if (!form.message?.trim()) {
//       errors.message = "Testimonial message is required";
//     }
//     if (!editingTestimonial && !form.image) {
//       errors.image = "Client image is required";
//     }
//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   // =====================================================
//   // CREATE
//   // =====================================================
//   const openCreate = () => {
//     setEditingTestimonial(null);
//     setForm(initialForm);
//     setPreview(null);
//     setFormErrors({});
//     setShowModal(true);
//   };

//   // =====================================================
//   // EDIT
//   // =====================================================
//   const openEdit = (testimonial) => {
//     setEditingTestimonial(testimonial);
//     setForm({
//       name: testimonial.name || "",
//       designation: testimonial.designation || "",
//       company: testimonial.company || "",
//       message: testimonial.message || "",
//       image: null,
//       rating: testimonial.rating || 5,
//       isActive: testimonial.isActive ?? true,
//     });
//     setPreview(testimonial.image ? `${API_URL}${testimonial.image}` : null);
//     setFormErrors({});
//     setShowModal(true);
//   };

//   // =====================================================
//   // CLOSE MODAL
//   // =====================================================
//   const closeModal = () => {
//     if (saving) return;
//     setShowModal(false);
//     setEditingTestimonial(null);
//     setForm(initialForm);
//     setPreview(null);
//     setFormErrors({});
//   };

//   // =====================================================
//   // FORM CHANGE
//   // =====================================================
//   const handleChange = (event) => {
//     const { name, value, type, checked, files } = event.target;

//     // Image upload
//     if (type === "file") {
//       const file = files?.[0] || null;
//       if (file) {
//         const validTypes = ["image/png", "image/jpeg", "image/webp"];
//         if (!validTypes.includes(file.type)) {
//           showToast("Please upload PNG, JPEG, or WebP image", "error");
//           return;
//         }
//         if (file.size > 5 * 1024 * 1024) {
//           showToast("Image size should be less than 5MB", "error");
//           return;
//         }
//         setForm((prev) => ({ ...prev, image: file }));
//         setPreview(URL.createObjectURL(file));
//         setFormErrors((prev) => ({ ...prev, image: undefined }));
//       }
//       return;
//     }

//     // Checkbox
//     if (type === "checkbox") {
//       setForm((prev) => ({ ...prev, [name]: checked }));
//       return;
//     }

//     // Text inputs
//     setForm((prev) => ({ ...prev, [name]: value }));
//     if (formErrors[name]) {
//       setFormErrors((prev) => ({ ...prev, [name]: undefined }));
//     }
//   };

//   // =====================================================
//   // SUBMIT
//   // =====================================================
//   const handleSubmit = async (event) => {
//     event.preventDefault();
    
//     if (!validateForm()) {
//       showToast("Please fill all required fields", "error");
//       return;
//     }

//     try {
//       setSaving(true);
//       const formData = new FormData();
      
//       if (form.image && form.image instanceof File) {
//         formData.append("image", form.image);
//       }
      
//       formData.append("name", form.name || "");
//       formData.append("designation", form.designation || "");
//       formData.append("company", form.company || "");
//       formData.append("message", form.message || "");
//       formData.append("rating", String(form.rating || 5));
//       formData.append("isActive", String(form.isActive));

//       if (editingTestimonial) {
//         await updateTestimonial(editingTestimonial.id, formData);
//         showToast("Testimonial updated successfully");
//       } else {
//         await createTestimonial(formData);
//         showToast("Testimonial created successfully");
//       }

//       await loadTestimonials();
//       closeModal();
//     } catch (error) {
//       console.error("Save Testimonial Error:", error);
//       showToast(
//         error.response?.data?.message || "Failed to save testimonial",
//         "error"
//       );
//     } finally {
//       setSaving(false);
//     }
//   };

//   // =====================================================
//   // TOGGLE
//   // =====================================================
//   const handleToggle = async (id) => {
//     try {
//       await toggleTestimonial(id);
//       await loadTestimonials();
//       showToast("Testimonial status updated successfully");
//     } catch (error) {
//       console.error("Toggle Testimonial Error:", error);
//       showToast(
//         error.response?.data?.message || "Failed to update testimonial status",
//         "error"
//       );
//     }
//   };

//   // =====================================================
//   // DELETE
//   // =====================================================
//   const handleDelete = (id) => {
//     setDeleteConfirm(id);
//   };

//   const confirmDelete = async () => {
//     try {
//       await deleteTestimonial(deleteConfirm);
//       await loadTestimonials();
//       showToast("Testimonial deleted successfully");
//     } catch (error) {
//       console.error("Delete Testimonial Error:", error);
//       showToast(
//         error.response?.data?.message || "Failed to delete testimonial",
//         "error"
//       );
//     } finally {
//       setDeleteConfirm(null);
//     }
//   };

//   // =====================================================
//   // RENDER STARS
//   // =====================================================
//   const renderStars = (rating) => {
//     return (
//       <div className="rating-row">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <Star
//             key={star}
//             size={14}
//             className={`star-icon ${star <= rating ? "filled" : "empty"}`}
//           />
//         ))}
//       </div>
//     );
//   };

//   // =====================================================
//   // RENDER
//   // =====================================================
//   return (
//     <div className="cms-page">
//       {/* TOAST */}
//       {toast && (
//         <div className={`toast-notification ${toast.type}`}>
//           {toast.type === "success" ? (
//             <CheckCircle2 size={20} />
//           ) : (
//             <AlertCircle size={20} />
//           )}
//           <span>{toast.message}</span>
//           <button onClick={() => setToast(null)}>
//             <X size={16} />
//           </button>
//         </div>
//       )}

//       {/* PAGE HEADER */}
//       <div className="cms-page-header">
//         <div>
//           <h2>Testimonials</h2>
//           <p>Manage client testimonials and feedback.</p>
//         </div>
//         <button type="button" className="primary-btn" onClick={openCreate}>
//           <Plus size={17} strokeWidth={2} />
//           <span>Add Testimonial</span>
//         </button>
//       </div>

//       {/* TESTIMONIALS LIST */}
//       <div className="cms-card">
//         {loading ? (
//           <div className="cms-loading">
//             <Loader2 size={24} className="spinner" />
//             <span>Loading testimonials...</span>
//           </div>
//         ) : testimonials.length === 0 ? (
//           <div className="cms-empty">
//             <div className="empty-icon">
//               <Star size={38} strokeWidth={1.5} />
//             </div>
//             <h3>No testimonials yet</h3>
//             <p>Add your first client testimonial to get started.</p>
//             <button type="button" className="primary-btn" onClick={openCreate}>
//               <Plus size={17} />
//               <span>Add Testimonial</span>
//             </button>
//           </div>
//         ) : (
//           <div className="testimonial-admin-list">
//             {testimonials.map((testimonial) => (
//               <div className="testimonial-admin-card" key={testimonial.id}>
//                 {/* AVATAR */}
//                 <div className="testimonial-avatar">
//                   {testimonial.image ? (
//                     <img
//                       src={`${API_URL}${testimonial.image}`}
//                       alt={testimonial.name}
//                       loading="lazy"
//                     />
//                   ) : (
//                     <span className="avatar-initials">
//                       {testimonial.name?.charAt(0)?.toUpperCase() || "?"}
//                     </span>
//                   )}
//                 </div>

//                 {/* CONTENT */}
//                 <div className="testimonial-admin-info">
//                   <div className="testimonial-header">
//                     <div>
//                       <strong>{testimonial.name || "Anonymous"}</strong>
//                       <span className="client-details">
//                         {testimonial.designation || "Client"}
//                         {testimonial.company && ` • ${testimonial.company}`}
//                       </span>
//                     </div>
//                     <div className="rating-row">
//                       {[1, 2, 3, 4, 5].map((star) => (
//                         <Star
//                           key={star}
//                           size={14}
//                           className={`star-icon ${
//                             star <= testimonial.rating ? "filled" : "empty"
//                           }`}
//                         />
//                       ))}
//                     </div>
//                   </div>
//                   <p className="testimonial-message">{testimonial.message}</p>
//                 </div>

//                 {/* ACTIONS */}
//                 <div className="testimonial-actions">
//                   <button
//                     type="button"
//                     className={`status-toggle ${
//                       testimonial.isActive ? "active" : "inactive"
//                     }`}
//                     onClick={() => handleToggle(testimonial.id)}
//                     title={testimonial.isActive ? "Click to deactivate" : "Click to activate"}
//                   >
//                     <Power size={13} strokeWidth={2} />
//                     <span>{testimonial.isActive ? "Active" : "Inactive"}</span>
//                   </button>

//                   <button
//                     type="button"
//                     className="icon-btn"
//                     title="Edit Testimonial"
//                     onClick={() => openEdit(testimonial)}
//                   >
//                     <Pencil size={15} />
//                   </button>

//                   <button
//                     type="button"
//                     className="icon-btn danger"
//                     title="Delete Testimonial"
//                     onClick={() => handleDelete(testimonial.id)}
//                   >
//                     <Trash2 size={15} />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* DELETE CONFIRMATION */}
//       {deleteConfirm && (
//         <div className="modal-overlay" onClick={() => setDeleteConfirm(null)}>
//           <div className="confirm-modal" onClick={(e) => e.stopPropagation()}>
//             <div className="confirm-icon">
//               <AlertCircle size={32} strokeWidth={1.5} />
//             </div>
//             <h3>Delete Testimonial</h3>
//             <p>Are you sure you want to delete this testimonial? This action cannot be undone.</p>
//             <div className="confirm-actions">
//               <button
//                 type="button"
//                 className="secondary-btn"
//                 onClick={() => setDeleteConfirm(null)}
//               >
//                 Cancel
//               </button>
//               <button
//                 type="button"
//                 className="danger-btn"
//                 onClick={confirmDelete}
//               >
//                 <Trash2 size={16} />
//                 <span>Delete</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* =================================================
//           CREATE/EDIT MODAL - FIXED WITH VISIBLE BUTTONS
//       ================================================= */}
//       {showModal && (
//         <div className="modal-overlay" onClick={closeModal}>
//           <div className="cms-modal" onClick={(e) => e.stopPropagation()}>
//             {/* MODAL HEADER */}
//             <div className="modal-header">
//               <div>
//                 <h3>{editingTestimonial ? "Edit Testimonial" : "Add New Testimonial"}</h3>
//                 <p>Add customer feedback and testimonials.</p>
//               </div>
//               <button
//                 type="button"
//                 className="modal-close"
//                 onClick={closeModal}
//               >
//                 <X size={20} />
//               </button>
//             </div>

//             {/* FORM */}
//             <form onSubmit={handleSubmit} noValidate className="modal-form">
//               {/* SCROLLABLE BODY */}
//               <div className="modal-body">
//                 {/* IMAGE UPLOAD */}
//                 <div className="form-group">
//                   <label>
//                     Client Image <span className="required">*</span>
//                   </label>
//                   <div
//                     className={`image-upload ${formErrors.image ? "error" : ""}`}
//                     onClick={() => fileInputRef.current?.click()}
//                   >
//                     {preview ? (
//                       <div className="image-preview">
//                         <img src={preview} alt="Client preview" />
//                         <div className="image-overlay">
//                           <span>Click to change image</span>
//                         </div>
//                       </div>
//                     ) : (
//                       <div className="image-placeholder">
//                         <ImagePlus size={30} strokeWidth={1.5} />
//                         <span>Click to upload client image</span>
//                         <small>PNG, JPEG, or WebP (max 5MB)</small>
//                         <small>Recommended: 200 × 200px</small>
//                       </div>
//                     )}
//                     <input
//                       ref={fileInputRef}
//                       type="file"
//                       name="image"
//                       accept="image/png,image/jpeg,image/webp"
//                       onChange={handleChange}
//                     />
//                   </div>
//                   {formErrors.image && (
//                     <span className="error-text">{formErrors.image}</span>
//                   )}
//                 </div>

//                 {/* NAME + DESIGNATION */}
//                 <div className="form-grid">
//                   <div className="form-group">
//                     <label>
//                       Client Name <span className="required">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="John Doe"
//                       value={form.name}
//                       onChange={handleChange}
//                       className={formErrors.name ? "error" : ""}
//                     />
//                     {formErrors.name && (
//                       <span className="error-text">{formErrors.name}</span>
//                     )}
//                   </div>

//                   <div className="form-group">
//                     <label>Designation</label>
//                     <input
//                       type="text"
//                       name="designation"
//                       placeholder="Managing Director"
//                       value={form.designation}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>

//                 {/* COMPANY */}
//                 <div className="form-group">
//                   <label>Company</label>
//                   <input
//                     type="text"
//                     name="company"
//                     placeholder="ABC Corporation"
//                     value={form.company}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 {/* MESSAGE */}
//                 <div className="form-group">
//                   <label>
//                     Testimonial Message <span className="required">*</span>
//                   </label>
//                   <textarea
//                     name="message"
//                     rows="4"
//                     placeholder="What did they say about your services?"
//                     value={form.message}
//                     onChange={handleChange}
//                     className={formErrors.message ? "error" : ""}
//                   />
//                   {formErrors.message && (
//                     <span className="error-text">{formErrors.message}</span>
//                   )}
//                 </div>

//                 {/* RATING */}
//                 <div className="form-group">
//                   <label>Rating</label>
//                   <select
//                     name="rating"
//                     value={form.rating}
//                     onChange={handleChange}
//                     className="rating-select"
//                   >
//                     <option value="5">⭐⭐⭐⭐⭐ 5 Stars</option>
//                     <option value="4">⭐⭐⭐⭐ 4 Stars</option>
//                     <option value="3">⭐⭐⭐ 3 Stars</option>
//                     <option value="2">⭐⭐ 2 Stars</option>
//                     <option value="1">⭐ 1 Star</option>
//                   </select>
//                 </div>

//                 {/* ACTIVE */}
//                 <label className="checkbox-row">
//                   <input
//                     type="checkbox"
//                     name="isActive"
//                     checked={form.isActive}
//                     onChange={handleChange}
//                   />
//                   <span>Display this testimonial on the website</span>
//                 </label>
//               </div>

//               {/* =============================================
//                   FIXED FOOTER WITH BUTTONS - ALWAYS VISIBLE
//                   ============================================= */}
//               <div className="modal-footer-fixed">
//                 <button
//                   type="button"
//                   className="secondary-btn"
//                   onClick={closeModal}
//                   disabled={saving}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="primary-btn submit-btn"
//                   disabled={saving}
//                 >
//                   {saving ? (
//                     <>
//                       <Loader2 size={17} className="spinner" />
//                       <span>Saving...</span>
//                     </>
//                   ) : editingTestimonial ? (
//                     <>
//                       <Pencil size={17} />
//                       <span>Update Testimonial</span>
//                     </>
//                   ) : (
//                     <>
//                       <Plus size={17} />
//                       <span>Create Testimonial</span>
//                     </>
//                   )}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Testimonials;















// src/pages/admin/TestimonialsManagement/TestimonialsManagement.jsx
import { useEffect, useState, useCallback, useRef } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  Power,
  X,
  ImagePlus,
  Star,
  AlertCircle,
  CheckCircle2,
  Loader2,
  User,
  Building2,
  Briefcase,
} from "lucide-react";
import {
  getAllTestimonials,
  createTestimonial,
  updateTestimonial,
  toggleTestimonial,
  deleteTestimonial,
} from "../../services/testimonial.api.js";
import "./TestimonialsManagement.css";

const API_URL =
  import.meta.env.VITE_API_URL?.replace("/api", "") ||
  "http://localhost:5000";

const initialForm = {
  name: "",
  designation: "",
  company: "",
  message: "",
  image: null,
  rating: 5,
  isActive: true,
};

const TestimonialsManagement = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState(null);
  const [form, setForm] = useState(initialForm);
  const [preview, setPreview] = useState(null);
  const [toast, setToast] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const fileInputRef = useRef(null);

  // =====================================================
  // TOAST NOTIFICATION
  // =====================================================
  const showToast = useCallback((message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  }, []);

  // =====================================================
  // LOAD TESTIMONIALS
  // =====================================================
  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    try {
      setLoading(true);
      const response = await getAllTestimonials();
      setTestimonials(response.data || []);
    } catch (error) {
      console.error("Load Testimonials Error:", error);
      showToast(
        error.response?.data?.message || "Failed to load testimonials",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // FORM VALIDATION
  // =====================================================
  const validateForm = () => {
    const errors = {};
    if (!form.name?.trim()) {
      errors.name = "Client name is required";
    }
    if (!form.message?.trim()) {
      errors.message = "Testimonial message is required";
    }
    if (!editingTestimonial && !form.image) {
      errors.image = "Client image is required";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // =====================================================
  // CREATE
  // =====================================================
  const openCreate = () => {
    setEditingTestimonial(null);
    setForm(initialForm);
    setPreview(null);
    setFormErrors({});
    setShowModal(true);
  };

  // =====================================================
  // EDIT
  // =====================================================
  const openEdit = (testimonial) => {
    setEditingTestimonial(testimonial);
    setForm({
      name: testimonial.name || "",
      designation: testimonial.designation || "",
      company: testimonial.company || "",
      message: testimonial.message || "",
      image: null,
      rating: testimonial.rating || 5,
      isActive: testimonial.isActive ?? true,
    });
    setPreview(testimonial.image ? `${API_URL}${testimonial.image}` : null);
    setFormErrors({});
    setShowModal(true);
  };

  // =====================================================
  // CLOSE MODAL
  // =====================================================
  const closeModal = () => {
    if (saving) return;
    setShowModal(false);
    setEditingTestimonial(null);
    setForm(initialForm);
    setPreview(null);
    setFormErrors({});
    if (preview) {
      URL.revokeObjectURL(preview);
    }
  };

  // =====================================================
  // FORM CHANGE
  // =====================================================
  const handleChange = (event) => {
    const { name, value, type, checked, files } = event.target;

    if (type === "file") {
      const file = files?.[0] || null;
      if (file) {
        const validTypes = ["image/png", "image/jpeg", "image/webp", "image/gif"];
        if (!validTypes.includes(file.type)) {
          showToast("Please upload PNG, JPEG, WebP, or GIF image", "error");
          return;
        }
        if (file.size > 5 * 1024 * 1024) {
          showToast("Image size should be less than 5MB", "error");
          return;
        }
        setForm((prev) => ({ ...prev, image: file }));
        setPreview(URL.createObjectURL(file));
        setFormErrors((prev) => ({ ...prev, image: undefined }));
      }
      return;
    }

    if (type === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: checked }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // =====================================================
  // SUBMIT
  // =====================================================
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!validateForm()) {
      showToast("Please fill all required fields", "error");
      return;
    }

    try {
      setSaving(true);
      const formData = new FormData();
      
      if (form.image && form.image instanceof File) {
        formData.append("image", form.image);
      }
      
      formData.append("name", form.name || "");
      formData.append("designation", form.designation || "");
      formData.append("company", form.company || "");
      formData.append("message", form.message || "");
      formData.append("rating", String(form.rating || 5));
      formData.append("isActive", String(form.isActive));

      if (editingTestimonial) {
        await updateTestimonial(editingTestimonial.id, formData);
        showToast("Testimonial updated successfully");
      } else {
        await createTestimonial(formData);
        showToast("Testimonial created successfully");
      }

      await loadTestimonials();
      closeModal();
    } catch (error) {
      console.error("Save Testimonial Error:", error);
      showToast(
        error.response?.data?.message || "Failed to save testimonial",
        "error"
      );
    } finally {
      setSaving(false);
    }
  };

  // =====================================================
  // TOGGLE
  // =====================================================
  const handleToggle = async (id) => {
    try {
      await toggleTestimonial(id);
      await loadTestimonials();
      showToast("Testimonial status updated successfully");
    } catch (error) {
      console.error("Toggle Testimonial Error:", error);
      showToast(
        error.response?.data?.message || "Failed to update testimonial status",
        "error"
      );
    }
  };

  // =====================================================
  // DELETE
  // =====================================================
  const handleDelete = (id) => {
    setDeleteConfirm(id);
  };

  const confirmDelete = async () => {
    try {
      await deleteTestimonial(deleteConfirm);
      await loadTestimonials();
      showToast("Testimonial deleted successfully");
    } catch (error) {
      console.error("Delete Testimonial Error:", error);
      showToast(
        error.response?.data?.message || "Failed to delete testimonial",
        "error"
      );
    } finally {
      setDeleteConfirm(null);
    }
  };

  // =====================================================
  // RENDER STARS
  // =====================================================
  const renderStars = (rating) => {
    return (
      <div className="rating-stars-display">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={14}
            className={`star-icon ${star <= rating ? "filled" : "empty"}`}
            fill={star <= rating ? "#D71920" : "none"}
          />
        ))}
      </div>
    );
  };

  // =====================================================
  // RENDER
  // =====================================================
  return (
    <div className="testimonial-cms">
      {/* TOAST */}
      {toast && (
        <div className={`toast-notification ${toast.type}`}>
          {toast.type === "success" ? (
            <CheckCircle2 size={20} />
          ) : (
            <AlertCircle size={20} />
          )}
          <span>{toast.message}</span>
          <button onClick={() => setToast(null)}>
            <X size={16} />
          </button>
        </div>
      )}

      {/* PAGE HEADER */}
      <div className="cms-page-header">
        <div>
          <h2>Client Testimonials</h2>
          <p>Manage and review client feedback and testimonials.</p>
        </div>
        <button type="button" className="primary-btn" onClick={openCreate}>
          <Plus size={17} strokeWidth={2} />
          <span>Add Testimonial</span>
        </button>
      </div>

      {/* TESTIMONIALS LIST */}
      <div className="cms-card">
        {loading ? (
          <div className="cms-loading">
            <Loader2 size={24} className="spinner" />
            <span>Loading testimonials...</span>
          </div>
        ) : testimonials.length === 0 ? (
          <div className="cms-empty">
            <div className="empty-icon">
              <Star size={38} strokeWidth={1.5} />
            </div>
            <h3>No testimonials yet</h3>
            <p>Add your first client testimonial to showcase on the website.</p>
            <button type="button" className="primary-btn" onClick={openCreate}>
              <Plus size={17} />
              <span>Add Testimonial</span>
            </button>
          </div>
        ) : (
          <div className="testimonial-list">
            {testimonials.map((testimonial) => (
              <div className="testimonial-card" key={testimonial.id}>
                {/* Avatar */}
                <div className="testimonial-avatar">
                  {testimonial.image ? (
                    <img
                      src={`${API_URL}${testimonial.image}`}
                      alt={testimonial.name}
                      loading="lazy"
                    />
                  ) : (
                    <div className="avatar-placeholder">
                      <User size={24} />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="testimonial-content">
                  <div className="testimonial-header">
                    <div className="testimonial-author">
                      <strong className="author-name">{testimonial.name || "Anonymous"}</strong>
                      <div className="author-details">
                        {testimonial.designation && (
                          <span className="author-designation">
                            <Briefcase size={12} />
                            {testimonial.designation}
                          </span>
                        )}
                        {testimonial.company && (
                          <span className="author-company">
                            <Building2 size={12} />
                            {testimonial.company}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="testimonial-rating">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <p className="testimonial-message">"{testimonial.message}"</p>
                </div>

                {/* Actions */}
                <div className="testimonial-actions">
                  <button
                    type="button"
                    className={`status-toggle ${testimonial.isActive ? "active" : "inactive"}`}
                    onClick={() => handleToggle(testimonial.id)}
                    title={testimonial.isActive ? "Click to deactivate" : "Click to activate"}
                  >
                    <Power size={13} strokeWidth={2} />
                    <span>{testimonial.isActive ? "Active" : "Inactive"}</span>
                  </button>

                  <button
                    type="button"
                    className="icon-btn"
                    title="Edit Testimonial"
                    onClick={() => openEdit(testimonial)}
                  >
                    <Pencil size={15} />
                  </button>

                  <button
                    type="button"
                    className="icon-btn danger"
                    title="Delete Testimonial"
                    onClick={() => handleDelete(testimonial.id)}
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* DELETE CONFIRMATION */}
      {deleteConfirm && (
        <div className="modal-overlay" onClick={() => setDeleteConfirm(null)}>
          <div className="confirm-modal" onClick={(e) => e.stopPropagation()}>
            <div className="confirm-icon">
              <AlertCircle size={32} strokeWidth={1.5} />
            </div>
            <h3>Delete Testimonial</h3>
            <p>Are you sure you want to delete this testimonial? This action cannot be undone.</p>
            <div className="confirm-actions">
              <button
                type="button"
                className="secondary-btn"
                onClick={() => setDeleteConfirm(null)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="danger-btn"
                onClick={confirmDelete}
              >
                <Trash2 size={16} />
                <span>Delete</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CREATE/EDIT MODAL */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="cms-modal testimonial-modal" onClick={(e) => e.stopPropagation()}>
            {/* MODAL HEADER */}
            <div className="modal-header">
              <div>
                <h3>{editingTestimonial ? "Edit Testimonial" : "Add New Testimonial"}</h3>
                <p>Add or edit client feedback and testimonials.</p>
              </div>
              <button
                type="button"
                className="modal-close"
                onClick={closeModal}
              >
                <X size={20} />
              </button>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} noValidate className="modal-form">
              {/* SCROLLABLE BODY */}
              <div className="modal-body">
                {/* IMAGE UPLOAD */}
                <div className="form-group">
                  <label>
                    Client Image {!editingTestimonial && <span className="required">*</span>}
                  </label>
                  <div
                    className={`image-upload ${formErrors.image ? "error" : ""}`}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    {preview ? (
                      <div className="image-preview">
                        <img src={preview} alt="Client preview" />
                        <div className="image-overlay">
                          <span>Change Image</span>
                        </div>
                      </div>
                    ) : (
                      <div className="image-placeholder">
                        <ImagePlus size={30} strokeWidth={1.5} />
                        <span>Upload client image</span>
                        <small>PNG, JPEG, or WebP (max 5MB)</small>
                        <small>Recommended: 200 × 200px</small>
                      </div>
                    )}
                    <input
                      ref={fileInputRef}
                      type="file"
                      name="image"
                      accept="image/png,image/jpeg,image/webp,image/gif"
                      onChange={handleChange}
                    />
                  </div>
                  {formErrors.image && (
                    <span className="error-text">{formErrors.image}</span>
                  )}
                </div>

                {/* NAME + DESIGNATION */}
                <div className="form-grid">
                  <div className="form-group">
                    <label>
                      Client Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      className={formErrors.name ? "error" : ""}
                    />
                    {formErrors.name && (
                      <span className="error-text">{formErrors.name}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Designation</label>
                    <input
                      type="text"
                      name="designation"
                      placeholder="Managing Director"
                      value={form.designation}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* COMPANY */}
                <div className="form-group">
                  <label>Company</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="ABC Corporation"
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>

                {/* MESSAGE */}
                <div className="form-group">
                  <label>
                    Testimonial Message <span className="required">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="What did they say about your services?"
                    value={form.message}
                    onChange={handleChange}
                    className={formErrors.message ? "error" : ""}
                  />
                  {formErrors.message && (
                    <span className="error-text">{formErrors.message}</span>
                  )}
                </div>

                {/* RATING */}
                <div className="form-group">
                  <label>Rating</label>
                  <div className="rating-select-wrapper">
                    <select
                      name="rating"
                      value={form.rating}
                      onChange={handleChange}
                      className="rating-select"
                    >
                      <option value="5">⭐⭐⭐⭐⭐ 5 Stars</option>
                      <option value="4">⭐⭐⭐⭐ 4 Stars</option>
                      <option value="3">⭐⭐⭐ 3 Stars</option>
                      <option value="2">⭐⭐ 2 Stars</option>
                      <option value="1">⭐ 1 Star</option>
                    </select>
                    <div className="rating-select-preview">
                      {renderStars(form.rating)}
                    </div>
                  </div>
                </div>

                {/* ACTIVE */}
                <label className="checkbox-row">
                  <input
                    type="checkbox"
                    name="isActive"
                    checked={form.isActive}
                    onChange={handleChange}
                  />
                  <span>Display this testimonial on the website</span>
                </label>
              </div>

              {/* FIXED FOOTER WITH BUTTONS */}
              <div className="modal-footer-fixed">
                <button
                  type="button"
                  className="secondary-btn"
                  onClick={closeModal}
                  disabled={saving}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="primary-btn submit-btn"
                  disabled={saving}
                >
                  {saving ? (
                    <>
                      <Loader2 size={17} className="spinner" />
                      <span>Saving...</span>
                    </>
                  ) : editingTestimonial ? (
                    <>
                      <Pencil size={17} />
                      <span>Update Testimonial</span>
                    </>
                  ) : (
                    <>
                      <Plus size={17} />
                      <span>Create Testimonial</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialsManagement;