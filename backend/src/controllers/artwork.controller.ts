import { Request, Response } from "express";
import artworkService from "../services/artwork.service";
import uploadService from "../services/upload.service";
import { createArtworkSchema } from "../validators/artwork.validator";

class ArtworkController {
  // ===========================
  // Create Artwork
  // ===========================

  async createArtwork(req: Request, res: Response) {
    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "Artwork image is required",
        });
      }

      const uploadResult: any = await uploadService.uploadImage(
        req.file,
        "deepti-art/artworks"
      );

      const data = createArtworkSchema.parse({
        ...req.body,
        imageUrl: uploadResult.secure_url,
        width: req.body.width
          ? Number(req.body.width)
          : undefined,
        height: req.body.height
          ? Number(req.body.height)
          : undefined,
        price: Number(req.body.price),
        frameAvailable:
          req.body.frameAvailable === "true",
      });

      const artistId = (req as any).user.id;

      const artwork =
        await artworkService.createArtwork(
          data,
          artistId
        );

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

  // ===========================
  // Get All Artworks
  // ===========================

  async getAllArtworks(
    req: Request,
    res: Response
  ) {
    try {
      const artworks =
        await artworkService.getAllArtworks();

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

  // ===========================
  // Explore Artworks
  // ===========================

  async getExploreArtworks(
    req: Request,
    res: Response
  ) {
    try {
      const artworks =
        await artworkService.getExploreArtworks();

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

  // ===========================
  // Get Artwork By ID
  // ===========================

  async getArtworkById(
    req: Request,
    res: Response
  ) {
    try {
      const id = Array.isArray(req.params.id)
        ? req.params.id[0]
        : req.params.id;

      const artwork =
        await artworkService.getArtworkById(id);

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

  // ===========================
  // Update Artwork
  // ===========================

  async updateArtwork(
    req: Request,
    res: Response
  ) {
    try {
      const artistId = (req as any).user.id;

      const id = Array.isArray(req.params.id)
        ? req.params.id[0]
        : req.params.id;

      const artwork =
        await artworkService.updateArtwork(
          id,
          artistId,
          req.body
        );

      return res.status(200).json({
        success: true,
        message: "Artwork updated successfully",
        data: artwork,
      });
    } catch (error: any) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  // ===========================
  // Delete Artwork
  // ===========================

  async deleteArtwork(
    req: Request,
    res: Response
  ) {
    try {
      const artistId = (req as any).user.id;

      const id = Array.isArray(req.params.id)
        ? req.params.id[0]
        : req.params.id;

      const result =
        await artworkService.deleteArtwork(
          id,
          artistId
        );

      return res.status(200).json({
        success: true,
        message: result.message,
      });
    } catch (error: any) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }
}

export default new ArtworkController();