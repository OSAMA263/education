import AllDashboardData from "@/hooks/useDashboard";
import ErrorPage from "@/pages/ErrorPage";
import LoaderPage from "@/pages/LoaderPage";
import { Table } from "@chakra-ui/react";

export default function TableData({ header, children }) {
  const { isLoading, error } = AllDashboardData();

  if (isLoading) return <LoaderPage />;
  if (error) return <ErrorPage fetchErr={error} />;

  // if header.map(item).includes a price or classLevel? then render the item as a sort button with its function?
  // console.log(Object.entries(header))

  // render the children as table body cuz some of them will have btns edit, delete like lessons or exams
  // and some like admin or studen will have view only

  //  {items.map((item) => (
  //           <Table.Row key={item.id}>
  //             <Table.Cell>{item.name}</Table.Cell>
  //             <Table.Cell>{item.category}</Table.Cell>
  //             <Table.Cell textAlign="end">{item.price}</Table.Cell>
  //           </Table.Row>
  //         ))}
  const headerCols = [...new Set(header.flatMap(Object.keys))];

  return (
    <Table.ScrollArea>
      <Table.Root
        className="border border-bg-secondary"
        size="lg"
        variant={""}
        striped
      >
        {/* table header */}
        <Table.Header className="border-b border-bg-secondary">
          <Table.Row>
            {headerCols.map((key, i) => (
              <Table.ColumnHeader
                className="capitalize text-base !py-2"
                key={i}
              >
                {key == "classLevel" || key == "price" ? (
                  <button
                    className="capitalize cursor-pointer"
                    onClick={() => console.log(key)}
                  >
                    {key}^
                  </button>
                ) : (
                  key
                )}
              </Table.ColumnHeader>
            ))}
          </Table.Row>
        </Table.Header>
        {/* table body */}
        <Table.Body className="!text-gray-300/80 !font-semibold">
          {children}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
}
