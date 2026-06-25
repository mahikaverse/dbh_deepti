import { Router } from "express";
import authController from "../controllers/auth.controller";
import authMiddleware from "../middleware/auth.middleware";
import authorize from "../middleware/role.middleware";

console.log("✅ Auth Routes Loaded");
const router = Router();

router.post("/register", authController.register);

router.post("/login", authController.login);

router.get("/me", authMiddleware, authController.me);

router.get(
  "/admin",
  authMiddleware,
  authorize("ADMIN"),
  (req, res) => {
    res.json({
      success: true,
      message: "Welcome Admin",
    });
  }
);

export default router;