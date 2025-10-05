import AuthForm from "@/components/forms/AuthForm";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  forgot_password_inputs,
  reset_password_inputs,
} from "./inputs_data_type";
import { emailSchema } from "@/utils/validations";
import { z } from "zod";
import { resetPasswordSchema } from "@/validations/ResetPasswordSchema";
import {
  useResetPassword,
  useSendOTP,
  useUpdatePassword,
} from "@/hooks/useUser";
import { resetPassowrd } from "@/api/UserAPI";

export default function ForgotPassword({ loggedIn }) {
  const [resetpassword, setResetPassword] = useState(false);

  return (
    <>
      {resetpassword ? (
        <ResetPassword setResetPassword={setResetPassword} />
      ) : (
        <ForgotPasswordForm setResetPassword={setResetPassword} />
      )}

      {/* form switch toggler */}
      <div className="flex flex-col items-center gap-2">
        <Link onClick={() => setResetPassword((prev) => !prev)}>
          {resetpassword ? "Get a new OTP code" : "Already got the OTP code?"}
        </Link>
        {/* hide it if we trying to render the comp when the user is loggedIn */}
        {!loggedIn && (
          <h1>
            Already have an account? <Link to="/auth/login">login</Link>
          </h1>
        )}
      </div>
    </>
  );
}

// forgot password email input
const ForgotPasswordForm = ({ setResetPassword }) => {
  const { isPending, mutate } = useSendOTP();

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
const ResetPassword = ({ setResetPassword }) => {
  const { isPending, mutate } = useResetPassword();
  const updateMutation = useUpdatePassword();

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: ({ newPassword, email }) => {
        updateMutation.mutate({ email, newPass: newPassword });
        setResetPassword((prev) => !prev);
      },
    });
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
