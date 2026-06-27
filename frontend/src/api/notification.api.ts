 
import api from "./api";

// Fallback axios instance  
export const getNotifications =
  async () => {
    const response =
      await api.get("/api/notifications");

    return response.data.data;
  };

export async function markAsRead(
  id: string
) {
  const res = await api.patch(
    `/api/notifications/${id}/read`
  );

  return res.data;
}

export async function markAllAsRead() {
  const res = await api.patch(
    "/api/notifications/read-all"
  );

  return res.data;
}

export async function sendNotification(
  data: {
    title: string;
    message: string;
    target: string;
    userId?: string;
  }
) {
  const res = await api.post(
    "/api/notifications/admin/send",
    data
  );

  return res.data;
}