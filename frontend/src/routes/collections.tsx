import AppHeader from "../components/layout/AppHeader";
import Footer from "../components/layout/Footer";

const collections = [
  {
    title: "Nature's Beauty",
    artworks: 34,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
  },
  {
    title: "Abstract Expressions",
    artworks: 18,
    image:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1200",
  },
  {
    title: "Modern Minimalism",
    artworks: 16,
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200",
  },
  {
    title: "Indian Heritage",
    artworks: 22,
    image:
      "https://images.unsplash.com/photo-1524492449090-1abe1e3b0e68?w=1200",
  },
  {
    title: "Monochrome Magic",
    artworks: 14,
    image:
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=1200",
  },
  {
    title: "Ocean Tales",
    artworks: 20,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
  },
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">

      <AppHeader />

      <section className="max-w-7xl mx-auto px-6 py-10">

        {/* HERO */}

        <div className="bg-white border border-[#ece4d7] rounded-[32px] p-8 lg:p-10 shadow-sm">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT */}

            <div>

              <span className="text-[#c8a35c] text-sm">
                Deepti Art
              </span>

              <h1 className="mt-4 font-serif text-5xl leading-tight text-[#1b1b1b]">
                Curated Collections
                <br />
                Handpicked for You
              </h1>

              <p className="mt-5 max-w-md text-gray-500">
                Explore beautiful collections curated
                by our team of art enthusiasts.
              </p>

            </div>

            {/* RIGHT FEATURED COLLECTION */}

            <div className="flex justify-end">

              <div className="overflow-hidden rounded-2xl border-4 border-[#d6a354] shadow-xl">

                <img
                  src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200"
                  alt=""
                  className="h-[220px] w-[360px] object-cover"
                />

              </div>

            </div>

          </div>

          {/* COLLECTION CARDS */}

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">

            {collections.map((collection) => (
              <div
                key={collection.title}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
              >
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="h-40 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/35" />

                <div className="absolute bottom-4 left-4 text-white">

                  <h3 className="font-semibold text-lg">
                    {collection.title}
                  </h3>

                  <p className="text-sm opacity-90">
                    {collection.artworks} Artworks
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}