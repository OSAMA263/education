import AuthForm from "@/components/forms/AuthForm";
import { registration_inputs } from "./inputs_data_type";
import { registerSchema } from "@/validations/RegisterSchema";
import { useSignUp } from "@/hooks/useAuth";
import { Link } from "react-router-dom";

export default function Register() {
  const { signUp } = useSignUp();

  const onSubmit = async (fromData) => {
    await signUp(fromData);
  };

  return (
    <>
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
    </>
  );
}
