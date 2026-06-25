import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import artworkRoutes from "./routes/artwork.routes";
import artistRoutes from "./routes/artist.routes";
import adminRoutes from "./routes/admin.routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Deepti Art Backend Running",
  });
});

app.use("/api/auth", authRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

import errorMiddleware from "./middleware/error.middleware";
app.use(errorMiddleware);

app.get("/test", (req, res) => {
  res.json({ message: "Test OK" });
});

app.use("/api/artworks", artworkRoutes);
app.use("/api/artist", artistRoutes);
app.use("/api/admin", adminRoutes);
console.log("Server Started Successfully");

