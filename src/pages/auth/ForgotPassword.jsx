import AuthForm from "@/components/forms/AuthForm";
import { useState } from "react";
import { Link } from "react-router-dom";
import { forgot_password_inputs, reset_password_inputs } from "./inputs_data";
import { emailSchema } from "@/utils/validations";
import { z } from "zod";
import { resetPasswordSchema } from "@/validations/ResetPasswordSchema";
import { useForgotPassword, useResetPassword } from "@/hooks/useUser";

export default function ForgotPassword() {
  const [resetpassword, setResetPassword] = useState(false);

  return (
    <>
      {resetpassword ? (
        <ResetPassword />
      ) : (
        <ForgotPasswordForm setResetPassword={setResetPassword} />
      )}

      {/* form switch toggler */}
      <Link onClick={() => setResetPassword((prev) => !prev)}>
        {resetpassword ? "Already got the OTP code?" : "Get a new OTP code"}
      </Link>
    </>
  );
}

// forgot password email input
const ForgotPasswordForm = ({ setResetPassword }) => {
  const { isPending, mutate, } = useForgotPassword();

  const onSubmit = (data) => {
  mutate(data, {
    onSuccess: () => {
      setResetPassword(true);
    },
  });
};

  const emailValidation = z.object({
    email: emailSchema,
  });

  return (
    <AuthForm
      formFields={forgot_password_inputs}
      loading={isPending}
      validationSchema={emailValidation}
      onSubmit={onSubmit}
      title="Forgot password"
      submitText="Send reset OTP code"
    />
  );
};

// reseting the password form
const ResetPassword = () => {
  const { isPending, mutate } = useResetPassword();

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <AuthForm
      formFields={reset_password_inputs}
      loading={isPending}
      validationSchema={resetPasswordSchema}
      onSubmit={onSubmit}
      title="Reset your account password"
      submitText="Reset password"
    />
  );
};
