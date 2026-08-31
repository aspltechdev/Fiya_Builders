// // import express from "express";

// // import {
// //   getTestimonials,
// //   getAllTestimonials,
// //   getTestimonialById,
// //   createTestimonial,
// //   updateTestimonial,
// //   toggleTestimonialStatus,
// //   deleteTestimonial,
// // } from "../controllers/testimonial.controller.js";

// // import {
// //   authenticate,
// //   authorize,
// // } from "../middleware/auth.middleware.js";

// // const router = express.Router();

// // /*
// // |--------------------------------------------------------------------------
// // | Public Routes
// // |--------------------------------------------------------------------------
// // */

// // // Active testimonials
// // router.get(
// //   "/",
// //   getTestimonials
// // );

// // /*
// // |--------------------------------------------------------------------------
// // | Admin Routes
// // |--------------------------------------------------------------------------
// // */

// // // Get all
// // router.get(
// //   "/admin/all",
// //   authenticate,
// //   authorize("ADMIN"),
// //   getAllTestimonials
// // );

// // // Get by ID
// // router.get(
// //   "/admin/:id",
// //   authenticate,
// //   authorize("ADMIN"),
// //   getTestimonialById
// // );

// // // Create
// // router.post(
// //   "/",
// //   authenticate,
// //   authorize("ADMIN"),
// //   createTestimonial
// // );

// // // Update
// // router.put(
// //   "/:id",
// //   authenticate,
// //   authorize("ADMIN"),
// //   updateTestimonial
// // );

// // // Toggle active/inactive
// // router.patch(
// //   "/:id/toggle",
// //   authenticate,
// //   authorize("ADMIN"),
// //   toggleTestimonialStatus
// // );

// // // Delete
// // router.delete(
// //   "/:id",
// //   authenticate,
// //   authorize("ADMIN"),
// //   deleteTestimonial
// // );

// // export default router;

// // backend/src/routes/testimonial.routes.js
// import express from "express";

// import {
//   getTestimonials,
//   getAllTestimonials,
//   getTestimonialById,
//   createTestimonial,
//   updateTestimonial,
//   toggleTestimonialStatus,
//   deleteTestimonial,
// } from "../controllers/testimonial.controller.js";

// import {
//   authenticate,
//   authorize,
// } from "../middleware/auth.middleware.js";

// import { uploadSingle } from "../middleware/upload.middleware.js";

// const router = express.Router();

// /*
// |--------------------------------------------------------------------------
// | Public Routes
// |--------------------------------------------------------------------------
// */

// // Active testimonials
// router.get("/", getTestimonials);

// /*
// |--------------------------------------------------------------------------
// | Admin Routes
// |--------------------------------------------------------------------------
// */

// // Get all
// router.get(
//   "/admin/all",
//   authenticate,
//   authorize("ADMIN"),
//   getAllTestimonials
// );

// // Get by ID
// router.get(
//   "/admin/:id",
//   authenticate,
//   authorize("ADMIN"),
//   getTestimonialById
// );

// // ✅ Create - with image upload
// router.post(
//   "/",
//   authenticate,
//   authorize("ADMIN"),
//   uploadSingle("testimonials", "image"), // Folder: 'testimonials', Field: 'image'
//   createTestimonial
// );

// // ✅ Update - with image upload
// router.put(
//   "/:id",
//   authenticate,
//   authorize("ADMIN"),
//   uploadSingle("testimonials", "image"), // Folder: 'testimonials', Field: 'image'
//   updateTestimonial
// );

// // Toggle active/inactive
// router.patch(
//   "/:id/toggle",
//   authenticate,
//   authorize("ADMIN"),
//   toggleTestimonialStatus
// );

// // Delete
// router.delete(
//   "/:id",
//   authenticate,
//   authorize("ADMIN"),
//   deleteTestimonial
// );

// export default router;

// backend/src/routes/testimonial.routes.js
// import express from "express";

// import {
//   getTestimonials,
//   getAllTestimonials,
//   getTestimonialById,
//   createTestimonial,
//   updateTestimonial,
//   toggleTestimonialStatus,
//   deleteTestimonial,
// } from "../controllers/testimonial.controller.js";

// import {
//   authenticate,
//   authorize,
// } from "../middleware/auth.middleware.js";

// import { uploadSingle } from "../middleware/upload.middleware.js";

// const router = express.Router();

// /*
// |--------------------------------------------------------------------------
// | Public Routes
// |--------------------------------------------------------------------------
// */

// // ✅ Get active testimonials for website
// router.get("/", getTestimonials);

// // ✅ Submit testimonial (public - no auth required)
// router.post(
//   "/submit",
//   uploadSingle("testimonials", "image"),
//   createTestimonial
// );

// /*
// |--------------------------------------------------------------------------
// | Admin Routes
// |--------------------------------------------------------------------------
// */

// // ✅ Get all testimonials (admin)
// router.get(
//   "/admin/all",
//   authenticate,
//   authorize("ADMIN"),
//   getAllTestimonials
// );

// // Get by ID
// router.get(
//   "/admin/:id",
//   authenticate,
//   authorize("ADMIN"),
//   getTestimonialById
// );

// // Update testimonial (admin)
// router.put(
//   "/admin/:id",
//   authenticate,
//   authorize("ADMIN"),
//   uploadSingle("testimonials", "image"),
//   updateTestimonial
// );

// // Toggle active/inactive (admin)
// router.patch(
//   "/admin/:id/toggle",
//   authenticate,
//   authorize("ADMIN"),
//   toggleTestimonialStatus
// );

// // Delete (admin)
// router.delete(
//   "/admin/:id",
//   authenticate,
//   authorize("ADMIN"),
//   deleteTestimonial
// );

// export default router;

import express from "express";

import {
  getTestimonials,
  getAllTestimonials,
  getTestimonialById,
  createTestimonial,
  submitTestimonial,
  updateTestimonial,
  toggleTestimonialStatus,
  deleteTestimonial,
} from "../controllers/testimonial.controller.js";

import {
  authenticate,
  authorize,
} from "../middleware/auth.middleware.js";

import { uploadSingle } from "../middleware/upload.middleware.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

// Get active testimonials for website
router.get(
  "/",
  getTestimonials
);


// Submit testimonial - Public
router.post(
  "/submit",
  uploadSingle("testimonials", "image"),
  submitTestimonial
);


/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
*/

// Get all testimonials
router.get(
  "/admin/all",
  authenticate,
  authorize("ADMIN"),
  getAllTestimonials
);


// Get testimonial by ID
router.get(
  "/admin/:id",
  authenticate,
  authorize("ADMIN"),
  getTestimonialById
);


// Create testimonial
router.post(
  "/admin",
  authenticate,
  authorize("ADMIN"),
  uploadSingle("testimonials", "image"),
  createTestimonial
);


// Update testimonial
router.put(
  "/admin/:id",
  authenticate,
  authorize("ADMIN"),
  uploadSingle("testimonials", "image"),
  updateTestimonial
);


// Toggle active/inactive
router.patch(
  "/admin/:id/toggle",
  authenticate,
  authorize("ADMIN"),
  toggleTestimonialStatus
);


// Delete
router.delete(
  "/admin/:id",
  authenticate,
  authorize("ADMIN"),
  deleteTestimonial
);


export default router;