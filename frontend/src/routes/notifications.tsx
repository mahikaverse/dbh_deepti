import {
  Bell,
  CheckCircle,
  MessageCircle,
  Palette,
  AlertCircle,
} from "lucide-react";

import AppHeader from "../components/layout/AppHeader";
import Footer from "../components/layout/Footer";

const notifications = [
  {
    id: 1,
    type: "Inquiry Approved",
    message:
      'Your inquiry for "Sunset Over Silence" has been approved.',
    time: "2 hours ago",
    icon: CheckCircle,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    id: 2,
    type: "Artist Message",
    message:
      "Priya Sharma has responded to your inquiry.",
    time: "5 hours ago",
    icon: MessageCircle,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    id: 3,
    type: "New Artwork",
    message:
      "A new artwork has been added to Nature Collection.",
    time: "Yesterday",
    icon: Palette,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    id: 4,
    type: "System Update",
    message:
      "Your profile information was updated successfully.",
    time: "2 days ago",
    icon: Bell,
    color: "text-[#D6A354]",
    bg: "bg-[#FFF8EB]",
  },
  {
    id: 5,
    type: "Reminder",
    message:
      "You have pending inquiries awaiting response.",
    time: "3 days ago",
    icon: AlertCircle,
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
];

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F4]">

      <AppHeader />

      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* Header */}

        <div className="flex items-center gap-4 mb-8">

          <div className="h-14 w-14 rounded-2xl bg-[#D6A354] flex items-center justify-center">

            <Bell
              size={24}
              className="text-white"
            />

          </div>

          <div>

            <h1 className="text-4xl font-serif text-[#1B1B1B]">
              Notifications
            </h1>

            <p className="mt-2 text-gray-500">
              Stay updated with your artwork activities.
            </p>

          </div>

        </div>

        {/* Summary Cards */}

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <SummaryCard
            title="Total"
            value="12"
          />

          <SummaryCard
            title="Unread"
            value="4"
          />

          <SummaryCard
            title="Today"
            value="3"
          />

        </div>

        {/* Notifications List */}

        <div className="space-y-5">

          {notifications.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="bg-white rounded-[28px] border border-[#ECE6DB] p-6 shadow-sm hover:shadow-md transition"
              >

                <div className="flex items-start gap-5">

                  <div
                    className={`h-14 w-14 rounded-2xl flex items-center justify-center ${item.bg}`}
                  >
                    <Icon
                      size={24}
                      className={item.color}
                    />
                  </div>

                  <div className="flex-1">

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">

                      <h3 className="font-semibold text-lg text-[#1B1B1B]">
                        {item.type}
                      </h3>

                      <span className="text-sm text-gray-500">
                        {item.time}
                      </span>

                    </div>

                    <p className="mt-2 text-gray-600 leading-7">
                      {item.message}
                    </p>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

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