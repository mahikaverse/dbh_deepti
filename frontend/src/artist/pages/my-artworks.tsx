import { useMemo, useState } from "react";
import {
  Search,
  Filter,
  Plus,
  Eye,
  Heart,
  MessageCircle,
  Pencil,
  Trash2,
  Copy,
} from "lucide-react";
import { Link } from "react-router-dom";
import ArtistLayout from "../layout/ArtistLayout";

const artworks = [
  {
    id: 1,
    title: "Golden Horizon",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900",
    price: "₹24,000",
    status: "Published",
    views: 1452,
    likes: 183,
    inquiries: 21,
  },
  {
    id: 2,
    title: "Lotus Serenity",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=900",
    price: "₹18,000",
    status: "Pending",
    views: 520,
    likes: 61,
    inquiries: 7,
  },
  {
    id: 3,
    title: "Modern Nature",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900",
    price: "₹15,500",
    status: "Draft",
    views: 0,
    likes: 0,
    inquiries: 0,
  },
  {
    id: 4,
    title: "Abstract Vision",
    image:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=900",
    price: "₹27,500",
    status: "Published",
    views: 2670,
    likes: 350,
    inquiries: 45,
  },
  {
    id: 5,
    title: "Urban Dreams",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=900",
    price: "₹19,000",
    status: "Sold",
    views: 4820,
    likes: 520,
    inquiries: 81,
  },
  {
    id: 6,
    title: "Sunset Bliss",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=900",
    price: "₹22,000",
    status: "Rejected",
    views: 220,
    likes: 12,
    inquiries: 1,
  },
];

const filters = [
  "All",
  "Published",
  "Pending",
  "Draft",
  "Rejected",
  "Sold",
];

export default function MyArtworksPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filtered = useMemo(() => {
    return artworks.filter((art) => {
      const matchesSearch = art.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesStatus =
        status === "All" || art.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  return (
    <ArtistLayout>
      <main className="min-w-0">

        {/* Header */}

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
            className="flex items-center gap-2 rounded-xl bg-[#D6A354] px-6 py-3 text-white"
          >
            <Plus size={18} />
            Upload Artwork
          </Link>

        </div>

        {/* Stats */}

        <div className="mt-10 grid grid-cols-4 gap-6">

          <StatCard
            title="Total"
            value={artworks.length.toString()}
          />

          <StatCard
            title="Published"
            value="2"
          />

          <StatCard
            title="Pending"
            value="1"
          />

          <StatCard
            title="Sold"
            value="1"
          />

        </div>

        {/* Search + Filter */}

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
              placeholder="Search artworks..."
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

        {/* Artwork Grid starts here */}

        <div className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

  {filtered.map((artwork) => (

    <div
      key={artwork.id}
      className="overflow-hidden rounded-3xl border border-[#ECE6DB] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >

      {/* IMAGE */}

      <div className="relative">

        <img
          src={artwork.image}
          alt={artwork.title}
          className="h-72 w-full object-cover"
        />

        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-medium text-white
          ${
            artwork.status === "Published"
              ? "bg-green-600"
              : artwork.status === "Pending"
              ? "bg-yellow-500"
              : artwork.status === "Draft"
              ? "bg-gray-500"
              : artwork.status === "Rejected"
              ? "bg-red-500"
              : "bg-blue-600"
          }`}
        >
          {artwork.status}
        </span>

      </div>

      {/* BODY */}

      <div className="p-5">

        <div className="flex items-start justify-between">

          <div>

            <h2 className="text-xl font-semibold">
              {artwork.title}
            </h2>

            <p className="mt-1 text-lg font-bold text-[#D6A354]">
              {artwork.price}
            </p>

          </div>

        </div>

        {/* Analytics */}

        <div className="mt-6 grid grid-cols-3 gap-4 rounded-2xl bg-[#FAF8F4] p-4">

          <div className="text-center">

            <Eye
              size={18}
              className="mx-auto text-gray-500"
            />

            <p className="mt-2 text-sm font-semibold">
              {artwork.views}
            </p>

            <p className="text-xs text-gray-500">
              Views
            </p>

          </div>

          <div className="text-center">

            <Heart
              size={18}
              className="mx-auto text-red-500"
            />

            <p className="mt-2 text-sm font-semibold">
              {artwork.likes}
            </p>

            <p className="text-xs text-gray-500">
              Saves
            </p>

          </div>

          <div className="text-center">

            <MessageCircle
              size={18}
              className="mx-auto text-blue-500"
            />

            <p className="mt-2 text-sm font-semibold">
              {artwork.inquiries}
            </p>

            <p className="text-xs text-gray-500">
              Inquiries
            </p>

          </div>

        </div>

        {/* Actions */}

        <div className="mt-6 grid grid-cols-3 gap-3">

          <button className="flex items-center justify-center gap-2 rounded-xl border border-[#ECE6DB] py-3 transition hover:bg-[#FAF8F4]">

            <Pencil size={18} />

            Edit

          </button>

          <button className="flex items-center justify-center gap-2 rounded-xl border border-[#ECE6DB] py-3 transition hover:bg-[#FAF8F4]">

            <Copy size={18} />

            Copy

          </button>

          <button className="flex items-center justify-center gap-2 rounded-xl border border-red-200 py-3 text-red-600 transition hover:bg-red-50">

            <Trash2 size={18} />

            Delete

          </button>

        </div>

      </div>

    </div>

  ))}

</div>

      </main>
    </ArtistLayout>
);
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl border border-[#ECE6DB] bg-white p-6 shadow-sm">

      <p className="text-gray-500">
        {title}
      </p>

      <h2 className="mt-3 text-4xl font-bold text-[#1B1B1B]">
        {value}
      </h2>

    </div>
  );
}