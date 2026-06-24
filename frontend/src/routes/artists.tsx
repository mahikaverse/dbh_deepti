import AppHeader from "../components/layout/AppHeader";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";

const featuredArtists = [
  {
    id: 1,
    name: "Priya Sharma",
    speciality: "Watercolor Artist",
    artworks: 32,
    image: "https://i.pravatar.cc/300?img=1",
  },
  {
    id: 2,
    name: "Arjun Verma",
    speciality: "Abstract Artist",
    artworks: 28,
    image: "https://i.pravatar.cc/300?img=8",
  },
  {
    id: 3,
    name: "Neha Kapoor",
    speciality: "Acrylic Artist",
    artworks: 24,
    image: "https://i.pravatar.cc/300?img=5",
  },
  {
    id: 4,
    name: "Rohan Das",
    speciality: "Sculptor",
    artworks: 18,
    image: "https://i.pravatar.cc/300?img=11",
  },
];

const allArtists = [
  {
    id: 1,
    name: "Priya Sharma",
    speciality: "Watercolor Artist",
    artworks: 32,
    followers: "1.2K",
    image: "https://i.pravatar.cc/300?img=1",
    cover:
      "https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=1200",
  },
  {
    id: 2,
    name: "Arjun Verma",
    speciality: "Abstract Artist",
    artworks: 28,
    followers: "950",
    image: "https://i.pravatar.cc/300?img=8",
    cover:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1200",
  },
  {
    id: 3,
    name: "Neha Kapoor",
    speciality: "Nature Artist",
    artworks: 24,
    followers: "870",
    image: "https://i.pravatar.cc/300?img=5",
    cover:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
  },
  {
    id: 4,
    name: "Rohan Das",
    speciality: "Sculptor",
    artworks: 18,
    followers: "650",
    image: "https://i.pravatar.cc/300?img=11",
    cover:
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=1200",
  },
  {
    id: 5,
    name: "Kavya Nair",
    speciality: "Digital Artist",
    artworks: 26,
    followers: "1.5K",
    image: "https://i.pravatar.cc/300?img=9",
    cover:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1200",
  },
  {
    id: 6,
    name: "Meera Iyer",
    speciality: "Modern Artist",
    artworks: 20,
    followers: "720",
    image: "https://i.pravatar.cc/300?img=10",
    cover:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200",
  },
  {
    id: 7,
    name: "Aisha Khan",
    speciality: "Portrait Artist",
    artworks: 40,
    followers: "2K",
    image: "https://i.pravatar.cc/300?img=15",
    cover:
      "https://images.unsplash.com/photo-1529429617124-aee711a5ac1c?w=1200",
  },
  {
    id: 8,
    name: "Rahul Joshi",
    speciality: "Landscape Artist",
    artworks: 29,
    followers: "900",
    image: "https://i.pravatar.cc/300?img=13",
    cover:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200",
  },
];

export default function ArtistsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <AppHeader />

      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* HERO SECTION */}

        <section className="bg-white border border-[#ece4d7] rounded-[32px] overflow-hidden shadow-sm">

          <div className="grid lg:grid-cols-2">

            <div className="p-10 flex flex-col justify-center">

              <span className="text-[#c8a35c] text-sm">
                Deepti Art
              </span>

              <h1 className="mt-4 font-serif text-5xl lg:text-6xl leading-tight text-[#1b1b1b]">
                Meet Our
                <br />
                Talented Artists
              </h1>

              <p className="mt-5 text-gray-500 max-w-md">
                Discover creators from around the world
                and connect with their art.
              </p>

            </div>

            <img
              src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1600"
              alt=""
              className="h-[320px] w-full object-cover"
            />

          </div>

          {/* SEARCH */}

          <div className="px-8 pb-8">

            <div className="flex gap-4">

              <input
                placeholder="Search artists..."
                className="flex-1 h-12 rounded-xl border border-[#e7dfd3] px-4 outline-none"
              />

              <select className="w-56 rounded-xl border border-[#e7dfd3] px-4 outline-none">
                <option>All Categories</option>
                <option>Painting</option>
                <option>Abstract</option>
                <option>Digital Art</option>
                <option>Nature</option>
              </select>

            </div>

          </div>

        </section>

        {/* FEATURED ARTISTS */}

        <section className="mt-8">

          <div className="grid lg:grid-cols-4 gap-5">

            {featuredArtists.map((artist) => (
              <div
                key={artist.id}
                className="bg-white border border-[#ece4d7] rounded-2xl p-5"
              >
                <div className="flex items-center gap-3">

                  <img
                    src={artist.image}
                    alt=""
                    className="h-14 w-14 rounded-full object-cover"
                  />

                  <div>

                    <h3 className="font-semibold text-sm">
                      {artist.name}
                    </h3>

                    <p className="text-xs text-gray-500">
                      {artist.speciality}
                    </p>

                    <p className="text-xs text-gray-400">
                      {artist.artworks} Artworks
                    </p>

                  </div>

                </div>

                <button className="mt-4 w-full rounded-xl border border-[#e7dfd3] py-2 text-sm hover:bg-[#d6a354] hover:text-white transition">
                  Follow
                </button>

              </div>
            ))}

          </div>

        </section>

       {/* ALL ARTISTS */}

<section className="mt-14">

  <div className="mb-8 flex items-center justify-between">

    <h2 className="text-3xl font-serif">
      All Artists
    </h2>

    <button className="text-gray-500 hover:text-[#D6A354] transition">
      View All →
    </button>

  </div>

  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

    {allArtists.map((artist) => (
      <Link
        key={artist.id}
        to={`/artist/${artist.id}`}
        className="block group"
      >

        <div className="overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

          {/* Cover */}

          <div className="overflow-hidden">

            <img
              src={artist.cover}
              alt={artist.name}
              className="h-40 w-full object-cover transition duration-500 group-hover:scale-105"
            />

          </div>

          {/* Content */}

          <div className="p-5">

            <div className="flex items-center gap-3">

              <img
                src={artist.image}
                alt={artist.name}
                className="h-12 w-12 rounded-full border-2 border-white object-cover shadow-sm"
              />

              <div>

                <h3 className="font-semibold text-[#1B1B1B]">
                  {artist.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {artist.speciality}
                </p>

              </div>

            </div>

            {/* Stats */}

            <div className="mt-5 flex justify-between">

              <div>

                <p className="font-semibold text-[#1B1B1B]">
                  {artist.artworks}
                </p>

                <p className="text-xs text-gray-500">
                  Artworks
                </p>

              </div>

              <div>

                <p className="font-semibold text-[#1B1B1B]">
                  {artist.followers}
                </p>

                <p className="text-xs text-gray-500">
                  Followers
                </p>

              </div>

            </div>

            {/* Button */}

            <button
              className="mt-5 w-full rounded-xl bg-[#D6A354] py-3 text-white pointer-events-none"
            >
              View Profile
            </button>

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