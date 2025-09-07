import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import LoaderPage from "@/pages/LoaderPage";
import { Navigate, Outlet } from "react-router-dom";
import { useProfile } from "./AuthProvider";
import ErrorPage from "@/pages/ErrorPage";

export default function ProtectedRoute() {
  const { data, isLoading, isError, error } = useProfile();

  // display content depending on the fetch response
  if (isLoading) return <LoaderPage />;
  if (isError) return <ErrorPage fetchErr={error} />;
  if (!data) return <Navigate to="/auth/login/" replace />;

  return (
    <>
      <Navbar />
      <main className="min-h-dvh">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
