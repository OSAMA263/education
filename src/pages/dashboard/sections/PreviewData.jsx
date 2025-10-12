import AllDashboardData from "@/hooks/useDashboard";
import { useAllUsers } from "@/hooks/useUser";
import LoaderPage from "@/pages/LoaderPage";

export default function PreviewData() {
  const { students,admins, lessons, exams, isLoading, error } = AllDashboardData();


  if (isLoading) return <LoaderPage />;
  if (error) return <ErrorPage fetchErr={error} />;

  return (
    <div>
      {/* onclick on each one it takes us to the tab  */}
      <p>students:{students?.length}</p>
      <p>admins:{admins?.length}</p>
      <p>lessons:{lessons?.length}</p>
      <p>exams:{exams?.length}</p>
    </div>
  );
}
