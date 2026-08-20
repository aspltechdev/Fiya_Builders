import prisma from "../config/prisma.js";

/*
|--------------------------------------------------------------------------
| Get Active Gallery
|--------------------------------------------------------------------------
| Public website
*/

export const getActiveGallery = async () => {
  return await prisma.gallery.findMany({
    where: {
      isActive: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

/*
|--------------------------------------------------------------------------
| Get All Gallery
|--------------------------------------------------------------------------
| Admin
*/

export const getAllGallery = async () => {
  return await prisma.gallery.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

/*
|--------------------------------------------------------------------------
| Get Gallery By ID
|--------------------------------------------------------------------------
*/

export const getGalleryById = async (id) => {
  return await prisma.gallery.findUnique({
    where: {
      id: Number(id),
    },
  });
};

/*
|--------------------------------------------------------------------------
| Get Gallery By Category
|--------------------------------------------------------------------------
| Public
*/

export const getGalleryByCategory = async (
  category
) => {
  return await prisma.gallery.findMany({
    where: {
      category,
      isActive: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

/*
|--------------------------------------------------------------------------
| Create Gallery Item
|--------------------------------------------------------------------------
| Admin
*/

export const createGallery = async (data) => {
  return await prisma.gallery.create({
    data: {
      title: data.title || null,
      image: data.image,
      category: data.category || null,

      isActive:
        data.isActive !== undefined
          ? data.isActive === true ||
            data.isActive === "true"
          : true,
    },
  });
};

/*
|--------------------------------------------------------------------------
| Update Gallery Item
|--------------------------------------------------------------------------
| Admin
*/

export const updateGallery = async (
  id,
  data
) => {
  return await prisma.gallery.update({
    where: {
      id: Number(id),
    },

    data: {
      ...(data.title !== undefined && {
        title: data.title,
      }),

      ...(data.image !== undefined && {
        image: data.image,
      }),

      ...(data.category !== undefined && {
        category: data.category,
      }),

      ...(data.isActive !== undefined && {
        isActive:
          data.isActive === true ||
          data.isActive === "true",
      }),
    },
  });
};

/*
|--------------------------------------------------------------------------
| Delete Gallery Item
|--------------------------------------------------------------------------
| Admin
*/

export const deleteGallery = async (id) => {
  return await prisma.gallery.delete({
    where: {
      id: Number(id),
    },
  });
};

/*
|--------------------------------------------------------------------------
| Toggle Gallery Status
|--------------------------------------------------------------------------
| Admin
*/

export const toggleGalleryStatus = async (
  id
) => {
  const gallery =
    await prisma.gallery.findUnique({
      where: {
        id: Number(id),
      },
    });

  if (!gallery) {
    throw new Error(
      "Gallery item not found"
    );
  }

  return await prisma.gallery.update({
    where: {
      id: Number(id),
    },

    data: {
      isActive: !gallery.isActive,
    },
  });
};