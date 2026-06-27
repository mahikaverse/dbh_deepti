 import {
  Bell,
  Search,
  ChevronDown,
  User,
  Settings,
  LogOut,
  Shield,
} from "lucide-react";

import {
  useState,
  useRef,
  useEffect,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

export default function AdminHeader() {
  const { user, logout } =
    useAuth();

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
    <header className="fixed left-0 right-0 top-0 z-30 h-24 border-b border-[#ECE6DB] bg-white/95 backdrop-blur md:left-[280px]">

      <div className="flex h-full items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">

        {/* SEARCH */}

        <div className="w-full max-w-2xl">

          <div className="flex h-12 items-center gap-3 rounded-xl border border-[#ECE6DB] px-4">

            <Search size={18} />

            <input
              placeholder="Search artworks, artists, users..."
              className="min-w-0 flex-1 bg-transparent outline-none"
            />

          </div>

        </div>

        {/* RIGHT SECTION */}

        <div className="ml-4 flex items-center gap-4">

          {/* NOTIFICATION */}

          <button className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-[#ECE6DB]">

            <Bell size={18} />

            <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-red-500" />

          </button>

          {/* PROFILE */}

          <div
            className="relative"
            ref={dropdownRef}
          >
            <button
              onClick={() =>
                setOpenMenu(!openMenu)
              }
              className="flex items-center gap-3 rounded-xl p-2 hover:bg-[#FAF8F4]"
            >

              <img
                src={
                  user?.avatar ||
                  `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    user?.name || "Admin"
                  )}&background=08233F&color=ffffff&size=256`
                }
                alt={user?.name}
                className="h-12 w-12 rounded-full border-2 border-[#ECE6DB] object-cover"
              />

              <div className="hidden text-left lg:block">

                <p className="font-semibold">
                  {user?.name}
                </p>

                <p className="text-sm text-gray-500">
                  Administrator
                </p>

              </div>

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
              <div className="absolute right-0 mt-3 w-80 overflow-hidden rounded-3xl border border-[#ECE6DB] bg-white shadow-2xl">

                {/* USER CARD */}

                <div className="border-b border-[#ECE6DB] p-5">

                  <div className="flex items-center gap-4">

                    <img
                      src={
                        user?.avatar ||
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          user?.name || "Admin"
                        )}&background=08233F&color=ffffff&size=256`
                      }
                      alt={user?.name}
                      className="h-16 w-16 rounded-full"
                    />

                    <div>

                      <h3 className="font-semibold text-lg">
                        {user?.name}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {user?.email}
                      </p>

                      <p className="mt-1 text-xs text-[#08233F]">
                        System Administrator
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
                  className="flex w-full items-center gap-4 px-5 py-4 hover:bg-[#FAF8F4]"
                >
                  <User size={18} />

                  My Profile
                </button>

                 
                {/* ADMIN PANEL */}

                <button
                  onClick={() => {
                    navigate(
                      "/admin/dashboard"
                    );

                    setOpenMenu(false);
                  }}
                  className="flex w-full items-center gap-4 px-5 py-4 hover:bg-[#FAF8F4]"
                >
                  <Shield size={18} />

                  Admin Dashboard
                </button>

                {/* LOGOUT */}

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

        </div>

      </div>

    </header>
  );
}