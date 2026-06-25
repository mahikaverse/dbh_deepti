import {
  Bell,
  Search,
  ChevronDown,
} from "lucide-react";

export default function ArtistTopbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-30 h-20 border-b border-[#ECE6DB] bg-white/95 backdrop-blur md:left-[280px]">
      <div className="flex h-full items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <div className="relative w-full max-w-[420px]">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            placeholder="Search artworks..."
            className="w-full rounded-xl border border-[#ECE6DB] bg-[#FAF8F4] py-3 pl-12 pr-4 outline-none"
          />
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <button className="relative">
            <Bell size={22} />

            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-red-500" />
          </button>

          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/120"
              alt="Priya Sharma"
              className="h-11 w-11 rounded-full"
            />

            <div className="hidden sm:block">
              <p className="font-semibold">
                Priya Sharma
              </p>

              <p className="text-sm text-gray-500">
                Verified Artist
              </p>
            </div>

            <ChevronDown size={18} />
          </div>
        </div>
      </div>
    </header>
  );
}