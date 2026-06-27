import {
  Eye,
  Heart,
  MessageCircle,
  Pencil,
  Trash2,
  Copy,
} from "lucide-react";

import { deleteArtwork } from "../../api/artwork.api";

interface Props {
  artwork: any;
  reload: () => void;
}

export default function ArtworkCard({
  artwork,
  reload,
}: Props) {
  let status = "Pending Review";
let badgeColor = "bg-yellow-500";

if (artwork.isApproved) {
  status = "Approved";
  badgeColor = "bg-green-600";
}

if (!artwork.isAvailable) {
  status = "Sold";
  badgeColor = "bg-blue-600";
}

if (artwork.rejectionReason) {
  status = "Rejected";
  badgeColor = "bg-red-600";
}
  async function handleDelete() {
    const ok = window.confirm(
      "Delete this artwork?"
    );

    if (!ok) return;

    try {
      await deleteArtwork(artwork.id);

      reload();

      alert("Artwork deleted successfully.");
    } catch (err) {
      console.error(err);

      alert("Failed to delete artwork.");
    }
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-[#ECE6DB] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* IMAGE */}

      <div className="relative">

        <img
          src={artwork.imageUrl}
          alt={artwork.title}
          className="h-72 w-full object-cover"
        />

        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-white ${badgeColor}`}
        >
          {status}
        </span>

      </div>

      {/* BODY */}

      <div className="p-6">

        <div className="flex items-start justify-between">

          <div>

            <h2 className="text-xl font-semibold">
              {artwork.title}
            </h2>

            <p className="mt-2 text-2xl font-bold text-[#D6A354]">

              ₹
              {Number(
                artwork.price
              ).toLocaleString()}

            </p>

          </div>

        </div>

        {/* CATEGORY */}

        <div className="mt-4">

          <span className="rounded-full bg-[#FAF8F4] px-3 py-2 text-sm">

            {artwork.category}

          </span>

        </div>

        {!artwork.isApproved && !artwork.rejectionReason && (
  <div className="mt-5 rounded-2xl border border-yellow-200 bg-yellow-50 p-4">
    <p className="font-medium text-yellow-700">
      Pending Admin Review
    </p>

    <p className="mt-1 text-sm text-yellow-600">
      Your artwork has been submitted successfully and is waiting for admin approval.
      It will become visible to buyers once approved.
    </p>
  </div>
)}

{artwork.rejectionReason && (
  <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4">
    <p className="font-medium text-red-700">
      Artwork Rejected
    </p>

    <p className="mt-2 text-sm text-red-600">
      {artwork.rejectionReason}
    </p>
  </div>
)}

       {/* ANALYTICS */}

<div className="mt-6 grid grid-cols-3 gap-4 rounded-2xl bg-[#FAF8F4] p-4">

  <div className="text-center">
    <Eye size={18} className="mx-auto text-gray-500" />

    <p className="mt-2 font-semibold">0</p>

    <p className="text-xs text-gray-500">
      Views
    </p>
  </div>

  <div className="text-center">
    <Heart size={18} className="mx-auto text-red-500" />

    <p className="mt-2 font-semibold">0</p>

    <p className="text-xs text-gray-500">
      Saves
    </p>
  </div>

  <div className="text-center">
    <MessageCircle
      size={18}
      className="mx-auto text-blue-500"
    />

    <p className="mt-2 font-semibold">
      {artwork.isApproved
        ? artwork._count?.inquiries ?? 0
        : "--"}
    </p>

    <p className="text-xs text-gray-500">
      Inquiries
    </p>
  </div>

</div>
                {/* ACTION BUTTONS */}

        <div className="mt-6 grid grid-cols-3 gap-3">

          {/* EDIT */}

          <button
            className="flex items-center justify-center gap-2 rounded-xl border border-[#ECE6DB] py-3 font-medium transition hover:bg-[#FAF8F4]"
            onClick={() => {
              // We'll connect this page later
              alert("Edit page coming next 🚀");
            }}
          >
            <Pencil size={18} />

            Edit
          </button>

          {/* DUPLICATE */}

          <button
            className="flex items-center justify-center gap-2 rounded-xl border border-[#ECE6DB] py-3 font-medium transition hover:bg-[#FAF8F4]"
            onClick={() => {
              navigator.clipboard.writeText(artwork.id);

              alert("Artwork ID copied.");
            }}
          >
            <Copy size={18} />

            Copy ID
          </button>

          {/* DELETE */}

          <button
            onClick={handleDelete}
            className="flex items-center justify-center gap-2 rounded-xl border border-red-200 py-3 font-medium text-red-600 transition hover:bg-red-50"
          >
            <Trash2 size={18} />

            Delete
          </button>

        </div>

        {/* FOOTER */}

        <div className="mt-6 flex items-center justify-between border-t border-[#ECE6DB] pt-4">

          <div>

            <p className="text-xs text-gray-500">

              Uploaded

            </p>

            <p className="font-medium">

              {new Date(
                artwork.createdAt
              ).toLocaleDateString()}

            </p>

          </div>

          <div>

            <p className="text-xs text-gray-500">

              Medium

            </p>

            <p className="font-medium">


              {artwork.medium || "N/A"}

            </p>

          </div>

        </div>

      </div>

    </div>

  );
}

         