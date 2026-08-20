import api from "./api.js";

export const getAllGallery =
  async () => {
    const response =
      await api.get(
        "/gallery/admin/all"
      );

    return response.data;
  };

export const createGallery =
  async (data) => {
    const response =
      await api.post(
        "/gallery",
        data
      );

    return response.data;
  };

export const updateGallery =
  async (id, data) => {
    const response =
      await api.put(
        `/gallery/${id}`,
        data
      );

    return response.data;
  };

export const toggleGallery =
  async (id) => {
    const response =
      await api.patch(
        `/gallery/${id}/toggle`
      );

    return response.data;
  };

export const deleteGallery =
  async (id) => {
    const response =
      await api.delete(
        `/gallery/${id}`
      );

    return response.data;
  };