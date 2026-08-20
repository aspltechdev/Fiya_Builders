// import express from "express";

// import {
//   getServices,
//   getServiceBySlug,
//   getAllServices,
//   getServiceById,
//   createService,
//   updateService,
//   toggleServiceStatus,
//   updateServiceOrder,
//   deleteService,
// } from "../controllers/service.controller.js";

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

// // Active services
// router.get(
//   "/",
//   getServices
// );

// // Service details
// router.get(
//   "/slug/:slug",
//   getServiceBySlug
// );

// /*
// |--------------------------------------------------------------------------
// | Admin Routes
// |--------------------------------------------------------------------------
// */

// // All services
// router.get(
//   "/admin/all",
//   authenticate,
//   authorize("ADMIN"),
//   getAllServices
// );

// // Single service
// router.get(
//   "/admin/:id",
//   authenticate,
//   authorize("ADMIN"),
//   getServiceById
// );

// // Create
// router.post(
//   "/",
//   authenticate,
//   authorize("ADMIN"),
//   createService
// );

// // Update
// router.put(
//   "/:id",
//   authenticate,
//   authorize("ADMIN"),
//   updateService
// );

// // Toggle active/inactive
// router.patch(
//   "/:id/toggle",
//   authenticate,
//   authorize("ADMIN"),
//   toggleServiceStatus
// );

// // Update display order
// router.patch(
//   "/:id/order",
//   authenticate,
//   authorize("ADMIN"),
//   updateServiceOrder
// );

// // Delete
// router.delete(
//   "/:id",
//   authenticate,
//   authorize("ADMIN"),
//   deleteService
// );

// export default router;


// backend/src/routes/service.routes.js
import express from "express";
import {
  getServices,
  getServiceBySlug,
  getAllServices,
  getServiceById,
  createService,
  updateService,
  toggleServiceStatus,
  updateServiceOrder,
  deleteService,
} from "../controllers/service.controller.js";
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

// Active services
router.get("/", getServices);

// Service details
router.get("/slug/:slug", getServiceBySlug);

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
*/

// All services
router.get(
  "/admin/all",
  authenticate,
  authorize("ADMIN"),
  getAllServices
);

// Single service
router.get(
  "/admin/:id",
  authenticate,
  authorize("ADMIN"),
  getServiceById
);

// ✅ Create - with image upload
router.post(
  "/",
  authenticate,
  authorize("ADMIN"),
  uploadSingle("services", "image"), // Folder: 'services', Field: 'image'
  createService
);

// ✅ Update - with image upload
router.put(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  uploadSingle("services", "image"), // Folder: 'services', Field: 'image'
  updateService
);

// Toggle active/inactive
router.patch(
  "/:id/toggle",
  authenticate,
  authorize("ADMIN"),
  toggleServiceStatus
);

// Update display order
router.patch(
  "/:id/order",
  authenticate,
  authorize("ADMIN"),
  updateServiceOrder
);

// Delete
router.delete(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  deleteService
);

export default router;