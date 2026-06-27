import { createInquiry } from "../../api/inquiry.api";
import { X } from "lucide-react";
import { useState } from "react";

interface Props {
  artworkId: string;
  onClose: () => void;
}

export default function InquiryFormModal({
  artworkId,
  onClose,
}: Props) {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    preferredSize: "",
    preferredFrame: "",
    message: "",
  });

  const update = (
    key: keyof typeof form,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    console.log({
      artworkId,
      ...form,
    });

   try {
  await createInquiry({
    artworkId,
    ...form,
  });

  alert("Inquiry submitted successfully!");

  onClose();

} catch (err) {
  console.error(err);

  alert("Failed to submit inquiry.");
}  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">

      <div className="w-full max-w-2xl rounded-[32px] bg-white p-8">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h2 className="text-3xl font-serif">
              Express Interest
            </h2>

            <p className="mt-2 text-gray-500">
              Fill your details and our team will contact you.
            </p>

          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-gray-100"
          >
            <X />
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            placeholder="Full Name"
            value={form.fullName}
            onChange={(e) =>
              update(
                "fullName",
                e.target.value
              )
            }
            className="h-14 w-full rounded-xl border border-[#ECE6DB] px-5"
            required
          />

          <input
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) =>
              update(
                "phone",
                e.target.value
              )
            }
            className="h-14 w-full rounded-xl border border-[#ECE6DB] px-5"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) =>
              update(
                "email",
                e.target.value
              )
            }
            className="h-14 w-full rounded-xl border border-[#ECE6DB] px-5"
            required
          />

          <input
            placeholder="City"
            value={form.city}
            onChange={(e) =>
              update(
                "city",
                e.target.value
              )
            }
            className="h-14 w-full rounded-xl border border-[#ECE6DB] px-5"
            required
          />

          <div className="grid grid-cols-2 gap-4">

            <input
              placeholder="Preferred Size (Optional)"
              value={form.preferredSize}
              onChange={(e) =>
                update(
                  "preferredSize",
                  e.target.value
                )
              }
              className="h-14 rounded-xl border border-[#ECE6DB] px-5"
            />

            <input
              placeholder="Preferred Frame (Optional)"
              value={form.preferredFrame}
              onChange={(e) =>
                update(
                  "preferredFrame",
                  e.target.value
                )
              }
              className="h-14 rounded-xl border border-[#ECE6DB] px-5"
            />

          </div>

          <textarea
            rows={5}
            placeholder="Tell us anything about your requirement..."
            value={form.message}
            onChange={(e) =>
              update(
                "message",
                e.target.value
              )
            }
            className="w-full rounded-xl border border-[#ECE6DB] p-5 resize-none"
            required
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-[#D6A354] py-4 font-semibold text-white hover:bg-[#C69649]"
          >
            Submit Inquiry
          </button>

        </form>

      </div>

    </div>
  );
}