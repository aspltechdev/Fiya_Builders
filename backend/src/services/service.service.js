import prisma from "../config/prisma.js";

/*
|--------------------------------------------------------------------------
| Get All Services
|--------------------------------------------------------------------------
| Admin
*/

export const getAllServices = async () => {
  return await prisma.service.findMany({
    orderBy: [
      {
        sortOrder: "asc",
      },
      {
        createdAt: "desc",
      },
    ],
  });
};

/*
|--------------------------------------------------------------------------
| Get Active Services
|--------------------------------------------------------------------------
| Public website
*/

export const getActiveServices = async () => {
  return await prisma.service.findMany({
    where: {
      isActive: true,
    },
    orderBy: [
      {
        sortOrder: "asc",
      },
      {
        createdAt: "desc",
      },
    ],
  });
};

/*
|--------------------------------------------------------------------------
| Get Service By ID
|--------------------------------------------------------------------------
*/

export const getServiceById = async (id) => {
  return await prisma.service.findUnique({
    where: {
      id: Number(id),
    },
  });
};

/*
|--------------------------------------------------------------------------
| Get Service By Slug
|--------------------------------------------------------------------------
| Public service details
*/

export const getServiceBySlug = async (slug) => {
  return await prisma.service.findUnique({
    where: {
      slug,
    },
  });
};

/*
|--------------------------------------------------------------------------
| Create Service
|--------------------------------------------------------------------------
| Admin
*/

export const createService = async (data) => {
  return await prisma.service.create({
    data: {
      title: data.title,
      slug: data.slug,
      description: data.description || null,
      image: data.image || null,
      icon: data.icon || null,

      sortOrder:
        data.sortOrder !== undefined &&
        data.sortOrder !== ""
          ? Number(data.sortOrder)
          : 0,

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
| Update Service
|--------------------------------------------------------------------------
| Admin
*/

export const updateService = async (
  id,
  data
) => {
  return await prisma.service.update({
    where: {
      id: Number(id),
    },

    data: {
      ...(data.title !== undefined && {
        title: data.title,
      }),

      ...(data.slug !== undefined && {
        slug: data.slug,
      }),

      ...(data.description !== undefined && {
        description: data.description,
      }),

      ...(data.image !== undefined && {
        image: data.image,
      }),

      ...(data.icon !== undefined && {
        icon: data.icon,
      }),

      ...(data.sortOrder !== undefined && {
        sortOrder:
          data.sortOrder === ""
            ? 0
            : Number(data.sortOrder),
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
| Delete Service
|--------------------------------------------------------------------------
| Admin
*/

export const deleteService = async (id) => {
  return await prisma.service.delete({
    where: {
      id: Number(id),
    },
  });
};

/*
|--------------------------------------------------------------------------
| Toggle Service Status
|--------------------------------------------------------------------------
| Admin
*/

export const toggleServiceStatus = async (
  id
) => {
  const service =
    await prisma.service.findUnique({
      where: {
        id: Number(id),
      },
    });

  if (!service) {
    throw new Error("Service not found");
  }

  return await prisma.service.update({
    where: {
      id: Number(id),
    },

    data: {
      isActive: !service.isActive,
    },
  });
};

/*
|--------------------------------------------------------------------------
| Update Service Order
|--------------------------------------------------------------------------
| Admin
*/

export const updateServiceOrder = async (
  id,
  sortOrder
) => {
  return await prisma.service.update({
    where: {
      id: Number(id),
    },

    data: {
      sortOrder: Number(sortOrder),
    },
  });
};