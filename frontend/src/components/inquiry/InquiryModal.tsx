import { X } from "lucide-react";

export default function InquiryModal({
  open,
  onClose,
}: any) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">

      <div className="bg-white rounded-3xl p-8 w-full max-w-xl relative">

        <button
          onClick={onClose}
          className="absolute right-5 top-5"
        >
          <X />
        </button>

        <h2 className="text-3xl font-serif">
          Express Interest
        </h2>

        <p className="mt-2 text-gray-500">
          Our curator will connect you with the artist.
        </p>

        <form className="mt-8 space-y-4">

          <input
            placeholder="Full Name"
            className="w-full border rounded-xl p-3"
          />

          <input
            placeholder="Email"
            className="w-full border rounded-xl p-3"
          />

          <input
            placeholder="Phone"
            className="w-full border rounded-xl p-3"
          />

          <select className="w-full border rounded-xl p-3">
            <option>No Preference</option>
            <option>Classic Black</option>
            <option>Golden Frame</option>
          </select>

          <textarea
            rows={4}
            placeholder="Message"
            className="w-full border rounded-xl p-3"
          />

          <button
            type="submit"
            className="w-full bg-[#d6a354] text-white py-4 rounded-xl"
          >
            Submit Inquiry
          </button>

        </form>

      </div>

    </div>
  );
}