import {
  Clock3,
  CheckCircle,
  XCircle,
  MessageCircle,
  Search,
} from "lucide-react";

import AppHeader from "../components/layout/AppHeader";
import Footer from "../components/layout/Footer";

const inquiries = [
  {
    id: 1,
    artwork: "Sunset Over Silence",
    artist: "Priya Sharma",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600",
    status: "Pending",
    date: "24 Jun 2026",
  },
  {
    id: 2,
    artwork: "Lotus Serenity",
    artist: "Neha Kapoor",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600",
    status: "Artist Contacted",
    date: "20 Jun 2026",
  },
  {
    id: 3,
    artwork: "Nature Calm",
    artist: "Rohan Das",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
    status: "Approved",
    date: "18 Jun 2026",
  },
];

export default function InquiriesPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F4]">

      <AppHeader />

      <main className="max-w-6xl mx-auto px-6 py-10">

        {/* Header */}

        <div className="flex items-center justify-between mb-8">

          <div>
            <h1 className="font-serif text-4xl text-[#1B1B1B]">
              My Inquiries
            </h1>

            <p className="text-gray-500 mt-2 text-sm">
              Track all artwork inquiries and artist responses.
            </p>
          </div>

        </div>

        {/* Search */}

        <div className="relative mb-8">

          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            placeholder="Search artwork..."
            className="w-full rounded-2xl border border-[#ECE6DB] bg-white pl-12 py-4 outline-none"
          />

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-5 mb-10">

          <StatCard
            title="Total"
            value="12"
          />

          <StatCard
            title="Pending"
            value="4"
          />

          <StatCard
            title="Approved"
            value="6"
          />

          <StatCard
            title="Artist Contacted"
            value="2"
          />

        </div>

        {/* Inquiry Cards */}

        <div className="space-y-5">

          {inquiries.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-[#ECE6DB] p-5 shadow-sm"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-5">

                <img
                  src={item.image}
                  alt=""
                  className="h-32 w-32 rounded-2xl object-cover"
                />

                <div className="flex-1">

                  <h3 className="text-2xl font-semibold text-[#1B1B1B]">
                    {item.artwork}
                  </h3>

                  <p className="text-gray-500 mt-1">
                    by {item.artist}
                  </p>

                  <p className="text-sm text-gray-400 mt-2">
                    Submitted on {item.date}
                  </p>

                </div>

                <div className="flex flex-col items-start lg:items-end gap-3">

                  <StatusBadge status={item.status} />

                  {item.status === "Artist Contacted" && (
                    <button className="rounded-xl bg-[#D6A354] px-5 py-3 text-white font-medium">
                      Open Chat
                    </button>
                  )}

                </div>

              </div>
            </div>
          ))}

        </div>

      </main>

      <Footer />

    </div>
  );
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="bg-white rounded-3xl border border-[#ECE6DB] p-5">
      <p className="text-gray-500">
        {title}
      </p>

      <h3 className="text-3xl font-bold mt-2">
        {value}
      </h3>
    </div>
  );
}

function StatusBadge({
  status,
}: {
  status: string;
}) {
  if (status === "Pending") {
    return (
      <div className="flex items-center gap-2 text-yellow-600 bg-yellow-50 px-4 py-2 rounded-full">
        <Clock3 size={16} />
        Pending Review
      </div>
    );
  }

  if (status === "Approved") {
    return (
      <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-full">
        <CheckCircle size={16} />
        Approved
      </div>
    );
  }

  if (status === "Artist Contacted") {
    return (
      <div className="flex items-center gap-2 text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
        <MessageCircle size={16} />
        Artist Contacted
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-2 rounded-full">
      <XCircle size={16} />
      Rejected
    </div>
  );
}