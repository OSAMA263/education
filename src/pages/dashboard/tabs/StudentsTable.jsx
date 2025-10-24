import SEOWrapper from "@/components/layout/SEOWrapper";
import SectionHeader from "@/components/shared/SectionHeader";
import TableData from "@/components/tables/TableData";
import AllDashboardData from "@/hooks/useDashboard";

export default function StudentsTable() {
  const { students } = AllDashboardData();
  const studentsData = students?.map(
    ({ lessons, exams, otp_expires_at, otp_code, ...rest }) => rest
  );

  return (
    <SEOWrapper
      des="View and manage all registered students in one place. Access detailed profiles, enrollment status, performance stats, and activity history to efficiently monitor learning progress."
      link="dashboard/students"
      title="Students"
    >
      <SectionHeader title="All Students" />
      <TableData data={studentsData} dataType={"students"} />
    </SEOWrapper>
  );
}
