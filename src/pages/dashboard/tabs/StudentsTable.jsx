import SectionHeader from "@/components/shared/SectionHeader";
import TableData from "@/components/TableData";
import AllDashboardData from "@/hooks/useDashboard";
import { checkIfDate } from "@/utils/utils";
import { Table } from "@chakra-ui/react";

export default function StudentsTable() {
  const { students } = AllDashboardData();
  const studentsData = students?.map(
    ({ lessons, exams, otp_expires_at, otp_code, ...rest }) => rest
  );

  return (
    <div className="space-y-10">
      <SectionHeader title="All Students" />

      <TableData header={studentsData}>
        {studentsData?.map((les, i) => (
          <Table.Row key={les.id}>
            {Object.entries(les).map((val) => (
              <Table.Cell key={val[0]}>
                {val[0] == "id" ? i + 1 : checkIfDate(val)}
              </Table.Cell>
            ))}
          </Table.Row>
        ))}
      </TableData>
    </div>
  );
}
