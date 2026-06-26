import { useEffect, useState } from "react";
import AdminLayout from "../layout/AdminLayout";
import StatCard from "../components/StatCard";

import { getDashboard } from "../../api/admin.api";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";


export default function AdminDashboard() {
  const [dashboard, setDashboard] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const loadDashboard = async () => {
  try {
    const data = await getDashboard();

    console.log(data);

    setDashboard(data);
  } catch (err: any) {
    console.error(err);

    setError("Failed to load dashboard.");
  } finally {
    setLoading(false);
  }
};
useEffect(() => {
  loadDashboard();
}, []);
  if (loading) {
  return (
    <AdminLayout>
      <div className="flex h-[70vh] items-center justify-center">
        Loading Dashboard...
      </div>
    </AdminLayout>
  );
}
  if (error) {
  return (
    <AdminLayout>
      <div className="flex h-[70vh] items-center justify-center text-red-500">
        {error}
      </div>
    </AdminLayout>
  );
}
  return (
    <AdminLayout>
      {/* Header */}
      <div>
        <h2 className="font-serif text-4xl text-[#1B1B1B]">
          Dashboard Overview
        </h2>

        <p className="mt-2 text-gray-500">
          Monitor platform growth and activity.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <StatCard
            title="Users"
            value={dashboard.users.totalUsers}
            growth=""
          />

       <StatCard
          title="Artists"
          value={dashboard.users.totalArtists}
          growth=""
       />

        <StatCard
          title="Artworks"
          value={dashboard.artworks.totalArtworks}
          growth=""
         />

        <StatCard
           title="Inquiries"
           value={dashboard.inquiries.totalInquiries}
          growth=""
        />

</div>
      {/* Quick Stats */}
<div className="mt-6 grid gap-6 md:grid-cols-3">

  {/* Approved Artworks */}
  <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-6">
    <p className="text-sm text-gray-500">
      Approved Artworks
    </p>

    <h3 className="mt-2 text-3xl font-bold">
      {dashboard?.artworks?.approvedArtworks ?? 0}
    </h3>

    <p className="mt-2 text-sm text-green-600">
      Live from database
    </p>
  </div>

  {/* Pending Artworks */}
  <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-6">
    <p className="text-sm text-gray-500">
      Pending Artworks
    </p>

    <h3 className="mt-2 text-3xl font-bold">
      {dashboard?.artworks?.pendingArtworks ?? 0}
    </h3>

    <p className="mt-2 text-sm text-yellow-600">
      Waiting for approval
    </p>
  </div>

  {/* Sold Artworks */}
  <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-6">
    <p className="text-sm text-gray-500">
      Sold Artworks
    </p>

    <h3 className="mt-2 text-3xl font-bold">
      {dashboard?.artworks?.soldArtworks ?? 0}
    </h3>

    <p className="mt-2 text-sm text-blue-600">
      Marked unavailable
    </p>
  </div>

</div>
{/* Charts */}
<div className="mt-10 grid gap-6 lg:grid-cols-2">

  {/* Platform Growth */}
  <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-6">

    <h3 className="text-xl font-semibold">
      Platform Growth
    </h3>

    <p className="mt-1 text-sm text-gray-500">
      Analytics module will be available soon.
    </p>

    <div className="mt-10 flex h-[240px] items-center justify-center rounded-2xl border border-dashed border-[#ECE6DB]">
      <div className="text-center">
        <p className="text-lg font-semibold text-gray-700">
          📈 Coming Soon
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Monthly growth analytics will appear here.
        </p>
      </div>
    </div>

  </div>

  {/* Inquiry Performance */}
  <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-6">

    <h3 className="text-xl font-semibold">
      Inquiry Performance
    </h3>

    <p className="mt-1 text-sm text-gray-500">
      Real inquiry statistics
    </p>

    <div className="mt-8 space-y-6">

      <div className="flex items-center justify-between">
        <span>New</span>

        <span className="font-semibold">
          {dashboard?.inquiries?.newInquiries ?? 0}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <span>Contacted</span>

        <span className="font-semibold">
          {dashboard?.inquiries?.contactedInquiries ?? 0}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <span>Confirmed</span>

        <span className="font-semibold">
          {dashboard?.inquiries?.confirmedInquiries ?? 0}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <span>Completed</span>

        <span className="font-semibold">
          {dashboard?.inquiries?.completedInquiries ?? 0}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <span>Cancelled</span>

        <span className="font-semibold text-red-500">
          {dashboard?.inquiries?.cancelledInquiries ?? 0}
        </span>
      </div>

    </div>

  </div>

</div>

{/* Recent Inquiries + Artists */}

<div className="mt-10 grid gap-8 xl:grid-cols-2">

  {/* Recent Inquiries */}

  <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-6">

    <h3 className="text-xl font-semibold">
      Recent Inquiries
    </h3>

    <div className="mt-6 space-y-4">

      {dashboard?.recentInquiries?.length === 0 ? (

        <p className="text-gray-500">
          No inquiries found.
        </p>

      ) : (

        dashboard?.recentInquiries?.map((item: any) => (

          <div
            key={item.id}
            className="flex items-center justify-between border-b border-[#F2EEE7] pb-4"
          >

            <div>

              <p className="font-medium">
                {item.user.name}
              </p>

              <p className="text-sm text-gray-500">
                {item.artwork.title}
              </p>

            </div>

            <span
              className={`rounded-full px-4 py-2 text-sm
                ${
                  item.status === "NEW"
                    ? "bg-yellow-100 text-yellow-700"
                    : item.status === "CONTACTED"
                    ? "bg-blue-100 text-blue-700"
                    : item.status === "CONFIRMED"
                    ? "bg-green-100 text-green-700"
                    : item.status === "COMPLETED"
                    ? "bg-purple-100 text-purple-700"
                    : "bg-red-100 text-red-700"
                }`}
            >
              {item.status}
            </span>

          </div>

        ))

      )}

    </div>

  </div>

          {/* Recent Artists */}

        <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-6">

          <h3 className="text-xl font-semibold">
            Recent Artists
          </h3>

          <div className="mt-6 space-y-4">

            {dashboard?.recentArtists?.length === 0 ? (

              <p className="text-gray-500">
                No artist applications found.
              </p>

            ) : (

              dashboard?.recentArtists?.map((artist: any) => (

                <div
                  key={artist.id}
                  className="flex items-center gap-4 border-b border-[#F2EEE7] pb-4"
                >

                  <img
                    src={
                      artist.profileImage ||
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        artist.user.name
                      )}&background=D6A354&color=fff`
                    }
                    alt={artist.user.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />

                  <div className="flex-1">

                    <p className="font-medium">
                      {artist.user.name}
                    </p>

                    <p className="text-sm text-gray-500">
                      {artist.user.email}
                    </p>

                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium
                      ${
                        artist.status === "APPROVED"
                          ? "bg-green-100 text-green-700"
                          : artist.status === "PENDING"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                  >
                    {artist.status}
                  </span>

                </div>

              ))

            )}

          </div>

        </div>

      </div>

      {/* Recent Artwork Activity */}

      <div className="mt-10 rounded-[28px] border border-[#ECE6DB] bg-white p-6">

        <h3 className="text-xl font-semibold">
          Recent Artwork Activity
        </h3>

        <div className="mt-6 space-y-5">

          {dashboard?.recentArtworks?.length === 0 ? (

            <p className="text-gray-500">
              No recent artwork activity.
            </p>

          ) : (

            dashboard?.recentArtworks?.map((artwork: any) => (

              <Activity
                key={artwork.id}
                title={`${artwork.artist.name} uploaded "${artwork.title}"`}
                time={new Date(
                  artwork.createdAt
                ).toLocaleDateString()}
              />

            ))

          )}

        </div>

      </div>

    </AdminLayout>

  );
}

function Activity({
  title,
  time,
}: {
  title: string;
  time: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-[#F2EEE7] pb-4">

      <span className="font-medium">
        {title}
      </span>

      <span className="text-sm text-gray-500">
        {time}
      </span>

    </div>
  );
}