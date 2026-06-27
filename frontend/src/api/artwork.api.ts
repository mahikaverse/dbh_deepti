import api from "./api";

export const getAllArtworks = async () => {
  const res = await api.get("/api/artworks");
  return res.data.data;
};

export const getArtwork = async (id: string) => {
  const res = await api.get(`/api/artworks/${id}`);
  return res.data.data;
};

export const createArtwork = async (formData: FormData) => {
  const res = await api.post(
    "/api/artworks",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return res.data.data;
};

export const updateArtwork = async (
  id: string,
  data: any
) => {
  const res = await api.put(
    `/api/artworks/${id}`,
    data
  );

  return res.data.data;
};

export const deleteArtwork = async (
  id: string
) => {
  const res = await api.delete(
    `/api/artworks/${id}`
  );

  return res.data.data;
};

export const getExploreArtworks = async () => {
  const res = await api.get("/api/artworks/explore");
  return res.data.data;
};

export const toggleLike = async (
  artworkId: string
) => {
  const res = await api.post(
    `/api/artworks/${artworkId}/like`
  );

  return res.data.data;
};

export const toggleWishlist = async (
  artworkId: string
) => {
  const res = await api.post(
    `/api/artworks/${artworkId}/wishlist`
  );

  return res.data.data;
};

export const getWishlist = async () => {
  const res = await api.get(
    "/api/artworks/wishlist/me"
  );

  return res.data.data;
};