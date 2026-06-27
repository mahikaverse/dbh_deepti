import jwt, { Secret, SignOptions } from "jsonwebtoken";

const JWT_SECRET: Secret = process.env.JWT_SECRET!;
const JWT_REFRESH_SECRET: Secret = process.env.JWT_REFRESH_SECRET!;

export function generateAccessToken(payload: object) {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "7d",
  } as SignOptions);
}

export function generateRefreshToken(payload: object) {
  return jwt.sign(payload, JWT_REFRESH_SECRET, {
    expiresIn: "7d",
  } as SignOptions);
}

export function verifyAccessToken(token: string) {
  return jwt.verify(token, JWT_SECRET);
}

export function verifyRefreshToken(token: string) {
  return jwt.verify(token, JWT_REFRESH_SECRET);
}