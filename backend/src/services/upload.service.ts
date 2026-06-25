import cloudinary from "../config/cloudinary";

class UploadService {
  async uploadImage(file: Express.Multer.File) {
    return new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "deepti-art/artworks",
          },
          (error, result) => {
            if (error) return reject(error);

            resolve(result);
          }
        )
        .end(file.buffer);
    });
  }
}

export default new UploadService();