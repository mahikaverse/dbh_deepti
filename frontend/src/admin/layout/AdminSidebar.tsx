import {
  LayoutDashboard,
  MessageSquare,
  Palette,
  Image,
  Users,
  Bell,
  BarChart3,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin/dashboard",
  },
  {
    name: "Inquiries",
    icon: MessageSquare,
    path: "/admin/inquiries",
  },
  {
    name: "Artists",
    icon: Palette,
    path: "/admin/artists",
  },
  {
    name: "Artworks",
    icon: Image,
    path: "/admin/artworks",
  },
  {
    name: "Users",
    icon: Users,
    path: "/admin/users",
  },
  {
    name: "Notifications",
    icon: Bell,
    path: "/admin/notifications",
  },
  {
    name: "Analytics",
    icon: BarChart3,
    path: "/admin/analytics",
  },
];

export default function AdminSidebar() {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 flex h-screen w-[280px] flex-col border-r border-[#ECE6DB] bg-white">
      
      {/* Logo Section */}
      <div className="flex items-center gap-3   p-6 flex-shrink-0">
        <img
          src={logo}
          alt="Deepti Art"
          className="h-14 w-auto"
        />

        <div>
          <h1 className="font-serif text-[20px] font-semibold text-[#1D1D1D]">
            Deepti Art
          </h1>

          <p className="text-xs text-gray-500">
            Admin Panel
          </p>
        </div>
      </div>

      {/* Scrollable Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            const active = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-4 rounded-2xl px-4 py-4 transition-all duration-200
                  ${
                    active
                      ? "bg-[#D6A354] text-white shadow-sm"
                      : "text-gray-600 hover:bg-[#FAF8F4]"
                  }`}
              >
                <Icon size={20} />

                <span className="font-medium">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

       
    </aside>
  );
}