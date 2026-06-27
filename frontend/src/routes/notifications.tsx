import {
  Bell,
  CheckCheck,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import {
  getNotifications,
  markAsRead,
  markAllAsRead,
} from "../api/notification.api";

import AppHeader from "../components/layout/AppHeader";
import Footer from "../components/layout/Footer";

export default function NotificationsPage() {
  const [notifications, setNotifications] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    try {
      const data =
        await getNotifications();

      setNotifications(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsRead = async (
    id: string
  ) => {
    try {
      await markAsRead(id);

      setNotifications((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                isRead: true,
              }
            : item
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleMarkAllAsRead =
    async () => {
      try {
        await markAllAsRead();

        setNotifications((prev) =>
          prev.map((item) => ({
            ...item,
            isRead: true,
          }))
        );
      } catch (err) {
        console.error(err);
      }
    };

  const unreadCount =
    notifications.filter(
      (n) => !n.isRead
    ).length;

  const todayCount =
    notifications.filter((n) => {
      const today =
        new Date().toDateString();

      return (
        new Date(
          n.createdAt
        ).toDateString() === today
      );
    }).length;

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading notifications...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F4]">
      <AppHeader />

      <main className="mx-auto max-w-4xl px-6 py-10">

        {/* Header */}

        <div className="mb-10 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D6A354]">

              <Bell
                size={24}
                className="text-white"
              />

            </div>

            <div>

              <h1 className="font-serif text-4xl text-[#1B1B1B]">
                Notifications
              </h1>

              <p className="mt-2 text-gray-500">
                Stay updated with your activity.
              </p>

            </div>

          </div>

          {notifications.length > 0 && (
            <button
              onClick={
                handleMarkAllAsRead
              }
              className="flex items-center gap-2 rounded-xl bg-[#D6A354] px-5 py-3 text-white hover:bg-[#C69649]"
            >
              <CheckCheck size={18} />
              Mark all as read
            </button>
          )}
        </div>

        {/* Summary */}

        <div className="mb-10 grid gap-6 md:grid-cols-3">

          <SummaryCard
            title="Total"
            value={String(
              notifications.length
            )}
          />

          <SummaryCard
            title="Unread"
            value={String(
              unreadCount
            )}
          />

          <SummaryCard
            title="Today"
            value={String(
              todayCount
            )}
          />

        </div>

        {/* Empty State */}

        {notifications.length ===
        0 ? (
          <div className="rounded-[32px] border border-[#ECE6DB] bg-white p-16 text-center">

            <Bell
              size={60}
              className="mx-auto text-gray-300"
            />

            <h2 className="mt-5 text-2xl font-semibold">
              No Notifications
            </h2>

            <p className="mt-2 text-gray-500">
              You're all caught up.
            </p>

          </div>
        ) : (
          <div className="space-y-5">

            {notifications.map(
              (item) => (
                <div
                  key={item.id}
                  onClick={() =>
                    !item.isRead &&
                    handleMarkAsRead(
                      item.id
                    )
                  }
                  className={`cursor-pointer rounded-[28px] border p-6 shadow-sm transition hover:shadow-md ${
                    item.isRead
                      ? "border-[#ECE6DB] bg-white"
                      : "border-[#D6A354] bg-[#FFF8EB]"
                  }`}
                >

                  <div className="flex items-start gap-5">

                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                        item.isRead
                          ? "bg-gray-100"
                          : "bg-[#FFE7B8]"
                      }`}
                    >
                      <Bell
                        size={24}
                        className={
                          item.isRead
                            ? "text-gray-400"
                            : "text-[#D6A354]"
                        }
                      />
                    </div>

                    <div className="flex-1">

                      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">

                        <h3 className="text-lg font-semibold text-[#1B1B1B]">
                          {item.title}
                        </h3>

                        <span className="text-sm text-gray-500">
                          {new Date(
                            item.createdAt
                          ).toLocaleString()}
                        </span>

                      </div>

                      <p className="mt-2 leading-7 text-gray-600">
                        {item.message}
                      </p>

                      {!item.isRead && (
                        <span className="mt-4 inline-flex rounded-full bg-[#D6A354] px-3 py-1 text-xs font-medium text-white">
                          New
                        </span>
                      )}

                    </div>

                  </div>

                </div>
              )
            )}

          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

function SummaryCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-6 shadow-sm">

      <p className="text-gray-500">
        {title}
      </p>

      <h3 className="mt-2 text-4xl font-bold text-[#1B1B1B]">
        {value}
      </h3>

    </div>
  );
}