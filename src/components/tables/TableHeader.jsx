import { Button, Table } from "@chakra-ui/react";
import { useState } from "react";

export default function TableHeader({ data, setFilterData }) {
  const [sortOrder, setSortOrder] = useState("↑");

  const headerData = [...new Set(data?.flatMap(Object.keys))];

  const handleSortingData = (key) => {
    const sortedData = data?.sort((a, b) => {
      let valA, valB;

      if (key == "classLevel") {
        // sort by classLevel
        valA = Number(a.classLevel.replaceAll(/\D/g, ""));
        valB = Number(b.classLevel.replaceAll(/\D/g, ""));
      } else {
        // sort by price
        valA = a.price;
        valB = b.price;
      }
      return sortOrder == "↑" ? valA - valB : valB - valA;
    });

    setSortOrder(sortOrder == "↑" ? "↓" : "↑");
    setFilterData([...sortedData]);
  };

  return (
    <Table.Header className="border-b border-bg-secondary">
      <Table.Row>
        {headerData?.map((key, i) => (
          <Table.ColumnHeader className="capitalize text-base !py-2" key={i}>
            {key == "classLevel" ? (
              <Button
                variant={"outline"}
                className="capitalize"
                onClick={() => handleSortingData(key)}
              >
                {key}
                <span className="text-lg">{sortOrder}</span>
              </Button>
            ) : key === "created_at" ? null : (
              key
            )}
          </Table.ColumnHeader>
        ))}
      </Table.Row>
    </Table.Header>
  );
}
