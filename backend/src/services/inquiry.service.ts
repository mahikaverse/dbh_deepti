import prisma from "../config/prisma";
import AppError from "../errors/AppError";

class InquiryService {
  async create(userId: string, data: any) {
    const artwork = await prisma.artwork.findUnique({
      where: {
        id: data.artworkId,
      },
    });

    if (!artwork) {
      throw new AppError("Artwork not found", 404);
    }

    if (!artwork.isApproved) {
      throw new AppError(
        "Artwork is not approved yet.",
        400
      );
    }

    if (!artwork.isAvailable) {
      throw new AppError(
        "Artwork already sold.",
        400
      );
    }

    const inquiry = await prisma.inquiry.create({
      data: {
        userId,

        artworkId: data.artworkId,

        preferredFrame:
          data.preferredFrame,

        preferredSize:
          data.preferredSize,

        message: data.message,
      },

      include: {
        artwork: true,
      },
    });

    return inquiry;
  }
  async getMyInquiries(userId: string) {
  return prisma.inquiry.findMany({
    where: {
      userId,
    },

    include: {
      artwork: {
        include: {
          artist: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },

      messages: {
        orderBy: {
          createdAt: "asc",
        },
      },
    },

    orderBy: {
      createdAt: "desc",
    },
  });
}
async getAllInquiries() {
  return prisma.inquiry.findMany({
    include: {
      artwork: true,
      user: true,
      messages: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

async updateInquiryStatus(
  inquiryId: string,
  status: any
) {
  return prisma.inquiry.update({
    where: {
      id: inquiryId,
    },
    data: {
      status,
    },
  });
}
}

export default new InquiryService();