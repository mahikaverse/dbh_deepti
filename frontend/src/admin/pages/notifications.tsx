import AdminLayout from "../layout/AdminLayout";

export default function AdminNotifications() {
  return (
    <AdminLayout>

      <h1 className="text-4xl font-serif">
        Send Notifications
      </h1>

      <div className="mt-8 rounded-[28px] border border-[#ECE6DB] bg-white p-8">

        <input
          placeholder="Notification Title"
          className="w-full rounded-xl border border-[#ECE6DB] p-4"
        />

        <textarea
          placeholder="Notification Message"
          className="mt-5 h-40 w-full rounded-xl border border-[#ECE6DB] p-4"
        />

        <select
          className="mt-5 w-full rounded-xl border border-[#ECE6DB] p-4"
        >
          <option>All Users</option>
          <option>All Artists</option>
          <option>Specific User</option>
        </select>

        <button className="mt-6 rounded-xl bg-[#D6A354] px-8 py-3 text-white">
          Send Notification
        </button>

      </div>

    </AdminLayout>
  );
}