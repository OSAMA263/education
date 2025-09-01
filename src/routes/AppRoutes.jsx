import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoaderPage from "../shared/LoaderPage";
import Home from "../pages/home/HomePage";
import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
  return (
    <Suspense fallback={<LoaderPage />}>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard" element={<User />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

const About = lazy(() => import("../pages/about/AboutPage"));
const Lessons = lazy(() => import("../pages/lessons/LessonsPage"));
const Exams = lazy(() => import("../pages/exams/ExamsPage"));
const User = lazy(() => import("../pages/user/UserPage"));
const Dashboard = lazy(() => import("../pages/dashboard/Dashboardpage"));
