import SectionHeader from "@/components/shared/SectionHeader";
import TableData from "@/components/TableData";
import AllDashboardData from "@/hooks/useDashboard";
import { checkIfDate } from "@/utils/utils";
import { Table } from "@chakra-ui/react";

export default function AdminsTable() {
  const { admins } = AllDashboardData();

  const adminsData = admins?.map(
    ({ lessons, exams, otp_expires_at, otp_code, ...rest }) => rest
  );
// wanna remove created_at ?
// and then we weill add created by "we get the admin name"
  return (
    <div className="space-y-10">
      <SectionHeader title="All Admins" />

      <TableData header={admins}>
        {adminsData?.map((les, i) => (
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
