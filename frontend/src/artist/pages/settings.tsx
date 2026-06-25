import {
  User,
  Lock,
  Bell,
  CreditCard,
  Globe,
  Moon,
  LogOut,
  Trash2,
  ChevronRight,
} from "lucide-react";

import ArtistLayout from "../layout/ArtistLayout";

export default function ArtistSettingsPage() {
  return (
    <ArtistLayout>
      <main className="min-w-0">

        {/* Header */}

        <div>

          <h1 className="text-4xl font-serif font-bold">
            Settings
          </h1>

          <p className="mt-2 text-gray-500">
            Manage your account preferences and security.
          </p>

        </div>

        {/* Account */}

        <Section title="Account">

          <SettingRow
            icon={<User size={20} />}
            title="Personal Information"
            subtitle="Update your profile details"
          />

          <SettingRow
            icon={<Lock size={20} />}
            title="Change Password"
            subtitle="Keep your account secure"
          />

        </Section>

        {/* Notifications */}

        <Section title="Notifications">

          <ToggleRow
            icon={<Bell size={20} />}
            title="Email Notifications"
          />

          <ToggleRow
            icon={<Bell size={20} />}
            title="Push Notifications"
          />

        </Section>

        {/* Payments */}

        <Section title="Payments">

          <SettingRow
            icon={<CreditCard size={20} />}
            title="Bank Account"
            subtitle="Manage payout account"
          />

          <SettingRow
            icon={<CreditCard size={20} />}
            title="Transaction History"
            subtitle="View payment records"
          />

        </Section>

        {/* Preferences */}

        <Section title="Preferences">

          <SettingRow
            icon={<Globe size={20} />}
            title="Language"
            subtitle="English"
          />

          <SettingRow
            icon={<Moon size={20} />}
            title="Appearance"
            subtitle="Light Mode"
          />

        </Section>

        {/* Danger */}

        <Section title="Danger Zone">

          <button className="flex w-full items-center justify-between rounded-2xl border border-red-200 bg-red-50 p-5 transition hover:bg-red-100">

            <div className="flex items-center gap-4">

              <div className="rounded-xl bg-red-100 p-3">

                <Trash2
                  size={20}
                  className="text-red-600"
                />

              </div>

              <div className="text-left">

                <h3 className="font-semibold text-red-600">
                  Delete Account
                </h3>

                <p className="text-sm text-red-400">
                  This action cannot be undone.
                </p>

              </div>

            </div>

            <ChevronRight />

          </button>

        </Section>

        {/* Logout */}

        <button className="mt-10 flex items-center gap-3 rounded-xl bg-black px-6 py-4 text-white">

          <LogOut size={20} />

          Logout

        </button>

      </main>
    </ArtistLayout>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-10">

      <h2 className="mb-5 text-2xl font-semibold">
        {title}
      </h2>

      <div className="space-y-4">
        {children}
      </div>

    </div>
  );
}

function SettingRow({
  icon,
  title,
  subtitle,
}: any) {
  return (
    <button className="flex w-full items-center justify-between rounded-2xl border border-[#ECE6DB] bg-white p-5 shadow-sm transition hover:bg-[#FAF8F4]">

      <div className="flex items-center gap-4">

        <div className="rounded-xl bg-[#FAF8F4] p-3">

          {icon}

        </div>

        <div className="text-left">

          <h3 className="font-semibold">
            {title}
          </h3>

          <p className="text-sm text-gray-500">
            {subtitle}
          </p>

        </div>

      </div>

      <ChevronRight />

    </button>
  );
}

function ToggleRow({
  icon,
  title,
}: any) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-[#ECE6DB] bg-white p-5 shadow-sm">

      <div className="flex items-center gap-4">

        <div className="rounded-xl bg-[#FAF8F4] p-3">

          {icon}

        </div>

        <h3 className="font-semibold">
          {title}
        </h3>

      </div>

      <label className="relative inline-flex cursor-pointer items-center">

        <input
          type="checkbox"
          defaultChecked
          className="peer sr-only"
        />

        <div className="peer h-7 w-12 rounded-full bg-gray-300 transition peer-checked:bg-[#D6A354]"></div>

        <div className="absolute left-1 h-5 w-5 rounded-full bg-white transition peer-checked:translate-x-5"></div>

      </label>

    </div>
  );
}