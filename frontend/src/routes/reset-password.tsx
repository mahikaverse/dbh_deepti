import { Lock } from "lucide-react";
import logo from "../assets/logo.png";

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F4] flex items-center justify-center px-6">

      <div className="w-full max-w-md rounded-[32px] border border-[#ECE6DB] bg-white p-10 shadow-sm">

        <div className="text-center">

           <img
            src={logo}
            alt="Deepti Art"
            className="mx-auto h-14"
          />

          <h1 className="mt-5 text-3xl font-serif">
            Reset Password
          </h1>

          <p className="mt-3 text-gray-500">
            Create a new secure password.
          </p>

        </div>

        <div className="mt-8 space-y-5">

          <div className="flex items-center gap-3 rounded-xl border border-[#ECE6DB] px-4">

            <Lock size={18} />

            <input
              type="password"
              placeholder="New Password"
              className="h-14 flex-1 outline-none"
            />

          </div>

          <div className="flex items-center gap-3 rounded-xl border border-[#ECE6DB] px-4">

            <Lock size={18} />

            <input
              type="password"
              placeholder="Confirm Password"
              className="h-14 flex-1 outline-none"
            />

          </div>

        </div>

        <button className="mt-8 w-full rounded-xl bg-[#D6A354] py-4 text-white font-medium hover:bg-[#C69649]">
          Update Password
        </button>

      </div>

    </div>
  );
}