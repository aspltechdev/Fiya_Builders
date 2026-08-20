import {
  useEffect,
  useState,
} from "react";

import {
  Plus,
  Pencil,
  Trash2,
  Power,
  X,
  ImagePlus,
  Star,
} from "lucide-react";

import {
  getAllTestimonials,
  createTestimonial,
  updateTestimonial,
  toggleTestimonial,
  deleteTestimonial,
} from "../../services/testimonial.api.js";

const API_URL =
  import.meta.env.VITE_API_URL?.replace(
    "/api",
    ""
  ) || "http://localhost:5000";

const initialForm = {
  name: "",
  designation: "",
  company: "",
  message: "",
  image: null,
  rating: 5,
  isActive: true,
};

const Testimonials = () => {
  const [
    testimonials,
    setTestimonials,
  ] = useState([]);

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [showModal, setShowModal] =
    useState(false);

  const [
    editingTestimonial,
    setEditingTestimonial,
  ] = useState(null);

  const [form, setForm] =
    useState(initialForm);

  const [preview, setPreview] =
    useState(null);

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials =
    async () => {
      try {
        setLoading(true);

        const response =
          await getAllTestimonials();

        setTestimonials(
          response.data || []
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

  const openCreate = () => {
    setEditingTestimonial(null);
    setForm(initialForm);
    setPreview(null);
    setShowModal(true);
  };

  const openEdit = (
    testimonial
  ) => {
    setEditingTestimonial(
      testimonial
    );

    setForm({
      name:
        testimonial.name || "",
      designation:
        testimonial.designation ||
        "",
      company:
        testimonial.company ||
        "",
      message:
        testimonial.message || "",
      image: null,
      rating:
        testimonial.rating || 5,
      isActive:
        testimonial.isActive ??
        true,
    });

    setPreview(
      testimonial.image
        ? `${API_URL}${testimonial.image}`
        : null
    );

    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingTestimonial(null);
    setForm(initialForm);
    setPreview(null);
  };

  const handleChange = (e) => {
    const {
      name,
      value,
      type,
      checked,
      files,
    } = e.target;

    if (type === "file") {
      const file =
        files?.[0] || null;

      setForm((prev) => ({
        ...prev,
        image: file,
      }));

      if (file) {
        setPreview(
          URL.createObjectURL(file)
        );
      }

      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    try {
      setSaving(true);

      const formData =
        new FormData();

      formData.append(
        "name",
        form.name
      );

      formData.append(
        "designation",
        form.designation
      );

      formData.append(
        "company",
        form.company
      );

      formData.append(
        "message",
        form.message
      );

      formData.append(
        "rating",
        form.rating
      );

      formData.append(
        "isActive",
        form.isActive
      );

      if (form.image) {
        formData.append(
          "image",
          form.image
        );
      }

      if (
        editingTestimonial
      ) {
        await updateTestimonial(
          editingTestimonial.id,
          formData
        );
      } else {
        await createTestimonial(
          formData
        );
      }

      await loadTestimonials();
      closeModal();
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data
          ?.message ||
          "Failed to save testimonial"
      );
    } finally {
      setSaving(false);
    }
  };

  const handleToggle = async (
    id
  ) => {
    try {
      await toggleTestimonial(id);
      await loadTestimonials();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (
    id
  ) => {
    if (
      !window.confirm(
        "Are you sure you want to delete this testimonial?"
      )
    ) {
      return;
    }

    try {
      await deleteTestimonial(id);
      await loadTestimonials();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="cms-page">

      <div className="cms-page-header">

        <div>
          <h2>
            Testimonials
          </h2>

          <p>
            Manage client testimonials.
          </p>
        </div>

        <button
          className="primary-btn"
          onClick={openCreate}
        >
          <Plus size={17} />
          Add Testimonial
        </button>

      </div>

      <div className="cms-card">

        {loading ? (
          <div className="cms-loading">
            Loading testimonials...
          </div>
        ) : testimonials.length ===
          0 ? (
          <div className="cms-empty">

            <Star
              size={35}
            />

            <h3>
              No testimonials
            </h3>

            <p>
              Add your first client testimonial.
            </p>

            <button
              className="primary-btn"
              onClick={openCreate}
            >
              <Plus size={17} />
              Add Testimonial
            </button>

          </div>
        ) : (
          <div className="testimonial-admin-list">

            {testimonials.map(
              (testimonial) => (
                <div
                  className="testimonial-admin-card"
                  key={
                    testimonial.id
                  }
                >

                  <div className="testimonial-avatar">

                    {testimonial.image ? (
                      <img
                        src={`${API_URL}${testimonial.image}`}
                        alt={
                          testimonial.name
                        }
                      />
                    ) : (
                      testimonial.name
                        ?.charAt(
                          0
                        )
                        ?.toUpperCase()
                    )}

                  </div>

                  <div className="testimonial-admin-info">

                    <strong>
                      {
                        testimonial.name
                      }
                    </strong>

                    <span>
                      {
                        testimonial.designation ||
                        "Client"
                      }

                      {testimonial.company &&
                        ` • ${testimonial.company}`}
                    </span>

                    <div className="rating-row">

                      {[
                        1,
                        2,
                        3,
                        4,
                        5,
                      ].map(
                        (star) => (
                          <Star
                            key={
                              star
                            }
                            size={13}
                            fill={
                              star <=
                              testimonial.rating
                                ? "currentColor"
                                : "none"
                            }
                          />
                        )
                      )}

                    </div>

                    <p>
                      {
                        testimonial.message
                      }
                    </p>

                  </div>

                  <div className="testimonial-actions">

                    <button
                      className={`status-toggle ${
                        testimonial.isActive
                          ? "active"
                          : "inactive"
                      }`}
                      onClick={() =>
                        handleToggle(
                          testimonial.id
                        )
                      }
                    >
                      <Power
                        size={13}
                      />

                      {testimonial.isActive
                        ? "Active"
                        : "Inactive"}
                    </button>

                    <button
                      className="icon-btn"
                      onClick={() =>
                        openEdit(
                          testimonial
                        )
                      }
                    >
                      <Pencil
                        size={15}
                      />
                    </button>

                    <button
                      className="icon-btn danger"
                      onClick={() =>
                        handleDelete(
                          testimonial.id
                        )
                      }
                    >
                      <Trash2
                        size={15}
                      />
                    </button>

                  </div>

                </div>
              )
            )}

          </div>
        )}

      </div>

      {showModal && (
        <div className="modal-overlay">

          <div className="cms-modal">

            <div className="modal-header">

              <div>
                <h3>
                  {editingTestimonial
                    ? "Edit Testimonial"
                    : "Add Testimonial"}
                </h3>

                <p>
                  Add customer feedback.
                </p>
              </div>

              <button
                className="modal-close"
                onClick={
                  closeModal
                }
              >
                <X size={20} />
              </button>

            </div>

            <form
              onSubmit={
                handleSubmit
              }
            >

              <div className="modal-body">

                <div className="form-group">

                  <label>
                    Client Image
                  </label>

                  <div className="image-upload">

                    {preview ? (
                      <div className="image-preview">

                        <img
                          src={preview}
                          alt="Preview"
                        />

                      </div>
                    ) : (
                      <div className="image-placeholder">

                        <ImagePlus
                          size={30}
                        />

                        <span>
                          Upload client image
                        </span>

                      </div>
                    )}

                    <input
                      type="file"
                      accept="image/*"
                      onChange={
                        handleChange
                      }
                    />

                  </div>

                </div>

                <div className="form-grid">

                  <div className="form-group">

                    <label>
                      Client Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={
                        form.name
                      }
                      onChange={
                        handleChange
                      }
                      required
                    />

                  </div>

                  <div className="form-group">

                    <label>
                      Designation
                    </label>

                    <input
                      type="text"
                      name="designation"
                      placeholder="Managing Director"
                      value={
                        form.designation
                      }
                      onChange={
                        handleChange
                      }
                    />

                  </div>

                </div>

                <div className="form-group">

                  <label>
                    Company
                  </label>

                  <input
                    type="text"
                    name="company"
                    value={
                      form.company
                    }
                    onChange={
                      handleChange
                    }
                  />

                </div>

                <div className="form-group">

                  <label>
                    Testimonial
                  </label>

                  <textarea
                    name="message"
                    rows="5"
                    value={
                      form.message
                    }
                    onChange={
                      handleChange
                    }
                    required
                  />

                </div>

                <div className="form-group">

                  <label>
                    Rating
                  </label>

                  <select
                    name="rating"
                    value={
                      form.rating
                    }
                    onChange={
                      handleChange
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
                    }}
                  >
                    <option value="5">
                      5 Stars
                    </option>

                    <option value="4">
                      4 Stars
                    </option>

                    <option value="3">
                      3 Stars
                    </option>

                    <option value="2">
                      2 Stars
                    </option>

                    <option value="1">
                      1 Star
                    </option>
                  </select>

                </div>

                <label className="checkbox-row">

                  <input
                    type="checkbox"
                    name="isActive"
                    checked={
                      form.isActive
                    }
                    onChange={
                      handleChange
                    }
                  />

                  Show testimonial
                  on website

                </label>

              </div>

              <div className="modal-footer">

                <button
                  type="button"
                  className="secondary-btn"
                  onClick={
                    closeModal
                  }
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="primary-btn"
                  disabled={saving}
                >
                  {saving
                    ? "Saving..."
                    : editingTestimonial
                    ? "Update Testimonial"
                    : "Create Testimonial"}
                </button>

              </div>

            </form>

          </div>

        </div>
      )}

    </div>
  );
};

export default Testimonials;