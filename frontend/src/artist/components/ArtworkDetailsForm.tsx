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

type Props = {
  form: ArtworkForm;
  setForm: React.Dispatch<
    React.SetStateAction<ArtworkForm>
  >;
};

const categories = [
  {
    label: "Spiritual",
    value: "SPIRITUAL",
  },
  {
    label: "Nature",
    value: "NATURE",
  },
  {
    label: "Portrait",
    value: "PORTRAIT",
  },
  {
    label: "Abstract",
    value: "ABSTRACT",
  },
  {
    label: "Landscape",
    value: "LANDSCAPE",
  },
  {
    label: "Sketch",
    value: "SKETCH",
  },
  {
    label: "Heritage",
    value: "HERITAGE",
  },
  {
    label: "Modern",
    value: "MODERN",
  },
  {
    label: "Other",
    value: "OTHER",
  },
];

const mediums = [
  "Oil",
  "Acrylic",
  "Watercolor",
  "Pencil",
  "Charcoal",
  "Digital",
  "Mixed Media",
];

const styles = [
  "Realism",
  "Modern",
  "Minimal",
  "Abstract",
  "Impressionism",
  "Contemporary",
];

const orientations = [
  "Portrait",
  "Landscape",
  "Square",
];

export default function ArtworkDetailsForm({
  form,
  setForm,
}: Props) {
  const update = (
    key: keyof ArtworkForm,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="rounded-[30px] border border-[#ECE6DB] bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-semibold text-[#1B1B1B]">
        Artwork Details
      </h2>

      <p className="mt-2 text-gray-500">
        Tell buyers about your artwork.
      </p>

      {/* Title */}

      <div className="mt-8">

        <label className="mb-2 block font-medium">
          Artwork Title
        </label>

        <input
          value={form.title}
          onChange={(e) =>
            update("title", e.target.value)
          }
          placeholder="Enter artwork title"
          className="h-14 w-full rounded-xl border border-[#ECE6DB] px-5 outline-none focus:border-[#D6A354]"
        />

      </div>

      {/* Description */}

      <div className="mt-6">

        <label className="mb-2 block font-medium">
          Description
        </label>

        <textarea
          rows={6}
          value={form.description}
          onChange={(e) =>
            update(
              "description",
              e.target.value
            )
          }
          placeholder="Describe your artwork..."
          className="w-full rounded-xl border border-[#ECE6DB] p-5 outline-none resize-none focus:border-[#D6A354]"
        />

      </div>

      {/* Grid */}

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        {/* Category */}

        <div>

          <label className="mb-2 block font-medium">
            Category
          </label>

          <select
            value={form.category}
            onChange={(e) =>
              update(
                "category",
                e.target.value
              )
            }
            className="h-14 w-full rounded-xl border border-[#ECE6DB] px-4"
          >

            <option>Select Category</option>

           <option value="">
  Select Category
</option>

{categories.map((item) => (
  <option
    key={item.value}
    value={item.value}
  >
    {item.label}
  </option>
))}
          </select>

        </div>

        {/* Medium */}

        <div>

          <label className="mb-2 block font-medium">
            Medium
          </label>

          <select
            value={form.medium}
            onChange={(e) =>
              update(
                "medium",
                e.target.value
              )
            }
            className="h-14 w-full rounded-xl border border-[#ECE6DB] px-4"
          >

            <option>Select Medium</option>

            {mediums.map((item) => (
              <option key={item}>
                {item}
              </option>
            ))}

          </select>

        </div>

        {/* Style */}

        <div>

          <label className="mb-2 block font-medium">
            Style
          </label>

          <select
            value={form.style}
            onChange={(e) =>
              update(
                "style",
                e.target.value
              )
            }
            className="h-14 w-full rounded-xl border border-[#ECE6DB] px-4"
          >

            <option>Select Style</option>

            {styles.map((item) => (
              <option key={item}>
                {item}
              </option>
            ))}

          </select>

        </div>

        {/* Orientation */}

        <div>

          <label className="mb-2 block font-medium">
            Orientation
          </label>

          <select
            value={form.orientation}
            onChange={(e) =>
              update(
                "orientation",
                e.target.value
              )
            }
            className="h-14 w-full rounded-xl border border-[#ECE6DB] px-4"
          >

            <option>Select Orientation</option>

            {orientations.map((item) => (
              <option key={item}>
                {item}
              </option>
            ))}

          </select>

        </div>

      </div>

      {/* Dimensions */}

      <div className="mt-8 grid gap-6 md:grid-cols-3">

        <div>

          <label className="mb-2 block font-medium">
            Width (cm)
          </label>

          <input
            value={form.width}
            onChange={(e) =>
              update(
                "width",
                e.target.value
              )
            }
            placeholder="Width"
            className="h-14 w-full rounded-xl border border-[#ECE6DB] px-5"
          />

        </div>

        <div>

          <label className="mb-2 block font-medium">
            Height (cm)
          </label>

          <input
            value={form.height}
            onChange={(e) =>
              update(
                "height",
                e.target.value
              )
            }
            placeholder="Height"
            className="h-14 w-full rounded-xl border border-[#ECE6DB] px-5"
          />

        </div>

        <div>

          <label className="mb-2 block font-medium">
            Year Created
          </label>

          <input
            value={form.year}
            onChange={(e) =>
              update(
                "year",
                e.target.value
              )
            }
            placeholder="2026"
            className="h-14 w-full rounded-xl border border-[#ECE6DB] px-5"
          />

        </div>

      </div>

    </div>
  );
}