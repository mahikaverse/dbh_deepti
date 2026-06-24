import {
  Search,
  SlidersHorizontal,
} from "lucide-react";

export default function SearchBar() {
  return (
    <div className="mb-8">
  <div className="flex items-center h-14 bg-[#EDEBE6] rounded-full px-5">

    <Search
      size={20}
      className="text-neutral-500"
    />

    <input
      type="text"
      placeholder="Search"
      className="
        flex-1
        bg-transparent
        px-4
        text-[16px]
        outline-none
        placeholder:text-neutral-500
      "
    />

    <div className="flex items-center gap-5">

      <button>
        <SlidersHorizontal
          size={20}
          className="text-neutral-700"
        />
      </button>

      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 10l4.55-4.55a2.121 2.121 0 00-3-3L12 7m3 3l-3-3m3 3L9 16m0 0l-4.55 4.55a2.121 2.121 0 003 3L12 19m-3-3l3 3"
          />
        </svg>
      </button>

    </div>

  </div>
</div>
  );
}