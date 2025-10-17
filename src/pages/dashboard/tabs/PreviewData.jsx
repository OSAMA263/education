import PlainCard from "@/components/PlainCard";
import SectionHeader from "@/components/shared/SectionHeader";
import AllDashboardData from "@/hooks/useDashboard";
import LoaderPage from "@/pages/LoaderPage";

export default function PreviewData() {
  const { students, admins, lessons, exams, isLoading, error } =
    AllDashboardData();

  const data = [{ admins }, { students }, { lessons }, { exams }];

  if (isLoading) return <LoaderPage />;
  if (error) return <ErrorPage fetchErr={error} />;

  return (
    <div>
      <SectionHeader title="All Data" className="mb-10" />
      <div className="grid grid-cols-2 gap-10">
        {data.map((item) => {
          const key = Object.keys(item)[0];

          return (
            <PlainCard className="p-14" key={key}>
              <h1 className="text-xl font-bold capitalize">
                {key} :{" "}
                <span className="text-secondary">{item[key]?.length}</span>
              </h1>
            </PlainCard>
          );
        })}
      </div>
    </div>
  );
}
