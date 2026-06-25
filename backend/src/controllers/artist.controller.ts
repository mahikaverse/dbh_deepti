import { Request, Response } from "express";
import artistService from "../services/artist.service";
import { applyArtistSchema } from "../validators/artist.validator";

class ArtistController {
  async apply(req: Request, res: Response) {
    try {
      const data = applyArtistSchema.parse(req.body);

      const userId = (req as any).user.id;

      const profile = await artistService.apply(userId, data);

      return res.status(201).json({
        success: true,
        message: "Artist application submitted successfully",
        data: profile,
      });
    } catch (error: any) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  async getProfile(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;

      const profile = await artistService.getProfile(userId);

      return res.status(200).json({
        success: true,
        data: profile,
      });
    } catch (error: any) {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }
}

export default new ArtistController();