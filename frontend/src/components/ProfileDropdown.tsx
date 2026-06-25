import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useArtistStatus } from "../hooks/useArtistStatus";

export default function ProfileDropdown() {
  const { user, logout } = useAuth();

  const { artistStatus, loading } = useArtistStatus();

  if (!user) {
    return (
      <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-[#ECE6DB] bg-white p-2 shadow-xl">
        <Link
          to="/login"
          className="block rounded-lg px-4 py-3 hover:bg-gray-100"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="block rounded-lg px-4 py-3 hover:bg-gray-100"
        >
          Register
        </Link>
      </div>
    );
  }

  return (
    <div className="absolute right-0 mt-2 w-64 rounded-2xl border border-[#ECE6DB] bg-white p-2 shadow-xl">

      {/* User Info */}

      <div className="border-b border-[#ECE6DB] p-4">

        <h3 className="font-semibold text-[#1B1B1B]">
          {user.name}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          {user.email}
        </p>

      </div>

      {/* Common */}

      <Link
        to="/profile"
        className="block rounded-lg px-4 py-3 hover:bg-gray-100"
      >
        Profile
      </Link>

      <Link
        to="/wishlist"
        className="block rounded-lg px-4 py-3 hover:bg-gray-100"
      >
        Wishlist
      </Link>

      {/* USER */}

      {!loading && user.role === "USER" && (
        <>
          {/* Never Applied */}

          {!artistStatus?.hasProfile && (
            <Link
              to="/become-artist"
              className="block rounded-lg px-4 py-3 font-medium text-[#D6A354] hover:bg-[#FFF8EC]"
            >
              🎨 Become Artist
            </Link>
          )}

          {/* Pending */}

          {artistStatus?.status === "PENDING" && (
            <div className="cursor-default rounded-lg px-4 py-3 font-medium text-amber-600">
              🟡 Application Under Review
            </div>
          )}

          {/* Rejected */}

          {artistStatus?.status === "REJECTED" && (
            <>
              <div className="rounded-lg px-4 py-3 text-red-600">
                🔴 Application Rejected
              </div>

              <Link
                to="/become-artist"
                className="block rounded-lg px-4 py-3 font-medium text-[#D6A354] hover:bg-[#FFF8EC]"
              >
                Apply Again
              </Link>
            </>
          )}
        </>
      )}

      {/* ARTIST */}

      {user.role === "ARTIST" && (
        <Link
          to="/artist/dashboard"
          className="block rounded-lg px-4 py-3 font-medium text-[#D6A354] hover:bg-[#FFF8EC]"
        >
          🎨 Artist Dashboard
        </Link>
      )}

      {/* ADMIN */}

      {user.role === "ADMIN" && (
        <Link
          to="/admin/dashboard"
          className="block rounded-lg px-4 py-3 font-medium text-[#D6A354] hover:bg-[#FFF8EC]"
        >
          ⚙️ Admin Dashboard
        </Link>
      )}

      <Link
        to="/settings"
        className="block rounded-lg px-4 py-3 hover:bg-gray-100"
      >
        Settings
      </Link>

      <button
        onClick={logout}
        className="w-full rounded-lg px-4 py-3 text-left text-red-600 hover:bg-red-50"
      >
        Logout
      </button>

    </div>
  );
}