import { useEffect, useState } from "react";
import AdminLayout from "../layout/AdminLayout";
import {
  getAllArtworks,approveArtwork,
  rejectArtwork,
} from "../../api/admin.api";


export default function AdminArtworks() {
  const [artworks, setArtworks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] =
  useState("all");

  const filteredArtworks =
  statusFilter === "all"
    ? artworks
    : artworks.filter((artwork) =>
        statusFilter === "APPROVED"
          ? artwork.isApproved
          : !artwork.isApproved
      );
  useEffect(() => {
  loadArtworks();
}, []);

const loadArtworks = async () => {
  try {
    const data = await getAllArtworks();

    console.log(data);

    setArtworks(data);
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
};
if (loading) {
  return (
    <AdminLayout>
      <div className="flex h-[60vh] items-center justify-center text-lg font-medium">
        Loading Artworks...
      </div>
    </AdminLayout>
  );
}

  return (
  <AdminLayout>
    {/* Header */}
    <div className="flex items-center justify-between">
      <div>
        <h1 className="font-serif text-4xl">
          Artwork Moderation
        </h1>

        <p className="mt-2 text-gray-500">
          Manage, approve and moderate artworks.
        </p>
      </div>

      <select
        value={statusFilter}
        onChange={(e) =>
          setStatusFilter(e.target.value)
        }
        className="h-12 rounded-xl border border-[#ECE6DB] bg-white px-4 outline-none"
      >
        <option value="all">All</option>
        <option value="APPROVED">Approved</option>
        <option value="PENDING">Pending</option>
      </select>
    </div>

    {/* Table */}
    <div className="mt-8 overflow-hidden rounded-[28px] border border-[#ECE6DB] bg-white">
      <div className="overflow-x-auto">
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
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    className="h-16 w-16 rounded-xl object-cover"
                  />
                </td>

                <td className="p-5 font-medium">
                  {artwork.title}
                </td>

                <td className="p-5">
                  {artwork.artist?.name ?? "-"}
                </td>

                <td className="p-5">
                  <span
                    className={`rounded-full px-4 py-2 text-sm ${
                      artwork.isApproved
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {artwork.isApproved
                      ? "APPROVED"
                      : "PENDING"}
                  </span>
                </td>

                <td className="p-5">
                  <div className="flex gap-2">

                    <button
                      disabled={artwork.isApproved}
                      onClick={async () => {

                        if (
                          !confirm(
                            "Approve this artwork?"
                          )
                        )
                          return;

                        await approveArtwork(
                          artwork.id
                        );

                        await loadArtworks();
                      }}
                      className="rounded-xl bg-green-500 px-4 py-2 text-white hover:bg-green-600 disabled:cursor-not-allowed disabled:bg-gray-300"
                    >
                      Approve
                    </button>

                    <button
                      disabled={!artwork.isApproved}
                      onClick={async () => {

                        if (
                          !confirm(
                            "Reject this artwork?"
                          )
                        )
                          return;

                        await rejectArtwork(
                          artwork.id
                        );

                        await loadArtworks();
                      }}
                      className="rounded-xl bg-red-500 px-4 py-2 text-white hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-gray-300"
                    >
                      Reject
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
    </div>
  </AdminLayout>
);
}