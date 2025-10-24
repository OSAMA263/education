import SEOWrapper from "@/components/layout/SEOWrapper";
import SectionHeader from "@/components/shared/SectionHeader";
import TableData from "@/components/tables/TableData";
import AllDashboardData from "@/hooks/useDashboard";

export default function LessonsTable() {
  const { lessons } = AllDashboardData();

  return (
    <SEOWrapper
      des="Browse and control all lessons available on the platform. Update titles, descriptions, and video content, or assign lessons to courses and track engagement metrics."
      link="dashboard/lessons"
      title="Lessons"
    >
      <SectionHeader title="All Lessons" />

      <TableData data={lessons} dataType={"lessons"} />
    </SEOWrapper>
  );
}
