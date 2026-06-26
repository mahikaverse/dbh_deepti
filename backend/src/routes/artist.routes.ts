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

router.get(
  "/dashboard",
  authMiddleware,
  artistController.getDashboard
);

router.get(
  "/artworks",
  authMiddleware,
  artistController.getMyArtworks
);

router.get(
  "/status",
  authMiddleware,
  artistController.getStatus
);

router.get(
  "/",
  artistController.getApprovedArtists
);

router.get(
  "/:id",
  artistController.getArtistById
);

export default router;