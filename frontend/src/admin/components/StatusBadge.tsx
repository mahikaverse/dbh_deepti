export default function StatusBadge({
  status,
}: {
  status: string;
}) {
  const colors = {
    Pending:
      "bg-yellow-100 text-yellow-700",

    Approved:
      "bg-green-100 text-green-700",

    Rejected:
      "bg-red-100 text-red-700",

    Contacted:
      "bg-blue-100 text-blue-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-sm ${
        colors[
          status as keyof typeof colors
        ]
      }`}
    >
      {status}
    </span>
  );
}