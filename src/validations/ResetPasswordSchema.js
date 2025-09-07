import {
  emailSchema,
  passwordConfirmation,
  passwordSchema,
} from "@/utils/validations";
import { z } from "zod";

export const resetPasswordSchema = passwordConfirmation(
  z.object({
    email: emailSchema,
    newPassword: passwordSchema,
    cpassword: passwordSchema,
    otp: z.string().length(6, "OTP must be 6 characters long"),
  })
);
