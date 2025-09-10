import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import LoaderPage from "@/pages/LoaderPage";
import { Navigate, Outlet } from "react-router-dom";
import { useProfile } from "./AuthProvider";
import ErrorPage from "@/pages/ErrorPage";

export default function ProtectedRoute() {
  const { userData, isLoading, isError, error } = useProfile();

  // display content depending on the fetch response
  if (isLoading) return <LoaderPage />;
  if (isError) return <ErrorPage fetchErr={error} />;
  if (!userData?._id) return <Navigate to="/auth/login/" replace />;


  // get exams + lessons

  // buy lesons? with cart?
  
  // exam api and shit man omg

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
