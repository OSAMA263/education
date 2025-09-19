import Modal from "@/components/Modal";
import { useDeleteUser } from "@/hooks/useUser";
import { toast } from "@/utils/utils";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

export default function DeleteAccountModal({ createdAt }) {
  const { mutate } = useDeleteUser();
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    // not allowed to deleted the main accounts
    if (
      createdAt === "2025-09-08T20:39:28.004Z" ||
      createdAt === "2025-09-18T21:59:59.839Z"
    ) {
      return toast("error", "", "Not allowed to delete the main acc");
    }

    mutate();
    setOpen(false);
  };

  return (
    <div>
      <Modal
        {...{ open, setOpen }}
        openBtnClasses="!text-red-500"
        openModalContent="Delete account"
        title="Delete account"
      >
        <div className="flex flex-col gap-10">
          <p className="text-secondary">
            Are your sure you want to delete your account?
          </p>
          <div className="space-x-4">
            <Button variant={"outline"} onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              variant={"solid"}
              colorPalette={"red"}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
