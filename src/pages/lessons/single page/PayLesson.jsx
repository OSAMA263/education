import Modal from "@/components/Modal";
import { usePayLesson } from "@/hooks/useLessons";
import { Button } from "@chakra-ui/react";
import { FaLock } from "react-icons/fa";

export default function PayLesson({ lessonId, open, setOpen, children }) {
  const { mutate, isPending } = usePayLesson();

  const PayBtnhandler = () => {
    mutate(lessonId, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <>
      {children}
      <Modal
        title={"Want to buy this lesson?"}
        openModalContent={"Buy lesson"}
        openBtnClasses="!rounded-xl"
        btnVariant="solid"
        openBtnIcon={<FaLock />}
        {...{ open, setOpen }}
      >
        <div className="flex items-center gap-4">
          <Button variant={"surface"} loading={isPending} onClick={PayBtnhandler}>
            Purchase lessons
          </Button>
          <Button variant={"outline"} colorPalette={"red"} onClick={() => setOpen(false)}>
            Cancle
          </Button>
        </div>
      </Modal>
    </>
  );
}
