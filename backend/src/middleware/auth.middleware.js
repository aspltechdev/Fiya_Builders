import jwt from "jsonwebtoken";
import prisma from "../config/prisma.js";

export const authenticate = async (
  req,
  res,
  next
) => {
  try {
    const authHeader =
      req.headers.authorization;

    if (
      !authHeader ||
      !authHeader.startsWith("Bearer ")
    ) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const token =
      authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    const user =
      await prisma.user.findUnique({
        where: {
          id: decoded.id,
        },
      });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    console.error(
      "Authentication Error:",
      error
    );

    return res.status(401).json({
      success: false,
      message:
        "Invalid or expired token",
    });
  }
};

export const authorize = (...roles) => {
  return (req, res, next) => {
    if (
      !req.user ||
      !roles.includes(req.user.role)
    ) {
      return res.status(403).json({
        success: false,
        message: "Access denied",
      });
    }

    next();
  };
};