import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

import AppHeader from "../components/layout/AppHeader";
import Footer from "../components/layout/Footer";
import ArtworkCard from "../components/artwork/ArtworkCard";

import { getWishlist } from "../api/artwork.api";

export default function WishlistPage() {
  const [savedArtworks, setSavedArtworks] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadWishlist();
  }, []);

  const loadWishlist = async () => {
    try {
      const data = await getWishlist();

      setSavedArtworks(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading Wishlist...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F4]">

      <AppHeader />

      <main className="mx-auto max-w-7xl px-6 py-10">

        <div className="mb-4 flex items-center gap-3">

          <Heart
            size={34}
            className="text-[#D6A354]"
            fill="#D6A354"
          />

          <h1 className="font-serif text-4xl text-[#1B1B1B]">
            Wishlist
          </h1>

        </div>

        <p className="mb-10 text-gray-500">
          Saved artworks from your collection.
        </p>

        {savedArtworks.length === 0 ? (
          <div className="rounded-3xl border border-[#ECE6DB] bg-white p-16 text-center">

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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {savedArtworks.map((item) => (
              <ArtworkCard
  id={item.artwork.id}
  image={item.artwork.imageUrl}
  title={item.artwork.title}
  artist={item.artwork.artist.name}
  likesCount={
    item.artwork._count?.likes || 0
  }
  isLiked={
    item.artwork.likes?.length > 0
  }
  isSaved={true}
/>

            ))}

          </div>
        )}

      </main>

      <Footer />

    </div>
  );
}