import AppHeader from "../components/layout/AppHeader";
import SearchBar from "../components/common/SearchBar";
import Footer from "../components/layout/Footer";
import ArtworkCard from "../components/artwork/ArtworkCard";

import { useEffect, useMemo, useState } from "react";

import { getExploreArtworks } from "../api/artwork.api";

const categories = [
  "All",
  "SPIRITUAL",
  "NATURE",
  "PORTRAIT",
  "ABSTRACT",
  "LANDSCAPE",
  "SKETCH",
  "HERITAGE",
  "MODERN",
  "OTHER",
];

export default function ExplorePage() {
  const [artworks, setArtworks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  useEffect(() => {
    loadArtworks();
  }, []);

  const loadArtworks = async () => {
    try {
      const data = await getExploreArtworks();

      console.log(data);

      setArtworks(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const filteredArtworks = useMemo(() => {
    return artworks.filter((artwork) => {
      const matchesSearch =
        artwork.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        artwork.artist.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        artwork.category === selectedCategory;

      return (
        matchesSearch &&
        matchesCategory
      );
    });
  }, [
    artworks,
    search,
    selectedCategory,
  ]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F4]">
      <AppHeader />

      <main className="mx-auto max-w-[1600px] px-6 py-10">

        <h1 className="mb-8 font-serif text-4xl text-[#1B1B1B]">
          Explore Arts
        </h1>

        {/* SEARCH */}

        <div className="mb-8">
          <SearchBar
            {...({
              value: search,
              onChange: (e: any) => setSearch(e.target.value),
            } as any)}
          />
        </div>

        {/* CATEGORY FILTERS */}

        <div className="mb-10 flex gap-3 overflow-x-auto pb-2">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setSelectedCategory(
                  category
                )
              }
              className={`whitespace-nowrap rounded-full px-6 py-3 transition-all
              ${
                selectedCategory ===
                category
                  ? "bg-black text-white"
                  : "border border-[#ECE6DB] bg-white"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

        {/* ARTWORK GRID */}

        {filteredArtworks.length === 0 ? (
          <div className="py-20 text-center">

            <h2 className="text-2xl font-semibold">
              No artworks found
            </h2>

            <p className="mt-3 text-gray-500">
              Try changing your search or filter.
            </p>

          </div>
        ) : (
          <div
            className="
            grid
            grid-cols-2
            gap-6
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-4
          "
          >
            {filteredArtworks.map(
              (artwork) => (
                <div
                  key={artwork.id}
                  className="mb-6 break-inside-avoid"
                >
                  <ArtworkCard
  id={artwork.id}
  image={artwork.imageUrl}
  title={artwork.title}
  artist={artwork.artist.name}
 likesCount={
  artwork._count.likes
}

isLiked={
  artwork.likes.length > 0
}

isSaved={
  artwork.wishlists.length > 0
}
/>
                </div>
              )
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}