import { Router } from "express";
import adminController from "../controllers/admin.controller";
import authMiddleware from "../middleware/auth.middleware";
import authorize from "../middleware/role.middleware";

const router = Router();

router.use(authMiddleware);
router.use(authorize("ADMIN"));

router.get(
  "/pending-artists",
  adminController.getPendingArtists
);

router.patch(
  "/approve/:id",
  adminController.approveArtist
);

router.patch(
  "/reject/:id",
  adminController.rejectArtist
);

export default router;