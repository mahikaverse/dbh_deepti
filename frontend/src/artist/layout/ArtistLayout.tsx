import { ReactNode } from "react";
import ArtistSidebar from "./ArtistSidebar";
import ArtistTopbar from "./ArtistTopbar";

type Props = {
  children: ReactNode;
};

export default function ArtistLayout({
  children,
}: Props) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F8F5F0] text-[#1B1B1B]">
      <ArtistSidebar />

      <div className="min-h-screen md:pl-[280px]">
        <ArtistTopbar />

        <main className="px-4 pb-8 pt-28 sm:px-6 lg:px-10">
          <div className="w-full min-w-0">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}