// import dotenv from "dotenv";
// import app from "./app.js";
// import prisma from "./config/prisma.js";

// dotenv.config();

// const PORT = process.env.PORT || 5000;

// const startServer = async () => {
//   try {
//     await prisma.$connect();

//     console.log("✅ PostgreSQL connected");

//     app.listen(PORT, () => {
//       console.log(
//         `🚀 FIYA Builders API running on http://localhost:${PORT}`
//       );
//     });
//   } catch (error) {
//     console.error(
//       "❌ Database connection failed:",
//       error
//     );

//     process.exit(1);
//   }
// };

// startServer();

// backend/src/server.js
import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import app from "./app.js";
import prisma from "./config/prisma.js";

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await prisma.$connect();

    console.log("✅ PostgreSQL connected");

    // Serve static files from uploads directory
    app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

    app.listen(PORT, () => {
      console.log(
        `🚀 FIYA Builders API running on http://localhost:${PORT}`
      );
    });
  } catch (error) {
    console.error(
      "❌ Database connection failed:",
      error
    );

    process.exit(1);
  }
};

startServer();