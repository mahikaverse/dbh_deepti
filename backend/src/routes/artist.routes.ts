import { Router } from "express";
import artistController from "../controllers/artist.controller";
import authMiddleware from "../middleware/auth.middleware";

const router = Router();

router.post(
  "/apply",
  authMiddleware,
  artistController.apply
);

router.get(
  "/profile",
  authMiddleware,
  artistController.getProfile
);

export default router;