import {
  Eye,
  Heart,
  MessageCircle,
  TrendingUp,
  Users,
  Image,
} from "lucide-react";

import ArtistLayout from "../layout/ArtistLayout";

export default function AnalyticsPage() {
  return (
    <ArtistLayout>
      <main className="min-w-0">

        {/* Header */}

        <div>

          <h1 className="text-4xl font-serif font-bold">
            Analytics
          </h1>

          <p className="mt-2 text-gray-500">
            Monitor your artwork performance and audience insights.
          </p>

        </div>

        {/* TOP CARDS */}

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <StatCard
            title="Total Views"
            value="18.5K"
            icon={<Eye size={24} />}
          />

          <StatCard
            title="Likes"
            value="2,418"
            icon={<Heart size={24} />}
          />

          <StatCard
            title="Inquiries"
            value="142"
            icon={<MessageCircle size={24} />}
          />

          <StatCard
            title="Followers"
            value="826"
            icon={<Users size={24} />}
          />

        </div>

        {/* GRAPH */}

        <div className="mt-10 rounded-[30px] border border-[#ECE6DB] bg-white p-8 shadow-sm">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-semibold">
                Performance Overview
              </h2>

              <p className="mt-1 text-gray-500">
                Last 6 Months
              </p>

            </div>

          </div>

          <div className="mt-8 flex h-[340px] items-center justify-center rounded-2xl bg-[#FAF8F4]">

            <div className="text-center">

              <TrendingUp
                size={45}
                className="mx-auto text-[#D6A354]"
              />

              <p className="mt-5 text-gray-500">
                Recharts Line Chart Here
              </p>

            </div>

          </div>

        </div>

        {/* ARTWORK PERFORMANCE */}

        <div className="mt-10 grid gap-6 lg:grid-cols-2">

          <div className="rounded-[30px] border border-[#ECE6DB] bg-white p-8">

            <h2 className="text-2xl font-semibold">
              Top Performing Artwork
            </h2>

            <div className="mt-6 space-y-6">

              <ArtworkPerformance
                title="Golden Horizon"
                views="8,250"
                likes="624"
              />

              <ArtworkPerformance
                title="Sunset Bliss"
                views="6,120"
                likes="431"
              />

              <ArtworkPerformance
                title="Urban Dreams"
                views="4,210"
                likes="298"
              />

            </div>

          </div>

          {/* Audience */}

          <div className="rounded-[30px] border border-[#ECE6DB] bg-white p-8">

            <h2 className="text-2xl font-semibold">
              Audience Insights
            </h2>

            <div className="mt-8 space-y-6">

              <AudienceRow
                title="Returning Visitors"
                value="68%"
              />

              <AudienceRow
                title="New Visitors"
                value="32%"
              />

              <AudienceRow
                title="Conversion Rate"
                value="12%"
              />

              <AudienceRow
                title="Avg. Session"
                value="4m 52s"
              />

            </div>

          </div>

        </div>

        {/* MONTHLY STATS */}

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <InsightCard
            title="Monthly Growth"
            value="+18%"
          />

          <InsightCard
            title="Engagement Rate"
            value="9.8%"
          />

          <InsightCard
            title="Artwork Published"
            value="24"
          />

        </div>

      </main>
    </ArtistLayout>
  );
}

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-gray-500">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            {value}
          </h2>

        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FAF8F4]">

          {icon}

        </div>

      </div>

    </div>
  );
}

function ArtworkPerformance({
  title,
  views,
  likes,
}: {
  title: string;
  views: string;
  likes: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-[#FAF8F4] p-5">

      <div>

        <h3 className="font-semibold">
          {title}
        </h3>

        <p className="mt-2 text-sm text-gray-500">

          {views} Views

        </p>

      </div>

      <div className="flex items-center gap-2 text-red-500">

        <Heart size={18} />

        {likes}

      </div>

    </div>
  );
}

function AudienceRow({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="flex justify-between border-b border-[#F4EFE7] pb-4">

      <span className="text-gray-500">
        {title}
      </span>

      <span className="font-semibold">
        {value}
      </span>

    </div>
  );
}

function InsightCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-8">

      <Image
        size={28}
        className="text-[#D6A354]"
      />

      <h3 className="mt-6 text-gray-500">

        {title}

      </h3>

      <h2 className="mt-2 text-4xl font-bold">

        {value}

      </h2>

    </div>
  );
}