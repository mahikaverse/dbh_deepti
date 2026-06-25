import { Request, Response } from "express";
import uploadService from "../services/upload.service";

class UploadController {
  async upload(req: Request, res: Response) {
    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "Image is required",
        });
      }

      const folderMap: Record<string, string> = {
        artworks: "deepti-art/artworks",
        profile: "deepti-art/profile-images",
      };

      const folder =
        folderMap[String(req.query.folder)] ??
        folderMap.profile;

      const result: any =
        await uploadService.uploadImage(
          req.file,
          folder
        );

      return res.status(200).json({
        success: true,
        data: {
          url: result.secure_url,
        },
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}

export default new UploadController();