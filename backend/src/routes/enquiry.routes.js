import express from "express";

import {
  createEnquiry,
  getAllEnquiries,
  getEnquiryById,
  getNewEnquiries,
  getEnquiriesByStatus,
  updateEnquiryStatus,
  deleteEnquiry,
} from "../controllers/enquiry.controller.js";

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

// Contact form submission
router.post(
  "/",
  createEnquiry
);

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
*/

// All enquiries
router.get(
  "/",
  authenticate,
  authorize("ADMIN"),
  getAllEnquiries
);

// New enquiries
router.get(
  "/new",
  authenticate,
  authorize("ADMIN"),
  getNewEnquiries
);

// Enquiries by status
router.get(
  "/status/:status",
  authenticate,
  authorize("ADMIN"),
  getEnquiriesByStatus
);

// Single enquiry
router.get(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  getEnquiryById
);

// Update status
router.patch(
  "/:id/status",
  authenticate,
  authorize("ADMIN"),
  updateEnquiryStatus
);

// Delete
router.delete(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  deleteEnquiry
);

export default router;