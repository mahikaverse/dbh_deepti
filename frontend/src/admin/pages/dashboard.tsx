import AdminLayout from "../layout/AdminLayout";
import StatCard from "../components/StatCard";
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

const growthData = [
  { month: "Jan", users: 200 },
  { month: "Feb", users: 350 },
  { month: "Mar", users: 500 },
  { month: "Apr", users: 750 },
  { month: "May", users: 980 },
  { month: "Jun", users: 1248 },
];

const inquiryData = [
  { name: "Pending", value: 120 },
  { name: "Approved", value: 280 },
  { name: "Contacted", value: 72 },
];
const recentInquiries = [
  {
    user: "Mahika",
    artwork: "Sunset Over Silence",
    status: "Pending",
  },
  {
    user: "Rohan",
    artwork: "Lotus Serenity",
    status: "Approved",
  },
  {
    user: "Aditi",
    artwork: "Golden Horizon",
    status: "Contacted",
  },
];

const recentArtists = [
  "Priya Sharma",
  "Kavya Nair",
  "Arjun Verma",
  "Neha Kapoor",
];

export default function AdminDashboard() {
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
          title="Total Users"
          value="1,248"
          growth="+12%"
        />

        <StatCard
          title="Artists"
          value="186"
          growth="+8%"
        />

        <StatCard
          title="Artworks"
          value="3,492"
          growth="+24%"
        />

        <StatCard
          title="Inquiries"
          value="472"
          growth="+16%"
        />
      </div>

      {/* Quick Stats */}
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-6">
          <p className="text-sm text-gray-500">
            Total Revenue
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            ₹2.4L
          </h3>

          <p className="mt-2 text-sm text-green-600">
            +14% this month
          </p>
        </div>

        <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-6">
          <p className="text-sm text-gray-500">
            Featured Artworks
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            128
          </h3>

          <p className="mt-2 text-sm text-green-600">
            +21 this month
          </p>
        </div>

        <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-6">
          <p className="text-sm text-gray-500">
            Conversion Rate
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            62%
          </h3>

          <p className="mt-2 text-sm text-green-600">
            +8% this month
          </p>
        </div>
      </div>

      {/* Charts */}

<div className="mt-10 grid gap-6 lg:grid-cols-2">

  <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-6">

    <h3 className="text-xl font-semibold">
      Platform Growth
    </h3>

    <p className="mt-1 text-sm text-gray-500">
      Users, artists and artworks growth.
    </p>

    <div className="mt-6 h-[300px]">
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
        </LineChart>
      </ResponsiveContainer>
    </div>

  </div>

  <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-6">

    <h3 className="text-xl font-semibold">
      Inquiry Performance
    </h3>

    <p className="mt-1 text-sm text-gray-500">
      Approval and conversion analytics.
    </p>

    <div className="mt-6 h-[300px]">
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

      {/* Recent Inquiries + Artists */}
      <div className="mt-10 grid gap-8 xl:grid-cols-2">
        {/* Recent Inquiries */}
        <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-6">
          <h3 className="text-xl font-semibold">
            Recent Inquiries
          </h3>

          <div className="mt-6 space-y-4">
            {recentInquiries.map((item) => (
              <div
                key={item.user}
                className="flex items-center justify-between border-b border-[#F2EEE7] pb-4"
              >
                <div>
                  <p className="font-medium">
                    {item.user}
                  </p>

                  <p className="text-sm text-gray-500">
                    {item.artwork}
                  </p>
                </div>

                <span
                  className={`rounded-full px-4 py-2 text-sm ${
                    item.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : item.status === "Approved"
                      ? "bg-green-100 text-green-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Artists */}
        <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-6">
          <h3 className="text-xl font-semibold">
            Recent Artists
          </h3>

          <div className="mt-6 space-y-4">
            {recentArtists.map((artist) => (
              <div
                key={artist}
                className="flex items-center gap-4 border-b border-[#F2EEE7] pb-4"
              >
                <img
                  src={`https://i.pravatar.cc/150?u=${artist}`}
                  alt={artist}
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div>
                  <p className="font-medium">
                    {artist}
                  </p>

                  <p className="text-sm text-gray-500">
                    Verified Artist
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="mt-10 rounded-[28px] border border-[#ECE6DB] bg-white p-6">
        <h3 className="text-xl font-semibold">
          Platform Activity
        </h3>

        <div className="mt-6 space-y-5">
          <Activity
            title="New artist application received"
            time="5 minutes ago"
          />

          <Activity
            title="Inquiry approved by admin"
            time="30 minutes ago"
          />

          <Activity
            title="Artwork uploaded successfully"
            time="2 hours ago"
          />

          <Activity
            title="New user registered"
            time="4 hours ago"
          />
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