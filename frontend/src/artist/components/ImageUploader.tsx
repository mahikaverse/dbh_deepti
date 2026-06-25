import { useRef, useState } from "react";
import { UploadCloud, X, ImagePlus } from "lucide-react";

type Props = {
  images: File[];
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
};

export default function ImageUploader({
  images,
  setImages,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (
    files: FileList | null
  ) => {
    if (!files) return;

    const selected = Array.from(files);

    setImages((prev) => [...prev, ...selected]);
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="rounded-[30px] border border-[#ECE6DB] bg-white p-6 shadow-sm">

      {/* Heading */}

      <div className="mb-5">

        <h2 className="text-2xl font-semibold text-[#1B1B1B]">
          Artwork Images
        </h2>

        <p className="mt-1 text-gray-500">
          Upload high-quality images of your artwork.
        </p>

      </div>

      {/* Upload Box */}

      <div
        onClick={() => inputRef.current?.click()}
        className="flex h-72 cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-[#D6A354] bg-[#FFFDF8] transition hover:bg-[#FFF8EC]"
      >

        <UploadCloud
          size={50}
          className="text-[#D6A354]"
        />

        <h3 className="mt-5 text-xl font-semibold">
          Drag & Drop Artwork
        </h3>

        <p className="mt-2 text-gray-500">
          or click to browse files
        </p>

        <button
          className="mt-6 rounded-xl bg-[#D6A354] px-6 py-3 text-white"
          type="button"
        >
          Select Images
        </button>

      </div>

      <input
        multiple
        hidden
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={(e) =>
          handleFiles(e.target.files)
        }
      />

      {/* Preview */}

      {images.length > 0 && (

        <div className="mt-8">

          <h3 className="mb-4 text-lg font-semibold">
            Preview
          </h3>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">

            {images.map((image, index) => (

              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-[#ECE6DB]"
              >

                <img
                  src={URL.createObjectURL(image)}
                  alt=""
                  className="h-52 w-full object-cover"
                />

                <button
                  onClick={() =>
                    removeImage(index)
                  }
                  className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow"
                >

                  <X size={18} />

                </button>

              </div>

            ))}

            {/* Add More */}

            <div
              onClick={() =>
                inputRef.current?.click()
              }
              className="flex h-52 cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-[#ECE6DB]"
            >

              <ImagePlus size={34} />

              <p className="mt-3 text-sm">
                Add More
              </p>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}