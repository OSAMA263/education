import { Field } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePick({ field, inpProps, errors }) {
  return (
    <Field.Root className="!relative" invalid={errors[inpProps.name]}>
      <Field.Label className="md:!text-lg">{inpProps.label}</Field.Label>
      <div className="[&>.react-datepicker-wrapper]:!w-full w-full">
        <DatePicker
          selected={field.value}
          onChange={field.onChange}
          showTimeSelect
          dateFormat="Pp"
          className="border w-full border-secondary/30 p-2 rounded"
        />
      </div>
      <Field.ErrorText>{errors[inpProps.name]?.message}</Field.ErrorText>
    </Field.Root>
  );
}
