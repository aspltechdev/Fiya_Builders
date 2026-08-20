// import * as galleryService from "../services/gallery.service.js";

// /*
// |--------------------------------------------------------------------------
// | Public
// | Get Active Gallery
// |--------------------------------------------------------------------------
// */

// export const getGallery = async (
//   req,
//   res
// ) => {
//   try {
//     const gallery =
//       await galleryService.getActiveGallery();

//     res.status(200).json({
//       success: true,
//       data: gallery,
//     });
//   } catch (error) {
//     console.error(
//       "Get Gallery Error:",
//       error
//     );

//     res.status(500).json({
//       success: false,
//       message:
//         "Failed to fetch gallery",
//     });
//   }
// };

// /*
// |--------------------------------------------------------------------------
// | Public
// | Get Gallery By Category
// |--------------------------------------------------------------------------
// */

// export const getGalleryByCategory =
//   async (req, res) => {
//     try {
//       const gallery =
//         await galleryService.getGalleryByCategory(
//           req.params.category
//         );

//       res.status(200).json({
//         success: true,
//         data: gallery,
//       });
//     } catch (error) {
//       console.error(
//         "Get Gallery Category Error:",
//         error
//       );

//       res.status(500).json({
//         success: false,
//         message:
//           "Failed to fetch gallery",
//       });
//     }
//   };

// /*
// |--------------------------------------------------------------------------
// | Admin
// | Get All Gallery
// |--------------------------------------------------------------------------
// */

// export const getAllGallery = async (
//   req,
//   res
// ) => {
//   try {
//     const gallery =
//       await galleryService.getAllGallery();

//     res.status(200).json({
//       success: true,
//       data: gallery,
//     });
//   } catch (error) {
//     console.error(
//       "Get All Gallery Error:",
//       error
//     );

//     res.status(500).json({
//       success: false,
//       message:
//         "Failed to fetch gallery",
//     });
//   }
// };

// /*
// |--------------------------------------------------------------------------
// | Admin
// | Get Gallery By ID
// |--------------------------------------------------------------------------
// */

// export const getGalleryById = async (
//   req,
//   res
// ) => {
//   try {
//     const gallery =
//       await galleryService.getGalleryById(
//         req.params.id
//       );

//     if (!gallery) {
//       return res.status(404).json({
//         success: false,
//         message:
//           "Gallery item not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: gallery,
//     });
//   } catch (error) {
//     console.error(
//       "Get Gallery By ID Error:",
//       error
//     );

//     res.status(500).json({
//       success: false,
//       message:
//         "Failed to fetch gallery item",
//     });
//   }
// };

// /*
// |--------------------------------------------------------------------------
// | Admin
// | Create Gallery
// |--------------------------------------------------------------------------
// */

// export const createGallery = async (
//   req,
//   res
// ) => {
//   try {
//     const {
//       title,
//       image,
//       category,
//     } = req.body;

//     if (!image) {
//       return res.status(400).json({
//         success: false,
//         message:
//           "Image is required",
//       });
//     }

//     const gallery =
//       await galleryService.createGallery(
//         req.body
//       );

//     res.status(201).json({
//       success: true,
//       message:
//         "Gallery item created successfully",
//       data: gallery,
//     });
//   } catch (error) {
//     console.error(
//       "Create Gallery Error:",
//       error
//     );

//     res.status(500).json({
//       success: false,
//       message:
//         "Failed to create gallery item",
//     });
//   }
// };

// /*
// |--------------------------------------------------------------------------
// | Admin
// | Update Gallery
// |--------------------------------------------------------------------------
// */

// export const updateGallery = async (
//   req,
//   res
// ) => {
//   try {
//     const gallery =
//       await galleryService.updateGallery(
//         req.params.id,
//         req.body
//       );

//     res.status(200).json({
//       success: true,
//       message:
//         "Gallery item updated successfully",
//       data: gallery,
//     });
//   } catch (error) {
//     console.error(
//       "Update Gallery Error:",
//       error
//     );

//     if (error.code === "P2025") {
//       return res.status(404).json({
//         success: false,
//         message:
//           "Gallery item not found",
//       });
//     }

//     res.status(500).json({
//       success: false,
//       message:
//         "Failed to update gallery item",
//     });
//   }
// };

// /*
// |--------------------------------------------------------------------------
// | Admin
// | Toggle Status
// |--------------------------------------------------------------------------
// */

// export const toggleGalleryStatus =
//   async (req, res) => {
//     try {
//       const gallery =
//         await galleryService.toggleGalleryStatus(
//           req.params.id
//         );

//       res.status(200).json({
//         success: true,
//         message: `Gallery item ${
//           gallery.isActive
//             ? "activated"
//             : "deactivated"
//         } successfully`,
//         data: gallery,
//       });
//     } catch (error) {
//       console.error(
//         "Toggle Gallery Status Error:",
//         error
//       );

//       if (
//         error.message ===
//         "Gallery item not found"
//       ) {
//         return res.status(404).json({
//           success: false,
//           message: error.message,
//         });
//       }

//       res.status(500).json({
//         success: false,
//         message:
//           "Failed to update gallery status",
//       });
//     }
//   };

// /*
// |--------------------------------------------------------------------------
// | Admin
// | Delete Gallery
// |--------------------------------------------------------------------------
// */

// export const deleteGallery = async (
//   req,
//   res
// ) => {
//   try {
//     await galleryService.deleteGallery(
//       req.params.id
//     );

//     res.status(200).json({
//       success: true,
//       message:
//         "Gallery item deleted successfully",
//     });
//   } catch (error) {
//     console.error(
//       "Delete Gallery Error:",
//       error
//     );

//     if (error.code === "P2025") {
//       return res.status(404).json({
//         success: false,
//         message:
//           "Gallery item not found",
//       });
//     }

//     res.status(500).json({
//       success: false,
//       message:
//         "Failed to delete gallery item",
//     });
//   }
// };


// backend/src/controllers/gallery.controller.js
import * as galleryService from "../services/gallery.service.js";
import fs from "fs";
import path from "path";

/*
|--------------------------------------------------------------------------
| Public
| Get Active Gallery
|--------------------------------------------------------------------------
*/

export const getGallery = async (req, res) => {
  try {
    const gallery = await galleryService.getActiveGallery();

    res.status(200).json({
      success: true,
      data: gallery,
    });
  } catch (error) {
    console.error("Get Gallery Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch gallery",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Public
| Get Gallery By Category
|--------------------------------------------------------------------------
*/

export const getGalleryByCategory = async (req, res) => {
  try {
    const gallery = await galleryService.getGalleryByCategory(req.params.category);

    res.status(200).json({
      success: true,
      data: gallery,
    });
  } catch (error) {
    console.error("Get Gallery Category Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch gallery",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Get All Gallery
|--------------------------------------------------------------------------
*/

export const getAllGallery = async (req, res) => {
  try {
    const gallery = await galleryService.getAllGallery();

    res.status(200).json({
      success: true,
      data: gallery,
    });
  } catch (error) {
    console.error("Get All Gallery Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch gallery",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Get Gallery By ID
|--------------------------------------------------------------------------
*/

export const getGalleryById = async (req, res) => {
  try {
    const gallery = await galleryService.getGalleryById(req.params.id);

    if (!gallery) {
      return res.status(404).json({
        success: false,
        message: "Gallery item not found",
      });
    }

    res.status(200).json({
      success: true,
      data: gallery,
    });
  } catch (error) {
    console.error("Get Gallery By ID Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch gallery item",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Create Gallery - FIXED
|--------------------------------------------------------------------------
*/

export const createGallery = async (req, res) => {
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

    // ✅ Check if image was uploaded
    if (!imageFile) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }

    // ✅ Prepare data
    const galleryData = {
      title: req.body.title || null,
      image: `/uploads/gallery/${imageFile.filename}`,
      category: req.body.category || null,
      isActive: req.body.isActive !== undefined 
        ? req.body.isActive === "true" || req.body.isActive === true 
        : true,
    };

    console.log("Creating gallery with data:", galleryData);

    const gallery = await galleryService.createGallery(galleryData);

    res.status(201).json({
      success: true,
      message: "Gallery item created successfully",
      data: gallery,
    });
  } catch (error) {
    console.error("Create Gallery Error:", error);

    // If there was an error and a file was uploaded, delete it
    if (req.file) {
      const filePath = path.join(process.cwd(), 'uploads', 'gallery', req.file.filename);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    res.status(500).json({
      success: false,
      message: "Failed to create gallery item",
      error: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Update Gallery - FIXED
|--------------------------------------------------------------------------
*/

export const updateGallery = async (req, res) => {
  try {
    // ✅ Check if req.body exists
    if (!req.body) {
      return res.status(400).json({
        success: false,
        message: "Request body is required",
      });
    }

    // ✅ Get existing gallery item
    const existingGallery = await galleryService.getGalleryById(req.params.id);

    if (!existingGallery) {
      // If there was an error and a file was uploaded, delete it
      if (req.file) {
        const filePath = path.join(process.cwd(), 'uploads', 'gallery', req.file.filename);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }
      
      return res.status(404).json({
        success: false,
        message: "Gallery item not found",
      });
    }

    // ✅ Get the uploaded file
    const imageFile = req.file;

    // ✅ Prepare data
    const galleryData = {
      title: req.body.title,
      category: req.body.category,
      isActive: req.body.isActive !== undefined 
        ? req.body.isActive === "true" || req.body.isActive === true 
        : undefined,
    };

    // ✅ If new file uploaded, update image and delete old one
    if (imageFile) {
      galleryData.image = `/uploads/gallery/${imageFile.filename}`;

      // Delete old image if exists
      if (existingGallery.image) {
        const oldImagePath = path.join(process.cwd(), existingGallery.image);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }
    }

    console.log("Updating gallery with data:", galleryData);

    const gallery = await galleryService.updateGallery(req.params.id, galleryData);

    res.status(200).json({
      success: true,
      message: "Gallery item updated successfully",
      data: gallery,
    });
  } catch (error) {
    console.error("Update Gallery Error:", error);

    // If there was an error and a file was uploaded, delete it
    if (req.file) {
      const filePath = path.join(process.cwd(), 'uploads', 'gallery', req.file.filename);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    if (error.code === "P2025") {
      return res.status(404).json({
        success: false,
        message: "Gallery item not found",
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to update gallery item",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Toggle Status
|--------------------------------------------------------------------------
*/

export const toggleGalleryStatus = async (req, res) => {
  try {
    const gallery = await galleryService.toggleGalleryStatus(req.params.id);

    res.status(200).json({
      success: true,
      message: `Gallery item ${gallery.isActive ? "activated" : "deactivated"} successfully`,
      data: gallery,
    });
  } catch (error) {
    console.error("Toggle Gallery Status Error:", error);

    if (error.message === "Gallery item not found") {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to update gallery status",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Delete Gallery
|--------------------------------------------------------------------------
*/

export const deleteGallery = async (req, res) => {
  try {
    // ✅ Get gallery item to delete its image
    const gallery = await galleryService.getGalleryById(req.params.id);

    if (gallery && gallery.image) {
      // Delete the image file
      const imagePath = path.join(process.cwd(), gallery.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await galleryService.deleteGallery(req.params.id);

    res.status(200).json({
      success: true,
      message: "Gallery item deleted successfully",
    });
  } catch (error) {
    console.error("Delete Gallery Error:", error);

    if (error.code === "P2025") {
      return res.status(404).json({
        success: false,
        message: "Gallery item not found",
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to delete gallery item",
    });
  }
};