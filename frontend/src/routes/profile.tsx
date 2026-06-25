import {
  Heart,
  MessageSquare,
  Bell,
  Settings,
  ArrowRight,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

import AppHeader from "../components/layout/AppHeader";
import Footer from "../components/layout/Footer";

export default function ProfilePage() {
const { user } = useAuth();
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
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                  user.name
                )}&background=D6A354&color=ffffff&size=256`}
                alt={user.name}
                className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-lg"
              />

                <h1 className="mt-4 text-4xl font-serif text-[#1B1B1B]">
                 {user.name}
                </h1>
                
                <p className="mt-2 text-gray-600">
                {user.email}
                </p>



                <p className="mt-1 text-gray-500">
                  {user.role === "ADMIN"
                  ? "Administrator"
                  : user.role === "ARTIST"
                  ? "Verified Artist"
                  : "Art Collector"}
                </p>

                 
                <p className="mt-2 text-sm text-gray-400">
                 Member of Deepti Art
                </p>

              </div>

              <button className="mt-5 md:mt-0 rounded-xl bg-[#D6A354] px-6 py-3 text-white font-medium hover:bg-[#C69649]">
                Edit Profile
              </button>

            </div>

          </div>

        </div>

        {/* STATS */}

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <StatCard
            value="12"
            label="Saved Artworks"
          />

          <StatCard
            value="6"
            label="Inquiries"
          />

          <StatCard
            value="8"
            label="Following Artists"
          />

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

              <ActivityItem
                title='Saved "Lotus Serenity"'
                time="2 hours ago"
              />

              <ActivityItem
                title='Submitted Inquiry for "Sunset Over Silence"'
                time="Yesterday"
              />

              <ActivityItem
                title="Started Following Priya Sharma"
                time="3 days ago"
              />

              <ActivityItem
                title='Saved "Golden Horizon"'
                time="1 week ago"
              />

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