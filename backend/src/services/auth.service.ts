import prisma from "../config/prisma";
import { comparePassword, hashPassword } from "../utils/hash";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/jwt";
import AppError from "../errors/AppError";

interface RegisterInput {
  name: string;
  email: string;
  password: string;
  role?: "USER" | "ARTIST";
}

interface LoginInput {
  email: string;
  password: string;
}

class AuthService {
  async register(data: RegisterInput) {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (existingUser) {
      throw new AppError(
   "Email already registered",
   409
);
    }

    const hashedPassword = await hashPassword(data.password);

    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
        role: data.role ?? "USER",
      },
    });

    const accessToken = generateAccessToken({
      id: user.id,
      role: user.role,
      email: user.email,
    });

    const refreshToken = generateRefreshToken({
      id: user.id,
    });

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      accessToken,
      refreshToken,
    };
  }

  async login(data: LoginInput) {
    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user) {
      throw new AppError(
   "Invalid email or password",
   401
);
    }

    const isMatch = await comparePassword(
      data.password,
      user.password
    );

    if (!isMatch) {
      throw new AppError("Invalid email or password", 401);   }

    const accessToken = generateAccessToken({
      id: user.id,
      role: user.role,
      email: user.email,
    });

    const refreshToken = generateRefreshToken({
      id: user.id,
    });

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      accessToken,
      refreshToken,
    };
  }

  async getUser(id: string) {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

    if (!user) {
      throw new AppError("User not found", 404);    }

    return user;
  }
}

export default new AuthService();