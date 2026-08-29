// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import path from "path";

// import authRoutes from "./routes/auth.routes.js";
// import dashboardRoutes from "./routes/dashboard.routes.js";

// import heroRoutes from "./routes/hero.routes.js";
// import aboutRoutes from "./routes/about.routes.js";
// import serviceRoutes from "./routes/service.routes.js";
// import projectRoutes from "./routes/project.routes.js";
// import galleryRoutes from "./routes/gallery.routes.js";
// import testimonialRoutes from "./routes/testimonial.routes.js";
// import enquiryRoutes from "./routes/enquiry.routes.js";
// import socialMediaRoutes from "./routes/socialMedia.routes.js";

// dotenv.config();

// const app = express();

// /*
// |--------------------------------------------------------------------------
// | CORS
// |--------------------------------------------------------------------------
// */

// app.use(
//   cors({
//     origin: process.env.FRONTEND_URL,
//     credentials: true,
//   })
// );

// /*
// |--------------------------------------------------------------------------
// | Body Parser
// |--------------------------------------------------------------------------
// */

// app.use(express.json());

// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );

// /*
// |--------------------------------------------------------------------------
// | Static Uploads
// |--------------------------------------------------------------------------
// */

// app.use(
//   "/uploads",
//   express.static(
//     path.join(process.cwd(), "uploads")
//   )
// );

// /*
// |--------------------------------------------------------------------------
// | Health Check
// |--------------------------------------------------------------------------
// */

// app.get("/api/health", (req, res) => {
//   res.json({
//     success: true,
//     message: "FIYA Builders API is running",
//   });
// });

// /*
// |--------------------------------------------------------------------------
// | API Routes
// |--------------------------------------------------------------------------
// */

// /*
//  * Authentication
//  */
// app.use(
//   "/api/auth",
//   authRoutes
// );

// /*
//  * Dashboard
//  */
// app.use(
//   "/api/dashboard",
//   dashboardRoutes
// );

// /*
//  * Hero
//  */
// app.use(
//   "/api/hero",
//   heroRoutes
// );

// /*
//  * About
//  */
// app.use(
//   "/api/about",
//   aboutRoutes
// );

// /*
//  * Services
//  */
// app.use(
//   "/api/services",
//   serviceRoutes
// );

// /*
//  * Projects
//  */
// app.use(
//   "/api/projects",
//   projectRoutes
// );

// /*
//  * Gallery
//  */
// app.use(
//   "/api/gallery",
//   galleryRoutes
// );

// /*
//  * Testimonials
//  */
// app.use(
//   "/api/testimonials",
//   testimonialRoutes
// );

// /*
//  * Enquiries
//  */
// app.use(
//   "/api/enquiries",
//   enquiryRoutes
// );

// app.use("/api/social-media", socialMediaRoutes);

// /*
// |--------------------------------------------------------------------------
// | 404 - Route Not Found
// |--------------------------------------------------------------------------
// */

// app.use((req, res) => {
//   res.status(404).json({
//     success: false,
//     message: "Route not found",
//   });
// });

// /*
// |--------------------------------------------------------------------------
// | Export
// |--------------------------------------------------------------------------
// */

// export default app;


import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import authRoutes from "./routes/auth.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";

import heroRoutes from "./routes/hero.routes.js";
import aboutRoutes from "./routes/about.routes.js";
import serviceRoutes from "./routes/service.routes.js";
import projectRoutes from "./routes/project.routes.js";
import galleryRoutes from "./routes/gallery.routes.js";
import testimonialRoutes from "./routes/testimonial.routes.js";
import enquiryRoutes from "./routes/enquiry.routes.js";
import socialMediaRoutes from "./routes/socialMedia.routes.js";

dotenv.config();

const app = express();

/*
|--------------------------------------------------------------------------
| CORS
|--------------------------------------------------------------------------
*/

const allowedOrigins = [
  process.env.FRONTEND_URL,
  "https://fiyabuilders.in",
  "https://www.fiyabuilders.in",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests without origin
      // such as Postman/server-side requests
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(
        new Error("Not allowed by CORS")
      );
    },

    credentials: true,
  })
);

/*
|--------------------------------------------------------------------------
| Body Parser
|--------------------------------------------------------------------------
*/

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

/*
|--------------------------------------------------------------------------
| Static Uploads
|--------------------------------------------------------------------------
|
| Files:
| backend/uploads/
|
| Public URL:
| https://fiyabuilders.in/uploads/...
|
*/

app.use(
  "/uploads",
  express.static(
    path.join(process.cwd(), "uploads")
  )
);

/*
|--------------------------------------------------------------------------
| Health Check
|--------------------------------------------------------------------------
*/

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "FIYA Builders API is running",
    environment:
      process.env.NODE_ENV || "development",
  });
});

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Authentication
|--------------------------------------------------------------------------
*/

app.use(
  "/api/auth",
  authRoutes
);

/*
|--------------------------------------------------------------------------
| Dashboard
|--------------------------------------------------------------------------
*/

app.use(
  "/api/dashboard",
  dashboardRoutes
);

/*
|--------------------------------------------------------------------------
| Hero
|--------------------------------------------------------------------------
*/

app.use(
  "/api/hero",
  heroRoutes
);

/*
|--------------------------------------------------------------------------
| About
|--------------------------------------------------------------------------
*/

app.use(
  "/api/about",
  aboutRoutes
);

/*
|--------------------------------------------------------------------------
| Services
|--------------------------------------------------------------------------
*/

app.use(
  "/api/services",
  serviceRoutes
);

/*
|--------------------------------------------------------------------------
| Projects
|--------------------------------------------------------------------------
*/

app.use(
  "/api/projects",
  projectRoutes
);

/*
|--------------------------------------------------------------------------
| Gallery
|--------------------------------------------------------------------------
*/

app.use(
  "/api/gallery",
  galleryRoutes
);

/*
|--------------------------------------------------------------------------
| Testimonials
|--------------------------------------------------------------------------
*/

app.use(
  "/api/testimonials",
  testimonialRoutes
);

/*
|--------------------------------------------------------------------------
| Enquiries
|--------------------------------------------------------------------------
*/

app.use(
  "/api/enquiries",
  enquiryRoutes
);

/*
|--------------------------------------------------------------------------
| Social Media
|--------------------------------------------------------------------------
*/

app.use(
  "/api/social-media",
  socialMediaRoutes
);

/*
|--------------------------------------------------------------------------
| 404 - Route Not Found
|--------------------------------------------------------------------------
*/

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.originalUrl,
  });
});

/*
|--------------------------------------------------------------------------
| Global Error Handler
|--------------------------------------------------------------------------
*/

app.use(
  (error, req, res, next) => {
    console.error(
      "API Error:",
      error
    );

    if (
      error.message ===
      "Not allowed by CORS"
    ) {
      return res.status(403).json({
        success: false,
        message: "CORS origin not allowed",
      });
    }

    res.status(
      error.status || 500
    ).json({
      success: false,
      message:
        process.env.NODE_ENV ===
        "production"
          ? "Internal server error"
          : error.message,
    });
  }
);

/*
|--------------------------------------------------------------------------
| Export
|--------------------------------------------------------------------------
*/

export default app;