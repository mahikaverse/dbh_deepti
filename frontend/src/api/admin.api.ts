import api from "./api";

export const getDashboard = async () => {
  const res = await api.get("/api/admin/dashboard");
  return res.data.data;
};

export const getPendingArtists = async () => {
  const res = await api.get("/api/admin/pending-artists");
  return res.data.data;
};

export const approveArtist = async (id: string) => {
  const res = await api.patch(`/api/admin/approve/${id}`);
  return res.data;
};

export const rejectArtist = async (
  id: string,
  reason: string
) => {
  const res = await api.patch(`/api/admin/reject/${id}`, {
    reason,
  });

  return res.data;
};

export const getInquiries = async () => {
  const res = await api.get("/api/admin/inquiries");
  return res.data.data;
};

export const updateInquiryStatus = async (
  id: string,
  status: string
) => {
  const res = await api.patch(`/api/admin/inquiries/${id}`, {
    status,
  });

  return res.data;
};

// =====================
// Admin Artworks
// =====================

export const getAllArtworks = async () => {
  const res = await api.get("/api/admin/artworks");
  return res.data.data;
};

export const approveArtwork = async (id: string) => {
  const res = await api.patch(
    `/api/admin/artworks/approve/${id}`
  );

  return res.data;
};

export const rejectArtwork = async (id: string) => {
  const res = await api.patch(
    `/api/admin/artworks/reject/${id}`
  );

  return res.data;
};
export const getUsers = async () => {
  const res = await api.get("/api/admin/users");
  return res.data.data;
};

export const updateUserRole = async (
  id: string,
  role: string
) => {
  const res = await api.patch(
    `/api/admin/users/${id}/role`,
    { role }
  );

  return res.data;
};

export const deleteUser = async (
  id: string
) => {
  const res = await api.delete(
    `/api/admin/users/${id}`
  );

  return res.data;
};