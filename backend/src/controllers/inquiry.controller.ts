import { Request, Response } from "express";
import inquiryService from "../services/inquiry.service";
import { createInquirySchema } from "../validators/inquiry.validator";
class InquiryController {

  async create(req: Request, res: Response) {
    try {

      const userId = (req as any).user.id;

      const inquiry = await inquiryService.create(
        userId,
       createInquirySchema.parse(req.body)
            );

      return res.status(201).json({
        success: true,
        message: "Inquiry submitted successfully.",
        data: inquiry,
      });

    } catch (error: any) {

      return res.status(
        error.statusCode || 500
      ).json({
        success: false,
        message: error.message,
      });

    }
  }
async getMyInquiries(
  req: Request,
  res: Response
) {
  try {

    const userId = (req as any).user.id;

    const inquiries =
      await inquiryService.getMyInquiries(userId);

    return res.json({
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