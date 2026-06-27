import { Router } from "express";

import authMiddleware from "../middleware/auth.middleware";
import authorize from "../middleware/role.middleware";

import notificationController from "../controllers/notification.controller";

const router = Router();

router.get(
  "/",
  authMiddleware,
  notificationController.getNotifications
);

router.patch(
  "/read-all",
  authMiddleware,
  notificationController.markAllAsRead
);

router.patch(
  "/:id/read",
  authMiddleware,
  notificationController.markAsRead
);

router.post(
  "/admin/send",
  authMiddleware,
  authorize("ADMIN"),
  notificationController.sendNotification
);

export default router;