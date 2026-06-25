import prisma from "../config/prisma";
import AppError from "../errors/AppError";

class AdminService {
  async getPendingArtists() {
    return prisma.artistProfile.findMany({
      where: {
        status: "PENDING",
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
          },
        },
      },
      orderBy: {
        createdAt: "asc",
      },
    });
  }

  async approveArtist(profileId: string) {
    const profile = await prisma.artistProfile.findUnique({
      where: {
        id: profileId,
      },
    });

    if (!profile) {
      throw new AppError("Artist profile not found", 404);
    }

    return prisma.$transaction(async (tx) => {
      await tx.artistProfile.update({
        where: {
          id: profileId,
        },
        data: {
          status: "APPROVED",
          rejectionReason: null,
        },
      });

      await tx.user.update({
        where: {
          id: profile.userId,
        },
        data: {
          role: "ARTIST",
        },
      });

      return {
        success: true,
      };
    });
  }

  async rejectArtist(profileId: string, reason: string) {
    const profile = await prisma.artistProfile.findUnique({
      where: {
        id: profileId,
      },
    });

    if (!profile) {
      throw new AppError("Artist profile not found", 404);
    }

    return prisma.artistProfile.update({
      where: {
        id: profileId,
      },
      data: {
        status: "REJECTED",
        rejectionReason: reason,
      },
    });
  }
  async getDashboardAnalytics() {
  const [
    totalUsers,
    totalArtists,
    totalArtworks,
    approvedArtworks,
    pendingArtworks,
    totalInquiries,
    newInquiries,
    contactedInquiries,
    completedInquiries,
  ] = await Promise.all([
    prisma.user.count({
      where: { role: "USER" },
    }),

    prisma.user.count({
      where: { role: "ARTIST" },
    }),

    prisma.artwork.count(),

    prisma.artwork.count({
      where: {
        isApproved: true,
      },
    }),

    prisma.artwork.count({
      where: {
        isApproved: false,
      },
    }),

    prisma.inquiry.count(),

    prisma.inquiry.count({
      where: {
        status: "NEW",
      },
    }),

    prisma.inquiry.count({
      where: {
        status: "CONTACTED",
      },
    }),

    prisma.inquiry.count({
      where: {
        status: "COMPLETED",
      },
    }),
  ]);

  return {
    totalUsers,
    totalArtists,
    totalArtworks,
    approvedArtworks,
    pendingArtworks,
    totalInquiries,
    newInquiries,
    contactedInquiries,
    completedInquiries,
  };
}
}

export default new AdminService();