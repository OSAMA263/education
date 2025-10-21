import Modal from "../Modal";
import DashboardForm from "../forms/DashboardForm";
import { CreateAdmin } from "@/pages/auth/Register";

export default function TableModal({ open, setOpen, dataType }) {
  return (
    <Modal
      size={dataType == "exams" ? "xl" : "lg"}
      noOpenBtn
      {...{ open, setOpen }}
    >
      {dataType == "lessons" || dataType == "exams" ? (
        <DashboardForm {...{ dataType, setOpen }} />
      ) : (
        <CreateAdmin setOpen={setOpen} />
      )}
    </Modal>
  );
}
