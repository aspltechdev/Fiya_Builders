import prisma from "../config/prisma.js";

/*
|--------------------------------------------------------------------------
| Create Enquiry
|--------------------------------------------------------------------------
| Public website
*/

export const createEnquiry = async (data) => {
  return await prisma.contactEnquiry.create({
    data: {
      name: data.name,
      email: data.email || null,
      phone: data.phone,
      subject: data.subject || null,
      message: data.message || null,
      status: "NEW",
    },
  });
};

/*
|--------------------------------------------------------------------------
| Get All Enquiries
|--------------------------------------------------------------------------
| Admin
*/

export const getAllEnquiries = async () => {
  return await prisma.contactEnquiry.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

/*
|--------------------------------------------------------------------------
| Get Enquiry By ID
|--------------------------------------------------------------------------
| Admin
*/

export const getEnquiryById = async (id) => {
  return await prisma.contactEnquiry.findUnique({
    where: {
      id: Number(id),
    },
  });
};

/*
|--------------------------------------------------------------------------
| Get New Enquiries
|--------------------------------------------------------------------------
| Admin Dashboard
*/

export const getNewEnquiries = async () => {
  return await prisma.contactEnquiry.findMany({
    where: {
      status: "NEW",
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

/*
|--------------------------------------------------------------------------
| Get Enquiries By Status
|--------------------------------------------------------------------------
*/

export const getEnquiriesByStatus = async (
  status
) => {
  return await prisma.contactEnquiry.findMany({
    where: {
      status,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

/*
|--------------------------------------------------------------------------
| Update Enquiry Status
|--------------------------------------------------------------------------
*/

export const updateEnquiryStatus = async (
  id,
  status
) => {
  return await prisma.contactEnquiry.update({
    where: {
      id: Number(id),
    },
    data: {
      status,
    },
  });
};

/*
|--------------------------------------------------------------------------
| Delete Enquiry
|--------------------------------------------------------------------------
*/

export const deleteEnquiry = async (id) => {
  return await prisma.contactEnquiry.delete({
    where: {
      id: Number(id),
    },
  });
};