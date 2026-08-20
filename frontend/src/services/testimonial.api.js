import api from "./api.js";

export const getAllTestimonials =
  async () => {
    const response =
      await api.get(
        "/testimonials/admin/all"
      );

    return response.data;
  };

export const createTestimonial =
  async (data) => {
    const response =
      await api.post(
        "/testimonials",
        data
      );

    return response.data;
  };

export const updateTestimonial =
  async (id, data) => {
    const response =
      await api.put(
        `/testimonials/${id}`,
        data
      );

    return response.data;
  };

export const toggleTestimonial =
  async (id) => {
    const response =
      await api.patch(
        `/testimonials/${id}/toggle`
      );

    return response.data;
  };

export const deleteTestimonial =
  async (id) => {
    const response =
      await api.delete(
        `/testimonials/${id}`
      );

    return response.data;
  };