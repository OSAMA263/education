import { Button } from "@chakra-ui/react";
import SectionHeader from "../shared/SectionHeader";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormSelect from "./FormSelect";
import FormInput from "./FormInput";

export default function AuthForm({
  formFields,
  onSubmit,
  title,
  submitText = "submit",
  validationSchema,
  loading = false,
}) {
  // add default values if the input have the prop values
  const defaultValues = Object.fromEntries(
    formFields.map((field) =>
      field.values ? [field.name, field.values] : [field.name, ""]
    )
  );

  // form hook props
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues,
  });

  return (
    <>
      {title && <SectionHeader title={title} />}

      {/* ----------the form inputs -------- */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full space-y-6"
      >
        {formFields?.map((inpProps, i) =>
          inpProps.type === "select" ? (
            <FormSelect key={i} {...{ errors, inpProps, register }} />
          ) : (
            <FormInput key={i} {...{ errors, inpProps, register }} />
          )
        )}
        <Button
          loading={loading}
          loadingText="Loading..."
          className="!w-full"
          rounded={"lg"}
          type="submit"
        >
          {submitText}
        </Button>
      </form>
    </>
  );
}
