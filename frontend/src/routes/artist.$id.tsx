import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  CheckCircle,
  Heart,
  MessageCircle,
} from "lucide-react";

import AppHeader from "../components/layout/AppHeader";
import Footer from "../components/layout/Footer";
import ArtworkCard from "../components/artwork/ArtworkCard";

import { getArtist } from "../api/artist.api";

const collections = [
  {
    name: "Nature Collection",
    artworks: 12,
  },
  {
    name: "Spiritual Collection",
    artworks: 8,
  },
  {
    name: "Modern Abstracts",
    artworks: 6,
  },
];

export default function ArtistProfilePage() {
  const { id } = useParams();

const [artist, setArtist] = useState<any>(null);

const [loading, setLoading] = useState(true);

useEffect(() => {
  loadArtist();
}, [id]);

const loadArtist = async () => {
  try {
    const data = await getArtist(id!);

    console.log(data);

    setArtist(data);
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
};

if (loading) {
  return (
    <div className="flex h-screen items-center justify-center">
      Loading Artist...
    </div>
  );
}

if (!artist) {
  return (
    <div className="flex h-screen items-center justify-center">
      Artist not found.
    </div>
  );
}
  return (
    <div className="min-h-screen bg-[#FAF8F4]">
      <AppHeader />

      <main>

        {/* Banner */}

        <div className="relative h-[220px] overflow-hidden">

          <img
           src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1600"            alt=""
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />

        </div>

        {/* Profile Section */}

        <section className="max-w-4xl mx-auto px-6">

          <div className="-mt-20 relative z-10">

            <div className="bg-white rounded-[32px] border border-[#ECE6DB] shadow-sm p-8">

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

                <div className="flex items-center gap-6">

                  <img
                 src={
  artist.artistProfile?.profileImage ||
  `https://ui-avatars.com/api/?name=${encodeURIComponent(
    artist.name
  )}`
}                    alt=""
                    className="h-36 w-36 rounded-full border-4 border-white object-cover shadow-lg"
                  />

                  <div>

                    <div className="flex items-center gap-2">

                      <h1 className="text-4xl font-serif text-[#1B1B1B]">
                        {artist.name}
                      </h1>

                      <CheckCircle
                        size={22}
                        className="text-green-500"
                      />

                    </div>

                    <p className="mt-2 text-gray-500">
                     {artist.artistProfile?.bio || "Artist"}                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <button className="rounded-xl bg-[#D6A354] px-6 py-3 font-medium text-white hover:bg-[#C69649]">
                    Follow Artist
                  </button>

                  <button className="flex items-center gap-2 rounded-xl border border-[#ECE6DB] px-6 py-3">
                    <MessageCircle size={18} />
                    Contact
                  </button>

                </div>

              </div>

              {/* Stats */}

              <div className="grid md:grid-cols-3 gap-5 mt-10">

                <StatCard
                 value={artist.artworks.length}
                  label="Artworks"
                />

                <StatCard
                 value="Coming Soon"
                  label="Followers"
                />

                <StatCard
                  value={collections.length}
                  label="Collections"
                />

              </div>

            </div>

          </div>

        </section>

        {/* About */}

        <section className="max-w-7xl mx-auto px-6 mt-10">

          <div className="bg-white rounded-[32px] border border-[#ECE6DB] p-8">

            <h2 className="text-3xl font-serif mb-5">
              About Artist
            </h2>

            <p className="text-gray-600 leading-8 max-w-4xl">
            {artist.artistProfile?.bio ||
  "No bio added yet."}            </p>

          </div>

        </section>

        {/* Featured Artworks */}

        <section className="max-w-7xl mx-auto px-6 mt-10">

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-3xl font-serif">
              Featured Artworks
            </h2>

            <Link
              to="/explore"
              className="text-[#D6A354]"
            >
              View All →
            </Link>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {artist.artworks.map((artwork: any) => (

  <ArtworkCard
    key={artwork.id}
    id={artwork.id}
    image={artwork.imageUrl}
    title={artwork.title}
    artist={artist.name}
    price={Number(artwork.price)}
  />

))}
{artist.artworks.length === 0 && (
  <div className="col-span-full rounded-3xl border border-[#ECE6DB] bg-white p-12 text-center">
    <h3 className="text-2xl font-semibold">
      No Artworks Yet
    </h3>

    <p className="mt-2 text-gray-500">
      This artist hasn't published any approved artwork yet.
    </p>
  </div>
)}

          </div>

        </section>

        {/* Collections */}

        <section className="max-w-7xl mx-auto px-6 mt-16 mb-16">

          <h2 className="text-3xl font-serif mb-6">
            Collections
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {collections.map((collection) => (
              <div
                key={collection.name}
                className="bg-white rounded-[28px] border border-[#ECE6DB] p-6 hover:shadow-md transition"
              >
                <div className="flex justify-between items-center">

                  <h3 className="text-xl font-semibold">
                    {collection.name}
                  </h3>

                  <Heart size={18} />
                </div>

                <p className="mt-3 text-gray-500">
                  {collection.artworks} Artworks
                </p>

                <button className="mt-6 text-[#D6A354] font-medium">
                  View Collection →
                </button>

              </div>
            ))}

          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}

function StatCard({
  value,
  label,
}: {
  value: string | number;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-[#ECE6DB] bg-[#FCFBF8] p-6 text-center">

      <h3 className="text-3xl font-bold text-[#1B1B1B]">
        {value}
      </h3>

      <p className="mt-2 text-gray-500">
        {label}
      </p>

    </div>
  );
}