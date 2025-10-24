import SEOWrapper from "@/components/layout/SEOWrapper";
import SectionHeader from "@/components/shared/SectionHeader";
import TableData from "@/components/tables/TableData";
import AllDashboardData from "@/hooks/useDashboard";

export default function ExamsTable() {
  const { exams } = AllDashboardData();

  return (
    <SEOWrapper
      des="Monitor and organize all exams across the platform. Review exam details, assigned lessons, student results, and performance analytics to maintain assessment quality."
      link="dashboard/exams"
      title="Exams"
    >
      <SectionHeader title="All Exams" />
      <TableData data={exams} dataType={"exams"} />
    </SEOWrapper>
  );
}
