import AllDashboardData from "@/hooks/useDashboard";
import Paginationtables from "@/pages/dashboard/Paginationtables";
import ErrorPage from "@/pages/ErrorPage";
import LoaderPage from "@/pages/LoaderPage";
import { Button, Table, useMediaQuery } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import FilterBytTitle from "../FilterBytTitle";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableModal from "./TableModal";
import { DashboardContext } from "@/routes/DashboardProvider";

export default function TableData({ data, dataType }) {
  const [smolScreen] = useMediaQuery("(max-width: 1024px)");
  const { isLoading, error } = AllDashboardData();
  const { setSelectedItem } = useContext(DashboardContext);

  const [filterData, setFilterData] = useState(data);

  // studesnt && admins table || lessons &&exams
  const userDataTable = dataType == "admins" || dataType == "students";

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setFilterData(isLoading ? [] : data);
  }, [isLoading, data]);

  if (isLoading) return <LoaderPage />;
  if (error) return <ErrorPage fetchErr={error} />;

  return (
    <>
      <div
        className={`flex ${dataType == "students" ? "justify-center" : "justify-between"} items-center mb-1`}
      >
        {/* add new item bbutton */}
        {dataType !== "students" && (
          <Button
            onClick={() => {
              setOpen(true);
              setSelectedItem({});
            }}
            variant={"surface"}
            className="!w-fit"
          >
            <AiFillPlusCircle />
            Add New
          </Button>
        )}
        {/* filter by tite */}
        <FilterBytTitle {...{ setFilterData, data, userDataTable }} />
        <div></div>
      </div>

      {/* table data */}
      <Table.ScrollArea>
        <Table.Root
          className="border border-bg-secondary"
          size={smolScreen ? "sm" : "lg"}
          variant={""}
          striped
        >
          {/* table header */}
          <TableHeader {...{ data, setFilterData }} />
          {/* table body */}
          {filterData?.length > 0 && (
            <TableBody {...{ data: filterData, dataType, setOpen }} />
          )}
        </Table.Root>
      </Table.ScrollArea>

      {/* no items matched with the filter title */}
      {filterData?.length == 0 && (
        <div className="flex items-center justify-center">
          <h1 className="font-semibold text-xl text-secondary">
            No {dataType.slice(0, -1)} were found with this{" "}
            {userDataTable ? "name" : "title"}
          </h1>
        </div>
      )}

      {/* pagination */}
      <Paginationtables totalItems={filterData?.length} />

      {/* add, edit modal */}
      <TableModal {...{ open, setOpen, dataType }} />
    </>
  );
}
