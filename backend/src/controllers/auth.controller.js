import * as authService from "../services/auth.service.js";

/**
 * Login
 */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message:
          "Email and password are required",
      });
    }

    const result = await authService.loginUser({
      email,
      password,
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: result,
    });
  } catch (error) {
    console.error("Login Error:", error);

    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Get Current User
 */
export const getMe = async (req, res) => {
  try {
    const user =
      await authService.getCurrentUser(
        req.user.id
      );

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error("Get Me Error:", error);

    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Create Admin
 *
 * Keep this endpoint protected or
 * use it only during initial setup.
 */
export const createAdmin = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
    } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message:
          "Name, email and password are required",
      });
    }

    const user =
      await authService.createAdmin({
        name,
        email,
        password,
      });

    res.status(201).json({
      success: true,
      message: "Admin created successfully",
      data: user,
    });
  } catch (error) {
    console.error(
      "Create Admin Error:",
      error
    );

    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};