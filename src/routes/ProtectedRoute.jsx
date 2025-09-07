import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { getToken } from "@/utils/utils";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const token = getToken();
  
  if (!token) return <Navigate to="/auth/login" replace />;

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
