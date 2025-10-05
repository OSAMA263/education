import { useState } from "react";
import AuthForm from "./AuthForm";
import Modal from "../Modal";
import { useAuthData } from "@/routes/AuthProvider";

export default function UserFormModal({
  authFormProps,
  mutation,
  openModalContent,
  children,
  toggleOriginalForm = true,
  title,
}) {
  const { profile } = useAuthData();

  const [open, setOpen] = useState(false);

  const onSubmit = (data) => {
    mutation(
      { email: profile?.email, newPass: data },
      {
        onSuccess: () => {
          setOpen(false);
        },
      }
    );
  };

  return (
    <Modal {...{ open, setOpen, title, openModalContent }}>
      {/* form inputs*/}
      {toggleOriginalForm && (
        <AuthForm {...authFormProps} onSubmit={onSubmit} />
      )}
      {/* more or content in the modal */}
      {children}
    </Modal>
  );
}
