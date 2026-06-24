import AppHeader from "../components/layout/AppHeader";
import SearchBar from "../components/common/SearchBar";
import Footer from "../components/layout/Footer";
import ArtworkCard from "../components/artwork/ArtworkCard";

const artworks = [
  {
    id: 1,
    title: "Sunset Over Silence",
    artist: "Priya Sharma",
    price: "₹24,000",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600",
  },
  {
    id: 2,
    title: "Ethereal Dreams",
    artist: "Arjun Verma",
    price: "₹18,500",
    image:
      "https://images.unsplash.com/photo-1578301979108-0d3f2fd9bdf5?w=600",
  },
  {
    id: 3,
    title: "Lotus Serenity",
    artist: "Neha Kapoor",
    price: "₹15,000",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600",
  },
  {
    id: 4,
    title: "Golden Horizon",
    artist: "Meera Iyer",
    price: "₹23,000",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600",
  },
  {
    id: 5,
    title: "Nature Calm",
    artist: "Rohan Das",
    price: "₹19,000",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
  },
  {
    id: 6,
    title: "Abstract Vision",
    artist: "Kavya Nair",
    price: "₹16,500",
    image:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=600",
  },
  {
    id: 7,
    title: "Modern Gallery",
    artist: "Aryan Shah",
    price: "₹21,000",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600",
  },
  {
    id: 8,
    title: "Urban Dreams",
    artist: "Aditi Rao",
    price: "₹20,000",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600",
  },
];

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
  image={artwork.image}
  title={artwork.title}
  artist={artwork.artist}
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