import SectionHeader from "@/components/shared/SectionHeader";
import TableData from "@/components/tables/TableData";
import AllDashboardData from "@/hooks/useDashboard";

export default function LessonsTable() {
  const { lessons } = AllDashboardData();

  return (
    <>
      <SectionHeader title="All Lessons" />

      <TableData data={lessons} dataType={"lessons"} />
    </>
  );
}
