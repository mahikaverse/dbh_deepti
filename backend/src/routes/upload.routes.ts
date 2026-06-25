import { Router } from "express";
import uploadController from "../controllers/upload.controller";
import upload from "../middleware/upload.middleware";
import authMiddleware from "../middleware/auth.middleware";

const router = Router();

router.post(
  "/",
  authMiddleware,
  upload.single("image"),
  uploadController.upload
);

export default router;