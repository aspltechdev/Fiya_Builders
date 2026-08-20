import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import prisma from "../config/prisma.js";

/*
|--------------------------------------------------------------------------
| LOGIN USER
|--------------------------------------------------------------------------
*/

export const loginUser = async ({
  email,
  password,
}) => {
  // Normalize email
  const normalizedEmail =
    email.trim().toLowerCase();

  // Find user
  const user =
    await prisma.user.findUnique({
      where: {
        email: normalizedEmail,
      },
    });

  if (!user) {
    throw new Error(
      "Invalid email or password"
    );
  }

  // Check password
  const passwordMatch =
    await bcrypt.compare(
      password,
      user.password
    );

  if (!passwordMatch) {
    throw new Error(
      "Invalid email or password"
    );
  }

  // Admin check
  if (user.role !== "ADMIN") {
    throw new Error(
      "Admin access required"
    );
  }

  // JWT secret check
  if (!process.env.JWT_SECRET) {
    throw new Error(
      "JWT_SECRET is not configured"
    );
  }

  // Create token
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

  return {
    token,

    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  };
};


/*
|--------------------------------------------------------------------------
| GET CURRENT USER
|--------------------------------------------------------------------------
*/

export const getCurrentUser = async (
  userId
) => {
  const user =
    await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });

  if (!user) {
    throw new Error(
      "User not found"
    );
  }

  return user;
};


/*
|--------------------------------------------------------------------------
| CREATE ADMIN
|--------------------------------------------------------------------------
*/

export const createAdmin = async ({
  name,
  email,
  password,
}) => {
  const normalizedEmail =
    email.trim().toLowerCase();

  // Check existing user
  const existingUser =
    await prisma.user.findUnique({
      where: {
        email: normalizedEmail,
      },
    });

  if (existingUser) {
    throw new Error(
      "User with this email already exists"
    );
  }

  // Hash password
  const hashedPassword =
    await bcrypt.hash(
      password,
      10
    );

  // Create admin
  const user =
    await prisma.user.create({
      data: {
        name,
        email: normalizedEmail,
        password: hashedPassword,
        role: "ADMIN",
      },

      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

  return user;
};