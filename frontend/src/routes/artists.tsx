import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import AppHeader from "../components/layout/AppHeader";
import Footer from "../components/layout/Footer";

import { getArtists } from "../api/artist.api";

export default function ArtistsPage() {
  const [artists, setArtists] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  useEffect(() => {
    loadArtists();
  }, []);

  const loadArtists = async () => {
    try {
      const data = await getArtists();

      console.log(data);

      setArtists(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const filteredArtists = useMemo(() => {
    return artists.filter((artist) =>
      artist.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [artists, search]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center text-lg">
        Loading Artists...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5]">

      <AppHeader />

      <main className="mx-auto max-w-7xl px-6 py-10">

        {/* HERO */}

        <section className="overflow-hidden rounded-[32px] border border-[#ECE6DB] bg-white shadow-sm">

          <div className="grid lg:grid-cols-2">

            <div className="flex flex-col justify-center p-10">

              <span className="text-sm text-[#C8A35C]">
                Deepti Art
              </span>

              <h1 className="mt-4 font-serif text-5xl leading-tight text-[#1B1B1B] lg:text-6xl">
                Meet Our
                <br />
                Talented Artists
              </h1>

              <p className="mt-5 max-w-md text-gray-500">
                Discover verified artists approved by Deepti Art and explore original handmade artworks.
              </p>

            </div>

            <img
              src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1600"
              alt="Artists"
              className="h-[320px] w-full object-cover"
            />

          </div>

          <div className="px-8 pb-8">

            <div className="flex gap-4">

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search artists..."
                className="h-12 flex-1 rounded-xl border border-[#ECE6DB] px-4 outline-none"
              />

              <select
                disabled
                className="w-56 cursor-not-allowed rounded-xl border border-[#ECE6DB] bg-gray-100 px-4 outline-none"
              >
                <option>
                  Categories (Coming Soon)
                </option>
              </select>

            </div>

          </div>

        </section>
        {/* Featured Artists */}

        <section className="mt-10">

          <div className="mb-6 flex items-center justify-between">

            <h2 className="font-serif text-3xl">
              Featured Artists
            </h2>

            <p className="text-gray-500">
              {filteredArtists.length} Artists
            </p>

          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {filteredArtists.slice(0, 4).map((artist) => (

              <Link
                key={artist.id}
                to={`/artist/${artist.id}`}
                className="group"
              >

                <div className="rounded-2xl border border-[#ECE6DB] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                  <div className="flex items-center gap-3">

                    <img
                      src={
                        artist.artistProfile?.profileImage ||
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          artist.name
                        )}`
                      }
                      alt={artist.name}
                      className="h-14 w-14 rounded-full object-cover"
                    />

                    <div>

                      <h3 className="font-semibold">
                        {artist.name}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {artist.artistProfile?.bio || "Artist"}
                      </p>

                      <p className="mt-1 text-xs text-gray-400">
                        {artist.artworks.length} Artworks
                      </p>

                    </div>

                  </div>

                  <div className="mt-5 rounded-xl border border-[#ECE6DB] py-2 text-center text-sm transition group-hover:bg-[#D6A354] group-hover:text-white">

                    View Profile

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </section>
               {/* Featured Artists */}

        <section className="mt-10">

          <div className="mb-6 flex items-center justify-between">

            <h2 className="font-serif text-3xl">
              Featured Artists
            </h2>

            <p className="text-gray-500">
              {filteredArtists.length} Artists
            </p>

          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {filteredArtists.slice(0, 4).map((artist) => (

              <Link
                key={artist.id}
                to={`/artist/${artist.id}`}
                className="group"
              >

                <div className="rounded-2xl border border-[#ECE6DB] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                  <div className="flex items-center gap-3">

                    <img
                      src={
                        artist.artistProfile?.profileImage ||
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          artist.name
                        )}`
                      }
                      alt={artist.name}
                      className="h-14 w-14 rounded-full object-cover"
                    />

                    <div>

                      <h3 className="font-semibold">
                        {artist.name}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {artist.artistProfile?.bio || "Artist"}
                      </p>

                      <p className="mt-1 text-xs text-gray-400">
                        {artist.artworks.length} Artworks
                      </p>

                    </div>

                  </div>

                  <div className="mt-5 rounded-xl border border-[#ECE6DB] py-2 text-center text-sm transition group-hover:bg-[#D6A354] group-hover:text-white">

                    View Profile

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </section>
              </main>

      <Footer />

    </div>
  );
}