// backend/src/controllers/service.controller.js
import * as serviceService from "../services/service.service.js";
import fs from "fs";
import path from "path";

/*
|--------------------------------------------------------------------------
| Public
| Get Active Services
|--------------------------------------------------------------------------
*/

export const getServices = async (req, res) => {
  try {
    const services = await serviceService.getActiveServices();

    res.status(200).json({
      success: true,
      data: services,
    });
  } catch (error) {
    console.error("Get Services Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch services",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Public
| Get Service By Slug
|--------------------------------------------------------------------------
*/

export const getServiceBySlug = async (req, res) => {
  try {
    const service = await serviceService.getServiceBySlug(req.params.slug);

    if (!service || !service.isActive) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.status(200).json({
      success: true,
      data: service,
    });
  } catch (error) {
    console.error("Get Service By Slug Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch service",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Get All Services
|--------------------------------------------------------------------------
*/

export const getAllServices = async (req, res) => {
  try {
    const services = await serviceService.getAllServices();

    res.status(200).json({
      success: true,
      data: services,
    });
  } catch (error) {
    console.error("Get All Services Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch services",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Get Service By ID
|--------------------------------------------------------------------------
*/

export const getServiceById = async (req, res) => {
  try {
    const service = await serviceService.getServiceById(req.params.id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.status(200).json({
      success: true,
      data: service,
    });
  } catch (error) {
    console.error("Get Service By ID Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch service",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Create Service - FIXED
|--------------------------------------------------------------------------
*/

export const createService = async (req, res) => {
  try {
    // ✅ Check if req.body exists
    if (!req.body) {
      return res.status(400).json({
        success: false,
        message: "Request body is required",
      });
    }

    // ✅ Get the uploaded file
    const imageFile = req.file;

    // ✅ Prepare data with proper defaults
    const serviceData = {
      title: req.body.title,
      slug: req.body.slug,
      description: req.body.description || null,
      icon: req.body.icon || null,
      sortOrder: req.body.sortOrder !== undefined && req.body.sortOrder !== "" 
        ? Number(req.body.sortOrder) 
        : 0,
      isActive: req.body.isActive !== undefined 
        ? req.body.isActive === true || req.body.isActive === "true"
        : true,
      // ✅ If file uploaded, save the path
      image: imageFile ? `/uploads/services/${imageFile.filename}` : null,
    };

    // ✅ Validate required fields
    if (!serviceData.title || !serviceData.slug) {
      // If there was an error and a file was uploaded, delete it
      if (req.file) {
        const filePath = path.join(process.cwd(), 'uploads', 'services', req.file.filename);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }
      
      return res.status(400).json({
        success: false,
        message: "Title and slug are required",
      });
    }

    // ✅ Check for existing slug
    const existingService = await serviceService.getServiceBySlug(serviceData.slug);

    if (existingService) {
      // If there was an error and a file was uploaded, delete it
      if (req.file) {
        const filePath = path.join(process.cwd(), 'uploads', 'services', req.file.filename);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }
      
      return res.status(409).json({
        success: false,
        message: "A service with this slug already exists",
      });
    }

    console.log("Creating service with data:", serviceData);

    const service = await serviceService.createService(serviceData);

    res.status(201).json({
      success: true,
      message: "Service created successfully",
      data: service,
    });
  } catch (error) {
    console.error("Create Service Error:", error);

    // If there was an error and a file was uploaded, delete it
    if (req.file) {
      const filePath = path.join(process.cwd(), 'uploads', 'services', req.file.filename);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    res.status(500).json({
      success: false,
      message: "Failed to create service",
      error: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Update Service - FIXED
|--------------------------------------------------------------------------
*/

export const updateService = async (req, res) => {
  try {
    // ✅ Check if req.body exists
    if (!req.body) {
      return res.status(400).json({
        success: false,
        message: "Request body is required",
      });
    }

    // ✅ Get existing service
    const existingService = await serviceService.getServiceById(req.params.id);

    if (!existingService) {
      // If there was an error and a file was uploaded, delete it
      if (req.file) {
        const filePath = path.join(process.cwd(), 'uploads', 'services', req.file.filename);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }
      
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    // ✅ Get the uploaded file
    const imageFile = req.file;

    // ✅ Prepare data
    const serviceData = {
      title: req.body.title,
      slug: req.body.slug,
      description: req.body.description,
      icon: req.body.icon,
      sortOrder: req.body.sortOrder !== undefined && req.body.sortOrder !== "" 
        ? Number(req.body.sortOrder) 
        : undefined,
      isActive: req.body.isActive !== undefined 
        ? req.body.isActive === true || req.body.isActive === "true"
        : undefined,
    };

    // ✅ If new file uploaded, update image and delete old one
    if (imageFile) {
      serviceData.image = `/uploads/services/${imageFile.filename}`;

      // Delete old image if exists
      if (existingService.image) {
        const oldImagePath = path.join(process.cwd(), existingService.image);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }
    }

    // ✅ Check for duplicate slug (excluding current service)
    if (serviceData.slug) {
      const existingSlug = await serviceService.getServiceBySlug(serviceData.slug);
      if (existingSlug && existingSlug.id !== Number(req.params.id)) {
        // If there was an error and a file was uploaded, delete it
        if (req.file) {
          const filePath = path.join(process.cwd(), 'uploads', 'services', req.file.filename);
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
          }
        }
        
        return res.status(409).json({
          success: false,
          message: "A service with this slug already exists",
        });
      }
    }

    console.log("Updating service with data:", serviceData);

    const service = await serviceService.updateService(req.params.id, serviceData);

    res.status(200).json({
      success: true,
      message: "Service updated successfully",
      data: service,
    });
  } catch (error) {
    console.error("Update Service Error:", error);

    // If there was an error and a file was uploaded, delete it
    if (req.file) {
      const filePath = path.join(process.cwd(), 'uploads', 'services', req.file.filename);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    if (error.code === "P2025") {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    if (error.code === "P2002") {
      return res.status(409).json({
        success: false,
        message: "Service slug already exists",
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to update service",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Toggle Status
|--------------------------------------------------------------------------
*/

export const toggleServiceStatus = async (req, res) => {
  try {
    const service = await serviceService.toggleServiceStatus(req.params.id);

    res.status(200).json({
      success: true,
      message: `Service ${service.isActive ? "activated" : "deactivated"} successfully`,
      data: service,
    });
  } catch (error) {
    console.error("Toggle Service Status Error:", error);

    if (error.message === "Service not found") {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to update service status",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Update Order
|--------------------------------------------------------------------------
*/

export const updateServiceOrder = async (req, res) => {
  try {
    const { sortOrder } = req.body;

    if (sortOrder === undefined || sortOrder === "") {
      return res.status(400).json({
        success: false,
        message: "sortOrder is required",
      });
    }

    const service = await serviceService.updateServiceOrder(req.params.id, sortOrder);

    res.status(200).json({
      success: true,
      message: "Service order updated successfully",
      data: service,
    });
  } catch (error) {
    console.error("Update Service Order Error:", error);

    if (error.code === "P2025") {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to update service order",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Delete Service
|--------------------------------------------------------------------------
*/

export const deleteService = async (req, res) => {
  try {
    // ✅ Get service to delete its image
    const service = await serviceService.getServiceById(req.params.id);

    if (service && service.image) {
      // Delete the image file
      const imagePath = path.join(process.cwd(), service.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await serviceService.deleteService(req.params.id);

    res.status(200).json({
      success: true,
      message: "Service deleted successfully",
    });
  } catch (error) {
    console.error("Delete Service Error:", error);

    if (error.code === "P2025") {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to delete service",
    });
  }
};