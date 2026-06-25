type Props = {
  title: string;
  value: string;
};

export default function ArtistStatCard({
  title,
  value,
}: Props) {
  return (
    <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-6 shadow-sm">

      <p className="text-gray-500">
        {title}
      </p>

      <h2 className="mt-3 text-4xl font-bold">
        {value}
      </h2>

    </div>
  );
}