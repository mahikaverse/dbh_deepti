import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Camera, ArrowRight } from "lucide-react";
import { uploadImage } from "../api/upload.api";
import { applyArtist } from "../api/artist.api";
import { useArtistStatus } from "../hooks/useArtistStatus";
import { useEffect } from "react";

export default function BecomeArtistPage() {
  const navigate = useNavigate();

  useArtistStatus();

const [loading, setLoading] = useState(false);

const [uploading, setUploading] = useState(false);

const [error, setError] = useState("");

const [profileImageUrl, setProfileImageUrl] = useState("");

const [preview, setPreview] = useState("");

const [phone, setPhone] = useState("");

const [address, setAddress] = useState("");

const [dob, setDob] = useState("");

const [bio, setBio] = useState("");

const [instagram, setInstagram] = useState("");

const [portfolio, setPortfolio] = useState("");
useEffect(() => {
  return () => {
    if (preview) {
      URL.revokeObjectURL(preview);
    }
  };
}, [preview]);
  async function handleSubmit() {
  if (!phone.trim()) {
    setError("Phone number is required.");
    return;
  }

  if (!address.trim()) {
    setError("Address is required.");
    return;
  }

  if (!dob) {
    setError("Please select your date of birth.");
    return;
  }

  if (!profileImageUrl) {
    setError("Please upload a profile image.");
    return;
  }

  try {
    setLoading(true);
    setError("");

    await applyArtist({
      phone,
      address,
      dob,
      bio,
      instagram,
      portfolio,
      profileImage: profileImageUrl,
    });

    navigate("/profile");
  } catch (err: any) {
    setError(
      err?.response?.data?.message ||
      "Application submission failed."
    );
  } finally {
    setLoading(false);
  }
}
  return (
    <div className="min-h-screen bg-[#FAF8F4] py-12">

      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-sm">

        <h1 className="font-serif text-5xl">
          Become a Verified Artist
        </h1>

        <p className="mt-3 text-gray-500">
          Complete your artist profile and start selling your original artwork on Deepti Art.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-8">

          <div>

            <h2 className="mb-5 text-xl font-semibold">
              Personal Information
            </h2>

            <Input
              label="Phone Number"
              value={phone}
              onChange={setPhone}
            />

            <Input
              label="Address"
              value={address}
              onChange={setAddress}
            />

            <label className="mb-2 mt-5 block text-sm font-medium">
              Date of Birth
            </label>

            <input
              type="date"
              value={dob}
              onChange={(e)=>setDob(e.target.value)}
              className="h-12 w-full rounded-xl border border-[#ECE6DB] px-4 outline-none"
            />

          </div>

          <div>

            <h2 className="mb-5 text-xl font-semibold">
              Professional Details
            </h2>

            <label className="mb-2 block text-sm font-medium">
              Bio
            </label>

            <textarea
              rows={5}
              value={bio}
              onChange={(e)=>setBio(e.target.value)}
              className="w-full rounded-xl border border-[#ECE6DB] p-4 outline-none"
            />

            <Input
              label="Instagram URL"
              value={instagram}
              onChange={setInstagram}
            />

            <Input
              label="Portfolio URL"
              value={portfolio}
              onChange={setPortfolio}
            />

          </div>

        </div>

        {/* Profile Image */}

        <div className="mt-10">

          <h2 className="mb-4 text-xl font-semibold">
            Profile Image
          </h2>

          <label className="flex h-56 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#D6A354]">

            {
              preview ? (

                <img
                  src={preview}
                  className="h-full w-full rounded-2xl object-cover"
                />

              ) : (

                <>
                  <Camera
                    size={40}
                    className="text-[#D6A354]"
                  />

                  <p className="mt-4 font-medium">
                    {uploading
                        ? "Uploading Image..."
                        : "Upload Profile Photo"}
                    </p>
                </>

              )
            }

            <input
  hidden
  type="file"
  accept="image/*"
  onChange={async (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setPreview(URL.createObjectURL(file));

    try {
      setUploading(true);

      const url = await uploadImage(
        file,
        "profile"
      );

      setProfileImageUrl(url);
    } catch {
      setError("Image upload failed.");
    } finally {
      setUploading(false);
    }
  }}
/>

          </label>

        </div>

        <div className="mt-10">

  {error && (
    <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-600">
      {error}
    </div>
  )}

  <div className="flex justify-end">

    <button
      onClick={handleSubmit}
      disabled={loading || uploading}
      className="flex items-center gap-3 rounded-xl bg-[#D6A354] px-8 py-4 text-white transition hover:bg-[#C69649] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading
        ? "Submitting..."
        : "Submit Application"}

      {!loading && !uploading && (
        <ArrowRight size={18} />
      )}

    </button>

  </div>

   </div>
      </div>

    </div>
  );
}

function Input({
label,
value,
onChange
}:{
label:string;
value:string;
onChange:(value:string)=>void;
}){

return(

<div className="mt-5">

<label className="mb-2 block text-sm font-medium">

{label}

</label>

<input

value={value}

onChange={(e)=>onChange(e.target.value)}

className="h-12 w-full rounded-xl border border-[#ECE6DB] px-4 outline-none"

/>

</div>

);

}