import { Button } from "@chakra-ui/react";
import SectionHeader from "../shared/SectionHeader";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormSelect from "./FormSelect";
import FormInput from "./FormInput";
import { toast } from "@/utils/utils";
import DatePick from "../DatePick";

export default function AuthForm(props) {
  const {
    formFields,
    onSubmit,
    title,
    submitText = "submit",
    validationSchema,
    loading,
    children,
  } = props;

  const defaultValues = Object.fromEntries(
    formFields.map((field) =>
      field.values ? [field.name, field.values] : [field.name, ""]
    )
  );

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues,
  });

  return (
    <>
      {title && <SectionHeader title={title} />}

      <form
        onSubmit={handleSubmit(async (data) => {
          try {
            await onSubmit(data);
          } catch (err) {
            toast("error", err);
          }
        })}
        className="w-full space-y-6"
      >
        {formFields?.map((inpProps, i) =>
          inpProps.type === "select" ? (
            <FormSelect key={i} {...{ errors, inpProps, register }} />
          ) : inpProps.type === "date" ? (
            <Controller
              key={i}
              name={inpProps.name}
              control={control}
              render={({ field }) => (
                <DatePick {...{ field, inpProps, errors }} />
              )}
            />
          ) : (
            <FormInput key={i} {...{ errors, inpProps, register }} />
          )
        )}
        {/* special data like(questions? lol) */}
        {children}
        <Button
          loading={loading || isSubmitting}
          loadingText="Loading..."
          className="!w-full"
          rounded="lg"
          type="submit"
        >
          {submitText}
        </Button>
      </form>
    </>
  );
}
