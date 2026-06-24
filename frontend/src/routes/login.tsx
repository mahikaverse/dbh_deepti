import { Link } from "react-router-dom";
import { Mail, Lock, ArrowRight } from "lucide-react";
import logo from "../assets/logo.png";

export default function LoginPage() {
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

          <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#D6A354] py-4 text-white font-medium hover:bg-[#C69649]">

            Login

            <ArrowRight size={18} />

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