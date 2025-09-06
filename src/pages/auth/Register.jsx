import AuthForm from "@/components/forms/AuthForm";
import { registration_inputs } from "./inputs_data";
import { registerSchema } from "@/validations/RegisterSchema";
import { useSignUp } from "@/hooks/useAuth";

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
    </>
  );
}
