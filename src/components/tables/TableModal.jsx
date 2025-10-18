import Modal from "../Modal";
import DashboardForm from "../forms/DashboardForm";
import { CreateAdmin } from "@/pages/auth/Register";

export default function TableModal({ open, setOpen, dataType }) {
  return (
    <Modal noOpenBtn {...{ open, setOpen }}>
      {dataType == "lessons" || dataType == "exams" ? (
        <DashboardForm dataType={dataType} />
      ) : (
        <CreateAdmin />
      )}
    </Modal>
  );
}
