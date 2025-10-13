import Sidebar from "@/pages/dashboard/Sidebar";
import CustomContainer from "./CustomContainer";

export default function DashboardLayout({ children }) {
  return (
    <div className="relative">
      {/* header */}
      <header className="absolute top-0 left-0 right-0 bg-bg-secondary py-6 flex items-center justify-center z-8">
        <h1 className="text-xl font-semibold">Admin Dashborad</h1>
      </header>

      <div className="flex">
        {/* sidebar */}
        <Sidebar />
        {/* main content */}
        <CustomContainer xl="80%" className="justify-start min-h-full pt-24 pb-2">
          {children}
        </CustomContainer>
      </div>
    </div>
  );
}
