import { useEffect, useState } from "react";

import AdminLayout from "../layout/AdminLayout";

import {
  getInquiries,
} from "../../api/admin.api";


export default function AdminInquiries() {
  const [inquiries, setInquiries] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  const [statusFilter, setStatusFilter] =
  useState("all");
  
  const filteredInquiries =
  statusFilter === "all"
    ? inquiries
    : inquiries.filter(
        (item) =>
          item.status === statusFilter
      );
  useEffect(() => {
  loadInquiries();
}, []);

const loadInquiries = async () => {
  try {
    const data = await getInquiries();

    setInquiries(data);
    console.log(data);
    console.log(JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
};
if (loading) {
  return (
    <AdminLayout>
      <div className="flex h-[60vh] items-center justify-center text-lg font-medium">
        Loading Inquiries...
      </div>
    </AdminLayout>
  );
}
  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-4xl">
            Inquiry Management
          </h1>

          <p className="mt-2 text-gray-500">
            Manage customer inquiries and artist requests.
          </p>
        </div>

        {/* Status Filter */}
        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
          className="h-12 rounded-xl border border-[#ECE6DB] bg-white px-4 outline-none"
        >
          <option value="all">
All Status
</option>

<option value="NEW">
New
</option>

<option value="CONTACTED">
Contacted
</option>

<option value="CONFIRMED">
Confirmed
</option>

<option value="COMPLETED">
Completed
</option>

<option value="CANCELLED">
Cancelled
</option>
        </select>
      </div>

      {/* Table */}
        <div className="mt-8 overflow-hidden rounded-[28px] border border-[#ECE6DB] bg-white">
          <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#FAF8F4]">
            <tr>
              <th className="p-5 text-left">ID</th>
              <th className="p-5 text-left">User</th>
              <th className="p-5 text-left">Artwork</th>
              <th className="p-5 text-left">Artist</th>
              <th className="p-5 text-left">Status</th>
              <th className="p-5 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredInquiries.map((item) => (
              <tr
                key={item.id}
                className="border-t border-[#ECE6DB]"
              >
                <td className="p-5 font-mono">
                     {item.id.slice(0, 10)}...
                </td>                
                <td className="p-5">{item.user?.name ?? "-"}</td>
                <td className="p-5">{item.artwork?.title ?? "-"}</td>
                <td className="p-5">{item.artwork?.artist?.name ?? "-"}</td>

                <td className="p-5">
                 <span
  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm ${
      item.status === "NEW"
      ? "bg-yellow-100 text-yellow-700"
      : item.status === "CONTACTED"
      ? "bg-blue-100 text-blue-700"
      : item.status === "CONFIRMED"
      ? "bg-green-100 text-green-700"
      : item.status === "COMPLETED"
      ? "bg-purple-100 text-purple-700"
      : "bg-red-100 text-red-700"
  }`}
>
  {item.status}
</span>
                </td>

                <td className="p-5">
                  <div className="flex gap-2">
                    <button className="whitespace-nowrap rounded-xl bg-green-500 px-4 py-2 text-sm text-white hover:bg-green-600">
                      Approve
                    </button>

                    <button className="whitespace-nowrap rounded-xl bg-red-500 px-4 py-2 text-sm text-white hover:bg-red-600">
                      Reject
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {filteredInquiries.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="p-8 text-center text-gray-500"
                >
                  No inquiries found.
                </td>
              </tr>
            )}
                    </tbody>
        </table>
      </div>
    </div>
    </AdminLayout>
  );
}