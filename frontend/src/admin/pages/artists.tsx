import { useEffect, useState } from "react";

import AdminLayout from "../layout/AdminLayout";

import {
  getPendingArtists,
  approveArtist,
  rejectArtist,
} from "../../api/admin.api";

export default function AdminArtists() {
  const [artists, setArtists] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  const [statusFilter, setStatusFilter] =
    useState("all");
  const filteredArtists =
    statusFilter === "all"
      ? artists
      : artists.filter(
        (artist) => artist.status === statusFilter
      );
  useEffect(() => {
    loadArtists();
  }, []);

  const loadArtists = async () => {
    try {
      const data = await getPendingArtists();


      setArtists(data);
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
         Loading Artists...
      </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex items-start justify-between gap-6">
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
          <option value="all">All</option>

          <option value="PENDING">
            Pending
          </option>

          <option value="APPROVED">
            Approved
          </option>

          <option value="REJECTED">
            Rejected
          </option>
        </select>
      </div>

      {/* Artists List */}
      <div className="mt-8 grid gap-5">
        {filteredArtists.map((artist) => (
          <div
            key={artist.id}
            className="flex items-center justify-between rounded-[28px] border border-[#ECE6DB] bg-white p-6"
          >
            <div className="flex flex-1 items-center gap-4">
              <img
                src={artist.profileImage ??
                  `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    artist.user.name
                  )}`
                }
                alt={artist.user.name}
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg">
                  {artist.user.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {artist.user.email}
                </p>

                <span
                  className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-medium ${artist.status === "PENDING"
                    ? "bg-yellow-100 text-yellow-700"
                    : artist.status === "APPROVED"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                    }`}
                >
                  {artist.status.replace("_"," ")}
                </span>
              </div>
            </div>

              <div className="flex shrink-0 gap-3">              <button
                disabled={artist.status === "APPROVED"}
                onClick={async () => {


                  if (!confirm("Are you sure you want to approve this artist?")) {
                    return;
                  }

                  try {
                    await approveArtist(artist.id);

                    await loadArtists();
                  } catch (err) {
                    console.error(err);
                  }

                }}

                className={`rounded-xl px-5 py-2 text-white transition 
                  ${
                    artist.status === "APPROVED"
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-500 hover:bg-green-600"
                  }`}
              >

                Approve

              </button>
              <button
                disabled={artist.status === "REJECTED"}
                onClick={async () => {

                  if (!confirm("Are you sure you want to reject this artist?")) {
                    return;
                  }

                  const reason = prompt("Enter rejection reason:");

                  if (!reason) return;

                  try {
                    await rejectArtist(
                      artist.id,
                      reason
                    );

                    await loadArtists();
                  } catch (err) {
                    console.error(err);
                  }

                }}

                className={`rounded-xl px-5 py-2 text-white transition
                ${
                artist.status==="REJECTED"
                ?"bg-gray-400 cursor-not-allowed"
                :"bg-red-500 hover:bg-red-600"
          }`}
              >

                Reject

              </button>
            </div>
          </div>
        ))}

        {filteredArtists.length === 0 && (
          <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-10 text-center text-gray-500">
            No pending artist applications found.
          </div>
        )}
      </div>
    </AdminLayout>
  );
}