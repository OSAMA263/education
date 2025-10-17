import Sidebar, { navigationLinks } from "@/pages/dashboard/Sidebar";
import CustomContainer from "./CustomContainer";
import { useMediaQuery } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import DashboardProvider from "@/routes/DashboardProvider";

export default function DashboardLayout({ children }) {
  const [smolScreen] = useMediaQuery("(max-width: 1024px)");

  return (
    <div className="relative">
      {/* header */}
      <header className="absolute top-0 left-0 right-0 bg-bg-secondary lg:py-10 py-4 flex items-center justify-center z-8 gap-4 font-semibold">
        {smolScreen &&
          navigationLinks.map(({ label, link }) => (
            <NavLink key={label} to={link}>
              {label}
            </NavLink>
          ))}
      </header>

      <div className="flex">
        {/* sidebar */}
        {!smolScreen && <Sidebar />}

        {/* main content */}
        <CustomContainer xl="80%" className="justify-start !block pt-24 pb-2">
          <DashboardProvider>
            <div className="space-y-10 flex flex-col h-full py-3">{children}</div>
          </DashboardProvider>
        </CustomContainer>
      </div>
    </div>
  );
}
