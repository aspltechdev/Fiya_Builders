import * as aboutService from "../services/about.service.js";

/*
|--------------------------------------------------------------------------
| Public
| Get Active About
|--------------------------------------------------------------------------
*/

export const getAbout = async (req, res) => {
  try {
    const about =
      await aboutService.getActiveAbout();

    res.status(200).json({
      success: true,
      data: about,
    });
  } catch (error) {
    console.error("Get About Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch About section",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Get All About
|--------------------------------------------------------------------------
*/

export const getAllAbout = async (req, res) => {
  try {
    const about =
      await aboutService.getAllAbout();

    res.status(200).json({
      success: true,
      data: about,
    });
  } catch (error) {
    console.error(
      "Get All About Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch About sections",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Get About By ID
|--------------------------------------------------------------------------
*/

export const getAboutById = async (req, res) => {
  try {
    const about =
      await aboutService.getAboutById(
        req.params.id
      );

    if (!about) {
      return res.status(404).json({
        success: false,
        message: "About section not found",
      });
    }

    res.status(200).json({
      success: true,
      data: about,
    });
  } catch (error) {
    console.error(
      "Get About By ID Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch About section",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Create About
|--------------------------------------------------------------------------
*/

export const createAbout = async (req, res) => {
  try {
    const {
      title,
      description,
    } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message:
          "Title and description are required",
      });
    }

    const about =
      await aboutService.createAbout(
        req.body
      );

    res.status(201).json({
      success: true,
      message:
        "About section created successfully",
      data: about,
    });
  } catch (error) {
    console.error(
      "Create About Error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to create About section",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Update About
|--------------------------------------------------------------------------
*/

export const updateAbout = async (req, res) => {
  try {
    const about =
      await aboutService.updateAbout(
        req.params.id,
        req.body
      );

    res.status(200).json({
      success: true,
      message:
        "About section updated successfully",
      data: about,
    });
  } catch (error) {
    console.error(
      "Update About Error:",
      error
    );

    if (error.code === "P2025") {
      return res.status(404).json({
        success: false,
        message: "About section not found",
      });
    }

    res.status(500).json({
      success: false,
      message:
        "Failed to update About section",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Toggle About Status
|--------------------------------------------------------------------------
*/

export const toggleAboutStatus = async (
  req,
  res
) => {
  try {
    const about =
      await aboutService.toggleAboutStatus(
        req.params.id
      );

    res.status(200).json({
      success: true,
      message: `About section ${
        about.isActive
          ? "activated"
          : "deactivated"
      } successfully`,
      data: about,
    });
  } catch (error) {
    console.error(
      "Toggle About Status Error:",
      error
    );

    if (
      error.message ===
      "About section not found"
    ) {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }

    res.status(500).json({
      success: false,
      message:
        "Failed to update About status",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Delete About
|--------------------------------------------------------------------------
*/

export const deleteAbout = async (req, res) => {
  try {
    await aboutService.deleteAbout(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message:
        "About section deleted successfully",
    });
  } catch (error) {
    console.error(
      "Delete About Error:",
      error
    );

    if (error.code === "P2025") {
      return res.status(404).json({
        success: false,
        message: "About section not found",
      });
    }

    res.status(500).json({
      success: false,
      message:
        "Failed to delete About section",
    });
  }
};