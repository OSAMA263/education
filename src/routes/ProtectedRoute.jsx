import { Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
