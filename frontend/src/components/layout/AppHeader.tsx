import { Heart, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function AppHeader() {
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

          </nav>

          {/* Right Actions */}

          <div className="flex items-center gap-5">

            <button className="hover:scale-110 transition">
              <Link to="/wishlist">
                <Heart size={20} />
              </Link>
            </button>

            <button className="hover:scale-110 transition">
              <Link to="/notifications">
              <Bell
                size={20}
                className="text-neutral-700"
              />
                </Link>
            </button>

            <Link to="/profile">
                <img
                    src="https://i.pravatar.cc/100"
                    alt=""
                    className="h-10 w-10 rounded-full cursor-pointer"
                />
            </Link>

          </div>

        </div>

      </div>
    </header>
  );
}