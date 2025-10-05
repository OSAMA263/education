import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import LoaderPage from "@/pages/LoaderPage";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthData } from "./AuthProvider";
import ErrorPage from "@/pages/ErrorPage";
import { getToken, logout } from "@/utils/utils";
import { Button } from "@chakra-ui/react";

export default function ProtectedRoute() {
  const token = getToken();
  const { error, isLoading } = useAuthData();

  // display content depending on the fetch response
  if (isLoading) return <LoaderPage />;
  if (!token) return <Navigate to="/auth/login/" replace />;
  if (error)
    return (
      <ErrorPage fetchErr={error}>
        <Button
          className="!font-semibold mt-2"
          rounded={"full"}
          onClick={logout}
        >
          TRY LOGIN AGAIN
        </Button>
      </ErrorPage>
    );

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
