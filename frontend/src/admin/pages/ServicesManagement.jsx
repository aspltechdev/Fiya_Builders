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
//   getAllServices,
//   createService,
//   updateService,
//   toggleService,
//   deleteService,
// } from "../../services/service.api.js";

// const API_URL =
//   import.meta.env.VITE_API_URL?.replace(
//     "/api",
//     ""
//   ) || "http://localhost:5041";

// const initialForm = {
//   title: "",
//   slug: "",
//   description: "",
//   image: null,
//   icon: "",
//   sortOrder: 0,
//   isActive: true,
// };

// const Services = () => {
//   const [services, setServices] =
//     useState([]);

//   const [loading, setLoading] =
//     useState(true);

//   const [saving, setSaving] =
//     useState(false);

//   const [showModal, setShowModal] =
//     useState(false);

//   const [editingService, setEditingService] =
//     useState(null);

//   const [form, setForm] =
//     useState(initialForm);

//   const [preview, setPreview] =
//     useState(null);

//   useEffect(() => {
//     loadServices();
//   }, []);

//   const loadServices = async () => {
//     try {
//       setLoading(true);

//       const response =
//         await getAllServices();

//       setServices(
//         response.data || []
//       );
//     } catch (error) {
//       console.error(
//         "Load Services Error:",
//         error
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   const openCreate = () => {
//     setEditingService(null);
//     setForm(initialForm);
//     setPreview(null);
//     setShowModal(true);
//   };

//   const openEdit = (service) => {
//     setEditingService(service);

//     setForm({
//       title: service.title || "",
//       slug: service.slug || "",
//       description:
//         service.description || "",
//       image: null,
//       icon: service.icon || "",
//       sortOrder:
//         service.sortOrder || 0,
//       isActive:
//         service.isActive ?? true,
//     });

//     setPreview(
//       service.image
//         ? `${API_URL}${service.image}`
//         : null
//     );

//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setEditingService(null);
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

//   const handleSubmit = async (e) => {
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
//         "slug",
//         form.slug
//       );

//       formData.append(
//         "description",
//         form.description
//       );

//       formData.append(
//         "icon",
//         form.icon
//       );

//       formData.append(
//         "sortOrder",
//         form.sortOrder
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

//       if (editingService) {
//         await updateService(
//           editingService.id,
//           formData
//         );
//       } else {
//         await createService(
//           formData
//         );
//       }

//       await loadServices();
//       closeModal();
//     } catch (error) {
//       console.error(
//         "Save Service Error:",
//         error
//       );

//       alert(
//         error.response?.data
//           ?.message ||
//           "Failed to save service"
//       );
//     } finally {
//       setSaving(false);
//     }
//   };

//   const handleToggle = async (
//     id
//   ) => {
//     try {
//       await toggleService(id);
//       await loadServices();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleDelete = async (
//     id
//   ) => {
//     if (
//       !window.confirm(
//         "Are you sure you want to delete this service?"
//       )
//     ) {
//       return;
//     }

//     try {
//       await deleteService(id);
//       await loadServices();
//     } catch (error) {
//       console.error(error);

//       alert(
//         error.response?.data
//           ?.message ||
//           "Failed to delete service"
//       );
//     }
//   };

//   return (
//     <div className="cms-page">

//       <div className="cms-page-header">

//         <div>
//           <h2>Services</h2>

//           <p>
//             Manage the services displayed on your website.
//           </p>
//         </div>

//         <button
//           className="primary-btn"
//           onClick={openCreate}
//         >
//           <Plus size={17} />
//           Add Service
//         </button>

//       </div>

//       <div className="cms-card">

//         {loading ? (
//           <div className="cms-loading">
//             Loading services...
//           </div>
//         ) : services.length === 0 ? (
//           <div className="cms-empty">

//             <h3>
//               No services found
//             </h3>

//             <p>
//               Add your first service.
//             </p>

//             <button
//               className="primary-btn"
//               onClick={openCreate}
//             >
//               <Plus size={17} />
//               Add Service
//             </button>

//           </div>
//         ) : (
//           <div className="cms-table-wrapper">

//             <table className="cms-table">

//               <thead>
//                 <tr>
//                   <th>Image</th>
//                   <th>Service</th>
//                   <th>Slug</th>
//                   <th>Order</th>
//                   <th>Status</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>

//               <tbody>

//                 {services.map(
//                   (service) => (
//                     <tr
//                       key={
//                         service.id
//                       }
//                     >

//                       <td>
//                         <div className="hero-thumb">

//                           {service.image ? (
//                             <img
//                               src={`${API_URL}${service.image}`}
//                               alt={
//                                 service.title
//                               }
//                             />
//                           ) : (
//                             <ImagePlus
//                               size={20}
//                             />
//                           )}

//                         </div>
//                       </td>

//                       <td>
//                         <div className="cms-content-cell">

//                           <strong>
//                             {
//                               service.title
//                             }
//                           </strong>

//                           <span>
//                             {
//                               service.description ||
//                               "No description"
//                             }
//                           </span>

//                         </div>
//                       </td>

//                       <td>
//                         {service.slug}
//                       </td>

//                       <td>
//                         {service.sortOrder}
//                       </td>

//                       <td>

//                         <button
//                           className={`status-toggle ${
//                             service.isActive
//                               ? "active"
//                               : "inactive"
//                           }`}
//                           onClick={() =>
//                             handleToggle(
//                               service.id
//                             )
//                           }
//                         >
//                           <Power
//                             size={14}
//                           />

//                           {service.isActive
//                             ? "Active"
//                             : "Inactive"}
//                         </button>

//                       </td>

//                       <td>

//                         <div className="cms-actions">

//                           <button
//                             className="icon-btn"
//                             onClick={() =>
//                               openEdit(
//                                 service
//                               )
//                             }
//                           >
//                             <Pencil
//                               size={16}
//                             />
//                           </button>

//                           <button
//                             className="icon-btn danger"
//                             onClick={() =>
//                               handleDelete(
//                                 service.id
//                               )
//                             }
//                           >
//                             <Trash2
//                               size={16}
//                             />
//                           </button>

//                         </div>

//                       </td>

//                     </tr>
//                   )
//                 )}

//               </tbody>

//             </table>

//           </div>
//         )}

//       </div>

//       {showModal && (
//         <div className="modal-overlay">

//           <div className="cms-modal">

//             <div className="modal-header">

//               <div>
//                 <h3>
//                   {editingService
//                     ? "Edit Service"
//                     : "Add Service"}
//                 </h3>

//                 <p>
//                   Manage service content.
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
//                     Service Image
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
//                           Upload service image
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
//                       Title
//                     </label>

//                     <input
//                       type="text"
//                       name="title"
//                       value={
//                         form.title
//                       }
//                       onChange={
//                         handleChange
//                       }
//                       required
//                     />

//                   </div>

//                   <div className="form-group">

//                     <label>
//                       Slug
//                     </label>

//                     <input
//                       type="text"
//                       name="slug"
//                       placeholder="residential-construction"
//                       value={
//                         form.slug
//                       }
//                       onChange={
//                         handleChange
//                       }
//                       required
//                     />

//                   </div>

//                 </div>

//                 <div className="form-group">

//                   <label>
//                     Description
//                   </label>

//                   <textarea
//                     name="description"
//                     rows="5"
//                     value={
//                       form.description
//                     }
//                     onChange={
//                       handleChange
//                     }
//                   />

//                 </div>

//                 <div className="form-grid">

//                   <div className="form-group">

//                     <label>
//                       Icon
//                     </label>

//                     <input
//                       type="text"
//                       name="icon"
//                       placeholder="Building2"
//                       value={
//                         form.icon
//                       }
//                       onChange={
//                         handleChange
//                       }
//                     />

//                   </div>

//                   <div className="form-group">

//                     <label>
//                       Display Order
//                     </label>

//                     <input
//                       type="number"
//                       name="sortOrder"
//                       value={
//                         form.sortOrder
//                       }
//                       onChange={
//                         handleChange
//                       }
//                     />

//                   </div>

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

//                   Show this service
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
//                     : editingService
//                     ? "Update Service"
//                     : "Create Service"}
//                 </button>

//               </div>

//             </form>

//           </div>

//         </div>
//       )}

//     </div>
//   );
// };

// export default Services;


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
  getAllServices,
  createService,
  updateService,
  toggleService,
  deleteService,
} from "../../services/service.api.js";
import "./ServicesManagement.css";

const API_URL =
  import.meta.env.VITE_API_URL?.replace("/api", "") ||
  "http://localhost:5041";

const initialForm = {
  title: "",
  slug: "",
  description: "",
  image: null,
  icon: "",
  sortOrder: 0,
  isActive: true,
};

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingService, setEditingService] = useState(null);
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
  // LOAD SERVICES
  // =====================================================
  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      setLoading(true);
      const response = await getAllServices();
      setServices(response.data || []);
    } catch (error) {
      console.error("Load Services Error:", error);
      showToast(
        error.response?.data?.message || "Failed to load services",
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
    if (!form.slug?.trim()) {
      errors.slug = "Slug is required";
    }
    if (form.slug?.trim() && !/^[a-z0-9-]+$/.test(form.slug)) {
      errors.slug = "Slug can only contain lowercase letters, numbers, and hyphens";
    }
    if (!form.description?.trim()) {
      errors.description = "Description is required";
    }
    if (!editingService && !form.image) {
      errors.image = "Service image is required";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // =====================================================
  // CREATE
  // =====================================================
  const openCreate = () => {
    setEditingService(null);
    setForm(initialForm);
    setPreview(null);
    setFormErrors({});
    setShowModal(true);
  };

  // =====================================================
  // EDIT
  // =====================================================
  const openEdit = (service) => {
    setEditingService(service);
    setForm({
      title: service.title || "",
      slug: service.slug || "",
      description: service.description || "",
      image: null,
      icon: service.icon || "",
      sortOrder: service.sortOrder || 0,
      isActive: service.isActive ?? true,
    });
    setPreview(service.image ? `${API_URL}${service.image}` : null);
    setFormErrors({});
    setShowModal(true);
  };

  // =====================================================
  // CLOSE MODAL
  // =====================================================
  const closeModal = () => {
    if (saving) return;
    setShowModal(false);
    setEditingService(null);
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
        const validTypes = ["image/png", "image/jpeg", "image/webp", "image/svg+xml"];
        if (!validTypes.includes(file.type)) {
          showToast("Please upload PNG, JPEG, WebP, or SVG image", "error");
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
      formData.append("slug", form.slug || "");
      formData.append("description", form.description || "");
      formData.append("icon", form.icon || "");
      formData.append("sortOrder", String(form.sortOrder || 0));
      formData.append("isActive", String(form.isActive));

      if (editingService) {
        await updateService(editingService.id, formData);
        showToast("Service updated successfully");
      } else {
        await createService(formData);
        showToast("Service created successfully");
      }

      await loadServices();
      closeModal();
    } catch (error) {
      console.error("Save Service Error:", error);
      showToast(
        error.response?.data?.message || "Failed to save service",
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
      await toggleService(id);
      await loadServices();
      showToast("Service status updated successfully");
    } catch (error) {
      console.error("Toggle Service Error:", error);
      showToast(
        error.response?.data?.message || "Failed to update service status",
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
      await deleteService(deleteConfirm);
      await loadServices();
      showToast("Service deleted successfully");
    } catch (error) {
      console.error("Delete Service Error:", error);
      showToast(
        error.response?.data?.message || "Failed to delete service",
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
          <h2>Services</h2>
          <p>Manage the services displayed on your website.</p>
        </div>
        <button type="button" className="primary-btn" onClick={openCreate}>
          <Plus size={17} strokeWidth={2} />
          <span>Add Service</span>
        </button>
      </div>

      {/* SERVICES TABLE */}
      <div className="cms-card">
        {loading ? (
          <div className="cms-loading">
            <Loader2 size={24} className="spinner" />
            <span>Loading services...</span>
          </div>
        ) : services.length === 0 ? (
          <div className="cms-empty">
            <div className="empty-icon">
              <ImagePlus size={38} strokeWidth={1.5} />
            </div>
            <h3>No services yet</h3>
            <p>Add your first service to get started.</p>
            <button type="button" className="primary-btn" onClick={openCreate}>
              <Plus size={17} />
              <span>Add Service</span>
            </button>
          </div>
        ) : (
          <div className="cms-table-wrapper">
            <table className="cms-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Service</th>
                  <th>Slug</th>
                  <th>Order</th>
                  <th>Status</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service.id}>
                    <td>
                      <div className="hero-thumb">
                        {service.image ? (
                          <img
                            src={`${API_URL}${service.image}`}
                            alt={service.title || "Service"}
                            loading="lazy"
                          />
                        ) : (
                          <ImagePlus size={20} />
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="cms-content-cell">
                        <strong>{service.title || "Untitled"}</strong>
                        {service.description && <span>{service.description}</span>}
                      </div>
                    </td>
                    <td>
                      <code className="slug-code">{service.slug}</code>
                    </td>
                    <td>
                      <span className="order-badge">{service.sortOrder || 0}</span>
                    </td>
                    <td>
                      <button
                        type="button"
                        className={`status-toggle ${
                          service.isActive ? "active" : "inactive"
                        }`}
                        onClick={() => handleToggle(service.id)}
                      >
                        <Power size={14} strokeWidth={2} />
                        <span>{service.isActive ? "Active" : "Inactive"}</span>
                      </button>
                    </td>
                    <td>
                      <div className="cms-actions">
                        <button
                          type="button"
                          className="icon-btn"
                          onClick={() => openEdit(service)}
                        >
                          <Pencil size={16} />
                        </button>
                        <button
                          type="button"
                          className="icon-btn danger"
                          onClick={() => handleDelete(service.id)}
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
            <h3>Delete Service</h3>
            <p>Are you sure you want to delete this service? This action cannot be undone.</p>
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
                <h3>{editingService ? "Edit Service" : "Add New Service"}</h3>
                <p>Configure your service details.</p>
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
                    Service Image <span className="required">*</span>
                  </label>
                  <div
                    className={`image-upload ${formErrors.image ? "error" : ""}`}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    {preview ? (
                      <div className="image-preview">
                        <img src={preview} alt="Service preview" />
                        <div className="image-overlay">
                          <span>Click to change image</span>
                        </div>
                      </div>
                    ) : (
                      <div className="image-placeholder">
                        <ImagePlus size={30} strokeWidth={1.5} />
                        <span>Click to upload service image</span>
                        <small>PNG, JPEG, WebP, or SVG (max 5MB)</small>
                        <small>Recommended: 800 × 600px</small>
                      </div>
                    )}
                    <input
                      ref={fileInputRef}
                      type="file"
                      name="image"
                      accept="image/png,image/jpeg,image/webp,image/svg+xml"
                      onChange={handleChange}
                    />
                  </div>
                  {formErrors.image && (
                    <span className="error-text">{formErrors.image}</span>
                  )}
                </div>

                {/* TITLE + SLUG */}
                <div className="form-grid">
                  <div className="form-group">
                    <label>
                      Title <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      placeholder="Residential Construction"
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
                      Slug <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="slug"
                      placeholder="residential-construction"
                      value={form.slug}
                      onChange={handleChange}
                      className={formErrors.slug ? "error" : ""}
                    />
                    {formErrors.slug && (
                      <span className="error-text">{formErrors.slug}</span>
                    )}
                    <small className="helper-text">
                      URL-friendly name. Use lowercase letters, numbers, and hyphens.
                    </small>
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
                    placeholder="Description of the service..."
                    value={form.description}
                    onChange={handleChange}
                    className={formErrors.description ? "error" : ""}
                  />
                  {formErrors.description && (
                    <span className="error-text">{formErrors.description}</span>
                  )}
                </div>

                {/* ICON + SORT ORDER */}
                <div className="form-grid">
                  <div className="form-group">
                    <label>Icon</label>
                    <input
                      type="text"
                      name="icon"
                      placeholder="Building2"
                      value={form.icon}
                      onChange={handleChange}
                    />
                    <small className="helper-text">
                      Lucide icon name (e.g., Building2, Home, Wrench)
                    </small>
                  </div>

                  <div className="form-group">
                    <label>Display Order</label>
                    <input
                      type="number"
                      name="sortOrder"
                      placeholder="0"
                      value={form.sortOrder}
                      onChange={handleChange}
                      min="0"
                    />
                    <small className="helper-text">
                      Lower numbers appear first
                    </small>
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
                  <span>Display this service on the website</span>
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
                  ) : editingService ? (
                    <>
                      <Pencil size={17} />
                      <span>Update Service</span>
                    </>
                  ) : (
                    <>
                      <Plus size={17} />
                      <span>Create Service</span>
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

export default Services;