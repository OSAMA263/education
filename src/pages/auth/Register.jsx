import AuthForm from "@/components/forms/AuthForm";
import { registration_inputs } from "./inputs_data_type";
import {
  registerSchema,
  registerSchemaNoClassLevel,
} from "@/validations/RegisterSchema";
import { useSignUp } from "@/hooks/useAuth";
import { Link } from "react-router-dom";
import SEOWrapper from "@/components/layout/SEOWrapper";

export default function Register() {
  const { signUp } = useSignUp();

  const onSubmit = async (formData) => {
    await signUp({ ...formData, role: "student" });
  };

  return (
    <SEOWrapper
      des="Create your account and start learning today with access to interactive lessons and practice exams."
      link="auth/signup"
      title="Singun | Edu"
    >
      <AuthForm
        formFields={registration_inputs}
        title="Create your account"
        submitText="Sign up"
        validationSchema={registerSchema}
        onSubmit={onSubmit}
      />
      <h1>
        Already have an account? <Link to="/auth/login">login</Link>
      </h1>
    </SEOWrapper>
  );
}

export const CreateAdmin = ({ setOpen }) => {
  const { signUp } = useSignUp(setOpen);
  const inputs = registration_inputs.filter((inp) => inp.name !== "classLevel");

  const onSubmit = async (formData) => {
    await signUp({ ...formData, role: "admin" });
  };

  return (
    <AuthForm
      formFields={inputs}
      title="Create Admin Account"
      submitText="Create"
      validationSchema={registerSchemaNoClassLevel}
      onSubmit={onSubmit}
    />
  );
};
