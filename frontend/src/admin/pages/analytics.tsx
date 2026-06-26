import { useEffect, useState } from "react";
import { getDashboard } from "../../api/admin.api";
import AdminLayout from "../layout/AdminLayout";
import StatCard from "../components/StatCard";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const growthData = [
  { month: "Jan", users: 120, artists: 20 },
  { month: "Feb", users: 240, artists: 35 },
  { month: "Mar", users: 420, artists: 60 },
  { month: "Apr", users: 680, artists: 92 },
  { month: "May", users: 980, artists: 140 },
  { month: "Jun", users: 1248, artists: 186 },
];

const COLORS = [
  "#D6A354",
  "#08233F",
  "#6B7280",
  "#DCD5CA",
];

export default function AdminAnalytics() {
  const [analytics, setAnalytics] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    try {
      const data = await getDashboard();

      console.log(data);

      setAnalytics(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const inquiryData = analytics
    ? [
        {
          name: "New",
          value: analytics.inquiries.newInquiries,
        },
        {
          name: "Contacted",
          value: analytics.inquiries.contactedInquiries,
        },
        {
          name: "Confirmed",
          value: analytics.inquiries.confirmedInquiries,
        },
        {
          name: "Completed",
          value: analytics.inquiries.completedInquiries,
        },
        {
          name: "Cancelled",
          value: analytics.inquiries.cancelledInquiries,
        },
      ]
    : [];

  const categoryData = analytics
    ? [
        {
          name: "Approved",
          value: analytics.artworks.approvedArtworks,
        },
        {
          name: "Pending",
          value: analytics.artworks.pendingArtworks,
        },
        {
          name: "Sold",
          value: analytics.artworks.soldArtworks,
        },
      ]
    : [];

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex h-[60vh] items-center justify-center text-lg font-medium">
          Loading Analytics...
        </div>
      </AdminLayout>
    );
  }
  return (
  <AdminLayout>

    {/* Header */}

    <div>
      <h1 className="font-serif text-4xl">
        Analytics
      </h1>

      <p className="mt-2 text-gray-500">
        Monitor platform growth, user activity and performance.
      </p>
    </div>

    {/* KPI Cards */}

    <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Total Users"
        value={analytics.users.totalUsers}
        growth=""
      />

      <StatCard
        title="Artists"
        value={analytics.users.totalArtists}
        growth=""
      />

      <StatCard
        title="Artworks"
        value={analytics.artworks.totalArtworks}
        growth=""
      />

      <StatCard
        title="Inquiries"
        value={analytics.inquiries.totalInquiries}
        growth=""
      />

    </div>

    {/* Charts */}

    <div className="mt-10 grid gap-6 lg:grid-cols-2">

      {/* Growth */}

      <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-6">

        <h3 className="text-xl font-semibold">
          Platform Growth
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Users and artists growth over time.
        </p>

        <div className="mt-6 h-[320px]">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <LineChart data={growthData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="users"
                stroke="#D6A354"
                strokeWidth={3}
              />

              <Line
                type="monotone"
                dataKey="artists"
                stroke="#08233F"
                strokeWidth={3}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* Inquiry Chart */}

      <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-6">

        <h3 className="text-xl font-semibold">
          Inquiry Analytics
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Inquiry status overview.
        </p>

        <div className="mt-6 h-[320px]">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <BarChart data={inquiryData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="value"
                fill="#D6A354"
                radius={[8, 8, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>

    {/* Bottom Section */}
    <div className="mt-6 grid gap-6 lg:grid-cols-3">

  {/* Recent Artists */}

  <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-6">

    <h3 className="text-xl font-semibold">
      Recent Artists
    </h3>

    <div className="mt-5 space-y-4">

      {analytics.recentArtists.map((artist: any) => (

        <div
          key={artist.id}
          className="flex items-center justify-between"
        >

          <div>

            <p className="font-medium">
              {artist.user.name}
            </p>

            <p className="text-sm text-gray-500">
              {artist.user.email}
            </p>

          </div>

          <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
            {artist.status}
          </span>

        </div>

      ))}

    </div>

  </div>

  {/* Artwork Status */}

  <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-6">

    <h3 className="text-xl font-semibold">
      Artwork Status
    </h3>

    <div className="mt-4 h-[220px]">

      <ResponsiveContainer
        width="100%"
        height="100%"
      >

        <PieChart>

          <Pie
            data={categoryData}
            dataKey="value"
            outerRadius={80}
          >

            {categoryData.map((_: any, index: number) => (

              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />

            ))}

          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>

  </div>
    {/* Platform Summary */}

  <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-6">

    <h3 className="text-xl font-semibold">
      Platform Summary
    </h3>

    <div className="mt-5 space-y-4">

      <div className="flex justify-between">
        <span>Total Admins</span>
        <span className="font-semibold">
          {analytics.users.totalAdmins}
        </span>
      </div>

      <div className="flex justify-between">
        <span>Approved Artworks</span>
        <span className="font-semibold">
          {analytics.artworks.approvedArtworks}
        </span>
      </div>

      <div className="flex justify-between">
        <span>Pending Artworks</span>
        <span className="font-semibold">
          {analytics.artworks.pendingArtworks}
        </span>
      </div>

      <div className="flex justify-between">
        <span>Sold Artworks</span>
        <span className="font-semibold">
          {analytics.artworks.soldArtworks}
        </span>
      </div>

      <div className="flex justify-between">
        <span>Total Inquiries</span>
        <span className="font-semibold">
          {analytics.inquiries.totalInquiries}
        </span>
      </div>

    </div>

  </div>

</div>

</AdminLayout>
);
}