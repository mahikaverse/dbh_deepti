import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { me } from "../api/auth.api";
import {
  clearTokens,
  getAccessToken,
} from "../utils/authStorage";

interface User {
  id: string;
  name: string;
  email: string;
  role: "USER" | "ARTIST" | "ADMIN";
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  refreshUser: () => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(true);

  async function refreshUser() {
    const token = getAccessToken();

    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }

    try {
      const data = await me();

      setUser(data);
    } catch (err) {
      clearTokens();
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    clearTokens();
    setUser(null);

    window.location.href = "/login";
  }

  useEffect(() => {
    refreshUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        refreshUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}