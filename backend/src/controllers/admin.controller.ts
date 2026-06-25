import { Request, Response } from "express";
import adminService from "../services/admin.service";

class AdminController {
  async getPendingArtists(req: Request, res: Response) {
    try {
      const artists = await adminService.getPendingArtists();

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

  async approveArtist(req: Request, res: Response) {
    try {
      const artistId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;

      await adminService.approveArtist(artistId);

      return res.status(200).json({
        success: true,
        message: "Artist approved successfully",
      });
    } catch (error: any) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  async rejectArtist(req: Request, res: Response) {
    try {
      const { reason } = req.body;
      const artistId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;

      await adminService.rejectArtist(artistId, reason);

      return res.status(200).json({
        success: true,
        message: "Artist rejected successfully",
      });
    } catch (error: any) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }
}

export default new AdminController();