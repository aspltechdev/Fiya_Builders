import express from "express";

import {
  getTestimonials,
  getAllTestimonials,
  getTestimonialById,
  createTestimonial,
  updateTestimonial,
  toggleTestimonialStatus,
  deleteTestimonial,
} from "../controllers/testimonial.controller.js";

import {
  authenticate,
  authorize,
} from "../middleware/auth.middleware.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

// Active testimonials
router.get(
  "/",
  getTestimonials
);

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
*/

// Get all
router.get(
  "/admin/all",
  authenticate,
  authorize("ADMIN"),
  getAllTestimonials
);

// Get by ID
router.get(
  "/admin/:id",
  authenticate,
  authorize("ADMIN"),
  getTestimonialById
);

// Create
router.post(
  "/",
  authenticate,
  authorize("ADMIN"),
  createTestimonial
);

// Update
router.put(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  updateTestimonial
);

// Toggle active/inactive
router.patch(
  "/:id/toggle",
  authenticate,
  authorize("ADMIN"),
  toggleTestimonialStatus
);

// Delete
router.delete(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  deleteTestimonial
);

export default router;