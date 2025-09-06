import AuthForm from "@/components/forms/AuthForm";
import { useState } from "react";

export default function ForgotPassword() {
  const [resetpassword, setResetPassword] = useState(true);

  return (
    <>
      {resetpassword ? <ResetPassword /> : <OTP />} <h1>got opt?</h1>
    </>
  );
}

const ResetPassword = () => {
  return <AuthForm />;
};

const OTP = () => {
  return <AuthForm />;
};
