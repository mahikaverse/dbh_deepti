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
  async getExploreArtworks(userId?: string) {
  return prisma.artwork.findMany({
    where: {
      isApproved: true,
      isAvailable: true,
    },

    select: {
      id: true,
      title: true,
      description: true,
      imageUrl: true,
      category: true,
      medium: true,
      width: true,
      height: true,
      price: true,
      frameAvailable: true,
      createdAt: true,

      likes: userId
        ? {
            where: {
              userId,
            },
            select: {
              id: true,
            },
          }
        : false,

      wishlists: userId
        ? {
            where: {
              userId,
            },
            select: {
              id: true,
            },
          }
        : false,

      _count: {
        select: {
          likes: true,
          wishlists: true,
        },
      },

      artist: {
        select: {
          id: true,
          name: true,
        },
      },
    },

    orderBy: {
      createdAt: "desc",
    },
  });
}

  async toggleLike(
  artworkId: string,
  userId: string
) {
  const existing = await prisma.like.findUnique({
    where: {
      userId_artworkId: {
        userId,
        artworkId,
      },
    },
  });

  if (existing) {
    await prisma.like.delete({
      where: {
        id: existing.id,
      },
    });

    const count = await prisma.like.count({
      where: {
        artworkId,
      },
    });

    return {
      liked: false,
      likesCount: count,
    };
  }

  await prisma.like.create({
    data: {
      userId,
      artworkId,
    },
  });

  const count = await prisma.like.count({
    where: {
      artworkId,
    },
  });

  return {
    liked: true,
    likesCount: count,
  };
}

async toggleWishlist(
  artworkId: string,
  userId: string
) {
  const existing =
    await prisma.wishlist.findUnique({
      where: {
        userId_artworkId: {
          userId,
          artworkId,
        },
      },
    });

  if (existing) {
    await prisma.wishlist.delete({
      where: {
        id: existing.id,
      },
    });

    return {
      saved: false,
    };
  }

  await prisma.wishlist.create({
    data: {
      userId,
      artworkId,
    },
  });

  return {
    saved: true,
  };
}

async getWishlist(userId: string) {
  return prisma.wishlist.findMany({
    where: {
      userId,
    },

    include: {
      artwork: {
        include: {
          artist: {
            select: {
              name: true,
            },
          },

          likes: {
            where: {
              userId,
            },
            select: {
              id: true,
            },
          },

          wishlists: {
            where: {
              userId,
            },
            select: {
              id: true,
            },
          },

          _count: {
            select: {
              likes: true,
              wishlists: true,
            },
          },
        },
      },
    },

    orderBy: {
      createdAt: "desc",
    },
  });
}



 
}

export default new ArtworkService();