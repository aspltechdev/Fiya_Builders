// import api from "./api.js";

// export const getAllServices =
//   async () => {
//     const response =
//       await api.get(
//         "/services/admin/all"
//       );

//     return response.data;
//   };

// export const createService =
//   async (data) => {
//     const response =
//       await api.post(
//         "/services",
//         data
//       );

//     return response.data;
//   };

// export const updateService =
//   async (id, data) => {
//     const response =
//       await api.put(
//         `/services/${id}`,
//         data
//       );

//     return response.data;
//   };

// export const toggleService =
//   async (id) => {
//     const response =
//       await api.patch(
//         `/services/${id}/toggle`
//       );

//     return response.data;
//   };

// export const deleteService =
//   async (id) => {
//     const response =
//       await api.delete(
//         `/services/${id}`
//       );

//     return response.data;
//   };


// src/services/services.api.js
import api from "./api.js";

// ✅ PUBLIC API - Get active services (no authentication needed)
export const getServices = async () => {
  try {
    console.log("🔄 Fetching active services from /services");
    const response = await api.get("/services");
    console.log("✅ Services response:", response.data);
    
    // Handle different response structures
    let servicesData = [];
    
    if (response.data) {
      // If response has data property (most common)
      if (response.data.data && Array.isArray(response.data.data)) {
        servicesData = response.data.data;
      } 
      // If response.data is the array directly
      else if (Array.isArray(response.data)) {
        servicesData = response.data;
      }
      // If response has services property
      else if (response.data.services && Array.isArray(response.data.services)) {
        servicesData = response.data.services;
      }
      // If response has success and data
      else if (response.data.success && response.data.data) {
        servicesData = response.data.data;
      }
    }
    
    console.log(`📦 Extracted ${servicesData.length} services:`, servicesData);
    return servicesData;
    
  } catch (error) {
    console.error("❌ Error fetching services:", error);
    return []; // Return empty array on error
  }
};

// ✅ PUBLIC API - Get service by slug
export const getServiceBySlug = async (slug) => {
  try {
    const response = await api.get(`/services/slug/${slug}`);
    return response.data?.data || null;
  } catch (error) {
    console.error(`❌ Error fetching service by slug "${slug}":`, error);
    return null;
  }
};

// ✅ ADMIN API - Get all services (including inactive)
export const getAllServices = async () => {
  try {
    const response = await api.get("/services/admin/all");
    return response.data?.data || [];
  } catch (error) {
    console.error("❌ Error fetching all services:", error);
    return [];
  }
};

// ✅ ADMIN API - Get single service by ID
export const getServiceById = async (id) => {
  try {
    const response = await api.get(`/services/admin/${id}`);
    return response.data?.data || null;
  } catch (error) {
    console.error(`❌ Error fetching service ${id}:`, error);
    return null;
  }
};

// ✅ ADMIN API - Create service
export const createService = async (data) => {
  try {
    const response = await api.post("/services", data);
    return response.data?.data || null;
  } catch (error) {
    console.error("❌ Error creating service:", error);
    throw error;
  }
};

// ✅ ADMIN API - Update service
export const updateService = async (id, data) => {
  try {
    const response = await api.put(`/services/${id}`, data);
    return response.data?.data || null;
  } catch (error) {
    console.error(`❌ Error updating service ${id}:`, error);
    throw error;
  }
};

// ✅ ADMIN API - Toggle service status
export const toggleService = async (id) => {
  try {
    const response = await api.patch(`/services/${id}/toggle`);
    return response.data?.data || null;
  } catch (error) {
    console.error(`❌ Error toggling service ${id}:`, error);
    throw error;
  }
};

// ✅ ADMIN API - Update service order
export const updateServiceOrder = async (id, order) => {
  try {
    const response = await api.patch(`/services/${id}/order`, { displayOrder: order });
    return response.data?.data || null;
  } catch (error) {
    console.error(`❌ Error updating service order ${id}:`, error);
    throw error;
  }
};

// ✅ ADMIN API - Delete service
export const deleteService = async (id) => {
  try {
    const response = await api.delete(`/services/${id}`);
    return response.data;
  } catch (error) {
    console.error(`❌ Error deleting service ${id}:`, error);
    throw error;
  }
};