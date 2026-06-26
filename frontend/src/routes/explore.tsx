import AppHeader from "../components/layout/AppHeader";
import SearchBar from "../components/common/SearchBar";
import Footer from "../components/layout/Footer";
import ArtworkCard from "../components/artwork/ArtworkCard";
import { useEffect, useState } from "react";
import { getExploreArtworks } from "../api/artwork.api";
const categories = [
  "All",
  "Paintings",
  "Digital Art",
  "Spiritual",
  "Nature",
  "Photography",
  "Abstract",
];
export default function ExplorePage() {
const [artworks, setArtworks] = useState<any[]>([]);
const [loading, setLoading] = useState(true);

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

      <main className="max-w-[1600px] mx-auto px-6 py-10">
        {/* <h1 className="mb-8 text-4xl font-serif  text-[#1B1B1B]">
          Explore Arts
        </h1> */}
         <h1 className="font-serif mb-8  text-4xl text-[#1B1B1B]">
            Explore Arts
            </h1>

        <SearchBar />

        <div className="mb-10 flex gap-3 overflow-x-auto pb-2">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`rounded-full px-6 py-3 whitespace-nowrap transition-all
                ${
                  index === 0
                    ? "bg-black text-white"
                    : "bg-white border border-[#ECE6DB]"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Pinterest Layout */}

<div className="
  grid
  grid-cols-2
  md:grid-cols-3
  lg:grid-cols-4
  xl:grid-cols-4
  gap-6
">

  {artworks.map((artwork) => (
    <div
      key={artwork.id}
      className="break-inside-avoid mb-6"
    >
      <ArtworkCard
  id={artwork.id}
  image={artwork.imageUrl}
  title={artwork.title}
  artist={artwork.artist.name}
  price={artwork.price}
/>
    </div>
  ))}

</div>
      </main>

      <Footer />
    </div>
  );
}