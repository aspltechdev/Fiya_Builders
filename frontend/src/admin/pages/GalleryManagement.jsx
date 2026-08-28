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
// } from "lucide-react";

// import {
//   getAllGallery,
//   createGallery,
//   updateGallery,
//   toggleGallery,
//   deleteGallery,
// } from "../../services/gallery.api.js";

// const API_URL =
//   import.meta.env.VITE_API_URL?.replace(
//     "/api",
//     ""
//   ) || "http://localhost:5041";

// const initialForm = {
//   title: "",
//   category: "",
//   image: null,
//   isActive: true,
// };

// const Gallery = () => {
//   const [gallery, setGallery] =
//     useState([]);

//   const [loading, setLoading] =
//     useState(true);

//   const [saving, setSaving] =
//     useState(false);

//   const [showModal, setShowModal] =
//     useState(false);

//   const [editingItem, setEditingItem] =
//     useState(null);

//   const [form, setForm] =
//     useState(initialForm);

//   const [preview, setPreview] =
//     useState(null);

//   useEffect(() => {
//     loadGallery();
//   }, []);

//   const loadGallery = async () => {
//     try {
//       setLoading(true);

//       const response =
//         await getAllGallery();

//       setGallery(
//         response.data || []
//       );
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const openCreate = () => {
//     setEditingItem(null);
//     setForm(initialForm);
//     setPreview(null);
//     setShowModal(true);
//   };

//   const openEdit = (item) => {
//     setEditingItem(item);

//     setForm({
//       title: item.title || "",
//       category:
//         item.category || "",
//       image: null,
//       isActive:
//         item.isActive ?? true,
//     });

//     setPreview(
//       item.image
//         ? `${API_URL}${item.image}`
//         : null
//     );

//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setEditingItem(null);
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
//         "title",
//         form.title
//       );

//       formData.append(
//         "category",
//         form.category
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

//       if (editingItem) {
//         await updateGallery(
//           editingItem.id,
//           formData
//         );
//       } else {
//         await createGallery(
//           formData
//         );
//       }

//       await loadGallery();
//       closeModal();
//     } catch (error) {
//       console.error(error);

//       alert(
//         error.response?.data
//           ?.message ||
//           "Failed to save gallery item"
//       );
//     } finally {
//       setSaving(false);
//     }
//   };

//   const handleToggle = async (
//     id
//   ) => {
//     try {
//       await toggleGallery(id);
//       await loadGallery();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleDelete = async (
//     id
//   ) => {
//     if (
//       !window.confirm(
//         "Are you sure you want to delete this gallery item?"
//       )
//     ) {
//       return;
//     }

//     try {
//       await deleteGallery(id);
//       await loadGallery();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="cms-page">

//       <div className="cms-page-header">

//         <div>
//           <h2>Gallery</h2>

//           <p>
//             Manage website gallery images.
//           </p>
//         </div>

//         <button
//           className="primary-btn"
//           onClick={openCreate}
//         >
//           <Plus size={17} />
//           Add Image
//         </button>

//       </div>

//       <div className="cms-card">

//         {loading ? (
//           <div className="cms-loading">
//             Loading gallery...
//           </div>
//         ) : gallery.length === 0 ? (
//           <div className="cms-empty">

//             <ImagePlus
//               size={35}
//             />

//             <h3>
//               No gallery images
//             </h3>

//             <p>
//               Add your first image.
//             </p>

//             <button
//               className="primary-btn"
//               onClick={openCreate}
//             >
//               <Plus size={17} />
//               Add Image
//             </button>

//           </div>
//         ) : (
//           <div className="gallery-admin-grid">

//             {gallery.map(
//               (item) => (
//                 <div
//                   className="gallery-admin-card"
//                   key={item.id}
//                 >

//                   <div className="gallery-admin-image">

//                     {item.image ? (
//                       <img
//                         src={`${API_URL}${item.image}`}
//                         alt={
//                           item.title ||
//                           "Gallery"
//                         }
//                       />
//                     ) : (
//                       <ImagePlus
//                         size={25}
//                       />
//                     )}

//                   </div>

//                   <div className="gallery-admin-content">

//                     <div>
//                       <strong>
//                         {
//                           item.title ||
//                           "Untitled"
//                         }
//                       </strong>

//                       <span>
//                         {
//                           item.category ||
//                           "General"
//                         }
//                       </span>
//                     </div>

//                     <div className="cms-actions">

//                       <button
//                         className={`status-toggle ${
//                           item.isActive
//                             ? "active"
//                             : "inactive"
//                         }`}
//                         onClick={() =>
//                           handleToggle(
//                             item.id
//                           )
//                         }
//                       >
//                         <Power
//                           size={13}
//                         />
//                       </button>

//                       <button
//                         className="icon-btn"
//                         onClick={() =>
//                           openEdit(
//                             item
//                           )
//                         }
//                       >
//                         <Pencil
//                           size={15}
//                         />
//                       </button>

//                       <button
//                         className="icon-btn danger"
//                         onClick={() =>
//                           handleDelete(
//                             item.id
//                           )
//                         }
//                       >
//                         <Trash2
//                           size={15}
//                         />
//                       </button>

//                     </div>

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
//                   {editingItem
//                     ? "Edit Gallery"
//                     : "Add Gallery Image"}
//                 </h3>

//                 <p>
//                   Manage gallery content.
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
//                     Image
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
//                           Upload image
//                         </span>
//                       </div>
//                     )}

//                     <input
//                       type="file"
//                       accept="image/*"
//                       onChange={
//                         handleChange
//                       }
//                       required={
//                         !editingItem
//                       }
//                     />

//                   </div>

//                 </div>

//                 <div className="form-group">

//                   <label>
//                     Title
//                   </label>

//                   <input
//                     type="text"
//                     name="title"
//                     placeholder="Luxury Villa"
//                     value={
//                       form.title
//                     }
//                     onChange={
//                       handleChange
//                     }
//                   />

//                 </div>

//                 <div className="form-group">

//                   <label>
//                     Category
//                   </label>

//                   <input
//                     type="text"
//                     name="category"
//                     placeholder="Residential"
//                     value={
//                       form.category
//                     }
//                     onChange={
//                       handleChange
//                     }
//                   />

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

//                   Show on website

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
//                     : editingItem
//                     ? "Update Image"
//                     : "Add Image"}
//                 </button>

//               </div>

//             </form>

//           </div>

//         </div>
//       )}

//     </div>
//   );
// };

// export default Gallery;


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
  getAllGallery,
  createGallery,
  updateGallery,
  toggleGallery,
  deleteGallery,
} from "../../services/gallery.api.js";
import "./GalleryManagement.css";

const API_URL =
  import.meta.env.VITE_API_URL?.replace("/api", "") ||
  "http://localhost:5041";

const initialForm = {
  title: "",
  category: "",
  image: null,
  isActive: true,
};

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
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
  // LOAD GALLERY
  // =====================================================
  useEffect(() => {
    loadGallery();
  }, []);

  const loadGallery = async () => {
    try {
      setLoading(true);
      const response = await getAllGallery();
      setGallery(response.data || []);
    } catch (error) {
      console.error("Load Gallery Error:", error);
      showToast(
        error.response?.data?.message || "Failed to load gallery",
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
    if (!form.category?.trim()) {
      errors.category = "Category is required";
    }
    if (!editingItem && !form.image) {
      errors.image = "Image is required";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // =====================================================
  // CREATE
  // =====================================================
  const openCreate = () => {
    setEditingItem(null);
    setForm(initialForm);
    setPreview(null);
    setFormErrors({});
    setShowModal(true);
  };

  // =====================================================
  // EDIT
  // =====================================================
  const openEdit = (item) => {
    setEditingItem(item);
    setForm({
      title: item.title || "",
      category: item.category || "",
      image: null,
      isActive: item.isActive ?? true,
    });
    setPreview(item.image ? `${API_URL}${item.image}` : null);
    setFormErrors({});
    setShowModal(true);
  };

  // =====================================================
  // CLOSE MODAL
  // =====================================================
  const closeModal = () => {
    if (saving) return;
    setShowModal(false);
    setEditingItem(null);
    setForm(initialForm);
    setPreview(null);
    setFormErrors({});
  };

  // =====================================================
  // FORM CHANGE
  // =====================================================
  const handleChange = (event) => {
    const { name, value, type, checked, files } = event.target;

    // Image upload
    if (type === "file") {
      const file = files?.[0] || null;
      if (file) {
        const validTypes = ["image/png", "image/jpeg", "image/webp"];
        if (!validTypes.includes(file.type)) {
          showToast("Please upload PNG, JPEG, or WebP image", "error");
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

    // Checkbox
    if (type === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: checked }));
      return;
    }

    // Text inputs
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
      
      formData.append("title", form.title || "");
      formData.append("category", form.category || "");
      formData.append("isActive", String(form.isActive));

      if (editingItem) {
        await updateGallery(editingItem.id, formData);
        showToast("Gallery image updated successfully");
      } else {
        await createGallery(formData);
        showToast("Gallery image added successfully");
      }

      await loadGallery();
      closeModal();
    } catch (error) {
      console.error("Save Gallery Error:", error);
      showToast(
        error.response?.data?.message || "Failed to save gallery image",
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
      await toggleGallery(id);
      await loadGallery();
      showToast("Gallery status updated successfully");
    } catch (error) {
      console.error("Toggle Gallery Error:", error);
      showToast(
        error.response?.data?.message || "Failed to update gallery status",
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
      await deleteGallery(deleteConfirm);
      await loadGallery();
      showToast("Gallery image deleted successfully");
    } catch (error) {
      console.error("Delete Gallery Error:", error);
      showToast(
        error.response?.data?.message || "Failed to delete gallery image",
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
          <h2>Gallery</h2>
          <p>Manage website gallery images.</p>
        </div>
        <button type="button" className="primary-btn" onClick={openCreate}>
          <Plus size={17} strokeWidth={2} />
          <span>Add Image</span>
        </button>
      </div>

      {/* GALLERY GRID */}
      <div className="cms-card">
        {loading ? (
          <div className="cms-loading">
            <Loader2 size={24} className="spinner" />
            <span>Loading gallery...</span>
          </div>
        ) : gallery.length === 0 ? (
          <div className="cms-empty">
            <div className="empty-icon">
              <ImagePlus size={38} strokeWidth={1.5} />
            </div>
            <h3>No gallery images</h3>
            <p>Add your first image to get started.</p>
            <button type="button" className="primary-btn" onClick={openCreate}>
              <Plus size={17} />
              <span>Add Image</span>
            </button>
          </div>
        ) : (
          <div className="gallery-admin-grid">
            {gallery.map((item) => (
              <div className="gallery-admin-card" key={item.id}>
                {/* IMAGE */}
                <div className="gallery-admin-image">
                  {item.image ? (
                    <img
                      src={`${API_URL}${item.image}`}
                      alt={item.title || "Gallery"}
                      loading="lazy"
                    />
                  ) : (
                    <ImagePlus size={25} />
                  )}
                </div>

                {/* CONTENT */}
                <div className="gallery-admin-content">
                  <div>
                    <strong>{item.title || "Untitled"}</strong>
                    <span className="category-tag">{item.category || "General"}</span>
                  </div>

                  <div className="gallery-actions">
                    {/* Status Toggle */}
                    <button
                      type="button"
                      className={`status-toggle ${
                        item.isActive ? "active" : "inactive"
                      }`}
                      onClick={() => handleToggle(item.id)}
                      title={item.isActive ? "Click to deactivate" : "Click to activate"}
                    >
                      <Power size={13} strokeWidth={2} />
                      <span>{item.isActive ? "Active" : "Inactive"}</span>
                    </button>

                    {/* Edit Button */}
                    <button
                      type="button"
                      className="icon-btn"
                      title="Edit Gallery Item"
                      onClick={() => openEdit(item)}
                    >
                      <Pencil size={15} />
                    </button>

                    {/* Delete Button */}
                    <button
                      type="button"
                      className="icon-btn danger"
                      title="Delete Gallery Item"
                      onClick={() => handleDelete(item.id)}
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
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
            <h3>Delete Gallery Image</h3>
            <p>Are you sure you want to delete this gallery image? This action cannot be undone.</p>
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

      {/* =================================================
          CREATE/EDIT MODAL - FIXED WITH VISIBLE BUTTONS
      ================================================= */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="cms-modal" onClick={(e) => e.stopPropagation()}>
            {/* MODAL HEADER */}
            <div className="modal-header">
              <div>
                <h3>{editingItem ? "Edit Gallery Image" : "Add Gallery Image"}</h3>
                <p>Configure your gallery image details.</p>
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
                    Gallery Image <span className="required">*</span>
                  </label>
                  <div
                    className={`image-upload ${formErrors.image ? "error" : ""}`}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    {preview ? (
                      <div className="image-preview">
                        <img src={preview} alt="Gallery preview" />
                        <div className="image-overlay">
                          <span>Click to change image</span>
                        </div>
                      </div>
                    ) : (
                      <div className="image-placeholder">
                        <ImagePlus size={30} strokeWidth={1.5} />
                        <span>Click to upload gallery image</span>
                        <small>PNG, JPEG, or WebP (max 5MB)</small>
                        <small>Recommended: 800 × 600px</small>
                      </div>
                    )}
                    <input
                      ref={fileInputRef}
                      type="file"
                      name="image"
                      accept="image/png,image/jpeg,image/webp"
                      onChange={handleChange}
                    />
                  </div>
                  {formErrors.image && (
                    <span className="error-text">{formErrors.image}</span>
                  )}
                </div>

                {/* TITLE */}
                <div className="form-group">
                  <label>
                    Title <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Luxury Villa"
                    value={form.title}
                    onChange={handleChange}
                    className={formErrors.title ? "error" : ""}
                  />
                  {formErrors.title && (
                    <span className="error-text">{formErrors.title}</span>
                  )}
                </div>

                {/* CATEGORY */}
                <div className="form-group">
                  <label>
                    Category <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="category"
                    placeholder="Residential"
                    value={form.category}
                    onChange={handleChange}
                    className={formErrors.category ? "error" : ""}
                  />
                  {formErrors.category && (
                    <span className="error-text">{formErrors.category}</span>
                  )}
                  <small className="helper-text">
                    e.g., Residential, Commercial, Interior, Exterior
                  </small>
                </div>

                {/* ACTIVE */}
                <label className="checkbox-row">
                  <input
                    type="checkbox"
                    name="isActive"
                    checked={form.isActive}
                    onChange={handleChange}
                  />
                  <span>Display this image on the website</span>
                </label>
              </div>

              {/* =============================================
                  FIXED FOOTER WITH BUTTONS - ALWAYS VISIBLE
                  ============================================= */}
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
                  ) : editingItem ? (
                    <>
                      <Pencil size={17} />
                      <span>Update Image</span>
                    </>
                  ) : (
                    <>
                      <Plus size={17} />
                      <span>Add Image</span>
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

export default Gallery;