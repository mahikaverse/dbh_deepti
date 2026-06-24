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

const inquiryData = [
  { name: "Pending", value: 120 },
  { name: "Approved", value: 280 },
  { name: "Contacted", value: 72 },
];

const categoryData = [
  { name: "Nature", value: 35 },
  { name: "Spiritual", value: 25 },
  { name: "Sketches", value: 20 },
  { name: "Heritage", value: 20 },
];

const COLORS = [
  "#D6A354",
  "#08233F",
  "#6B7280",
  "#DCD5CA",
];

export default function AdminAnalytics() {
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
          title="Users Growth"
          value="+18%"
          growth="This Month"
        />

        <StatCard
          title="Artists Growth"
          value="+11%"
          growth="This Month"
        />

        <StatCard
          title="Artwork Uploads"
          value="348"
          growth="+24%"
        />

        <StatCard
          title="Inquiry Conversion"
          value="62%"
          growth="+8%"
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

        {/* Inquiry */}

        <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-6">
          <h3 className="text-xl font-semibold">
            Inquiry Analytics
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Approval and response tracking.
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
        {/* Top Artists */}

        <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-6">
          <h3 className="text-xl font-semibold">
            Top Artists
          </h3>

          <div className="mt-5 space-y-4">
            <div className="flex items-center justify-between">
              <span>Priya Sharma</span>
              <span className="font-medium">
                128 Sales
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span>Arjun Verma</span>
              <span className="font-medium">
                94 Sales
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span>Kavya Nair</span>
              <span className="font-medium">
                81 Sales
              </span>
            </div>
          </div>
        </div>

        {/* Categories */}

        <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-6">
          <h3 className="text-xl font-semibold">
            Categories
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
                  {categoryData.map((_, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Revenue */}

        <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-6">
          <h3 className="text-xl font-semibold">
            Revenue Overview
          </h3>

          <div className="mt-5">
            <p className="text-4xl font-bold">
              ₹2.4L
            </p>

            <p className="mt-2 text-green-600">
              +14% from last month
            </p>

            <div className="mt-6 rounded-2xl bg-[#FAF8F4] p-4">
              <p className="text-sm text-gray-500">
                Avg Order Value
              </p>

              <p className="mt-1 text-2xl font-semibold">
                ₹3,250
              </p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}