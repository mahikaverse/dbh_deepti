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

  async getMyArtworks(userId: string) {
    return prisma.artwork.findMany({
      where: {
        artistId: userId,
      },

      include: {
        _count: {
          select: {
            inquiries: true,
          },
        },
      },

      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async getStatus(userId: string) {
    const profile = await prisma.artistProfile.findUnique({
      where: {
        userId,
      },
      select: {
        status: true,
      },
    });

    if (!profile) {
      return {
        hasProfile: false,
        status: null,
      };
    }

    return {
      hasProfile: true,
      status: profile.status,
    };
  }

  async getArtistStatus(userId: string) {
    const profile = await prisma.artistProfile.findUnique({
      where: {
        userId,
      },
      select: {
        status: true,
        rejectionReason: true,
      },
    });

    if (!profile) {
      return {
        hasProfile: false,
        status: null,
        rejectionReason: null,
      };
    }

    return {
      hasProfile: true,
      status: profile.status,
      rejectionReason: profile.rejectionReason,
    };
  }

  async getDashboard(userId: string) {
    const [
      artist,
      totalArtworks,
      approvedArtworks,
      pendingArtworks,
      totalInquiries,
      recentArtworks,
    ] = await Promise.all([
      prisma.user.findUnique({
        where: {
          id: userId,
        },
        select: {
          id: true,
          name: true,
          email: true,
        },
      }),

      prisma.artwork.count({
        where: {
          artistId: userId,
        },
      }),

      prisma.artwork.count({
        where: {
          artistId: userId,
          isApproved: true,
        },
      }),

      prisma.artwork.count({
        where: {
          artistId: userId,
          isApproved: false,
        },
      }),

      prisma.inquiry.count({
        where: {
          artwork: {
            artistId: userId,
          },
        },
      }),

      prisma.artwork.findMany({
        where: {
          artistId: userId,
        },

        orderBy: {
          createdAt: "desc",
        },

        take: 5,

        select: {
          id: true,
          title: true,
          imageUrl: true,
          isApproved: true,
          createdAt: true,
        },
      }),
    ]);

    return {
      artist,

      stats: {
        totalArtworks,
        approvedArtworks,
        pendingArtworks,
        totalInquiries,
      },

      recentArtworks,
    };
  }
}

export default new ArtistService();