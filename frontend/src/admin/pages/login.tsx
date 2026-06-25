import { Lock, Mail } from "lucide-react";

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF8F4]">

      <div className="w-full max-w-md rounded-[32px] border border-[#ECE6DB] bg-white p-10 shadow-sm">

        <div className="text-center">

          <img
            src="logo.png"
            alt=""
            className="mx-auto h-20"
          />

          <h1 className="mt-5 text-3xl font-serif">
            Admin Portal
          </h1>

          <p className="mt-2 text-gray-500">
            Sign in to manage Deepti Art
          </p>

        </div>

        <div className="mt-8 space-y-5">

          <div className="flex items-center gap-3 rounded-xl border border-[#ECE6DB] px-4">

            <Mail size={18} />

            <input
              placeholder="Admin Email"
              className="h-14 flex-1 outline-none"
            />

          </div>

          <div className="flex items-center gap-3 rounded-xl border border-[#ECE6DB] px-4">

            <Lock size={18} />

            <input
              type="password"
              placeholder="Password"
              className="h-14 flex-1 outline-none"
            />

          </div>

        </div>

        <button className="mt-6 w-full rounded-xl bg-[#D6A354] py-4 text-white">
          Login
        </button>

      </div>

    </div>
  );
}