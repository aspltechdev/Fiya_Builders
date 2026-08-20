import prisma from "../config/prisma.js";

/*
|--------------------------------------------------------------------------
| Get All Projects
|--------------------------------------------------------------------------
| Admin
*/

export const getAllProjects = async () => {
  return await prisma.project.findMany({
    include: {
      gallery: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

/*
|--------------------------------------------------------------------------
| Get Active Projects
|--------------------------------------------------------------------------
| Public website
*/

export const getActiveProjects = async () => {
  return await prisma.project.findMany({
    where: {
      isActive: true,
    },
    include: {
      gallery: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

/*
|--------------------------------------------------------------------------
| Get Featured Projects
|--------------------------------------------------------------------------
| Public website
*/

export const getFeaturedProjects = async () => {
  return await prisma.project.findMany({
    where: {
      isActive: true,
      isFeatured: true,
    },
    include: {
      gallery: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

/*
|--------------------------------------------------------------------------
| Get Project By ID
|--------------------------------------------------------------------------
*/

export const getProjectById = async (id) => {
  return await prisma.project.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      gallery: true,
    },
  });
};

/*
|--------------------------------------------------------------------------
| Get Project By Slug
|--------------------------------------------------------------------------
| Public project details page
*/

export const getProjectBySlug = async (slug) => {
  return await prisma.project.findUnique({
    where: {
      slug,
    },
    include: {
      gallery: true,
    },
  });
};

/*
|--------------------------------------------------------------------------
| Create Project
|--------------------------------------------------------------------------
*/

export const createProject = async (data) => {
  const {
    title,
    slug,
    category,
    location,
    year,
    description,
    featuredImage,
    isFeatured,
    isActive,
    gallery,
  } = data;

  return await prisma.project.create({
    data: {
      title,
      slug,
      category: category || null,
      location: location || null,

      year:
        year !== undefined &&
        year !== null &&
        year !== ""
          ? Number(year)
          : null,

      description: description || null,
      featuredImage: featuredImage || null,

      isFeatured:
        isFeatured === true ||
        isFeatured === "true",

      isActive:
        isActive !== undefined
          ? isActive === true ||
            isActive === "true"
          : true,

      gallery:
        gallery && gallery.length > 0
          ? {
              create: gallery.map((image) => ({
                image,
              })),
            }
          : undefined,
    },

    include: {
      gallery: true,
    },
  });
};

/*
|--------------------------------------------------------------------------
| Update Project
|--------------------------------------------------------------------------
*/

export const updateProject = async (
  id,
  data
) => {
  const {
    title,
    slug,
    category,
    location,
    year,
    description,
    featuredImage,
    isFeatured,
    isActive,
    gallery,
  } = data;

  const projectId = Number(id);

  return await prisma.$transaction(
    async (tx) => {
      /*
      |--------------------------------------------------------------------------
      | Update Project Gallery
      |--------------------------------------------------------------------------
      */

      if (gallery !== undefined) {
        await tx.projectImage.deleteMany({
          where: {
            projectId,
          },
        });
      }

      /*
      |--------------------------------------------------------------------------
      | Update Project
      |--------------------------------------------------------------------------
      */

      const project =
        await tx.project.update({
          where: {
            id: projectId,
          },

          data: {
            ...(title !== undefined && {
              title,
            }),

            ...(slug !== undefined && {
              slug,
            }),

            ...(category !== undefined && {
              category,
            }),

            ...(location !== undefined && {
              location,
            }),

            ...(year !== undefined && {
              year:
                year === null || year === ""
                  ? null
                  : Number(year),
            }),

            ...(description !== undefined && {
              description,
            }),

            ...(featuredImage !== undefined && {
              featuredImage,
            }),

            ...(isFeatured !== undefined && {
              isFeatured:
                isFeatured === true ||
                isFeatured === "true",
            }),

            ...(isActive !== undefined && {
              isActive:
                isActive === true ||
                isActive === "true",
            }),

            ...(gallery !== undefined &&
              gallery.length > 0 && {
                gallery: {
                  create: gallery.map(
                    (image) => ({
                      image,
                    })
                  ),
                },
              }),
          },

          include: {
            gallery: true,
          },
        });

      return project;
    }
  );
};

/*
|--------------------------------------------------------------------------
| Delete Project
|--------------------------------------------------------------------------
*/

export const deleteProject = async (id) => {
  return await prisma.project.delete({
    where: {
      id: Number(id),
    },
  });
};

/*
|--------------------------------------------------------------------------
| Toggle Active Status
|--------------------------------------------------------------------------
*/

export const toggleProjectStatus = async (
  id
) => {
  const project =
    await prisma.project.findUnique({
      where: {
        id: Number(id),
      },
    });

  if (!project) {
    throw new Error("Project not found");
  }

  return await prisma.project.update({
    where: {
      id: Number(id),
    },

    data: {
      isActive: !project.isActive,
    },
  });
};

/*
|--------------------------------------------------------------------------
| Toggle Featured Status
|--------------------------------------------------------------------------
*/

export const toggleProjectFeatured = async (
  id
) => {
  const project =
    await prisma.project.findUnique({
      where: {
        id: Number(id),
      },
    });

  if (!project) {
    throw new Error("Project not found");
  }

  return await prisma.project.update({
    where: {
      id: Number(id),
    },

    data: {
      isFeatured: !project.isFeatured,
    },
  });
};