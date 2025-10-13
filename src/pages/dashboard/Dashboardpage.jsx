import { useAuthData } from "@/routes/AuthProvider";
import { Route, Routes, useLocation } from "react-router-dom";
import PreviewData from "./tabs/PreviewData";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { lazy } from "react";

export default function Dashboardpage() {
  const { profile } = useAuthData();
  // if (profile?.role !== "admin") return <Navigate to="/" replace />;
  const { pathname } = useLocation();

  return (
    <DashboardLayout>
      <Routes>
        <Route index path="base" element={<PreviewData />} />
        <Route index element={<PreviewData />} />
        <Route path="lessons" element={<LessonsTable />} />
        <Route path="exams" element={<ExamsTable />} />
        <Route path="admins" element={<AdminsTable />} />
        <Route path="students" element={<StudentsTable />} />
        <Route path="profile" element={<PreviewData />} />
      </Routes>
    </DashboardLayout>
  );
}

const LessonsTable = lazy(() => import("./tabs/LessonsTable"));
const ExamsTable = lazy(() => import("./tabs/ExamsTable"));
const AdminsTable = lazy(() => import("./tabs/AdminsTable"));
const StudentsTable = lazy(() => import("./tabs/StudentsTable"));
