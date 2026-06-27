import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArtworkCard from "../components/artwork/ArtworkCard";
import AppHeader from "../components/layout/AppHeader";
import Footer from "../components/layout/Footer";

import { getExploreArtworks } from "../api/artwork.api";


export default function HomePage() {
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
const collections = [
  {
    title: "Nature",
    category: "NATURE",
  },
  {
    title: "Spiritual",
    category: "SPIRITUAL",
  },
  {
    title: "Sketch",
    category: "SKETCH",
  },
];

return (
  <div className="min-h-screen bg-[#FAF8F4]">

      <AppHeader />

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="overflow-hidden rounded-[36px] bg-gradient-to-r from-[#fbf7f0] to-[#f5ede1] border border-[#ECE6DB]">

          <div className="grid lg:grid-cols-2 items-center">

            <div className="p-12 lg:p-16">

              <span className="text-[#C79A3B] text-sm font-medium">
                Discover
              </span>

              <h1 className="mt-4 text-6xl leading-tight font-serif text-[#1B1B1B]">
                Original Artworks
                <br />
                from Talented Artists
              </h1>

              <p className="mt-6 text-lg text-neutral-600 max-w-md">
                A curated marketplace connecting art lovers
                with original handmade masterpieces.
              </p>

              <div className="mt-8 flex gap-4">

                <Link
                  to="/explore"
                  className="px-8 py-4 rounded-xl bg-[#C79A3B] text-white font-medium"
                >
                  Explore Artworks
                </Link>

                <Link
                  to="/artists"
                  className="px-8 py-4 rounded-xl bg-white border border-[#ECE6DB]"
                >
                  Meet Artists
                </Link>

              </div>

            </div>

            <div className="p-10">

              <img
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200"
                alt=""
                className="w-full h-[500px] rounded-3xl object-cover shadow-2xl"
              />

            </div>

          </div>

        </div>

      </section>
      

      {/* FEATURED ARTWORKS */}

<section className="max-w-7xl mx-auto px-6 py-16">

  <div className="mb-8 flex items-center justify-between">
    <h2 className="text-3xl font-serif font-semibold">
      Featured Artworks
    </h2>

    <Link
      to="/explore"
      className="text-neutral-500 hover:text-[#D6A354]"
    >
      View All →
    </Link>
  </div>

  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

    {artworks.slice(0, 4).map((artwork) => (
      <ArtworkCard
        key={artwork.id}
        id={artwork.id}
        image={artwork.imageUrl}
        title={artwork.title}
        artist={artwork.artist.name}
        likesCount={artwork._count.likes}
        isLiked={artwork.likes?.length > 0}
        isSaved={artwork.wishlists?.length > 0}
      />
    ))}

  </div>

</section>

      {/* COLLECTIONS */}

<section className="max-w-7xl mx-auto px-6 py-16">

  <h2 className="mb-8 text-3xl font-serif font-semibold">
    Curated Collections
  </h2>

  <div className="grid gap-6 lg:grid-cols-3">

    {collections.map((collection) => {

      const artwork = artworks.find(
        (art: any) =>
          art.category === collection.category
      );

      return (

        <Link
          key={collection.category}
          to={`/explore?category=${collection.category}`}
        >

          <div className="group relative overflow-hidden rounded-3xl">

            <img
              src={
                artwork?.imageUrl ||
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200"
              }
              alt={collection.title}
              className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 flex items-end bg-black/30 p-6">

              <div>

                <h3 className="font-serif text-2xl text-white">
                  {collection.title}
                </h3>

                <p className="mt-1 text-sm text-white/80">
                  Explore Collection →
                </p>

              </div>

            </div>

          </div>

        </Link>

      );

    })}

  </div>

</section>

      {/* WHY DEEPTI ART */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-serif font-semibold mb-10">
          Why Deepti Art
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-3xl">
            <h3 className="font-semibold">
              Verified Artists
            </h3>

            <p className="text-neutral-500 mt-3">
              Every artist is manually reviewed.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl">
            <h3 className="font-semibold">
              Original Artwork
            </h3>

            <p className="text-neutral-500 mt-3">
              No copied or mass-produced art.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl">
            <h3 className="font-semibold">
              Secure Inquiries
            </h3>

            <p className="text-neutral-500 mt-3">
              Direct connection with artists.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl">
            <h3 className="font-semibold">
              Curated Experience
            </h3>

            <p className="text-neutral-500 mt-3">
              Handpicked collections and artworks.
            </p>
          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}