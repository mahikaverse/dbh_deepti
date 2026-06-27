import {
  Lock,
  Bell,
  Palette,
  Trash2,
  ChevronRight,
  LogOut,
  Shield,
} from "lucide-react";

import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import ArtistLayout from "../artist/layout/ArtistLayout";

export default function ArtistSettingsPage() {
  const { logout } = useAuth();

  const [openSection, setOpenSection] =
    useState<string | null>(null);

  const [notifications, setNotifications] =
    useState({
      artwork: true,
      inquiry: true,
      artist: true,
      marketing: false,
    });

  const [theme, setTheme] =
    useState("light");

  return (
    <ArtistLayout>
      <div className="mx-auto max-w-4xl">
        {/* Header */}

        <div className="mb-10">
          <h1 className="font-serif text-5xl text-[#1B1B1B]">
            Settings
          </h1>

          <p className="mt-2 text-gray-500">
            Manage your account preferences,
            notifications and security.
          </p>
        </div>

        {/* Security */}

        <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-8 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <Shield size={22} />

            <h2 className="text-2xl font-semibold">
              Security
            </h2>
          </div>

          <SettingRow
            title="Change Password"
            description="Update your account password."
            onClick={() =>
              setOpenSection(
                openSection === "password"
                  ? null
                  : "password"
              )
            }
          />

          {openSection === "password" && (
            <div className="mt-6 space-y-4">
              <input
                type="password"
                placeholder="Current Password"
                className="w-full rounded-xl border border-[#ECE6DB] p-4 outline-none"
              />

              <input
                type="password"
                placeholder="New Password"
                className="w-full rounded-xl border border-[#ECE6DB] p-4 outline-none"
              />

              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full rounded-xl border border-[#ECE6DB] p-4 outline-none"
              />

              <button className="rounded-xl bg-[#D6A354] px-6 py-3 text-white hover:bg-[#C69649]">
                Update Password
              </button>
            </div>
          )}

          <SettingRow
            title="Two Factor Authentication"
            description="Coming Soon"
            disabled
          />
        </div>

        {/* Notifications */}

        <div className="mt-8 rounded-[28px] border border-[#ECE6DB] bg-white p-8 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <Bell size={22} />

            <h2 className="text-2xl font-semibold">
              Notifications
            </h2>
          </div>

          <div className="space-y-5">
            <ToggleRow
              title="Artwork Updates"
              value={notifications.artwork}
              onChange={() =>
                setNotifications({
                  ...notifications,
                  artwork:
                    !notifications.artwork,
                })
              }
            />

            <ToggleRow
              title="Inquiry Updates"
              value={notifications.inquiry}
              onChange={() =>
                setNotifications({
                  ...notifications,
                  inquiry:
                    !notifications.inquiry,
                })
              }
            />

            <ToggleRow
              title="Artist Updates"
              value={notifications.artist}
              onChange={() =>
                setNotifications({
                  ...notifications,
                  artist:
                    !notifications.artist,
                })
              }
            />

            <ToggleRow
              title="Marketing Emails"
              value={notifications.marketing}
              onChange={() =>
                setNotifications({
                  ...notifications,
                  marketing:
                    !notifications.marketing,
                })
              }
            />
          </div>
        </div>

                {/* Appearance */}

        <div className="mt-8 rounded-[28px] border border-[#ECE6DB] bg-white p-8 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <Palette size={22} />

            <h2 className="text-2xl font-semibold">
              Appearance
            </h2>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setTheme("light")}
              className={`rounded-xl border px-6 py-3 transition ${
                theme === "light"
                  ? "bg-[#D6A354] text-white border-[#D6A354]"
                  : "bg-white border-[#ECE6DB]"
              }`}
            >
              Light Mode
            </button>

            <button
              disabled
              className="rounded-xl border border-[#ECE6DB] px-6 py-3 opacity-50"
            >
              Dark Mode (Soon)
            </button>
          </div>
        </div>

        {/* Session */}

        <div className="mt-8 rounded-[28px] border border-[#ECE6DB] bg-white p-8 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <LogOut size={22} />

            <h2 className="text-2xl font-semibold">
              Session
            </h2>
          </div>

          <button
            onClick={logout}
            className="rounded-xl bg-[#08233F] px-6 py-3 text-white transition hover:bg-[#061A2F]"
          >
            Logout
          </button>
        </div>

        {/* Danger Zone */}

        <div className="mt-8 rounded-[28px] border border-red-200 bg-white p-8 shadow-sm">
          <div className="mb-6 flex items-center gap-3 text-red-600">
            <Trash2 size={22} />

            <h2 className="text-2xl font-semibold">
              Danger Zone
            </h2>
          </div>

          <p className="mb-5 text-gray-500">
            Permanently delete your account and all associated data.
          </p>

          <button className="rounded-xl bg-red-500 px-6 py-3 text-white transition hover:bg-red-600">
            Delete Account
          </button>
        </div>
      </div>
    </ArtistLayout>
  );
}

type SettingRowProps = {
  title: string;
  description: string;
  onClick?: () => void;
  disabled?: boolean;
};

function SettingRow({
  title,
  description,
  onClick,
  disabled = false,
}: SettingRowProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex w-full items-center justify-between border-b border-[#F1ECE4] py-5 text-left last:border-none ${
        disabled
          ? "cursor-not-allowed opacity-50"
          : "hover:bg-[#FAF8F4]"
      }`}
    >
      <div>
        <h3 className="font-medium">
          {title}
        </h3>

        <p className="text-sm text-gray-500">
          {description}
        </p>
      </div>

      {!disabled && (
        <ChevronRight size={18} />
      )}
    </button>
  );
}

type ToggleRowProps = {
  title: string;
  value: boolean;
  onChange: () => void;
};

function ToggleRow({
  title,
  value,
  onChange,
}: ToggleRowProps) {
  return (
    <div className="flex items-center justify-between">
      <span>{title}</span>

      <button
        onClick={onChange}
        className={`relative h-7 w-14 rounded-full transition ${
          value
            ? "bg-[#D6A354]"
            : "bg-gray-300"
        }`}
      >
        <div
          className={`absolute top-0.5 h-6 w-6 rounded-full bg-white transition-all ${
            value
              ? "left-7"
              : "left-0.5"
          }`}
        />
      </button>
    </div>
  );
}