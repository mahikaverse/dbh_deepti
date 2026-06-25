import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes";
import artworkRoutes from "./routes/artwork.routes";
import artistRoutes from "./routes/artist.routes";
import adminRoutes from "./routes/admin.routes";
import inquiryRoutes from "./routes/inquiry.routes";

import errorMiddleware from "./middleware/error.middleware";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Deepti Art Backend Running",
  });
});

app.get("/test", (_req, res) => {
  res.json({
    success: true,
    message: "Test OK",
  });
});

app.use("/api/auth", authRoutes);

app.use("/api/artworks", artworkRoutes);

app.use("/api/artist", artistRoutes);

app.use("/api/admin", adminRoutes);

app.use("/api/inquiries", inquiryRoutes);

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("✅ Server Started Successfully");
  console.log(`🚀 Server running on port ${PORT}`);
});