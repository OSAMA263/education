import SectionHeader from "@/components/shared/SectionHeader";
import TableData from "@/components/TableData";
import AllDashboardData from "@/hooks/useDashboard";
import { checkIfDate } from "@/utils/utils";
import { IconButton, Table } from "@chakra-ui/react";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";

export default function LessonsTable() {
  const { lessons } = AllDashboardData();

  return (
    <div className="space-y-10">
      <SectionHeader title="All Lessons" />

      <TableData header={lessons}>
        {lessons?.map((les, i) => (
          <Table.Row key={les.id}>
            {Object.entries(les).map((val) => (
              <Table.Cell key={val[0]}>
                {val[0] == "id" ? i + 1 : checkIfDate(val)}
              </Table.Cell>
            ))}
            {/* option buttons */}
            <Table.Cell className="!flex !items-center !gap-2">
              <IconButton
                size="xs"
                variant={"surface"}
                colorPalette={"blue"}
                arai-label="edit"
              >
                <AiOutlineEdit />
              </IconButton>
              <IconButton
                size="xs"
                variant={"surface"}
                colorPalette={"red"}
                arai-label="delete"
              >
                <AiFillDelete />
              </IconButton>
            </Table.Cell>
          </Table.Row>
        ))}
      </TableData>
    </div>
  );
}
