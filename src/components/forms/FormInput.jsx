import { Field, Group, IconButton, Input } from "@chakra-ui/react";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function FormInput(props) {
  const { inpProps, register, errors } = props;

  const [showPassword, setShowPassword] = useState("password");

  const handleShowPassword = () => {
    setShowPassword((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <Field.Root className="!relative" invalid={errors[inpProps.name]}>
      <Field.Label>{inpProps.label}</Field.Label>
      <Group attached className="w-full">
        <Input
          {...inpProps}
          {...register(inpProps.name)}
          type={inpProps.type === "password" ? showPassword : inpProps.type}
        />
        {/* show & hide password */}
        {inpProps.type === "password" && (
          <IconButton onClick={handleShowPassword}>
            {showPassword === "password" ? (
              <AiFillEyeInvisible />
            ) : (
              <AiFillEye />
            )}
          </IconButton>
        )}
      </Group>
      <Field.ErrorText>{errors[inpProps.name]?.message}</Field.ErrorText>
    </Field.Root>
  );
}
