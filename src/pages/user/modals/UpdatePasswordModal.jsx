import { updatePasswordInputs } from "../inputs_data_types";
import { z } from "zod";
import { passwordConfirmation, passwordSchema } from "@/utils/validations";
import { useUpdatePassword } from "@/hooks/useUser";
import { useState } from "react";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import { Button } from "@chakra-ui/react";
import UserFormModal from "@/components/forms/UserFormModal";

export default function UpdatePasswordModal() {
  const { mutate, isPending } = useUpdatePassword();

  // toggle between updatePass and forgorPass comps
  const [toggleOriginalForm, setToggleOriginalForm] = useState(true);

  const updatePasswordSchema = passwordConfirmation(
    z.object({
      oldPassword: passwordSchema,
      newPassword: passwordSchema,
      cpassword: passwordSchema,
    })
  );

  // auth form inputs and otther props and shit
  const authFormProps = {
    validationSchema: updatePasswordSchema,
    formFields: updatePasswordInputs,
    submitText: "Update password",
    loading: isPending,
  };

  return (
    <UserFormModal
      {...{ authFormProps, toggleOriginalForm }}
      mutation={mutate}
      openModalContent={"Change password"}
      title={toggleOriginalForm && "Change Current Password"}
    >
      {/* render the forgor comp when we hide the update form */}
      {!toggleOriginalForm && <ForgotPassword loggedIn={true} />}

      {/* toggle between updatePass and forgorPass comps  */}
      <div className="flex flex-col gap-2 items-center mt-4 [&>div]:flex [&>div]:items-center">
        {toggleOriginalForm ? (
          <div>
            <h1>forgot your password?</h1>
            <Button
              p={0}
              ml={1}
              className="!underline"
              variant={"plain"}
              onClick={() => setToggleOriginalForm((prev) => !prev)}
            >
              reset it
            </Button>
          </div>
        ) : (
          <div>
            <h1>You remember your old password?</h1>
            <Button
              p={0}
              ml={1}
              className="!underline"
              variant={"plain"}
              onClick={() => setToggleOriginalForm((prev) => !prev)}
            >
              update it
            </Button>
          </div>
        )}
      </div>
    </UserFormModal>
  );
}
