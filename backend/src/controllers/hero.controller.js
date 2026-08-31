// import * as heroService from "../services/hero.service.js";

// /*
// |--------------------------------------------------------------------------
// | Public
// | Get Active Hero
// |--------------------------------------------------------------------------
// */

// export const getHero = async (
//   req,
//   res
// ) => {
//   try {
//     const hero =
//       await heroService.getActiveHero();

//     res.status(200).json({
//       success: true,
//       data: hero,
//     });
//   } catch (error) {
//     console.error(
//       "Get Hero Error:",
//       error
//     );

//     res.status(500).json({
//       success: false,
//       message:
//         "Failed to fetch hero",
//     });
//   }
// };

// /*
// |--------------------------------------------------------------------------
// | Admin
// | Get All Heroes
// |--------------------------------------------------------------------------
// */

// export const getAllHeroes = async (
//   req,
//   res
// ) => {
//   try {
//     const heroes =
//       await heroService.getAllHeroes();

//     res.status(200).json({
//       success: true,
//       data: heroes,
//     });
//   } catch (error) {
//     console.error(
//       "Get All Heroes Error:",
//       error
//     );

//     res.status(500).json({
//       success: false,
//       message:
//         "Failed to fetch heroes",
//     });
//   }
// };

// /*
// |--------------------------------------------------------------------------
// | Admin
// | Get Hero By ID
// |--------------------------------------------------------------------------
// */

// export const getHeroById = async (
//   req,
//   res
// ) => {
//   try {
//     const hero =
//       await heroService.getHeroById(
//         req.params.id
//       );

//     if (!hero) {
//       return res.status(404).json({
//         success: false,
//         message: "Hero not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: hero,
//     });
//   } catch (error) {
//     console.error(
//       "Get Hero By ID Error:",
//       error
//     );

//     res.status(500).json({
//       success: false,
//       message:
//         "Failed to fetch hero",
//     });
//   }
// };

// /*
// |--------------------------------------------------------------------------
// | Admin
// | Create Hero
// |--------------------------------------------------------------------------
// */

// export const createHero = async (
//   req,
//   res
// ) => {
//   try {
//     const {
//       title,
//     } = req.body;

//     if (!title) {
//       return res.status(400).json({
//         success: false,
//         message:
//           "Hero title is required",
//       });
//     }

//     const hero =
//       await heroService.createHero(
//         req.body
//       );

//     res.status(201).json({
//       success: true,
//       message:
//         "Hero created successfully",
//       data: hero,
//     });
//   } catch (error) {
//     console.error(
//       "Create Hero Error:",
//       error
//     );

//     res.status(500).json({
//       success: false,
//       message:
//         "Failed to create hero",
//     });
//   }
// };

// /*
// |--------------------------------------------------------------------------
// | Admin
// | Update Hero
// |--------------------------------------------------------------------------
// */

// export const updateHero = async (
//   req,
//   res
// ) => {
//   try {
//     const hero =
//       await heroService.updateHero(
//         req.params.id,
//         req.body
//       );

//     res.status(200).json({
//       success: true,
//       message:
//         "Hero updated successfully",
//       data: hero,
//     });
//   } catch (error) {
//     console.error(
//       "Update Hero Error:",
//       error
//     );

//     if (error.code === "P2025") {
//       return res.status(404).json({
//         success: false,
//         message: "Hero not found",
//       });
//     }

//     res.status(500).json({
//       success: false,
//       message:
//         "Failed to update hero",
//     });
//   }
// };

// /*
// |--------------------------------------------------------------------------
// | Admin
// | Toggle Hero
// |--------------------------------------------------------------------------
// */

// export const toggleHeroStatus = async (
//   req,
//   res
// ) => {
//   try {
//     const hero =
//       await heroService.toggleHeroStatus(
//         req.params.id
//       );

//     res.status(200).json({
//       success: true,
//       message: `Hero ${
//         hero.isActive
//           ? "activated"
//           : "deactivated"
//       } successfully`,
//       data: hero,
//     });
//   } catch (error) {
//     console.error(
//       "Toggle Hero Error:",
//       error
//     );

//     if (
//       error.message ===
//       "Hero not found"
//     ) {
//       return res.status(404).json({
//         success: false,
//         message: error.message,
//       });
//     }

//     res.status(500).json({
//       success: false,
//       message:
//         "Failed to update hero status",
//     });
//   }
// };

// /*
// |--------------------------------------------------------------------------
// | Admin
// | Delete Hero
// |--------------------------------------------------------------------------
// */

// export const deleteHero = async (
//   req,
//   res
// ) => {
//   try {
//     await heroService.deleteHero(
//       req.params.id
//     );

//     res.status(200).json({
//       success: true,
//       message:
//         "Hero deleted successfully",
//     });
//   } catch (error) {
//     console.error(
//       "Delete Hero Error:",
//       error
//     );

//     if (error.code === "P2025") {
//       return res.status(404).json({
//         success: false,
//         message: "Hero not found",
//       });
//     }

//     res.status(500).json({
//       success: false,
//       message:
//         "Failed to delete hero",
//     });
//   }
// };













// // backend/src/controllers/hero.controller.js
// import * as heroService from "../services/hero.service.js";
// import fs from "fs";
// import path from "path";

// export const getHero = async (req, res) => {
//     try {
//         const hero = await heroService.getActiveHero();
//         res.status(200).json({
//             success: true,
//             data: hero,
//         });
//     } catch (error) {
//         console.error("Get Hero Error:", error);
//         res.status(500).json({
//             success: false,
//             message: "Failed to fetch hero",
//         });
//     }
// };

// export const getAllHeroes = async (req, res) => {
//     try {
//         const heroes = await heroService.getAllHeroes();
//         res.status(200).json({
//             success: true,
//             data: heroes,
//         });
//     } catch (error) {
//         console.error("Get All Heroes Error:", error);
//         res.status(500).json({
//             success: false,
//             message: "Failed to fetch heroes",
//         });
//     }
// };

// export const getHeroById = async (req, res) => {
//     try {
//         const hero = await heroService.getHeroById(req.params.id);
        
//         if (!hero) {
//             return res.status(404).json({
//                 success: false,
//                 message: "Hero not found",
//             });
//         }

//         res.status(200).json({
//             success: true,
//             data: hero,
//         });
//     } catch (error) {
//         console.error("Get Hero By ID Error:", error);
//         res.status(500).json({
//             success: false,
//             message: "Failed to fetch hero",
//         });
//     }
// };

// export const createHero = async (req, res) => {
//     try {
//         // Check if file was uploaded
//         const imageFile = req.file;
        
//         // Prepare data
//         const heroData = {
//             title: req.body.title,
//             subtitle: req.body.subtitle || null,
//             description: req.body.description || null,
//             buttonText: req.body.buttonText || null,
//             buttonLink: req.body.buttonLink || null,
//             isActive: req.body.isActive,
//             // If file uploaded, save the relative path
//             image: imageFile ? `/uploads/hero/${imageFile.filename}` : null
//         };
        
//         console.log('Creating hero with data:', heroData);
        
//         const hero = await heroService.createHero(heroData);
        
//         res.status(201).json({
//             success: true,
//             message: "Hero created successfully",
//             data: hero,
//         });
//     } catch (error) {
//         console.error("Create Hero Error:", error);
        
//         // If there was an error and a file was uploaded, delete it
//         if (req.file) {
//             const filePath = path.join(process.cwd(), 'uploads', 'hero', req.file.filename);
//             if (fs.existsSync(filePath)) {
//                 fs.unlinkSync(filePath);
//             }
//         }
        
//         res.status(500).json({
//             success: false,
//             message: "Failed to create hero",
//             error: error.message
//         });
//     }
// };

// export const updateHero = async (req, res) => {
//     try {
//         // Get existing hero to check current image
//         const existingHero = await heroService.getHeroById(req.params.id);
        
//         if (!existingHero) {
//             // Delete uploaded file if hero not found
//             if (req.file) {
//                 const filePath = path.join(process.cwd(), 'uploads', 'hero', req.file.filename);
//                 if (fs.existsSync(filePath)) {
//                     fs.unlinkSync(filePath);
//                 }
//             }
//             return res.status(404).json({
//                 success: false,
//                 message: "Hero not found",
//             });
//         }
        
//         // Prepare data
//         const heroData = {
//             title: req.body.title,
//             subtitle: req.body.subtitle || null,
//             description: req.body.description || null,
//             buttonText: req.body.buttonText || null,
//             buttonLink: req.body.buttonLink || null,
//             isActive: req.body.isActive,
//         };
        
//         // If new file uploaded, update image and delete old one
//         if (req.file) {
//             heroData.image = `/uploads/hero/${req.file.filename}`;
            
//             // Delete old image if exists
//             if (existingHero.image) {
//                 const oldImagePath = path.join(process.cwd(), existingHero.image);
//                 if (fs.existsSync(oldImagePath)) {
//                     fs.unlinkSync(oldImagePath);
//                 }
//             }
//         }
        
//         console.log('Updating hero with data:', heroData);
        
//         const hero = await heroService.updateHero(req.params.id, heroData);
        
//         res.status(200).json({
//             success: true,
//             message: "Hero updated successfully",
//             data: hero,
//         });
//     } catch (error) {
//         console.error("Update Hero Error:", error);

//         // If there was an error and a new file was uploaded, delete it
//         if (req.file) {
//             const filePath = path.join(process.cwd(), 'uploads', 'hero', req.file.filename);
//             if (fs.existsSync(filePath)) {
//                 fs.unlinkSync(filePath);
//             }
//         }

//         if (error.code === "P2025") {
//             return res.status(404).json({
//                 success: false,
//                 message: "Hero not found",
//             });
//         }

//         res.status(500).json({
//             success: false,
//             message: "Failed to update hero",
//         });
//     }
// };

// export const toggleHeroStatus = async (req, res) => {
//     try {
//         const hero = await heroService.toggleHeroStatus(req.params.id);

//         res.status(200).json({
//             success: true,
//             message: `Hero ${hero.isActive ? "activated" : "deactivated"} successfully`,
//             data: hero,
//         });
//     } catch (error) {
//         console.error("Toggle Hero Error:", error);

//         if (error.message === "Hero not found") {
//             return res.status(404).json({
//                 success: false,
//                 message: error.message,
//             });
//         }

//         res.status(500).json({
//             success: false,
//             message: "Failed to update hero status",
//         });
//     }
// };

// export const deleteHero = async (req, res) => {
//     try {
//         // Get hero to delete its image
//         const hero = await heroService.getHeroById(req.params.id);
        
//         if (hero && hero.image) {
//             // Delete the image file
//             const imagePath = path.join(process.cwd(), hero.image);
//             if (fs.existsSync(imagePath)) {
//                 fs.unlinkSync(imagePath);
//             }
//         }
        
//         await heroService.deleteHero(req.params.id);

//         res.status(200).json({
//             success: true,
//             message: "Hero deleted successfully",
//         });
//     } catch (error) {
//         console.error("Delete Hero Error:", error);

//         if (error.code === "P2025") {
//             return res.status(404).json({
//                 success: false,
//                 message: "Hero not found",
//             });
//         }

//         res.status(500).json({
//             success: false,
//             message: "Failed to delete hero",
//         });
//     }
// };

// export const getActiveHeroes = async (req, res) => {
//     try {
//         const heroes =
//             await heroService.getActiveHeroes();

//         res.status(200).json({
//             success: true,
//             data: heroes,
//         });
//     } catch (error) {
//         console.error(
//             "Get Active Heroes Error:",
//             error
//         );

//         res.status(500).json({
//             success: false,
//             message: error.message,
//         });
//     }
// };

// backend/src/controllers/hero.controller.js

import * as heroService from "../services/hero.service.js";
import fs from "fs";
import path from "path";

/*
|--------------------------------------------------------------------------
| Get Heroes - Public
|--------------------------------------------------------------------------
|
| GET /api/hero
|
| Fetches the same hero records as the admin listing.
|
*/

export const getHero = async (req, res) => {
    try {
        const heroes =
            await heroService.getAllHeroes();

        res.status(200).json({
            success: true,
            data: heroes,
        });

    } catch (error) {

        console.error(
            "Get Hero Error:",
            error
        );

        res.status(500).json({
            success: false,
            message: "Failed to fetch heroes",
        });
    }
};


/*
|--------------------------------------------------------------------------
| Get All Heroes - Admin
|--------------------------------------------------------------------------
|
| GET /api/hero/admin/all
|
*/

export const getAllHeroes = async (req, res) => {
    try {

        const heroes =
            await heroService.getAllHeroes();

        res.status(200).json({
            success: true,
            data: heroes,
        });

    } catch (error) {

        console.error(
            "Get All Heroes Error:",
            error
        );

        res.status(500).json({
            success: false,
            message: "Failed to fetch heroes",
        });
    }
};


/*
|--------------------------------------------------------------------------
| Get Hero By ID - Admin
|--------------------------------------------------------------------------
|
| GET /api/hero/admin/:id
|
*/

export const getHeroById = async (req, res) => {
    try {

        const hero =
            await heroService.getHeroById(
                req.params.id
            );

        if (!hero) {
            return res.status(404).json({
                success: false,
                message: "Hero not found",
            });
        }

        res.status(200).json({
            success: true,
            data: hero,
        });

    } catch (error) {

        console.error(
            "Get Hero By ID Error:",
            error
        );

        res.status(500).json({
            success: false,
            message: "Failed to fetch hero",
        });
    }
};


/*
|--------------------------------------------------------------------------
| Create Hero - Admin
|--------------------------------------------------------------------------
|
| POST /api/hero
|
*/

export const createHero = async (req, res) => {
    try {

        const imageFile = req.file;

        const heroData = {
            title: req.body.title,

            subtitle:
                req.body.subtitle ||
                null,

            description:
                req.body.description ||
                null,

            buttonText:
                req.body.buttonText ||
                null,

            buttonLink:
                req.body.buttonLink ||
                null,

            isActive:
                req.body.isActive,

            image: imageFile
                ? `/uploads/hero/${imageFile.filename}`
                : null,
        };


        console.log(
            "Creating hero with data:",
            heroData
        );


        const hero =
            await heroService.createHero(
                heroData
            );


        res.status(201).json({
            success: true,
            message:
                "Hero created successfully",
            data: hero,
        });

    } catch (error) {

        console.error(
            "Create Hero Error:",
            error
        );


        /*
        |--------------------------------------------------------------------------
        | Delete Uploaded File If Creation Failed
        |--------------------------------------------------------------------------
        */

        if (req.file) {

            const filePath =
                path.join(
                    process.cwd(),
                    "uploads",
                    "hero",
                    req.file.filename
                );


            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
            }
        }


        res.status(500).json({
            success: false,
            message:
                "Failed to create hero",
            error: error.message,
        });
    }
};


/*
|--------------------------------------------------------------------------
| Update Hero - Admin
|--------------------------------------------------------------------------
|
| PUT /api/hero/:id
|
*/

export const updateHero = async (req, res) => {
    try {

        /*
        |--------------------------------------------------------------------------
        | Get Existing Hero
        |--------------------------------------------------------------------------
        */

        const existingHero =
            await heroService.getHeroById(
                req.params.id
            );


        if (!existingHero) {

            /*
            |--------------------------------------------------------------------------
            | Delete Uploaded File
            |--------------------------------------------------------------------------
            */

            if (req.file) {

                const filePath =
                    path.join(
                        process.cwd(),
                        "uploads",
                        "hero",
                        req.file.filename
                    );


                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                }
            }


            return res.status(404).json({
                success: false,
                message: "Hero not found",
            });
        }


        /*
        |--------------------------------------------------------------------------
        | Prepare Update Data
        |--------------------------------------------------------------------------
        */

        const heroData = {
            title: req.body.title,

            subtitle:
                req.body.subtitle ||
                null,

            description:
                req.body.description ||
                null,

            buttonText:
                req.body.buttonText ||
                null,

            buttonLink:
                req.body.buttonLink ||
                null,

            isActive:
                req.body.isActive,
        };


        /*
        |--------------------------------------------------------------------------
        | New Image
        |--------------------------------------------------------------------------
        */

        if (req.file) {

            heroData.image =
                `/uploads/hero/${req.file.filename}`;


            /*
            |--------------------------------------------------------------------------
            | Delete Old Image
            |--------------------------------------------------------------------------
            */

            if (existingHero.image) {

                const oldImagePath =
                    path.join(
                        process.cwd(),
                        existingHero.image
                    );


                if (
                    fs.existsSync(
                        oldImagePath
                    )
                ) {
                    fs.unlinkSync(
                        oldImagePath
                    );
                }
            }
        }


        console.log(
            "Updating hero with data:",
            heroData
        );


        const hero =
            await heroService.updateHero(
                req.params.id,
                heroData
            );


        res.status(200).json({
            success: true,
            message:
                "Hero updated successfully",
            data: hero,
        });

    } catch (error) {

        console.error(
            "Update Hero Error:",
            error
        );


        /*
        |--------------------------------------------------------------------------
        | Delete New Image If Update Failed
        |--------------------------------------------------------------------------
        */

        if (req.file) {

            const filePath =
                path.join(
                    process.cwd(),
                    "uploads",
                    "hero",
                    req.file.filename
                );


            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
            }
        }


        if (error.code === "P2025") {

            return res.status(404).json({
                success: false,
                message: "Hero not found",
            });
        }


        res.status(500).json({
            success: false,
            message:
                "Failed to update hero",
        });
    }
};


/*
|--------------------------------------------------------------------------
| Toggle Hero Status - Admin
|--------------------------------------------------------------------------
|
| PATCH /api/hero/:id/toggle
|
*/

export const toggleHeroStatus = async (
    req,
    res
) => {
    try {

        const hero =
            await heroService.toggleHeroStatus(
                req.params.id
            );


        res.status(200).json({
            success: true,

            message:
                `Hero ${
                    hero.isActive
                        ? "activated"
                        : "deactivated"
                } successfully`,

            data: hero,
        });

    } catch (error) {

        console.error(
            "Toggle Hero Error:",
            error
        );


        if (
            error.message ===
            "Hero not found"
        ) {

            return res.status(404).json({
                success: false,
                message: error.message,
            });
        }


        res.status(500).json({
            success: false,
            message:
                "Failed to update hero status",
        });
    }
};


/*
|--------------------------------------------------------------------------
| Delete Hero - Admin
|--------------------------------------------------------------------------
|
| DELETE /api/hero/:id
|
*/

export const deleteHero = async (
    req,
    res
) => {
    try {

        /*
        |--------------------------------------------------------------------------
        | Get Hero
        |--------------------------------------------------------------------------
        */

        const hero =
            await heroService.getHeroById(
                req.params.id
            );


        /*
        |--------------------------------------------------------------------------
        | Delete Image
        |--------------------------------------------------------------------------
        */

        if (
            hero &&
            hero.image
        ) {

            const imagePath =
                path.join(
                    process.cwd(),
                    hero.image
                );


            if (
                fs.existsSync(
                    imagePath
                )
            ) {
                fs.unlinkSync(
                    imagePath
                );
            }
        }


        /*
        |--------------------------------------------------------------------------
        | Delete Database Record
        |--------------------------------------------------------------------------
        */

        await heroService.deleteHero(
            req.params.id
        );


        res.status(200).json({
            success: true,
            message:
                "Hero deleted successfully",
        });

    } catch (error) {

        console.error(
            "Delete Hero Error:",
            error
        );


        if (
            error.code === "P2025"
        ) {

            return res.status(404).json({
                success: false,
                message: "Hero not found",
            });
        }


        res.status(500).json({
            success: false,
            message:
                "Failed to delete hero",
        });
    }
};
