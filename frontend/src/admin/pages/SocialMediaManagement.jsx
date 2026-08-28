// // // src/pages/admin/SocialMedia/SocialMediaManagement.jsx
// // import { useEffect, useState } from "react";
// // import {
// //   Plus,
// //   Pencil,
// //   Trash2,
// //   Power,
// //   X,
// //   AlertCircle,
// //   CheckCircle2,
// //   Loader2,
// // } from "lucide-react";
// // import {
// //   getAllSocialMediaAdmin,
// //   createSocialMedia,
// //   updateSocialMedia,
// //   toggleSocialMediaStatus,
// //   deleteSocialMedia,
// // } from "../../services/socialMedia.api.js";
// // import "./SocialMediaManagement.css";

// // const SocialMediaManagement = () => {
// //   const [socialMedia, setSocialMedia] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [saving, setSaving] = useState(false);
// //   const [showModal, setShowModal] = useState(false);
// //   const [editingItem, setEditingItem] = useState(null);
// //   const [toast, setToast] = useState(null);
// //   const [deleteConfirm, setDeleteConfirm] = useState(null);

// //   const [form, setForm] = useState({
// //     platform: "",
// //     url: "",
// //     label: "",
// //     icon: "",
// //     isActive: true,
// //     sortOrder: 0,
// //   });

// //   const platformOptions = [
// //     { value: "facebook", label: "Facebook" },
// //     { value: "instagram", label: "Instagram" },
// //     { value: "youtube", label: "YouTube" },
// //     { value: "linkedin", label: "LinkedIn" },
// //     { value: "twitter", label: "Twitter" },
// //     { value: "whatsapp", label: "WhatsApp" },
// //     { value: "telegram", label: "Telegram" },
// //     { value: "pinterest", label: "Pinterest" },
// //     { value: "tiktok", label: "TikTok" },
// //   ];

// //   useEffect(() => {
// //     loadSocialMedia();
// //   }, []);

// //   const loadSocialMedia = async () => {
// //     try {
// //       setLoading(true);
// //       const response = await getAllSocialMediaAdmin();
// //       setSocialMedia(response.data || []);
// //     } catch (error) {
// //       console.error("Error loading social media:", error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const showToast = (message, type = "success") => {
// //     setToast({ message, type });
// //     setTimeout(() => setToast(null), 3000);
// //   };

// //   const openCreate = () => {
// //     setEditingItem(null);
// //     setForm({
// //       platform: "",
// //       url: "",
// //       label: "",
// //       icon: "",
// //       isActive: true,
// //       sortOrder: 0,
// //     });
// //     setShowModal(true);
// //   };

// //   const openEdit = (item) => {
// //     setEditingItem(item);
// //     setForm({
// //       platform: item.platform,
// //       url: item.url,
// //       label: item.label || "",
// //       icon: item.icon || "",
// //       isActive: item.isActive,
// //       sortOrder: item.sortOrder || 0,
// //     });
// //     setShowModal(true);
// //   };

// //   const handleChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     setForm((prev) => ({
// //       ...prev,
// //       [name]: type === "checkbox" ? checked : value,
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setSaving(true);

// //     try {
// //       if (editingItem) {
// //         await updateSocialMedia(editingItem.id, form);
// //         showToast("Social media link updated successfully");
// //       } else {
// //         await createSocialMedia(form);
// //         showToast("Social media link created successfully");
// //       }
// //       await loadSocialMedia();
// //       setShowModal(false);
// //     } catch (error) {
// //       console.error("Error saving social media:", error);
// //       showToast(
// //         error.response?.data?.message || "Failed to save social media link",
// //         "error"
// //       );
// //     } finally {
// //       setSaving(false);
// //     }
// //   };

// //   const handleToggle = async (id) => {
// //     try {
// //       await toggleSocialMediaStatus(id);
// //       await loadSocialMedia();
// //       showToast("Social media status updated successfully");
// //     } catch (error) {
// //       console.error("Error toggling social media:", error);
// //       showToast("Failed to update status", "error");
// //     }
// //   };

// //   const handleDelete = async (id) => {
// //     try {
// //       await deleteSocialMedia(id);
// //       await loadSocialMedia();
// //       showToast("Social media link deleted successfully");
// //     } catch (error) {
// //       console.error("Error deleting social media:", error);
// //       showToast("Failed to delete social media link", "error");
// //     }
// //   };

// //   return (
// //     <div className="fya-social-admin">
// //       {/* Toast */}
// //       {toast && (
// //         <div className={`fya-toast fya-toast--${toast.type}`}>
// //           {toast.type === "success" ? (
// //             <CheckCircle2 size={20} />
// //           ) : (
// //             <AlertCircle size={20} />
// //           )}
// //           <span>{toast.message}</span>
// //           <button onClick={() => setToast(null)}>
// //             <X size={16} />
// //           </button>
// //         </div>
// //       )}

// //       {/* Header */}
// //       <div className="fya-social-admin-header">
// //         <div>
// //           <h2>Social Media Links</h2>
// //           <p>Manage your social media presence across all platforms.</p>
// //         </div>
// //         <button className="fya-btn-primary" onClick={openCreate}>
// //           <Plus size={17} />
// //           <span>Add Social Link</span>
// //         </button>
// //       </div>

// //       {/* List */}
// //       <div className="fya-social-admin-card">
// //         {loading ? (
// //           <div className="fya-social-loading">
// //             <Loader2 size={24} className="fya-spinner" />
// //             <span>Loading social media links...</span>
// //           </div>
// //         ) : socialMedia.length === 0 ? (
// //           <div className="fya-social-empty">
// //             <div className="fya-empty-icon">
// //               <span>🌐</span>
// //             </div>
// //             <h3>No social media links yet</h3>
// //             <p>Add your social media links to connect with your audience.</p>
// //             <button className="fya-btn-primary" onClick={openCreate}>
// //               <Plus size={17} />
// //               <span>Add Social Link</span>
// //             </button>
// //           </div>
// //         ) : (
// //           <div className="fya-social-list">
// //             {socialMedia.map((item) => (
// //               <div className="fya-social-item" key={item.id}>
// //                 <div className="fya-social-item-info">
// //                   <div className="fya-social-item-icon">
// //                     <span className="fya-platform-icon">
// //                       {item.platform?.charAt(0).toUpperCase()}
// //                     </span>
// //                   </div>
// //                   <div>
// //                     <strong className="fya-social-item-platform">
// //                       {item.label || item.platform}
// //                     </strong>
// //                     <span className="fya-social-item-url">{item.url}</span>
// //                   </div>
// //                 </div>
// //                 <div className="fya-social-item-actions">
// //                   <button
// //                     className={`fya-status-toggle ${item.isActive ? "active" : "inactive"}`}
// //                     onClick={() => handleToggle(item.id)}
// //                   >
// //                     <Power size={13} />
// //                     <span>{item.isActive ? "Active" : "Inactive"}</span>
// //                   </button>
// //                   <button
// //                     className="fya-icon-btn"
// //                     onClick={() => openEdit(item)}
// //                   >
// //                     <Pencil size={15} />
// //                   </button>
// //                   <button
// //                     className="fya-icon-btn fya-icon-btn--danger"
// //                     onClick={() => handleDelete(item.id)}
// //                   >
// //                     <Trash2 size={15} />
// //                   </button>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>

// //       {/* Modal */}
// //       {showModal && (
// //         <div className="fya-modal-overlay" onClick={() => setShowModal(false)}>
// //           <div className="fya-modal" onClick={(e) => e.stopPropagation()}>
// //             <div className="fya-modal-header">
// //               <div>
// //                 <h3>{editingItem ? "Edit Social Link" : "Add Social Link"}</h3>
// //                 <p>Add or manage your social media presence.</p>
// //               </div>
// //               <button
// //                 className="fya-modal-close"
// //                 onClick={() => setShowModal(false)}
// //               >
// //                 <X size={20} />
// //               </button>
// //             </div>

// //             <form onSubmit={handleSubmit}>
// //               <div className="fya-modal-body">
// //                 {/* Platform */}
// //                 <div className="fya-form-group">
// //                   <label>
// //                     Platform <span className="fya-required">*</span>
// //                   </label>
// //                   <select
// //                     name="platform"
// //                     value={form.platform}
// //                     onChange={handleChange}
// //                     required
// //                   >
// //                     <option value="">Select platform</option>
// //                     {platformOptions.map((option) => (
// //                       <option key={option.value} value={option.value}>
// //                         {option.label}
// //                       </option>
// //                     ))}
// //                   </select>
// //                 </div>

// //                 {/* URL */}
// //                 <div className="fya-form-group">
// //                   <label>
// //                     URL <span className="fya-required">*</span>
// //                   </label>
// //                   <input
// //                     type="url"
// //                     name="url"
// //                     placeholder="https://www.instagram.com/yourpage"
// //                     value={form.url}
// //                     onChange={handleChange}
// //                     required
// //                   />
// //                 </div>

// //                 {/* Label */}
// //                 <div className="fya-form-group">
// //                   <label>Display Label</label>
// //                   <input
// //                     type="text"
// //                     name="label"
// //                     placeholder="Follow us on Instagram"
// //                     value={form.label}
// //                     onChange={handleChange}
// //                   />
// //                 </div>

// //                 {/* Sort Order */}
// //                 <div className="fya-form-group">
// //                   <label>Sort Order</label>
// //                   <input
// //                     type="number"
// //                     name="sortOrder"
// //                     value={form.sortOrder}
// //                     onChange={handleChange}
// //                     min="0"
// //                   />
// //                 </div>

// //                 {/* Active */}
// //                 <label className="fya-checkbox-row">
// //                   <input
// //                     type="checkbox"
// //                     name="isActive"
// //                     checked={form.isActive}
// //                     onChange={handleChange}
// //                   />
// //                   <span>Active</span>
// //                 </label>
// //               </div>

// //               <div className="fya-modal-footer">
// //                 <button
// //                   type="button"
// //                   className="fya-btn-secondary"
// //                   onClick={() => setShowModal(false)}
// //                 >
// //                   Cancel
// //                 </button>
// //                 <button
// //                   type="submit"
// //                   className="fya-btn-primary"
// //                   disabled={saving}
// //                 >
// //                   {saving ? (
// //                     <>
// //                       <Loader2 size={17} className="fya-spinner" />
// //                       <span>Saving...</span>
// //                     </>
// //                   ) : editingItem ? (
// //                     "Update"
// //                   ) : (
// //                     "Create"
// //                   )}
// //                 </button>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default SocialMediaManagement;


// // src/pages/admin/SocialMedia/SocialMediaManagement.jsx
// import { useEffect, useState } from "react";
// import {
//   Plus,
//   Pencil,
//   Trash2,
//   Power,
//   X,
//   AlertCircle,
//   CheckCircle2,
//   Loader2,
//   Globe,
//   Link2,
//   Hash,
//   Clock,
//   Eye,
//   EyeOff,
// } from "lucide-react";
// import {
//   getAllSocialMediaAdmin,
//   createSocialMedia,
//   updateSocialMedia,
//   toggleSocialMediaStatus,
//   deleteSocialMedia,
// } from "../../services/socialMedia.api.js";
// import "./SocialMediaManagement.css";

// const SocialMediaManagement = () => {
//   const [fyaSocialItems, setFyaSocialItems] = useState([]);
//   const [fyaSocialLoading, setFyaSocialLoading] = useState(true);
//   const [fyaSocialSaving, setFyaSocialSaving] = useState(false);
//   const [fyaSocialModalOpen, setFyaSocialModalOpen] = useState(false);
//   const [fyaSocialEditing, setFyaSocialEditing] = useState(null);
//   const [fyaSocialToast, setFyaSocialToast] = useState(null);
//   const [fyaSocialDeleteConfirm, setFyaSocialDeleteConfirm] = useState(null);

//   const [fyaSocialForm, setFyaSocialForm] = useState({
//     platform: "",
//     url: "",
//     label: "",
//     icon: "",
//     isActive: true,
//     sortOrder: 0,
//   });

//   const fyaPlatformOptions = [
//     { value: "facebook", label: "Facebook", icon: "f" },
//     { value: "instagram", label: "Instagram", icon: "i" },
//     { value: "youtube", label: "YouTube", icon: "y" },
//     { value: "linkedin", label: "LinkedIn", icon: "l" },
//     { value: "twitter", label: "Twitter", icon: "t" },
//     { value: "whatsapp", label: "WhatsApp", icon: "w" },
//     { value: "telegram", label: "Telegram", icon: "t" },
//     { value: "pinterest", label: "Pinterest", icon: "p" },
//     { value: "tiktok", label: "TikTok", icon: "t" },
//   ];

//   useEffect(() => {
//     fyaSocialLoadItems();
//   }, []);

//   const fyaSocialLoadItems = async () => {
//     try {
//       setFyaSocialLoading(true);
//       const response = await getAllSocialMediaAdmin();
//       setFyaSocialItems(response.data || []);
//     } catch (error) {
//       console.error("Error loading social media:", error);
//       fyaSocialShowToast("Failed to load social media links", "error");
//     } finally {
//       setFyaSocialLoading(false);
//     }
//   };

//   const fyaSocialShowToast = (message, type = "success") => {
//     setFyaSocialToast({ message, type });
//     setTimeout(() => setFyaSocialToast(null), 3500);
//   };

//   const fyaSocialOpenCreate = () => {
//     setFyaSocialEditing(null);
//     setFyaSocialForm({
//       platform: "",
//       url: "",
//       label: "",
//       icon: "",
//       isActive: true,
//       sortOrder: 0,
//     });
//     setFyaSocialModalOpen(true);
//   };

//   const fyaSocialOpenEdit = (item) => {
//     setFyaSocialEditing(item);
//     setFyaSocialForm({
//       platform: item.platform,
//       url: item.url,
//       label: item.label || "",
//       icon: item.icon || "",
//       isActive: item.isActive,
//       sortOrder: item.sortOrder || 0,
//     });
//     setFyaSocialModalOpen(true);
//   };

//   const fyaSocialCloseModal = () => {
//     if (fyaSocialSaving) return;
//     setFyaSocialModalOpen(false);
//     setFyaSocialEditing(null);
//   };

//   const fyaSocialHandleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFyaSocialForm((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const fyaSocialHandleSubmit = async (e) => {
//     e.preventDefault();
//     setFyaSocialSaving(true);

//     try {
//       if (fyaSocialEditing) {
//         await updateSocialMedia(fyaSocialEditing.id, fyaSocialForm);
//         fyaSocialShowToast("Social media link updated successfully");
//       } else {
//         await createSocialMedia(fyaSocialForm);
//         fyaSocialShowToast("Social media link created successfully");
//       }
//       await fyaSocialLoadItems();
//       fyaSocialCloseModal();
//     } catch (error) {
//       console.error("Error saving social media:", error);
//       fyaSocialShowToast(
//         error.response?.data?.message || "Failed to save social media link",
//         "error"
//       );
//     } finally {
//       setFyaSocialSaving(false);
//     }
//   };

//   const fyaSocialHandleToggle = async (id) => {
//     try {
//       await toggleSocialMediaStatus(id);
//       await fyaSocialLoadItems();
//       fyaSocialShowToast("Social media status updated successfully");
//     } catch (error) {
//       console.error("Error toggling social media:", error);
//       fyaSocialShowToast("Failed to update status", "error");
//     }
//   };

//   const fyaSocialHandleDelete = async (id) => {
//     try {
//       await deleteSocialMedia(id);
//       await fyaSocialLoadItems();
//       fyaSocialShowToast("Social media link deleted successfully");
//       setFyaSocialDeleteConfirm(null);
//     } catch (error) {
//       console.error("Error deleting social media:", error);
//       fyaSocialShowToast("Failed to delete social media link", "error");
//     }
//   };

//   const fyaSocialGetPlatformColor = (platform) => {
//     const colors = {
//       facebook: "#1877F2",
//       instagram: "#E1306C",
//       youtube: "#FF0000",
//       linkedin: "#0A66C2",
//       twitter: "#1DA1F2",
//       whatsapp: "#25D366",
//       telegram: "#0088CC",
//       pinterest: "#E60023",
//       tiktok: "#000000",
//     };
//     return colors[platform?.toLowerCase()] || "#777777";
//   };

//   return (
//     <div className="fya-social-admin">
//       {/* Toast */}
//       {fyaSocialToast && (
//         <div className={`fya-social-toast fya-social-toast--${fyaSocialToast.type}`}>
//           {fyaSocialToast.type === "success" ? (
//             <CheckCircle2 size={20} />
//           ) : (
//             <AlertCircle size={20} />
//           )}
//           <span className="fya-social-toast-text">{fyaSocialToast.message}</span>
//           <button
//             className="fya-social-toast-close"
//             onClick={() => setFyaSocialToast(null)}
//           >
//             <X size={16} />
//           </button>
//         </div>
//       )}

//       {/* Page Header */}
//       <div className="fya-social-header">
//         <div className="fya-social-header-left">
//           <h2 className="fya-social-title">Social Media Links</h2>
//           <p className="fya-social-subtitle">
//             Manage your social media presence across all platforms.
//           </p>
//         </div>
//         <button className="fya-social-btn fya-social-btn--primary" onClick={fyaSocialOpenCreate}>
//           <Plus size={17} strokeWidth={2} />
//           <span>Add Social Link</span>
//         </button>
//       </div>

//       {/* Main Card */}
//       <div className="fya-social-card">
//         {fyaSocialLoading ? (
//           <div className="fya-social-loading">
//             <Loader2 size={28} className="fya-social-spinner" />
//             <span>Loading social media links...</span>
//           </div>
//         ) : fyaSocialItems.length === 0 ? (
//           <div className="fya-social-empty">
//             <div className="fya-social-empty-icon">
//               <Globe size={40} strokeWidth={1.5} />
//             </div>
//             <h3 className="fya-social-empty-title">No social media links yet</h3>
//             <p className="fya-social-empty-text">
//               Add your social media links to connect with your audience.
//             </p>
//             <button className="fya-social-btn fya-social-btn--primary" onClick={fyaSocialOpenCreate}>
//               <Plus size={17} />
//               <span>Add Social Link</span>
//             </button>
//           </div>
//         ) : (
//           <div className="fya-social-list">
//             {fyaSocialItems.map((item) => (
//               <div className="fya-social-item" key={item.id}>
//                 <div className="fya-social-item-left">
//                   <div
//                     className="fya-social-item-badge"
//                     style={{ backgroundColor: fyaSocialGetPlatformColor(item.platform) }}
//                   >
//                     <span className="fya-social-item-badge-text">
//                       {item.platform?.charAt(0).toUpperCase()}
//                     </span>
//                   </div>
//                   <div className="fya-social-item-info">
//                     <div className="fya-social-item-name">
//                       <strong className="fya-social-item-label">
//                         {item.label || item.platform}
//                       </strong>
//                       <span className="fya-social-item-platform">
//                         {item.platform}
//                       </span>
//                     </div>
//                     <a
//                       href={item.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="fya-social-item-url"
//                     >
//                       <Link2 size={12} />
//                       <span>{item.url}</span>
//                     </a>
//                   </div>
//                 </div>

//                 <div className="fya-social-item-right">
//                   <button
//                     className={`fya-social-status ${
//                       item.isActive ? "fya-social-status--active" : "fya-social-status--inactive"
//                     }`}
//                     onClick={() => fyaSocialHandleToggle(item.id)}
//                   >
//                     {item.isActive ? (
//                       <>
//                         <Eye size={13} />
//                         <span>Active</span>
//                       </>
//                     ) : (
//                       <>
//                         <EyeOff size={13} />
//                         <span>Inactive</span>
//                       </>
//                     )}
//                   </button>

//                   <button
//                     className="fya-social-action fya-social-action--edit"
//                     onClick={() => fyaSocialOpenEdit(item)}
//                     title="Edit"
//                   >
//                     <Pencil size={15} />
//                   </button>

//                   <button
//                     className="fya-social-action fya-social-action--delete"
//                     onClick={() => setFyaSocialDeleteConfirm(item.id)}
//                     title="Delete"
//                   >
//                     <Trash2 size={15} />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Delete Confirmation */}
//       {fyaSocialDeleteConfirm && (
//         <div
//           className="fya-social-overlay"
//           onClick={() => setFyaSocialDeleteConfirm(null)}
//         >
//           <div className="fya-social-confirm" onClick={(e) => e.stopPropagation()}>
//             <div className="fya-social-confirm-icon">
//               <AlertCircle size={32} strokeWidth={1.5} />
//             </div>
//             <h3 className="fya-social-confirm-title">Delete Social Link</h3>
//             <p className="fya-social-confirm-text">
//               Are you sure you want to delete this social media link?
//               This action cannot be undone.
//             </p>
//             <div className="fya-social-confirm-actions">
//               <button
//                 className="fya-social-btn fya-social-btn--secondary"
//                 onClick={() => setFyaSocialDeleteConfirm(null)}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="fya-social-btn fya-social-btn--danger"
//                 onClick={() => fyaSocialHandleDelete(fyaSocialDeleteConfirm)}
//               >
//                 <Trash2 size={16} />
//                 <span>Delete</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Create/Edit Modal */}
//       {fyaSocialModalOpen && (
//         <div className="fya-social-overlay" onClick={fyaSocialCloseModal}>
//           <div className="fya-social-modal" onClick={(e) => e.stopPropagation()}>
//             <div className="fya-social-modal-header">
//               <div className="fya-social-modal-header-left">
//                 <h3 className="fya-social-modal-title">
//                   {fyaSocialEditing ? "Edit Social Link" : "Add Social Link"}
//                 </h3>
//                 <p className="fya-social-modal-subtitle">
//                   {fyaSocialEditing
//                     ? "Update your social media presence."
//                     : "Add a new social media platform."}
//                 </p>
//               </div>
//               <button
//                 className="fya-social-modal-close"
//                 onClick={fyaSocialCloseModal}
//               >
//                 <X size={20} />
//               </button>
//             </div>

//             <form className="fya-social-form" onSubmit={fyaSocialHandleSubmit}>
//               <div className="fya-social-modal-body">
//                 {/* Platform */}
//                 <div className="fya-social-field">
//                   <label className="fya-social-field-label">
//                     Platform <span className="fya-social-required">*</span>
//                   </label>
//                   <select
//                     className="fya-social-field-input"
//                     name="platform"
//                     value={fyaSocialForm.platform}
//                     onChange={fyaSocialHandleChange}
//                     required
//                   >
//                     <option value="">Select platform</option>
//                     {fyaPlatformOptions.map((option) => (
//                       <option key={option.value} value={option.value}>
//                         {option.label}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* URL */}
//                 <div className="fya-social-field">
//                   <label className="fya-social-field-label">
//                     URL <span className="fya-social-required">*</span>
//                   </label>
//                   <input
//                     className="fya-social-field-input"
//                     type="url"
//                     name="url"
//                     placeholder="https://www.instagram.com/yourpage"
//                     value={fyaSocialForm.url}
//                     onChange={fyaSocialHandleChange}
//                     required
//                   />
//                 </div>

//                 {/* Display Label */}
//                 <div className="fya-social-field">
//                   <label className="fya-social-field-label">Display Label</label>
//                   <input
//                     className="fya-social-field-input"
//                     type="text"
//                     name="label"
//                     placeholder="Follow us on Instagram"
//                     value={fyaSocialForm.label}
//                     onChange={fyaSocialHandleChange}
//                   />
//                 </div>

//                 {/* Sort Order */}
//                 <div className="fya-social-field">
//                   <label className="fya-social-field-label">Sort Order</label>
//                   <input
//                     className="fya-social-field-input"
//                     type="number"
//                     name="sortOrder"
//                     value={fyaSocialForm.sortOrder}
//                     onChange={fyaSocialHandleChange}
//                     min="0"
//                     placeholder="0"
//                   />
//                 </div>

//                 {/* Active Status */}
//                 <label className="fya-social-checkbox">
//                   <input
//                     type="checkbox"
//                     name="isActive"
//                     checked={fyaSocialForm.isActive}
//                     onChange={fyaSocialHandleChange}
//                   />
//                   <span className="fya-social-checkbox-label">Active</span>
//                 </label>
//               </div>

//               <div className="fya-social-modal-footer">
//                 <button
//                   type="button"
//                   className="fya-social-btn fya-social-btn--secondary"
//                   onClick={fyaSocialCloseModal}
//                   disabled={fyaSocialSaving}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="fya-social-btn fya-social-btn--primary"
//                   disabled={fyaSocialSaving}
//                 >
//                   {fyaSocialSaving ? (
//                     <>
//                       <Loader2 size={17} className="fya-social-spinner" />
//                       <span>Saving...</span>
//                     </>
//                   ) : fyaSocialEditing ? (
//                     <>
//                       <Pencil size={17} />
//                       <span>Update</span>
//                     </>
//                   ) : (
//                     <>
//                       <Plus size={17} />
//                       <span>Create</span>
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

// export default SocialMediaManagement;

// src/pages/admin/SocialMedia/SocialMediaManagement.jsx
import { useEffect, useState } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  Power,
  X,
  AlertCircle,
  CheckCircle2,
  Loader2,
  Globe,
  Link2,
  Hash,
  Clock,
  Eye,
  EyeOff,
} from "lucide-react";
import {
  getAllSocialMediaAdmin,
  createSocialMedia,
  updateSocialMedia,
  toggleSocialMediaStatus,
  deleteSocialMedia,
} from "../../services/socialMedia.api.js";
import "./SocialMediaManagement.css";

const SocialMediaManagement = () => {
  const [fyaSocialItems, setFyaSocialItems] = useState([]);
  const [fyaSocialLoading, setFyaSocialLoading] = useState(true);
  const [fyaSocialSaving, setFyaSocialSaving] = useState(false);
  const [fyaSocialModalOpen, setFyaSocialModalOpen] = useState(false);
  const [fyaSocialEditing, setFyaSocialEditing] = useState(null);
  const [fyaSocialToast, setFyaSocialToast] = useState(null);
  const [fyaSocialDeleteConfirm, setFyaSocialDeleteConfirm] = useState(null);

  const [fyaSocialForm, setFyaSocialForm] = useState({
    platform: "",
    url: "",
    label: "",
    icon: "",
    isActive: true,
    sortOrder: 0,
  });

  const fyaPlatformOptions = [
    { value: "facebook", label: "Facebook", icon: "f" },
    { value: "instagram", label: "Instagram", icon: "i" },
    { value: "youtube", label: "YouTube", icon: "y" },
    { value: "linkedin", label: "LinkedIn", icon: "l" },
    { value: "twitter", label: "Twitter", icon: "t" },
    { value: "whatsapp", label: "WhatsApp", icon: "w" },
    { value: "telegram", label: "Telegram", icon: "t" },
    { value: "pinterest", label: "Pinterest", icon: "p" },
    { value: "tiktok", label: "TikTok", icon: "t" },
  ];

  useEffect(() => {
    fyaSocialLoadItems();
  }, []);

  const fyaSocialLoadItems = async () => {
    try {
      setFyaSocialLoading(true);
      const response = await getAllSocialMediaAdmin();
      setFyaSocialItems(response.data || []);
    } catch (error) {
      console.error("Error loading social media:", error);
      fyaSocialShowToast("Failed to load social media links", "error");
    } finally {
      setFyaSocialLoading(false);
    }
  };

  const fyaSocialShowToast = (message, type = "success") => {
    setFyaSocialToast({ message, type });
    setTimeout(() => setFyaSocialToast(null), 3500);
  };

  const fyaSocialOpenCreate = () => {
    setFyaSocialEditing(null);
    setFyaSocialForm({
      platform: "",
      url: "",
      label: "",
      icon: "",
      isActive: true,
      sortOrder: 0,
    });
    setFyaSocialModalOpen(true);
  };

  const fyaSocialOpenEdit = (item) => {
    setFyaSocialEditing(item);
    setFyaSocialForm({
      platform: item.platform,
      url: item.url,
      label: item.label || "",
      icon: item.icon || "",
      isActive: item.isActive,
      sortOrder: item.sortOrder || 0,
    });
    setFyaSocialModalOpen(true);
  };

  const fyaSocialCloseModal = () => {
    if (fyaSocialSaving) return;
    setFyaSocialModalOpen(false);
    setFyaSocialEditing(null);
  };

  const fyaSocialHandleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFyaSocialForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const fyaSocialHandleSubmit = async (e) => {
    e.preventDefault();
    setFyaSocialSaving(true);

    try {
      // ✅ Ensure sortOrder is a number and handle empty values
      const formData = {
        platform: fyaSocialForm.platform,
        url: fyaSocialForm.url,
        label: fyaSocialForm.label || null,
        icon: fyaSocialForm.icon || null,
        isActive: fyaSocialForm.isActive === true,
        sortOrder: fyaSocialForm.sortOrder !== "" && fyaSocialForm.sortOrder !== null
          ? Number(fyaSocialForm.sortOrder)
          : 0,
      };

      if (fyaSocialEditing) {
        await updateSocialMedia(fyaSocialEditing.id, formData);
        fyaSocialShowToast("Social media link updated successfully");
      } else {
        await createSocialMedia(formData);
        fyaSocialShowToast("Social media link created successfully");
      }
      await fyaSocialLoadItems();
      fyaSocialCloseModal();
    } catch (error) {
      console.error("Error saving social media:", error);
      fyaSocialShowToast(
        error.response?.data?.message || "Failed to save social media link",
        "error"
      );
    } finally {
      setFyaSocialSaving(false);
    }
  };

  const fyaSocialHandleToggle = async (id) => {
    try {
      await toggleSocialMediaStatus(id);
      await fyaSocialLoadItems();
      fyaSocialShowToast("Social media status updated successfully");
    } catch (error) {
      console.error("Error toggling social media:", error);
      fyaSocialShowToast("Failed to update status", "error");
    }
  };

  const fyaSocialHandleDelete = async (id) => {
    try {
      await deleteSocialMedia(id);
      await fyaSocialLoadItems();
      fyaSocialShowToast("Social media link deleted successfully");
      setFyaSocialDeleteConfirm(null);
    } catch (error) {
      console.error("Error deleting social media:", error);
      fyaSocialShowToast("Failed to delete social media link", "error");
    }
  };

  const fyaSocialGetPlatformColor = (platform) => {
    const colors = {
      facebook: "#1877F2",
      instagram: "#E1306C",
      youtube: "#FF0000",
      linkedin: "#0A66C2",
      twitter: "#1DA1F2",
      whatsapp: "#25D366",
      telegram: "#0088CC",
      pinterest: "#E60023",
      tiktok: "#000000",
    };
    return colors[platform?.toLowerCase()] || "#777777";
  };

  return (
    <div className="fya-social-admin">
      {/* Toast */}
      {fyaSocialToast && (
        <div className={`fya-social-toast fya-social-toast--${fyaSocialToast.type}`}>
          {fyaSocialToast.type === "success" ? (
            <CheckCircle2 size={20} />
          ) : (
            <AlertCircle size={20} />
          )}
          <span className="fya-social-toast-text">{fyaSocialToast.message}</span>
          <button
            className="fya-social-toast-close"
            onClick={() => setFyaSocialToast(null)}
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* Page Header */}
      <div className="fya-social-header">
        <div className="fya-social-header-left">
          <h2 className="fya-social-title">Social Media Links</h2>
          <p className="fya-social-subtitle">
            Manage your social media presence across all platforms.
          </p>
        </div>
        <button className="fya-social-btn fya-social-btn--primary" onClick={fyaSocialOpenCreate}>
          <Plus size={17} strokeWidth={2} />
          <span>Add Social Link</span>
        </button>
      </div>

      {/* Main Card */}
      <div className="fya-social-card">
        {fyaSocialLoading ? (
          <div className="fya-social-loading">
            <Loader2 size={28} className="fya-social-spinner" />
            <span>Loading social media links...</span>
          </div>
        ) : fyaSocialItems.length === 0 ? (
          <div className="fya-social-empty">
            <div className="fya-social-empty-icon">
              <Globe size={40} strokeWidth={1.5} />
            </div>
            <h3 className="fya-social-empty-title">No social media links yet</h3>
            <p className="fya-social-empty-text">
              Add your social media links to connect with your audience.
            </p>
            <button className="fya-social-btn fya-social-btn--primary" onClick={fyaSocialOpenCreate}>
              <Plus size={17} />
              <span>Add Social Link</span>
            </button>
          </div>
        ) : (
          <div className="fya-social-list">
            {fyaSocialItems.map((item) => (
              <div className="fya-social-item" key={item.id}>
                <div className="fya-social-item-left">
                  <div
                    className="fya-social-item-badge"
                    style={{ backgroundColor: fyaSocialGetPlatformColor(item.platform) }}
                  >
                    <span className="fya-social-item-badge-text">
                      {item.platform?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="fya-social-item-info">
                    <div className="fya-social-item-name">
                      <strong className="fya-social-item-label">
                        {item.label || item.platform}
                      </strong>
                      <span className="fya-social-item-platform">
                        {item.platform}
                      </span>
                    </div>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fya-social-item-url"
                    >
                      <Link2 size={12} />
                      <span>{item.url}</span>
                    </a>
                  </div>
                </div>

                <div className="fya-social-item-right">
                  <button
                    className={`fya-social-status ${
                      item.isActive ? "fya-social-status--active" : "fya-social-status--inactive"
                    }`}
                    onClick={() => fyaSocialHandleToggle(item.id)}
                  >
                    {item.isActive ? (
                      <>
                        <Eye size={13} />
                        <span>Active</span>
                      </>
                    ) : (
                      <>
                        <EyeOff size={13} />
                        <span>Inactive</span>
                      </>
                    )}
                  </button>

                  <button
                    className="fya-social-action fya-social-action--edit"
                    onClick={() => fyaSocialOpenEdit(item)}
                    title="Edit"
                  >
                    <Pencil size={15} />
                  </button>

                  <button
                    className="fya-social-action fya-social-action--delete"
                    onClick={() => setFyaSocialDeleteConfirm(item.id)}
                    title="Delete"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Delete Confirmation */}
      {fyaSocialDeleteConfirm && (
        <div
          className="fya-social-overlay"
          onClick={() => setFyaSocialDeleteConfirm(null)}
        >
          <div className="fya-social-confirm" onClick={(e) => e.stopPropagation()}>
            <div className="fya-social-confirm-icon">
              <AlertCircle size={32} strokeWidth={1.5} />
            </div>
            <h3 className="fya-social-confirm-title">Delete Social Link</h3>
            <p className="fya-social-confirm-text">
              Are you sure you want to delete this social media link?
              This action cannot be undone.
            </p>
            <div className="fya-social-confirm-actions">
              <button
                className="fya-social-btn fya-social-btn--secondary"
                onClick={() => setFyaSocialDeleteConfirm(null)}
              >
                Cancel
              </button>
              <button
                className="fya-social-btn fya-social-btn--danger"
                onClick={() => fyaSocialHandleDelete(fyaSocialDeleteConfirm)}
              >
                <Trash2 size={16} />
                <span>Delete</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create/Edit Modal */}
      {fyaSocialModalOpen && (
        <div className="fya-social-overlay" onClick={fyaSocialCloseModal}>
          <div className="fya-social-modal" onClick={(e) => e.stopPropagation()}>
            <div className="fya-social-modal-header">
              <div className="fya-social-modal-header-left">
                <h3 className="fya-social-modal-title">
                  {fyaSocialEditing ? "Edit Social Link" : "Add Social Link"}
                </h3>
                <p className="fya-social-modal-subtitle">
                  {fyaSocialEditing
                    ? "Update your social media presence."
                    : "Add a new social media platform."}
                </p>
              </div>
              <button
                className="fya-social-modal-close"
                onClick={fyaSocialCloseModal}
              >
                <X size={20} />
              </button>
            </div>

            <form className="fya-social-form" onSubmit={fyaSocialHandleSubmit}>
              <div className="fya-social-modal-body">
                {/* Platform */}
                <div className="fya-social-field">
                  <label className="fya-social-field-label">
                    Platform <span className="fya-social-required">*</span>
                  </label>
                  <select
                    className="fya-social-field-input"
                    name="platform"
                    value={fyaSocialForm.platform}
                    onChange={fyaSocialHandleChange}
                    required
                  >
                    <option value="">Select platform</option>
                    {fyaPlatformOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* URL */}
                <div className="fya-social-field">
                  <label className="fya-social-field-label">
                    URL <span className="fya-social-required">*</span>
                  </label>
                  <input
                    className="fya-social-field-input"
                    type="url"
                    name="url"
                    placeholder="https://www.instagram.com/yourpage"
                    value={fyaSocialForm.url}
                    onChange={fyaSocialHandleChange}
                    required
                  />
                </div>

                {/* Display Label */}
                <div className="fya-social-field">
                  <label className="fya-social-field-label">Display Label</label>
                  <input
                    className="fya-social-field-input"
                    type="text"
                    name="label"
                    placeholder="Follow us on Instagram"
                    value={fyaSocialForm.label}
                    onChange={fyaSocialHandleChange}
                  />
                </div>

                {/* Sort Order */}
                <div className="fya-social-field">
                  <label className="fya-social-field-label">Sort Order</label>
                  <input
                    className="fya-social-field-input"
                    type="number"
                    name="sortOrder"
                    value={fyaSocialForm.sortOrder}
                    onChange={fyaSocialHandleChange}
                    min="0"
                    placeholder="0"
                  />
                </div>

                {/* Active Status */}
                <label className="fya-social-checkbox">
                  <input
                    type="checkbox"
                    name="isActive"
                    checked={fyaSocialForm.isActive}
                    onChange={fyaSocialHandleChange}
                  />
                  <span className="fya-social-checkbox-label">Active</span>
                </label>
              </div>

              <div className="fya-social-modal-footer">
                <button
                  type="button"
                  className="fya-social-btn fya-social-btn--secondary"
                  onClick={fyaSocialCloseModal}
                  disabled={fyaSocialSaving}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="fya-social-btn fya-social-btn--primary"
                  disabled={fyaSocialSaving}
                >
                  {fyaSocialSaving ? (
                    <>
                      <Loader2 size={17} className="fya-social-spinner" />
                      <span>Saving...</span>
                    </>
                  ) : fyaSocialEditing ? (
                    <>
                      <Pencil size={17} />
                      <span>Update</span>
                    </>
                  ) : (
                    <>
                      <Plus size={17} />
                      <span>Create</span>
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

export default SocialMediaManagement;