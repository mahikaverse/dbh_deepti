type DataTableProps = {
  columns: string[];
  children: React.ReactNode;
};

export default function DataTable({
  columns,
  children,
}: DataTableProps) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-[#ECE6DB] bg-white">

      <table className="w-full">

        <thead className="bg-[#FAF8F4]">

          <tr>

            {columns.map((column) => (
              <th
                key={column}
                className="p-5 text-left font-medium"
              >
                {column}
              </th>
            ))}

          </tr>

        </thead>

        <tbody>{children}</tbody>

      </table>

    </div>
  );
}