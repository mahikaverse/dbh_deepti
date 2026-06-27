import {
  Brush,
  CheckCircle,
  Clock,
  MessageCircle,
  TrendingUp,
  Upload,
  Plus,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArtistDashboard } from "../../api/artist.api";
import ArtistLayout from "../layout/ArtistLayout";


export default function ArtistDashboard() {

  const [dashboard, setDashboard] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const data = await getArtistDashboard();

      console.log(data);

      setDashboard(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <ArtistLayout>
        <div className="flex h-[80vh] items-center justify-center text-xl">
          Loading Dashboard...
        </div>
      </ArtistLayout>
    );
  }
  return (
  <ArtistLayout>
    <main className="min-w-0">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-serif font-bold">
            Welcome back, {dashboard.artist.name} 👋
          </h1>

          <p className="mt-2 text-gray-500">
            Manage your artworks and buyer inquiries from one place.
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

      {/* Baaki dashboard code yahi continue hoga */}

   
        {/* Stats */}

<div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

  <div className="rounded-3xl border border-[#ECE6DB] bg-white p-6">

    <div className="flex items-center justify-between">
      <Brush className="h-8 w-8 text-[#D6A354]" />
      <TrendingUp className="h-5 w-5 text-green-500" />
    </div>

    <h3 className="mt-6 text-4xl font-bold">
      {dashboard.stats.totalArtworks}
    </h3>

    <p className="mt-2 text-gray-500">
      Total Artworks
    </p>

  </div>

  <div className="rounded-3xl border border-[#ECE6DB] bg-white p-6">

    <div className="flex items-center justify-between">
      <CheckCircle className="h-8 w-8 text-green-600" />
      <TrendingUp className="h-5 w-5 text-green-500" />
    </div>

    <h3 className="mt-6 text-4xl font-bold">
      {dashboard.stats.approvedArtworks}
    </h3>

    <p className="mt-2 text-gray-500">
      Approved Artworks
    </p>

  </div>

  <div className="rounded-3xl border border-[#ECE6DB] bg-white p-6">

    <div className="flex items-center justify-between">
      <Clock className="h-8 w-8 text-orange-500" />
    </div>

    <h3 className="mt-6 text-4xl font-bold">
      {dashboard.stats.pendingArtworks}
    </h3>

    <p className="mt-2 text-gray-500">
      Pending Approval
    </p>

  </div>

  <div className="rounded-3xl border border-[#ECE6DB] bg-white p-6">

    <div className="flex items-center justify-between">
      <MessageCircle className="h-8 w-8 text-blue-600" />
    </div>

    <h3 className="mt-6 text-4xl font-bold">
      {dashboard.stats.totalInquiries}
    </h3>

    <p className="mt-2 text-gray-500">
      Buyer Inquiries
    </p>

  </div>

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

  </div>

  <div className="mt-8 space-y-5">

    {dashboard.recentArtworks.length > 0 ? (

      dashboard.recentArtworks.map((artwork: any) => (

        <div
          key={artwork.id}
          className="flex items-center gap-5 rounded-2xl border border-[#ECE6DB] p-4"
        >

          <img
            src={artwork.imageUrl}
            alt={artwork.title}
            className="h-16 w-16 rounded-xl object-cover"
          />

          <div className="flex-1">

            <h3 className="font-semibold">
              {artwork.title}
            </h3>

            <p className="text-sm text-gray-500">
              {new Date(
                artwork.createdAt
              ).toLocaleDateString()}
            </p>

          </div>

          {artwork.isApproved ? (

            <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
              Approved
            </span>

          ) : (

            <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-700">
              Pending
            </span>

          )}

        </div>

      ))

    ) : (

      <div className="rounded-2xl bg-[#FAF8F4] p-8 text-center">

        <h3 className="text-xl font-semibold">
          No Recent Activity
        </h3>

        <p className="mt-2 text-gray-500">
          Upload your first artwork to see activity here.
        </p>

      </div>

    )}

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

  {dashboard.recentArtworks.length > 0 ? (

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {dashboard.recentArtworks.map((artwork: any) => (

        <div
          key={artwork.id}
          className="overflow-hidden rounded-3xl border border-[#ECE6DB] bg-white"
        >

          <img
            src={artwork.imageUrl}
            alt={artwork.title}
            className="h-60 w-full object-cover"
          />

          <div className="p-5">

            <h3 className="font-semibold">
              {artwork.title}
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              {new Date(artwork.createdAt).toLocaleDateString()}
            </p>

            <div className="mt-4">

              {artwork.isApproved ? (

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                  Approved
                </span>

              ) : (

                <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-700">
                  Pending
                </span>

              )}

            </div>

          </div>

        </div>

      ))}

    </div>

  ) : (

    <div className="rounded-3xl border border-[#ECE6DB] bg-white p-10 text-center">

      <h3 className="text-xl font-semibold">
        No Artworks Yet
      </h3>

      <p className="mt-2 text-gray-500">
        Upload your first artwork to get started.
      </p>

    </div>

  )}

</div>
                {/* Bottom Grid */}

<div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">

  {/* Notifications */}

  <div className="rounded-[30px] border border-[#ECE6DB] bg-white p-8 shadow-sm">

    <h2 className="text-2xl font-semibold">
      Notifications
    </h2>

    <div className="mt-8 rounded-2xl bg-[#FAF8F4] p-10 text-center">

      <h3 className="text-xl font-semibold">
        Coming Soon
      </h3>

      <p className="mt-2 text-gray-500">
        Notifications will appear here when buyers send inquiries or admins review your artworks.
      </p>

    </div>

  </div>

  {/* Right Side */}

  <div className="space-y-6">

    {/* Upcoming */}

    <div className="rounded-[30px] border border-[#ECE6DB] bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-semibold">
        Quick Tasks
      </h2>

      <div className="mt-8 space-y-4">

        <TaskCard title="Upload New Artwork" />

        <TaskCard title="Check Pending Artworks" />

        <TaskCard title="Reply to Buyer Inquiries" />

        <TaskCard title="Update Artist Profile" />

      </div>

    </div>

    {/* Tips */}

    <div className="rounded-[30px] bg-[#D6A354] p-8 text-white shadow-sm">

      <h2 className="text-2xl font-semibold">
        Creator Tip 💡
      </h2>

      <p className="mt-5 leading-8 text-white/90">

        Artists with more approved artworks receive better visibility in Explore and Artist pages. Keep uploading quality artwork regularly.

      </p>

      <Link
        to="/artist/upload-artwork"
        className="mt-8 inline-block rounded-xl bg-white px-5 py-3 font-semibold text-[#D6A354]"
      >
        Upload Artwork
      </Link>

    </div>

  </div>

</div>
</main>
  </ArtistLayout>
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