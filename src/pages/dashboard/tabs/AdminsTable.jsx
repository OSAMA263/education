import SectionHeader from "@/components/shared/SectionHeader";
import TableData from "@/components/tables/TableData";
import AllDashboardData from "@/hooks/useDashboard";

export default function AdminsTable() {
  const { admins } = AllDashboardData();

  const adminsData = admins?.map(
    ({ classLevel, lessons, exams, otp_expires_at, otp_code, ...rest }) => rest
  );

  return (
    <>
      <SectionHeader title="All Admins" />

      <TableData data={adminsData} dataType="admins" />
    </>
  );
}
