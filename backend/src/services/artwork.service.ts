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
        artistId,
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

  async updateArtwork(
    id: string,
    artistId: string,
    data: Partial<CreateArtworkInput>
  ) {
    const artwork = await prisma.artwork.findUnique({
      where: { id },
    });

    if (!artwork) {
      throw new AppError("Artwork not found", 404);
    }

    if (artwork.artistId !== artistId) {
      throw new AppError("Unauthorized", 403);
    }

    return prisma.artwork.update({
      where: { id },
      data,
    });
  }

  async deleteArtwork(id: string, artistId: string) {
    const artwork = await prisma.artwork.findUnique({
      where: { id },
    });

    if (!artwork) {
      throw new AppError("Artwork not found", 404);
    }

    if (artwork.artistId !== artistId) {
      throw new AppError("Unauthorized", 403);
    }

    await prisma.artwork.delete({
      where: { id },
    });

    return {
      message: "Artwork deleted successfully",
    };
  }
}

export default new ArtworkService();