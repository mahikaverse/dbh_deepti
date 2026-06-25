import "express";

declare global {
  namespace Express {
    interface UserPayload {
      id: string;
      email: string;
      role: "USER" | "ARTIST" | "ADMIN";
    }

    interface Request {
      user: UserPayload;
    }
  }
}

export {};