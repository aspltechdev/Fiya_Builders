import api from "./api.js";

/*
|--------------------------------------------------------------------------
| Get Dashboard Statistics
|--------------------------------------------------------------------------
*/

export const getDashboardStats = async () => {
  const response = await api.get(
    "/dashboard"
  );

  return response.data;
};

/*
|--------------------------------------------------------------------------
| Get Recent Enquiries
|--------------------------------------------------------------------------
*/

export const getRecentEnquiries =
  async () => {
    const response = await api.get(
      "/dashboard/enquiries"
    );

    return response.data;
  };

/*
|--------------------------------------------------------------------------
| Get Recent Projects
|--------------------------------------------------------------------------
*/

export const getRecentProjects =
  async () => {
    const response = await api.get(
      "/dashboard/projects"
    );

    return response.data;
  };

/*
|--------------------------------------------------------------------------
| Get Complete Dashboard
|--------------------------------------------------------------------------
*/

export const getDashboard =
  async () => {
    const response = await api.get(
      "/dashboard"
    );

    return response.data;
  };