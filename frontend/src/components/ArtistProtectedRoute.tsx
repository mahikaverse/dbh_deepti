import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface Props {
  children: React.ReactNode;
}

export default function ArtistProtectedRoute({
  children,
}: Props) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== "ARTIST") {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}