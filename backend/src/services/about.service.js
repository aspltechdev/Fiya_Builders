import prisma from "../config/prisma.js";

/**
 * Get active About section
 * Public website
 */
export const getActiveAbout = async () => {
  return await prisma.about.findFirst({
    where: {
      isActive: true,
    },
    orderBy: {
      id: "desc",
    },
  });
};

/**
 * Get all About sections
 * Admin panel
 */
export const getAllAbout = async () => {
  return await prisma.about.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

/**
 * Get About section by ID
 */
export const getAboutById = async (id) => {
  return await prisma.about.findUnique({
    where: {
      id: Number(id),
    },
  });
};

/**
 * Create About section
 */
export const createAbout = async (data) => {
  return await prisma.about.create({
    data: {
      title: data.title,
      subtitle: data.subtitle || null,
      description: data.description,
      image: data.image || null,
      experience:
        data.experience !== undefined &&
        data.experience !== null
          ? Number(data.experience)
          : null,
      isActive:
        data.isActive !== undefined
          ? data.isActive === true ||
            data.isActive === "true"
          : true,
    },
  });
};

/**
 * Update About section
 */
export const updateAbout = async (id, data) => {
  return await prisma.about.update({
    where: {
      id: Number(id),
    },
    data: {
      ...(data.title !== undefined && {
        title: data.title,
      }),

      ...(data.subtitle !== undefined && {
        subtitle: data.subtitle,
      }),

      ...(data.description !== undefined && {
        description: data.description,
      }),

      ...(data.image !== undefined && {
        image: data.image,
      }),

      ...(data.experience !== undefined && {
        experience:
          data.experience === null ||
          data.experience === ""
            ? null
            : Number(data.experience),
      }),

      ...(data.isActive !== undefined && {
        isActive:
          data.isActive === true ||
          data.isActive === "true",
      }),
    },
  });
};

/**
 * Delete About section
 */
export const deleteAbout = async (id) => {
  return await prisma.about.delete({
    where: {
      id: Number(id),
    },
  });
};

/**
 * Toggle About section status
 */
export const toggleAboutStatus = async (id) => {
  const about = await prisma.about.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!about) {
    throw new Error("About section not found");
  }

  return await prisma.about.update({
    where: {
      id: Number(id),
    },
    data: {
      isActive: !about.isActive,
    },
  });
};