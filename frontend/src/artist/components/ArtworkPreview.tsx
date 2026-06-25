import {
  Heart,
  Eye,
  Tag,
  CheckCircle,
} from "lucide-react";

type ArtworkForm = {
  title: string;
  description: string;
  category: string;
  medium: string;
  style: string;
  orientation: string;
  width: string;
  height: string;
  year: string;
};

type PricingForm = {
  price: string;
  edition: string;
  framed: boolean;
  available: boolean;
  shipping: string;
};

type Props = {
  images: File[];
  form: ArtworkForm;
  pricing: PricingForm;
  tags: string[];
};

export default function ArtworkPreview({
  images,
  form,
  pricing,
  tags,
}: Props) {
  const previewImage =
    images.length > 0
      ? URL.createObjectURL(images[0])
      : "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1000";

  return (
    <div className="sticky top-24">

      <div className="overflow-hidden rounded-[32px] border border-[#ECE6DB] bg-white shadow-sm">

        {/* IMAGE */}

        <div className="relative">

          <img
            src={previewImage}
            alt=""
            className="h-[360px] w-full object-cover"
          />

          <div className="absolute right-4 top-4 flex gap-3">

            <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow">

              <Heart size={18} />

            </button>

            <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow">

              <Eye size={18} />

            </button>

          </div>

        </div>

        {/* CONTENT */}

        <div className="p-6">

          <span className="rounded-full bg-[#FFF8EB] px-4 py-2 text-sm text-[#D6A354]">

            {form.category || "Category"}

          </span>

          <h2 className="mt-5 text-3xl font-serif text-[#1B1B1B]">

            {form.title || "Artwork Title"}

          </h2>

          <p className="mt-2 text-gray-500">

            by You

          </p>

          <h3 className="mt-6 text-3xl font-bold text-[#1B1B1B]">

            ₹ {pricing.price || "0"}

          </h3>

          <div className="mt-4 flex items-center gap-2 text-green-600">

            <CheckCircle size={18} />

            {pricing.available
              ? "Available for Inquiry"
              : "Currently Unavailable"}

          </div>

          {/* DETAILS */}

          <div className="mt-8 space-y-4 text-sm">

            <PreviewRow
              label="Medium"
              value={form.medium}
            />

            <PreviewRow
              label="Style"
              value={form.style}
            />

            <PreviewRow
              label="Orientation"
              value={form.orientation}
            />

            <PreviewRow
              label="Dimensions"
              value={`${form.width || "-"} × ${
                form.height || "-"
              } cm`}
            />

            <PreviewRow
              label="Year"
              value={form.year}
            />

            <PreviewRow
              label="Edition"
              value={pricing.edition}
            />

            <PreviewRow
              label="Shipping"
              value={pricing.shipping}
            />

          </div>

          {/* TAGS */}

          {tags.length > 0 && (

            <div className="mt-8">

              <div className="mb-3 flex items-center gap-2">

                <Tag size={18} />

                <span className="font-semibold">
                  Tags
                </span>

              </div>

              <div className="flex flex-wrap gap-2">

                {tags.map((tag) => (

                  <span
                    key={tag}
                    className="rounded-full bg-[#FAF8F4] px-4 py-2 text-sm"
                  >
                    {tag}
                  </span>

                ))}

              </div>

            </div>

          )}

          {/* DESCRIPTION */}

          <div className="mt-8">

            <h3 className="mb-3 font-semibold">

              Description

            </h3>

            <p className="text-sm leading-7 text-gray-600">

              {form.description ||
                "Your artwork description will appear here as buyers will see it."}

            </p>

          </div>

        </div>

      </div>

      {/* SELLER TIPS */}

      <div className="mt-6 rounded-[28px] border border-[#ECE6DB] bg-white p-6 shadow-sm">

        <h3 className="text-lg font-semibold">

          Publishing Checklist

        </h3>

        <div className="mt-5 space-y-3 text-sm">

          <Checklist
            done={images.length > 0}
            title="Artwork Image"
          />

          <Checklist
            done={form.title.length > 0}
            title="Artwork Title"
          />

          <Checklist
            done={form.description.length > 0}
            title="Description"
          />

          <Checklist
            done={pricing.price.length > 0}
            title="Price"
          />

          <Checklist
            done={tags.length > 0}
            title="Tags"
          />

        </div>

      </div>

    </div>
  );
}

function PreviewRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between border-b border-[#F4EFE7] pb-3">

      <span className="text-gray-500">

        {label}

      </span>

      <span className="font-medium text-[#1B1B1B]">

        {value || "-"}

      </span>

    </div>
  );
}

function Checklist({
  title,
  done,
}: {
  title: string;
  done: boolean;
}) {
  return (
    <div className="flex items-center gap-3">

      <CheckCircle
        size={18}
        className={
          done
            ? "text-green-600"
            : "text-gray-300"
        }
      />

      <span>{title}</span>

    </div>
  );
}