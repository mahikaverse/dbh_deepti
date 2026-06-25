import prisma from "../config/prisma";
import { CreateArtworkInput } from "../validators/artwork.validator";
import AppError from "../errors/AppError";
import { Prisma } from "@prisma/client";


class ArtworkService {
  async createArtwork(data: CreateArtworkInput, artistId: string) {
  const artwork = await prisma.artwork.create({
    data: {
      title: data.title,
      description: data.description,
      imageUrl: data.imageUrl,
      category: data.category,
      medium: data.medium,
      width: data.width,
      height: data.height,
      price: new Prisma.Decimal(data.price),
      frameAvailable: data.frameAvailable,
      artistId: artistId,
    },
  });

  return artwork;
}
  async getAllArtworks() {
    return prisma.artwork.findMany({
      include: {
        artist: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async getArtworkById(id: string) {
    const artwork = await prisma.artwork.findUnique({
      where: { id },
      include: {
        artist: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    if (!artwork) {
      throw new AppError("Artwork not found", 404);
    }

    return artwork;
  }
}

export default new ArtworkService();