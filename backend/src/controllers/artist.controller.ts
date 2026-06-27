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

async getMyArtworks(req: Request, res: Response) {
  try {
    const userId = (req as any).user.id;

    const artworks = await artistService.getMyArtworks(userId);

    return res.status(200).json({
      success: true,
      data: artworks,
    });
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

async getStatus(req: Request, res: Response) {
  try {
    const userId = (req as any).user.id;

    const status = await artistService.getArtistStatus(userId);

    return res.json({
      success: true,
      data: status,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async getDashboard(req: Request, res: Response) {
  try {
    const userId = (req as any).user.id;

    const dashboard =
      await artistService.getDashboard(userId);

    return res.status(200).json({
      success: true,
      data: dashboard,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
 // ===========================
// Get Approved Artists
// ===========================

async getApprovedArtists(req: Request, res: Response) {
  try {
    const artists =
      await artistService.getApprovedArtists();

    return res.status(200).json({
      success: true,
      data: artists,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
// ===========================
// Get Artist By Id
// ===========================

async getArtistById(req: Request, res: Response) {
  try {
    const id = Array.isArray(req.params.id)
      ? req.params.id[0]
      : req.params.id;

    const artist =
      await artistService.getArtistById(id);

    return res.status(200).json({
      success: true,
      data: artist,
    });
  } catch (error: any) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
}
// ===========================
// Artist Analytics
// ===========================

async getAnalytics(req: Request, res: Response) {
  try {
    const userId = (req as any).user.id;

    const analytics =
      await artistService.getAnalytics(userId);

    return res.status(200).json({
      success: true,
      data: analytics,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
}

export default new ArtistController();