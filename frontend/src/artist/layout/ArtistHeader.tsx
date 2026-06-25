import {
  Bell,
  Plus,
} from "lucide-react";

export default function ArtistHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#ECE6DB] bg-white">

      <div className="flex h-20 items-center justify-between px-8">

        <div>

          <h1 className="font-serif text-3xl">
            Artist Dashboard
          </h1>

          <p className="text-gray-500">
            Welcome back 👋
          </p>

        </div>

        <div className="flex items-center gap-4">

          <button className="flex items-center gap-2 rounded-xl bg-[#D6A354] px-5 py-3 text-white">

            <Plus size={18} />

            Upload Art

          </button>

          <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ECE6DB]">

            <Bell size={18} />

          </button>

          <img
            src="https://i.pravatar.cc/100"
            alt=""
            className="h-11 w-11 rounded-full"
          />

        </div>

      </div>

    </header>
  );
}