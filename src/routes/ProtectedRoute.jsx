import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import LoaderPage from "@/pages/LoaderPage";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthData } from "./AuthProvider";
import ErrorPage from "@/pages/ErrorPage";
import { logout } from "@/utils/utils";
import { Button } from "@chakra-ui/react";

export default function ProtectedRoute() {
  const { userData, isLoading, isError, error } = useAuthData();

  // display content depending on the fetch response
  if (isLoading) return <LoaderPage />;
  if (isError)
    return (
      <ErrorPage fetchErr={error}>
        <p className="text-secondary">No user was found with these data</p>
        <Button className="!font-semibold" rounded={"full"} onClick={logout}>
          TRY LOGIN AGAIN
        </Button>
      </ErrorPage>
    );
  if (!userData?._id) return <Navigate to="/auth/login/" replace />;

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
