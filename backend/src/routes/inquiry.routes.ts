import { Router } from "express";
import inquiryController from "../controllers/inquiry.controller";
import authMiddleware from "../middleware/auth.middleware";

const router = Router();

router.post(
  "/",
  authMiddleware,
  inquiryController.createInquiry
);

router.get(
  "/my",
  authMiddleware,
  inquiryController.getMyInquiries
);

export default router;