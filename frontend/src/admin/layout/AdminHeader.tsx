import { Bell, Search } from "lucide-react";

export default function AdminHeader() {
  return (
    <header className="flex h-24 items-center justify-between px-10 bg-white">
      
      {/* Left Side - Search */}
      <div className="w-full max-w-2xl">
        <div className="flex h-12 items-center gap-3 rounded-xl border border-[#ECE6DB] px-4">
          <Search size={18} />

          <input
            placeholder="Search artworks, artists, users..."
            className="flex-1 bg-transparent outline-none"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="ml-8 flex items-center gap-4">
        <button className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#ECE6DB]">
          <Bell size={18} />
        </button>

        <img
          src="https://i.pravatar.cc/100"
          alt="Admin"
          className="h-12 w-12 rounded-full object-cover"
        />
      </div>
    </header>
  );
}