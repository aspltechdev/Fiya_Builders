// // // backend/src/controllers/socialMedia.controller.js
// // import * as socialMediaService from "../services/socialMedia.service.js";

// // /*
// // |--------------------------------------------------------------------------
// // | Public
// // | Get All Social Media Links
// // |--------------------------------------------------------------------------
// // */

// // export const getSocialMedia = async (req, res) => {
// //   try {
// //     const socialMedia = await socialMediaService.getAllSocialMedia();

// //     res.status(200).json({
// //       success: true,
// //       data: socialMedia,
// //     });
// //   } catch (error) {
// //     console.error("Get Social Media Error:", error);
// //     res.status(500).json({
// //       success: false,
// //       message: "Failed to fetch social media links",
// //     });
// //   }
// // };

// // /*
// // |--------------------------------------------------------------------------
// // | Admin
// // | Get All Social Media (Admin)
// // |--------------------------------------------------------------------------
// // */

// // export const getAllSocialMediaAdmin = async (req, res) => {
// //   try {
// //     const socialMedia = await prisma.socialMedia.findMany({
// //       orderBy: {
// //         sortOrder: "asc",
// //       },
// //     });

// //     res.status(200).json({
// //       success: true,
// //       data: socialMedia,
// //     });
// //   } catch (error) {
// //     console.error("Get All Social Media Error:", error);
// //     res.status(500).json({
// //       success: false,
// //       message: "Failed to fetch social media links",
// //     });
// //   }
// // };

// // /*
// // |--------------------------------------------------------------------------
// // | Admin
// // | Get Social Media By ID
// // |--------------------------------------------------------------------------
// // */

// // export const getSocialMediaById = async (req, res) => {
// //   try {
// //     const social = await socialMediaService.getSocialMediaByPlatform(req.params.id);

// //     if (!social) {
// //       return res.status(404).json({
// //         success: false,
// //         message: "Social media link not found",
// //       });
// //     }

// //     res.status(200).json({
// //       success: true,
// //       data: social,
// //     });
// //   } catch (error) {
// //     console.error("Get Social Media Error:", error);
// //     res.status(500).json({
// //       success: false,
// //       message: "Failed to fetch social media link",
// //     });
// //   }
// // };

// // /*
// // |--------------------------------------------------------------------------
// // | Admin
// // | Create Social Media
// // |--------------------------------------------------------------------------
// // */

// // export const createSocialMedia = async (req, res) => {
// //   try {
// //     const { platform, url, icon, label, isActive, sortOrder } = req.body;

// //     if (!platform || !url) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "Platform and URL are required",
// //       });
// //     }

// //     // Check if platform already exists
// //     const existing = await socialMediaService.getSocialMediaByPlatform(platform);
// //     if (existing) {
// //       return res.status(409).json({
// //         success: false,
// //         message: `Social media link for ${platform} already exists`,
// //       });
// //     }

// //     const social = await socialMediaService.createSocialMedia(req.body);

// //     res.status(201).json({
// //       success: true,
// //       message: "Social media link created successfully",
// //       data: social,
// //     });
// //   } catch (error) {
// //     console.error("Create Social Media Error:", error);
// //     res.status(500).json({
// //       success: false,
// //       message: "Failed to create social media link",
// //     });
// //   }
// // };

// // /*
// // |--------------------------------------------------------------------------
// // | Admin
// // | Update Social Media
// // |--------------------------------------------------------------------------
// // */

// // export const updateSocialMedia = async (req, res) => {
// //   try {
// //     const social = await socialMediaService.updateSocialMedia(req.params.id, req.body);

// //     res.status(200).json({
// //       success: true,
// //       message: "Social media link updated successfully",
// //       data: social,
// //     });
// //   } catch (error) {
// //     console.error("Update Social Media Error:", error);

// //     if (error.code === "P2025") {
// //       return res.status(404).json({
// //         success: false,
// //         message: "Social media link not found",
// //       });
// //     }

// //     res.status(500).json({
// //       success: false,
// //       message: "Failed to update social media link",
// //     });
// //   }
// // };

// // /*
// // |--------------------------------------------------------------------------
// // | Admin
// // | Toggle Social Media Status
// // |--------------------------------------------------------------------------
// // */

// // export const toggleSocialMediaStatus = async (req, res) => {
// //   try {
// //     const social = await socialMediaService.toggleSocialMediaStatus(req.params.id);

// //     res.status(200).json({
// //       success: true,
// //       message: `Social media link ${social.isActive ? "activated" : "deactivated"} successfully`,
// //       data: social,
// //     });
// //   } catch (error) {
// //     console.error("Toggle Social Media Error:", error);

// //     if (error.message === "Social media link not found") {
// //       return res.status(404).json({
// //         success: false,
// //         message: error.message,
// //       });
// //     }

// //     res.status(500).json({
// //       success: false,
// //       message: "Failed to update social media status",
// //     });
// //   }
// // };

// // /*
// // |--------------------------------------------------------------------------
// // | Admin
// // | Delete Social Media
// // |--------------------------------------------------------------------------
// // */

// // export const deleteSocialMedia = async (req, res) => {
// //   try {
// //     await socialMediaService.deleteSocialMedia(req.params.id);

// //     res.status(200).json({
// //       success: true,
// //       message: "Social media link deleted successfully",
// //     });
// //   } catch (error) {
// //     console.error("Delete Social Media Error:", error);

// //     if (error.code === "P2025") {
// //       return res.status(404).json({
// //         success: false,
// //         message: "Social media link not found",
// //       });
// //     }

// //     res.status(500).json({
// //       success: false,
// //       message: "Failed to delete social media link",
// //     });
// //   }
// // };

// // backend/src/controllers/socialMedia.controller.js
// import * as socialMediaService from "../services/socialMedia.service.js";
// import prisma from "../config/prisma.js"; // ✅ Import prisma

// /*
// |--------------------------------------------------------------------------
// | Public
// | Get All Social Media Links
// |--------------------------------------------------------------------------
// */

// export const getSocialMedia = async (req, res) => {
//   try {
//     const socialMedia = await socialMediaService.getAllSocialMedia();

//     res.status(200).json({
//       success: true,
//       data: socialMedia,
//     });
//   } catch (error) {
//     console.error("Get Social Media Error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch social media links",
//     });
//   }
// };

// /*
// |--------------------------------------------------------------------------
// | Admin
// | Get All Social Media (Admin)
// |--------------------------------------------------------------------------
// */

// export const getAllSocialMediaAdmin = async (req, res) => {
//   try {
//     // ✅ Use prisma directly instead of service
//     const socialMedia = await prisma.socialMedia.findMany({
//       orderBy: {
//         sortOrder: "asc",
//       },
//     });

//     res.status(200).json({
//       success: true,
//       data: socialMedia,
//     });
//   } catch (error) {
//     console.error("Get All Social Media Error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch social media links",
//     });
//   }
// };

// /*
// |--------------------------------------------------------------------------
// | Admin
// | Get Social Media By ID
// |--------------------------------------------------------------------------
// */

// export const getSocialMediaById = async (req, res) => {
//   try {
//     const social = await socialMediaService.getSocialMediaById(req.params.id);

//     if (!social) {
//       return res.status(404).json({
//         success: false,
//         message: "Social media link not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: social,
//     });
//   } catch (error) {
//     console.error("Get Social Media Error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch social media link",
//     });
//   }
// };

// /*
// |--------------------------------------------------------------------------
// | Admin
// | Create Social Media
// |--------------------------------------------------------------------------
// */

// export const createSocialMedia = async (req, res) => {
//   try {
//     const { platform, url, icon, label, isActive, sortOrder } = req.body;

//     if (!platform || !url) {
//       return res.status(400).json({
//         success: false,
//         message: "Platform and URL are required",
//       });
//     }

//     // Check if platform already exists
//     const existing = await socialMediaService.getSocialMediaByPlatform(platform);
//     if (existing) {
//       return res.status(409).json({
//         success: false,
//         message: `Social media link for ${platform} already exists`,
//       });
//     }

//     // ✅ Convert sortOrder to number and handle validation
//     const socialData = {
//       platform,
//       url,
//       icon: icon || null,
//       label: label || null,
//       isActive: isActive !== undefined ? isActive : true,
//       sortOrder: sortOrder !== undefined && sortOrder !== "" ? Number(sortOrder) : 0,
//     };

//     const social = await socialMediaService.createSocialMedia(socialData);

//     res.status(201).json({
//       success: true,
//       message: "Social media link created successfully",
//       data: social,
//     });
//   } catch (error) {
//     console.error("Create Social Media Error:", error);
    
//     // ✅ Handle Prisma validation errors
//     if (error.name === "PrismaClientValidationError") {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid data format. Please check your input.",
//       });
//     }

//     res.status(500).json({
//       success: false,
//       message: "Failed to create social media link",
//     });
//   }
// };

// /*
// |--------------------------------------------------------------------------
// | Admin
// | Update Social Media
// |--------------------------------------------------------------------------
// */

// export const updateSocialMedia = async (req, res) => {
//   try {
//     const { sortOrder } = req.body;
    
//     // ✅ Convert sortOrder to number if provided
//     const updateData = {
//       ...req.body,
//       sortOrder: sortOrder !== undefined && sortOrder !== "" ? Number(sortOrder) : undefined,
//       isActive: req.body.isActive !== undefined ? req.body.isActive : undefined,
//     };

//     const social = await socialMediaService.updateSocialMedia(req.params.id, updateData);

//     res.status(200).json({
//       success: true,
//       message: "Social media link updated successfully",
//       data: social,
//     });
//   } catch (error) {
//     console.error("Update Social Media Error:", error);

//     if (error.code === "P2025") {
//       return res.status(404).json({
//         success: false,
//         message: "Social media link not found",
//       });
//     }

//     res.status(500).json({
//       success: false,
//       message: "Failed to update social media link",
//     });
//   }
// };

// /*
// |--------------------------------------------------------------------------
// | Admin
// | Toggle Social Media Status
// |--------------------------------------------------------------------------
// */

// export const toggleSocialMediaStatus = async (req, res) => {
//   try {
//     const social = await socialMediaService.toggleSocialMediaStatus(req.params.id);

//     res.status(200).json({
//       success: true,
//       message: `Social media link ${social.isActive ? "activated" : "deactivated"} successfully`,
//       data: social,
//     });
//   } catch (error) {
//     console.error("Toggle Social Media Error:", error);

//     if (error.message === "Social media link not found") {
//       return res.status(404).json({
//         success: false,
//         message: error.message,
//       });
//     }

//     res.status(500).json({
//       success: false,
//       message: "Failed to update social media status",
//     });
//   }
// };

// /*
// |--------------------------------------------------------------------------
// | Admin
// | Delete Social Media
// |--------------------------------------------------------------------------
// */

// export const deleteSocialMedia = async (req, res) => {
//   try {
//     await socialMediaService.deleteSocialMedia(req.params.id);

//     res.status(200).json({
//       success: true,
//       message: "Social media link deleted successfully",
//     });
//   } catch (error) {
//     console.error("Delete Social Media Error:", error);

//     if (error.code === "P2025") {
//       return res.status(404).json({
//         success: false,
//         message: "Social media link not found",
//       });
//     }

//     res.status(500).json({
//       success: false,
//       message: "Failed to delete social media link",
//     });
//   }
// };



// backend/src/controllers/socialMedia.controller.js
import * as socialMediaService from "../services/socialMedia.service.js";
import prisma from "../config/prisma.js";

/*
|--------------------------------------------------------------------------
| Public
| Get All Social Media Links (Active only)
|--------------------------------------------------------------------------
*/

export const getSocialMedia = async (req, res) => {
  try {
    const socialMedia = await socialMediaService.getAllSocialMedia();

    res.status(200).json({
      success: true,
      data: socialMedia,
    });
  } catch (error) {
    console.error("Get Social Media Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch social media links",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Get All Social Media (Admin - All including inactive)
|--------------------------------------------------------------------------
*/

export const getAllSocialMediaAdmin = async (req, res) => {
  try {
    const socialMedia = await prisma.socialMedia.findMany({
      orderBy: {
        sortOrder: "asc",
      },
    });

    res.status(200).json({
      success: true,
      data: socialMedia,
    });
  } catch (error) {
    console.error("Get All Social Media Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch social media links",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Get Social Media By ID
|--------------------------------------------------------------------------
*/

export const getSocialMediaById = async (req, res) => {
  try {
    const social = await socialMediaService.getSocialMediaById(req.params.id);

    if (!social) {
      return res.status(404).json({
        success: false,
        message: "Social media link not found",
      });
    }

    res.status(200).json({
      success: true,
      data: social,
    });
  } catch (error) {
    console.error("Get Social Media Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch social media link",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Create Social Media
|--------------------------------------------------------------------------
*/

export const createSocialMedia = async (req, res) => {
  try {
    const { platform, url, icon, label, isActive, sortOrder } = req.body;

    if (!platform || !url) {
      return res.status(400).json({
        success: false,
        message: "Platform and URL are required",
      });
    }

    // Check if platform already exists
    const existing = await socialMediaService.getSocialMediaByPlatform(platform);
    if (existing) {
      return res.status(409).json({
        success: false,
        message: `Social media link for ${platform} already exists`,
      });
    }

    // Prepare data with proper types
    const socialData = {
      platform,
      url,
      icon: icon || null,
      label: label || null,
      isActive: isActive !== undefined ? isActive : true,
      sortOrder: sortOrder !== undefined && sortOrder !== "" ? Number(sortOrder) : 0,
    };

    const social = await socialMediaService.createSocialMedia(socialData);

    res.status(201).json({
      success: true,
      message: "Social media link created successfully",
      data: social,
    });
  } catch (error) {
    console.error("Create Social Media Error:", error);
    
    if (error.name === "PrismaClientValidationError") {
      return res.status(400).json({
        success: false,
        message: "Invalid data format. Please check your input.",
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to create social media link",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Update Social Media
|--------------------------------------------------------------------------
*/

export const updateSocialMedia = async (req, res) => {
  try {
    const { sortOrder } = req.body;
    
    const updateData = {
      ...req.body,
      sortOrder: sortOrder !== undefined && sortOrder !== "" ? Number(sortOrder) : undefined,
      isActive: req.body.isActive !== undefined ? req.body.isActive : undefined,
    };

    const social = await socialMediaService.updateSocialMedia(req.params.id, updateData);

    res.status(200).json({
      success: true,
      message: "Social media link updated successfully",
      data: social,
    });
  } catch (error) {
    console.error("Update Social Media Error:", error);

    if (error.code === "P2025") {
      return res.status(404).json({
        success: false,
        message: "Social media link not found",
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to update social media link",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Toggle Social Media Status
|--------------------------------------------------------------------------
*/

export const toggleSocialMediaStatus = async (req, res) => {
  try {
    const social = await socialMediaService.toggleSocialMediaStatus(req.params.id);

    res.status(200).json({
      success: true,
      message: `Social media link ${social.isActive ? "activated" : "deactivated"} successfully`,
      data: social,
    });
  } catch (error) {
    console.error("Toggle Social Media Error:", error);

    if (error.message === "Social media link not found") {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to update social media status",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Delete Social Media
|--------------------------------------------------------------------------
*/

export const deleteSocialMedia = async (req, res) => {
  try {
    await socialMediaService.deleteSocialMedia(req.params.id);

    res.status(200).json({
      success: true,
      message: "Social media link deleted successfully",
    });
  } catch (error) {
    console.error("Delete Social Media Error:", error);

    if (error.code === "P2025") {
      return res.status(404).json({
        success: false,
        message: "Social media link not found",
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to delete social media link",
    });
  }
};