import prisma from "../config/prisma.js";

/*
|--------------------------------------------------------------------------
| Get Active Testimonials
|--------------------------------------------------------------------------
| Public website
*/

export const getActiveTestimonials = async () => {
  return await prisma.testimonial.findMany({
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
| Get All Testimonials
|--------------------------------------------------------------------------
| Admin panel
*/

export const getAllTestimonials = async () => {
  return await prisma.testimonial.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

/*
|--------------------------------------------------------------------------
| Get Testimonial By ID
|--------------------------------------------------------------------------
*/

export const getTestimonialById = async (
  id
) => {
  return await prisma.testimonial.findUnique({
    where: {
      id: Number(id),
    },
  });
};

/*
|--------------------------------------------------------------------------
| Create Testimonial
|--------------------------------------------------------------------------
| Admin
*/

export const createTestimonial = async (
  data
) => {
  return await prisma.testimonial.create({
    data: {
      name: data.name,
      designation:
        data.designation || null,
      company:
        data.company || null,
      message: data.message,
      image: data.image || null,

      rating:
        data.rating !== undefined &&
        data.rating !== ""
          ? Number(data.rating)
          : 5,

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
| Update Testimonial
|--------------------------------------------------------------------------
| Admin
*/

export const updateTestimonial = async (
  id,
  data
) => {
  return await prisma.testimonial.update({
    where: {
      id: Number(id),
    },

    data: {
      ...(data.name !== undefined && {
        name: data.name,
      }),

      ...(data.designation !== undefined && {
        designation: data.designation,
      }),

      ...(data.company !== undefined && {
        company: data.company,
      }),

      ...(data.message !== undefined && {
        message: data.message,
      }),

      ...(data.image !== undefined && {
        image: data.image,
      }),

      ...(data.rating !== undefined && {
        rating:
          data.rating === ""
            ? 5
            : Number(data.rating),
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
| Delete Testimonial
|--------------------------------------------------------------------------
| Admin
*/

export const deleteTestimonial = async (
  id
) => {
  return await prisma.testimonial.delete({
    where: {
      id: Number(id),
    },
  });
};

/*
|--------------------------------------------------------------------------
| Toggle Testimonial Status
|--------------------------------------------------------------------------
| Admin
*/

export const toggleTestimonialStatus =
  async (id) => {
    const testimonial =
      await prisma.testimonial.findUnique({
        where: {
          id: Number(id),
        },
      });

    if (!testimonial) {
      throw new Error(
        "Testimonial not found"
      );
    }

    return await prisma.testimonial.update({
      where: {
        id: Number(id),
      },

      data: {
        isActive: !testimonial.isActive,
      },
    });
  };