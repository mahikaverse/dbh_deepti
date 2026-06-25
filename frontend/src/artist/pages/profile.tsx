import {
  Camera,
  Edit3,
 
  Globe,
  Mail,
  Phone,
  MapPin,
  Award,
  Brush,
  Image,
  Users,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import ArtistLayout from "../layout/ArtistLayout";

export default function ArtistProfilePage() {
  return (
    <ArtistLayout>
      <main className="min-w-0">

        {/* COVER */}

        <div className="relative overflow-hidden rounded-[32px] bg-white shadow-sm">

          <img
            src="https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=1600"
            className="h-72 w-full object-cover"
          />

          <button className="absolute right-6 top-6 rounded-xl bg-white p-3 shadow">

            <Camera size={20} />

          </button>

        </div>

        {/* PROFILE */}

        <div className="-mt-20 px-8">

          <div className="flex items-end justify-between">

            <div className="flex items-end gap-6">

              <div className="relative">

                <img
                  src="https://i.pravatar.cc/300"
                  className="h-40 w-40 rounded-full border-8 border-white object-cover"
                />

                <button className="absolute bottom-2 right-2 rounded-full bg-[#D6A354] p-2 text-white">

                  <Camera size={18} />

                </button>

              </div>

              <div className="pb-3">

                <h1 className="text-4xl font-serif">
                  Priya Sharma
                </h1>

                <p className="mt-2 text-gray-500">
                  Landscape & Nature Artist
                </p>

                <div className="mt-3 flex items-center gap-2 text-[#D6A354]">

                  <Award size={18} />

                  Verified Artist

                </div>

              </div>

            </div>

            <button className="rounded-xl bg-[#D6A354] px-6 py-3 text-white">

              <Edit3 size={18} className="inline mr-2" />

              Edit Profile

            </button>

          </div>

          {/* STATS */}

          <div className="mt-10 grid grid-cols-4 gap-6">

            <StatCard
              title="Artworks"
              value="24"
              icon={<Image size={22} />}
            />

            <StatCard
              title="Followers"
              value="826"
              icon={<Users size={22} />}
            />

            <StatCard
              title="Collections"
              value="12"
              icon={<Brush size={22} />}
            />

            <StatCard
              title="Awards"
              value="8"
              icon={<Award size={22} />}
            />

          </div>

          {/* BIO */}

          <div className="mt-10 rounded-[30px] bg-white p-8 shadow-sm">

            <h2 className="text-2xl font-semibold">
              About Me
            </h2>

            <p className="mt-5 leading-8 text-gray-600">

              Passionate landscape artist inspired by
              nature, mountains, rivers and Indian culture.
              My artworks blend realism with contemporary
              aesthetics to evoke peace and emotion.

            </p>

          </div>

          {/* CONTACT */}

          <div className="mt-10 grid gap-6 lg:grid-cols-2">

            <div className="rounded-[30px] bg-white p-8 shadow-sm">

              <h2 className="text-2xl font-semibold">

                Contact

              </h2>

              <div className="mt-6 space-y-5">

                <InfoRow
                  icon={<Mail size={18} />}
                  value="priya@gmail.com"
                />

                <InfoRow
                  icon={<Phone size={18} />}
                  value="+91 9876543210"
                />

                <InfoRow
                  icon={<MapPin size={18} />}
                  value="Mumbai, India"
                />

              </div>

            </div>

            {/* SOCIAL */}

            <div className="rounded-[30px] bg-white p-8 shadow-sm">

              <h2 className="text-2xl font-semibold">

                Social Links

              </h2>

              <div className="mt-6 space-y-5">

                <InfoRow
                  icon={<FaInstagram size={18} />}
                  value="@priyaarts"
                />

                <InfoRow
                  icon={<Globe size={18} />}
                  value="www.priyaart.com"
                />

              </div>

            </div>

          </div>

        </div>

      </main>
    </ArtistLayout>
  );
}

function StatCard({
  title,
  value,
  icon,
}: any) {
  return (
    <div className="rounded-[28px] bg-white p-6 shadow-sm">

      <div className="flex justify-between">

        <div>

          <p className="text-gray-500">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            {value}
          </h2>

        </div>

        <div className="rounded-2xl bg-[#FAF8F4] p-4">

          {icon}

        </div>

      </div>

    </div>
  );
}

function InfoRow({
  icon,
  value,
}: any) {
  return (
    <div className="flex items-center gap-4">

      <div className="rounded-xl bg-[#FAF8F4] p-3">

        {icon}

      </div>

      <span>{value}</span>

    </div>
  );
}