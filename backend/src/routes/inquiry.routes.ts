import { Router } from "express";

import inquiryController from "../controllers/inquiry.controller";
import authMiddleware from "../middleware/auth.middleware";

const router = Router();
router.get(
  "/my",
  authMiddleware,
  inquiryController.getMyInquiries
);
router.post(
  "/",
  authMiddleware,
  inquiryController.create
);

export default router;