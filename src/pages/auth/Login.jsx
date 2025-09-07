import AuthForm from "@/components/forms/AuthForm";
import { login_inputs } from "./inputs_data";
import { Link } from "react-router-dom";
import { LoginSchema } from "@/validations/LoginSchema";
import { useLogin } from "@/hooks/useAuth";
import { useState } from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import { Tabs } from "@chakra-ui/react";
import CustomAlert from "@/components/CustomAlert";

export default function Login() {
  const { isPending, mutate } = useLogin();
  const [role, setRole] = useState("student");

  const onSubmit = (formData) => {
    mutate(formData);
  };

  return (
    <>
      {/* note for the pr-registered accounts */}
      <CustomAlert
        status="warning"
        title={"hello there :)"}
        des={
          "These are pre-registered accounts, so you don’t need to go through the hassle of verifying, but you’re free to create your own if you’d like."
        }
      />
      {<SectionHeader title="Sign Into your account" />}
      {/* swutch to admin || student inputs for the pre register vals */}
      <Tabs.Root
        variant="plain"
        value={role}
        onValueChange={(e) => setRole(e.value)}
      >
        <Tabs.List className="!border-0">
          <Tabs.Trigger value="student">student</Tabs.Trigger>
          <Tabs.Trigger value="admin">admin</Tabs.Trigger>
          <Tabs.Indicator className="!bg-bg-gray" rounded="md" />
        </Tabs.List>
      </Tabs.Root>
      {/* the form */}
      <AuthForm
        key={role}
        formFields={login_inputs}
        validationSchema={LoginSchema}
        submitText="Login"
        loading={isPending}
        {...{ role, onSubmit }}
      />

      <div className="text-center space-y-2">
        <h1>
          Forgot your password?{" "}
          <Link to="/auth/forgot-password">Reset password</Link>
        </h1>
        <h1>
          Don't have an account?{" "}
          <Link to="/auth/signup">Register a new account</Link>
        </h1>
      </div>
    </>
  );
}
