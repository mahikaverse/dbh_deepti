import { useState } from "react";
import AdminLayout from "../layout/AdminLayout";

import {
  Bell,
  Send,
  Users,
  Palette,
  User,
} from "lucide-react";

import {
  sendNotification,
} from "../../api/notification.api";

export default function AdminNotifications() {
  const [title, setTitle] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [target, setTarget] =
    useState("ALL_USERS");

  const [userId, setUserId] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState("");

  const handleSubmit = async () => {
    if (!title || !message) {
      return alert(
        "Please fill all fields"
      );
    }

    if (
      target === "SPECIFIC_USER" &&
      !userId
    ) {
      return alert(
        "Please enter user id"
      );
    }

    try {
      setLoading(true);

      await sendNotification({
        title,
        message,
        target,
        userId,
      });

      setSuccess(
        "Notification sent successfully 🎉"
      );

      setTitle("");
      setMessage("");
      setUserId("");
      setTarget("ALL_USERS");
    } catch (err) {
      console.error(err);

      alert(
        "Failed to send notification"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="mx-auto max-w-4xl">

        <div className="mb-10 flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#D6A354]">
            <Bell
              size={30}
              className="text-white"
            />
          </div>

          <div>
            <h1 className="font-serif text-5xl text-[#1B1B1B]">
              Send Notifications
            </h1>

            <p className="mt-2 text-gray-500">
              Send announcements and updates
              to users and artists.
            </p>
          </div>
        </div>

        <div className="rounded-[32px] border border-[#ECE6DB] bg-white p-8 shadow-sm">

          {success && (
            <div className="mb-6 rounded-2xl bg-green-50 p-4 text-green-700">
              {success}
            </div>
          )}

          {/* TITLE */}

          <div>
            <label className="mb-2 block text-sm font-medium">
              Notification Title
            </label>

            <input
              value={title}
              onChange={(e) =>
                setTitle(
                  e.target.value
                )
              }
              placeholder="New Platform Update"
              className="w-full rounded-2xl border border-[#ECE6DB] p-4 outline-none"
            />
          </div>

          {/* MESSAGE */}

          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium">
              Notification Message
            </label>

            <textarea
              value={message}
              onChange={(e) =>
                setMessage(
                  e.target.value
                )
              }
              placeholder="Write your notification..."
              className="h-40 w-full rounded-2xl border border-[#ECE6DB] p-4 outline-none"
            />
          </div>

          {/* TARGET */}

          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium">
              Send To
            </label>

            <select
              value={target}
              onChange={(e) =>
                setTarget(
                  e.target.value
                )
              }
              className="w-full rounded-2xl border border-[#ECE6DB] p-4"
            >
              <option value="ALL_USERS">
                All Users
              </option>

              <option value="ALL_ARTISTS">
                All Artists
              </option>

              <option value="SPECIFIC_USER">
                Specific User
              </option>
            </select>
          </div>

          {/* USER ID */}

          {target ===
            "SPECIFIC_USER" && (
            <div className="mt-6">
              <label className="mb-2 block text-sm font-medium">
                User ID
              </label>

              <input
                value={userId}
                onChange={(e) =>
                  setUserId(
                    e.target.value
                  )
                }
                placeholder="cmabc123456..."
                className="w-full rounded-2xl border border-[#ECE6DB] p-4 outline-none"
              />
            </div>
          )}

          {/* PREVIEW */}

          <div className="mt-8 rounded-3xl border border-[#ECE6DB] bg-[#FAF8F4] p-6">

            <h3 className="mb-4 font-semibold">
              Preview
            </h3>

            <div className="flex items-start gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF8EB]">
                <Bell
                  size={24}
                  className="text-[#D6A354]"
                />
              </div>

              <div>
                <h4 className="font-semibold">
                  {title ||
                    "Notification Title"}
                </h4>

                <p className="mt-1 text-gray-500">
                  {message ||
                    "Notification message preview will appear here."}
                </p>
              </div>

            </div>
          </div>

          {/* BUTTON */}

          <button
            disabled={loading}
            onClick={handleSubmit}
            className="mt-8 flex items-center gap-3 rounded-2xl bg-[#D6A354] px-8 py-4 text-white transition hover:bg-[#C69649] disabled:opacity-60"
          >
            <Send size={18} />

            {loading
              ? "Sending..."
              : "Send Notification"}
          </button>

        </div>
      </div>
    </AdminLayout>
  );
}