import { useMemo, useState } from "react";
import {
  Search,
  Filter,
  Eye,
  Phone,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react";

import ArtistLayout from "../layout/ArtistLayout";

const inquiries = [
  {
    id: 1,
    buyer: "Mahika Chaurasiya",
    artwork: "Golden Horizon",
    date: "20 Jun 2026",
    phone: "+91 9876543210",
    status: "New",
    budget: "₹24,000",
  },
  {
    id: 2,
    buyer: "Rahul Shah",
    artwork: "Sunset Bliss",
    date: "19 Jun 2026",
    phone: "+91 9876543210",
    status: "Accepted",
    budget: "₹18,000",
  },
  {
    id: 3,
    buyer: "Aditi Mehta",
    artwork: "Lotus Serenity",
    date: "18 Jun 2026",
    phone: "+91 9876543210",
    status: "Rejected",
    budget: "₹15,000",
  },
  {
    id: 4,
    buyer: "Arjun Verma",
    artwork: "Modern Nature",
    date: "17 Jun 2026",
    phone: "+91 9876543210",
    status: "Contacted",
    budget: "₹21,000",
  },
];

const filters = [
  "All",
  "New",
  "Accepted",
  "Rejected",
  "Contacted",
];

export default function ArtistInquiryPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => {
    return inquiries.filter((item) => {
      const searchMatch =
        item.buyer
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        item.artwork
          .toLowerCase()
          .includes(search.toLowerCase());

      const statusMatch =
        filter === "All" ||
        item.status === filter;

      return searchMatch && statusMatch;
    });
  }, [search, filter]);

  return (
    <ArtistLayout>
      <main className="min-w-0">

        <div className="flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-serif">
              Buyer Inquiries
            </h1>

            <p className="mt-2 text-gray-500">
              Manage all artwork inquiries
            </p>

          </div>

        </div>

        {/* Search */}

        <div className="mt-10 flex gap-4">

          <div className="relative flex-1">

            <Search
              size={18}
              className="absolute left-4 top-4 text-gray-400"
            />

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search buyer..."
              className="h-12 w-full rounded-xl border border-[#ECE6DB] bg-white pl-12"
            />

          </div>

          <div className="relative">

            <Filter
              size={18}
              className="absolute left-4 top-4 text-gray-500"
            />

            <select
              value={filter}
              onChange={(e) =>
                setFilter(e.target.value)
              }
              className="h-12 rounded-xl border border-[#ECE6DB] bg-white pl-10 pr-6"
            >

              {filters.map((item) => (
                <option key={item}>
                  {item}
                </option>
              ))}

            </select>

          </div>

        </div>

        {/* TABLE */}

        <div className="mt-10 overflow-hidden rounded-3xl border border-[#ECE6DB] bg-white">

          <table className="w-full">

            <thead className="bg-[#FAF8F4]">

              <tr>

                <th className="p-5 text-left">
                  Buyer
                </th>

                <th className="text-left">
                  Artwork
                </th>

                <th className="text-left">
                  Budget
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

              {filtered.map((item) => (

                <tr
                  key={item.id}
                  className="border-t"
                >

                  <td className="p-5">

                    <div>

                      <p className="font-semibold">
                        {item.buyer}
                      </p>

                      <p className="text-sm text-gray-500">
                        {item.phone}
                      </p>

                    </div>

                  </td>

                  <td>

                    {item.artwork}

                  </td>

                  <td>

                    {item.budget}

                  </td>

                  <td>

                    {item.date}

                  </td>

                  <td>

                    <StatusBadge
                      status={item.status}
                    />

                  </td>

                  <td>

                    <div className="flex justify-center gap-3">

                      <button className="rounded-xl bg-blue-50 p-3">

                        <Eye size={18} />

                      </button>

                      <button className="rounded-xl bg-green-50 p-3">

                        <Phone size={18} />

                      </button>

                      <button className="rounded-xl bg-green-100 p-3">

                        <CheckCircle
                          size={18}
                        />

                      </button>

                      <button className="rounded-xl bg-red-100 p-3">

                        <XCircle
                          size={18}
                        />

                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </main>
    </ArtistLayout>
  );
}

function StatusBadge({
  status,
}: {
  status: string;
}) {
  const colors = {
    New: "bg-yellow-100 text-yellow-700",

    Accepted:
      "bg-green-100 text-green-700",

    Rejected:
      "bg-red-100 text-red-700",

    Contacted:
      "bg-blue-100 text-blue-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-2 text-sm ${
        colors[
          status as keyof typeof colors
        ]
      }`}
    >
      {status}
    </span>
  );
}