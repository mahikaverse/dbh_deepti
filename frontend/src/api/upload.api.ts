import api from "./api";

export async function uploadImage(
  file: File,
  folder: "profile" | "artworks"
) {
  const formData = new FormData();

  formData.append("image", file);

  const res = await api.post(
    `/api/upload?folder=${folder}`,
    formData
  );

  return res.data.data.url;
}