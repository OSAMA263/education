import SEOWrapper from "@/components/layout/SEOWrapper";
import SectionHeader from "@/components/shared/SectionHeader";
import TableData from "@/components/tables/TableData";
import AllDashboardData from "@/hooks/useDashboard";

export default function AdminsTable() {
  const { admins } = AllDashboardData();

  const adminsData = admins?.map(
    ({ classLevel, lessons, exams, otp_expires_at, otp_code, ...rest }) => rest
  );

  return (
    <SEOWrapper
      des="Manage platform administrators and staff permissions. Review roles, access levels, and activity logs to ensure secure and efficient platform management."
      link="dashboard/admins"
      title="Admins"
    >
      <SectionHeader title="All Admins" />

      <TableData data={adminsData} dataType="admins" />
    </SEOWrapper>
  );
}
