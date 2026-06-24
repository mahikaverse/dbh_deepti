import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

import AppHeader from "../components/layout/AppHeader";
import Footer from "../components/layout/Footer";

const featuredArtworks = [
  {
    id: 1,
    title: "Ethereal Dreams",
    artist: "Arjun Verma",
    price: "₹18,500",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800",
  },
  {
    id: 2,
    title: "Lotus Serenity",
    artist: "Neha Kapoor",
    price: "₹15,000",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
  },
  {
    id: 3,
    title: "The Thinker",
    artist: "Rohan Das",
    price: "₹32,000",
    image:
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800",
  },
  {
    id: 4,
    title: "Monsoon Streets",
    artist: "Kavya Nair",
    price: "₹20,000",
    image:
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800",
  },
];

const collections = [
  {
    title: "Nature Collection",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
  },
  {
    title: "Spiritual Collection",
    image:
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=1200",
  },
  {
    title: "Modern Collection",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200",
  },
];

export default function HomePage() {
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

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-serif font-semibold">
            Featured Artworks
          </h2>

          <Link
            to="/explore"
            className="text-neutral-500"
          >
            View All →
          </Link>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {featuredArtworks.map((art) => (
            <Link
              key={art.id}
              to={`/artwork/${art.id}`}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition">

                <div className="relative">

                  <img
                    src={art.image}
                    alt={art.title}
                    className="h-72 w-full object-cover"
                  />

                  <button className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow">

                    <Heart size={18} />

                  </button>

                </div>

                <div className="p-5">

                  <h3 className="font-semibold">
                    {art.title}
                  </h3>

                  <Link
                        to="/artist/1"
                        onClick={(e) => e.stopPropagation()}
                        className="text-sm text-[#D6A354] hover:underline"
                        >
                        by {art.artist}
                    </Link>

                  <p className="mt-3 font-semibold">
                    {art.price}
                  </p>

                </div>

              </div>
            </Link>
          ))}

        </div>

      </section>

      {/* COLLECTIONS */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-serif font-semibold mb-8">
          Curated Collections
        </h2>

        <div className="grid lg:grid-cols-3 gap-6">

          {collections.map((collection) => (
            <div
              key={collection.title}
              className="relative overflow-hidden rounded-3xl"
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="h-72 w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30 flex items-end p-6">

                <h3 className="text-white text-2xl font-serif">
                  {collection.title}
                </h3>

              </div>

            </div>
          ))}

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