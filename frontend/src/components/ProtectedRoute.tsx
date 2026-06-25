import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface Props {
  children: React.ReactNode;
  role?: "USER" | "ARTIST" | "ADMIN";
}

export default function ProtectedRoute({
  children,
  role,
}: Props) {
  const { user, loading } = useAuth();

  // Wait until authentication is restored
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#FAF8F4]">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-[#D6A354] border-t-transparent"></div>

          <p className="mt-4 text-gray-500">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  // Not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Role check
  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}