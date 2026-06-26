import { useEffect, useMemo, useState } from "react";

import AdminLayout from "../layout/AdminLayout";

import {
  getUsers,
  updateUserRole,
  deleteUser,
} from "../../api/admin.api";

export default function AdminUsers() {
  const [users, setUsers] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [roleFilter, setRoleFilter] =
    useState("all");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const data = await getUsers();

      console.log(data);

      setUsers(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleRoleChange = async (
    id: string,
    role: string
  ) => {
    try {
      await updateUserRole(id, role);

      await loadUsers();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (
    id: string
  ) => {
    if (
      !confirm(
        "Delete this user permanently?"
      )
    )
      return;

    try {
      await deleteUser(id);

      await loadUsers();
    } catch (err) {
      console.error(err);
    }
  };

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchSearch =
        user.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        user.email
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchRole =
        roleFilter === "all" ||
        user.role === roleFilter;

      return matchSearch && matchRole;
    });
  }, [users, search, roleFilter]);

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex h-[60vh] items-center justify-center text-lg font-medium">
          Loading Users...
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
            {/* Header */}

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <h1 className="font-serif text-4xl">
            User Management
          </h1>

          <p className="mt-2 text-gray-500">
            View, manage and update platform users.
          </p>
        </div>

        <div className="flex flex-col gap-3 md:flex-row">

          {/* Search */}

          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="h-12 w-72 rounded-xl border border-[#ECE6DB] bg-white px-4 outline-none focus:border-[#D6A354]"
          />

          {/* Role Filter */}

          <select
            value={roleFilter}
            onChange={(e) =>
              setRoleFilter(e.target.value)
            }
            className="h-12 rounded-xl border border-[#ECE6DB] bg-white px-4 outline-none"
          >
            <option value="all">
              All Roles
            </option>

            <option value="USER">
              User
            </option>

            <option value="ARTIST">
              Artist
            </option>

            <option value="ADMIN">
              Admin
            </option>
          </select>

        </div>

      </div>

      {/* Table */}

      <div className="mt-8 overflow-hidden rounded-[28px] border border-[#ECE6DB] bg-white">

        <div className="overflow-x-auto">

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
                  Role
                </th>

                <th className="p-5 text-left">
                  Joined
                </th>

                <th className="p-5 text-left">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

                            {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-t border-[#ECE6DB]"
                >
                  <td className="p-5">
                    <div className="flex items-center gap-3">

                      <img
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                          user.name
                        )}`}
                        alt={user.name}
                        className="h-10 w-10 rounded-full"
                      />

                      <span className="font-medium">
                        {user.name}
                      </span>

                    </div>
                  </td>

                  <td className="p-5">
                    {user.email}
                  </td>

                  <td className="p-5">

                    <span
                      className={`rounded-full px-3 py-1 text-sm font-medium ${
                        user.role === "ADMIN"
                          ? "bg-red-100 text-red-700"
                          : user.role === "ARTIST"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {user.role}
                    </span>

                  </td>

                  <td className="p-5 whitespace-nowrap">
                    {new Date(
                      user.createdAt
                    ).toLocaleDateString()}
                  </td>

                  <td className="p-5">

                    <div className="flex items-center gap-3">

                      <select
                        value={user.role}
                        onChange={(e) =>
                          handleRoleChange(
                            user.id,
                            e.target.value
                          )
                        }
                        className="rounded-lg border border-[#ECE6DB] px-3 py-2 text-sm"
                      >
                        <option value="USER">
                          USER
                        </option>

                        <option value="ARTIST">
                          ARTIST
                        </option>

                        <option value="ADMIN">
                          ADMIN
                        </option>
                      </select>

                      <button
                        onClick={() =>
                          handleDelete(user.id)
                        }
                        className="rounded-xl bg-red-500 px-4 py-2 text-sm text-white hover:bg-red-600"
                      >
                        Delete
                      </button>

                    </div>

                  </td>
                </tr>
              ))}

              {filteredUsers.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="p-10 text-center text-gray-500"
                  >
                    No users found.
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