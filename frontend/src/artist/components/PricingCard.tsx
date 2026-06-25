type PricingForm = {
  price: string;
  edition: string;
  framed: boolean;
  available: boolean;
  shipping: string;
};

type Props = {
  pricing: PricingForm;
  setPricing: React.Dispatch<
    React.SetStateAction<PricingForm>
  >;
};

const shippingOptions = [
  "Worldwide",
  "India Only",
  "Pickup Only",
];

export default function PricingCard({
  pricing,
  setPricing,
}: Props) {
  const update = (
    key: keyof PricingForm,
    value: any
  ) => {
    setPricing((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="rounded-[30px] border border-[#ECE6DB] bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-semibold text-[#1B1B1B]">
        Pricing & Availability
      </h2>

      <p className="mt-2 text-gray-500">
        Configure how your artwork will be sold.
      </p>

      {/* PRICE */}

      <div className="mt-8">

        <label className="mb-2 block font-medium">
          Price (₹)
        </label>

        <input
          type="number"
          placeholder="25000"
          value={pricing.price}
          onChange={(e) =>
            update("price", e.target.value)
          }
          className="h-14 w-full rounded-xl border border-[#ECE6DB] px-5 outline-none focus:border-[#D6A354]"
        />

      </div>

      {/* EDITION */}

      <div className="mt-8">

        <label className="mb-4 block font-medium">
          Artwork Type
        </label>

        <div className="grid grid-cols-2 gap-4">

          <button
            type="button"
            onClick={() =>
              update("edition", "Original")
            }
            className={`rounded-xl border py-4 transition
            ${
              pricing.edition === "Original"
                ? "border-[#D6A354] bg-[#FFF8EB]"
                : "border-[#ECE6DB]"
            }`}
          >
            Original
          </button>

          <button
            type="button"
            onClick={() =>
              update("edition", "Print")
            }
            className={`rounded-xl border py-4 transition
            ${
              pricing.edition === "Print"
                ? "border-[#D6A354] bg-[#FFF8EB]"
                : "border-[#ECE6DB]"
            }`}
          >
            Print
          </button>

        </div>

      </div>

      {/* SHIPPING */}

      <div className="mt-8">

        <label className="mb-2 block font-medium">
          Shipping
        </label>

        <select
          value={pricing.shipping}
          onChange={(e) =>
            update("shipping", e.target.value)
          }
          className="h-14 w-full rounded-xl border border-[#ECE6DB] px-5"
        >

          {shippingOptions.map((option) => (
            <option key={option}>
              {option}
            </option>
          ))}

        </select>

      </div>

      {/* SWITCHES */}

      <div className="mt-10 space-y-5">

        <div className="flex items-center justify-between rounded-2xl border border-[#ECE6DB] p-5">

          <div>

            <h3 className="font-semibold">
              Framed Artwork
            </h3>

            <p className="text-sm text-gray-500">
              Include frame with artwork.
            </p>

          </div>

          <input
            type="checkbox"
            checked={pricing.framed}
            onChange={(e) =>
              update(
                "framed",
                e.target.checked
              )
            }
            className="h-5 w-5 accent-[#D6A354]"
          />

        </div>

        <div className="flex items-center justify-between rounded-2xl border border-[#ECE6DB] p-5">

          <div>

            <h3 className="font-semibold">
              Available for Sale
            </h3>

            <p className="text-sm text-gray-500">
              Buyers can send inquiries.
            </p>

          </div>

          <input
            type="checkbox"
            checked={pricing.available}
            onChange={(e) =>
              update(
                "available",
                e.target.checked
              )
            }
            className="h-5 w-5 accent-[#D6A354]"
          />

        </div>

      </div>

      {/* INFO */}

      <div className="mt-8 rounded-2xl bg-[#FFF8EB] p-5">

        <h3 className="font-semibold text-[#D6A354]">
          Seller Tips
        </h3>

        <ul className="mt-3 space-y-2 text-sm text-gray-600">

          <li>
            • Competitive pricing increases inquiries.
          </li>

          <li>
            • Mention if framing is included.
          </li>

          <li>
            • Worldwide shipping attracts more buyers.
          </li>

          <li>
            • Original artworks generally receive higher engagement.
          </li>

        </ul>

      </div>

    </div>
  );
}