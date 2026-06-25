import { Router } from "express";
import artworkController from "../controllers/artwork.controller";
import authMiddleware from "../middleware/auth.middleware";
import authorize from "../middleware/role.middleware";
import upload from "../middleware/upload.middleware";

const router = Router();

router.post(
  "/",
  authMiddleware,
  authorize("ARTIST", "ADMIN"),
  upload.single("image"),
  artworkController.createArtwork
);

router.get("/", artworkController.getAllArtworks);
router.get("/explore", artworkController.getExploreArtworks);
router.get("/:id", artworkController.getArtworkById);

router.put(
  "/:id",
  authMiddleware,
  authorize("ARTIST", "ADMIN"),
  artworkController.updateArtwork
);

router.delete(
  "/:id",
  authMiddleware,
  authorize("ARTIST", "ADMIN"),
  artworkController.deleteArtwork
);

export default router;