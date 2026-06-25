import prisma from "../config/prisma";
import AppError from "../errors/AppError";

class AdminService {
  // ===========================
  // Pending Artist Applications
  // ===========================

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

  // ===========================
  // Approve Artist
  // ===========================

  async approveArtist(profileId: string) {
    const profile = await prisma.artistProfile.findUnique({
      where: {
        id: profileId,
      },
    });

    if (!profile) {
      throw new AppError("Artist profile not found", 404);
    }

    if (profile.status === "APPROVED") {
      throw new AppError("Artist already approved", 400);
    }

    return prisma.$transaction(async (tx) => {
      const updatedProfile = await tx.artistProfile.update({
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

      return updatedProfile;
    });
  }

  // ===========================
  // Reject Artist
  // ===========================

  async rejectArtist(profileId: string, reason: string) {
    const profile = await prisma.artistProfile.findUnique({
      where: {
        id: profileId,
      },
    });

    if (!profile) {
      throw new AppError("Artist profile not found", 404);
    }

    if (profile.status === "REJECTED") {
      throw new AppError("Artist already rejected", 400);
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

  // ===========================
  // Dashboard Analytics
  // ===========================

  async getDashboardAnalytics() {
    const [
      totalUsers,
      totalArtists,
      totalAdmins,

      totalArtworks,
      approvedArtworks,
      pendingArtworks,
      soldArtworks,

      totalInquiries,
      newInquiries,
      contactedInquiries,
      confirmedInquiries,
      completedInquiries,
      cancelledInquiries,
    ] = await Promise.all([
      prisma.user.count({
        where: {
          role: "USER",
        },
      }),

      prisma.user.count({
        where: {
          role: "ARTIST",
        },
      }),

      prisma.user.count({
        where: {
          role: "ADMIN",
        },
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

      prisma.artwork.count({
        where: {
          isAvailable: false,
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
          status: "CONFIRMED",
        },
      }),

      prisma.inquiry.count({
        where: {
          status: "COMPLETED",
        },
      }),

      prisma.inquiry.count({
        where: {
          status: "CANCELLED",
        },
      }),
    ]);

    return {
      users: {
        totalUsers,
        totalArtists,
        totalAdmins,
      },

      artworks: {
        totalArtworks,
        approvedArtworks,
        pendingArtworks,
        soldArtworks,
      },

      inquiries: {
        totalInquiries,
        newInquiries,
        contactedInquiries,
        confirmedInquiries,
        completedInquiries,
        cancelledInquiries,
      },
    };
  }
}

export default new AdminService();