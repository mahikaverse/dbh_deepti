const activities = [
  "New inquiry received",
  "Artist approved",
  "Artwork uploaded",
  "New user registered",
];

export default function ActivityTimeline() {
  return (
    <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-6">

      <h2 className="text-xl font-semibold">
        Activity Feed
      </h2>

      <div className="mt-6 space-y-6">

        {activities.map((activity) => (
          <div
            key={activity}
            className="flex gap-4"
          >

            <div className="mt-2 h-3 w-3 rounded-full bg-[#D6A354]" />

            <div>

              <p>{activity}</p>

              <span className="text-sm text-gray-500">
                2 hours ago
              </span>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}