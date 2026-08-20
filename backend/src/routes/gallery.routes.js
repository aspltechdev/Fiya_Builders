// import express from "express";

// import {
//   getGallery,
//   getGalleryByCategory,
//   getAllGallery,
//   getGalleryById,
//   createGallery,
//   updateGallery,
//   toggleGalleryStatus,
//   deleteGallery,
// } from "../controllers/gallery.controller.js";

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

// // Active gallery
// router.get(
//   "/",
//   getGallery
// );

// // Gallery by category
// router.get(
//   "/category/:category",
//   getGalleryByCategory
// );

// /*
// |--------------------------------------------------------------------------
// | Admin Routes
// |--------------------------------------------------------------------------
// */

// // All gallery items
// router.get(
//   "/admin/all",
//   authenticate,
//   authorize("ADMIN"),
//   getAllGallery
// );

// // Single gallery item
// router.get(
//   "/admin/:id",
//   authenticate,
//   authorize("ADMIN"),
//   getGalleryById
// );

// // Create
// router.post(
//   "/",
//   authenticate,
//   authorize("ADMIN"),
//   createGallery
// );

// // Update
// router.put(
//   "/:id",
//   authenticate,
//   authorize("ADMIN"),
//   updateGallery
// );

// // Toggle active/inactive
// router.patch(
//   "/:id/toggle",
//   authenticate,
//   authorize("ADMIN"),
//   toggleGalleryStatus
// );

// // Delete
// router.delete(
//   "/:id",
//   authenticate,
//   authorize("ADMIN"),
//   deleteGallery
// );

// export default router;
// backend/src/routes/gallery.routes.js
import express from "express";

import {
  getGallery,
  getGalleryByCategory,
  getAllGallery,
  getGalleryById,
  createGallery,
  updateGallery,
  toggleGalleryStatus,
  deleteGallery,
} from "../controllers/gallery.controller.js";

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

// Active gallery
router.get("/", getGallery);

// Gallery by category
router.get("/category/:category", getGalleryByCategory);

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
*/

// All gallery items
router.get(
  "/admin/all",
  authenticate,
  authorize("ADMIN"),
  getAllGallery
);

// Single gallery item
router.get(
  "/admin/:id",
  authenticate,
  authorize("ADMIN"),
  getGalleryById
);

// ✅ Create - with image upload
router.post(
  "/",
  authenticate,
  authorize("ADMIN"),
  uploadSingle("gallery", "image"), // Folder: 'gallery', Field: 'image'
  createGallery
);

// ✅ Update - with image upload
router.put(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  uploadSingle("gallery", "image"), // Folder: 'gallery', Field: 'image'
  updateGallery
);

// Toggle active/inactive
router.patch(
  "/:id/toggle",
  authenticate,
  authorize("ADMIN"),
  toggleGalleryStatus
);

// Delete
router.delete(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  deleteGallery
);

export default router;