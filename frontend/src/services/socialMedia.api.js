// src/services/socialMedia.api.js
import api from "./api.js";

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

// Get all active social media links
export const getSocialMedia = async () => {
  const response = await api.get("/social-media");
  return response.data;
};

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
*/

// Get all social media links (admin)
export const getAllSocialMediaAdmin = async () => {
  const response = await api.get("/social-media/admin/all");
  return response.data;
};

// Get social media by ID
export const getSocialMediaById = async (id) => {
  const response = await api.get(`/social-media/admin/${id}`);
  return response.data;
};

// Create social media
export const createSocialMedia = async (data) => {
  const response = await api.post("/social-media/admin", data);
  return response.data;
};

// Update social media
export const updateSocialMedia = async (id, data) => {
  const response = await api.put(`/social-media/admin/${id}`, data);
  return response.data;
};

// Toggle social media status
export const toggleSocialMediaStatus = async (id) => {
  const response = await api.patch(`/social-media/admin/${id}/toggle`);
  return response.data;
};

// Delete social media
export const deleteSocialMedia = async (id) => {
  const response = await api.delete(`/social-media/admin/${id}`);
  return response.data;
};