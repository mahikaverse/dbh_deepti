import { useMemo, useState } from "react";
import {
  Search,
  Filter,
  Plus,
} from "lucide-react";
import { Link } from "react-router-dom";

import ArtistLayout from "../layout/ArtistLayout";
import { useMyArtworks } from "../../hooks/useMyArtworks";
import StatCard from "../components/ArtistStatCard";
import ArtworkCard from "../components/ArtworkCard";

const filters = [
  "All",
  "Pending Review",
  "Approved",
  "Rejected",
  "Sold",
];

export default function MyArtworksPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const {
    artworks,
    loading,
    reload,
  } = useMyArtworks();

  const filtered = useMemo(() => {
    return artworks.filter((art: any) => {
      const matchesSearch = art.title
        .toLowerCase()
        .includes(search.toLowerCase());

      let artworkStatus = "Pending Review";

if (art.isApproved) {
  artworkStatus = "Approved";
}

if (!art.isAvailable) {
  artworkStatus = "Sold";
}

if (art.rejectionReason) {
  artworkStatus = "Rejected";
}

      const matchesStatus =
        status === "All" ||
        artworkStatus === status;

      return matchesSearch && matchesStatus;
    });
  }, [artworks, search, status]);

  if (loading) {
    return (
      <ArtistLayout>
        <div className="flex h-[70vh] items-center justify-center">
          <div className="text-center">

            <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-[#D6A354] border-t-transparent" />

            <p className="mt-6 text-lg text-gray-500">
              Loading your artworks...
            </p>

          </div>
        </div>
      </ArtistLayout>
    );
  }

  return (
    <ArtistLayout>

      <main className="min-w-0">

        {/* HEADER */}

        <div className="flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-serif font-bold">
              My Artworks
            </h1>

            <p className="mt-2 text-gray-500">
              Manage all your uploaded artworks
            </p>

          </div>

          <Link
            to="/artist/upload-artwork"
            className="flex items-center gap-2 rounded-xl bg-[#D6A354] px-6 py-3 text-white transition hover:bg-[#c69649]"
          >
            <Plus size={18} />

            Upload Artwork

          </Link>

        </div>

        {/* STATS */}

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <StatCard
            title="Total Artworks"
            value={artworks.length.toString()}
          />

          <StatCard
            title="Approved"
            value={
              artworks
                .filter((a: any) => a.isApproved)
                .length.toString()
            }
          />

          <StatCard
            title="Pending Review"
            value={
              artworks
                .filter((a: any) => !a.isApproved)
                .length.toString()
            }
          />

          <StatCard
            title="Sold"
            value={
              artworks
                .filter((a: any) => !a.isAvailable)
                .length.toString()
            }
          />

        </div>

        {/* SEARCH */}

        <div className="mt-10 flex flex-col gap-4 lg:flex-row">

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
              placeholder="Search artwork..."
              className="h-12 w-full rounded-xl border border-[#ECE6DB] bg-white pl-12 pr-4 outline-none"
            />

          </div>

          <div className="relative">

            <Filter
              size={18}
              className="absolute left-4 top-4 text-gray-500"
            />

            <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
              className="h-12 rounded-xl border border-[#ECE6DB] bg-white pl-11 pr-10 outline-none"
            >
              {filters.map((item) => (
                <option key={item}>
                  {item}
                </option>
              ))}
            </select>

          </div>

        </div>

                {/* ARTWORK GRID */}

        <div className="mt-10">

          {filtered.length === 0 ? (

            <div className="rounded-3xl border border-[#ECE6DB] bg-white p-16 text-center shadow-sm">

              <img
                src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
                alt=""
                className="mx-auto h-24 w-24 opacity-70"
              />

              <h2 className="mt-6 text-2xl font-semibold">
                No artworks uploaded yet
              </h2>

              <p className="mt-3 text-gray-500">
                Upload your first artwork. Every submission will be reviewed by our admin team before it becomes visible to collectors.
              </p>

              <Link
                to="/artist/upload-artwork"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#D6A354] px-6 py-3 font-medium text-white transition hover:bg-[#c69649]"
              >
                <Plus size={18} />
                Upload Artwork
              </Link>

            </div>

          ) : (

            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

              {filtered.map((artwork: any) => (

                <ArtworkCard
                  key={artwork.id}
                  artwork={artwork}
                  reload={reload}
                />

              ))}

            </div>

          )}

        </div>

      </main>

    </ArtistLayout>

  );
}











































































































 