import { Heart, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

import { useAuth } from "../../context/AuthContext";
import { useArtistStatus } from "../../hooks/useArtistStatus";

export default function AppHeader() {
const { user } = useAuth();

const {
  artistStatus,
  loading,
} = useArtistStatus();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-[#f0ece5] shadow-sm">
      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <img
              src={logo}
              alt="Deepti Art"
              className="h-11 w-11 object-contain"
            />

            <div>
              <h1 className="text-[20px] font-serif font-semibold text-[#1d1d1d] leading-none">
                Deepti Art
              </h1>

               
            </div>
          </Link>

          {/* Navigation */}

          <nav className="hidden md:flex items-center gap-10">

  <Link
    to="/explore"
    className="text-[15px] font-medium text-neutral-700 hover:text-black transition"
  >
    Explore
  </Link>

  <Link
    to="/artists"
    className="text-[15px] font-medium text-neutral-700 hover:text-black transition"
  >
    Artists
  </Link>

  <Link
    to="/collections"
    className="text-[15px] font-medium text-neutral-700 hover:text-black transition"
  >
    Collections
  </Link>

  <Link
    to="/inquiries"
    className="text-[15px] font-medium text-neutral-700 hover:text-black transition"
  >
    Inquiries
  </Link>

  {!loading && user?.role === "USER" && !artistStatus?.hasProfile && (
    <Link
      to="/become-artist"
      className="rounded-full bg-[#D6A354] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#C69649]"
    >
      Become Artist
    </Link>
  )}

  {!loading && artistStatus?.status === "PENDING" && (
    <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
      Under Review
    </span>
  )}

  {user?.role === "ARTIST" && (
    <Link
      to="/artist/dashboard"
      className="rounded-full bg-[#08233F] px-4 py-2 text-sm font-medium text-white"
    >
      Artist Dashboard
    </Link>
  )}

  {user?.role === "ADMIN" && (
    <Link
      to="/admin/dashboard"
      className="rounded-full bg-[#08233F] px-4 py-2 text-sm font-medium text-white"
    >
      Admin Dashboard
    </Link>
  )}

</nav>
          {/* Right Actions */}

          {/* Right Actions */}

<div className="flex items-center gap-5">

  {user ? (
    <>
      <Link
        to="/wishlist"
        className="transition hover:scale-110"
      >
        <Heart size={20} />
      </Link>

      <Link
        to="/notifications"
        className="transition hover:scale-110"
      >
        <Bell
          size={20}
          className="text-neutral-700"
        />
      </Link>

      <Link to="/profile">
        <img
          src="https://i.pravatar.cc/100"
          alt="Profile"
          className="h-10 w-10 rounded-full cursor-pointer"
        />
      </Link>
    </>
  ) : (
    <>
      <Link
        to="/login"
        className="text-sm font-medium text-neutral-700 hover:text-black"
      >
        Login
      </Link>

      <Link
        to="/register"
        className="rounded-full bg-[#D6A354] px-5 py-2 text-sm font-medium text-white hover:bg-[#C69649]"
      >
        Register
      </Link>
    </>
  )}

</div>

        </div>

      </div>
    </header>
  );
}