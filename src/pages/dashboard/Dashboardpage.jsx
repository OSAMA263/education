import { useAuthData } from "@/routes/AuthProvider";
import { Navigate } from "react-router";
import PreviewData from "./sections/PreviewData";

export default function Dashboardpage() {
  const { profile } = useAuthData();
  // if (profile?.role !== "admin") return <Navigate to="/" replace />;


  return (
    <div className="flex items-center justify-center">
      Still not ready yet... :)
      <PreviewData/>
    </div>
  );
}
