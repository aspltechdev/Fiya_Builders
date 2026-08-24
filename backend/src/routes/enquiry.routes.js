// import express from "express";

// import {
//   createEnquiry,
//   getAllEnquiries,
//   getEnquiryById,
//   getNewEnquiries,
//   getEnquiriesByStatus,
//   updateEnquiryStatus,
//   deleteEnquiry,
// } from "../controllers/enquiry.controller.js";

// import {
//   authenticate,
//   authorize,
// } from "../middleware/auth.middleware.js";

// const router = express.Router();

// /*
// |--------------------------------------------------------------------------
// | Public Routes
// |--------------------------------------------------------------------------
// */

// // Contact form submission
// router.post(
//   "/",
//   createEnquiry
// );

// /*
// |--------------------------------------------------------------------------
// | Admin Routes
// |--------------------------------------------------------------------------
// */

// // All enquiries
// router.get(
//   "/",
//   authenticate,
//   authorize("ADMIN"),
//   getAllEnquiries
// );

// // New enquiries
// router.get(
//   "/new",
//   authenticate,
//   authorize("ADMIN"),
//   getNewEnquiries
// );

// // Enquiries by status
// router.get(
//   "/status/:status",
//   authenticate,
//   authorize("ADMIN"),
//   getEnquiriesByStatus
// );

// // Single enquiry
// router.get(
//   "/:id",
//   authenticate,
//   authorize("ADMIN"),
//   getEnquiryById
// );

// // Update status
// router.patch(
//   "/:id/status",
//   authenticate,
//   authorize("ADMIN"),
//   updateEnquiryStatus
// );

// // Delete
// router.delete(
//   "/:id",
//   authenticate,
//   authorize("ADMIN"),
//   deleteEnquiry
// );

// export default router;

// backend/src/routes/enquiry.routes.js
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
router.post("/", createEnquiry);

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
*/

// ✅ IMPORTANT: Put specific routes BEFORE generic ones with params

// Get all enquiries
router.get(
  "/admin/all",
  authenticate,
  authorize("ADMIN"),
  getAllEnquiries
);

// Get new enquiries
router.get(
  "/admin/new",
  authenticate,
  authorize("ADMIN"),
  getNewEnquiries
);

// Get enquiries by status
router.get(
  "/admin/status/:status",
  authenticate,
  authorize("ADMIN"),
  getEnquiriesByStatus
);

// Get single enquiry by ID (must come AFTER specific routes)
router.get(
  "/admin/:id",
  authenticate,
  authorize("ADMIN"),
  getEnquiryById
);

// Update status
router.patch(
  "/admin/:id/status",
  authenticate,
  authorize("ADMIN"),
  updateEnquiryStatus
);

// Delete
router.delete(
  "/admin/:id",
  authenticate,
  authorize("ADMIN"),
  deleteEnquiry
);

export default router;