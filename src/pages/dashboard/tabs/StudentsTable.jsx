import SectionHeader from "@/components/shared/SectionHeader";
import TableData from "@/components/tables/TableData";
import AllDashboardData from "@/hooks/useDashboard";

export default function StudentsTable() {
  const { students } = AllDashboardData();
  const studentsData = students?.map(
    ({ lessons, exams, otp_expires_at, otp_code, ...rest }) => rest
  );

  return (
    <>
      <SectionHeader title="All Students" />
      <TableData data={studentsData} dataType={"students"} />
    </>
  );
}
