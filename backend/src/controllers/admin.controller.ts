import { Request, Response } from "express";
import adminService from "../services/admin.service";
import inquiryService from "../services/inquiry.service";
import { InquiryStatus } from "@prisma/client";

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
  async getAllInquiries(req: Request, res: Response) {
  try {
    const inquiries = await inquiryService.getAllInquiries();

    return res.status(200).json({
      success: true,
      data: inquiries,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
async updateInquiryStatus(req: Request, res: Response) {
  try {
    const id = Array.isArray(req.params.id)
      ? req.params.id[0]
      : req.params.id;

    const { status } = req.body;

    const inquiry = await inquiryService.updateInquiryStatus(
      id,
      status as InquiryStatus
    );

    return res.status(200).json({
      success: true,
      message: "Inquiry status updated successfully",
      data: inquiry,
    });
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}
async getDashboardAnalytics(req: Request, res: Response) {
  try {
    const analytics =
      await adminService.getDashboardAnalytics();

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

export default new AdminController();