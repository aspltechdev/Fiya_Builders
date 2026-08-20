import api from "./api.js";

/*
|--------------------------------------------------------------------------
| Get All Enquiries
|--------------------------------------------------------------------------
*/

export const getAllEnquiries = async () => {
  const response = await api.get(
    "/enquiries/admin/all"
  );

  return response.data;
};

/*
|--------------------------------------------------------------------------
| Get Enquiry By ID
|--------------------------------------------------------------------------
*/

export const getEnquiryById = async (id) => {
  const response = await api.get(
    `/enquiries/admin/${id}`
  );

  return response.data;
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
  const response = await api.patch(
    `/enquiries/${id}/status`,
    {
      status,
    }
  );

  return response.data;
};

/*
|--------------------------------------------------------------------------
| Delete Enquiry
|--------------------------------------------------------------------------
*/

export const deleteEnquiry = async (id) => {
  const response = await api.delete(
    `/enquiries/${id}`
  );

  return response.data;
};