import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { User, Mail, Lock } from "lucide-react";

import logo from "../assets/logo.png";
import { register } from "../api/auth.api";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [role, setRole] = useState<"USER" | "ARTIST">("USER");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      await register({
        name,
        email,
        password,
        role,
      });

      navigate("/login");
    } catch (err: any) {
      const message = err?.response?.data?.message;

      if (Array.isArray(message)) {
        setError(message.join("\n"));
      } else {
        setError(message || "Registration failed");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex h-screen items-center justify-center bg-[#FAF8F4] px-6 py-4">
      <div className="w-full max-w-lg rounded-[28px] border border-[#ECE6DB] bg-white p-6 shadow-sm">

        {/* Logo */}

        <div className="mb-6 text-center">
          <img
            src={logo}
            alt="Deepti Art"
            className="mx-auto h-14"
          />

          <h1 className="mt-4 font-serif text-3xl text-[#1B1B1B]">
            Create Account
          </h1>

          <p className="mt-2 text-gray-500">
            Join Deepti Art and discover original handmade artwork.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <Input
            icon={<User size={18} />}
            placeholder="Full Name"
            value={name}
            onChange={setName}
          />

          <Input
            icon={<Mail size={18} />}
            placeholder="Email Address"
            type="email"
            value={email}
            onChange={setEmail}
          />

          <Input
            icon={<Lock size={18} />}
            placeholder="Password"
            type="password"
            value={password}
            onChange={setPassword}
          />

          <Input
            icon={<Lock size={18} />}
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={setConfirmPassword}
          />

           
          {error && (
            <div className="whitespace-pre-line rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-xl py-3 font-semibold text-white transition ${
              loading
                ? "cursor-not-allowed bg-[#E6C98D]"
                : "bg-[#D6A354] hover:bg-[#C69649]"
            }`}
          >
            {loading
              ? "Creating Account..."
              : "Create Account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?

          <Link
            to="/login"
            className="ml-2 font-semibold text-[#D6A354]"
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
  value,
  onChange,
}: {
  icon: React.ReactNode;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-[#ECE6DB] bg-white px-4">
      {icon}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 w-full bg-transparent outline-none"
      />
    </div>
  );
}