import { Request, Response } from "express";
import authService from "../services/auth.service";
import {
  loginSchema,
  registerSchema,
} from "../validators/auth.validator";
import { ZodError } from "zod";

class AuthController {
  async register(req: Request, res: Response) {
    try {
      const data = registerSchema.parse(req.body);

      const result = await authService.register(data);

      return res.status(201).json({
        success: true,
        message: "User registered successfully",
        data: result,
      });
    } catch (error: any) {

  if (error instanceof ZodError) {
    return res.status(400).json({
      success: false,
      message: error.issues[0].message,
    });
  }

  return res.status(400).json({
    success: false,
    message: error.message,
  });
}
  }

  async login(req: Request, res: Response) {
    try {
      const data = loginSchema.parse(req.body);

      const result = await authService.login(data);

      return res.status(200).json({
        success: true,
        message: "Login successful",
        data: result,
      });
    } catch (error: any) {
      return res.status(401).json({
        success: false,
        message: error.message,
      });
    }
  }

  async me(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;

      const user = await authService.getUser(userId);

      return res.status(200).json({
        success: true,
        data: user,
      });
    } catch (error: any) {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }
}

export default new AuthController();