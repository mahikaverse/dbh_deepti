import {
  Heart,
  Bell,
  ChevronDown,
  User,
  Settings,
  LogOut,
  LayoutDashboard,
} from "lucide-react";

import {
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import logo from "../../assets/logo.png";

import { useAuth } from "../../context/AuthContext";
import { useArtistStatus } from "../../hooks/useArtistStatus";

export default function AppHeader() {
  const {
    user,
    logout,
  } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const [openMenu, setOpenMenu] =
    useState(false);

  const dropdownRef =
    useRef<HTMLDivElement>(null);

  const {
    artistStatus,
    loading,
  } = useArtistStatus();
  

  const avatarUrl =
    user?.avatar ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      user?.name || "User"
    )}&background=D6A354&color=ffffff`;

  useEffect(() => {
    const handleClickOutside = (
      event: MouseEvent
    ) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(
          event.target as Node
        )
      ) {
        setOpenMenu(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const handleLogout = () => {
    setOpenMenu(false);

    logout();

    navigate("/");
  };

  const isActive = (
    path: string
  ) =>
    location.pathname.startsWith(path);

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
              <h1 className="font-serif text-[20px] font-semibold leading-none text-[#1d1d1d]">
                Deepti Art
              </h1>

               
            </div>
          </Link>

          {/* Navigation */}

                    <nav className="hidden items-center gap-10 md:flex">
            <Link
              to="/explore"
              className={`text-[15px] font-medium transition ${
                isActive("/explore")
                  ? "text-[#D6A354]"
                  : "text-neutral-700 hover:text-black"
              }`}
            >
              Explore
            </Link>

            <Link
              to="/artists"
              className={`text-[15px] font-medium transition ${
                isActive("/artists")
                  ? "text-[#D6A354]"
                  : "text-neutral-700 hover:text-black"
              }`}
            >
              Artists
            </Link>

            <Link
              to="/collections"
              className={`text-[15px] font-medium transition ${
                isActive("/collections")
                  ? "text-[#D6A354]"
                  : "text-neutral-700 hover:text-black"
              }`}
            >
              Collections
            </Link>

            <Link
              to="/inquiries"
              className={`text-[15px] font-medium transition ${
                isActive("/inquiries")
                  ? "text-[#D6A354]"
                  : "text-neutral-700 hover:text-black"
              }`}
            >
              Inquiries
            </Link>

            {
  !loading &&
  user?.role === "USER" &&
  artistStatus?.status !== "PENDING" &&
  artistStatus?.status !== "APPROVED" && (
    <Link
      to="/become-artist"
      className="rounded-full bg-[#D6A354] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#C69649]"
    >
      Become Artist
    </Link>
  )
}

            {!loading &&
              artistStatus?.status ===
                "PENDING" && (
                <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
                  Under Review
                </span>
              )}

            {(user?.role === "ARTIST" ||
              artistStatus?.status === "APPROVED") && (
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

      <div
        className="relative"
        ref={dropdownRef}
      >
        <button
          onClick={() =>
            setOpenMenu(!openMenu)
          }
          className="flex items-center gap-3"
        >
          <img
            src={
              user?.avatar ||
              `https://ui-avatars.com/api/?name=${encodeURIComponent(
                user?.name || "User"
              )}&background=D6A354&color=ffffff`
            }
            alt={user.name}
            className="h-11 w-11 rounded-full border-2 border-[#ECE6DB] object-cover"
          />

          <ChevronDown
            size={18}
            className={`transition duration-300 ${
              openMenu
                ? "rotate-180"
                : ""
            }`}
          />
        </button>

        {openMenu && (
          <div className="absolute right-0 mt-4 w-72 overflow-hidden rounded-3xl border border-[#ECE6DB] bg-white shadow-2xl">

            {/* User Card */}

            <div className="border-b border-[#ECE6DB] p-5">

              <div className="flex items-center gap-4">

                <img
                  src={
                    user?.avatar ||
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      user?.name || "User"
                    )}&background=D6A354&color=ffffff`
                  }
                  alt={user.name}
                  className="h-14 w-14 rounded-full"
                />

                <div>

                  <h3 className="font-semibold">
                    {user.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {user.email}
                  </p>

                </div>

              </div>

            </div>

            {/* Profile */}

            <button
              onClick={() => {
                navigate("/profile");
                setOpenMenu(false);
              }}
              className="flex w-full items-center gap-4 px-5 py-4 hover:bg-[#FAF8F4]"
            >
              <User size={18} />
              My Profile
            </button>

            {/* Settings */}

            {user?.role !== "ADMIN" && (
  <button
    onClick={() => {
      navigate("/settings");
      setOpenMenu(false);
    }}
    className="flex w-full items-center gap-4 px-5 py-4 hover:bg-[#FAF8F4]"
  >
    <Settings size={18} />
    Settings
  </button>
)}
            {/* Notifications */}

            <button
              onClick={() => {
                navigate(
                  "/notifications"
                );

                setOpenMenu(false);
              }}
              className="flex w-full items-center gap-4 px-5 py-4 hover:bg-[#FAF8F4]"
            >
              <Bell size={18} />
              Notifications
            </button>

            {/* Logout */}

            <button
              onClick={logout}
              className="flex w-full items-center gap-4 border-t border-[#ECE6DB] px-5 py-4 text-red-500 hover:bg-red-50"
            >
              <LogOut size={18} />
              Logout
            </button>

          </div>
        )}
      </div>
    </>
  ) : (
    <>
      <Link
        to="/login"
        className="text-[15px] font-medium text-neutral-700 hover:text-black transition"
      >
        Login
      </Link>

      <Link
        to="/signup"
        className="rounded-full bg-[#08233F] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#0b2f54]"
      >
        Sign Up
      </Link>
    </>
  )}

        </div>

      </div>
    </div>
    </header>
  );
}