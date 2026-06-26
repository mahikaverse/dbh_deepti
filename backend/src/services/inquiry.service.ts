import prisma from "../config/prisma";
import AppError from "../errors/AppError";
import { CreateInquiryInput } from "../validators/inquiry.validator";
import { InquiryStatus } from "@prisma/client";

class InquiryService {
  async createInquiry(
    userId: string,
    data: CreateInquiryInput
  ) {
    const artwork = await prisma.artwork.findUnique({
      where: {
        id: data.artworkId,
      },
    });

    if (!artwork) {
      throw new AppError("Artwork not found", 404);
    }

    return prisma.inquiry.create({
      data: {
        userId,
        artworkId: data.artworkId,
        preferredFrame: data.preferredFrame,
        preferredSize: data.preferredSize,
        message: data.message,
      },
    });
  }

  async getMyInquiries(userId: string) {
    return prisma.inquiry.findMany({
      where: {
        userId,
      },
      include: {
        artwork: {
          select: {
            id: true,
            title: true,
            imageUrl: true,
            price: true,
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
      user: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },

      artwork: {
        select: {
          id: true,
          title: true,
          imageUrl: true,

          artist: {
            select: {
              id: true,
              name: true,
              email: true,
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
async updateInquiryStatus(
  id: string,
  status: InquiryStatus
) {
  const inquiry = await prisma.inquiry.findUnique({
    where: { id },
  });

  if (!inquiry) {
    throw new AppError("Inquiry not found", 404);
  }

  return prisma.inquiry.update({
    where: { id },
    data: {
      status,
    },
  });
}
}

export default new InquiryService();