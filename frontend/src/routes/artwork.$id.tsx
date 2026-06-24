import {
  Heart,
  Share2,
  CheckCircle,
} from "lucide-react";

import AppHeader from "../components/layout/AppHeader";
import Footer from "../components/layout/Footer";
 
import { Link, useParams } from "react-router-dom";

export default function ArtworkDetailsPage() {
      const { id } = useParams();
  return (
    <div className="min-h-screen bg-[#FAF8F4]">
      <AppHeader />

      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* MAIN CARD */}

        <div className="rounded-[32px] bg-white border border-[#ECE6DB] p-6 shadow-sm">

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">

            {/* IMAGE */}

            <div>

              <div className="overflow-hidden rounded-3xl">

                <img
                  src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200"
                  alt=""
                  className="w-full h-[450px] object-cover"
                />

              </div>

            </div>

            {/* DETAILS */}

            <div>

              <h1 className="font-serif text-4xl text-[#1B1B1B]">
                Sunset Over Silence
              </h1>

              <div className="mt-1 flex items-center gap-2">

            <Link
                to="/artist/1"
                className="text-[#D6A354] hover:underline font-medium"
                >
                Priya Sharma
            </Link>

                <span className="text-[#D6A354]">
                  ●
                </span>

              </div>

               
              <div className="mt-4 flex items-center gap-2 text-green-600">

                <CheckCircle size={18} />

                <span className="font-medium">
                  Available for Inquiry
                </span>

              </div>

              {/* INFO TABLE */}

              <div className="mt-2 space-y-2">

                <DetailRow
                  label="Category"
                  value="Landscape"
                />

                <DetailRow
                  label="Medium"
                  value="Acrylic on Canvas"
                />

                <DetailRow
                  label='Size'
                  value='24" × 36"'
                />

                <DetailRow
                  label="Orientation"
                  value="Horizontal"
                />

                <DetailRow
                  label="Year"
                  value="2024"
                />

                <DetailRow
                  label="Availability"
                  value="Available"
                />

              </div>

              {/* BUTTONS */}

              <div className="mt-4 flex gap-3">

                <button className="flex items-center gap-2 rounded-xl border border-[#ECE6DB] bg-white px-5 py-3 hover:bg-gray-50">
                  <Heart size={18} />
                  Save
                </button>

                <button className="flex items-center gap-2 rounded-xl border border-[#ECE6DB] bg-white px-5 py-3 hover:bg-gray-50">
                  <Share2 size={18} />
                  Share
                </button>

                <Link
                    to={`/inquiry/${id}`}
                    className="flex-1 rounded-xl bg-[#D6A354] py-3 text-center font-medium text-white hover:bg-[#C69649]"
                    >
                    Express Interest
                </Link>

              </div>

            </div>

          </div>

          {/* ABOUT */}

          <div className="mt-10">

            <h2 className="text-2xl font-semibold text-[#1B1B1B]">
              About Artwork
            </h2>

            <p className="mt-3 max-w-4xl text-gray-600 leading-8">
              A serene portrayal of the sunset over calm waters.
              The play of warm and cool tones creates a perfect
              balance of tranquility, elegance and harmony.
            </p>

          </div>

          {/* RELATED */}

          <div className="mt-10">

            <h2 className="mb-5 text-2xl font-semibold">
              You May Also Like
            </h2>

            <div className="grid grid-cols-5 gap-4">

              {[
                "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=1200",
                "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200",
                "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1200",
                "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200",
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
              ].map((img) => (
                <div
                  key={img}
                  className="overflow-hidden rounded-2xl border border-[#ECE6DB]"
                >
                  <img
                    src={img}
                    alt=""
                    className="h-28 w-full object-cover hover:scale-105 transition"
                  />
                </div>
              ))}

            </div>

          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}

function DetailRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="grid grid-cols-2 py-2">
      <span className="text-gray-500">
        {label}
      </span>

      <span className="font-medium text-[#1B1B1B]">
        {value}
      </span>
    </div>
  );
}