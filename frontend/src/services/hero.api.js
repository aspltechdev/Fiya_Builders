// // import api from "./api.js";

// // /*
// // |--------------------------------------------------------------------------
// // | Get Active Hero
// // |--------------------------------------------------------------------------
// // */

// // export const getHero = async () => {
// //   const response = await api.get(
// //     "/hero"
// //   );

// //   return response.data;
// // };

// // /*
// // |--------------------------------------------------------------------------
// // | Get All Heroes - Admin
// // |--------------------------------------------------------------------------
// // */

// // export const getAllHeroes =
// //   async () => {
// //     const response = await api.get(
// //       "/hero/admin/all"
// //     );

// //     return response.data;
// //   };

// // /*
// // |--------------------------------------------------------------------------
// // | Get Hero By ID - Admin
// // |--------------------------------------------------------------------------
// // */

// // export const getHeroById =
// //   async (id) => {
// //     const response = await api.get(
// //       `/hero/admin/${id}`
// //     );

// //     return response.data;
// //   };

// // /*
// // |--------------------------------------------------------------------------
// // | Create Hero - Admin
// // |--------------------------------------------------------------------------
// // */

// // export const createHero =
// //   async (formData) => {
// //     const response = await api.post(
// //       "/hero",
// //       formData
// //     );

// //     return response.data;
// //   };

// // /*
// // |--------------------------------------------------------------------------
// // | Update Hero - Admin
// // |--------------------------------------------------------------------------
// // */

// // export const updateHero =
// //   async (id, formData) => {
// //     const response = await api.put(
// //       `/hero/${id}`,
// //       formData
// //     );

// //     return response.data;
// //   };

// // /*
// // |--------------------------------------------------------------------------
// // | Toggle Hero - Admin
// // |--------------------------------------------------------------------------
// // */

// // export const toggleHero =
// //   async (id) => {
// //     const response = await api.patch(
// //       `/hero/${id}/toggle`
// //     );

// //     return response.data;
// //   };

// // /*
// // |--------------------------------------------------------------------------
// // | Delete Hero - Admin
// // |--------------------------------------------------------------------------
// // */

// // export const deleteHero =
// //   async (id) => {
// //     const response = await api.delete(
// //       `/hero/${id}`
// //     );

// //     return response.data;
// //   };

// // backend/src/services/api.js
// import axios from 'axios';

// const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// const api = axios.create({
//     baseURL: API_URL,
// });

// // Request interceptor - handles both JSON and FormData
// api.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }

//         // ✅ Auto-detect FormData and set appropriate headers
//         if (config.data instanceof FormData) {
//             // Don't set Content-Type - let browser set it with boundary
//             delete config.headers['Content-Type'];
//         } else {
//             // For JSON data, set Content-Type to application/json
//             config.headers['Content-Type'] = 'application/json';
//         }

//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// // Response interceptor
// api.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         if (error.response?.status === 401) {
//             localStorage.removeItem('token');
//             window.location.href = '/login';
//         }
//         return Promise.reject(error);
//     }
// );

// export default api;


// backend/src/services/hero.api.js
import api from "./api.js";

/*
|--------------------------------------------------------------------------
| Get Active Hero
|--------------------------------------------------------------------------
*/

export const getHero = async () => {
    const response = await api.get("/hero");
    return response.data;
};

/*
|--------------------------------------------------------------------------
| Get All Heroes - Admin
|--------------------------------------------------------------------------
*/

export const getAllHeroes = async () => {
    const response = await api.get("/hero/admin/all");
    return response.data;
};

/*
|--------------------------------------------------------------------------
| Get Hero By ID - Admin
|--------------------------------------------------------------------------
*/

export const getHeroById = async (id) => {
    const response = await api.get(`/hero/admin/${id}`);
    return response.data;
};

/*
|--------------------------------------------------------------------------
| Create Hero - Admin
|--------------------------------------------------------------------------
*/

export const createHero = async (formData) => {
    const response = await api.post("/hero", formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
};

/*
|--------------------------------------------------------------------------
| Update Hero - Admin
|--------------------------------------------------------------------------
*/

export const updateHero = async (id, formData) => {
    const response = await api.put(`/hero/${id}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
};

/*
|--------------------------------------------------------------------------
| Toggle Hero - Admin
|--------------------------------------------------------------------------
*/

export const toggleHero = async (id) => {
    const response = await api.patch(`/hero/${id}/toggle`);
    return response.data;
};

/*
|--------------------------------------------------------------------------
| Delete Hero - Admin
|--------------------------------------------------------------------------
*/

export const deleteHero = async (id) => {
    const response = await api.delete(`/hero/${id}`);
    return response.data;
};