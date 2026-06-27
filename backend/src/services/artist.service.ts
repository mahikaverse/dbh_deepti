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
 // ===========================
// Get Approved Artists
// ===========================

async getApprovedArtists() {
  return prisma.user.findMany({
    where: {
  role: "ARTIST",

  artistProfile: {
    is: {
      status: "APPROVED",
    },
  },
},

    include: {
      artistProfile: true,

      artworks: {
        where: {
          isApproved: true,
          isAvailable: true,
        },

        select: {
          id: true,
        },
      },
    },

    orderBy: {
      createdAt: "desc",
    },
  });
}
// ===========================
// Get Artist By ID
// ===========================

async getArtistById(id: string) {
  const artist = await prisma.user.findFirst({
    where: {
      id,
      role: "ARTIST",
      artistProfile: {
        status: "APPROVED",
      },
    },

    include: {
      artistProfile: true,

      artworks: {
        where: {
          isApproved: true,
          isAvailable: true,
        },

        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  if (!artist) {
    throw new AppError("Artist not found", 404);
  }

  return artist;
}
// ===========================
// Artist Analytics
// ===========================

async getAnalytics(userId: string) {

  const totalArtworks = await prisma.artwork.count({
    where: {
      artistId: userId,
    },
  });

  const approvedArtworks = await prisma.artwork.count({
    where: {
      artistId: userId,
      isApproved: true,
    },
  });

  const pendingArtworks = await prisma.artwork.count({
    where: {
      artistId: userId,
      isApproved: false,
    },
  });

  const totalInquiries = await prisma.inquiry.count({
    where: {
      artwork: {
        artistId: userId,
      },
    },
  });

  const categoryStats = await prisma.artwork.groupBy({
    by: ["category"],

    where: {
      artistId: userId,
      isApproved: true,
    },

    _count: {
      category: true,
    },
  });

  const approvalRate =
    totalArtworks === 0
      ? 0
      : Math.round(
          (approvedArtworks / totalArtworks) * 100
        );

  return {
    stats: {
      totalArtworks,
      approvedArtworks,
      pendingArtworks,
      totalInquiries,
      approvalRate,
    },

    categoryStats,
  };
}
}

export default new ArtistService();