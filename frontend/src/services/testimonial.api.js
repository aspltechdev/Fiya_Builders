// import api from "./api.js";

// export const getAllTestimonials =
//   async () => {
//     const response =
//       await api.get(
//         "/testimonials/admin/all"
//       );

//     return response.data;
//   };

// export const createTestimonial =
//   async (data) => {
//     const response =
//       await api.post(
//         "/testimonials",
//         data
//       );

//     return response.data;
//   };

// export const updateTestimonial =
//   async (id, data) => {
//     const response =
//       await api.put(
//         `/testimonials/${id}`,
//         data
//       );

//     return response.data;
//   };

// export const toggleTestimonial =
//   async (id) => {
//     const response =
//       await api.patch(
//         `/testimonials/${id}/toggle`
//       );

//     return response.data;
//   };

// export const deleteTestimonial =
//   async (id) => {
//     const response =
//       await api.delete(
//         `/testimonials/${id}`
//       );

//     return response.data;
//   };
// src/services/testimonial.api.js


import api from "./api.js";

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

// ✅ Get active testimonials for website (public)
export const getTestimonials = async () => {
  const response = await api.get("/testimonials");
  return response.data;
};

// ✅ Submit testimonial (public - no auth required)
export const submitTestimonial = async (formData) => {
  const response = await api.post("/testimonials/submit", formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
*/

// ✅ Get all testimonials (admin)
export const getAllTestimonials = async () => {
  const response = await api.get("/testimonials/admin/all");
  return response.data;
};

// ✅ Get testimonial by ID (admin)
export const getTestimonialById = async (id) => {
  const response = await api.get(`/testimonials/admin/${id}`);
  return response.data;
};

// ✅ Create testimonial (admin)
export const createTestimonial = async (formData) => {
  const response = await api.post("/testimonials/admin", formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

// ✅ Update testimonial (admin)
export const updateTestimonial = async (id, formData) => {
  const response = await api.put(`/testimonials/admin/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

// ✅ Toggle testimonial status (admin)
export const toggleTestimonial = async (id) => {
  const response = await api.patch(`/testimonials/admin/${id}/toggle`);
  return response.data;
};

// ✅ Delete testimonial (admin)
export const deleteTestimonial = async (id) => {
  const response = await api.delete(`/testimonials/admin/${id}`);
  return response.data;
};