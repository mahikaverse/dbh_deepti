import prisma from "../config/prisma";

class NotificationService {
  async getNotifications(userId: string) {
    return prisma.notification.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async markAsRead(
    notificationId: string,
    userId: string
  ) {
    return prisma.notification.update({
      where: {
        id: notificationId,
      },
      data: {
        isRead: true,
      },
    });
  }

  async markAllAsRead(userId: string) {
    await prisma.notification.updateMany({
      where: {
        userId,
        isRead: false,
      },
      data: {
        isRead: true,
      },
    });

    return {
      success: true,
    };
  }

  async createNotification(
    userId: string,
    title: string,
    message: string,
    type:
      | "INFO"
      | "SUCCESS"
      | "WARNING"
      | "ERROR" = "INFO"
  ) {
    return prisma.notification.create({
      data: {
        userId,
        title,
        message,
        type,
      },
    });
  }

  async sendNotification({
    title,
    message,
    target,
    userId,
  }: {
    title: string;
    message: string;
    target: string;
    userId?: string;
  }) {

    // ALL USERS

    if (target === "ALL_USERS") {
      const users =
        await prisma.user.findMany({
          where: {
            role: "USER",
          },
          select: {
            id: true,
          },
        });

      await prisma.notification.createMany({
        data: users.map((user) => ({
          userId: user.id,
          title,
          message,
          type: "INFO",
        })),
      });

      return;
    }

    // ALL ARTISTS

    if (target === "ALL_ARTISTS") {
      const artists =
        await prisma.user.findMany({
          where: {
            role: "ARTIST",
          },
          select: {
            id: true,
          },
        });

      await prisma.notification.createMany({
        data: artists.map((artist) => ({
          userId: artist.id,
          title,
          message,
          type: "INFO",
        })),
      });

      return;
    }

    // SPECIFIC USER

    if (
      target === "SPECIFIC_USER" &&
      userId
    ) {
      await prisma.notification.create({
        data: {
          userId,
          title,
          message,
          type: "INFO",
        },
      });

      return;
    }

    throw new Error(
      "Invalid notification target"
    );
  }
}

export default new NotificationService();