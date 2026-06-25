import {
  Brush,
  Wallet,
  Eye,
  Heart,
  MessageCircle,
  TrendingUp,
  Upload,
  Plus,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import ArtistLayout from "../layout/ArtistLayout";

const stats = [
  {
    title: "Total Artworks",
    value: "24",
    icon: <Brush size={28} />,
    color: "bg-blue-100",
  },
  {
    title: "Total Views",
    value: "18.5K",
    icon: <Eye size={28} />,
    color: "bg-green-100",
  },
  {
    title: "Wishlist Saves",
    value: "2,418",
    icon: <Heart size={28} />,
    color: "bg-red-100",
  },
  {
    title: "Revenue",
    value: "₹2.48L",
    icon: <Wallet size={28} />,
    color: "bg-yellow-100",
  },
];

const recentActivity = [
  {
    title: "Golden Horizon received a new inquiry",
    time: "2 hours ago",
  },
  {
    title: "Urban Dreams was added to wishlist",
    time: "5 hours ago",
  },
  {
    title: "Abstract Vision approved by admin",
    time: "Yesterday",
  },
  {
    title: "Payment of ₹24,000 received",
    time: "2 days ago",
  },
];

export default function ArtistDashboard() {
  return (
    <ArtistLayout>
      <main className="min-w-0">

        {/* Header */}

        <div className="flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-serif font-bold">
              Welcome back, Priya 👋
            </h1>

            <p className="mt-2 text-gray-500">
              Here's what's happening with your artworks today.
            </p>

          </div>

          <Link
            to="/artist/upload-artwork"
            className="flex items-center gap-2 rounded-xl bg-[#D6A354] px-6 py-4 text-white hover:bg-[#C69649]"
          >
            <Upload size={20} />

            Upload Artwork

          </Link>

        </div>

        {/* Stats */}

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item) => (

            <div
              key={item.title}
              className="rounded-[30px] border border-[#ECE6DB] bg-white p-6 shadow-sm"
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-gray-500">
                    {item.title}
                  </p>

                  <h2 className="mt-3 text-4xl font-bold">
                    {item.value}
                  </h2>

                </div>

                <div
                  className={`rounded-2xl p-4 ${item.color}`}
                >
                  {item.icon}
                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Quick Actions */}

        <div className="mt-10 grid gap-6 lg:grid-cols-3">

          <Link
            to="/artist/upload-artwork"
            className="rounded-[30px] bg-[#D6A354] p-8 text-white transition hover:scale-[1.02]"
          >

            <Plus size={34} />

            <h2 className="mt-5 text-2xl font-semibold">
              Upload New Artwork
            </h2>

            <p className="mt-3 text-white/80">
              Add a new artwork to your portfolio.
            </p>

          </Link>

          <Link
            to="/artist/my-artworks"
            className="rounded-[30px] border border-[#ECE6DB] bg-white p-8 transition hover:shadow-lg"
          >

            <Brush
              size={34}
              className="text-[#D6A354]"
            />

            <h2 className="mt-5 text-2xl font-semibold">
              Manage Artworks
            </h2>

            <p className="mt-3 text-gray-500">
              Edit, publish or delete artworks.
            </p>

          </Link>

          <Link
            to="/artist/inquiries"
            className="rounded-[30px] border border-[#ECE6DB] bg-white p-8 transition hover:shadow-lg"
          >

            <MessageCircle
              size={34}
              className="text-[#D6A354]"
            />

            <h2 className="mt-5 text-2xl font-semibold">
              Buyer Inquiries
            </h2>

            <p className="mt-3 text-gray-500">
              Respond to interested buyers.
            </p>

          </Link>

        </div>

                {/* Revenue + Performance */}

        <div className="mt-10 grid gap-6 xl:grid-cols-[2fr_1fr]">

          {/* Revenue Chart */}

          <div className="rounded-[30px] border border-[#ECE6DB] bg-white p-8 shadow-sm">

            <div className="flex items-center justify-between">

              <div>

                <h2 className="text-2xl font-semibold">
                  Revenue Overview
                </h2>

                <p className="mt-1 text-gray-500">
                  Last 6 Months
                </p>

              </div>

              <button className="rounded-xl border border-[#ECE6DB] px-4 py-2 text-sm">
                View Report
              </button>

            </div>

            <div className="mt-8 flex h-[320px] items-center justify-center rounded-3xl bg-[#FAF8F4]">

              <div className="text-center">

                <TrendingUp
                  size={60}
                  className="mx-auto text-[#D6A354]"
                />

                <h3 className="mt-5 text-xl font-semibold">
                  Revenue Graph
                </h3>

                <p className="mt-2 text-gray-500">
                  Replace this with Recharts LineChart
                </p>

              </div>

            </div>

          </div>

          {/* Top Artwork */}

          <div className="rounded-[30px] border border-[#ECE6DB] bg-white p-8 shadow-sm">

            <h2 className="text-2xl font-semibold">
              Top Artwork
            </h2>

            <img
              src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=900"
              className="mt-6 h-64 w-full rounded-3xl object-cover"
            />

            <h3 className="mt-5 text-2xl font-semibold">
              Golden Horizon
            </h3>

            <p className="mt-2 text-gray-500">
              Landscape Painting
            </p>

            <div className="mt-6 space-y-4">

              <div className="flex justify-between">

                <span>Views</span>

                <span className="font-semibold">
                  8,250
                </span>

              </div>

              <div className="flex justify-between">

                <span>Saves</span>

                <span className="font-semibold">
                  624
                </span>

              </div>

              <div className="flex justify-between">

                <span>Inquiries</span>

                <span className="font-semibold">
                  48
                </span>

              </div>

              <div className="flex justify-between">

                <span>Revenue</span>

                <span className="font-semibold text-[#D6A354]">
                  ₹1.08L
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Recent Activity */}

        <div className="mt-10 rounded-[30px] border border-[#ECE6DB] bg-white p-8 shadow-sm">

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-semibold">
              Recent Activity
            </h2>

            <button className="flex items-center gap-2 text-[#D6A354]">

              View All

              <ArrowRight size={18} />

            </button>

          </div>

          <div className="mt-8 space-y-6">

            {recentActivity.map((activity, index) => (

              <div
                key={index}
                className="flex items-center gap-5"
              >

                <div className="h-4 w-4 rounded-full bg-[#D6A354]" />

                <div className="flex-1">

                  <h3 className="font-semibold">

                    {activity.title}

                  </h3>

                  <p className="text-sm text-gray-500">

                    {activity.time}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Latest Uploads */}

        <div className="mt-10">

          <div className="mb-6 flex items-center justify-between">

            <h2 className="text-2xl font-semibold">
              Latest Uploaded Artworks
            </h2>

            <Link
              to="/artist/my-artworks"
              className="text-[#D6A354]"
            >
              View All
            </Link>

          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {[1, 2, 3, 4].map((item) => (

              <div
                key={item}
                className="overflow-hidden rounded-[28px] border border-[#ECE6DB] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                <img
                  src={`https://picsum.photos/400/400?random=${item}`}
                  className="h-56 w-full object-cover"
                />

                <div className="p-5">

                  <h3 className="font-semibold">
                    Artwork {item}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Acrylic on Canvas
                  </p>

                  <div className="mt-4 flex justify-between">

                    <span className="font-bold">
                      ₹24,000
                    </span>

                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
                      Published
                    </span>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

                {/* Bottom Grid */}

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Notifications */}

          <div className="rounded-[30px] border border-[#ECE6DB] bg-white p-8 shadow-sm">

            <div className="flex items-center justify-between">

              <h2 className="text-2xl font-semibold">
                Notifications
              </h2>

              <button className="text-[#D6A354]">
                View All
              </button>

            </div>

            <div className="mt-8 space-y-5">

              <NotificationCard
                title="Your artwork 'Golden Horizon' received a new inquiry."
                time="10 mins ago"
                color="bg-green-500"
              />

              <NotificationCard
                title="Admin approved 'Abstract Vision'."
                time="2 hours ago"
                color="bg-blue-500"
              />

              <NotificationCard
                title="₹24,000 payment credited."
                time="Yesterday"
                color="bg-yellow-500"
              />

              <NotificationCard
                title="You gained 15 new followers."
                time="2 days ago"
                color="bg-pink-500"
              />

            </div>

          </div>

          {/* Upcoming */}

          <div className="space-y-6">

            <div className="rounded-[30px] border border-[#ECE6DB] bg-white p-8 shadow-sm">

              <h2 className="text-2xl font-semibold">
                Upcoming Tasks
              </h2>

              <div className="mt-8 space-y-5">

                <TaskCard
                  title="Upload New Artwork"
                />

                <TaskCard
                  title="Reply to 3 Buyer Inquiries"
                />

                <TaskCard
                  title="Update Artist Profile"
                />

                <TaskCard
                  title="Verify Bank Details"
                />

              </div>

            </div>

            {/* Tips */}

            <div className="rounded-[30px] bg-[#D6A354] p-8 text-white shadow-sm">

              <h2 className="text-2xl font-semibold">

                Creator Tip 💡

              </h2>

              <p className="mt-5 leading-8 text-white/90">

                Artists who upload at least
                <strong> 3 artworks every week </strong>
                receive nearly
                <strong> 40% more inquiries </strong>
                compared to inactive artists.

              </p>

              <button className="mt-8 rounded-xl bg-white px-5 py-3 font-semibold text-[#D6A354]">

                Upload Artwork

              </button>

            </div>

          </div>

        </div>

      </main>
    </ArtistLayout>
  );
}

/* ---------------- COMPONENTS ---------------- */

function NotificationCard({
  title,
  time,
  color,
}: {
  title: string;
  time: string;
  color: string;
}) {
  return (
    <div className="flex gap-4">

      <div
        className={`mt-2 h-3 w-3 rounded-full ${color}`}
      />

      <div>

        <h3 className="font-medium">
          {title}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          {time}
        </p>

      </div>

    </div>
  );
}

function TaskCard({
  title,
}: {
  title: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-[#FAF8F4] p-5">

      <span className="font-medium">
        {title}
      </span>

      <button className="rounded-lg bg-[#D6A354] px-4 py-2 text-sm text-white hover:bg-[#C69649]">

        Start

      </button>

    </div>
  );
}