import { useState } from "react";
import AdminLayout from "../layout/AdminLayout";

const artworks = [
  {
    id: "ART001",
    title: "Sunset Over Silence",
    artist: "Priya Sharma",
    status: "Published",
  },
  {
    id: "ART002",
    title: "Golden Horizon",
    artist: "Arjun Verma",
    status: "Featured",
  },
  {
    id: "ART003",
    title: "Lotus Serenity",
    artist: "Kavya Nair",
    status: "Pending",
  },
];

export default function AdminArtworks() {
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredArtworks =
    statusFilter === "all"
      ? artworks
      : artworks.filter(
          (artwork) => artwork.status === statusFilter
        );

  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-4xl">
            Artwork Moderation
          </h1>

          <p className="mt-2 text-gray-500">
            Manage, feature and moderate artworks.
          </p>
        </div>

        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
          className="h-12 rounded-xl border border-[#ECE6DB] bg-white px-4 outline-none"
        >
          <option value="all">All Status</option>
          <option value="Published">Published</option>
          <option value="Featured">Featured</option>
          <option value="Pending">Pending</option>
        </select>
      </div>

      {/* Table */}
      <div className="mt-8 overflow-hidden rounded-[28px] border border-[#ECE6DB] bg-white">
        <table className="w-full">
          <thead className="bg-[#FAF8F4]">
            <tr>
              <th className="p-5 text-left">Artwork</th>
              <th className="p-5 text-left">Title</th>
              <th className="p-5 text-left">Artist</th>
              <th className="p-5 text-left">Status</th>
              <th className="p-5 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredArtworks.map((artwork) => (
              <tr
                key={artwork.id}
                className="border-t border-[#ECE6DB]"
              >
                <td className="p-5">
                  <img
                    src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400"
                    alt={artwork.title}
                    className="h-16 w-16 rounded-xl object-cover"
                  />
                </td>

                <td className="p-5 font-medium">
                  {artwork.title}
                </td>

                <td className="p-5">
                  {artwork.artist}
                </td>

                <td className="p-5">
                  <span
                    className={`rounded-full px-4 py-2 text-sm ${
                      artwork.status === "Featured"
                        ? "bg-purple-100 text-purple-700"
                        : artwork.status === "Published"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {artwork.status}
                  </span>
                </td>

                <td className="p-5">
                  <div className="flex gap-2">
                    <button className="rounded-xl bg-[#D6A354] px-4 py-2 text-white hover:bg-[#C69649]">
                      Feature
                    </button>

                    <button className="rounded-xl bg-red-500 px-4 py-2 text-white hover:bg-red-600">
                      Remove
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {filteredArtworks.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="p-8 text-center text-gray-500"
                >
                  No artworks found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}