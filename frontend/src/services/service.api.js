import api from "./api.js";

export const getAllServices =
  async () => {
    const response =
      await api.get(
        "/services/admin/all"
      );

    return response.data;
  };

export const createService =
  async (data) => {
    const response =
      await api.post(
        "/services",
        data
      );

    return response.data;
  };

export const updateService =
  async (id, data) => {
    const response =
      await api.put(
        `/services/${id}`,
        data
      );

    return response.data;
  };

export const toggleService =
  async (id) => {
    const response =
      await api.patch(
        `/services/${id}/toggle`
      );

    return response.data;
  };

export const deleteService =
  async (id) => {
    const response =
      await api.delete(
        `/services/${id}`
      );

    return response.data;
  };