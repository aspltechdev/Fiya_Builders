// import {
//   useEffect,
//   useState,
// } from "react";

// import {
//   Eye,
//   Trash2,
//   X,
//   Mail,
//   Phone,
//   CalendarDays,
//   User,
// } from "lucide-react";

// import {
//   getAllEnquiries,
//   updateEnquiryStatus,
//   deleteEnquiry,
// } from "../../services/enquiry.api.js";

// const Enquiries = () => {
//   const [
//     enquiries,
//     setEnquiries,
//   ] = useState([]);

//   const [loading, setLoading] =
//     useState(true);

//   const [
//     selectedEnquiry,
//     setSelectedEnquiry,
//   ] = useState(null);

//   /*
//   |--------------------------------------------------------------------------
//   | Load Enquiries
//   |--------------------------------------------------------------------------
//   */

//   useEffect(() => {
//     loadEnquiries();
//   }, []);

//   const loadEnquiries = async () => {
//     try {
//       setLoading(true);

//       const response =
//         await getAllEnquiries();

//       setEnquiries(
//         response.data || []
//       );
//     } catch (error) {
//       console.error(
//         "Load Enquiries Error:",
//         error
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   /*
//   |--------------------------------------------------------------------------
//   | View Enquiry
//   |--------------------------------------------------------------------------
//   */

//   const handleView = (enquiry) => {
//     setSelectedEnquiry(
//       enquiry
//     );
//   };

//   /*
//   |--------------------------------------------------------------------------
//   | Close View
//   |--------------------------------------------------------------------------
//   */

//   const closeView = () => {
//     setSelectedEnquiry(null);
//   };

//   /*
//   |--------------------------------------------------------------------------
//   | Update Status
//   |--------------------------------------------------------------------------
//   */

//   const handleStatusChange =
//     async (
//       id,
//       status
//     ) => {
//       try {
//         await updateEnquiryStatus(
//           id,
//           status
//         );

//         await loadEnquiries();

//         if (
//           selectedEnquiry?.id === id
//         ) {
//           setSelectedEnquiry(
//             (prev) => ({
//               ...prev,
//               status,
//             })
//           );
//         }
//       } catch (error) {
//         console.error(
//           "Update Status Error:",
//           error
//         );

//         alert(
//           error.response?.data
//             ?.message ||
//             "Failed to update enquiry"
//         );
//       }
//     };

//   /*
//   |--------------------------------------------------------------------------
//   | Delete
//   |--------------------------------------------------------------------------
//   */

//   const handleDelete = async (
//     id
//   ) => {
//     const confirmed =
//       window.confirm(
//         "Are you sure you want to delete this enquiry?"
//       );

//     if (!confirmed) {
//       return;
//     }

//     try {
//       await deleteEnquiry(id);

//       setSelectedEnquiry(
//         null
//       );

//       await loadEnquiries();
//     } catch (error) {
//       console.error(
//         "Delete Enquiry Error:",
//         error
//       );

//       alert(
//         error.response?.data
//           ?.message ||
//           "Failed to delete enquiry"
//       );
//     }
//   };

//   /*
//   |--------------------------------------------------------------------------
//   | Format Date
//   |--------------------------------------------------------------------------
//   */

//   const formatDate = (date) => {
//     if (!date) {
//       return "—";
//     }

//     return new Date(
//       date
//     ).toLocaleDateString(
//       "en-IN",
//       {
//         day: "2-digit",
//         month: "short",
//         year: "numeric",
//       }
//     );
//   };

//   /*
//   |--------------------------------------------------------------------------
//   | Status Class
//   |--------------------------------------------------------------------------
//   */

//   const getStatusClass = (
//     status
//   ) => {
//     return (
//       status
//         ?.toLowerCase()
//         .replace(
//           /\s+/g,
//           "-"
//         ) || "new"
//     );
//   };

//   return (
//     <div className="cms-page">

//       {/* =================================
//           HEADER
//       ================================= */}

//       <div className="cms-page-header">

//         <div>
//           <h2>
//             Enquiries
//           </h2>

//           <p>
//             Manage enquiries received from your website.
//           </p>
//         </div>

//         <div className="enquiry-count">
//           <Mail size={16} />

//           <span>
//             {enquiries.length}{" "}
//             Enquiries
//           </span>
//         </div>

//       </div>


//       {/* =================================
//           CONTENT
//       ================================= */}

//       <div className="cms-card">

//         {loading ? (
//           <div className="cms-loading">
//             Loading enquiries...
//           </div>
//         ) : enquiries.length ===
//           0 ? (
//           <div className="cms-empty">

//             <Mail
//               size={35}
//             />

//             <h3>
//               No enquiries yet
//             </h3>

//             <p>
//               Website enquiries will appear here.
//             </p>

//           </div>
//         ) : (
//           <div className="cms-table-wrapper">

//             <table className="cms-table">

//               <thead>

//                 <tr>

//                   <th>
//                     Name
//                   </th>

//                   <th>
//                     Contact
//                   </th>

//                   <th>
//                     Subject
//                   </th>

//                   <th>
//                     Date
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

//                 {enquiries.map(
//                   (enquiry) => (
//                     <tr
//                       key={
//                         enquiry.id
//                       }
//                     >

//                       {/* NAME */}

//                       <td>

//                         <div className="enquiry-name">

//                           <div className="enquiry-avatar">
//                             {enquiry.name
//                               ?.charAt(
//                                 0
//                               )
//                               ?.toUpperCase()}
//                           </div>

//                           <div>

//                             <strong>
//                               {
//                                 enquiry.name
//                               }
//                             </strong>

//                             {enquiry.company && (
//                               <span>
//                                 {
//                                   enquiry.company
//                                 }
//                               </span>
//                             )}

//                           </div>

//                         </div>

//                       </td>


//                       {/* CONTACT */}

//                       <td>

//                         <div className="enquiry-contact">

//                           {enquiry.email && (
//                             <span>
//                               <Mail
//                                 size={12}
//                               />

//                               {
//                                 enquiry.email
//                               }
//                             </span>
//                           )}

//                           {enquiry.phone && (
//                             <span>
//                               <Phone
//                                 size={12}
//                               />

//                               {
//                                 enquiry.phone
//                               }
//                             </span>
//                           )}

//                         </div>

//                       </td>


//                       {/* SUBJECT */}

//                       <td>

//                         <span className="enquiry-subject">

//                           {
//                             enquiry.subject ||
//                             "General Enquiry"
//                           }

//                         </span>

//                       </td>


//                       {/* DATE */}

//                       <td>
//                         {formatDate(
//                           enquiry.createdAt
//                         )}
//                       </td>


//                       {/* STATUS */}

//                       <td>

//                         <select
//                           className={`enquiry-status ${getStatusClass(
//                             enquiry.status
//                           )}`}
//                           value={
//                             enquiry.status ||
//                             "NEW"
//                           }
//                           onChange={(
//                             e
//                           ) =>
//                             handleStatusChange(
//                               enquiry.id,
//                               e.target.value
//                             )
//                           }
//                         >

//                           <option value="NEW">
//                             New
//                           </option>

//                           <option value="CONTACTED">
//                             Contacted
//                           </option>

//                           <option value="IN_PROGRESS">
//                             In Progress
//                           </option>

//                           <option value="COMPLETED">
//                             Completed
//                           </option>

//                           <option value="CANCELLED">
//                             Cancelled
//                           </option>

//                         </select>

//                       </td>


//                       {/* ACTIONS */}

//                       <td>

//                         <div className="cms-actions">

//                           <button
//                             className="icon-btn"
//                             title="View"
//                             onClick={() =>
//                               handleView(
//                                 enquiry
//                               )
//                             }
//                           >
//                             <Eye
//                               size={16}
//                             />
//                           </button>

//                           <button
//                             className="icon-btn danger"
//                             title="Delete"
//                             onClick={() =>
//                               handleDelete(
//                                 enquiry.id
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


//       {/* =================================
//           VIEW ENQUIRY MODAL
//       ================================= */}

//       {selectedEnquiry && (
//         <div className="modal-overlay">

//           <div className="cms-modal enquiry-modal">

//             {/* HEADER */}

//             <div className="modal-header">

//               <div>
//                 <h3>
//                   Enquiry Details
//                 </h3>

//                 <p>
//                   Review customer enquiry.
//                 </p>
//               </div>

//               <button
//                 className="modal-close"
//                 onClick={
//                   closeView
//                 }
//               >
//                 <X size={20} />
//               </button>

//             </div>


//             {/* BODY */}

//             <div className="modal-body">

//               <div className="enquiry-profile">

//                 <div className="enquiry-profile-avatar">
//                   {selectedEnquiry.name
//                     ?.charAt(
//                       0
//                     )
//                     ?.toUpperCase()}
//                 </div>

//                 <div>

//                   <h3>
//                     {
//                       selectedEnquiry.name
//                     }
//                   </h3>

//                   <p>
//                     {
//                       selectedEnquiry.company ||
//                       "Website Enquiry"
//                     }
//                   </p>

//                 </div>

//               </div>


//               {/* CONTACT */}

//               <div className="enquiry-details-grid">

//                 <div className="enquiry-detail">

//                   <Mail size={17} />

//                   <div>

//                     <span>
//                       Email
//                     </span>

//                     <strong>
//                       {
//                         selectedEnquiry.email ||
//                         "—"
//                       }
//                     </strong>

//                   </div>

//                 </div>


//                 <div className="enquiry-detail">

//                   <Phone size={17} />

//                   <div>

//                     <span>
//                       Phone
//                     </span>

//                     <strong>
//                       {
//                         selectedEnquiry.phone ||
//                         "—"
//                       }
//                     </strong>

//                   </div>

//                 </div>


//                 <div className="enquiry-detail">

//                   <CalendarDays
//                     size={17}
//                   />

//                   <div>

//                     <span>
//                       Received
//                     </span>

//                     <strong>
//                       {formatDate(
//                         selectedEnquiry.createdAt
//                       )}
//                     </strong>

//                   </div>

//                 </div>


//                 <div className="enquiry-detail">

//                   <User size={17} />

//                   <div>

//                     <span>
//                       Status
//                     </span>

//                     <strong>
//                       {
//                         selectedEnquiry.status ||
//                         "NEW"
//                       }
//                     </strong>

//                   </div>

//                 </div>

//               </div>


//               {/* SUBJECT */}

//               <div className="enquiry-message-block">

//                 <span>
//                   Subject
//                 </span>

//                 <h4>
//                   {
//                     selectedEnquiry.subject ||
//                     "General Enquiry"
//                   }
//                 </h4>

//               </div>


//               {/* MESSAGE */}

//               <div className="enquiry-message-block">

//                 <span>
//                   Message
//                 </span>

//                 <p>
//                   {
//                     selectedEnquiry.message ||
//                     "No message provided."
//                   }
//                 </p>

//               </div>


//               {/* STATUS */}

//               <div className="form-group">

//                 <label>
//                   Update Status
//                 </label>

//                 <select
//                   value={
//                     selectedEnquiry.status ||
//                     "NEW"
//                   }
//                   onChange={(e) =>
//                     handleStatusChange(
//                       selectedEnquiry.id,
//                       e.target.value
//                     )
//                   }
//                   style={{
//                     width: "100%",
//                     height: "42px",
//                     border:
//                       "1px solid #dfe1e4",
//                     borderRadius:
//                       "7px",
//                     padding:
//                       "0 12px",
//                     background:
//                       "#fff",
//                   }}
//                 >

//                   <option value="NEW">
//                     New
//                   </option>

//                   <option value="CONTACTED">
//                     Contacted
//                   </option>

//                   <option value="IN_PROGRESS">
//                     In Progress
//                   </option>

//                   <option value="COMPLETED">
//                     Completed
//                   </option>

//                   <option value="CANCELLED">
//                     Cancelled
//                   </option>

//                 </select>

//               </div>

//             </div>


//             {/* FOOTER */}

//             <div className="modal-footer">

//               <button
//                 type="button"
//                 className="secondary-btn"
//                 onClick={
//                   closeView
//                 }
//               >
//                 Close
//               </button>

//               <button
//                 type="button"
//                 className="danger-btn"
//                 onClick={() =>
//                   handleDelete(
//                     selectedEnquiry.id
//                   )
//                 }
//               >
//                 <Trash2 size={15} />

//                 Delete Enquiry
//               </button>

//             </div>

//           </div>

//         </div>
//       )}

//     </div>
//   );
// };

// export default Enquiries;


// src/pages/admin/Enquiries/Enquiries.jsx
import {
  useEffect,
  useState,
  useCallback,
} from "react";

import {
  Eye,
  Trash2,
  X,
  Mail,
  Phone,
  CalendarDays,
  User,
  Building2,
  CheckCircle,
  Clock,
  AlertCircle,
  Loader2,
  Inbox,
  ChevronDown,
} from "lucide-react";

import {
  getAllEnquiries,
  updateEnquiryStatus,
  deleteEnquiry,
} from "../../services/enquiry.api.js";

import "./EnquiriesManagement.css";

const Enquiries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [filterStatus, setFilterStatus] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");
  const [toast, setToast] = useState(null);

  // =====================================================
  // TOAST NOTIFICATION
  // =====================================================
  const showToast = useCallback((message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  }, []);

  // =====================================================
  // LOAD ENQUIRIES
  // =====================================================
  useEffect(() => {
    loadEnquiries();
  }, []);

  const loadEnquiries = async () => {
    try {
      setLoading(true);
      const response = await getAllEnquiries();
      setEnquiries(response.data || []);
    } catch (error) {
      console.error("Load Enquiries Error:", error);
      showToast("Failed to load enquiries", "error");
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // VIEW ENQUIRY
  // =====================================================
  const handleView = (enquiry) => {
    setSelectedEnquiry(enquiry);
    document.body.style.overflow = "hidden";
  };

  // =====================================================
  // CLOSE VIEW
  // =====================================================
  const closeView = () => {
    setSelectedEnquiry(null);
    document.body.style.overflow = "";
  };

  // =====================================================
  // UPDATE STATUS
  // =====================================================
  const handleStatusChange = async (id, status) => {
    try {
      await updateEnquiryStatus(id, status);
      await loadEnquiries();

      if (selectedEnquiry?.id === id) {
        setSelectedEnquiry((prev) => ({ ...prev, status }));
      }

      showToast(`Status updated to ${status.toLowerCase()}`, "success");
    } catch (error) {
      console.error("Update Status Error:", error);
      showToast("Failed to update enquiry", "error");
    }
  };

  // =====================================================
  // DELETE
  // =====================================================
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this enquiry?"
    );

    if (!confirmed) return;

    try {
      await deleteEnquiry(id);
      setSelectedEnquiry(null);
      await loadEnquiries();
      showToast("Enquiry deleted successfully", "success");
    } catch (error) {
      console.error("Delete Enquiry Error:", error);
      showToast("Failed to delete enquiry", "error");
    }
  };

  // =====================================================
  // FORMAT DATE
  // =====================================================
  const formatDate = (date) => {
    if (!date) return "—";
    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatTime = (date) => {
    if (!date) return "";
    return new Date(date).toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // =====================================================
  // STATUS CONFIG
  // =====================================================
  const statusConfig = {
    NEW: { label: "New", icon: AlertCircle, color: "#D71920", bg: "#FEE2E2" },
    CONTACTED: { label: "Contacted", icon: Phone, color: "#D97706", bg: "#FEF3C7" },
    IN_PROGRESS: { label: "In Progress", icon: Clock, color: "#2563EB", bg: "#DBEAFE" },
    COMPLETED: { label: "Completed", icon: CheckCircle, color: "#16A34A", bg: "#DCFCE7" },
    CANCELLED: { label: "Cancelled", icon: X, color: "#6B7280", bg: "#F3F4F6" },
  };

  const getStatusConfig = (status) => {
    return statusConfig[status] || statusConfig.NEW;
  };

  // =====================================================
  // FILTER ENQUIRIES
  // =====================================================
  const filteredEnquiries = enquiries.filter((enquiry) => {
    const matchesStatus = filterStatus === "ALL" || enquiry.status === filterStatus;
    const matchesSearch = 
      enquiry.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enquiry.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enquiry.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enquiry.subject?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // =====================================================
  // STATUS COUNTS
  // =====================================================
  const getStatusCount = (status) => {
    if (status === "ALL") return enquiries.length;
    return enquiries.filter((e) => e.status === status).length;
  };

  // =====================================================
  // RENDER
  // =====================================================
  return (
    <div className="enquiries-cms">
      {/* TOAST */}
      {toast && (
        <div className={`toast-notification ${toast.type}`}>
          {toast.type === "success" ? (
            <CheckCircle size={20} />
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
          <h2>Enquiries</h2>
          <p>Manage and track all customer enquiries from your website.</p>
        </div>
        <div className="enquiry-stats">
          <div className="stat-item">
            <Mail size={16} />
            <span>{enquiries.length} Total</span>
          </div>
          <div className="stat-item stat-new">
            <AlertCircle size={16} />
            <span>{getStatusCount("NEW")} New</span>
          </div>
        </div>
      </div>

      {/* FILTERS */}
      <div className="enquiry-filters">
        <div className="filter-tabs">
          <button
            className={`filter-tab ${filterStatus === "ALL" ? "active" : ""}`}
            onClick={() => setFilterStatus("ALL")}
          >
            All ({getStatusCount("ALL")})
          </button>
          {Object.keys(statusConfig).map((status) => (
            <button
              key={status}
              className={`filter-tab ${filterStatus === status ? "active" : ""}`}
              onClick={() => setFilterStatus(status)}
            >
              {statusConfig[status].label} ({getStatusCount(status)})
            </button>
          ))}
        </div>

        <div className="filter-search">
          <input
            type="text"
            placeholder="Search enquiries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="cms-card">
        {loading ? (
          <div className="cms-loading">
            <Loader2 size={24} className="spinner" />
            <span>Loading enquiries...</span>
          </div>
        ) : filteredEnquiries.length === 0 ? (
          <div className="cms-empty">
            <div className="empty-icon">
              <Inbox size={38} strokeWidth={1.5} />
            </div>
            <h3>No enquiries found</h3>
            <p>
              {searchTerm || filterStatus !== "ALL"
                ? "Try adjusting your filters or search terms."
                : "Website enquiries will appear here."}
            </p>
          </div>
        ) : (
          <div className="enquiry-list">
            {filteredEnquiries.map((enquiry) => {
              const status = getStatusConfig(enquiry.status);
              const StatusIcon = status.icon;

              return (
                <div className="enquiry-card" key={enquiry.id}>
                  {/* Avatar */}
                  <div className="enquiry-avatar">
                    {enquiry.name?.charAt(0)?.toUpperCase() || "?"}
                  </div>

                  {/* Content */}
                  <div className="enquiry-content">
                    <div className="enquiry-header">
                      <div className="enquiry-name-section">
                        <strong className="enquiry-name">{enquiry.name}</strong>
                        {enquiry.company && (
                          <span className="enquiry-company">
                            <Building2 size={12} />
                            {enquiry.company}
                          </span>
                        )}
                      </div>
                      <div className="enquiry-meta">
                        <span className="enquiry-date">
                          {formatDate(enquiry.createdAt)}
                          <span className="enquiry-time">{formatTime(enquiry.createdAt)}</span>
                        </span>
                      </div>
                    </div>

                    <div className="enquiry-contact-info">
                      {enquiry.email && (
                        <span className="contact-item">
                          <Mail size={12} />
                          {enquiry.email}
                        </span>
                      )}
                      {enquiry.phone && (
                        <span className="contact-item">
                          <Phone size={12} />
                          {enquiry.phone}
                        </span>
                      )}
                    </div>

                    <div className="enquiry-subject">
                      <span>{enquiry.subject || "General Enquiry"}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="enquiry-actions">
                    <select
                      className={`status-select ${enquiry.status?.toLowerCase()}`}
                      value={enquiry.status || "NEW"}
                      onChange={(e) =>
                        handleStatusChange(enquiry.id, e.target.value)
                      }
                    >
                      {Object.keys(statusConfig).map((key) => (
                        <option key={key} value={key}>
                          {statusConfig[key].label}
                        </option>
                      ))}
                    </select>

                    <button
                      className="icon-btn view-btn"
                      title="View Details"
                      onClick={() => handleView(enquiry)}
                    >
                      <Eye size={16} />
                    </button>

                    <button
                      className="icon-btn danger"
                      title="Delete"
                      onClick={() => handleDelete(enquiry.id)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* =================================================
          VIEW ENQUIRY MODAL
      ================================================= */}
      {selectedEnquiry && (
        <div className="modal-overlay" onClick={closeView}>
          <div className="enquiry-modal" onClick={(e) => e.stopPropagation()}>
            {/* HEADER */}
            <div className="modal-header">
              <div>
                <h3>Enquiry Details</h3>
                <p>Review and manage customer enquiry.</p>
              </div>
              <button className="modal-close" onClick={closeView}>
                <X size={20} />
              </button>
            </div>

            {/* BODY */}
            <div className="modal-body">
              {/* Profile */}
              <div className="enquiry-profile">
                <div className="enquiry-profile-avatar">
                  {selectedEnquiry.name?.charAt(0)?.toUpperCase()}
                </div>
                <div className="enquiry-profile-info">
                  <h4>{selectedEnquiry.name}</h4>
                  <p>{selectedEnquiry.company || "Website Enquiry"}</p>
                </div>
                <div className="enquiry-profile-status">
                  <span className={`status-badge ${selectedEnquiry.status?.toLowerCase()}`}>
                    {selectedEnquiry.status || "NEW"}
                  </span>
                </div>
              </div>

              {/* Details Grid */}
              <div className="enquiry-details-grid">
                <div className="detail-item">
                  <Mail size={16} />
                  <div>
                    <span>Email</span>
                    <strong>{selectedEnquiry.email || "—"}</strong>
                  </div>
                </div>

                <div className="detail-item">
                  <Phone size={16} />
                  <div>
                    <span>Phone</span>
                    <strong>{selectedEnquiry.phone || "—"}</strong>
                  </div>
                </div>

                <div className="detail-item">
                  <CalendarDays size={16} />
                  <div>
                    <span>Received</span>
                    <strong>{formatDate(selectedEnquiry.createdAt)}</strong>
                  </div>
                </div>

                <div className="detail-item">
                  <Clock size={16} />
                  <div>
                    <span>Time</span>
                    <strong>{formatTime(selectedEnquiry.createdAt)}</strong>
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div className="enquiry-message-block">
                <span className="block-label">Subject</span>
                <h4>{selectedEnquiry.subject || "General Enquiry"}</h4>
              </div>

              {/* Message */}
              <div className="enquiry-message-block">
                <span className="block-label">Message</span>
                <p>{selectedEnquiry.message || "No message provided."}</p>
              </div>

              {/* Status Update */}
              <div className="status-update-section">
                <label>Update Status</label>
                <select
                  className="status-update-select"
                  value={selectedEnquiry.status || "NEW"}
                  onChange={(e) =>
                    handleStatusChange(selectedEnquiry.id, e.target.value)
                  }
                >
                  {Object.keys(statusConfig).map((key) => (
                    <option key={key} value={key}>
                      {statusConfig[key].label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* FOOTER */}
            <div className="modal-footer">
              <button
                type="button"
                className="secondary-btn"
                onClick={closeView}
              >
                Close
              </button>
              <button
                type="button"
                className="danger-btn"
                onClick={() => handleDelete(selectedEnquiry.id)}
              >
                <Trash2 size={15} />
                Delete Enquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Enquiries;