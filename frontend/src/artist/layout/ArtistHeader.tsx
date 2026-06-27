import {
  Bell,
  Plus,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function ArtistHeader() {
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-40 border-b border-[#ECE6DB] bg-white">

      <div className="flex h-20 items-center justify-between px-8">

        <div>

          <h1 className="font-serif text-3xl">
            Artist Dashboard
          </h1>

          <p className="text-gray-500">
            Welcome back, {user?.name} 👋
          </p>

        </div>

        <div className="flex items-center gap-4">

          <Link
            to="/artist/upload-artwork"
            className="flex items-center gap-2 rounded-xl bg-[#D6A354] px-5 py-3 text-white transition hover:bg-[#C69649]"
          >
            <Plus size={18} />

            Upload Art
          </Link>

          <Link
            to="/notifications"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ECE6DB] transition hover:bg-[#FAF8F4]"
          >
            <Bell size={18} />
          </Link>

          <Link to="/profile">

            <img
              src={
                user?.avatar ||
                `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  user?.name || "Artist"
                )}&background=D6A354&color=ffffff&size=256`
              }
              alt={user?.name}
              className="h-11 w-11 rounded-full border-2 border-[#ECE6DB] object-cover transition hover:scale-105"
            />

          </Link>

        </div>

      </div>

    </header>
  );
}