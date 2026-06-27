import api from "./api";

export async function createInquiry(data: {
  artworkId: string;
  fullName: string;
  phone: string;
  email: string;
  city: string;
  preferredSize?: string;
  preferredFrame?: string;
  message: string;
}) {
  const res = await api.post(
    "/api/inquiries",
    data
  );

  return res.data.data;
}

export async function getMyInquiries() {
  const res = await api.get(
    "/api/inquiries/my"
  );

  return res.data.data;
}