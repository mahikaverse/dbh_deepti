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

router.get(
  "/inquiries",
  authMiddleware,
  authorize("ADMIN"),
  adminController.getAllInquiries
);

router.patch(
  "/inquiries/:id",
  authMiddleware,
  authorize("ADMIN"),
  adminController.updateInquiryStatus
);

router.get(
  "/dashboard",
  authMiddleware,
  authorize("ADMIN"),
  adminController.getDashboardAnalytics
);

export default router;