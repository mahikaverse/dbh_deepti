import {
  Heart,
  MessageSquare,
  Bell,
  Settings,
  ArrowRight,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { Link } from "react-router-dom";

import AppHeader from "../components/layout/AppHeader";
import Footer from "../components/layout/Footer";

export default function ProfilePage() {
const { user } = useAuth();

const [isEditing, setIsEditing] = useState(false);

const [formData, setFormData] = useState({
  name: user?.name || "",
  username: user?.username || "",
  email: user?.email || "",
  bio: user?.bio || "",
  location: user?.location || "",
  instagram: user?.instagram || "",
  website: user?.website || "",
});

const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement
  >
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSave = async () => {
  try {
    // API call yaha aayega later

    console.log(formData);

    setIsEditing(false);
  } catch (err) {
    console.error(err);
  }
};


if (!user) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FAF8F4]">
      <p className="text-lg text-gray-500">Loading profile...</p>
    </div>
  );
}

  return (
    <div className="min-h-screen bg-[#FAF8F4]">

      <AppHeader />

      <main className="mx-auto w-full max-w-4xl px-6 py-10">

        {/* HERO */}

        <div className="overflow-hidden rounded-[32px] border border-[#ECE6DB] bg-white shadow-sm">

          {/* Banner */}

          <div className="h-34 overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=1600"
              alt=""
              className="h-full w-full object-cover"
            />

          </div>

          {/* Profile Info */}

          <div className="px-8 pb-8">

            <div className="-mt-16 flex flex-col md:flex-row md:items-end md:justify-between">

              <div>

                <img
  src={
    user.avatar ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      user.name
    )}&background=D6A354&color=ffffff&size=256`
  }
  alt={user.name}
  className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-lg"
/>

                {
                isEditing ? (
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-4 rounded-xl border border-[#ECE6DB] p-3 text-4xl font-serif outline-none"
                  />
                ) : (
                  <h1 className="mt-4 text-4xl font-serif text-[#1B1B1B]">
                    {formData.name}
                  </h1>
                )
              }

                {
                isEditing ? (
                  <input
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="username"
                    className="mt-2 rounded-xl border border-[#ECE6DB] p-3 outline-none"
                  />
                ) : (
                  formData.username && (
                    <p className="mt-1 text-[#D6A354] text-lg">
                      @{formData.username}
                    </p>
                  )
                )
              }
                
                {
              isEditing ? (
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 rounded-xl border border-[#ECE6DB] p-3 outline-none"
                />
              ) : (
                <p className="mt-2 text-gray-600">
                  {formData.email}
                </p>
              )
            }

                {
              isEditing ? (
                <textarea
                  name="bio"
                  placeholder="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  rows={4}
                  className="mt-4 w-full rounded-xl border border-[#ECE6DB] p-4 outline-none"
                />
              ) : (
                <p className="mt-4 max-w-2xl text-gray-600 leading-relaxed">
                  {formData.bio ||
                    "Art enthusiast exploring original creations and discovering talented artists around the world."}
                </p>
              )
            }
               {
              isEditing ? (
                <div className="mt-4 flex flex-col gap-3">

                  <input
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                    className="rounded-xl border border-[#ECE6DB] p-3 outline-none"
                  />

                  <input
                    name="instagram"
                    placeholder="Instagram Username"
                    value={formData.instagram}
                    onChange={handleChange}
                    className="rounded-xl border border-[#ECE6DB] p-3 outline-none"
                  />

                  <input
                    name="website"
                    placeholder="Website"
                    value={formData.website}
                    onChange={handleChange}
                    className="rounded-xl border border-[#ECE6DB] p-3 outline-none"
                  />

                </div>
              ) : (
                <div className="mt-4 flex flex-wrap gap-5 text-sm text-gray-500">

                  {formData.location && (
                    <span>📍 {formData.location}</span>
                  )}

                  {formData.instagram && (
                    <span>📷 @{formData.instagram}</span>
                  )}

                  {formData.website && (
                    <a
                      href={formData.website}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#D6A354]"
                    >
                      🌐 Website
                    </a>
                  )}

                </div>
              )
            }



                <div className="mt-4">

              <span
                className={`
                  inline-flex rounded-full px-4 py-2 text-sm font-medium
                  ${
                    user.role === "ADMIN"
                      ? "bg-red-100 text-red-700"
                      : user.role === "ARTIST"
                      ? "bg-green-100 text-green-700"
                      : "bg-blue-100 text-blue-700"
                  }
                `}
              >
                {user.role === "ADMIN"
                  ? "Administrator"
                  : user.role === "ARTIST"
                  ? "Verified Artist"
                  : "Art Collector"}
              </span>

            </div>

                 
                <p className="mt-4 text-sm text-gray-400">
                  Member of Deepti Art Community
                </p>

              </div>

             <div className="mt-5 flex flex-col gap-3 md:mt-0">

              {
              !isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="rounded-xl bg-[#D6A354] px-6 py-3 font-medium text-white hover:bg-[#C69649]"
                >
                  Edit Profile
                </button>
              ) : (
                <>
                  <button
                    onClick={handleSave}
                    className="rounded-xl bg-green-600 px-6 py-3 font-medium text-white"
                  >
                    Save Changes
                  </button>

                  <button
                    onClick={() => {
                      setIsEditing(false);

                      setFormData({
                        name: user.name,
                        username: user.username || "",
                        email: user.email,
                        bio: user.bio || "",
                        location: user.location || "",
                        instagram: user.instagram || "",
                        website: user.website || "",
                      });
                    }}
                    className="rounded-xl border border-[#ECE6DB] px-6 py-3"
                  >
                    Cancel
                  </button>
                </>
              )
            }

              {user.role === "USER" && (
                <Link
                  to="/become-artist"
                  className="rounded-xl bg-[#08233F] px-6 py-3 text-center font-medium text-white"
                >
                  Become Artist
                </Link>
              )}

            </div>

            </div>

          </div>

        </div>

         

        {/* QUICK ACTIONS */}

        <section className="mt-12">

          <h2 className="mb-6 text-3xl font-serif">
            Quick Actions
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <ActionCard
              icon={<Heart size={24} />}
              title="Wishlist"
              description="View saved artworks"
              link="/wishlist"
            />

            <ActionCard
              icon={<MessageSquare size={24} />}
              title="My Inquiries"
              description="Track inquiry status"
              link="/inquiries"
            />

            <ActionCard
              icon={<Bell size={24} />}
              title="Notifications"
              description="Latest updates"
              link="/notifications"
            />

            <ActionCard
              icon={<Settings size={24} />}
              title="Settings"
              description="Manage account"
              link="/settings"
            />

          </div>

        </section>

        {/* RECENT ACTIVITY */}

        <section className="mt-14">

          <h2 className="mb-6 text-3xl font-serif">
            Recent Activity
          </h2>

          <div className="rounded-[32px] border border-[#ECE6DB] bg-white p-6">

            <div className="space-y-6">

              <div className="rounded-[32px] border border-[#ECE6DB] bg-white p-12 text-center">

            <p className="text-lg text-gray-500">
              Your activity history will appear here as you interact with artworks and artists.
            </p>

          </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}

function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-8 text-center shadow-sm">

      <h3 className="text-4xl font-bold text-[#1B1B1B]">
        {value}
      </h3>

      <p className="mt-2 text-gray-500">
        {label}
      </p>

    </div>
  );
}

function ActionCard({
  icon,
  title,
  description,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <Link
      to={link}
      className="group"
    >

      <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">

        <div className="mb-4 text-[#D6A354]">
          {icon}
        </div>

        <h3 className="font-semibold text-lg">
          {title}
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          {description}
        </p>

        <div className="mt-5 flex items-center gap-2 text-[#D6A354]">

          <span className="text-sm">
            Open
          </span>

          <ArrowRight
            size={16}
            className="transition group-hover:translate-x-1"
          />

        </div>

      </div>

    </Link>
  );
}

function ActivityItem({
  title,
  time,
}: {
  title: string;
  time: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-[#F1ECE4] pb-4">

      <div>

        <p className="font-medium text-[#1B1B1B]">
          {title}
        </p>

      </div>

      <span className="text-sm text-gray-500">
        {time}
      </span>

    </div>
  );
}