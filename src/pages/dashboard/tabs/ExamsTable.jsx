import SectionHeader from "@/components/shared/SectionHeader";
import TableData from "@/components/tables/TableData";
import AllDashboardData from "@/hooks/useDashboard";

export default function ExamsTable() {
  const { exams } = AllDashboardData();

  return (
    <>
      <SectionHeader title="All Exams" />
      <TableData data={exams} dataType={"exams"} />
    </>
  );
}
