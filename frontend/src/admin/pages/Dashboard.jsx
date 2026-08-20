// import {
//   useEffect,
//   useState,
// } from "react";

// import {
//   BriefcaseBusiness,
//   Building2,
//   Images,
//   MessageSquareQuote,
//   Mail,
// } from "lucide-react";

// import {
//   getDashboard,
// } from "../../services/dashboard.api.js";

// const Dashboard = () => {
//   const [
//     dashboard,
//     setDashboard,
//   ] = useState(null);

//   const [
//     loading,
//     setLoading,
//   ] = useState(true);

//   useEffect(() => {
//     loadDashboard();
//   }, []);

//   const loadDashboard =
//     async () => {
//       try {
//         const response =
//           await getDashboard();

//         setDashboard(
//           response.data
//         );
//       } catch (error) {
//         console.error(
//           error
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//   if (loading) {
//     return (
//       <div className="admin-loading">
//         Loading dashboard...
//       </div>
//     );
//   }

//   const stats =
//     dashboard?.stats || {};

//   const cards = [
//     {
//       title: "Services",
//       value:
//         stats.services || 0,
//       icon: BriefcaseBusiness,
//     },
//     {
//       title: "Projects",
//       value:
//         stats.projects || 0,
//       icon: Building2,
//     },
//     {
//       title: "Gallery",
//       value:
//         stats.gallery || 0,
//       icon: Images,
//     },
//     {
//       title: "Testimonials",
//       value:
//         stats.testimonials || 0,
//       icon: MessageSquareQuote,
//     },
//     {
//       title: "Enquiries",
//       value:
//         stats.enquiries || 0,
//       icon: Mail,
//     },
//   ];

//   return (
//     <div>

//       <div className="page-title">
//         <h2>
//           Dashboard
//         </h2>

//         <p>
//           Here's what's happening with your website.
//         </p>
//       </div>

//       <div className="stats-grid">

//         {cards.map((card) => {
//           const Icon =
//             card.icon;

//           return (
//             <div
//               className="stat-card"
//               key={
//                 card.title
//               }
//             >

//               <div className="stat-icon">
//                 <Icon
//                   size={21}
//                 />
//               </div>

//               <div>
//                 <span>
//                   {card.title}
//                 </span>

//                 <strong>
//                   {card.value}
//                 </strong>
//               </div>

//             </div>
//           );
//         })}

//       </div>

//       <div className="dashboard-grid">

//         <div className="admin-card">

//           <div className="card-header">
//             <div>
//               <h3>
//                 Recent Enquiries
//               </h3>

//               <p>
//                 Latest customer enquiries
//               </p>
//             </div>
//           </div>

//           {dashboard
//             ?.recentEnquiries
//             ?.length ? (
//             <div className="table-wrapper">

//               <table>

//                 <thead>
//                   <tr>
//                     <th>
//                       Name
//                     </th>

//                     <th>
//                       Phone
//                     </th>

//                     <th>
//                       Subject
//                     </th>

//                     <th>
//                       Status
//                     </th>
//                   </tr>
//                 </thead>

//                 <tbody>

//                   {dashboard.recentEnquiries.map(
//                     (item) => (
//                       <tr
//                         key={
//                           item.id
//                         }
//                       >
//                         <td>
//                           {item.name}
//                         </td>

//                         <td>
//                           {item.phone}
//                         </td>

//                         <td>
//                           {item.subject ||
//                             "—"}
//                         </td>

//                         <td>
//                           <span
//                             className={`status-badge ${item.status?.toLowerCase()}`}
//                           >
//                             {
//                               item.status
//                             }
//                           </span>
//                         </td>
//                       </tr>
//                     )
//                   )}

//                 </tbody>

//               </table>

//             </div>
//           ) : (
//             <div className="empty-state">
//               No enquiries yet.
//             </div>
//           )}

//         </div>

//         <div className="admin-card">

//           <div className="card-header">
//             <div>
//               <h3>
//                 Recent Projects
//               </h3>

//               <p>
//                 Latest projects added
//               </p>
//             </div>
//           </div>

//           {dashboard
//             ?.recentProjects
//             ?.length ? (
//             <div className="project-list">

//               {dashboard.recentProjects.map(
//                 (project) => (
//                   <div
//                     className="project-row"
//                     key={
//                       project.id
//                     }
//                   >

//                     <div className="project-thumb">
//                       {project.featuredImage ? (
//                         <img
//                           src={
//                             project.featuredImage
//                           }
//                           alt={
//                             project.title
//                           }
//                         />
//                       ) : (
//                         <Building2
//                           size={20}
//                         />
//                       )}
//                     </div>

//                     <div>
//                       <strong>
//                         {
//                           project.title
//                         }
//                       </strong>

//                       <span>
//                         {
//                           project.category ||
//                           "Project"
//                         }
//                       </span>
//                     </div>

//                   </div>
//                 )
//               )}

//             </div>
//           ) : (
//             <div className="empty-state">
//               No projects yet.
//             </div>
//           )}

//         </div>

//       </div>

//     </div>
//   );
// };

// export default Dashboard;












import { useEffect, useState } from "react";
import {
  BriefcaseBusiness,
  Building2,
  Images,
  MessageSquareQuote,
  Mail,
  Bell,
  AlertCircle,
} from "lucide-react";
import { getDashboard } from "../../services/dashboard.api.js";
import "./Dashboard.css"

const Dashboard = () => {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getDashboard();
      setDashboard(response.data);
    } catch (error) {
      console.error("Failed to load dashboard:", error);
      setError("Failed to load dashboard data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Loading State
  if (loading) {
    return (
      <div className="admin-dashboard">
        <div className="admin-loading">
          <div className="loading-spinner" />
          <span>Loading dashboard...</span>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="admin-dashboard">
        <div className="error-state">
          <AlertCircle size={48} strokeWidth={1.5} />
          <h3>Something went wrong</h3>
          <p>{error}</p>
          <button onClick={loadDashboard} className="retry-btn">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const stats = dashboard?.stats || {};

  const cards = [
    {
      title: "Services",
      value: stats.services || 0,
      icon: BriefcaseBusiness,
      color: "blue",
    },
    {
      title: "Projects",
      value: stats.projects || 0,
      icon: Building2,
      color: "purple",
    },
    {
      title: "Gallery",
      value: stats.gallery || 0,
      icon: Images,
      color: "green",
    },
    {
      title: "Testimonials",
      value: stats.testimonials || 0,
      icon: MessageSquareQuote,
      color: "orange",
    },
    {
      title: "Enquiries",
      value: stats.enquiries || 0,
      icon: Mail,
      color: "red",
    },
  ];

  return (
    <div className="admin-dashboard">
      {/* Page Title */}
      <div className="page-title">
        <h2>Dashboard</h2>
        <p>Here's what's happening with your website.</p>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div className="stat-card" key={card.title}>
              <div className={`stat-icon ${card.color}`}>
                <Icon size={21} strokeWidth={2} />
              </div>
              <div className="stat-info">
                <span>{card.title}</span>
                <strong>{card.value}</strong>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dashboard Content Grid */}
      <div className="dashboard-grid">
        {/* Recent Enquiries Card */}
        <div className="admin-card">
          <div className="card-header">
            <div className="card-title">
              <h3>Recent Enquiries</h3>
              <p>Latest customer enquiries</p>
            </div>
            <button className="view-all-btn" title="View all enquiries">
              View All
            </button>
          </div>

          {dashboard?.recentEnquiries?.length ? (
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Subject</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {dashboard.recentEnquiries.map((item) => (
                    <tr key={item.id}>
                      <td className="table-name">
                        <div className="user-cell">
                          <div className="user-avatar-small">
                            {item.name?.charAt(0)?.toUpperCase() || "?"}
                          </div>
                          <span>{item.name}</span>
                        </div>
                      </td>
                      <td className="table-phone">
                        <a href={`tel:${item.phone}`} className="phone-link">
                          {item.phone}
                        </a>
                      </td>
                      <td className="table-subject">
                        {item.subject || "—"}
                      </td>
                      <td>
                        <span
                          className={`status-badge ${item.status?.toLowerCase() || "new"}`}
                        >
                          {item.status || "New"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty-state">
              <Mail size={40} strokeWidth={1.5} />
              <p>No enquiries yet</p>
              <span>Customer enquiries will appear here</span>
            </div>
          )}
        </div>

        {/* Recent Projects Card */}
        <div className="admin-card">
          <div className="card-header">
            <div className="card-title">
              <h3>Recent Projects</h3>
              <p>Latest projects added</p>
            </div>
            <button className="view-all-btn" title="View all projects">
              View All
            </button>
          </div>

          {dashboard?.recentProjects?.length ? (
            <div className="project-list">
              {dashboard.recentProjects.map((project) => (
                <div className="project-row" key={project.id}>
                  <div className="project-thumb">
                    {project.featuredImage ? (
                      <img
                        src={project.featuredImage}
                        alt={project.title}
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                    ) : null}
                    <Building2
                      size={20}
                      style={{
                        display: project.featuredImage ? "none" : "flex",
                      }}
                    />
                  </div>
                  <div className="project-info">
                    <strong>{project.title}</strong>
                    <span>{project.category || "Project"}</span>
                  </div>
                  <div className="project-arrow">
                    <span>→</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <Building2 size={40} strokeWidth={1.5} />
              <p>No projects yet</p>
              <span>Your projects will appear here</span>
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <div className="admin-card">
          <div className="card-header">
            <div className="card-title">
              <h3>Quick Actions</h3>
              <p>Common tasks and shortcuts</p>
            </div>
          </div>
          <div className="quick-actions-grid">
            <button className="quick-action-btn">
              <Building2 size={20} />
              <span>Add Project</span>
            </button>
            <button className="quick-action-btn">
              <BriefcaseBusiness size={20} />
              <span>Add Service</span>
            </button>
            <button className="quick-action-btn">
              <Images size={20} />
              <span>Upload Images</span>
            </button>
            <button className="quick-action-btn">
              <MessageSquareQuote size={20} />
              <span>Add Testimonial</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;