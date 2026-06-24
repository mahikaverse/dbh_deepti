import AdminLayout from "../layout/AdminLayout";

const users = [
  {
    name: "Mahika",
    email: "mahika@gmail.com",
  },
  {
    name: "Rohan",
    email: "rohan@gmail.com",
  },
];

export default function AdminUsers() {
  return (
    <AdminLayout>

      <h1 className="text-4xl font-serif">
        Users
      </h1>

      <div className="mt-8 overflow-hidden rounded-[28px] border border-[#ECE6DB] bg-white">

        <table className="w-full">

          <thead className="bg-[#FAF8F4]">

            <tr>

              <th className="p-5 text-left">
                Name
              </th>

              <th className="p-5 text-left">
                Email
              </th>

              <th className="p-5 text-left">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {users.map((user) => (
              <tr
                key={user.email}
                className="border-t border-[#ECE6DB]"
              >

                <td className="p-5">
                  {user.name}
                </td>

                <td className="p-5">
                  {user.email}
                </td>

                <td className="p-5">

                  <button className="rounded-xl bg-red-500 px-4 py-2 text-white">
                    Suspend
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </AdminLayout>
  );
}