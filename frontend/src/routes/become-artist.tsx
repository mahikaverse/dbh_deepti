import { useEffect, useState, type ReactNode } from "react";
import { ArrowRight, Camera } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { applyArtist } from "../api/artist.api";
import { uploadImage } from "../api/upload.api";
import { useArtistStatus } from "../hooks/useArtistStatus";

const pendingMessage =
  "Your artist application is currently under review by our verification team. You'll receive a notification as soon as the review process is completed.";

export default function BecomeArtistPage() {
  const navigate = useNavigate();
  const { artistStatus, loading: statusLoading, refresh } = useArtistStatus();

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

  const isPending = artistStatus?.status === "PENDING";
  const isApproved = artistStatus?.status === "APPROVED";
  const canApplyAgain =
    !artistStatus?.hasProfile || artistStatus?.status === "REJECTED";
  const isRejected =
  artistStatus?.status === "REJECTED";  

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

  await refresh();

  navigate("/profile");
}
catch (err: any) {
  const backendMessage =
    err?.response?.data?.message;

  if (
    err?.response?.status === 409
  ) {
    setError(
      backendMessage ||
      pendingMessage
    );
  }
  else {
    setError(
      backendMessage ||
      "Something went wrong while submitting your application. Please try again."
    );
  }
}
finally {
  setLoading(false);
}
  }

  return (
    <div className="min-h-screen bg-[#FAF8F4] py-12">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-sm">
       <h1 className="font-serif text-5xl">
  {
    isRejected
      ? "Reapply for Artist Verification"
      : "Become a Verified Artist"
  }
</h1>

       <p className="mt-3 text-gray-500">
  {
    isRejected
      ? "Update your profile based on the review feedback and submit your application again."
      : "Complete your artist profile and start selling your original artwork on Deepti Art."
  }
</p>

        {statusLoading ? (
          <StatusCard title="Checking your application status..." />
        ) : isPending ? (
          <StatusCard
            title="Application Under Review"
            description={pendingMessage}
          />
        ) : isApproved ? (
          <StatusCard
            title="Artist Profile Approved"
            description="Your artist account is active. Visit your dashboard to manage artworks and inquiries."
            action={
              <Link
                to="/artist/dashboard"
                className="inline-flex items-center gap-2 rounded-xl bg-[#08233F] px-5 py-3 text-sm font-medium text-white transition hover:opacity-95"
              >
                Go to Artist Dashboard
                <ArrowRight size={16} />
              </Link>
            }
          />
        ) : canApplyAgain ? (
          <>
          {
  isRejected &&
  artistStatus?.rejectionReason && (
    <div className="mb-8 rounded-3xl border border-red-200 bg-red-50 p-6">

      <div className="flex items-start gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600 text-xl">
          ⚠️
        </div>

        <div>

          <h3 className="text-lg font-semibold text-red-700">
            Previous Application Feedback
          </h3>

          <p className="mt-3 text-red-600 leading-7">
            {artistStatus.rejectionReason}
          </p>

          <p className="mt-4 text-sm text-gray-600">
            Update your details below and submit your application again for review.
          </p>

        </div>

      </div>

    </div>
  )
}



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
                  onChange={(e) => setDob(e.target.value)}
                  className="h-12 w-full rounded-xl border border-[#ECE6DB] px-4 outline-none"
                />
              </div>

              <div>
                <h2 className="mb-5 text-xl font-semibold">
                  Professional Details
                </h2>

                <label className="mb-2 block text-sm font-medium">Bio</label>

                <textarea
                  rows={5}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
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

            <div className="mt-10">
              <h2 className="mb-4 text-xl font-semibold">Profile Image</h2>

              <label className="flex h-56 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#D6A354]">
                {preview ? (
                  <img
                    src={preview}
                    className="h-full w-full rounded-2xl object-cover"
                  />
                ) : (
                  <>
                    <Camera size={40} className="text-[#D6A354]" />

                    <p className="mt-4 font-medium">
                      {uploading ? "Uploading Image..." : "Upload Profile Photo"}
                    </p>
                  </>
                )}

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

                      const url = await uploadImage(file, "profile");

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
                  {
  loading
    ? "Submitting..."
    : isRejected
      ? "Reapply for Verification"
      : "Submit Application"
}

                  {!loading && !uploading && <ArrowRight size={18} />}
                </button>
              </div>
            </div>
          </>
        ) : (
          <StatusCard
            title="Artist application unavailable"
            description="Your current artist application status does not allow a new submission yet."
          />
        )}
      </div>
    </div>
  );
}

function StatusCard({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mt-10 rounded-3xl border border-[#ECE6DB] bg-[#FFFDF9] p-8">
      <h2 className="text-2xl font-semibold text-[#1B1B1B]">{title}</h2>

      {description && <p className="mt-3 text-gray-600">{description}</p>}

      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="mt-5">
      <label className="mb-2 block text-sm font-medium">{label}</label>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 w-full rounded-xl border border-[#ECE6DB] px-4 outline-none"
      />
    </div>
  );
}