// import express from "express";

// import {
//   getProjects,
//   getFeaturedProjects,
//   getProjectBySlug,
//   getAllProjects,
//   getProjectById,
//   createProject,
//   updateProject,
//   deleteProject,
//   toggleProjectStatus,
//   toggleProjectFeatured,
// } from "../controllers/project.controller.js";

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

// // All active projects
// router.get(
//   "/",
//   getProjects
// );

// // Featured projects
// router.get(
//   "/featured",
//   getFeaturedProjects
// );

// // Project details by slug
// router.get(
//   "/slug/:slug",
//   getProjectBySlug
// );

// /*
// |--------------------------------------------------------------------------
// | Admin Routes
// |--------------------------------------------------------------------------
// */

// // Get all projects
// router.get(
//   "/admin/all",
//   authenticate,
//   authorize("ADMIN"),
//   getAllProjects
// );

// // Get project by ID
// router.get(
//   "/admin/:id",
//   authenticate,
//   authorize("ADMIN"),
//   getProjectById
// );

// // Create project
// router.post(
//   "/",
//   authenticate,
//   authorize("ADMIN"),
//   createProject
// );

// // Update project
// router.put(
//   "/:id",
//   authenticate,
//   authorize("ADMIN"),
//   updateProject
// );

// // Toggle active/inactive
// router.patch(
//   "/:id/toggle",
//   authenticate,
//   authorize("ADMIN"),
//   toggleProjectStatus
// );

// // Toggle featured
// router.patch(
//   "/:id/featured",
//   authenticate,
//   authorize("ADMIN"),
//   toggleProjectFeatured
// );

// // Delete project
// router.delete(
//   "/:id",
//   authenticate,
//   authorize("ADMIN"),
//   deleteProject
// );

// export default router;

// backend/src/routes/project.routes.js
import express from "express";

import {
  getProjects,
  getFeaturedProjects,
  getProjectBySlug,
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  toggleProjectStatus,
  toggleProjectFeatured,
} from "../controllers/project.controller.js";

import {
  authenticate,
  authorize,
} from "../middleware/auth.middleware.js";

import { uploadFields } from "../middleware/upload.middleware.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

// All active projects
router.get("/", getProjects);

// Featured projects
router.get("/featured", getFeaturedProjects);

// Project details by slug
router.get("/slug/:slug", getProjectBySlug);

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
*/

// Get all projects
router.get(
  "/admin/all",
  authenticate,
  authorize("ADMIN"),
  getAllProjects
);

// Get project by ID
router.get(
  "/admin/:id",
  authenticate,
  authorize("ADMIN"),
  getProjectById
);

// ✅ Create project with multiple image uploads (featuredImage + gallery)
router.post(
  "/",
  authenticate,
  authorize("ADMIN"),
  uploadFields("projects", [
    { name: "featuredImage", maxCount: 1 },
    { name: "gallery", maxCount: 10 },
  ]),
  createProject
);

// ✅ Update project with multiple image uploads
router.put(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  uploadFields("projects", [
    { name: "featuredImage", maxCount: 1 },
    { name: "gallery", maxCount: 10 },
  ]),
  updateProject
);

// Toggle active/inactive
router.patch(
  "/:id/toggle",
  authenticate,
  authorize("ADMIN"),
  toggleProjectStatus
);

// Toggle featured
router.patch(
  "/:id/featured",
  authenticate,
  authorize("ADMIN"),
  toggleProjectFeatured
);

// Delete project
router.delete(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  deleteProject
);

export default router;