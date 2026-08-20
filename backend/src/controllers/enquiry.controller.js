import * as enquiryService from "../services/enquiry.service.js";

/*
|--------------------------------------------------------------------------
| Create Enquiry
|--------------------------------------------------------------------------
| Public
*/

export const createEnquiry = async (
  req,
  res
) => {
  try {
    const {
      name,
      email,
      phone,
      subject,
      message,
    } = req.body;

    if (!name || !phone) {
      return res.status(400).json({
        success: false,
        message:
          "Name and phone are required",
      });
    }

    const enquiry =
      await enquiryService.createEnquiry(
        req.body
      );

    res.status(201).json({
      success: true,
      message:
        "Your enquiry has been submitted successfully",
      data: enquiry,
    });
  } catch (error) {
    console.error(
      "Create Enquiry Error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to submit enquiry",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Get All Enquiries
|--------------------------------------------------------------------------
| Admin
*/

export const getAllEnquiries = async (
  req,
  res
) => {
  try {
    const enquiries =
      await enquiryService.getAllEnquiries();

    res.status(200).json({
      success: true,
      data: enquiries,
    });
  } catch (error) {
    console.error(
      "Get Enquiries Error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch enquiries",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Get Enquiry By ID
|--------------------------------------------------------------------------
| Admin
*/

export const getEnquiryById = async (
  req,
  res
) => {
  try {
    const enquiry =
      await enquiryService.getEnquiryById(
        req.params.id
      );

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found",
      });
    }

    res.status(200).json({
      success: true,
      data: enquiry,
    });
  } catch (error) {
    console.error(
      "Get Enquiry Error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch enquiry",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Get New Enquiries
|--------------------------------------------------------------------------
| Admin
*/

export const getNewEnquiries = async (
  req,
  res
) => {
  try {
    const enquiries =
      await enquiryService.getNewEnquiries();

    res.status(200).json({
      success: true,
      data: enquiries,
    });
  } catch (error) {
    console.error(
      "Get New Enquiries Error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch new enquiries",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Get Enquiries By Status
|--------------------------------------------------------------------------
| Admin
*/

export const getEnquiriesByStatus =
  async (req, res) => {
    try {
      const { status } = req.params;

      const allowedStatuses = [
        "NEW",
        "CONTACTED",
        "COMPLETED",
      ];

      if (
        !allowedStatuses.includes(status)
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Invalid enquiry status",
        });
      }

      const enquiries =
        await enquiryService.getEnquiriesByStatus(
          status
        );

      res.status(200).json({
        success: true,
        data: enquiries,
      });
    } catch (error) {
      console.error(
        "Get Enquiries By Status Error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to fetch enquiries",
      });
    }
  };

/*
|--------------------------------------------------------------------------
| Update Enquiry Status
|--------------------------------------------------------------------------
| Admin
*/

export const updateEnquiryStatus =
  async (req, res) => {
    try {
      const { status } = req.body;

      const allowedStatuses = [
        "NEW",
        "CONTACTED",
        "COMPLETED",
      ];

      if (
        !allowedStatuses.includes(status)
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Invalid enquiry status",
        });
      }

      const enquiry =
        await enquiryService.updateEnquiryStatus(
          req.params.id,
          status
        );

      res.status(200).json({
        success: true,
        message:
          "Enquiry status updated successfully",
        data: enquiry,
      });
    } catch (error) {
      console.error(
        "Update Enquiry Status Error:",
        error
      );

      if (error.code === "P2025") {
        return res.status(404).json({
          success: false,
          message: "Enquiry not found",
        });
      }

      res.status(500).json({
        success: false,
        message:
          "Failed to update enquiry status",
      });
    }
  };

/*
|--------------------------------------------------------------------------
| Delete Enquiry
|--------------------------------------------------------------------------
| Admin
*/

export const deleteEnquiry = async (
  req,
  res
) => {
  try {
    await enquiryService.deleteEnquiry(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message:
        "Enquiry deleted successfully",
    });
  } catch (error) {
    console.error(
      "Delete Enquiry Error:",
      error
    );

    if (error.code === "P2025") {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found",
      });
    }

    res.status(500).json({
      success: false,
      message:
        "Failed to delete enquiry",
    });
  }
};