import Sidebar from "@/pages/dashboard/Sidebar";
import CustomContainer from "./CustomContainer";
import { useMediaQuery } from "@chakra-ui/react";
import DashboardProvider from "@/routes/DashboardProvider";

export default function DashboardLayout({ children }) {
  const [smolScreen] = useMediaQuery("(max-width: 1024px)");

  return (
    <div className="relative">
      <div className="flex">
        {/* sidebar */}
       <Sidebar smolScreen={smolScreen}/>

        {/* main content */}
        <CustomContainer xl="80%" className="justify-start !block pt-24 pb-2">
          <DashboardProvider>
            <div className="space-y-10 flex flex-col h-full py-3 px-6">
              {children}
            </div>
          </DashboardProvider>
        </CustomContainer>
      </div>
    </div>
  );
}
