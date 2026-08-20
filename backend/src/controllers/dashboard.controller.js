import * as dashboardService from "../services/dashboard.service.js";

export const getDashboard = async (
  req,
  res
) => {
  try {
    const dashboard =
      await dashboardService.getDashboardData();

    res.status(200).json({
      success: true,
      data: dashboard,
    });
  } catch (error) {
    console.error(
      "Dashboard Error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to load dashboard data",
    });
  }
};