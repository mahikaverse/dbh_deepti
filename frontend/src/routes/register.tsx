import { Link } from "react-router-dom";
import { User, Mail, Phone, Lock } from "lucide-react";
import logo from "../assets/logo.png";


export default function RegisterPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#FAF8F4] flex items-center justify-center px-6 py-4">
      <div className="w-full max-w-lg rounded-[28px] border border-[#ECE6DB] bg-white p-6 shadow-sm">
        {/* Logo & Heading */}
        <div className="mb-5 text-center">
          <img
            src={logo}
            alt="Deepti Art"
            className="mx-auto h-14"
          />

          <h1 className="mt-3 font-serif text-3xl text-[#1B1B1B]">
            Create Account
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Join Deepti Art and discover original handmade artwork.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-3">
          <Input
            icon={<User size={18} />}
            placeholder="Full Name"
          />

          <Input
            icon={<Mail size={18} />}
            placeholder="Email Address"
          />

          <Input
            icon={<Phone size={18} />}
            placeholder="Phone Number"
          />

          <Input
            icon={<Lock size={18} />}
            placeholder="Password"
            type="password"
          />

          <Input
            icon={<Lock size={18} />}
            placeholder="Confirm Password"
            type="password"
          />
        </div>

        {/* Button */}
        <button className="mt-5 w-full rounded-xl bg-[#D6A354] py-3 font-medium text-white transition hover:bg-[#C69649]">
          Create Account
        </button>

        {/* Login */}
        <p className="mt-4 text-center text-sm text-gray-500">
          Already have an account?

          <Link
            to="/login"
            className="ml-2 font-medium text-[#D6A354]"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

function Input({
  icon,
  placeholder,
  type = "text",
}: {
  icon: React.ReactNode;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-[#ECE6DB] bg-white px-4">
      {icon}

      <input
        type={type}
        placeholder={placeholder}
        className="h-11 w-full bg-transparent outline-none"
      />
    </div>
  );
}