import { passwordMesg, phoneMesg } from "@/utils/utils";
import { z } from "zod";

export const registerSchema = z
  .object({
    fullName: z.string().min(1, "Name is required"),
    email: z
      .string()
      .nonempty("Email is required")
      .email("Invalid email address"),
    password: z
      .string()
      .nonempty("Password required")
      .min(8, passwordMesg)
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        passwordMesg
      ),
    cpassword: z.string().nonempty("Password required"),
    phoneNumber: z
      .string()
      .nonempty("Phone number is required")
      .regex(/^01[0-2,5]{1}[0-9]{8}$/, phoneMesg),
    classLevel: z.string().min(1, "Class level is required"),
  })
  .refine((data) => data.password === data.cpassword, {
    message: "Password doesnt match",
    path: ["cpassword"],
  });

// create admin without classlevel input
export const registerSchemaNoClassLevel = registerSchema
  .safeExtend({
    classLevel: z.optional(),
  })
  .refine((data) => data.password === data.cpassword, {
    message: "Password doesnt match",
    path: ["cpassword"],
  });
