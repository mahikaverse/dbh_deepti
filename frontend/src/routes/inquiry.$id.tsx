import { useParams } from "react-router-dom";
import AppHeader from "../components/layout/AppHeader";
import Footer from "../components/layout/Footer";

export default function InquiryPage() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-[#FAF8F4]">

      <AppHeader />

      <main className="max-w-6xl mx-auto px-6 py-10">

        <h1 className="font-serif text-5xl text-[#1B1B1B] mb-8">
          Express Interest
        </h1>

        <div className="grid lg:grid-cols-[350px_1fr] gap-3">

          {/* Artwork Preview */}

          <div className="bg-white rounded-3xl border border-[#ECE6DB] p-4">

            <img
              src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1000"
              alt=""
              className="h-72 w-full rounded-2xl object-cover"
            />

            <h2 className="mt-4 text-xl font-semibold">
              Sunset Over Silence
            </h2>

            <p className="text-gray-500">
              by Priya Sharma
            </p>

            <p className="mt-3 text-2xl font-bold">
              ₹24,000
            </p>

          </div>

          {/* Form */}

          <div className="bg-white rounded-3xl border border-[#ECE6DB] p-8">

            <h2 className="text-2xl font-semibold mb-6">
              Inquiry Details
            </h2>

            <form className="space-y-5">

              <div>
                <label className="block mb-2 font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-[#ECE6DB] p-4 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full rounded-xl border border-[#ECE6DB] p-4 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full rounded-xl border border-[#ECE6DB] p-4 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  City
                </label>

                <input
                  type="text"
                  placeholder="Mumbai"
                  className="w-full rounded-xl border border-[#ECE6DB] p-4 outline-none"
                />
              </div>

               <div>

                <label className="block mb-2 font-medium">
                  Budget Range
                </label>

                <select className="w-full rounded-xl border border-[#ECE6DB] px-4 py-3 outline-none">

                  <option>Select Budget</option>
                  <option>₹10,000 - ₹25,000</option>
                  <option>₹25,000 - ₹50,000</option>
                  <option>₹50,000 - ₹1,00,000</option>
                  <option>Above ₹1,00,000</option>

                </select>

              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Tell us about your interest in this artwork..."
                  className="w-full rounded-xl border border-[#ECE6DB] p-4 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#D6A354] py-4 font-semibold text-white hover:bg-[#C69649]"
              >
                Submit Inquiry
              </button>

            </form>

          </div>

        </div>

      </main>

      <Footer />

    </div>
  );
}