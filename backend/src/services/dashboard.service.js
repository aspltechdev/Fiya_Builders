import prisma from "../config/prisma.js";

export const getDashboardStats = async () => {
  const [
    services,
    projects,
    gallery,
    testimonials,
    enquiries,
    newEnquiries,
  ] = await Promise.all([
    prisma.service.count(),

    prisma.project.count(),

    prisma.gallery.count(),

    prisma.testimonial.count(),

    prisma.contactEnquiry.count(),

    prisma.contactEnquiry.count({
      where: {
        status: "NEW",
      },
    }),
  ]);

  return {
    services,
    projects,
    gallery,
    testimonials,
    enquiries,
    newEnquiries,
  };
};

export const getRecentEnquiries = async () => {
  return await prisma.contactEnquiry.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      subject: true,
      status: true,
      createdAt: true,
    },
  });
};

export const getRecentProjects = async () => {
  return await prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
    select: {
      id: true,
      title: true,
      slug: true,
      category: true,
      location: true,
      featuredImage: true,
      isFeatured: true,
      isActive: true,
      createdAt: true,
    },
  });
};

export const getDashboardData = async () => {
  const [
    stats,
    recentEnquiries,
    recentProjects,
  ] = await Promise.all([
    getDashboardStats(),
    getRecentEnquiries(),
    getRecentProjects(),
  ]);

  return {
    stats,
    recentEnquiries,
    recentProjects,
  };
};