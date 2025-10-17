import { DashboardContext } from "@/routes/DashboardProvider";
import { checkIfDate } from "@/utils/utils";
import { Button, Group, IconButton, Table } from "@chakra-ui/react";
import { useContext, useRef, useState } from "react";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import PopUp from "../PopUp";

export default function TableBody(props) {
  const { userDataTable, data, setOpen } = props;
  const { firstInd, lastInd, setSelectedItem } = useContext(DashboardContext);

  const [openPopUpId, setOpenPopUpId] = useState(null);

  // edit, delete, view btn options
  const optionBtns = [
    {
      variant: "surface",
      colorPalette: "blue",
      label: "edit",
      icon: AiOutlineEdit,
    },
    {
      variant: "surface",
      colorPalette: "red",
      label: "delete",
      icon: AiFillDelete,
    },
  ];

  const handleEdit = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleDelete = (item) => {
    setOpenPopUpId((prev) => (prev === item.id ? null : item.id));
    setSelectedItem(item);
  };

  return (
    <Table.Body className="!text-gray-300/80 !font-semibold">
      {data?.slice(firstInd, lastInd).map((item) => (
        <Table.Row key={item.id}>
          {Object.entries(item).map(([key, val]) => (
            <Table.Cell key={key}>
              {val &&
                (key === "questions"
                  ? item?.questions.length
                  : checkIfDate([key, val]))}
            </Table.Cell>
          ))}

          {/* option buttons */}
          {!userDataTable && (
            <Table.Cell className="!flex !items-center !gap-2">
              {optionBtns.map(({ icon: Icon, label, ...rest }) => (
                <IconButton
                  key={label}
                  onClick={() =>
                    label == "edit" ? handleEdit(item) : handleDelete(item)
                  }
                  size="xs"
                  aria-label={label}
                  {...rest}
                >
                  {label == "edit" ? (
                    <Icon />
                  ) : (
                    <ConfirmDelete
                      {...{ openPopUpId, setOpenPopUpId, item, Icon }}
                    />
                  )}
                </IconButton>
              ))}
            </Table.Cell>
          )}
        </Table.Row>
      ))}
    </Table.Body>
  );
}

const ConfirmDelete = ({ openPopUpId, setOpenPopUpId, item, Icon }) => {
  const { selectedItem } = useContext(DashboardContext);

  const handleDelete = () => {
    // delete function
  };
  return (
    <PopUp
      btnContent={<Icon />}
      open={openPopUpId === item.id}
      setOpen={(val) => setOpenPopUpId(val ? item.id : null)}
    >
      <Group attached>
        <Button
          size="sm"
          onClick={handleDelete}
          colorPalette={"red"}
          variant={"outline"}
        >
          confirm
        </Button>
        <Button size="sm" variant={"outline"}>
          cancle
        </Button>
      </Group>
    </PopUp>
  );
};
