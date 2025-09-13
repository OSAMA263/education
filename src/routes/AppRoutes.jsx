import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import ProtectedRoute from "./ProtectedRoute";
import LoaderPage from "@/pages/LoaderPage";
import UserProvider from "./AuthProvider";

export default function AppRoutes() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <Suspense fallback={<LoaderPage />}>
      <Routes>
        {/* Auth layout and shit */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Navigate to="login" replace />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>

        {/* Protected: for logedin users only */}
        <Route
          element={
            <UserProvider>
              <ProtectedRoute />
            </UserProvider>
          }
        >
          {/* student only */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/lessons/:lessonId" element={<SingleLesson />} />
          <Route path="/exams" element={<Exams />} />
          {/* <Route path="/exams/:examId" element={<ExamStart />} /> */}
          <Route path="/user" element={<User />} />

          {/* admin only */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* 404 page */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}

const AuthLayout = lazy(() => import("@/components/layout/AuthLayout"));
const Login = lazy(() => import("@/pages/auth/Login"));
const Register = lazy(() => import("@/pages/auth/Register"));
const ForgotPassword = lazy(() => import("@/pages/auth/ForgotPassword"));

const Home = lazy(() => import("@/pages/home/HomePage"));
const About = lazy(() => import("@/pages/about/AboutPage"));
const Lessons = lazy(() => import("@/pages/lessons/LessonsPage"));
const SingleLesson = lazy(
  () => import("@/pages/lessons/single page/SingleLesson")
);
const Exams = lazy(() => import("@/pages/exams/ExamsPage"));

const User = lazy(() => import("@/pages/user/UserPage"));

const Dashboard = lazy(() => import("@/pages/dashboard/Dashboardpage"));
const ErrorPage = lazy(() => import("@/pages/ErrorPage"));
