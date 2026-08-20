// import * as projectService from "../services/project.service.js";

// /*
// |--------------------------------------------------------------------------
// | Public
// | Get Active Projects
// |--------------------------------------------------------------------------
// */

// export const getProjects = async (
//   req,
//   res
// ) => {
//   try {
//     const projects =
//       await projectService.getActiveProjects();

//     res.status(200).json({
//       success: true,
//       data: projects,
//     });
//   } catch (error) {
//     console.error(
//       "Get Projects Error:",
//       error
//     );

//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch projects",
//     });
//   }
// };

// /*
// |--------------------------------------------------------------------------
// | Public
// | Get Featured Projects
// |--------------------------------------------------------------------------
// */

// export const getFeaturedProjects = async (
//   req,
//   res
// ) => {
//   try {
//     const projects =
//       await projectService.getFeaturedProjects();

//     res.status(200).json({
//       success: true,
//       data: projects,
//     });
//   } catch (error) {
//     console.error(
//       "Get Featured Projects Error:",
//       error
//     );

//     res.status(500).json({
//       success: false,
//       message:
//         "Failed to fetch featured projects",
//     });
//   }
// };

// /*
// |--------------------------------------------------------------------------
// | Public
// | Get Project By Slug
// |--------------------------------------------------------------------------
// */

// export const getProjectBySlug = async (
//   req,
//   res
// ) => {
//   try {
//     const project =
//       await projectService.getProjectBySlug(
//         req.params.slug
//       );

//     if (!project) {
//       return res.status(404).json({
//         success: false,
//         message: "Project not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: project,
//     });
//   } catch (error) {
//     console.error(
//       "Get Project By Slug Error:",
//       error
//     );

//     res.status(500).json({
//       success: false,
//       message:
//         "Failed to fetch project",
//     });
//   }
// };

// /*
// |--------------------------------------------------------------------------
// | Admin
// | Get All Projects
// |--------------------------------------------------------------------------
// */

// export const getAllProjects = async (
//   req,
//   res
// ) => {
//   try {
//     const projects =
//       await projectService.getAllProjects();

//     res.status(200).json({
//       success: true,
//       data: projects,
//     });
//   } catch (error) {
//     console.error(
//       "Get All Projects Error:",
//       error
//     );

//     res.status(500).json({
//       success: false,
//       message:
//         "Failed to fetch all projects",
//     });
//   }
// };

// /*
// |--------------------------------------------------------------------------
// | Admin
// | Get Project By ID
// |--------------------------------------------------------------------------
// */

// export const getProjectById = async (
//   req,
//   res
// ) => {
//   try {
//     const project =
//       await projectService.getProjectById(
//         req.params.id
//       );

//     if (!project) {
//       return res.status(404).json({
//         success: false,
//         message: "Project not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: project,
//     });
//   } catch (error) {
//     console.error(
//       "Get Project By ID Error:",
//       error
//     );

//     res.status(500).json({
//       success: false,
//       message:
//         "Failed to fetch project",
//     });
//   }
// };

// /*
// |--------------------------------------------------------------------------
// | Admin
// | Create Project
// |--------------------------------------------------------------------------
// */

// export const createProject = async (
//   req,
//   res
// ) => {
//   try {
//     const {
//       title,
//       slug,
//       description,
//     } = req.body;

//     if (!title || !slug || !description) {
//       return res.status(400).json({
//         success: false,
//         message:
//           "Title, slug and description are required",
//       });
//     }

//     const existingProject =
//       await projectService.getProjectBySlug(
//         slug
//       );

//     if (existingProject) {
//       return res.status(409).json({
//         success: false,
//         message:
//           "A project with this slug already exists",
//       });
//     }

//     const project =
//       await projectService.createProject(
//         req.body
//       );

//     res.status(201).json({
//       success: true,
//       message:
//         "Project created successfully",
//       data: project,
//     });
//   } catch (error) {
//     console.error(
//       "Create Project Error:",
//       error
//     );

//     res.status(500).json({
//       success: false,
//       message:
//         "Failed to create project",
//     });
//   }
// };

// /*
// |--------------------------------------------------------------------------
// | Admin
// | Update Project
// |--------------------------------------------------------------------------
// */

// export const updateProject = async (
//   req,
//   res
// ) => {
//   try {
//     const project =
//       await projectService.updateProject(
//         req.params.id,
//         req.body
//       );

//     res.status(200).json({
//       success: true,
//       message:
//         "Project updated successfully",
//       data: project,
//     });
//   } catch (error) {
//     console.error(
//       "Update Project Error:",
//       error
//     );

//     if (error.code === "P2025") {
//       return res.status(404).json({
//         success: false,
//         message: "Project not found",
//       });
//     }

//     if (error.code === "P2002") {
//       return res.status(409).json({
//         success: false,
//         message:
//           "Project slug already exists",
//       });
//     }

//     res.status(500).json({
//       success: false,
//       message:
//         "Failed to update project",
//     });
//   }
// };

// /*
// |--------------------------------------------------------------------------
// | Admin
// | Delete Project
// |--------------------------------------------------------------------------
// */

// export const deleteProject = async (
//   req,
//   res
// ) => {
//   try {
//     await projectService.deleteProject(
//       req.params.id
//     );

//     res.status(200).json({
//       success: true,
//       message:
//         "Project deleted successfully",
//     });
//   } catch (error) {
//     console.error(
//       "Delete Project Error:",
//       error
//     );

//     if (error.code === "P2025") {
//       return res.status(404).json({
//         success: false,
//         message: "Project not found",
//       });
//     }

//     res.status(500).json({
//       success: false,
//       message:
//         "Failed to delete project",
//     });
//   }
// };

// /*
// |--------------------------------------------------------------------------
// | Admin
// | Toggle Active Status
// |--------------------------------------------------------------------------
// */

// export const toggleProjectStatus =
//   async (req, res) => {
//     try {
//       const project =
//         await projectService.toggleProjectStatus(
//           req.params.id
//         );

//       res.status(200).json({
//         success: true,
//         message: `Project ${
//           project.isActive
//             ? "activated"
//             : "deactivated"
//         } successfully`,
//         data: project,
//       });
//     } catch (error) {
//       console.error(
//         "Toggle Project Status Error:",
//         error
//       );

//       if (
//         error.message ===
//         "Project not found"
//       ) {
//         return res.status(404).json({
//           success: false,
//           message: error.message,
//         });
//       }

//       res.status(500).json({
//         success: false,
//         message:
//           "Failed to update project status",
//       });
//     }
//   };

// /*
// |--------------------------------------------------------------------------
// | Admin
// | Toggle Featured Status
// |--------------------------------------------------------------------------
// */

// export const toggleProjectFeatured =
//   async (req, res) => {
//     try {
//       const project =
//         await projectService.toggleProjectFeatured(
//           req.params.id
//         );

//       res.status(200).json({
//         success: true,
//         message: `Project ${
//           project.isFeatured
//             ? "marked as featured"
//             : "removed from featured"
//         }`,
//         data: project,
//       });
//     } catch (error) {
//       console.error(
//         "Toggle Featured Error:",
//         error
//       );

//       if (
//         error.message ===
//         "Project not found"
//       ) {
//         return res.status(404).json({
//           success: false,
//           message: error.message,
//         });
//       }

//       res.status(500).json({
//         success: false,
//         message:
//           "Failed to update featured status",
//       });
//     }
//   };

// backend/src/controllers/project.controller.js
import * as projectService from "../services/project.service.js";
import fs from "fs";
import path from "path";

/*
|--------------------------------------------------------------------------
| Public
| Get Active Projects
|--------------------------------------------------------------------------
*/

export const getProjects = async (req, res) => {
  try {
    const projects = await projectService.getActiveProjects();

    res.status(200).json({
      success: true,
      data: projects,
    });
  } catch (error) {
    console.error("Get Projects Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch projects",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Public
| Get Featured Projects
|--------------------------------------------------------------------------
*/

export const getFeaturedProjects = async (req, res) => {
  try {
    const projects = await projectService.getFeaturedProjects();

    res.status(200).json({
      success: true,
      data: projects,
    });
  } catch (error) {
    console.error("Get Featured Projects Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch featured projects",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Public
| Get Project By Slug
|--------------------------------------------------------------------------
*/

export const getProjectBySlug = async (req, res) => {
  try {
    const project = await projectService.getProjectBySlug(req.params.slug);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    console.error("Get Project By Slug Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch project",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Get All Projects
|--------------------------------------------------------------------------
*/

export const getAllProjects = async (req, res) => {
  try {
    const projects = await projectService.getAllProjects();

    res.status(200).json({
      success: true,
      data: projects,
    });
  } catch (error) {
    console.error("Get All Projects Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch all projects",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Get Project By ID
|--------------------------------------------------------------------------
*/

export const getProjectById = async (req, res) => {
  try {
    const project = await projectService.getProjectById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    console.error("Get Project By ID Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch project",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Create Project - FIXED
|--------------------------------------------------------------------------
*/

export const createProject = async (req, res) => {
  try {
    // ✅ Check if req.body exists
    if (!req.body) {
      return res.status(400).json({
        success: false,
        message: "Request body is required",
      });
    }

    // ✅ Get uploaded files
    const files = req.files || {};
    const featuredImageFile = files.featuredImage?.[0] || null;
    const galleryFiles = files.gallery || [];

    // ✅ Prepare data with proper defaults
    const projectData = {
      title: req.body.title,
      slug: req.body.slug,
      category: req.body.category || null,
      location: req.body.location || null,
      year: req.body.year !== undefined && req.body.year !== "" ? Number(req.body.year) : null,
      description: req.body.description,
      isFeatured: req.body.isFeatured === "true" || req.body.isFeatured === true,
      isActive: req.body.isActive !== undefined 
        ? req.body.isActive === "true" || req.body.isActive === true 
        : true,
      // ✅ Handle featured image
      featuredImage: featuredImageFile ? `/uploads/projects/${featuredImageFile.filename}` : null,
      // ✅ Handle gallery images
      gallery: galleryFiles.map(file => `/uploads/projects/${file.filename}`),
    };

    // ✅ Validate required fields
    if (!projectData.title || !projectData.slug || !projectData.description) {
      // Clean up uploaded files if validation fails
      cleanupUploadedFiles(files);
      
      return res.status(400).json({
        success: false,
        message: "Title, slug and description are required",
      });
    }

    // ✅ Check for existing slug
    const existingProject = await projectService.getProjectBySlug(projectData.slug);

    if (existingProject) {
      // Clean up uploaded files if validation fails
      cleanupUploadedFiles(files);
      
      return res.status(409).json({
        success: false,
        message: "A project with this slug already exists",
      });
    }

    console.log("Creating project with data:", {
      ...projectData,
      gallery: projectData.gallery.length > 0 ? `${projectData.gallery.length} images` : "No images",
    });

    const project = await projectService.createProject(projectData);

    res.status(201).json({
      success: true,
      message: "Project created successfully",
      data: project,
    });
  } catch (error) {
    console.error("Create Project Error:", error);

    // Clean up uploaded files if error occurs
    if (req.files) {
      cleanupUploadedFiles(req.files);
    }

    res.status(500).json({
      success: false,
      message: "Failed to create project",
      error: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Update Project - FIXED
|--------------------------------------------------------------------------
*/

export const updateProject = async (req, res) => {
  try {
    // ✅ Check if req.body exists
    if (!req.body) {
      return res.status(400).json({
        success: false,
        message: "Request body is required",
      });
    }

    // ✅ Get existing project
    const existingProject = await projectService.getProjectById(req.params.id);

    if (!existingProject) {
      // Clean up uploaded files if project not found
      if (req.files) {
        cleanupUploadedFiles(req.files);
      }
      
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    // ✅ Get uploaded files
    const files = req.files || {};
    const featuredImageFile = files.featuredImage?.[0] || null;
    const galleryFiles = files.gallery || [];

    // ✅ Prepare data
    const projectData = {
      title: req.body.title,
      slug: req.body.slug,
      category: req.body.category,
      location: req.body.location,
      year: req.body.year !== undefined && req.body.year !== "" ? Number(req.body.year) : null,
      description: req.body.description,
      isFeatured: req.body.isFeatured === "true" || req.body.isFeatured === true,
      isActive: req.body.isActive === "true" || req.body.isActive === true,
    };

    // ✅ Handle featured image - delete old if new uploaded
    if (featuredImageFile) {
      projectData.featuredImage = `/uploads/projects/${featuredImageFile.filename}`;
      
      // Delete old featured image if exists
      if (existingProject.featuredImage) {
        const oldImagePath = path.join(process.cwd(), existingProject.featuredImage);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }
    }

    // ✅ Handle gallery images - if new gallery uploaded, delete old gallery
    if (galleryFiles.length > 0) {
      projectData.gallery = galleryFiles.map(file => `/uploads/projects/${file.filename}`);
      
      // Delete old gallery images
      if (existingProject.gallery && existingProject.gallery.length > 0) {
        existingProject.gallery.forEach(galleryImage => {
          const oldImagePath = path.join(process.cwd(), galleryImage.image);
          if (fs.existsSync(oldImagePath)) {
            fs.unlinkSync(oldImagePath);
          }
        });
      }
    }

    // ✅ Check for duplicate slug (excluding current project)
    if (projectData.slug) {
      const existingSlug = await projectService.getProjectBySlug(projectData.slug);
      if (existingSlug && existingSlug.id !== Number(req.params.id)) {
        // Clean up uploaded files if validation fails
        if (req.files) {
          cleanupUploadedFiles(req.files);
        }
        
        return res.status(409).json({
          success: false,
          message: "A project with this slug already exists",
        });
      }
    }

    console.log("Updating project with data:", {
      ...projectData,
      gallery: projectData.gallery ? `${projectData.gallery.length} images` : "No changes",
    });

    const project = await projectService.updateProject(req.params.id, projectData);

    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: project,
    });
  } catch (error) {
    console.error("Update Project Error:", error);

    // Clean up uploaded files if error occurs
    if (req.files) {
      cleanupUploadedFiles(req.files);
    }

    if (error.code === "P2025") {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    if (error.code === "P2002") {
      return res.status(409).json({
        success: false,
        message: "Project slug already exists",
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to update project",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Delete Project
|--------------------------------------------------------------------------
*/

export const deleteProject = async (req, res) => {
  try {
    // ✅ Get project to delete its images
    const project = await projectService.getProjectById(req.params.id);

    if (project) {
      // Delete featured image
      if (project.featuredImage) {
        const imagePath = path.join(process.cwd(), project.featuredImage);
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath);
        }
      }

      // Delete gallery images
      if (project.gallery && project.gallery.length > 0) {
        project.gallery.forEach(galleryImage => {
          const imagePath = path.join(process.cwd(), galleryImage.image);
          if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
          }
        });
      }
    }

    await projectService.deleteProject(req.params.id);

    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    console.error("Delete Project Error:", error);

    if (error.code === "P2025") {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to delete project",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Toggle Active Status
|--------------------------------------------------------------------------
*/

export const toggleProjectStatus = async (req, res) => {
  try {
    const project = await projectService.toggleProjectStatus(req.params.id);

    res.status(200).json({
      success: true,
      message: `Project ${project.isActive ? "activated" : "deactivated"} successfully`,
      data: project,
    });
  } catch (error) {
    console.error("Toggle Project Status Error:", error);

    if (error.message === "Project not found") {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to update project status",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Admin
| Toggle Featured Status
|--------------------------------------------------------------------------
*/

export const toggleProjectFeatured = async (req, res) => {
  try {
    const project = await projectService.toggleProjectFeatured(req.params.id);

    res.status(200).json({
      success: true,
      message: `Project ${project.isFeatured ? "marked as featured" : "removed from featured"}`,
      data: project,
    });
  } catch (error) {
    console.error("Toggle Featured Error:", error);

    if (error.message === "Project not found") {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to update featured status",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Helper Function: Clean up uploaded files on error
|--------------------------------------------------------------------------
*/

const cleanupUploadedFiles = (files) => {
  if (!files) return;
  
  const allFiles = [];
  if (files.featuredImage) {
    allFiles.push(...files.featuredImage);
  }
  if (files.gallery) {
    allFiles.push(...files.gallery);
  }
  
  allFiles.forEach(file => {
    const filePath = path.join(process.cwd(), 'uploads', 'projects', file.filename);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  });
};