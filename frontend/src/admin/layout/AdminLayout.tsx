import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FAF8F4] text-[#1B1B1B]">
      <AdminSidebar />

      <div className="min-h-screen md:pl-[280px]">
        <AdminHeader />

        <main className="px-4 pb-8 pt-28 sm:px-6 lg:px-8">
          <div className="w-full min-w-0">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}