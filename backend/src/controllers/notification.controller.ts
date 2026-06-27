import { Request, Response } from "express";
import notificationService from "../services/notification.service";

class NotificationController {
  async getNotifications(
    req: Request,
    res: Response
  ) {
    const notifications =
      await notificationService.getNotifications(
        (req as any).user.id
      );

    return res.json({
      success: true,
      data: notifications,
    });
  }

  async markAsRead(
    req: Request,
    res: Response
  ) {
    const notification =
      await notificationService.markAsRead(
        req.params.id as string,
        (req as any).user.id
      );

    return res.json({
      success: true,
      data: notification,
    });
  }

  async markAllAsRead(
    req: Request,
    res: Response
  ) {
    const result =
      await notificationService.markAllAsRead(
        (req as any).user.id
      );

    return res.json({
      success: true,
      data: result,
    });
  }


async sendNotification(
  req: Request,
  res: Response
) {
  const {
    title,
    message,
    target,
    userId,
  } = req.body;

  const data =
    await notificationService.sendNotification({
      title,
      message,
      target,
      userId,
    });

  res.json({
    success: true,
    message:
      "Notification sent successfully",
    data,
  });
}

}

export default new NotificationController();