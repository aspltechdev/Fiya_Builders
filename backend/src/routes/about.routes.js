import express from "express";

import {
  getAbout,
  getAllAbout,
  getAboutById,
  createAbout,
  updateAbout,
  toggleAboutStatus,
  deleteAbout,
} from "../controllers/about.controller.js";

import {
  authenticate,
  authorize,
} from "../middleware/auth.middleware.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Public
|--------------------------------------------------------------------------
*/

router.get(
  "/",
  getAbout
);

/*
|--------------------------------------------------------------------------
| Admin
|--------------------------------------------------------------------------
*/

router.get(
  "/admin/all",
  authenticate,
  authorize("ADMIN"),
  getAllAbout
);

router.get(
  "/admin/:id",
  authenticate,
  authorize("ADMIN"),
  getAboutById
);

router.post(
  "/",
  authenticate,
  authorize("ADMIN"),
  createAbout
);

router.put(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  updateAbout
);

router.patch(
  "/:id/toggle",
  authenticate,
  authorize("ADMIN"),
  toggleAboutStatus
);

router.delete(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  deleteAbout
);

export default router;