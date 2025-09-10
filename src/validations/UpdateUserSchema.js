import { emailSchema, phoneNumberSchema } from "@/utils/validations";
import { z } from "zod";

export const updateUserSchema = z.object({
  fullName: z.string().min(1, "Name is required"),
  email: emailSchema,
  phoneNumber: phoneNumberSchema,
  classLevel: z.string().min(1, "Class level is required"),
});

export const updateAdminSchema = updateUserSchema.omit({
  classLevel: true,
});
