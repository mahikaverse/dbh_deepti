import prisma from "../config/prisma";
import AppError from "../errors/AppError";
import { ApplyArtistInput } from "../validators/artist.validator";

class ArtistService {
  async apply(userId: string, data: ApplyArtistInput) {
    const existing = await prisma.artistProfile.findUnique({
      where: {
        userId,
      },
    });

    if (existing) {
      throw new AppError("Artist profile already exists", 409);
    }

    const profile = await prisma.artistProfile.create({
      data: {
        userId,
        ...data,
      },
    });

    return profile;
  }

  async getProfile(userId: string) {
    const profile = await prisma.artistProfile.findUnique({
      where: {
        userId,
      },
    });

    if (!profile) {
      throw new AppError("Artist profile not found", 404);
    }

    return profile;
  }
}

export default new ArtistService();