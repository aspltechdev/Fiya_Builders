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
//   getAllProjects,
//   createProject,
//   updateProject,
//   toggleProject,
//   deleteProject,
// } from "../../services/project.api.js";

// const API_URL =
//   import.meta.env.VITE_API_URL?.replace(
//     "/api",
//     ""
//   ) || "http://localhost:5000";

// const initialForm = {
//   title: "",
//   slug: "",
//   category: "",
//   location: "",
//   description: "",
//   featuredImage: null,
//   isActive: true,
// };

// const Projects = () => {
//   const [projects, setProjects] =
//     useState([]);

//   const [loading, setLoading] =
//     useState(true);

//   const [saving, setSaving] =
//     useState(false);

//   const [showModal, setShowModal] =
//     useState(false);

//   const [editingProject, setEditingProject] =
//     useState(null);

//   const [form, setForm] =
//     useState(initialForm);

//   const [preview, setPreview] =
//     useState(null);

//   useEffect(() => {
//     loadProjects();
//   }, []);

//   const loadProjects = async () => {
//     try {
//       setLoading(true);

//       const response =
//         await getAllProjects();

//       setProjects(
//         response.data || []
//       );
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const openCreate = () => {
//     setEditingProject(null);
//     setForm(initialForm);
//     setPreview(null);
//     setShowModal(true);
//   };

//   const openEdit = (project) => {
//     setEditingProject(project);

//     setForm({
//       title: project.title || "",
//       slug: project.slug || "",
//       category:
//         project.category || "",
//       location:
//         project.location || "",
//       description:
//         project.description || "",
//       featuredImage: null,
//       isActive:
//         project.isActive ?? true,
//     });

//     setPreview(
//       project.featuredImage
//         ? `${API_URL}${project.featuredImage}`
//         : null
//     );

//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setEditingProject(null);
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
//         featuredImage: file,
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
//         "slug",
//         form.slug
//       );

//       formData.append(
//         "category",
//         form.category
//       );

//       formData.append(
//         "location",
//         form.location
//       );

//       formData.append(
//         "description",
//         form.description
//       );

//       formData.append(
//         "isActive",
//         form.isActive
//       );

//       if (form.featuredImage) {
//         formData.append(
//           "featuredImage",
//           form.featuredImage
//         );
//       }

//       if (editingProject) {
//         await updateProject(
//           editingProject.id,
//           formData
//         );
//       } else {
//         await createProject(
//           formData
//         );
//       }

//       await loadProjects();
//       closeModal();
//     } catch (error) {
//       console.error(error);

//       alert(
//         error.response?.data
//           ?.message ||
//           "Failed to save project"
//       );
//     } finally {
//       setSaving(false);
//     }
//   };

//   const handleToggle = async (
//     id
//   ) => {
//     try {
//       await toggleProject(id);
//       await loadProjects();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleDelete = async (
//     id
//   ) => {
//     if (
//       !window.confirm(
//         "Are you sure you want to delete this project?"
//       )
//     ) {
//       return;
//     }

//     try {
//       await deleteProject(id);
//       await loadProjects();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="cms-page">

//       <div className="cms-page-header">

//         <div>
//           <h2>Projects</h2>

//           <p>
//             Manage FIYA Builders projects.
//           </p>
//         </div>

//         <button
//           className="primary-btn"
//           onClick={openCreate}
//         >
//           <Plus size={17} />
//           Add Project
//         </button>

//       </div>

//       <div className="cms-card">

//         {loading ? (
//           <div className="cms-loading">
//             Loading projects...
//           </div>
//         ) : projects.length === 0 ? (
//           <div className="cms-empty">

//             <h3>
//               No projects found
//             </h3>

//             <p>
//               Add your first project.
//             </p>

//             <button
//               className="primary-btn"
//               onClick={openCreate}
//             >
//               <Plus size={17} />
//               Add Project
//             </button>

//           </div>
//         ) : (
//           <div className="cms-table-wrapper">

//             <table className="cms-table">

//               <thead>
//                 <tr>
//                   <th>
//                     Image
//                   </th>
//                   <th>
//                     Project
//                   </th>
//                   <th>
//                     Category
//                   </th>
//                   <th>
//                     Location
//                   </th>
//                   <th>
//                     Status
//                   </th>
//                   <th>
//                     Actions
//                   </th>
//                 </tr>
//               </thead>

//               <tbody>

//                 {projects.map(
//                   (project) => (
//                     <tr
//                       key={
//                         project.id
//                       }
//                     >

//                       <td>

//                         <div className="hero-thumb">

//                           {project.featuredImage ? (
//                             <img
//                               src={`${API_URL}${project.featuredImage}`}
//                               alt={
//                                 project.title
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
//                               project.title
//                             }
//                           </strong>

//                           <span>
//                             {
//                               project.slug
//                             }
//                           </span>

//                         </div>

//                       </td>

//                       <td>
//                         {
//                           project.category ||
//                           "—"
//                         }
//                       </td>

//                       <td>
//                         {
//                           project.location ||
//                           "—"
//                         }
//                       </td>

//                       <td>

//                         <button
//                           className={`status-toggle ${
//                             project.isActive
//                               ? "active"
//                               : "inactive"
//                           }`}
//                           onClick={() =>
//                             handleToggle(
//                               project.id
//                             )
//                           }
//                         >
//                           <Power
//                             size={14}
//                           />

//                           {project.isActive
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
//                                 project
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
//                                 project.id
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
//                   {editingProject
//                     ? "Edit Project"
//                     : "Add Project"}
//                 </h3>

//                 <p>
//                   Manage project information.
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
//                     Featured Image
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
//                           Upload project image
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
//                       Project Title
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
//                       placeholder="luxury-villa"
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

//                 <div className="form-grid">

//                   <div className="form-group">

//                     <label>
//                       Category
//                     </label>

//                     <input
//                       type="text"
//                       name="category"
//                       placeholder="Residential"
//                       value={
//                         form.category
//                       }
//                       onChange={
//                         handleChange
//                       }
//                     />

//                   </div>

//                   <div className="form-group">

//                     <label>
//                       Location
//                     </label>

//                     <input
//                       type="text"
//                       name="location"
//                       placeholder="Pondicherry"
//                       value={
//                         form.location
//                       }
//                       onChange={
//                         handleChange
//                       }
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

//                   Show this project
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
//                     : editingProject
//                     ? "Update Project"
//                     : "Create Project"}
//                 </button>

//               </div>

//             </form>

//           </div>

//         </div>
//       )}

//     </div>
//   );
// };

// export default Projects;

















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
  getAllProjects,
  createProject,
  updateProject,
  toggleProject,
  deleteProject,
} from "../../services/project.api.js";
import "./ProjectsManagement.css";

const API_URL =
  import.meta.env.VITE_API_URL?.replace("/api", "") ||
  "http://localhost:5000";

const initialForm = {
  title: "",
  slug: "",
  category: "",
  location: "",
  description: "",
  featuredImage: null,
  isActive: true,
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
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
  // LOAD PROJECTS
  // =====================================================
  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      setLoading(true);
      const response = await getAllProjects();
      setProjects(response.data || []);
    } catch (error) {
      console.error("Load Projects Error:", error);
      showToast(
        error.response?.data?.message || "Failed to load projects",
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
    if (!form.category?.trim()) {
      errors.category = "Category is required";
    }
    if (!form.location?.trim()) {
      errors.location = "Location is required";
    }
    if (!form.description?.trim()) {
      errors.description = "Description is required";
    }
    if (!editingProject && !form.featuredImage) {
      errors.featuredImage = "Featured image is required";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // =====================================================
  // CREATE
  // =====================================================
  const openCreate = () => {
    setEditingProject(null);
    setForm(initialForm);
    setPreview(null);
    setFormErrors({});
    setShowModal(true);
  };

  // =====================================================
  // EDIT
  // =====================================================
  const openEdit = (project) => {
    setEditingProject(project);
    setForm({
      title: project.title || "",
      slug: project.slug || "",
      category: project.category || "",
      location: project.location || "",
      description: project.description || "",
      featuredImage: null,
      isActive: project.isActive ?? true,
    });
    setPreview(project.featuredImage ? `${API_URL}${project.featuredImage}` : null);
    setFormErrors({});
    setShowModal(true);
  };

  // =====================================================
  // CLOSE MODAL
  // =====================================================
  const closeModal = () => {
    if (saving) return;
    setShowModal(false);
    setEditingProject(null);
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
        setForm((prev) => ({ ...prev, featuredImage: file }));
        setPreview(URL.createObjectURL(file));
        setFormErrors((prev) => ({ ...prev, featuredImage: undefined }));
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
      
      if (form.featuredImage && form.featuredImage instanceof File) {
        formData.append("featuredImage", form.featuredImage);
      }
      
      formData.append("title", form.title || "");
      formData.append("slug", form.slug || "");
      formData.append("category", form.category || "");
      formData.append("location", form.location || "");
      formData.append("description", form.description || "");
      formData.append("isActive", String(form.isActive));

      if (editingProject) {
        await updateProject(editingProject.id, formData);
        showToast("Project updated successfully");
      } else {
        await createProject(formData);
        showToast("Project created successfully");
      }

      await loadProjects();
      closeModal();
    } catch (error) {
      console.error("Save Project Error:", error);
      showToast(
        error.response?.data?.message || "Failed to save project",
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
      await toggleProject(id);
      await loadProjects();
      showToast("Project status updated successfully");
    } catch (error) {
      console.error("Toggle Project Error:", error);
      showToast(
        error.response?.data?.message || "Failed to update project status",
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
      await deleteProject(deleteConfirm);
      await loadProjects();
      showToast("Project deleted successfully");
    } catch (error) {
      console.error("Delete Project Error:", error);
      showToast(
        error.response?.data?.message || "Failed to delete project",
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
          <h2>Projects</h2>
          <p>Manage FIYA Builders projects.</p>
        </div>
        <button type="button" className="primary-btn" onClick={openCreate}>
          <Plus size={17} strokeWidth={2} />
          <span>Add Project</span>
        </button>
      </div>

      {/* PROJECTS TABLE */}
      <div className="cms-card">
        {loading ? (
          <div className="cms-loading">
            <Loader2 size={24} className="spinner" />
            <span>Loading projects...</span>
          </div>
        ) : projects.length === 0 ? (
          <div className="cms-empty">
            <div className="empty-icon">
              <ImagePlus size={38} strokeWidth={1.5} />
            </div>
            <h3>No projects yet</h3>
            <p>Add your first project to get started.</p>
            <button type="button" className="primary-btn" onClick={openCreate}>
              <Plus size={17} />
              <span>Add Project</span>
            </button>
          </div>
        ) : (
          <div className="cms-table-wrapper">
            <table className="cms-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Project</th>
                  <th>Category</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id}>
                    {/* IMAGE */}
                    <td>
                      <div className="hero-thumb">
                        {project.featuredImage ? (
                          <img
                            src={`${API_URL}${project.featuredImage}`}
                            alt={project.title || "Project"}
                            loading="lazy"
                          />
                        ) : (
                          <ImagePlus size={20} />
                        )}
                      </div>
                    </td>

                    {/* CONTENT */}
                    <td>
                      <div className="cms-content-cell">
                        <strong>{project.title || "Untitled"}</strong>
                        <span>{project.slug}</span>
                      </div>
                    </td>

                    {/* CATEGORY */}
                    <td>
                      <span className="category-badge">{project.category || "—"}</span>
                    </td>

                    {/* LOCATION */}
                    <td>
                      <span className="location-badge">{project.location || "—"}</span>
                    </td>

                    {/* STATUS */}
                    <td>
                      <button
                        type="button"
                        className={`status-toggle ${
                          project.isActive ? "active" : "inactive"
                        }`}
                        onClick={() => handleToggle(project.id)}
                      >
                        <Power size={14} strokeWidth={2} />
                        <span>{project.isActive ? "Active" : "Inactive"}</span>
                      </button>
                    </td>

                    {/* ACTIONS */}
                    <td>
                      <div className="cms-actions">
                        <button
                          type="button"
                          className="icon-btn"
                          onClick={() => openEdit(project)}
                        >
                          <Pencil size={16} />
                        </button>
                        <button
                          type="button"
                          className="icon-btn danger"
                          onClick={() => handleDelete(project.id)}
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
            <h3>Delete Project</h3>
            <p>Are you sure you want to delete this project? This action cannot be undone.</p>
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
                <h3>{editingProject ? "Edit Project" : "Add New Project"}</h3>
                <p>Configure your project details.</p>
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
                    Featured Image <span className="required">*</span>
                  </label>
                  <div
                    className={`image-upload ${formErrors.featuredImage ? "error" : ""}`}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    {preview ? (
                      <div className="image-preview">
                        <img src={preview} alt="Project preview" />
                        <div className="image-overlay">
                          <span>Click to change image</span>
                        </div>
                      </div>
                    ) : (
                      <div className="image-placeholder">
                        <ImagePlus size={30} strokeWidth={1.5} />
                        <span>Click to upload project image</span>
                        <small>PNG, JPEG, or WebP (max 5MB)</small>
                        <small>Recommended: 1200 × 800px</small>
                      </div>
                    )}
                    <input
                      ref={fileInputRef}
                      type="file"
                      name="featuredImage"
                      accept="image/png,image/jpeg,image/webp"
                      onChange={handleChange}
                    />
                  </div>
                  {formErrors.featuredImage && (
                    <span className="error-text">{formErrors.featuredImage}</span>
                  )}
                </div>

                {/* TITLE + SLUG */}
                <div className="form-grid">
                  <div className="form-group">
                    <label>
                      Project Title <span className="required">*</span>
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

                  <div className="form-group">
                    <label>
                      Slug <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="slug"
                      placeholder="luxury-villa"
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

                {/* CATEGORY + LOCATION */}
                <div className="form-grid">
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
                  </div>

                  <div className="form-group">
                    <label>
                      Location <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      placeholder="Pondicherry"
                      value={form.location}
                      onChange={handleChange}
                      className={formErrors.location ? "error" : ""}
                    />
                    {formErrors.location && (
                      <span className="error-text">{formErrors.location}</span>
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
                    placeholder="Description of the project..."
                    value={form.description}
                    onChange={handleChange}
                    className={formErrors.description ? "error" : ""}
                  />
                  {formErrors.description && (
                    <span className="error-text">{formErrors.description}</span>
                  )}
                </div>

                {/* ACTIVE */}
                <label className="checkbox-row">
                  <input
                    type="checkbox"
                    name="isActive"
                    checked={form.isActive}
                    onChange={handleChange}
                  />
                  <span>Display this project on the website</span>
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
                  ) : editingProject ? (
                    <>
                      <Pencil size={17} />
                      <span>Update Project</span>
                    </>
                  ) : (
                    <>
                      <Plus size={17} />
                      <span>Create Project</span>
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

export default Projects;