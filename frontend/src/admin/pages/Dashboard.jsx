// // import {
// //   useEffect,
// //   useState,
// // } from "react";

// // import {
// //   BriefcaseBusiness,
// //   Building2,
// //   Images,
// //   MessageSquareQuote,
// //   Mail,
// // } from "lucide-react";

// // import {
// //   getDashboard,
// // } from "../../services/dashboard.api.js";

// // const Dashboard = () => {
// //   const [
// //     dashboard,
// //     setDashboard,
// //   ] = useState(null);

// //   const [
// //     loading,
// //     setLoading,
// //   ] = useState(true);

// //   useEffect(() => {
// //     loadDashboard();
// //   }, []);

// //   const loadDashboard =
// //     async () => {
// //       try {
// //         const response =
// //           await getDashboard();

// //         setDashboard(
// //           response.data
// //         );
// //       } catch (error) {
// //         console.error(
// //           error
// //         );
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //   if (loading) {
// //     return (
// //       <div className="admin-loading">
// //         Loading dashboard...
// //       </div>
// //     );
// //   }

// //   const stats =
// //     dashboard?.stats || {};

// //   const cards = [
// //     {
// //       title: "Services",
// //       value:
// //         stats.services || 0,
// //       icon: BriefcaseBusiness,
// //     },
// //     {
// //       title: "Projects",
// //       value:
// //         stats.projects || 0,
// //       icon: Building2,
// //     },
// //     {
// //       title: "Gallery",
// //       value:
// //         stats.gallery || 0,
// //       icon: Images,
// //     },
// //     {
// //       title: "Testimonials",
// //       value:
// //         stats.testimonials || 0,
// //       icon: MessageSquareQuote,
// //     },
// //     {
// //       title: "Enquiries",
// //       value:
// //         stats.enquiries || 0,
// //       icon: Mail,
// //     },
// //   ];

// //   return (
// //     <div>

// //       <div className="page-title">
// //         <h2>
// //           Dashboard
// //         </h2>

// //         <p>
// //           Here's what's happening with your website.
// //         </p>
// //       </div>

// //       <div className="stats-grid">

// //         {cards.map((card) => {
// //           const Icon =
// //             card.icon;

// //           return (
// //             <div
// //               className="stat-card"
// //               key={
// //                 card.title
// //               }
// //             >

// //               <div className="stat-icon">
// //                 <Icon
// //                   size={21}
// //                 />
// //               </div>

// //               <div>
// //                 <span>
// //                   {card.title}
// //                 </span>

// //                 <strong>
// //                   {card.value}
// //                 </strong>
// //               </div>

// //             </div>
// //           );
// //         })}

// //       </div>

// //       <div className="dashboard-grid">

// //         <div className="admin-card">

// //           <div className="card-header">
// //             <div>
// //               <h3>
// //                 Recent Enquiries
// //               </h3>

// //               <p>
// //                 Latest customer enquiries
// //               </p>
// //             </div>
// //           </div>

// //           {dashboard
// //             ?.recentEnquiries
// //             ?.length ? (
// //             <div className="table-wrapper">

// //               <table>

// //                 <thead>
// //                   <tr>
// //                     <th>
// //                       Name
// //                     </th>

// //                     <th>
// //                       Phone
// //                     </th>

// //                     <th>
// //                       Subject
// //                     </th>

// //                     <th>
// //                       Status
// //                     </th>
// //                   </tr>
// //                 </thead>

// //                 <tbody>

// //                   {dashboard.recentEnquiries.map(
// //                     (item) => (
// //                       <tr
// //                         key={
// //                           item.id
// //                         }
// //                       >
// //                         <td>
// //                           {item.name}
// //                         </td>

// //                         <td>
// //                           {item.phone}
// //                         </td>

// //                         <td>
// //                           {item.subject ||
// //                             "—"}
// //                         </td>

// //                         <td>
// //                           <span
// //                             className={`status-badge ${item.status?.toLowerCase()}`}
// //                           >
// //                             {
// //                               item.status
// //                             }
// //                           </span>
// //                         </td>
// //                       </tr>
// //                     )
// //                   )}

// //                 </tbody>

// //               </table>

// //             </div>
// //           ) : (
// //             <div className="empty-state">
// //               No enquiries yet.
// //             </div>
// //           )}

// //         </div>

// //         <div className="admin-card">

// //           <div className="card-header">
// //             <div>
// //               <h3>
// //                 Recent Projects
// //               </h3>

// //               <p>
// //                 Latest projects added
// //               </p>
// //             </div>
// //           </div>

// //           {dashboard
// //             ?.recentProjects
// //             ?.length ? (
// //             <div className="project-list">

// //               {dashboard.recentProjects.map(
// //                 (project) => (
// //                   <div
// //                     className="project-row"
// //                     key={
// //                       project.id
// //                     }
// //                   >

// //                     <div className="project-thumb">
// //                       {project.featuredImage ? (
// //                         <img
// //                           src={
// //                             project.featuredImage
// //                           }
// //                           alt={
// //                             project.title
// //                           }
// //                         />
// //                       ) : (
// //                         <Building2
// //                           size={20}
// //                         />
// //                       )}
// //                     </div>

// //                     <div>
// //                       <strong>
// //                         {
// //                           project.title
// //                         }
// //                       </strong>

// //                       <span>
// //                         {
// //                           project.category ||
// //                           "Project"
// //                         }
// //                       </span>
// //                     </div>

// //                   </div>
// //                 )
// //               )}

// //             </div>
// //           ) : (
// //             <div className="empty-state">
// //               No projects yet.
// //             </div>
// //           )}

// //         </div>

// //       </div>

// //     </div>
// //   );
// // };

// // export default Dashboard;












// // import { useEffect, useState } from "react";
// // import {
// //   BriefcaseBusiness,
// //   Building2,
// //   Images,
// //   MessageSquareQuote,
// //   Mail,
// //   Bell,
// //   AlertCircle,
// // } from "lucide-react";
// // import { getDashboard } from "../../services/dashboard.api.js";
// // import "./Dashboard.css"

// // const Dashboard = () => {
// //   const [dashboard, setDashboard] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     loadDashboard();
// //   }, []);

// //   const loadDashboard = async () => {
// //     try {
// //       setLoading(true);
// //       setError(null);
// //       const response = await getDashboard();
// //       setDashboard(response.data);
// //     } catch (error) {
// //       console.error("Failed to load dashboard:", error);
// //       setError("Failed to load dashboard data. Please try again.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Loading State
// //   if (loading) {
// //     return (
// //       <div className="admin-dashboard">
// //         <div className="admin-loading">
// //           <div className="loading-spinner" />
// //           <span>Loading dashboard...</span>
// //         </div>
// //       </div>
// //     );
// //   }

// //   // Error State
// //   if (error) {
// //     return (
// //       <div className="admin-dashboard">
// //         <div className="error-state">
// //           <AlertCircle size={48} strokeWidth={1.5} />
// //           <h3>Something went wrong</h3>
// //           <p>{error}</p>
// //           <button onClick={loadDashboard} className="retry-btn">
// //             Try Again
// //           </button>
// //         </div>
// //       </div>
// //     );
// //   }

// //   const stats = dashboard?.stats || {};

// //   const cards = [
// //     {
// //       title: "Services",
// //       value: stats.services || 0,
// //       icon: BriefcaseBusiness,
// //       color: "blue",
// //     },
// //     {
// //       title: "Projects",
// //       value: stats.projects || 0,
// //       icon: Building2,
// //       color: "purple",
// //     },
// //     {
// //       title: "Gallery",
// //       value: stats.gallery || 0,
// //       icon: Images,
// //       color: "green",
// //     },
// //     {
// //       title: "Testimonials",
// //       value: stats.testimonials || 0,
// //       icon: MessageSquareQuote,
// //       color: "orange",
// //     },
// //     {
// //       title: "Enquiries",
// //       value: stats.enquiries || 0,
// //       icon: Mail,
// //       color: "red",
// //     },
// //   ];

// //   return (
// //     <div className="admin-dashboard">
// //       {/* Page Title */}
// //       <div className="page-title">
// //         <h2>Dashboard</h2>
// //         <p>Here's what's happening with your website.</p>
// //       </div>

// //       {/* Stats Grid */}
// //       <div className="stats-grid">
// //         {cards.map((card) => {
// //           const Icon = card.icon;
// //           return (
// //             <div className="stat-card" key={card.title}>
// //               <div className={`stat-icon ${card.color}`}>
// //                 <Icon size={21} strokeWidth={2} />
// //               </div>
// //               <div className="stat-info">
// //                 <span>{card.title}</span>
// //                 <strong>{card.value}</strong>
// //               </div>
// //             </div>
// //           );
// //         })}
// //       </div>

// //       {/* Dashboard Content Grid */}
// //       <div className="dashboard-grid">
// //         {/* Recent Enquiries Card */}
// //         <div className="admin-card">
// //           <div className="card-header">
// //             <div className="card-title">
// //               <h3>Recent Enquiries</h3>
// //               <p>Latest customer enquiries</p>
// //             </div>
// //             <button className="view-all-btn" title="View all enquiries">
// //               View All
// //             </button>
// //           </div>

// //           {dashboard?.recentEnquiries?.length ? (
// //             <div className="table-wrapper">
// //               <table>
// //                 <thead>
// //                   <tr>
// //                     <th>Name</th>
// //                     <th>Phone</th>
// //                     <th>Subject</th>
// //                     <th>Status</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {dashboard.recentEnquiries.map((item) => (
// //                     <tr key={item.id}>
// //                       <td className="table-name">
// //                         <div className="user-cell">
// //                           <div className="user-avatar-small">
// //                             {item.name?.charAt(0)?.toUpperCase() || "?"}
// //                           </div>
// //                           <span>{item.name}</span>
// //                         </div>
// //                       </td>
// //                       <td className="table-phone">
// //                         <a href={`tel:${item.phone}`} className="phone-link">
// //                           {item.phone}
// //                         </a>
// //                       </td>
// //                       <td className="table-subject">
// //                         {item.subject || "—"}
// //                       </td>
// //                       <td>
// //                         <span
// //                           className={`status-badge ${item.status?.toLowerCase() || "new"}`}
// //                         >
// //                           {item.status || "New"}
// //                         </span>
// //                       </td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           ) : (
// //             <div className="empty-state">
// //               <Mail size={40} strokeWidth={1.5} />
// //               <p>No enquiries yet</p>
// //               <span>Customer enquiries will appear here</span>
// //             </div>
// //           )}
// //         </div>

// //         {/* Recent Projects Card */}
// //         <div className="admin-card">
// //           <div className="card-header">
// //             <div className="card-title">
// //               <h3>Recent Projects</h3>
// //               <p>Latest projects added</p>
// //             </div>
// //             <button className="view-all-btn" title="View all projects">
// //               View All
// //             </button>
// //           </div>

// //           {dashboard?.recentProjects?.length ? (
// //             <div className="project-list">
// //               {dashboard.recentProjects.map((project) => (
// //                 <div className="project-row" key={project.id}>
// //                   <div className="project-thumb">
// //                     {project.featuredImage ? (
// //                       <img
// //                         src={project.featuredImage}
// //                         alt={project.title}
// //                         loading="lazy"
// //                         onError={(e) => {
// //                           e.target.style.display = "none";
// //                           e.target.nextSibling.style.display = "flex";
// //                         }}
// //                       />
// //                     ) : null}
// //                     <Building2
// //                       size={20}
// //                       style={{
// //                         display: project.featuredImage ? "none" : "flex",
// //                       }}
// //                     />
// //                   </div>
// //                   <div className="project-info">
// //                     <strong>{project.title}</strong>
// //                     <span>{project.category || "Project"}</span>
// //                   </div>
// //                   <div className="project-arrow">
// //                     <span>→</span>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           ) : (
// //             <div className="empty-state">
// //               <Building2 size={40} strokeWidth={1.5} />
// //               <p>No projects yet</p>
// //               <span>Your projects will appear here</span>
// //             </div>
// //           )}
// //         </div>
// //       </div>

// //       {/* Quick Actions */}
// //       <div className="quick-actions">
// //         <div className="admin-card">
// //           <div className="card-header">
// //             <div className="card-title">
// //               <h3>Quick Actions</h3>
// //               <p>Common tasks and shortcuts</p>
// //             </div>
// //           </div>
// //           <div className="quick-actions-grid">
// //             <button className="quick-action-btn">
// //               <Building2 size={20} />
// //               <span>Add Project</span>
// //             </button>
// //             <button className="quick-action-btn">
// //               <BriefcaseBusiness size={20} />
// //               <span>Add Service</span>
// //             </button>
// //             <button className="quick-action-btn">
// //               <Images size={20} />
// //               <span>Upload Images</span>
// //             </button>
// //             <button className="quick-action-btn">
// //               <MessageSquareQuote size={20} />
// //               <span>Add Testimonial</span>
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;

// // src/pages/admin/Dashboard/Dashboard.jsx
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   BriefcaseBusiness,
//   Building2,
//   Images,
//   MessageSquareQuote,
//   Mail,
//   Bell,
//   AlertCircle,
//   Plus,
//   ArrowRight,
//   TrendingUp,
//   Clock,
//   CheckCircle,
//   XCircle,
//   ExternalLink,
// } from "lucide-react";
// import { getDashboard } from "../../services/dashboard.api.js";
// import "./Dashboard.css";

// const Dashboard = () => {
//   const [fyaDashboard, setFyaDashboard] = useState(null);
//   const [fyaLoading, setFyaLoading] = useState(true);
//   const [fyaError, setFyaError] = useState(null);

//   useEffect(() => {
//     fyaLoadDashboard();
//   }, []);

//   const fyaLoadDashboard = async () => {
//     try {
//       setFyaLoading(true);
//       setFyaError(null);
//       const response = await getDashboard();
//       setFyaDashboard(response.data);
//     } catch (error) {
//       console.error("Failed to load dashboard:", error);
//       setFyaError("Failed to load dashboard data. Please try again.");
//     } finally {
//       setFyaLoading(false);
//     }
//   };

//   // Loading State
//   if (fyaLoading) {
//     return (
//       <div className="fya-dashboard">
//         <div className="fya-dashboard__loading">
//           <div className="fya-dashboard__spinner" />
//           <span>Loading dashboard...</span>
//         </div>
//       </div>
//     );
//   }

//   // Error State
//   if (fyaError) {
//     return (
//       <div className="fya-dashboard">
//         <div className="fya-dashboard__error">
//           <AlertCircle size={48} strokeWidth={1.5} />
//           <h3>Something went wrong</h3>
//           <p>{fyaError}</p>
//           <button onClick={fyaLoadDashboard} className="fya-dashboard__retry">
//             Try Again
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const stats = fyaDashboard?.stats || {};
//   const recentEnquiries = fyaDashboard?.recentEnquiries || [];
//   const recentProjects = fyaDashboard?.recentProjects || [];

//   const statCards = [
//     {
//       id: "services",
//       label: "Services",
//       value: stats.services || 0,
//       icon: BriefcaseBusiness,
//       color: "blue",
//       bg: "#DBEAFE",
//       iconColor: "#2563EB",
//       link: "/admin/services",
//     },
//     {
//       id: "projects",
//       label: "Projects",
//       value: stats.projects || 0,
//       icon: Building2,
//       color: "purple",
//       bg: "#EDE9FE",
//       iconColor: "#7C3AED",
//       link: "/admin/projects",
//     },
//     {
//       id: "gallery",
//       label: "Gallery",
//       value: stats.gallery || 0,
//       icon: Images,
//       color: "green",
//       bg: "#DCFCE7",
//       iconColor: "#16A34A",
//       link: "/admin/gallery",
//     },
//     {
//       id: "testimonials",
//       label: "Testimonials",
//       value: stats.testimonials || 0,
//       icon: MessageSquareQuote,
//       color: "orange",
//       bg: "#FEF3C7",
//       iconColor: "#D97706",
//       link: "/admin/testimonials",
//     },
//     {
//       id: "enquiries",
//       label: "Enquiries",
//       value: stats.enquiries || 0,
//       icon: Mail,
//       color: "red",
//       bg: "#FEE2E2",
//       iconColor: "#DC2626",
//       link: "/admin/enquiries",
//     },
//   ];

//   const getStatusBadge = (status) => {
//     const statusMap = {
//       NEW: { label: "New", icon: Clock, className: "fya-enquiry-status--new" },
//       CONTACTED: { label: "Contacted", icon: Bell, className: "fya-enquiry-status--contacted" },
//       IN_PROGRESS: { label: "In Progress", icon: TrendingUp, className: "fya-enquiry-status--progress" },
//       COMPLETED: { label: "Completed", icon: CheckCircle, className: "fya-enquiry-status--completed" },
//       CANCELLED: { label: "Cancelled", icon: XCircle, className: "fya-enquiry-status--cancelled" },
//     };
//     return statusMap[status] || statusMap.NEW;
//   };

//   return (
//     <div className="fya-dashboard">
//       {/* Page Header */}
//       <div className="fya-dashboard__header">
//         <div className="fya-dashboard__header-left">
//           <h1 className="fya-dashboard__title">Dashboard</h1>
//           <p className="fya-dashboard__subtitle">
//             Welcome back! Here's what's happening with your website.
//           </p>
//         </div>
//         <div className="fya-dashboard__header-right">
//           <div className="fya-dashboard__date">
//             <Clock size={16} />
//             <span>{new Date().toLocaleDateString('en-US', { 
//               weekday: 'long',
//               year: 'numeric',
//               month: 'long',
//               day: 'numeric'
//             })}</span>
//           </div>
//         </div>
//       </div>

//       {/* Stats Grid */}
//       <div className="fya-dashboard__stats">
//         {statCards.map((card) => {
//           const Icon = card.icon;
//           return (
//             <Link to={card.link} className="fya-dashboard__stat" key={card.id}>
//               <div className="fya-dashboard__stat-icon" style={{ background: card.bg }}>
//                 <Icon size={20} strokeWidth={2} style={{ color: card.iconColor }} />
//               </div>
//               <div className="fya-dashboard__stat-content">
//                 <span className="fya-dashboard__stat-label">{card.label}</span>
//                 <span className="fya-dashboard__stat-value">{card.value}</span>
//               </div>
//               <div className="fya-dashboard__stat-arrow">
//                 <ArrowRight size={16} />
//               </div>
//             </Link>
//           );
//         })}
//       </div>

//       {/* Dashboard Grid */}
//       <div className="fya-dashboard__grid">
//         {/* Recent Enquiries */}
//         <div className="fya-dashboard__card">
//           <div className="fya-dashboard__card-header">
//             <div className="fya-dashboard__card-title">
//               <h3>Recent Enquiries</h3>
//               <p>Latest customer enquiries</p>
//             </div>
//             <Link to="/admin/enquiries" className="fya-dashboard__card-link">
//               View All
//               <ExternalLink size={14} />
//             </Link>
//           </div>

//           {recentEnquiries.length > 0 ? (
//             <div className="fya-dashboard__table-wrapper">
//               <table className="fya-dashboard__table">
//                 <thead>
//                   <tr>
//                     <th>Name</th>
//                     <th>Phone</th>
//                     <th>Subject</th>
//                     <th>Status</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {recentEnquiries.map((item) => {
//                     const status = getStatusBadge(item.status);
//                     const StatusIcon = status.icon;
//                     return (
//                       <tr key={item.id}>
//                         <td>
//                           <div className="fya-dashboard__user">
//                             <div className="fya-dashboard__avatar">
//                               {item.name?.charAt(0)?.toUpperCase() || "?"}
//                             </div>
//                             <span className="fya-dashboard__user-name">{item.name}</span>
//                           </div>
//                         </td>
//                         <td>
//                           <a href={`tel:${item.phone}`} className="fya-dashboard__phone">
//                             {item.phone}
//                           </a>
//                         </td>
//                         <td className="fya-dashboard__subject">
//                           {item.subject || "—"}
//                         </td>
//                         <td>
//                           <span className={`fya-dashboard__status ${status.className}`}>
//                             <StatusIcon size={12} />
//                             {status.label}
//                           </span>
//                         </td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//             </div>
//           ) : (
//             <div className="fya-dashboard__empty">
//               <Mail size={40} strokeWidth={1.5} />
//               <p>No enquiries yet</p>
//               <span>Customer enquiries will appear here</span>
//             </div>
//           )}
//         </div>

//         {/* Recent Projects */}
//         <div className="fya-dashboard__card">
//           <div className="fya-dashboard__card-header">
//             <div className="fya-dashboard__card-title">
//               <h3>Recent Projects</h3>
//               <p>Latest projects added</p>
//             </div>
//             <Link to="/admin/projects" className="fya-dashboard__card-link">
//               View All
//               <ExternalLink size={14} />
//             </Link>
//           </div>

//           {recentProjects.length > 0 ? (
//             <div className="fya-dashboard__projects">
//               {recentProjects.map((project) => (
//                 <div className="fya-dashboard__project" key={project.id}>
//                   <div className="fya-dashboard__project-thumb">
//                     {project.featuredImage ? (
//                       <img
//                         src={project.featuredImage}
//                         alt={project.title}
//                         loading="lazy"
//                       />
//                     ) : (
//                       <Building2 size={20} />
//                     )}
//                   </div>
//                   <div className="fya-dashboard__project-info">
//                     <strong>{project.title}</strong>
//                     <span>{project.category || "Project"}</span>
//                   </div>
//                   <div className="fya-dashboard__project-status">
//                     <span className={`fya-dashboard__project-badge ${project.isActive ? 'active' : 'inactive'}`}>
//                       {project.isActive ? 'Active' : 'Inactive'}
//                     </span>
//                   </div>
//                   <div className="fya-dashboard__project-arrow">
//                     <ArrowRight size={16} />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="fya-dashboard__empty">
//               <Building2 size={40} strokeWidth={1.5} />
//               <p>No projects yet</p>
//               <span>Your projects will appear here</span>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Quick Actions */}
//       <div className="fya-dashboard__actions">
//         <div className="fya-dashboard__card fya-dashboard__actions-card">
//           <div className="fya-dashboard__card-header">
//             <div className="fya-dashboard__card-title">
//               <h3>Quick Actions</h3>
//               <p>Common tasks and shortcuts</p>
//             </div>
//           </div>
//           <div className="fya-dashboard__actions-grid">
//             <Link to="/admin/projects/new" className="fya-dashboard__action">
//               <div className="fya-dashboard__action-icon" style={{ background: '#DBEAFE', color: '#2563EB' }}>
//                 <Building2 size={20} />
//               </div>
//               <span>Add Project</span>
//             </Link>
//             <Link to="/admin/services/new" className="fya-dashboard__action">
//               <div className="fya-dashboard__action-icon" style={{ background: '#EDE9FE', color: '#7C3AED' }}>
//                 <BriefcaseBusiness size={20} />
//               </div>
//               <span>Add Service</span>
//             </Link>
//             <Link to="/admin/gallery/new" className="fya-dashboard__action">
//               <div className="fya-dashboard__action-icon" style={{ background: '#DCFCE7', color: '#16A34A' }}>
//                 <Images size={20} />
//               </div>
//               <span>Upload Images</span>
//             </Link>
//             <Link to="/admin/testimonials/new" className="fya-dashboard__action">
//               <div className="fya-dashboard__action-icon" style={{ background: '#FEF3C7', color: '#D97706' }}>
//                 <MessageSquareQuote size={20} />
//               </div>
//               <span>Add Testimonial</span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// src/pages/admin/Dashboard/Dashboard.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  BriefcaseBusiness,
  Building2,
  Images,
  MessageSquareQuote,
  Mail,
  Bell,
  AlertCircle,
  Plus,
  ArrowRight,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  ExternalLink,
} from "lucide-react";
import { getDashboard } from "../../services/dashboard.api.js";
import "./Dashboard.css";

const API_URL = import.meta.env.VITE_API_URL?.replace("/api", "") || "http://localhost:5000";

const Dashboard = () => {
  const [fyaDashboard, setFyaDashboard] = useState(null);
  const [fyaLoading, setFyaLoading] = useState(true);
  const [fyaError, setFyaError] = useState(null);

  useEffect(() => {
    fyaLoadDashboard();
  }, []);

  const fyaLoadDashboard = async () => {
    try {
      setFyaLoading(true);
      setFyaError(null);
      const response = await getDashboard();
      setFyaDashboard(response.data);
    } catch (error) {
      console.error("Failed to load dashboard:", error);
      setFyaError("Failed to load dashboard data. Please try again.");
    } finally {
      setFyaLoading(false);
    }
  };

  // Helper function to get full image URL
  const fyaGetImageUrl = (imagePath) => {
    if (!imagePath) return null;
    if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
      return imagePath;
    }
    return `${API_URL}${imagePath}`;
  };

  // Loading State
  if (fyaLoading) {
    return (
      <div className="fya-dashboard">
        <div className="fya-dashboard__loading">
          <div className="fya-dashboard__spinner" />
          <span>Loading dashboard...</span>
        </div>
      </div>
    );
  }

  // Error State
  if (fyaError) {
    return (
      <div className="fya-dashboard">
        <div className="fya-dashboard__error">
          <AlertCircle size={48} strokeWidth={1.5} />
          <h3>Something went wrong</h3>
          <p>{fyaError}</p>
          <button onClick={fyaLoadDashboard} className="fya-dashboard__retry">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const stats = fyaDashboard?.stats || {};
  const recentEnquiries = fyaDashboard?.recentEnquiries || [];
  const recentProjects = fyaDashboard?.recentProjects || [];

  const statCards = [
    {
      id: "services",
      label: "Services",
      value: stats.services || 0,
      icon: BriefcaseBusiness,
      color: "blue",
      bg: "#DBEAFE",
      iconColor: "#2563EB",
      link: "/admin/services",
    },
    {
      id: "projects",
      label: "Projects",
      value: stats.projects || 0,
      icon: Building2,
      color: "purple",
      bg: "#EDE9FE",
      iconColor: "#7C3AED",
      link: "/admin/projects",
    },
    {
      id: "gallery",
      label: "Gallery",
      value: stats.gallery || 0,
      icon: Images,
      color: "green",
      bg: "#DCFCE7",
      iconColor: "#16A34A",
      link: "/admin/gallery",
    },
    {
      id: "testimonials",
      label: "Testimonials",
      value: stats.testimonials || 0,
      icon: MessageSquareQuote,
      color: "orange",
      bg: "#FEF3C7",
      iconColor: "#D97706",
      link: "/admin/testimonials",
    },
    {
      id: "enquiries",
      label: "Enquiries",
      value: stats.enquiries || 0,
      icon: Mail,
      color: "red",
      bg: "#FEE2E2",
      iconColor: "#DC2626",
      link: "/admin/enquiries",
    },
  ];

  const getStatusBadge = (status) => {
    const statusMap = {
      NEW: { label: "New", icon: Clock, className: "fya-enquiry-status--new" },
      CONTACTED: { label: "Contacted", icon: Bell, className: "fya-enquiry-status--contacted" },
      IN_PROGRESS: { label: "In Progress", icon: TrendingUp, className: "fya-enquiry-status--progress" },
      COMPLETED: { label: "Completed", icon: CheckCircle, className: "fya-enquiry-status--completed" },
      CANCELLED: { label: "Cancelled", icon: XCircle, className: "fya-enquiry-status--cancelled" },
    };
    return statusMap[status] || statusMap.NEW;
  };

  return (
    <div className="fya-dashboard">
      {/* Page Header */}
      <div className="fya-dashboard__header">
        <div className="fya-dashboard__header-left">
          <h1 className="fya-dashboard__title">Dashboard</h1>
          <p className="fya-dashboard__subtitle">
            Welcome back! Here's what's happening with your website.
          </p>
        </div>
        <div className="fya-dashboard__header-right">
          <div className="fya-dashboard__date">
            <Clock size={16} />
            <span>{new Date().toLocaleDateString('en-US', { 
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="fya-dashboard__stats">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <Link to={card.link} className="fya-dashboard__stat" key={card.id}>
              <div className="fya-dashboard__stat-icon" style={{ background: card.bg }}>
                <Icon size={20} strokeWidth={2} style={{ color: card.iconColor }} />
              </div>
              <div className="fya-dashboard__stat-content">
                <span className="fya-dashboard__stat-label">{card.label}</span>
                <span className="fya-dashboard__stat-value">{card.value}</span>
              </div>
              <div className="fya-dashboard__stat-arrow">
                <ArrowRight size={16} />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Dashboard Grid */}
      <div className="fya-dashboard__grid">
        {/* Recent Enquiries */}
        <div className="fya-dashboard__card">
          <div className="fya-dashboard__card-header">
            <div className="fya-dashboard__card-title">
              <h3>Recent Enquiries</h3>
              <p>Latest customer enquiries</p>
            </div>
            <Link to="/admin/enquiries" className="fya-dashboard__card-link">
              View All
              <ExternalLink size={14} />
            </Link>
          </div>

          {recentEnquiries.length > 0 ? (
            <div className="fya-dashboard__table-wrapper">
              <table className="fya-dashboard__table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Subject</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentEnquiries.map((item) => {
                    const status = getStatusBadge(item.status);
                    const StatusIcon = status.icon;
                    return (
                      <tr key={item.id}>
                        <td>
                          <div className="fya-dashboard__user">
                            <div className="fya-dashboard__avatar">
                              {item.name?.charAt(0)?.toUpperCase() || "?"}
                            </div>
                            <span className="fya-dashboard__user-name">{item.name}</span>
                          </div>
                        </td>
                        <td>
                          <a href={`tel:${item.phone}`} className="fya-dashboard__phone">
                            {item.phone}
                          </a>
                        </td>
                        <td className="fya-dashboard__subject">
                          {item.subject || "—"}
                        </td>
                        <td>
                          <span className={`fya-dashboard__status ${status.className}`}>
                            <StatusIcon size={12} />
                            {status.label}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="fya-dashboard__empty">
              <Mail size={40} strokeWidth={1.5} />
              <p>No enquiries yet</p>
              <span>Customer enquiries will appear here</span>
            </div>
          )}
        </div>

        {/* Recent Projects */}
        <div className="fya-dashboard__card">
          <div className="fya-dashboard__card-header">
            <div className="fya-dashboard__card-title">
              <h3>Recent Projects</h3>
              <p>Latest projects added</p>
            </div>
            <Link to="/admin/projects" className="fya-dashboard__card-link">
              View All
              <ExternalLink size={14} />
            </Link>
          </div>

          {recentProjects.length > 0 ? (
            <div className="fya-dashboard__projects">
              {recentProjects.map((project) => (
                <div className="fya-dashboard__project" key={project.id}>
                  <div className="fya-dashboard__project-thumb">
                    {project.featuredImage ? (
                      <img
                        src={fyaGetImageUrl(project.featuredImage)}
                        alt={project.title}
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextElementSibling.style.display = "flex";
                        }}
                      />
                    ) : null}
                    <Building2
                      size={20}
                      style={{
                        display: project.featuredImage ? "none" : "flex",
                        color: "#999999",
                      }}
                    />
                  </div>
                  <div className="fya-dashboard__project-info">
                    <strong>{project.title}</strong>
                    <span>{project.category || "Project"}</span>
                  </div>
                  <div className="fya-dashboard__project-status">
                    <span className={`fya-dashboard__project-badge ${project.isActive ? 'active' : 'inactive'}`}>
                      {project.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <div className="fya-dashboard__project-arrow">
                    <ArrowRight size={16} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="fya-dashboard__empty">
              <Building2 size={40} strokeWidth={1.5} />
              <p>No projects yet</p>
              <span>Your projects will appear here</span>
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="fya-dashboard__actions">
        <div className="fya-dashboard__card fya-dashboard__actions-card">
          <div className="fya-dashboard__card-header">
            <div className="fya-dashboard__card-title">
              <h3>Quick Actions</h3>
              <p>Common tasks and shortcuts</p>
            </div>
          </div>
          <div className="fya-dashboard__actions-grid">
            <Link to="/admin/projects/new" className="fya-dashboard__action">
              <div className="fya-dashboard__action-icon" style={{ background: '#DBEAFE', color: '#2563EB' }}>
                <Building2 size={20} />
              </div>
              <span>Add Project</span>
            </Link>
            <Link to="/admin/services/new" className="fya-dashboard__action">
              <div className="fya-dashboard__action-icon" style={{ background: '#EDE9FE', color: '#7C3AED' }}>
                <BriefcaseBusiness size={20} />
              </div>
              <span>Add Service</span>
            </Link>
            <Link to="/admin/gallery/new" className="fya-dashboard__action">
              <div className="fya-dashboard__action-icon" style={{ background: '#DCFCE7', color: '#16A34A' }}>
                <Images size={20} />
              </div>
              <span>Upload Images</span>
            </Link>
            <Link to="/admin/testimonials/new" className="fya-dashboard__action">
              <div className="fya-dashboard__action-icon" style={{ background: '#FEF3C7', color: '#D97706' }}>
                <MessageSquareQuote size={20} />
              </div>
              <span>Add Testimonial</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;