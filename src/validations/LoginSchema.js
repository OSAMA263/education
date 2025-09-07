import { emailSchema, passwordSchema } from "@/utils/validations";
import { z } from "zod";

export const LoginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});
