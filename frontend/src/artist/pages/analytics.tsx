import {
  CheckCircle,
  Clock,
  Image,
  MessageCircle,
  TrendingUp,
} from "lucide-react";

import { useEffect, useState } from "react";

import { getArtistAnalytics } from "../../api/artist.api";

import ArtistLayout from "../layout/ArtistLayout";

export default function AnalyticsPage() {
  const [analytics, setAnalytics] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    try {
      const data = await getArtistAnalytics();

      console.log(data);

      setAnalytics(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <ArtistLayout>
        <div className="flex h-[80vh] items-center justify-center text-xl">
          Loading Analytics...
        </div>
      </ArtistLayout>
    );
  }

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
            title="Total Artworks"
            value={analytics.stats.totalArtworks.toString()}
            icon={<Image size={24} />}
          />

          <StatCard
            title="Approved Artworks"
            value={analytics.stats.approvedArtworks.toString()}
            icon={<CheckCircle size={24} />}
          />

          <StatCard
            title="Pending Review"
            value={analytics.stats.pendingArtworks.toString()}
            icon={<Clock size={24} />}
          />

          <StatCard
            title="Buyer Inquiries"
            value={analytics.stats.totalInquiries.toString()}
            icon={<MessageCircle size={24} />}
          />

        </div>

        {/* Approval Rate */}

        <div className="mt-10 rounded-[30px] border border-[#ECE6DB] bg-white p-8 shadow-sm">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-semibold">
                Approval Rate
              </h2>

              <p className="mt-1 text-gray-500">
                Overall approval percentage of your uploaded artworks
              </p>

            </div>

          </div>

          <div className="mt-8 flex h-[340px] items-center justify-center rounded-2xl bg-[#FAF8F4]">

            <div className="text-center">

              <TrendingUp
                size={52}
                className="mx-auto text-[#D6A354]"
              />

              <h2 className="mt-6 text-5xl font-bold">
                {analytics.stats.approvalRate}%
              </h2>

              <p className="mt-3 text-gray-500">
                Approved Artworks
              </p>

            </div>

          </div>

        </div>

        {/* GRAPH */}

        <div className="mt-10 rounded-[30px] border border-[#ECE6DB] bg-white p-8 shadow-sm">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-semibold">
               Approval Rate              </h2>

              <p className="mt-1 text-gray-500">
              Overall Approval Percentage
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
                {analytics.stats.approvalRate}% Approved
              </p>

            </div>

          </div>

        </div>

                {/* Category Distribution */}

        <div className="mt-10 rounded-[30px] border border-[#ECE6DB] bg-white p-8 shadow-sm">

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-semibold">
              Category Distribution
            </h2>

            <span className="text-sm text-gray-500">
              Approved Artworks
            </span>

          </div>

          <div className="mt-8 space-y-4">

            {analytics.categoryStats.length > 0 ? (

              analytics.categoryStats.map((item: any) => (

                <div
                  key={item.category}
                  className="flex items-center justify-between rounded-2xl border border-[#ECE6DB] bg-[#FAF8F4] p-5"
                >

                  <div>

                    <h3 className="font-semibold">
                      {item.category}
                    </h3>

                    <p className="text-sm text-gray-500">
                      Artwork Category
                    </p>

                  </div>

                  <div className="rounded-xl bg-[#D6A354] px-4 py-2 text-white font-semibold">

                    {item._count.category}

                  </div>

                </div>

              ))

            ) : (

              <div className="rounded-2xl border border-dashed border-[#ECE6DB] bg-[#FAF8F4] p-10 text-center">

                <h3 className="text-xl font-semibold">
                  No Approved Artworks
                </h3>

                <p className="mt-2 text-gray-500">
                  Upload artworks and get them approved to view analytics.
                </p>

              </div>

            )}

          </div>

        </div>

        {/* Summary */}

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <InsightCard
            title="Approval Rate"
            value={`${analytics.stats.approvalRate}%`}
          />

          <InsightCard
            title="Approved Artworks"
            value={analytics.stats.approvedArtworks.toString()}
          />

          <InsightCard
            title="Pending Review"
            value={analytics.stats.pendingArtworks.toString()}
          />

        </div>

      </main>
    </ArtistLayout>
  );
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

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FAF8F4] text-[#D6A354]">

          {icon}

        </div>

      </div>

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
    <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-8 shadow-sm">

      <Image
        size={30}
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
}
       