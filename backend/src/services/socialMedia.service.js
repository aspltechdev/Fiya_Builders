// // // backend/src/services/socialMedia.service.js
// // import prisma from "../config/prisma.js";

// // /*
// // |--------------------------------------------------------------------------
// // | Get All Social Media Links
// // |--------------------------------------------------------------------------
// // */

// // export const getAllSocialMedia = async () => {
// //   return await prisma.socialMedia.findMany({
// //     where: {
// //       isActive: true,
// //     },
// //     orderBy: {
// //       sortOrder: "asc",
// //     },
// //   });
// // };

// // /*
// // |--------------------------------------------------------------------------
// // | Get Social Media By Platform
// // |--------------------------------------------------------------------------
// // */

// // export const getSocialMediaByPlatform = async (platform) => {
// //   return await prisma.socialMedia.findUnique({
// //     where: {
// //       platform,
// //     },
// //   });
// // };

// // /*
// // |--------------------------------------------------------------------------
// // | Create Social Media
// // |--------------------------------------------------------------------------
// // */

// // export const createSocialMedia = async (data) => {
// //   return await prisma.socialMedia.create({
// //     data: {
// //       platform: data.platform,
// //       url: data.url,
// //       icon: data.icon || null,
// //       label: data.label || null,
// //       isActive: data.isActive !== undefined ? data.isActive : true,
// //       sortOrder: data.sortOrder || 0,
// //     },
// //   });
// // };

// // /*
// // |--------------------------------------------------------------------------
// // | Update Social Media
// // |--------------------------------------------------------------------------
// // */

// // export const updateSocialMedia = async (id, data) => {
// //   return await prisma.socialMedia.update({
// //     where: {
// //       id: Number(id),
// //     },
// //     data: {
// //       ...(data.platform !== undefined && { platform: data.platform }),
// //       ...(data.url !== undefined && { url: data.url }),
// //       ...(data.icon !== undefined && { icon: data.icon }),
// //       ...(data.label !== undefined && { label: data.label }),
// //       ...(data.isActive !== undefined && { isActive: data.isActive }),
// //       ...(data.sortOrder !== undefined && { sortOrder: data.sortOrder }),
// //     },
// //   });
// // };

// // /*
// // |--------------------------------------------------------------------------
// // | Delete Social Media
// // |--------------------------------------------------------------------------
// // */

// // export const deleteSocialMedia = async (id) => {
// //   return await prisma.socialMedia.delete({
// //     where: {
// //       id: Number(id),
// //     },
// //   });
// // };

// // /*
// // |--------------------------------------------------------------------------
// // | Toggle Social Media Status
// // |--------------------------------------------------------------------------
// // */

// // export const toggleSocialMediaStatus = async (id) => {
// //   const social = await prisma.socialMedia.findUnique({
// //     where: { id: Number(id) },
// //   });

// //   if (!social) {
// //     throw new Error("Social media link not found");
// //   }

// //   return await prisma.socialMedia.update({
// //     where: { id: Number(id) },
// //     data: {
// //       isActive: !social.isActive,
// //     },
// //   });
// // };



// // src/pages/admin/SocialMedia/SocialMediaManagement.jsx

// const fyaSocialHandleSubmit = async (e) => {
//   e.preventDefault();
//   setFyaSocialSaving(true);

//   try {
//     // ✅ Ensure sortOrder is a number
//     const formData = {
//       ...fyaSocialForm,
//       sortOrder: fyaSocialForm.sortOrder !== "" ? Number(fyaSocialForm.sortOrder) : 0,
//       isActive: fyaSocialForm.isActive === true,
//     };

//     if (fyaSocialEditing) {
//       await updateSocialMedia(fyaSocialEditing.id, formData);
//       fyaSocialShowToast("Social media link updated successfully");
//     } else {
//       await createSocialMedia(formData);
//       fyaSocialShowToast("Social media link created successfully");
//     }
//     await fyaSocialLoadItems();
//     fyaSocialCloseModal();
//   } catch (error) {
//     console.error("Error saving social media:", error);
//     fyaSocialShowToast(
//       error.response?.data?.message || "Failed to save social media link",
//       "error"
//     );
//   } finally {
//     setFyaSocialSaving(false);
//   }
// };





// backend/src/services/socialMedia.service.js
import prisma from "../config/prisma.js";

/*
|--------------------------------------------------------------------------
| Get All Social Media Links (Active only)
|--------------------------------------------------------------------------
*/

export const getAllSocialMedia = async () => {
  return await prisma.socialMedia.findMany({
    where: {
      isActive: true,
    },
    orderBy: {
      sortOrder: "asc",
    },
  });
};

/*
|--------------------------------------------------------------------------
| Get Social Media By Platform
|--------------------------------------------------------------------------
*/

export const getSocialMediaByPlatform = async (platform) => {
  return await prisma.socialMedia.findUnique({
    where: {
      platform: platform,
    },
  });
};

/*
|--------------------------------------------------------------------------
| Get Social Media By ID
|--------------------------------------------------------------------------
*/

export const getSocialMediaById = async (id) => {
  return await prisma.socialMedia.findUnique({
    where: {
      id: Number(id),
    },
  });
};

/*
|--------------------------------------------------------------------------
| Create Social Media
|--------------------------------------------------------------------------
*/

export const createSocialMedia = async (data) => {
  return await prisma.socialMedia.create({
    data: {
      platform: data.platform,
      url: data.url,
      icon: data.icon || null,
      label: data.label || null,
      isActive: data.isActive !== undefined ? data.isActive : true,
      sortOrder: data.sortOrder !== undefined && data.sortOrder !== "" 
        ? Number(data.sortOrder) 
        : 0,
    },
  });
};

/*
|--------------------------------------------------------------------------
| Update Social Media
|--------------------------------------------------------------------------
*/

export const updateSocialMedia = async (id, data) => {
  const updateData = {};
  
  if (data.platform !== undefined) updateData.platform = data.platform;
  if (data.url !== undefined) updateData.url = data.url;
  if (data.icon !== undefined) updateData.icon = data.icon;
  if (data.label !== undefined) updateData.label = data.label;
  if (data.isActive !== undefined) updateData.isActive = data.isActive;
  if (data.sortOrder !== undefined && data.sortOrder !== "") {
    updateData.sortOrder = Number(data.sortOrder);
  }

  return await prisma.socialMedia.update({
    where: {
      id: Number(id),
    },
    data: updateData,
  });
};

/*
|--------------------------------------------------------------------------
| Delete Social Media
|--------------------------------------------------------------------------
*/

export const deleteSocialMedia = async (id) => {
  return await prisma.socialMedia.delete({
    where: {
      id: Number(id),
    },
  });
};

/*
|--------------------------------------------------------------------------
| Toggle Social Media Status
|--------------------------------------------------------------------------
*/

export const toggleSocialMediaStatus = async (id) => {
  const social = await prisma.socialMedia.findUnique({
    where: { id: Number(id) },
  });

  if (!social) {
    throw new Error("Social media link not found");
  }

  return await prisma.socialMedia.update({
    where: { id: Number(id) },
    data: {
      isActive: !social.isActive,
    },
  });
};