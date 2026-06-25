import {
  LayoutDashboard,
  Upload,
  Image,
  MessageSquare,
  BarChart3,
  Wallet,
  User,
  Settings,
} from "lucide-react";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const menu = [
  {
    title: "Dashboard",
    path: "/artist/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Upload Artwork",
    path: "/artist/upload-artwork",
    icon: Upload,
  },
  {
    title: "My Artworks",
    path: "/artist/my-artworks",
    icon: Image,
  },
  {
    title: "Inquiries",
    path: "/artist/inquiries",
    icon: MessageSquare,
  },
  {
    title: "Analytics",
    path: "/artist/analytics",
    icon: BarChart3,
  },
  {
    title: "Sales",
    path: "/artist/sales",
    icon: Wallet,
  },
  {
    title: "Profile",
    path: "/artist/profile",
    icon: User,
  },
  {
    title: "Settings",
    path: "/artist/settings",
    icon: Settings,
  },
];

export default function ArtistSidebar() {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[280px] flex-col border-r border-[#ECE6DB] bg-white md:flex">
      <div className="flex flex-shrink-0 items-center gap-3 p-6">
        <img
          src={logo}
          alt="Deepti Art"
          className="h-14 w-auto"
        />

        <div>
          <h2 className="font-serif text-xl font-semibold text-[#1B1B1B]">
            Deepti Art
          </h2>

          <p className="text-xs text-gray-500">
            Artist Studio
          </p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-2">
          {menu.map((item) => {
            const Icon = item.icon;

            const active =
              location.pathname === item.path;

            return (
              <Link
                key={item.title}
                to={item.path}
                className={`flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-200 ${
                  active
                    ? "bg-[#D6A354] text-white shadow-sm"
                    : "text-gray-600 hover:bg-[#FAF8F4]"
                }`}
              >
                <Icon size={20} />

                <span className="font-medium">
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}