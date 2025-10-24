import { useAuthData } from "@/routes/AuthProvider";
import { Navigate, Route, Routes } from "react-router-dom";
import PreviewData from "./tabs/PreviewData";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { lazy } from "react";
import { ProfileContent } from "../user/UserPage";
import { HelmetProvider } from "react-helmet-async";

export default function Dashboardpage() {
  const { profile } = useAuthData();
  if (profile?.role !== "admin") return <Navigate to="/" replace />;

  return (
    <DashboardLayout>
      <Routes>
        <Route index path="base" element={<PreviewData />} />
        <Route index element={<PreviewData />} />
        <Route path="lessons" element={<LessonsTable />} />
        <Route path="exams" element={<ExamsTable />} />
        <Route path="admins" element={<AdminsTable />} />
        <Route path="students" element={<StudentsTable />} />
        <Route
          path="profile"
          element={
            <HelmetProvider>
              <div className="flex flex-col gap-y-10">
                <ProfileContent />
              </div>
            </HelmetProvider>
          }
        />
      </Routes>
    </DashboardLayout>
  );
}

const LessonsTable = lazy(() => import("./tabs/LessonsTable"));
const ExamsTable = lazy(() => import("./tabs/ExamsTable"));
const AdminsTable = lazy(() => import("./tabs/AdminsTable"));
const StudentsTable = lazy(() => import("./tabs/StudentsTable"));
