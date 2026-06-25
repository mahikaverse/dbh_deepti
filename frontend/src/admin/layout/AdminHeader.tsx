import { Bell, Search } from "lucide-react";

export default function AdminHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-30 h-24 border-b border-[#ECE6DB] bg-white/95 backdrop-blur md:left-[280px]">
      <div className="flex h-full items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <div className="w-full max-w-2xl">
          <div className="flex h-12 items-center gap-3 rounded-xl border border-[#ECE6DB] px-4">
          <Search size={18} />

          <input
            placeholder="Search artworks, artists, users..."
            className="min-w-0 flex-1 bg-transparent outline-none"
          />
        </div>
        </div>

        <div className="ml-4 flex items-center gap-4">
          <button className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#ECE6DB]">
            <Bell size={18} />
          </button>

          <img
            src="https://i.pravatar.cc/100"
            alt="Admin"
            className="h-12 w-12 rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}