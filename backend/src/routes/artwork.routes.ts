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

// Special routes first
router.get(
  "/explore",
  authMiddleware,
  artworkController.getExploreArtworks
);

router.post(
  "/:id/like",
  authMiddleware,
  artworkController.toggleLike
);

router.post(
  "/:id/wishlist",
  authMiddleware,
  artworkController.toggleWishlist
);

router.get(
  "/wishlist/me",
  authMiddleware,
  artworkController.getWishlist
);

// Generic routes last
router.get("/", artworkController.getAllArtworks);

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