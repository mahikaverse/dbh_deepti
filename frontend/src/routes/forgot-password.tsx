import { Mail } from "lucide-react";
import logo from "../assets/logo.png";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F4] flex justify-center items-center">

      <div className="w-full max-w-md rounded-[32px] bg-white border border-[#ECE6DB] p-10">

        <img
            src={logo}
            alt="Deepti Art"
            className="mx-auto h-14"
          />

        <h1 className="mt-6 text-center text-3xl font-serif">
          Forgot Password
        </h1>

        <p className="mt-3 text-center text-gray-500">
          Enter your email to receive a reset link.
        </p>

        <div className="mt-8 flex items-center gap-3 rounded-xl border border-[#ECE6DB] px-4">

          <Mail size={18} />

          <input
            placeholder="Email Address"
            className="h-14 flex-1 outline-none"
          />

        </div>

        <button className="mt-6 w-full rounded-xl bg-[#D6A354] py-4 text-white">
          Send Reset Link
        </button>

      </div>

    </div>
  );
}