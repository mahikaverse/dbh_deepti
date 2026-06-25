import { Router } from "express";
import prisma from "../config/prisma";

const router = Router();

router.post("/approve-artist/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    await prisma.artistProfile.update({
      where: {
        userId,
      },
      data: {
        status: "APPROVED",
      },
    });

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        role: "ARTIST",
      },
    });

    res.json({
      success: true,
      message: "Artist approved successfully",
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

export default router;