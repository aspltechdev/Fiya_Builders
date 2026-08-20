


// import { useEffect, useState, useCallback, useRef } from "react";
// import {
//   Plus,
//   Pencil,
//   Trash2,
//   Power,
//   X,
//   ImagePlus,
//   AlertCircle,
//   CheckCircle2,
//   Loader2,
// } from "lucide-react";
// import {
//   getAllHeroes,
//   createHero,
//   updateHero,
//   toggleHero,
//   deleteHero,
// } from "../../services/hero.api.js";
// import "./HeroManagement.css";

// const API_URL =
//   import.meta.env.VITE_API_URL?.replace("/api", "") ||
//   "http://localhost:5000";

// const initialForm = {
//   title: "",
//   subtitle: "",
//   description: "",
//   buttonText: "",
//   buttonLink: "",
//   image: null, // Will be null or File object
//   isActive: true,
// };

// const Hero = () => {
//   const [heroes, setHeroes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [editingHero, setEditingHero] = useState(null);
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
//   // LOAD HEROES
//   // =====================================================
//   useEffect(() => {
//     loadHeroes();
//   }, []);

//   const loadHeroes = async () => {
//     try {
//       setLoading(true);
//       const response = await getAllHeroes();
//       setHeroes(response.data || []);
//     } catch (error) {
//       console.error("Load Heroes Error:", error);
//       showToast(
//         error.response?.data?.message || "Failed to load hero banners",
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
//     if (!form.title?.trim()) {
//       errors.title = "Title is required";
//     }
//     if (!form.subtitle?.trim()) {
//       errors.subtitle = "Subtitle is required";
//     }
//     if (!form.description?.trim()) {
//       errors.description = "Description is required";
//     }
//     if (!form.buttonText?.trim()) {
//       errors.buttonText = "Button text is required";
//     }
//     if (!form.buttonLink?.trim()) {
//       errors.buttonLink = "Button link is required";
//     }
//     // Only require image for new heroes
//     if (!editingHero && !form.image) {
//       errors.image = "Hero image is required";
//     }
//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   // =====================================================
//   // CREATE
//   // =====================================================
//   const openCreate = () => {
//     setEditingHero(null);
//     setForm(initialForm);
//     setPreview(null);
//     setFormErrors({});
//     setShowModal(true);
//   };

//   // =====================================================
//   // EDIT
//   // =====================================================
//   const openEdit = (hero) => {
//     setEditingHero(hero);
//     setForm({
//       title: hero.title || "",
//       subtitle: hero.subtitle || "",
//       description: hero.description || "",
//       buttonText: hero.buttonText || "",
//       buttonLink: hero.buttonLink || "",
//       image: null, // Reset image to null, not an empty object
//       isActive: hero.isActive ?? true,
//     });
//     setPreview(hero.image ? `${API_URL}${hero.image}` : null);
//     setFormErrors({});
//     setShowModal(true);
//   };

//   // =====================================================
//   // CLOSE MODAL
//   // =====================================================
//   const closeModal = () => {
//     if (saving) return;
//     setShowModal(false);
//     setEditingHero(null);
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
//         // Validate file type
//         const validTypes = ["image/png", "image/jpeg", "image/webp"];
//         if (!validTypes.includes(file.type)) {
//           showToast("Please upload PNG, JPEG, or WebP image", "error");
//           return;
//         }
//         // Validate file size (max 5MB)
//         if (file.size > 5 * 1024 * 1024) {
//           showToast("Image size should be less than 5MB", "error");
//           return;
//         }
//         setForm((prev) => ({ ...prev, image: file })); // Store File object
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
//     // Clear error for this field
//     if (formErrors[name]) {
//       setFormErrors((prev) => ({ ...prev, [name]: undefined }));
//     }
//   };

//   // =====================================================
//   // SUBMIT - FIXED
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
      
//       // IMPORTANT: Only append image if it exists and is a File object
//       if (form.image && form.image instanceof File) {
//         formData.append("image", form.image);
//       }
      
//       // Append other fields
//       formData.append("title", form.title || "");
//       formData.append("subtitle", form.subtitle || "");
//       formData.append("description", form.description || "");
//       formData.append("buttonText", form.buttonText || "");
//       formData.append("buttonLink", form.buttonLink || "");
//       formData.append("isActive", String(form.isActive));

//       if (editingHero) {
//         await updateHero(editingHero.id, formData);
//         showToast("Hero banner updated successfully");
//       } else {
//         await createHero(formData);
//         showToast("Hero banner created successfully");
//       }

//       await loadHeroes();
//       closeModal();
//     } catch (error) {
//       console.error("Save Hero Error:", error);
//       showToast(
//         error.response?.data?.message || "Failed to save hero",
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
//       await toggleHero(id);
//       await loadHeroes();
//       showToast("Hero status updated successfully");
//     } catch (error) {
//       console.error("Toggle Hero Error:", error);
//       showToast(
//         error.response?.data?.message || "Failed to update hero status",
//         "error"
//       );
//     }
//   };

//   // =====================================================
//   // DELETE
//   // =====================================================
//   const handleDelete = async (id) => {
//     setDeleteConfirm(id);
//   };

//   const confirmDelete = async () => {
//     try {
//       await deleteHero(deleteConfirm);
//       await loadHeroes();
//       showToast("Hero banner deleted successfully");
//     } catch (error) {
//       console.error("Delete Hero Error:", error);
//       showToast(
//         error.response?.data?.message || "Failed to delete hero",
//         "error"
//       );
//     } finally {
//       setDeleteConfirm(null);
//     }
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
//           <h2>Hero Banners</h2>
//           <p>Manage the main hero section of your FIYA Builders website.</p>
//         </div>
//         <button type="button" className="primary-btn" onClick={openCreate}>
//           <Plus size={17} strokeWidth={2} />
//           <span>Add Hero</span>
//         </button>
//       </div>

//       {/* HERO TABLE */}
//       <div className="cms-card">
//         {loading ? (
//           <div className="cms-loading">
//             <Loader2 size={24} className="spinner" />
//             <span>Loading hero banners...</span>
//           </div>
//         ) : heroes.length === 0 ? (
//           <div className="cms-empty">
//             <div className="empty-icon">
//               <ImagePlus size={38} strokeWidth={1.5} />
//             </div>
//             <h3>No hero banners yet</h3>
//             <p>Add your first hero banner to get started.</p>
//             <button type="button" className="primary-btn" onClick={openCreate}>
//               <Plus size={17} />
//               <span>Add Hero</span>
//             </button>
//           </div>
//         ) : (
//           <div className="cms-table-wrapper">
//             <table className="cms-table">
//               <thead>
//                 <tr>
//                   <th>Image</th>
//                   <th>Content</th>
//                   <th>CTA</th>
//                   <th>Status</th>
//                   <th className="text-right">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {heroes.map((hero) => (
//                   <tr key={hero.id}>
//                     <td>
//                       <div className="hero-thumb">
//                         {hero.image ? (
//                           <img
//                             src={`${API_URL}${hero.image}`}
//                             alt={hero.title || "Hero"}
//                             loading="lazy"
//                           />
//                         ) : (
//                           <ImagePlus size={20} />
//                         )}
//                       </div>
//                     </td>
//                     <td>
//                       <div className="cms-content-cell">
//                         <strong>{hero.title || "Untitled"}</strong>
//                         {hero.subtitle && <span>{hero.subtitle}</span>}
//                       </div>
//                     </td>
//                     <td>
//                       <div className="cms-content-cell">
//                         <strong>{hero.buttonText || "No button"}</strong>
//                         {hero.buttonLink && <span>{hero.buttonLink}</span>}
//                       </div>
//                     </td>
//                     <td>
//                       <button
//                         type="button"
//                         className={`status-toggle ${
//                           hero.isActive ? "active" : "inactive"
//                         }`}
//                         onClick={() => handleToggle(hero.id)}
//                       >
//                         <Power size={14} strokeWidth={2} />
//                         <span>{hero.isActive ? "Active" : "Inactive"}</span>
//                       </button>
//                     </td>
//                     <td>
//                       <div className="cms-actions">
//                         <button
//                           type="button"
//                           className="icon-btn"
//                           onClick={() => openEdit(hero)}
//                         >
//                           <Pencil size={16} />
//                         </button>
//                         <button
//                           type="button"
//                           className="icon-btn danger"
//                           onClick={() => handleDelete(hero.id)}
//                         >
//                           <Trash2 size={16} />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
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
//             <h3>Delete Hero Banner</h3>
//             <p>Are you sure you want to delete this hero banner? This action cannot be undone.</p>
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

//       {/* CREATE/EDIT MODAL */}
//       {showModal && (
//         <div className="modal-overlay" onClick={closeModal}>
//           <div className="cms-modal" onClick={(e) => e.stopPropagation()}>
//             <div className="modal-header">
//               <div>
//                 <h3>{editingHero ? "Edit Hero" : "Add New Hero"}</h3>
//                 <p>Configure your website hero banner.</p>
//               </div>
//               <button
//                 type="button"
//                 className="modal-close"
//                 onClick={closeModal}
//               >
//                 <X size={20} />
//               </button>
//             </div>

//             <form onSubmit={handleSubmit} noValidate className="modal-form">
//               <div className="modal-body">
//                 {/* IMAGE */}
//                 <div className="form-group">
//                   <label>
//                     Hero Image <span className="required">*</span>
//                   </label>
//                   <div
//                     className={`image-upload ${formErrors.image ? "error" : ""}`}
//                     onClick={() => fileInputRef.current?.click()}
//                   >
//                     {preview ? (
//                       <div className="image-preview">
//                         <img src={preview} alt="Hero preview" />
//                         <div className="image-overlay">
//                           <span>Click to change image</span>
//                         </div>
//                       </div>
//                     ) : (
//                       <div className="image-placeholder">
//                         <ImagePlus size={30} strokeWidth={1.5} />
//                         <span>Click to upload hero image</span>
//                         <small>PNG, JPEG, or WebP (max 5MB)</small>
//                         <small>Recommended: 1920 × 800px</small>
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

//                 {/* TITLE + SUBTITLE */}
//                 <div className="form-grid">
//                   <div className="form-group">
//                     <label>
//                       Title <span className="required">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="title"
//                       placeholder="Building Spaces That Last"
//                       value={form.title}
//                       onChange={handleChange}
//                       className={formErrors.title ? "error" : ""}
//                     />
//                     {formErrors.title && (
//                       <span className="error-text">{formErrors.title}</span>
//                     )}
//                   </div>

//                   <div className="form-group">
//                     <label>
//                       Subtitle <span className="required">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="subtitle"
//                       placeholder="FIYA BUILDERS"
//                       value={form.subtitle}
//                       onChange={handleChange}
//                       className={formErrors.subtitle ? "error" : ""}
//                     />
//                     {formErrors.subtitle && (
//                       <span className="error-text">{formErrors.subtitle}</span>
//                     )}
//                   </div>
//                 </div>

//                 {/* DESCRIPTION */}
//                 <div className="form-group">
//                   <label>
//                     Description <span className="required">*</span>
//                   </label>
//                   <textarea
//                     name="description"
//                     rows="4"
//                     placeholder="Crafting exceptional spaces with quality, precision and trust."
//                     value={form.description}
//                     onChange={handleChange}
//                     className={formErrors.description ? "error" : ""}
//                   />
//                   {formErrors.description && (
//                     <span className="error-text">{formErrors.description}</span>
//                   )}
//                 </div>

//                 {/* CTA */}
//                 <div className="form-grid">
//                   <div className="form-group">
//                     <label>
//                       Button Text <span className="required">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="buttonText"
//                       placeholder="Explore Projects"
//                       value={form.buttonText}
//                       onChange={handleChange}
//                       className={formErrors.buttonText ? "error" : ""}
//                     />
//                     {formErrors.buttonText && (
//                       <span className="error-text">{formErrors.buttonText}</span>
//                     )}
//                   </div>

//                   <div className="form-group">
//                     <label>
//                       Button Link <span className="required">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="buttonLink"
//                       placeholder="/projects"
//                       value={form.buttonLink}
//                       onChange={handleChange}
//                       className={formErrors.buttonLink ? "error" : ""}
//                     />
//                     {formErrors.buttonLink && (
//                       <span className="error-text">{formErrors.buttonLink}</span>
//                     )}
//                   </div>
//                 </div>

//                 {/* ACTIVE */}
//                 <label className="checkbox-row">
//                   <input
//                     type="checkbox"
//                     name="isActive"
//                     checked={form.isActive}
//                     onChange={handleChange}
//                   />
//                   <span>Display this hero on the website</span>
//                 </label>

//                 {/* FORM ACTIONS */}
//                 <div className="form-actions">
//                   <button
//                     type="button"
//                     className="secondary-btn"
//                     onClick={closeModal}
//                     disabled={saving}
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="primary-btn submit-btn"
//                     disabled={saving}
//                   >
//                     {saving ? (
//                       <>
//                         <Loader2 size={17} className="spinner" />
//                         <span>Saving...</span>
//                       </>
//                     ) : editingHero ? (
//                       <>
//                         <Pencil size={17} />
//                         <span>Update Hero</span>
//                       </>
//                     ) : (
//                       <>
//                         <Plus size={17} />
//                         <span>Create Hero</span>
//                       </>
//                     )}
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Hero;


// HeroManagement.jsx - Fixed version

import { useEffect, useState, useCallback, useRef } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  Power,
  X,
  ImagePlus,
  AlertCircle,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import {
  getAllHeroes,
  createHero,
  updateHero,
  toggleHero,
  deleteHero,
} from "../../services/hero.api.js";
import "./HeroManagement.css";

const API_URL =
  import.meta.env.VITE_API_URL?.replace("/api", "") ||
  "http://localhost:5000";

const initialForm = {
  title: "",
  subtitle: "",
  description: "",
  buttonText: "",
  buttonLink: "",
  image: null, // ✅ This should be null initially, not {}
  isActive: true,
};

const Hero = () => {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingHero, setEditingHero] = useState(null);
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
  // LOAD HEROES
  // =====================================================
  useEffect(() => {
    loadHeroes();
  }, []);

  const loadHeroes = async () => {
    try {
      setLoading(true);
      const response = await getAllHeroes();
      setHeroes(response.data || []);
    } catch (error) {
      console.error("Load Heroes Error:", error);
      showToast(
        error.response?.data?.message || "Failed to load hero banners",
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
    if (!form.title?.trim()) {
      errors.title = "Title is required";
    }
    if (!form.subtitle?.trim()) {
      errors.subtitle = "Subtitle is required";
    }
    if (!form.description?.trim()) {
      errors.description = "Description is required";
    }
    if (!form.buttonText?.trim()) {
      errors.buttonText = "Button text is required";
    }
    if (!form.buttonLink?.trim()) {
      errors.buttonLink = "Button link is required";
    }
    // ✅ Only require image for new heroes
    if (!editingHero && !form.image) {
      errors.image = "Hero image is required";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // =====================================================
  // CREATE
  // =====================================================
  const openCreate = () => {
    setEditingHero(null);
    setForm({ ...initialForm, image: null }); // ✅ Ensure image is null
    setPreview(null);
    setFormErrors({});
    setShowModal(true);
  };

  // =====================================================
  // EDIT
  // =====================================================
  const openEdit = (hero) => {
    setEditingHero(hero);
    setForm({
      title: hero.title || "",
      subtitle: hero.subtitle || "",
      description: hero.description || "",
      buttonText: hero.buttonText || "",
      buttonLink: hero.buttonLink || "",
      image: null, // ✅ Reset image to null, NOT {}
      isActive: hero.isActive ?? true,
    });
    setPreview(hero.image ? `${API_URL}${hero.image}` : null);
    setFormErrors({});
    setShowModal(true);
  };

  // =====================================================
  // CLOSE MODAL
  // =====================================================
  const closeModal = () => {
    if (saving) return;
    setShowModal(false);
    setEditingHero(null);
    setForm({ ...initialForm, image: null });
    setPreview(null);
    setFormErrors({});
    // ✅ Clean up object URL to prevent memory leaks
    if (preview) {
      URL.revokeObjectURL(preview);
    }
  };

  // =====================================================
  // FORM CHANGE - FIXED
  // =====================================================
  const handleChange = (event) => {
    const { name, value, type, checked, files } = event.target;

    // ✅ Handle file upload
    if (type === "file") {
      const file = files?.[0] || null;
      if (file) {
        // Validate file type
        const validTypes = ["image/png", "image/jpeg", "image/webp", "image/gif"];
        if (!validTypes.includes(file.type)) {
          showToast("Please upload PNG, JPEG, or WebP image", "error");
          return;
        }
        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
          showToast("Image size should be less than 5MB", "error");
          return;
        }
        
        // ✅ Store the File object
        setForm((prev) => ({ ...prev, image: file }));
        setPreview(URL.createObjectURL(file));
        setFormErrors((prev) => ({ ...prev, image: undefined }));
      }
      return;
    }

    // ✅ Handle checkbox
    if (type === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: checked }));
      return;
    }

    // ✅ Handle text inputs
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // =====================================================
  // SUBMIT - FIXED
  // =====================================================
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!validateForm()) {
      showToast("Please fill all required fields", "error");
      return;
    }

    try {
      setSaving(true);
      
      // ✅ Create FormData
      const formData = new FormData();
      
      // ✅ Append image ONLY if it's a File object
      if (form.image && form.image instanceof File) {
        formData.append("image", form.image);
        console.log("✅ Image file attached:", form.image.name);
      } else if (!editingHero) {
        // For new heroes, if no image, throw error
        throw new Error("Image is required for new hero");
      }
      
      // ✅ Append other fields
      formData.append("title", form.title || "");
      formData.append("subtitle", form.subtitle || "");
      formData.append("description", form.description || "");
      formData.append("buttonText", form.buttonText || "");
      formData.append("buttonLink", form.buttonLink || "");
      formData.append("isActive", String(form.isActive));

      // ✅ Log what we're sending
      console.log("📤 Sending FormData:");
      for (let [key, value] of formData.entries()) {
        if (key === "image" && value instanceof File) {
          console.log(`   ${key}: ${value.name} (${value.size} bytes)`);
        } else {
          console.log(`   ${key}: ${value}`);
        }
      }

      let response;
      if (editingHero) {
        response = await updateHero(editingHero.id, formData);
        showToast("Hero banner updated successfully");
      } else {
        response = await createHero(formData);
        showToast("Hero banner created successfully");
      }

      console.log("✅ Response:", response);
      
      await loadHeroes();
      closeModal();
    } catch (error) {
      console.error("❌ Save Hero Error:", error);
      showToast(
        error.response?.data?.message || error.message || "Failed to save hero",
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
      await toggleHero(id);
      await loadHeroes();
      showToast("Hero status updated successfully");
    } catch (error) {
      console.error("Toggle Hero Error:", error);
      showToast(
        error.response?.data?.message || "Failed to update hero status",
        "error"
      );
    }
  };

  // =====================================================
  // DELETE
  // =====================================================
  const handleDelete = async (id) => {
    setDeleteConfirm(id);
  };

  const confirmDelete = async () => {
    try {
      await deleteHero(deleteConfirm);
      await loadHeroes();
      showToast("Hero banner deleted successfully");
    } catch (error) {
      console.error("Delete Hero Error:", error);
      showToast(
        error.response?.data?.message || "Failed to delete hero",
        "error"
      );
    } finally {
      setDeleteConfirm(null);
    }
  };

  // =====================================================
  // RENDER
  // =====================================================
  return (
    <div className="cms-page">
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
          <h2>Hero Banners</h2>
          <p>Manage the main hero section of your FIYA Builders website.</p>
        </div>
        <button type="button" className="primary-btn" onClick={openCreate}>
          <Plus size={17} strokeWidth={2} />
          <span>Add Hero</span>
        </button>
      </div>

      {/* HERO TABLE */}
      <div className="cms-card">
        {loading ? (
          <div className="cms-loading">
            <Loader2 size={24} className="spinner" />
            <span>Loading hero banners...</span>
          </div>
        ) : heroes.length === 0 ? (
          <div className="cms-empty">
            <div className="empty-icon">
              <ImagePlus size={38} strokeWidth={1.5} />
            </div>
            <h3>No hero banners yet</h3>
            <p>Add your first hero banner to get started.</p>
            <button type="button" className="primary-btn" onClick={openCreate}>
              <Plus size={17} />
              <span>Add Hero</span>
            </button>
          </div>
        ) : (
          <div className="cms-table-wrapper">
            <table className="cms-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Content</th>
                  <th>CTA</th>
                  <th>Status</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {heroes.map((hero) => (
                  <tr key={hero.id}>
                    <td>
                      <div className="hero-thumb">
                        {hero.image ? (
                          <img
                            src={`${API_URL}${hero.image}`}
                            alt={hero.title || "Hero"}
                            loading="lazy"
                          />
                        ) : (
                          <ImagePlus size={20} />
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="cms-content-cell">
                        <strong>{hero.title || "Untitled"}</strong>
                        {hero.subtitle && <span>{hero.subtitle}</span>}
                      </div>
                    </td>
                    <td>
                      <div className="cms-content-cell">
                        <strong>{hero.buttonText || "No button"}</strong>
                        {hero.buttonLink && <span>{hero.buttonLink}</span>}
                      </div>
                    </td>
                    <td>
                      <button
                        type="button"
                        className={`status-toggle ${
                          hero.isActive ? "active" : "inactive"
                        }`}
                        onClick={() => handleToggle(hero.id)}
                      >
                        <Power size={14} strokeWidth={2} />
                        <span>{hero.isActive ? "Active" : "Inactive"}</span>
                      </button>
                    </td>
                    <td>
                      <div className="cms-actions">
                        <button
                          type="button"
                          className="icon-btn"
                          onClick={() => openEdit(hero)}
                        >
                          <Pencil size={16} />
                        </button>
                        <button
                          type="button"
                          className="icon-btn danger"
                          onClick={() => handleDelete(hero.id)}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
            <h3>Delete Hero Banner</h3>
            <p>Are you sure you want to delete this hero banner? This action cannot be undone.</p>
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
          <div className="cms-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h3>{editingHero ? "Edit Hero" : "Add New Hero"}</h3>
                <p>Configure your website hero banner.</p>
              </div>
              <button
                type="button"
                className="modal-close"
                onClick={closeModal}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} noValidate className="modal-form">
              <div className="modal-body">
                {/* IMAGE */}
                <div className="form-group">
                  <label>
                    Hero Image {!editingHero && <span className="required">*</span>}
                  </label>
                  <div
                    className={`image-upload ${formErrors.image ? "error" : ""}`}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    {preview ? (
                      <div className="image-preview">
                        <img src={preview} alt="Hero preview" />
                        <div className="image-overlay">
                          <span>Click to change image</span>
                        </div>
                      </div>
                    ) : (
                      <div className="image-placeholder">
                        <ImagePlus size={30} strokeWidth={1.5} />
                        <span>Click to upload hero image</span>
                        <small>PNG, JPEG, or WebP (max 5MB)</small>
                        <small>Recommended: 1920 × 800px</small>
                      </div>
                    )}
                    {/* <input
                      ref={fileInputRef}
                      type="file"
                      name="image"
                      accept="image/png,image/jpeg,image/webp,image/gif"
                      onChange={handleChange}
                    /> */}

                    <input
    ref={fileInputRef}
    type="file"
    name="image"
    accept="image/png,image/jpeg,image/webp,image/gif"
    onChange={handleChange}
    // ✅ Add this
    onFocus={() => console.log("📁 File input focused")}
/>
                  </div>
                  {formErrors.image && (
                    <span className="error-text">{formErrors.image}</span>
                  )}
                </div>

                {/* TITLE + SUBTITLE */}
                <div className="form-grid">
                  <div className="form-group">
                    <label>
                      Title <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      placeholder="Building Spaces That Last"
                      value={form.title}
                      onChange={handleChange}
                      className={formErrors.title ? "error" : ""}
                    />
                    {formErrors.title && (
                      <span className="error-text">{formErrors.title}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label>
                      Subtitle <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="subtitle"
                      placeholder="FIYA BUILDERS"
                      value={form.subtitle}
                      onChange={handleChange}
                      className={formErrors.subtitle ? "error" : ""}
                    />
                    {formErrors.subtitle && (
                      <span className="error-text">{formErrors.subtitle}</span>
                    )}
                  </div>
                </div>

                {/* DESCRIPTION */}
                <div className="form-group">
                  <label>
                    Description <span className="required">*</span>
                  </label>
                  <textarea
                    name="description"
                    rows="4"
                    placeholder="Crafting exceptional spaces with quality, precision and trust."
                    value={form.description}
                    onChange={handleChange}
                    className={formErrors.description ? "error" : ""}
                  />
                  {formErrors.description && (
                    <span className="error-text">{formErrors.description}</span>
                  )}
                </div>

                {/* CTA */}
                <div className="form-grid">
                  <div className="form-group">
                    <label>
                      Button Text <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="buttonText"
                      placeholder="Explore Projects"
                      value={form.buttonText}
                      onChange={handleChange}
                      className={formErrors.buttonText ? "error" : ""}
                    />
                    {formErrors.buttonText && (
                      <span className="error-text">{formErrors.buttonText}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label>
                      Button Link <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="buttonLink"
                      placeholder="/projects"
                      value={form.buttonLink}
                      onChange={handleChange}
                      className={formErrors.buttonLink ? "error" : ""}
                    />
                    {formErrors.buttonLink && (
                      <span className="error-text">{formErrors.buttonLink}</span>
                    )}
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
                  <span>Display this hero on the website</span>
                </label>

                {/* FORM ACTIONS */}
                <div className="form-actions">
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
                    ) : editingHero ? (
                      <>
                        <Pencil size={17} />
                        <span>Update Hero</span>
                      </>
                    ) : (
                      <>
                        <Plus size={17} />
                        <span>Create Hero</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;