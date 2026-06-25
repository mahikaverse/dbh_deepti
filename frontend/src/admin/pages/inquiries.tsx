import { useState } from "react";
import AdminLayout from "../layout/AdminLayout";

const inquiries = [
  {
    id: "INQ001",
    user: "Mahika",
    artwork: "Sunset Over Silence",
    artist: "Priya Sharma",
    status: "Pending",
  },
  {
    id: "INQ002",
    user: "Rohan",
    artwork: "Lotus Serenity",
    artist: "Kavya Nair",
    status: "Approved",
  },
  {
    id: "INQ003",
    user: "Aditi",
    artwork: "Golden Horizon",
    artist: "Arjun Verma",
    status: "Contacted",
  },
];

export default function AdminInquiries() {
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredInquiries =
    statusFilter === "all"
      ? inquiries
      : inquiries.filter(
          (item) => item.status === statusFilter
        );

  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-4xl">
            Inquiry Management
          </h1>

          <p className="mt-2 text-gray-500">
            Manage customer inquiries and artist requests.
          </p>
        </div>

        {/* Status Filter */}
        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
          className="h-12 rounded-xl border border-[#ECE6DB] bg-white px-4 outline-none"
        >
          <option value="all">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
          <option value="Contacted">Contacted</option>
        </select>
      </div>

      {/* Table */}
      <div className="mt-8 overflow-hidden rounded-[28px] border border-[#ECE6DB] bg-white">
        <table className="w-full">
          <thead className="bg-[#FAF8F4]">
            <tr>
              <th className="p-5 text-left">ID</th>
              <th className="p-5 text-left">User</th>
              <th className="p-5 text-left">Artwork</th>
              <th className="p-5 text-left">Artist</th>
              <th className="p-5 text-left">Status</th>
              <th className="p-5 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredInquiries.map((item) => (
              <tr
                key={item.id}
                className="border-t border-[#ECE6DB]"
              >
                <td className="p-5">{item.id}</td>
                <td className="p-5">{item.user}</td>
                <td className="p-5">{item.artwork}</td>
                <td className="p-5">{item.artist}</td>

                <td className="p-5">
                  <span
                    className={`rounded-full px-4 py-2 text-sm ${
                      item.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : item.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : item.status === "Contacted"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="p-5">
                  <div className="flex gap-2">
                    <button className="rounded-xl bg-green-500 px-4 py-2 text-white hover:bg-green-600">
                      Approve
                    </button>

                    <button className="rounded-xl bg-red-500 px-4 py-2 text-white hover:bg-red-600">
                      Reject
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {filteredInquiries.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="p-8 text-center text-gray-500"
                >
                  No inquiries found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}