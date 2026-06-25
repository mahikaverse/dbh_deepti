import { Request, Response } from "express";
import artworkService from "../services/artwork.service";
import { createArtworkSchema } from "../validators/artwork.validator";

class ArtworkController {
  async createArtwork(req: Request, res: Response) {
    try {
      const data = createArtworkSchema.parse(req.body);

      const artistId = (req as any).user.id;

      const artwork = await artworkService.createArtwork(data, artistId);

      return res.status(201).json({
        success: true,
        message: "Artwork created successfully",
        data: artwork,
      });
    } catch (error: any) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  async getAllArtworks(req: Request, res: Response) {
    try {
      const artworks = await artworkService.getAllArtworks();

      return res.status(200).json({
        success: true,
        data: artworks,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  async getArtworkById(req: Request, res: Response) {
    try {
      const artworkId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
      const artwork = await artworkService.getArtworkById(artworkId);

      return res.status(200).json({
        success: true,
        data: artwork,
      });
    } catch (error: any) {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }
}

export default new ArtworkController();