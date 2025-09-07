import { z } from "zod";

// specific validaiton err messages
const messages = {
  password:
    "Password must be at least 8 characters and include a number and a special character.",
  phonenumber:
    "Phone number must start with 010, 011, 012, or 015 and be 11 digits long.",
};

// specific validaiton settings
const validation = {
  emailSchema: z
    .string()
    .email("Invalid email address")
    .min(1, "Email is required"),
  passwordSchema: z
    .string()
    .nonempty("Password is required")
    .min(8, messages.password)
    .regex(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      messages.password
    ),
  phoneNumberSchema: z
    .string()
    .nonempty("Phone number is required")
    .regex(/^01[0-2,5]{1}[0-9]{8}$/, messages.phonenumber),
};

// helper to add password confirmation to any schema
export const passwordConfirmation = (schema) => {
  return schema.refine(
    (data) =>
      (data.password && data.password === data.cpassword) ||
      (data.newPassword && data.newPassword === data.cpassword),
    {
      message: "Passwords do not match",
      path: ["cpassword"],
    }
  );
};

export const { emailSchema, passwordSchema, phoneNumberSchema } = validation;
