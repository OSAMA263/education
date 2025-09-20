import { Navigate, Outlet } from "react-router-dom";
import loginImg from "@/assets/login.jpg";
import { getToken } from "@/utils/utils";

export default function AuthLayout() {
  const token = getToken();

  if (token) return <Navigate to="/" replace />;

  return (
    <main className="relative grid lg:grid-cols-2 items-center min-h-dvh gap-10">
      <img
        src={loginImg}
        alt="lgoin"
        className="h-dvh object-cover sticky top-0 self-baseline max-lg:hidden"
      />
      {/* form inputs */}
      <div className="flex flex-col gap-8 items-center px-2 2xl:w-[70%] w-full mx-auto [&_a]:font-semibold [&_a:hover]:text-secondary [&_a]:underline">
        <Outlet />
      </div>
    </main>
  );
}
