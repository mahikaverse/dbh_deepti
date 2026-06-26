import { Router } from "express";
import adminController from "../controllers/admin.controller";
import authMiddleware from "../middleware/auth.middleware";
import authorize from "../middleware/role.middleware";

const router = Router();

router.use(authMiddleware);
router.use(authorize("ADMIN"));

// Artist
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

// Inquiries
router.get(
  "/inquiries",
  adminController.getAllInquiries
);

router.patch(
  "/inquiries/:id",
  adminController.updateInquiryStatus
);

// Dashboard
router.get(
  "/dashboard",
  adminController.getDashboardAnalytics
);

// =====================
// Artworks
// =====================

router.get(
  "/artworks",
  adminController.getAllArtworks
);

router.patch(
  "/artworks/approve/:id",
  adminController.approveArtwork
);

router.patch(
  "/artworks/reject/:id",
  adminController.rejectArtwork
);

// =====================
// Users
// =====================

router.get(
  "/users",
  adminController.getAllUsers
);

router.patch(
  "/users/:id/role",
  adminController.updateUserRole
);

router.delete(
  "/users/:id",
  adminController.deleteUser
);

export default router;