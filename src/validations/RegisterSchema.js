import {
  emailSchema,
  passwordConfirmation,
  passwordSchema,
  phoneNumberSchema,
} from "@/utils/validations";
import { z } from "zod";

export const registerSchema = passwordConfirmation(
  z.object({
    fullName: z.string().min(1, "Name is required"),
    email: emailSchema,
    password: passwordSchema,
    cpassword: passwordSchema,
    phoneNumber: phoneNumberSchema,
    classLevel: z.string().min(1, "Class level is required"),
  })
);

// create admin without classlevel input
export const registerSchemaNoClassLevel = passwordConfirmation(
  registerSchema.omit({
    classLevel: true,
  })
);
