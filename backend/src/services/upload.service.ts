import cloudinary from "../config/cloudinary";

class UploadService {
  async uploadImage(
    file: Express.Multer.File,
    folder: string = "deepti-art/uploads"
  ) {
    return new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder,
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