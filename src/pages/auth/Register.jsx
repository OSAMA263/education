import AuthForm from "@/components/forms/AuthForm";
import { registration_inputs } from "./inputs_data_type";
import { registerSchema } from "@/validations/RegisterSchema";
import { useSignUp } from "@/hooks/useAuth";
import { Link } from "react-router-dom";

export default function Register() {
  const { isPending, mutate } = useSignUp();

  const onSubmit = (formData) => {
    mutate(formData);
  };

  return (
    <>
      <AuthForm
        formFields={registration_inputs}
        title="Create your account"
        submitText="Sign up"
        validationSchema={registerSchema}
        onSubmit={onSubmit}
        loading={isPending}
      />
      <h1>
        Already have an account? <Link to="/auth/login">login</Link>
      </h1>
    </>
  );
}
