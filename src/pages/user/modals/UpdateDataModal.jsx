import { useProfile } from "@/routes/AuthProvider";
import { updateUserInputs } from "../inputs_data_types";
import { dataDefaultVals } from "@/utils/utils";
import {
  updateAdminSchema,
  updateUserSchema,
} from "@/validations/UpdateUserSchema";
import { useUpdateUser } from "@/hooks/useUser";
import UserFormModal from "@/components/forms/UserFormModal";

export default function UpdateDataModal() {
  const { userData } = useProfile();
  const { mutate, isPending } = useUpdateUser(userData._id);

  // filter out classLevel if user is admin
  const neededInputs = () => {
    const filteredInputs = updateUserInputs.filter(
      (inp) => !(userData?.role === "admin" && inp.name === "classLevel")
    );

    return dataDefaultVals(filteredInputs, userData);
  };

  const authFormProps = {
    validationSchema:
      userData.role === "admin" ? updateAdminSchema : updateUserSchema,
    formFields: neededInputs(),
    submitText: "Update data",
    loading: isPending,
  };

  return (
    <UserFormModal
      {...{ authFormProps }}
      mutation={mutate}
      openModalContent={"Edit data"}
      title={"Update Account Data"}
    />
  );
}
