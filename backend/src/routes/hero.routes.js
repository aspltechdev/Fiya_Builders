// // import express from "express";

// // import {
// //   getHero,
// //   getAllHeroes,
// //   getHeroById,
// //   createHero,
// //   updateHero,
// //   toggleHeroStatus,
// //   deleteHero,
// // } from "../controllers/hero.controller.js";

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

// // // Get active hero
// // router.get(
// //   "/",
// //   getHero
// // );

// // /*
// // |--------------------------------------------------------------------------
// // | Admin Routes
// // |--------------------------------------------------------------------------
// // */

// // // Get all hero banners
// // router.get(
// //   "/admin/all",
// //   authenticate,
// //   authorize("ADMIN"),
// //   getAllHeroes
// // );

// // // Get single hero
// // router.get(
// //   "/admin/:id",
// //   authenticate,
// //   authorize("ADMIN"),
// //   getHeroById
// // );

// // // Create hero
// // router.post(
// //   "/",
// //   authenticate,
// //   authorize("ADMIN"),
// //   createHero
// // );

// // // Update hero
// // router.put(
// //   "/:id",
// //   authenticate,
// //   authorize("ADMIN"),
// //   updateHero
// // );

// // // Toggle active/inactive
// // router.patch(
// //   "/:id/toggle",
// //   authenticate,
// //   authorize("ADMIN"),
// //   toggleHeroStatus
// // );

// // // Delete hero
// // router.delete(
// //   "/:id",
// //   authenticate,
// //   authorize("ADMIN"),
// //   deleteHero
// // );

// // export default router;
// // backend/src/routes/hero.routes.js
// import express from "express";
// import {
//     getHero,
//     getAllHeroes,
//     getHeroById,
//     createHero,
//     updateHero,
//     toggleHeroStatus,
//     deleteHero,
// } from "../controllers/hero.controller.js";
// import {
//     authenticate,
//     authorize,
// } from "../middleware/auth.middleware.js";

// const router = express.Router();

// // Public Routes
// router.get("/", getHero);

// // Admin Routes
// router.get("/admin/all", authenticate, authorize("ADMIN"), getAllHeroes);
// router.get("/admin/:id", authenticate, authorize("ADMIN"), getHeroById);
// router.post("/", authenticate, authorize("ADMIN"), createHero);
// router.put("/:id", authenticate, authorize("ADMIN"), updateHero);
// router.patch("/:id/toggle", authenticate, authorize("ADMIN"), toggleHeroStatus);
// router.delete("/:id", authenticate, authorize("ADMIN"), deleteHero);

// export default router;


// backend/src/routes/hero.routes.js
import express from "express";
import {
    getHero,
    getAllHeroes,
    getHeroById,
    createHero,
    updateHero,
    toggleHeroStatus,
    deleteHero,
} from "../controllers/hero.controller.js";
import {
    authenticate,
    authorize,
} from "../middleware/auth.middleware.js";
import { uploadSingle } from "../middleware/upload.middleware.js";

const router = express.Router();

// Public Routes
router.get("/", getHero);

// Admin Routes
router.get("/admin/all", authenticate, authorize("ADMIN"), getAllHeroes);
router.get("/admin/:id", authenticate, authorize("ADMIN"), getHeroById);

// Create hero with image upload (using 'hero' folder)
router.post(
    "/", 
    authenticate, 
    authorize("ADMIN"), 
    uploadSingle("hero", "image"),  // ✅ Folder name: 'hero', Field name: 'image'
    createHero
);

// Update hero with image upload
router.put(
    "/:id", 
    authenticate, 
    authorize("ADMIN"), 
    uploadSingle("hero", "image"),  // ✅ Folder name: 'hero', Field name: 'image'
    updateHero
);

router.patch("/:id/toggle", authenticate, authorize("ADMIN"), toggleHeroStatus);
router.delete("/:id", authenticate, authorize("ADMIN"), deleteHero);

export default router;