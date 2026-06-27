import {
  Bell,
  Search,
  ChevronDown,
  User,
  Settings,
  LogOut,
} from "lucide-react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  useState,
  useRef,
  useEffect,
} from "react";

import { useAuth } from "../../context/AuthContext";

export default function ArtistTopbar() {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const [openMenu, setOpenMenu] =
    useState(false);

  const dropdownRef =
    useRef<HTMLDivElement>(null);

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

  return (
    <header className="fixed left-0 right-0 top-0 z-30 h-20 border-b border-[#ECE6DB] bg-white/95 backdrop-blur md:left-[280px]">

      <div className="flex h-full items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">

        {/* SEARCH */}

        <div className="relative w-full max-w-[420px]">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            placeholder="Search artworks..."
            className="w-full rounded-xl border border-[#ECE6DB] bg-[#FAF8F4] py-3 pl-12 pr-4 outline-none"
          />

        </div>

        {/* RIGHT SECTION */}

        <div className="flex items-center gap-6">

          {/* NOTIFICATION */}

          <Link
            to="/notifications"
            className="relative transition hover:scale-110"
          >
            <Bell size={22} />

            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-red-500" />
          </Link>

          {/* PROFILE DROPDOWN */}

          <div
            className="relative"
            ref={dropdownRef}
          >
            <button
              onClick={() =>
                setOpenMenu(!openMenu)
              }
              className="flex items-center gap-3 rounded-xl p-2 transition hover:bg-[#FAF8F4]"
            >

              <img
                src={
                  user?.avatar ||
                  `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    user?.name || "Artist"
                  )}&background=D6A354&color=ffffff&size=256`
                }
                alt={user?.name}
                className="h-12 w-12 rounded-full border-2 border-[#ECE6DB] object-cover"
              />

               
              <ChevronDown
                size={18}
                className={`text-gray-500 transition duration-300 ${
                  openMenu
                    ? "rotate-180"
                    : ""
                }`}
              />

            </button>

            {/* DROPDOWN */}

            {openMenu && (
              <div className="absolute right-0 mt-3 w-72 overflow-hidden rounded-3xl border border-[#ECE6DB] bg-white shadow-2xl">

                {/* USER CARD */}

                <div className="border-b border-[#ECE6DB] p-5">

                  <div className="flex items-center gap-4">

                    <img
                      src={
                        user?.avatar ||
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          user?.name ||
                            "Artist"
                        )}&background=D6A354&color=ffffff&size=256`
                      }
                      alt={user?.name}
                      className="h-14 w-14 rounded-full border"
                    />

                    <div>

                      <h3 className="font-semibold text-[#1B1B1B]">
                        {user?.name}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {user?.email}
                      </p>

                    </div>

                  </div>

                </div>

                {/* PROFILE */}

                <button
                  onClick={() => {
                    navigate("/profile");
                    setOpenMenu(false);
                  }}
                  className="flex w-full items-center gap-4 px-5 py-4 transition hover:bg-[#FAF8F4]"
                >
                  <User size={18} />

                  My Profile
                </button>

                {/* SETTINGS */}

                <button
                  onClick={() => {
                    navigate("/settings");
                    setOpenMenu(false);
                  }}
                  className="flex w-full items-center gap-4 px-5 py-4 transition hover:bg-[#FAF8F4]"
                >
                  <Settings size={18} />

                  Settings
                </button>

                {/* NOTIFICATIONS */}

                <button
                  onClick={() => {
                    navigate(
                      "/notifications"
                    );

                    setOpenMenu(false);
                  }}
                  className="flex w-full items-center gap-4 px-5 py-4 transition hover:bg-[#FAF8F4]"
                >
                  <Bell size={18} />

                  Notifications
                </button>

                {/* LOGOUT */}

                <button
                  onClick={logout}
                  className="flex w-full items-center gap-4 border-t border-[#ECE6DB] px-5 py-4 text-red-500 transition hover:bg-red-50"
                >
                  <LogOut size={18} />

                  Logout
                </button>

              </div>
            )}

          </div>

        </div>

      </div>

    </header>
  );
}