import { useState } from "react";
import { X, Plus } from "lucide-react";

type Props = {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
};

const suggestions = [
  "Nature",
  "Landscape",
  "Abstract",
  "Modern",
  "Spiritual",
  "Minimal",
  "Oil Painting",
  "Watercolor",
  "Portrait",
  "Wildlife",
  "Indian Art",
  "Canvas",
  "Handmade",
  "Contemporary",
];

export default function TagSelector({
  tags,
  setTags,
}: Props) {
  const [input, setInput] = useState("");

  const addTag = (tag: string) => {
    if (!tag.trim()) return;

    if (tags.includes(tag)) return;

    setTags([...tags, tag]);

    setInput("");
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <div className="rounded-[30px] border border-[#ECE6DB] bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-semibold">
        Artwork Tags
      </h2>

      <p className="mt-2 text-gray-500">
        Tags help buyers discover your artwork.
      </p>

      {/* Input */}

      <div className="mt-8 flex gap-3">

        <input
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          placeholder="Add custom tag..."
          className="h-14 flex-1 rounded-xl border border-[#ECE6DB] px-5 outline-none focus:border-[#D6A354]"
        />

        <button
          type="button"
          onClick={() => addTag(input)}
          className="flex h-14 items-center gap-2 rounded-xl bg-[#D6A354] px-6 text-white"
        >
          <Plus size={18} />
          Add
        </button>

      </div>

      {/* Selected */}

      {tags.length > 0 && (

        <div className="mt-8">

          <h3 className="mb-4 font-medium">
            Selected Tags
          </h3>

          <div className="flex flex-wrap gap-3">

            {tags.map((tag) => (

              <div
                key={tag}
                className="flex items-center gap-2 rounded-full bg-[#FFF8EB] px-4 py-2"
              >

                <span>{tag}</span>

                <button
                  type="button"
                  onClick={() =>
                    removeTag(tag)
                  }
                >

                  <X size={16} />

                </button>

              </div>

            ))}

          </div>

        </div>

      )}

      {/* Suggestions */}

      <div className="mt-10">

        <h3 className="mb-4 font-medium">
          Popular Tags
        </h3>

        <div className="flex flex-wrap gap-3">

          {suggestions.map((tag) => (

            <button
              key={tag}
              type="button"
              onClick={() => addTag(tag)}
              className="rounded-full border border-[#ECE6DB] px-5 py-2 transition hover:border-[#D6A354] hover:bg-[#FFF8EB]"
            >
              {tag}
            </button>

          ))}

        </div>

      </div>

    </div>
  );
}