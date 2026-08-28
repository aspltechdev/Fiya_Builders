// // backend/src/routes/socialMedia.routes.js
// import express from "express";
// import {
//   getSocialMedia,
//   getAllSocialMediaAdmin,
//   getSocialMediaById,
//   createSocialMedia,
//   updateSocialMedia,
//   toggleSocialMediaStatus,
//   deleteSocialMedia,
// } from "../controllers/socialMedia.controller.js";
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

// // Get all active social media links
// router.get("/", getSocialMedia);

// /*
// |--------------------------------------------------------------------------
// | Admin Routes
// |--------------------------------------------------------------------------
// */

// // Get all social media links (admin)
// router.get(
//   "/admin/all",
//   authenticate,
//   authorize("ADMIN"),
//   getAllSocialMediaAdmin
// );

// // Get social media by ID
// router.get(
//   "/admin/:id",
//   authenticate,
//   authorize("ADMIN"),
//   getSocialMediaById
// );

// // Create social media
// router.post(
//   "/admin",
//   authenticate,
//   authorize("ADMIN"),
//   createSocialMedia
// );

// // Update social media
// router.put(
//   "/admin/:id",
//   authenticate,
//   authorize("ADMIN"),
//   updateSocialMedia
// );

// // Toggle status
// router.patch(
//   "/admin/:id/toggle",
//   authenticate,
//   authorize("ADMIN"),
//   toggleSocialMediaStatus
// );

// // Delete
// router.delete(
//   "/admin/:id",
//   authenticate,
//   authorize("ADMIN"),
//   deleteSocialMedia
// );

// export default router;


// backend/src/routes/socialMedia.routes.js
import express from "express";
import {
  getSocialMedia,
  getAllSocialMediaAdmin,
  getSocialMediaById,
  createSocialMedia,
  updateSocialMedia,
  toggleSocialMediaStatus,
  deleteSocialMedia,
} from "../controllers/socialMedia.controller.js";
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

// Get all active social media links
router.get("/", getSocialMedia);

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
*/

// Get all social media links (admin)
router.get(
  "/admin/all",
  authenticate,
  authorize("ADMIN"),
  getAllSocialMediaAdmin
);

// Get social media by ID
router.get(
  "/admin/:id",
  authenticate,
  authorize("ADMIN"),
  getSocialMediaById
);

// Create social media
router.post(
  "/admin",
  authenticate,
  authorize("ADMIN"),
  createSocialMedia
);

// Update social media
router.put(
  "/admin/:id",
  authenticate,
  authorize("ADMIN"),
  updateSocialMedia
);

// Toggle status
router.patch(
  "/admin/:id/toggle",
  authenticate,
  authorize("ADMIN"),
  toggleSocialMediaStatus
);

// Delete
router.delete(
  "/admin/:id",
  authenticate,
  authorize("ADMIN"),
  deleteSocialMedia
);

export default router;