import { useContext } from "react";
import Modal from "../Modal";
import { DashboardContext } from "@/routes/DashboardProvider";
import AuthForm from "../forms/AuthForm";
import { useSignUp } from "@/hooks/useAuth";
import { registerSchemaNoClassLevel } from "@/validations/RegisterSchema";
import { registration_inputs } from "@/pages/auth/inputs_data_type";

export default function TableModal({ open, setOpen, userDataTable }) {
  const { selectedItem, setSelectedItem } = useContext(DashboardContext);
  // console.log()

  return (
    <Modal noOpenBtn {...{ open, setOpen }}>
      {userDataTable ? <CreateAdmin /> : selectedItem?.title}
    </Modal>
  );
}
// {/* display inputs with inputs_data
// lessons inputs or exam inputs cus we gonna mhave something like questions */}

const CreateAdmin = () => {
  const { signUp } = useSignUp();
  const inputs = registration_inputs.filter((inp) => inp.name !== "classLevel");

  const onSubmit = async (fromData) => {
    await signUp({ ...fromData, role: "admin" });
  };

  return (
    <AuthForm
      formFields={inputs}
      title="Create your account"
      submitText="Sign up"
      validationSchema={registerSchemaNoClassLevel}
      onSubmit={onSubmit}
    />
  );
};
