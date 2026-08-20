import * as testimonialService from "../services/testimonial.service.js";

/*
|--------------------------------------------------------------------------
| Public
| Get Active Testimonials
|--------------------------------------------------------------------------
*/

export const getTestimonials = async (
  req,
  res
) => {
  try {
    const testimonials =
      await testimonialService.getActiveTestimonials();

    res.status(200).json({
      success: true,
      data: testimonials,
    });
  } catch (error) {
    console.error(
      "Get Testimonials Error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch testimonials",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Get All Testimonials
|--------------------------------------------------------------------------
*/

export const getAllTestimonials = async (
  req,
  res
) => {
  try {
    const testimonials =
      await testimonialService.getAllTestimonials();

    res.status(200).json({
      success: true,
      data: testimonials,
    });
  } catch (error) {
    console.error(
      "Get All Testimonials Error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch testimonials",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Get Testimonial By ID
|--------------------------------------------------------------------------
*/

export const getTestimonialById = async (
  req,
  res
) => {
  try {
    const testimonial =
      await testimonialService.getTestimonialById(
        req.params.id
      );

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message:
          "Testimonial not found",
      });
    }

    res.status(200).json({
      success: true,
      data: testimonial,
    });
  } catch (error) {
    console.error(
      "Get Testimonial Error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch testimonial",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Create Testimonial
|--------------------------------------------------------------------------
*/

export const createTestimonial = async (
  req,
  res
) => {
  try {
    const {
      name,
      message,
    } = req.body;

    if (!name || !message) {
      return res.status(400).json({
        success: false,
        message:
          "Name and message are required",
      });
    }

    if (
      req.body.rating !== undefined &&
      (Number(req.body.rating) < 1 ||
        Number(req.body.rating) > 5)
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Rating must be between 1 and 5",
      });
    }

    const testimonial =
      await testimonialService.createTestimonial(
        req.body
      );

    res.status(201).json({
      success: true,
      message:
        "Testimonial created successfully",
      data: testimonial,
    });
  } catch (error) {
    console.error(
      "Create Testimonial Error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to create testimonial",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Update Testimonial
|--------------------------------------------------------------------------
*/

export const updateTestimonial = async (
  req,
  res
) => {
  try {
    if (
      req.body.rating !== undefined &&
      (Number(req.body.rating) < 1 ||
        Number(req.body.rating) > 5)
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Rating must be between 1 and 5",
      });
    }

    const testimonial =
      await testimonialService.updateTestimonial(
        req.params.id,
        req.body
      );

    res.status(200).json({
      success: true,
      message:
        "Testimonial updated successfully",
      data: testimonial,
    });
  } catch (error) {
    console.error(
      "Update Testimonial Error:",
      error
    );

    if (error.code === "P2025") {
      return res.status(404).json({
        success: false,
        message:
          "Testimonial not found",
      });
    }

    res.status(500).json({
      success: false,
      message:
        "Failed to update testimonial",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Toggle Status
|--------------------------------------------------------------------------
*/

export const toggleTestimonialStatus =
  async (req, res) => {
    try {
      const testimonial =
        await testimonialService.toggleTestimonialStatus(
          req.params.id
        );

      res.status(200).json({
        success: true,
        message: `Testimonial ${
          testimonial.isActive
            ? "activated"
            : "deactivated"
        } successfully`,
        data: testimonial,
      });
    } catch (error) {
      console.error(
        "Toggle Testimonial Error:",
        error
      );

      if (
        error.message ===
        "Testimonial not found"
      ) {
        return res.status(404).json({
          success: false,
          message: error.message,
        });
      }

      res.status(500).json({
        success: false,
        message:
          "Failed to update testimonial status",
      });
    }
  };

/*
|--------------------------------------------------------------------------
| Admin
| Delete Testimonial
|--------------------------------------------------------------------------
*/

export const deleteTestimonial = async (
  req,
  res
) => {
  try {
    await testimonialService.deleteTestimonial(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message:
        "Testimonial deleted successfully",
    });
  } catch (error) {
    console.error(
      "Delete Testimonial Error:",
      error
    );

    if (error.code === "P2025") {
      return res.status(404).json({
        success: false,
        message:
          "Testimonial not found",
      });
    }

    res.status(500).json({
      success: false,
      message:
        "Failed to delete testimonial",
    });
  }
};