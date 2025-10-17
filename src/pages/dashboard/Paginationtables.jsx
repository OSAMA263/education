import { DashboardContext } from "@/routes/DashboardProvider";
import { ButtonGroup, IconButton, Pagination } from "@chakra-ui/react";
import { useContext } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export default function Paginationtables({ totalItems }) {
  const { setCurrPage } = useContext(DashboardContext);

  if (totalItems > 12)
    return (
      <div className="flex justify-center mt-auto">
        <Pagination.Root count={totalItems} pageSize={12} defaultPage={1}>
          <ButtonGroup variant="surface" size="sm">
            <Pagination.PrevTrigger asChild>
              <IconButton
                aria-label="prev"
                onClick={() => setCurrPage((prev) => prev - 1)}
              >
                <LuChevronLeft />
              </IconButton>
            </Pagination.PrevTrigger>

            <Pagination.Items
              render={(page) => (
                <IconButton
                  onClick={() => setCurrPage(page.value)}
                  variant={{ base: "outline", _selected: "solid" }}
                >
                  {page.value}
                </IconButton>
              )}
            />

            <Pagination.NextTrigger asChild>
              <IconButton
                aria-label="next"
                onClick={() => setCurrPage((prev) => prev + 1)}
              >
                <LuChevronRight />
              </IconButton>
            </Pagination.NextTrigger>
          </ButtonGroup>
        </Pagination.Root>
      </div>
    );
}
