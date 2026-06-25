 import {
  Wallet,
  TrendingUp,
  DollarSign,
  Package,
} from "lucide-react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import ArtistLayout from "../layout/ArtistLayout";

const sales = [
  {
    id: 1,
    artwork: "Golden Horizon",
    buyer: "Mahika Chaurasiya",
    amount: "₹24,000",
    date: "20 Jun 2026",
    status: "Paid",
  },
  {
    id: 2,
    artwork: "Lotus Serenity",
    buyer: "Rahul Shah",
    amount: "₹18,000",
    date: "18 Jun 2026",
    status: "Pending",
  },
  {
    id: 3,
    artwork: "Urban Dreams",
    buyer: "Aditi Mehta",
    amount: "₹19,000",
    date: "15 Jun 2026",
    status: "Paid",
  },
];

const earningsData = [
  { month: "Jan", earnings: 25000 },
  { month: "Feb", earnings: 40000 },
  { month: "Mar", earnings: 52000 },
  { month: "Apr", earnings: 68000 },
  { month: "May", earnings: 82000 },
  { month: "Jun", earnings: 98000 },
];

export default function SalesPage() {
  return (
    <ArtistLayout>
      <main className="min-w-0">
        {/* Header */}

        <div>
          <h1 className="text-4xl font-serif font-bold">
            Sales Dashboard
          </h1>

          <p className="mt-2 text-gray-500">
            Track your revenue and transactions.
          </p>
        </div>

        {/* KPI Cards */}

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <SalesCard
            title="Total Revenue"
            value="₹2,48,000"
            icon={
              <Wallet
                size={26}
                className="text-[#D6A354]"
              />
            }
          />

          <SalesCard
            title="This Month"
            value="₹42,500"
            icon={
              <TrendingUp
                size={26}
                className="text-[#D6A354]"
              />
            }
          />

          <SalesCard
            title="Pending Payment"
            value="₹18,000"
            icon={
              <DollarSign
                size={26}
                className="text-[#D6A354]"
              />
            }
          />

          <SalesCard
            title="Sold Artworks"
            value="18"
            icon={
              <Package
                size={26}
                className="text-[#D6A354]"
              />
            }
          />
        </div>

        {/* Earnings Chart */}

        <div className="mt-10 rounded-[30px] border border-[#ECE6DB] bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">
            Monthly Earnings
          </h2>

          <p className="mt-2 text-gray-500">
            Revenue generated during the last six months.
          </p>

          <div className="mt-8 h-72">
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <LineChart data={earningsData}>
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="month" />

                <YAxis />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="earnings"
                  stroke="#D6A354"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Transactions */}

        <div className="mt-10 overflow-hidden rounded-[30px] border border-[#ECE6DB] bg-white shadow-sm">
          <div className="border-b border-[#ECE6DB] p-6">
            <h2 className="text-2xl font-semibold">
              Recent Transactions
            </h2>

            <p className="mt-1 text-gray-500">
              Latest artwork sales and payment status.
            </p>
          </div>

          <table className="w-full">
            <thead className="bg-[#FAF8F4]">
              <tr>
                <th className="p-5 text-left">
                  Artwork
                </th>

                <th className="text-left">
                  Buyer
                </th>

                <th className="text-left">
                  Amount
                </th>

                <th className="text-left">
                  Date
                </th>

                <th className="text-left">
                  Status
                </th>

                <th className="text-center">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {sales.map((sale) => (
                <tr
                  key={sale.id}
                  className="border-t border-[#F2ECE4]"
                >
                  <td className="p-5 font-medium">
                    {sale.artwork}
                  </td>

                  <td>{sale.buyer}</td>

                  <td className="font-semibold text-[#D6A354]">
                    {sale.amount}
                  </td>

                  <td>{sale.date}</td>

                  <td>
                    <span
                      className={`rounded-full px-3 py-2 text-xs font-semibold ${
                        sale.status === "Paid"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {sale.status}
                    </span>
                  </td>

                  <td>
                    <div className="flex justify-center gap-3">
                      <button className="rounded-xl border border-[#ECE6DB] px-4 py-2 hover:bg-[#FAF8F4]">
                        View
                      </button>

                      <button className="rounded-xl bg-[#D6A354] px-4 py-2 text-white hover:bg-[#C69649]">
                        Invoice
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

                {/* Revenue Breakdown */}

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Top Selling Artwork */}

          <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">
              Top Selling Artwork
            </h3>

            <div className="mt-5">
              <p className="text-2xl font-bold">
                Golden Horizon
              </p>

              <p className="mt-2 text-gray-500">
                Revenue Generated
              </p>

              <p className="mt-1 text-3xl font-bold text-[#D6A354]">
                ₹1,08,000
              </p>
            </div>
          </div>

          {/* Average Order Value */}

          <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">
              Average Order Value
            </h3>

            <p className="mt-6 text-4xl font-bold">
              ₹20,666
            </p>

            <p className="mt-2 text-gray-500">
              Per artwork sold
            </p>
          </div>

          {/* Payment Success */}

          <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">
              Payment Success
            </h3>

            <p className="mt-6 text-4xl font-bold text-green-600">
              94%
            </p>

            <p className="mt-2 text-gray-500">
              Successful transactions
            </p>
          </div>
        </div>

      </main>
    </ArtistLayout>
  );
}

type SalesCardProps = {
  title: string;
  value: string;
  icon: React.ReactNode;
};

function SalesCard({
  title,
  value,
  icon,
}: SalesCardProps) {
  return (
    <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1B1B1B]">
            {value}
          </h2>
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FAF8F4]">
          {icon}
        </div>
      </div>
    </div>
  );
}