import {
  useEffect,
  useState,
} from "react";

import {
  Eye,
  Trash2,
  X,
  Mail,
  Phone,
  CalendarDays,
  User,
} from "lucide-react";

import {
  getAllEnquiries,
  updateEnquiryStatus,
  deleteEnquiry,
} from "../../services/enquiry.api.js";

const Enquiries = () => {
  const [
    enquiries,
    setEnquiries,
  ] = useState([]);

  const [loading, setLoading] =
    useState(true);

  const [
    selectedEnquiry,
    setSelectedEnquiry,
  ] = useState(null);

  /*
  |--------------------------------------------------------------------------
  | Load Enquiries
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    loadEnquiries();
  }, []);

  const loadEnquiries = async () => {
    try {
      setLoading(true);

      const response =
        await getAllEnquiries();

      setEnquiries(
        response.data || []
      );
    } catch (error) {
      console.error(
        "Load Enquiries Error:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  /*
  |--------------------------------------------------------------------------
  | View Enquiry
  |--------------------------------------------------------------------------
  */

  const handleView = (enquiry) => {
    setSelectedEnquiry(
      enquiry
    );
  };

  /*
  |--------------------------------------------------------------------------
  | Close View
  |--------------------------------------------------------------------------
  */

  const closeView = () => {
    setSelectedEnquiry(null);
  };

  /*
  |--------------------------------------------------------------------------
  | Update Status
  |--------------------------------------------------------------------------
  */

  const handleStatusChange =
    async (
      id,
      status
    ) => {
      try {
        await updateEnquiryStatus(
          id,
          status
        );

        await loadEnquiries();

        if (
          selectedEnquiry?.id === id
        ) {
          setSelectedEnquiry(
            (prev) => ({
              ...prev,
              status,
            })
          );
        }
      } catch (error) {
        console.error(
          "Update Status Error:",
          error
        );

        alert(
          error.response?.data
            ?.message ||
            "Failed to update enquiry"
        );
      }
    };

  /*
  |--------------------------------------------------------------------------
  | Delete
  |--------------------------------------------------------------------------
  */

  const handleDelete = async (
    id
  ) => {
    const confirmed =
      window.confirm(
        "Are you sure you want to delete this enquiry?"
      );

    if (!confirmed) {
      return;
    }

    try {
      await deleteEnquiry(id);

      setSelectedEnquiry(
        null
      );

      await loadEnquiries();
    } catch (error) {
      console.error(
        "Delete Enquiry Error:",
        error
      );

      alert(
        error.response?.data
          ?.message ||
          "Failed to delete enquiry"
      );
    }
  };

  /*
  |--------------------------------------------------------------------------
  | Format Date
  |--------------------------------------------------------------------------
  */

  const formatDate = (date) => {
    if (!date) {
      return "—";
    }

    return new Date(
      date
    ).toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };

  /*
  |--------------------------------------------------------------------------
  | Status Class
  |--------------------------------------------------------------------------
  */

  const getStatusClass = (
    status
  ) => {
    return (
      status
        ?.toLowerCase()
        .replace(
          /\s+/g,
          "-"
        ) || "new"
    );
  };

  return (
    <div className="cms-page">

      {/* =================================
          HEADER
      ================================= */}

      <div className="cms-page-header">

        <div>
          <h2>
            Enquiries
          </h2>

          <p>
            Manage enquiries received from your website.
          </p>
        </div>

        <div className="enquiry-count">
          <Mail size={16} />

          <span>
            {enquiries.length}{" "}
            Enquiries
          </span>
        </div>

      </div>


      {/* =================================
          CONTENT
      ================================= */}

      <div className="cms-card">

        {loading ? (
          <div className="cms-loading">
            Loading enquiries...
          </div>
        ) : enquiries.length ===
          0 ? (
          <div className="cms-empty">

            <Mail
              size={35}
            />

            <h3>
              No enquiries yet
            </h3>

            <p>
              Website enquiries will appear here.
            </p>

          </div>
        ) : (
          <div className="cms-table-wrapper">

            <table className="cms-table">

              <thead>

                <tr>

                  <th>
                    Name
                  </th>

                  <th>
                    Contact
                  </th>

                  <th>
                    Subject
                  </th>

                  <th>
                    Date
                  </th>

                  <th>
                    Status
                  </th>

                  <th>
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {enquiries.map(
                  (enquiry) => (
                    <tr
                      key={
                        enquiry.id
                      }
                    >

                      {/* NAME */}

                      <td>

                        <div className="enquiry-name">

                          <div className="enquiry-avatar">
                            {enquiry.name
                              ?.charAt(
                                0
                              )
                              ?.toUpperCase()}
                          </div>

                          <div>

                            <strong>
                              {
                                enquiry.name
                              }
                            </strong>

                            {enquiry.company && (
                              <span>
                                {
                                  enquiry.company
                                }
                              </span>
                            )}

                          </div>

                        </div>

                      </td>


                      {/* CONTACT */}

                      <td>

                        <div className="enquiry-contact">

                          {enquiry.email && (
                            <span>
                              <Mail
                                size={12}
                              />

                              {
                                enquiry.email
                              }
                            </span>
                          )}

                          {enquiry.phone && (
                            <span>
                              <Phone
                                size={12}
                              />

                              {
                                enquiry.phone
                              }
                            </span>
                          )}

                        </div>

                      </td>


                      {/* SUBJECT */}

                      <td>

                        <span className="enquiry-subject">

                          {
                            enquiry.subject ||
                            "General Enquiry"
                          }

                        </span>

                      </td>


                      {/* DATE */}

                      <td>
                        {formatDate(
                          enquiry.createdAt
                        )}
                      </td>


                      {/* STATUS */}

                      <td>

                        <select
                          className={`enquiry-status ${getStatusClass(
                            enquiry.status
                          )}`}
                          value={
                            enquiry.status ||
                            "NEW"
                          }
                          onChange={(
                            e
                          ) =>
                            handleStatusChange(
                              enquiry.id,
                              e.target.value
                            )
                          }
                        >

                          <option value="NEW">
                            New
                          </option>

                          <option value="CONTACTED">
                            Contacted
                          </option>

                          <option value="IN_PROGRESS">
                            In Progress
                          </option>

                          <option value="COMPLETED">
                            Completed
                          </option>

                          <option value="CANCELLED">
                            Cancelled
                          </option>

                        </select>

                      </td>


                      {/* ACTIONS */}

                      <td>

                        <div className="cms-actions">

                          <button
                            className="icon-btn"
                            title="View"
                            onClick={() =>
                              handleView(
                                enquiry
                              )
                            }
                          >
                            <Eye
                              size={16}
                            />
                          </button>

                          <button
                            className="icon-btn danger"
                            title="Delete"
                            onClick={() =>
                              handleDelete(
                                enquiry.id
                              )
                            }
                          >
                            <Trash2
                              size={16}
                            />
                          </button>

                        </div>

                      </td>

                    </tr>
                  )
                )}

              </tbody>

            </table>

          </div>
        )}

      </div>


      {/* =================================
          VIEW ENQUIRY MODAL
      ================================= */}

      {selectedEnquiry && (
        <div className="modal-overlay">

          <div className="cms-modal enquiry-modal">

            {/* HEADER */}

            <div className="modal-header">

              <div>
                <h3>
                  Enquiry Details
                </h3>

                <p>
                  Review customer enquiry.
                </p>
              </div>

              <button
                className="modal-close"
                onClick={
                  closeView
                }
              >
                <X size={20} />
              </button>

            </div>


            {/* BODY */}

            <div className="modal-body">

              <div className="enquiry-profile">

                <div className="enquiry-profile-avatar">
                  {selectedEnquiry.name
                    ?.charAt(
                      0
                    )
                    ?.toUpperCase()}
                </div>

                <div>

                  <h3>
                    {
                      selectedEnquiry.name
                    }
                  </h3>

                  <p>
                    {
                      selectedEnquiry.company ||
                      "Website Enquiry"
                    }
                  </p>

                </div>

              </div>


              {/* CONTACT */}

              <div className="enquiry-details-grid">

                <div className="enquiry-detail">

                  <Mail size={17} />

                  <div>

                    <span>
                      Email
                    </span>

                    <strong>
                      {
                        selectedEnquiry.email ||
                        "—"
                      }
                    </strong>

                  </div>

                </div>


                <div className="enquiry-detail">

                  <Phone size={17} />

                  <div>

                    <span>
                      Phone
                    </span>

                    <strong>
                      {
                        selectedEnquiry.phone ||
                        "—"
                      }
                    </strong>

                  </div>

                </div>


                <div className="enquiry-detail">

                  <CalendarDays
                    size={17}
                  />

                  <div>

                    <span>
                      Received
                    </span>

                    <strong>
                      {formatDate(
                        selectedEnquiry.createdAt
                      )}
                    </strong>

                  </div>

                </div>


                <div className="enquiry-detail">

                  <User size={17} />

                  <div>

                    <span>
                      Status
                    </span>

                    <strong>
                      {
                        selectedEnquiry.status ||
                        "NEW"
                      }
                    </strong>

                  </div>

                </div>

              </div>


              {/* SUBJECT */}

              <div className="enquiry-message-block">

                <span>
                  Subject
                </span>

                <h4>
                  {
                    selectedEnquiry.subject ||
                    "General Enquiry"
                  }
                </h4>

              </div>


              {/* MESSAGE */}

              <div className="enquiry-message-block">

                <span>
                  Message
                </span>

                <p>
                  {
                    selectedEnquiry.message ||
                    "No message provided."
                  }
                </p>

              </div>


              {/* STATUS */}

              <div className="form-group">

                <label>
                  Update Status
                </label>

                <select
                  value={
                    selectedEnquiry.status ||
                    "NEW"
                  }
                  onChange={(e) =>
                    handleStatusChange(
                      selectedEnquiry.id,
                      e.target.value
                    )
                  }
                  style={{
                    width: "100%",
                    height: "42px",
                    border:
                      "1px solid #dfe1e4",
                    borderRadius:
                      "7px",
                    padding:
                      "0 12px",
                    background:
                      "#fff",
                  }}
                >

                  <option value="NEW">
                    New
                  </option>

                  <option value="CONTACTED">
                    Contacted
                  </option>

                  <option value="IN_PROGRESS">
                    In Progress
                  </option>

                  <option value="COMPLETED">
                    Completed
                  </option>

                  <option value="CANCELLED">
                    Cancelled
                  </option>

                </select>

              </div>

            </div>


            {/* FOOTER */}

            <div className="modal-footer">

              <button
                type="button"
                className="secondary-btn"
                onClick={
                  closeView
                }
              >
                Close
              </button>

              <button
                type="button"
                className="danger-btn"
                onClick={() =>
                  handleDelete(
                    selectedEnquiry.id
                  )
                }
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