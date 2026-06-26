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

  const recentArtists = await prisma.artistProfile.findMany({
    take: 5,
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });

  const recentInquiries = await prisma.inquiry.findMany({
    take: 5,
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
        },
      },
      artwork: {
        select: {
          id: true,
          title: true,
        },
      },
    },
  });

  const recentArtworks = await prisma.artwork.findMany({
    take: 5,
    orderBy: {
      createdAt: "desc",
    },
    include: {
      artist: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

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

    recentArtists,
    recentInquiries,
    recentArtworks,
  };
}
// ===========================
// All Artworks
// ===========================

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
// ===========================
// Approve Artwork
// ===========================

async approveArtwork(id: string) {
  const artwork = await prisma.artwork.findUnique({
    where: {
      id,
    },
  });

  if (!artwork) {
    throw new AppError("Artwork not found", 404);
  }

  return prisma.artwork.update({
    where: {
      id,
    },
    data: {
      isApproved: true,
    },
  });
}
// ===========================
// Reject Artwork
// ===========================

async rejectArtwork(id: string) {
  const artwork = await prisma.artwork.findUnique({
    where: {
      id,
    },
  });

  if (!artwork) {
    throw new AppError("Artwork not found", 404);
  }

  return prisma.artwork.update({
    where: {
      id,
    },
    data: {
      isApproved: false,
    },
  });
}
// ===========================
// Get All Users
// ===========================

async getAllUsers() {
  return prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    },

    orderBy: {
      createdAt: "desc",
    },
  });
}

// ===========================
// Update User Role
// ===========================

async updateUserRole(
  id: string,
  role: "USER" | "ARTIST" | "ADMIN"
) {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return prisma.user.update({
    where: {
      id,
    },
    data: {
      role,
    },
  });
}

// ===========================
// Delete User
// ===========================

// ===========================
// Delete User
// ===========================

async deleteUser(id: string) {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  await prisma.$transaction(async (tx) => {

    // Delete inquiries created by user
    await tx.inquiry.deleteMany({
      where: {
        userId: id,
      },
    });

    // Get artworks of user
    const artworks = await tx.artwork.findMany({
      where: {
        artistId: id,
      },
      select: {
        id: true,
      },
    });

    const artworkIds = artworks.map((a) => a.id);

    // Delete inquiries of those artworks
    if (artworkIds.length > 0) {
      await tx.inquiry.deleteMany({
        where: {
          artworkId: {
            in: artworkIds,
          },
        },
      });
    }

    // Delete artworks
    await tx.artwork.deleteMany({
      where: {
        artistId: id,
      },
    });

    // Delete artist profile
    await tx.artistProfile.deleteMany({
      where: {
        userId: id,
      },
    });

    // Finally delete user
    await tx.user.delete({
      where: {
        id,
      },
    });

  });

  return {
    message: "User deleted successfully",
  };
}}

export default new AdminService();