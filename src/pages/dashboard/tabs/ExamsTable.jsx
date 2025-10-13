import SectionHeader from "@/components/shared/SectionHeader";
import TableData from "@/components/TableData";
import AllDashboardData from "@/hooks/useDashboard";
import { checkIfDate } from "@/utils/utils";
import { IconButton, Table } from "@chakra-ui/react";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";

export default function ExamsTable() {
  const { exams } = AllDashboardData();
  return (
    <div className="space-y-10">
      <SectionHeader title="All Exams" />

      <TableData header={exams}>
        {exams?.map((exam, i) => (
          <Table.Row key={exam.id}>
            {Object.entries(exam).map(([key, val]) => (
              <Table.Cell key={key}>
                {key == "questions"
                  ? exam?.questions.length
                  : key === "id"
                    ? i + 1
                    : checkIfDate([key, val])}
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
