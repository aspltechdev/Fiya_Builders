// import axios from "axios";

// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// api.interceptors.request.use(
//   (config) => {
//     const token =
//       localStorage.getItem("fiya_token");

//     if (token) {
//       config.headers.Authorization =
//         `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) =>
//     Promise.reject(error)
// );

// api.interceptors.response.use(
//   (response) => response,

//   (error) => {
//     if (
//       error.response?.status === 401
//     ) {
//       localStorage.removeItem(
//         "fiya_token"
//       );

//       localStorage.removeItem(
//         "fiya_user"
//       );

//       window.location.href =
//         "/admin/login";
//     }

//     return Promise.reject(error);
//   }
// );

// export default api;

import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("fiya_token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // ✅ Auto-detect FormData and handle appropriately
    if (config.data instanceof FormData) {
      // For FormData, remove Content-Type to let browser set it with boundary
      delete config.headers["Content-Type"];
    } else {
      // For JSON data, ensure Content-Type is set
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("fiya_token");
      localStorage.removeItem("fiya_user");
      window.location.href = "/admin/login";
    }

    return Promise.reject(error);
  }
);

export default api;