import {
  User,
  Lock,
  Bell,
  Palette,
  Trash2,
  ChevronRight,
} from "lucide-react";

import AppHeader from "../components/layout/AppHeader";
import Footer from "../components/layout/Footer";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F4]">

      <AppHeader />

      <main className="max-w-5xl mx-auto px-6 py-10">

        {/* HEADER */}

        <div className="mb-10">

          <h1 className="text-5xl font-serif text-[#1B1B1B]">
            Settings
          </h1>

          <p className="mt-2 text-gray-500">
            Manage your account preferences and security.
          </p>

        </div>

        {/* PROFILE */}

        <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-8 shadow-sm">

          <div className="flex items-center gap-3 mb-6">

            <User size={22} />

            <h2 className="text-2xl font-semibold">
              Profile Information
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-5">

            <InputField
              label="Full Name"
              value="Mahika Chaurasiya"
            />

            <InputField
              label="Email"
              value="mahika@gmail.com"
            />

            <InputField
              label="Phone"
              value="+91 9876543210"
            />

            <InputField
              label="Location"
              value="Mumbai, India"
            />

          </div>

          <button className="mt-6 rounded-xl bg-[#D6A354] px-6 py-3 text-white">
            Save Changes
          </button>

        </div>

        {/* SECURITY */}

        <div className="mt-8 rounded-[28px] border border-[#ECE6DB] bg-white p-8 shadow-sm">

          <div className="flex items-center gap-3 mb-6">

            <Lock size={22} />

            <h2 className="text-2xl font-semibold">
              Security
            </h2>

          </div>

          <SettingRow
            title="Change Password"
            description="Update your account password."
          />

          <SettingRow
            title="Two-Factor Authentication"
            description="Add extra security to your account."
          />

        </div>

        {/* NOTIFICATIONS */}

        <div className="mt-8 rounded-[28px] border border-[#ECE6DB] bg-white p-8 shadow-sm">

          <div className="flex items-center gap-3 mb-6">

            <Bell size={22} />

            <h2 className="text-2xl font-semibold">
              Notifications
            </h2>

          </div>

          <SettingRow
            title="Artwork Updates"
            description="Get notified when artists upload new artworks."
          />

          <SettingRow
            title="Inquiry Updates"
            description="Receive inquiry status notifications."
          />

        </div>

        {/* APPEARANCE */}

        <div className="mt-8 rounded-[28px] border border-[#ECE6DB] bg-white p-8 shadow-sm">

          <div className="flex items-center gap-3 mb-6">

            <Palette size={22} />

            <h2 className="text-2xl font-semibold">
              Appearance
            </h2>

          </div>

          <SettingRow
            title="Theme"
            description="Light Mode"
          />

        </div>

        {/* DANGER ZONE */}

        <div className="mt-8 rounded-[28px] border border-red-200 bg-white p-8 shadow-sm">

          <div className="flex items-center gap-3 mb-6 text-red-600">

            <Trash2 size={22} />

            <h2 className="text-2xl font-semibold">
              Danger Zone
            </h2>

          </div>

          <p className="text-gray-500 mb-5">
            Permanently delete your account and all associated data.
          </p>

          <button className="rounded-xl bg-red-500 px-6 py-3 text-white hover:bg-red-600">
            Delete Account
          </button>

        </div>

      </main>

      <Footer />

    </div>
  );
}

function InputField({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>

      <label className="mb-2 block text-sm text-gray-500">
        {label}
      </label>

      <input
        value={value}
        readOnly
        className="w-full rounded-xl border border-[#ECE6DB] bg-[#FAF8F4] p-4 outline-none"
      />

    </div>
  );
}

function SettingRow({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <button className="flex w-full items-center justify-between border-b border-[#F1ECE4] py-5 last:border-none">

      <div className="text-left">

        <h3 className="font-medium">
          {title}
        </h3>

        <p className="text-sm text-gray-500">
          {description}
        </p>

      </div>

      <ChevronRight size={18} />

    </button>
  );
}