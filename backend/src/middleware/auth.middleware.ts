import { NextFunction, Request, Response } from "express";
import { verifyAccessToken } from "../utils/jwt";

export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token missing",
      });
    }

    const decoded = verifyAccessToken(token);
   
    (req as any).user = decoded;

    next();
  } catch (error) {
   
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
}