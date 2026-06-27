import { Link } from "react-router-dom";
import { Mail, Lock, ArrowRight } from "lucide-react";
import logo from "../assets/logo.png";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveTokens } from "../utils/authStorage";
import { login } from "../api/auth.api";
 
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {

const navigate = useNavigate();

const [email, setEmail] = useState("");

const [password, setPassword] = useState("");

const [loading, setLoading] = useState(false);

const [error, setError] = useState("");
const { refreshUser } = useAuth();

async function handleLogin() {
  try {
    setLoading(true);
    setError("");

    const data = await login({
      email,
      password,
    });

    saveTokens(
      data.accessToken,
      data.refreshToken
    );

    await refreshUser();

    if (data.user.role === "ADMIN") {
  navigate("/admin/dashboard");
  return;
}

navigate("/");

    if (data.user.role === "ARTIST") {
      navigate("/");
      return;
    }

    navigate("/");
  } catch (err: any) {
    setError(
      err?.response?.data?.message ||
        "Login failed"
    );
  } finally {
    setLoading(false);
  }
}

  return (
    <div className="h-screen overflow-hidden bg-[#FAF8F4] flex">

      {/* LEFT */}

      <div className="hidden lg:flex w-1/2 relative">

        <img
          src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1600"
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute bottom-12 left-12 text-white">

          <h1 className="font-serif text-5xl max-w-md">
            Discover Original Handmade Art
          </h1>

          <p className="mt-4 text-white/90">
            Connect with talented artists and own unique masterpieces.
          </p>

        </div>

      </div>

      {/* RIGHT */}

      <div className="flex flex-1 items-center justify-center p-8">

        <div className="w-full max-w-md">

          {/* LOGO */}

          <div className="mb-10 text-center">

            <img
              src={logo}
              alt="Deepti Art"
              className="mx-auto h-20"
            />

            <h2 className="mt-5 text-4xl font-serif text-[#1B1B1B]">
              Welcome Back
            </h2>

            <p className="mt-2 text-gray-500">
              Login to continue exploring art.
            </p>

          </div>

          {/* EMAIL */}

          <div className="mb-5">

            <label className="mb-2 block text-sm">
              Email
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-[#ECE6DB] bg-white px-4">

              <Mail size={18} />

              <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 flex-1 outline-none"
            />

            </div>

          </div>

          {/* PASSWORD */}

          <div>

            <label className="mb-2 block text-sm">
              Password
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-[#ECE6DB] bg-white px-4">

              <Lock size={18} />

              <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-14 flex-1 outline-none"
            />

            </div>

          </div>

          <div className="mt-4 text-right">

            <Link
              to="/forgot-password"
              className="text-[#D6A354]"
            >
              Forgot Password?
            </Link>

          </div>

          {/* LOGIN */}
         
         {
            error && (
              <div className="mt-4 rounded-xl bg-red-50 p-3 text-sm text-red-600">
                {error}
              </div>
            )
          }

         <button
          onClick={handleLogin}
          disabled={loading}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#D6A354] py-4 font-medium text-white transition hover:bg-[#C69649] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Logging in..." : "Login"}

          {!loading && <ArrowRight size={18} />}
        </button>

          {/* REGISTER */}

          <p className="mt-8 text-center text-gray-500">

            Don't have an account?

            <Link
              to="/register"
              className="ml-2 text-[#D6A354] font-medium"
            >
              Create Account
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}