import { Heart } from "lucide-react";

import AppHeader from "../components/layout/AppHeader";
import Footer from "../components/layout/Footer";
import ArtworkCard from "../components/artwork/ArtworkCard";

const savedArtworks = [
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
    title: "Lotus Serenity",
    artist: "Neha Kapoor",
    price: "₹18,000",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600",
  },
  {
    id: 3,
    title: "Nature Calm",
    artist: "Rohan Das",
    price: "₹22,000",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
  },
];

export default function WishlistPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F4]">

      <AppHeader />

      <main className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex items-center gap-3 mb-4">

          <Heart
            size={34}
            className="text-[#D6A354]"
            fill="#D6A354"
          />

          
          <h1 className="font-serif text-4xl text-[#1B1B1B]">
              Wishlist
            </h1>

        </div>

        <p className="text-gray-500 mb-10">
          Saved artworks from your collection.
        </p>

        {savedArtworks.length === 0 ? (
          <div className="bg-white rounded-3xl border border-[#ECE6DB] p-16 text-center">

            <Heart
              size={60}
              className="mx-auto text-gray-300"
            />

            <h2 className="mt-5 text-2xl font-semibold">
              No Saved Artworks
            </h2>

            <p className="mt-2 text-gray-500">
              Start exploring and save artworks you love.
            </p>

          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {savedArtworks.map((artwork) => (
              <ArtworkCard
                key={artwork.id}
                id={artwork.id}
                image={artwork.image}
                title={artwork.title}
                artist={artwork.artist}
                price={artwork.price}
              />
            ))}

          </div>
        )}

      </main>

      <Footer />

    </div>
  );
}