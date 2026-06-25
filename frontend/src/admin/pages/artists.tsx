import { useState } from "react";
import AdminLayout from "../layout/AdminLayout";

const artists = [
  {
    id: 1,
    name: "Priya Sharma",
    email: "priya@gmail.com",
    status: "Pending",
  },
  {
    id: 2,
    name: "Arjun Verma",
    email: "arjun@gmail.com",
    status: "Approved",
  },
  {
    id: 3,
    name: "Kavya Nair",
    email: "kavya@gmail.com",
    status: "Pending",
  },
];

export default function AdminArtists() {
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredArtists =
    statusFilter === "all"
      ? artists
      : artists.filter(
          (artist) => artist.status === statusFilter
        );

  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-4xl">
            Artist Verification
          </h1>

          <p className="mt-2 text-gray-500">
            Review and manage artist verification requests.
          </p>
        </div>

        {/* Filter */}
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
        </select>
      </div>

      {/* Artists List */}
      <div className="mt-8 grid gap-5">
        {filteredArtists.map((artist) => (
          <div
            key={artist.id}
            className="flex items-center justify-between rounded-[28px] border border-[#ECE6DB] bg-white p-6"
          >
            <div className="flex items-center gap-4">
              <img
                src="https://i.pravatar.cc/150"
                alt={artist.name}
                className="h-14 w-14 rounded-full object-cover"
              />

              <div>
                <h3 className="font-semibold text-lg">
                  {artist.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {artist.email}
                </p>

                <span
                  className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-medium ${
                    artist.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : artist.status === "Approved"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {artist.status}
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="rounded-xl bg-green-500 px-5 py-2 text-white hover:bg-green-600">
                Approve
              </button>

              <button className="rounded-xl bg-red-500 px-5 py-2 text-white hover:bg-red-600">
                Reject
              </button>
            </div>
          </div>
        ))}

        {filteredArtists.length === 0 && (
          <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-10 text-center text-gray-500">
            No artists found.
          </div>
        )}
      </div>
    </AdminLayout>
  );
}