// // import * as testimonialService from "../services/testimonial.service.js";

// // /*
// // |--------------------------------------------------------------------------
// // | Public
// // | Get Active Testimonials
// // |--------------------------------------------------------------------------
// // */

// // export const getTestimonials = async (
// //   req,
// //   res
// // ) => {
// //   try {
// //     const testimonials =
// //       await testimonialService.getActiveTestimonials();

// //     res.status(200).json({
// //       success: true,
// //       data: testimonials,
// //     });
// //   } catch (error) {
// //     console.error(
// //       "Get Testimonials Error:",
// //       error
// //     );

// //     res.status(500).json({
// //       success: false,
// //       message:
// //         "Failed to fetch testimonials",
// //     });
// //   }
// // };

// // /*
// // |--------------------------------------------------------------------------
// // | Admin
// // | Get All Testimonials
// // |--------------------------------------------------------------------------
// // */

// // export const getAllTestimonials = async (
// //   req,
// //   res
// // ) => {
// //   try {
// //     const testimonials =
// //       await testimonialService.getAllTestimonials();

// //     res.status(200).json({
// //       success: true,
// //       data: testimonials,
// //     });
// //   } catch (error) {
// //     console.error(
// //       "Get All Testimonials Error:",
// //       error
// //     );

// //     res.status(500).json({
// //       success: false,
// //       message:
// //         "Failed to fetch testimonials",
// //     });
// //   }
// // };

// // /*
// // |--------------------------------------------------------------------------
// // | Admin
// // | Get Testimonial By ID
// // |--------------------------------------------------------------------------
// // */

// // export const getTestimonialById = async (
// //   req,
// //   res
// // ) => {
// //   try {
// //     const testimonial =
// //       await testimonialService.getTestimonialById(
// //         req.params.id
// //       );

// //     if (!testimonial) {
// //       return res.status(404).json({
// //         success: false,
// //         message:
// //           "Testimonial not found",
// //       });
// //     }

// //     res.status(200).json({
// //       success: true,
// //       data: testimonial,
// //     });
// //   } catch (error) {
// //     console.error(
// //       "Get Testimonial Error:",
// //       error
// //     );

// //     res.status(500).json({
// //       success: false,
// //       message:
// //         "Failed to fetch testimonial",
// //     });
// //   }
// // };

// // /*
// // |--------------------------------------------------------------------------
// // | Admin
// // | Create Testimonial
// // |--------------------------------------------------------------------------
// // */

// // export const createTestimonial = async (
// //   req,
// //   res
// // ) => {
// //   try {
// //     const {
// //       name,
// //       message,
// //     } = req.body;

// //     if (!name || !message) {
// //       return res.status(400).json({
// //         success: false,
// //         message:
// //           "Name and message are required",
// //       });
// //     }

// //     if (
// //       req.body.rating !== undefined &&
// //       (Number(req.body.rating) < 1 ||
// //         Number(req.body.rating) > 5)
// //     ) {
// //       return res.status(400).json({
// //         success: false,
// //         message:
// //           "Rating must be between 1 and 5",
// //       });
// //     }

// //     const testimonial =
// //       await testimonialService.createTestimonial(
// //         req.body
// //       );

// //     res.status(201).json({
// //       success: true,
// //       message:
// //         "Testimonial created successfully",
// //       data: testimonial,
// //     });
// //   } catch (error) {
// //     console.error(
// //       "Create Testimonial Error:",
// //       error
// //     );

// //     res.status(500).json({
// //       success: false,
// //       message:
// //         "Failed to create testimonial",
// //     });
// //   }
// // };

// // /*
// // |--------------------------------------------------------------------------
// // | Admin
// // | Update Testimonial
// // |--------------------------------------------------------------------------
// // */

// // export const updateTestimonial = async (
// //   req,
// //   res
// // ) => {
// //   try {
// //     if (
// //       req.body.rating !== undefined &&
// //       (Number(req.body.rating) < 1 ||
// //         Number(req.body.rating) > 5)
// //     ) {
// //       return res.status(400).json({
// //         success: false,
// //         message:
// //           "Rating must be between 1 and 5",
// //       });
// //     }

// //     const testimonial =
// //       await testimonialService.updateTestimonial(
// //         req.params.id,
// //         req.body
// //       );

// //     res.status(200).json({
// //       success: true,
// //       message:
// //         "Testimonial updated successfully",
// //       data: testimonial,
// //     });
// //   } catch (error) {
// //     console.error(
// //       "Update Testimonial Error:",
// //       error
// //     );

// //     if (error.code === "P2025") {
// //       return res.status(404).json({
// //         success: false,
// //         message:
// //           "Testimonial not found",
// //       });
// //     }

// //     res.status(500).json({
// //       success: false,
// //       message:
// //         "Failed to update testimonial",
// //     });
// //   }
// // };

// // /*
// // |--------------------------------------------------------------------------
// // | Admin
// // | Toggle Status
// // |--------------------------------------------------------------------------
// // */

// // export const toggleTestimonialStatus =
// //   async (req, res) => {
// //     try {
// //       const testimonial =
// //         await testimonialService.toggleTestimonialStatus(
// //           req.params.id
// //         );

// //       res.status(200).json({
// //         success: true,
// //         message: `Testimonial ${
// //           testimonial.isActive
// //             ? "activated"
// //             : "deactivated"
// //         } successfully`,
// //         data: testimonial,
// //       });
// //     } catch (error) {
// //       console.error(
// //         "Toggle Testimonial Error:",
// //         error
// //       );

// //       if (
// //         error.message ===
// //         "Testimonial not found"
// //       ) {
// //         return res.status(404).json({
// //           success: false,
// //           message: error.message,
// //         });
// //       }

// //       res.status(500).json({
// //         success: false,
// //         message:
// //           "Failed to update testimonial status",
// //       });
// //     }
// //   };

// // /*
// // |--------------------------------------------------------------------------
// // | Admin
// // | Delete Testimonial
// // |--------------------------------------------------------------------------
// // */

// // export const deleteTestimonial = async (
// //   req,
// //   res
// // ) => {
// //   try {
// //     await testimonialService.deleteTestimonial(
// //       req.params.id
// //     );

// //     res.status(200).json({
// //       success: true,
// //       message:
// //         "Testimonial deleted successfully",
// //     });
// //   } catch (error) {
// //     console.error(
// //       "Delete Testimonial Error:",
// //       error
// //     );

// //     if (error.code === "P2025") {
// //       return res.status(404).json({
// //         success: false,
// //         message:
// //           "Testimonial not found",
// //       });
// //     }

// //     res.status(500).json({
// //       success: false,
// //       message:
// //         "Failed to delete testimonial",
// //     });
// //   }
// // };

// // backend/src/controllers/testimonial.controller.js
// import * as testimonialService from "../services/testimonial.service.js";
// import fs from "fs";
// import path from "path";

// /*
// |--------------------------------------------------------------------------
// | Public
// | Get Active Testimonials
// |--------------------------------------------------------------------------
// */

// export const getTestimonials = async (req, res) => {
//   try {
//     const testimonials = await testimonialService.getActiveTestimonials();

//     res.status(200).json({
//       success: true,
//       data: testimonials,
//     });
//   } catch (error) {
//     console.error("Get Testimonials Error:", error);

//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch testimonials",
//     });
//   }
// };

// /*
// |--------------------------------------------------------------------------
// | Admin
// | Get All Testimonials
// |--------------------------------------------------------------------------
// */

// export const getAllTestimonials = async (req, res) => {
//   try {
//     const testimonials = await testimonialService.getAllTestimonials();

//     res.status(200).json({
//       success: true,
//       data: testimonials,
//     });
//   } catch (error) {
//     console.error("Get All Testimonials Error:", error);

//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch testimonials",
//     });
//   }
// };

// /*
// |--------------------------------------------------------------------------
// | Admin
// | Get Testimonial By ID
// |--------------------------------------------------------------------------
// */

// export const getTestimonialById = async (req, res) => {
//   try {
//     const testimonial = await testimonialService.getTestimonialById(req.params.id);

//     if (!testimonial) {
//       return res.status(404).json({
//         success: false,
//         message: "Testimonial not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: testimonial,
//     });
//   } catch (error) {
//     console.error("Get Testimonial Error:", error);

//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch testimonial",
//     });
//   }
// };

// /*
// |--------------------------------------------------------------------------
// | Admin
// | Create Testimonial - FIXED
// |--------------------------------------------------------------------------
// */

// export const createTestimonial = async (req, res) => {
//   try {
//     // ✅ Check if req.body exists
//     if (!req.body) {
//       return res.status(400).json({
//         success: false,
//         message: "Request body is required",
//       });
//     }

//     // ✅ Get the uploaded file
//     const imageFile = req.file;

//     // ✅ Prepare data
//     const testimonialData = {
//       name: req.body.name,
//       designation: req.body.designation || null,
//       company: req.body.company || null,
//       message: req.body.message,
//       rating: req.body.rating !== undefined && req.body.rating !== "" 
//         ? Number(req.body.rating) 
//         : 5,
//       isActive: req.body.isActive !== undefined 
//         ? req.body.isActive === "true" || req.body.isActive === true 
//         : true,
//       // ✅ If file uploaded, save the path
//       image: imageFile ? `/uploads/testimonials/${imageFile.filename}` : null,
//     };

//     // ✅ Validate required fields
//     if (!testimonialData.name || !testimonialData.message) {
//       // If there was an error and a file was uploaded, delete it
//       if (req.file) {
//         const filePath = path.join(process.cwd(), 'uploads', 'testimonials', req.file.filename);
//         if (fs.existsSync(filePath)) {
//           fs.unlinkSync(filePath);
//         }
//       }
      
//       return res.status(400).json({
//         success: false,
//         message: "Name and message are required",
//       });
//     }

//     // ✅ Validate rating
//     if (testimonialData.rating < 1 || testimonialData.rating > 5) {
//       // If there was an error and a file was uploaded, delete it
//       if (req.file) {
//         const filePath = path.join(process.cwd(), 'uploads', 'testimonials', req.file.filename);
//         if (fs.existsSync(filePath)) {
//           fs.unlinkSync(filePath);
//         }
//       }
      
//       return res.status(400).json({
//         success: false,
//         message: "Rating must be between 1 and 5",
//       });
//     }

//     console.log("Creating testimonial with data:", {
//       ...testimonialData,
//       image: testimonialData.image || "No image",
//     });

//     const testimonial = await testimonialService.createTestimonial(testimonialData);

//     res.status(201).json({
//       success: true,
//       message: "Testimonial created successfully",
//       data: testimonial,
//     });
//   } catch (error) {
//     console.error("Create Testimonial Error:", error);

//     // If there was an error and a file was uploaded, delete it
//     if (req.file) {
//       const filePath = path.join(process.cwd(), 'uploads', 'testimonials', req.file.filename);
//       if (fs.existsSync(filePath)) {
//         fs.unlinkSync(filePath);
//       }
//     }

//     res.status(500).json({
//       success: false,
//       message: "Failed to create testimonial",
//       error: error.message,
//     });
//   }
// };

// /*
// |--------------------------------------------------------------------------
// | Admin
// | Update Testimonial - FIXED
// |--------------------------------------------------------------------------
// */

// export const updateTestimonial = async (req, res) => {
//   try {
//     // ✅ Check if req.body exists
//     if (!req.body) {
//       return res.status(400).json({
//         success: false,
//         message: "Request body is required",
//       });
//     }

//     // ✅ Get existing testimonial
//     const existingTestimonial = await testimonialService.getTestimonialById(req.params.id);

//     if (!existingTestimonial) {
//       // If there was an error and a file was uploaded, delete it
//       if (req.file) {
//         const filePath = path.join(process.cwd(), 'uploads', 'testimonials', req.file.filename);
//         if (fs.existsSync(filePath)) {
//           fs.unlinkSync(filePath);
//         }
//       }
      
//       return res.status(404).json({
//         success: false,
//         message: "Testimonial not found",
//       });
//     }

//     // ✅ Get the uploaded file
//     const imageFile = req.file;

//     // ✅ Prepare data
//     const testimonialData = {
//       name: req.body.name,
//       designation: req.body.designation,
//       company: req.body.company,
//       message: req.body.message,
//       rating: req.body.rating !== undefined && req.body.rating !== "" 
//         ? Number(req.body.rating) 
//         : undefined,
//       isActive: req.body.isActive !== undefined 
//         ? req.body.isActive === "true" || req.body.isActive === true 
//         : undefined,
//     };

//     // ✅ If new file uploaded, update image and delete old one
//     if (imageFile) {
//       testimonialData.image = `/uploads/testimonials/${imageFile.filename}`;

//       // Delete old image if exists
//       if (existingTestimonial.image) {
//         const oldImagePath = path.join(process.cwd(), existingTestimonial.image);
//         if (fs.existsSync(oldImagePath)) {
//           fs.unlinkSync(oldImagePath);
//         }
//       }
//     }

//     // ✅ Validate rating if provided
//     if (testimonialData.rating !== undefined && (testimonialData.rating < 1 || testimonialData.rating > 5)) {
//       // If there was an error and a file was uploaded, delete it
//       if (req.file) {
//         const filePath = path.join(process.cwd(), 'uploads', 'testimonials', req.file.filename);
//         if (fs.existsSync(filePath)) {
//           fs.unlinkSync(filePath);
//         }
//       }
      
//       return res.status(400).json({
//         success: false,
//         message: "Rating must be between 1 and 5",
//       });
//     }

//     console.log("Updating testimonial with data:", {
//       ...testimonialData,
//       image: testimonialData.image || "No change",
//     });

//     const testimonial = await testimonialService.updateTestimonial(req.params.id, testimonialData);

//     res.status(200).json({
//       success: true,
//       message: "Testimonial updated successfully",
//       data: testimonial,
//     });
//   } catch (error) {
//     console.error("Update Testimonial Error:", error);

//     // If there was an error and a file was uploaded, delete it
//     if (req.file) {
//       const filePath = path.join(process.cwd(), 'uploads', 'testimonials', req.file.filename);
//       if (fs.existsSync(filePath)) {
//         fs.unlinkSync(filePath);
//       }
//     }

//     if (error.code === "P2025") {
//       return res.status(404).json({
//         success: false,
//         message: "Testimonial not found",
//       });
//     }

//     res.status(500).json({
//       success: false,
//       message: "Failed to update testimonial",
//     });
//   }
// };

// /*
// |--------------------------------------------------------------------------
// | Admin
// | Toggle Status
// |--------------------------------------------------------------------------
// */

// export const toggleTestimonialStatus = async (req, res) => {
//   try {
//     const testimonial = await testimonialService.toggleTestimonialStatus(req.params.id);

//     res.status(200).json({
//       success: true,
//       message: `Testimonial ${testimonial.isActive ? "activated" : "deactivated"} successfully`,
//       data: testimonial,
//     });
//   } catch (error) {
//     console.error("Toggle Testimonial Error:", error);

//     if (error.message === "Testimonial not found") {
//       return res.status(404).json({
//         success: false,
//         message: error.message,
//       });
//     }

//     res.status(500).json({
//       success: false,
//       message: "Failed to update testimonial status",
//     });
//   }
// };

// /*
// |--------------------------------------------------------------------------
// | Admin
// | Delete Testimonial
// |--------------------------------------------------------------------------
// */

// export const deleteTestimonial = async (req, res) => {
//   try {
//     // ✅ Get testimonial to delete its image
//     const testimonial = await testimonialService.getTestimonialById(req.params.id);

//     if (testimonial && testimonial.image) {
//       // Delete the image file
//       const imagePath = path.join(process.cwd(), testimonial.image);
//       if (fs.existsSync(imagePath)) {
//         fs.unlinkSync(imagePath);
//       }
//     }

//     await testimonialService.deleteTestimonial(req.params.id);

//     res.status(200).json({
//       success: true,
//       message: "Testimonial deleted successfully",
//     });
//   } catch (error) {
//     console.error("Delete Testimonial Error:", error);

//     if (error.code === "P2025") {
//       return res.status(404).json({
//         success: false,
//         message: "Testimonial not found",
//       });
//     }

//     res.status(500).json({
//       success: false,
//       message: "Failed to delete testimonial",
//     });
//   }
// };











// backend/src/controllers/testimonial.controller.js
import * as testimonialService from "../services/testimonial.service.js";
import fs from "fs";
import path from "path";

/*
|--------------------------------------------------------------------------
| Public
| Get Active Testimonials
|--------------------------------------------------------------------------
*/

export const getTestimonials = async (req, res) => {
  try {
    const testimonials = await testimonialService.getActiveTestimonials();

    res.status(200).json({
      success: true,
      data: testimonials,
    });
  } catch (error) {
    console.error("Get Testimonials Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch testimonials",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Get All Testimonials
|--------------------------------------------------------------------------
*/

export const getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await testimonialService.getAllTestimonials();

    res.status(200).json({
      success: true,
      data: testimonials,
    });
  } catch (error) {
    console.error("Get All Testimonials Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch testimonials",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Get Testimonial By ID
|--------------------------------------------------------------------------
*/

export const getTestimonialById = async (req, res) => {
  try {
    const testimonial = await testimonialService.getTestimonialById(req.params.id);

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: "Testimonial not found",
      });
    }

    res.status(200).json({
      success: true,
      data: testimonial,
    });
  } catch (error) {
    console.error("Get Testimonial Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch testimonial",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Public
| Submit Testimonial (No Auth Required)
|--------------------------------------------------------------------------
*/

export const createTestimonial = async (req, res) => {
  try {
    // Check if req.body exists
    if (!req.body) {
      return res.status(400).json({
        success: false,
        message: "Request body is required",
      });
    }

    // Get the uploaded file
    const imageFile = req.file;

    // Prepare data
    const testimonialData = {
      name: req.body.name,
      designation: req.body.designation || null,
      company: req.body.company || null,
      message: req.body.message,
      rating: req.body.rating !== undefined && req.body.rating !== ""
        ? Number(req.body.rating)
        : 5,
      isActive: false, // ✅ Default: inactive until admin approves
      image: imageFile ? `/uploads/testimonials/${imageFile.filename}` : null,
    };

    // Validate required fields
    if (!testimonialData.name || !testimonialData.message) {
      if (req.file) {
        const filePath = path.join(process.cwd(), 'uploads', 'testimonials', req.file.filename);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }
      
      return res.status(400).json({
        success: false,
        message: "Name and message are required",
      });
    }

    // Validate rating
    if (testimonialData.rating < 1 || testimonialData.rating > 5) {
      if (req.file) {
        const filePath = path.join(process.cwd(), 'uploads', 'testimonials', req.file.filename);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }
      
      return res.status(400).json({
        success: false,
        message: "Rating must be between 1 and 5",
      });
    }

    console.log("New testimonial submitted:", {
      name: testimonialData.name,
      company: testimonialData.company,
      rating: testimonialData.rating,
    });

    const testimonial = await testimonialService.createTestimonial(testimonialData);

    res.status(201).json({
      success: true,
      message: "Thank you! Your testimonial has been submitted for review.",
      data: testimonial,
    });
  } catch (error) {
    console.error("Create Testimonial Error:", error);

    if (req.file) {
      const filePath = path.join(process.cwd(), 'uploads', 'testimonials', req.file.filename);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    res.status(500).json({
      success: false,
      message: "Failed to submit testimonial. Please try again.",
      error: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Update Testimonial
|--------------------------------------------------------------------------
*/

export const updateTestimonial = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json({
        success: false,
        message: "Request body is required",
      });
    }

    const existingTestimonial = await testimonialService.getTestimonialById(req.params.id);

    if (!existingTestimonial) {
      if (req.file) {
        const filePath = path.join(process.cwd(), 'uploads', 'testimonials', req.file.filename);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }
      
      return res.status(404).json({
        success: false,
        message: "Testimonial not found",
      });
    }

    const imageFile = req.file;
    const testimonialData = {
      name: req.body.name,
      designation: req.body.designation,
      company: req.body.company,
      message: req.body.message,
      rating: req.body.rating !== undefined && req.body.rating !== ""
        ? Number(req.body.rating)
        : undefined,
      isActive: req.body.isActive !== undefined
        ? req.body.isActive === "true" || req.body.isActive === true
        : undefined,
    };

    if (imageFile) {
      testimonialData.image = `/uploads/testimonials/${imageFile.filename}`;
      if (existingTestimonial.image) {
        const oldImagePath = path.join(process.cwd(), existingTestimonial.image);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }
    }

    if (testimonialData.rating !== undefined && (testimonialData.rating < 1 || testimonialData.rating > 5)) {
      if (req.file) {
        const filePath = path.join(process.cwd(), 'uploads', 'testimonials', req.file.filename);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }
      
      return res.status(400).json({
        success: false,
        message: "Rating must be between 1 and 5",
      });
    }

    const testimonial = await testimonialService.updateTestimonial(req.params.id, testimonialData);

    res.status(200).json({
      success: true,
      message: "Testimonial updated successfully",
      data: testimonial,
    });
  } catch (error) {
    console.error("Update Testimonial Error:", error);

    if (req.file) {
      const filePath = path.join(process.cwd(), 'uploads', 'testimonials', req.file.filename);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    if (error.code === "P2025") {
      return res.status(404).json({
        success: false,
        message: "Testimonial not found",
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to update testimonial",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Toggle Status
|--------------------------------------------------------------------------
*/

export const toggleTestimonialStatus = async (req, res) => {
  try {
    const testimonial = await testimonialService.toggleTestimonialStatus(req.params.id);

    res.status(200).json({
      success: true,
      message: `Testimonial ${testimonial.isActive ? "activated" : "deactivated"} successfully`,
      data: testimonial,
    });
  } catch (error) {
    console.error("Toggle Testimonial Error:", error);

    if (error.message === "Testimonial not found") {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to update testimonial status",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Delete Testimonial
|--------------------------------------------------------------------------
*/

export const deleteTestimonial = async (req, res) => {
  try {
    const testimonial = await testimonialService.getTestimonialById(req.params.id);

    if (testimonial && testimonial.image) {
      const imagePath = path.join(process.cwd(), testimonial.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await testimonialService.deleteTestimonial(req.params.id);

    res.status(200).json({
      success: true,
      message: "Testimonial deleted successfully",
    });
  } catch (error) {
    console.error("Delete Testimonial Error:", error);

    if (error.code === "P2025") {
      return res.status(404).json({
        success: false,
        message: "Testimonial not found",
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to delete testimonial",
    });
  }
};