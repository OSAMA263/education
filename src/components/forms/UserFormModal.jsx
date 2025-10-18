import { useState } from "react";
import AuthForm from "./AuthForm";
import Modal from "../Modal";
import { useAuthData } from "@/routes/AuthProvider";
import { toast } from "@/utils/utils";

export default function UserFormModal(props) {
  const {
    authFormProps,
    mutation,
    children,
    toggleOriginalForm = true,
    ...rest
  } = props;
  const { profile } = useAuthData();
  const [open, setOpen] = useState(false);

  const onSubmit = (data) => {
    const updatePass = { email: profile?.email, newPass: data };

    if (
      (profile?.email === "osamaelseify11@gmail.com" ||
        profile?.email === "admin@gmail.com") &&
      data.newPassword
    )
      return toast("error", "e", "Cant change main acc password");
    mutation(data.newPassword ? updatePass : data, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <Modal {...{ open, setOpen, ...rest }}>
      {/* form inputs*/}
      {toggleOriginalForm && (
        <AuthForm {...authFormProps} onSubmit={onSubmit} />
      )}
      {/* more or content in the modal */}
      {children}
    </Modal>
  );
}
