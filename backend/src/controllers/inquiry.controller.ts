import { Request, Response } from "express";
import inquiryService from "../services/inquiry.service";
import { createInquirySchema } from "../validators/inquiry.validator";

class InquiryController {
  async createInquiry(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;

      const data = createInquirySchema.parse(req.body);

      const inquiry = await inquiryService.createInquiry(userId, data);

      return res.status(201).json({
        success: true,
        message: "Inquiry created successfully",
        data: inquiry,
      });
    } catch (error: any) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  async getMyInquiries(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;

      const inquiries = await inquiryService.getMyInquiries(userId);

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
}

export default new InquiryController();