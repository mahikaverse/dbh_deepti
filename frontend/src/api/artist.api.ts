import api from "./api";

export const getMyArtworks = async () => {
  const res = await api.get(
    "/api/artist/artworks"
  );

  return res.data.data;
};

export async function getArtistStatus() {
  const res = await api.get(
    "/api/artist/status"
  );

  return res.data.data;
}

export async function applyArtist(data: any) {
  const res = await api.post(
    "/api/artist/apply",
    data
  );

  return res.data.data;
}

export async function getArtistProfile() {
  const res = await api.get(
    "/api/artist/profile"
  );

  return res.data.data;
}

export async function getArtistDashboard() {
  const res = await api.get("/api/artist/dashboard");
  return res.data.data;
}