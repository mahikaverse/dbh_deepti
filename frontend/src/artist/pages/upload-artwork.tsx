import { useState } from "react";
import {
  ArrowLeft,
  Save,
  CheckCircle2,
  Circle,
} from "lucide-react";
import { Link } from "react-router-dom";

import ArtistLayout from "../layout/ArtistLayout";

import ImageUploader from "../components/ImageUploader";
import ArtworkDetailsForm from "../components/ArtworkDetailsForm";
import PricingCard from "../components/PricingCard";
import TagSelector from "../components/TagSelector";
import ArtworkPreview from "../components/ArtworkPreview";

export default function UploadArtworkPage() {

  const [images, setImages] = useState<File[]>([]);

  const [tags, setTags] = useState<string[]>([]);

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    medium: "",
    style: "",
    orientation: "",
    width: "",
    height: "",
    year: "",
  });

  const [pricing, setPricing] = useState({
    price: "",
    edition: "Original",
    framed: false,
    available: true,
    shipping: "Worldwide",
  });

  const publishArtwork = () => {
    console.log({
      form,
      pricing,
      tags,
      images,
    });

    alert("Artwork Published Successfully 🚀");
  };

  const saveDraft = () => {
    console.log("Draft Saved");
    alert("Draft Saved");
  };

  type ChecklistProps = {
    completed: boolean;
    title: string;
  };

  function Checklist({
    completed,
    title,
  }: ChecklistProps) {
    return (
      <div className="flex items-center gap-4">
        {completed ? (
          <CheckCircle2
            size={22}
            className="text-green-600"
          />
        ) : (
          <Circle
            size={22}
            className="text-gray-300"
          />
        )}

        <span
          className={`${
            completed
              ? "font-medium text-[#1B1B1B]"
              : "text-gray-500"
          }`}
        >
          {title}
        </span>
      </div>
    );
  }

  return (
    <ArtistLayout>
      <main className="min-w-0">

        {/* Header */}

        <div className="flex items-center justify-between">

          <div>

            <Link
              to="/artist/dashboard"
              className="mb-5 inline-flex items-center gap-2 text-gray-500 hover:text-black"
            >

              <ArrowLeft size={18} />

              Back Dashboard

            </Link>

            <h1 className="text-4xl font-serif font-bold">

              Upload Artwork

            </h1>

            <p className="mt-2 text-gray-500">

              Showcase your artwork to thousands of collectors.

            </p>

          </div>

          <div className="flex gap-4">

            <button
              onClick={saveDraft}
              className="flex items-center gap-2 rounded-xl border border-[#ECE6DB] bg-white px-6 py-3 hover:bg-[#FAF8F4]"
            >

              <Save size={18} />

              Save Draft

            </button>

            <button
              onClick={publishArtwork}
              className="rounded-xl bg-[#D6A354] px-8 py-3 font-medium text-white hover:bg-[#C69649]"
            >

              Publish Artwork

            </button>

          </div>

        </div>

        {/* Layout */}

        <div className="mt-10 grid gap-8 xl:grid-cols-[1.7fr_0.8fr]">

          {/* LEFT */}

          <div className="space-y-8">

            <ImageUploader
              images={images}
              setImages={setImages}
            />

            <ArtworkDetailsForm
              form={form}
              setForm={setForm}
            />

                        {/* Pricing */}

            <PricingCard
              pricing={pricing}
              setPricing={setPricing}
            />

            {/* Tags */}

            <TagSelector
              tags={tags}
              setTags={setTags}
            />

            {/* Submission Checklist */}

            <div className="rounded-[30px] border border-[#ECE6DB] bg-white p-8 shadow-sm">

              <h2 className="text-2xl font-semibold">
                Before Publishing
              </h2>

              <p className="mt-2 text-gray-500">
                Make sure your artwork is ready.
              </p>

              <div className="mt-8 space-y-5">

                <Checklist
                  completed={images.length > 0}
                  title="Upload at least one artwork image"
                />

                <Checklist
                  completed={form.title.length > 0}
                  title="Artwork title added"
                />

                <Checklist
                  completed={form.description.length > 20}
                  title="Artwork description completed"
                />

                <Checklist
                  completed={pricing.price.length > 0}
                  title="Artwork price added"
                />

                <Checklist
                  completed={tags.length > 0}
                  title="At least one tag selected"
                />

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div>

            <ArtworkPreview
              images={images}
              form={form}
              pricing={pricing}
              tags={tags}
            />

          </div>

        </div>
                
      </main>
    </ArtistLayout>
  );
}