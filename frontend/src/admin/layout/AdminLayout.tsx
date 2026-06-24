import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#FAF8F4]">

      <AdminSidebar />

      <div className="ml-[280px] min-h-screen">

        <AdminHeader />

        <main className="p-8">
          {children}
        </main>

      </div>

    </div>
  );
}